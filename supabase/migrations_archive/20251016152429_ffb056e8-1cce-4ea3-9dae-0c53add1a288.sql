-- Criar tabela newsletter_subscribers
CREATE TABLE newsletter_subscribers (
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
  CONSTRAINT fk_lead FOREIGN KEY (lead_id) REFERENCES leads(id) ON DELETE SET NULL
);

-- Índices para performance
CREATE INDEX idx_newsletter_email ON newsletter_subscribers(email);
CREATE INDEX idx_newsletter_status ON newsletter_subscribers(status);
CREATE INDEX idx_newsletter_anonymous_id ON newsletter_subscribers(anonymous_id);
CREATE INDEX idx_newsletter_subscribed_at ON newsletter_subscribers(subscribed_at DESC);

-- Trigger para updated_at
CREATE TRIGGER update_newsletter_updated_at
  BEFORE UPDATE ON newsletter_subscribers
  FOR EACH ROW
  EXECUTE FUNCTION handle_updated_at();

-- RLS Policies
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Admins podem gerenciar tudo
CREATE POLICY "Admins can manage newsletter subscribers"
  ON newsletter_subscribers
  FOR ALL
  USING (has_role(auth.uid(), 'admin'));

-- Qualquer pessoa pode se inscrever
CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers
  FOR INSERT
  WITH CHECK (true);