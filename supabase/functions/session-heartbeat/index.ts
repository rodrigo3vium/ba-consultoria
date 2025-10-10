import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

function parseAllowedHosts(): string[] {
  const raw = Deno.env.get("ALLOWED_ORIGINS") || "";
  return raw.split(",").map(s => s.trim()).filter(Boolean).map(o => {
    try { return new URL(o).host } catch { return o }
  });
}

function isAllowedOrigin(origin: string | null, allowedHosts: string[]): boolean {
  if (!origin) return false;
  try { return allowedHosts.includes(new URL(origin).host) } catch { return false }
}

serve(async (req) => {
  const allowedHosts = parseAllowedHosts();
  const origin = req.headers.get("Origin");
  const allow = isAllowedOrigin(origin, allowedHosts);
  const baseHeaders = {
    "Access-Control-Allow-Origin": allow ? origin! : "",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Vary": "Origin",
    "Content-Type": "application/json"
  };

  if (req.method === "OPTIONS") return new Response(null, { headers: baseHeaders });
  if (!allow) return new Response(JSON.stringify({ error: "Unauthorized origin" }), { status: 403, headers: baseHeaders });

  try {
    const { session_id, anonymous_id } = await req.json();
    if (!session_id || !anonymous_id) {
      return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400, headers: baseHeaders });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // Atualiza last_event_at e duration derivada (server-side, sem confiar no client)
    const { data: sess } = await supabase
      .from("sessions")
      .select("first_event_at")
      .eq("id", session_id)
      .eq("anonymous_id", anonymous_id)
      .maybeSingle();

    if (sess?.first_event_at) {
      const durationSec = Math.max(0,
        Math.floor((Date.now() - new Date(sess.first_event_at).getTime()) / 1000)
      );

      await supabase
        .from("sessions")
        .update({ last_event_at: new Date().toISOString(), duration_sec: durationSec })
        .eq("id", session_id)
        .eq("anonymous_id", anonymous_id);
    }

    return new Response(JSON.stringify({ ok: true }), { headers: baseHeaders });
  } catch (e) {
    console.error("heartbeat error:", e);
    return new Response(JSON.stringify({ error: "Internal error" }), { status: 500, headers: baseHeaders });
  }
});
