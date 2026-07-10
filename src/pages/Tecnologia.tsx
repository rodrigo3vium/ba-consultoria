import { tracker } from '@/lib/tracking';
import { Check } from 'lucide-react';
import PageLayout from '@/components/pb/PageLayout';
import Section from '@/components/pb/Section';
import StratCard from '@/components/pb/StratCard';
import Tag from '@/components/pb/Tag';
import { Accent, Eyebrow, SAAS_BTN_PRIMARY, SAAS_BTN_GHOST } from '@/components/saas/ui';

const WHATSAPP_URL = 'https://wa.me/5511999718595';

const solutions = [
  {
    idx: '01',
    title: 'Automação Inteligente',
    description: 'Automatize processos repetitivos e libere sua equipe para tarefas estratégicas.',
    features: [
      'Automação de workflows complexos',
      'Integração com sistemas existentes',
      'Redução de erros manuais',
      'Otimização de tempo e recursos',
    ],
  },
  {
    idx: '02',
    title: 'Análise Preditiva',
    description: 'Preveja tendências e tome decisões baseadas em dados precisos.',
    features: [
      'Modelos de machine learning personalizados',
      'Análise de padrões comportamentais',
      'Previsão de demanda e vendas',
      'Dashboards interativos',
    ],
  },
  {
    idx: '03',
    title: 'Chatbots Personalizados',
    description: 'Melhore o atendimento ao cliente com assistentes virtuais inteligentes.',
    features: [
      'Atendimento 24/7 automatizado',
      'Processamento de linguagem natural',
      'Integração com CRM e sistemas',
      'Escalabilidade automática',
    ],
  },
  {
    idx: '04',
    title: 'Otimização de Processos',
    description: 'Identifique gargalos e otimize operações para máxima eficiência.',
    features: [
      'Análise de processos em tempo real',
      'Identificação de gargalos',
      'Otimização de recursos',
      'Monitoramento contínuo',
    ],
  },
];

const benefits = [
  {
    title: 'Personalização Total',
    description: 'Cada solução é desenvolvida especificamente para suas necessidades e processos únicos.',
  },
  {
    title: 'Implementação Rápida',
    description: 'Metodologia ágil que permite resultados visíveis em poucas semanas.',
  },
  {
    title: 'Suporte Contínuo',
    description: 'Acompanhamento e otimização constante para garantir máximo desempenho.',
  },
];

const steps = [
  { step: '01', title: 'Análise',         description: 'Entendemos seus processos e identificamos oportunidades.' },
  { step: '02', title: 'Planejamento',    description: 'Criamos uma estratégia personalizada para sua empresa.' },
  { step: '03', title: 'Desenvolvimento', description: 'Construímos e testamos as soluções com tecnologia de ponta.' },
  { step: '04', title: 'Implementação',   description: 'Colocamos tudo em funcionamento e treinamos sua equipe.' },
];

