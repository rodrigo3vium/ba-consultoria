// Case 04 — triagem de WhatsApp por IA para imobiliária de aluguel. Case
// fictício: nomes, imóveis, conversas e números do painel são simulação
// construída sobre o sistema real de triagem — nenhum cliente é identificado
// (regra do portfólio: nunca citar cliente real). Conceito adaptado do
// mesmo sistema aplicado a condomínios (síndico), só que aqui o interlocutor
// é inquilino/proprietário e o operador é a imobiliária.

export const LEAD_SOURCE = "acabe-com-a-demora";

export type Tier = "t1" | "t2" | "t3";
export type Sentimento = "calmo" | "ansioso" | "irritado" | "assustado";

export interface MensagemConversa {
  autor: "inquilino" | "ia" | "sistema";
  texto: string;
  hora?: string; // só nas mensagens de sistema, ex.: "• Alerta enviado — 09:46"
}

export interface AnaliseIA {
  intencao: string;
  categoria: string;
  sentimento: Sentimento;
  score: number; // 0-100
  justificativa: string;
  roteamento: string;
  tempoResolucao?: string; // só quando a própria IA resolveu (T1)
}

export interface Requisicao {
  id: string;
  remetente: string;
  imovel: string;
  hora: string;
  mensagemCrua: string;
  resumoIA: string;
  tier: Tier;
  analise: AnaliseIA;
  conversa: MensagemConversa[];
  /** true = fora do subset compacto usado no HeroTriagem (autoplay do hero) */
  noHero?: boolean;
}

export const TIER_META: Record<Tier, { label: string; desc: string }> = {
  t1: { label: "Automatizável", desc: "A IA responde sozinha" },
  t2: { label: "Encaminhada", desc: "Vai para o responsável certo" },
  t3: { label: "Crítica", desc: "Alerta imediato" },
};

