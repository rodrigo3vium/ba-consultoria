import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import PageLayout from '@/components/pb/PageLayout';
import Section from '@/components/pb/Section';
import StratCard from '@/components/pb/StratCard';
import Tag from '@/components/pb/Tag';
import { Accent, Eyebrow } from '@/components/saas/ui';

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
      <section className="relative overflow-hidden border-b border-white/[0.06] py-16 md:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full bg-saas-violet/20 blur-[110px]" />
          <div className="absolute -top-10 right-0 w-[520px] h-[420px] rounded-full bg-saas-cyan/15 blur-[110px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow>Portfólio</Eyebrow>
          <h1 className="mt-5 font-extrabold text-saas-ink text-[clamp(32px,4.5vw,56px)] leading-[1.08] tracking-tight">
            Cases de <Accent>Sucesso</Accent>
          </h1>
          <p className="mt-5 text-saas-body text-base md:text-lg leading-relaxed max-w-2xl">
            Descubra como transformamos negócios com tecnologia, estratégia e inteligência artificial
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-white/[0.06] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Category Filters */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-muted mb-3">
              Categoria
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium border transition-colors duration-200 ${
                  selectedCategory === null
                    ? 'border-saas-cyan/40 bg-saas-cyan/[0.08] text-saas-cyan'
                    : 'border-white/[0.10] bg-white/[0.03] text-saas-body hover:border-white/[0.20] hover:text-saas-ink'
                }`}
              >
                Todos
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-4 py-1.5 text-xs font-medium border transition-colors duration-200 ${
                    selectedCategory === cat
                      ? 'border-saas-cyan/40 bg-saas-cyan/[0.08] text-saas-cyan'
                      : 'border-white/[0.10] bg-white/[0.03] text-saas-body hover:border-white/[0.20] hover:text-saas-ink'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Setor Filters */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-muted mb-3">
              Setor
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedSetor(null)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium border transition-colors duration-200 ${
                  selectedSetor === null
                    ? 'border-saas-cyan/40 bg-saas-cyan/[0.08] text-saas-cyan'
                    : 'border-white/[0.10] bg-white/[0.03] text-saas-body hover:border-white/[0.20] hover:text-saas-ink'
                }`}
              >
                Todos
              </button>
              {setores.map((setor) => (
                <button
                  key={setor}
                  onClick={() => setSelectedSetor(setor)}
                  className={`rounded-full px-4 py-1.5 text-xs font-medium border transition-colors duration-200 ${
                    selectedSetor === setor
                      ? 'border-saas-cyan/40 bg-saas-cyan/[0.08] text-saas-cyan'
                      : 'border-white/[0.10] bg-white/[0.03] text-saas-body hover:border-white/[0.20] hover:text-saas-ink'
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-2xl border border-white/[0.09] bg-saas-card p-8 animate-pulse">
                <div className="h-3 bg-white/[0.05] rounded w-24 mb-4" />
                <div className="h-6 bg-white/[0.05] rounded w-3/4 mb-3" />
                <div className="h-4 bg-white/[0.05] rounded w-full" />
              </div>
            ))}
          </div>
        ) : cases.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-saas-body text-lg">
              Nenhum case encontrado com os filtros selecionados.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
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
                          className="h-28 w-full object-cover rounded-xl mb-4"
                          style={{ filter: 'grayscale(30%)' }}
                        />
                      ) : (
                        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-saas-muted">
                          {caseItem.cliente_nome}
                        </p>
                      )}
                    </div>
                    <Tag variant="cyan">{caseItem.categoria}</Tag>
                  </div>

                  {/* Título */}
                  <h2 className="font-extrabold text-xl text-saas-ink mt-3 leading-snug tracking-tight group-hover:text-saas-cyan transition-colors duration-200">
                    {caseItem.titulo}
                  </h2>

                  {/* Descrição */}
                  <p className="text-saas-body text-sm leading-relaxed mt-2 line-clamp-3 flex-1">
                    {caseItem.descricao_curta}
                  </p>

                  {/* Métrica Principal */}
                  {caseItem.metrica_principal && (
                    <div className="pt-4 border-t border-white/[0.08] mt-4">
                      <p className="text-3xl font-extrabold leading-none">
                        <Accent>{caseItem.metrica_principal}</Accent>
                      </p>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="pt-3 mt-auto">
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-muted group-hover:text-saas-cyan transition-colors duration-200 inline-flex items-center gap-2">
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
