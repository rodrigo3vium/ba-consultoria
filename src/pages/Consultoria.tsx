import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Accent,
  Eyebrow,
  Card,
  Section,
  SectionHeader,
  SAAS_BTN_PRIMARY,
} from '@/components/saas/ui';
import { tracker } from '@/lib/tracking';

const WHATSAPP_URL = 'https://wa.me/5511999718595';

const consequences = [
  'A equipe trabalha cada vez mais e entrega cada vez menos.',
  'O lucro some no meio de tarefas operacionais.',
  'O empreendedor vira escravo da própria empresa.',
  'O concorrente começa a entregar mais rápido, mais barato e com mais qualidade.',
];

const serviceSteps = [
  {
    idx: '01',
    title: 'Diagnóstico Prático',
    description: 'Diagnóstico prático do seu negócio.',
  },
  {
    idx: '02',
    title: 'Mapeamento de Oportunidades',
    description: 'Mapeamento de oportunidades de automação e IA.',
  },
  {
    idx: '03',
    title: 'Plano de Ação',
    description: 'Plano de ação com prioridades claras para aumentar seu lucro com menos esforço.',
  },
];

const testimonials = [
  {
    quote:
      'A consultoria foi um divisor de águas. Automatizamos processos que levavam horas por semana. Meu faturamento cresceu 20% em 60 dias.',
    author: 'Carlos',
    role: 'Dono de escola de idiomas',
  },
  {
    quote:
      'Nunca imaginei que IA pudesse ser tão simples e aplicável no meu negócio.',
    author: 'Luciana',
    role: 'Dona de loja de roupas',
  },
];

const faqs = [
  {
    question: 'Preciso saber de tecnologia para aplicar IA no meu negócio?',
    answer:
      'Não. O objetivo é traduzir a IA para uma linguagem simples e mostrar onde ela se encaixa na sua empresa, sem complicação.',
  },
  {
    question: 'Essa consultoria serve para qualquer tipo de negócio?',
    answer:
      'Funciona melhor para empresas que já têm operação rodando, equipe com mais de 5 pessoas e desejo real de crescer com eficiência. Se esse é o seu caso, pode funcionar muito bem.',
  },
  {
    question: 'Quanto custa?',
    answer:
      'A primeira conversa é gratuita. Após entender seu contexto, apresento uma proposta personalizada — nada de pacotes genéricos.',
  },
  {
    question: 'E se eu quiser aplicar IA sozinho?',
    answer:
      'Você até pode tentar, mas é muito fácil cair em armadilhas, perder tempo com ferramentas que não servem pra você e seguir modinhas. Eu te ajudo a encurtar o caminho e priorizar o que dá retorno de verdade.',
  },
];

