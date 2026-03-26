import { useEffect, useRef, useState } from "react";
import { tracker } from "@/lib/tracking";
import { ArrowRight, Users, Cpu, Brain, Layers } from "lucide-react";
import ApocalypseSection from "@/components/claudecode/ApocalypseSection";
import OpportunitySection from "@/components/metodostark/OpportunitySection";
import MechanismSection from "@/components/metodostark/MechanismSection";
import ClosingSection from "@/components/metodostark/ClosingSection";
import SystemsShowcase from "@/components/metodostark/SystemsShowcase";
import metodoStarkLogo from "@/assets/metodo-stark-logo.svg";

const VOID = "#060A12";
const SURFACE = "#0C1220";
const HUD_DARK = "#111A2E";
const ARC = "#38BDF8";
const ARC_BRIGHT = "#7DD3FC";
const STARK_GOLD = "#F59E0B";
const IVORY = "#F0F6FF";
const TEXT_COLOR = "#C8D6E5";
const DIM = "#5A7089";
const MUTED_COLOR = "#3D5068";

const BORDER_NORMAL = "rgba(56,189,248,0.08)";
const BORDER_HOVER = "rgba(56,189,248,0.18)";

const FONT_DISPLAY = "'Chakra Petch', sans-serif";
const FONT_MONO = "'IBM Plex Mono', monospace";
const FONT_BODY = "'Exo 2', sans-serif";

