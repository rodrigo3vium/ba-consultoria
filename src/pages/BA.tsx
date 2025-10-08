import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Code, GraduationCap, TrendingUp } from 'lucide-react';

const BA = () => {
  const clientLogos = [
    '/lovable-uploads/09c2831d-7172-433f-878b-484b0cc8a22c.png',
    '/lovable-uploads/5bb241ec-4824-4db5-813c-2e1292f72128.png',
    '/lovable-uploads/98363185-f8bf-40af-bd61-1fd97f8c9ba7.png',
    '/lovable-uploads/cc361376-bdd4-4e0e-a3f3-0abb48b729f8.png',
  ];

  const pillars = [
    {
      icon: Code,
      title: 'Tecnologia',
      description: 'Soluções tecnológicas inovadoras para impulsionar seu negócio'
    },
    {
      icon: GraduationCap,
      title: 'Educação',
      description: 'Capacitação e desenvolvimento de equipes de alta performance'
    },
    {
      icon: TrendingUp,
      title: 'Consultoria',
      description: 'Estratégias personalizadas para crescimento empresarial'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Pro-Life Banner */}
      <div className="bg-ba-blue-medium text-white py-3 px-4 text-center font-medium text-sm">
        Nós somos uma empresa pró-vida. Somos contra todo o tipo de aborto.
      </div>

      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-ba-blue-light/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-ba-orange/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-ba-blue-light via-white to-ba-orange bg-clip-text text-transparent leading-tight">
              Benites Albuquerque é um Ecossistema de soluções empresariais construído para fazer empreendedores brasileiros prosperarem.
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              Tudo o que você precisa para aumentar a geração de receita da sua empresa. Marketing, Vendas, CS e Tecnologia.
            </h2>
            <div className="pt-8">
              <Button size="lg" variant="hero" className="text-lg px-10 py-6">
                Conheça Nossas Soluções
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About/Who We Are Section */}
      <section className="py-20 px-4 relative bg-black border-y border-ba-blue-light/10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Benites Albuquerque
              </h2>
              <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-ba-blue-light to-ba-orange bg-clip-text text-transparent">
                TRANSFORMANDO NEGÓCIOS COM ESTRATÉGIA E INOVAÇÃO
              </p>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Fundador da BA Consultoria • Especialista em Growth e IA para Negócios • Mentor de Empreendedores
                </p>
                <p>
                  Com mais de uma década de experiência, a BA já ajudou centenas de empresas a alcançarem crescimento sustentável através de estratégias personalizadas, implementação de tecnologia e desenvolvimento de equipes de alta performance.
                </p>
              </div>
              
              {/* Badges/Icons */}
              <div className="flex gap-8 pt-4">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Code className="w-6 h-6 text-background" />
                  </div>
                  <span className="text-xs text-muted-foreground text-center">
                    Tecnologia<br />Avançada
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-background" />
                  </div>
                  <span className="text-xs text-muted-foreground text-center">
                    Educação<br />Executiva
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-background" />
                  </div>
                  <span className="text-xs text-muted-foreground text-center">
                    Consultoria<br />Estratégica
                  </span>
                </div>
              </div>
            </div>

            {/* Right Image Placeholder */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-ba-blue-light/20 bg-gradient-to-br from-ba-blue-dark/50 to-black/50 backdrop-blur-sm">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-primary/20 flex items-center justify-center">
                      <svg className="w-12 h-12 text-ba-blue-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <p className="text-muted-foreground text-sm">Foto do fundador</p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 top-8 -right-8 w-72 h-72 bg-ba-blue-light/10 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 -bottom-8 -left-8 w-64 h-64 bg-ba-orange/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-20 px-4 relative bg-gradient-to-b from-black via-ba-gray-dark/20 to-black">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Nossos Pilares
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="group relative bg-black/80 backdrop-blur-sm border border-ba-blue-light/20 rounded-2xl p-8 hover:shadow-glow hover:border-ba-blue-light/40 transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <pillar.icon className="w-8 h-8 text-background" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 px-4 bg-black border-y border-ba-blue-light/10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Nossos Clientes
          </h2>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-8 grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <img
                    src={logo}
                    alt={`Cliente ${index + 1}`}
                    className="h-16 md:h-24 w-auto object-contain opacity-70 hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* World Map Section */}
      <section className="py-20 px-4 relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ba-blue-light/3 to-transparent"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            BA Consultoria no Mundo
          </h2>
          <div className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden border border-ba-blue-light/20 bg-black/90 backdrop-blur-sm p-8">
            <div className="flex items-center justify-center h-full">
              <svg viewBox="0 0 1000 500" className="w-full h-full opacity-80">
                {/* Simplified world map SVG */}
                <path
                  d="M150,150 L200,120 L250,130 L280,110 L320,120 L350,100 L380,110 L420,90 L450,100 L480,120 L500,110 L520,130 L550,120 L580,140 L600,130 L620,150 L640,140 L660,160 L680,150 L700,170 L720,160 L740,180 L760,170 L780,190 L800,180 L820,200 L840,190 L850,210 M150,200 L180,220 L200,210 L220,230 L240,220 L260,240 L280,230 L300,250 L320,240 L340,260 L360,250 L380,270 L400,260 L420,280 L440,270 L460,290 L480,280 L500,300 L520,290 L540,310 L560,300 L580,320 L600,310 L620,330 L640,320 L660,340 L680,330 L700,350"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-ba-blue-light"
                />
                {/* Location markers */}
                <circle cx="280" cy="180" r="8" className="fill-ba-orange animate-pulse" />
                <circle cx="500" cy="200" r="8" className="fill-ba-orange animate-pulse" style={{ animationDelay: '0.5s' }} />
                <circle cx="720" cy="220" r="8" className="fill-ba-orange animate-pulse" style={{ animationDelay: '1s' }} />
              </svg>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Presença global, impacto local. Levando expertise empresarial brasileira para o mundo.
            </p>
          </div>
        </div>
      </section>

      {/* Leaders Section */}
      <section className="py-20 px-4 relative bg-black border-t border-ba-blue-light/10">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Líderes que Confiaram em Nós
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Diego Barreto */}
            <div className="group bg-black/80 backdrop-blur-sm border border-ba-blue-light/20 rounded-2xl p-6 hover:shadow-glow hover:border-ba-blue-light/40 transition-all duration-500">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-foreground mb-1">Diego Barreto</h3>
                <p className="text-ba-orange font-semibold text-sm mb-2">CEO - iFood</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Com vasta experiência em estratégia e finanças, Diego lidera a expansão e inovação no iFood, impulsionando o crescimento da empresa no setor de tecnologia e delivery. Autor do best-seller "Nova Economia," ele se destaca por sua visão disruptiva e abordagem orientada a dados para transformar o mercado brasileiro de delivery.
                </p>
              </div>
            </div>

            {/* Pedro Somma */}
            <div className="group bg-black/80 backdrop-blur-sm border border-ba-blue-light/20 rounded-2xl p-6 hover:shadow-glow hover:border-ba-blue-light/40 transition-all duration-500">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-foreground mb-1">Pedro Somma</h3>
                <p className="text-ba-orange font-semibold text-sm mb-2">Ex-COO - 99 Taxi</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Com uma trajetória de destaque na área de mobilidade urbana, Pedro foi COO da 99 Taxi, onde desempenhou um papel fundamental na expansão e operação da empresa. Sua experiência em gestão e inovação contribuiu para consolidar a 99 como uma das principais plataformas de transporte no Brasil, impulsionando a transformação do setor de mobilidade no país.
                </p>
              </div>
            </div>

            {/* Luis Vabo Jr. */}
            <div className="group bg-black/80 backdrop-blur-sm border border-ba-blue-light/20 rounded-2xl p-6 hover:shadow-glow hover:border-ba-blue-light/40 transition-all duration-500">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-foreground mb-1">Luis Vabo Jr.</h3>
                <p className="text-ba-orange font-semibold text-sm mb-2">Ex-diretor - Stone</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Empreendedor serial e investidor com ampla experiência em venture capital, Luis Vabo Jr. foi diretor e sócio da Stone. Nos últimos anos, tem se destacado pela sua atuação voltada a Softskills, além de ser OPM por Harvard e Autor do livro "Falar em público é para você!".
                </p>
              </div>
            </div>

            {/* João Olivério */}
            <div className="group bg-black/80 backdrop-blur-sm border border-ba-blue-light/20 rounded-2xl p-6 hover:shadow-glow hover:border-ba-blue-light/40 transition-all duration-500">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-foreground mb-1">João Olivério</h3>
                <p className="text-ba-orange font-semibold text-sm mb-2">CEO - Sales As A System | Country Manager - Apollo.io</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Especialista em vendas e tecnologia, João Olivério é CEO da Sales As A System, onde criou uma metodologia inovadora para líderes de vendas, e Country Manager da Apollo.io, plataforma de inteligência de leads. Com passagens pela Zendesk, onde liderou operações globais desde 2013, e como mentor no G4 Sales, ele se destaca por sua visão estratégica, apoiando startups e empreendedores a alcançarem excelência no mercado.
                </p>
              </div>
            </div>

            {/* José Diogo Costódio Rodrigues */}
            <div className="group bg-black/80 backdrop-blur-sm border border-ba-blue-light/20 rounded-2xl p-6 hover:shadow-glow hover:border-ba-blue-light/40 transition-all duration-500">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-foreground mb-1">José Diogo Costódio Rodrigues</h3>
                <p className="text-ba-orange font-semibold text-sm mb-2">CMO Latam & Canada - Tinder</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Com ampla experiência em Branding Marketing, José Costódio passou por algumas das mais Icônicas empresas do mundo, tendo sido Brand Manager na Nike e Redbull. Atualmente, é diretor geral de marketing do Tinder na América Latina e Canadá.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default BA;
