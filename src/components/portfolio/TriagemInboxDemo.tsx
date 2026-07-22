import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Play, RotateCcw, ScanLine } from "lucide-react";
import { cn } from "@/lib/utils";
import { SAAS_CARD, SAAS_BTN_PRIMARY } from "@/components/saas/ui";
import { animateValue, prefersReducedMotion } from "@/lib/portfolio/anim";
import {
  REQUISICOES,
  TIER_META,
  type Requisicao,
  type Tier,
  type MensagemConversa,
} from "@/lib/portfolio/triagemAluguelContent";

// Demo curada de triagem de WhatsApp. Sem IA ao vivo: as 9 requisições, o score,
// a justificativa e a conversa já existem prontos (ver triagemAluguelContent.ts) —
// a máquina de fases só encena a chegada (flood), a análise (triage/scan) e a
// reordenação (ordering) pra dar a sensação de processamento acontecendo. A
// interatividade real é de exploração: clicar numa requisição abre a análise.

type Phase = "idle" | "flood" | "triage" | "ordering" | "done";

const TIER_ORDER: Tier[] = ["t3", "t2", "t1"];

const TIER_STYLE: Record<Tier, { pill: string; bar: string }> = {
  t1: { pill: "bg-saas-cyan/10 border-saas-cyan/30 text-saas-cyan", bar: "bg-saas-cyan/70" },
  t2: { pill: "bg-saas-violet/10 border-saas-violet/30 text-saas-violet", bar: "bg-saas-violet/70" },
  t3: { pill: "bg-saas-red/10 border-saas-red/30 text-saas-red", bar: "bg-saas-red/70" },
};

function scoreColorClass(score: number) {
  if (score >= 75) return "text-saas-red";
  if (score >= 40) return "text-saas-violet";
  return "text-saas-cyan";
}

function sortForOrdering(reqs: Requisicao[]): Requisicao[] {
  return [...reqs].sort((a, b) => {
    const ta = TIER_ORDER.indexOf(a.tier);
    const tb = TIER_ORDER.indexOf(b.tier);
    if (ta !== tb) return ta - tb;
    return b.analise.score - a.analise.score;
  });
}

// Subset compacto usado no autoplay do hero: 1 crítica, 1 encaminhada, 3 automatizáveis.
const HERO_REQS = REQUISICOES.filter((r) => !r.noHero);

let keyframesInjected = false;
function TriagemKeyframes() {
  useEffect(() => {
    if (keyframesInjected) return;
    const style = document.createElement("style");
    style.textContent = `
      @keyframes tri-msg-in { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }
      @keyframes tri-scan { 0% { top: -20%; } 100% { top: 110%; } }
      @keyframes tri-typing { 0%, 100% { opacity: 0.25; transform: scale(0.85); } 50% { opacity: 1; transform: scale(1); } }
    `;
    document.head.appendChild(style);
    keyframesInjected = true;
  }, []);
  return null;
}

