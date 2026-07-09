// Conteúdo compartilhado da página de portfólio "Imóvel vazio não vende".
// Fonte única de verdade da copy + dados da demo, consumida pelas DUAS versões
// visuais (SaaS e PB) para que texto e assets nunca divirjam entre elas.

export interface Ambiente {
  id: string;
  label: string;
  estilo: string;      // estilo aplicado (rótulo real da foto mobiliada)
  estiloDesc: string;  // descrição curta do estilo
  antes: string;
  depois: string;
}

// Pares antes/depois REAIS (mesmo cômodo, mesmo ângulo) — o comparador faz o wipe
// direto entre as duas fotos. Assets otimizados em /public/portfolio/imovel-vazio/.
// NOTA: fotos "depois" carregam marca d'água leve de listing real (Perez Imóveis),
// origem dos assets do MVP — substituir por renders próprios antes de campanha paga.
export const AMBIENTES: Ambiente[] = [
  {
    id: "estar",
    label: "Sala de estar",
    estilo: "Contemporâneo",
    estiloDesc: "Tons neutros, madeira clara",
    antes: "/portfolio/imovel-vazio/estar-antes.jpg",
    depois: "/portfolio/imovel-vazio/estar-depois.jpg",
  },
  {
    id: "jantar",
    label: "Sala de jantar",
    estilo: "Clássico",
    estiloDesc: "Mesa posta, cadeiras estofadas",
    antes: "/portfolio/imovel-vazio/jantar-antes.jpg",
    depois: "/portfolio/imovel-vazio/jantar-depois.jpg",
  },
  {
    id: "cozinha",
    label: "Cozinha",
    estilo: "Escandinavo",
    estiloDesc: "Clean, funcional",
    antes: "/portfolio/imovel-vazio/cozinha-antes.jpg",
    depois: "/portfolio/imovel-vazio/cozinha-depois.jpg",
  },
];

export const STAMP_LABEL = "Ambientação virtual";

// ── HERO ────────────────────────────────────────────────────────────────────
export const HERO = {
  eyebrow: "Case 01 — Mercado imobiliário",
  h1: "O comprador decide antes de visitar. Sua foto mostra uma parede vazia.",
  sub: "83% dos corretores dizem que o cliente só se imagina morando quando o imóvel está mobiliado. Metade não mobilia — porque mobiliar custa milhares de reais e semanas de logística.",
  subPunch: "Nós resolvemos isso em 40 segundos e por um centésimo do custo.",
  cta: "Ver como funciona",
};

// Números de prova rápida (hero / faixa de stats)
export const STATS = [
  { value: "83%", label: "dos corretores dizem que o cliente só se imagina morando quando o imóvel está mobiliado", accent: true },
  { value: "40s", label: "para transformar a foto de um ambiente vazio em ambiente mobiliado" },
  { value: "1/100", label: "do custo de um home staging físico tradicional" },
  { value: "3", label: "estilos por ambiente — cada público enxerga a casa dele" },
];

// ── DOBRA 1 — O PROBLEMA ─────────────────────────────────────────────────────
export const PROBLEMA = {
  eyebrow: "O problema",
  headline: "Ninguém compra o que não consegue imaginar.",
  paras: [
    "Nos Estados Unidos existe uma prática que aqui virou lenda: o open house. O corretor mobilia a casa inteira, coloca café passado no fogão, abre a porta num domingo e deixa a família andar pela sala imaginando o sofá dela ali.",
    "Funciona. Não é achismo. Metade dos corretores americanos relata que a casa mobiliada sai mais rápido do mercado. Quase um terço relata oferta de 1% a 10% acima do imóvel idêntico e vazio.",
    "E funciona por um motivo bobo: a casa vazia não é neutra. Ela é fria. Quatro paredes e um rodapé não contam história nenhuma. A pessoa olha, não sente nada, e passa pro próximo anúncio.",
    "O problema é o preço. Mobiliar uma casa de verdade custa alguns milhares de reais, precisa de caminhão, de montador, de seguro, de duas semanas, e o dono ainda mora lá. Por isso mais da metade dos corretores simplesmente não faz — e posta a foto da parede vazia.",
    "No Brasil o open house nunca pegou. Mas o problema que ele resolve está aqui, intacto, em cada anúncio do portal.",
  ],
};

