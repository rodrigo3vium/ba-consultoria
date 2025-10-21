-- Criar as 3 interações retroativas para Hernandes Cruz
INSERT INTO public.lead_interactions (lead_id, user_id, tipo, descricao, created_at)
VALUES 
  -- Interação 1: IA do Zero (mais antiga)
  (
    '42e182ca-005e-4505-b5e3-bb35a7df6890',
    NULL,
    'nota',
    'Preencheu formulário de lead na Página IA do Zero para ir ao Checkout',
    '2025-10-20 01:15:08+00'
  ),
  -- Interação 2: Newsletter
  (
    '42e182ca-005e-4505-b5e3-bb35a7df6890',
    NULL,
    'nota',
    'Inscreveu-se na Newsletter',
    '2025-10-20 12:00:00+00'
  ),
  -- Interação 3: IA para Negócios (atual)
  (
    '42e182ca-005e-4505-b5e3-bb35a7df6890',
    NULL,
    'nota',
    'Preencheu formulário de lead na Página IA para Negócios',
    '2025-10-21 01:15:08+00'
  );

-- Atualizar score do Hernandes
UPDATE public.leads
SET 
  score = 60,
  score_updated_at = NOW()
WHERE id = '42e182ca-005e-4505-b5e3-bb35a7df6890';

-- Criar função temporária para corrigir todos os outros leads sem interações
CREATE OR REPLACE FUNCTION public.create_missing_interactions()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  v_lead RECORD;
  v_descricao text;
BEGIN
  FOR v_lead IN 
    SELECT l.id, l.produto, l.created_at
    FROM public.leads l
    LEFT JOIN public.lead_interactions li ON l.id = li.lead_id
    WHERE li.id IS NULL
  LOOP
    v_descricao := CASE 
      WHEN v_lead.produto = 'ia-do-zero' THEN 
        'Preencheu formulário de lead na Página IA do Zero para ir ao Checkout'
      WHEN v_lead.produto = 'ia-para-negocios' THEN 
        'Preencheu formulário de lead na Página IA para Negócios'
      WHEN v_lead.produto = 'newsletter' THEN 
        'Inscreveu-se na Newsletter'
      ELSE 
        'Cadastrou-se no sistema via ' || COALESCE(v_lead.produto, 'origem desconhecida')
    END;
    
    INSERT INTO public.lead_interactions (lead_id, user_id, tipo, descricao, created_at)
    VALUES (v_lead.id, NULL, 'nota', v_descricao, v_lead.created_at);
  END LOOP;
END;
$$;

-- Executar a função para corrigir todos os leads
SELECT public.create_missing_interactions();

-- Remover a função após uso
DROP FUNCTION public.create_missing_interactions();