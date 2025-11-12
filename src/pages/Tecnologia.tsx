import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bot, TrendingUp, MessageCircle, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const solutions = [
  {
    title: "Automação Inteligente",
    description: "Automatize processos repetitivos e libere sua equipe para tarefas estratégicas.",
    icon: Bot,
    features: [
      "Automação de workflows complexos",
      "Integração com sistemas existentes",
      "Redução de erros manuais",
      "Otimização de tempo e recursos"
    ]
  },
  {
    title: "Análise Preditiva",
    description: "Preveja tendências e tome decisões baseadas em dados precisos.",
    icon: TrendingUp,
    features: [
      "Modelos de machine learning personalizados",
      "Análise de padrões comportamentais",
      "Previsão de demanda e vendas",
      "Dashboards interativos"
    ]
  },
  {
    title: "Chatbots Personalizados",
    description: "Melhore o atendimento ao cliente com assistentes virtuais inteligentes.",
    icon: MessageCircle,
    features: [
      "Atendimento 24/7 automatizado",
      "Processamento de linguagem natural",
      "Integração com CRM e sistemas",
      "Escalabilidade automática"
    ]
  },
  {
    title: "Otimização de Processos",
    description: "Identifique gargalos e otimize operações para máxima eficiência.",
    icon: Zap,
    features: [
      "Análise de processos em tempo real",
      "Identificação de gargalos",
      "Otimização de recursos",
      "Monitoramento contínuo"
    ]
  }
];

const Tecnologia = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Pro-Life Banner */}
      <div className="bg-ba-blue-medium text-white py-3 px-4 text-center font-medium text-sm relative z-50">
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
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-ba-blue-light via-white to-ba-orange bg-clip-text text-transparent leading-relaxed pb-2">
              Transforme seu Negócio com Tecnologia de Ponta
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              Soluções personalizadas de IA para impulsionar sua empresa
            </h2>
            <div className="pt-8">
              <Button 
                size="lg" 
                variant="hero" 
                className="text-lg px-10 py-6"
                onClick={() => window.open('http://wa.me/5511999718595', '_blank')}
              >
                Falar com um especialista
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-black border-y border-ba-blue-light/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              Nossas <span className="bg-gradient-primary bg-clip-text text-transparent">Soluções</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
              Tecnologias avançadas adaptadas às necessidades do seu negócio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <Card 
                  key={index} 
                  className="group bg-black/80 backdrop-blur-sm border border-ba-blue-light/20 rounded-2xl hover:shadow-glow hover:border-ba-blue-light/40 transition-all duration-500 hover:-translate-y-2"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-4 bg-card-premium-border rounded-full group-hover:bg-ba-orange/20 transition-all duration-300 border border-card-premium-border">
                        <IconComponent size={28} className="text-ba-orange" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-poppins text-foreground">
                          {solution.title}
                        </CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-muted-foreground font-inter leading-relaxed">
                      {solution.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-3 mb-6">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <CheckCircle size={16} className="text-ba-orange mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground font-inter">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant="outline-glow" 
                      className="w-full group-hover:border-ba-orange group-hover:text-ba-orange transition-all duration-300"
                    >
                      Saiba Mais
                      <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-black via-ba-gray-dark/20 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-12 text-center">
              Por que Escolher Nossas Soluções?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Personalização Total",
                  description: "Cada solução é desenvolvida especificamente para suas necessidades e processos únicos."
                },
                {
                  title: "Implementação Rápida",
                  description: "Metodologia ágil que permite resultados visíveis em poucas semanas."
                },
                {
                  title: "Suporte Contínuo",
                  description: "Acompanhamento e otimização constante para garantir máximo desempenho."
                }
              ].map((benefit, index) => (
                <Card key={index} className="bg-black/80 backdrop-blur-sm border border-ba-blue-light/20 text-center hover:shadow-glow hover:border-ba-blue-light/40 transition-all duration-500">
                  <CardContent className="p-6">
                    <h3 className="font-semibold font-poppins mb-3 text-lg text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground font-inter leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-black border-y border-ba-blue-light/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-12 text-center">
              Como Trabalhamos
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Análise",
                  description: "Entendemos seus processos e identificamos oportunidades"
                },
                {
                  step: "02",
                  title: "Planejamento",
                  description: "Criamos uma estratégia personalizada para sua empresa"
                },
                {
                  step: "03",
                  title: "Desenvolvimento",
                  description: "Construímos e testamos as soluções com tecnologia de ponta"
                },
                {
                  step: "04",
                  title: "Implementação",
                  description: "Colocamos tudo em funcionamento e treinamos sua equipe"
                }
              ].map((process, index) => (
                <Card key={index} className="bg-black/80 backdrop-blur-sm border border-ba-blue-light/20 text-center hover:shadow-glow hover:border-ba-blue-light/40 transition-all duration-500">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-ba-orange mb-4 font-poppins">
                      {process.step}
                    </div>
                    <h3 className="font-semibold font-poppins mb-3 text-lg text-foreground">
                      {process.title}
                    </h3>
                    <p className="text-muted-foreground font-inter leading-relaxed">
                      {process.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black via-ba-gray-dark/20 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-8">
              Pronto para Inovar?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 font-inter leading-relaxed">
              Vamos conversar sobre como nossas soluções tecnológicas podem transformar seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" className="text-lg px-8 py-4 font-inter">
                Solicitar Orçamento
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                variant="outline-glow" 
                size="lg" 
                className="text-lg px-8 py-4 font-inter"
                onClick={() => window.open('http://wa.me/5511999718595', '_blank')}
              >
                Agendar Demonstração
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tecnologia;