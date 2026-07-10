import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Code, GraduationCap, TrendingUp, Briefcase } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Accent,
  Eyebrow,
  SectionHeader,
  Card,
  StatCard,
  SAAS_BTN_PRIMARY,
  SAAS_BTN_GHOST,
  SAAS_CARD,
} from '@/components/saas/ui';
import { tracker } from '@/lib/tracking';

import chatgptLogo from '@/assets/chatgpt-logo.png';
import grokLogo from '@/assets/grok-logo.png';
import geminiLogo from '@/assets/gemini-logo.png';
import claudeLogo from '@/assets/claude-logo.png';
import n8nLogo from '@/assets/n8n-logo.png';
import typebotLogo from '@/assets/typebot-logo.png';
import lovableLogo from '@/assets/lovable-logo.png';
import makeLogo from '@/assets/make-logo.png';
import worldMap from '@/assets/world-map.jpeg';
import hurbana from '@/assets/clients/hurbana.png';
import client2 from '@/assets/clients/client-2.png';
import vocical from '@/assets/clients/vocical.png';
import client4 from '@/assets/clients/client-4.png';
import pincelos from '@/assets/clients/pincelos.png';
import ftx from '@/assets/clients/ftx.png';
import mjr from '@/assets/clients/mjr.png';
import cfBuffet from '@/assets/clients/cf-buffet.png';
import dionello from '@/assets/clients/dionello.png';
import client10 from '@/assets/clients/client-10.png';
import vaboPhoto from '@/assets/mentors/vabo.webp';
import joseDiogoPhoto from '@/assets/mentors/jose-diogo.webp';
import diegoBarretoPhoto from '@/assets/mentors/diego-barreto.webp';
import joaoOliverioPhoto from '@/assets/mentors/joao-oliverio.webp';
import pedroSommaPhoto from '@/assets/mentors/pedro-somma.webp';
import jonathanBarrosPhoto from '@/assets/founders/jonathan-barros.webp';
import rodrigoAlbuquerquePhoto from '@/assets/founders/rodrigo-albuquerque.webp';
import francielliBenitesPhoto from '@/assets/founders/francielli-benites.webp';

const WHATSAPP_URL = 'https://wa.me/5511999718595';

const IMG_DARK = 'grayscale(100%) contrast(1.1) brightness(0.85)';
const IMG_LOGO = 'grayscale(100%) brightness(1.4)';

const clientLogos = [
  hurbana, client2, vocical, client4, pincelos,
  ftx, mjr, cfBuffet, dionello, client10,
];

const pillars = [
  { icon: Code,          idx: '01', title: 'Tecnologia',  desc: 'Sistemas que operam enquanto você dorme. IA aplicada ao processo, não à vitrine.', link: '/tecnologia' },
  { icon: GraduationCap, idx: '02', title: 'Educação',    desc: 'Doutrina antes de ferramenta. Você precisa entender o que comanda antes de delegar.', link: '/educacao' },
  { icon: TrendingUp,    idx: '03', title: 'Consultoria', desc: 'Estratégia é saber o que não fazer. Nós ajudamos a tomar essa decisão primeiro.', link: '/consultoria' },
  { icon: Briefcase,     idx: '04', title: 'Serviços',    desc: 'Execução com método. Vendas e performance com disciplina de operação.', link: '/servicos' },
];

const techs = [
  { logo: lovableLogo,  name: 'Lovable',  desc: 'Produto rápido' },
  { logo: n8nLogo,      name: 'n8n',      desc: 'Automação' },
  { logo: chatgptLogo,  name: 'ChatGPT',  desc: 'IA conversacional' },
  { logo: geminiLogo,   name: 'Gemini',   desc: 'IA multimodal' },
  { logo: claudeLogo,   name: 'Claude',   desc: 'IA analítica' },
  { logo: grokLogo,     name: 'Grok',     desc: 'IA em tempo real' },
  { logo: makeLogo,     name: 'Make',     desc: 'Integração' },
  { logo: typebotLogo,  name: 'Typebot',  desc: 'Chatbots' },
];

