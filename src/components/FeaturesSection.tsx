import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    title: "Automação Inteligente",
    description: "Automatize processos repetitivos e libere sua equipe para tarefas estratégicas.",
    icon: "🤖",
  },
  {
    title: "Análise Preditiva",
    description: "Preveja tendências e tome decisões baseadas em dados precisos.",
    icon: "📊",
  },
  {
    title: "Chatbots Personalizados",
    description: "Melhore o atendimento ao cliente com assistentes virtuais inteligentes.",
    icon: "💬",
  },
  {
    title: "Otimização de Processos",
    description: "Identifique gargalos e otimize operações para máxima eficiência.",
    icon: "⚡",
  },
  {
    title: "Integração Segura",
    description: "Integre IA aos seus sistemas existentes com total segurança.",
    icon: "🔒",
  },
  {
    title: "Suporte Especializado",
    description: "Conte com nossa equipe de especialistas em todas as etapas.",
    icon: "🎯",
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
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border-border hover:shadow-card-custom transition-all duration-300 hover:scale-105"
            >
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CardTitle className="text-xl font-poppins text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground font-inter">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;