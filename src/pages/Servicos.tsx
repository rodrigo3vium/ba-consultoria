import { Palette, Globe, Zap, Target } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/pb/PageLayout";
import Section from "@/components/pb/Section";
import StratCard from "@/components/pb/StratCard";
import Stamp from "@/components/pb/Stamp";
import { tracker } from "@/lib/tracking";

const services = [
  {
    icon: Palette,
    title: "Identidade Visual",
    description: "Criação de logos, paletas de cores e materiais visuais que comunicam a essência da sua marca.",
    link: "/cases",
    category: "Design",
  },
  {
    icon: Globe,
    title: "Sites e Landing Pages",
    description: "Desenvolvimento de sites e páginas de conversão otimizadas para resultados.",
    link: "/tecnologia",
    category: "Tecnologia",
  },
  {
    icon: Zap,
    title: "Automações",
    description: "Automatize processos repetitivos e ganhe eficiência com integrações inteligentes.",
    link: "/tecnologia",
    category: "Tecnologia",
  },
  {
    icon: Target,
    title: "Marketing de Performance",
    description: "Campanhas de tráfego pago focadas em ROI e crescimento sustentável.",
    link: "/consultoria",
    category: "Marketing",
  },
];

const Servicos = () => {
  return (
    <PageLayout trackingName="BA Consultoria - Serviços">
      <Section
        idx="01"
        section="EXECUÇÃO"
        headline={
          <>
            Nossos<br />
            Serviços<span className="text-pb-red">.</span>
          </>
        }
        sub="Soluções completas para transformar e acelerar o seu negócio."
        noBorderTop
      >
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              onClick={() => {
                window.scrollTo(0, 0);
                tracker.track("cta_click", { product: "servicos", location: service.title });
              }}
            >
              <StratCard brackets className="h-full flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 border border-pb-grid-strong bg-pb-void-elev">
                    <service.icon
                      className="w-6 h-6 text-pb-cyan"
                      strokeWidth={1.4}
                    />
                  </div>
                  <Stamp>{service.category}</Stamp>
                </div>

                <div className="flex-1">
                  <h2 className="font-display uppercase text-pb-ink text-2xl leading-[0.95] mb-3">
                    {service.title}
                  </h2>
                  <p className="font-body text-pb-ink-soft text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <span className="font-mono text-[11px] uppercase tracking-mono-wide text-pb-cyan mt-auto">
                  Saiba mais →
                </span>
              </StratCard>
            </Link>
          ))}
        </div>
      </Section>
    </PageLayout>
  );
};

export default Servicos;
