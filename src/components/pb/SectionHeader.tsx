import { ReactNode } from "react";

interface SectionHeaderProps {
  idx: string;
  label: string;
  headline: ReactNode;
  sub?: ReactNode;
  align?: "left" | "center";
}

const SectionHeader = ({ idx, label, headline, sub, align = "left" }: SectionHeaderProps) => {
  return (
    <header
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <div
        className={`flex items-center gap-3 mb-6 font-mono text-[11px] uppercase tracking-mono-wide ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="text-pb-cyan">{idx}</span>
        <span className="h-px w-12 bg-pb-grid-strong" />
        <span className="text-pb-ink-muted">{label}</span>
      </div>
      <h2 className="font-display uppercase text-pb-ink text-[clamp(32px,4vw,56px)] leading-[0.95]">
        {headline}
      </h2>
      {sub && (
        <p
          className={`mt-5 font-body text-pb-ink-soft text-base md:text-lg leading-relaxed max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {sub}
        </p>
      )}
    </header>
  );
};

export default SectionHeader;
