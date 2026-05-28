import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Code, GraduationCap, TrendingUp, Briefcase } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CornerBrackets from '@/components/pb/CornerBrackets';
import SectionHeader from '@/components/pb/SectionHeader';
import Stamp from '@/components/pb/Stamp';
import Tag from '@/components/pb/Tag';
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
    <div className="min-h-screen bg-pb-void text-pb-ink">

      {/* 00 — Meta bar pró-vida */}
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

      {/* Header: deslocado para baixo da meta-bar (36px) */}
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
            <span><span className="text-pb-ink-faint mr-3">FILE</span><span className="text-pb-ink-soft">HOME-01</span></span>
            <span><span className="text-pb-ink-faint mr-3">BUILD</span><span className="text-pb-ink-soft">2026.05</span></span>
            <span><span className="text-pb-ink-faint mr-3">OWNER</span><span className="text-pb-ink-soft">BA</span></span>
            <span><span className="text-pb-ink-faint mr-3">STATE</span><span className="text-pb-cyan">ACTIVE</span></span>
          </div>
        </div>

        {/* Protocol badge */}
        <div className="absolute top-8 left-8 hidden md:block">
          <Stamp>Protocolo 01 / Home</Stamp>
        </div>

        <div className="max-w-7xl mx-auto w-full pt-24 pb-32">
          <div className="max-w-5xl">
            <h1
              className="font-display uppercase text-pb-ink leading-[0.88]"
              style={{ fontSize: 'clamp(72px, 11vw, 160px)', letterSpacing: '0.005em' }}
            >
              Mais<br />
              lucro<span className="text-pb-red">.</span>
              <br />
              <span className="text-pb-ink-soft">Menos<br />ruído</span>
              <span className="text-pb-red">.</span>
            </h1>

            <p className="mt-8 font-body text-pb-ink-soft text-lg md:text-xl leading-relaxed max-w-xl">
              Implementamos IA nos negócios com método, não com hype.
              Estratégia antes de automação. Direção antes de ferramenta.
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
              <Link
                to="/cases"
                className="btn-ghost"
                onClick={() => window.scrollTo(0, 0)}
              >
                Ver cases
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom rule */}
        <div className="absolute bottom-0 left-0 right-0 flex items-center gap-6 px-6 py-4 border-t border-pb-grid-strong font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-faint">
          <span className="text-pb-cyan animate-pulse-cyan">● Operacional</span>
          <span className="hidden sm:inline">+700 clientes atendidos</span>
          <span className="hidden md:inline">+R$130M em vendas geradas</span>
          <span className="hidden lg:inline">7 países</span>
          <span className="ml-auto text-pb-ink-faint">BA Consultoria — 2026</span>
        </div>
      </section>

      {/* ================================================================
          02 — FUNDADORES
      ================================================================ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-pb-grid-strong">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            idx="02 / COMANDO"
            label="Fundadores"
            headline={<>Quem assina<br />as decisões<span className="text-pb-red">.</span></>}
          />

          <div className="grid lg:grid-cols-3 gap-10">
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
              <div key={f.name} className="relative bg-gradient-to-b from-pb-void-card to-pb-void-elev border border-pb-grid-strong p-0 overflow-hidden group">
                <CornerBrackets size={14} offset={10} />

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
                  <Stamp>{f.role}</Stamp>
                  <h3 className="font-display uppercase text-pb-ink text-3xl mt-3 mb-1 leading-[0.95]">{f.name}</h3>
                  <div className="mt-4 space-y-3">
                    {f.bio.map((b, i) => (
                      <p key={i} className="font-body text-pb-ink-soft text-sm leading-relaxed">{b}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          03 — PILARES
      ================================================================ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-pb-grid-strong">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            idx="03 / DOUTRINA"
            label="Pilares"
            headline={<>Quatro frentes<span className="text-pb-red">.</span><br />Uma tese<span className="text-pb-red">.</span></>}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-pb-grid-strong">
            {pillars.map((p) => (
              <div
                key={p.idx}
                className="bg-pb-void p-8 flex flex-col gap-6 group hover:bg-pb-void-card transition-colors duration-300"
              >
                <div className="flex items-start justify-between">
                  <p.icon
                    size={28}
                    strokeWidth={1.2}
                    className="text-pb-cyan group-hover:drop-shadow-[0_0_8px_hsl(var(--accent-cyan))] transition-all"
                  />
                  <span className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-faint">// {p.idx}</span>
                </div>
                <div>
                  <h3 className="font-display uppercase text-pb-ink text-2xl leading-[0.95] mb-3">{p.title}</h3>
                  <p className="font-body text-pb-ink-soft text-sm leading-relaxed">{p.desc}</p>
                </div>
                <Link
                  to={p.link}
                  className="mt-auto font-mono text-[11px] uppercase tracking-mono-wide text-pb-cyan hover:text-pb-cyan-soft transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Saiba mais →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          04 — STACK
      ================================================================ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-pb-grid-strong">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            idx="04 / STACK"
            label="Ferramentas"
            headline={<>Ferramentas que<br />operam a tese<span className="text-pb-red">.</span></>}
            sub="Não usamos o que está na moda. Usamos o que funciona. Cada ferramenta tem uma função específica no processo."
          />

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-pb-grid-strong">
            {techs.map((t) => (
              <div
                key={t.name}
                className="bg-pb-void p-8 flex flex-col items-center gap-4 group hover:bg-pb-void-card transition-colors duration-300"
              >
                <img
                  loading="lazy"
                  src={t.logo}
                  alt={t.name}
                  className="w-12 h-12 object-contain transition-all duration-300 group-hover:scale-110"
                  style={{ filter: IMG_LOGO }}
                />
                <div className="text-center">
                  <p className="font-mono text-[12px] uppercase tracking-mono-wide text-pb-ink-soft group-hover:text-pb-ink transition-colors">{t.name}</p>
                  <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-faint mt-1">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          05 — OPERAÇÕES (use cases carousel)
      ================================================================ */}
      <section className="py-24 border-t border-pb-grid-strong overflow-hidden">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
          <SectionHeader
            idx="05 / OPERAÇÕES"
            label="Cases de uso"
            headline={<>Problema<span className="text-pb-red">.</span> Execução<span className="text-pb-red">.</span><br />Resultado<span className="text-pb-red">.</span></>}
          />
        </div>

        <div className="relative">
          <div className="flex animate-scroll-slow gap-5">
            {[...useCases, ...useCases].map((uc, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[340px] bg-pb-void-card border border-pb-grid-strong p-8 flex flex-col gap-5"
              >
                <Tag variant="cyan">{uc.category}</Tag>
                <h3 className="font-display uppercase text-pb-ink text-2xl leading-[0.95] min-h-[56px]">{uc.title}</h3>
                <p className="font-body text-pb-ink-soft text-sm leading-relaxed flex-1">{uc.desc}</p>
                <div className="pt-5 border-t border-pb-grid-strong">
                  <span className="font-display uppercase text-pb-cyan text-2xl">{uc.metric}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          06 — CLIENTES (logos carousel)
      ================================================================ */}
      <section className="py-20 border-t border-pb-grid-strong overflow-hidden">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12">
          <SectionHeader
            idx="06 / CAMPO"
            label="Clientes"
            headline={<>Quem já decidiu<br />operar com a BA<span className="text-pb-red">.</span></>}
          />
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
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-pb-grid-strong">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            idx="07 / DÚVIDAS DE CAMPO"
            label="FAQ"
            headline={<>5 perguntas que<br />todo mundo faz<span className="text-pb-red">.</span></>}
          />

          <div className="divide-y divide-pb-grid-strong border border-pb-grid-strong">
            {faqs.map((faq, i) => (
              <details key={i} className="group">
                <summary className="flex items-center justify-between gap-6 px-8 py-6 cursor-pointer list-none hover:bg-pb-void-card transition-colors">
                  <h3 className="font-display uppercase text-pb-ink text-xl leading-[0.95]">{faq.q}</h3>
                  <span className="font-mono text-pb-cyan text-lg leading-none group-open:hidden flex-shrink-0">+</span>
                  <span className="font-mono text-pb-cyan text-lg leading-none hidden group-open:block flex-shrink-0">−</span>
                </summary>
                <div className="px-8 pb-8">
                  <p className="font-body text-pb-ink-soft text-base leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          08 — ALCANCE (world map)
      ================================================================ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-pb-grid-strong">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            idx="08 / ALCANCE"
            label="Presença"
            headline={<>Operação em<br />7 países<span className="text-pb-red">.</span></>}
            sub="Presença global, método brasileiro. Exportamos doutrina, não produto."
          />

          <div className="relative border border-pb-grid-strong overflow-hidden">
            <CornerBrackets size={20} offset={12} />
            <img
              loading="lazy"
              src={worldMap}
              alt="Mapa de presença da BA Consultoria"
              className="w-full aspect-video object-cover"
              style={{ filter: 'grayscale(100%) brightness(0.35) contrast(1.6)' }}
            />
            {/* Overlay grid on map */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: 'linear-gradient(to right, rgba(32,221,235,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(32,221,235,0.04) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
              }}
            />
          </div>
        </div>
      </section>

      {/* ================================================================
          09 — INTELIGÊNCIA EXTERNA (mentores)
      ================================================================ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-pb-grid-strong">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            idx="09 / INTELIGÊNCIA EXTERNA"
            label="Mentores"
            headline={<>Quem nos<br />treinou<span className="text-pb-red">.</span></>}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-pb-grid-strong">
            {mentors.map((m) => (
              <div
                key={m.name}
                className="bg-pb-void p-0 overflow-hidden group hover:bg-pb-void-card transition-colors duration-300"
              >
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
                  <h3 className="font-display uppercase text-pb-ink text-lg leading-[0.95] mb-2">{m.name}</h3>
                  <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-3 whitespace-pre-line">{m.role}</p>
                  <p className="font-body text-pb-ink-soft text-xs leading-relaxed">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          10 — NÚMEROS
      ================================================================ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-pb-grid-strong">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            idx="10 / NÚMEROS"
            label="Resultados"
            headline={<>O que a BA<br />já entregou<span className="text-pb-red">.</span></>}
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-pb-grid-strong border border-pb-grid-strong">
            {stats.map((s, i) => (
              <div key={i} className="bg-pb-void p-8 flex flex-col gap-3 hover:bg-pb-void-card transition-colors duration-300">
                <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted">{s.label}</p>
                <p
                  className="font-display leading-none"
                  style={{ fontSize: 'clamp(40px, 5vw, 64px)', color: s.cyan ? 'hsl(var(--accent-cyan))' : 'hsl(var(--text-primary))' }}
                >
                  {s.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          11 — CTA FINAL
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
            Sua empresa ainda<br />
            opera no<br />
            <span className="text-pb-ink-soft">escuro</span>
            <span className="text-pb-red">?</span>
          </h2>
          <p className="mt-8 font-body text-pb-ink-soft text-lg max-w-xl mx-auto leading-relaxed">
            A conversa inicial é gratuita. Em 30 minutos, você sabe exatamente onde a IA pode operar no seu negócio.
          </p>
          <div className="mt-12">
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BA;
