// Case 02 — análise de calls comerciais por IA. Baseado num caso real (consulta de
// alto ticket, régua de fechamento), anonimizado a pedido do Rodrigo: sem nome de
// clínica, país ou headcount que identifique o cliente. Nota, valores, citações e
// recomendação são o dossiê real (fonte: registro do consultor), só o nome da
// paciente foi removido do texto renderizado.

export const LEAD_SOURCE = "a-call-que-fechou-mas-nao-fechou";

export const HERO = {
  eyebrow: "CASE 02 — CLÍNICAS DE ALTO TICKET",
  transcript: [
    { time: "30:00", speaker: "PACIENTE", lines: ["Eu vou ver com o caixa forte lá, que ele já", "falou pra mim. Ai, faz, não importa o preço."] },
    { time: "30:07", speaker: "DOUTOR", lines: ["(risos) A senhora não falou isso antes."] },
    { time: "30:14", speaker: "DOUTOR", lines: ["Então, sobre a meia elástica, você vai precisar", "usar por três semanas..."] },
  ],
  subBefore:
    "A paciente disse isso, com essas palavras, no minuto 30 de uma consulta real de 33 minutos. Ela saiu sem pagar nada.",
  paras: [
    "O marido tinha autorizado. A paciente estava decidida. O tratamento custava R$ 7.200.",
    "O médico fez uma piada, mudou de assunto para a meia elástica, e encerrou a consulta com \"as meninas vão te ligar.\"",
    "Ninguém ligou no dia seguinte. Ninguém ligou nunca. E ninguém na clínica soube que aquela venda tinha sido perdida ali, naquele segundo, por não ter sido pedida.",
  ],
  cta: "Ver o dossiê",
};

export const STATS = [
  { value: "3.8/10", label: "Nota da consulta real que você acabou de ler", accent: true },
  { value: "5", label: "Falhas catalogadas pela régua, com citação de cada uma" },
  { value: "3", label: "Sinais vermelhos disparados ao mesmo tempo" },
  { value: "R$ 7.200", label: "Estava na mesa. Saiu sem pagar nada" },
];

export const PROBLEMA = {
  eyebrow: "O problema",
  headline: "Ninguém percebe",
  headlineFull: "A pior venda perdida é a que ninguém sabe que existiu.",
  paras: [
    "Se o paciente fala \"está caro\", a clínica inteira ouve. Vira reunião, vira treinamento, vira desconto.",
    "Mas quando o paciente diz sim e o profissional não recolhe o sim — não tem reclamação, não tem objeção, não tem registro. Tem só um orçamento que \"ficou para depois\" e uma agenda que não encheu.",
    "E três meses depois o dono da clínica olha o faturamento, não entende, e culpa o tráfego pago.",
  ],
  punch: "O dinheiro não vazou no marketing. Vazou no minuto 30.",
};

export const LEITURA = {
  eyebrow: "Por que ninguém viu",
  headline: "Não é vendas",
  headlineFull: "Sua clínica não tem um problema de vendas. Tem um problema de leitura.",
  intro: "Três motivos, e nenhum deles é preguiça:",
  itens: [
    { titulo: "Volume", desc: "Cinco profissionais, quatro consultas por dia, cinquenta minutos cada. São dezesseis horas de gravação por dia. Ninguém no mundo ouve isso." },
    { titulo: "Memória", desc: "Mesmo quando o gerente ouve, ele lembra da impressão, não da frase. E a venda se perde numa frase." },
    { titulo: "Viés", desc: "Esse é o que ninguém admite." },
  ],
  bias: [
    "Nós avaliamos manualmente uma call conduzida pelo criador do método comercial. Demos 9,7.",
    "Depois rodamos a mesma call pela régua, cega. Deu 5,7.",
    "A régua estava certa. Nós é que sabíamos de quem era a call.",
  ],
  fecho: "Quem ouve conhecendo o closer não avalia a call. Avalia a pessoa. É por isso que o gerente que treinou a equipe é a pior pessoa do mundo para pontuar a equipe — e é exatamente ele quem faz isso hoje.",
};

