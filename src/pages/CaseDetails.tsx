import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface ResultadoMetrica {
  metrica: string;
  valor: string;
  descricao: string;
}

interface CaseDetails {
  id: string;
  titulo: string;
  cliente_nome: string;
  cliente_logo_url: string | null;
  categoria: string;
  setor: string | null;
  descricao_curta: string;
  desafio: string;
  solucao: string;
  resultados: ResultadoMetrica[];
  metrica_principal: string;
  depoimento: string | null;
  depoimento_autor: string | null;
  depoimento_autor_cargo: string | null;
  tecnologias_usadas: string[];
  timeline: string | null;
  slug: string | null;
}

const CaseDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [caseData, setCaseData] = useState<CaseDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCase();
  }, [id]);

  const fetchCase = async () => {
    if (!id) return;

    setLoading(true);
    
    // Verificar se é UUID (formato: 8-4-4-4-12 caracteres hexadecimais)
    const isUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id);
    
    let query = supabase
      .from('cases')
      .select('*')
      .eq('status', 'publicado');
    
    // Buscar por ID se for UUID, caso contrário buscar por slug
    if (isUUID) {
      query = query.eq('id', id);
    } else {
      query = query.eq('slug', id);
    }
    
    const { data, error } = await query.maybeSingle();

    if (error) {
      console.error('Error fetching case:', error);
    } else if (data) {
      // Garantir que resultados seja um array tipado corretamente
      const processedData = {
        ...data,
        resultados: (Array.isArray(data.resultados) ? data.resultados : []) as unknown as ResultadoMetrica[],
        tecnologias_usadas: Array.isArray(data.tecnologias_usadas) ? data.tecnologias_usadas : [],
      };
      setCaseData(processedData as CaseDetails);
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto max-w-4xl px-4 py-32">
          <Skeleton className="h-96 rounded-3xl" />
        </div>
        <Footer />
      </div>
    );
  }

  if (!caseData) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto max-w-4xl px-4 py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Case não encontrado</h1>
          <Link to="/cases">
            <Button variant="outline">Voltar para Cases</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Header do Case */}
      <section className="pt-32 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link to="/cases" className="inline-flex items-center gap-2 text-ba-blue-light hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Voltar para Cases
          </Link>

          <div className="space-y-6">
            <div className="flex items-center gap-4 flex-wrap">
              <Badge variant="outline" className="bg-white/10 border-white/20">
                {caseData.categoria}
              </Badge>
              {caseData.setor && (
                <Badge variant="outline" className="bg-ba-orange/20 border-ba-orange/40 text-ba-orange">
                  {caseData.setor}
                </Badge>
              )}
            </div>

            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-ba-blue-light via-white to-ba-blue-medium bg-clip-text text-transparent">
                {caseData.titulo}
              </span>
            </h1>

            <div className="mt-8">
              {caseData.cliente_logo_url ? (
                <img 
                  src={caseData.cliente_logo_url} 
                  alt={caseData.cliente_nome}
                  className="w-full max-h-96 object-cover rounded-2xl border border-white/10"
                />
              ) : (
                <p className="text-xl text-muted-foreground">{caseData.cliente_nome}</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contexto */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-black/90 backdrop-blur-sm border border-ba-blue-light/20 rounded-3xl p-8 md:p-12 space-y-12">
            {/* Desafio */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-ba-blue-light">O Desafio</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {caseData.desafio}
              </p>
            </div>

            {/* Solução */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-ba-blue-light">Nossa Solução</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {caseData.solucao}
              </p>
              
              {caseData.tecnologias_usadas && caseData.tecnologias_usadas.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-sm font-semibold mb-3 text-muted-foreground">Tecnologias Utilizadas</h3>
                  <div className="flex flex-wrap gap-2">
                    {caseData.tecnologias_usadas.map((tech, index) => (
                      <Badge key={index} variant="outline" className="bg-white/5 border-white/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Galeria de Criativos */}
            {caseData.slug === 'ftx-imoveis-lancamento-alto-padrao' && (
              <div>
                <h2 className="text-2xl font-bold mb-6 text-ba-blue-light">Criativos da Campanha</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <img 
                    src="/lovable-uploads/ftx-creative-1.png" 
                    alt="Criativo FTX - Riviera Home Club"
                    className="rounded-xl w-full h-auto border border-white/10"
                  />
                  <img 
                    src="/lovable-uploads/ftx-creative-2.png" 
                    alt="Criativo FTX - Localização Privilegiada"
                    className="rounded-xl w-full h-auto border border-white/10"
                  />
                  <img 
                    src="/lovable-uploads/ftx-creative-3.png" 
                    alt="Criativo FTX - Novas Experiências"
                    className="rounded-xl w-full h-auto border border-white/10"
                  />
                </div>
              </div>
            )}

            {/* Resultados */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-ba-blue-light">Resultados Alcançados</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {caseData.resultados.map((resultado, index) => (
                  <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                    <p className="text-3xl font-bold text-ba-orange mb-2">
                      {resultado.valor}
                    </p>
                    <p className="text-sm font-semibold mb-1">{resultado.metrica}</p>
                    <p className="text-xs text-muted-foreground">{resultado.descricao}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Depoimento */}
            {caseData.depoimento && (
              <div className="border-t border-white/10 pt-12">
                <div className="bg-gradient-to-br from-ba-blue-dark/30 to-transparent border border-ba-blue-light/20 rounded-2xl p-8">
                  <p className="text-lg italic mb-6 leading-relaxed">
                    "{caseData.depoimento}"
                  </p>
                  {caseData.depoimento_autor && (
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="font-semibold">{caseData.depoimento_autor}</p>
                        {caseData.depoimento_autor_cargo && (
                          <p className="text-sm text-muted-foreground">{caseData.depoimento_autor_cargo}</p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Quer resultados como este para seu negócio?
          </h2>
          <Link to="/consultoria">
            <Button size="lg" className="bg-ba-orange hover:bg-ba-orange/80 text-black font-semibold px-8 py-6 text-lg">
              Agende uma Consulta Gratuita
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseDetails;
