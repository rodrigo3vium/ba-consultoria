-- Create lead_profiles table for Go-to-Market mapping data
CREATE TABLE public.lead_profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  lead_id UUID NOT NULL UNIQUE REFERENCES public.leads(id) ON DELETE CASCADE,
  
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
ALTER TABLE public.lead_profiles ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Admins can view all profiles"
  ON public.lead_profiles
  FOR SELECT
  USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can insert profiles"
  ON public.lead_profiles
  FOR INSERT
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update profiles"
  ON public.lead_profiles
  FOR UPDATE
  USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete profiles"
  ON public.lead_profiles
  FOR DELETE
  USING (has_role(auth.uid(), 'admin'::app_role));

-- Create trigger for updated_at
CREATE TRIGGER update_lead_profiles_updated_at
  BEFORE UPDATE ON public.lead_profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- Create index for faster lookups
CREATE INDEX idx_lead_profiles_lead_id ON public.lead_profiles(lead_id);
CREATE INDEX idx_lead_profiles_experiencia_ia ON public.lead_profiles(experiencia_ia);
CREATE INDEX idx_lead_profiles_canal_aquisicao ON public.lead_profiles(canal_aquisicao);