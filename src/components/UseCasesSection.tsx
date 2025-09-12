import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingCart, Users, Factory, DollarSign, TrendingUp, Building2 } from 'lucide-react';

const useCases = [
  {
    title: "E-commerce",
    description: "Recomendações personalizadas, chatbots de vendas e análise de comportamento do cliente.",
    benefits: ["↗️ 45% aumento nas vendas", "🎯 Personalização em tempo real", "🤖 Atendimento 24/7"],
    industry: "Varejo",
    icon: ShoppingCart,
  },
  {
    title: "Recursos Humanos",
    description: "Triagem de currículos, análise de perfil de candidatos e otimização de processos seletivos.",
    benefits: ["⏱️ 70% redução no tempo de contratação", "🎯 Melhor match candidato-vaga", "📊 Análises preditivas"],
    industry: "RH",
    icon: Users,
  },
  {
    title: "Indústria",
    description: "Manutenção preditiva, controle de qualidade automatizado e otimização da cadeia produtiva.",
    benefits: ["🔧 60% redução em paradas", "⚡ 35% aumento na eficiência", "💰 Economia de custos"],
    industry: "Manufatura",
    icon: Factory,
  },
  {
    title: "Finanças",
    description: "Detecção de fraudes, análise de risco de crédito e automação de processos financeiros.",
    benefits: ["🛡️ 90% detecção de fraudes", "📈 Análise de risco precisa", "🤖 Processos automatizados"],
    industry: "Financeiro",
    icon: DollarSign,
  },
  {
    title: "Agências de Marketing",
    description: "Automação de relatórios de tráfego, preenchimento de CRM e análise de calls de vendas do time comercial.",
    benefits: ["📊 Relatórios automáticos", "🎯 CRM sempre atualizado", "📞 Análise de performance de vendas"],
    industry: "Marketing",
    icon: TrendingUp,
  },
  {
    title: "Imobiliárias",
    description: "Pré atendimento e qualificação de leads com IA para otimizar o processo de vendas.",
    benefits: ["🏠 Pré-atendimento 24/7", "🎯 Qualificação automática", "⚡ Leads mais qualificados"],
    industry: "Imobiliário",
    icon: Building2,
  },
];

const UseCasesSection = () => {
  return (
    <section className="py-20 bg-slate-900" id="casos">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full border border-ba-orange text-ba-orange bg-ba-orange/10 text-sm font-medium mb-4">
            Casos de Uso
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6 text-white">
            Como aplicamos{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              IA na prática
            </span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed font-inter max-w-4xl mx-auto">
            Veja alguns exemplos reais de como nossa consultoria implementa soluções de IA 
            que geram resultados concretos para nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon;
            return (
              <Card 
                key={index} 
                className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 hover:bg-gray-700/80 hover:shadow-2xl transition-all duration-500 hover:scale-102 group rounded-2xl"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gray-700 rounded-full group-hover:bg-ba-orange/20 transition-all duration-300 border border-gray-600">
                        <IconComponent size={24} className="text-ba-orange" />
                      </div>
                      <CardTitle className="text-2xl font-poppins text-white group-hover:text-blue-400 transition-colors">
                        {useCase.title}
                      </CardTitle>
                    </div>
                    <span className="text-sm bg-ba-orange/20 text-ba-orange px-3 py-1 rounded-full font-inter border border-ba-orange/30">
                      {useCase.industry}
                    </span>
                  </div>
                  <CardDescription className="text-gray-300 font-inter text-base leading-relaxed">
                    {useCase.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-white font-poppins mb-3">Resultados:</h4>
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-300 font-inter">
                        <span className="mr-2">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;