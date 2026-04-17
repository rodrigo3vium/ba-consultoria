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
  if (allowedHosts.length === 0) return true; // allow all when ALLOWED_ORIGINS not configured
  if (!origin) return false;
  try {
    const host = new URL(origin).host;
    return allowedHosts.includes(host);
  } catch {
    return false;
  }
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
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, // bypass RLS
      { db: { schema: 'ba_site' } }
    );

    // Inserção do evento (NÃO confie no timestamp do client para created_at)
    const insertPayload: Json = {
      event_name,
      anonymous_id,
      session_id,
      lead_id: null, // lead linkage moved to BA Hub
      page_url: page_url || null,
      referrer: referrer || null,
      properties: {
        ...(properties || {}),
        client_event_time: timestamp || null
      },
      score_points: 0,
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

    console.log(`Event tracked: ${event_name} for ${anonymous_id}`);

    return new Response(JSON.stringify({ success: true, session_id }), { headers: baseHeaders });

  } catch (e) {
    console.error("track-event error:", e);
    return new Response(JSON.stringify({ error: "Internal error" }), { status: 500, headers: { "Content-Type": "application/json" } });
  }
});
