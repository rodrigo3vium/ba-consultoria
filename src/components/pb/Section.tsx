import { ReactNode } from "react";
import SectionHeader from "./SectionHeader";

interface SectionProps {
  idx: string;
  section: string;
  headline: ReactNode;
  sub?: ReactNode;
  align?: "left" | "center";
  children: ReactNode;
  className?: string;
  noBorderTop?: boolean;
  compact?: boolean;
}

const Section = ({
  idx,
  section,
  headline,
  sub,
  align = "left",
  children,
  className = "",
  noBorderTop = false,
  compact = false,
}: SectionProps) => {
  return (
    <section
      className={`${noBorderTop ? "" : "border-t border-pb-grid-strong"} ${compact ? "py-12 md:py-16" : "py-16 md:py-24"} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader idx={idx} label={section} headline={headline} sub={sub} align={align} />
        {children}
      </div>
    </section>
  );
};

export default Section;
