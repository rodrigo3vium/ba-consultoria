// deno-lint-ignore-file no-explicit-any
import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

type EbookSlug = "20-skills-negocios";

const EBOOKS: Record<EbookSlug, { subject: string; link: string; title: string }> = {
  "20-skills-negocios": {
    subject: "Seu ebook chegou: 20 Skills de IA Para Negócios 📘",
    link: "https://treevium.notion.site/20-skills-para-neg-cios-344fc75e990e80178309ef115f65912e",
    title: "20 Skills de IA Para Negócios",
  },
};

const DEDUP_WINDOW_MIN = 5;
const RATE_LIMIT_WINDOW_MIN = 60;
const RATE_LIMIT_MAX_PER_IP = 20;

function parseAllowedHosts(): string[] {
  const raw = Deno.env.get("ALLOWED_ORIGINS") || "";
  return raw.split(",").map(s => s.trim()).filter(Boolean).map(o => {
    try { return new URL(o).host; } catch { return o; }
  });
}

function isAllowedOrigin(origin: string | null, allowedHosts: string[]): boolean {
  if (allowedHosts.length === 0) return true;
  if (!origin) return false;
  try {
    const host = new URL(origin).host;
    return allowedHosts.includes(host);
  } catch {
    return false;
  }
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function renderEmail(name: string, ebook: { subject: string; link: string; title: string }): string {
  const firstName = escapeHtml(name.split(" ")[0] || "");
  const link = ebook.link;
  const title = escapeHtml(ebook.title);
  return `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${escapeHtml(ebook.subject)}</title>
</head>
<body style="margin:0;padding:0;background:#f4f6fb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#111a2e;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6fb;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(17,26,46,0.08);">
          <tr>
            <td style="padding:28px 32px;border-bottom:1px solid #eef0f6;">
              <div style="font-size:13px;letter-spacing:0.12em;text-transform:uppercase;color:#6b7a90;font-weight:600;">BA Consultoria</div>
            </td>
          </tr>
          <tr>
            <td style="padding:32px;">
              <h1 style="margin:0 0 16px;font-size:24px;line-height:1.3;color:#111a2e;">Olá, ${firstName}! 👋</h1>
              <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#2f3a52;">
                Aqui está o seu ebook <strong>${title}</strong>, como prometido.
              </p>
              <p style="margin:0 0 28px;font-size:16px;line-height:1.6;color:#2f3a52;">
                São 20 aplicações práticas de IA que você pode implementar no seu negócio já nessa semana — sem precisar ser técnico.
              </p>
              <div style="text-align:center;margin:0 0 20px;">
                <a href="${link}" style="display:inline-block;background:#f59e0b;color:#111a2e;font-weight:700;text-decoration:none;padding:14px 28px;border-radius:8px;font-size:16px;">
                  Acessar o ebook →
                </a>
              </div>
              <p style="margin:0 0 32px;font-size:13px;line-height:1.5;color:#6b7a90;text-align:center;">
                Se o botão não funcionar, copie e cole este link no navegador:<br>
                <a href="${link}" style="color:#2563eb;word-break:break-all;">${link}</a>
              </p>
              <div style="border-top:1px solid #eef0f6;padding-top:24px;">
                <p style="margin:0 0 12px;font-size:15px;line-height:1.5;color:#2f3a52;">
                  <strong>Próximo passo:</strong> transforme o conhecimento em resultado.
                </p>
                <p style="margin:0 0 16px;font-size:14px;line-height:1.6;color:#2f3a52;">
                  Abri uma turma da <strong>Imersão em Claude</strong> por <strong>R$ 97</strong> (51% OFF).
                  Te ensino a implementar essas skills na prática, no seu negócio, em 1 tarde.
                </p>
                <p style="margin:0;font-size:14px;">
                  <a href="https://benitesalbuquerque.com.br/educacao/obrigado-imersao-claude" style="color:#2563eb;text-decoration:underline;">
                    Ver detalhes da Imersão em Claude →
                  </a>
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 32px;background:#f9fafc;border-top:1px solid #eef0f6;font-size:12px;line-height:1.5;color:#6b7a90;">
              Rodrigo Benites Albuquerque · BA Consultoria<br>
              <a href="mailto:rodrigo@benitesalbuquerque.com.br" style="color:#6b7a90;">rodrigo@benitesalbuquerque.com.br</a>
              &nbsp;·&nbsp;
              <a href="mailto:rodrigo@benitesalbuquerque.com.br?subject=Descadastrar" style="color:#6b7a90;">Descadastrar</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

serve(async (req) => {
  const allowedHosts = parseAllowedHosts();
  const origin = req.headers.get("Origin");
  const allow = isAllowedOrigin(origin, allowedHosts);
  const baseHeaders = {
    "Access-Control-Allow-Origin": allow ? (origin ?? "*") : "",
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
    const { name, email, ebook_slug, utm } = body ?? {};

    if (!email || !isValidEmail(email)) {
      return new Response(JSON.stringify({ error: "Valid email is required" }), { status: 400, headers: baseHeaders });
    }
    if (!name || typeof name !== "string" || !name.trim()) {
      return new Response(JSON.stringify({ error: "Name is required" }), { status: 400, headers: baseHeaders });
    }
    if (!ebook_slug || !(ebook_slug in EBOOKS)) {
      return new Response(JSON.stringify({ error: "Invalid ebook_slug" }), { status: 400, headers: baseHeaders });
    }

    const apiKey = Deno.env.get("RESEND_API_KEY");
    if (!apiKey) {
      console.error("RESEND_API_KEY env var not set");
      return new Response(JSON.stringify({ error: "Server misconfiguration" }), { status: 500, headers: baseHeaders });
    }

    const admin = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
      { db: { schema: "ba_site" }, auth: { persistSession: false } }
    );

    const emailLower = email.toLowerCase().trim();
    const slug = ebook_slug as EbookSlug;
    const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || null;

    // Dedup: mesmo email + slug nos últimos 5 min
    const dedupSince = new Date(Date.now() - DEDUP_WINDOW_MIN * 60_000).toISOString();
    const { data: recent } = await admin
      .from("ebook_sends")
      .select("id")
      .eq("ebook_slug", slug)
      .eq("status", "sent")
      .gte("sent_at", dedupSince)
      .ilike("email", emailLower)
      .limit(1)
      .maybeSingle();

    if (recent) {
      await admin.from("ebook_sends").insert({
        email: emailLower, ebook_slug: slug, ip, status: "skipped_dedup",
        metadata: utm ? { utm } : {},
      });
      console.log(`Dedup skip for ${emailLower} (${slug})`);
      return new Response(JSON.stringify({ ok: true, skipped: true }), { headers: baseHeaders });
    }

    // Rate limit por IP
    if (ip) {
      const rlSince = new Date(Date.now() - RATE_LIMIT_WINDOW_MIN * 60_000).toISOString();
      const { count } = await admin
        .from("ebook_sends")
        .select("id", { count: "exact", head: true })
        .eq("ip", ip)
        .eq("status", "sent")
        .gte("sent_at", rlSince);
      if ((count ?? 0) >= RATE_LIMIT_MAX_PER_IP) {
        await admin.from("ebook_sends").insert({
          email: emailLower, ebook_slug: slug, ip, status: "rate_limited",
          metadata: utm ? { utm } : {},
        });
        console.warn(`Rate limit hit for IP ${ip}`);
        return new Response(JSON.stringify({ error: "Rate limit exceeded" }), { status: 429, headers: baseHeaders });
      }
    }

    const ebook = EBOOKS[slug];
    const html = renderEmail(name.trim(), ebook);
    const from = Deno.env.get("RESEND_FROM") ?? "BA Consultoria <ebook@benitesalbuquerque.com.br>";

    const resendResp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [emailLower],
        subject: ebook.subject,
        html,
        reply_to: "rodrigo@benitesalbuquerque.com.br",
        tags: [{ name: "ebook", value: slug }],
      }),
    });

    const resendBody = await resendResp.json().catch(() => ({}));

    if (!resendResp.ok) {
      await admin.from("ebook_sends").insert({
        email: emailLower, ebook_slug: slug, ip, status: "error",
        error: JSON.stringify(resendBody).slice(0, 2000),
        metadata: utm ? { utm } : {},
      });
      console.error("Resend error:", resendResp.status, resendBody);
      return new Response(JSON.stringify({ error: "Email delivery failed" }), { status: 502, headers: baseHeaders });
    }

    const resendId = (resendBody as any)?.id ?? null;
    await admin.from("ebook_sends").insert({
      email: emailLower, ebook_slug: slug, ip, status: "sent",
      resend_id: resendId, metadata: utm ? { utm } : {},
    });

    console.log(`Email sent to ${emailLower} (${slug}) resend_id=${resendId}`);
    return new Response(JSON.stringify({ ok: true, resend_id: resendId }), { headers: baseHeaders });

  } catch (e: any) {
    console.error("send-ebook-email error:", e);
    return new Response(JSON.stringify({ error: "Internal error" }), { status: 500, headers: { "Content-Type": "application/json" } });
  }
});
