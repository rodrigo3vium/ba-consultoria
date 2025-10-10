// deno-lint-ignore-file no-explicit-any
import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

type Json = Record<string, any>;

function parseAllowedHosts(): string[] {
  const raw = Deno.env.get("ALLOWED_ORIGINS") || "";
  return raw.split(",").map(s => s.trim()).filter(Boolean).map(o => {
    try { return new URL(o).host } catch { return o }
  });
}

function isAllowedOrigin(origin: string | null, allowedHosts: string[]): boolean {
  if (!origin) return false;
  try {
    const host = new URL(origin).host;
    return allowedHosts.includes(host);
  } catch {
    return false;
  }
}

// Resolve lead_id apenas no servidor (nunca confie no body)
async function resolveLeadIdByAnonymousId(supabase: any, anonymous_id: string): Promise<string | null> {
  const { data, error } = await supabase
    .from("lead_aliases")
    .select("lead_id")
    .eq("anonymous_id", anonymous_id)
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) {
    console.warn("resolveLeadId error:", error.message);
    return null;
  }
  return data?.lead_id ?? null;
}

serve(async (req) => {
  // CORS
  const allowedHosts = parseAllowedHosts();
  const origin = req.headers.get("Origin");
  const allow = isAllowedOrigin(origin, allowedHosts);
  const baseHeaders = {
    "Access-Control-Allow-Origin": allow ? origin! : "",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Vary": "Origin",
    "Content-Type": "application/json"
  };

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: baseHeaders });
  }

  try {
    if (!allow) {
      console.warn(`Blocked request from unauthorized origin: ${origin}`);
      return new Response(JSON.stringify({ error: "Unauthorized origin" }), { status: 403, headers: baseHeaders });
    }

    const { event_name, anonymous_id, session_id, page_url, referrer, timestamp, idempotency_key, properties } = await req.json();

    // Validação mínima
    if (!event_name || !anonymous_id || !session_id) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400, headers: baseHeaders });
    }

    // Client pode não enviar idempotency_key — calcule fallback (menos forte, mas útil)
    const idem = idempotency_key ??
      await crypto.subtle.digest("SHA-256", new TextEncoder().encode(`${anonymous_id}|${session_id}|${event_name}|${page_url || ""}|${timestamp || ""}`))
        .then(buf => Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2,"0")).join(""));

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")! // bypass RLS
    );

    // Resolve lead_id via alias (NÃO confie no body)
    const lead_id = await resolveLeadIdByAnonymousId(supabase, anonymous_id);

    // Busca regra de score
    const { data: rule, error: ruleErr } = await supabase
      .from("scoring_rules")
      .select("points, daily_cap, active")
      .eq("event_name", event_name)
      .maybeSingle();

    if (ruleErr) {
      console.warn("scoring_rules error:", ruleErr.message);
    }

    let score_points = (rule?.active && rule?.points) ? rule.points : 0;

    // Cap diário via RPC com timezone correto
    if (rule?.daily_cap && score_points > 0) {
      const { data: countToday, error: capErr } = await supabase
        .rpc("count_events_today", { p_lead_id: lead_id, p_anonymous_id: anonymous_id, p_event_name: event_name });

      if (capErr) {
        console.warn("count_events_today error:", capErr.message);
      } else if ((countToday ?? 0) >= rule.daily_cap) {
        console.log(`Daily cap reached for ${event_name}: ${countToday}/${rule.daily_cap}`);
        score_points = 0;
      }
    }

    // Inserção do evento (NÃO confie no timestamp do client para created_at)
    const insertPayload: Json = {
      event_name,
      anonymous_id,
      session_id,
      lead_id, // pode ser null
      page_url: page_url || null,
      referrer: referrer || null,
      properties: {
        ...(properties || {}),
        // registra horário do client como metadado apenas
        client_event_time: timestamp || null
      },
      score_points,
      idempotency_key: idem
    };

    const { error: insErr } = await supabase.from("events").insert(insertPayload);

    if (insErr) {
      // Violação de unique = evento duplicado, ignora silenciosamente
      if (insErr.code === "23505") {
        console.log(`Duplicate event ignored: ${idem}`);
        return new Response(JSON.stringify({ success: true, duplicate: true }), { headers: baseHeaders });
      }
      throw insErr;
    }

    // Atualiza score do lead (se identificado e ganhou pontos)
    if (lead_id && score_points > 0) {
      // incremento simples; V2: mover para job/trigger com decay
      const { data: lead } = await supabase.from("leads").select("score").eq("id", lead_id).maybeSingle();
      const newScore = (lead?.score || 0) + score_points;

      const lastTouch = (properties?.utm_source)
        ? {
            last_touch_source: properties.utm_source,
            last_touch_medium: properties.utm_medium ?? null,
            last_touch_campaign: properties.utm_campaign ?? null
          }
        : {};

      await supabase
        .from("leads")
        .update({ score: newScore, score_updated_at: new Date().toISOString(), last_active_at: new Date().toISOString(), ...lastTouch })
        .eq("id", lead_id);
    }

    // Atualiza sessão via RPC (não sobrescreve first_event_at)
    await supabase.rpc("upsert_session", {
      p_session_id: session_id,
      p_anonymous_id: anonymous_id,
      p_lead_id: lead_id,
      p_event_time: new Date().toISOString(),
      p_landing_page: properties?.path ?? page_url ?? null,
      p_utm_source: properties?.utm_source ?? null,
      p_utm_medium: properties?.utm_medium ?? null,
      p_utm_campaign: properties?.utm_campaign ?? null,
      p_referrer: referrer ?? null,
      p_device: properties?.user_agent ?? null
    });

    console.log(`Event tracked: ${event_name} (${score_points} pts) for ${lead_id || anonymous_id}`);

    return new Response(JSON.stringify({ success: true, score_points, session_id }), { headers: baseHeaders });

  } catch (e) {
    console.error("track-event error:", e);
    return new Response(JSON.stringify({ error: "Internal error" }), { status: 500, headers: { "Content-Type": "application/json" } });
  }
});
