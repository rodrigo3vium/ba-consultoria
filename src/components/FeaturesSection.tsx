import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, TrendingUp, MessageCircle, Zap, Shield, Target } from 'lucide-react';

const features = [
  {
    title: "Automação Inteligente",
    description: "Automatize processos repetitivos e libere sua equipe para tarefas estratégicas.",
    icon: Bot,
  },
  {
    title: "Análise Preditiva",
    description: "Preveja tendências e tome decisões baseadas em dados precisos.",
    icon: TrendingUp,
  },
  {
    title: "Chatbots Personalizados",
    description: "Melhore o atendimento ao cliente com assistentes virtuais inteligentes.",
    icon: MessageCircle,
  },
  {
    title: "Otimização de Processos",
    description: "Identifique gargalos e otimize operações para máxima eficiência.",
    icon: Zap,
  },
  {
    title: "Integração Segura",
    description: "Integre IA aos seus sistemas existentes com total segurança.",
    icon: Shield,
  },
  {
    title: "Suporte Especializado",
    description: "Conte com nossa equipe de especialistas em todas as etapas.",
    icon: Target,
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background" id="solucoes">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Nossas <span className="bg-gradient-primary bg-clip-text text-transparent">Soluções</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            Oferecemos soluções completas de IA para revolucionar sua empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="bg-card-premium backdrop-blur-xl border border-card-glass-border hover:bg-card-premium-hover hover:shadow-premium hover:border-card-glass-border/50 transition-all duration-500 hover:scale-105 group rounded-3xl overflow-hidden relative"
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-card-glass backdrop-blur-md rounded-full group-hover:bg-ba-orange/20 transition-all duration-300 border border-card-glass-border group-hover:border-ba-orange/30">
                      <IconComponent size={28} className="text-ba-orange group-hover:drop-shadow-lg" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-poppins text-foreground mb-2">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-center text-muted-foreground font-inter leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;