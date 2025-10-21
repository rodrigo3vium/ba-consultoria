-- 1. Consolidar leads duplicados existentes
DO $$
DECLARE
  r RECORD;
  lead_principal_id uuid;
BEGIN
  -- Para cada email duplicado, consolidar em um único lead
  FOR r IN (
    SELECT email, MIN(created_at) as primeira_data
    FROM public.leads
    GROUP BY email
    HAVING COUNT(*) > 1
  ) LOOP
    -- Pegar o ID do lead mais antigo (principal)
    SELECT id INTO lead_principal_id
    FROM public.leads
    WHERE email = r.email
    ORDER BY created_at ASC
    LIMIT 1;
    
    -- Migrar aliases (sem constraint de conflito)
    UPDATE public.lead_aliases
    SET lead_id = lead_principal_id
    WHERE lead_id IN (
      SELECT id FROM public.leads 
      WHERE email = r.email AND id != lead_principal_id
    );
    
    -- Migrar vendas Hotmart (sem constraint de conflito)
    UPDATE public.hotmart_sales
    SET lead_id = lead_principal_id
    WHERE lead_id IN (
      SELECT id FROM public.leads 
      WHERE email = r.email AND id != lead_principal_id
    );
    
    -- Para lead_funnel_positions, deletar duplicados no mesmo funil
    -- e manter apenas a posição mais recente no lead principal
    DELETE FROM public.lead_funnel_positions
    WHERE lead_id IN (
      SELECT id FROM public.leads 
      WHERE email = r.email AND id != lead_principal_id
    )
    AND funnel_id IN (
      SELECT funnel_id FROM public.lead_funnel_positions
      WHERE lead_id = lead_principal_id
    );
    
    -- Migrar posições restantes (que não conflitam)
    UPDATE public.lead_funnel_positions
    SET lead_id = lead_principal_id
    WHERE lead_id IN (
      SELECT id FROM public.leads 
      WHERE email = r.email AND id != lead_principal_id
    );
    
    -- Migrar todas as interações dos duplicados para o principal
    UPDATE public.lead_interactions
    SET lead_id = lead_principal_id
    WHERE lead_id IN (
      SELECT id FROM public.leads 
      WHERE email = r.email AND id != lead_principal_id
    );
    
    -- Deletar leads duplicados
    DELETE FROM public.leads
    WHERE email = r.email AND id != lead_principal_id;
  END LOOP;
END $$;

-- 2. Adicionar constraint UNIQUE no email
ALTER TABLE public.leads 
ADD CONSTRAINT leads_email_unique UNIQUE (email);

-- 3. Ajustar RLS policies para permitir UPSERT público
DROP POLICY IF EXISTS "Anyone can insert leads" ON public.leads;

-- Permitir INSERT
CREATE POLICY "Anyone can insert leads"
  ON public.leads
  FOR INSERT
  WITH CHECK (true);

-- Permitir UPDATE baseado em email (para UPSERT funcionar)
CREATE POLICY "Anyone can update leads via email"
  ON public.leads
  FOR UPDATE
  USING (true)
  WITH CHECK (true);

-- 4. Modificar trigger para funcionar em INSERT e UPDATE de produto
DROP TRIGGER IF EXISTS trigger_add_lead_interaction_on_insert ON public.leads;
DROP FUNCTION IF EXISTS public.add_lead_interaction_on_insert();

-- Nova função que detecta mudança de produto
CREATE OR REPLACE FUNCTION public.add_lead_interaction_on_product_change()
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
    INSERT INTO public.lead_interactions (
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
  AFTER INSERT OR UPDATE OF produto ON public.leads
  FOR EACH ROW
  EXECUTE FUNCTION public.add_lead_interaction_on_product_change();