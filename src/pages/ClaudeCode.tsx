import { useEffect } from "react";
import { buildHotmartCheckoutUrl } from "@/lib/hotmartUtils";
import { tracker } from "@/lib/tracking";
import { Calendar, Clock, Video, MessageCircle, Zap, DollarSign, Brain, Rocket, ArrowRight } from "lucide-react";
import ApocalypseSection from "@/components/claudecode/ApocalypseSection";
import metodoStarkLogo from "@/assets/metodo-stark-logo.svg";

const HOTMART_BASE_URL = "https://pay.hotmart.com/T104822269G";

// Método Stark color constants
const VOID = "#060A12";
const SURFACE = "#0C1220";
const HUD_DARK = "#111A2E";
const ARC = "#38BDF8";
const ARC_BRIGHT = "#7DD3FC";
const ARC_DIM = "#0C4A6E";
const IRON_RED = "#DC2626";
const STARK_GOLD = "#F59E0B";
const IVORY = "#F0F6FF";
const TEXT_COLOR = "#C8D6E5";
const DIM = "#5A7089";
const MUTED_COLOR = "#3D5068";
const SUCCESS = "#34D399";

const BORDER_NORMAL = "rgba(56,189,248,0.08)";
const BORDER_HOVER = "rgba(56,189,248,0.18)";

const FONT_DISPLAY = "'Chakra Petch', sans-serif";
const FONT_MONO = "'IBM Plex Mono', monospace";
const FONT_BODY = "'Exo 2', sans-serif";

