import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';

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
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-ba-blue-dark/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-ba-blue-light/10 via-transparent to-transparent blur-3xl" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="bg-gradient-to-r from-ba-blue-light via-white to-ba-blue-medium bg-clip-text text-transparent">
                Cases de Sucesso
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Descubra como transformamos negócios com tecnologia, estratégia e inteligência artificial
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 px-4 border-b border-white/10">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-6">
            {/* Category Filters */}
            <div>
              <h3 className="text-sm font-semibold mb-3 text-muted-foreground">Categoria</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === null
                      ? 'bg-ba-blue-light text-black'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                  }`}
                >
                  Todos
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === cat
                        ? 'bg-ba-blue-light text-black'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Setor Filters */}
            <div>
              <h3 className="text-sm font-semibold mb-3 text-muted-foreground">Setor</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedSetor(null)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedSetor === null
                      ? 'bg-ba-orange text-black'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                  }`}
                >
                  Todos
                </button>
                {setores.map((setor) => (
                  <button
                    key={setor}
                    onClick={() => setSelectedSetor(setor)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedSetor === setor
                        ? 'bg-ba-orange text-black'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                    }`}
                  >
                    {setor}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Skeleton key={i} className="h-96 rounded-3xl" />
              ))}
            </div>
          ) : cases.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">Nenhum case encontrado com os filtros selecionados.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cases.map((caseItem) => (
                <Link
                  key={caseItem.id}
                  to={`/cases/${caseItem.slug || caseItem.id}`}
                  className="group"
                >
                  <div className="h-full bg-black/90 backdrop-blur-sm border border-ba-blue-light/20 rounded-3xl p-8 transition-all duration-300 hover:border-ba-blue-light/40 hover:shadow-glow">
                    <div className="space-y-6">
                      {/* Cliente Logo/Nome */}
                      <div className="flex items-center justify-between">
                        <div>
                          {caseItem.cliente_logo_url ? (
                            <img 
                              src={caseItem.cliente_logo_url} 
                              alt={caseItem.cliente_nome}
                              className="h-12 object-contain"
                            />
                          ) : (
                            <h3 className="font-bold text-lg">{caseItem.cliente_nome}</h3>
                          )}
                        </div>
                        <Badge variant="outline" className="bg-white/10 border-white/20">
                          {caseItem.categoria}
                        </Badge>
                      </div>

                      {/* Título */}
                      <h3 className="text-2xl font-bold leading-tight group-hover:text-ba-blue-light transition-colors">
                        {caseItem.titulo}
                      </h3>

                      {/* Descrição */}
                      <p className="text-muted-foreground line-clamp-3">
                        {caseItem.descricao_curta}
                      </p>

                      {/* Métrica Principal */}
                      <div className="pt-4 border-t border-white/10">
                        <p className="text-3xl font-bold text-ba-orange">
                          {caseItem.metrica_principal}
                        </p>
                      </div>

                      {/* CTA */}
                      <div className="pt-2">
                        <span className="text-sm text-ba-blue-light group-hover:text-white transition-colors inline-flex items-center gap-2">
                          Ver Case Completo
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cases;
