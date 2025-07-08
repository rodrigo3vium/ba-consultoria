import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, MessageCircle, Users, Target, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Consultoria = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-40 h-40 bg-ba-orange rounded-full blur-xl"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-ba-blue-light rounded-full blur-xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6 leading-tight">
              Transforme sua PME com{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Inteligência Artificial
              </span>{' '}
              e aumente seus lucros
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-inter leading-relaxed">
              Sem contratar mais gente ou trabalhar mais horas
            </p>
            <div className="w-16 h-1 bg-ba-orange mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto font-inter leading-relaxed">
              Você não precisa ser técnico nem investir fortunas em software. Existe um caminho claro e prático para aplicar IA no seu negócio — mesmo que você não saiba por onde começar.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-card-premium/80 backdrop-blur-sm border border-card-premium-border">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-poppins text-foreground">
                  Rodrigo Albuquerque
                </CardTitle>
                <Badge variant="outline" className="w-fit mx-auto border-ba-orange text-ba-orange">
                  Especialista em IA para PMEs
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  Sou especialista em transformação de negócios com IA, tenho experiência internacional e ajudei dezenas de pequenas e médias empresas a usarem tecnologia de forma inteligente para aumentar eficiência, lucro e controle — sem complicação nem promessas vazias.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-card-premium/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-8 text-center">
              O Problema que Sua PME Enfrenta Hoje
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card-premium/80 backdrop-blur-sm border border-card-premium-border">
                <CardContent className="p-6">
                  <p className="text-muted-foreground font-inter leading-relaxed">
                    A maioria das PMEs brasileiras ainda está presa a processos manuais, planilhas desorganizadas e equipes sobrecarregadas.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card-premium/80 backdrop-blur-sm border border-card-premium-border">
                <CardContent className="p-6">
                  <p className="text-muted-foreground font-inter leading-relaxed">
                    E enquanto a concorrência avança usando automações e IA para crescer com menos custo, muitos empreendedores continuam apagando incêndios e perdendo margem.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Consequences Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-8 text-center">
              Consequências de Não Resolver
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center font-inter">
              Negócios que ignoram essa virada tecnológica estão ficando para trás:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "A equipe trabalha cada vez mais e entrega cada vez menos.",
                "O lucro some no meio de tarefas operacionais.",
                "O empreendedor vira escravo da própria empresa.",
                "O concorrente começa a entregar mais rápido, mais barato e com mais qualidade."
              ].map((item, index) => (
                <Card key={index} className="bg-card-premium/80 backdrop-blur-sm border border-card-premium-border">
                  <CardContent className="p-6 flex items-start space-x-3">
                    <div className="w-2 h-2 bg-ba-orange rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground font-inter leading-relaxed">{item}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-8">
              A Virada: O que é Possível com IA
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground font-inter leading-relaxed">
                Imagine sua empresa rodando com mais agilidade, menos retrabalho e mais clareza nos dados.
              </p>
              <p className="text-lg text-muted-foreground font-inter leading-relaxed">
                Imagine reduzir tarefas manuais, melhorar decisões e escalar resultados — sem aumentar o time.
              </p>
              <p className="text-xl font-semibold text-ba-orange font-inter">
                É isso que a Inteligência Artificial pode fazer por você quando aplicada com estratégia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-8 text-center">
              Minha Consultoria
            </h2>
            <div className="text-center mb-12">
              <p className="text-lg text-muted-foreground font-inter leading-relaxed mb-6">
                Minha consultoria é direta ao ponto, sem enrolação e pensada para quem quer resultado real.
              </p>
              <p className="text-lg text-muted-foreground font-inter leading-relaxed">
                Começa com uma call de 30 minutos, onde eu vou entender sua realidade e mostrar se realmente faz sentido avançarmos juntos.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: Target,
                  title: "Diagnóstico Prático",
                  description: "Diagnóstico prático do seu negócio"
                },
                {
                  icon: MessageCircle,
                  title: "Mapeamento de Oportunidades",
                  description: "Mapeamento de oportunidades de automação e IA"
                },
                {
                  icon: CheckCircle,
                  title: "Plano de Ação",
                  description: "Plano de ação com prioridades claras para aumentar seu lucro com menos esforço"
                }
              ].map((item, index) => (
                <Card key={index} className="bg-card-premium/80 backdrop-blur-sm border border-card-premium-border text-center">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-card-premium-border rounded-full">
                        <item.icon size={28} className="text-ba-orange" />
                      </div>
                    </div>
                    <CardTitle className="text-xl font-poppins">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground font-inter">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-card-premium/80 backdrop-blur-sm border border-card-premium-border text-center">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground font-inter leading-relaxed">
                  Tudo isso com uma metodologia própria, adaptada ao Brasil e testada em dezenas de negócios reais.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-card-premium/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-12 text-center">
              Depoimentos
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card-premium/80 backdrop-blur-sm border border-card-premium-border">
                <CardContent className="p-6">
                  <p className="text-muted-foreground font-inter leading-relaxed mb-4">
                    "A consultoria foi um divisor de águas. Automatizamos processos que levavam horas por semana. Meu faturamento cresceu 20% em 60 dias."
                  </p>
                  <p className="text-ba-orange font-semibold">— Carlos, dono de escola de idiomas</p>
                </CardContent>
              </Card>
              <Card className="bg-card-premium/80 backdrop-blur-sm border border-card-premium-border">
                <CardContent className="p-6">
                  <p className="text-muted-foreground font-inter leading-relaxed mb-4">
                    "Nunca imaginei que IA pudesse ser tão simples e aplicável no meu negócio."
                  </p>
                  <p className="text-ba-orange font-semibold">— Luciana, dona de loja de roupas</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-8">
              Pronto para Transformar Sua Empresa?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 font-inter leading-relaxed">
              Quer descobrir como aplicar IA de forma estratégica na sua empresa?
            </p>
            <p className="text-lg text-muted-foreground mb-8 font-inter leading-relaxed">
              Agende agora sua call gratuita de 30 minutos e veja se sua PME está pronta para dar o próximo passo.
            </p>
            <Button variant="accent" size="lg" className="text-lg px-8 py-4 font-inter mb-8">
              Quero Agendar Minha Call
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <CheckCircle size={16} className="text-ba-orange" />
              <span>Sem pressão. Sem obrigação.</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              A primeira conversa é gratuita e só seguimos se realmente fizer sentido para o seu momento.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-12 text-center">
              Perguntas Frequentes
            </h2>
            <div className="space-y-6">
              {[
                {
                  question: "Preciso saber de tecnologia para aplicar IA no meu negócio?",
                  answer: "Não. O objetivo é traduzir a IA para uma linguagem simples e mostrar onde ela se encaixa na sua empresa, sem complicação."
                },
                {
                  question: "Essa consultoria serve para qualquer tipo de negócio?",
                  answer: "Funciona melhor para PMEs que já têm operação rodando, equipe com mais de 5 pessoas e desejo real de crescer com eficiência. Se esse é o seu caso, pode funcionar muito bem."
                },
                {
                  question: "Quanto custa?",
                  answer: "A primeira conversa é gratuita. Após entender seu contexto, apresento uma proposta personalizada — nada de pacotes genéricos."
                },
                {
                  question: "E se eu quiser aplicar IA sozinho?",
                  answer: "Você até pode tentar, mas é muito fácil cair em armadilhas, perder tempo com ferramentas que não servem pra você e seguir modinhas. Eu te ajudo a encurtar o caminho e priorizar o que dá retorno de verdade."
                }
              ].map((faq, index) => (
                <Card key={index} className="bg-card-premium/80 backdrop-blur-sm border border-card-premium-border">
                  <CardHeader>
                    <CardTitle className="text-lg font-poppins text-foreground flex items-start">
                      <span className="text-ba-orange mr-2">❓</span>
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground font-inter leading-relaxed pl-6">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Consultoria;