-- ============================================================
-- PROPOSAL TRACKING SYSTEM — Supabase Schema
-- BA Hub + BA Site (mesmo projeto Supabase)
-- ============================================================

-- 1. ENUMS
-- ============================================================

CREATE TYPE proposal_status AS ENUM (
  'draft',
  'sent',
  'viewed',
  'negotiating',
  'won',
  'lost',
  'expired'
);

CREATE TYPE follow_up_type AS ENUM (
  'reminder',
  'urgency',
  'social_proof',
  'objection_breaker',
  'last_chance'
);

CREATE TYPE tracking_event_type AS ENUM (
  'pageview',
  'scroll_25',
  'scroll_50',
  'scroll_75',
  'scroll_100',
  'click_section',
  'time_update',
  'exit'
);


-- 2. TABELAS
-- ============================================================

-- Propostas enviadas
CREATE TABLE proposals (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name   TEXT NOT NULL,
  client_email  TEXT,
  client_phone  TEXT,
  slug          TEXT NOT NULL UNIQUE,
  value         NUMERIC(12, 2),
  status        proposal_status DEFAULT 'draft',
  service_type  TEXT,                          -- ex: 'chatbot', 'funnel', 'consultoria'
  notes         TEXT,
  sent_at       TIMESTAMPTZ,
  viewed_at     TIMESTAMPTZ,                   -- primeiro acesso (preenchido via trigger)
  closed_at     TIMESTAMPTZ,                   -- data do won/lost
  created_at    TIMESTAMPTZ DEFAULT NOW(),
  updated_at    TIMESTAMPTZ DEFAULT NOW()
);

-- Índices para queries frequentes
CREATE INDEX idx_proposals_slug ON proposals (slug);
CREATE INDEX idx_proposals_status ON proposals (status);
CREATE INDEX idx_proposals_sent_at ON proposals (sent_at DESC);


-- Follow-ups vinculados a propostas
CREATE TABLE follow_ups (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  proposal_id     UUID NOT NULL REFERENCES proposals(id) ON DELETE CASCADE,
  slug            TEXT NOT NULL UNIQUE,
  sequence_number INTEGER NOT NULL DEFAULT 1,  -- 1º, 2º, 3º follow-up
  type            follow_up_type DEFAULT 'reminder',
  subject         TEXT,                        -- assunto/gancho do follow-up
  sent_at         TIMESTAMPTZ,
  viewed_at       TIMESTAMPTZ,                 -- primeiro acesso
  created_at      TIMESTAMPTZ DEFAULT NOW(),

  UNIQUE (proposal_id, sequence_number)
);

CREATE INDEX idx_follow_ups_slug ON follow_ups (slug);
CREATE INDEX idx_follow_ups_proposal ON follow_ups (proposal_id);


-- Eventos de tracking (a mina de ouro)
CREATE TABLE page_events (
  id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  -- Referência à página
  page_type           TEXT NOT NULL CHECK (page_type IN ('proposal', 'follow_up')),
  page_slug           TEXT NOT NULL,
  proposal_id         UUID REFERENCES proposals(id) ON DELETE SET NULL,
  follow_up_id        UUID REFERENCES follow_ups(id) ON DELETE SET NULL,

  -- Tipo de evento
  event_type          tracking_event_type NOT NULL,
  event_data          JSONB DEFAULT '{}',       -- dados flexíveis por tipo de evento
                                                 -- click_section: { "section": "pricing" }
                                                 -- time_update: { "seconds": 45 }
                                                 -- scroll: { "max_depth": 75 }

  -- Identificação do visitante (sem login)
  visitor_fingerprint TEXT,                      -- fingerprint do browser
  session_id          TEXT,                      -- agrupa eventos da mesma visita
  ip_address          INET,
  user_agent          TEXT,
  device_type         TEXT,                      -- 'mobile', 'desktop', 'tablet'
  referrer            TEXT,                      -- de onde veio o acesso

  -- Timestamp
  created_at          TIMESTAMPTZ DEFAULT NOW()
);

-- Índices para queries de analytics
CREATE INDEX idx_events_page ON page_events (page_type, page_slug);
CREATE INDEX idx_events_proposal ON page_events (proposal_id);
CREATE INDEX idx_events_type ON page_events (event_type);
CREATE INDEX idx_events_created ON page_events (created_at DESC);
CREATE INDEX idx_events_session ON page_events (session_id);
CREATE INDEX idx_events_visitor ON page_events (visitor_fingerprint);


-- 3. TRIGGERS E FUNCTIONS
-- ============================================================

-- Atualiza updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_proposals_updated_at
  BEFORE UPDATE ON proposals
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();


-- Preenche viewed_at na primeira visualização da proposta
CREATE OR REPLACE FUNCTION handle_first_view()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.event_type = 'pageview' AND NEW.page_type = 'proposal' AND NEW.proposal_id IS NOT NULL THEN
    UPDATE proposals
    SET
      viewed_at = COALESCE(viewed_at, NOW()),
      status = CASE WHEN status = 'sent' THEN 'viewed' ELSE status END
    WHERE id = NEW.proposal_id;
  END IF;

  IF NEW.event_type = 'pageview' AND NEW.page_type = 'follow_up' AND NEW.follow_up_id IS NOT NULL THEN
    UPDATE follow_ups
    SET viewed_at = COALESCE(viewed_at, NOW())
    WHERE id = NEW.follow_up_id;
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_handle_first_view
  AFTER INSERT ON page_events
  FOR EACH ROW EXECUTE FUNCTION handle_first_view();


-- 4. VIEWS PARA DASHBOARD
-- ============================================================

