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
    buttonText: "Começar Agora",
    buttonVariant: "accent" as const
  },
  {
    title: "IA para Negócios",
    subtitle: "Curso de IA aplicada a empresas",
    price: "Em breve",
    status: "coming-soon",
    statusText: "Em breve",
    description: "Descubra como implementar IA de forma estratégica para impulsionar resultados empresariais.",
    icon: Building2,
    features: [
      "Estratégias de implementação de IA",
      "ROI e métricas de sucesso",
      "Casos de uso empresariais",
      "Automação de processos",
      "Análise de dados e insights"
    ],
    buttonText: "Notify Me",
    buttonVariant: "outline-glow" as const
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
            <Badge variant="outline" className="mb-4 border-ba-orange text-ba-orange">
              Educação em IA
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6 leading-tight">
              Aprenda{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Inteligência Artificial
              </span>{' '}
              do Zero
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-inter leading-relaxed">
              Cursos práticos e treinamentos personalizados para dominar a IA
            </p>
            <div className="w-16 h-1 bg-ba-orange mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto font-inter leading-relaxed">
              Desde conceitos básicos até implementação empresarial, oferecemos o caminho completo para sua jornada em Inteligência Artificial.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-background">
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
                  className="bg-card-premium/80 backdrop-blur-sm border border-card-premium-border hover:bg-card-premium-hover hover:shadow-premium transition-all duration-300 hover:scale-105 group rounded-2xl relative overflow-hidden"
                >
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
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
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-4 bg-card-premium-border rounded-full group-hover:bg-ba-orange/20 transition-all duration-300 border border-card-premium-border">
                        <IconComponent size={28} className="text-ba-orange" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-xl font-poppins text-foreground">
                            {course.title}
                          </CardTitle>
                        </div>
                        <p className="text-sm text-muted-foreground font-inter">
                          {course.subtitle}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-ba-orange font-poppins">
                        {course.price}
                      </span>
                    </div>
                    
                    <CardDescription className="text-muted-foreground font-inter leading-relaxed">
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
      <section className="py-20 bg-card-premium/20">
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
                <Card key={index} className="bg-card-premium/80 backdrop-blur-sm border border-card-premium-border text-center">
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
      <section className="py-20 bg-gradient-hero">
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
              <Button variant="outline-glow" size="lg" className="text-lg px-8 py-4 font-inter">
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