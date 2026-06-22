import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { ArrowLeft } from 'lucide-react';
import PageLayout from '@/components/pb/PageLayout';
import Tag from '@/components/pb/Tag';

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
      <PageLayout trackingName="BA Consultoria - Case">
        <div className="max-w-4xl mx-auto px-4 py-24">
          <div className="grid grid-cols-1 gap-px bg-pb-grid-strong border border-pb-grid-strong animate-pulse">
            <div className="bg-pb-void p-8">
              <div className="h-3 bg-pb-void-elev w-32 mb-6" />
              <div className="h-12 bg-pb-void-elev w-3/4 mb-4" />
              <div className="h-4 bg-pb-void-elev w-full mb-2" />
              <div className="h-4 bg-pb-void-elev w-5/6" />
            </div>
          </div>
        </div>
      </PageLayout>
    );
  }

  if (!caseData) {
    return (
      <PageLayout trackingName="BA Consultoria - Case">
        <div className="max-w-4xl mx-auto px-4 py-24 text-center">
          <h1 className="font-display uppercase text-pb-ink text-[clamp(32px,4vw,56px)] leading-[0.95] mb-6">
            Case não encontrado
          </h1>
          <Link
            to="/cases"
            onClick={() => window.scrollTo(0, 0)}
            className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan border border-pb-cyan px-4 py-2 hover:bg-pb-cyan/10 transition-colors duration-200 inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-3 h-3" />
            Voltar para Cases
          </Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout trackingName="BA Consultoria - Case">
      {/* Header do Case */}
      <section className="border-b border-pb-grid-strong py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/cases"
            onClick={() => window.scrollTo(0, 0)}
            className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted hover:text-pb-cyan transition-colors duration-200 mb-8 inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-3 h-3" />
            Voltar para Cases
          </Link>

          <div className="mt-8 space-y-6">
            {/* Tags de categoria e setor */}
            <div className="flex items-center gap-3 flex-wrap">
              <Tag variant="cyan">{caseData.categoria}</Tag>
              {caseData.setor && (
                <Tag variant="default">{caseData.setor}</Tag>
              )}
            </div>

            {/* Título */}
            <h1 className="font-display uppercase text-pb-ink text-[clamp(36px,4vw,64px)] leading-[0.92]">
              {caseData.titulo}
            </h1>

            {/* Logo ou nome do cliente */}
            {caseData.cliente_logo_url ? (
              <div className="mt-8">
                <img
                  loading="lazy"
                  src={caseData.cliente_logo_url}
                  alt={caseData.cliente_nome}
                  className="w-full max-h-96 object-cover border border-pb-grid-strong"
                  style={{ filter: 'grayscale(30%)' }}
                />
              </div>
            ) : (
              <p className="font-mono text-[11px] uppercase tracking-mono-wide text-pb-ink-muted">
                {caseData.cliente_nome}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Conteúdo do Case */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Resultados */}
          {caseData.resultados.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-8 font-mono text-[11px] uppercase tracking-mono-wide">
                <span className="text-pb-cyan">01</span>
                <span className="h-px w-12 bg-pb-grid-strong" />
                <span className="text-pb-ink-muted">Resultados Alcançados</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-pb-grid-strong border border-pb-grid-strong">
                {caseData.resultados.map((resultado, index) => (
                  <div key={index} className="bg-pb-void-card p-6 text-center">
                    <p className="font-display text-3xl text-pb-cyan mb-2">
                      {resultado.valor}
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink mb-1">
                      {resultado.metrica}
                    </p>
                    <p className="font-body text-pb-ink-soft text-xs leading-relaxed">
                      {resultado.descricao}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Desafio */}
          <div className="border-t border-pb-grid-strong pt-12">
            <div className="flex items-center gap-3 mb-6 font-mono text-[11px] uppercase tracking-mono-wide">
              <span className="text-pb-cyan">02</span>
              <span className="h-px w-12 bg-pb-grid-strong" />
              <span className="text-pb-ink-muted">O Desafio</span>
            </div>
            <p className="font-body text-pb-ink-soft text-lg leading-relaxed">
              {caseData.desafio}
            </p>
          </div>

          {/* Solução */}
          <div className="border-t border-pb-grid-strong pt-12">
            <div className="flex items-center gap-3 mb-6 font-mono text-[11px] uppercase tracking-mono-wide">
              <span className="text-pb-cyan">03</span>
              <span className="h-px w-12 bg-pb-grid-strong" />
              <span className="text-pb-ink-muted">Nossa Solução</span>
            </div>
            <p className="font-body text-pb-ink-soft text-lg leading-relaxed">
              {caseData.solucao}
            </p>

            {caseData.tecnologias_usadas && caseData.tecnologias_usadas.length > 0 && (
              <div className="mt-6">
                <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted mb-3">
                  Tecnologias Utilizadas
                </p>
                <div className="flex flex-wrap gap-2">
                  {caseData.tecnologias_usadas.map((tech, index) => (
                    <Tag key={index} variant="default">{tech}</Tag>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Galeria de Criativos — FTX */}
          {caseData.slug === 'ftx-imoveis-lancamento-alto-padrao' && (
            <div className="border-t border-pb-grid-strong pt-12">
              <div className="flex items-center gap-3 mb-6 font-mono text-[11px] uppercase tracking-mono-wide">
                <span className="text-pb-cyan">04</span>
                <span className="h-px w-12 bg-pb-grid-strong" />
                <span className="text-pb-ink-muted">Criativos da Campanha</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-pb-grid-strong border border-pb-grid-strong">
                <img loading="lazy"
                  src="/lovable-uploads/ftx-creative-1.png"
                  alt="Criativo FTX - Riviera Home Club"
                  className="w-full h-auto"
                  style={{ filter: 'grayscale(30%)' }}
                />
                <img loading="lazy"
                  src="/lovable-uploads/ftx-creative-2.png"
                  alt="Criativo FTX - Localização Privilegiada"
                  className="w-full h-auto"
                  style={{ filter: 'grayscale(30%)' }}
                />
                <img loading="lazy"
                  src="/lovable-uploads/ftx-creative-3.png"
                  alt="Criativo FTX - Novas Experiências"
                  className="w-full h-auto"
                  style={{ filter: 'grayscale(30%)' }}
                />
              </div>
            </div>
          )}

          {/* Galeria de Criativos — Puma */}
          {caseData.slug === 'puma-tactical-newsletter' && (
            <div className="border-t border-pb-grid-strong pt-12">
              <div className="flex items-center gap-3 mb-6 font-mono text-[11px] uppercase tracking-mono-wide">
                <span className="text-pb-cyan">04</span>
                <span className="h-px w-12 bg-pb-grid-strong" />
                <span className="text-pb-ink-muted">Exemplos da Newsletter</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-pb-grid-strong border border-pb-grid-strong">
                <img loading="lazy"
                  src="/lovable-uploads/puma-creative-1.png"
                  alt="Newsletter Puma - Benefícios do Tiro Esportivo"
                  className="w-full h-auto"
                  style={{ filter: 'grayscale(30%)' }}
                />
                <img loading="lazy"
                  src="/lovable-uploads/puma-creative-2.png"
                  alt="Newsletter Puma - Legítima Defesa"
                  className="w-full h-auto"
                  style={{ filter: 'grayscale(30%)' }}
                />
                <img loading="lazy"
                  src="/lovable-uploads/puma-creative-3.png"
                  alt="Newsletter Puma - Aniversário"
                  className="w-full h-auto"
                  style={{ filter: 'grayscale(30%)' }}
                />
                <img loading="lazy"
                  src="/lovable-uploads/puma-creative-4.png"
                  alt="Newsletter Puma - Arsenal de Defesa"
                  className="w-full h-auto"
                  style={{ filter: 'grayscale(30%)' }}
                />
              </div>
            </div>
          )}

          {/* Galeria de Criativos — Quintal do Betione */}
          {caseData.slug === 'quintal-betione-instagram' && (
            <div className="border-t border-pb-grid-strong pt-12">
              <div className="flex items-center gap-3 mb-6 font-mono text-[11px] uppercase tracking-mono-wide">
                <span className="text-pb-cyan">04</span>
                <span className="h-px w-12 bg-pb-grid-strong" />
                <span className="text-pb-ink-muted">Posts do Instagram</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-pb-grid-strong border border-pb-grid-strong">
                <img loading="lazy"
                  src="/lovable-uploads/quintal-creative-1.png"
                  alt="Post Instagram - Seu cantinho para relaxar em Bodoquena"
                  className="w-full h-auto"
                  style={{ filter: 'grayscale(30%)' }}
                />
                <img loading="lazy"
                  src="/lovable-uploads/quintal-creative-2.png"
                  alt="Post Instagram - Comemore seu evento conosco"
                  className="w-full h-auto"
                  style={{ filter: 'grayscale(30%)' }}
                />
                <img loading="lazy"
                  src="/lovable-uploads/quintal-creative-3.png"
                  alt="Post Instagram - Você em contato com a natureza"
                  className="w-full h-auto"
                  style={{ filter: 'grayscale(30%)' }}
                />
              </div>
            </div>
          )}

          {/* Processo Criativo — Instituto MJR */}
          {caseData.slug === 'instituto-mjr-branding' && (
            <div className="border-t border-pb-grid-strong pt-12 space-y-8">
              <div className="flex items-center gap-3 mb-6 font-mono text-[11px] uppercase tracking-mono-wide">
                <span className="text-pb-cyan">04</span>
                <span className="h-px w-12 bg-pb-grid-strong" />
                <span className="text-pb-ink-muted">Processo Criativo</span>
              </div>
              <p className="font-body text-pb-ink-soft text-lg leading-relaxed">
                O primeiro passo foi fazer o processo criativo e rascunhos à mão.
              </p>
              <img loading="lazy"
                src="/lovable-uploads/mjr-sketch.png"
                alt="Instituto MJR - Rascunhos do processo criativo da logo"
                className="w-full h-auto border border-pb-grid-strong"
                style={{ filter: 'grayscale(30%)' }}
              />
              <p className="font-body text-pb-ink-soft text-lg leading-relaxed">
                Com as ideias aparecendo, definimos o modelo ideal e passamos para o computador para finalização.
              </p>
              <img loading="lazy"
                src="/lovable-uploads/mjr-grid.png"
                alt="Instituto MJR - Grid de construção da logo"
                className="w-full h-auto border border-pb-grid-strong"
                style={{ filter: 'grayscale(30%)' }}
              />
              <p className="font-body text-pb-ink-soft text-lg leading-relaxed">
                Remodelamos a logo mantendo a semelhança de forma tradicional e elegante.
              </p>
              <img loading="lazy"
                src="/lovable-uploads/mjr-symbol.png"
                alt="Instituto MJR - Símbolo final com as letras M, J e R"
                className="w-full h-auto border border-pb-grid-strong"
                style={{ filter: 'grayscale(30%)' }}
              />
              <p className="font-body text-pb-ink-soft text-lg leading-relaxed">
                As cores foram escolhidas com base paleta outono profundo.
              </p>
              <p className="font-body text-pb-ink-soft text-lg leading-relaxed">
                A ideia é trazer os tons de azul como a cor principal e trabalhar com as outras cores como complementares.
              </p>
              <p className="font-body text-pb-ink-soft text-lg leading-relaxed">
                A função desta paleta é auxiliar e transmitir confiança, lealdade, segurança e respeito.
              </p>
              <img loading="lazy"
                src="/lovable-uploads/mjr-colors.png"
                alt="Instituto MJR - Paleta de cores baseada no outono profundo"
                className="w-full h-auto border border-pb-grid-strong"
                style={{ filter: 'grayscale(30%)' }}
              />
              <p className="font-body text-pb-ink-soft text-lg leading-relaxed">
                A tipografia expressa a personalidade do conteúdo e do expert, e pensando nisso foi escolhida uma fonte que contém características amigáveis sem perder a sofisticação e o tom moderno.
              </p>
              <p className="font-body text-pb-ink-soft text-lg leading-relaxed">
                A escolha por uma fonte sem serifa e reta, também balizada pela diferenciação do nicho. Já que a maior parte dos perfis concorrentes utilizam de fontes serifadas.
              </p>
              <img loading="lazy"
                src="/lovable-uploads/mjr-typography.png"
                alt="Instituto MJR - Tipografia Montserrat"
                className="w-full h-auto border border-pb-grid-strong"
                style={{ filter: 'grayscale(30%)' }}
              />
            </div>
          )}

          {/* Galeria de Aplicações — Instituto MJR */}
          {caseData.slug === 'instituto-mjr-branding' && (
            <div className="border-t border-pb-grid-strong pt-12">
              <div className="flex items-center gap-3 mb-6 font-mono text-[11px] uppercase tracking-mono-wide">
                <span className="text-pb-cyan">05</span>
                <span className="h-px w-12 bg-pb-grid-strong" />
                <span className="text-pb-ink-muted">Aplicações da Identidade Visual</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-pb-grid-strong border border-pb-grid-strong">
                <img loading="lazy"
                  src="/lovable-uploads/mjr-creative-1.png"
                  alt="Instituto MJR - Posts Instagram sobre saúde"
                  className="w-full h-auto"
                  style={{ filter: 'grayscale(30%)' }}
                />
                <img loading="lazy"
                  src="/lovable-uploads/mjr-creative-2.png"
                  alt="Instituto MJR - Exemplos de aplicação em posts educativos"
                  className="w-full h-auto"
                  style={{ filter: 'grayscale(30%)' }}
                />
                <img loading="lazy"
                  src="/lovable-uploads/mjr-creative-3.png"
                  alt="Instituto MJR - Papelaria institucional"
                  className="w-full h-auto"
                  style={{ filter: 'grayscale(30%)' }}
                />
                <img loading="lazy"
                  src="/lovable-uploads/mjr-creative-4.png"
                  alt="Instituto MJR - Aplicação em canecas"
                  className="w-full h-auto"
                  style={{ filter: 'grayscale(30%)' }}
                />
              </div>
              <div className="mt-px bg-pb-grid-strong">
                <img loading="lazy"
                  src="/lovable-uploads/mjr-creative-5.png"
                  alt="Instituto MJR - Aplicação em caneta"
                  className="w-full h-auto"
                  style={{ filter: 'grayscale(30%)' }}
                />
              </div>
            </div>
          )}

          {/* Depoimento */}
          {caseData.depoimento && (
            <div className="border-t border-pb-grid-strong pt-12">
              <div className="flex items-center gap-3 mb-8 font-mono text-[11px] uppercase tracking-mono-wide">
                <span className="text-pb-cyan">—</span>
                <span className="h-px w-12 bg-pb-grid-strong" />
                <span className="text-pb-ink-muted">Depoimento</span>
              </div>
              <div className="bg-pb-void-card border border-pb-grid-strong p-8 md:p-10">
                <p className="font-body text-pb-ink-soft text-lg leading-relaxed italic mb-6">
                  "{caseData.depoimento}"
                </p>
                {caseData.depoimento_autor && (
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-mono-wide text-pb-ink">
                      {caseData.depoimento_autor}
                    </p>
                    {caseData.depoimento_autor_cargo && (
                      <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted mt-1">
                        {caseData.depoimento_autor_cargo}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Final */}
      <section className="border-t border-pb-grid-strong py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display uppercase text-pb-ink text-[clamp(28px,3vw,48px)] leading-[0.95] mb-8">
            Quer resultados como este para seu negócio?
          </h2>
          <Link
            to="/consultoria"
            onClick={() => window.scrollTo(0, 0)}
            className="font-mono text-[11px] uppercase tracking-mono-wide text-pb-cyan border border-pb-cyan px-8 py-4 hover:bg-pb-cyan/10 transition-colors duration-200 inline-block"
          >
            Agende uma Consulta Gratuita
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default CaseDetails;