-- Resumo de cada proposta com métricas de engajamento
CREATE OR REPLACE VIEW v_proposal_analytics AS
SELECT
  p.id,
  p.client_name,
  p.slug,
  p.value,
  p.status,
  p.service_type,
  p.sent_at,
  p.viewed_at,
  p.closed_at,

  -- Métricas de acesso
  COUNT(DISTINCT e.session_id) FILTER (WHERE e.event_type = 'pageview')
    AS total_sessions,
  COUNT(*) FILTER (WHERE e.event_type = 'pageview')
    AS total_pageviews,
  MAX(e.created_at) FILTER (WHERE e.event_type = 'pageview')
    AS last_viewed_at,

  -- Engajamento
  MAX((e.event_data->>'seconds')::INT) FILTER (WHERE e.event_type = 'time_update')
    AS max_time_on_page_seconds,
  MAX(e.event_type::TEXT) FILTER (WHERE e.event_type IN ('scroll_25', 'scroll_50', 'scroll_75', 'scroll_100'))
    AS max_scroll_reached,

  -- Cliques em seções
  COUNT(*) FILTER (WHERE e.event_type = 'click_section')
    AS section_clicks,

  -- Tempo até primeira visualização
  EXTRACT(EPOCH FROM (p.viewed_at - p.sent_at)) / 3600
    AS hours_to_first_view,

  -- Tempo até fechamento
  EXTRACT(EPOCH FROM (p.closed_at - p.sent_at)) / 86400
    AS days_to_close

FROM proposals p
LEFT JOIN page_events e ON e.proposal_id = p.id
GROUP BY p.id;


-- Visão de pipeline por status
CREATE OR REPLACE VIEW v_pipeline_summary AS
SELECT
  status,
  COUNT(*) AS total,
  SUM(value) AS total_value,
  AVG(value) AS avg_value,
  AVG(EXTRACT(EPOCH FROM (viewed_at - sent_at)) / 3600)
    AS avg_hours_to_view
FROM proposals
WHERE status != 'draft'
GROUP BY status;


-- 5. ROW LEVEL SECURITY
-- ============================================================

ALTER TABLE proposals ENABLE ROW LEVEL SECURITY;
ALTER TABLE follow_ups ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_events ENABLE ROW LEVEL SECURITY;

-- Políticas para service_role (ba-hub: acesso total)
-- A service_role já bypassa RLS por padrão no Supabase.
-- Nenhuma política extra necessária.

-- Políticas para anon key (ba-site: acesso limitado)

-- proposals: ba-site pode ler (pra renderizar a página) mas não deletar
CREATE POLICY "anon_read_proposals"
  ON proposals FOR SELECT
  USING (true);

CREATE POLICY "anon_update_proposal_status"
  ON proposals FOR UPDATE
  USING (true)
  WITH CHECK (true);
  -- Na prática, o ba-site só atualiza via trigger (viewed_at/status).
  -- Se quiser restringir mais, limite os campos via Edge Function.

-- follow_ups: ba-site pode ler
CREATE POLICY "anon_read_follow_ups"
  ON follow_ups FOR SELECT
  USING (true);

-- page_events: ba-site pode INSERIR (registrar eventos) e ler
CREATE POLICY "anon_insert_events"
  ON page_events FOR INSERT
  WITH CHECK (true);

CREATE POLICY "anon_read_events"
  ON page_events FOR SELECT
  USING (true);


-- 6. FUNCTION PARA NOTIFICAÇÃO (chamada via Edge Function)
-- ============================================================

-- Retorna propostas "quentes" (múltiplos acessos recentes)
CREATE OR REPLACE FUNCTION get_hot_proposals(hours_window INT DEFAULT 48)
RETURNS TABLE (
  proposal_id   UUID,
  client_name   TEXT,
  slug          TEXT,
  value         NUMERIC,
  view_count    BIGINT,
  last_viewed   TIMESTAMPTZ,
  status        proposal_status
) AS $$
BEGIN
  RETURN QUERY
  SELECT
    p.id,
    p.client_name,
    p.slug,
    p.value,
    COUNT(*) FILTER (WHERE e.event_type = 'pageview') AS view_count,
    MAX(e.created_at) AS last_viewed,
    p.status
  FROM proposals p
  JOIN page_events e ON e.proposal_id = p.id
  WHERE e.created_at > NOW() - (hours_window || ' hours')::INTERVAL
    AND p.status NOT IN ('won', 'lost', 'expired')
  GROUP BY p.id
  HAVING COUNT(*) FILTER (WHERE e.event_type = 'pageview') >= 2
  ORDER BY view_count DESC, last_viewed DESC;
END;
$$ LANGUAGE plpgsql;


-- 7. SAMPLE DATA (opcional, pra testar)
-- ============================================================

/*
INSERT INTO proposals (client_name, slug, value, status, service_type, sent_at)
VALUES
  ('Supreme Clínica', 'supreme-clinica', 4500.00, 'sent', 'chatbot', NOW() - INTERVAL '3 days'),
  ('Duda Bambil', 'duda-bambil', 8000.00, 'sent', 'funnel', NOW() - INTERVAL '1 day'),
  ('DSL Car Texas', 'dsl-car-texas', 6000.00, 'viewed', 'consultoria', NOW() - INTERVAL '5 days');

INSERT INTO follow_ups (proposal_id, slug, sequence_number, type, sent_at)
VALUES
  ((SELECT id FROM proposals WHERE slug = 'supreme-clinica'), 'fu-supreme-clinica-1', 1, 'reminder', NOW() - INTERVAL '1 day');
*/
