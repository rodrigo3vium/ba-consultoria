-- Limpa schema anterior (execuções parciais anteriores)
DROP SCHEMA IF EXISTS ba_site CASCADE;
CREATE SCHEMA ba_site;

-- Create enum for user roles
CREATE TYPE ba_site.app_role AS ENUM ('admin', 'user');

-- Create user_roles table
CREATE TABLE ba_site.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role ba_site.app_role NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE(user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE ba_site.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles
CREATE OR REPLACE FUNCTION ba_site.has_role(_user_id UUID, _role ba_site.app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = ba_site
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM ba_site.user_roles
    WHERE user_id = _user_id
    AND role = _role
  )
$$;

-- Create blog_posts table
CREATE TABLE ba_site.blog_posts (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  author TEXT NOT NULL,
  date TEXT NOT NULL,
  category TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  image TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS on blog_posts
ALTER TABLE ba_site.blog_posts ENABLE ROW LEVEL SECURITY;

-- RLS Policies for user_roles (users can view their own roles)
CREATE POLICY "Users can view their own roles"
ON ba_site.user_roles
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- RLS Policies for blog_posts (everyone can read)
CREATE POLICY "Anyone can view published posts"
ON ba_site.blog_posts
FOR SELECT
TO anon, authenticated
USING (true);

-- Only admins can insert posts
CREATE POLICY "Admins can insert posts"
ON ba_site.blog_posts
FOR INSERT
TO authenticated
WITH CHECK (ba_site.has_role(auth.uid(), 'admin'));

-- Only admins can update posts
CREATE POLICY "Admins can update posts"
ON ba_site.blog_posts
FOR UPDATE
TO authenticated
USING (ba_site.has_role(auth.uid(), 'admin'));

-- Only admins can delete posts
CREATE POLICY "Admins can delete posts"
ON ba_site.blog_posts
FOR DELETE
TO authenticated
USING (ba_site.has_role(auth.uid(), 'admin'));

-- Create trigger for updated_at
CREATE OR REPLACE FUNCTION ba_site.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_updated_at
BEFORE UPDATE ON ba_site.blog_posts
FOR EACH ROW
EXECUTE FUNCTION ba_site.handle_updated_at();-- Fix search_path for has_role function
CREATE OR REPLACE FUNCTION ba_site.has_role(_user_id UUID, _role ba_site.app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = ''
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM ba_site.user_roles
    WHERE user_id = _user_id
    AND role = _role
  )
$$;-- Add slug and status columns to blog_posts table
ALTER TABLE ba_site.blog_posts 
ADD COLUMN slug TEXT,
ADD COLUMN status TEXT NOT NULL DEFAULT 'published' CHECK (status IN ('draft', 'published'));

-- Create unique index on slug (only for non-null slugs)
CREATE UNIQUE INDEX idx_blog_posts_slug ON ba_site.blog_posts(slug) WHERE slug IS NOT NULL;

-- Add comment for clarity
COMMENT ON COLUMN ba_site.blog_posts.slug IS 'URL-friendly identifier for the post';
COMMENT ON COLUMN ba_site.blog_posts.status IS 'Publication status: draft or published';-- Criar tabela para captura de leads dos produtos educacionais
CREATE TABLE ba_site.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  produto TEXT NOT NULL CHECK (produto IN ('ia-para-negocios', 'ia-do-zero')),
  faturamento TEXT,
  situacao_profissional TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE ba_site.leads ENABLE ROW LEVEL SECURITY;

-- Policy para permitir inserção de leads por qualquer pessoa (não autenticada)
CREATE POLICY "Anyone can insert leads" 
ON ba_site.leads 
FOR INSERT 
WITH CHECK (true);

-- Policy para admins verem os leads
CREATE POLICY "Admins can view leads" 
ON ba_site.leads 
FOR SELECT 
USING (ba_site.has_role(auth.uid(), 'admin'::ba_site.app_role));

-- Criar índice para melhor performance nas consultas
CREATE INDEX idx_leads_produto ON ba_site.leads(produto);
CREATE INDEX idx_leads_created_at ON ba_site.leads(created_at DESC);-- Create enum for lead status
CREATE TYPE ba_site.lead_status AS ENUM ('novo', 'contatado', 'qualificado', 'convertido', 'perdido');

-- Create enum for interaction type
CREATE TYPE ba_site.interaction_type AS ENUM ('email', 'whatsapp', 'telefone', 'reuniao', 'nota');

-- Add new columns to leads table
ALTER TABLE ba_site.leads
ADD COLUMN status ba_site.lead_status NOT NULL DEFAULT 'novo',
ADD COLUMN origem TEXT,
ADD COLUMN observacoes TEXT,
ADD COLUMN ultima_interacao TIMESTAMP WITH TIME ZONE,
ADD COLUMN responsavel_id UUID REFERENCES auth.users(id),
ADD COLUMN tags TEXT[] DEFAULT '{}';

-- Create lead_interactions table
CREATE TABLE ba_site.lead_interactions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  lead_id UUID NOT NULL REFERENCES ba_site.leads(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id),
  tipo ba_site.interaction_type NOT NULL,
  descricao TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on lead_interactions
ALTER TABLE ba_site.lead_interactions ENABLE ROW LEVEL SECURITY;

-- Create policies for lead_interactions
CREATE POLICY "Admins can view all interactions"
ON ba_site.lead_interactions
FOR SELECT
USING (ba_site.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert interactions"
ON ba_site.lead_interactions
FOR INSERT
WITH CHECK (ba_site.has_role(auth.uid(), 'admin'));

-- Create policy to allow admins to update leads
CREATE POLICY "Admins can update leads"
ON ba_site.leads
FOR UPDATE
USING (ba_site.has_role(auth.uid(), 'admin'));

-- Create index for better performance
CREATE INDEX idx_lead_interactions_lead_id ON ba_site.lead_interactions(lead_id);
CREATE INDEX idx_leads_status ON ba_site.leads(status);-- ================================================
-- TABELA DE EVENTOS (substitui lead_interactions)
-- ================================================
CREATE TABLE IF NOT EXISTS ba_site.events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_name text NOT NULL CHECK (event_name <> ''),
  
  -- Identificação
  anonymous_id uuid NOT NULL,
  session_id uuid NOT NULL,
  lead_id uuid REFERENCES ba_site.leads(id) ON DELETE SET NULL,
  
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
CREATE UNIQUE INDEX IF NOT EXISTS uq_events_idem ON ba_site.events(idempotency_key);

-- Índices para performance
CREATE INDEX IF NOT EXISTS idx_events_lead_time ON ba_site.events(lead_id, created_at DESC) WHERE lead_id IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_events_anon_time ON ba_site.events(anonymous_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_events_session ON ba_site.events(session_id);
CREATE INDEX IF NOT EXISTS idx_events_name_time ON ba_site.events(event_name, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_events_properties ON ba_site.events USING GIN (properties);

-- ================================================
-- TABELA DE SESSÕES
-- ================================================
CREATE TABLE IF NOT EXISTS ba_site.sessions (
  id uuid PRIMARY KEY,
  anonymous_id uuid NOT NULL,
  lead_id uuid REFERENCES ba_site.leads(id) ON DELETE SET NULL,
  
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

CREATE INDEX IF NOT EXISTS idx_sessions_lead ON ba_site.sessions(lead_id, last_event_at DESC) WHERE lead_id IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_sessions_anon ON ba_site.sessions(anonymous_id, last_event_at DESC);

-- ================================================
-- TABELA DE ALIASES (anonymous_id → lead_id)
-- ================================================
CREATE TABLE IF NOT EXISTS ba_site.lead_aliases (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  anonymous_id uuid NOT NULL,
  lead_id uuid REFERENCES ba_site.leads(id) ON DELETE CASCADE NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE(anonymous_id, lead_id)
);

CREATE INDEX IF NOT EXISTS idx_aliases_anon ON ba_site.lead_aliases(anonymous_id);
CREATE INDEX IF NOT EXISTS idx_aliases_lead ON ba_site.lead_aliases(lead_id);

-- ================================================
-- ADICIONAR CAMPOS À TABELA LEADS
-- ================================================
ALTER TABLE ba_site.leads
  ADD COLUMN IF NOT EXISTS score integer DEFAULT 0,
  ADD COLUMN IF NOT EXISTS score_updated_at timestamptz,
  ADD COLUMN IF NOT EXISTS first_touch_source text,
  ADD COLUMN IF NOT EXISTS first_touch_medium text,
  ADD COLUMN IF NOT EXISTS first_touch_campaign text,
  ADD COLUMN IF NOT EXISTS last_touch_source text,
  ADD COLUMN IF NOT EXISTS last_touch_medium text,
  ADD COLUMN IF NOT EXISTS last_touch_campaign text,
  ADD COLUMN IF NOT EXISTS last_active_at timestamptz;

CREATE INDEX IF NOT EXISTS idx_leads_score ON ba_site.leads(score DESC);

-- ================================================
-- TABELA DE REGRAS DE SCORING
-- ================================================
CREATE TABLE IF NOT EXISTS ba_site.scoring_rules (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_name text UNIQUE NOT NULL,
  points integer NOT NULL,
  daily_cap integer,
  description text,
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Seed inicial
INSERT INTO ba_site.scoring_rules (event_name, points, daily_cap, description) VALUES
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
CREATE TABLE IF NOT EXISTS ba_site.lead_consents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  anonymous_id uuid,
  lead_id uuid REFERENCES ba_site.leads(id) ON DELETE CASCADE,
  analytics_consent boolean NOT NULL DEFAULT false,
  marketing_consent boolean NOT NULL DEFAULT false,
  policy_version text NOT NULL,
  ip_address inet,
  user_agent text,
  created_at timestamptz DEFAULT now(),
  CHECK (anonymous_id IS NOT NULL OR lead_id IS NOT NULL)
);

CREATE INDEX IF NOT EXISTS idx_consents_lead ON ba_site.lead_consents(lead_id);
CREATE INDEX IF NOT EXISTS idx_consents_anon ON ba_site.lead_consents(anonymous_id);

-- ================================================
-- RPC: Contar eventos no dia (timezone correto)
-- ================================================
CREATE OR REPLACE FUNCTION ba_site.count_events_today(
  p_lead_id uuid,
  p_anonymous_id uuid,
  p_event_name text
) RETURNS integer
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = ba_site
AS $$
  SELECT count(*)::int
  FROM ba_site.events e
  WHERE e.event_name = p_event_name
    AND (
      (p_lead_id IS NOT NULL AND e.lead_id = p_lead_id)
      OR (p_lead_id IS NULL AND e.anonymous_id = p_anonymous_id)
    )
    AND (e.created_at AT TIME ZONE 'America/Campo_Grande')::date
        = (now() AT TIME ZONE 'America/Campo_Grande')::date;
$$;

-- Permissões restritas
REVOKE ALL ON FUNCTION ba_site.count_events_today(uuid, uuid, text) FROM public;
GRANT EXECUTE ON FUNCTION ba_site.count_events_today(uuid, uuid, text) TO service_role;

-- ================================================
-- RPC: Upsert Sessão (não sobrescreve first_event_at)
-- ================================================
CREATE OR REPLACE FUNCTION ba_site.upsert_session(
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
SET search_path = ba_site
AS $$
BEGIN
  INSERT INTO ba_site.sessions (
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

REVOKE ALL ON FUNCTION ba_site.upsert_session FROM public;
GRANT EXECUTE ON FUNCTION ba_site.upsert_session TO service_role;

-- ================================================
-- RLS POLICIES (SEGURAS - Sem INSERT público)
-- ================================================
ALTER TABLE ba_site.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE ba_site.sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE ba_site.lead_aliases ENABLE ROW LEVEL SECURITY;
ALTER TABLE ba_site.scoring_rules ENABLE ROW LEVEL SECURITY;
ALTER TABLE ba_site.lead_consents ENABLE ROW LEVEL SECURITY;

-- Apenas admins podem ler
CREATE POLICY "Admins can view events" ON ba_site.events
  FOR SELECT USING (ba_site.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can view sessions" ON ba_site.sessions
  FOR SELECT USING (ba_site.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can view aliases" ON ba_site.lead_aliases
  FOR SELECT USING (ba_site.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage scoring rules" ON ba_site.scoring_rules
  FOR ALL USING (ba_site.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can view consents" ON ba_site.lead_consents
  FOR SELECT USING (ba_site.has_role(auth.uid(), 'admin'));-- Create funnels table
CREATE TABLE ba_site.funnels (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  descricao TEXT,
  cor TEXT NOT NULL DEFAULT '#3B82F6',
  ordem INTEGER NOT NULL DEFAULT 0,
  ativo BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create funnel_stages table
CREATE TABLE ba_site.funnel_stages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  funnel_id UUID NOT NULL REFERENCES ba_site.funnels(id) ON DELETE CASCADE,
  nome TEXT NOT NULL,
  descricao TEXT,
  ordem INTEGER NOT NULL DEFAULT 0,
  cor TEXT NOT NULL DEFAULT '#6B7280',
  probabilidade INTEGER NOT NULL DEFAULT 0 CHECK (probabilidade >= 0 AND probabilidade <= 100),
  ativo BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create lead_funnel_positions table
CREATE TABLE ba_site.lead_funnel_positions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  lead_id UUID NOT NULL REFERENCES ba_site.leads(id) ON DELETE CASCADE,
  funnel_id UUID NOT NULL REFERENCES ba_site.funnels(id) ON DELETE CASCADE,
  stage_id UUID NOT NULL REFERENCES ba_site.funnel_stages(id) ON DELETE CASCADE,
  entrada_etapa_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(lead_id, funnel_id)
);

-- Create funnel_history table
CREATE TABLE ba_site.funnel_history (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  lead_id UUID NOT NULL REFERENCES ba_site.leads(id) ON DELETE CASCADE,
  funnel_id UUID NOT NULL REFERENCES ba_site.funnels(id) ON DELETE CASCADE,
  stage_from_id UUID REFERENCES ba_site.funnel_stages(id) ON DELETE SET NULL,
  stage_to_id UUID REFERENCES ba_site.funnel_stages(id) ON DELETE SET NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  observacao TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE ba_site.funnels ENABLE ROW LEVEL SECURITY;
ALTER TABLE ba_site.funnel_stages ENABLE ROW LEVEL SECURITY;
ALTER TABLE ba_site.lead_funnel_positions ENABLE ROW LEVEL SECURITY;
ALTER TABLE ba_site.funnel_history ENABLE ROW LEVEL SECURITY;

-- RLS Policies for funnels
CREATE POLICY "Admins can manage funnels"
ON ba_site.funnels
FOR ALL
USING (ba_site.has_role(auth.uid(), 'admin'));

CREATE POLICY "Anyone can view active funnels"
ON ba_site.funnels
FOR SELECT
USING (ativo = true);

-- RLS Policies for funnel_stages
CREATE POLICY "Admins can manage funnel stages"
ON ba_site.funnel_stages
FOR ALL
USING (ba_site.has_role(auth.uid(), 'admin'));

CREATE POLICY "Anyone can view active stages"
ON ba_site.funnel_stages
FOR SELECT
USING (ativo = true);

-- RLS Policies for lead_funnel_positions
CREATE POLICY "Admins can manage lead positions"
ON ba_site.lead_funnel_positions
FOR ALL
USING (ba_site.has_role(auth.uid(), 'admin'));

-- RLS Policies for funnel_history
CREATE POLICY "Admins can view funnel history"
ON ba_site.funnel_history
FOR SELECT
USING (ba_site.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert funnel history"
ON ba_site.funnel_history
FOR INSERT
WITH CHECK (ba_site.has_role(auth.uid(), 'admin'));

-- Triggers for updated_at
CREATE TRIGGER update_funnels_updated_at
BEFORE UPDATE ON ba_site.funnels
FOR EACH ROW
EXECUTE FUNCTION ba_site.handle_updated_at();

CREATE TRIGGER update_funnel_stages_updated_at
BEFORE UPDATE ON ba_site.funnel_stages
FOR EACH ROW
EXECUTE FUNCTION ba_site.handle_updated_at();

CREATE TRIGGER update_lead_funnel_positions_updated_at
BEFORE UPDATE ON ba_site.lead_funnel_positions
FOR EACH ROW
EXECUTE FUNCTION ba_site.handle_updated_at();

-- Create indexes for performance
CREATE INDEX idx_funnel_stages_funnel_id ON ba_site.funnel_stages(funnel_id);
CREATE INDEX idx_lead_funnel_positions_lead_id ON ba_site.lead_funnel_positions(lead_id);
CREATE INDEX idx_lead_funnel_positions_funnel_id ON ba_site.lead_funnel_positions(funnel_id);
CREATE INDEX idx_lead_funnel_positions_stage_id ON ba_site.lead_funnel_positions(stage_id);
CREATE INDEX idx_funnel_history_lead_id ON ba_site.funnel_history(lead_id);
CREATE INDEX idx_funnel_history_funnel_id ON ba_site.funnel_history(funnel_id);

-- Insert default funnel with stages
INSERT INTO ba_site.funnels (nome, descricao, cor, ordem, ativo) 
VALUES ('Funil Padrão', 'Funil de vendas padrão', '#3B82F6', 1, true);

INSERT INTO ba_site.funnel_stages (funnel_id, nome, descricao, ordem, cor, probabilidade, ativo)
SELECT 
  f.id,
  stage.nome,
  stage.descricao,
  stage.ordem,
  stage.cor,
  stage.probabilidade,
  true
FROM ba_site.funnels f
CROSS JOIN (
  VALUES 
    ('Descoberta', 'Lead em fase inicial de descoberta', 1, '#9CA3AF', 10),
    ('Qualificado', 'Lead qualificado e com potencial', 2, '#60A5FA', 30),
    ('Proposta Enviada', 'Proposta comercial enviada', 3, '#FBBF24', 50),
    ('Negociação', 'Em processo de negociação', 4, '#F59E0B', 70),
    ('Fechado Ganho', 'Negócio fechado com sucesso', 5, '#10B981', 100),
    ('Fechado Perdido', 'Oportunidade perdida', 6, '#EF4444', 0)
) AS stage(nome, descricao, ordem, cor, probabilidade)
WHERE f.nome = 'Funil Padrão';-- Criar função para adicionar automaticamente novos leads ao funil padrão
CREATE OR REPLACE FUNCTION ba_site.add_lead_to_default_funnel()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ba_site
AS $$
DECLARE
  v_default_funnel_id uuid;
  v_first_stage_id uuid;
BEGIN
  -- Buscar o funil padrão (primeiro funil ativo por ordem)
  SELECT id INTO v_default_funnel_id
  FROM ba_site.funnels
  WHERE ativo = true
  ORDER BY ordem ASC
  LIMIT 1;

  -- Se existe um funil padrão, buscar a primeira etapa
  IF v_default_funnel_id IS NOT NULL THEN
    SELECT id INTO v_first_stage_id
    FROM ba_site.funnel_stages
    WHERE funnel_id = v_default_funnel_id
      AND ativo = true
    ORDER BY ordem ASC
    LIMIT 1;

    -- Se existe uma etapa, adicionar o lead
    IF v_first_stage_id IS NOT NULL THEN
      INSERT INTO ba_site.lead_funnel_positions (
        lead_id,
        funnel_id,
        stage_id,
        entrada_etapa_at
      ) VALUES (
        NEW.id,
        v_default_funnel_id,
        v_first_stage_id,
        now()
      );
    END IF;
  END IF;

  RETURN NEW;
END;
$$;

-- Criar trigger para adicionar leads automaticamente ao funil padrão
DROP TRIGGER IF EXISTS trigger_add_lead_to_default_funnel ON ba_site.leads;
CREATE TRIGGER trigger_add_lead_to_default_funnel
  AFTER INSERT ON ba_site.leads
  FOR EACH ROW
  EXECUTE FUNCTION ba_site.add_lead_to_default_funnel();-- Criar tabela para armazenar informações de venda da Hotmart
CREATE TABLE IF NOT EXISTS ba_site.hotmart_sales (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  lead_id uuid REFERENCES ba_site.leads(id) ON DELETE CASCADE,
  produto text NOT NULL,
  moeda text,
  preco_produto numeric,
  preco_oferta numeric,
  numero_parcela integer,
  data_venda timestamp with time zone,
  data_confirmacao timestamp with time zone,
  status text,
  documento text,
  origem_checkout text,
  tipo_pagamento text,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Habilitar RLS
ALTER TABLE ba_site.hotmart_sales ENABLE ROW LEVEL SECURITY;

-- Políticas RLS para hotmart_sales
CREATE POLICY "Admins podem ver vendas Hotmart"
  ON ba_site.hotmart_sales
  FOR SELECT
  TO authenticated
  USING (ba_site.has_role(auth.uid(), 'admin'::ba_site.app_role));

CREATE POLICY "Admins podem inserir vendas Hotmart"
  ON ba_site.hotmart_sales
  FOR INSERT
  TO authenticated
  WITH CHECK (ba_site.has_role(auth.uid(), 'admin'::ba_site.app_role));

-- Criar índices para performance
CREATE INDEX idx_hotmart_sales_lead_id ON ba_site.hotmart_sales(lead_id);
CREATE INDEX idx_hotmart_sales_data_venda ON ba_site.hotmart_sales(data_venda DESC);-- Melhorias na tabela hotmart_sales

-- Adicionar índice para melhor performance
CREATE INDEX IF NOT EXISTS idx_hotmart_sales_lead_id ON ba_site.hotmart_sales(lead_id);
CREATE INDEX IF NOT EXISTS idx_hotmart_sales_email_lookup ON ba_site.leads(email);

-- Adicionar constraint para evitar vendas duplicadas (mesma venda não pode ser inserida 2x)
-- Usamos produto + email + data_venda como chave única
ALTER TABLE ba_site.hotmart_sales 
ADD CONSTRAINT unique_hotmart_sale 
UNIQUE (lead_id, produto, data_venda);-- Remove constraint antiga
ALTER TABLE ba_site.leads DROP CONSTRAINT IF EXISTS leads_produto_check;

-- Cria nova constraint incluindo super-agentes
ALTER TABLE ba_site.leads ADD CONSTRAINT leads_produto_check 
  CHECK (produto = ANY (ARRAY[
    'ia-para-negocios'::text, 
    'ia-do-zero'::text,
    'super-agentes'::text
  ]));-- Create lead_profiles table for Go-to-Market mapping data
CREATE TABLE ba_site.lead_profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  lead_id UUID NOT NULL UNIQUE REFERENCES ba_site.leads(id) ON DELETE CASCADE,
  
  -- Dados demográficos
  idade INTEGER,
  cidade_estado TEXT,
  
  -- Perfil profissional/acadêmico
  situacao_profissional TEXT,
  
  -- Experiência com IA
  experiencia_ia TEXT, -- "Nunca usei", "Já usei algumas vezes por curiosidade", "Uso ocasionalmente no trabalho ou estudos", "Uso com frequência e estou me aprofundando nelas"
  
  -- Aquisição
  canal_aquisicao TEXT, -- "TikTok", "Instagram", "Indicação", "Faculdade", etc.
  
  -- Aplicação e objetivos
  area_aplicacao TEXT, -- Área onde quer aplicar IA
  maior_dificuldade TEXT,
  objetivo_principal TEXT, -- "Se eu dominasse IA, eu conseguiria..."
  desejo_realizar TEXT, -- O que gostaria de fazer com IA
  expectativas TEXT,
  
  -- Scores comportamentais (0-10)
  nivel_organizacao INTEGER CHECK (nivel_organizacao >= 0 AND nivel_organizacao <= 10),
  nivel_produtividade INTEGER CHECK (nivel_produtividade >= 0 AND nivel_produtividade <= 10),
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE ba_site.lead_profiles ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Admins can view all profiles"
  ON ba_site.lead_profiles
  FOR SELECT
  USING (ba_site.has_role(auth.uid(), 'admin'::ba_site.app_role));

CREATE POLICY "Admins can insert profiles"
  ON ba_site.lead_profiles
  FOR INSERT
  WITH CHECK (ba_site.has_role(auth.uid(), 'admin'::ba_site.app_role));

CREATE POLICY "Admins can update profiles"
  ON ba_site.lead_profiles
  FOR UPDATE
  USING (ba_site.has_role(auth.uid(), 'admin'::ba_site.app_role));

CREATE POLICY "Admins can delete profiles"
  ON ba_site.lead_profiles
  FOR DELETE
  USING (ba_site.has_role(auth.uid(), 'admin'::ba_site.app_role));

-- Create trigger for updated_at
CREATE TRIGGER update_lead_profiles_updated_at
  BEFORE UPDATE ON ba_site.lead_profiles
  FOR EACH ROW
  EXECUTE FUNCTION ba_site.handle_updated_at();

-- Create index for faster lookups
CREATE INDEX idx_lead_profiles_lead_id ON ba_site.lead_profiles(lead_id);
CREATE INDEX idx_lead_profiles_experiencia_ia ON ba_site.lead_profiles(experiencia_ia);
CREATE INDEX idx_lead_profiles_canal_aquisicao ON ba_site.lead_profiles(canal_aquisicao);-- Criar tabela newsletter_subscribers
CREATE TABLE ba_site.newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Dados básicos
  email TEXT UNIQUE NOT NULL,
  nome TEXT NOT NULL,
  whatsapp TEXT,
  
  -- Tracking
  anonymous_id UUID,
  lead_id UUID,
  
  -- Metadados de inscrição
  subscribed_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  subscription_source TEXT NOT NULL DEFAULT 'newsletter_page',
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  referrer TEXT,
  
  -- Status
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed', 'bounced')),
  unsubscribed_at TIMESTAMPTZ,
  
  -- Preferências
  preferences JSONB DEFAULT '{"frequency": "weekly", "topics": []}'::jsonb,
  
  -- Engajamento
  emails_sent INTEGER DEFAULT 0,
  emails_opened INTEGER DEFAULT 0,
  last_email_opened_at TIMESTAMPTZ,
  
  -- Auditoria
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  
  -- Foreign key opcional
  CONSTRAINT fk_lead FOREIGN KEY (lead_id) REFERENCES ba_site.leads(id) ON DELETE SET NULL
);

-- Índices para performance
CREATE INDEX idx_newsletter_email ON ba_site.newsletter_subscribers(email);
CREATE INDEX idx_newsletter_status ON ba_site.newsletter_subscribers(status);
CREATE INDEX idx_newsletter_anonymous_id ON ba_site.newsletter_subscribers(anonymous_id);
CREATE INDEX idx_newsletter_subscribed_at ON ba_site.newsletter_subscribers(subscribed_at DESC);

-- Trigger para updated_at
CREATE TRIGGER update_newsletter_updated_at
  BEFORE UPDATE ON ba_site.newsletter_subscribers
  FOR EACH ROW
  EXECUTE FUNCTION ba_site.handle_updated_at();

-- RLS Policies
ALTER TABLE ba_site.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Admins podem gerenciar tudo
CREATE POLICY "Admins can manage newsletter subscribers"
  ON ba_site.newsletter_subscribers
  FOR ALL
  USING (ba_site.has_role(auth.uid(), 'admin'));

-- Qualquer pessoa pode se inscrever
CREATE POLICY "Anyone can subscribe to newsletter"
  ON ba_site.newsletter_subscribers
  FOR INSERT
  WITH CHECK (true);-- Criar tabela de ratings de newsletter
CREATE TABLE ba_site.newsletter_ratings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Vinculação
  subscriber_id UUID NOT NULL REFERENCES ba_site.newsletter_subscribers(id) ON DELETE CASCADE,
  newsletter_edition TEXT NOT NULL,
  
  -- Rating
  rating INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
  
  -- Tracking
  anonymous_id UUID,
  ip_address INET,
  user_agent TEXT,
  
  -- UTM/Source
  utm_source TEXT DEFAULT 'newsletter',
  utm_medium TEXT DEFAULT 'email',
  utm_campaign TEXT,
  
  -- Timestamp
  rated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  
  -- Constraint: 1 voto por pessoa por edição
  UNIQUE(subscriber_id, newsletter_edition)
);

-- Índices para performance
CREATE INDEX idx_newsletter_ratings_subscriber ON ba_site.newsletter_ratings(subscriber_id);
CREATE INDEX idx_newsletter_ratings_edition ON ba_site.newsletter_ratings(newsletter_edition);
CREATE INDEX idx_newsletter_ratings_rating ON ba_site.newsletter_ratings(rating);
CREATE INDEX idx_newsletter_ratings_date ON ba_site.newsletter_ratings(rated_at DESC);

-- RLS
ALTER TABLE ba_site.newsletter_ratings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can view all ratings"
  ON ba_site.newsletter_ratings FOR SELECT
  USING (ba_site.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert ratings"
  ON ba_site.newsletter_ratings FOR INSERT
  WITH CHECK (ba_site.has_role(auth.uid(), 'admin'));

-- View para relatórios de performance
CREATE VIEW ba_site.vw_newsletter_performance AS
SELECT 
  nr.newsletter_edition,
  COUNT(DISTINCT nr.subscriber_id) AS total_ratings,
  ROUND(AVG(nr.rating), 2) AS avg_rating,
  COUNT(CASE WHEN nr.rating = 5 THEN 1 END) AS rating_5_count,
  COUNT(CASE WHEN nr.rating = 4 THEN 1 END) AS rating_4_count,
  COUNT(CASE WHEN nr.rating = 3 THEN 1 END) AS rating_3_count,
  COUNT(CASE WHEN nr.rating = 2 THEN 1 END) AS rating_2_count,
  COUNT(CASE WHEN nr.rating = 1 THEN 1 END) AS rating_1_count,
  MIN(nr.rated_at) AS first_rating_at,
  MAX(nr.rated_at) AS last_rating_at
FROM ba_site.newsletter_ratings nr
GROUP BY nr.newsletter_edition
ORDER BY first_rating_at DESC;-- Corrigir security definer na view vw_newsletter_performance
DROP VIEW IF EXISTS ba_site.vw_newsletter_performance;

CREATE VIEW ba_site.vw_newsletter_performance 
WITH (security_invoker=true)
AS
SELECT 
  nr.newsletter_edition,
  COUNT(DISTINCT nr.subscriber_id) AS total_ratings,
  ROUND(AVG(nr.rating), 2) AS avg_rating,
  COUNT(CASE WHEN nr.rating = 5 THEN 1 END) AS rating_5_count,
  COUNT(CASE WHEN nr.rating = 4 THEN 1 END) AS rating_4_count,
  COUNT(CASE WHEN nr.rating = 3 THEN 1 END) AS rating_3_count,
  COUNT(CASE WHEN nr.rating = 2 THEN 1 END) AS rating_2_count,
  COUNT(CASE WHEN nr.rating = 1 THEN 1 END) AS rating_1_count,
  MIN(nr.rated_at) AS first_rating_at,
  MAX(nr.rated_at) AS last_rating_at
FROM ba_site.newsletter_ratings nr
GROUP BY nr.newsletter_edition
ORDER BY first_rating_at DESC;-- Dropar a policy existente que está causando problemas
DROP POLICY IF EXISTS "Anyone can subscribe to newsletter" ON ba_site.newsletter_subscribers;

-- Recriar a policy permitindo INSERT sem restrições
CREATE POLICY "Anyone can subscribe to newsletter"
ON ba_site.newsletter_subscribers
FOR INSERT
TO public
WITH CHECK (true);

-- Garantir que lead_id aceita NULL (já deveria aceitar, mas confirmando)
ALTER TABLE ba_site.newsletter_subscribers 
ALTER COLUMN lead_id DROP NOT NULL;-- Tornar user_id nullable para permitir interações automáticas do sistema
ALTER TABLE ba_site.lead_interactions 
ALTER COLUMN user_id DROP NOT NULL;

-- Adicionar comentário para documentar
COMMENT ON COLUMN ba_site.lead_interactions.user_id IS 
'ID do usuário que registrou a interação. NULL para interações automáticas do sistema.';

-- Criar função de trigger para adicionar interação automática
CREATE OR REPLACE FUNCTION ba_site.add_lead_interaction_on_insert()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- Inserir interação automática baseada no produto
  INSERT INTO ba_site.lead_interactions (
    lead_id,
    user_id,
    tipo,
    descricao
  ) VALUES (
    NEW.id,
    NULL, -- Sistema automático
    'nota',
    CASE 
      WHEN NEW.produto = 'ia-do-zero' THEN 
        'Preencheu formulário de lead na Página IA do Zero para ir ao Checkout'
      WHEN NEW.produto = 'ia-para-negocios' THEN 
        'Preencheu formulário de lead na Página IA para Negócios'
      WHEN NEW.produto = 'newsletter' THEN 
        'Inscreveu-se na Newsletter'
      ELSE 
        'Cadastrou-se no sistema via ' || COALESCE(NEW.origem, 'origem desconhecida')
    END
  );
  
  RETURN NEW;
END;
$$;

-- Criar trigger que dispara após INSERT na tabela leads
CREATE TRIGGER trigger_add_lead_interaction_on_insert
  AFTER INSERT ON ba_site.leads
  FOR EACH ROW
  EXECUTE FUNCTION ba_site.add_lead_interaction_on_insert();-- 1. Consolidar leads duplicados existentes
DO $$
DECLARE
  r RECORD;
  lead_principal_id uuid;
BEGIN
  -- Para cada email duplicado, consolidar em um único lead
  FOR r IN (
    SELECT email, MIN(created_at) as primeira_data
    FROM ba_site.leads
    GROUP BY email
    HAVING COUNT(*) > 1
  ) LOOP
    -- Pegar o ID do lead mais antigo (principal)
    SELECT id INTO lead_principal_id
    FROM ba_site.leads
    WHERE email = r.email
    ORDER BY created_at ASC
    LIMIT 1;
    
    -- Migrar aliases (sem constraint de conflito)
    UPDATE ba_site.lead_aliases
    SET lead_id = lead_principal_id
    WHERE lead_id IN (
      SELECT id FROM ba_site.leads 
      WHERE email = r.email AND id != lead_principal_id
    );
    
    -- Migrar vendas Hotmart (sem constraint de conflito)
    UPDATE ba_site.hotmart_sales
    SET lead_id = lead_principal_id
    WHERE lead_id IN (
      SELECT id FROM ba_site.leads 
      WHERE email = r.email AND id != lead_principal_id
    );
    
    -- Para lead_funnel_positions, deletar duplicados no mesmo funil
    -- e manter apenas a posição mais recente no lead principal
    DELETE FROM ba_site.lead_funnel_positions
    WHERE lead_id IN (
      SELECT id FROM ba_site.leads 
      WHERE email = r.email AND id != lead_principal_id
    )
    AND funnel_id IN (
      SELECT funnel_id FROM ba_site.lead_funnel_positions
      WHERE lead_id = lead_principal_id
    );
    
    -- Migrar posições restantes (que não conflitam)
    UPDATE ba_site.lead_funnel_positions
    SET lead_id = lead_principal_id
    WHERE lead_id IN (
      SELECT id FROM ba_site.leads 
      WHERE email = r.email AND id != lead_principal_id
    );
    
    -- Migrar todas as interações dos duplicados para o principal
    UPDATE ba_site.lead_interactions
    SET lead_id = lead_principal_id
    WHERE lead_id IN (
      SELECT id FROM ba_site.leads 
      WHERE email = r.email AND id != lead_principal_id
    );
    
    -- Deletar leads duplicados
    DELETE FROM ba_site.leads
    WHERE email = r.email AND id != lead_principal_id;
  END LOOP;
END $$;

-- 2. Adicionar constraint UNIQUE no email
ALTER TABLE ba_site.leads 
ADD CONSTRAINT leads_email_unique UNIQUE (email);

-- 3. Ajustar RLS policies para permitir UPSERT público
DROP POLICY IF EXISTS "Anyone can insert leads" ON ba_site.leads;

-- Permitir INSERT
CREATE POLICY "Anyone can insert leads"
  ON ba_site.leads
  FOR INSERT
  WITH CHECK (true);

-- Permitir UPDATE baseado em email (para UPSERT funcionar)
CREATE POLICY "Anyone can update leads via email"
  ON ba_site.leads
  FOR UPDATE
  USING (true)
  WITH CHECK (true);

-- 4. Modificar trigger para funcionar em INSERT e UPDATE de produto
DROP TRIGGER IF EXISTS trigger_add_lead_interaction_on_insert ON ba_site.leads;
DROP FUNCTION IF EXISTS ba_site.add_lead_interaction_on_insert();

-- Nova função que detecta mudança de produto
CREATE OR REPLACE FUNCTION ba_site.add_lead_interaction_on_product_change()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  v_descricao text;
BEGIN
  -- Adicionar interação se for INSERT ou se o produto mudou
  IF (TG_OP = 'INSERT') OR (TG_OP = 'UPDATE' AND OLD.produto IS DISTINCT FROM NEW.produto) THEN
    
    -- Determinar descrição baseada no produto
    v_descricao := CASE 
      WHEN NEW.produto = 'ia-do-zero' THEN 
        'Preencheu formulário de lead na Página IA do Zero para ir ao Checkout'
      WHEN NEW.produto = 'ia-para-negocios' THEN 
        'Preencheu formulário de lead na Página IA para Negócios'
      WHEN NEW.produto = 'newsletter' THEN 
        'Inscreveu-se na Newsletter'
      ELSE 
        'Cadastrou-se no sistema via ' || COALESCE(NEW.origem, 'origem desconhecida')
    END;
    
    -- Inserir interação
    INSERT INTO ba_site.lead_interactions (
      lead_id,
      user_id,
      tipo,
      descricao
    ) VALUES (
      NEW.id,
      NULL, -- Sistema automático
      'nota',
      v_descricao
    );
    
  END IF;
  
  RETURN NEW;
END;
$$;

-- Criar trigger para INSERT e UPDATE de produto
CREATE TRIGGER trigger_add_lead_interaction_on_product_change
  AFTER INSERT OR UPDATE OF produto ON ba_site.leads
  FOR EACH ROW
  EXECUTE FUNCTION ba_site.add_lead_interaction_on_product_change();

-- Tornar email opcional na tabela leads
ALTER TABLE ba_site.leads 
ALTER COLUMN email DROP NOT NULL;-- Atualizar constraint de produto para incluir todos os produtos
ALTER TABLE ba_site.leads 
DROP CONSTRAINT IF EXISTS leads_produto_check;

ALTER TABLE ba_site.leads 
ADD CONSTRAINT leads_produto_check 
CHECK (produto = ANY (ARRAY[
  'ia-para-negocios'::text, 
  'ia-do-zero'::text, 
  'super-agentes'::text,
  'newsletter'::text,
  'consultoria'::text
]));-- Create cases table
CREATE TABLE ba_site.cases (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now(),
  titulo text NOT NULL,
  cliente_nome text NOT NULL,
  cliente_logo_url text,
  categoria text NOT NULL,
  setor text,
  descricao_curta text NOT NULL,
  desafio text NOT NULL,
  solucao text NOT NULL,
  resultados jsonb DEFAULT '[]'::jsonb,
  metrica_principal text NOT NULL,
  depoimento text,
  depoimento_autor text,
  depoimento_autor_cargo text,
  depoimento_autor_foto text,
  tecnologias_usadas text[] DEFAULT '{}'::text[],
  timeline text,
  status text NOT NULL DEFAULT 'rascunho',
  ordem integer NOT NULL DEFAULT 0,
  slug text UNIQUE
);

-- Enable RLS
ALTER TABLE ba_site.cases ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Anyone can view published cases"
ON ba_site.cases
FOR SELECT
USING (status = 'publicado');

CREATE POLICY "Admins can manage all cases"
ON ba_site.cases
FOR ALL
USING (ba_site.has_role(auth.uid(), 'admin'::ba_site.app_role));

-- Add trigger for updated_at
CREATE TRIGGER update_cases_updated_at
BEFORE UPDATE ON ba_site.cases
FOR EACH ROW
EXECUTE FUNCTION ba_site.handle_updated_at();

-- Insert initial cases from /ba page
INSERT INTO ba_site.cases (titulo, cliente_nome, categoria, setor, descricao_curta, desafio, solucao, metrica_principal, status, ordem, slug, resultados) VALUES
(
  'Prospecção de Obras Orientada por IA',
  'Construtora Regional',
  'Tecnologia',
  'Construção',
  'Implementação de sistema de IA para qualificação automática de leads no setor de construção civil.',
  'A construtora tinha dificuldade em identificar obras com alto potencial de conversão, desperdiçando tempo e recursos com leads não qualificados.',
  'Desenvolvemos um sistema de IA que analisa múltiplas fontes de dados públicos e privados para identificar e qualificar automaticamente obras com maior probabilidade de fechamento.',
  '+2x obras qualificadas',
  'publicado',
  1,
  'prospeccao-obras-ia',
  '[{"metrica": "Obras Qualificadas", "valor": "+200%", "descricao": "Aumento no número de obras qualificadas"}, {"metrica": "Tempo de Prospecção", "valor": "-60%", "descricao": "Redução no tempo gasto em prospecção"}, {"metrica": "Taxa de Conversão", "valor": "+85%", "descricao": "Aumento na taxa de conversão de leads"}]'::jsonb
),
(
  'Automação de Notas Fiscais',
  'Empresa de Serviços',
  'Operacional',
  'Serviços',
  'Automatização completa do processo de emissão e gestão de notas fiscais com IA.',
  'Processo manual de emissão de notas fiscais consumia horas da equipe administrativa e gerava erros frequentes.',
  'Implementamos um sistema automatizado que processa dados de vendas e emite notas fiscais automaticamente, com validação inteligente e integração com sistemas fiscais.',
  '+30% eficiência operacional',
  'publicado',
  2,
  'automacao-notas-fiscais',
  '[{"metrica": "Eficiência", "valor": "+30%", "descricao": "Aumento na eficiência operacional"}, {"metrica": "Erros", "valor": "-95%", "descricao": "Redução em erros de emissão"}, {"metrica": "Tempo", "valor": "-70%", "descricao": "Redução no tempo de processo"}]'::jsonb
),
(
  'Atendimento Inteligente 24/7',
  'E-commerce de Moda',
  'Customer Success',
  'E-commerce',
  'Chatbot com IA para atendimento automatizado e personalizado em tempo real.',
  'Alto volume de atendimentos repetitivos e dificuldade em manter atendimento 24/7 com qualidade.',
  'Desenvolvemos um assistente virtual com IA que resolve 80% das dúvidas automaticamente, com capacidade de aprendizado contínuo e integração com sistemas de vendas.',
  '+40% conversão',
  'publicado',
  3,
  'atendimento-inteligente-24-7',
  '[{"metrica": "Conversão", "valor": "+40%", "descricao": "Aumento na taxa de conversão"}, {"metrica": "Ticket Médio", "valor": "+25%", "descricao": "Aumento no ticket médio"}, {"metrica": "Satisfação", "valor": "4.8/5", "descricao": "Índice de satisfação do cliente"}]'::jsonb
),
(
  'Análise Preditiva de Vendas',
  'Distribuidora Nacional',
  'Vendas',
  'Distribuição',
  'Sistema de IA para previsão de demanda e otimização de estoque e vendas.',
  'Dificuldade em prever demanda resultava em rupturas de estoque e perda de vendas.',
  'Implementamos modelos de machine learning que analisam histórico de vendas, sazonalidade e variáveis externas para prever demanda com alta precisão.',
  '+25% receita',
  'publicado',
  4,
  'analise-preditiva-vendas',
  '[{"metrica": "Receita", "valor": "+25%", "descricao": "Aumento na receita total"}, {"metrica": "Ruptura", "valor": "-80%", "descricao": "Redução em rupturas de estoque"}, {"metrica": "Precisão", "valor": "92%", "descricao": "Precisão nas previsões"}]'::jsonb
),
(
  'Gestão de Campanhas com IA',
  'Agência de Marketing',
  'Marketing',
  'Marketing Digital',
  'Otimização automática de campanhas de mídia paga com inteligência artificial.',
  'Alto custo por lead e dificuldade em otimizar múltiplas campanhas simultaneamente.',
  'Desenvolvemos um sistema que ajusta automaticamente lances, segmentações e criativos baseado em performance em tempo real.',
  '-35% custo por lead',
  'publicado',
  5,
  'gestao-campanhas-ia',
  '[{"metrica": "Custo por Lead", "valor": "-35%", "descricao": "Redução no custo por lead"}, {"metrica": "ROI", "valor": "+120%", "descricao": "Aumento no retorno sobre investimento"}, {"metrica": "Alcance", "valor": "+60%", "descricao": "Aumento no alcance orgânico"}]'::jsonb
),
(
  'Onboarding Automatizado',
  'Empresa de Tecnologia',
  'RH',
  'Tecnologia',
  'Plataforma de onboarding inteligente com personalização e acompanhamento automatizado.',
  'Processo de onboarding lento e padronizado não engajava novos colaboradores adequadamente.',
  'Criamos uma plataforma que personaliza a jornada de onboarding com IA, adaptando conteúdo e ritmo ao perfil de cada colaborador.',
  '50% mais rápido',
  'publicado',
  6,
  'onboarding-automatizado',
  '[{"metrica": "Tempo", "valor": "-50%", "descricao": "Redução no tempo de onboarding"}, {"metrica": "Engajamento", "valor": "+75%", "descricao": "Aumento no engajamento"}, {"metrica": "Retenção", "valor": "+40%", "descricao": "Melhora na retenção em 90 dias"}]'::jsonb
);-- Adicionar ebook-20-skills ao check constraint de produto
ALTER TABLE ba_site.leads
DROP CONSTRAINT IF EXISTS leads_produto_check;

ALTER TABLE ba_site.leads
ADD CONSTRAINT leads_produto_check
CHECK (produto = ANY (ARRAY[
  'ia-para-negocios'::text,
  'ia-do-zero'::text,
  'super-agentes'::text,
  'newsletter'::text,
  'consultoria'::text,
  'ebook-20-skills'::text
]));