/** Máquina de fases: flood (chegada) → triage (scan + classificação) → ordering (reordena) → done. */
function useTriagem(reqs: Requisicao[], opts: { autoPlay: boolean; speedMultiplier?: number }) {
  const { autoPlay, speedMultiplier = 1 } = opts;
  const reduced = prefersReducedMotion();

  const [phase, setPhase] = useState<Phase>(() => {
    if (!autoPlay) return "idle";
    return reduced ? "done" : "flood";
  });
  const [visibleCount, setVisibleCount] = useState(() => (autoPlay && reduced ? reqs.length : 0));
  const [classifiedCount, setClassifiedCount] = useState(() => (autoPlay && reduced ? reqs.length : 0));
  const timersRef = useRef<number[]>([]);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach((id) => window.clearTimeout(id));
    timersRef.current = [];
  }, []);

  const schedule = useCallback((fn: () => void, delay: number) => {
    timersRef.current.push(window.setTimeout(fn, delay));
  }, []);

  const runSequence = useCallback(() => {
    clearTimers();
    setVisibleCount(0);
    setClassifiedCount(0);

    if (prefersReducedMotion()) {
      setPhase("done");
      setVisibleCount(reqs.length);
      setClassifiedCount(reqs.length);
      return;
    }

    const m = speedMultiplier;
    setPhase("flood");
    reqs.forEach((_, i) => schedule(() => setVisibleCount(i + 1), (250 + i * 350) * m));
    const floodEnd = 250 * m + (reqs.length - 1) * 350 * m;

    schedule(() => setPhase("triage"), floodEnd + 800 * m);
    reqs.forEach((_, i) => schedule(() => setClassifiedCount(i + 1), floodEnd + 800 * m + i * 260 * m));
    const triageEnd = floodEnd + 800 * m + (reqs.length - 1) * 260 * m;

    schedule(() => setPhase("ordering"), triageEnd + 600 * m);
    schedule(() => setPhase("done"), triageEnd + 600 * m + 400 * m);
  }, [reqs, speedMultiplier, schedule, clearTimers]);

  useEffect(() => {
    if (autoPlay && !reduced) runSequence();
    return clearTimers;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { phase, visibleCount, classifiedCount, start: runSequence };
}

function TierPill({ tier }: { tier: Tier }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-[10.5px] font-mono uppercase tracking-[0.08em]",
        TIER_STYLE[tier].pill,
      )}
    >
      {TIER_META[tier].label}
    </span>
  );
}

function ScanOverlay({ label, compact }: { label: string; compact?: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
      <div className="absolute inset-0 bg-saas-cyan/[0.04]" />
      <div
        className="absolute inset-x-0 h-16"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(32,221,235,0.35), transparent)",
          animation: "tri-scan 1.6s linear infinite",
        }}
      />
      <div className={cn("absolute left-3 top-3 flex items-center gap-1.5 text-saas-cyan", compact ? "text-[10px]" : "text-[10.5px]")}>
        <ScanLine size={compact ? 12 : 13} />
        <span className="font-mono font-semibold">{label}</span>
      </div>
    </div>
  );
}

interface RequisicaoCardProps {
  req: Requisicao;
  revealed?: boolean;
  final?: boolean;
  compact?: boolean;
  selected?: boolean;
  onClick?: () => void;
}

function RequisicaoCard({ req, revealed = false, final = false, compact = false, selected = false, onClick }: RequisicaoCardProps) {
  const tier = req.tier;
  return (
    <div
      onClick={onClick}
      className={cn(
        "relative overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.02] transition-colors",
        compact ? "p-3 pl-4" : "p-3.5 sm:p-4 pl-4 sm:pl-5",
        onClick && "cursor-pointer hover:border-white/[0.16]",
        selected && "bg-white/[0.04] border-white/[0.2]",
      )}
    >
      {revealed && <span aria-hidden className={cn("absolute inset-y-0 left-0 w-[3px]", TIER_STYLE[tier].bar)} />}

      <div className="flex items-center justify-between gap-2">
        <span className="min-w-0 flex-1 truncate text-saas-ink text-[13px] font-semibold">
          {req.remetente} <span className="font-normal text-saas-faint">· {req.imovel}</span>
        </span>
        <span className="flex-none font-mono text-[11px] text-saas-faint-2">{req.hora}</span>
      </div>

      {!revealed && <p className="mt-1.5 text-saas-body text-[13px] italic leading-snug line-clamp-2">"{req.mensagemCrua}"</p>}

      {revealed && (
        <>
          <p className="mt-1.5 text-saas-faint text-[12px] italic leading-snug line-clamp-1">"{req.mensagemCrua}"</p>
          <p className="mt-1 text-saas-ink text-[13px] leading-snug">
            <span className="mr-1.5 font-mono text-[9.5px] uppercase tracking-[0.08em] text-saas-cyan">Resumo IA ·</span>
            {req.resumoIA}
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <TierPill tier={tier} />
            <span className={cn("font-mono text-[13px] font-extrabold", scoreColorClass(req.analise.score))}>{req.analise.score}</span>
          </div>
        </>
      )}

      {final && (
        <p
          className={cn(
            "mt-2 font-mono text-[10.5px]",
            tier === "t1" && "text-saas-green",
            tier === "t2" && "text-saas-violet",
            tier === "t3" && "text-saas-red",
          )}
        >
          {tier === "t1" && `✓ Resolvida pela IA · ${req.analise.tempoResolucao ?? ""}`}
          {tier === "t2" && "→ Encaminhada ao responsável"}
          {tier === "t3" && "• Alerta enviado ao gestor"}
        </p>
      )}
    </div>
  );
}