export const SISTEMA = {
  eyebrow: "O que construímos",
  headline: "Uma régua que não conhece ninguém",
  paras: [
    "Toda consulta gravada entra no sistema sozinha. Sem alguém subir arquivo, sem alguém apertar botão.",
    "O sistema transcreve, separa quem falou o quê, e lê a consulta inteira contra o método comercial da clínica — o método real, escrito, com os scripts que o consultor de vendas ensinou. Não uma opinião genérica de IA sobre vendas.",
    "E devolve um dossiê. Não um número solto: sete blocos avaliados separadamente — abertura, condução, diagnóstico, desejo, implicação, urgência, fechamento — cada um com nota, com peso, e com a citação literal da transcrição que justifica a nota.",
    "Mais os sinais vermelhos. Os oito padrões que, quando aparecem, significam que o problema não é técnica: é crença. Profissional que explica durabilidade sem ninguém perguntar. Profissional que julga o bolso do paciente antes de falar preço. Profissional que ouve o sim e não estende a mão.",
    "Toda segunda-feira, um e-mail. A clínica inteira, closer por closer, semana contra semana.",
  ],
};

export const DEMO_COPY = {
  eyebrow: "A demo",
  headline: "Não acredite.",
  headlineAccent: "Testa.",
  sub: "O dossiê da consulta que você leu lá em cima. Nota, blocos, citações literais e a recomendação — abra cada bloco.",
  finish: "Você acabou de ver o que separa uma consulta de R$ 7.200 fechada de uma perdida: uma frase, no segundo certo.",
};

// ── Dossiê real (anonimizado) ────────────────────────────────────────────
// Fonte: dossiê de análise comercial produzido para o caso real por trás do
// herói desta página. Nota, pesos, notas por bloco, sinais vermelhos e
// citações são literais. Nome da paciente removido de toda citação.

export type BlocoStatus = "critico" | "medio" | "ok";

export interface DossieBloco {
  letra: string;
  nome: string;
  peso: number; // %
  nota: number; // /10
  status: BlocoStatus;
  resumo: string;
  citacao?: { time: string; falante: string; texto: string };
}

export interface SinalVermelho {
  id: string;
  nome: string;
  detalhe: string;
  citacao?: { time: string; texto: string };
}

