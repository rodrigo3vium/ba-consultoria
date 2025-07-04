import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const useCases = [
  {
    title: "E-commerce",
    description: "Recomendações personalizadas, chatbots de vendas e análise de comportamento do cliente.",
    benefits: ["↗️ 45% aumento nas vendas", "🎯 Personalização em tempo real", "🤖 Atendimento 24/7"],
    industry: "Varejo"
  },
  {
    title: "Recursos Humanos",
    description: "Triagem de currículos, análise de perfil de candidatos e otimização de processos seletivos.",
    benefits: ["⏱️ 70% redução no tempo de contratação", "🎯 Melhor match candidato-vaga", "📊 Análises preditivas"],
    industry: "RH"
  },
  {
    title: "Indústria",
    description: "Manutenção preditiva, controle de qualidade automatizado e otimização da cadeia produtiva.",
    benefits: ["🔧 60% redução em paradas", "⚡ 35% aumento na eficiência", "💰 Economia de custos"],
    industry: "Manufatura"
  },
  {
    title: "Finanças",
    description: "Detecção de fraudes, análise de risco de crédito e automação de processos financeiros.",
    benefits: ["🛡️ 90% detecção de fraudes", "📈 Análise de risco precisa", "🤖 Processos automatizados"],
    industry: "Financeiro"
  },
];

const UseCasesSection = () => {
  return (
    <section className="py-20 bg-gradient-hero/20" id="casos">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Casos de <span className="bg-gradient-accent bg-clip-text text-transparent">Sucesso</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            Veja como diferentes setores estão revolucionando seus negócios com nossa IA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <Card 
              key={index} 
              className="bg-card/70 backdrop-blur-sm border-border hover:shadow-glow transition-all duration-500 hover:scale-102 group"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="text-2xl font-poppins text-foreground group-hover:text-ba-blue-light transition-colors">
                    {useCase.title}
                  </CardTitle>
                  <span className="text-sm bg-ba-orange/20 text-ba-orange px-3 py-1 rounded-full font-inter">
                    {useCase.industry}
                  </span>
                </div>
                <CardDescription className="text-muted-foreground font-inter text-base leading-relaxed">
                  {useCase.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground font-poppins mb-3">Resultados:</h4>
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-muted-foreground font-inter">
                      <span className="mr-2">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;