const useCases = [
  { title: 'Prospecção de obras por IA', category: 'Captação', desc: 'Entre 20.000 obras em bases oficiais, selecionamos as 100 com maior probabilidade de contrato para sua construtora.', metric: '+2× obras qualificadas' },
  { title: 'Automação de Notas Fiscais', category: 'Operacional', desc: 'Processamento integrado ao ERP elimina horas de trabalho manual. Equipe foca no que gera valor.', metric: '+30% eficiência' },
  { title: 'Atendimento Inteligente 24/7', category: 'Customer Success', desc: 'Chatbot com IA resolve, agenda e qualifica leads automaticamente — inclusive fora do horário comercial.', metric: '+40% conversão' },
  { title: 'Análise Preditiva de Vendas', category: 'Vendas', desc: 'Machine learning sobre histórico identifica tendências e oportunidades antes do time comercial.', metric: '+25% receita' },
  { title: 'Gestão de Campanhas com IA', category: 'Marketing', desc: 'Otimização automática que maximiza ROI e acerta o público no momento ideal.', metric: '−35% CPL' },
  { title: 'Onboarding Automatizado', category: 'RH', desc: 'Integração completa de novos colaboradores — documentação, treinamento e follow-up por IA.', metric: '50% mais rápido' },
];

const mentors = [
  { photo: diegoBarretoPhoto,  name: 'Diego Barreto',                   role: 'CEO — iFood',                                         bio: 'Estrategista de crescimento e inovação. Autor de "Nova Economia". Visão orientada a dados no maior ecossistema de delivery do Brasil.' },
  { photo: pedroSommaPhoto,    name: 'Pedro Somma',                     role: 'Ex-COO — 99 Taxi',                                    bio: 'Liderou operações e expansão da 99 Taxi. Experiência em escala de plataformas de mobilidade urbana no Brasil.' },
  { photo: vaboPhoto,          name: 'Luis Vabo Jr.',                   role: 'Ex-Diretor — Stone',                                  bio: 'Empreendedor serial, OPM por Harvard. Autor de "Falar em público é para você!". Investidor e especialista em softskills.' },
  { photo: joaoOliverioPhoto,  name: 'João Olivério',                   role: 'CEO — Sales As A System\nCountry Manager — Apollo.io', bio: 'Metodologia proprietária para líderes de vendas. Passagens por Zendesk e G4 Sales. Referência em inteligência comercial.' },
  { photo: joseDiogoPhoto,     name: 'José Diogo C. Rodrigues',         role: 'CMO Latam & Canada — Tinder',                         bio: 'Brand Manager na Nike e Red Bull. Hoje dirige o marketing do Tinder na América Latina e Canadá.' },
];

const stats = [
  { value: '+7',     label: 'Países atendidos',            cyan: false },
  { value: '+R$130M', label: 'Em vendas geradas',          cyan: true  },
  { value: '+10K',   label: 'Leads gerados',               cyan: false },
  { value: '+50M',   label: 'Alcance orgânico',            cyan: true  },
  { value: '+700',   label: 'Clientes atendidos',          cyan: false },
  { value: '+6',     label: 'Anos no mercado',             cyan: true  },
];

const faqs = [
  {
    q: 'Como a IA muda o meu negócio?',
    a: 'Automatiza o que é repetível. Analisa o que é volumoso. Libera o time para o que exige julgamento. A IA não decide por você — ela amplia sua capacidade de decidir bem.',
  },
  {
    q: 'Quanto tempo leva para rodar?',
    a: 'Depende do escopo. Soluções simples ficam operacionais em 2 a 4 semanas. Projetos de maior profundidade, 2 a 3 meses. Trabalhamos em ciclos curtos para entregar valor antes do projeto terminar.',
  },
  {
    q: 'Tem suporte após a entrega?',
    a: 'Sim. Monitoramento, atualizações e treinamento de equipe. A solução não termina na entrega — ela começa a operar.',
  },
  {
    q: 'Qual o investimento?',
    a: 'Varia com escopo e complexidade. Mas a conversa inicial é gratuita. Entendemos o problema antes de apresentar proposta.',
  },
  {
    q: 'Minha equipe precisa saber de tecnologia?',
    a: 'Não. Desenvolvemos com interfaces operacionais e treinamos o time. O objetivo é que qualquer pessoa use — não apenas quem entende de código.',
  },
];