export const DOSSIE = {
  scoreGlobal: 3.8,
  veredicto:
    "Consulta com falha estrutural grave no fechamento. Domínio técnico evidente, mas executou apenas 30% do método: pulou previsibilidade, pulou validação \"faz sentido?\", pulou calibração de orçamento, vendeu procedimento técnico cru, e — pecado capital — saiu da consulta sem pagamento de entrada, mesmo com a paciente declarando explicitamente \"faz, não importa o preço\".",
  resultado: {
    fechou: "Não (mas a paciente saiu praticamente decidida)",
    entrada: "Nada — saiu sem pagar",
    proximoPasso: "\"As meninas vão te ligar\" — follow-up aberto, ninguém ligou",
  },
  blocos: [
    {
      letra: "A",
      nome: "Previsibilidade e abertura",
      peso: 10,
      nota: 3,
      status: "critico",
      resumo: "Foi direto pra anamnese clínica sem apresentar a estrutura da consulta. Modo médico tradicional, não modo closer. Não identificou o tomador de decisão — a paciente mencionou o marido só no fim, espontaneamente.",
      citacao: { time: "início", falante: "DOUTOR", texto: "E o que você sente nelas, além de raiva?" },
    },
    {
      letra: "B",
      nome: "Descoberta de dor",
      peso: 15,
      nota: 6,
      status: "medio",
      resumo: "Mapeou bem a dor funcional e o histórico. Mas pulou a camada emocional completamente — só perto do fim a paciente revelou que o motivador real era estético, e o médico não cavou isso.",
    },
    {
      letra: "C",
      nome: "Apresentação de resultado",
      peso: 15,
      nota: 3,
      status: "critico",
      resumo: "Vendeu procedimento técnico puro — tipos de vaso, milímetros, sessões. Zero caso real, zero antes/depois, zero transformação descrita. A paciente nunca viu o resultado que estava comprando.",
      citacao: { time: "21:29", falante: "DOUTOR", texto: "A senhora tem três tipos de vaso para resolver hoje. Os que te trouxeram até aqui, que são as varicotes. Atrás da perna, a senhora já tem varizes que a gente chama de reticulares." },
    },
    {
      letra: "D",
      nome: "Validação + calibração",
      peso: 15,
      nota: 1,
      status: "critico",
      resumo: "Pulou as duas perguntas-chave que precedem qualquer preço: \"esse resultado faz sentido?\" e \"quanto a senhora se planejou pra investir?\". A paciente tentou abrir a porta sozinha — e foi ignorada.",
      citacao: { time: "27:40", falante: "PACIENTE", texto: "Tudo depende dos valores." },
    },
    {
      letra: "E",
      nome: "Oferta de decisão",
      peso: 20,
      nota: 5,
      status: "medio",
      resumo: "Único bloco com acerto real: ancoragem alta seguida de condição especial à vista. Mas sem CTA de fechamento, sem silêncio após o preço, sem atrelar a condição a \"fechar hoje\".",
      citacao: { time: "28:09", falante: "DOUTOR", texto: "Então, esse aqui é o planejamento, tá? Pra gente tratar tudo, tá bom? São 12 de 600, tá? Se a senhora quiser fechar, à vista 5 de 400." },
    },
    {
      letra: "F",
      nome: "Contorno de objeção",
      peso: 15,
      nota: 4,
      status: "medio",
      resumo: "A paciente sinalizou 80% decidida — \"acho que vou fazer\" — e o médico aceitou no valor de face, sem script de retomada. Segundos depois, a paciente quebrou a própria objeção sozinha.",
      citacao: { time: "29:50", falante: "PACIENTE", texto: "Eu vou dar uma pensada, mas eu acho que eu vou fazer sim." },
    },
    {
      letra: "G",
      nome: "Pagamento da entrada",
      peso: 10,
      nota: 1,
      status: "critico",
      resumo: "O pecado capital. A paciente disse \"faz, não importa o preço\", confirmou autorização do marido, pediu nota fiscal — sinal de quem vai pagar mesmo. Não foi pedido nem o sinal simbólico.",
      citacao: { time: "30:00", falante: "PACIENTE", texto: "Eu vou ver com o caixa forte lá, que ele já falou pra mim. Ai, faz, não importa o preço." },
    },
  ] as DossieBloco[],
  bonus: {
    nome: "Crenças travadas",
    nota: 3,
    resumo:
      "Diminutivos sistemáticos (\"vasinhos\", \"tonzinho\") que diminuem o tratamento subconscientemente. Esquiva de fechamento (\"as meninas ligam\") repassando o trabalho de cobrar. Garantias defensivas em excesso, projetando desconfiança que a paciente não demonstrou. Diagnóstico: antes de treinar técnica, treinar crença.",
  },
  sinaisVermelhos: [
    {
      id: "durabilidade",
      nome: "Explicou durabilidade sem perguntarem",
      detalhe: "Antecipou justificativa de prazo sem a paciente ter objetado — sinal de que o próprio profissional achava o tratamento caro ou demorado.",
      citacao: { time: "24:46", texto: "Eu não vou te prometer que uma vez a gente consegue. Mas duas, três vai ser a mesma coisa das injeções." },
    },
    {
      id: "saiu-sem-pagar",
      nome: "Saiu sem cobrar entrada",
      detalhe: "O mais grave dos oito sinais. Paciente decidida, zero entrada paga, encerramento com \"as meninas vão te ligar\". Esfriamento garantido.",
    },
    {
      id: "pre-julgou-bolso",
      nome: "Pré-julgou o bolso da paciente",
      detalhe: "Ouviu \"tudo depende dos valores\" e, em vez de perguntar o orçamento, seguiu pra logística e soltou o preço sem ancoragem nenhuma.",
    },
  ] as SinalVermelho[],
  recomendacao: {
    curta: "Perfeito. Vamos fechar e processar sua entrada?",
    completa:
      "Perfeito! Já que ele autorizou e o resultado fez sentido pra senhora, vamos fechar agora. Eu peço o pagamento da entrada — pode ser os 2 mil à vista ou os 600 da primeira parcela. PIX, cartão ou transferência? Aí a senhora já sai daqui com data marcada e tudo certinho.",
  },
};

