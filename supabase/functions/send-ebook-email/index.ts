// deno-lint-ignore-file no-explicit-any
import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

type EbookSlug = "20-skills-negocios";

const EBOOKS: Record<EbookSlug, { subject: string; link: string; form_aula_link: string }> = {
  "20-skills-negocios": {
    subject: "Seu guia chegou: 20 Skills de IA Para Negócios",
    link: "https://treevium.notion.site/20-skills-para-neg-cios-344fc75e990e80178309ef115f65912e",
    form_aula_link: "https://hub.benitesalbuquerque.com.br/f/pb-formulario-de-qualificacao",
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

const EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Seu guia chegou</title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
</head>
<body style="margin:0;padding:0;background-color:#060A12;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;-webkit-font-smoothing:antialiased;">

  <!-- Wrapper -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#060A12;">
    <tr>
      <td align="center" style="padding:40px 16px;">

        <!-- Container -->
        <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background-color:#0C1220;border:1px solid rgba(56,189,248,0.08);border-radius:8px;">

          <!-- Header bar -->
          <tr>
            <td style="padding:32px 40px 24px 40px;border-bottom:1px solid rgba(56,189,248,0.08);">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <span style="font-family:'Courier New',monospace;font-size:10px;font-weight:600;letter-spacing:3px;color:#38BDF8;text-transform:uppercase;">RODRIGO ALBUQUERQUE</span>
                  </td>
                  <td align="right">
                    <span style="font-family:'Courier New',monospace;font-size:10px;letter-spacing:2px;color:#3D5068;text-transform:uppercase;">GUIDE DELIVERY</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main content -->
          <tr>
            <td style="padding:40px;">

              <!-- Greeting -->
              <p style="margin:0 0 8px 0;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;font-size:14px;color:#5A7089;line-height:1.4;">
                Ol&#225;, {{name}}
              </p>

              <!-- Title -->
              <h1 style="margin:0 0 24px 0;font-family:Georgia,'Times New Roman',serif;font-size:28px;font-weight:700;color:#F0F6FF;line-height:1.2;text-transform:uppercase;letter-spacing:1px;">
                Seu guia est&#225; pronto.
              </h1>

              <!-- Divider -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:0 0 24px 0;">
                    <div style="height:1px;background:linear-gradient(to right, #38BDF8, rgba(56,189,248,0.08));"></div>
                  </td>
                </tr>
              </table>

              <!-- Body text -->
              <p style="margin:0 0 24px 0;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;font-size:15px;color:#C8D6E5;line-height:1.7;">
                Dentro desse material voc&#234; vai encontrar <strong style="color:#F0F6FF;">20 sistemas de IA prontos</strong> para sua equipe usar amanh&#227;. Cada um resolve um problema real do dia a dia &#8212; vendas, marketing, atendimento, gest&#227;o e financeiro.
              </p>

              <p style="margin:0 0 32px 0;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;font-size:15px;color:#C8D6E5;line-height:1.7;">
                N&#227;o &#233; teoria. &#201; copiar, colar e ver funcionar.
              </p>

              <!-- CTA Button -->
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto 12px auto;">
                <tr>
                  <td align="center" style="background-color:#38BDF8;border-radius:6px;">
                    <a href="{{ebook_link}}" target="_blank" style="display:inline-block;padding:16px 48px;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;font-size:15px;font-weight:700;color:#060A12;text-decoration:none;text-transform:uppercase;letter-spacing:1px;">
                      Acessar o guia
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Fallback link -->
              <p style="margin:0 0 40px 0;text-align:center;">
                <a href="{{ebook_link}}" target="_blank" style="font-family:'Courier New',monospace;font-size:11px;color:#5A7089;text-decoration:underline;">
                  Bot&#227;o n&#227;o funcionou? Clique aqui.
                </a>
              </p>

              <!-- Separator -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:0 0 32px 0;">
                    <div style="height:1px;background:rgba(56,189,248,0.08);"></div>
                  </td>
                </tr>
              </table>

              <!-- CTA Intermedi&#225;rio &#8212; Aula gratuita -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:rgba(56,189,248,0.05);border:1px solid rgba(56,189,248,0.15);border-radius:6px;margin-bottom:24px;">
                <tr>
                  <td style="padding:24px;">
                    <p style="margin:0 0 4px 0;font-family:'Courier New',monospace;font-size:10px;font-weight:600;letter-spacing:3px;color:#38BDF8;text-transform:uppercase;">
                      B&#212;NUS EXCLUSIVO
                    </p>
                    <p style="margin:0 0 12px 0;font-family:Georgia,'Times New Roman',serif;font-size:18px;font-weight:700;color:#F0F6FF;line-height:1.3;">
                      Quer o mapa mental por tr&#225;s dos 20 sistemas?
                    </p>
                    <p style="margin:0 0 16px 0;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;font-size:14px;color:#C8D6E5;line-height:1.6;">
                      Gravei uma aula de 30 minutos mostrando a arquitetura que uso nos meus 3 neg&#243;cios para operar eles com IA &#8212; os 4 pilares, as 3 armadilhas e as perguntas certas antes de construir qualquer coisa. Clique no bot&#227;o abaixo para responder um formul&#225;rio r&#225;pido e receber o acesso gratuito a essa aula exclusiva.
                    </p>
                    <a href="{{form_aula_link}}" target="_blank" style="font-family:'Courier New',monospace;font-size:12px;font-weight:700;color:#38BDF8;text-decoration:none;text-transform:uppercase;letter-spacing:2px;">
                      QUERO A AULA &#8594;
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Secondary CTA block -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:rgba(220,38,38,0.06);border:1px solid rgba(220,38,38,0.12);border-radius:6px;">
                <tr>
                  <td style="padding:24px;">
                    <p style="margin:0 0 4px 0;font-family:'Courier New',monospace;font-size:10px;font-weight:600;letter-spacing:3px;color:#DC2626;text-transform:uppercase;">
                      PR&#211;XIMO PASSO
                    </p>
                    <p style="margin:0 0 12px 0;font-family:Georgia,'Times New Roman',serif;font-size:18px;font-weight:700;color:#F0F6FF;line-height:1.3;">
                      Quer aprender a construir esses sistemas do zero?
                    </p>
                    <p style="margin:0 0 16px 0;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;font-size:14px;color:#C8D6E5;line-height:1.6;">
                      A Imers&#227;o em Claude te ensina o m&#233;todo por tr&#225;s dos 20 sistemas &#8212; em 2 horas voc&#234; sai construindo os seus pr&#243;prios. R$97.
                    </p>
                    <a href="https://benitesalbuquerque.com.br/educacao/obrigado-imersao-claude" target="_blank" style="font-family:'Courier New',monospace;font-size:12px;font-weight:700;color:#DC2626;text-decoration:none;text-transform:uppercase;letter-spacing:2px;">
                      QUERO A IMERS&#195;O &#8594;
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;border-top:1px solid rgba(56,189,248,0.08);">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin:0 0 4px 0;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;font-size:13px;color:#5A7089;">
                      Rodrigo Albuquerque
                    </p>
                    <p style="margin:0;font-family:'Courier New',monospace;font-size:10px;letter-spacing:2px;color:#3D5068;text-transform:uppercase;">
                      IA + Neg&#243;cios
                    </p>
                  </td>
                  <td align="right" valign="bottom">
                    <a href="mailto:rodrigo@benitesalbuquerque.com.br?subject=Descadastrar" style="font-family:'Courier New',monospace;font-size:10px;color:#3D5068;text-decoration:underline;">
                      descadastrar
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
        <!-- /Container -->

      </td>
    </tr>
  </table>
  <!-- /Wrapper -->

</body>
</html>`;

function renderEmail(name: string, ebook: { link: string; form_aula_link: string }): string {
  const firstName = escapeHtml(name.split(" ")[0] || "");
  return EMAIL_TEMPLATE
    .replace(/\{\{name\}\}/g, firstName)
    .replace(/\{\{ebook_link\}\}/g, ebook.link)
    .replace(/\{\{form_aula_link\}\}/g, ebook.form_aula_link);
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
