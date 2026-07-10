import { useEffect, useState } from 'react';
import { Code, GraduationCap, TrendingUp, Briefcase, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Accent,
  Card,
  Section,
  SectionHeader,
  StatCard,
  SAAS_BTN_PRIMARY,
  SAAS_BTN_GHOST,
  SAAS_CARD,
  SAAS_GRADIENT_TEXT,
} from '@/components/saas/ui';
import chatgptLogo from "@/assets/chatgpt-logo.png";
import grokLogo from "@/assets/grok-logo.png";
import geminiLogo from "@/assets/gemini-logo.png";
import claudeLogo from "@/assets/claude-logo.png";
import n8nLogo from "@/assets/n8n-logo.png";
import typebotLogo from "@/assets/typebot-logo.png";
import lovableLogo from "@/assets/lovable-logo.png";
import makeLogo from "@/assets/make-logo.png";
import worldMap from "@/assets/world-map.jpeg";
import hurbana from "@/assets/clients/hurbana.png";
import client2 from "@/assets/clients/client-2.png";
import vocical from "@/assets/clients/vocical.png";
import client4 from "@/assets/clients/client-4.png";
import pincelos from "@/assets/clients/pincelos.png";
import ftx from "@/assets/clients/ftx.png";
import mjr from "@/assets/clients/mjr.png";
import cfBuffet from "@/assets/clients/cf-buffet.png";
import dionello from "@/assets/clients/dionello.png";
import client10 from "@/assets/clients/client-10.png";
import vaboPhoto from "@/assets/mentors/vabo.webp";
import joseDiogoPhoto from "@/assets/mentors/jose-diogo.webp";
import diegoBarretoPhoto from "@/assets/mentors/diego-barreto.webp";
import joaoOliverioPhoto from "@/assets/mentors/joao-oliverio.webp";
import pedroSommaPhoto from "@/assets/mentors/pedro-somma.webp";
import jonathanBarrosPhoto from "@/assets/founders/jonathan-barros.webp";
import rodrigoAlbuquerquePhoto from "@/assets/founders/rodrigo-albuquerque.webp";
import francielliBenitesPhoto from "@/assets/founders/francielli-benites.webp";

