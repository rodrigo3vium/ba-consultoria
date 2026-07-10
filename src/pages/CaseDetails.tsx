import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { ArrowLeft } from 'lucide-react';
import PageLayout from '@/components/pb/PageLayout';
import Tag from '@/components/pb/Tag';
import { Accent, Eyebrow, Card, SAAS_BTN_PRIMARY, SAAS_BTN_GHOST } from '@/components/saas/ui';

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
          <Card className="p-8 animate-pulse">
            <div className="h-3 rounded-full bg-white/[0.06] w-32 mb-6" />
            <div className="h-12 rounded-lg bg-white/[0.06] w-3/4 mb-4" />
            <div className="h-4 rounded-full bg-white/[0.06] w-full mb-2" />
            <div className="h-4 rounded-full bg-white/[0.06] w-5/6" />
          </Card>
        </div>
      </PageLayout>
    );
  }

  if (!caseData) {
    return (
      <PageLayout trackingName="BA Consultoria - Case">
        <div className="max-w-4xl mx-auto px-4 py-24 text-center">
          <h1 className="font-extrabold text-saas-ink text-[clamp(28px,4vw,44px)] leading-[1.1] tracking-tight mb-6">
            Case não encontrado
          </h1>
          <Link
            to="/cases"
            onClick={() => window.scrollTo(0, 0)}
            className={SAAS_BTN_GHOST}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Voltar para Cases
          </Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout trackingName="BA Consultoria - Case">
      {/* Header do Case */}
      <section className="border-b border-white/[0.06] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/cases"
            onClick={() => window.scrollTo(0, 0)}
            className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-muted hover:text-saas-cyan transition-colors duration-200 mb-8 inline-flex items-center gap-2"
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
            <h1 className="font-extrabold text-saas-ink text-[clamp(30px,3.8vw,48px)] leading-[1.1] tracking-tight">
              {caseData.titulo}
            </h1>

            {/* Logo ou nome do cliente */}
            {caseData.cliente_logo_url ? (
              <div className="mt-8">
                <img
                  loading="lazy"
                  src={caseData.cliente_logo_url}
                  alt={caseData.cliente_nome}
                  className="w-full max-h-96 object-cover rounded-2xl border border-white/[0.09]"
                />
              </div>
            ) : (
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-saas-muted">
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
              <div className="mb-8">
                <Eyebrow>Resultados Alcançados</Eyebrow>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {caseData.resultados.map((resultado, index) => (
                  <div key={index} className="rounded-2xl border border-white/[0.09] bg-white/[0.02] p-6 text-center">
                    <p className="text-[clamp(26px,3vw,34px)] font-extrabold leading-none mb-3">
                      <Accent>{resultado.valor}</Accent>
                    </p>
                    <p className="text-sm font-semibold text-saas-ink mb-1">
                      {resultado.metrica}
                    </p>
                    <p className="text-saas-faint text-xs leading-relaxed">
                      {resultado.descricao}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Desafio */}
          <div className="border-t border-white/[0.06] pt-12">
            <div className="mb-6">
              <Eyebrow>O Desafio</Eyebrow>
            </div>
            <p className="text-saas-body text-lg leading-relaxed">
              {caseData.desafio}
            </p>
          </div>

          {/* Solução */}
          <div className="border-t border-white/[0.06] pt-12">
            <div className="mb-6">
              <Eyebrow>Nossa Solução</Eyebrow>
            </div>
            <p className="text-saas-body text-lg leading-relaxed">
              {caseData.solucao}
            </p>

            {caseData.tecnologias_usadas && caseData.tecnologias_usadas.length > 0 && (
              <div className="mt-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-muted mb-3">
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
            <div className="border-t border-white/[0.06] pt-12">
              <div className="mb-6">
                <Eyebrow>Criativos da Campanha</Eyebrow>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <img loading="lazy"
                  src="/lovable-uploads/ftx-creative-1.png"
                  alt="Criativo FTX - Riviera Home Club"
                  className="w-full h-auto rounded-xl border border-white/[0.09]"
                />
                <img loading="lazy"
                  src="/lovable-uploads/ftx-creative-2.png"
                  alt="Criativo FTX - Localização Privilegiada"
                  className="w-full h-auto rounded-xl border border-white/[0.09]"
                />
                <img loading="lazy"
                  src="/lovable-uploads/ftx-creative-3.png"
                  alt="Criativo FTX - Novas Experiências"
                  className="w-full h-auto rounded-xl border border-white/[0.09]"
                />
              </div>
            </div>
          )}

          {/* Galeria de Criativos — Puma */}
          {caseData.slug === 'puma-tactical-newsletter' && (
            <div className="border-t border-white/[0.06] pt-12">
              <div className="mb-6">
                <Eyebrow>Exemplos da Newsletter</Eyebrow>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <img loading="lazy"
                  src="/lovable-uploads/puma-creative-1.png"
                  alt="Newsletter Puma - Benefícios do Tiro Esportivo"
                  className="w-full h-auto rounded-xl border border-white/[0.09]"
                />
                <img loading="lazy"
                  src="/lovable-uploads/puma-creative-2.png"
                  alt="Newsletter Puma - Legítima Defesa"
                  className="w-full h-auto rounded-xl border border-white/[0.09]"
                />
                <img loading="lazy"
                  src="/lovable-uploads/puma-creative-3.png"
                  alt="Newsletter Puma - Aniversário"
                  className="w-full h-auto rounded-xl border border-white/[0.09]"
                />
                <img loading="lazy"
                  src="/lovable-uploads/puma-creative-4.png"
                  alt="Newsletter Puma - Arsenal de Defesa"
                  className="w-full h-auto rounded-xl border border-white/[0.09]"
                />
              </div>
            </div>
          )}

          {/* Galeria de Criativos — Quintal do Betione */}
          {caseData.slug === 'quintal-betione-instagram' && (
            <div className="border-t border-white/[0.06] pt-12">
              <div className="mb-6">
                <Eyebrow>Posts do Instagram</Eyebrow>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <img loading="lazy"
                  src="/lovable-uploads/quintal-creative-1.png"
                  alt="Post Instagram - Seu cantinho para relaxar em Bodoquena"
                  className="w-full h-auto rounded-xl border border-white/[0.09]"
                />
                <img loading="lazy"
                  src="/lovable-uploads/quintal-creative-2.png"
                  alt="Post Instagram - Comemore seu evento conosco"
                  className="w-full h-auto rounded-xl border border-white/[0.09]"
                />
                <img loading="lazy"
                  src="/lovable-uploads/quintal-creative-3.png"
                  alt="Post Instagram - Você em contato com a natureza"
                  className="w-full h-auto rounded-xl border border-white/[0.09]"
                />
              </div>
            </div>
          )}

          {/* Processo Criativo — Instituto MJR */}
          {caseData.slug === 'instituto-mjr-branding' && (
            <div className="border-t border-white/[0.06] pt-12 space-y-8">
              <div className="mb-6">
                <Eyebrow>Processo Criativo</Eyebrow>
              </div>
              <p className="text-saas-body text-lg leading-relaxed">
                O primeiro passo foi fazer o processo criativo e rascunhos à mão.
              </p>
              <img loading="lazy"
                src="/lovable-uploads/mjr-sketch.png"
                alt="Instituto MJR - Rascunhos do processo criativo da logo"
                className="w-full h-auto rounded-2xl border border-white/[0.09]"
              />
              <p className="text-saas-body text-lg leading-relaxed">
                Com as ideias aparecendo, definimos o modelo ideal e passamos para o computador para finalização.
              </p>
              <img loading="lazy"
                src="/lovable-uploads/mjr-grid.png"
                alt="Instituto MJR - Grid de construção da logo"
                className="w-full h-auto rounded-2xl border border-white/[0.09]"
              />
              <p className="text-saas-body text-lg leading-relaxed">
                Remodelamos a logo mantendo a semelhança de forma tradicional e elegante.
              </p>
              <img loading="lazy"
                src="/lovable-uploads/mjr-symbol.png"
                alt="Instituto MJR - Símbolo final com as letras M, J e R"
                className="w-full h-auto rounded-2xl border border-white/[0.09]"
              />
              <p className="text-saas-body text-lg leading-relaxed">
                As cores foram escolhidas com base paleta outono profundo.
              </p>
              <p className="text-saas-body text-lg leading-relaxed">
                A ideia é trazer os tons de azul como a cor principal e trabalhar com as outras cores como complementares.
              </p>
              <p className="text-saas-body text-lg leading-relaxed">
                A função desta paleta é auxiliar e transmitir confiança, lealdade, segurança e respeito.
              </p>
              <img loading="lazy"
                src="/lovable-uploads/mjr-colors.png"
                alt="Instituto MJR - Paleta de cores baseada no outono profundo"
                className="w-full h-auto rounded-2xl border border-white/[0.09]"
              />
              <p className="text-saas-body text-lg leading-relaxed">
                A tipografia expressa a personalidade do conteúdo e do expert, e pensando nisso foi escolhida uma fonte que contém características amigáveis sem perder a sofisticação e o tom moderno.
              </p>
              <p className="text-saas-body text-lg leading-relaxed">
                A escolha por uma fonte sem serifa e reta, também balizada pela diferenciação do nicho. Já que a maior parte dos perfis concorrentes utilizam de fontes serifadas.
              </p>
              <img loading="lazy"
                src="/lovable-uploads/mjr-typography.png"
                alt="Instituto MJR - Tipografia Montserrat"
                className="w-full h-auto rounded-2xl border border-white/[0.09]"
              />
            </div>
          )}

          {/* Galeria de Aplicações — Instituto MJR */}
          {caseData.slug === 'instituto-mjr-branding' && (
            <div className="border-t border-white/[0.06] pt-12">
              <div className="mb-6">
                <Eyebrow>Aplicações da Identidade Visual</Eyebrow>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <img loading="lazy"
                  src="/lovable-uploads/mjr-creative-1.png"
                  alt="Instituto MJR - Posts Instagram sobre saúde"
                  className="w-full h-auto rounded-xl border border-white/[0.09]"
                />
                <img loading="lazy"
                  src="/lovable-uploads/mjr-creative-2.png"
                  alt="Instituto MJR - Exemplos de aplicação em posts educativos"
                  className="w-full h-auto rounded-xl border border-white/[0.09]"
                />
                <img loading="lazy"
                  src="/lovable-uploads/mjr-creative-3.png"
                  alt="Instituto MJR - Papelaria institucional"
                  className="w-full h-auto rounded-xl border border-white/[0.09]"
                />
                <img loading="lazy"
                  src="/lovable-uploads/mjr-creative-4.png"
                  alt="Instituto MJR - Aplicação em canecas"
                  className="w-full h-auto rounded-xl border border-white/[0.09]"
                />
              </div>
              <div className="mt-4">
                <img loading="lazy"
                  src="/lovable-uploads/mjr-creative-5.png"
                  alt="Instituto MJR - Aplicação em caneta"
                  className="w-full h-auto rounded-xl border border-white/[0.09]"
                />
              </div>
            </div>
          )}

          {/* Depoimento */}
          {caseData.depoimento && (
            <div className="border-t border-white/[0.06] pt-12">
              <div className="mb-8">
                <Eyebrow>Depoimento</Eyebrow>
              </div>
              <Card className="p-8 md:p-10">
                <p className="text-saas-body text-lg leading-relaxed italic mb-6">
                  "{caseData.depoimento}"
                </p>
                {caseData.depoimento_autor && (
                  <div>
                    <p className="text-sm font-semibold text-saas-ink">
                      {caseData.depoimento_autor}
                    </p>
                    {caseData.depoimento_autor_cargo && (
                      <p className="text-xs text-saas-muted mt-1">
                        {caseData.depoimento_autor_cargo}
                      </p>
                    )}
                  </div>
                )}
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* CTA Final */}
      <section className="border-t border-white/[0.06] py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-extrabold text-saas-ink text-[clamp(26px,3.4vw,42px)] leading-[1.12] tracking-tight mb-8">
            Quer <Accent>resultados como este</Accent> para seu negócio?
          </h2>
          <Link
            to="/consultoria"
            onClick={() => window.scrollTo(0, 0)}
            className={SAAS_BTN_PRIMARY}
          >
            Agende uma Consulta Gratuita
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default CaseDetails;
