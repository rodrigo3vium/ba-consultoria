import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  MapPin, 
  Star, 
  Phone, 
  TrendingUp, 
  Search, 
  AlertCircle,
  CheckCircle,
  Target,
  BarChart,
  Shield,
  X,
  Zap,
  Users,
  Award
} from "lucide-react";

const GoogleMeuNegocio = () => {
  const whatsappNumber = "5548996036565";
  const whatsappMessage = encodeURIComponent("Olá! Quero fazer o diagnóstico gratuito do meu Google Meu Negócio.");

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-black pt-8">
          <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-ba-blue-light/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-ba-orange/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary">Especialistas em Google Meu Negócio</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent leading-normal py-1">
                Coloque sua empresa no topo do Google sem gastar R$1
              </h1>
              
              <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                Otimizamos seu Google Meu Negócio para transformar ele em uma máquina de geração de clientes qualificados todos os dias.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button 
                  size="lg" 
                  className="text-lg px-8"
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
                >
                  <TrendingUp className="mr-2 h-5 w-5" />
                  Quero aparecer no topo
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8"
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
                >
                  <Search className="mr-2 h-5 w-5" />
                  Fazer diagnóstico gratuito
                </Button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-accent fill-accent" />
                  <span>+100 negócios locais atendidos</span>
                </div>
                <span className="hidden sm:inline">•</span>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>100% de Satisfação</span>
                </div>
                <span className="hidden sm:inline">•</span>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>São Paulo e região</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problema Section */}
        <section className="py-20 bg-black border-y border-ba-blue-light/10">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <AlertCircle className="w-12 h-12 text-destructive mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Hoje, quando alguém procura "{'"'}[seu serviço] perto de mim{'"'}", quem aparece? Você ou seu concorrente?
                </h2>
              </div>

              <div className="bg-black/80 backdrop-blur-sm rounded-2xl p-8 border border-ba-blue-light/20 hover:shadow-glow transition-all duration-500">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  95% dos negócios estão com o cadastro do Google feito incorretamente
                </h3>
                
                <div className="w-full rounded-lg mb-8 overflow-hidden border border-ba-blue-light/20">
                  <img 
                    src="/lovable-uploads/google-meu-negocio-comparison.png" 
                    alt="Comparação entre perfil Google Meu Negócio mal configurado e bem configurado" 
                    className="w-full h-auto"
                  />
                </div>

                <div className="mt-8 bg-black/80 backdrop-blur-sm border border-ba-blue-light/20 rounded-xl p-8">
                  <h4 className="text-2xl md:text-3xl font-bold mb-8 text-center bg-gradient-to-r from-ba-blue-light via-white to-ba-orange bg-clip-text text-transparent">
                    O resultado?
                  </h4>
                  <div className="grid gap-4 max-w-2xl mx-auto">
                    <div className="flex items-center gap-4 p-4 bg-gradient-to-br from-ba-blue-dark/5 to-transparent border border-ba-blue-light/20 rounded-lg hover:border-ba-blue-light/60 hover:shadow-glow transition-all duration-300 animate-fade-in">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-ba-blue-dark/20 flex items-center justify-center">
                        <X className="w-6 h-6 text-ba-orange" />
                      </div>
                      <span className="text-lg md:text-xl font-medium">Menos pesquisas</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-gradient-to-br from-ba-blue-dark/5 to-transparent border border-ba-blue-light/20 rounded-lg hover:border-ba-blue-light/60 hover:shadow-glow transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-ba-blue-dark/20 flex items-center justify-center">
                        <X className="w-6 h-6 text-ba-orange" />
                      </div>
                      <span className="text-lg md:text-xl font-medium">Menos visibilidade</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-gradient-to-br from-ba-blue-dark/5 to-transparent border border-ba-blue-light/20 rounded-lg hover:border-ba-blue-light/60 hover:shadow-glow transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-ba-blue-dark/20 flex items-center justify-center">
                        <X className="w-6 h-6 text-ba-orange" />
                      </div>
                      <span className="text-lg md:text-xl font-medium">Menos clientes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solução Section */}
        <section className="py-20 bg-gradient-to-b from-black via-ba-gray-dark/20 to-black">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Perfil otimizado + reputação forte + atividade constante = mais clientes do Maps
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Nós tratamos seu Google Meu Negócio como um canal de aquisição, não como uma ficha abandonada.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-10">
                {[
                  { icon: Phone, title: "Mais ligações e pedidos de rota", color: "text-primary" },
                  { icon: TrendingUp, title: "Mais visitas ao site e orçamentos", color: "text-accent" },
                  { icon: MapPin, title: "Posicionamento melhor no mapa (sem promessas milagrosas)", color: "text-secondary" },
                  { icon: Star, title: "Reputação que fecha venda antes do primeiro contato", color: "text-accent" }
                ].map((benefit, index) => (
                  <Card key={index} className="p-6 bg-black/80 backdrop-blur-sm border-ba-blue-light/20 hover:shadow-glow hover:border-ba-blue-light/60 transition-all duration-500 hover:-translate-y-2">
                    <benefit.icon className={`w-10 h-10 ${benefit.color} mb-4`} />
                    <h3 className="text-lg font-semibold">{benefit.title}</h3>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <Button 
                  size="lg"
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
                >
                  Quero meu diagnóstico gratuito
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Como Funciona Section */}
        <section className="py-20 bg-black border-y border-ba-blue-light/10">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Como funciona (plano simples)
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    step: "01",
                    title: "Diagnóstico gratuito (7–10 min)",
                    description: "Escaneamos sua ficha, comparamos com concorrentes locais e listamos os 'ganhos fáceis'.",
                    icon: Search
                  },
                  {
                    step: "02",
                    title: "Otimização completa (setup)",
                    description: "Arrumamos categorias, serviços, descrição, fotos, NAP, UTM, Q&A, links e removemos duplicidades.",
                    icon: Zap
                  },
                  {
                    step: "03",
                    title: "Gestão mensal",
                    description: "Coleta e resposta de avaliações, posts semanais, ofertas, atualização de fotos, Q&A, monitoramento e relatório.",
                    icon: BarChart
                  }
                ].map((step, index) => (
                  <Card key={index} className="p-8 bg-black/80 backdrop-blur-sm border-ba-blue-light/20 relative overflow-hidden hover:shadow-glow hover:border-ba-blue-light/60 transition-all duration-500 hover:-translate-y-2">
                    <div className="absolute top-4 right-4 text-6xl font-bold text-primary/10">
                      {step.step}
                    </div>
                    <step.icon className="w-12 h-12 text-primary mb-4 relative z-10" />
                    <h3 className="text-xl font-bold mb-3 relative z-10">{step.title}</h3>
                    <p className="text-muted-foreground relative z-10">{step.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Resultados Section */}
        <section className="py-20 bg-gradient-to-b from-black via-ba-gray-dark/20 to-black">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Resultados de clientes
              </h2>

              <Card className="p-8 md:p-12 bg-black/80 backdrop-blur-sm border-ba-blue-light/20 hover:shadow-glow transition-all duration-500 mb-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-lg overflow-hidden border border-ba-blue-light/20">
                    <img 
                      src="/lovable-uploads/senzano-logo.jpeg" 
                      alt="Senzano Imobiliária" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Senzano Imobiliária</h3>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <p className="text-sm text-muted-foreground">Campo Grande - MS</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-ba-blue-dark/5 to-transparent border border-ba-blue-light/20 rounded-xl hover:border-ba-blue-light/60 transition-all duration-300">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Phone className="w-10 h-10 text-primary" />
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-6 h-6 text-accent" />
                      <span className="text-5xl font-bold bg-gradient-to-r from-ba-blue-light via-white to-ba-orange bg-clip-text text-transparent">
                        171%
                      </span>
                    </div>
                    <p className="text-muted-foreground">O número de ligações</p>
                  </div>

                  <div className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-ba-blue-dark/5 to-transparent border border-ba-blue-light/20 rounded-xl hover:border-ba-blue-light/60 transition-all duration-300">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Search className="w-10 h-10 text-primary" />
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-6 h-6 text-accent" />
                      <span className="text-5xl font-bold bg-gradient-to-r from-ba-blue-light via-white to-ba-orange bg-clip-text text-transparent">
                        138%
                      </span>
                    </div>
                    <p className="text-muted-foreground">O número de pesquisas</p>
                  </div>

                  <div className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-ba-blue-dark/5 to-transparent border border-ba-blue-light/20 rounded-xl hover:border-ba-blue-light/60 transition-all duration-300">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <MapPin className="w-10 h-10 text-primary" />
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-6 h-6 text-accent" />
                      <span className="text-5xl font-bold bg-gradient-to-r from-ba-blue-light via-white to-ba-orange bg-clip-text text-transparent">
                        188%
                      </span>
                    </div>
                    <p className="text-muted-foreground">O número de rotas</p>
                  </div>
                </div>
              </Card>

              <div className="text-center">
                <Button 
                  size="lg"
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
                >
                  Quero aparecer no topo do Maps
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Para Quem É Section */}
        <section className="py-20 bg-black border-y border-ba-blue-light/10">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Para quem é este serviço
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Users,
                    title: "Negócios locais",
                    description: "Clínicas, restaurantes, oficinas, academias, imobiliárias, obras/serviços que dependem de ligações, rotas e visitas"
                  },
                  {
                    icon: Target,
                    title: "Canal previsível",
                    description: "Quem quer um canal rápido e previsível para atrair clientes da região de forma consistente"
                  },
                  {
                    icon: Shield,
                    title: "Reputação como ativo",
                    description: "Quem entende que reputação é um ativo valioso e precisa de manutenção profissional"
                  }
                ].map((item, index) => (
                  <Card key={index} className="p-8 bg-black/80 backdrop-blur-sm border-ba-blue-light/20 text-center hover:shadow-glow hover:border-ba-blue-light/60 transition-all duration-500 hover:-translate-y-2">
                    <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-b from-black via-ba-gray-dark/20 to-black">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Perguntas frequentes
              </h2>

              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="bg-black/80 backdrop-blur-sm border border-ba-blue-light/20 rounded-lg px-6 hover:border-ba-blue-light/60 transition-all">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Quanto tempo leva para ver resultado?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Geralmente as primeiras melhorias (ligações/rotas) surgem entre 30–60 dias. Reputação sólida é composta mês a mês com trabalho consistente.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-black/80 backdrop-blur-sm border border-ba-blue-light/20 rounded-lg px-6 hover:border-ba-blue-light/60 transition-all">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Preciso ter site?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Ajuda muito (autoridade e conversão). Se não tiver, otimizamos para ligações e rotas diretas do perfil.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-black/80 backdrop-blur-sm border border-ba-blue-light/20 rounded-lg px-6 hover:border-ba-blue-light/60 transition-all">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Vocês respondem avaliações negativas?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Sim — com protocolo profissional: acalmar, resolver e recuperar a confiança. Transformamos críticas em oportunidades de demonstrar profissionalismo.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-black/80 backdrop-blur-sm border border-ba-blue-light/20 rounded-lg px-6 hover:border-ba-blue-light/60 transition-all">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Vocês garantem topo do ranking?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Não fazemos "promessa de ranking". Garantimos processo, consistência e melhoria de conversão do perfil. O Google usa algoritmos complexos, mas fazemos tudo que está ao nosso alcance para melhorar seu posicionamento.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-black/80 backdrop-blur-sm border border-ba-blue-light/20 rounded-lg px-6 hover:border-ba-blue-light/60 transition-all">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Trabalham com anúncios?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Podemos integrar Google Ads local depois que o orgânico estiver redondo (opcional). Primeiro otimizamos a base, depois amplificamos com mídia paga se fizer sentido.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Final Section */}
        <section className="py-20 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ba-blue-light/3 to-transparent"></div>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Pronto para dominar o Google Maps?
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Faça seu diagnóstico gratuito e descubra como colocar sua empresa no topo das buscas locais.
              </p>
              <Button 
                size="lg" 
                className="text-lg px-12"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
              >
                <Search className="mr-2 h-5 w-5" />
                Quero meu diagnóstico gratuito
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GoogleMeuNegocio;
