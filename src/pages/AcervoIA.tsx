import { useState, useEffect, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { tracker } from "@/lib/tracking";
import Tag from "@/components/pb/Tag";
import { acervoIdeas, ACERVO_AREAS } from "@/lib/acervoIA";
import { Search } from "lucide-react";

const AcervoIA = () => {
  const [area, setArea] = useState<string>("Todas");
  const [query, setQuery] = useState("");

  useEffect(() => {
    tracker.page("Acervo IA");
  }, []);

  const countByArea = useMemo(() => {
    const map: Record<string, number> = {};
    for (const idea of acervoIdeas) {
      map[idea.area] = (map[idea.area] || 0) + 1;
    }
    return map;
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return acervoIdeas.filter((idea) => {
      const matchArea = area === "Todas" || idea.area === area;
      const matchQuery =
        !q ||
        idea.title.toLowerCase().includes(q) ||
        idea.description.toLowerCase().includes(q);
      return matchArea && matchQuery;
    });
  }, [area, query]);

  const handleFilter = (a: string) => {
    setArea(a);
    tracker.track("acervo_filter", { area: a, page: "/educacao/acervo-ia" });
  };

  const chips = ["Todas", ...ACERVO_AREAS];

  return (
    <div className="min-h-screen bg-pb-void text-pb-ink">
      <Header />

      <main className="pt-28 pb-24">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-pb-grid-strong">
          {/* grid técnico sutil */}
          <div
            className="absolute inset-0 pointer-events-none opacity-60"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="container mx-auto px-4 py-16 md:py-20 relative z-10 max-w-6xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-pb-cyan mb-5">
              Acervo BA · Casos de uso
            </p>
            <h1 className="font-display uppercase leading-[0.92] text-pb-ink text-5xl md:text-7xl lg:text-8xl max-w-4xl">
              Acervo de ideias de
              <br />
              aplicação de IA
            </h1>
            <p className="font-body text-pb-ink-soft text-lg md:text-xl mt-6 max-w-2xl">
              Uma biblioteca navegável de aplicações reais de inteligência
              artificial em negócios. Filtre por área e encontre o caso de uso
              certo pra você.
            </p>
            <div className="font-mono text-[12px] uppercase tracking-[0.15em] text-pb-ink-muted mt-8 flex items-center gap-3">
              <span className="text-pb-cyan">{acervoIdeas.length}</span>
              <span>aplicações de IA</span>
              <span className="text-pb-ink-faint">/</span>
              <span className="text-pb-cyan">{ACERVO_AREAS.length}</span>
              <span>áreas</span>
            </div>
          </div>
        </section>

        {/* FILTROS */}
        <section className="border-b border-pb-grid-strong bg-pb-void-deep/40 sticky top-0 z-20 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-6 max-w-6xl">
            {/* busca */}
            <div className="relative mb-5 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-pb-ink-faint pointer-events-none" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar ideia…"
                className="pb-input pl-11"
              />
            </div>

            {/* chips de área */}
            <div className="flex flex-wrap gap-2">
              {chips.map((a) => {
                const active = area === a;
                const count = a === "Todas" ? acervoIdeas.length : countByArea[a] || 0;
                return (
                  <button
                    key={a}
                    onClick={() => handleFilter(a)}
                    className={`font-mono text-[11px] uppercase tracking-[0.1em] px-3 py-1.5 border transition-colors ${
                      active
                        ? "border-pb-cyan text-pb-cyan bg-pb-cyan/5"
                        : "border-pb-grid-strong text-pb-ink-muted hover:border-pb-cyan-dim hover:text-pb-ink-soft"
                    }`}
                  >
                    {a}
                    <span className="ml-2 text-pb-ink-faint">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* GRID */}
        <section className="container mx-auto px-4 py-12 max-w-6xl">
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="font-mono text-sm uppercase tracking-[0.15em] text-pb-ink-muted">
                Nenhuma ideia encontrada.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((idea) => (
                <article
                  key={idea.id}
                  className="strat-card flex flex-col gap-4 !p-6"
                >
                  <Tag variant="cyan" className="self-start">
                    {idea.area}
                  </Tag>
                  <h2 className="font-display uppercase text-2xl leading-tight text-pb-ink">
                    {idea.title}
                  </h2>
                  <p className="font-body text-[15px] leading-relaxed text-pb-ink-soft">
                    {idea.description}
                  </p>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AcervoIA;
