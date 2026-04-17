-- Adicionar ebook-20-skills ao check constraint de produto
ALTER TABLE public.leads
DROP CONSTRAINT IF EXISTS leads_produto_check;

ALTER TABLE public.leads
ADD CONSTRAINT leads_produto_check
CHECK (produto = ANY (ARRAY[
  'ia-para-negocios'::text,
  'ia-do-zero'::text,
  'super-agentes'::text,
  'newsletter'::text,
  'consultoria'::text,
  'ebook-20-skills'::text
]));