const ClaudeCode = () => {
  useEffect(() => {
    document.body.style.backgroundColor = VOID;
    document.body.style.paddingTop = "0";
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.paddingTop = "";
    };
  }, []);

  useEffect(() => {
    tracker.page("Masterclass Claude Code");
  }, []);

  const handleCTA = (location: string) => {
    tracker.track("cta_click", {
      product: "claude-code",
      cta_location: location,
      page: "/educacao/claude-code",
    });
    const url = buildHotmartCheckoutUrl({ baseUrl: HOTMART_BASE_URL });
    window.open(url, "_blank");
  };

  const learningTopics = [
    {
      icon: Brain,
      title: "Fundamentos do Claude",
      description: "Por que ele é diferente das outras IAs e como isso muda a forma de trabalhar.",
    },
    {
      icon: Zap,
      title: "Chat, Code e Coworking",
      description: "A diferença entre os três modos e quando usar cada um na prática.",
    },
    {
      icon: Rocket,
      title: "Skills e MCPs",
      description: "Como utilizar Skills e MCPs para trabalhar melhor na nova era da IA.",
    },
    {
      icon: MessageCircle,
      title: "Automações práticas",
      description: "Como pensar automações sem complicação, mesmo para quem nunca abriu uma IDE.",
    },
  ];

  const practicalExamples = [
    {
      icon: DollarSign,
      text: "Como deixei de pagar mais de R$500 em aplicativos que repliquei com Claude",
    },
    {
      icon: Clock,
      text: "Claude Coworking + Notion = mais de 4 horas economizadas por semana",
    },
    {
      icon: Rocket,
      text: "Os aplicativos mais ousados que estou construindo e que estão mudando minha tese de negócios",
    },
    {
      icon: Brain,
      text: "O que a Y Combinator está dizendo sobre esse movimento",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden" style={{ backgroundColor: VOID }}>
      {/* Grain overlay */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 9999,
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Minimal Navbar */}
      <nav
        className="sticky top-0 z-50 px-6 py-4"
        style={{
          backgroundColor: SURFACE,
          borderBottom: `0.5px solid ${BORDER_NORMAL}`,
        }}
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span
            className="text-lg tracking-[3px] font-bold uppercase"
            style={{ fontFamily: FONT_DISPLAY, color: ARC }}
          >
            MÉTODO STARK
          </span>
          <button
            onClick={() => handleCTA("nav")}
            className="text-sm uppercase tracking-[3px] px-5 py-2 transition-all duration-300 font-semibold"
            style={{
              fontFamily: FONT_MONO,
              color: VOID,
              backgroundColor: ARC,
              borderRadius: "6px",
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = ARC_BRIGHT;
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(56,189,248,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = ARC;
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Inscrever-se
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative px-6" style={{ paddingTop: "120px", paddingBottom: "120px" }}>
        {/* Radial glow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 20%, rgba(56,189,248,0.06) 0%, transparent 70%)",
        }} />

        {/* Decorative vertical line */}
        <div
          className="absolute right-[15%] top-1/2 -translate-y-1/2 hidden lg:block"
          style={{
            width: "1px",
            height: "120px",
            background: `linear-gradient(180deg, transparent, ${ARC}30, transparent)`,
          }}
        />

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-3">
            <span
              className="text-xs uppercase tracking-[5px]"
              style={{
                fontFamily: FONT_MONO,
                color: DIM,
                letterSpacing: "3px",
              }}
            >
              <span style={{ color: ARC }}>—</span>&nbsp;&nbsp;Masterclass ao vivo · 25/03 às 19h&nbsp;&nbsp;<span style={{ color: ARC }}>—</span>
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] uppercase"
            style={{ fontFamily: FONT_DISPLAY, color: IVORY }}
          >
            Ganhe mais, trabalhe menos.{" "}
            <span style={{ color: ARC }}>
              Automatizando sua vida com Claude Code.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{
              fontFamily: FONT_BODY,
              color: TEXT_COLOR,
              fontSize: "clamp(15px, 2vw, 18px)",
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            Aprenda como pessoas comuns estão usando IA para cortar custos, automatizar
            tarefas operacionais e ganhar mais dinheiro. Sem precisar de equipe e sem saber programar.
          </p>

          {/* CTA */}
          <div className="pt-4">
            <button
              onClick={() => handleCTA("hero")}
              className="inline-flex items-center gap-3 uppercase tracking-[2px] px-8 py-4 transition-all duration-300 font-semibold"
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
              Garantir minha vaga
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Gradient separator */}
      <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${ARC}25, transparent)` }} />

      {/* O que você vai aprender */}
      <section className="px-6" style={{ backgroundColor: SURFACE, paddingTop: "100px", paddingBottom: "100px" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span
              className="text-xs uppercase tracking-[6px] block mb-6"
              style={{
                fontFamily: FONT_MONO,
                color: DIM,
                letterSpacing: "3px",
              }}
            >
              O que você vai aprender
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase"
              style={{ fontFamily: FONT_DISPLAY, color: IVORY }}
            >
              Da teoria à{" "}
              <span style={{ color: ARC }}>prática</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {learningTopics.map((topic, index) => (
              <div
                key={index}
                className="p-7 transition-all duration-300 relative overflow-hidden group"
                style={{
                  backgroundColor: HUD_DARK,
                  border: `0.5px solid ${BORDER_NORMAL}`,
                  borderRadius: "14px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = BORDER_HOVER;
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = BORDER_NORMAL;
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {/* Top glow line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${ARC}40, transparent)` }}
                />
                <topic.icon className="w-6 h-6 mb-4" style={{ color: ARC }} />
                <h3
                  className="text-xl font-bold mb-3 uppercase"
                  style={{ fontFamily: FONT_DISPLAY, color: IVORY }}
                >
                  {topic.title}
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{
                    fontFamily: FONT_BODY,
                    color: DIM,
                    lineHeight: 1.7,
                    fontWeight: 300,
                  }}
                >
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient separator */}
      <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${ARC}25, transparent)` }} />

      {/* O que vou mostrar na prática */}
      <section className="px-6" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span
              className="text-xs uppercase tracking-[6px] block mb-6"
              style={{
                fontFamily: FONT_MONO,
                color: DIM,
                letterSpacing: "3px",
              }}
            >
              Na prática
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase"
              style={{ fontFamily: FONT_DISPLAY, color: IVORY }}
            >
              O que vou{" "}
              <span style={{ color: ARC }}>mostrar ao vivo</span>
            </h2>
          </div>

          {/* Quote */}
          <p
            className="text-center text-xl md:text-2xl mb-16 max-w-3xl mx-auto"
            style={{
              fontFamily: FONT_BODY,
              fontStyle: "italic",
              color: IVORY,
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            "Vou abrir parte do que eu já venho construindo na prática — incluindo o que está mudando
            completamente minha tese de negócios."
          </p>

          <div className="space-y-4">
            {practicalExamples.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-5 p-6 transition-all duration-300 relative overflow-hidden group"
                style={{
                  backgroundColor: HUD_DARK,
                  border: `0.5px solid ${BORDER_NORMAL}`,
                  borderRadius: "14px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = BORDER_HOVER;
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = BORDER_NORMAL;
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <item.icon
                  className="w-5 h-5 mt-1 flex-shrink-0"
                  style={{ color: ARC }}
                />
                <p
                  className="text-lg"
                  style={{
                    fontFamily: FONT_BODY,
                    color: TEXT_COLOR,
                    lineHeight: 1.7,
                    fontWeight: 300,
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient separator */}
      <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${ARC}25, transparent)` }} />

      {/* O Mundo Já Mudou */}
      <ApocalypseSection onCTA={handleCTA} />

      {/* Gradient separator */}
      <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${ARC}25, transparent)` }} />

      {/* Detalhes do evento */}
      <section className="px-6" style={{ backgroundColor: SURFACE, paddingTop: "100px", paddingBottom: "100px" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span
              className="text-xs uppercase tracking-[6px] block mb-6"
              style={{
                fontFamily: FONT_MONO,
                color: DIM,
                letterSpacing: "3px",
              }}
            >
              Detalhes
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold uppercase"
              style={{ fontFamily: FONT_DISPLAY, color: IVORY }}
            >
              Quando e onde
            </h2>
          </div>

          <div
            className="p-8 md:p-12 text-center relative overflow-hidden"
            style={{
              backgroundColor: HUD_DARK,
              border: `0.5px solid ${BORDER_NORMAL}`,
              borderRadius: "14px",
            }}
          >
            {/* Top glow */}
            <div className="absolute top-[-1px] left-[20%] right-[20%] h-px" style={{ background: `linear-gradient(90deg, transparent, ${ARC}30, transparent)` }} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              <div className="flex flex-col items-center gap-3">
                <Calendar className="w-6 h-6" style={{ color: ARC }} />
                <div>
                  <p
                    className="text-xl font-bold uppercase"
                    style={{ fontFamily: FONT_DISPLAY, color: IVORY }}
                  >
                    25 de março de 2026
                  </p>
                  <p
                    className="text-sm"
                    style={{ fontFamily: FONT_BODY, color: DIM, fontWeight: 300 }}
                  >
                    Terça-feira
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Clock className="w-6 h-6" style={{ color: ARC }} />
                <div>
                  <p
                    className="text-xl font-bold uppercase"
                    style={{ fontFamily: FONT_DISPLAY, color: IVORY }}
                  >
                    19h (Horário de São Paulo)
                  </p>
                  <p
                    className="text-sm"
                    style={{ fontFamily: FONT_BODY, color: DIM, fontWeight: 300 }}
                  >
                    Ao vivo
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
              <div className="flex items-center gap-2">
                <Video className="w-5 h-5" style={{ color: ARC }} />
                <span
                  className="text-base"
                  style={{ fontFamily: FONT_BODY, color: TEXT_COLOR, fontWeight: 400 }}
                >
                  Google Meet
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" style={{ color: ARC }} />
                <span
                  className="text-base"
                  style={{ fontFamily: FONT_BODY, color: TEXT_COLOR, fontWeight: 400 }}
                >
                  Dúvidas ao vivo no final
                </span>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={() => handleCTA("details")}
              className="inline-flex items-center gap-3 uppercase tracking-[2px] px-8 py-4 transition-all duration-300 font-semibold"
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
              Garantir minha vaga
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Gradient separator */}
      <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${ARC}25, transparent)` }} />

      {/* CTA Final */}
      <section className="px-6 relative" style={{ paddingTop: "120px", paddingBottom: "120px" }}>
        {/* Subtle glow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(56,189,248,0.04) 0%, transparent 70%)",
        }} />

        <div className="max-w-3xl mx-auto text-center space-y-8 relative z-10">
          <p
            className="text-xl md:text-2xl"
            style={{
              fontFamily: FONT_BODY,
              fontStyle: "italic",
              color: TEXT_COLOR,
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            "A melhor hora para começar foi ontem. A segunda melhor é agora."
          </p>

          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase"
            style={{ fontFamily: FONT_DISPLAY, color: IVORY }}
          >
            Comece a construir com{" "}
            <span style={{ color: ARC }}>Claude</span>
          </h2>

          <p
            className="text-lg max-w-xl mx-auto"
            style={{
              fontFamily: FONT_BODY,
              color: DIM,
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            Masterclass ao vivo, 25 de março às 19h. Vagas limitadas pelo Google Meet.
          </p>

          <button
            onClick={() => handleCTA("final")}
            className="inline-flex items-center gap-3 uppercase tracking-[2px] px-10 py-5 transition-all duration-300 font-semibold"
            style={{
              fontFamily: FONT_MONO,
              color: VOID,
              backgroundColor: ARC,
              borderRadius: "6px",
              fontSize: "0.9rem",
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
            Garantir minha vaga agora
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="px-6 py-12"
        style={{
          backgroundColor: VOID,
          borderTop: `0.5px solid ${BORDER_NORMAL}`,
        }}
      >
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <span
            className="text-base tracking-[3px] font-bold uppercase"
            style={{ fontFamily: FONT_DISPLAY, color: ARC }}
          >
            MÉTODO STARK
          </span>
          <p
            className="text-sm"
            style={{
              fontFamily: FONT_MONO,
              color: DIM,
              letterSpacing: "1px",
              fontSize: "0.7rem",
            }}
          >
            por Rodrigo Albuquerque
          </p>
          <p
            className="text-xs tracking-[2px]"
            style={{ fontFamily: FONT_MONO, color: MUTED_COLOR, fontSize: "0.65rem" }}
          >
            © {new Date().getFullYear()} BA Consultoria. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&family=Exo+2:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap');
      `}</style>
    </div>
  );
};

export default ClaudeCode;
