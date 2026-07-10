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
      className={`relative rounded-2xl border border-white/[0.09] bg-saas-card p-8 transition-colors duration-300 hover:border-white/[0.18] ${className}`}
    >
      {brackets && <CornerBrackets size={14} offset={8} />}
      {children}
    </Tag>
  );
};

export default StratCard;
