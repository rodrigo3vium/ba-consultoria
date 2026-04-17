-- Create funnels table
CREATE TABLE public.funnels (
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
CREATE TABLE public.funnel_stages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  funnel_id UUID NOT NULL REFERENCES public.funnels(id) ON DELETE CASCADE,
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
CREATE TABLE public.lead_funnel_positions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  lead_id UUID NOT NULL REFERENCES public.leads(id) ON DELETE CASCADE,
  funnel_id UUID NOT NULL REFERENCES public.funnels(id) ON DELETE CASCADE,
  stage_id UUID NOT NULL REFERENCES public.funnel_stages(id) ON DELETE CASCADE,
  entrada_etapa_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(lead_id, funnel_id)
);

-- Create funnel_history table
CREATE TABLE public.funnel_history (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  lead_id UUID NOT NULL REFERENCES public.leads(id) ON DELETE CASCADE,
  funnel_id UUID NOT NULL REFERENCES public.funnels(id) ON DELETE CASCADE,
  stage_from_id UUID REFERENCES public.funnel_stages(id) ON DELETE SET NULL,
  stage_to_id UUID REFERENCES public.funnel_stages(id) ON DELETE SET NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  observacao TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.funnels ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.funnel_stages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lead_funnel_positions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.funnel_history ENABLE ROW LEVEL SECURITY;

-- RLS Policies for funnels
CREATE POLICY "Admins can manage funnels"
ON public.funnels
FOR ALL
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Anyone can view active funnels"
ON public.funnels
FOR SELECT
USING (ativo = true);

-- RLS Policies for funnel_stages
CREATE POLICY "Admins can manage funnel stages"
ON public.funnel_stages
FOR ALL
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Anyone can view active stages"
ON public.funnel_stages
FOR SELECT
USING (ativo = true);

-- RLS Policies for lead_funnel_positions
CREATE POLICY "Admins can manage lead positions"
ON public.lead_funnel_positions
FOR ALL
USING (public.has_role(auth.uid(), 'admin'));

-- RLS Policies for funnel_history
CREATE POLICY "Admins can view funnel history"
ON public.funnel_history
FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert funnel history"
ON public.funnel_history
FOR INSERT
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Triggers for updated_at
CREATE TRIGGER update_funnels_updated_at
BEFORE UPDATE ON public.funnels
FOR EACH ROW
EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER update_funnel_stages_updated_at
BEFORE UPDATE ON public.funnel_stages
FOR EACH ROW
EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER update_lead_funnel_positions_updated_at
BEFORE UPDATE ON public.lead_funnel_positions
FOR EACH ROW
EXECUTE FUNCTION public.handle_updated_at();

-- Create indexes for performance
CREATE INDEX idx_funnel_stages_funnel_id ON public.funnel_stages(funnel_id);
CREATE INDEX idx_lead_funnel_positions_lead_id ON public.lead_funnel_positions(lead_id);
CREATE INDEX idx_lead_funnel_positions_funnel_id ON public.lead_funnel_positions(funnel_id);
CREATE INDEX idx_lead_funnel_positions_stage_id ON public.lead_funnel_positions(stage_id);
CREATE INDEX idx_funnel_history_lead_id ON public.funnel_history(lead_id);
CREATE INDEX idx_funnel_history_funnel_id ON public.funnel_history(funnel_id);

-- Insert default funnel with stages
INSERT INTO public.funnels (nome, descricao, cor, ordem, ativo) 
VALUES ('Funil Padrão', 'Funil de vendas padrão', '#3B82F6', 1, true);

INSERT INTO public.funnel_stages (funnel_id, nome, descricao, ordem, cor, probabilidade, ativo)
SELECT 
  f.id,
  stage.nome,
  stage.descricao,
  stage.ordem,
  stage.cor,
  stage.probabilidade,
  true
FROM public.funnels f
CROSS JOIN (
  VALUES 
    ('Descoberta', 'Lead em fase inicial de descoberta', 1, '#9CA3AF', 10),
    ('Qualificado', 'Lead qualificado e com potencial', 2, '#60A5FA', 30),
    ('Proposta Enviada', 'Proposta comercial enviada', 3, '#FBBF24', 50),
    ('Negociação', 'Em processo de negociação', 4, '#F59E0B', 70),
    ('Fechado Ganho', 'Negócio fechado com sucesso', 5, '#10B981', 100),
    ('Fechado Perdido', 'Oportunidade perdida', 6, '#EF4444', 0)
) AS stage(nome, descricao, ordem, cor, probabilidade)
WHERE f.nome = 'Funil Padrão';