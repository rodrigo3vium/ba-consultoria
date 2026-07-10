import { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
  variant?: "default" | "cyan" | "red" | "solid";
  className?: string;
}

const Tag = ({ children, variant = "default", className = "" }: TagProps) => {
  const variants: Record<string, string> = {
    default: "border-white/[0.10] bg-white/[0.03] text-saas-muted",
    cyan:    "border-saas-cyan/30 bg-saas-cyan/[0.06] text-saas-cyan",
    // acento vermelho não existe mais na IDV SaaS — variant "red" renderiza no violeta do gradiente
    red:     "border-saas-violet/30 bg-saas-violet/[0.06] text-saas-violet",
    solid:   "border-transparent bg-saas-ink text-saas-void",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full border font-mono text-[10px] uppercase tracking-[0.14em] px-2.5 py-1 ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Tag;