export const REQUISICOES: Requisicao[] = [
  {
    id: "req-01",
    remetente: "Márcia R.",
    imovel: "Ap 108 · Ed. Aurora",
    hora: "09:41",
    mensagemCrua: "OI MEU BOLETO NÃO CHEGOU DE NOVO!!! vence HOJE e eu não vou pagar multa por erro de vocês 😤😤",
    resumoIA: "Solicita 2ª via do boleto de julho; vencimento hoje.",
    tier: "t1",
    analise: {
      intencao: "Solicitar 2ª via de boleto",
      categoria: "Financeiro · Boleto",
      sentimento: "irritado",
      score: 34,
      justificativa:
        "Tom irritado, mas requisição de rotina com solução automática disponível no ERP. A urgência real é o vencimento hoje — por isso a resposta é imediata, mesmo sem intervenção humana.",
      roteamento: "Resolvida pela IA — 2ª via emitida direto do ERP",
      tempoResolucao: "0:41",
    },
    conversa: [
      { autor: "inquilino", texto: "OI MEU BOLETO NÃO CHEGOU DE NOVO!!! vence HOJE e eu não vou pagar multa por erro de vocês 😤😤" },
      { autor: "ia", texto: "Oi, Márcia! Já achei aqui — segue a 2ª via do boleto de julho, com o código de barras: 34191.79001 01043.510047 91020.150008 8 96060000078000" },
      { autor: "ia", texto: "E pode ficar tranquila: como o boleto não chegou por falha nossa de envio, a multa por atraso não será aplicada. Já deixei anotado no seu contrato." },
      { autor: "sistema", texto: "✓ Resolvida pela IA · 0:41 · nenhum humano acionado", hora: "09:41" },
    ],
    noHero: true,
  },
  {
    id: "req-02",
    remetente: "Felipe A.",
    imovel: "Interessado — Rua Augusta, 512",
    hora: "10:03",
    mensagemCrua: "boa tarde vi o apto da rua augusta no site, ainda ta disponivel? posso ver amanha cedo??",
    resumoIA: "Interesse em visita ao imóvel anunciado; disponibilidade amanhã de manhã.",
    tier: "t1",
    analise: {
      intencao: "Agendar visita a imóvel anunciado",
      categoria: "Locação · Visita",
      sentimento: "calmo",
      score: 22,
      justificativa:
        "Pedido de rotina, sem urgência real embutida — a janela de amanhã é preferência, não necessidade. Prioridade baixa mesmo com resposta rápida.",
      roteamento: "Resolvida pela IA — agenda real de visitas consultada",
      tempoResolucao: "0:58",
    },
    conversa: [
      { autor: "inquilino", texto: "boa tarde vi o apto da rua augusta no site, ainda ta disponivel? posso ver amanha cedo??" },
      { autor: "ia", texto: "Boa tarde, Felipe! Sim, ainda está disponível. Amanhã de manhã tenho às 9h ou às 10h30 livres na agenda — qual fica melhor pra você?" },
      { autor: "sistema", texto: "✓ Resolvida pela IA · 0:58 · visita será confirmada após resposta", hora: "10:04" },
    ],
  },
  {
    id: "req-03",
    remetente: "Diego M.",
    imovel: "Ap 45 · Ed. Bela Vista",
    hora: "10:22",
    mensagemCrua: "me explica pq meu aluguel subiu R$240?? ninguem me avisou NADA, isso ta certo???",
    resumoIA: "Questiona reajuste anual do aluguel; não recorda ter sido avisado.",
    tier: "t1",
    analise: {
      intencao: "Entender reajuste do aluguel",
      categoria: "Financeiro · Contrato",
      sentimento: "ansioso",
      score: 31,
      justificativa:
        "Tom de desconfiança, mas é uma dúvida contratual de rotina com resposta documental pronta — o aviso já foi enviado e está registrado. Sem risco de dano ou emergência.",
      roteamento: "Resolvida pela IA — cláusula do contrato + comprovante de aviso",
      tempoResolucao: "1:12",
    },
    conversa: [
      { autor: "inquilino", texto: "me explica pq meu aluguel subiu R$240?? ninguem me avisou NADA, isso ta certo???" },
      { autor: "ia", texto: "Oi, Diego! O reajuste segue a cláusula 4ª do seu contrato — correção anual pelo IGP-M, aplicada no mês de aniversário do contrato." },
      { autor: "ia", texto: "O aviso foi enviado por e-mail no dia 12/05, com 30 dias de antecedência. Posso reenviar esse e-mail agora, se quiser conferir de novo." },
      { autor: "sistema", texto: "✓ Resolvida pela IA · 1:12 · comprovante de envio anexado", hora: "10:23" },
    ],
  },
  {
    id: "req-04",
    remetente: "Renata S.",
    imovel: "Ap 210 · Ed. Jacarandá",
    hora: "11:05",
    mensagemCrua: "preciso urgente de uma declaração de que pago aluguel em dia, é pro financiamento no banco 🙏",
    resumoIA: "Solicita declaração de adimplência para financiamento bancário.",
    tier: "t1",
    analise: {
      intencao: "Emitir declaração de adimplência",
      categoria: "Financeiro · Documentos",
      sentimento: "ansioso",
      score: 28,
      justificativa:
        "\"Urgente\" refere-se a um prazo do banco, não a um risco imediato — documento gerado a partir do histórico de pagamentos, sem necessidade de análise humana.",
      roteamento: "Resolvida pela IA — declaração gerada a partir do histórico de pagamentos",
      tempoResolucao: "0:35",
    },
    conversa: [
      { autor: "inquilino", texto: "preciso urgente de uma declaração de que pago aluguel em dia, é pro financiamento no banco 🙏" },
      { autor: "ia", texto: "Oi, Renata! Segue em anexo a declaração de adimplência, com todos os pagamentos dos últimos 12 meses em dia." },
      { autor: "ia", texto: "Se o banco pedir também o contrato de locação, é só avisar que eu já mando junto." },
      { autor: "sistema", texto: "✓ Resolvida pela IA · 0:35 · PDF gerado e enviado", hora: "11:06" },
    ],
  },
  {
    id: "req-05",
    remetente: "Juliana P.",
    imovel: "Ap 302 · Ed. Solar",
    hora: "11:41",
    mensagemCrua: "a mancha no teto do quarto VOLTOU e agora ta PINGANDO na cama do meu filho. TERCEIRA vez que eu reclamo disso!!",
    resumoIA: "Infiltração recorrente no quarto; goteira ativa. 4º chamado do imóvel em 30 dias.",
    tier: "t2",
    analise: {
      intencao: "Reportar infiltração recorrente com dano ativo",
      categoria: "Manutenção · Infiltração",
      sentimento: "irritado",
      score: 72,
      justificativa:
        "Dano ativo ao imóvel e ao bem do inquilino, mais um padrão de recorrência detectado — este é o 4º chamado do mesmo problema em 30 dias. Não é risco de vida, mas não pode esperar na fila comum.",
      roteamento: "→ Prestador hidráulico credenciado + proprietário notificado (padrão recorrente anexado)",
    },
    conversa: [
      { autor: "inquilino", texto: "a mancha no teto do quarto VOLTOU e agora ta PINGANDO na cama do meu filho. TERCEIRA vez que eu reclamo disso!!" },
      { autor: "ia", texto: "Juliana, sinto muito — vou acionar o prestador agora mesmo e também anexar o histórico das outras vezes que você reportou isso, pra não ficar só no reparo pontual de novo." },
      { autor: "sistema", texto: "• Alerta enviado — prestador hidráulico notificado às 11:46", hora: "11:46" },
      { autor: "sistema", texto: "• Proprietário notificado — padrão recorrente anexado (4º chamado em 30 dias)", hora: "11:46" },
    ],
  },
  {
    id: "req-06",
    remetente: "Bruno T.",
    imovel: "Ap 12 · Ed. Constelação",
    hora: "12:15",
    mensagemCrua: "o chuveiro ta desarmando o disjuntor toda vez, to tomando banho gelado ha 3 dias",
    resumoIA: "Chuveiro desarmando disjuntor recorrentemente; sem água quente há 3 dias.",
    tier: "t2",
    analise: {
      intencao: "Reportar falha elétrica no chuveiro",
      categoria: "Manutenção · Elétrica",
      sentimento: "calmo",
      score: 58,
      justificativa:
        "Falha elétrica recorrente com risco de curto-circuito, mas sem dano ativo imediato. Prioridade operacional — precisa de um prestador, não de alerta de emergência.",
      roteamento: "→ Eletricista credenciado, agendamento em até 24h",
    },
    conversa: [
      { autor: "inquilino", texto: "o chuveiro ta desarmando o disjuntor toda vez, to tomando banho gelado ha 3 dias" },
      { autor: "ia", texto: "Bruno, entendi. Pode ser resistência queimada ou fiação — vou acionar um eletricista credenciado pra passar aí ainda hoje ou amanhã de manhã." },
      { autor: "sistema", texto: "• Alerta enviado — eletricista notificado às 12:18", hora: "12:18" },
    ],
    noHero: true,
  },
  {
    id: "req-07",
    remetente: "Camila N.",
    imovel: "Bloco B · Ed. Horizonte",
    hora: "13:02",
    mensagemCrua: "o portão da garagem travou de novo e meu carro ta preso lá dentro, preciso sair pra trabalhar",
    resumoIA: "Portão da garagem travado com veículo preso; 3º chamado do mesmo portão em 3 semanas.",
    tier: "t2",
    analise: {
      intencao: "Reportar portão da garagem travado",
      categoria: "Manutenção · Estrutural",
      sentimento: "ansioso",
      score: 61,
      justificativa:
        "Impacto direto na rotina do inquilino e padrão de recorrência — 3º chamado do mesmo portão em três semanas. Precisa de resposta rápida, mas não é risco à vida.",
      roteamento: "→ Zelador + prestador de portões automáticos, registro do 3º chamado",
    },
    conversa: [
      { autor: "inquilino", texto: "o portão da garagem travou de novo e meu carro ta preso lá dentro, preciso sair pra trabalhar" },
      { autor: "ia", texto: "Camila, já acionei o zelador pra liberar manualmente agora e chamei o prestador de portões pra resolver de vez — esse já é o terceiro chamado desse portão em três semanas." },
      { autor: "sistema", texto: "• Alerta enviado — zelador notificado às 13:04", hora: "13:04" },
      { autor: "sistema", texto: "• Prestador de portões notificado — 3º chamado registrado", hora: "13:05" },
    ],
    noHero: true,
  },
  {
    id: "req-08",
    remetente: "Ricardo F.",
    imovel: "Corredor 3º andar · Ed. Costa Verde",
    hora: "14:18",
    mensagemCrua: "gente tem um CHEIRO DE GÁS MUITO FORTE no corredor do prédio, alguem responde pfv, to com medo",
    resumoIA: "Possível vazamento de gás em área comum. Risco à vida.",
    tier: "t3",
    analise: {
      intencao: "Reportar possível vazamento de gás em área comum",
      categoria: "Emergência · Segurança",
      sentimento: "assustado",
      score: 96,
      justificativa:
        "Menção a vazamento de gás dispara o protocolo crítico independente do tom da mensagem. Falso positivo custa um telefonema; falso negativo pode custar vidas — na dúvida, o sistema sempre sobe o tier.",
      roteamento: "→ ALERTA CRÍTICO: gestor por ligação + emergência da distribuidora de gás acionada",
    },
    conversa: [
      { autor: "inquilino", texto: "gente tem um CHEIRO DE GÁS MUITO FORTE no corredor do prédio, alguem responde pfv, to com medo" },
      { autor: "ia", texto: "Ricardo, leve isso a sério: não acione interruptores nem chame o elevador. Abra janelas se puder, saia do prédio e ligue 193 (bombeiros) agora." },
      { autor: "ia", texto: "Já estou acionando o gestor por ligação e a emergência da distribuidora de gás neste instante." },
      { autor: "sistema", texto: "• ALERTA CRÍTICO — gestor notificado por ligação às 14:19", hora: "14:19" },
      { autor: "sistema", texto: "• Emergência da distribuidora de gás acionada", hora: "14:19" },
    ],
  },
  {
    id: "req-09",
    remetente: "Patrícia L.",
    imovel: "Ap 88 · Ed. Bela Vista",
    hora: "15:47",
    mensagemCrua: "chegamos de viagem agora e a porta do apartamento ta ARROMBADA, entraram aqui dentro",
    resumoIA: "Possível invasão/arrombamento do imóvel. Risco de segurança e patrimônio.",
    tier: "t3",
    analise: {
      intencao: "Reportar arrombamento do imóvel",
      categoria: "Emergência · Segurança",
      sentimento: "assustado",
      score: 91,
      justificativa:
        "Indício de crime em andamento ou recente — risco à segurança física e ao patrimônio. Sobe direto para alerta crítico, mesmo sem palavra-chave explícita como \"gás\" ou \"incêndio\".",
      roteamento: "→ ALERTA CRÍTICO: gestor + proprietário + orientação de não entrar, registro para seguro",
    },
    conversa: [
      { autor: "inquilino", texto: "chegamos de viagem agora e a porta do apartamento ta ARROMBADA, entraram aqui dentro" },
      { autor: "ia", texto: "Patrícia, não entrem no apartamento. Liguem 190 agora e esperem a polícia chegar antes de mexer em qualquer coisa." },
      { autor: "ia", texto: "Já notifiquei o gestor e o proprietário. Assim que a ocorrência for registrada, me envia o número do B.O. pra eu já abrir o processo do seguro." },
      { autor: "sistema", texto: "• ALERTA CRÍTICO — gestor e proprietário notificados às 15:49", hora: "15:49" },
      { autor: "sistema", texto: "• Registro para seguro aberto", hora: "15:49" },
    ],
    noHero: true,
  },
];

