import { ReactNode } from "react";
import CornerBrackets from "./CornerBrackets";

interface StratCardProps {
  children: ReactNode;
  brackets?: boolean;
  className?: string;
  as?: "div" | "article" | "li";
}

const StratCard = ({ children, brackets = false, className = "", as: Tag = "div" }: StratCardProps) => {
  return (
    <Tag
      className={`relative bg-gradient-to-b from-pb-void-card to-pb-void-elev border border-pb-grid-strong p-8 transition-colors duration-300 hover:border-pb-cyan-dim ${className}`}
    >
      {brackets && <CornerBrackets size={14} offset={8} />}
      {children}
    </Tag>
  );
};

export default StratCard;
