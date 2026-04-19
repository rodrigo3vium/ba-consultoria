// deno-lint-ignore-file no-explicit-any
import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

function parseAllowedHosts(): string[] {
  const raw = Deno.env.get("ALLOWED_ORIGINS") || "";
  return raw.split(",").map(s => s.trim()).filter(Boolean).map(o => {
    try { return new URL(o).host; } catch { return o; }
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

function normalizePhone(raw: string | undefined | null): string | null {
  if (!raw) return null;
  const digits = raw.replace(/\D/g, "");
  return digits.length >= 8 ? digits : null;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

serve(async (req) => {
  const allowedHosts = parseAllowedHosts();
  const origin = req.headers.get("Origin");
  const allow = isAllowedOrigin(origin, allowedHosts);
  const baseHeaders = {
    "Access-Control-Allow-Origin": allow ? origin! : "",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Vary": "Origin",
    "Content-Type": "application/json",
  };

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: baseHeaders });
  }

  try {
    if (!allow) {
      console.warn(`Blocked request from unauthorized origin: ${origin}`);
      return new Response(JSON.stringify({ error: "Unauthorized origin" }), { status: 403, headers: baseHeaders });
    }

    const body = await req.json();
    const { name, email, whatsapp, source, utm, metadata } = body;

    if (!email || !isValidEmail(email)) {
      return new Response(JSON.stringify({ error: "Valid email is required" }), { status: 400, headers: baseHeaders });
    }

    const tenantId = Deno.env.get("BA_HUB_TENANT_ID");
    if (!tenantId) {
      console.error("BA_HUB_TENANT_ID env var not set");
      return new Response(JSON.stringify({ error: "Server misconfiguration" }), { status: 500, headers: baseHeaders });
    }

    const admin = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
      { db: { schema: "public" }, auth: { persistSession: false } }
    );

    const row: Record<string, any> = {
      tenant_id: tenantId,
      email: email.toLowerCase().trim(),
      origin: source || "site",
      type: "lead",
      extra: {
        ...(utm ? { utm } : {}),
        ...(metadata ? { metadata } : {}),
        captured_at: new Date().toISOString(),
      },
    };

    if (name) row.name = name.trim();
    const phone = normalizePhone(whatsapp);
    if (phone) row.phone = phone;

    const emailLower = row.email as string;

    // Check for existing contact (case-insensitive email match)
    const { data: existing } = await admin
      .from("contacts")
      .select("id, extra")
      .eq("tenant_id", tenantId)
      .eq("email", emailLower)
      .maybeSingle();

    let contactId: string;

    if (existing) {
      // Merge extra fields, preserving historical data
      const mergedExtra = { ...existing.extra, ...row.extra };
      const { data: updated, error: updateErr } = await admin
        .from("contacts")
        .update({ ...row, extra: mergedExtra, updated_at: new Date().toISOString() })
        .eq("id", existing.id)
        .select("id")
        .single();

      if (updateErr) { console.error("update error:", updateErr); throw updateErr; }
      contactId = updated.id;
    } else {
      const { data: inserted, error: insertErr } = await admin
        .from("contacts")
        .insert(row)
        .select("id")
        .single();

      if (insertErr) { console.error("insert error:", insertErr); throw insertErr; }
      contactId = inserted.id;
    }

    console.log(`Contact ${existing ? "updated" : "created"}: ${contactId} (${email}) from ${source || "site"}`);

    // Bridge: LPs de produto viram opportunity no funil PB
    const OPP_ALLOWED_SOURCES = new Set([
      "ebook-20-skills",
      "ia-para-negocios",
      "ia-do-zero",
      "o-caminho",
    ]);
    const FUNNEL_PB_ID = "2ed6923e-5ad3-4b3b-9349-3495133812cf";
    const ACTIVE_STAGES = new Set([
      "lead", "comprou_front", "mql", "reuniao_agendada", "sal", "negociacao",
    ]);

    if (source && OPP_ALLOWED_SOURCES.has(source)) {
      try {
        const { data: existingOpp } = await admin
          .from("opportunities")
          .select("id, stage")
          .eq("tenant_id", tenantId)
          .eq("contact_id", contactId)
          .eq("funnel_id", FUNNEL_PB_ID)
          .order("created_at", { ascending: false })
          .limit(1)
          .maybeSingle();

        let oppAction: "created" | "reactivated" | "skipped_active";
        if (existingOpp && ACTIVE_STAGES.has(existingOpp.stage)) {
          await admin
            .from("opportunities")
            .update({ updated_at: new Date().toISOString() })
            .eq("id", existingOpp.id);
          oppAction = "skipped_active";
        } else {
          const { error: oppErr } = await admin
            .from("opportunities")
            .insert({
              tenant_id: tenantId,
              contact_id: contactId,
              funnel_id: FUNNEL_PB_ID,
              stage: "lead",
            });
          if (oppErr) console.error("opp insert error:", oppErr);
          oppAction = existingOpp ? "reactivated" : "created";
        }

        await admin.from("lead_interactions").insert({
          tenant_id: tenantId,
          contact_id: contactId,
          type: "form_submitted",
          source: "site",
          title: `Formulário submetido: ${source}`,
          description: `Opportunity ${oppAction}`,
          metadata: {
            source,
            opp_action: oppAction,
            ...(utm ? { utm } : {}),
            ...(metadata ? { form_metadata: metadata } : {}),
          },
        });

        if (metadata && typeof metadata === "object") {
          const profile: Record<string, any> = {};
          if (metadata.faturamento) profile.monthly_revenue = String(metadata.faturamento);
          if (metadata.cargo) profile.occupation = String(metadata.cargo);
          if (metadata.segmento) profile.segment = String(metadata.segmento);
          if (Object.keys(profile).length > 0) {
            const { error: profErr } = await admin
              .from("lead_profiles")
              .upsert(
                { contact_id: contactId, ...profile },
                { onConflict: "contact_id" }
              );
            if (profErr) console.error("lead_profiles upsert error:", profErr);
          }
        }

        console.log(`Bridge: opp ${oppAction} for ${emailLower} (${source})`);
      } catch (bridgeErr: any) {
        console.error("bridge error (non-fatal):", bridgeErr);
      }
    }

    return new Response(JSON.stringify({ ok: true, contact_id: contactId }), { headers: baseHeaders });

  } catch (e: any) {
    console.error("submit-contact error:", e);
    return new Response(JSON.stringify({ error: "Internal error" }), { status: 500, headers: { "Content-Type": "application/json" } });
  }
});
