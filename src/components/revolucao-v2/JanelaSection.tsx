const SURFACE = "#0C1220";
const ARC = "#38BDF8";
const ARC_BRIGHT = "#7DD3FC";
const STARK_GOLD = "#F59E0B";
const IVORY = "#F0F6FF";
const TEXT_COLOR = "#C8D6E5";
const FONT_DISPLAY = "'Chakra Petch', sans-serif";
const FONT_MONO = "'IBM Plex Mono', monospace";
const FONT_BODY = "'Exo 2', sans-serif";

const highlights = [
  "Hoje, você pode cobrar R$10 mil por um site e entregar em 40 minutos.",
  "Pode produzir o conteúdo de uma semana inteira em uma tarde.",
  "Pode analisar 50 calls de vendas enquanto toma um café.",
];

const JanelaSection = () => {
  return (
    <section style={{ backgroundColor: SURFACE, paddingTop: 100, paddingBottom: 100 }} className="px-6">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Eyebrow */}
        <div className="flex items-center gap-3">
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
            Atenção
          </span>
          <div
            className="animate-pulse"
            style={{
              width: 6,
              height: 6,
              background: ARC_BRIGHT,
              borderRadius: "50%",
              boxShadow: "0 0 10px rgba(56,189,248,0.5)",
            }}
          />
        </div>

        {/* H2 */}
        <h2
          style={{
            fontFamily: FONT_DISPLAY,
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: 700,
            lineHeight: 1.15,
            color: IVORY,
            maxWidth: 750,
          }}
        >
          Existe uma janela de oportunidade aberta agora.{" "}
          <em style={{ color: ARC, fontStyle: "italic" }}>E ela vai fechar.</em>
        </h2>

        {/* Body */}
        <div className="space-y-6" style={{ maxWidth: 720 }}>
          <p style={{ fontFamily: FONT_BODY, fontSize: "1.05rem", color: TEXT_COLOR, lineHeight: 1.85, fontWeight: 300 }}>
            Em toda revolução tecnológica, existe um momento onde quem sabe usar a nova tecnologia tem uma vantagem absurda sobre quem não sabe.
          </p>
          <p style={{ fontFamily: FONT_BODY, fontSize: "1.05rem", color: TEXT_COLOR, lineHeight: 1.85, fontWeight: 300 }}>
            Quem aprendeu Excel nos anos 90 tinha superpoderes no escritório. Hoje, é pré-requisito. Quem criou site nos anos 2000 conquistava clientes enquanto a concorrência dependia de panfleto. Hoje, até a padaria tem Instagram.
          </p>
          <p style={{ fontFamily: FONT_DISPLAY, fontSize: "1.2rem", color: IVORY, fontWeight: 600 }}>
            Com IA, estamos nesse exato momento.
          </p>

          {/* Highlight block */}
          <div
            style={{
              borderLeft: `3px solid ${ARC}`,
              paddingLeft: 24,
              paddingTop: 6,
              paddingBottom: 6,
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            {highlights.map((item, i) => (
              <p key={i} style={{ fontFamily: FONT_BODY, fontSize: "1.05rem", color: IVORY, lineHeight: 1.7 }}>
                {item}
              </p>
            ))}
          </div>

          <p style={{ fontFamily: FONT_BODY, fontSize: "1.05rem", color: TEXT_COLOR, lineHeight: 1.85, fontWeight: 300 }}>
            Seus clientes não sabem que isso é possível. Seus concorrentes não sabem que isso é possível.
          </p>
          <p
            style={{
              fontFamily: FONT_DISPLAY,
              fontSize: "1.3rem",
              color: STARK_GOLD,
              fontWeight: 700,
              letterSpacing: "0.02em",
            }}
          >
            Mas vão saber.
          </p>
          <p style={{ fontFamily: FONT_BODY, fontSize: "1.05rem", color: TEXT_COLOR, lineHeight: 1.85, fontWeight: 300 }}>
            E quando souberem — quando todo mundo souber usar IA — essa margem desaparece. A vantagem vira pré-requisito. O diferencial vira commodity.
          </p>

          {/* Callout box */}
          <div
            style={{
              background: "rgba(56,189,248,0.04)",
              border: "0.5px solid rgba(56,189,248,0.15)",
              borderRadius: 12,
              padding: "28px 32px",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <p style={{ fontFamily: FONT_BODY, fontSize: "1.1rem", color: TEXT_COLOR, lineHeight: 1.8, fontWeight: 300 }}>
              A pergunta não é <strong style={{ color: IVORY }}>SE</strong> essa janela vai fechar. É{" "}
              <strong style={{ color: ARC }}>QUANDO</strong>.
            </p>
            <p style={{ fontFamily: FONT_BODY, fontSize: "1.05rem", color: TEXT_COLOR, lineHeight: 1.8, fontWeight: 300 }}>
              E quem já estiver operando com IA quando fechar, construiu vantagem estrutural. Quem não estiver, vai competir por preço.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JanelaSection;