export const RIGOR = {
  eyebrow: "Por que isso não é jogar no ChatGPT",
  headline: "Uma régua que muda de nota não é régua",
  headlineFull: "Uma régua que muda de nota não é uma régua. É um sorteio.",
  intro: "Essa é a parte que ninguém conta, e é a diferença entre um sistema e uma brincadeira.",
  itens: [
    {
      titulo: "A mesma call, duas vezes, notas diferentes",
      corpo: "Um modelo de linguagem, na configuração padrão, é criativo por projeto. Rodamos a mesma consulta duas vezes e recebemos notas separadas por quase um ponto inteiro — atravessando a fronteira entre \"bom\" e \"regular\". A clínica demitiria alguém com base num dado que não se repete. Zeramos a temperatura do modelo. A nota virou determinística. Duas leituras, o mesmo número, sempre.",
    },
    {
      titulo: "Modelo não faz conta",
      corpo: "Pedimos ao modelo o score final e ele devolveu 78. A soma ponderada dos blocos que ele mesmo tinha dado era 67. Modelo de linguagem escreve bem e soma mal. Hoje o modelo só dá as notas por bloco; a matemática acontece no código, onde não existe criatividade.",
    },
    {
      titulo: "Transcrição errada condena inocente",
      corpo: "Uma consulta pontuou vermelho por \"abandono do sinal\". Fomos ao áudio: o closer tinha dito \"consegue cem?\", negociando o sinal de duzentos para cem — técnica correta do método. A transcrição automática ouviu \"consegue sem?\". Um homófono transformou uma boa negociação em capitulação, e a IA condenou o profissional com toda a confiança do mundo.",
    },
    {
      titulo: "Quem lê texto corrido não sabe quem falou",
      corpo: "A análise precisa saber que a frase saiu da boca do paciente, não do closer. Parece óbvio. Praticamente nenhuma implementação faz isso.",
    },
  ],
  fecho: "Nada disso aparece numa demo bonita. Tudo isso aparece no dia em que a clínica toma uma decisão sobre uma pessoa com base num número. Um sistema que avalia gente precisa estar certo. Não precisa ser impressionante.",
};

export const RECUSA = {
  eyebrow: "O que este sistema se recusa a fazer",
  headline: "Não é vigilância.",
  headlineAccent: "É espelho.",
  paras: [
    "O dossiê não vai para o dono da clínica antes de ir para o profissional. Não existe ranking público. Não existe alerta automático para gestor.",
    "O sistema não decide nada, não demite ninguém e não fala com paciente. Ele lê a consulta, aponta a frase, e mostra a frase que faltou.",
    "O profissional que recebe o próprio dossiê na segunda-feira e vê a paciente dizendo \"faz, não importa o preço\" não precisa de ninguém para dizer o que fazer diferente. Ele já sabe. Ele só nunca tinha visto.",
  ],
  lgpd: "Consultas gravadas exigem consentimento do paciente. Isso é LGPD, não é opcional, e o sistema não roda sem isso.",
};

export const CONSTRUCAO = {
  eyebrow: "Como foi construído",
  headline: "Sob medida.",
  headlineAccent: "Não script importado.",
  paras: [
    "Em produção, em clínicas de alto ticket — odontologia, estética, cirurgia. Régua adaptada ao método comercial que a própria equipe já usa pra treinar o time. Não um script genérico de venda de software importado dos Estados Unidos.",
    "Sincroniza com a pasta onde a clínica já salva as gravações. Não mudamos o processo dela. Encaixamos o sistema no processo que já existia.",
    "Cento e dezessete testes automatizados rodando em cada alteração. Porque quando um sistema pontua pessoas, o bug não é um inconveniente. É uma injustiça.",
  ],
  punch: "Construído do zero, com IA em todo o processo, e entregue rodando — no tempo que uma consultoria tradicional leva para agendar o kickoff.",
};

export const CTA = {
  eyebrow: "Aplicar",
  headline: "O seu minuto 30",
  headlineAccent: "está acontecendo agora.",
  paras: [
    "Não é análise de call. É a pergunta que vem antes: em que ponto exato da sua operação o dinheiro sai pela porta sem ninguém ver?",
    "É isso que a gente encontra, e é isso que a gente constrói para consertar. Um sistema, na sua empresa, atacando o gargalo que você já desconfia que existe.",
    "Trabalhamos com um número limitado de empresas por trimestre.",
  ],
  benefits: [
    "Diagnóstico do gargalo real, não do sintoma",
    "Sistema sob medida, não ferramenta de prateleira",
    "Rodando na sua operação, não uma consultoria de slides",
  ],
  formTitle: "Aplicar para conversa de diagnóstico",
  formCta: "Aplicar para diagnóstico",
  formFinish: "Quatro minutos preenchendo. Se não fizer sentido pros dois lados, a gente te diz na primeira call.",
  successTitle: "Recebido.",
  successBody: "Vamos revisar sua aplicação e voltamos por WhatsApp ou e-mail em breve.",
};

export const SEGMENTOS = [
  "Odontologia",
  "Estética / Dermatologia",
  "Cirurgia plástica",
  "Outra clínica de alto ticket",
  "Outro segmento (não-clínica)",
];

export const RODAPE_NOTA =
  "Caso real. Nome da paciente, do profissional e identificação da clínica omitidos por confidencialidade — o que se mantém é o dossiê: nota, blocos, citações e recomendação. Práticas de engenharia citadas (temperatura determinística, score calculado em código, verificação de homófonos, suíte de testes) documentadas internamente.";
