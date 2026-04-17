-- Remover a interação falsa da Newsletter do Hernandes Cruz
DELETE FROM public.lead_interactions
WHERE lead_id = '42e182ca-005e-4505-b5e3-bb35a7df6890'
  AND tipo = 'nota'
  AND descricao = 'Inscreveu-se na Newsletter';

-- Ajustar o score para 40 pontos (2 formulários × 20 pontos)
UPDATE public.leads
SET 
  score = 40,
  score_updated_at = NOW()
WHERE id = '42e182ca-005e-4505-b5e3-bb35a7df6890';