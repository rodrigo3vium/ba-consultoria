import { useEffect } from "react";
import { buildHotmartCheckoutUrl } from "@/lib/hotmartUtils";
import { tracker } from "@/lib/tracking";
import { Calendar, Clock, Video, MessageCircle, Zap, DollarSign, Brain, Rocket, ArrowRight } from "lucide-react";
import ApocalypseSection from "@/components/claudecode/ApocalypseSection";
import metodoStarkLogo from "@/assets/metodo-stark-logo.svg";

const HOTMART_BASE_URL = "https://pay.hotmart.com/T104822269G";

// Strategic HUD Editorial v.02 — paleta PB
const CYAN = "#20DDEB";
const BG_MAIN = "#05090B";
const BG_CARD = "#0B1114";
const BG_ELEV = "#11171A";
const BORDER_NORMAL = "rgba(255,255,255,0.10)";
const BORDER_HOVER = "rgba(32,221,235,0.18)";

const ClaudeCode = () => {
  useEffect(() => {
    document.body.style.backgroundColor = BG_MAIN;
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
    <div className="min-h-screen overflow-hidden bg-pb-void">
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
        className="sticky top-0 z-50 px-6 py-4 bg-pb-void-card"
        style={{ borderBottom: `0.5px solid ${BORDER_NORMAL}` }}
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img loading="lazy" src={metodoStarkLogo} alt="Método Stark" className="w-8 h-8" />
            <span className="text-lg tracking-[3px] font-display uppercase text-pb-cyan">
              MÉTODO STARK
            </span>
          </div>
          <button
            onClick={() => handleCTA("nav")}
            className="font-mono text-[12px] uppercase tracking-[0.1em] px-5 py-2 transition-all duration-300 text-pb-cyan"
            style={{ border: `1px solid ${CYAN}`, background: "transparent" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = CYAN;
              e.currentTarget.style.color = BG_MAIN;
              e.currentTarget.style.boxShadow = `0 0 24px rgba(32,221,235,0.45)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = CYAN;
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
          background: `radial-gradient(ellipse 60% 40% at 50% 20%, rgba(32,221,235,0.06) 0%, transparent 70%)`,
        }} />

        {/* Decorative vertical line */}
        <div
          className="absolute right-[15%] top-1/2 -translate-y-1/2 hidden lg:block"
          style={{
            width: "1px",
            height: "120px",
            background: `linear-gradient(180deg, transparent, ${CYAN}30, transparent)`,
          }}
        />

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          {/* Logo */}
          <div className="flex justify-center">
            <img loading="lazy" src={metodoStarkLogo} alt="Método Stark" className="w-24 h-24 md:w-32 md:h-32" />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-[3px] text-pb-ink-muted">
              <span className="text-pb-cyan">—</span>&nbsp;&nbsp;Masterclass ao vivo · 25/03 às 19h&nbsp;&nbsp;<span className="text-pb-cyan">—</span>
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display uppercase text-pb-ink leading-[0.92] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Ganhe mais, trabalhe menos.{" "}
            <span className="text-pb-cyan">
              Automatizando sua vida com Claude Code.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="font-body text-pb-ink-soft max-w-2xl mx-auto"
            style={{ fontSize: "clamp(15px, 2vw, 18px)", lineHeight: 1.7 }}
          >
            Aprenda como pessoas comuns estão usando IA para cortar custos, automatizar
            tarefas operacionais e ganhar mais dinheiro. Sem precisar de equipe e sem saber programar.
          </p>

          {/* CTA */}
          <div className="pt-4">
            <button
              onClick={() => handleCTA("hero")}
              className="inline-flex items-center gap-3 font-mono uppercase tracking-[2px] px-8 py-4 transition-all duration-300 text-pb-cyan text-[13px]"
              style={{ border: `1px solid ${CYAN}`, background: "transparent" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = CYAN;
                e.currentTarget.style.color = BG_MAIN;
                e.currentTarget.style.boxShadow = `0 0 24px rgba(32,221,235,0.45)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = CYAN;
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
      <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${CYAN}40, transparent)` }} />

      {/* O que você vai aprender */}
      <section className="px-6 bg-pb-void-card" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-[11px] uppercase tracking-[3px] text-pb-ink-muted block mb-6">
              O que você vai aprender
            </span>
            <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-3xl md:text-4xl lg:text-5xl">
              Da teoria à{" "}
              <span className="text-pb-cyan">prática</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {learningTopics.map((topic, index) => (
              <div
                key={index}
                className="p-7 transition-all duration-300 relative overflow-hidden group"
                style={{
                  backgroundColor: BG_ELEV,
                  border: `0.5px solid ${BORDER_NORMAL}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = BORDER_HOVER;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = BORDER_NORMAL;
                }}
              >
                {/* Top glow line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${CYAN}40, transparent)` }}
                />
                <topic.icon className="w-6 h-6 mb-4 text-pb-cyan" />
                <h3 className="font-display uppercase text-pb-ink text-xl mb-3">
                  {topic.title}
                </h3>
                <p className="font-body text-pb-ink-muted" style={{ lineHeight: 1.7 }}>
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient separator */}
      <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${CYAN}40, transparent)` }} />

      {/* O que vou mostrar na prática */}
      <section className="px-6" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-[11px] uppercase tracking-[3px] text-pb-ink-muted block mb-6">
              Na prática
            </span>
            <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-3xl md:text-4xl lg:text-5xl">
              O que vou{" "}
              <span className="text-pb-cyan">mostrar ao vivo</span>
            </h2>
          </div>

          {/* Quote */}
          <p
            className="font-body text-pb-ink text-center text-xl md:text-2xl mb-16 max-w-3xl mx-auto"
            style={{ fontStyle: "italic", lineHeight: 1.7 }}
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
                  backgroundColor: BG_ELEV,
                  border: `0.5px solid ${BORDER_NORMAL}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = BORDER_HOVER;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = BORDER_NORMAL;
                }}
              >
                <item.icon className="w-5 h-5 mt-1 flex-shrink-0 text-pb-cyan" />
                <p className="font-body text-pb-ink-soft text-lg" style={{ lineHeight: 1.7 }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient separator */}
      <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${CYAN}40, transparent)` }} />

      {/* O Mundo Já Mudou */}
      <ApocalypseSection onCTA={handleCTA} />

      {/* Gradient separator */}
      <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${CYAN}40, transparent)` }} />

      {/* Detalhes do evento */}
      <section className="px-6 bg-pb-void-card" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-mono text-[11px] uppercase tracking-[3px] text-pb-ink-muted block mb-6">
              Detalhes
            </span>
            <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-3xl md:text-4xl">
              Quando e onde
            </h2>
          </div>

          <div
            className="p-8 md:p-12 text-center relative overflow-hidden"
            style={{
              backgroundColor: BG_ELEV,
              border: `0.5px solid ${BORDER_NORMAL}`,
            }}
          >
            {/* Top glow */}
            <div className="absolute top-[-1px] left-[20%] right-[20%] h-px" style={{ background: `linear-gradient(90deg, transparent, ${CYAN}30, transparent)` }} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              <div className="flex flex-col items-center gap-3">
                <Calendar className="w-6 h-6 text-pb-cyan" />
                <div>
                  <p className="font-display uppercase text-pb-ink text-xl">
                    25 de março de 2026
                  </p>
                  <p className="font-body text-pb-ink-muted text-sm">
                    Terça-feira
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Clock className="w-6 h-6 text-pb-cyan" />
                <div>
                  <p className="font-display uppercase text-pb-ink text-xl">
                    19h (Horário de São Paulo)
                  </p>
                  <p className="font-body text-pb-ink-muted text-sm">
                    Ao vivo
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
              <div className="flex items-center gap-2">
                <Video className="w-5 h-5 text-pb-cyan" />
                <span className="font-body text-pb-ink-soft text-base">
                  Google Meet
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-pb-cyan" />
                <span className="font-body text-pb-ink-soft text-base">
                  Dúvidas ao vivo no final
                </span>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={() => handleCTA("details")}
              className="inline-flex items-center gap-3 font-mono uppercase tracking-[2px] px-8 py-4 transition-all duration-300 text-pb-cyan text-[13px]"
              style={{ border: `1px solid ${CYAN}`, background: "transparent" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = CYAN;
                e.currentTarget.style.color = BG_MAIN;
                e.currentTarget.style.boxShadow = `0 0 24px rgba(32,221,235,0.45)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = CYAN;
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
      <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${CYAN}40, transparent)` }} />

      {/* CTA Final */}
      <section className="px-6 relative" style={{ paddingTop: "120px", paddingBottom: "120px" }}>
        {/* Subtle glow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, rgba(32,221,235,0.04) 0%, transparent 70%)`,
        }} />

        <div className="max-w-3xl mx-auto text-center space-y-8 relative z-10">
          <p
            className="font-body text-pb-ink-soft text-xl md:text-2xl"
            style={{ fontStyle: "italic", lineHeight: 1.7 }}
          >
            "A melhor hora para começar foi ontem. A segunda melhor é agora."
          </p>

          <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-3xl md:text-4xl lg:text-5xl">
            Comece a construir com{" "}
            <span className="text-pb-cyan">Claude</span>
          </h2>

          <p className="font-body text-pb-ink-muted text-lg max-w-xl mx-auto" style={{ lineHeight: 1.7 }}>
            Masterclass ao vivo, 25 de março às 19h. Vagas limitadas pelo Google Meet.
          </p>

          <button
            onClick={() => handleCTA("final")}
            className="inline-flex items-center gap-3 font-mono uppercase tracking-[2px] px-10 py-5 transition-all duration-300 text-pb-cyan text-[14px]"
            style={{ border: `1px solid ${CYAN}`, background: "transparent" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = CYAN;
              e.currentTarget.style.color = BG_MAIN;
              e.currentTarget.style.boxShadow = `0 0 24px rgba(32,221,235,0.45)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = CYAN;
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
        className="px-6 py-12 bg-pb-void"
        style={{ borderTop: `0.5px solid ${BORDER_NORMAL}` }}
      >
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <img loading="lazy" src={metodoStarkLogo} alt="Método Stark" className="w-10 h-10" />
            <span className="font-display uppercase text-pb-cyan tracking-[3px] text-base">
              MÉTODO STARK
            </span>
          </div>
          <p className="font-mono text-[11px] uppercase tracking-[1px] text-pb-ink-muted">
            por Rodrigo Albuquerque
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[2px] text-pb-ink-faint">
            © {new Date().getFullYear()} BA Consultoria. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=IBM+Plex+Mono:wght@300;400;500;600&family=Fraunces:ital,wght@0,400;0,600;1,400&display=swap');
      `}</style>
    </div>
  );
};

export default ClaudeCode;
