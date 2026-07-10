import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import PageLayout from '@/components/pb/PageLayout';
import Section from '@/components/pb/Section';
import StratCard from '@/components/pb/StratCard';
import Stamp from '@/components/pb/Stamp';
import {
  Accent,
  Eyebrow,
  SAAS_BTN_PRIMARY,
  SAAS_BTN_GHOST,
  SAAS_GRADIENT_TEXT,
} from '@/components/saas/ui';
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
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 md:py-32 border-b border-white/[0.06] overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full bg-saas-violet/20 blur-[110px]" />
          <div className="absolute -top-10 right-0 w-[520px] h-[420px] rounded-full bg-saas-cyan/15 blur-[110px]" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="mb-6">
            <Eyebrow>01 / Educação</Eyebrow>
          </div>
          <h1 className="font-extrabold text-saas-ink text-[clamp(32px,6vw,64px)] leading-[1.05] tracking-tight max-w-[16ch]">
            Aprenda Inteligência <Accent>Artificial</Accent>.
          </h1>

          <p className="mt-8 text-saas-body text-lg md:text-xl leading-relaxed max-w-xl">
            Cursos práticos e treinamentos personalizados para dominar a IA.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={SAAS_BTN_PRIMARY}
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
        headline={<>Nossos <Accent>cursos</Accent>.</>}
        sub="Escolha o curso ideal para seu nível e objetivos."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-2">
          {courses.map((course) => (
            <StratCard key={course.title} as="article" className="flex flex-col">
              <div className="mb-1">
                <Stamp>{course.stamp}</Stamp>
              </div>

              <h3 className="font-extrabold text-saas-ink text-2xl mt-4 leading-tight tracking-tight">
                {course.title}
              </h3>
              <p className="text-saas-muted text-sm leading-relaxed mt-2">
                {course.subtitle}
              </p>

              <p className={`${SAAS_GRADIENT_TEXT} font-extrabold mt-4 text-2xl leading-none`}>
                {course.price}
              </p>

              <p className="text-saas-body text-sm leading-relaxed mt-4">
                {course.description}
              </p>

              <ul className="mt-6 space-y-3 flex-1">
                {course.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <CheckCircle
                      size={14}
                      className="text-saas-green mt-0.5 flex-shrink-0"
                      strokeWidth={1.5}
                    />
                    <span className="text-saas-body text-sm leading-relaxed">
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
                    className={`${SAAS_BTN_GHOST} w-full`}
                    onClick={() => handleCta(`course_${course.title}`)}
                  >
                    {course.buttonText} <span aria-hidden>→</span>
                  </a>
                ) : (
                  <Link
                    to={course.link}
                    className={`${SAAS_BTN_PRIMARY} w-full`}
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
        headline={<>Por que escolher nossos <Accent>cursos</Accent>?</>}
      >
        <div className="grid md:grid-cols-3 gap-5 mt-2">
          {benefits.map((benefit) => (
            <div
              key={benefit.idx}
              className="rounded-2xl border border-white/[0.09] bg-saas-card p-8 flex flex-col gap-4 transition-colors duration-300 hover:border-white/[0.18]"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-saas-cyan">
                {benefit.idx}
              </span>
              <h3 className="font-extrabold text-saas-ink text-xl leading-tight tracking-tight">
                {benefit.title}
              </h3>
              <p className="text-saas-body text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ================================================================
          04 — CTA FINAL
      ================================================================ */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[620px] h-[420px] rounded-full bg-saas-violet/15 blur-[130px]" />
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <Eyebrow>Próxima operação</Eyebrow>
          </div>
          <h2 className="font-extrabold text-saas-ink text-[clamp(30px,5vw,56px)] leading-[1.08] tracking-tight mx-auto max-w-[16ch]">
            Comece sua jornada na IA <Accent>hoje</Accent>.
          </h2>
          <p className="mt-8 text-saas-body text-lg max-w-xl mx-auto leading-relaxed">
            Não fique para trás na revolução da Inteligência Artificial. Invista no seu futuro profissional agora.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={SAAS_BTN_PRIMARY}
              onClick={() => handleCta('cta_final')}
            >
              Falar com um consultor
              <span aria-hidden>→</span>
            </a>
            <Link
              to="/educacao/ia-para-negocios"
              className={SAAS_BTN_GHOST}
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
