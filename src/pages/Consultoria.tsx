import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CornerBrackets from '@/components/pb/CornerBrackets';
import SectionHeader from '@/components/pb/SectionHeader';
import Stamp from '@/components/pb/Stamp';
import StratCard from '@/components/pb/StratCard';
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
    <div className="min-h-screen bg-pb-void text-pb-ink">

      {/* Meta bar pró-vida */}
      <div
        className="fixed top-0 left-0 right-0 z-[60] flex items-center gap-3 px-5 py-2 font-mono text-[10px] uppercase tracking-mono-wide"
        style={{ background: 'rgba(5,9,11,0.97)', borderBottom: '1px solid rgba(228,73,53,0.25)' }}
      >
        <span
          className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0 animate-pulse-cyan"
          style={{ background: 'hsl(var(--accent-red))', boxShadow: '0 0 8px hsl(var(--accent-red) / 0.6)' }}
          aria-hidden
        />
        <span className="text-pb-ink-muted">
          Empresa pró-vida · somos contra todo tipo de aborto
        </span>
        <span className="ml-auto hidden sm:block text-pb-ink-faint">
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
        <CornerBrackets size={32} offset={24} />

        {/* Coordinates */}
        <div className="absolute top-8 right-8 font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-faint hidden md:block">
          <div className="flex flex-col items-end gap-1">
            <span><span className="text-pb-ink-faint mr-3">FILE</span><span className="text-pb-ink-soft">CONSULTORIA-01</span></span>
            <span><span className="text-pb-ink-faint mr-3">BUILD</span><span className="text-pb-ink-soft">2026.05</span></span>
            <span><span className="text-pb-ink-faint mr-3">OWNER</span><span className="text-pb-ink-soft">BA</span></span>
            <span><span className="text-pb-ink-faint mr-3">STATE</span><span className="text-pb-cyan">ACTIVE</span></span>
          </div>
        </div>

        {/* Protocol badge */}
        <div className="absolute top-8 left-8 hidden md:block">
          <Stamp>Protocolo 01 / Consultoria</Stamp>
        </div>

        <div className="max-w-7xl mx-auto w-full pt-24 pb-32">
          <div className="max-w-5xl">
            <h1
              className="font-display uppercase text-pb-ink leading-[0.88]"
              style={{ fontSize: 'clamp(72px, 11vw, 160px)', letterSpacing: '0.005em' }}
            >
              Transforme<br />
              sua empresa<br />
              <span className="text-pb-ink-soft">com IA</span>
              <span className="text-pb-red">.</span>
            </h1>

            <p className="mt-8 font-body text-pb-ink-soft text-lg md:text-xl leading-relaxed max-w-xl">
              Aumente seus lucros sem contratar mais gente ou trabalhar mais horas.
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
        </div>

        {/* Bottom rule */}
        <div className="absolute bottom-0 left-0 right-0 flex items-center gap-6 px-6 py-4 border-t border-pb-grid-strong font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-faint">
          <span className="text-pb-cyan animate-pulse-cyan">● Operacional</span>
          <span className="hidden sm:inline">Call gratuita de 30 minutos</span>
          <span className="hidden md:inline">Sem pressão. Sem obrigação.</span>
          <span className="ml-auto text-pb-ink-faint">BA Consultoria — 2026</span>
        </div>
      </section>

      {/* ================================================================
          02 — SOBRE / ESPECIALISTA
      ================================================================ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-pb-grid-strong">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            idx="02 / COMANDO"
            label="Especialista"
            headline={<>Rodrigo<br />Albuquerque<span className="text-pb-red">.</span></>}
            sub="Especialista em transformação de negócios com IA, com experiência internacional. Ajudei dezenas de pequenas e médias empresas a usarem tecnologia de forma inteligente para aumentar eficiência, lucro e controle — sem complicação nem promessas vazias."
          />
        </div>
      </section>

      {/* ================================================================
          03 — PROBLEMA
      ================================================================ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-pb-grid-strong">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            idx="03 / DIAGNÓSTICO"
            label="O problema"
            headline={<>O problema que sua<br />empresa enfrenta hoje<span className="text-pb-red">.</span></>}
          />

          <div className="grid md:grid-cols-2 gap-6">
            <StratCard>
              <p className="font-body text-pb-ink-soft leading-relaxed">
                A maioria das empresas brasileiras ainda está presa a processos manuais, planilhas desorganizadas e equipes sobrecarregadas.
              </p>
            </StratCard>
            <StratCard>
              <p className="font-body text-pb-ink-soft leading-relaxed">
                E enquanto a concorrência avança usando automações e IA para crescer com menos custo, muitos empreendedores continuam apagando incêndios e perdendo margem.
              </p>
            </StratCard>
          </div>
        </div>
      </section>

      {/* ================================================================
          04 — CONSEQUÊNCIAS
      ================================================================ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-pb-grid-strong">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            idx="04 / ANÁLISE"
            label="Consequências de não resolver"
            headline={<>Negócios que ignoram<br />essa virada ficam para trás<span className="text-pb-red">.</span></>}
          />

          <div className="grid md:grid-cols-2 gap-6">
            {consequences.map((item, index) => (
              <StratCard key={index}>
                <div className="flex items-start gap-4">
                  <span
                    className="inline-block w-1.5 h-1.5 mt-2 flex-shrink-0"
                    style={{ background: 'hsl(var(--accent-cyan))', boxShadow: '0 0 6px hsl(var(--accent-cyan) / 0.5)' }}
                    aria-hidden
                  />
                  <p className="font-body text-pb-ink-soft leading-relaxed">{item}</p>
                </div>
              </StratCard>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          05 — SOLUÇÃO / VIRADA
      ================================================================ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-pb-grid-strong">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            idx="05 / VIRADA"
            label="O que é possível com IA"
            headline={<>A virada<span className="text-pb-red">.</span></>}
            align="center"
          />

          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="font-body text-pb-ink-soft text-lg leading-relaxed">
              Imagine sua empresa rodando com mais agilidade, menos retrabalho e mais clareza nos dados.
            </p>
            <p className="font-body text-pb-ink-soft text-lg leading-relaxed">
              Imagine reduzir tarefas manuais, melhorar decisões e escalar resultados — sem aumentar o time.
            </p>
            <p className="font-display uppercase text-pb-ink text-[clamp(24px,3vw,40px)] leading-[0.95] mt-8">
              É isso que a inteligência artificial pode fazer por você<br />
              quando aplicada com estratégia<span className="text-pb-red">.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================
          06 — SERVIÇO / METODOLOGIA
      ================================================================ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-pb-grid-strong">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            idx="06 / MÉTODO"
            label="Minha consultoria"
            headline={<>Direta ao ponto<span className="text-pb-red">.</span></>}
            sub="Minha consultoria é direta ao ponto, sem enrolação e pensada para quem quer resultado real. Começa com uma call de 30 minutos, onde eu vou entender sua realidade e mostrar se realmente faz sentido avançarmos juntos."
          />

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {serviceSteps.map((step) => (
              <StratCard key={step.idx} brackets>
                <Stamp>{`Etapa ${step.idx}`}</Stamp>
                <h3 className="font-display uppercase text-pb-ink text-2xl leading-[0.95] mt-4">
                  {step.title}
                </h3>
                <p className="font-body text-pb-ink-soft text-sm leading-relaxed mt-3">
                  {step.description}
                </p>
              </StratCard>
            ))}
          </div>

          <StratCard>
            <p className="font-body text-pb-ink-soft leading-relaxed text-center">
              Tudo isso com uma metodologia própria, adaptada ao Brasil e testada em dezenas de negócios reais.
            </p>
          </StratCard>
        </div>
      </section>

      {/* ================================================================
          07 — DEPOIMENTOS
      ================================================================ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-pb-grid-strong">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            idx="07 / CAMPO"
            label="Depoimentos"
            headline={<>O que dizem<br />quem passou por aqui<span className="text-pb-red">.</span></>}
          />

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, index) => (
              <StratCard key={index} brackets>
                <p className="font-body text-pb-ink-soft leading-relaxed mb-6">
                  "{t.quote}"
                </p>
                <div className="border-t border-pb-grid-strong pt-4">
                  <p className="font-mono text-[11px] uppercase tracking-mono-wide text-pb-cyan">
                    {t.author}
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted mt-0.5">
                    {t.role}
                  </p>
                </div>
              </StratCard>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          08 — CTA
      ================================================================ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-pb-grid-strong">
        <div className="max-w-7xl mx-auto">
          <div className="relative border border-pb-grid-strong p-12 md:p-20 text-center">
            <CornerBrackets size={20} offset={12} />

            <Stamp>Call gratuita</Stamp>

            <h2
              className="font-display uppercase text-pb-ink leading-[0.92] mt-6"
              style={{ fontSize: 'clamp(40px, 6vw, 88px)' }}
            >
              Pronto para<br />
              transformar<br />
              sua empresa<span className="text-pb-red">?</span>
            </h2>

            <p className="font-body text-pb-ink-soft text-lg leading-relaxed max-w-xl mx-auto mt-8">
              Agende agora sua call gratuita de 30 minutos e veja se sua empresa está pronta para dar o próximo passo.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                onClick={() => handleCta('cta-section')}
              >
                Quero agendar minha call
                <span aria-hidden>→</span>
              </a>
            </div>

            <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted mt-8">
              Sem pressão. Sem obrigação. A primeira conversa é gratuita e só seguimos se realmente fizer sentido para o seu momento.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================
          09 — FAQ
      ================================================================ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-pb-grid-strong">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            idx="09 / PROTOCOLO"
            label="Perguntas frequentes"
            headline={<>Dúvidas<br />comuns<span className="text-pb-red">.</span></>}
          />

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <StratCard key={index}>
                <h3 className="font-display uppercase text-pb-ink text-xl leading-[0.95]">
                  {faq.question}
                </h3>
                <p className="font-body text-pb-ink-soft text-sm leading-relaxed mt-4">
                  {faq.answer}
                </p>
              </StratCard>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Consultoria;
