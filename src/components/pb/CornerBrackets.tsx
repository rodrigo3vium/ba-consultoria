interface CornerBracketsProps {
  color?: "cyan" | "ink";
  size?: number;
  offset?: number;
}

const CornerBrackets = ({ color = "cyan", size = 24, offset = 16 }: CornerBracketsProps) => {
  const stroke = color === "cyan" ? "hsl(var(--accent-cyan))" : "hsl(var(--text-primary))";
  const base = {
    position: "absolute" as const,
    width: size,
    height: size,
    borderColor: stroke,
    borderStyle: "solid" as const,
    pointerEvents: "none" as const,
  };
  return (
    <>
      <span style={{ ...base, top: offset, left: offset, borderWidth: "1px 0 0 1px" }} aria-hidden />
      <span style={{ ...base, top: offset, right: offset, borderWidth: "1px 1px 0 0" }} aria-hidden />
      <span style={{ ...base, bottom: offset, left: offset, borderWidth: "0 0 1px 1px" }} aria-hidden />
      <span style={{ ...base, bottom: offset, right: offset, borderWidth: "0 1px 1px 0" }} aria-hidden />
    </>
  );
};

export default CornerBrackets;
