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

const ARevolucaoV2 = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#05090B';
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
    <div className="min-h-screen bg-pb-void overflow-hidden">
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
      <nav className="sticky top-0 z-50 px-6 py-4 bg-pb-void-card border-b border-pb-grid-strong">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img loading="lazy" src={metodoStarkLogo} alt="A Revolução" className="w-8 h-8" />
            <span className="font-display uppercase text-pb-cyan text-lg tracking-[3px]">
              A REVOLUÇÃO
            </span>
          </div>
          <button
            onClick={() => handleCTA("nav")}
            className="btn-primary"
          >
            Quero capitalizar essa janela
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative px-6 py-[120px]">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 20%, rgba(32,221,235,0.05) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="flex justify-center">
            <img loading="lazy" src={metodoStarkLogo} alt="A Revolução" className="w-24 h-24 md:w-32 md:h-32" />
          </div>

          <div className="inline-flex items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted">
              <span className="text-pb-cyan">—</span>&nbsp;&nbsp;A Revolução&nbsp;&nbsp;<span className="text-pb-cyan">—</span>
            </span>
          </div>

          <h1 className="font-display uppercase text-pb-ink leading-[0.92] text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Você trabalha 60 horas por semana e fatura o mesmo de 2 anos atrás.{" "}
            <span className="text-pb-cyan">
              O problema não é esforço. É que você ainda não tem um sistema.
            </span>
          </h1>

          <p className="font-body text-pb-ink-soft leading-relaxed text-base md:text-lg max-w-2xl mx-auto">
            O Método Capital ensina você a encontrar <strong className="text-pb-ink">ONDE</strong> no seu negócio a IA gera mais retorno — e implementar os primeiros sistemas em semanas, não meses. Sem programar. Sem assinar 5 ferramentas. Com uma só.
          </p>

          <div className="pt-4">
            <button
              onClick={() => handleCTA("hero")}
              className="btn-primary inline-flex items-center gap-3"
            >
              Quero fazer parte dA Revolução
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Gradient separator */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-pb-cyan/15 to-transparent" />

      {/* Seção 1 — A Janela */}
      <JanelaSection />

      {/* Gradient separator */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-pb-cyan/15 to-transparent" />

      {/* Seção 2 — O Mercado Está Sentindo o Impacto (Apocalypse — mantida) */}
      <ApocalypseSection onCTA={handleCTA} />

      {/* Gradient separator */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-pb-cyan/15 to-transparent" />

      {/* Seção 3 — O Outro Lado (Opportunity — mantida) */}
      <OpportunitySection onCTA={handleCTA} />

      {/* Gradient separator */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-pb-cyan/15 to-transparent" />

      {/* Seção 4 — O Problema Real (nova) */}
      <ProblemaRealSection />

      {/* Gradient separator */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-pb-cyan/15 to-transparent" />

      {/* Seção 5 — O Método Capital (nova) */}
      <MetodoCapitalSection />

      {/* Gradient separator */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-pb-cyan/15 to-transparent" />

      {/* Seção 7 — Os 8 Módulos (nova) */}
      <ModulosSection />

      {/* Gradient separator */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-pb-cyan/15 to-transparent" />

      {/* Seções 06–11 + Pricing + CTA Final */}
      <ClosingSectionV2 onCTA={handleCTA} />

      {/* Footer */}
      <footer className="px-6 py-12 bg-pb-void border-t border-pb-grid-strong">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <img loading="lazy" src={metodoStarkLogo} alt="A Revolução" className="w-10 h-10" />
            <span className="font-display uppercase text-pb-cyan text-base tracking-[3px]">
              A REVOLUÇÃO
            </span>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted">
            por Rodrigo Albuquerque
          </p>
          <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-faint">
            &copy; {new Date().getFullYear()} BA Consultoria. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ARevolucaoV2;
