const VOID = "#060A12";
const SURFACE = "#0C1220";
const HUD_DARK = "#111A2E";
const ARC = "#38BDF8";
const ARC_BRIGHT = "#7DD3FC";
const STARK_GOLD = "#F59E0B";
const IVORY = "#F0F6FF";
const TEXT_COLOR = "#C8D6E5";
const DIM = "#5A7089";
const FONT_DISPLAY = "'Chakra Petch', sans-serif";
const FONT_MONO = "'IBM Plex Mono', monospace";
const FONT_BODY = "'Exo 2', sans-serif";

const cards = [
  {
    num: "01",
    tag: "ONDE INVESTIR",
    color: ARC,
    title: "Mapeie antes de agir",
    body: "Antes de tocar em qualquer ferramenta, você mapeia seu negócio pelo fluxo AVEE (Atrair → Vender → Entregar → Escalar) e aplica o ICE Score pra encontrar os 3 processos onde IA gera mais retorno. Não sai automatizando qualquer coisa. Investe onde o retorno é comprovável.",
  },
  {
    num: "02",
    tag: "COMO IMPLEMENTAR",
    color: STARK_GOLD,
    title: "Uma ferramenta, não cinco",
    body: "Claude Code faz em 30 minutos o que antes levava 5 dias no n8n ou Make. E quando você não sabe algo, pergunta pra ele — não pro YouTube. Sem fragmentação, sem 5 assinaturas, sem caos.",
  },
  {
    num: "03",
    tag: "O QUE CONSTRUIR",
    color: ARC_BRIGHT,
    title: "Entregável a cada módulo",
    body: "Nada de teoria. Cada módulo entrega um sistema funcional no seu negócio. Não é 'o que é uma skill' — é 'aqui está a skill de produção de conteúdo que resolve o seu problema de inconsistência'. Você sai da aula com algo rodando.",
  },
];

const MetodoCapitalSection = () => {
  return (
    <section style={{ backgroundColor: SURFACE, paddingTop: 100, paddingBottom: 100 }} className="px-6">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-5">
          <div className="flex items-center justify-center gap-3">
            <div style={{ width: 32, height: 1, background: ARC }} />
            <span
              style={{
                fontFamily: FONT_MONO,
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: ARC,
              }}
            >
              05 — O Mecanismo
            </span>
            <div style={{ width: 32, height: 1, background: ARC }} />
          </div>

          <h2
            style={{
              fontFamily: FONT_DISPLAY,
              fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              color: IVORY,
            }}
          >
            O{" "}
            <span
              style={{
                background: `linear-gradient(135deg, ${ARC}, ${ARC_BRIGHT})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Método Capital
            </span>
          </h2>

          <p
            style={{
              fontFamily: FONT_DISPLAY,
              fontSize: "1.3rem",
              color: STARK_GOLD,
              fontWeight: 600,
            }}
          >
            Pare de usar IA como brinquedo. Comece a usar como alocação de capital.
          </p>
        </div>

        {/* Body text */}
        <div className="max-w-3xl mx-auto space-y-5 text-center">
          <p style={{ fontFamily: FONT_BODY, fontSize: "1.05rem", color: TEXT_COLOR, lineHeight: 1.85, fontWeight: 300 }}>
            O Método Capital aplica um princípio simples à implementação de IA:{" "}
            <strong style={{ color: IVORY }}>concentre seus recursos onde o retorno é máximo. Elimine o resto.</strong>
          </p>
          <p style={{ fontFamily: FONT_BODY, fontSize: "0.95rem", color: DIM, lineHeight: 1.8, fontWeight: 300 }}>
            É o mesmo princípio que Jack Welch usou pra transformar a GE de uma empresa de US$14 bilhões em US$410 bilhões. Alocação inteligente de recursos. O método científico aplicado ao seu negócio.
          </p>
          <p style={{ fontFamily: FONT_DISPLAY, fontSize: "1.05rem", color: ARC, fontWeight: 600 }}>
            A lógica funciona em 3 camadas:
          </p>
        </div>

        {/* Three cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="relative overflow-hidden transition-all duration-300"
              style={{
                backgroundColor: HUD_DARK,
                border: `0.5px solid rgba(56,189,248,0.08)`,
                borderRadius: 14,
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `rgba(56,189,248,0.2)`;
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = `0 16px 48px rgba(56,189,248,0.06)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `rgba(56,189,248,0.08)`;
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: `linear-gradient(90deg, transparent, ${card.color}60, transparent)` }}
              />

              <div className="flex items-center gap-3">
                <span
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: "0.6rem",
                    color: card.color,
                    letterSpacing: "0.15em",
                    opacity: 0.7,
                  }}
                >
                  {card.num}
                </span>
                <span
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: "0.55rem",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: card.color,
                    background: `rgba(56,189,248,0.08)`,
                    padding: "3px 10px",
                    borderRadius: 4,
                  }}
                >
                  {card.tag}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: IVORY,
                  lineHeight: 1.3,
                }}
              >
                {card.title}
              </h3>

              <p
                style={{
                  fontFamily: FONT_BODY,
                  fontSize: "0.88rem",
                  color: TEXT_COLOR,
                  lineHeight: 1.75,
                  fontWeight: 300,
                }}
              >
                {card.body}
              </p>
            </div>
          ))}
        </div>

        {/* AVEE callout */}
        <div
          style={{
            background: "rgba(56,189,248,0.03)",
            border: "0.5px solid rgba(56,189,248,0.1)",
            borderRadius: 12,
            padding: "28px 36px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: FONT_MONO,
              fontSize: "0.65rem",
              color: ARC,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Fluxo AVEE
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {["Atrair", "Vender", "Entregar", "Escalar"].map((step, i, arr) => (
              <div key={i} className="flex items-center gap-3">
                <span
                  style={{
                    fontFamily: FONT_DISPLAY,
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: IVORY,
                    background: HUD_DARK,
                    border: `0.5px solid rgba(56,189,248,0.15)`,
                    padding: "8px 20px",
                    borderRadius: 6,
                  }}
                >
                  {step}
                </span>
                {i < arr.length - 1 && (
                  <span style={{ color: ARC, fontSize: "0.9rem" }}>→</span>
                )}
              </div>
            ))}
          </div>
          <p
            style={{
              fontFamily: FONT_BODY,
              fontSize: "0.85rem",
              color: DIM,
              marginTop: 16,
              fontWeight: 300,
            }}
          >
            Mapeie seu negócio nesse fluxo antes de implementar qualquer coisa
          </p>
        </div>
      </div>
    </section>
  );
};

export default MetodoCapitalSection;