// ── Dashboard "Inteligência Operacional" ─────────────────────────────────

export interface VolumeDia {
  dia: string;
  total: number;
  critico?: boolean;
}

export const VOLUME_30D: VolumeDia[] = [
  { dia: "1", total: 168 },
  { dia: "2", total: 182 },
  { dia: "3", total: 155 },
  { dia: "4", total: 140 },
  { dia: "5", total: 121 },
  { dia: "6", total: 174 },
  { dia: "7", total: 189 },
  { dia: "8", total: 233 },
  { dia: "9", total: 198 },
  { dia: "10", total: 176 },
  { dia: "11", total: 142 },
  { dia: "12", total: 130 },
  { dia: "13", total: 185 },
  { dia: "14", total: 201 },
  { dia: "15", total: 296, critico: true },
  { dia: "16", total: 210 },
  { dia: "17", total: 179 },
  { dia: "18", total: 150 },
  { dia: "19", total: 138 },
  { dia: "20", total: 192 },
  { dia: "21", total: 205 },
  { dia: "22", total: 264, critico: true },
  { dia: "23", total: 214 },
  { dia: "24", total: 187 },
  { dia: "25", total: 163 },
  { dia: "26", total: 149 },
  { dia: "27", total: 171 },
  { dia: "28", total: 226, critico: true },
  { dia: "29", total: 198 },
  { dia: "30", total: 214 },
];

