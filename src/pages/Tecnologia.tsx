import { tracker } from '@/lib/tracking';
import PageLayout from '@/components/pb/PageLayout';
import Section from '@/components/pb/Section';
import StratCard from '@/components/pb/StratCard';
import Tag from '@/components/pb/Tag';
import CornerBrackets from '@/components/pb/CornerBrackets';

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
      <section className="relative min-h-[60vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 border-b border-pb-grid-strong overflow-hidden">
        <CornerBrackets size={32} offset={24} />

        {/* HUD metadata */}
        <div className="absolute top-8 right-8 font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-faint hidden md:flex flex-col items-end gap-1">
          <span><span className="text-pb-ink-faint mr-3">FILE</span><span className="text-pb-ink-soft">TECNOLOGIA-01</span></span>
          <span><span className="text-pb-ink-faint mr-3">BUILD</span><span className="text-pb-ink-soft">2026.05</span></span>
          <span><span className="text-pb-ink-faint mr-3">OWNER</span><span className="text-pb-ink-soft">BA</span></span>
          <span><span className="text-pb-ink-faint mr-3">STATE</span><span className="text-pb-cyan">ACTIVE</span></span>
        </div>

        <div className="max-w-7xl mx-auto w-full py-16 md:py-24">
          <p className="font-mono text-[11px] uppercase tracking-mono-wide text-pb-cyan mb-6">
            // Pilar 01 / Tecnologia
          </p>
          <h1
            className="font-display uppercase text-pb-ink leading-[0.88]"
            style={{ fontSize: 'clamp(56px, 9vw, 128px)', letterSpacing: '0.005em' }}
          >
            Transforme seu<br />
            negócio com<br />
            <span className="text-pb-ink-soft">tecnologia</span>
            <span className="text-pb-red">.</span>
          </h1>
          <p className="mt-8 font-body text-pb-ink-soft text-lg md:text-xl leading-relaxed max-w-xl">
            Soluções personalizadas de IA para impulsionar sua empresa.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
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

        {/* Bottom rule */}
        <div className="absolute bottom-0 left-0 right-0 flex items-center gap-6 px-6 py-4 border-t border-pb-grid-strong font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-faint">
          <span className="text-pb-cyan animate-pulse-cyan">● Operacional</span>
          <span className="hidden sm:inline">Automação Inteligente</span>
          <span className="hidden md:inline">Análise Preditiva</span>
          <span className="hidden lg:inline">Chatbots Personalizados</span>
          <span className="ml-auto text-pb-ink-faint">BA Consultoria — 2026</span>
        </div>
      </section>

      {/* ================================================================
          01 — SOLUÇÕES
      ================================================================ */}
      <Section
        idx="01"
        section="SOLUÇÕES"
        headline={<>Nossas<br />soluções<span className="text-pb-red">.</span></>}
        sub="Tecnologias avançadas adaptadas às necessidades do seu negócio."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-pb-grid-strong border border-pb-grid-strong">
          {solutions.map((s) => (
            <StratCard key={s.idx} as="article">
              <div className="flex items-start justify-between mb-6">
                <Tag variant="cyan">{s.idx}</Tag>
                <span className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-faint">// SOLUÇÃO</span>
              </div>
              <h3 className="font-display uppercase text-pb-ink text-3xl leading-[0.95] mb-4">
                {s.title}
              </h3>
              <p className="font-body text-pb-ink-soft text-sm leading-relaxed mb-6">
                {s.description}
              </p>
              <ul className="space-y-3">
                {s.features.map((feature, fi) => (
                  <li key={fi} className="flex items-start gap-3">
                    <span className="font-mono text-pb-cyan text-[10px] mt-1 flex-shrink-0">—</span>
                    <span className="font-body text-pb-ink-soft text-sm leading-relaxed">{feature}</span>
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
        headline={<>Por que escolher<br />nossas soluções<span className="text-pb-red">?</span></>}
      >
        <div className="grid md:grid-cols-3 gap-px bg-pb-grid-strong border border-pb-grid-strong">
          {benefits.map((b, i) => (
            <StratCard key={i} as="article">
              <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-6">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="font-display uppercase text-pb-ink text-2xl leading-[0.95] mb-4">
                {b.title}
              </h3>
              <p className="font-body text-pb-ink-soft text-sm leading-relaxed">
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
        headline={<>Como<br />trabalhamos<span className="text-pb-red">.</span></>}
      >
        <div className="grid md:grid-cols-4 gap-px bg-pb-grid-strong border border-pb-grid-strong">
          {steps.map((p) => (
            <StratCard key={p.step} as="article">
              <p
                className="font-display uppercase text-pb-cyan mb-6 leading-none"
                style={{ fontSize: 'clamp(40px, 4vw, 56px)' }}
              >
                {p.step}
              </p>
              <h3 className="font-display uppercase text-pb-ink text-2xl leading-[0.95] mb-4">
                {p.title}
              </h3>
              <p className="font-body text-pb-ink-soft text-sm leading-relaxed">
                {p.description}
              </p>
            </StratCard>
          ))}
        </div>
      </Section>

      {/* ================================================================
          04 — CTA FINAL
      ================================================================ */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 border-t border-pb-grid-strong relative overflow-hidden">
        <CornerBrackets size={40} offset={32} />

        <div className="max-w-7xl mx-auto text-center">
          <p className="font-mono text-[11px] uppercase tracking-mono-wide text-pb-cyan mb-8">
            // Próxima operação
          </p>
          <h2
            className="font-display uppercase text-pb-ink leading-[0.88] mx-auto"
            style={{ fontSize: 'clamp(48px, 7vw, 96px)', maxWidth: '900px' }}
          >
            Pronto para<br />
            <span className="text-pb-ink-soft">inovar</span>
            <span className="text-pb-red">?</span>
          </h2>
          <p className="mt-8 font-body text-pb-ink-soft text-lg max-w-xl mx-auto leading-relaxed">
            Vamos conversar sobre como nossas soluções tecnológicas podem transformar seu negócio.
          </p>
          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              onClick={() => handleCta('cta_final')}
            >
              Falar com um especialista
              <span aria-hidden>→</span>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
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