function ScoreGauge({ score }: { score: number }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    const cancel = animateValue(0, score, 600, setDisplay);
    return cancel;
  }, [score]);
  const r = 50;
  const c = 2 * Math.PI * r;
  const colorClass = score >= 75 ? "text-saas-red" : score >= 40 ? "text-saas-violet" : "text-saas-cyan";

  return (
    <div className={cn("relative w-[104px] h-[104px] flex-none", colorClass)}>
      <svg viewBox="0 0 116 116" className="w-full h-full -rotate-90">
        <circle cx="58" cy="58" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="9" />
        <circle
          cx="58"
          cy="58"
          r={r}
          fill="none"
          stroke="currentColor"
          strokeWidth="9"
          strokeLinecap="round"
          strokeDasharray={`${(display / 100) * c} ${c}`}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-saas-ink font-extrabold text-[22px] leading-none tracking-tight">{Math.round(display)}</span>
        <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.1em] text-saas-faint">/ 100</span>
      </div>
    </div>
  );
}

function useConversaReveal(conversa: MensagemConversa[], key: string) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [typingIndex, setTypingIndex] = useState<number | null>(null);

  useEffect(() => {
    setVisibleCount(0);
    setTypingIndex(null);
    const timers: number[] = [];
    let t = 200;
    conversa.forEach((msg, i) => {
      if (i > 0) t += 380;
      if (msg.autor === "ia") {
        const typingStart = t;
        t += 600;
        timers.push(window.setTimeout(() => setTypingIndex(i), typingStart));
        timers.push(
          window.setTimeout(() => {
            setTypingIndex(null);
            setVisibleCount(i + 1);
          }, t),
        );
      } else {
        timers.push(window.setTimeout(() => setVisibleCount(i + 1), t));
      }
    });
    return () => timers.forEach((id) => window.clearTimeout(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return { visibleCount, typingIndex };
}

function MessageBubble({ msg }: { msg: MensagemConversa }) {
  if (msg.autor === "sistema") {
    return (
      <div className="flex items-center justify-center gap-2 py-1">
        <span className="h-px flex-1 bg-white/[0.06]" />
        <span className="px-1 text-center font-mono text-[10px] text-saas-faint">{msg.texto}</span>
        <span className="h-px flex-1 bg-white/[0.06]" />
      </div>
    );
  }
  const isIA = msg.autor === "ia";
  return (
    <div
      className={cn(
        "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-snug",
        isIA
          ? "self-end rounded-br-md bg-gradient-to-br from-saas-cyan/20 to-saas-violet/20 text-saas-ink"
          : "self-start rounded-bl-md bg-white/[0.04] text-saas-body",
      )}
    >
      {msg.texto}
    </div>
  );
}

function TypingBubble() {
  return (
    <div className="flex max-w-[50%] items-center gap-1 self-end rounded-2xl rounded-br-md bg-gradient-to-br from-saas-cyan/20 to-saas-violet/20 px-4 py-3">
      {[0, 150, 300].map((delay) => (
        <span
          key={delay}
          className="h-1.5 w-1.5 rounded-full bg-saas-ink/70"
          style={{ animation: "tri-typing 1s ease-in-out infinite", animationDelay: `${delay}ms` }}
        />
      ))}
    </div>
  );
}

function ConversaSimulada({ req }: { req: Requisicao }) {
  const { visibleCount, typingIndex } = useConversaReveal(req.conversa, req.id);
  const shown = typingIndex !== null ? typingIndex + 1 : visibleCount;

  return (
    <div className="flex flex-col gap-2">
      {req.conversa.slice(0, shown).map((msg, i) => {
        const isPending = i === typingIndex && i >= visibleCount;
        return isPending ? <TypingBubble key={i} /> : <MessageBubble key={i} msg={msg} />;
      })}
    </div>
  );
}

function AnalisePainel({ req }: { req: Requisicao }) {
  return (
    <div className={cn(SAAS_CARD, "flex flex-col gap-5 p-5")}>
      <div className="flex items-center gap-4">
        <ScoreGauge score={req.analise.score} />
        <div className="min-w-0">
          <TierPill tier={req.tier} />
          <p className="mt-2 text-saas-ink text-[14px] font-semibold leading-snug">{req.analise.intencao}</p>
          <p className="mt-1 text-saas-faint text-[11.5px]">{req.analise.categoria}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 text-[12px]">
        <div>
          <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.08em] text-saas-faint-2">Sentimento</div>
          <div className="capitalize text-saas-body">{req.analise.sentimento}</div>
        </div>
        <div>
          <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.08em] text-saas-faint-2">Roteamento</div>
          <div className="text-saas-body">{req.analise.roteamento}</div>
        </div>
      </div>

      <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-3.5">
        <div className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-saas-faint-2">Por que esse score</div>
        <p className="text-saas-body text-[12.5px] leading-relaxed">{req.analise.justificativa}</p>
      </div>

      <div>
        <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.08em] text-saas-faint-2">Conversa</div>
        <ConversaSimulada req={req} />
      </div>
    </div>
  );
}

