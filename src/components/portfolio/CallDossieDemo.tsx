import { useState } from "react";
import { ChevronDown, AlertTriangle, Copy, Check, Quote } from "lucide-react";
import { DOSSIE, type BlocoStatus } from "@/lib/portfolio/callFechamentoContent";

// Demo curada: renderiza o dossiê real (nota, blocos, sinais vermelhos e
// recomendação são dados reais, anonimizados — ver callFechamentoContent.ts).
// Sem geração ao vivo: essa consulta já foi analisada, o dossiê já existe.
// A interatividade é 100% de exploração (expandir bloco, copiar script).

const STATUS_COLOR: Record<BlocoStatus, string> = {
  critico: "#F2667B",
  medio: "#F5A623",
  ok: "#6EE7B7",
};

function Gauge({ score }: { score: number }) {
  const pct = Math.max(0, Math.min(100, (score / 10) * 100));
  const r = 52;
  const c = 2 * Math.PI * r;
  const color = score < 5 ? STATUS_COLOR.critico : score < 7 ? STATUS_COLOR.medio : STATUS_COLOR.ok;

  return (
    <div className="relative flex-none w-[132px] h-[132px]">
      <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
        <circle cx="60" cy="60" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="10" />
        <circle
          cx="60"
          cy="60"
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c - (pct / 100) * c}
          style={{ transition: "stroke-dashoffset 0.6s ease" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-saas-ink font-extrabold text-[28px] leading-none tracking-tight">{score.toFixed(1)}</span>
        <span className="text-saas-faint text-[10px] font-mono uppercase tracking-[0.1em] mt-1">/ 10 · insuficiente</span>
      </div>
    </div>
  );
}

function BlocoRow({ bloco }: { bloco: (typeof DOSSIE.blocos)[number] }) {
  const [open, setOpen] = useState(false);
  const color = STATUS_COLOR[bloco.status];

  return (
    <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.02]">
      <div className="absolute inset-y-0 left-0 pointer-events-none" style={{ width: `${bloco.nota * 10}%`, backgroundColor: `${color}14` }} />
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="relative w-full flex items-center gap-3 px-4 py-3.5 text-left"
      >
        <span
          className="flex-none w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold font-mono"
          style={{ backgroundColor: `${color}22`, color }}
        >
          {bloco.letra}
        </span>
        <span className="flex-1 min-w-0">
          <span className="block text-saas-ink text-[14px] font-semibold truncate">{bloco.nome}</span>
          <span className="block text-saas-faint text-[11px] mt-0.5">peso {bloco.peso}%</span>
        </span>
        <span className="flex-none text-[15px] font-extrabold font-mono" style={{ color }}>
          {bloco.nota}/10
        </span>
        <ChevronDown size={16} className={`flex-none text-saas-faint transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="relative px-4 pb-4 -mt-1">
          <p className="text-saas-body text-[13.5px] leading-relaxed">{bloco.resumo}</p>
          {bloco.citacao && (
            <div className="mt-3 rounded-lg border border-white/[0.08] bg-black/30 p-3.5">
              <div className="flex items-center gap-2 mb-1.5 text-[10px] font-mono uppercase tracking-[0.1em] text-saas-faint">
                <Quote size={11} />
                {bloco.citacao.falante} · {bloco.citacao.time}
              </div>
              <p className="text-saas-ink text-[13.5px] italic leading-relaxed">"{bloco.citacao.texto}"</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // clipboard indisponível — falha silenciosa, botão só não confirma
    }
  };
  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex flex-none items-center gap-1.5 rounded-full border border-white/[0.14] px-3.5 py-2 text-[12px] font-semibold text-saas-body hover:border-white/[0.28] hover:text-saas-ink transition-colors"
    >
      {copied ? <Check size={13} className="text-saas-green" /> : <Copy size={13} />}
      {copied ? "Copiado" : "Copiar"}
    </button>
  );
}

export function CallDossieDemo({ className = "" }: { className?: string }) {
  const [showFull, setShowFull] = useState(false);

  return (
    <div className={`rounded-2xl border border-white/[0.09] bg-saas-card p-4 sm:p-6 ${className}`}>
      {/* Header: gauge + veredicto */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 pb-6 border-b border-white/[0.08]">
        <Gauge score={DOSSIE.scoreGlobal} />
        <div className="flex-1 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2.5">
            <span className="rounded-full bg-[#F2667B]/15 border border-[#F2667B]/30 px-2.5 py-1 text-[11px] font-mono uppercase tracking-[0.08em] text-[#F2667B]">
              5 falhas catalogadas
            </span>
            <span className="rounded-full bg-[#F2667B]/15 border border-[#F2667B]/30 px-2.5 py-1 text-[11px] font-mono uppercase tracking-[0.08em] text-[#F2667B]">
              3 sinais vermelhos
            </span>
          </div>
          <p className="text-saas-body text-[13.5px] leading-relaxed">{DOSSIE.veredicto}</p>
        </div>
      </div>

      {/* Blocos A-G */}
      <div className="pt-6">
        <h4 className="text-saas-faint text-[11px] font-mono uppercase tracking-[0.14em] mb-3">Score por bloco</h4>
        <div className="space-y-2">
          {DOSSIE.blocos.map((b) => (
            <BlocoRow key={b.letra} bloco={b} />
          ))}
        </div>
        <div className="mt-2 rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-3.5">
          <div className="flex items-center justify-between gap-3">
            <span className="text-saas-ink text-[13px] font-semibold">Bônus — {DOSSIE.bonus.nome}</span>
            <span className="text-[14px] font-extrabold font-mono" style={{ color: STATUS_COLOR.critico }}>
              {DOSSIE.bonus.nota}/10
            </span>
          </div>
          <p className="text-saas-faint text-[12.5px] leading-relaxed mt-2">{DOSSIE.bonus.resumo}</p>
        </div>
      </div>

      {/* Sinais vermelhos */}
      <div className="pt-6">
        <h4 className="text-saas-faint text-[11px] font-mono uppercase tracking-[0.14em] mb-3">Sinais vermelhos detectados</h4>
        <div className="grid sm:grid-cols-3 gap-3">
          {DOSSIE.sinaisVermelhos.map((s) => (
            <div key={s.id} className="rounded-xl border border-[#F2667B]/25 bg-[#F2667B]/[0.06] p-3.5">
              <div className="flex items-center gap-1.5 text-[#F2667B] mb-1.5">
                <AlertTriangle size={13} />
                <span className="text-[12.5px] font-bold">{s.nome}</span>
              </div>
              <p className="text-saas-faint text-[12px] leading-relaxed">{s.detalhe}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recomendação */}
      <div className="pt-6 mt-6 border-t border-white/[0.08]">
        <h4 className="text-saas-faint text-[11px] font-mono uppercase tracking-[0.14em] mb-3">O que faltou dizer</h4>
        <div className="rounded-xl border border-saas-violet/25 bg-saas-violet/[0.06] p-4">
          <div className="flex items-start justify-between gap-3">
            <p className="text-saas-ink text-[15px] font-semibold leading-snug">"{DOSSIE.recomendacao.curta}"</p>
            <CopyButton text={DOSSIE.recomendacao.completa} />
          </div>
          {showFull ? (
            <p className="mt-3 pt-3 border-t border-white/[0.08] text-saas-body text-[13px] leading-relaxed italic">
              "{DOSSIE.recomendacao.completa}"
            </p>
          ) : (
            <button
              type="button"
              onClick={() => setShowFull(true)}
              className="mt-2.5 text-[12px] font-semibold text-saas-cyan hover:text-saas-violet transition-colors"
            >
              Ver roteiro completo
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
