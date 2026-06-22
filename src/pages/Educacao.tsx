import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import PageLayout from '@/components/pb/PageLayout';
import Section from '@/components/pb/Section';
import StratCard from '@/components/pb/StratCard';
import Stamp from '@/components/pb/Stamp';
import CornerBrackets from '@/components/pb/CornerBrackets';
import { tracker } from '@/lib/tracking';

const WHATSAPP_URL = 'https://wa.me/5511999718595';

const courses = [
  {
    title: 'IA do Zero',
    subtitle: 'Curso básico de IA Generativa',
    price: 'R$ 49',
    stamp: 'Disponível',
    description:
      'Aprenda os fundamentos da Inteligência Artificial Generativa de forma prática e acessível.',
    features: [
      'Introdução às ferramentas de IA',
      'Prompts eficazes para melhores resultados',
      'Aplicações práticas no dia a dia',
      'Certificado de conclusão',
      'Acesso vitalício ao conteúdo',
    ],
    buttonText: 'Ver Mais',
    link: '/educacao/ia-do-zero',
    external: false,
  },
  {
    title: 'IA para Negócios',
    subtitle: 'Programa premium de 12 semanas',
    price: 'Disponível',
    stamp: 'Disponível',
    description:
      'Programa prático para implementar IA que aumenta lucro e produtividade em ≤ 90 dias.',
    features: [
      '81 horas + mentoria especializada',
      '2 trilhos: Estratégico + Operacional',
      'ROI real em 90 dias',
      'Automações em produção',
      'Certificação oficial inclusa',
    ],
    buttonText: 'Ver Programa Completo',
    link: '/educacao/ia-para-negocios',
    external: false,
  },
  {
    title: 'Treinamentos para Empresas',
    subtitle: 'Contrate um treinamento personalizado para a sua empresa',
    price: 'Sob demanda',
    stamp: 'Personalizado',
    description:
      'Treinamento exclusivo e personalizado para capacitar sua equipe em IA aplicada ao seu negócio.',
    features: [
      'Conteúdo personalizado para sua empresa',
      'Treinamento presencial ou remoto',
      'Acompanhamento pós-treinamento',
      'Material didático exclusivo',
      'Suporte técnico especializado',
    ],
    buttonText: 'Solicitar Orçamento',
    link: WHATSAPP_URL,
    external: true,
  },
];

const benefits = [
  {
    idx: '01',
    title: 'Conteúdo Prático',
    description:
      'Aprenda com projetos reais e casos de uso aplicáveis ao mercado de trabalho.',
  },
  {
    idx: '02',
    title: 'Flexibilidade Total',
    description:
      'Estude no seu ritmo, quando e onde quiser, com acesso vitalício ao conteúdo.',
  },
  {
    idx: '03',
    title: 'Suporte Especializado',
    description:
      'Tire dúvidas com especialistas e participe de uma comunidade ativa.',
  },
];

