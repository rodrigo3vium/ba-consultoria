import { Check, X, ArrowRight } from "lucide-react";

const VOID = "#060A12";
const SURFACE = "#0C1220";
const HUD_DARK = "#111A2E";
const ARC = "#38BDF8";
const ARC_BRIGHT = "#7DD3FC";
const STARK_GOLD = "#F59E0B";
const IVORY = "#F0F6FF";
const TEXT_COLOR = "#C8D6E5";
const DIM = "#5A7089";
const BORDER_NORMAL = "rgba(56,189,248,0.08)";
const BORDER_HOVER = "rgba(56,189,248,0.18)";
const FONT_DISPLAY = "'Chakra Petch', sans-serif";
const FONT_MONO = "'IBM Plex Mono', monospace";
const FONT_BODY = "'Exo 2', sans-serif";

const forYouItems = [
  "Para aqueles que cansaram de cursos sobre IA que não ensinam a prática.",
  "Profissionais que querem aprender a construir sistemas de IA.",
  "Não quer nem o blablá raso, nem o conteúdo técnico. Quer aplicação na medida certa para gerar dinheiro.",
  "Sente que não está explorando o máximo potencial da IA.",
];

const notForYouItems = [
  "Quer se tornar programador e entender o detalhe do detalhe técnico",
];

const deliverables = [
  { title: "A Revolução completa", sub: "Do zero até a criação de sistemas" },
  { title: "Sistemas prontos", sub: "Para adaptar e usar em projetos reais. Control C + V para você aplicar no seu negócio e no dos seus clientes." },
  { title: "Comunidade de praticantes", sub: "Pessoas construindo, testando e compartilhando resultados" },
  { title: "Atualizações constantes", sub: "Novas estratégias, sistemas e aplicações conforme o mercado evolui" },
];

interface ClosingSectionProps {
  onCTA: (location: string) => void;
  afterDeliverables?: React.ReactNode;
}