const Home2 = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = '#0A0A13';
    document.body.style.paddingTop = '0';
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.paddingTop = '';
    };
  }, []);

  const clientLogos = [hurbana, client2, vocical, client4, pincelos, ftx, mjr, cfBuffet, dionello, client10];

  const pillars = [
    { icon: Code, title: 'Tecnologia', description: 'Soluções tecnológicas inovadoras para impulsionar seu negócio', link: '/tecnologia' },
    { icon: GraduationCap, title: 'Educação', description: 'Capacitação e desenvolvimento de equipes de alta performance', link: '/educacao' },
    { icon: TrendingUp, title: 'Consultoria', description: 'Estratégias personalizadas para crescimento empresarial', link: '/consultoria' },
    { icon: Briefcase, title: 'Serviços', description: 'Serviços especializados em vendas e performance comercial', link: '/consultoria' },
  ];

  const useCases = [
    { title: "Prospecção de obras orientada por IA", category: "Captação de leads", description: "Selecionamos, entre 20.000 obras em bases oficiais, as 100 com maior probabilidade de contrato para sua construtora.", metric: "+2x obras qualificadas" },
    { title: "Automação de Notas Fiscais", category: "Operacional", description: "A automação de processamento de Notas Fiscais integrado com o seu ERP poupa horas de trabalho manual e permite foco em tarefas que agregam valor.", metric: "+30% eficiência" },
    { title: "Atendimento Inteligente 24/7", category: "Customer Success", description: "Sistema de chatbot com IA que resolve dúvidas, agenda reuniões e qualifica leads automaticamente, mesmo fora do horário comercial.", metric: "+40% conversão" },
    { title: "Análise Preditiva de Vendas", category: "Vendas", description: "Machine learning para prever tendências de vendas, identificar oportunidades e otimizar estratégias comerciais com base em dados históricos.", metric: "+25% receita" },
    { title: "Gestão de Campanhas com IA", category: "Marketing", description: "Otimização automática de campanhas publicitárias usando IA para maximizar ROI e alcançar o público certo no momento ideal.", metric: "-35% custo por lead" },
    { title: "Onboarding Automatizado", category: "RH", description: "Processo completo de integração de novos colaboradores automatizado, desde documentação até treinamentos personalizados por IA.", metric: "50% mais rápido" },
  ];

  const faqs = [
    { q: 'Como a IA pode ajudar meu negócio?', a: 'A IA pode automatizar processos repetitivos, analisar grandes volumes de dados para insights estratégicos, melhorar o atendimento ao cliente e otimizar operações. Implementamos soluções personalizadas que se adaptam às necessidades específicas do seu negócio.' },
    { q: 'Quanto tempo leva para implementar uma solução?', a: 'O tempo de implementação varia conforme a complexidade do projeto. Soluções simples podem estar operacionais em 2-4 semanas, enquanto projetos mais robustos podem levar de 2 a 3 meses. Trabalhamos com metodologias ágeis para entregar valor rapidamente.' },
    { q: 'Vocês oferecem suporte após a implementação?', a: 'Sim! Oferecemos suporte contínuo com diferentes planos de manutenção. Isso inclui monitoramento, atualizações, treinamento de equipe e suporte técnico dedicado para garantir que sua solução continue performando no máximo.' },
    { q: 'Qual o investimento necessário?', a: 'O investimento varia conforme o escopo e complexidade do projeto. Oferecemos consultoria gratuita para entender suas necessidades e apresentar uma proposta personalizada com melhor custo-benefício. Entre em contato para um orçamento sem compromisso.' },
    { q: 'Preciso ter conhecimento técnico para usar as soluções?', a: 'Não! Desenvolvemos soluções com interfaces intuitivas e oferecemos treinamento completo para sua equipe. Nosso objetivo é tornar a tecnologia acessível e fácil de usar, independentemente do nível de conhecimento técnico.' },
  ];

  const stats = [
    { value: '+7', label: 'Países Atendidos' },
    { value: '+R$130M', label: 'Em Vendas Geradas' },
    { value: '+10K', label: 'Leads Gerados' },
    { value: '+50M', label: 'Pessoas Alcançadas Organicamente' },
    { value: '+700', label: 'Clientes Atendidos' },
    { value: '+6', label: 'Anos no Mercado' },
  ];

  const technologies = [
    { name: 'Lovable', logo: lovableLogo, desc: 'Desenvolvimento rápido' },
    { name: 'n8n', logo: n8nLogo, desc: 'Automação avançada' },
    { name: 'ChatGPT', logo: chatgptLogo, desc: 'IA conversacional' },
    { name: 'Gemini', logo: geminiLogo, desc: 'IA multimodal' },
    { name: 'Claude', logo: claudeLogo, desc: 'IA analítica' },
    { name: 'Grok', logo: grokLogo, desc: 'IA em tempo real' },
    { name: 'Make', logo: makeLogo, desc: 'Integração visual' },
    { name: 'Typebot', logo: typebotLogo, desc: 'Chatbots inteligentes' },
  ];

  const mentors = [
    { name: 'Diego Barreto', role: 'CEO - iFood', photo: diegoBarretoPhoto, bio: 'Com vasta experiência em estratégia e finanças, Diego lidera a expansão e inovação no iFood, impulsionando o crescimento da empresa no setor de tecnologia e delivery. Autor do best-seller "Nova Economia," ele se destaca por sua visão disruptiva e abordagem orientada a dados para transformar o mercado brasileiro de delivery.' },
    { name: 'Pedro Somma', role: 'Ex-COO - 99 Taxi', photo: pedroSommaPhoto, bio: 'Com uma trajetória de destaque na área de mobilidade urbana, Pedro foi COO da 99 Taxi, onde desempenhou um papel fundamental na expansão e operação da empresa. Sua experiência em gestão e inovação contribuiu para consolidar a 99 como uma das principais plataformas de transporte no Brasil, impulsionando a transformação do setor de mobilidade no país.' },
    { name: 'Luis Vabo Jr.', role: 'Ex-diretor - Stone', photo: vaboPhoto, bio: 'Empreendedor serial e investidor com ampla experiência em venture capital, Luis Vabo Jr. foi diretor e sócio da Stone. Nos últimos anos, tem se destacado pela sua atuação voltada a Softskills, além de ser OPM por Harvard e Autor do livro "Falar em público é para você!".' },
    { name: 'João Olivério', role: 'CEO - Sales As A System | Country Manager - Apollo.io', photo: joaoOliverioPhoto, bio: 'Especialista em vendas e tecnologia, João Olivério é CEO da Sales As A System, onde criou uma metodologia inovadora para líderes de vendas, e Country Manager da Apollo.io, plataforma de inteligência de leads. Com passagens pela Zendesk, onde liderou operações globais desde 2013, e como mentor no G4 Sales, ele se destaca por sua visão estratégica, apoiando startups e empreendedores a alcançarem excelência no mercado.' },
    { name: 'José Diogo Costódio Rodrigues', role: 'CMO Latam & Canada - Tinder', photo: joseDiogoPhoto, bio: 'Com ampla experiência em Branding Marketing, José Costódio passou por algumas das mais Icônicas empresas do mundo, tendo sido Brand Manager na Nike e Redbull. Atualmente, é diretor geral de marketing do Tinder na América Latina e Canadá.' },
  ];

  const founders = [
    {
      name: 'Rodrigo Albuquerque', role: 'CO-FUNDADOR', photo: rodrigoAlbuquerquePhoto,
      bios: [
        'Rodrigo Albuquerque passou alguns anos sendo mentorado e aprendendo com alguns dos maiores empreendedores do país.',
        'É apaixonado por Marketing e Negócios.',
        'Tem como hobbie estudar filosofia e psicologia. Já tendo realizado diversos cursos na área (Stanford, Jordan Peterson, Jonas Madureira…)',
        'Compilou na Benites Albuquerque o aprendizado que adquiriu nessas experiências e que extraiu das mais de 100 consultorias que deu.',
      ],
    },
    {
      name: 'Francielli Benites', role: 'CO-FUNDADORA', photo: francielliBenitesPhoto,
      bios: [
        'Francielli Benites tem um histórico de conquistas que carrega desde a adolescência em uma gama de atividades. Conquistou o sétimo lugar do país em um concurso de redação, tem diversas medalhas da olimpíada de matemática, além de ter cursado matemática e Engenharia Civil ao mesmo tempo.',
        'Ao sair da faculdade, expandiu seus interesses para a área de humanas, mergulhando em literatura clássica.',
        'Na Benites Albuquerque, ela usa o seu amplo conhecimento da realidade para ter ideias únicas para resolver desafios de forma eficiente e criativa.',
      ],
    },
    {
      name: 'Jonathan Barros', role: 'CO-FUNDADOR', photo: jonathanBarrosPhoto,
      bios: [
        'Jonathan Barros é entusiasta por vendas, relacionamento humano e performance pessoal e profissional.',
        'Tem como missão, ensinar, treinar e transformar times comerciais, gerando os resultados e a transformação que os clientes buscam.',
        'Já liderou times de vendas e foi responsável por gerar mais de R$30 milhões em faturamento nos últimos anos. Hoje, compila em sua experiência o aprendizado de mais de 18 anos no mercado B2B, criando conexões sólidas e soluções estratégicas para empresas de diferentes segmentos.',
        'Tem como hobbies a corrida, leitura, futebol e Muay Thai — práticas que refletem disciplina, resiliência e busca constante por superação.',
      ],
    },
  ];

  const navLinks = [
    { label: 'SOBRE', href: '#fundadores' },
    { label: 'PILARES', href: '#pilares' },
    { label: 'CASES', href: '#cases' },
    { label: 'CONTATO', href: '#contato' },
  ];

  return (
    <div className="min-h-screen bg-saas-void text-saas-body antialiased">
      <style>{`
        @keyframes home2-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .home2-animate-scroll {
          animation: home2-scroll 30s linear infinite;
        }
        .home2-animate-scroll:hover {
          animation-play-state: paused;
        }

        @keyframes home2-scroll-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .home2-animate-scroll-slow {
          animation: home2-scroll-slow 60s linear infinite;
        }
        .home2-animate-scroll-slow:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Pro-Life Banner */}
      <div className="relative z-50 border-b border-white/[0.06] bg-saas-void-2 py-3 px-4 text-center text-sm text-saas-muted">
        Nós somos uma empresa pró-vida. Somos contra todo o tipo de aborto.
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-40 border-b border-white/[0.06] bg-saas-void/80 backdrop-blur-xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between h-16">
          <span className="flex items-center gap-2.5 font-bold text-saas-ink text-[15px]">
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-saas-cyan to-saas-violet" />
            BA · Consultoria
          </span>
          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(l => (
              <a
                key={l.label}
                href={l.href}
                className="font-mono text-[11px] uppercase tracking-[0.14em] text-saas-muted hover:text-saas-ink transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
          {/* Mobile hamburger */}
          <button className="md:hidden text-saas-ink" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-3">
            {navLinks.map(l => (
              <a
                key={l.label}
                href={l.href}
                className="font-mono text-[11px] uppercase tracking-[0.14em] text-saas-muted py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <header className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full bg-saas-violet/20 blur-[110px]" />
          <div className="absolute -top-10 right-0 w-[520px] h-[420px] rounded-full bg-saas-cyan/15 blur-[110px]" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 animate-fade-in">
          <span className="font-mono inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-saas-cyan mb-6">
            Empresário · Estrategista · Criador
          </span>
          <h1 className="font-extrabold text-saas-ink text-[clamp(28px,4vw,50px)] leading-[1.1] tracking-tight mb-6 max-w-[20ch]">
            Atraia mais <Accent>clientes</Accent> para o seu negócio
          </h1>
          <p className="text-saas-body text-base md:text-lg leading-relaxed max-w-[52ch] mb-9">
            Ecossistema completo de soluções em Marketing, Tecnologia e Comercial para aumentar o lucro do seu negócio.
          </p>
          <a href="#contato" className={SAAS_BTN_PRIMARY}>Falar com um especialista</a>
        </div>
      </header>

      {/* Founders */}
      <Section id="fundadores" className="bg-saas-void-2" container="max-w-6xl">
        <SectionHeader eyebrow="02 — Fundadores" center className="mb-14 animate-fade-in">
          Nossos Fundadores
        </SectionHeader>
        <div className="grid lg:grid-cols-3 gap-12">
          {founders.map((f, i) => (
            <div key={i} className="space-y-5 animate-fade-in">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-white/[0.09]">
                <img loading="lazy" src={f.photo} alt={f.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-saas-ink text-2xl tracking-tight">{f.name}</h3>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-saas-cyan">{f.role}</p>
              <div className="space-y-4">
                {f.bios.map((b, j) => (
                  <p key={j} className="text-saas-body text-[15.5px] leading-relaxed">{b}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Pillars */}
      <Section id="pilares" container="max-w-6xl">
        <SectionHeader eyebrow="03 — Pilares" center className="mb-14 animate-fade-in">
          Nossos Pilares
        </SectionHeader>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <Card key={i} className="p-7 flex flex-col animate-fade-in">
              <span className="inline-flex w-11 h-11 rounded-full bg-gradient-to-br from-saas-cyan to-saas-violet items-center justify-center mb-5">
                <p.icon className="w-5 h-5 text-saas-void" />
              </span>
              <h3 className="font-bold text-saas-ink text-lg mb-2.5">{p.title}</h3>
              <p className="text-saas-muted text-[14.5px] leading-relaxed mb-6 flex-1">{p.description}</p>
              <Link
                to={p.link}
                onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                className={SAAS_BTN_GHOST + " !px-5 !py-2.5 !text-[13px] self-start"}
              >
                Saiba Mais
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      {/* Technologies */}
      <Section className="bg-saas-void-2" container="max-w-6xl">
        <div className="text-center mb-14 animate-fade-in">
          <SectionHeader eyebrow="04 — Tecnologias" center>
            Tecnologias
          </SectionHeader>
          <p className="mt-4 text-saas-muted text-base md:text-lg leading-relaxed max-w-[60ch] mx-auto">
            Utilizamos as mais avançadas ferramentas e plataformas para entregar soluções de ponta
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {technologies.map((t, i) => (
            <Card key={i} className="p-6 flex flex-col items-center justify-center aspect-square text-center animate-fade-in">
              <img loading="lazy" src={t.logo} alt={t.name} className="w-16 h-16 mb-3 object-contain" />
              <h3 className="font-bold text-saas-ink text-base mb-1.5">{t.name}</h3>
              <p className="text-saas-faint text-xs leading-relaxed">{t.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Use Cases Carousel */}
      <Section id="cases" className="overflow-hidden" container="max-w-6xl">
        <div className="text-center mb-14 animate-fade-in">
          <SectionHeader eyebrow="05 — Cases de Uso" center>
            Cases de Uso
          </SectionHeader>
          <p className="mt-4 text-saas-muted text-base md:text-lg leading-relaxed max-w-[60ch] mx-auto">
            Soluções comprovadas que transformam negócios
          </p>
        </div>
        <div className="relative">
          <div className="flex home2-animate-scroll-slow gap-6">
            {[...useCases, ...useCases].map((uc, i) => (
              <div key={i} className={SAAS_CARD + " flex-shrink-0 w-[380px] p-8"}>
                <div className="mb-4">
                  <span className="inline-flex items-center rounded-full border border-white/[0.10] bg-white/[0.03] px-3 py-1 text-[11px] font-mono uppercase tracking-[0.14em] text-saas-cyan">
                    {uc.category}
                  </span>
                </div>
                <h3 className="font-bold text-saas-ink text-xl tracking-tight mb-4 min-h-[56px]">{uc.title}</h3>
                <p className="text-saas-muted text-[15px] leading-relaxed mb-6 min-h-[96px]">{uc.description}</p>
                <div className="pt-4 border-t border-white/[0.08]">
                  <p className={"font-extrabold text-lg " + SAAS_GRADIENT_TEXT}>{uc.metric}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Clients */}
      <Section className="bg-saas-void-2" container="max-w-6xl">
        <SectionHeader eyebrow="06 — Clientes" center className="mb-14 animate-fade-in">
          Nossos Clientes
        </SectionHeader>
        <div className="relative overflow-hidden">
          <div className="flex home2-animate-scroll">
            {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, i) => (
              <div key={i} className="flex-shrink-0 mx-8 grayscale hover:grayscale-0 transition-all duration-300">
                <img loading="lazy" src={logo} alt={`Cliente ${i + 1}`} className="h-16 md:h-24 w-auto object-contain opacity-50 hover:opacity-80" />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section container="max-w-4xl">
        <div className="text-center mb-14 animate-fade-in">
          <SectionHeader eyebrow="07 — Dúvidas" center>
            Perguntas Frequentes
          </SectionHeader>
          <p className="mt-4 text-saas-muted text-base md:text-lg leading-relaxed max-w-[52ch] mx-auto">
            Tire suas dúvidas sobre nossos serviços e soluções
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <Card key={i} className="overflow-hidden animate-fade-in">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer p-6 text-saas-ink transition-colors hover:bg-white/[0.03]">
                  <h3 className="font-bold text-base md:text-lg tracking-tight">{faq.q}</h3>
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180 flex-shrink-0 ml-4 text-saas-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-saas-body text-[15.5px] leading-relaxed">
                  <p>{faq.a}</p>
                </div>
              </details>
            </Card>
          ))}
        </div>
      </Section>

      {/* World Map */}
      <Section className="bg-saas-void-2" container="max-w-6xl">
        <SectionHeader eyebrow="08 — Presença Global" center className="mb-14 animate-fade-in">
          BA Consultoria no Mundo
        </SectionHeader>
        <div className="relative aspect-video max-w-4xl mx-auto overflow-hidden rounded-2xl border border-white/[0.09] animate-fade-in">
          <img loading="lazy" src={worldMap} alt="Mapa Mundi - BA Consultoria no Mundo" className="w-full h-full object-cover scale-110" />
        </div>
        <p className="text-center mt-10 max-w-[52ch] mx-auto text-saas-body text-base md:text-lg leading-relaxed">
          Presença global, impacto local. Levando expertise empresarial brasileira para o mundo.
        </p>
      </Section>

      {/* Mentors */}
      <Section container="max-w-7xl">
        <SectionHeader eyebrow="09 — Mentores" center className="mb-14 animate-fade-in">
          Nossos Mentores e Professores
        </SectionHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {mentors.map((m, i) => (
            <Card key={i} className="p-5 animate-fade-in">
              <div className="aspect-square overflow-hidden mb-4 rounded-xl border border-white/[0.09]">
                <img loading="lazy" src={m.photo} alt={m.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-saas-ink text-base tracking-tight mb-1">{m.name}</h3>
              <p className="text-saas-cyan text-[12.5px] font-semibold mb-3">{m.role}</p>
              <p className="text-saas-muted text-[13.5px] leading-relaxed">{m.bio}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Stats */}
      <Section className="bg-saas-void-2" container="max-w-6xl">
        <SectionHeader eyebrow="10 — Resultados" center className="mb-14 animate-fade-in">
          Números que Falam por Si
        </SectionHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 animate-fade-in">
          {stats.map((s, i) => (
            <StatCard key={i} value={s.value} label={s.label} accent />
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer id="contato" className="border-t border-white/[0.06] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-flex items-center gap-2.5 font-bold text-saas-ink text-xl">
              <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-saas-cyan to-saas-violet" />
              BA · Consultoria
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 mb-10">
            {['TECNOLOGIA', 'EDUCAÇÃO', 'CONSULTORIA', 'SERVIÇOS'].map(l => (
              <span key={l} className="font-mono text-[11px] uppercase tracking-[0.14em] text-saas-faint hover:text-saas-ink transition-colors cursor-pointer">
                {l}
              </span>
            ))}
          </div>
          <p className="italic text-saas-body text-base mt-8 mb-6">
            "O estilo é a roupa da ideia. Vista bem."
          </p>
          <p className="font-mono text-[11px] text-saas-faint-2">
            © {new Date().getFullYear()} BA Consultoria. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home2;