export interface Kpi {
  valor: number;
  prefixo?: string;
  sufixo?: string;
  label: string;
}

export const KPIS: Kpi[] = [
  { valor: 68, sufixo: "%", label: "das requisições resolvidas sem um humano tocar" },
  { valor: 41, sufixo: "s", label: "tempo médio até a primeira resposta (antes: 4h12)" },
  { valor: 1, prefixo: "< ", sufixo: " min", label: "para uma emergência virar alerta no celular do gestor" },
  { valor: 214, label: "requisições organizadas essa semana" },
];

export interface PadraoCronico {
  imovel: string;
  padrao: string;
  recomendacao: string;
  economia: string;
}

export const PADROES_CRONICOS: PadraoCronico[] = [
  {
    imovel: "Ap 302 · Ed. Solar",
    padrao: "4 chamados de infiltração no mesmo quarto em 30 dias",
    recomendacao: "Vistoria estrutural completa + notificação formal ao proprietário — o reparo pontual não está resolvendo a causa.",
    economia: "R$ 3.800 economizados vs. reparo emergencial recorrente",
  },
  {
    imovel: "Bloco B · Ed. Horizonte",
    padrao: "3 chamados do mesmo portão da garagem em 3 semanas",
    recomendacao: "Contrato de manutenção preventiva no lugar de chamados avulsos.",
    economia: "R$ 1.200/mês a menos em visitas técnicas avulsas",
  },
];

