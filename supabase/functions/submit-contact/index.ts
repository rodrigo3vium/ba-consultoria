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

    return new Response(JSON.stringify({ ok: true, contact_id: contactId }), { headers: baseHeaders });

  } catch (e: any) {
    console.error("submit-contact error:", e);
    return new Response(JSON.stringify({ error: "Internal error" }), { status: 500, headers: { "Content-Type": "application/json" } });
  }
});
