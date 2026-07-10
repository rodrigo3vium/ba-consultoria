import { ReactNode } from "react";
import { Accent } from "@/components/saas/ui";

interface PropostaLayoutProps {
  cliente: string;
  projeto: string;
  data?: string;
  children: ReactNode;
}

const PropostaLayout = ({ cliente, projeto, data, children }: PropostaLayoutProps) => {
  const dataStr = data ?? new Date().toLocaleDateString("pt-BR", { month: "long", year: "numeric" });

  return (
    <div className="min-h-screen bg-saas-void text-saas-body">
      {/* Topo da proposta */}
      <div className="border-b border-white/[0.06] bg-saas-void/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-saas-muted">
              BA Consultoria · Proposta Comercial
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-saas-faint hidden sm:block">
            {dataStr}
          </span>
        </div>
      </div>

      {/* Capa */}
      <div className="relative min-h-[60vh] flex flex-col justify-end border-b border-white/[0.06] overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full bg-saas-violet/20 blur-[110px]" />
          <div className="absolute top-0 right-0 w-[520px] h-[420px] rounded-full bg-saas-cyan/15 blur-[110px]" />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 pb-20 pt-24 w-full">
          <div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-saas-cyan">
            <span>Proposta Comercial</span>
            <span className="h-px w-12 bg-white/[0.14]" />
            <span className="text-saas-muted">{cliente}</span>
          </div>
          <h1 className="font-extrabold text-saas-ink leading-[1.05] tracking-tight text-[clamp(40px,6.5vw,84px)]">
            {projeto}
            <Accent>.</Accent>
          </h1>
        </div>
      </div>

      {/* Conteúdo */}
      <main className="max-w-5xl mx-auto px-6 py-16 space-y-0">
        {children}
      </main>

      {/* Rodapé */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-saas-muted">
          <span>BA Consultoria · CNPJ 38.142.345/0001-04</span>
          <a
            href="https://wa.me/5511999718595"
            target="_blank"
            rel="noopener noreferrer"
            className="text-saas-cyan hover:text-saas-violet transition-colors"
          >
            Dúvidas? WhatsApp →
          </a>
        </div>
      </div>
    </div>
  );
};

export default PropostaLayout;
