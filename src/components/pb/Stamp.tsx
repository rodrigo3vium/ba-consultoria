interface StampProps {
  children: string;
  color?: "cyan" | "red";
}

const Stamp = ({ children, color = "cyan" }: StampProps) => {
  const dotColor = color === "red" ? "hsl(var(--accent-red))" : "hsl(var(--accent-cyan))";
  const textColor = color === "red" ? "text-pb-red" : "text-pb-cyan";
  return (
    <span className={`inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-mono-x ${textColor}`}>
      <span
        className="inline-block w-1.5 h-1.5 animate-pulse-cyan"
        style={{ background: dotColor, boxShadow: `0 0 8px ${dotColor}` }}
        aria-hidden
      />
      {children}
    </span>
  );
};

export default Stamp;
