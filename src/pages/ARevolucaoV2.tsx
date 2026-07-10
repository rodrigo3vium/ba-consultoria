import { useEffect } from "react";
import { tracker } from "@/lib/tracking";
import { ArrowRight } from "lucide-react";
import { Accent, SAAS_BTN_PRIMARY } from "@/components/saas/ui";
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
    document.body.style.backgroundColor = '#0A0A13';
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
    <div className="min-h-screen bg-saas-void text-saas-body overflow-hidden">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 px-6 py-4 bg-saas-void/80 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img loading="lazy" src={metodoStarkLogo} alt="A Revolução" className="w-8 h-8" />
            <span className="font-bold text-saas-ink text-lg tracking-tight">
              A Revolução
            </span>
          </div>
          <button
            onClick={() => handleCTA("nav")}
            className={SAAS_BTN_PRIMARY + " !px-5 !py-2.5 !text-[13px]"}
          >
            Quero capitalizar essa janela
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-[120px]">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/4 w-[480px] h-[480px] rounded-full bg-saas-violet/20 blur-[110px]" />
          <div className="absolute top-0 right-1/4 w-[520px] h-[420px] rounded-full bg-saas-cyan/15 blur-[110px]" />
        </div>
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="flex justify-center">
            <img loading="lazy" src={metodoStarkLogo} alt="A Revolução" className="w-24 h-24 md:w-32 md:h-32" />
          </div>

          <div className="inline-flex items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-saas-muted">
              <span className="text-saas-cyan">—</span>&nbsp;&nbsp;A Revolução&nbsp;&nbsp;<span className="text-saas-cyan">—</span>
            </span>
          </div>

          <h1 className="font-extrabold text-saas-ink leading-[1.15] tracking-tight text-[clamp(22px,3vw,32px)]">
            Você trabalha 60 horas por semana e fatura o mesmo de 2 anos atrás.{" "}
            <Accent>
              O problema não é esforço. É que você ainda não tem um sistema.
            </Accent>
          </h1>

          <p className="text-saas-body leading-relaxed text-base md:text-lg max-w-2xl mx-auto">
            O Método Capital ensina você a encontrar <strong className="text-saas-ink">ONDE</strong> no seu negócio a IA gera mais retorno — e implementar os primeiros sistemas em semanas, não meses. Sem programar. Sem assinar 5 ferramentas. Com uma só.
          </p>

          <div className="pt-4">
            <button
              onClick={() => handleCTA("hero")}
              className={SAAS_BTN_PRIMARY}
            >
              Quero fazer parte dA Revolução
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Gradient separator */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      {/* Seção 1 — A Janela */}
      <JanelaSection />

      {/* Gradient separator */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      {/* Seção 2 — O Mercado Está Sentindo o Impacto (Apocalypse — mantida) */}
      <ApocalypseSection onCTA={handleCTA} />

      {/* Gradient separator */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      {/* Seção 3 — O Outro Lado (Opportunity — mantida) */}
      <OpportunitySection onCTA={handleCTA} />

      {/* Gradient separator */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      {/* Seção 4 — O Problema Real (nova) */}
      <ProblemaRealSection />

      {/* Gradient separator */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      {/* Seção 5 — O Método Capital (nova) */}
      <MetodoCapitalSection />

      {/* Gradient separator */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      {/* Seção 7 — Os 8 Módulos (nova) */}
      <ModulosSection />

      {/* Gradient separator */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      {/* Seções 06–11 + Pricing + CTA Final */}
      <ClosingSectionV2 onCTA={handleCTA} />

      {/* Footer */}
      <footer className="px-6 py-12 bg-saas-void border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <img loading="lazy" src={metodoStarkLogo} alt="A Revolução" className="w-10 h-10" />
            <span className="font-bold text-saas-ink text-base tracking-tight">
              A Revolução
            </span>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-muted">
            por Rodrigo Albuquerque
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-faint">
            &copy; {new Date().getFullYear()} BA Consultoria. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ARevolucaoV2;