const MetodoStark = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    document.body.style.backgroundColor = VOID;
    document.body.style.paddingTop = "0";
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.paddingTop = "";
    };
  }, []);

  useEffect(() => {
    tracker.page("Método Stark");
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    let rafId: number;
    let currentTime = 0;

    const tick = () => {
      if (!video.duration || !sectionRef.current) {
        rafId = requestAnimationFrame(tick);
        return;
      }

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollDistance = rect.height + windowHeight;
      const scrolled = windowHeight - rect.top;
      const progress = Math.min(Math.max(scrolled / totalScrollDistance, 0), 1);

      setScrollProgress(progress);

      // Accelerate progress so the video completes while still in-section
      const acceleratedProgress = Math.min(progress * 1.67, 1);
      const targetTime = acceleratedProgress * video.duration;
      // Lerp for smooth interpolation (higher = snappier)
      currentTime += (targetTime - currentTime) * 0.3;
      video.currentTime = currentTime;

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafId);
  }, [videoReady]);

  const handleCTA = (location: string) => {
    tracker.track("cta_click", {
      product: "metodo-stark",
      cta_location: location,
      page: "/educacao/metodo-stark",
    });
    window.open("https://wa.me/5511999718595?text=Quero%20saber%20mais%20sobre%20o%20M%C3%A9todo%20Stark", "_blank");
  };

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

      {/* Navbar */}
      <nav
        className="sticky top-0 z-50 px-6 py-4"
        style={{
          backgroundColor: SURFACE,
          borderBottom: `0.5px solid ${BORDER_NORMAL}`,
        }}
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={metodoStarkLogo} alt="Método Stark" className="w-8 h-8" />
            <span
              className="text-lg tracking-[3px] font-bold uppercase"
              style={{ fontFamily: FONT_DISPLAY, color: ARC }}
            >
              MÉTODO STARK
            </span>
          </div>
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
            Quero saber mais
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative px-6" style={{ paddingTop: "120px", paddingBottom: "120px" }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 20%, rgba(56,189,248,0.06) 0%, transparent 70%)",
        }} />

        <div
          className="absolute right-[15%] top-1/2 -translate-y-1/2 hidden lg:block"
          style={{
            width: "1px",
            height: "120px",
            background: `linear-gradient(180deg, transparent, ${ARC}30, transparent)`,
          }}
        />

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="flex justify-center">
            <img src={metodoStarkLogo} alt="Método Stark" className="w-24 h-24 md:w-32 md:h-32" />
          </div>

          <div className="inline-flex items-center gap-3">
            <span
              className="text-xs uppercase tracking-[5px]"
              style={{ fontFamily: FONT_MONO, color: DIM, letterSpacing: "3px" }}
            >
              <span style={{ color: ARC }}>—</span>&nbsp;&nbsp;Método STARK de Vibe Coding&nbsp;&nbsp;<span style={{ color: ARC }}>—</span>
            </span>
          </div>

          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2]"
            style={{ fontFamily: FONT_DISPLAY, color: IVORY }}
          >
            Pare de usar IA como um Google melhorado e aprenda a criar{" "}
            <span style={{ color: ARC }}>
              sistemas que trabalham 24h por dia
            </span>{" "}
            enquanto você fecha contratos de até R$30 mil, mesmo sem saber programar
          </h1>

          <p
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{
              fontFamily: FONT_BODY,
              color: TEXT_COLOR,
              fontSize: "clamp(15px, 2vw, 18px)",
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            Usando o Método STARK de Vibe Coding para transformar IA em soluções que empresas já pagam caro para implementar — sem depender de audiência, tráfego ou "hacks" de marketing digital
          </p>

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
              Quero saber mais
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Gradient separator */}
      <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${ARC}25, transparent)` }} />

      {/* SEÇÃO 1 — O MUNDO SE DIVIDIU */}
      <section
        ref={sectionRef}
        className="px-6"
        style={{
          paddingTop: "100px",
          paddingBottom: "100px",
          backgroundColor: SURFACE,
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
          onLoadedMetadata={() => setVideoReady(true)}
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

        {/* Dark overlay for text legibility */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(180deg, rgba(12,18,32,0.75) 0%, rgba(12,18,32,0.60) 40%, rgba(12,18,32,0.75) 100%)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />

        <div className="max-w-5xl mx-auto space-y-16" style={{ position: "relative", zIndex: 2 }}>
          {/* Section header */}
          <div className="text-center space-y-4">
            <span
              className="text-xs uppercase tracking-[5px]"
              style={{ fontFamily: FONT_MONO, color: DIM }}
            >
              🧠 Seção 01
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase"
              style={{ fontFamily: FONT_DISPLAY, color: IVORY }}
            >
              O mundo <span style={{ color: ARC }}>se dividiu</span>
            </h2>
          </div>

          {/* Two groups side by side */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Grupo A */}
            <div
              className="p-8 md:p-10 space-y-6 transition-colors duration-300"
              style={{
                backgroundColor: HUD_DARK,
                border: `0.5px solid ${BORDER_NORMAL}`,
                borderRadius: "14px",
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
                <Users className="w-5 h-5" style={{ color: DIM }} />
                <span
                  className="text-sm uppercase tracking-[4px] font-semibold"
                  style={{ fontFamily: FONT_MONO, color: DIM }}
                >
                  Grupo A
                </span>
              </div>

              <p
                className="text-lg font-semibold mb-2"
                style={{ fontFamily: FONT_DISPLAY, color: TEXT_COLOR }}
              >
                Usa IA como um Google melhorado. Tem a sensação de que não usa IA no seu máximo potencial.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ fontFamily: FONT_BODY, color: TEXT_COLOR, lineHeight: 1.8 }}
              >
                Abre o chat, faz uma pergunta, lê a resposta, fecha. Repete amanhã. Talvez reescreva um e-mail. Talvez peça uma legenda. Sente que "está usando IA" mas não consegue nomear o que mudou no seu negócio.
              </p>
            </div>

            {/* Grupo B */}
            <div
              className="p-8 md:p-10 space-y-6 transition-colors duration-300"
              style={{
                backgroundColor: HUD_DARK,
                border: `0.5px solid ${ARC}25`,
                borderRadius: "14px",
                boxShadow: `0 0 40px rgba(56,189,248,0.04)`,
                opacity: Math.min(Math.max((scrollProgress - 0.25) / 0.2, 0), 1),
                transform: `translateX(${(1 - Math.min(Math.max((scrollProgress - 0.25) / 0.2, 0), 1)) * 60}px)`,
                transition: "border-color 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${ARC}40`;
                e.currentTarget.style.boxShadow = "0 0 60px rgba(56,189,248,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${ARC}25`;
                e.currentTarget.style.boxShadow = "0 0 40px rgba(56,189,248,0.04)";
              }}
            >
              <div className="flex items-center gap-3">
                <Cpu className="w-5 h-5" style={{ color: ARC }} />
                <span
                  className="text-sm uppercase tracking-[4px] font-semibold"
                  style={{ fontFamily: FONT_MONO, color: ARC }}
                >
                  Grupo B
                </span>
              </div>

              <p
                className="text-lg font-semibold mb-2"
                style={{ fontFamily: FONT_DISPLAY, color: IVORY }}
              >
                Dominou a construção de sistemas de IA, com agentes trabalhando 24h por dia para ele e seus clientes.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ fontFamily: FONT_BODY, color: IVORY, lineHeight: 1.8 }}
              >
                Consegue fazer mais, mais rápido e ganhando mais dinheiro. Não "usa" IA, <strong style={{ color: ARC }}>comanda um time de agentes</strong>.
              </p>
            </div>
          </div>

          {/* The difference */}
          <div className="text-center space-y-8 max-w-3xl mx-auto" style={{ paddingTop: "40px" }}>
            <div className="h-px w-24 mx-auto" style={{ background: `linear-gradient(90deg, transparent, ${ARC}40, transparent)` }} />

            <div className="space-y-2">
              <h3
                className="text-2xl md:text-3xl font-bold"
                style={{ fontFamily: FONT_DISPLAY, color: IVORY }}
              >
                A diferença entre os dois grupos
              </h3>
              <p
                className="text-2xl md:text-3xl"
                style={{ fontFamily: FONT_DISPLAY, color: DIM }}
              >
                não é inteligência.
              </p>
              <p
                className="text-3xl md:text-4xl font-bold"
                style={{ fontFamily: FONT_DISPLAY, color: ARC }}
              >
                É quem consegue arquitetar as melhores soluções.
              </p>
            </div>

            <p
              className="text-base md:text-lg leading-relaxed"
              style={{
                fontFamily: FONT_BODY,
                color: TEXT_COLOR,
                lineHeight: 1.8,
                fontWeight: 300,
              }}
            >
              A IA está disponível para todos. Os modelos são os mesmos. Os preços são acessíveis. O que diferencia os dois grupos é conhecimento. É a diferença entre quem aprendeu a usar ferramentas e quem aprendeu a <strong style={{ color: IVORY }}>construir sistemas</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* O Mundo Já Mudou */}
      <ApocalypseSection onCTA={handleCTA} />

      {/* Gradient separator */}
      <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${ARC}25, transparent)` }} />

      {/* O Outro Lado da Moeda */}
      <OpportunitySection onCTA={handleCTA} />

      {/* Gradient separator */}
      <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${ARC}25, transparent)` }} />

      {/* O Mecanismo + Método Stark */}
      <MechanismSection />

      {/* Gradient separator */}
      <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${ARC}25, transparent)` }} />

      {/* Sistemas Reais */}
      <SystemsShowcase onCTA={handleCTA} />

      {/* Gradient separator */}
      <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${ARC}25, transparent)` }} />

      {/* Sections 05-07 + Pricing + Final CTA */}
      <ClosingSection onCTA={handleCTA} />

      {/* Footer */}
      <footer
        className="px-6 py-12"
        style={{
          backgroundColor: VOID,
          borderTop: `0.5px solid ${BORDER_NORMAL}`,
        }}
      >
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <img src={metodoStarkLogo} alt="Método Stark" className="w-10 h-10" />
            <span
              className="text-base tracking-[3px] font-bold uppercase"
              style={{ fontFamily: FONT_DISPLAY, color: ARC }}
            >
              MÉTODO STARK
            </span>
          </div>
          <p
            className="text-sm"
            style={{ fontFamily: FONT_MONO, color: DIM, letterSpacing: "1px", fontSize: "0.7rem" }}
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

export default MetodoStark;
