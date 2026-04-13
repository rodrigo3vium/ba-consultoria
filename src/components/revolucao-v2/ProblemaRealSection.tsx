const VOID = "#060A12";
const HUD_DARK = "#111A2E";
const ARC = "#38BDF8";
const STARK_GOLD = "#F59E0B";
const IVORY = "#F0F6FF";
const TEXT_COLOR = "#C8D6E5";
const DIM = "#5A7089";
const FONT_DISPLAY = "'Chakra Petch', sans-serif";
const FONT_MONO = "'IBM Plex Mono', monospace";
const FONT_BODY = "'Exo 2', sans-serif";

const stats = [
  { value: "1%", label: "das empresas se consideram maduras em IA", source: "McKinsey" },
  { value: "25%", label: "das iniciativas de IA entregaram retorno real", source: "IBM" },
  { value: "95%", label: "dos pilotos de IA não saíram do papel", source: "MIT" },
];

const failurePattern = [
  "Compra a ferramenta antes de definir o problema",
  "Tenta automatizar tudo ao mesmo tempo",
  "Assina 5 apps, não implementa nenhum de verdade",
  "Estuda IA por meses, nunca transforma em algo que roda no negócio",
];

const ProblemaRealSection = () => {
  return (
    <section style={{ backgroundColor: VOID, paddingTop: 100, paddingBottom: 100 }} className="px-6">
      <div className="max-w-4xl mx-auto space-y-14">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div style={{ width: 32, height: 1, background: STARK_GOLD }} />
            <span
              style={{
                fontFamily: FONT_MONO,
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: STARK_GOLD,
              }}
            >
              O problema real
            </span>
          </div>
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
            Mas se IA é tão acessível, por que{" "}
            <span style={{ color: STARK_GOLD }}>86% dos empresários estão fracassando?</span>
          </h2>
        </div>

        {/* Intro body */}
        <div className="space-y-5" style={{ maxWidth: 700 }}>
          <p style={{ fontFamily: FONT_BODY, fontSize: "1.05rem", color: TEXT_COLOR, lineHeight: 1.85, fontWeight: 300 }}>
            Talvez você já tenha tentado. Assinou o ChatGPT. Testou aquela ferramenta que alguém indicou. Viu um vídeo sobre automação, abriu o Make, achou complicado, fechou a aba. No dia seguinte, fez a mesma coisa.
          </p>
          <p style={{ fontFamily: FONT_DISPLAY, fontSize: "1.1rem", color: IVORY, fontWeight: 600 }}>
            Não é falta de inteligência. Não é falta de vontade.
          </p>
          <p style={{ fontFamily: FONT_DISPLAY, fontSize: "1.3rem", color: ARC, fontWeight: 700 }}>
            É falta de método.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                backgroundColor: HUD_DARK,
                border: "0.5px solid rgba(245,158,11,0.12)",
                borderRadius: 12,
                padding: "28px 24px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: "2.8rem",
                  fontWeight: 700,
                  color: STARK_GOLD,
                  lineHeight: 1,
                  marginBottom: 10,
                }}
              >
                {s.value}
              </div>
              <p
                style={{
                  fontFamily: FONT_BODY,
                  fontSize: "0.85rem",
                  color: TEXT_COLOR,
                  lineHeight: 1.5,
                  fontWeight: 300,
                  marginBottom: 10,
                }}
              >
                {s.label}
              </p>
              <span
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: "0.6rem",
                  color: DIM,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {s.source}
              </span>
            </div>
          ))}
        </div>

        {/* Failure pattern */}
        <div className="space-y-6">
          <p style={{ fontFamily: FONT_BODY, fontSize: "1.05rem", color: TEXT_COLOR, lineHeight: 1.85, fontWeight: 300 }}>
            O padrão é sempre o mesmo:
          </p>
          <div className="space-y-3">
            {failurePattern.map((item, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "rgba(220,38,38,0.04)",
                  border: "0.5px solid rgba(220,38,38,0.12)",
                  borderRadius: 10,
                  padding: "14px 20px",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                }}
              >
                <span
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: "0.65rem",
                    color: "#DC2626",
                    flexShrink: 0,
                    letterSpacing: "0.05em",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span style={{ fontFamily: FONT_BODY, color: TEXT_COLOR, fontSize: "0.95rem", lineHeight: 1.5 }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Closing */}
        <div
          style={{
            background: "rgba(220,38,38,0.04)",
            border: "0.5px solid rgba(220,38,38,0.15)",
            borderRadius: 12,
            padding: "28px 32px",
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <p style={{ fontFamily: FONT_BODY, fontSize: "1.05rem", color: TEXT_COLOR, lineHeight: 1.8, fontWeight: 300 }}>
            O resultado? <strong style={{ color: IVORY }}>Mais trabalho, não menos.</strong> Mais ferramentas, não mais resultado. Mais confusão, não mais clareza.
          </p>
          <p style={{ fontFamily: FONT_DISPLAY, fontSize: "1.1rem", color: "#DC2626", fontWeight: 600 }}>
            E enquanto ele fica nesse ciclo, a janela vai fechando.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemaRealSection;
