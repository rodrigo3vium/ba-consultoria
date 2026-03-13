import { useEffect, useState } from 'react';
import { Code, GraduationCap, TrendingUp, Briefcase, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
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
import vaboPhoto from "@/assets/mentors/vabo.jpg";
import joseDiogoPhoto from "@/assets/mentors/jose-diogo.webp";
import diegoBarretoPhoto from "@/assets/mentors/diego-barreto.webp";
import joaoOliverioPhoto from "@/assets/mentors/joao-oliverio.png";
import pedroSommaPhoto from "@/assets/mentors/pedro-somma.webp";
import jonathanBarrosPhoto from "@/assets/founders/jonathan-barros.jpg";
import rodrigoAlbuquerquePhoto from "@/assets/founders/rodrigo-albuquerque.jpg";
import francielliBenitesPhoto from "@/assets/founders/francielli-benites.jpg";

/* ── Color Constants ── */
const C = {
  bg: '#0e1a0f',
  bgAlt: '#162318',
  card: '#1c2e1e',
  hover: '#2d4a30',
  gold: '#c9a227',
  parchment: '#f0e6d0',
  muted: '#6b7d5a',
  oxblood: '#6b1a1a',
  footer: '#0a1209',
};

const Ornament = () => (
  <div className="flex items-center justify-center py-4" style={{ gap: 16 }}>
    <div className="h-px flex-1 max-w-[120px]" style={{ background: `${C.gold}33` }} />
    <span style={{ color: C.gold, opacity: 0.5, fontSize: 14, letterSpacing: 4 }}>✦</span>
    <div className="h-px flex-1 max-w-[120px]" style={{ background: `${C.gold}33` }} />
  </div>
);

const Home2 = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = C.bg;
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
    <div className="dark-academia-grain min-h-screen" style={{ background: C.bg, fontFamily: "'Cormorant Garamond', serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=IM+Fell+English:ital@1&family=Cormorant+Garamond:wght@400;600&display=swap');
        
        .dark-academia-grain::before {
          content: '';
          position: fixed;
          inset: 0;
          z-index: 9999;
          pointer-events: none;
          opacity: 0.04;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        }

        .font-playfair { font-family: 'Playfair Display', serif; font-weight: 700; }
        .font-fell { font-family: 'IM Fell English', serif; font-style: italic; }
        .font-cormorant { font-family: 'Cormorant Garamond', serif; }

        .da-eyebrow {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 5px;
          color: ${C.gold}b3;
          font-size: 13px;
        }

        .da-cta {
          border: 1px solid ${C.gold};
          color: ${C.gold};
          background: transparent;
          padding: 14px 32px;
          text-transform: uppercase;
          letter-spacing: 3px;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          font-size: 14px;
          border-radius: 2px;
          transition: all 400ms ease;
          cursor: pointer;
          display: inline-block;
        }
        .da-cta:hover {
          background: ${C.gold};
          color: ${C.bg};
        }

        .da-card {
          background: ${C.card};
          border: 1px solid ${C.gold}1a;
          border-radius: 4px;
          transition: all 400ms ease;
        }
        .da-card:hover {
          border-color: ${C.gold}66;
        }

        @keyframes da-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .da-animate-scroll {
          animation: da-scroll 30s linear infinite;
        }
        .da-animate-scroll:hover {
          animation-play-state: paused;
        }

        @keyframes da-scroll-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .da-animate-scroll-slow {
          animation: da-scroll-slow 60s linear infinite;
        }
        .da-animate-scroll-slow:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Pro-Life Banner */}
      <div style={{ background: C.bgAlt, borderBottom: `1px solid ${C.gold}26`, color: C.parchment }} className="py-3 px-4 text-center text-sm font-cormorant relative z-50">
        Nós somos uma empresa pró-vida. Somos contra todo o tipo de aborto.
      </div>

      {/* Navbar */}
      <nav style={{ background: C.bgAlt, borderBottom: `1px solid ${C.gold}33` }} className="sticky top-0 z-40 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex items-center justify-between h-16">
          <span className="font-playfair text-lg" style={{ color: C.gold, letterSpacing: 3 }}>
            BA · CONSULTORIA
          </span>
          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(l => (
              <a key={l.label} href={l.href} className="font-cormorant text-sm transition-colors duration-300" style={{ color: C.muted, letterSpacing: 4, textTransform: 'uppercase' as const }}
                onMouseEnter={e => (e.currentTarget.style.color = C.parchment)}
                onMouseLeave={e => (e.currentTarget.style.color = C.muted)}
              >
                {l.label}
              </a>
            ))}
          </div>
          {/* Mobile hamburger */}
          <button className="md:hidden" style={{ color: C.parchment }} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-3">
            {navLinks.map(l => (
              <a key={l.label} href={l.href} className="font-cormorant text-sm py-2" style={{ color: C.muted, letterSpacing: 4 }} onClick={() => setMobileMenuOpen(false)}>
                {l.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section style={{ background: C.bg, padding: 'clamp(80px, 12vw, 160px) 24px' }} className="relative">
        <div className="max-w-5xl mx-auto relative">
          {/* Vertical decorative line */}
          <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-[100px]" style={{ background: `${C.gold}33` }} />

          <div className="da-eyebrow mb-6">✦&nbsp;&nbsp;&nbsp;Empresário · Estrategista · Criador</div>
          <h1 className="font-playfair leading-tight mb-8" style={{ color: C.parchment, fontSize: 'clamp(36px, 5vw, 64px)' }}>
            Atraia mais <span className="font-playfair italic" style={{ color: C.gold }}>clientes</span> para o seu negócio
          </h1>
          <p className="font-cormorant mb-10 max-w-3xl" style={{ color: C.muted, fontSize: 'clamp(17px, 2vw, 20px)', lineHeight: 1.85 }}>
            Ecossistema completo de soluções em Marketing, Tecnologia e Comercial para aumentar o lucro do seu negócio.
          </p>
          <a href="#contato" className="da-cta">Falar com um especialista</a>
        </div>
      </section>

      <Ornament />

      {/* Founders */}
      <section id="fundadores" style={{ background: C.bgAlt, padding: 'clamp(60px, 10vw, 140px) 24px' }}>
        <div className="max-w-6xl mx-auto">
          <div className="da-eyebrow text-center mb-4">02 — Fundadores</div>
          <h2 className="font-playfair text-center mb-16" style={{ color: C.parchment, fontSize: 'clamp(28px, 4vw, 48px)' }}>
            Nossos Fundadores
          </h2>
          <div className="grid lg:grid-cols-3 gap-12">
            {founders.map((f, i) => (
              <div key={i} className="space-y-6">
                <div className="aspect-[4/5] overflow-hidden" style={{ borderRadius: 4, border: `1px solid ${C.gold}33` }}>
                  <img src={f.photo} alt={f.name} className="w-full h-full object-cover grayscale" style={{ mixBlendMode: 'luminosity' }} />
                </div>
                <h3 className="font-playfair text-2xl md:text-3xl" style={{ color: C.parchment }}>{f.name}</h3>
                <p className="font-cormorant font-semibold text-sm" style={{ color: C.gold, letterSpacing: 3, textTransform: 'uppercase' }}>{f.role}</p>
                <div className="space-y-4">
                  {f.bios.map((b, j) => (
                    <p key={j} className="font-cormorant" style={{ color: C.muted, fontSize: 17, lineHeight: 1.85 }}>{b}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Ornament />

      {/* Pillars */}
      <section id="pilares" style={{ background: C.bg, padding: 'clamp(60px, 10vw, 140px) 24px' }}>
        <div className="max-w-6xl mx-auto">
          <div className="da-eyebrow text-center mb-4">03 — Pilares</div>
          <h2 className="font-playfair text-center mb-16" style={{ color: C.parchment, fontSize: 'clamp(28px, 4vw, 48px)' }}>
            Nossos Pilares
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((p, i) => (
              <div key={i} className="da-card p-8 group">
                <div className="w-14 h-14 mb-6 flex items-center justify-center" style={{ border: `1px solid ${C.gold}33`, borderRadius: 4 }}>
                  <p.icon className="w-7 h-7" style={{ color: C.gold }} />
                </div>
                <h3 className="font-playfair text-xl mb-4" style={{ color: C.parchment }}>{p.title}</h3>
                <p className="font-cormorant mb-6" style={{ color: C.muted, fontSize: 16, lineHeight: 1.85 }}>{p.description}</p>
                <Link to={p.link} onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}>
                  <span className="da-cta" style={{ padding: '10px 20px', fontSize: 12 }}>Saiba Mais</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Ornament />

      {/* Technologies */}
      <section style={{ background: C.bgAlt, padding: 'clamp(60px, 10vw, 140px) 24px', borderTop: `1px solid ${C.gold}1a`, borderBottom: `1px solid ${C.gold}1a` }}>
        <div className="max-w-6xl mx-auto">
          <div className="da-eyebrow text-center mb-4">04 — Tecnologias</div>
          <h2 className="font-playfair text-center mb-4" style={{ color: C.parchment, fontSize: 'clamp(28px, 4vw, 48px)' }}>
            Tecnologias
          </h2>
          <p className="font-cormorant text-center mb-16 max-w-3xl mx-auto" style={{ color: C.muted, fontSize: 17, lineHeight: 1.85 }}>
            Utilizamos as mais avançadas ferramentas e plataformas para entregar soluções de ponta
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {technologies.map((t, i) => (
              <div key={i} className="da-card p-6 flex flex-col items-center justify-center aspect-square text-center">
                <img src={t.logo} alt={t.name} className="w-16 h-16 mb-3 object-contain" />
                <h3 className="font-playfair text-lg mb-2" style={{ color: C.parchment }}>{t.name}</h3>
                <p className="font-cormorant text-xs" style={{ color: C.muted }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Ornament />

      {/* Use Cases Carousel */}
      <section id="cases" style={{ background: C.bg, padding: 'clamp(60px, 10vw, 140px) 24px' }} className="overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="da-eyebrow text-center mb-4">05 — Cases de Uso</div>
          <h2 className="font-playfair text-center mb-4" style={{ color: C.parchment, fontSize: 'clamp(28px, 4vw, 48px)' }}>
            Cases de Uso
          </h2>
          <p className="font-cormorant text-center mb-16 max-w-3xl mx-auto" style={{ color: C.muted, fontSize: 17 }}>
            Soluções comprovadas que transformam negócios
          </p>
          <div className="relative">
            <div className="flex da-animate-scroll-slow gap-6">
              {[...useCases, ...useCases].map((uc, i) => (
                <div key={i} className="da-card flex-shrink-0 w-[380px] p-8">
                  <div className="mb-4">
                    <span className="font-cormorant text-xs font-semibold px-3 py-1" style={{ border: `1px solid ${C.gold}33`, color: C.gold, borderRadius: 2, letterSpacing: 2, textTransform: 'uppercase' }}>
                      {uc.category}
                    </span>
                  </div>
                  <h3 className="font-playfair text-xl mb-4 min-h-[56px]" style={{ color: C.parchment }}>{uc.title}</h3>
                  <p className="font-cormorant mb-6 min-h-[96px]" style={{ color: C.muted, fontSize: 16, lineHeight: 1.85 }}>{uc.description}</p>
                  <div className="pt-4" style={{ borderTop: `1px solid ${C.gold}1a` }}>
                    <p className="font-playfair text-lg" style={{ color: C.gold }}>{uc.metric}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Ornament />

      {/* Clients */}
      <section style={{ background: C.bgAlt, padding: 'clamp(60px, 10vw, 120px) 24px', borderTop: `1px solid ${C.gold}1a`, borderBottom: `1px solid ${C.gold}1a` }}>
        <div className="max-w-6xl mx-auto">
          <div className="da-eyebrow text-center mb-4">06 — Clientes</div>
          <h2 className="font-playfair text-center mb-16" style={{ color: C.parchment, fontSize: 'clamp(28px, 4vw, 48px)' }}>
            Nossos Clientes
          </h2>
          <div className="relative overflow-hidden">
            <div className="flex da-animate-scroll">
              {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, i) => (
                <div key={i} className="flex-shrink-0 mx-8 grayscale hover:grayscale-0 transition-all duration-300">
                  <img src={logo} alt={`Cliente ${i + 1}`} className="h-16 md:h-24 w-auto object-contain opacity-50 hover:opacity-80" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Ornament />

      {/* FAQ */}
      <section style={{ background: C.bg, padding: 'clamp(60px, 10vw, 140px) 24px' }}>
        <div className="max-w-4xl mx-auto">
          <div className="da-eyebrow text-center mb-4">07 — Dúvidas</div>
          <h2 className="font-playfair text-center mb-4" style={{ color: C.parchment, fontSize: 'clamp(28px, 4vw, 48px)' }}>
            Perguntas Frequentes
          </h2>
          <p className="font-cormorant text-center mb-16 max-w-2xl mx-auto" style={{ color: C.muted, fontSize: 17 }}>
            Tire suas dúvidas sobre nossos serviços e soluções
          </p>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="da-card overflow-hidden">
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer p-6 transition-colors duration-300"
                    style={{ color: C.parchment }}
                    onMouseEnter={e => (e.currentTarget.style.background = `${C.hover}40`)}
                    onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                  >
                    <h3 className="font-playfair text-lg">{faq.q}</h3>
                    <svg className="w-5 h-5 transition-transform group-open:rotate-180 flex-shrink-0 ml-4" style={{ color: C.gold }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 font-cormorant" style={{ color: C.muted, fontSize: 17, lineHeight: 1.85 }}>
                    <p>{faq.a}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Ornament />

      {/* World Map */}
      <section style={{ background: C.bgAlt, padding: 'clamp(60px, 10vw, 140px) 24px' }}>
        <div className="max-w-6xl mx-auto">
          <div className="da-eyebrow text-center mb-4">08 — Presença Global</div>
          <h2 className="font-playfair text-center mb-16" style={{ color: C.parchment, fontSize: 'clamp(28px, 4vw, 48px)' }}>
            BA Consultoria no Mundo
          </h2>
          <div className="relative aspect-video max-w-4xl mx-auto overflow-hidden" style={{ borderRadius: 4, border: `1px solid ${C.gold}33` }}>
            <img src={worldMap} alt="Mapa Mundi - BA Consultoria no Mundo" className="w-full h-full object-cover scale-110" />
          </div>
          <p className="font-cormorant text-center mt-12 max-w-2xl mx-auto" style={{ color: C.muted, fontSize: 18, lineHeight: 1.85 }}>
            Presença global, impacto local. Levando expertise empresarial brasileira para o mundo.
          </p>
        </div>
      </section>

      <Ornament />

      {/* Mentors */}
      <section style={{ background: C.bg, padding: 'clamp(60px, 10vw, 140px) 24px', borderTop: `1px solid ${C.gold}1a` }}>
        <div className="max-w-7xl mx-auto">
          <div className="da-eyebrow text-center mb-4">09 — Mentores</div>
          <h2 className="font-playfair text-center mb-16" style={{ color: C.parchment, fontSize: 'clamp(28px, 4vw, 48px)' }}>
            Nossos Mentores e Professores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {mentors.map((m, i) => (
              <div key={i} className="da-card p-6">
                <div className="aspect-square overflow-hidden mb-4" style={{ borderRadius: 4, border: `1px solid ${C.gold}26` }}>
                  <img src={m.photo} alt={m.name} className="w-full h-full object-cover grayscale" />
                </div>
                <h3 className="font-playfair text-lg mb-1" style={{ color: C.parchment }}>{m.name}</h3>
                <p className="font-cormorant font-semibold text-sm mb-3" style={{ color: C.gold }}>{m.role}</p>
                <p className="font-cormorant text-sm" style={{ color: C.muted, lineHeight: 1.75 }}>{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Ornament />

      {/* Stats */}
      <section style={{ background: C.bgAlt, padding: 'clamp(60px, 10vw, 140px) 24px', borderTop: `1px solid ${C.gold}1a` }}>
        <div className="max-w-6xl mx-auto">
          <div className="da-eyebrow text-center mb-4">10 — Resultados</div>
          <h2 className="font-playfair text-center mb-16" style={{ color: C.parchment, fontSize: 'clamp(28px, 4vw, 48px)' }}>
            Números que Falam por Si
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="da-card p-8 text-center">
                <div className="font-playfair mb-4" style={{ color: C.gold, fontSize: 'clamp(36px, 5vw, 56px)' }}>{s.value}</div>
                <p className="font-cormorant font-semibold" style={{ color: C.parchment, fontSize: 16 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" style={{ background: C.footer, borderTop: `1px solid ${C.gold}33`, padding: '80px 24px 40px' }}>
        <div className="max-w-6xl mx-auto text-center">
          <span className="font-playfair text-2xl block mb-8" style={{ color: C.gold, letterSpacing: 3 }}>
            BA · CONSULTORIA
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8 mb-10">
            {['TECNOLOGIA', 'EDUCAÇÃO', 'CONSULTORIA', 'SERVIÇOS'].map(l => (
              <span key={l} className="font-cormorant text-sm transition-colors duration-300 cursor-pointer" style={{ color: C.muted, letterSpacing: 4 }}
                onMouseEnter={e => (e.currentTarget.style.color = C.parchment)}
                onMouseLeave={e => (e.currentTarget.style.color = C.muted)}
              >
                {l}
              </span>
            ))}
          </div>
          <Ornament />
          <p className="font-fell mt-8 mb-6" style={{ color: C.muted, fontSize: 18 }}>
            "O estilo é a roupa da ideia. Vista bem."
          </p>
          <p className="font-mono text-xs" style={{ color: `${C.muted}80` }}>
            © {new Date().getFullYear()} BA Consultoria. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home2;
