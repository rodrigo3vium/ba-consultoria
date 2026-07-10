import { useEffect, useRef, useState } from "react";
import { tracker } from "@/lib/tracking";
import { ArrowRight, Users, Cpu, Brain, Layers } from "lucide-react";
import ApocalypseSection from "@/components/claudecode/ApocalypseSection";
import OpportunitySection from "@/components/metodostark/OpportunitySection";
import MechanismSection from "@/components/metodostark/MechanismSection";
import ClosingSection from "@/components/metodostark/ClosingSection";
import SystemsShowcase from "@/components/metodostark/SystemsShowcase";
import metodoStarkLogo from "@/assets/metodo-stark-logo.svg";
import { Accent, Eyebrow, SAAS_BTN_PRIMARY } from "@/components/saas/ui";

// SaaS IDV v.03 — tokens (docs/design-system-saas.md)
const CYAN = "#20DDEB";
const BG_MAIN = "#0A0A13";
const BG_CARD = "#15151F";

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
    <div className="min-h-screen overflow-hidden bg-saas-void text-saas-body">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 px-6 py-3.5 border-b border-white/[0.06] bg-saas-void/80 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img loading="lazy" src={metodoStarkLogo} alt="Método Stark" className="w-8 h-8" />
            <span className="font-bold text-saas-ink text-[15px] tracking-tight">A Revolução</span>
          </div>
          <button
            onClick={() => handleCTA("nav")}
            className={SAAS_BTN_PRIMARY + " !px-5 !py-2.5 !text-[13px]"}
          >
            Quero saber mais
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden px-6" style={{ paddingTop: "104px", paddingBottom: "112px" }}>
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full bg-saas-violet/20 blur-[110px]" />
          <div className="absolute -top-10 right-0 w-[520px] h-[420px] rounded-full bg-saas-cyan/15 blur-[110px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="flex justify-center">
            <img loading="lazy" src={metodoStarkLogo} alt="Método Stark" className="w-24 h-24 md:w-32 md:h-32" />
          </div>

          <div className="flex justify-center">
            <Eyebrow>A Revolução</Eyebrow>
          </div>

          <h1 className="font-extrabold text-saas-ink tracking-tight leading-[1.15] text-[clamp(22px,2.8vw,31px)]">
            Pare de usar IA como um Google melhorado e aprenda a criar sistemas que trabalham 24h por dia enquanto{" "}
            <Accent>você fecha contratos de até R$30 mil</Accent>, mesmo sem saber programar
          </h1>

          <div className="pt-4">
            <button onClick={() => handleCTA("hero")} className={SAAS_BTN_PRIMARY}>
              Quero fazer parte dA Revolução
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="h-px w-full bg-white/[0.06]" />

      {/* SEÇÃO 1 — O MUNDO SE DIVIDIU */}
      <section
        ref={sectionRef}
        className="px-6 bg-saas-void-2"
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
            background: "linear-gradient(180deg, rgba(10,10,19,0.75) 0%, rgba(10,10,19,0.60) 40%, rgba(10,10,19,0.75) 100%)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />

        <div className="max-w-5xl mx-auto space-y-16" style={{ position: "relative", zIndex: 2 }}>
          {/* Section header */}
          <div className="text-center space-y-4">
            <h2 className="font-extrabold text-saas-ink tracking-tight leading-[1.12] text-[clamp(26px,3.4vw,42px)]">
              O mundo <Accent>se dividiu em 2</Accent>
            </h2>
          </div>

          {/* Two groups side by side */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Grupo A */}
            <div
              className="rounded-2xl border border-white/[0.09] bg-saas-card p-8 md:p-10 space-y-6 transition-colors duration-300 hover:border-white/[0.18]"
              style={{
                opacity: Math.min(Math.max((scrollProgress - 0.25) / 0.2, 0), 1),
                transform: `translateX(${(1 - Math.min(Math.max((scrollProgress - 0.25) / 0.2, 0), 1)) * -60}px)`,
              }}
            >
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-saas-muted" />
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-saas-muted">
                  Grupo A
                </span>
              </div>

              <p className="font-bold text-saas-body text-lg leading-snug mb-2">
                Usa IA como um Google melhorado. Tem a sensação de que não usa IA no seu máximo potencial.
              </p>
              <p className="text-saas-body leading-relaxed" style={{ lineHeight: 1.8 }}>
                Abre o ChatGPT, digita uma pergunta, copia a resposta, fecha a aba. No dia seguinte, faz a mesma coisa. Assiste a vídeos sobre IA, testa ferramentas, mas nunca transforma nada disso em algo que funciona sozinho. A IA entra na rotina como ferramenta, mas nunca produzindo resultado real.
              </p>
            </div>

            {/* Grupo B */}
            <div
              className="rounded-2xl border border-saas-cyan/25 bg-saas-card p-8 md:p-10 space-y-6 transition-all duration-300 hover:border-saas-cyan/40 shadow-[0_0_40px_rgba(32,221,235,0.05)] hover:shadow-[0_0_60px_rgba(32,221,235,0.09)]"
              style={{
                opacity: Math.min(Math.max((scrollProgress - 0.25) / 0.2, 0), 1),
                transform: `translateX(${(1 - Math.min(Math.max((scrollProgress - 0.25) / 0.2, 0), 1)) * 60}px)`,
              }}
            >
              <div className="flex items-center gap-3">
                <Cpu className="w-5 h-5 text-saas-cyan" />
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-saas-cyan">
                  Grupo B
                </span>
              </div>

              <p className="font-bold text-saas-ink text-lg leading-snug mb-2">
                Dominou a construção de sistemas de IA, com agentes trabalhando 24h por dia para ele e seus clientes.
              </p>
              <p className="text-saas-ink leading-relaxed" style={{ lineHeight: 1.8 }}>
                Consegue fazer mais, mais rápido e ganhando mais dinheiro. Não "usa" IA, <strong className="text-saas-cyan">comanda um time de agentes</strong>.
              </p>
            </div>
          </div>

          {/* The difference */}
          <div className="text-center space-y-8 max-w-3xl mx-auto" style={{ paddingTop: "40px" }}>
            <div className="h-[3px] w-16 mx-auto rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet" />

            <div className="space-y-2">
              <h3 className="font-extrabold text-saas-ink tracking-tight text-2xl md:text-3xl">
                A diferença entre os dois grupos
              </h3>
              <p className="font-extrabold text-saas-muted tracking-tight text-2xl md:text-3xl">
                não é inteligência.
              </p>
              <p className="font-extrabold tracking-tight text-3xl md:text-4xl leading-snug">
                <Accent>É quem consegue arquitetar as melhores soluções.</Accent>
              </p>
            </div>

            <p className="text-saas-body text-base md:text-lg leading-relaxed" style={{ lineHeight: 1.8 }}>
              A IA está disponível para todos. Os modelos são os mesmos. Os preços são acessíveis. O que diferencia os dois grupos é conhecimento. É a diferença entre quem aprendeu a usar ferramentas e quem aprendeu a <strong className="text-saas-ink">construir sistemas</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* O Mundo Já Mudou */}
      <ApocalypseSection onCTA={handleCTA} />

      {/* Separator */}
      <div className="h-px w-full bg-white/[0.06]" />

      {/* O Outro Lado da Moeda */}
      <OpportunitySection onCTA={handleCTA} />

      {/* Separator */}
      <div className="h-px w-full bg-white/[0.06]" />

      {/* O Mecanismo + Método Stark */}
      <MechanismSection />

      {/* Separator */}
      <div className="h-px w-full bg-white/[0.06]" />

      {/* Sistemas Reais */}
      <SystemsShowcase onCTA={handleCTA} />

      {/* Separator */}
      <div className="h-px w-full bg-white/[0.06]" />

      {/* Sections 05-07 + Pricing + Final CTA */}
      <ClosingSection onCTA={handleCTA} />

      {/* Footer */}
      <footer className="px-6 py-12 bg-saas-void border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <img loading="lazy" src={metodoStarkLogo} alt="Método Stark" className="w-10 h-10" />
            <span className="font-bold text-saas-ink text-base tracking-tight">A Revolução</span>
          </div>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-saas-muted">
            por Rodrigo Albuquerque
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-faint">
            © {new Date().getFullYear()} BA Consultoria. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MetodoStark;
