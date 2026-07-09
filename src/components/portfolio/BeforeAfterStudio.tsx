import { useCallback, useEffect, useRef, useState } from "react";
import { ScanLine, Sparkles, MoveHorizontal, Wand2, ArrowRight, ShieldCheck } from "lucide-react";
import { AMBIENTES, STAMP_LABEL, DEMO, type Ambiente } from "@/lib/portfolio/imovelVazioContent";

// Demo curada de virtual staging. Sem IA ao vivo: o "depois" é uma foto real do
// MESMO cômodo já mobiliado, e a "geração" é encenada (scan + reveal) para dar a
// sensação de processamento. O comparador faz o wipe entre antes/depois via
// clip-path, arrastável no toque e no mouse. Quando o ambiente tem crop vertical
// próprio (antesMobile/depoisMobile), o <picture> troca pra ele em telas < 768px
// via media query — resolvido pelo browser antes do primeiro paint, sem flash.

type Phase = "idle" | "scanning" | "revealing" | "done";

const STYLE = {
  panel: "rounded-2xl border border-white/[0.09] bg-[#15151F]",
  frameBorder: "border border-white/[0.09]",
  frameBg: "bg-[#0E0E17]",
  accent: "#20DDEB",
  ink: "#F5F5FA",
  chipActive: "text-[#0A0A13] bg-gradient-to-r from-[#20DDEB] to-[#8B7CF6] border border-transparent",
  chipIdle: "text-[#B7B8C7] bg-white/[0.03] border border-white/[0.10] hover:border-white/[0.24]",
  primaryBtn:
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-[#0A0A13] bg-gradient-to-r from-[#20DDEB] to-[#8B7CF6] shadow-[0_8px_28px_-8px_rgba(139,124,246,0.55)] hover:shadow-[0_10px_34px_-6px_rgba(139,124,246,0.7)] transition-shadow",
  ghostBtn:
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-[#B7B8C7] border border-white/[0.14] hover:border-white/[0.28] hover:text-[#F5F5FA] transition-colors",
  stamp: "rounded-md bg-[#0A0A13]/85 text-[#20DDEB] border border-[#20DDEB]/30 font-semibold backdrop-blur-sm",
  overlayLabel: "rounded bg-[#0A0A13]/85 backdrop-blur-sm font-semibold",
  metaText: "text-[#7B7C8C]",
  divider: "border-white/[0.08]",
};

// easeInOut cúbico
function ease(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function animateValue(
  from: number,
  to: number,
  duration: number,
  onUpdate: (v: number) => void,
  onComplete?: () => void,
) {
  const start = performance.now();
  let raf = 0;
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / duration);
    onUpdate(from + (to - from) * ease(t));
    if (t < 1) raf = requestAnimationFrame(tick);
    else onComplete?.();
  };
  raf = requestAnimationFrame(tick);
  return () => cancelAnimationFrame(raf);
}

let keyframesInjected = false;

/** Comparador antes/depois + máquina de estados (scan → reveal → interativo). */
function useStaging(autoPlay: boolean) {
  const [phase, setPhase] = useState<Phase>(autoPlay ? "scanning" : "idle");
  const [pct, setPct] = useState(0);
  const pctRef = useRef(0);
  const timers = useRef<{ timeout?: number; cancelRaf?: () => void }>({});

  const setP = useCallback((v: number) => {
    pctRef.current = v;
    setPct(v);
  }, []);

  const clearTimers = useCallback(() => {
    if (timers.current.timeout) window.clearTimeout(timers.current.timeout);
    timers.current.cancelRaf?.();
  }, []);

  const generate = useCallback(() => {
    clearTimers();
    setP(0);
    setPhase("scanning");
    timers.current.timeout = window.setTimeout(() => {
      setPhase("revealing");
      timers.current.cancelRaf = animateValue(0, 100, 1100, setP, () => setPhase("done"));
    }, 1500);
  }, [clearTimers, setP]);

  const reset = useCallback(() => {
    clearTimers();
    setP(0);
    setPhase("idle");
  }, [clearTimers, setP]);

  // autoPlay: dispara a sequência ao montar
  useEffect(() => {
    if (autoPlay) generate();
    return clearTimers;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { phase, pct, pctRef, setP, generate, reset, clearTimers };
}

interface ComparatorProps {
  ambiente: Ambiente;
  phase: Phase;
  pct: number;
  pctRef: React.MutableRefObject<number>;
  setP: (v: number) => void;
  className?: string;
}

function Comparator({ ambiente, phase, pct, pctRef, setP, className = "" }: ComparatorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const interactive = phase === "done";
  const scanning = phase === "scanning";
  const hasMobileCrop = !!(ambiente.antesMobile && ambiente.depoisMobile);
  const aspectClass = hasMobileCrop ? "aspect-[941/1672] md:aspect-[4/3]" : "aspect-[4/3]";

  const scrub = useCallback(
    (clientX: number) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const p = ((clientX - rect.left) / rect.width) * 100;
      setP(Math.max(0, Math.min(100, p)));
    },
    [setP],
  );

  const returnToFurnished = useCallback(() => {
    if (!interactive) return;
    animateValue(pctRef.current, 100, 320, setP);
  }, [interactive, pctRef, setP]);

  return (
    <div
      ref={containerRef}
      onPointerMove={(e) => interactive && scrub(e.clientX)}
      onPointerLeave={returnToFurnished}
      onPointerUp={returnToFurnished}
      onDragStart={(e) => e.preventDefault()}
      className={`relative ${aspectClass} select-none overflow-hidden rounded-2xl ${STYLE.frameBorder} ${STYLE.frameBg} ${interactive ? "cursor-ew-resize" : ""} ${className}`}
      style={{ touchAction: interactive ? "none" : "auto" }}
    >
      {/* Base: ambiente vazio (antes) */}
      <picture>
        {ambiente.antesMobile && <source media="(max-width: 767px)" srcSet={ambiente.antesMobile} />}
        <img
          src={ambiente.antes}
          alt={`${ambiente.label} — imóvel vazio`}
          draggable={false}
          loading="lazy"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />
      </picture>

      {/* Camada mobiliada (depois), clipada até pct a partir da esquerda */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}>
        <picture>
          {ambiente.depoisMobile && <source media="(max-width: 767px)" srcSet={ambiente.depoisMobile} />}
          <img
            src={ambiente.depois}
            alt={`${ambiente.label} — ambientação virtual`}
            draggable={false}
            loading="lazy"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          />
        </picture>
      </div>

      {/* Divisória que segue o cursor/dedo */}
      {pct > 0.5 && pct < 99.5 && (
        <div
          className="pointer-events-none absolute inset-y-0"
          style={{ left: `${pct}%`, transform: "translateX(-50%)" }}
        >
          <div className="h-full w-[2px]" style={{ backgroundColor: STYLE.accent, boxShadow: `0 0 12px ${STYLE.accent}` }} />
          {interactive && (
            <div
              className="absolute left-1/2 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 backdrop-blur-sm"
              style={{ border: `1px solid ${STYLE.accent}`, color: STYLE.accent }}
            >
              <MoveHorizontal size={15} />
            </div>
          )}
        </div>
      )}

      {/* Overlay de scan (fase de análise) */}
      {scanning && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0" style={{ backgroundColor: STYLE.accent, opacity: 0.1 }} />
          <div
            className="absolute inset-x-0 h-10"
            style={{
              background: `linear-gradient(to bottom, transparent, ${STYLE.accent}66, transparent)`,
              animation: "bva-scan 1.4s linear infinite",
            }}
          />
          <div className="absolute left-2.5 top-2.5 flex items-center gap-1.5" style={{ color: STYLE.accent }}>
            <ScanLine size={14} />
            <span className="text-[10px] font-semibold">Analisando arquitetura…</span>
          </div>
        </div>
      )}

      {/* Rótulos ANTES / DEPOIS (quando comparável) */}
      {interactive && (
        <>
          {pct > 12 && (
            <span
              className={`pointer-events-none absolute left-2.5 top-2.5 px-2 py-0.5 text-[9px] ${STYLE.overlayLabel}`}
              style={{ color: STYLE.accent }}
            >
              Depois · IA
            </span>
          )}
          {pct < 88 && (
            <span
              className={`pointer-events-none absolute right-2.5 top-2.5 px-2 py-0.5 text-[9px] ${STYLE.overlayLabel} ${STYLE.metaText}`}
            >
              Antes
            </span>
          )}
        </>
      )}

      {/* Carimbo obrigatório de ambientação virtual (DOBRA 4, tangível) */}
      {(phase === "revealing" || phase === "done") && pct > 40 && (
        <span
          className={`pointer-events-none absolute bottom-2.5 left-2.5 flex items-center gap-1.5 px-2 py-1 text-[9px] ${STYLE.stamp}`}
        >
          <ShieldCheck size={11} />
          {STAMP_LABEL}
        </span>
      )}
    </div>
  );
}

/** Card único auto-animado — usado no hero (o visitante já vê antes de ler). */
export function HeroBeforeAfter({ className = "" }: { className?: string }) {
  const { phase, pct, pctRef, setP } = useStaging(true);
  const ambiente = AMBIENTES[0];

  return (
    <div className={className}>
      <ScanKeyframes />
      <Comparator ambiente={ambiente} phase={phase} pct={pct} pctRef={pctRef} setP={setP} />
      <div className="mt-3 flex items-center justify-between gap-2">
        <span className="text-[11px] font-semibold" style={{ color: STYLE.ink }}>
          {ambiente.label}
        </span>
        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold" style={{ color: STYLE.accent }}>
          <Sparkles size={12} /> {ambiente.estilo}
        </span>
      </div>
    </div>
  );
}

/** Sandbox completo — seletor de ambiente + comparador + gerar + usar minha foto. */
export function BeforeAfterStudio({
  onUsePhoto,
  className = "",
}: {
  onUsePhoto?: () => void;
  className?: string;
}) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [hasGenerated, setHasGenerated] = useState(false);
  const { phase, pct, pctRef, setP, generate, reset } = useStaging(false);
  const ambiente = AMBIENTES[activeIdx];

  const selectAmbiente = (i: number) => {
    if (i === activeIdx) return;
    setActiveIdx(i);
    if (hasGenerated) {
      // fluxo já aprendido: gera direto (visual e fluido)
      generate();
    } else {
      reset();
    }
  };

  const handleGenerate = () => {
    setHasGenerated(true);
    generate();
  };

  return (
    <div className={`${STYLE.panel} p-4 sm:p-6 ${className}`}>
      <ScanKeyframes />

      {/* Seletor de ambiente */}
      <div className="mb-4 flex flex-wrap gap-2">
        {AMBIENTES.map((a, i) => (
          <button
            key={a.id}
            type="button"
            onClick={() => selectAmbiente(i)}
            className={`rounded-full px-3.5 py-2 text-xs transition-colors ${i === activeIdx ? STYLE.chipActive : STYLE.chipIdle}`}
          >
            {a.label}
          </button>
        ))}
      </div>

      {/* Comparador */}
      <div className="relative">
        <Comparator ambiente={ambiente} phase={phase} pct={pct} pctRef={pctRef} setP={setP} />

        {/* Overlay do botão "Mobiliar" (estado inicial) */}
        {phase === "idle" && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/45 backdrop-blur-[1px]">
            <button type="button" onClick={handleGenerate} className={STYLE.primaryBtn}>
              <Wand2 size={16} /> Mobiliar com IA
            </button>
          </div>
        )}
      </div>

      {/* Rodapé do card: estilo + dica */}
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm" style={{ color: STYLE.ink }}>
            {ambiente.label}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold" style={{ color: STYLE.accent }}>
            <Sparkles size={12} /> {ambiente.estilo}
          </span>
        </div>
        <span className={`text-xs ${STYLE.metaText}`}>
          {phase === "idle" && "Clique em Mobiliar com IA"}
          {phase === "scanning" && "Analisando o ambiente…"}
          {phase === "revealing" && "Mobiliando…"}
          {phase === "done" && "Arraste a divisória pra comparar"}
        </span>
      </div>

      {/* Usar minha foto — handoff honesto (sem geração falsa) */}
      <div className={`mt-5 flex flex-col gap-3 border-t ${STYLE.divider} pt-5 sm:flex-row sm:items-center sm:justify-between`}>
        <p className={`text-xs leading-relaxed ${STYLE.metaText} max-w-[46ch]`}>{DEMO.usePhotoNote}</p>
        {onUsePhoto && (
          <button type="button" onClick={onUsePhoto} className={`${STYLE.ghostBtn} flex-none`}>
            {DEMO.usePhotoCta} <ArrowRight size={15} />
          </button>
        )}
      </div>
    </div>
  );
}

function ScanKeyframes() {
  useEffect(() => {
    if (keyframesInjected) return;
    const style = document.createElement("style");
    style.textContent = `@keyframes bva-scan{0%{top:-20%}100%{top:110%}}`;
    document.head.appendChild(style);
    keyframesInjected = true;
  }, []);
  return null;
}