/** Card compacto auto-animado — usado no hero, sem painel (clique leva pra demo). */
export function HeroTriagem({ className = "" }: { className?: string }) {
  const { phase, visibleCount, classifiedCount, start } = useTriagem(HERO_REQS, { autoPlay: true, speedMultiplier: 0.7 });
  const sortedReqs = useMemo(() => sortForOrdering(HERO_REQS), []);
  const showSorted = phase === "ordering" || phase === "done";

  const counts = useMemo(
    () => ({
      t1: HERO_REQS.filter((r) => r.tier === "t1").length,
      t2: HERO_REQS.filter((r) => r.tier === "t2").length,
      t3: HERO_REQS.filter((r) => r.tier === "t3").length,
    }),
    [],
  );

  const scrollToDemo = () => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className={cn(SAAS_CARD, "relative min-h-[420px] p-4 sm:p-5", className)}>
      <TriagemKeyframes />
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-saas-ink text-[12.5px] font-semibold">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gradient-to-br from-saas-cyan to-saas-violet" />
          {phase === "flood" && `${visibleCount} não lidas`}
          {phase === "triage" && "Analisando…"}
          {showSorted && `${counts.t3} crítica · ${counts.t2} encaminhada · ${counts.t1} resolvidas pela IA`}
        </div>
        {phase === "done" && (
          <button type="button" onClick={() => start()} aria-label="Repetir triagem" className="text-saas-faint transition-colors hover:text-saas-ink">
            <RotateCcw size={14} />
          </button>
        )}
      </div>

      <div className="relative">
        <div key={showSorted ? "sorted" : "arrival"} className="flex flex-col gap-2 animate-fade-in">
          {showSorted
            ? sortedReqs.map((req) => <RequisicaoCard key={req.id} req={req} revealed final compact onClick={scrollToDemo} />)
            : HERO_REQS.map((req, i) => {
                if (i >= visibleCount) return null;
                const isClassified = phase === "triage" ? i < classifiedCount : phase !== "flood";
                return (
                  <div key={req.id} style={{ animation: "tri-msg-in 0.35s ease-out both" }}>
                    <RequisicaoCard req={req} revealed={isClassified} compact onClick={scrollToDemo} />
                  </div>
                );
              })}
        </div>
        {phase === "triage" && <ScanOverlay label="Analisando…" compact />}
      </div>
    </div>
  );
}

