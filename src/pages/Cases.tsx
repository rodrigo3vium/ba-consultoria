import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import PageLayout from '@/components/pb/PageLayout';
import Section from '@/components/pb/Section';
import StratCard from '@/components/pb/StratCard';
import Tag from '@/components/pb/Tag';

interface Case {
  id: string;
  titulo: string;
  cliente_nome: string;
  cliente_logo_url: string | null;
  categoria: string;
  setor: string | null;
  descricao_curta: string;
  metrica_principal: string;
  slug: string | null;
}

const Cases = () => {
  const [cases, setCases] = useState<Case[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSetor, setSelectedSetor] = useState<string | null>(null);

  const categories = ['Tecnologia', 'Vendas', 'Marketing', 'Customer Success', 'Operacional', 'RH'];
  const setores = ['Construção', 'E-commerce', 'Serviços', 'Distribuição', 'Marketing Digital', 'Tecnologia'];

  useEffect(() => {
    fetchCases();
  }, [selectedCategory, selectedSetor]);

  const fetchCases = async () => {
    setLoading(true);
    let query = supabase
      .from('cases')
      .select('*')
      .eq('status', 'publicado')
      .order('ordem', { ascending: true });

    if (selectedCategory) {
      query = query.eq('categoria', selectedCategory);
    }

    if (selectedSetor) {
      query = query.eq('setor', selectedSetor);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching cases:', error);
    } else {
      setCases(data || []);
    }
    setLoading(false);
  };

  return (
    <PageLayout trackingName="BA Consultoria - Cases">
      {/* Hero */}
      <section className="border-b border-pb-grid-strong py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6 font-mono text-[11px] uppercase tracking-mono-wide">
            <span className="text-pb-cyan">01</span>
            <span className="h-px w-12 bg-pb-grid-strong" />
            <span className="text-pb-ink-muted">Portfólio</span>
          </div>
          <h1 className="font-display uppercase text-pb-ink text-[clamp(40px,6vw,88px)] leading-[0.92]">
            Cases de Sucesso
          </h1>
          <p className="mt-5 font-body text-pb-ink-soft text-base md:text-lg leading-relaxed max-w-2xl">
            Descubra como transformamos negócios com tecnologia, estratégia e inteligência artificial
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-pb-grid-strong py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Category Filters */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted mb-3">
              Categoria
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`font-mono text-[10px] uppercase tracking-mono-wide px-3 py-1.5 border transition-colors duration-200 ${
                  selectedCategory === null
                    ? 'border-pb-cyan text-pb-cyan bg-pb-cyan/10'
                    : 'border-pb-grid-strong text-pb-ink-soft hover:border-pb-cyan-dim hover:text-pb-ink'
                }`}
              >
                Todos
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`font-mono text-[10px] uppercase tracking-mono-wide px-3 py-1.5 border transition-colors duration-200 ${
                    selectedCategory === cat
                      ? 'border-pb-cyan text-pb-cyan bg-pb-cyan/10'
                      : 'border-pb-grid-strong text-pb-ink-soft hover:border-pb-cyan-dim hover:text-pb-ink'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Setor Filters */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted mb-3">
              Setor
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedSetor(null)}
                className={`font-mono text-[10px] uppercase tracking-mono-wide px-3 py-1.5 border transition-colors duration-200 ${
                  selectedSetor === null
                    ? 'border-pb-cyan text-pb-cyan bg-pb-cyan/10'
                    : 'border-pb-grid-strong text-pb-ink-soft hover:border-pb-cyan-dim hover:text-pb-ink'
                }`}
              >
                Todos
              </button>
              {setores.map((setor) => (
                <button
                  key={setor}
                  onClick={() => setSelectedSetor(setor)}
                  className={`font-mono text-[10px] uppercase tracking-mono-wide px-3 py-1.5 border transition-colors duration-200 ${
                    selectedSetor === setor
                      ? 'border-pb-cyan text-pb-cyan bg-pb-cyan/10'
                      : 'border-pb-grid-strong text-pb-ink-soft hover:border-pb-cyan-dim hover:text-pb-ink'
                  }`}
                >
                  {setor}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <Section
        idx="02"
        section="Resultados"
        headline="Projetos entregues"
        noBorderTop
      >
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-pb-grid-strong border border-pb-grid-strong">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-pb-void p-8 animate-pulse">
                <div className="h-3 bg-pb-void-elev w-24 mb-4" />
                <div className="h-6 bg-pb-void-elev w-3/4 mb-3" />
                <div className="h-4 bg-pb-void-elev w-full" />
              </div>
            ))}
          </div>
        ) : cases.length === 0 ? (
          <div className="py-20 text-center">
            <p className="font-body text-pb-ink-soft text-lg">
              Nenhum case encontrado com os filtros selecionados.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-pb-grid-strong border border-pb-grid-strong">
            {cases.map((caseItem) => (
              <Link
                key={caseItem.id}
                to={`/cases/${caseItem.slug || caseItem.id}`}
                className="group"
                onClick={() => window.scrollTo(0, 0)}
              >
                <StratCard as="article" className="h-full flex flex-col gap-0 p-8">
                  {/* Cliente Logo / Nome + Categoria */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      {caseItem.cliente_logo_url ? (
                        <img
                          loading="lazy"
                          src={caseItem.cliente_logo_url}
                          alt={caseItem.cliente_nome}
                          className="h-28 w-full object-cover mb-4"
                          style={{ filter: 'grayscale(30%)' }}
                        />
                      ) : (
                        <p className="font-mono text-[11px] uppercase tracking-mono-wide text-pb-ink-muted">
                          {caseItem.cliente_nome}
                        </p>
                      )}
                    </div>
                    <Tag variant="cyan">{caseItem.categoria}</Tag>
                  </div>

                  {/* Título */}
                  <h2 className="font-display text-2xl uppercase text-pb-ink mt-3 leading-tight group-hover:text-pb-cyan transition-colors duration-200">
                    {caseItem.titulo}
                  </h2>

                  {/* Descrição */}
                  <p className="font-body text-pb-ink-soft text-sm leading-relaxed mt-2 line-clamp-3 flex-1">
                    {caseItem.descricao_curta}
                  </p>

                  {/* Métrica Principal */}
                  {caseItem.metrica_principal && (
                    <div className="pt-4 border-t border-pb-grid-strong mt-4">
                      <p className="font-display text-3xl text-pb-cyan">
                        {caseItem.metrica_principal}
                      </p>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="pt-3 mt-auto">
                    <span className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted group-hover:text-pb-cyan transition-colors duration-200 inline-flex items-center gap-2">
                      Ver Case Completo
                      <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </StratCard>
              </Link>
            ))}
          </div>
        )}
      </Section>
    </PageLayout>
  );
};

export default Cases;
