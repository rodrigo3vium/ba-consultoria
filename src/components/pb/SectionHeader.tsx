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
      <div className={`mb-6 ${align === "center" ? "flex justify-center" : ""}`}>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.10] bg-white/[0.03] px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em]">
          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet" />
          <span className="text-saas-cyan">{idx}</span>
          <span className="text-saas-muted">{label}</span>
        </span>
      </div>
      <h2 className="font-extrabold text-saas-ink text-[clamp(26px,3.4vw,42px)] leading-[1.12] tracking-tight">
        {headline}
      </h2>
      {sub && (
        <p
          className={`mt-5 text-saas-body text-base md:text-lg leading-relaxed max-w-2xl ${
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
