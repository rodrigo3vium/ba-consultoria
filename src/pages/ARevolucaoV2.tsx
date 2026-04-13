import { useEffect } from "react";
import { tracker } from "@/lib/tracking";
import { ArrowRight } from "lucide-react";
import metodoStarkLogo from "@/assets/metodo-stark-logo.svg";
import ApocalypseSection from "@/components/claudecode/ApocalypseSection";
import OpportunitySection from "@/components/metodostark/OpportunitySection";
import JanelaSection from "@/components/revolucao-v2/JanelaSection";
import ProblemaRealSection from "@/components/revolucao-v2/ProblemaRealSection";
import MetodoCapitalSection from "@/components/revolucao-v2/MetodoCapitalSection";
import ModulosSection from "@/components/revolucao-v2/ModulosSection";
import ClosingSectionV2 from "@/components/revolucao-v2/ClosingSectionV2";

const VOID = "#060A12";
const SURFACE = "#0C1220";
const ARC = "#38BDF8";
const ARC_BRIGHT = "#7DD3FC";
const IVORY = "#F0F6FF";
const TEXT_COLOR = "#C8D6E5";
const DIM = "#5A7089";
const FONT_DISPLAY = "'Chakra Petch', sans-serif";
const FONT_MONO = "'IBM Plex Mono', monospace";
const FONT_BODY = "'Exo 2', sans-serif";
const BORDER_NORMAL = "rgba(56,189,248,0.08)";

const ARevolucaoV2 = () => {
  useEffect(() => {
    document.body.style.backgroundColor = VOID;
    document.body.style.paddingTop = "0";
    tracker.page("A Revolução v2");
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.paddingTop = "";
    };
  }, []);

  const handleCTA = (location: string) => {
    tracker.track("cta_click", {
      product: "a-revolucao-v2",
      cta_location: location,
      page: "/educacao/a-revolucao-v2",
    });
    window.open("https://pay.hotmart.com/N105097109P", "_blank");
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
            <img loading="lazy" src={metodoStarkLogo} alt="A Revolução" className="w-8 h-8" />
            <span
              className="text-lg tracking-[3px] font-bold uppercase"
              style={{ fontFamily: FONT_DISPLAY, color: ARC }}
            >
              A REVOLUÇÃO
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
              border: "none",
              cursor: "pointer",
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
            Quero capitalizar essa janela
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative px-6" style={{ paddingTop: "120px", paddingBottom: "120px" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 20%, rgba(56,189,248,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="flex justify-center">
            <img loading="lazy" src={metodoStarkLogo} alt="A Revolução" className="w-24 h-24 md:w-32 md:h-32" />
          </div>

          <div className="inline-flex items-center gap-3">
            <span
              className="text-xs uppercase tracking-[5px]"
              style={{ fontFamily: FONT_MONO, color: DIM, letterSpacing: "3px" }}
            >
              <span style={{ color: ARC }}>—</span>&nbsp;&nbsp;A Revolução&nbsp;&nbsp;<span style={{ color: ARC }}>—</span>
            </span>
          </div>

          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.25]"
            style={{ fontFamily: FONT_DISPLAY, color: IVORY }}
          >
            Você trabalha 60 horas por semana e fatura o mesmo de 2 anos atrás.{" "}
            <span style={{ color: ARC }}>
              O problema não é esforço. É que você ainda não tem um sistema.
            </span>
          </h1>

          <p
            className="text-base md:text-lg max-w-2xl mx-auto"
            style={{ fontFamily: FONT_BODY, color: TEXT_COLOR, lineHeight: 1.8, fontWeight: 300 }}
          >
            O Método Capital ensina você a encontrar <strong style={{ color: IVORY }}>ONDE</strong> no seu negócio a IA gera mais retorno — e implementar os primeiros sistemas em semanas, não meses. Sem programar. Sem assinar 5 ferramentas. Com uma só.
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
                border: "none",
                cursor: "pointer",
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
              Quero fazer parte dA Revolução
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Gradient separator */}
      <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${ARC}25, transparent)` }} />

      {/* Seção 1 — A Janela */}
      <JanelaSection />

      {/* Gradient separator */}
      <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${ARC}25, transparent)` }} />

      {/* Seção 2 — O Mercado Está Sentindo o Impacto (Apocalypse — mantida) */}
      <ApocalypseSection onCTA={handleCTA} />

      {/* Gradient separator */}
      <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${ARC}25, transparent)` }} />

      {/* Seção 3 — O Outro Lado (Opportunity — mantida) */}
      <OpportunitySection onCTA={handleCTA} />

      {/* Gradient separator */}
      <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${ARC}25, transparent)` }} />

      {/* Seção 4 — O Problema Real (nova) */}
      <ProblemaRealSection />

      {/* Gradient separator */}
      <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${ARC}25, transparent)` }} />

      {/* Seção 5 — O Método Capital (nova) */}
      <MetodoCapitalSection />

      {/* Gradient separator */}
      <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${ARC}25, transparent)` }} />

      {/* Seção 7 — Os 8 Módulos (nova) */}
      <ModulosSection />

      {/* Gradient separator */}
      <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${ARC}25, transparent)` }} />

      {/* Seções 06–11 + Pricing + CTA Final */}
      <ClosingSectionV2 onCTA={handleCTA} />

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
            <img loading="lazy" src={metodoStarkLogo} alt="A Revolução" className="w-10 h-10" />
            <span
              className="text-base tracking-[3px] font-bold uppercase"
              style={{ fontFamily: FONT_DISPLAY, color: ARC }}
            >
              A REVOLUÇÃO
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
            style={{ fontFamily: FONT_MONO, color: "rgba(90,112,137,0.5)", fontSize: "0.65rem" }}
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

export default ARevolucaoV2;
