-- Remove constraint antiga
ALTER TABLE public.leads DROP CONSTRAINT IF EXISTS leads_produto_check;

-- Cria nova constraint incluindo super-agentes
ALTER TABLE public.leads ADD CONSTRAINT leads_produto_check 
  CHECK (produto = ANY (ARRAY[
    'ia-para-negocios'::text, 
    'ia-do-zero'::text,
    'super-agentes'::text
  ]));