const ClosingSection = ({ onCTA, afterDeliverables }: ClosingSectionProps) => {
  return (
    <>
      {/* SEÇÃO 05 — PARA QUEM É */}
      <section className="px-6" style={{ paddingTop: "100px", paddingBottom: "100px", backgroundColor: SURFACE }}>
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <span className="text-xs uppercase tracking-[5px]" style={{ fontFamily: FONT_MONO, color: DIM }}>
              05 — Para quem é
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" style={{ fontFamily: FONT_DISPLAY, color: IVORY }}>
              Para quem decidiu aproveitar a <span style={{ color: ARC }}>segunda onda da IA</span>
            </h2>
          </div>

          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <p className="text-lg" style={{ fontFamily: FONT_BODY, color: TEXT_COLOR, lineHeight: 1.8, fontWeight: 300 }}>
              A Revolução <strong style={{ color: IVORY }}>não foi feita para curiosos</strong>.
            </p>
            <p className="text-lg" style={{ fontFamily: FONT_BODY, color: DIM, lineHeight: 1.8, fontWeight: 300 }}>
              Foi feito para quem já percebeu que o modelo antigo está condenado.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[4px] text-center mb-6" style={{ fontFamily: FONT_MONO, color: ARC }}>
              Isso é para você que:
            </p>
            {forYouItems.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 transition-all duration-300"
                style={{ backgroundColor: HUD_DARK, borderRadius: "10px", border: `0.5px solid ${BORDER_NORMAL}` }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = BORDER_HOVER; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = BORDER_NORMAL; }}
              >
                <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: ARC }} />
                <span style={{ fontFamily: FONT_BODY, color: TEXT_COLOR, fontSize: "1rem", lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>

          <div className="text-center space-y-8 pt-4">
            <div className="h-px w-24 mx-auto" style={{ background: `linear-gradient(90deg, transparent, ${ARC}40, transparent)` }} />
            <p className="text-sm uppercase tracking-[4px]" style={{ fontFamily: FONT_MONO, color: DIM }}>
              Você não precisa:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["saber programar", "ter experiência com IA"].map((item, i) => (
                <span
                  key={i}
                  className="px-5 py-2.5"
                  style={{
                    fontFamily: FONT_MONO,
                    color: TEXT_COLOR,
                    fontSize: "0.85rem",
                    backgroundColor: HUD_DARK,
                    borderRadius: "8px",
                    border: `0.5px solid ${BORDER_NORMAL}`,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="space-y-2 pt-4">
              <p className="text-lg" style={{ fontFamily: FONT_BODY, color: TEXT_COLOR, fontWeight: 300 }}>
                Você só precisa de uma coisa:
              </p>
              <p className="text-xl md:text-2xl font-bold" style={{ fontFamily: FONT_DISPLAY, color: ARC }}>
                Estar disposto a aprender a pensar como arquiteto ao invés de como usuário.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${ARC}25, transparent)` }} />

      {/* SEÇÃO 06 — PARA QUEM NÃO É */}
      <section className="px-6" style={{ paddingTop: "100px", paddingBottom: "100px", backgroundColor: VOID }}>
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <span className="text-xs uppercase tracking-[5px]" style={{ fontFamily: FONT_MONO, color: DIM }}>
              06 — Para quem não é
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" style={{ fontFamily: FONT_DISPLAY, color: IVORY }}>
              Para quem ainda está no <span style={{ color: "#DC2626" }}>modo consumo</span>
            </h2>
          </div>

          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <p className="text-lg" style={{ fontFamily: FONT_BODY, color: TEXT_COLOR, lineHeight: 1.8, fontWeight: 300 }}>
              O Método STARK <strong style={{ color: IVORY }}>não é para todo mundo</strong>.
            </p>
            <p className="text-lg" style={{ fontFamily: FONT_BODY, color: DIM, lineHeight: 1.8, fontWeight: 300 }}>
              E isso é intencional.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[4px] text-center mb-6" style={{ fontFamily: FONT_MONO, color: "#DC2626" }}>
              Isso NÃO é para você que:
            </p>
            {notForYouItems.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5"
                style={{ backgroundColor: "rgba(220,38,38,0.04)", borderRadius: "10px", border: "0.5px solid rgba(220,38,38,0.12)" }}
              >
                <X className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#DC2626" }} />
                <span style={{ fontFamily: FONT_BODY, color: DIM, fontSize: "1rem", lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>

          <div className="text-center space-y-6 pt-4">
            <p className="text-sm uppercase tracking-[4px]" style={{ fontFamily: FONT_MONO, color: DIM }}>
              Você não precisa:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["saber programar", "ter experiência com IA"].map((item, i) => (
                <span
                  key={i}
                  className="px-5 py-2.5"
                  style={{
                    fontFamily: FONT_MONO,
                    color: TEXT_COLOR,
                    fontSize: "0.85rem",
                    backgroundColor: HUD_DARK,
                    borderRadius: "8px",
                    border: `0.5px solid ${BORDER_NORMAL}`,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="space-y-2 pt-4">
              <p className="text-lg" style={{ fontFamily: FONT_BODY, color: TEXT_COLOR, fontWeight: 300 }}>
                Você só precisa de uma coisa:
              </p>
              <p className="text-xl md:text-2xl font-bold" style={{ fontFamily: FONT_DISPLAY, color: ARC }}>
                Estar disposto a aprender a pensar como arquiteto ao invés de como usuário.
              </p>
            </div>
            <div className="space-y-2 pt-4">
              <p className="text-xl font-bold" style={{ fontFamily: FONT_DISPLAY, color: IVORY }}>
                Aqui você aprende a construir.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${ARC}25, transparent)` }} />

      {/* SEÇÃO 07 — O QUE VOCÊ RECEBE */}
      <section className="px-6" style={{ paddingTop: "100px", paddingBottom: "100px", backgroundColor: SURFACE }}>
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <span className="text-xs uppercase tracking-[5px]" style={{ fontFamily: FONT_MONO, color: DIM }}>
              07 — O que você recebe
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" style={{ fontFamily: FONT_DISPLAY, color: IVORY }}>
              Um ecossistema completo para transformar <span style={{ color: ARC }}>IA em receita</span>
            </h2>
          </div>

          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <p className="text-lg" style={{ fontFamily: FONT_BODY, color: TEXT_COLOR, lineHeight: 1.8, fontWeight: 300 }}>
              Isso não é um curso.
            </p>
            <p className="text-lg" style={{ fontFamily: FONT_BODY, color: TEXT_COLOR, lineHeight: 1.8, fontWeight: 300 }}>
              É um sistema pensado para que você saia com <strong style={{ color: IVORY }}>algo funcionando</strong>.
            </p>
          </div>

          <div className="space-y-4">
            {deliverables.map((d, i) => (
              <div
                key={i}
                className="flex items-start gap-5 p-6 transition-all duration-300"
                style={{ backgroundColor: HUD_DARK, borderRadius: "10px", border: `0.5px solid ${BORDER_NORMAL}` }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = BORDER_HOVER; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = BORDER_NORMAL; }}
              >
                <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full" style={{ backgroundColor: `${ARC}15` }}>
                  <Check className="w-4 h-4" style={{ color: ARC }} />
                </div>
                <div>
                  <p className="font-semibold text-base" style={{ fontFamily: FONT_DISPLAY, color: IVORY }}>{d.title}</p>
                  <p className="text-sm mt-1" style={{ fontFamily: FONT_BODY, color: DIM, fontWeight: 300 }}>{d.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bônus */}
          <div
            className="p-8 md:p-10 space-y-4"
            style={{
              backgroundColor: HUD_DARK,
              borderRadius: "14px",
              border: `0.5px solid ${STARK_GOLD}30`,
              boxShadow: `0 0 40px rgba(245,158,11,0.04)`,
            }}
          >
            <p className="text-sm uppercase tracking-[4px] font-semibold" style={{ fontFamily: FONT_MONO, color: STARK_GOLD }}>
              Bônus
            </p>
            <p className="text-lg" style={{ fontFamily: FONT_BODY, color: TEXT_COLOR, lineHeight: 1.8, fontWeight: 300 }}>
              Aprenda como construir uma oferta para vender consultorias de criação de sistemas de{" "}
              <strong style={{ color: STARK_GOLD }}>R$5 a R$30 mil reais</strong>.
            </p>
          </div>
        </div>
      </section>

      {afterDeliverables}

      <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${ARC}25, transparent)` }} />

      {/* PRICING */}
      <section className="px-6" style={{ paddingTop: "100px", paddingBottom: "100px", backgroundColor: VOID }}>
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <p className="text-lg" style={{ fontFamily: FONT_BODY, color: TEXT_COLOR, lineHeight: 1.8, fontWeight: 300 }}>
              Durante anos, o único jeito de ganhar dinheiro no digital foi: construir audiência, investir em tráfego, escalar volume.
            </p>
            <p className="text-base" style={{ fontFamily: FONT_BODY, color: DIM, lineHeight: 1.8, fontWeight: 300 }}>
              E isso custa: <strong style={{ color: TEXT_COLOR }}>tempo, dinheiro e energia</strong>.
            </p>
            <p className="text-lg" style={{ fontFamily: FONT_BODY, color: TEXT_COLOR, lineHeight: 1.8, fontWeight: 300 }}>
              Aqui, você está aprendendo um modelo diferente. Um modelo onde:
            </p>
            <p className="text-2xl md:text-3xl font-bold" style={{ fontFamily: FONT_DISPLAY, color: STARK_GOLD }}>
              1 único contrato pode pagar todo o investimento.
            </p>
          </div>

          <div className="text-center space-y-4">
            <p className="text-base" style={{ fontFamily: FONT_BODY, color: DIM, fontWeight: 300 }}>
              Se você fechar <strong style={{ color: TEXT_COLOR }}>1 projeto de R$5.000</strong> ou <strong style={{ color: TEXT_COLOR }}>1 projeto de R$10.000</strong>
            </p>
            <p className="text-lg" style={{ fontFamily: FONT_BODY, color: ARC }}>
              👉 isso já muda completamente o seu jogo.
            </p>
          </div>

          {/* Price Card */}
          <div
            className="max-w-md mx-auto p-10 text-center space-y-6"
            style={{
              backgroundColor: HUD_DARK,
              borderRadius: "14px",
              border: `0.5px solid ${STARK_GOLD}40`,
              boxShadow: `0 0 60px rgba(245,158,11,0.06)`,
            }}
          >
            <p className="text-sm uppercase tracking-[4px]" style={{ fontFamily: FONT_MONO, color: STARK_GOLD }}>
              Investimento
            </p>
            <p className="text-base" style={{ fontFamily: FONT_BODY, color: TEXT_COLOR, fontWeight: 300 }}>
              Acesso completo ao Método STARK
            </p>
            <div>
              <p className="text-4xl md:text-5xl font-bold" style={{ fontFamily: FONT_DISPLAY, color: IVORY }}>
                R$1.997
              </p>
              <p className="text-sm mt-2" style={{ fontFamily: FONT_MONO, color: DIM }}>
                à vista ou <span style={{ color: STARK_GOLD }}>12x de R$199,70</span>
              </p>
            </div>

            <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${STARK_GOLD}30, transparent)` }} />

            <div className="space-y-3 text-left">
              <p className="text-xs uppercase tracking-[3px]" style={{ fontFamily: FONT_MONO, color: DIM }}>
                Menos que:
              </p>
              {[
                "1 mês de tráfego mal otimizado",
                "1 curso genérico de marketing",
                "1 erro tentando sozinho",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span style={{ color: STARK_GOLD, fontSize: "0.7rem" }}>▸</span>
                  <span className="text-sm" style={{ fontFamily: FONT_BODY, color: DIM, fontWeight: 300 }}>{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => onCTA("pricing")}
              className="w-full inline-flex items-center justify-center gap-3 uppercase tracking-[2px] px-8 py-4 mt-4 transition-all duration-300 font-semibold"
              style={{
                fontFamily: FONT_MONO,
                color: VOID,
                backgroundColor: STARK_GOLD,
                borderRadius: "6px",
                fontSize: "0.8rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#FBBF24";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(245,158,11,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = STARK_GOLD;
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Quero o Método STARK
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${ARC}25, transparent)` }} />

      {/* FINAL CTA */}
      <section
        className="relative px-6"
        style={{ paddingTop: "100px", paddingBottom: "100px", backgroundColor: VOID }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(56,189,248,0.04) 0%, transparent 70%)",
        }} />

        <div className="max-w-3xl mx-auto text-center space-y-10 relative z-10">
          <div className="space-y-4">
            <p className="text-lg" style={{ fontFamily: FONT_BODY, color: DIM, fontWeight: 300 }}>
              Você pode continuar:
            </p>
            <p className="text-xl" style={{ fontFamily: FONT_BODY, color: TEXT_COLOR, fontWeight: 300 }}>
              tentando fazer o modelo antigo funcionar.
            </p>
          </div>

          <div className="h-px w-24 mx-auto" style={{ background: `linear-gradient(90deg, transparent, ${ARC}40, transparent)` }} />

          <div className="space-y-4">
            <p className="text-lg" style={{ fontFamily: FONT_BODY, color: DIM, fontWeight: 300 }}>
              Ou pode:
            </p>
            <p className="text-2xl md:text-3xl font-bold" style={{ fontFamily: FONT_DISPLAY, color: ARC }}>
              aprender um modelo revolucionário que já está funcionando agora.
            </p>
          </div>

          <button
            onClick={() => onCTA("final-stark")}
            className="inline-flex items-center gap-3 uppercase tracking-[2px] px-10 py-5 transition-all duration-300 font-semibold"
            style={{
              fontFamily: FONT_MONO,
              color: VOID,
              backgroundColor: ARC,
              borderRadius: "6px",
              fontSize: "0.85rem",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = ARC_BRIGHT;
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(56,189,248,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = ARC;
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Quero aprender o Método STARK e começar a criar meus sistemas de IA
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </>
  );
};

export default ClosingSection;
