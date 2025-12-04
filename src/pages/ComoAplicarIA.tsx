import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { CheckCircle2, BookOpen, FileText, Sparkles, Quote, Play, Users, Target, Lightbulb, Zap, ArrowRight, Shield, Clock, Gift } from "lucide-react";

// News images
import diarioComercioImg from "@/assets/news/diario-comercio.png";
import businessInsiderImg from "@/assets/news/business-insider.png";
import forbesImg from "@/assets/news/forbes.png";

const ComoAplicarIA = () => {
  // Set body background to black and remove header padding for this page
  useEffect(() => {
    document.body.style.backgroundColor = '#000000';
    document.body.style.paddingTop = '0';
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.paddingTop = '';
    };
  }, []);

  const handleCTA = () => {
    window.open('https://pay.hotmart.com/O103263125L', '_blank');
  };

  const aulas = [
    {
      numero: 1,
      titulo: "Introdução à Inteligência Artificial",
      descricao: "O que você realmente precisa saber sobre Inteligência Artificial",
      topicos: [
        "A maior revolução da história da humanidade",
        "Por que isso importa e como tirar vantagem do momento atual",
        "Para onde vamos nos próximos anos"
      ]
    },
    {
      numero: 2,
      titulo: "Ferramentas e Tecnologias atuais",
      descricao: "Entendendo as ferramentas atuais e como aplicá-las",
      topicos: [
        "Como realmente funcionam os LLMs?",
        "Quais as melhores ferramentas para usar em cada caso?",
        "O que são e onde usar agentes de IA?"
      ]
    },
    {
      numero: 3,
      titulo: "Como aplicar IA no seu Negócio",
      descricao: "Saia da aula com um plano de execução pronto para aplicar.",
      topicos: [
        "Exemplos práticos de aplicações e cases",
        "Matriz de identificação de oportunidades",
        "Como medir o ROI da IA",
        "Como construir aplicações com IA para aumento de lucro e eficiência"
      ]
    }
  ];

  const entregaveis = [
    { icon: Gift, title: "Bônus: IA é Bolha ou não?", description: "Análise profunda sobre o futuro da tecnologia" },
    { icon: Target, title: "Plano de 30 dias personalizado", description: "Execução adaptada para a sua realidade" },
    { icon: Play, title: "3 aulas completas", description: "Todo o conhecimento para aplicar IA" }
  ];

  const faq = [
    { pergunta: "Preciso saber programar?", resposta: "Não. Tudo é feito com linguagem natural e ferramentas acessíveis." },
    { pergunta: "Quanto tempo preciso?", resposta: "As três aulas somam ~3 horas." },
    { pergunta: "Quando começo?", resposta: "Logo após a compra, com acesso imediato às aulas e materiais." },
    { pergunta: "Vou ver ferramentas específicas?", resposta: "O foco é prático e agnóstico — você entende o porquê e o como. Onde for útil, mostro exemplos e alternativas." },
    { pergunta: "Como peço suporte?", resposta: "Dúvidas de acesso e materiais: suporte por email. Dúvidas de conteúdo avançado: indicamos seguir para o IA para Negócios." }
  ];

  const depoimentos = [
    { text: "Parecia complicado, hoje uso IA todo dia para roteiros e emails — economizo horas.", author: "Aluno verificado" },
    { text: "A matriz simples me ajudou a escolher por onde começar, já vi impacto em 2 semanas.", author: "Aluno verificado" }
  ];

  return (
    <div className="min-h-screen bg-black overflow-hidden">

      {/* Hero Section - Full Impact */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center px-4 py-16 md:py-20">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Flickering Grid */}
          <FlickeringGrid
            className="z-0 absolute inset-0 size-full"
            squareSize={4}
            gridGap={6}
            color="#FFFFFF"
            maxOpacity={0.15}
            flickerChance={0.1}
          />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center space-y-6 md:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-ba-blue-light/10 border border-ba-blue-light/20 backdrop-blur-sm animate-fade-in">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-ba-blue-light" />
              <span className="text-xs md:text-sm text-ba-blue-light font-medium">+300 empresários já transformaram seus negócios</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <span className="text-white">Como aplicar</span>
              <br />
              <span className="bg-gradient-to-r from-ba-blue-light via-blue-400 to-ba-orange bg-clip-text text-transparent">
                Inteligência Artificial
              </span>
              <br />
              <span className="text-white">no seu Negócio</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed animate-fade-in px-2" style={{ animationDelay: '0.2s' }}>
              Se você está perdido com o barulho sobre IA, aqui vai o mapa. 
              <span className="text-white font-medium"> Em três aulas diretas ao ponto</span>, você entende como a IA funciona, por que ela está mudando tudo e quais oportunidades práticas existem.
            </p>

            {/* Features Pills */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-4 animate-fade-in px-4" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center justify-center gap-2 px-3 md:px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <BookOpen className="w-4 h-4 text-ba-blue-light" />
                <span className="text-xs md:text-sm text-white/80">3 aulas práticas</span>
              </div>
              <div className="flex items-center justify-center gap-2 px-3 md:px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <FileText className="w-4 h-4 text-ba-blue-light" />
                <span className="text-xs md:text-sm text-white/80">Material complementar</span>
              </div>
              <div className="flex items-center justify-center gap-2 px-3 md:px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <Shield className="w-4 h-4 text-ba-blue-light" />
                <span className="text-xs md:text-sm text-white/80">Garantia de 7 dias</span>
              </div>
            </div>

            {/* Pricing Block */}
            <div className="flex flex-col items-center gap-3 md:gap-4 pt-2 md:pt-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-baseline gap-2 md:gap-3">
                <span className="text-base md:text-lg text-white/40 line-through">R$167</span>
                <span className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-ba-blue-light to-ba-orange bg-clip-text text-transparent">
                  R$49
                </span>
              </div>
              
              <Button 
                onClick={handleCTA} 
                size="lg" 
                className="group relative bg-gradient-to-r from-ba-blue-light to-blue-600 hover:from-ba-blue-light hover:to-blue-500 text-white text-base md:text-lg px-6 md:px-10 py-5 md:py-7 h-auto rounded-xl shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:shadow-[0_0_60px_rgba(59,130,246,0.5)] transition-all duration-300 w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Quero entrar por R$49
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/40 rounded-full" />
          </div>
        </div>
      </section>

      {/* Why it matters - Statement Section */}
      <section className="relative py-16 md:py-24 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ba-blue-dark/5 to-transparent" />
        
        <div className="max-w-4xl mx-auto relative">
          <div className="relative">
            {/* Decorative Quote */}
            <div className="absolute -top-6 md:-top-8 left-0 md:-left-16 text-[80px] md:text-[120px] font-serif text-ba-blue-light/10 select-none">"</div>
            
            <div className="relative z-10 space-y-4 md:space-y-6 pl-4 md:pl-8 border-l-2 border-ba-blue-light/30">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Por que isso importa <span className="text-ba-blue-light">agora</span>?
              </h2>
              <p className="text-base sm:text-lg md:text-2xl text-white/70 leading-relaxed">
                As pesquisas mostram que a IA será a <span className="text-white font-medium">maior revolução da história da humanidade</span>. 
                E aqueles que dominarem essa tecnologia primeiro, terão uma vantagem competitiva 
                <span className="text-ba-orange font-medium"> impossível de alcançar</span> pelos concorrentes.
              </p>
            </div>
          </div>

          {/* News Carousel */}
          <div className="mt-12 md:mt-16">
            <p className="text-center text-white/40 text-sm mb-6 md:mb-8 uppercase tracking-wider">O que a mídia está dizendo</p>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 2000,
                  stopOnInteraction: false,
                }),
              ]}
              className="w-full max-w-4xl mx-auto"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {[
                  { src: diarioComercioImg, alt: "Diário do Comércio - IA no varejo mineiro" },
                  { src: businessInsiderImg, alt: "Business Insider - Meta avalia funcionários por habilidade com IA" },
                  { src: forbesImg, alt: "Forbes - Adoção de IA será divisor de águas" }
                ].map((news, idx) => (
                  <CarouselItem key={idx} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/2">
                    <div className="group relative rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-ba-blue-light/30 transition-all duration-300">
                      <img 
                        src={news.src} 
                        alt={news.alt}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12 bg-white/10 border-white/20 hover:bg-white/20 text-white" />
              <CarouselNext className="hidden md:flex -right-12 bg-white/10 border-white/20 hover:bg-white/20 text-white" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* For Whom Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <span className="inline-block text-ba-blue-light text-xs md:text-sm font-semibold tracking-wider uppercase mb-3 md:mb-4">Público-alvo</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Para quem é este curso
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { icon: Lightbulb, title: "Empreendedores", description: "Que querem usar IA no dia a dia para trabalhar melhor e crescer." },
              { icon: Users, title: "Profissionais Perdidos", description: "Quem se sente perdido com tanta informação e precisa de uma direção simples e prática." },
              { icon: Zap, title: "Donos de Empresas", description: "Que querem aumentar produtividade, leads e vendas sem complicação técnica." }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-ba-blue-light/20 to-ba-orange/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <Card className="relative h-full bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-sm border-white/10 hover:border-ba-blue-light/30 transition-all duration-300 rounded-2xl overflow-hidden">
                  <CardContent className="p-6 md:p-8 space-y-3 md:space-y-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-ba-blue-light/20 to-ba-blue-light/5 flex items-center justify-center border border-ba-blue-light/20">
                      <item.icon className="w-6 h-6 md:w-7 md:h-7 text-ba-blue-light" />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-white">{item.title}</h3>
                    <p className="text-white/60 leading-relaxed text-sm md:text-base">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-16 md:py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ba-blue-dark/5 to-transparent" />
        
        <div className="max-w-4xl mx-auto relative">
          <div className="text-center mb-10 md:mb-16">
            <span className="inline-block text-ba-blue-light text-xs md:text-sm font-semibold tracking-wider uppercase mb-3 md:mb-4">Currículo</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              O que você vai aprender
            </h2>
          </div>

          <div className="space-y-4 md:space-y-6">
            {aulas.map((aula, idx) => (
              <div 
                key={aula.numero}
                className="group"
              >
                <Card className="relative bg-gradient-to-r from-white/[0.06] to-transparent backdrop-blur-sm border-white/10 hover:border-ba-blue-light/30 transition-all duration-300 rounded-2xl overflow-hidden">
                  {/* Progress Line */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-ba-blue-light to-ba-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <CardContent className="p-5 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                      {/* Number Badge */}
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-ba-blue-light to-blue-600 flex items-center justify-center text-xl md:text-2xl font-bold text-white shadow-lg shadow-ba-blue-light/20">
                          {aula.numero}
                        </div>
                      </div>
                      
                      <div className="flex-1 space-y-3 md:space-y-4">
                        <div>
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">
                            Aula {aula.numero} — {aula.titulo}
                          </h3>
                          <p className="text-white/60 italic text-sm md:text-base">{aula.descricao}</p>
                        </div>
                        
                        <ul className="space-y-2 md:space-y-3">
                          {aula.topicos.map((topico, topIdx) => (
                            <li key={topIdx} className="flex items-start gap-2 md:gap-3">
                              <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-ba-blue-light flex-shrink-0 mt-0.5" />
                              <span className="text-white/80 text-sm md:text-base">{topico}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <span className="inline-block text-ba-blue-light text-xs md:text-sm font-semibold tracking-wider uppercase mb-3 md:mb-4">Entregáveis</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              O que você recebe
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {entregaveis.map((item, idx) => (
              <Card 
                key={idx}
                className="group relative bg-gradient-to-b from-white/[0.06] to-transparent backdrop-blur-sm border-white/10 hover:border-ba-blue-light/30 transition-all duration-300 rounded-2xl overflow-hidden"
              >
                <CardContent className="p-6 md:p-8 text-center space-y-3 md:space-y-4">
                  <div className="w-14 h-14 md:w-16 md:h-16 mx-auto rounded-xl md:rounded-2xl bg-gradient-to-br from-ba-orange/20 to-ba-orange/5 flex items-center justify-center border border-ba-orange/20 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-7 h-7 md:w-8 md:h-8 text-ba-orange" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-white/50 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ba-blue-dark/5 to-transparent" />
        
        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-10 md:mb-16">
            <span className="inline-block text-ba-blue-light text-xs md:text-sm font-semibold tracking-wider uppercase mb-3 md:mb-4">Depoimentos</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              O que dizem os alunos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {depoimentos.map((dep, idx) => (
              <Card 
                key={idx}
                className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border-white/10 rounded-2xl overflow-hidden"
              >
                <CardContent className="p-5 md:p-8">
                  <Quote className="w-8 h-8 md:w-10 md:h-10 text-ba-blue-light/30 mb-3 md:mb-4" />
                  <p className="text-base md:text-xl text-white/80 italic leading-relaxed mb-4 md:mb-6">
                    "{dep.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-ba-blue-light to-ba-orange flex items-center justify-center text-white font-bold text-sm md:text-base">
                      {dep.author.charAt(0)}
                    </div>
                    <span className="text-white/60 text-sm">{dep.author}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <p className="text-center text-white/30 text-xs md:text-sm mt-6 md:mt-8 italic">
            (Insira aqui prints e depoimentos dos seus alunos/clientes.)
          </p>
        </div>
      </section>

      {/* Pricing Section - Hero Style */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-ba-blue-light/20 via-transparent to-ba-orange/20 rounded-2xl md:rounded-3xl blur-3xl" />
            
            <Card className="relative bg-gradient-to-b from-white/[0.1] to-white/[0.02] backdrop-blur-xl border-white/20 rounded-2xl md:rounded-3xl overflow-hidden">
              {/* Decorative Top Bar */}
              <div className="h-1 md:h-1.5 bg-gradient-to-r from-ba-blue-light via-blue-400 to-ba-orange" />
              
              <CardContent className="p-6 sm:p-8 md:p-14 text-center space-y-6 md:space-y-8">
                <div>
                  <span className="inline-block text-ba-blue-light text-xs md:text-sm font-semibold tracking-wider uppercase mb-3 md:mb-4">Oferta especial</span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                    Comece sua jornada na IA
                  </h2>
                </div>

                <div className="space-y-1 md:space-y-2">
                  <div className="text-white/40 text-base md:text-lg">
                    <span className="line-through">De R$167</span> por
                  </div>
                  <div className="text-5xl sm:text-6xl md:text-8xl font-bold bg-gradient-to-r from-ba-blue-light via-blue-400 to-ba-orange bg-clip-text text-transparent">
                    R$49
                  </div>
                  <p className="text-white/50 text-xs md:text-sm">Pagamento único · Acesso imediato</p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 text-white/60 text-xs md:text-sm">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-400" />
                    <span>Garantia de 7 dias</span>
                  </div>
                  <div className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-ba-blue-light" />
                    <span>Acesso vitalício</span>
                  </div>
                </div>

                <Button 
                  onClick={handleCTA} 
                  size="lg" 
                  className="w-full sm:w-auto group relative bg-gradient-to-r from-ba-blue-light to-blue-600 hover:from-ba-blue-light hover:to-blue-500 text-white text-lg md:text-xl px-8 md:px-12 py-6 md:py-8 h-auto rounded-xl shadow-[0_0_50px_rgba(59,130,246,0.4)] hover:shadow-[0_0_70px_rgba(59,130,246,0.6)] transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
                    Quero entrar agora
                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>

                <p className="text-white/40 text-xs md:text-sm">
                  Se não sentir valor, é só pedir reembolso. Sem perguntas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ba-blue-dark/5 to-transparent" />
        
        <div className="max-w-3xl mx-auto relative">
          <div className="text-center mb-10 md:mb-16">
            <span className="inline-block text-ba-blue-light text-xs md:text-sm font-semibold tracking-wider uppercase mb-3 md:mb-4">FAQ</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Perguntas frequentes
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
            {faq.map((item, idx) => (
              <AccordionItem 
                key={idx} 
                value={`item-${idx}`}
                className="bg-gradient-to-r from-white/[0.06] to-transparent backdrop-blur-sm border border-white/10 rounded-xl px-4 md:px-6 data-[state=open]:border-ba-blue-light/30 transition-all duration-300"
              >
                <AccordionTrigger className="text-white text-left hover:no-underline py-4 md:py-6 text-sm md:text-lg">
                  {item.pergunta}
                </AccordionTrigger>
                <AccordionContent className="text-white/70 pb-4 md:pb-6 text-sm md:text-base leading-relaxed">
                  {item.resposta}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 px-4 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.1)_0%,_transparent_60%)]" />
        </div>
        
        <div className="max-w-3xl mx-auto text-center relative space-y-6 md:space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Comece <span className="text-ba-blue-light">simples</span>.
          </h2>
          
          <p className="text-base md:text-xl text-white/70 leading-relaxed px-2">
            Em <span className="text-white font-medium">3 aulas</span> você ganha clareza, aplica no seu contexto e sai com um <span className="text-white font-medium">plano de 30 dias</span>. 
            Se fizer sentido avançar, o próximo passo estará a um clique.
          </p>

          <Button 
            onClick={handleCTA} 
            size="lg" 
            className="group relative bg-gradient-to-r from-ba-blue-light to-blue-600 hover:from-ba-blue-light hover:to-blue-500 text-white text-base md:text-lg px-8 md:px-10 py-5 md:py-7 h-auto rounded-xl shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:shadow-[0_0_60px_rgba(59,130,246,0.5)] transition-all duration-300 w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Quero entrar por R$49
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>

          <p className="text-white/40 text-xs md:text-sm">
            Ou role a página para rever o conteúdo do curso.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ComoAplicarIA;