// ── Copy por dobra ────────────────────────────────────────────────────────

export const HERO = {
  eyebrow: "CASE 04 — GESTÃO DE ALUGUEL",
  headline: "Seu inquilino espera 4 horas. Podia esperar",
  headlineAccent: "41 segundos.",
  sub: "Mesma caixinha, mesmo “oi, tudo bem?”. Um pode esperar até amanhã. O outro não pode esperar dez minutos. Hoje, quem decide qual é qual é a ordem de chegada.",
  paras: [
    "Numa imobiliária de aluguel, essa caixinha recebe o boleto que não chegou, o chuveiro que parou de esquentar e o cheiro de gás no corredor — na mesma ordem de chegada, no mesmo tom de urgência.",
    "Alguém — normalmente uma pessoa só — rola a tela decidindo, mensagem por mensagem, o que pode esperar até amanhã e o que não pode esperar mais dez minutos.",
    "A gente construiu o sistema que faz essa leitura primeiro, e erra pro lado seguro quando erra.",
  ],
  ctaPrimary: "Ver a triagem funcionando",
  ctaSecondary: "Aplicar para diagnóstico",
};

export const STATS = [
  { value: "68%", label: "das requisições resolvidas sem um humano tocar", accent: true },
  { value: "41s", label: "tempo médio até a primeira resposta, a qualquer hora" },
  { value: "<1min", label: "para uma emergência virar alerta no celular do gestor" },
  { value: "24/7", label: "sem depender de quem está de plantão" },
];

