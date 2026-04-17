-- Criar função para adicionar automaticamente novos leads ao funil padrão
CREATE OR REPLACE FUNCTION public.add_lead_to_default_funnel()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_default_funnel_id uuid;
  v_first_stage_id uuid;
BEGIN
  -- Buscar o funil padrão (primeiro funil ativo por ordem)
  SELECT id INTO v_default_funnel_id
  FROM public.funnels
  WHERE ativo = true
  ORDER BY ordem ASC
  LIMIT 1;

  -- Se existe um funil padrão, buscar a primeira etapa
  IF v_default_funnel_id IS NOT NULL THEN
    SELECT id INTO v_first_stage_id
    FROM public.funnel_stages
    WHERE funnel_id = v_default_funnel_id
      AND ativo = true
    ORDER BY ordem ASC
    LIMIT 1;

    -- Se existe uma etapa, adicionar o lead
    IF v_first_stage_id IS NOT NULL THEN
      INSERT INTO public.lead_funnel_positions (
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
DROP TRIGGER IF EXISTS trigger_add_lead_to_default_funnel ON public.leads;
CREATE TRIGGER trigger_add_lead_to_default_funnel
  AFTER INSERT ON public.leads
  FOR EACH ROW
  EXECUTE FUNCTION public.add_lead_to_default_funnel();