const Consultoria = () => {
  useEffect(() => {
    tracker.page('BA Consultoria - Consultoria');
  }, []);

  const handleCta = (location: string) => {
    tracker.track('cta_click', { product: 'consultoria', location });
  };

  return (
    <div className="min-h-screen bg-saas-void text-saas-body">

      {/* Meta bar pró-vida */}
      <div
        className="fixed top-0 left-0 right-0 z-[60] flex items-center gap-3 px-5 py-2 font-mono text-[10px] uppercase tracking-[0.14em] border-b border-white/[0.06]"
        style={{ background: 'rgba(10,10,19,0.97)' }}
      >
        <span
          className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gradient-to-r from-saas-cyan to-saas-violet animate-pulse"
          aria-hidden
        />
        <span className="text-saas-muted">
          Empresa pró-vida · somos contra todo tipo de aborto
        </span>
        <span className="ml-auto hidden sm:block text-saas-faint">
          POSIÇÃO: PERMANENTE
        </span>
      </div>

      <div style={{ paddingTop: 36 }}>
        <Header />
      </div>

      {/* ================================================================
          01 — HERO
      ================================================================ */}
      <section className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Glows radiais */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full bg-saas-violet/20 blur-[110px]" />
          <div className="absolute -top-10 right-0 w-[520px] h-[420px] rounded-full bg-saas-cyan/15 blur-[110px]" />
        </div>

        <div className="relative max-w-7xl mx-auto w-full pt-24 pb-32">
          <div className="max-w-3xl animate-fade-in">
            <Eyebrow>Consultoria</Eyebrow>

            <h1 className="mt-6 font-extrabold text-saas-ink text-[clamp(36px,5.5vw,64px)] leading-[1.08] tracking-tight">
              Transforme<br />
              sua empresa<br />
              <Accent>com IA</Accent>.
            </h1>

            <p className="mt-7 text-saas-body text-lg md:text-xl leading-relaxed max-w-xl">
              Aumente seus lucros sem contratar mais gente ou trabalhar mais horas.
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
        </div>

        {/* Bottom rule */}
        <div className="absolute bottom-0 left-0 right-0 flex items-center gap-6 px-6 py-4 border-t border-white/[0.06] font-mono text-[10px] uppercase tracking-[0.14em] text-saas-faint">
          <span className="text-saas-cyan animate-pulse">● Operacional</span>
          <span className="hidden sm:inline">Call gratuita de 30 minutos</span>
          <span className="hidden md:inline">Sem pressão. Sem obrigação.</span>
          <span className="ml-auto">BA Consultoria — 2026</span>
        </div>
      </section>

      {/* ================================================================
          02 — SOBRE / ESPECIALISTA
      ================================================================ */}
      <Section container="max-w-5xl">
        <SectionHeader eyebrow="Especialista">
          Rodrigo <Accent>Albuquerque</Accent>.
        </SectionHeader>
        <p className="mt-6 text-saas-body text-[17px] leading-relaxed max-w-[62ch]">
          Especialista em transformação de negócios com IA, com experiência internacional. Ajudei dezenas de pequenas e médias empresas a usarem tecnologia de forma inteligente para aumentar eficiência, lucro e controle — sem complicação nem promessas vazias.
        </p>
      </Section>

      {/* ================================================================
          03 — PROBLEMA
      ================================================================ */}
      <Section container="max-w-5xl">
        <SectionHeader eyebrow="O problema" className="mb-10">
          O problema que sua empresa enfrenta <Accent>hoje</Accent>.
        </SectionHeader>

        <div className="grid md:grid-cols-2 gap-5">
          <Card className="p-6 md:p-7">
            <p className="text-saas-body text-[17px] leading-relaxed">
              A maioria das empresas brasileiras ainda está presa a processos manuais, planilhas desorganizadas e equipes sobrecarregadas.
            </p>
          </Card>
          <Card className="p-6 md:p-7">
            <p className="text-saas-body text-[17px] leading-relaxed">
              E enquanto a concorrência avança usando automações e IA para crescer com menos custo, muitos empreendedores continuam apagando incêndios e perdendo margem.
            </p>
          </Card>
        </div>
      </Section>

      {/* ================================================================
          04 — CONSEQUÊNCIAS
      ================================================================ */}
      <Section container="max-w-5xl">
        <SectionHeader eyebrow="Consequências de não resolver" className="mb-10">
          Negócios que ignoram essa virada ficam <Accent>para trás</Accent>.
        </SectionHeader>

        <div className="grid md:grid-cols-2 gap-5">
          {consequences.map((item, index) => (
            <Card key={index} className="p-6 md:p-7">
              <div className="flex items-start gap-4">
                <span
                  className="inline-block w-1.5 h-1.5 mt-2 flex-shrink-0 rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet"
                  aria-hidden
                />
                <p className="text-saas-body text-[17px] leading-relaxed">{item}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* ================================================================
          05 — SOLUÇÃO / VIRADA
      ================================================================ */}
      <Section container="max-w-3xl">
        <SectionHeader eyebrow="O que é possível com IA" center className="mb-10">
          A <Accent>virada</Accent>.
        </SectionHeader>

        <div className="text-center space-y-5">
          <p className="text-saas-body text-[17px] md:text-lg leading-relaxed">
            Imagine sua empresa rodando com mais agilidade, menos retrabalho e mais clareza nos dados.
          </p>
          <p className="text-saas-body text-[17px] md:text-lg leading-relaxed">
            Imagine reduzir tarefas manuais, melhorar decisões e escalar resultados — sem aumentar o time.
          </p>
          <p className="font-extrabold text-saas-ink text-[clamp(22px,2.8vw,34px)] leading-snug tracking-tight pt-5">
            É isso que a inteligência artificial pode fazer por você quando aplicada <Accent>com estratégia</Accent>.
          </p>
        </div>
      </Section>

      {/* ================================================================
          06 — SERVIÇO / METODOLOGIA
      ================================================================ */}
      <Section container="max-w-5xl">
        <SectionHeader eyebrow="Minha consultoria">
          Direta ao <Accent>ponto</Accent>.
        </SectionHeader>
        <p className="mt-6 mb-10 text-saas-body text-[17px] leading-relaxed max-w-[62ch]">
          Minha consultoria é direta ao ponto, sem enrolação e pensada para quem quer resultado real. Começa com uma call de 30 minutos, onde eu vou entender sua realidade e mostrar se realmente faz sentido avançarmos juntos.
        </p>

        <div className="grid md:grid-cols-3 gap-5 mb-6">
          {serviceSteps.map((step) => (
            <Card key={step.idx} className="p-6 md:p-7">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-saas-cyan">
                {`Etapa ${step.idx}`}
              </span>
              <h3 className="mt-4 font-bold text-saas-ink text-xl tracking-tight">
                {step.title}
              </h3>
              <p className="mt-3 text-saas-muted text-[14.5px] leading-relaxed">
                {step.description}
              </p>
            </Card>
          ))}
        </div>

        <Card className="p-6 md:p-7">
          <p className="text-saas-body text-[17px] leading-relaxed text-center">
            Tudo isso com uma metodologia própria, adaptada ao Brasil e testada em dezenas de negócios reais.
          </p>
        </Card>
      </Section>

      {/* ================================================================
          07 — DEPOIMENTOS
      ================================================================ */}
      <Section container="max-w-5xl">
        <SectionHeader eyebrow="Depoimentos" className="mb-10">
          O que dizem quem passou <Accent>por aqui</Accent>.
        </SectionHeader>

        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((t, index) => (
            <Card key={index} className="p-6 md:p-7">
              <p className="text-saas-body text-[17px] leading-relaxed mb-6">
                "{t.quote}"
              </p>
              <div className="border-t border-white/[0.08] pt-4">
                <p className="text-sm font-semibold text-saas-ink">
                  {t.author}
                </p>
                <p className="text-[12.5px] text-saas-faint mt-0.5">
                  {t.role}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* ================================================================
          08 — CTA
      ================================================================ */}
      <Section container="max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.09] bg-saas-card p-10 md:p-16 text-center">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[560px] h-[340px] rounded-full bg-saas-violet/15 blur-[110px]" />
            <div className="absolute -bottom-28 right-0 w-[420px] h-[300px] rounded-full bg-saas-cyan/10 blur-[110px]" />
          </div>

          <div className="relative">
            <Eyebrow>Call gratuita</Eyebrow>

            <h2 className="mt-6 font-extrabold text-saas-ink text-[clamp(28px,4vw,48px)] leading-[1.1] tracking-tight">
              Pronto para transformar <Accent>sua empresa</Accent>?
            </h2>

            <p className="mt-6 text-saas-body text-[17px] md:text-lg leading-relaxed max-w-xl mx-auto">
              Agende agora sua call gratuita de 30 minutos e veja se sua empresa está pronta para dar o próximo passo.
            </p>

            <div className="mt-9 flex flex-wrap gap-4 justify-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={SAAS_BTN_PRIMARY}
                onClick={() => handleCta('cta-section')}
              >
                Quero agendar minha call
                <span aria-hidden>→</span>
              </a>
            </div>

            <p className="mt-8 text-xs text-saas-faint leading-relaxed max-w-md mx-auto">
              Sem pressão. Sem obrigação. A primeira conversa é gratuita e só seguimos se realmente fizer sentido para o seu momento.
            </p>
          </div>
        </div>
      </Section>

      {/* ================================================================
          09 — FAQ
      ================================================================ */}
      <Section container="max-w-3xl">
        <SectionHeader eyebrow="Perguntas frequentes" className="mb-10">
          Dúvidas <Accent>comuns</Accent>.
        </SectionHeader>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="p-6 md:p-7">
              <h3 className="font-bold text-saas-ink text-lg tracking-tight">
                {faq.question}
              </h3>
              <p className="mt-3 text-saas-body text-[15px] leading-relaxed">
                {faq.answer}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Consultoria;