// ── DOBRA 2 — A VIRADA ───────────────────────────────────────────────────────
export const VIRADA = {
  eyebrow: "A virada",
  headline: "O open house não acontece mais na porta da casa.",
  paras: [
    "Acontece na miniatura do anúncio, no meio de um scroll, durante sete segundos, no celular de alguém deitado na cama.",
    "É ali que a venda é ganha ou perdida. E ali você não precisa de caminhão de mudança. Precisa de uma imagem.",
  ],
  punch: "Um open house virtual, por um centésimo do preço, entregue em 40 segundos.",
  parasAfter: [
    "Você sobe a foto do imóvel vazio. O sistema entende a arquitetura do ambiente — onde está a janela, de onde vem a luz, qual a proporção real do cômodo — e mobilia. Não cola móvel de catálogo em cima da foto. Constrói a cena com a luz certa, a sombra certa, a escala certa.",
    "Três estilos por ambiente. Escandinavo, contemporâneo, clássico. Porque o comprador de um apartamento de 45m² no centro não é o mesmo que compra a casa de 300m² no condomínio — e o sofá que vende pra um afasta o outro.",
  ],
};

// ── DOBRA 3 — A DEMO ─────────────────────────────────────────────────────────
export const DEMO = {
  eyebrow: "A demo",
  headline: "Não acredite. Testa.",
  sub: "Três imóveis reais, ambientados de verdade. Escolha um ambiente, escolha o estilo e veja a parede vazia virar sala. Arraste a divisória pra comparar o antes e o depois.",
  finish: "Você acabou de ver, em segundos, o que uma diária de home stager cobra pra fazer em duas semanas.",
  usePhotoCta: "Quero ver a MINHA foto ambientada",
  usePhotoNote: "A ambientação da sua própria foto é o primeiro entregável da conversa de diagnóstico — sem custo pra ver funcionando.",
};

// ── DOBRA 4 — HONESTIDADE COMO ATIVO ─────────────────────────────────────────
export const HONESTIDADE = {
  eyebrow: "Honestidade como ativo",
  headline: "O que este sistema se recusa a fazer.",
  paras: [
    "Existe uma linha entre mostrar o potencial e mentir sobre o imóvel. Do lado errado dessa linha tem o Código de Defesa do Consumidor, artigo 37. E tem coisa pior: o comprador que chega na visita, vê que a foto era outra coisa, e nunca mais atende sua ligação.",
    "Nos Estados Unidos as MLS já exigem que toda imagem ambientada seja rotulada, e que a alteração seja exclusivamente decorativa. Apagar rachadura, sumir com infiltração, esconder mancha — isso é fraude, e a lei chama pelo nome.",
  ],
  itensIntro: "Então o sistema nasce com isso embutido, sem opção de desligar:",
  itens: [
    {
      titulo: "Carimbo automático",
      desc: 'Toda imagem gerada sai marcada como "ambientação virtual". Sem opção de remover.',
    },
    {
      titulo: "Par obrigatório",
      desc: "A foto ambientada nunca sai sozinha. Sai sempre junto com a original do imóvel vazio.",
    },
    {
      titulo: "Zero alteração estrutural",
      desc: "Parede, piso, esquadria, metragem, defeito aparente: intocados. O sistema mobilia. Não reforma.",
    },
  ],
  fecho: "Vendemos imaginação, não ilusão. É por isso que o corretor pode usar isso sem medo — e é por isso que o comprador não se sente enganado quando abre a porta.",
};

