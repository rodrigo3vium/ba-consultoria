-- Create cases table
CREATE TABLE public.cases (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now(),
  titulo text NOT NULL,
  cliente_nome text NOT NULL,
  cliente_logo_url text,
  categoria text NOT NULL,
  setor text,
  descricao_curta text NOT NULL,
  desafio text NOT NULL,
  solucao text NOT NULL,
  resultados jsonb DEFAULT '[]'::jsonb,
  metrica_principal text NOT NULL,
  depoimento text,
  depoimento_autor text,
  depoimento_autor_cargo text,
  depoimento_autor_foto text,
  tecnologias_usadas text[] DEFAULT '{}'::text[],
  timeline text,
  status text NOT NULL DEFAULT 'rascunho',
  ordem integer NOT NULL DEFAULT 0,
  slug text UNIQUE
);

-- Enable RLS
ALTER TABLE public.cases ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Anyone can view published cases"
ON public.cases
FOR SELECT
USING (status = 'publicado');

CREATE POLICY "Admins can manage all cases"
ON public.cases
FOR ALL
USING (has_role(auth.uid(), 'admin'::app_role));

-- Add trigger for updated_at
CREATE TRIGGER update_cases_updated_at
BEFORE UPDATE ON public.cases
FOR EACH ROW
EXECUTE FUNCTION public.handle_updated_at();

-- Insert initial cases from /ba page
INSERT INTO public.cases (titulo, cliente_nome, categoria, setor, descricao_curta, desafio, solucao, metrica_principal, status, ordem, slug, resultados) VALUES
(
  'Prospecção de Obras Orientada por IA',
  'Construtora Regional',
  'Tecnologia',
  'Construção',
  'Implementação de sistema de IA para qualificação automática de leads no setor de construção civil.',
  'A construtora tinha dificuldade em identificar obras com alto potencial de conversão, desperdiçando tempo e recursos com leads não qualificados.',
  'Desenvolvemos um sistema de IA que analisa múltiplas fontes de dados públicos e privados para identificar e qualificar automaticamente obras com maior probabilidade de fechamento.',
  '+2x obras qualificadas',
  'publicado',
  1,
  'prospeccao-obras-ia',
  '[{"metrica": "Obras Qualificadas", "valor": "+200%", "descricao": "Aumento no número de obras qualificadas"}, {"metrica": "Tempo de Prospecção", "valor": "-60%", "descricao": "Redução no tempo gasto em prospecção"}, {"metrica": "Taxa de Conversão", "valor": "+85%", "descricao": "Aumento na taxa de conversão de leads"}]'::jsonb
),
(
  'Automação de Notas Fiscais',
  'Empresa de Serviços',
  'Operacional',
  'Serviços',
  'Automatização completa do processo de emissão e gestão de notas fiscais com IA.',
  'Processo manual de emissão de notas fiscais consumia horas da equipe administrativa e gerava erros frequentes.',
  'Implementamos um sistema automatizado que processa dados de vendas e emite notas fiscais automaticamente, com validação inteligente e integração com sistemas fiscais.',
  '+30% eficiência operacional',
  'publicado',
  2,
  'automacao-notas-fiscais',
  '[{"metrica": "Eficiência", "valor": "+30%", "descricao": "Aumento na eficiência operacional"}, {"metrica": "Erros", "valor": "-95%", "descricao": "Redução em erros de emissão"}, {"metrica": "Tempo", "valor": "-70%", "descricao": "Redução no tempo de processo"}]'::jsonb
),
(
  'Atendimento Inteligente 24/7',
  'E-commerce de Moda',
  'Customer Success',
  'E-commerce',
  'Chatbot com IA para atendimento automatizado e personalizado em tempo real.',
  'Alto volume de atendimentos repetitivos e dificuldade em manter atendimento 24/7 com qualidade.',
  'Desenvolvemos um assistente virtual com IA que resolve 80% das dúvidas automaticamente, com capacidade de aprendizado contínuo e integração com sistemas de vendas.',
  '+40% conversão',
  'publicado',
  3,
  'atendimento-inteligente-24-7',
  '[{"metrica": "Conversão", "valor": "+40%", "descricao": "Aumento na taxa de conversão"}, {"metrica": "Ticket Médio", "valor": "+25%", "descricao": "Aumento no ticket médio"}, {"metrica": "Satisfação", "valor": "4.8/5", "descricao": "Índice de satisfação do cliente"}]'::jsonb
),
(
  'Análise Preditiva de Vendas',
  'Distribuidora Nacional',
  'Vendas',
  'Distribuição',
  'Sistema de IA para previsão de demanda e otimização de estoque e vendas.',
  'Dificuldade em prever demanda resultava em rupturas de estoque e perda de vendas.',
  'Implementamos modelos de machine learning que analisam histórico de vendas, sazonalidade e variáveis externas para prever demanda com alta precisão.',
  '+25% receita',
  'publicado',
  4,
  'analise-preditiva-vendas',
  '[{"metrica": "Receita", "valor": "+25%", "descricao": "Aumento na receita total"}, {"metrica": "Ruptura", "valor": "-80%", "descricao": "Redução em rupturas de estoque"}, {"metrica": "Precisão", "valor": "92%", "descricao": "Precisão nas previsões"}]'::jsonb
),
(
  'Gestão de Campanhas com IA',
  'Agência de Marketing',
  'Marketing',
  'Marketing Digital',
  'Otimização automática de campanhas de mídia paga com inteligência artificial.',
  'Alto custo por lead e dificuldade em otimizar múltiplas campanhas simultaneamente.',
  'Desenvolvemos um sistema que ajusta automaticamente lances, segmentações e criativos baseado em performance em tempo real.',
  '-35% custo por lead',
  'publicado',
  5,
  'gestao-campanhas-ia',
  '[{"metrica": "Custo por Lead", "valor": "-35%", "descricao": "Redução no custo por lead"}, {"metrica": "ROI", "valor": "+120%", "descricao": "Aumento no retorno sobre investimento"}, {"metrica": "Alcance", "valor": "+60%", "descricao": "Aumento no alcance orgânico"}]'::jsonb
),
(
  'Onboarding Automatizado',
  'Empresa de Tecnologia',
  'RH',
  'Tecnologia',
  'Plataforma de onboarding inteligente com personalização e acompanhamento automatizado.',
  'Processo de onboarding lento e padronizado não engajava novos colaboradores adequadamente.',
  'Criamos uma plataforma que personaliza a jornada de onboarding com IA, adaptando conteúdo e ritmo ao perfil de cada colaborador.',
  '50% mais rápido',
  'publicado',
  6,
  'onboarding-automatizado',
  '[{"metrica": "Tempo", "valor": "-50%", "descricao": "Redução no tempo de onboarding"}, {"metrica": "Engajamento", "valor": "+75%", "descricao": "Aumento no engajamento"}, {"metrica": "Retenção", "valor": "+40%", "descricao": "Melhora na retenção em 90 dias"}]'::jsonb
);