export const PROBLEMA = {
  eyebrow: "O problema",
  headlineFull: "Sua operação não tem um problema de atendimento. Tem um problema de fila.",
  paras: [
    "Inquilino, proprietário e prestador de serviço escrevem pra mesma pessoa, na mesma caixa, o dia inteiro.",
    "Cada mensagem nova empurra a anterior pra baixo. Quem atende decide na correria, na ordem de chegada — não na ordem de urgência.",
    "E o crítico não vem com aviso. \"Cheiro de gás no corredor\" chega escrito igual a \"meu boleto não chegou\": no mesmo balão, no mesmo tom, na mesma fila.",
  ],
  punch: "O problema não é o volume. É que o crítico chega vestido de rotina.",
};

export const VIRADA = {
  eyebrow: "Por que ninguém resolve isso",
  headlineFull: "Não é falta de atenção. É estrutura.",
  intro: "Três motivos, e nenhum deles é preguiça de quem atende:",
  itens: [
    { titulo: "Volume", desc: "Trezentos contratos ativos geram, em média, duzentas mensagens por dia — entre inquilinos, proprietários e prestadores." },
    { titulo: "Interrupção", desc: "Cada \"é só uma dúvida rápida\" custa o contexto de quem estava resolvendo outra coisa. A fila nunca some, só troca de lugar." },
    { titulo: "Cegueira de padrão", desc: "Mensagem por mensagem, ninguém percebe que o mesmo apartamento reclamou da mesma infiltração pela quarta vez em um mês." },
  ],
  fecho: "O resultado não é má vontade — é gente competente lendo mensagem por mensagem, sem conseguir ver o padrão que só aparece quando alguém junta as duzentas.",
};

export const SISTEMA = {
  eyebrow: "O que construímos",
  headline: "Uma triagem que nunca dorme",
  paras: [
    "Toda mensagem que chega no WhatsApp da imobiliária entra no sistema sozinha — sem alguém encaminhar, sem alguém decidir manualmente o que é urgente.",
    "O sistema lê a mensagem crua, resume o que o inquilino ou proprietário está pedindo, e classifica em três níveis: o que ele mesmo resolve na hora, o que precisa de um responsável humano, e o que exige alerta imediato.",
    "Cada classificação vem com um score de 0 a 100 e a justificativa por trás dele — não é uma caixa preta. E quando o mesmo imóvel aparece de novo com o mesmo problema, o sistema lembra.",
  ],
};

export const DEMO_COPY = {
  eyebrow: "A demo",
  headline: "Não acredite.",
  headlineAccent: "Testa.",
  sub: "Nove mensagens de um dia comum de gestão de aluguel. Rode a triagem e clique em qualquer requisição pra ver o que a IA leu — score, justificativa e a resposta que ela mandou.",
  finish: "Você acabou de ver dez minutos de trabalho de triagem acontecerem em quinze segundos — sem errar a única mensagem que não podia esperar.",
};

export const PAINEL = {
  eyebrow: "O painel do gestor",
  headlineFull: "A atendente sente a diferença na hora. O dono sente no relatório.",
  sub: "Volume, tempo de resposta e os padrões que só aparecem quando alguém junta as duzentas mensagens da semana.",
};

export const RIGOR = {
  eyebrow: "Por que isso não é ChatGPT",
  headlineFull: "Um sistema que decide o que é urgente não pode acertar às vezes.",
  intro: "Essa é a parte que ninguém mostra numa demo bonita:",
  itens: [
    {
      titulo: "Na dúvida, sobe — nunca desce",
      corpo: "Um falso positivo em emergência custa um telefonema a mais pro gestor. Um falso negativo pode custar uma vida ou um processo. O limiar é assimétrico de propósito, e é calibrado projeto a projeto.",
    },
    {
      titulo: "Caps lock não é urgência",
      corpo: "O score lê o fato relatado, não o tom de quem escreveu. Um boleto em CAIXA ALTA com três exclamações continua sendo rotina. \"Sem pressa, só um cheirinho de gás\" continua sendo crítico.",
    },
    {
      titulo: "A IA só automatiza o que pode cumprir",
      corpo: "A 2ª via de boleto sai na hora porque o sistema está plugado no ERP de verdade da imobiliária. Sem essa fonte, ele encaminha — nunca inventa um número ou uma data.",
    },
    {
      titulo: "Toda decisão tem trilha",
      corpo: "Cada requisição fica registrada com a justificativa da IA. Quando alguém perguntar \"por que isso não virou alerta?\", a resposta já existe.",
    },
  ],
  fecho: "Nada disso aparece numa demo bonita. Aparece no dia em que uma mensagem real de gás ou de incêndio está na mesma fila que um pedido de boleto.",
};