// ── DOBRA 5 — O QUE MUDA NA OPERAÇÃO ─────────────────────────────────────────
export const COMPARISON: { k: string; antes: string; depois: string; highlight?: boolean }[] = [
  { k: "Custo por imóvel", antes: "Milhares de reais", depois: "Centavos por foto" },
  { k: "Prazo", antes: "1 a 3 semanas", depois: "40 segundos" },
  { k: "Logística", antes: "Caminhão, montador, seguro", depois: "Upload" },
  { k: "Imóvel ocupado", antes: "Inviável", depois: "Indiferente" },
  { k: "Testar 3 públicos diferentes", antes: "Impossível", depois: "Três cliques" },
  { k: "Cobertura da carteira", antes: 'Os 2 imóveis "difíceis"', depois: "Todos", highlight: true },
];

export const OPERACAO = {
  eyebrow: "O que muda na operação",
  headline: "De dois imóveis difíceis para a carteira inteira.",
  fecho: 'A última linha é a que importa. Hoje o corretor escolhe mobiliar o imóvel encalhado. Com custo perto de zero, toda a carteira roda mobiliada — inclusive a que ia vender de qualquer jeito, e agora vende por mais.',
};

// ── DOBRA 6 — COMO ISSO FOI CONSTRUÍDO ───────────────────────────────────────
export const CONSTRUCAO = {
  eyebrow: "Como isso foi construído",
  headline: "Sob medida. Em dias, não meses.",
  paras: [
    "Isto não é um produto de prateleira. Nenhum SaaS gringo entende que no Brasil o corretor sobe foto pelo celular, no meio da rua, entre uma visita e outra. Nenhum SaaS gringo integra no CRM que a imobiliária já usa. Nenhum SaaS gringo aceita o carimbo que o CDC exige.",
    "O que você viu acima roda dentro do sistema da imobiliária. Botão no anúncio. Sem exportar, sem baixar, sem plugin.",
    "E foi construído do zero, com IA no processo inteiro — da arquitetura ao deploy — no tempo que uma agência tradicional leva pra mandar a proposta comercial.",
  ],
  punch: "Não implantamos ferramenta. Desenhamos o processo, identificamos onde a IA muda o número, e construímos o sistema que muda o número.",
};

// ── DOBRA 7 — CTA ────────────────────────────────────────────────────────────
export const CTA = {
  eyebrow: "O próximo passo",
  headline: "O gargalo da sua empresa provavelmente não é foto de imóvel.",
  paras: [
    "Mas ele existe, você sabe qual é, e ele tem um custo por mês que você nunca calculou direito.",
    "Trabalhamos com um número limitado de empresas por trimestre, construindo o sistema que ataca esse gargalo específico. Não é consultoria. Não é curso. É o sistema, rodando, na sua operação.",
  ],
  formTitle: "Aplicar para uma conversa de diagnóstico",
  formCta: "Aplicar para o diagnóstico",
  formFinish: "Levamos 4 minutos preenchendo. Se não fizer sentido pros dois lados, a gente te diz na primeira call.",
  benefits: ["Diagnóstico do seu gargalo real", "Sistema rodando, não slide", "Vagas limitadas por trimestre"],
  successTitle: "Aplicação recebida.",
  successBody: "Vamos te chamar no WhatsApp pra marcar a conversa de diagnóstico e, se fizer sentido, ambientar a primeira foto da sua carteira.",
};

export const SEGMENTOS = [
  "Imobiliária",
  "Corretor autônomo",
  "Incorporadora / construtora",
  "Portal / marketplace",
  "Outro",
];

// ── RODAPÉ TÉCNICO ───────────────────────────────────────────────────────────
export const RODAPE_TECNICO =
  "Dados: National Association of Realtors, 2025 Profile of Home Staging (n=1.266 corretores, EUA). Números de custo de staging físico referentes ao mediano reportado no mesmo estudo. Resultados variam por imóvel, praça e qualidade da imagem original. Demonstração com imagens reais de staging; a ambientação da sua foto é feita na conversa de diagnóstico.";

export const LEAD_SOURCE = "imovel-vazio-nao-vende";
