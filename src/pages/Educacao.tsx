import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Building2, Users, ArrowRight, CheckCircle, Clock, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const courses = [
  {
    title: "IA do Zero",
    subtitle: "Curso básico de IA Generativa",
    price: "R$ 49",
    status: "available",
    statusText: "Disponível",
    description: "Aprenda os fundamentos da Inteligência Artificial Generativa de forma prática e acessível.",
    icon: GraduationCap,
    features: [
      "Introdução às ferramentas de IA",
      "Prompts eficazes para melhores resultados",
      "Aplicações práticas no dia a dia",
      "Certificado de conclusão",
      "Acesso vitalício ao conteúdo"
    ],
    buttonText: "Ver Mais",
    buttonVariant: "accent" as const
  },
  {
    title: "IA para Negócios",
    subtitle: "Programa premium de 12 semanas",
    price: "Disponível",
    status: "available",
    statusText: "Disponível",
    description: "Programa prático para implementar IA que aumenta lucro e produtividade em ≤ 90 dias.",
    icon: Building2,
    features: [
      "81 horas + mentoria especializada",
      "2 trilhos: Estratégico + Operacional",
      "ROI real em 90 dias",
      "Automações em produção",
      "Certificação oficial inclusa"
    ],
    buttonText: "Ver Programa Completo",
    buttonVariant: "accent" as const,
    link: "/educacao/ia-para-negocios"
  },
  {
    title: "Treinamentos para Empresas",
    subtitle: "Contrate um treinamento personalizado para a sua empresa",
    price: "Sob demanda",
    status: "custom",
    statusText: "Personalizado",
    description: "Treinamento exclusivo e personalizado para capacitar sua equipe em IA aplicada ao seu negócio.",
    icon: Users,
    features: [
      "Conteúdo personalizado para sua empresa",
      "Treinamento presencial ou remoto",
      "Acompanhamento pós-treinamento",
      "Material didático exclusivo",
      "Suporte técnico especializado"
    ],
    buttonText: "Solicitar Orçamento",
    buttonVariant: "outline-glow" as const
  }
];

const Educacao = () => {
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
              Aprenda Inteligência Artificial do Zero
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              Cursos práticos e treinamentos personalizados para dominar a IA
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

      {/* Courses Section */}
      <section className="py-20 bg-black border-y border-ba-blue-light/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              Nossos <span className="bg-gradient-primary bg-clip-text text-transparent">Cursos</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
              Escolha o curso ideal para seu nível e objetivos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => {
              const IconComponent = course.icon;
              return (
                <Card 
                  key={index} 
                  className="group bg-black/80 backdrop-blur-sm border border-ba-blue-light/20 rounded-2xl hover:shadow-glow hover:border-ba-blue-light/40 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden h-full"
                >
                  {/* Status Badge */}
                  <div className="absolute top-6 right-6 z-10">
                    <Badge 
                      variant={course.status === 'available' ? 'default' : 'outline'}
                      className={`${
                        course.status === 'available' 
                          ? 'bg-green-600 text-white' 
                          : course.status === 'coming-soon'
                          ? 'border-yellow-500 text-yellow-500'
                          : 'border-ba-orange text-ba-orange'
                      }`}
                    >
                      {course.statusText}
                    </Badge>
                  </div>

                  <CardHeader className="pb-4">
                    <div className="flex items-start space-x-4 mb-6 pr-24">
                      <div className="p-4 bg-card-premium-border rounded-full group-hover:bg-ba-orange/20 transition-all duration-300 border border-card-premium-border flex-shrink-0">
                        <IconComponent size={28} className="text-ba-orange" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-xl font-poppins text-foreground mb-3 leading-tight">
                          {course.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground font-inter leading-relaxed">
                          {course.subtitle}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <span className="text-3xl font-bold text-ba-orange font-poppins">
                        {course.price}
                      </span>
                    </div>
                    
                    <CardDescription className="text-muted-foreground font-inter leading-relaxed mb-2">
                      {course.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <ul className="space-y-3 mb-6">
                      {course.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <CheckCircle size={16} className="text-ba-orange mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground font-inter">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant={course.buttonVariant}
                      className="w-full group-hover:scale-105 transition-all duration-300"
                      disabled={course.status === 'coming-soon'}
                      onClick={() => {
                        if (course.title === "IA do Zero") {
                          window.location.href = "/educacao/ia-do-zero";
                        } else if (course.link) {
                          window.location.href = course.link;
                        } else if (course.status === 'custom') {
                          window.open('http://wa.me/5511999718595', '_blank');
                        }
                      }}
                    >
                      {course.buttonText}
                      <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-black via-ba-gray-dark/20 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-12 text-center">
              Por que Escolher Nossos Cursos?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Star,
                  title: "Conteúdo Prático",
                  description: "Aprenda com projetos reais e casos de uso aplicáveis ao mercado de trabalho."
                },
                {
                  icon: Clock,
                  title: "Flexibilidade Total",
                  description: "Estude no seu ritmo, quando e onde quiser, com acesso vitalício ao conteúdo."
                },
                {
                  icon: Users,
                  title: "Suporte Especializado",
                  description: "Tire dúvidas com especialistas e participe de uma comunidade ativa."
                }
              ].map((benefit, index) => (
                <Card key={index} className="bg-black/80 backdrop-blur-sm border border-ba-blue-light/20 text-center hover:shadow-glow hover:border-ba-blue-light/40 transition-all duration-500">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-card-premium-border rounded-full">
                        <benefit.icon size={24} className="text-ba-orange" />
                      </div>
                    </div>
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

      {/* CTA Section */}
      <section className="py-20 bg-black border-y border-ba-blue-light/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-8">
              Comece Sua Jornada na IA Hoje
            </h2>
            <p className="text-lg text-muted-foreground mb-8 font-inter leading-relaxed">
              Não fique para trás na revolução da Inteligência Artificial. Invista no seu futuro profissional agora.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" className="text-lg px-8 py-4 font-inter">
                Ver Todos os Cursos
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                variant="outline-glow" 
                size="lg" 
                className="text-lg px-8 py-4 font-inter"
                onClick={() => window.open('http://wa.me/5511999718595', '_blank')}
              >
                Falar com Consultor
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Educacao;