export const RECUSA = {
  eyebrow: "O que este sistema se recusa a fazer",
  headline: "Não substitui gente.",
  headlineAccent: "Substitui fila.",
  paras: [
    "O sistema se apresenta como o que é — um assistente da imobiliária, nunca finge ser uma pessoa do outro lado da tela.",
    "Não faz cobrança agressiva, não menciona despejo, não conduz negociação de contrato. Isso é humano, sempre.",
    "Questão jurídica sensível — briga de vizinho, disputa de vistoria, ação judicial — vai direto para uma pessoa, sem a IA tentar resolver sozinha.",
    "E a fila inteira, com todas as decisões, fica 100% visível pro gestor. Nada se resolve escondido dele.",
  ],
  lgpd: "Dados de inquilinos e proprietários trafegam com consentimento, retenção definida e nenhum compartilhamento fora do escopo da gestão do imóvel. LGPD não é opcional, e o sistema não roda sem isso.",
};

export const CONSTRUCAO = {
  eyebrow: "Como foi construído",
  headline: "Sob medida.",
  headlineAccent: "Plugado no que já existe.",
  paras: [
    "Construído para o fluxo real de uma imobiliária de aluguel — plugado no ERP onde já mora o boleto, a agenda de visitas e o contrato. Sem essa integração, é só um chatbot de enfeite.",
    "Não muda o WhatsApp que a imobiliária já usa nem o processo que o time já conhece — encaixa a triagem onde a mensagem já chega.",
    "Construído do zero, com IA em todo o processo de desenvolvimento, e entregue rodando — não é um produto de prateleira genérico.",
  ],
  punch: "O sistema não promete atender sozinho. Promete nunca deixar o crítico esperar na fila do boleto.",
};

export const CTA = {
  eyebrow: "Aplicar",
  headline: "A mensagem que não podia esperar",
  headlineAccent: "pode estar chegando agora.",
  paras: [
    "Não é sobre responder mais rápido. É sobre nunca mais descobrir uma emergência três mensagens tarde demais.",
    "A gente encontra onde sua fila de WhatsApp mais dói, e constrói o sistema que resolve isso — sob medida pra sua operação.",
    "Trabalhamos com um número limitado de imobiliárias por trimestre.",
  ],
  benefits: [
    "Diagnóstico da fila real, não do sintoma",
    "Sistema sob medida, plugado no que você já usa",
    "Rodando na sua operação, não uma consultoria de slides",
  ],
  formTitle: "Aplicar para conversa de diagnóstico",
  formCta: "Aplicar para diagnóstico",
  formFinish: "Quatro minutos preenchendo. Se não fizer sentido pros dois lados, a gente te diz na primeira call.",
  successTitle: "Recebido.",
  successBody: "Vamos revisar sua aplicação e voltamos por WhatsApp ou e-mail em breve.",
};

export const IMOVEIS_OPTIONS = [
  "Até 100 imóveis",
  "100 a 300",
  "300 a 800",
  "Mais de 800",
  "Não é imobiliária — outro segmento",
];

export const FOOTER = {
  manifestoBefore: "Um sistema que decide o que é urgente não pode",
  manifestoAccent: "errar pro lado errado.",
  caseLabel: "Gestão de aluguel",
  sistemaLabel: "Triagem de WhatsApp por IA",
  entregaLabel: "Sob medida · dias",
};

export const RODAPE_NOTA =
  "Case demonstrativo. Requisições, nomes, imóveis e números do painel são simulação construída sobre o sistema real de triagem; nenhuma conversa real de inquilino ou proprietário é exibida. Nenhum cliente identificado.";
