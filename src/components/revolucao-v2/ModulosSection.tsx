import { useState } from "react";

const VOID = "#060A12";
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

const modulos = [
  {
    num: "01",
    title: "A Janela",
    body: "Entenda por que essa é a maior oportunidade da década e por que a maioria está desperdiçando.",
    color: ARC,
  },
  {
    num: "02",
    title: "Diagnóstico de Capital",
    body: "Mapeie seu negócio pelo fluxo AVEE, aplique o ICE Score e descubra exatamente ONDE a IA gera mais retorno pra você.",
    color: STARK_GOLD,
  },
  {
    num: "03",
    title: "A Ferramenta",
    body: "Domine Claude Code do zero. Se você sabe usar ChatGPT, vai aprender Claude Code. É conversa, não programação.",
    color: ARC_BRIGHT,
  },
  {
    num: "04",
    title: "Primeiro Sistema",
    body: "Construa seu primeiro sistema de IA funcional — o processo #1 que você identificou no diagnóstico. Hands-on, ao vivo, replicável.",
    color: ARC,
  },
  {
    num: "05",
    title: "Multiplicação",
    body: "Implemente os processos #2 e #3. Saia com 3 sistemas funcionando e economizando 10–15 horas por semana.",
    color: STARK_GOLD,
  },
  {
    num: "06",
    title: "O Mapa Completo",
    body: "Veja como um sistema operacional completo funciona. Cases reais, arquitetura, as 3 ondas de escala. Entenda o jogo inteiro.",
    color: ARC_BRIGHT,
  },
  {
    num: "07",
    title: "Equipe + IA",
    body: "Frameworks pra integrar IA na rotina do seu time. Templates de delegação prontos pra usar amanhã.",
    color: ARC,
  },
  {
    num: "08",
    title: "Capital em Ação",
    body: "Monte seu roadmap de 90 dias. Calcule o ROI real do que construiu. Saiba exatamente qual o próximo passo.",
    color: STARK_GOLD,
  },
];

const ModulosSection = () => {
  const [activeModulo, setActiveModulo] = useState<number | null>(null);

  return (
    <section style={{ backgroundColor: VOID, paddingTop: 100, paddingBottom: 100 }} className="px-6">
      <div className="max-w-5xl mx-auto space-y-14">
        {/* Header */}
        <div className="text-center space-y-4">
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: "0.7rem",
              color: DIM,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
            }}
          >
            07 — A Jornada
          </span>
          <h2
            style={{
              fontFamily: FONT_DISPLAY,
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              color: IVORY,
            }}
          >
            Do diagnóstico ao sistema{" "}
            <span style={{ color: ARC }}>funcionando</span>
          </h2>
          <p
            style={{
              fontFamily: FONT_BODY,
              fontSize: "1rem",
              color: TEXT_COLOR,
              lineHeight: 1.7,
              fontWeight: 300,
              maxWidth: 580,
              margin: "0 auto",
            }}
          >
            8 módulos. Cada um termina com um entregável concreto. Você não avança sem aplicar.
          </p>
        </div>

        {/* Modules grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {modulos.map((mod, i) => {
            const isActive = activeModulo === i;
            return (
              <div
                key={i}
                className="cursor-pointer transition-all duration-300"
                style={{
                  backgroundColor: isActive ? `rgba(56,189,248,0.06)` : HUD_DARK,
                  border: `0.5px solid ${isActive ? `rgba(56,189,248,0.25)` : `rgba(56,189,248,0.08)`}`,
                  borderRadius: 12,
                  padding: "24px 28px",
                  display: "flex",
                  gap: 20,
                  alignItems: "flex-start",
                }}
                onClick={() => setActiveModulo(isActive ? null : i)}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.borderColor = "rgba(56,189,248,0.18)";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.borderColor = "rgba(56,189,248,0.08)";
                }}
              >
                {/* Number badge */}
                <div
                  style={{
                    flexShrink: 0,
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: isActive ? `rgba(56,189,248,0.15)` : `rgba(56,189,248,0.06)`,
                    border: `1px solid ${isActive ? `rgba(56,189,248,0.4)` : `rgba(56,189,248,0.12)`}`,
                    transition: "all 0.3s",
                  }}
                >
                  <span
                    style={{
                      fontFamily: FONT_MONO,
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: isActive ? ARC : DIM,
                    }}
                  >
                    {mod.num}
                  </span>
                </div>

                <div style={{ flex: 1 }}>
                  <h4
                    style={{
                      fontFamily: FONT_DISPLAY,
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: isActive ? IVORY : TEXT_COLOR,
                      marginBottom: 6,
                      transition: "color 0.3s",
                    }}
                  >
                    {mod.title}
                  </h4>
                  <p
                    style={{
                      fontFamily: FONT_BODY,
                      fontSize: "0.85rem",
                      color: isActive ? TEXT_COLOR : DIM,
                      lineHeight: 1.65,
                      fontWeight: 300,
                      transition: "color 0.3s",
                      maxHeight: isActive ? "200px" : "0",
                      overflow: "hidden",
                      transitionProperty: "max-height, color",
                      transitionDuration: "0.4s",
                    }}
                  >
                    {mod.body}
                  </p>
                  {!isActive && (
                    <p
                      style={{
                        fontFamily: FONT_MONO,
                        fontSize: "0.6rem",
                        color: DIM,
                        letterSpacing: "0.1em",
                        marginTop: 4,
                      }}
                    >
                      clique para expandir
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary strip */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "6px 20px",
            justifyContent: "center",
            padding: "24px 0",
            borderTop: "0.5px solid rgba(56,189,248,0.08)",
            borderBottom: "0.5px solid rgba(56,189,248,0.08)",
          }}
        >
          {[
            { value: "8", label: "módulos" },
            { value: "27", label: "aulas" },
            { value: "3", label: "sistemas funcionando ao final" },
            { value: "10–15h", label: "economizadas por semana" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2" style={{ padding: "4px 0" }}>
              <span style={{ fontFamily: FONT_DISPLAY, fontSize: "1.2rem", fontWeight: 700, color: ARC }}>
                {item.value}
              </span>
              <span style={{ fontFamily: FONT_MONO, fontSize: "0.65rem", color: DIM, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                {item.label}
              </span>
              {i < 3 && <span style={{ color: "rgba(56,189,248,0.2)", marginLeft: 8 }}>·</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulosSection;