const Tecnologia = () => {
  const handleCta = (location: string) => {
    tracker.track('cta_click', { product: 'tecnologia', location });
  };

  return (
    <PageLayout trackingName="BA Consultoria - Tecnologia">

      {/* ================================================================
          HERO
      ================================================================ */}
      <header className="relative overflow-hidden px-4 sm:px-6 lg:px-8">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full bg-saas-violet/20 blur-[110px]" />
          <div className="absolute -top-10 right-0 w-[520px] h-[420px] rounded-full bg-saas-cyan/15 blur-[110px]" />
        </div>

        <div className="relative max-w-7xl mx-auto py-16 md:py-24 animate-fade-in">
          <Eyebrow>Pilar 01 / Tecnologia</Eyebrow>
          <h1 className="mt-5 font-extrabold text-saas-ink text-[clamp(25px,3.5vw,42px)] leading-[1.1] tracking-tight max-w-[18ch]">
            Transforme seu negócio com <Accent>tecnologia</Accent>.
          </h1>
          <p className="mt-6 text-saas-body text-lg md:text-xl leading-relaxed max-w-xl">
            Soluções personalizadas de IA para impulsionar sua empresa.
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
      </header>

      {/* ================================================================
          01 — SOLUÇÕES
      ================================================================ */}
      <Section
        idx="01"
        section="SOLUÇÕES"
        headline={<>Nossas <Accent>soluções</Accent>.</>}
        sub="Tecnologias avançadas adaptadas às necessidades do seu negócio."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {solutions.map((s) => (
            <StratCard key={s.idx} as="article">
              <div className="flex items-start justify-between mb-6">
                <Tag variant="cyan">{s.idx}</Tag>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-faint">SOLUÇÃO</span>
              </div>
              <h3 className="font-extrabold text-saas-ink text-xl md:text-2xl leading-tight mb-4">
                {s.title}
              </h3>
              <p className="text-saas-body text-sm leading-relaxed mb-6">
                {s.description}
              </p>
              <ul className="space-y-3">
                {s.features.map((feature, fi) => (
                  <li key={fi} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-saas-green mt-0.5 flex-shrink-0" />
                    <span className="text-saas-body text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </StratCard>
          ))}
        </div>
      </Section>

      {/* ================================================================
          02 — POR QUE ESCOLHER
      ================================================================ */}
      <Section
        idx="02"
        section="DIFERENCIAIS"
        headline={<>Por que escolher nossas <Accent>soluções</Accent>?</>}
      >
        <div className="grid md:grid-cols-3 gap-4">
          {benefits.map((b, i) => (
            <StratCard key={i} as="article">
              <p className="mb-5 font-extrabold text-3xl leading-none bg-gradient-to-r from-saas-cyan to-saas-violet bg-clip-text text-transparent">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="font-extrabold text-saas-ink text-xl leading-tight mb-4">
                {b.title}
              </h3>
              <p className="text-saas-body text-sm leading-relaxed">
                {b.description}
              </p>
            </StratCard>
          ))}
        </div>
      </Section>

      {/* ================================================================
          03 — COMO TRABALHAMOS
      ================================================================ */}
      <Section
        idx="03"
        section="MÉTODO"
        headline={<>Como <Accent>trabalhamos</Accent>.</>}
      >
        <div className="grid md:grid-cols-4 gap-4">
          {steps.map((p) => (
            <StratCard key={p.step} as="article">
              <p className="mb-5 font-extrabold leading-none bg-gradient-to-r from-saas-cyan to-saas-violet bg-clip-text text-transparent text-[clamp(36px,4vw,52px)]">
                {p.step}
              </p>
              <h3 className="font-extrabold text-saas-ink text-xl leading-tight mb-4">
                {p.title}
              </h3>
              <p className="text-saas-body text-sm leading-relaxed">
                {p.description}
              </p>
            </StratCard>
          ))}
        </div>
      </Section>

      {/* ================================================================
          04 — CTA FINAL
      ================================================================ */}
      <section className="relative overflow-hidden border-t border-white/[0.06] py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[640px] h-[420px] rounded-full bg-saas-violet/15 blur-[120px]" />
        </div>

        <div className="relative max-w-3xl mx-auto text-center animate-fade-in">
          <div className="flex justify-center">
            <Eyebrow>Próxima operação</Eyebrow>
          </div>
          <h2 className="mt-6 font-extrabold text-saas-ink text-[clamp(28px,3.6vw,44px)] leading-tight tracking-tight mx-auto max-w-[16ch]">
            Pronto para <Accent>inovar</Accent>?
          </h2>
          <p className="mt-6 text-saas-body text-lg max-w-xl mx-auto leading-relaxed">
            Vamos conversar sobre como nossas soluções tecnológicas podem transformar seu negócio.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={SAAS_BTN_PRIMARY}
              onClick={() => handleCta('cta_final')}
            >
              Falar com um especialista
              <span aria-hidden>→</span>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={SAAS_BTN_GHOST}
              onClick={() => handleCta('agendar_demo')}
            >
              Agendar demonstração
            </a>
          </div>
        </div>
      </section>

    </PageLayout>
  );
};

export default Tecnologia;
