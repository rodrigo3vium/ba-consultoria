-- Criar tabela para captura de leads dos produtos educacionais
CREATE TABLE public.leads (
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
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Policy para permitir inserção de leads por qualquer pessoa (não autenticada)
CREATE POLICY "Anyone can insert leads" 
ON public.leads 
FOR INSERT 
WITH CHECK (true);

-- Policy para admins verem os leads
CREATE POLICY "Admins can view leads" 
ON public.leads 
FOR SELECT 
USING (has_role(auth.uid(), 'admin'::app_role));

-- Criar índice para melhor performance nas consultas
CREATE INDEX idx_leads_produto ON public.leads(produto);
CREATE INDEX idx_leads_created_at ON public.leads(created_at DESC);