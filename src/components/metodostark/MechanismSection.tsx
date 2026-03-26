const VOID = "#060A12";
const SURFACE = "#0C1220";
const HUD_DARK = "#111A2E";
const ARC = "#38BDF8";
const STARK_GOLD = "#F59E0B";
const IVORY = "#F0F6FF";
const TEXT_COLOR = "#C8D6E5";
const DIM = "#5A7089";

const BORDER_NORMAL = "rgba(56,189,248,0.08)";
const BORDER_HOVER = "rgba(56,189,248,0.18)";

const FONT_DISPLAY = "'Chakra Petch', sans-serif";
const FONT_MONO = "'IBM Plex Mono', monospace";
const FONT_BODY = "'Exo 2', sans-serif";

const beliefs = [
  {
    num: "01",
    title: "IA não é ferramenta. É time.",
    text: "Quem usa IA como assistente vai ter resultados de assistente. Quem arquiteta IA como time vai ter resultados de time. A distinção é fundamental e define como você aprende, implementa e escala.",
  },
  {
    num: "02",
    title: "Entregáveis primeiro. Teoria depois.",
    text: "Cada módulo termina com algo que você aplica no seu negócio antes de avançar. Não existe \"terminar o curso e depois implementar.\" A implementação é o curso.",
  },
  {
    num: "03",
    title: "Sem código. Mas com arquitetura.",
    text: "Você não precisa programar para construir sistemas de IA. Precisa pensar como arquiteto — entender entradas, saídas, fluxos e objetivos. Isso é ensinável para qualquer pessoa que opera um negócio.",
  },
  {
    num: "04",
    title: "Velocidade vence perfeição.",
    text: "Um sistema imperfeito rodando hoje vale mais do que um sistema perfeito que nunca saiu do papel. Você vai construir, testar, ajustar. A iteração é parte do método — não um sinal de que algo deu errado.",
  },
  {
    num: "05",
    title: "O mercado não vai te esperar.",
    text: "Uma minoria silenciosa já está operando com sistemas de IA rodando 24h. Eles não estão esperando o mercado adotar — eles estão criando a vantagem enquanto a maioria debate se vale a pena.",
  },
  {
    num: "06",
    title: "Comunidade acelera aprendizado.",
    text: "Sistemas, prompts e resultados reais compartilhados entre pessoas que operam negócios — isso vale mais do que qualquer aula gravada. O Método Stark é uma comunidade de praticantes, não um grupo de estudantes.",
  },
];

const alphaItems = [
  {
    num: "001",
    title: "Módulos do Zero ao Sistema Completo",
    text: "Cada módulo ensina um componente do sistema de IA para o seu negócio. Cada módulo termina com um entregável concreto. Você não avança sem aplicar — e aplicando, você já está operando.",
  },
  {
    num: "002",
    title: "Comunidade de Praticantes",
    text: "Usuários ativos trocando sistemas reais, prompts que funcionam e resultados verificáveis. Não é grupo de Telegram. É um ambiente onde a prática é o standard — não a exceção.",
  },
  {
    num: "003",
    title: "Chatbot IA Treinado no Método",
    text: "Um assistente especializado disponível 24 horas, treinado no método do Método Stark. Você não precisa esperar pela próxima aula para tirar uma dúvida ou validar uma arquitetura.",
  },
  {
    num: "004",
    title: "Biblioteca de Prompts por Função",
    text: "Prompts organizados por função de negócio: vendas, atendimento, gestão, conteúdo, análise. Não uma lista de curiosidades — um acervo de sistemas que você instala e opera.",
  },
  {
    num: "005",
    title: "Lives com Especialistas",
    text: "Acesso a sessões ao vivo com quem já construiu e operou sistemas de IA em negócios reais. Contexto que nenhuma aula gravada consegue reproduzir.",
  },
  {
    num: "006",
    title: "Atualizações Contínuas",
    text: "O campo de IA muda toda semana. O Método Stark evolui com ele. Novas ferramentas, novos módulos, novos sistemas — inclusos sem custo adicional.",
  },
];

