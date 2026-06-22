// Acervo de ideias de aplicação de IA — vitrine/biblioteca de casos de uso.
// Dataset estático: cada ideia é título + descrição + área (sem status, sem fontes).

export interface AcervoIdea {
  id: string;
  title: string;
  description: string;
  area: string;
}

export const ACERVO_AREAS = [
  "Saúde & Clínicas",
  "Jurídico & Advocacia",
  "Imobiliário & Veículos",
  "Varejo, E-commerce & Negócio Local",
  "Marketing, Vendas & SDR",
  "Gestão, Produtividade & Operações Internas",
  "Finanças & Contábil",
  "RH, Carreira & Educação",
  "Nutrição & Saúde Pessoal",
  "Indústria, B2B & Dados",
  "Infraestrutura WhatsApp & as-a-Service",
  "Conteúdo, Mídia & Criativo",
  "Companhia & Suporte Emocional",
  "Ferramentas Horizontais & Dev",
] as const;

export const acervoIdeas: AcervoIdea[] = [
  // 1. Saúde & Clínicas
  {
    id: "agente-secretaria-clinica",
    title: "Agente de atendimento/secretária para clínica",
    description:
      "Recebe lead, qualifica, agenda, faz follow-up e confirma presença pra derrubar no-show. É o caso de uso mais recorrente do grupo.",
    area: "Saúde & Clínicas",
  },
  {
    id: "agente-secretario-erp-clinica",
    title: "Agente-secretário integrado a ERP de clínica",
    description:
      "Agenda direto no sistema de gestão (pilates/fisio), com multiagenda e checagem do closer anterior; esbarra em ERP sem API aberta.",
    area: "Saúde & Clínicas",
  },
  {
    id: "ia-palavra-chave-foto-humano",
    title: "IA + palavra-chave pra escalar foto pra humano",
    description:
      "Em estética/HOF, a IA atende; quando chega uma foto, ela silencia, a médica marca o rosto e devolve pra IA via palavra-chave imperceptível.",
    area: "Saúde & Clínicas",
  },
  {
    id: "avaliacao-foto-rosto-visao-computacional",
    title: "Avaliação de foto de rosto por visão computacional",
    description:
      "OpenCV lê o rosto e manda pra IA analisar o procedimento indicado.",
    area: "Saúde & Clínicas",
  },
  {
    id: "ia-otimizacao-operacional-clinica",
    title: "IA de otimização operacional pra clínica (lucro)",
    description:
      "Parceria com método de clínica lucrativa pra oferecer um agente que aumenta a margem da operação.",
    area: "Saúde & Clínicas",
  },
  {
    id: "colar-consulta-medica-cluely",
    title: "Copiloto em consulta médica (estilo Cluely)",
    description:
      "Copiloto que ajuda o médico durante a consulta, sugerindo conduta e capturando informação em tempo real.",
    area: "Saúde & Clínicas",
  },
  {
    id: "neto-de-bolso-companhia-idosos",
    title: "\"Neto de bolso\" — companhia de IA pra idosos",
    description:
      "Assistente de companhia e suporte pra pessoas idosas (MVP explorado).",
    area: "Saúde & Clínicas",
  },

  // 2. Jurídico & Advocacia
  {
    id: "robo-criacao-revisao-contratos",
    title: "Robô que cria e revisa contratos",
    description:
      "Primeiro produto pro nicho jurídico: análise e geração de contratos B2B.",
    area: "Jurídico & Advocacia",
  },
  {
    id: "crm-juridico-processos-intimacoes-whatsapp",
    title: "CRM jurídico + API de processos + intimações no WhatsApp",
    description:
      "Integra Datajud/Jusbrasil e resume intimações direto no WhatsApp do advogado.",
    area: "Jurídico & Advocacia",
  },
  {
    id: "chatbot-concurseiros-oab",
    title: "Chatbot pra concurseiros / prova da OAB",
    description:
      "Assistente de estudos focado em concursos públicos e exame da OAB.",
    area: "Jurídico & Advocacia",
  },
  {
    id: "rag-decisoes-juiz",
    title: "RAG de decisões/sentenças de um juiz específico",
    description:
      "Modela as decisões de um magistrado pra prever sua postura e orientar a estratégia processual.",
    area: "Jurídico & Advocacia",
  },
  {
    id: "automacao-contratos-fornecimento",
    title: "Automação de preenchimento de contratos de fornecimento",
    description:
      "Preenche campos variáveis (nome, prazo, quantidade) em templates .docx e em memorandos.",
    area: "Jurídico & Advocacia",
  },
  {
    id: "infra-ia-escritorio-advocacia",
    title: "Infra de IA pra escritório de advocacia",
    description:
      "Centraliza os dados no ClickUp e usa uma IA SDR como porta de entrada, com upsell de serviços.",
    area: "Jurídico & Advocacia",
  },
  {
    id: "automacao-processos-repetitivos-escritorio",
    title: "Automação de processos repetitivos de escritório",
    description:
      "Economiza horas de trabalho manual; inclui análise de Instagram de alunos pra infoprodutora de advocacia.",
    area: "Jurídico & Advocacia",
  },

  // 3. Imobiliário & Veículos
  {
    id: "classificados-veiculos-consultor-sdr",
    title: "Classificados de veículos com consultor automotivo IA + SDR",
    description:
      "Recomenda os 3 melhores carros por necessidade e orçamento, com SDR integrado.",
    area: "Imobiliário & Veículos",
  },
  {
    id: "agente-recomendacao-carro-rag",
    title: "Agente de recomendação de carro por tags/RAG",
    description:
      "Filtra o estoque por perfil (\"família\", \"SUV\") e indica os carros certos pra cada cliente.",
    area: "Imobiliário & Veículos",
  },
  {
    id: "agente-imobiliaria",
    title: "Agente pra imobiliária",
    description:
      "Consulta empreendimentos via API de imóveis, direciona por margem, capta dados pro CRM e passa pro vendedor fechar.",
    area: "Imobiliário & Veículos",
  },
  {
    id: "atendimento-multicanal-loja-carros",
    title: "Atendimento multicanal pra loja de carros + controle de estoque",
    description:
      "Atende em WhatsApp, Instagram, Facebook e OLX (300-500 msgs/dia) com controle de estoque integrado.",
    area: "Imobiliário & Veículos",
  },

  // 4. Varejo, E-commerce & Negócio Local
  {
    id: "robo-atendimento-ecommerce-upsell",
    title: "Robô de atendimento pra e-commerce + upsell",
    description:
      "Tira dúvidas, faz upsell e leva o cliente pro site pra fechar a compra.",
    area: "Varejo, E-commerce & Negócio Local",
  },
  {
    id: "atendimento-qualificacao-negocio-local",
    title: "Atendimento/qualificação pra negócio local",
    description:
      "Resolve o gargalo de mensagens não respondidas — atende e qualifica o que os humanos não dão conta.",
    area: "Varejo, E-commerce & Negócio Local",
  },
  {
    id: "agente-consultivo-bike-eletrica",
    title: "Agente consultivo pra loja de bike elétrica",
    description:
      "Entende o uso e a limitação do cliente, indica o produto certo e vira até demo de vendas.",
    area: "Varejo, E-commerce & Negócio Local",
  },
  {
    id: "recomendacao-produto-mix-grande",
    title: "Recomendação de produto com mix grande (500+ SKUs)",
    description:
      "Usa RAG + planilha de prioridades pra definir o que ofertar dentro de um catálogo enorme.",
    area: "Varejo, E-commerce & Negócio Local",
  },
  {
    id: "reativacao-proativa-cliente-delivery",
    title: "Reativação proativa de cliente (delivery)",
    description:
      "Manda mensagem de recompra personalizada (\"vi que você não pede pizza há 30 dias…\") no melhor horário.",
    area: "Varejo, E-commerce & Negócio Local",
  },

  // 5. Marketing, Vendas & SDR
  {
    id: "agente-sdr-bdr-prospeccao-whatsapp",
    title: "Agente SDR/BDR de prospecção ativa no WhatsApp",
    description:
      "Dispara mensagens personalizadas a partir de extração e enriquecimento de leads.",
    area: "Marketing, Vendas & SDR",
  },
  {
    id: "sdr-inbound-agendamento",
    title: "SDR inbound + agendamento",
    description:
      "Lead do Meta → CRM → WhatsApp → qualifica via API de big data → agenda no Google Agenda.",
    area: "Marketing, Vendas & SDR",
  },
  {
    id: "analise-calls-venda-feedback",
    title: "Análise de calls de venda + feedback pro vendedor",
    description:
      "Transcreve a call, aplica o método de vendas e gera relatório de pontos fortes e fracos.",
    area: "Marketing, Vendas & SDR",
  },
  {
    id: "cold-call-voz-ia",
    title: "Cold call / agendamento por ligação com voz IA",
    description:
      "Liga e agenda usando Twilio + OpenAI Realtime + ElevenLabs/VAPI/Retell, inclusive em batch.",
    area: "Marketing, Vendas & SDR",
  },
  {
    id: "monitor-anuncios-tempo-real",
    title: "Monitor de anúncios escalando em tempo real",
    description:
      "Varre a biblioteca de anúncios do Meta pra detectar criativos que estão escalando (estilo Adapta).",
    area: "Marketing, Vendas & SDR",
  },
  {
    id: "relatorio-meta-facebook-ads",
    title: "Relatório automático de Meta/Facebook Ads",
    description:
      "Puxa a API, calcula métricas e gera relatório HTML com recomendações enviado por email.",
    area: "Marketing, Vendas & SDR",
  },
  {
    id: "agencia-dr-automatica-ponta-a-ponta",
    title: "Agência de DR no automático ponta a ponta",
    description:
      "A IA pega o anúncio que performa, satura, pesquisa, escreve H1 e copy e expande — em loop.",
    area: "Marketing, Vendas & SDR",
  },
  {
    id: "clonagem-tom-voz-branding-outreach",
    title: "Clonagem de tom de voz/branding pra outreach",
    description:
      "Extrai o estilo dos documentos de marca da empresa pra padronizar a comunicação de prospecção.",
    area: "Marketing, Vendas & SDR",
  },
  {
    id: "postagem-automatica-instagram",
    title: "Postagem automática periódica no Instagram",
    description:
      "Cria o post com IA mantendo a identidade visual e agenda a publicação.",
    area: "Marketing, Vendas & SDR",
  },

  // 6. Gestão, Produtividade & Operações Internas
  {
    id: "cobranca-tarefas-atrasadas-clickup",
    title: "Cobrança automática de tarefas atrasadas (ClickUp)",
    description:
      "Muda o status pra \"atrasada\" e cobra o responsável automaticamente (versões ClickUp e Discord).",
    area: "Gestão, Produtividade & Operações Internas",
  },
  {
    id: "gpt-gestao-projetos",
    title: "GPT de gestão de projetos",
    description:
      "Material de MBA vira um assistente que detalha projetos e divide o trabalho em sprints.",
    area: "Gestão, Produtividade & Operações Internas",
  },
  {
    id: "audio-whatsapp-documento-estruturado",
    title: "Áudio do WhatsApp → documento estruturado",
    description:
      "Recebe o áudio de uma ideia e devolve um markdown organizado no Docs.",
    area: "Gestão, Produtividade & Operações Internas",
  },
  {
    id: "knowledge-base-pessoal-automatizada",
    title: "Knowledge base pessoal automatizada",
    description:
      "Print/story enviado no Telegram → transcreve, resume, categoriza e salva no Notion.",
    area: "Gestão, Produtividade & Operações Internas",
  },
  {
    id: "compilador-conteudo-criador",
    title: "Compilador de conteúdo de um criador",
    description:
      "Consome tudo de uma categoria (ex: todos os posts de investimento de um criador) e monta um artigo único estruturado.",
    area: "Gestão, Produtividade & Operações Internas",
  },
  {
    id: "reuniao-transcricao-metodologia-relatorio",
    title: "Reunião → transcrição → metodologia → relatório",
    description:
      "Meet/Zoom grava no Drive, a IA aplica a metodologia do cliente e devolve o relatório pronto.",
    area: "Gestão, Produtividade & Operações Internas",
  },
  {
    id: "dashboard-vendas-gamificado",
    title: "Dashboard de vendas gamificado",
    description:
      "A cada venda toca música e mostra a foto do vendedor, no estilo dos painéis de aceleradora.",
    area: "Gestão, Produtividade & Operações Internas",
  },
  {
    id: "gerador-dashboards-html-n8n",
    title: "Gerador de dashboards/HTML dinâmico pro n8n",
    description:
      "GPT especializado que cospe HTML com dados do Supabase ou de planilha.",
    area: "Gestão, Produtividade & Operações Internas",
  },
  {
    id: "cobranca-automatica-pix-confirmacao",
    title: "Cobrança automática com PIX + confirmação",
    description:
      "Gera o PIX e confirma o recebimento automaticamente.",
    area: "Gestão, Produtividade & Operações Internas",
  },
  {
    id: "sistema-interno-lovable-clinica",
    title: "Sistema interno completo no Lovable pra clínica",
    description:
      "Chat + gestor de tarefas + CRM básico pro fluxo de entrada de pacientes, funcional no primeiro fim de semana.",
    area: "Gestão, Produtividade & Operações Internas",
  },
  {
    id: "simulador-cenarios-precificacao",
    title: "Simulador de cenários de precificação",
    description:
      "Muda parâmetros (ex: valor fixo por paciente) e mostra o resultado financeiro na hora.",
    area: "Gestão, Produtividade & Operações Internas",
  },
  {
    id: "crm-invisivel",
    title: "CRM \"invisível\"",
    description:
      "Pluga no WhatsApp do vendedor e alimenta o CRM sozinho, sem o vendedor precisar mudar de ferramenta.",
    area: "Gestão, Produtividade & Operações Internas",
  },
  {
    id: "stark-chief-of-staff",
    title: "\"Stark\" — IA Chief of Staff/CEO da empresa",
    description:
      "Briefing diário conectado a todas as bases, com relatório personalizado pra personalidade do dono.",
    area: "Gestão, Produtividade & Operações Internas",
  },

  // 7. Finanças & Contábil
  {
    id: "controle-financas-pessoais-whatsapp",
    title: "Controle de finanças pessoais via WhatsApp",
    description:
      "Manda \"20 do ifood\", a IA categoriza e mostra os gastos. É um projeto-base replicável pra vários nichos.",
    area: "Finanças & Contábil",
  },
  {
    id: "consultor-financeiro-pessoal-whatsapp",
    title: "Consultor financeiro pessoal via WhatsApp",
    description:
      "Assistente financeiro de bolso, com integração futura às contas de investimento.",
    area: "Finanças & Contábil",
  },
  {
    id: "consultoria-tributaria-automatizada",
    title: "Consultoria tributária automatizada",
    description:
      "Raspa notas fiscais (PyNFe/API), extrai os dados e analisa o enquadramento pra recuperar imposto.",
    area: "Finanças & Contábil",
  },
  {
    id: "foto-nota-fiscal-json-compras",
    title: "Foto de nota fiscal → JSON de compras",
    description:
      "Lê a foto de uma nota fiscal e devolve as compras estruturadas em JSON.",
    area: "Finanças & Contábil",
  },

  // 8. RH, Carreira & Educação
  {
    id: "agente-mentoria-carreira-saas",
    title: "Agente de mentoria de carreira (SaaS multi-agente)",
    description:
      "Prep de entrevista, carta de apresentação e análise de LinkedIn/currículo.",
    area: "RH, Carreira & Educação",
  },
  {
    id: "plataforma-plano-estudos-enem",
    title: "Plataforma de plano de estudos ENEM personalizado",
    description:
      "Monta planos de estudo individualizados, voltada a grupos de escolas.",
    area: "RH, Carreira & Educação",
  },
  {
    id: "agente-clone-do-expert",
    title: "Agente \"clone do expert\"",
    description:
      "Tira dúvidas dentro da área de membros via RAG da base de conhecimento do expert.",
    area: "RH, Carreira & Educação",
  },
  {
    id: "tutores-ia-por-aula",
    title: "Tutores de IA por aula",
    description:
      "Cada aula tem um GPT próprio que guia o aluno na aplicação do conteúdo.",
    area: "RH, Carreira & Educação",
  },
  {
    id: "saas-byoa-build-your-own-assistant",
    title: "SaaS \"BYOA\" (Build Your Own Assistant)",
    description:
      "O expert conecta o produto da Hotmart e libera GPTs só pra alunos, com proteção por e-mail.",
    area: "RH, Carreira & Educação",
  },
  {
    id: "transcricao-videoaula-material-leitura",
    title: "Transcrição de vídeo-aula → material de leitura",
    description:
      "Transforma a vídeo-aula em material de leitura estruturado.",
    area: "RH, Carreira & Educação",
  },

  // 9. Nutrição & Saúde Pessoal
  {
    id: "bot-analise-rotulos-nutricionista",
    title: "Bot que analisa rótulos pela filosofia da nutricionista",
    description:
      "A aluna manda foto/texto do rótulo e o bot avalia os ingredientes priorizando comida real.",
    area: "Nutrição & Saúde Pessoal",
  },
  {
    id: "assistente-nutricionista",
    title: "Assistente pra nutricionista",
    description:
      "Ajuda na montagem de dietas, substituição de alimentos e tira-dúvidas.",
    area: "Nutrição & Saúde Pessoal",
  },
  {
    id: "rag-tabela-alimentos-substituicoes",
    title: "RAG de tabela de alimentos/substituições",
    description:
      "Base estruturada com kcal, macros, medidas caseiras e restrições alimentares.",
    area: "Nutrição & Saúde Pessoal",
  },

  // 10. Indústria, B2B & Dados
  {
    id: "base-conhecimento-industria-farmaceutica",
    title: "Base de conhecimento + agente pra indústria farmacêutica",
    description:
      "Responde dúvidas, políticas comerciais e informações de produtos.",
    area: "Indústria, B2B & Dados",
  },
  {
    id: "agente-report-metas-margem-precificacao",
    title: "Agente de report de metas/margem/precificação dinâmica",
    description:
      "Para o time de vendas, com precificação dinâmica e acompanhamento de margem.",
    area: "Indústria, B2B & Dados",
  },
  {
    id: "pesquisa-operacional-ia",
    title: "Pesquisa Operacional + IA",
    description:
      "Otimização logística (caixeiro-viajante) como consultoria de alto ticket.",
    area: "Indústria, B2B & Dados",
  },
  {
    id: "scraping-licitacao-cat-empresa",
    title: "Scraping de licitação x CAT da empresa",
    description:
      "Confere o match entre licitações públicas e o acervo técnico (CAT) da construtora.",
    area: "Indústria, B2B & Dados",
  },

  // 11. Infraestrutura WhatsApp & as-a-Service
  {
    id: "waas-software-via-whatsapp",
    title: "WaaS/AaaS — \"software via WhatsApp\"",
    description:
      "Banco de dados + assinaturas + controle de acesso por número, sem front-end — o WhatsApp é o front.",
    area: "Infraestrutura WhatsApp & as-a-Service",
  },
  {
    id: "rotacao-numeros-evolution-disparo",
    title: "Rotação de números na Evolution pra disparo",
    description:
      "Tabela no Supabase que dispara sempre pelo número que enviou menos, distribuindo a carga.",
    area: "Infraestrutura WhatsApp & as-a-Service",
  },
  {
    id: "filtro-profanidade-chatwoot",
    title: "Filtro de profanidade no Chatwoot",
    description:
      "Intercepta a mensagem antes de chegar na interface do atendente.",
    area: "Infraestrutura WhatsApp & as-a-Service",
  },

  // 12. Conteúdo, Mídia & Criativo
  {
    id: "canal-dark-automatizado",
    title: "Canal dark automatizado",
    description:
      "Notícias → roteiro → imagens de fundo → narração IA → upload, em pipeline automático.",
    area: "Conteúdo, Mídia & Criativo",
  },
  {
    id: "geracao-video-ugc-consistente",
    title: "Geração de vídeo UGC/consistente",
    description:
      "Veo3/Flow + GPT de prompts de vídeo, com o último frame virando o primeiro do próximo.",
    area: "Conteúdo, Mídia & Criativo",
  },
  {
    id: "foto-ia-a-partir-de-video",
    title: "\"Foto\" de IA a partir de vídeo de 6s",
    description:
      "Gera poses num vídeo curto, recorta os frames e dá upscale pra produzir fotos.",
    area: "Conteúdo, Mídia & Criativo",
  },
  {
    id: "substituicao-pessoa-video-promocional",
    title: "Substituição de pessoa em vídeo promocional",
    description:
      "Troca a pessoa do vídeo usando HeyGen/deepfake.",
    area: "Conteúdo, Mídia & Criativo",
  },
  {
    id: "manifesto-video-institucional-ia",
    title: "Manifesto/vídeo institucional com IA",
    description:
      "Produz vídeo institucional com HeyGen + Suno + ElevenLabs por uma fração do custo de produção tradicional.",
    area: "Conteúdo, Mídia & Criativo",
  },
  {
    id: "gestao-comunidade-whatsapp",
    title: "Gestão de comunidade no WhatsApp",
    description:
      "Resumos diários/semanais + ranking dos membros mais engajados.",
    area: "Conteúdo, Mídia & Criativo",
  },

  // 13. Companhia & Suporte Emocional
  {
    id: "namorada-virtual-companhia-ia",
    title: "Namorada virtual / companhia com IA",
    description:
      "Companhia conversacional com IA — mercado grande e ativo.",
    area: "Companhia & Suporte Emocional",
  },
  {
    id: "ia-suporte-emocional-psicologico",
    title: "IA de suporte emocional/psicológico",
    description:
      "Categoria de saúde mental como uma das principais demandas de uso.",
    area: "Companhia & Suporte Emocional",
  },

  // 14. Ferramentas Horizontais & Dev
  {
    id: "gerador-de-prompts-meta-prompting",
    title: "Gerador de prompts (meta-prompting)",
    description:
      "Um agente que escreve prompts sob medida pra outro caso de uso.",
    area: "Ferramentas Horizontais & Dev",
  },
  {
    id: "crewai-arquiteto-de-crews",
    title: "CrewAI \"arquiteto de crews\"",
    description:
      "Uma crew que gera outras crews a partir da descrição do projeto.",
    area: "Ferramentas Horizontais & Dev",
  },
  {
    id: "node-n8n-transcricao-parse-multimidia",
    title: "Node n8n de transcrição/parse multimídia",
    description:
      "Imagem + áudio + PDF processados num único node do n8n.",
    area: "Ferramentas Horizontais & Dev",
  },
  {
    id: "backup-automatico-fluxos-n8n-github",
    title: "Backup automático de fluxos n8n → GitHub",
    description:
      "Versiona automaticamente os fluxos do n8n num repositório GitHub.",
    area: "Ferramentas Horizontais & Dev",
  },
  {
    id: "pipeline-rag-call-center",
    title: "Pipeline de RAG de 2.000 arquivos pra call center",
    description:
      "Chunking semântico via Claude Code, com agente que tira dúvidas dos operadores.",
    area: "Ferramentas Horizontais & Dev",
  },
  {
    id: "pdf-markdown-estruturado",
    title: "PDF → Markdown estruturado",
    description:
      "Converte PDF em markdown mantendo a estrutura do documento (LlamaIndex/Python).",
    area: "Ferramentas Horizontais & Dev",
  },
  {
    id: "assessment-seguranca-apps-vibe-coded",
    title: "Assessment de segurança pra apps \"vibe coded\"",
    description:
      "Mini pen-test com relatório de vulnerabilidades pra apps gerados rapidamente por IA.",
    area: "Ferramentas Horizontais & Dev",
  },
];
