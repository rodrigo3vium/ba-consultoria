-- Log de envios de ebook via Resend. Serve 3 propósitos:
-- 1) Auditoria (quem recebeu quando + resend_id pra debug)
-- 2) Dedup: evitar mandar o mesmo ebook 2x pro mesmo email em < 5 min
-- 3) Rate limit: cap por IP em janela de 1h
CREATE TABLE ba_site.ebook_sends (
  id           uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  email        text        NOT NULL,
  ebook_slug   text        NOT NULL,
  ip           text,
  resend_id    text,
  status       text        NOT NULL DEFAULT 'sent' CHECK (status IN ('sent', 'skipped_dedup', 'rate_limited', 'error')),
  error        text,
  metadata     jsonb       NOT NULL DEFAULT '{}'::jsonb,
  sent_at      timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX idx_ebook_sends_email_time ON ba_site.ebook_sends (lower(email), ebook_slug, sent_at DESC);
CREATE INDEX idx_ebook_sends_ip_time    ON ba_site.ebook_sends (ip, sent_at DESC) WHERE ip IS NOT NULL;

ALTER TABLE ba_site.ebook_sends ENABLE ROW LEVEL SECURITY;
-- Sem policies públicas: só service_role (edge function) acessa.
