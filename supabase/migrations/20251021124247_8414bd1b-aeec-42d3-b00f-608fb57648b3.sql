-- Tornar user_id nullable para permitir interações automáticas do sistema
ALTER TABLE public.lead_interactions 
ALTER COLUMN user_id DROP NOT NULL;

-- Adicionar comentário para documentar
COMMENT ON COLUMN public.lead_interactions.user_id IS 
'ID do usuário que registrou a interação. NULL para interações automáticas do sistema.';

-- Criar função de trigger para adicionar interação automática
CREATE OR REPLACE FUNCTION public.add_lead_interaction_on_insert()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- Inserir interação automática baseada no produto
  INSERT INTO public.lead_interactions (
    lead_id,
    user_id,
    tipo,
    descricao
  ) VALUES (
    NEW.id,
    NULL, -- Sistema automático
    'nota',
    CASE 
      WHEN NEW.produto = 'ia-do-zero' THEN 
        'Preencheu formulário de lead na Página IA do Zero para ir ao Checkout'
      WHEN NEW.produto = 'ia-para-negocios' THEN 
        'Preencheu formulário de lead na Página IA para Negócios'
      WHEN NEW.produto = 'newsletter' THEN 
        'Inscreveu-se na Newsletter'
      ELSE 
        'Cadastrou-se no sistema via ' || COALESCE(NEW.origem, 'origem desconhecida')
    END
  );
  
  RETURN NEW;
END;
$$;

-- Criar trigger que dispara após INSERT na tabela leads
CREATE TRIGGER trigger_add_lead_interaction_on_insert
  AFTER INSERT ON public.leads
  FOR EACH ROW
  EXECUTE FUNCTION public.add_lead_interaction_on_insert();