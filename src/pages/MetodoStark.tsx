import { useEffect, useRef, useState } from "react";
import { tracker } from "@/lib/tracking";
import { ArrowRight, Users, Cpu, Brain, Layers } from "lucide-react";
import ApocalypseSection from "@/components/claudecode/ApocalypseSection";
import OpportunitySection from "@/components/metodostark/OpportunitySection";
import MechanismSection from "@/components/metodostark/MechanismSection";
import ClosingSection from "@/components/metodostark/ClosingSection";
import SystemsShowcase from "@/components/metodostark/SystemsShowcase";
import metodoStarkLogo from "@/assets/metodo-stark-logo.svg";

// Strategic HUD Editorial v.02 — paleta PB
const CYAN = "#20DDEB";
const BG_MAIN = "#05090B";
const BG_CARD = "#0B1114";
const BG_ELEV = "#11171A";
const BORDER_NORMAL = "rgba(255,255,255,0.10)";
const BORDER_HOVER = "rgba(32,221,235,0.18)";

const MetodoStark = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    document.body.style.backgroundColor = BG_MAIN;
    document.body.style.paddingTop = "0";
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.paddingTop = "";
    };
  }, []);

  useEffect(() => {
    tracker.page("Método Stark");
  }, []);

  // Scroll tracking — always runs, independent of video
  useEffect(() => {
    let rafId: number;

    const tick = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const totalScrollDistance = rect.height + windowHeight;
        const scrolled = windowHeight - rect.top;
        const progress = Math.min(Math.max(scrolled / totalScrollDistance, 0), 1);
        setScrollProgress(progress);
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  // Video scrubbing — only when video is ready and seekable
  useEffect(() => {
    const video = videoRef.current;
    if (!videoReady || !video || !video.duration || video.readyState < 2) return;

    const acceleratedProgress = Math.min(scrollProgress * 1.67, 1);
    const targetTime = acceleratedProgress * video.duration;
    video.currentTime = targetTime;
  }, [videoReady, scrollProgress]);

  const handleCTA = (location: string) => {
    tracker.track("cta_click", {
      product: "metodo-stark",
      cta_location: location,
      page: "/educacao/a-revolucao",
    });
    window.open("https://pay.hotmart.com/N105097109P", "_blank");
  };

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

      {/* Navbar */}
      <nav
        className="sticky top-0 z-50 px-6 py-4 bg-pb-void-card"
        style={{ borderBottom: `0.5px solid ${BORDER_NORMAL}` }}
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img loading="lazy" src={metodoStarkLogo} alt="Método Stark" className="w-8 h-8" />
            <span className="text-lg tracking-[3px] font-display uppercase text-pb-cyan">
              A REVOLUÇÃO
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
            Quero saber mais
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative px-6" style={{ paddingTop: "120px", paddingBottom: "120px" }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          background: `radial-gradient(ellipse 60% 40% at 50% 20%, rgba(32,221,235,0.06) 0%, transparent 70%)`,
        }} />

        <div
          className="absolute right-[15%] top-1/2 -translate-y-1/2 hidden lg:block"
          style={{
            width: "1px",
            height: "120px",
            background: `linear-gradient(180deg, transparent, ${CYAN}30, transparent)`,
          }}
        />

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="flex justify-center">
            <img loading="lazy" src={metodoStarkLogo} alt="Método Stark" className="w-24 h-24 md:w-32 md:h-32" />
          </div>

          <div className="inline-flex items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-[3px] text-pb-ink-muted">
              <span className="text-pb-cyan">—</span>&nbsp;&nbsp;A Revolução&nbsp;&nbsp;<span className="text-pb-cyan">—</span>
            </span>
          </div>

          <h1 className="font-display uppercase text-pb-ink leading-[0.92] text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Pare de usar IA como um Google melhorado e aprenda a criar sistemas que trabalham 24h por dia enquanto{" "}
            <span className="text-pb-cyan">
              você fecha contratos de até R$30 mil
            </span>
            , mesmo sem saber programar
          </h1>

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
              Quero fazer parte dA Revolução
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Gradient separator */}
      <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${CYAN}40, transparent)` }} />

      {/* SEÇÃO 1 — O MUNDO SE DIVIDIU */}
      <section
        ref={sectionRef}
        className="px-6 bg-pb-void-card"
        style={{
          paddingTop: "100px",
          paddingBottom: "100px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Video background */}
        <video
          ref={videoRef}
          src="/videos/mundo_dividindo.mp4"
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          onCanPlay={() => {
            if (videoRef.current && videoRef.current.readyState >= 2) {
              setVideoReady(true);
            }
          }}
          onLoadedData={() => {
            if (videoRef.current && videoRef.current.readyState >= 2) {
              setVideoReady(true);
            }
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        {/* CSS fallback splitting effect — works even if video scrubbing fails */}
        {!videoReady && (() => {
          const splitProgress = Math.min(Math.max(scrollProgress * 1.67, 0), 1);
          const splitAmount = splitProgress * 50; // max 50% offset
          return (
            <>
              {/* Left half */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "50%",
                  height: "100%",
                  background: `linear-gradient(135deg, ${BG_CARD} 0%, ${BG_MAIN} 100%)`,
                  transform: `translateX(-${splitAmount}%)`,
                  zIndex: 0,
                  pointerEvents: "none",
                  borderRight: splitProgress > 0.05 ? `1px solid ${CYAN}15` : "none",
                  boxShadow: splitProgress > 0.05 ? `inset -20px 0 40px rgba(32,221,235,0.03)` : "none",
                  transition: "none",
                }}
              />
              {/* Right half */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "50%",
                  height: "100%",
                  background: `linear-gradient(225deg, ${BG_CARD} 0%, ${BG_MAIN} 100%)`,
                  transform: `translateX(${splitAmount}%)`,
                  zIndex: 0,
                  pointerEvents: "none",
                  borderLeft: splitProgress > 0.05 ? `1px solid ${CYAN}15` : "none",
                  boxShadow: splitProgress > 0.05 ? `inset 20px 0 40px rgba(32,221,235,0.03)` : "none",
                  transition: "none",
                }}
              />
              {/* Center glow when splitting */}
              {splitProgress > 0.05 && (
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: `${Math.max(splitProgress * 8, 1)}px`,
                    height: "100%",
                    background: `linear-gradient(180deg, transparent, ${CYAN}15, ${CYAN}08, transparent)`,
                    zIndex: 0,
                    pointerEvents: "none",
                  }}
                />
              )}
            </>
          );
        })()}

        {/* Dark overlay for text legibility */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(180deg, rgba(5,9,11,0.75) 0%, rgba(5,9,11,0.60) 40%, rgba(5,9,11,0.75) 100%)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />

        <div className="max-w-5xl mx-auto space-y-16" style={{ position: "relative", zIndex: 2 }}>
          {/* Section header */}
          <div className="text-center space-y-4">
            <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-3xl md:text-4xl lg:text-5xl">
              O mundo <span className="text-pb-cyan">se dividiu em 2</span>
            </h2>
          </div>

          {/* Two groups side by side */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Grupo A */}
            <div
              className="p-8 md:p-10 space-y-6 transition-colors duration-300"
              style={{
                backgroundColor: BG_ELEV,
                border: `0.5px solid ${BORDER_NORMAL}`,
                opacity: Math.min(Math.max((scrollProgress - 0.25) / 0.2, 0), 1),
                transform: `translateX(${(1 - Math.min(Math.max((scrollProgress - 0.25) / 0.2, 0), 1)) * -60}px)`,
                transition: "border-color 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = BORDER_HOVER;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = BORDER_NORMAL;
              }}
            >
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-pb-ink-muted" />
                <span className="font-mono text-[11px] uppercase tracking-mono-wide text-pb-ink-muted">
                  Grupo A
                </span>
              </div>

              <p className="font-display uppercase text-pb-ink-soft text-lg mb-2">
                Usa IA como um Google melhorado. Tem a sensação de que não usa IA no seu máximo potencial.
              </p>
              <p className="font-body text-pb-ink-soft leading-relaxed" style={{ lineHeight: 1.8 }}>
                Abre o ChatGPT, digita uma pergunta, copia a resposta, fecha a aba. No dia seguinte, faz a mesma coisa. Assiste a vídeos sobre IA, testa ferramentas, mas nunca transforma nada disso em algo que funciona sozinho. A IA entra na rotina como ferramenta, mas nunca produzindo resultado real.
              </p>
            </div>

            {/* Grupo B */}
            <div
              className="p-8 md:p-10 space-y-6 transition-colors duration-300"
              style={{
                backgroundColor: BG_ELEV,
                border: `0.5px solid ${CYAN}25`,
                boxShadow: `0 0 40px rgba(32,221,235,0.04)`,
                opacity: Math.min(Math.max((scrollProgress - 0.25) / 0.2, 0), 1),
                transform: `translateX(${(1 - Math.min(Math.max((scrollProgress - 0.25) / 0.2, 0), 1)) * 60}px)`,
                transition: "border-color 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${CYAN}40`;
                e.currentTarget.style.boxShadow = `0 0 60px rgba(32,221,235,0.08)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${CYAN}25`;
                e.currentTarget.style.boxShadow = `0 0 40px rgba(32,221,235,0.04)`;
              }}
            >
              <div className="flex items-center gap-3">
                <Cpu className="w-5 h-5 text-pb-cyan" />
                <span className="font-mono text-[11px] uppercase tracking-mono-wide text-pb-cyan">
                  Grupo B
                </span>
              </div>

              <p className="font-display uppercase text-pb-ink text-lg mb-2">
                Dominou a construção de sistemas de IA, com agentes trabalhando 24h por dia para ele e seus clientes.
              </p>
              <p className="font-body text-pb-ink leading-relaxed" style={{ lineHeight: 1.8 }}>
                Consegue fazer mais, mais rápido e ganhando mais dinheiro. Não "usa" IA, <strong className="text-pb-cyan">comanda um time de agentes</strong>.
              </p>
            </div>
          </div>

          {/* The difference */}
          <div className="text-center space-y-8 max-w-3xl mx-auto" style={{ paddingTop: "40px" }}>
            <div className="h-px w-24 mx-auto" style={{ background: `linear-gradient(90deg, transparent, ${CYAN}40, transparent)` }} />

            <div className="space-y-2">
              <h3 className="font-display uppercase text-pb-ink text-2xl md:text-3xl">
                A diferença entre os dois grupos
              </h3>
              <p className="font-display uppercase text-pb-ink-muted text-2xl md:text-3xl">
                não é inteligência.
              </p>
              <p className="font-display uppercase text-pb-cyan text-3xl md:text-4xl">
                É quem consegue arquitetar as melhores soluções.
              </p>
            </div>

            <p className="font-body text-pb-ink-soft text-base md:text-lg leading-relaxed" style={{ lineHeight: 1.8 }}>
              A IA está disponível para todos. Os modelos são os mesmos. Os preços são acessíveis. O que diferencia os dois grupos é conhecimento. É a diferença entre quem aprendeu a usar ferramentas e quem aprendeu a <strong className="text-pb-ink">construir sistemas</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* O Mundo Já Mudou */}
      <ApocalypseSection onCTA={handleCTA} />

      {/* Gradient separator */}
      <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${CYAN}40, transparent)` }} />

      {/* O Outro Lado da Moeda */}
      <OpportunitySection onCTA={handleCTA} />

      {/* Gradient separator */}
      <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${CYAN}40, transparent)` }} />

      {/* O Mecanismo + Método Stark */}
      <MechanismSection />

      {/* Gradient separator */}
      <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${CYAN}40, transparent)` }} />

      {/* Sistemas Reais */}
      <SystemsShowcase onCTA={handleCTA} />

      {/* Gradient separator */}
      <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${CYAN}40, transparent)` }} />

      {/* Sections 05-07 + Pricing + Final CTA */}
      <ClosingSection onCTA={handleCTA} />

      {/* Footer */}
      <footer
        className="px-6 py-12 bg-pb-void"
        style={{ borderTop: `0.5px solid ${BORDER_NORMAL}` }}
      >
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <img loading="lazy" src={metodoStarkLogo} alt="Método Stark" className="w-10 h-10" />
            <span className="font-display uppercase text-pb-cyan tracking-[3px] text-base">
              A REVOLUÇÃO
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

export default MetodoStark;
