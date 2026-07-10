interface CoordinateEntry {
  label: string;
  value: string;
}

interface CoordinatesProps {
  entries: CoordinateEntry[];
  align?: "left" | "right";
}

/**
 * Bloco de metadados curtos (label/valor) — versão SaaS IDV v.03.
 * Sem coordenadas/HUD: apenas uma lista discreta de metadados em mono,
 * usando tokens saas-*. API pública preservada (entries, align).
 */
const Coordinates = ({ entries, align = "right" }: CoordinatesProps) => {
  return (
    <div
      className="font-mono text-[10px] leading-relaxed tracking-[0.14em] text-saas-faint"
      style={{ textAlign: align }}
    >
      {entries.map((e) => (
        <div
          key={e.label}
          className={`flex gap-3 whitespace-nowrap ${
            align === "right" ? "justify-end" : "justify-start"
          }`}
        >
          <span className="uppercase text-saas-faint-2">{e.label}</span>
          <span className="text-saas-muted">{e.value}</span>
        </div>
      ))}
    </div>
  );
};

export default Coordinates;