/** Sandbox completo — 9 requisições, controle manual, painel de análise por clique. */
export function TriagemInboxDemo({ className = "" }: { className?: string }) {
  const { phase, visibleCount, classifiedCount, start } = useTriagem(REQUISICOES, { autoPlay: false });
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const sortedReqs = useMemo(() => sortForOrdering(REQUISICOES), []);
  const showSorted = phase === "ordering" || phase === "done";

  const counts = useMemo(
    () => ({
      t1: REQUISICOES.filter((r) => r.tier === "t1").length,
      t2: REQUISICOES.filter((r) => r.tier === "t2").length,
      t3: REQUISICOES.filter((r) => r.tier === "t3").length,
    }),
    [],
  );

  const handleCardClick = (id: string) => {
    if (phase !== "done") return;
    setSelectedId((cur) => (cur === id ? null : id));
  };

  const handleReplay = () => {
    setSelectedId(null);
    start();
  };

  return (
    <div className={cn(SAAS_CARD, "p-4 sm:p-6", className)}>
      <TriagemKeyframes />

      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-saas-ink text-[13px] font-semibold">
          <span className="h-2 w-2 rounded-full bg-gradient-to-br from-saas-cyan to-saas-violet" />
          {phase === "idle" && "Caixa de entrada"}
          {phase === "flood" && `${visibleCount} não lidas`}
          {phase === "triage" && `Analisando ${REQUISICOES.length} requisições…`}
          {showSorted && `${counts.t3} críticas · ${counts.t2} encaminhadas · ${counts.t1} resolvidas pela IA`}
        </div>
        {phase === "done" && (
          <button
            type="button"
            onClick={handleReplay}
            className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-saas-body transition-colors hover:text-saas-ink"
          >
            <RotateCcw size={13} /> Repetir triagem
          </button>
        )}
      </div>

      <div className="grid items-start gap-5 md:grid-cols-[minmax(0,1fr)_380px]">
        {/* Inbox */}
        <div className="relative min-h-[420px]">
          <div key={showSorted ? "sorted" : "arrival"} className="flex flex-col gap-2.5 animate-fade-in">
            {showSorted
              ? TIER_ORDER.map((tier) => {
                  const group = sortedReqs.filter((r) => r.tier === tier);
                  if (!group.length) return null;
                  return (
                    <div key={tier} className="flex flex-col gap-2.5">
                      <div className="flex items-center gap-2 px-0.5 pt-1">
                        <TierPill tier={tier} />
                        <span className="font-mono text-[11px] text-saas-faint">
                          {group.length} {group.length === 1 ? "requisição" : "requisições"}
                        </span>
                      </div>
                      {group.map((req) => (
                        <div key={req.id} className="flex flex-col gap-2.5">
                          <RequisicaoCard
                            req={req}
                            revealed
                            final
                            selected={selectedId === req.id}
                            onClick={() => handleCardClick(req.id)}
                          />
                          {selectedId === req.id && (
                            <div className="md:hidden">
                              <AnalisePainel req={req} />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  );
                })
              : REQUISICOES.map((req, i) => {
                  if (i >= visibleCount) return null;
                  const isClassified = phase === "triage" ? i < classifiedCount : phase !== "flood";
                  return (
                    <div key={req.id} style={{ animation: "tri-msg-in 0.35s ease-out both" }}>
                      <RequisicaoCard req={req} revealed={isClassified} />
                    </div>
                  );
                })}
          </div>

          {phase === "triage" && <ScanOverlay label={`Analisando ${REQUISICOES.length} requisições…`} />}

          {phase === "idle" && (
            <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-black/45 backdrop-blur-[1px]">
              <button type="button" onClick={() => start()} className={SAAS_BTN_PRIMARY}>
                <Play size={15} /> Rodar um dia de WhatsApp
              </button>
            </div>
          )}
        </div>

        {/* Painel de análise — desktop, sticky */}
        <div className="hidden md:sticky md:top-24 md:block">
          {selectedId ? (
            <AnalisePainel req={REQUISICOES.find((r) => r.id === selectedId)!} />
          ) : (
            <div className={cn(SAAS_CARD, "p-6 text-center")}>
              <p className="text-saas-faint text-[13px] leading-relaxed">
                {phase === "done" ? "Clique numa requisição pra ver a análise da IA." : "A análise aparece aqui depois da triagem."}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
