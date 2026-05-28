interface CoordinateEntry {
  label: string;
  value: string;
}

interface CoordinatesProps {
  entries: CoordinateEntry[];
  align?: "left" | "right";
}

const Coordinates = ({ entries, align = "right" }: CoordinatesProps) => {
  return (
    <div
      className="font-mono uppercase text-[10px] leading-relaxed tracking-mono-wide text-pb-ink-muted"
      style={{ textAlign: align }}
    >
      {entries.map((e) => (
        <div key={e.label} className="flex gap-3 justify-end whitespace-nowrap">
          <span className="text-pb-ink-faint">{e.label}</span>
          <span className="text-pb-ink-soft">{e.value}</span>
        </div>
      ))}
    </div>
  );
};

export default Coordinates;