const MechanismSection = () => {
  return (
    <>
      {/* ── SEÇÃO 3 — O MECANISMO ── */}
      <section className="px-6" style={{ paddingTop: "100px", paddingBottom: "100px", backgroundColor: SURFACE }}>
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <span
              className="text-xs uppercase tracking-[5px]"
              style={{ fontFamily: FONT_MONO, color: DIM }}
            >
              03 — O Mecanismo
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
              style={{ fontFamily: FONT_DISPLAY, color: IVORY }}
            >
              Método <span style={{ color: ARC }}>STARK</span>
            </h2>
          </div>

          {/* Statement */}
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h3
              className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight"
              style={{ fontFamily: FONT_DISPLAY, color: IVORY }}
            >
              Não é um curso.
              <br />
              <span style={{ color: ARC }}>É um Ecossistema.</span>
            </h3>
            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ fontFamily: FONT_BODY, color: TEXT_COLOR, lineHeight: 1.8, fontWeight: 300 }}
            >
              No Método Stark existe uma arquitetura de sistemas que separa os profissionais que entenderam como o trabalho vai funcionar daqui pra frente.
            </p>
            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ fontFamily: FONT_BODY, color: TEXT_COLOR, lineHeight: 1.8, fontWeight: 300 }}
            >
              Por trás do Método Stark existe um conjunto de convicções sobre como o trabalho vai funcionar daqui para frente e sobre o que separa os profissionais que vão liderar essa transição dos que vão ser engolidos por ela.
            </p>
          </div>

          {/* Belief cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {beliefs.map((b) => (
              <div
                key={b.num}
                className="p-8 space-y-4 transition-all duration-300"
                style={{
                  backgroundColor: HUD_DARK,
                  border: `0.5px solid ${BORDER_NORMAL}`,
                  borderRadius: "14px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = BORDER_HOVER;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = BORDER_NORMAL;
                }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="text-sm font-semibold"
                    style={{ fontFamily: FONT_MONO, color: ARC, letterSpacing: "2px" }}
                  >
                    {b.num}
                  </span>
                </div>
                <h4
                  className="text-lg md:text-xl font-bold"
                  style={{ fontFamily: FONT_DISPLAY, color: IVORY }}
                >
                  {b.title}
                </h4>
                <p
                  className="text-sm md:text-base leading-relaxed"
                  style={{ fontFamily: FONT_BODY, color: TEXT_COLOR, lineHeight: 1.8, fontWeight: 300 }}
                >
                  {b.text}
                </p>
              </div>
            ))}
          </div>

          {/* Closing statement */}
          <div className="text-center max-w-3xl mx-auto space-y-4" style={{ paddingTop: "40px" }}>
            <div className="h-px w-24 mx-auto" style={{ background: `linear-gradient(90deg, transparent, ${ARC}40, transparent)` }} />
            <h3
              className="text-2xl md:text-3xl font-bold"
              style={{ fontFamily: FONT_DISPLAY, color: IVORY }}
            >
              Você não usa IA.
            </h3>
            <p
              className="text-2xl md:text-3xl font-bold"
              style={{ fontFamily: FONT_DISPLAY, color: ARC }}
            >
              Você comanda um time.
            </p>
            <p
              className="text-base md:text-lg"
              style={{ fontFamily: FONT_BODY, color: DIM, lineHeight: 1.7, fontWeight: 300 }}
            >
              Essa mentalidade muda tudo.
            </p>
          </div>
        </div>
      </section>

      {/* Gradient separator */}
      <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${ARC}25, transparent)` }} />

      {/* ── SEÇÃO 4 — O QUE É O ESTADO ALPHA ── */}
      <section className="px-6" style={{ paddingTop: "100px", paddingBottom: "100px", backgroundColor: VOID }}>
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <span
              className="text-xs uppercase tracking-[5px]"
              style={{ fontFamily: FONT_MONO, color: DIM }}
            >
              04 — O Que É o Método Stark
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
              style={{ fontFamily: FONT_DISPLAY, color: IVORY }}
            >
              Um sistema{" "}
              <span style={{ color: ARC }}>completo.</span>
            </h2>
          </div>

          {/* Description */}
          <div className="text-center max-w-3xl mx-auto">
            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ fontFamily: FONT_BODY, color: TEXT_COLOR, lineHeight: 1.8, fontWeight: 300 }}
            >
              O Método Stark não é um curso avulso sobre IA. É um sistema integrado de educação, prática e comunidade — construído para que você saia com sistemas funcionando no seu negócio, não com slides para revisar nas férias.
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alphaItems.map((item) => (
              <div
                key={item.num}
                className="p-8 space-y-4 transition-all duration-300 relative"
                style={{
                  backgroundColor: HUD_DARK,
                  border: `0.5px solid ${BORDER_NORMAL}`,
                  borderRadius: "14px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = BORDER_HOVER;
                  e.currentTarget.style.boxShadow = "0 0 40px rgba(56,189,248,0.04)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = BORDER_NORMAL;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <span
                  className="text-xs font-semibold"
                  style={{ fontFamily: FONT_MONO, color: ARC, letterSpacing: "3px", opacity: 0.6 }}
                >
                  {item.num}
                </span>
                <h4
                  className="text-lg font-bold"
                  style={{ fontFamily: FONT_DISPLAY, color: IVORY }}
                >
                  {item.title}
                </h4>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: FONT_BODY, color: TEXT_COLOR, lineHeight: 1.8, fontWeight: 300 }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MechanismSection;
