import { ArrowRight, Palette, Globe, Zap, Target } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
  {
    icon: Palette,
    title: "Identidade Visual",
    description: "Criação de logos, paletas de cores e materiais visuais que comunicam a essência da sua marca.",
    link: "/cases"
  },
  {
    icon: Globe,
    title: "Sites e Landing Pages",
    description: "Desenvolvimento de sites e páginas de conversão otimizadas para resultados.",
    link: "/tecnologia"
  },
  {
    icon: Zap,
    title: "Automações",
    description: "Automatize processos repetitivos e ganhe eficiência com integrações inteligentes.",
    link: "/tecnologia"
  },
  {
    icon: Target,
    title: "Marketing de Performance",
    description: "Campanhas de tráfego pago focadas em ROI e crescimento sustentável.",
    link: "/consultoria"
  }
];

const Servicos = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-ba-blue-light via-white to-ba-orange bg-clip-text text-transparent">
              Nossos Serviços
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluções completas para transformar e acelerar o seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group p-8 bg-black/80 backdrop-blur-sm rounded-2xl border border-ba-blue-light/20 hover:border-ba-blue-light/60 hover:shadow-glow transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-ba-blue-dark/30 to-ba-blue-light/10 border border-ba-blue-light/20">
                    <service.icon className="w-6 h-6 text-ba-blue-light" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-foreground mb-2 group-hover:text-ba-blue-light transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground text-sm mb-4">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center text-ba-blue-light text-sm font-medium">
                      Saiba mais
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Servicos;