const BA = () => {
  useEffect(() => {
    tracker.page('BA Consultoria - Home');
  }, []);

  const handleCta = (location: string) => {
    tracker.track('cta_click', { product: 'home', location });
  };

  return (
    <div className="min-h-screen bg-saas-void text-saas-body">

      {/* 00 — Meta bar pró-vida */}
      <div className="fixed top-0 left-0 right-0 z-[60] flex items-center gap-3 px-5 py-2 font-mono text-[10px] uppercase tracking-[0.14em] border-b border-white/[0.06] bg-saas-void/95 backdrop-blur-xl">
        <span
          className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0 animate-pulse bg-gradient-to-r from-saas-cyan to-saas-violet"
          aria-hidden
        />
        <span className="text-saas-muted">
          Empresa pró-vida · somos contra todo tipo de aborto
        </span>
        <span className="ml-auto hidden sm:block text-saas-faint">
          POSIÇÃO: PERMANENTE
        </span>
      </div>

      {/* Header: deslocado para baixo da meta-bar (36px) */}
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
          <div className="max-w-5xl animate-fade-in">
            <h1 className="font-extrabold text-saas-ink leading-[1.05] tracking-tight text-[clamp(40px,6.5vw,76px)]">
              Mais lucro.
              <br />
              <Accent>Menos ruído.</Accent>
            </h1>

            <p className="mt-8 text-saas-body text-lg md:text-xl leading-relaxed max-w-xl">
              Implementamos IA nos negócios com método, não com hype.
              Estratégia antes de automação. Direção antes de ferramenta.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
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
              <Link
                to="/cases"
                className={SAAS_BTN_GHOST}
                onClick={() => window.scrollTo(0, 0)}
              >
                Ver cases
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom rule */}
        <div className="absolute bottom-0 left-0 right-0 flex items-center gap-6 px-6 py-4 border-t border-white/[0.06] font-mono text-[10px] uppercase tracking-[0.14em] text-saas-faint">
          <span className="text-saas-cyan animate-pulse">● Operacional</span>
          <span className="hidden sm:inline">+700 clientes atendidos</span>
          <span className="hidden md:inline">+R$130M em vendas geradas</span>
          <span className="hidden lg:inline">7 países</span>
          <span className="ml-auto">BA Consultoria — 2026</span>
        </div>
      </section>

      {/* ================================================================
          02 — FUNDADORES
      ================================================================ */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="Fundadores" className="mb-14">
            Quem assina as <Accent>decisões</Accent>.
          </SectionHeader>

          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                photo: rodrigoAlbuquerquePhoto,
                name: 'Rodrigo Albuquerque',
                role: 'Co-Fundador',
                bio: [
                  'Mentorado por alguns dos maiores empreendedores do país. Compilou na BA o aprendizado de mais de 100 consultorias.',
                  'Apaixonado por marketing, negócios e pelo estudo de filosofia e psicologia — Stanford, Jordan Peterson, Jonas Madureira.',
                ],
              },
              {
                photo: francielliBenitesPhoto,
                name: 'Francielli Benites',
                role: 'Co-Fundadora',
                bio: [
                  '7º lugar nacional em redação, medalhas em olimpíadas de matemática, dupla graduação em Matemática e Engenharia Civil.',
                  'Usa amplitude intelectual para criar soluções únicas — literatura clássica e lógica aplicadas ao problema real do cliente.',
                ],
              },
              {
                photo: jonathanBarrosPhoto,
                name: 'Jonathan Barros',
                role: 'Co-Fundador',
                bio: [
                  '18 anos no mercado B2B. Responsável por mais de R$30M em faturamento liderando times comerciais.',
                  'Missão: transformar times de vendas com método e disciplina. Corrida, leitura, futebol e Muay Thai como laboratório de performance.',
                ],
              },
            ].map((f) => (
              <Card key={f.name} className="overflow-hidden group">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    loading="lazy"
                    src={f.photo}
                    alt={f.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    style={{ filter: IMG_DARK }}
                  />
                </div>

                <div className="p-8">
                  <Eyebrow>{f.role}</Eyebrow>
                  <h3 className="font-extrabold text-saas-ink text-2xl tracking-tight mt-4 mb-1">{f.name}</h3>
                  <div className="mt-4 space-y-3">
                    {f.bio.map((b, i) => (
                      <p key={i} className="text-saas-body text-sm leading-relaxed">{b}</p>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          03 — PILARES
      ================================================================ */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="Pilares" className="mb-14">
            Quatro frentes. <Accent>Uma tese.</Accent>
          </SectionHeader>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((p) => (
              <Card
                key={p.idx}
                className="p-8 flex flex-col gap-6 group hover:border-white/[0.18] transition-colors duration-300"
              >
                <div className="flex items-start justify-between">
                  <p.icon
                    size={28}
                    strokeWidth={1.2}
                    className="text-saas-cyan transition-all"
                  />
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-faint">{p.idx}</span>
                </div>
                <div>
                  <h3 className="font-extrabold text-saas-ink text-xl tracking-tight mb-3">{p.title}</h3>
                  <p className="text-saas-body text-sm leading-relaxed">{p.desc}</p>
                </div>
                <Link
                  to={p.link}
                  className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-saas-cyan hover:text-saas-ink transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Saiba mais →
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          04 — STACK
      ================================================================ */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="Ferramentas">
            Ferramentas que <Accent>operam a tese</Accent>.
          </SectionHeader>
          <p className="mt-5 mb-14 text-saas-muted text-base md:text-lg leading-relaxed max-w-2xl">
            Não usamos o que está na moda. Usamos o que funciona. Cada ferramenta tem uma função específica no processo.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {techs.map((t) => (
              <Card
                key={t.name}
                className="p-8 flex flex-col items-center gap-4 group hover:border-white/[0.18] transition-colors duration-300"
              >
                <img
                  loading="lazy"
                  src={t.logo}
                  alt={t.name}
                  className="w-12 h-12 object-contain transition-all duration-300 group-hover:scale-110"
                  style={{ filter: IMG_LOGO }}
                />
                <div className="text-center">
                  <p className="text-sm font-semibold text-saas-ink">{t.name}</p>
                  <p className="text-xs text-saas-faint mt-1">{t.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          05 — OPERAÇÕES (use cases carousel)
      ================================================================ */}
      <section className="py-20 md:py-24 border-t border-white/[0.06] overflow-hidden">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-14">
          <SectionHeader eyebrow="Cases de uso">
            Problema. Execução. <Accent>Resultado.</Accent>
          </SectionHeader>
        </div>

        <div className="relative">
          <div className="flex animate-scroll-slow gap-5">
            {[...useCases, ...useCases].map((uc, i) => (
              <div
                key={i}
                className={SAAS_CARD + ' flex-shrink-0 w-[340px] p-8 flex flex-col gap-5'}
              >
                <span className="self-start inline-flex items-center gap-2 rounded-full border border-white/[0.10] bg-white/[0.03] px-3 py-1 text-[10px] font-mono uppercase tracking-[0.14em] text-saas-cyan">
                  {uc.category}
                </span>
                <h3 className="font-extrabold text-saas-ink text-xl tracking-tight leading-snug min-h-[56px]">{uc.title}</h3>
                <p className="text-saas-body text-sm leading-relaxed flex-1">{uc.desc}</p>
                <div className="pt-5 border-t border-white/[0.06]">
                  <span className="text-2xl font-extrabold"><Accent>{uc.metric}</Accent></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          06 — CLIENTES (logos carousel)
      ================================================================ */}
      <section className="py-20 border-t border-white/[0.06] overflow-hidden">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12">
          <SectionHeader eyebrow="Clientes">
            Quem já decidiu operar com a <Accent>BA</Accent>.
          </SectionHeader>
        </div>

        <div className="relative">
          <div className="flex animate-scroll gap-10">
            {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, i) => (
              <div key={i} className="flex-shrink-0 flex items-center justify-center h-16">
                <img
                  loading="lazy"
                  src={logo}
                  alt={`Cliente ${(i % clientLogos.length) + 1}`}
                  className="h-10 w-auto object-contain transition-all duration-300 opacity-40 hover:opacity-80"
                  style={{ filter: IMG_LOGO }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          07 — FAQ
      ================================================================ */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto">
          <SectionHeader eyebrow="FAQ" className="mb-14">
            5 perguntas que <Accent>todo mundo faz</Accent>.
          </SectionHeader>

          <Card className="divide-y divide-white/[0.06] overflow-hidden">
            {faqs.map((faq, i) => (
              <details key={i} className="group">
                <summary className="flex items-center justify-between gap-6 px-8 py-6 cursor-pointer list-none hover:bg-white/[0.02] transition-colors">
                  <h3 className="font-bold text-saas-ink text-lg leading-snug">{faq.q}</h3>
                  <span className="text-saas-cyan text-lg leading-none group-open:hidden flex-shrink-0">+</span>
                  <span className="text-saas-cyan text-lg leading-none hidden group-open:block flex-shrink-0">−</span>
                </summary>
                <div className="px-8 pb-8">
                  <p className="text-saas-body text-base leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </Card>
        </div>
      </section>

      {/* ================================================================
          08 — ALCANCE (world map)
      ================================================================ */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="Presença">
            Operação em <Accent>7 países</Accent>.
          </SectionHeader>
          <p className="mt-5 mb-14 text-saas-muted text-base md:text-lg leading-relaxed max-w-2xl">
            Presença global, método brasileiro. Exportamos doutrina, não produto.
          </p>

          <Card className="overflow-hidden">
            <img
              loading="lazy"
              src={worldMap}
              alt="Mapa de presença da BA Consultoria"
              className="w-full aspect-video object-cover"
              style={{ filter: 'grayscale(100%) brightness(0.35) contrast(1.6)' }}
            />
          </Card>
        </div>
      </section>

      {/* ================================================================
          09 — INTELIGÊNCIA EXTERNA (mentores)
      ================================================================ */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="Mentores" className="mb-14">
            Quem nos <Accent>treinou</Accent>.
          </SectionHeader>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {mentors.map((m) => (
              <Card key={m.name} className="overflow-hidden group">
                <div className="aspect-square overflow-hidden">
                  <img
                    loading="lazy"
                    src={m.photo}
                    alt={m.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    style={{ filter: IMG_DARK }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-extrabold text-saas-ink text-base tracking-tight leading-snug mb-2">{m.name}</h3>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan mb-3 whitespace-pre-line">{m.role}</p>
                  <p className="text-saas-body text-xs leading-relaxed">{m.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          10 — NÚMEROS
      ================================================================ */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="Resultados" className="mb-14">
            O que a BA <Accent>já entregou</Accent>.
          </SectionHeader>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {stats.map((s, i) => (
              <StatCard key={i} value={s.value} label={s.label} accent={s.cyan} />
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          11 — CTA FINAL
      ================================================================ */}
      <section className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] overflow-hidden">
        {/* Glow radial */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[640px] h-[420px] rounded-full bg-saas-violet/15 blur-[110px]" />
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <Eyebrow>Próxima operação</Eyebrow>
          <h2 className="mt-6 font-extrabold text-saas-ink tracking-tight leading-[1.08] text-[clamp(32px,4.6vw,56px)] mx-auto max-w-[900px]">
            Sua empresa ainda opera no <Accent>escuro</Accent>?
          </h2>
          <p className="mt-8 text-saas-body text-lg max-w-xl mx-auto leading-relaxed">
            A conversa inicial é gratuita. Em 30 minutos, você sabe exatamente onde a IA pode operar no seu negócio.
          </p>
          <div className="mt-12">
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BA;
