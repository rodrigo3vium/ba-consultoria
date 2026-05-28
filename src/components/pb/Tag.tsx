import { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
  variant?: "default" | "cyan" | "red" | "solid";
  className?: string;
}

const Tag = ({ children, variant = "default", className = "" }: TagProps) => {
  const variants: Record<string, string> = {
    default: "border-pb-grid-strong text-pb-ink-soft",
    cyan:    "border-pb-cyan-dim text-pb-cyan",
    red:     "border-pb-red-dim text-pb-red",
    solid:   "border-pb-ink bg-pb-ink text-pb-void-deep",
  };
  return (
    <span
      className={`inline-block font-mono text-[10px] uppercase tracking-mono-wide px-2.5 py-1 border ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Tag;
