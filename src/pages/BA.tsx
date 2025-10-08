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
