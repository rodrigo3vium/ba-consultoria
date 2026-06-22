import { ReactNode } from "react";
import CornerBrackets from "./CornerBrackets";

interface PropostaLayoutProps {
  cliente: string;
  projeto: string;
  data?: string;
  children: ReactNode;
}

const PropostaLayout = ({ cliente, projeto, data, children }: PropostaLayoutProps) => {
  const dataStr = data ?? new Date().toLocaleDateString("pt-BR", { month: "long", year: "numeric" });

  return (
    <div className="min-h-screen bg-pb-void">
      {/* Topo da proposta */}
      <div className="border-b border-pb-grid-strong bg-pb-void/90 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-block w-1.5 h-1.5 bg-pb-red animate-[pb-pulse_2s_ease-in-out_infinite]" />
            <span className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted">
              BA Consultoria · Proposta Comercial
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-faint hidden sm:block">
            {dataStr}
          </span>
        </div>
      </div>

      {/* Capa */}
      <div className="relative min-h-[60vh] flex flex-col justify-end border-b border-pb-grid-strong overflow-hidden">
        <CornerBrackets size={32} offset={24} />
        <div className="max-w-5xl mx-auto px-6 pb-20 pt-24 w-full">
          <div className="font-mono text-[11px] uppercase tracking-mono-wide text-pb-cyan mb-6 flex items-center gap-3">
            <span>// PROPOSTA COMERCIAL</span>
            <span className="h-px w-12 bg-pb-grid-strong" />
            <span className="text-pb-ink-muted">{cliente}</span>
          </div>
          <h1 className="font-display uppercase text-pb-ink leading-[0.9] text-[clamp(48px,7vw,100px)]">
            {projeto}<span className="text-pb-red">.</span>
          </h1>
        </div>
      </div>

      {/* Conteúdo */}
      <main className="max-w-5xl mx-auto px-6 py-16 space-y-0">
        {children}
      </main>

      {/* Rodapé */}
      <div className="border-t border-pb-grid-strong">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted">
          <span>BA Consultoria · CNPJ 38.142.345/0001-04</span>
          <a
            href="https://wa.me/5511999718595"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pb-cyan hover:text-pb-cyan-soft transition-colors"
          >
            Dúvidas? WhatsApp →
          </a>
        </div>
      </div>
    </div>
  );
};

export default PropostaLayout;
