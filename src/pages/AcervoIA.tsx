import { useState, useMemo } from "react";
import PageLayout from "@/components/pb/PageLayout";
import Tag from "@/components/pb/Tag";
import { tracker } from "@/lib/tracking";
import { acervoIdeas, ACERVO_AREAS } from "@/lib/acervoIA";
import { Search } from "lucide-react";
import { Accent, Eyebrow, SAAS_INPUT, SAAS_CARD } from "@/components/saas/ui";

const AcervoIA = () => {
  const [area, setArea] = useState<string>("Todas");
  const [query, setQuery] = useState("");

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
    <PageLayout trackingName="BA Consultoria - Acervo IA">
      <div className="pb-24 text-saas-ink">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-white/[0.06]">
          {/* glows radiais suaves */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full bg-saas-violet/20 blur-[110px]" />
            <div className="absolute -top-10 right-0 w-[520px] h-[420px] rounded-full bg-saas-cyan/15 blur-[110px]" />
          </div>
          <div className="container mx-auto px-4 py-16 md:py-20 relative z-10 max-w-6xl">
            <Eyebrow>Acervo BA · Casos de uso</Eyebrow>
            <h1 className="mt-5 font-extrabold text-saas-ink text-[clamp(32px,5vw,58px)] leading-[1.06] tracking-tight max-w-4xl">
              Acervo de ideias de
              <br />
              aplicação de <Accent>IA</Accent>
            </h1>
            <p className="text-saas-body text-lg md:text-xl mt-6 max-w-2xl leading-relaxed">
              Uma biblioteca navegável de aplicações reais de inteligência
              artificial em negócios. Filtre por área e encontre o caso de uso
              certo pra você.
            </p>
            <div className="font-mono text-[12px] uppercase tracking-[0.15em] text-saas-muted mt-8 flex items-center gap-3">
              <span className="text-saas-cyan">{acervoIdeas.length}</span>
              <span>aplicações de IA</span>
              <span className="text-saas-faint">/</span>
              <span className="text-saas-cyan">{ACERVO_AREAS.length}</span>
              <span>áreas</span>
            </div>
          </div>
        </section>

        {/* FILTROS */}
        <section className="border-b border-white/[0.06] bg-saas-void/80 sticky top-0 z-20 backdrop-blur-xl">
          <div className="container mx-auto px-4 py-6 max-w-6xl">
            {/* busca */}
            <div className="relative mb-5 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-saas-faint pointer-events-none z-10" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar ideia…"
                className={SAAS_INPUT + " pl-11"}
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
                    className={`rounded-full text-[12px] font-medium px-3.5 py-1.5 border transition-colors ${
                      active
                        ? "border-saas-cyan/40 bg-saas-cyan/[0.08] text-saas-cyan"
                        : "border-white/[0.10] bg-white/[0.03] text-saas-muted hover:border-white/[0.20] hover:text-saas-ink"
                    }`}
                  >
                    {a}
                    <span className={`ml-2 ${active ? "text-saas-cyan/70" : "text-saas-faint"}`}>{count}</span>
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
              <p className="text-saas-muted text-[15px]">
                Nenhuma ideia encontrada.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((idea) => (
                <article
                  key={idea.id}
                  className={SAAS_CARD + " flex flex-col gap-4 p-6 hover:border-white/[0.16] transition-colors"}
                >
                  <Tag variant="cyan" className="self-start">
                    {idea.area}
                  </Tag>
                  <h2 className="font-bold text-xl leading-snug tracking-tight text-saas-ink">
                    {idea.title}
                  </h2>
                  <p className="text-[15px] leading-relaxed text-saas-body">
                    {idea.description}
                  </p>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </PageLayout>
  );
};

export default AcervoIA;
