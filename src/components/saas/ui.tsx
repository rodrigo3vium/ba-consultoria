import * as React from "react";
import { cn } from "@/lib/utils";

/* ============================================================
   SaaS IDV v.03 — Product Editorial
   Vocabulário visual da /portfolio/imovel-vazio-nao-vende
   aplicado ao site inteiro. Importe daqui — NÃO recrie hex à mão.
   ============================================================ */

/* --- Token className strings (para uso cru em qualquer <button>/<div>) --- */
export const SAAS_BTN_PRIMARY =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-saas-void bg-gradient-to-r from-saas-cyan to-saas-violet shadow-saas-btn hover:shadow-saas-btn-h transition-shadow";
export const SAAS_BTN_GHOST =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-saas-body border border-white/[0.14] hover:border-white/[0.28] hover:text-saas-ink transition-colors";
export const SAAS_CARD = "rounded-2xl border border-white/[0.09] bg-saas-card";
export const SAAS_INPUT =
  "w-full rounded-xl bg-white/[0.04] border border-white/[0.10] text-saas-ink placeholder:text-saas-faint-2 px-4 py-3 text-[15px] outline-none focus:border-saas-violet focus:ring-2 focus:ring-saas-violet/30 transition";
export const SAAS_LABEL = "block text-xs font-semibold text-saas-muted mb-2";
export const SAAS_GRADIENT_TEXT =
  "bg-gradient-to-r from-saas-cyan to-saas-violet bg-clip-text text-transparent";

/* --- Accent: trecho de headline em gradiente ciano→violeta --- */
export function Accent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={cn(SAAS_GRADIENT_TEXT, className)}>{children}</span>;
}

/* --- Eyebrow: pill mono acima de headings de seção --- */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/[0.10] bg-white/[0.03] px-3.5 py-1.5 text-[11px] font-mono uppercase tracking-[0.14em] text-saas-muted",
        className,
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet" />
      {children}
    </span>
  );
}

/* --- Button --- */
type SaasButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};
export function SaasButton({
  variant = "primary",
  className,
  ...props
}: SaasButtonProps) {
  return (
    <button
      className={cn(variant === "ghost" ? SAAS_BTN_GHOST : SAAS_BTN_PRIMARY, className)}
      {...props}
    />
  );
}

/* --- Card --- */
export function Card({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn(SAAS_CARD, className)} {...props}>
      {children}
    </div>
  );
}

/* --- Section: divisória superior + padding vertical + container --- */
export function Section({
  id,
  className,
  container = "max-w-5xl",
  children,
}: {
  id?: string;
  className?: string;
  container?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("border-t border-white/[0.06] py-20 md:py-24", className)}>
      <div className={cn(container, "mx-auto px-4 sm:px-6 lg:px-8")}>{children}</div>
    </section>
  );
}

/* --- SectionHeader: Eyebrow + h2 (com Accent embutido) --- */
export function SectionHeader({
  eyebrow,
  children,
  center,
  className,
}: {
  eyebrow?: React.ReactNode;
  children: React.ReactNode;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={cn(center && "text-center", className)}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="mt-5 font-extrabold text-saas-ink text-[clamp(26px,3.4vw,42px)] leading-[1.12] tracking-tight">
        {children}
      </h2>
    </div>
  );
}

/* --- StatCard: número em gradiente + label --- */
export function StatCard({
  value,
  label,
  accent,
}: {
  value: React.ReactNode;
  label: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-white/[0.09] bg-white/[0.02] p-5">
      <div
        className={cn(
          "text-[clamp(26px,3vw,38px)] font-extrabold leading-none",
          accent ? SAAS_GRADIENT_TEXT : "text-saas-ink",
        )}
      >
        {value}
      </div>
      <div className="mt-2.5 text-[12.5px] text-saas-faint leading-relaxed">{label}</div>
    </div>
  );
}

/* --- Reveal: aplica animação de entrada (fade-in global) --- */
export function Reveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("animate-fade-in", className)}>{children}</div>;
}