const Educacao = () => {
  const handleCta = (location: string) => {
    tracker.track('cta_click', { product: 'educacao', location });
  };

  return (
    <PageLayout trackingName="BA Consultoria - Educação">

      {/* ================================================================
          HERO
      ================================================================ */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 md:py-32 border-b border-pb-grid-strong overflow-hidden">
        <CornerBrackets size={32} offset={24} />

        {/* HUD coordinates */}
        <div className="absolute top-8 right-8 font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-faint hidden md:flex flex-col items-end gap-1">
          <span><span className="text-pb-ink-faint mr-3">FILE</span><span className="text-pb-ink-soft">EDU-01</span></span>
          <span><span className="text-pb-ink-faint mr-3">BUILD</span><span className="text-pb-ink-soft">2026.05</span></span>
          <span><span className="text-pb-ink-faint mr-3">ESTADO</span><span className="text-pb-cyan">OPERACIONAL</span></span>
        </div>

        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-[11px] uppercase tracking-mono-wide text-pb-cyan mb-6">
            // 01 / Educação
          </p>
          <h1
            className="font-display uppercase text-pb-ink leading-[0.88]"
            style={{ fontSize: 'clamp(56px, 9vw, 128px)', letterSpacing: '0.005em' }}
          >
            Aprenda<br />
            Inteligência<br />
            <span className="text-pb-ink-soft">Artificial</span>
            <span className="text-pb-red">.</span>
          </h1>

          <p className="mt-8 font-body text-pb-ink-soft text-lg md:text-xl leading-relaxed max-w-xl">
            Cursos práticos e treinamentos personalizados para dominar a IA.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              onClick={() => handleCta('hero')}
            >
              Falar com um especialista
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ================================================================
          02 — CURSOS
      ================================================================ */}
      <Section
        idx="02"
        section="CURSOS"
        headline={<>Nossos<br />cursos<span className="text-pb-red">.</span></>}
        sub="Escolha o curso ideal para seu nível e objetivos."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-pb-grid-strong border border-pb-grid-strong mt-2">
          {courses.map((course) => (
            <StratCard key={course.title} brackets as="article" className="flex flex-col">
              <Stamp>{course.stamp}</Stamp>

              <h3 className="font-display uppercase text-pb-ink text-3xl mt-4 leading-[0.95]">
                {course.title}
              </h3>
              <p className="font-mono text-[11px] uppercase tracking-mono-wide text-pb-ink-muted mt-2">
                {course.subtitle}
              </p>

              <p className="font-display uppercase text-pb-cyan mt-4 text-2xl leading-none">
                {course.price}
              </p>

              <p className="font-body text-pb-ink-soft text-sm leading-relaxed mt-4">
                {course.description}
              </p>

              <ul className="mt-6 space-y-3 flex-1">
                {course.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <CheckCircle
                      size={14}
                      className="text-pb-cyan mt-0.5 flex-shrink-0"
                      strokeWidth={1.5}
                    />
                    <span className="font-body text-pb-ink-soft text-sm leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                {course.external ? (
                  <a
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost w-full text-center"
                    onClick={() => handleCta(`course_${course.title}`)}
                  >
                    {course.buttonText} <span aria-hidden>→</span>
                  </a>
                ) : (
                  <Link
                    to={course.link}
                    className="btn-primary w-full text-center"
                    onClick={() => {
                      window.scrollTo(0, 0);
                      handleCta(`course_${course.title}`);
                    }}
                  >
                    {course.buttonText} <span aria-hidden>→</span>
                  </Link>
                )}
              </div>
            </StratCard>
          ))}
        </div>
      </Section>

      {/* ================================================================
          03 — POR QUE ESCOLHER
      ================================================================ */}
      <Section
        idx="03"
        section="DIFERENCIAIS"
        headline={<>Por que escolher<br />nossos cursos<span className="text-pb-red">?</span></>}
      >
        <div className="grid md:grid-cols-3 gap-px bg-pb-grid-strong border border-pb-grid-strong mt-2">
          {benefits.map((benefit) => (
            <div
              key={benefit.idx}
              className="bg-pb-void p-8 flex flex-col gap-4 hover:bg-pb-void-card transition-colors duration-300"
            >
              <span className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-faint">
                // {benefit.idx}
              </span>
              <h3 className="font-display uppercase text-pb-ink text-2xl leading-[0.95]">
                {benefit.title}
              </h3>
              <p className="font-body text-pb-ink-soft text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ================================================================
          04 — CTA FINAL
      ================================================================ */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-pb-grid-strong relative overflow-hidden">
        <CornerBrackets size={40} offset={32} />

        <div className="max-w-7xl mx-auto text-center">
          <p className="font-mono text-[11px] uppercase tracking-mono-wide text-pb-cyan mb-8">
            // Próxima operação
          </p>
          <h2
            className="font-display uppercase text-pb-ink leading-[0.88] mx-auto"
            style={{ fontSize: 'clamp(40px, 6vw, 80px)', maxWidth: '800px' }}
          >
            Comece sua jornada<br />
            na IA<br />
            <span className="text-pb-ink-soft">hoje</span>
            <span className="text-pb-red">.</span>
          </h2>
          <p className="mt-8 font-body text-pb-ink-soft text-lg max-w-xl mx-auto leading-relaxed">
            Não fique para trás na revolução da Inteligência Artificial. Invista no seu futuro profissional agora.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              onClick={() => handleCta('cta_final')}
            >
              Falar com um consultor
              <span aria-hidden>→</span>
            </a>
            <Link
              to="/educacao/ia-para-negocios"
              className="btn-ghost"
              onClick={() => window.scrollTo(0, 0)}
            >
              Ver IA para Negócios
            </Link>
          </div>
        </div>
      </section>

    </PageLayout>
  );
};

export default Educacao;
