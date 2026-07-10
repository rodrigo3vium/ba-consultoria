import { ReactNode } from "react";

interface MetaBarProps {
  left: ReactNode;
  right?: ReactNode;
  /** Cor do dot de status. "red" (default) mapeia para o gradiente de acento SaaS. */
  dot?: "cyan" | "red";
}

const MetaBar = ({ left, right, dot = "red" }: MetaBarProps) => {
  return (
    <div className="sticky top-0 z-[60] flex items-center justify-between border-b border-white/[0.06] bg-saas-void/80 px-6 py-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-saas-muted backdrop-blur-md">
      <div className="flex min-w-0 items-center gap-2.5">
        <span
          className={
            dot === "cyan"
              ? "inline-block h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-saas-cyan shadow-[0_0_10px_rgba(32,221,235,0.55)]"
              : "inline-block h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet shadow-[0_0_10px_rgba(139,124,246,0.5)]"
          }
          aria-hidden
        />
        <span className="truncate">{left}</span>
      </div>
      {right && <div className="hidden md:block">{right}</div>}
    </div>
  );
};

export default MetaBar;
