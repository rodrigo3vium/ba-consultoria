import { useEffect, useRef, useState } from "react";
import { AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import { SAAS_CARD } from "@/components/saas/ui";
import { animateValue } from "@/lib/portfolio/anim";
import { KPIS, VOLUME_30D, PADROES_CRONICOS, type Kpi, type VolumeDia, type PadraoCronico } from "@/lib/portfolio/triagemAluguelContent";

// Segunda demo: "inteligência operacional". KPIs, volume de 30 dias e padrões
// crônicos são dados fixos (ver triagemAluguelContent.ts) — a única
// interatividade é o count-up/reveal disparado quando a seção entra na tela.

function useInViewOnce<T extends HTMLElement>(threshold = 0.3) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function KpiTile({ kpi, animate }: { kpi: Kpi; animate: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!animate) return;
    return animateValue(0, kpi.valor, 900, setDisplay);
  }, [animate, kpi.valor]);

  return (
    <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
      <div className="text-[26px] font-extrabold leading-none text-saas-ink">
        {kpi.prefixo}
        {Math.round(display)}
        {kpi.sufixo}
      </div>
      <div className="mt-2 text-[12px] leading-relaxed text-saas-faint">{kpi.label}</div>
    </div>
  );
}

function VolumeChart({ data, animate }: { data: VolumeDia[]; animate: boolean }) {
  const width = 400;
  const height = 92;
  const max = Math.max(...data.map((d) => d.total));
  const min = Math.min(...data.map((d) => d.total));
  const range = max - min || 1;
  const stepX = width / (data.length - 1);
  const points = data.map((d, i) => ({
    x: i * stepX,
    y: height - 10 - ((d.total - min) / range) * (height - 26),
    d,
  }));
  const linePoints = points.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
  const areaPoints = `0,${height} ${linePoints} ${width},${height}`;

  return (
    <div className="relative">
      <svg width="100%" height={height + 22} viewBox={`-8 -14 ${width + 16} ${height + 24}`} preserveAspectRatio="none" className="overflow-visible">
        <defs>
          <linearGradient id="triVolSpark" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.4" className="text-saas-violet" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" className="text-saas-cyan" />
          </linearGradient>
        </defs>
        <polygon points={areaPoints} fill="url(#triVolSpark)" stroke="none" />
        <polyline points={linePoints} fill="none" stroke="currentColor" strokeWidth="1.75" className="text-saas-violet" />
        {points
          .filter((p) => p.d.critico)
          .map((p) => (
            <g key={p.d.dia} className="text-saas-red">
              <circle cx={p.x} cy={p.y} r={3.5} fill="currentColor" />
              <circle cx={p.x} cy={p.y} r={7} fill="none" stroke="currentColor" strokeOpacity={0.35} strokeWidth={1.5} />
            </g>
          ))}
      </svg>
      {/* Máscara que revela o gráfico da esquerda pra direita ao entrar na viewport */}
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 bg-saas-card transition-[width] duration-[1100ms] ease-out"
        style={{ width: animate ? "0%" : "100%" }}
      />
    </div>
  );
}

function PadraoCronicoCard({ padrao }: { padrao: PadraoCronico }) {
  return (
    <div className="rounded-xl border border-saas-red/25 bg-saas-red/[0.06] p-4">
      <div className="mb-1.5 flex items-center gap-1.5 text-saas-red">
        <AlertTriangle size={13} />
        <span className="text-[12.5px] font-bold">{padrao.imovel}</span>
      </div>
      <p className="text-saas-body text-[12.5px] leading-relaxed">{padrao.padrao}</p>
      <p className="mt-2 text-saas-faint text-[12px] leading-relaxed">{padrao.recomendacao}</p>
      <p className="mt-2.5 text-[12.5px] font-semibold text-saas-green">{padrao.economia}</p>
    </div>
  );
}

export function TriagemDashboard({ className = "" }: { className?: string }) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>(0.25);

  return (
    <div ref={ref} className={cn(SAAS_CARD, "p-5 sm:p-7", className)}>
      <div className="mb-7 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {KPIS.map((kpi) => (
          <KpiTile key={kpi.label} kpi={kpi} animate={inView} />
        ))}
      </div>

      <div className="mb-7">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <h4 className="font-mono text-[11px] uppercase tracking-[0.14em] text-saas-faint">Volume · últimos 30 dias</h4>
          <span className="font-mono text-[10.5px] text-saas-red">● dias com alerta crítico</span>
        </div>
        <VolumeChart data={VOLUME_30D} animate={inView} />
      </div>

      <div>
        <h4 className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-saas-faint">Padrões crônicos detectados</h4>
        <div className="grid gap-3 sm:grid-cols-2">
          {PADROES_CRONICOS.map((p) => (
            <PadraoCronicoCard key={p.imovel} padrao={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
