import { ReactNode } from "react";

interface MetaBarProps {
  left: ReactNode;
  right?: ReactNode;
  dot?: "cyan" | "red";
}

const MetaBar = ({ left, right, dot = "red" }: MetaBarProps) => {
  return (
    <div className="meta-bar">
      <div className="flex items-center min-w-0">
        <span className={`dot ${dot === "cyan" ? "cyan" : ""}`} aria-hidden />
        <span className="truncate">{left}</span>
      </div>
      {right && <div className="hidden md:block">{right}</div>}
    </div>
  );
};

export default MetaBar;
