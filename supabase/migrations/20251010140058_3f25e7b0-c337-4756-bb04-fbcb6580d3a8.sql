-- ================================================
-- TABELA DE EVENTOS (substitui lead_interactions)
-- ================================================
CREATE TABLE IF NOT EXISTS public.events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_name text NOT NULL CHECK (event_name <> ''),
  
  -- Identificação
  anonymous_id uuid NOT NULL,
  session_id uuid NOT NULL,
  lead_id uuid REFERENCES public.leads(id) ON DELETE SET NULL,
  
  -- Contexto
  page_url text,
  referrer text,
  
  -- Dados estruturados
  properties jsonb DEFAULT '{}'::jsonb,
  
  -- Scoring
  score_points integer DEFAULT 0,
  
  -- Idempotência (CRÍTICO)
  idempotency_key text NOT NULL,
  
  -- Auditoria (SEMPRE server-side)
  created_at timestamptz DEFAULT now() NOT NULL
);

-- Constraint UNIQUE para idempotência
CREATE UNIQUE INDEX IF NOT EXISTS uq_events_idem ON public.events(idempotency_key);

-- Índices para performance
CREATE INDEX IF NOT EXISTS idx_events_lead_time ON public.events(lead_id, created_at DESC) WHERE lead_id IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_events_anon_time ON public.events(anonymous_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_events_session ON public.events(session_id);
CREATE INDEX IF NOT EXISTS idx_events_name_time ON public.events(event_name, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_events_properties ON public.events USING GIN (properties);

-- ================================================
-- TABELA DE SESSÕES
-- ================================================
CREATE TABLE IF NOT EXISTS public.sessions (
  id uuid PRIMARY KEY,
  anonymous_id uuid NOT NULL,
  lead_id uuid REFERENCES public.leads(id) ON DELETE SET NULL,
  
  -- Temporal (server-side)
  first_event_at timestamptz NOT NULL,
  last_event_at timestamptz NOT NULL,
  duration_sec integer DEFAULT 0,
  
  -- Métricas
  pageviews integer DEFAULT 1,
  events_count integer DEFAULT 1,
  
  -- Atribuição
  landing_page text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  referrer text,
  
  -- Contexto técnico
  device text,
  
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_sessions_lead ON public.sessions(lead_id, last_event_at DESC) WHERE lead_id IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_sessions_anon ON public.sessions(anonymous_id, last_event_at DESC);

-- ================================================
-- TABELA DE ALIASES (anonymous_id → lead_id)
-- ================================================
CREATE TABLE IF NOT EXISTS public.lead_aliases (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  anonymous_id uuid NOT NULL,
  lead_id uuid REFERENCES public.leads(id) ON DELETE CASCADE NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE(anonymous_id, lead_id)
);

CREATE INDEX IF NOT EXISTS idx_aliases_anon ON public.lead_aliases(anonymous_id);
CREATE INDEX IF NOT EXISTS idx_aliases_lead ON public.lead_aliases(lead_id);

-- ================================================
-- ADICIONAR CAMPOS À TABELA LEADS
-- ================================================
ALTER TABLE public.leads
  ADD COLUMN IF NOT EXISTS score integer DEFAULT 0,
  ADD COLUMN IF NOT EXISTS score_updated_at timestamptz,
  ADD COLUMN IF NOT EXISTS first_touch_source text,
  ADD COLUMN IF NOT EXISTS first_touch_medium text,
  ADD COLUMN IF NOT EXISTS first_touch_campaign text,
  ADD COLUMN IF NOT EXISTS last_touch_source text,
  ADD COLUMN IF NOT EXISTS last_touch_medium text,
  ADD COLUMN IF NOT EXISTS last_touch_campaign text,
  ADD COLUMN IF NOT EXISTS last_active_at timestamptz;

CREATE INDEX IF NOT EXISTS idx_leads_score ON public.leads(score DESC);

-- ================================================
-- TABELA DE REGRAS DE SCORING
-- ================================================
CREATE TABLE IF NOT EXISTS public.scoring_rules (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_name text UNIQUE NOT NULL,
  points integer NOT NULL,
  daily_cap integer,
  description text,
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Seed inicial
INSERT INTO public.scoring_rules (event_name, points, daily_cap, description) VALUES
  ('checkout_view', 25, NULL, 'Visitou página de checkout'),
  ('form_submit', 20, NULL, 'Preencheu formulário de captura'),
  ('download_material', 15, 3, 'Download de material rico'),
  ('cta_click', 10, 5, 'Clique em CTA importante'),
  ('page_view', 5, 20, 'Visualização de página'),
  ('email_clicked', 12, NULL, 'Clicou em link de email'),
  ('whatsapp_received', 15, NULL, 'Respondeu no WhatsApp'),
  ('purchase_succeeded', 100, NULL, 'Conversão - Pagamento aprovado')
ON CONFLICT (event_name) DO NOTHING;

-- ================================================
-- CONSENTIMENTO LGPD
-- ================================================
CREATE TABLE IF NOT EXISTS public.lead_consents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  anonymous_id uuid,
  lead_id uuid REFERENCES public.leads(id) ON DELETE CASCADE,
  analytics_consent boolean NOT NULL DEFAULT false,
  marketing_consent boolean NOT NULL DEFAULT false,
  policy_version text NOT NULL,
  ip_address inet,
  user_agent text,
  created_at timestamptz DEFAULT now(),
  CHECK (anonymous_id IS NOT NULL OR lead_id IS NOT NULL)
);

CREATE INDEX IF NOT EXISTS idx_consents_lead ON public.lead_consents(lead_id);
CREATE INDEX IF NOT EXISTS idx_consents_anon ON public.lead_consents(anonymous_id);

-- ================================================
-- RPC: Contar eventos no dia (timezone correto)
-- ================================================
CREATE OR REPLACE FUNCTION public.count_events_today(
  p_lead_id uuid,
  p_anonymous_id uuid,
  p_event_name text
) RETURNS integer
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT count(*)::int
  FROM public.events e
  WHERE e.event_name = p_event_name
    AND (
      (p_lead_id IS NOT NULL AND e.lead_id = p_lead_id)
      OR (p_lead_id IS NULL AND e.anonymous_id = p_anonymous_id)
    )
    AND (e.created_at AT TIME ZONE 'America/Campo_Grande')::date
        = (now() AT TIME ZONE 'America/Campo_Grande')::date;
$$;

-- Permissões restritas
REVOKE ALL ON FUNCTION public.count_events_today(uuid, uuid, text) FROM public;
GRANT EXECUTE ON FUNCTION public.count_events_today(uuid, uuid, text) TO service_role;

-- ================================================
-- RPC: Upsert Sessão (não sobrescreve first_event_at)
-- ================================================
CREATE OR REPLACE FUNCTION public.upsert_session(
  p_session_id uuid,
  p_anonymous_id uuid,
  p_lead_id uuid,
  p_event_time timestamptz,
  p_landing_page text,
  p_utm_source text,
  p_utm_medium text,
  p_utm_campaign text,
  p_referrer text,
  p_device text
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.sessions (
    id, anonymous_id, lead_id,
    first_event_at, last_event_at,
    pageviews, events_count,
    landing_page, utm_source, utm_medium, utm_campaign,
    referrer, device
  ) VALUES (
    p_session_id, p_anonymous_id, p_lead_id,
    p_event_time, p_event_time,
    1, 1,
    p_landing_page, p_utm_source, p_utm_medium, p_utm_campaign,
    p_referrer, p_device
  )
  ON CONFLICT (id) DO UPDATE SET
    lead_id = COALESCE(EXCLUDED.lead_id, sessions.lead_id),
    last_event_at = EXCLUDED.last_event_at,
    pageviews = sessions.pageviews + 1,
    events_count = sessions.events_count + 1,
    duration_sec = GREATEST(0, EXTRACT(EPOCH FROM (EXCLUDED.last_event_at - sessions.first_event_at))::integer);
END;
$$;

REVOKE ALL ON FUNCTION public.upsert_session FROM public;
GRANT EXECUTE ON FUNCTION public.upsert_session TO service_role;

-- ================================================
-- RLS POLICIES (SEGURAS - Sem INSERT público)
-- ================================================
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lead_aliases ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.scoring_rules ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lead_consents ENABLE ROW LEVEL SECURITY;

-- Apenas admins podem ler
CREATE POLICY "Admins can view events" ON public.events
  FOR SELECT USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can view sessions" ON public.sessions
  FOR SELECT USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can view aliases" ON public.lead_aliases
  FOR SELECT USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage scoring rules" ON public.scoring_rules
  FOR ALL USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can view consents" ON public.lead_consents
  FOR SELECT USING (public.has_role(auth.uid(), 'admin'));