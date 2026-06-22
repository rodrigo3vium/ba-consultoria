import { useEffect, useRef } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { CheckCircle2, BookOpen, FileText, Quote, Play, Users, Target, Lightbulb, Zap, ArrowRight, Shield, Gift } from "lucide-react";

// News images
import diarioComercioImg from "@/assets/news/diario-comercio.png";
import businessInsiderImg from "@/assets/news/business-insider.png";
import forbesImg from "@/assets/news/forbes.png";
import workdayImg from "@/assets/news/workday.png";

const ComoAplicarIA = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#05090B';
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
    {
      icon: Gift,
      title: "Bônus: IA é Bolha ou não?",
      description: "Análise profunda sobre o futuro da tecnologia"
    },
    {
      icon: Target,
      title: "Plano de 30 dias personalizado",
      description: "Execução adaptada para a sua realidade"
    },
    {
      icon: Play,
      title: "3 aulas completas",
      description: "Todo o conhecimento para aplicar IA"
    }
  ];

  const faq = [
    {
      pergunta: "Preciso saber programar?",
      resposta: "Não. Tudo é feito com linguagem natural e ferramentas acessíveis."
    },
    {
      pergunta: "Quanto tempo preciso?",
      resposta: "As três aulas somam ~3 horas."
    },
    {
      pergunta: "Quando começo?",
      resposta: "Logo após a compra, com acesso imediato às aulas e materiais."
    },
    {
      pergunta: "Vou ver ferramentas específicas?",
      resposta: "O foco é prático e agnóstico — você entende o porquê e o como. Onde for útil, mostro exemplos e alternativas."
    }
  ];

  const depoimentos = [
    {
      text: "Rodrigo, passando para te agradecer pelas orientações sobre o Lovable aquele dia. Foi a melhor escolha que fiz!",
      author: "Rafaela Brito"
    },
    {
      text: "Primeiro, professor, achei sensacional. Eu nunca vi tanta entrega assim. Eu quero fazer uma elogio a você, Rodrigo. não te conheço pessoalmente, mas deve ser uma pessoa super do bem. Eu já entrei em outros grupos de mentoria, nunca vi tanta entrega dessa forma.",
      author: "Leandro"
    },
    {
      text: "Rodrigo é um excelente empresário! Ele vai além e possui uma visão muito afiada para negócios. Está sempre disponível e atende realmente muito bem - quantitativamente e qualitativamente. Recomendo muito",
      author: "Marcelo"
    },
    {
      text: "Sem palavras. Foi um dos melhores investimentos que fiz pra minha empresa. Vale cada centavo!",
      author: "Wesley"
    }
  ];

  return (
    <div className="min-h-screen bg-pb-void overflow-hidden">

      {/* Hero Section */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center px-4 py-16 md:py-20">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <FlickeringGrid
            className="z-0 absolute inset-0 size-full"
            squareSize={4}
            gridGap={6}
            color="#20DDEB"
            maxOpacity={0.06}
            flickerChance={0.1}
          />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center space-y-6 md:space-y-8">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-pb-grid-strong px-4 py-2">
              <span className="w-1.5 h-1.5 bg-pb-cyan"></span>
              <span className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan">
                +300 empresários já transformaram seus negócios
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-display uppercase text-pb-ink leading-[0.92] text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
              Como aplicar{' '}
              <span className="text-pb-cyan">Inteligência Artificial</span>
              {' '}no seu Negócio
            </h1>

            {/* Subtitle */}
            <p className="font-body text-pb-ink-soft leading-relaxed text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-2">
              Se você está perdido com o barulho sobre IA, aqui vai o mapa.
              <span className="text-pb-ink"> Em três aulas diretas ao ponto</span>, você entende como a IA funciona, por que ela está mudando tudo e quais oportunidades práticas existem.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-3 px-4">
              <div className="flex items-center justify-center gap-2 px-4 py-2 border border-pb-grid-strong">
                <BookOpen className="w-4 h-4 text-pb-cyan" />
                <span className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-soft">3 aulas práticas</span>
              </div>
              <div className="flex items-center justify-center gap-2 px-4 py-2 border border-pb-grid-strong">
                <FileText className="w-4 h-4 text-pb-cyan" />
                <span className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-soft">Material complementar</span>
              </div>
              <div className="flex items-center justify-center gap-2 px-4 py-2 border border-pb-grid-strong">
                <Shield className="w-4 h-4 text-pb-cyan" />
                <span className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-soft">Garantia de 7 dias</span>
              </div>
            </div>

            {/* Pricing Block */}
            <div className="flex flex-col items-center gap-3 md:gap-4 pt-2 md:pt-4">
              <div className="flex items-baseline gap-3">
                <span className="font-body text-pb-ink-muted text-base md:text-lg line-through">R$167</span>
                <span className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted">por</span>
                <span className="font-display text-6xl sm:text-7xl md:text-8xl text-pb-cyan leading-none">
                  R$67
                </span>
              </div>

              <button
                onClick={handleCTA}
                className="btn-primary w-full sm:w-auto justify-center"
              >
                Quero entrar por R$67
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="relative py-16 md:py-24 px-4 bg-pb-void-card border-y border-pb-grid-strong">
        <div className="max-w-4xl mx-auto relative">
          <div className="pl-6 border-l-2 border-pb-cyan space-y-4 md:space-y-6">
            <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan">Por que agora</p>
            <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-3xl sm:text-4xl md:text-5xl">
              Por que isso importa <span className="text-pb-cyan">agora</span>?
            </h2>
            <p className="font-body text-pb-ink-soft leading-relaxed text-base sm:text-lg md:text-xl">
              As pesquisas e notícias mostram que a IA será a <span className="text-pb-ink">maior revolução da história da humanidade</span>. E aqueles que dominarem essa tecnologia primeiro, terão uma vantagem competitiva <span className="text-pb-cyan">impossível de alcançar</span> pelos concorrentes.
            </p>
          </div>

          {/* News Carousel */}
          <div className="mt-12 md:mt-16">
            <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted mb-6 md:mb-8">O que a mídia está dizendo</p>
            <Carousel
              opts={{ align: "start", loop: true }}
              plugins={[Autoplay({ delay: 2000, stopOnInteraction: false }) as any]}
              className="w-full max-w-4xl mx-auto"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {[
                  { src: diarioComercioImg, alt: "Diário do Comércio - IA no varejo mineiro" },
                  { src: businessInsiderImg, alt: "Business Insider - Meta avalia funcionários por habilidade com IA" },
                  { src: forbesImg, alt: "Forbes - Adoção de IA será divisor de águas" },
                  { src: workdayImg, alt: "Workday - Relatório Global de IA para Executivos" }
                ].map((news, idx) => (
                  <CarouselItem key={idx} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/2">
                    <div className="border border-pb-grid-strong overflow-hidden hover:border-pb-cyan transition-all duration-300">
                      <img
                        loading="lazy"
                        src={news.src}
                        alt={news.alt}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12 bg-pb-void-card border-pb-grid-strong hover:bg-pb-void-elev text-pb-ink" />
              <CarouselNext className="hidden md:flex -right-12 bg-pb-void-card border-pb-grid-strong hover:bg-pb-void-elev text-pb-ink" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* For Whom Section */}
      <section className="py-16 md:py-24 px-4 bg-pb-void">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">Público-alvo</p>
            <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-4xl sm:text-5xl">
              Para quem é este curso
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-pb-grid-strong border border-pb-grid-strong">
            {[
              {
                icon: Lightbulb,
                title: "Empreendedores",
                description: "Que querem usar IA no dia a dia para trabalhar melhor e crescer."
              },
              {
                icon: Users,
                title: "Empresários Sobrecarregados",
                description: "Quem se sente perdido com tanta informação e precisa de uma direção simples e prática."
              },
              {
                icon: Zap,
                title: "Donos de Empresas",
                description: "Que querem aumentar produtividade, leads e vendas sem complicação técnica."
              }
            ].map((item, idx) => (
              <div key={idx} className="strat-card p-8 md:p-10 bg-pb-void-card">
                <item.icon size={24} className="text-pb-cyan mb-6" />
                <h3 className="font-display uppercase text-pb-ink leading-[0.92] text-xl mb-3">{item.title}</h3>
                <p className="font-body text-pb-ink-soft leading-relaxed text-sm md:text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-16 md:py-24 px-4 bg-pb-void-card border-y border-pb-grid-strong">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">Currículo</p>
            <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-4xl sm:text-5xl">
              O que você vai aprender
            </h2>
          </div>

          <div className="space-y-px bg-pb-grid-strong border border-pb-grid-strong">
            {aulas.map((aula) => (
              <div key={aula.numero} className="strat-card p-6 md:p-8 bg-pb-void-card group">
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                  {/* Number Badge */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 md:w-16 md:h-16 border border-pb-cyan flex items-center justify-center">
                      <span className="font-display text-2xl md:text-3xl text-pb-cyan leading-none">{aula.numero}</span>
                    </div>
                  </div>

                  <div className="flex-1 space-y-3 md:space-y-4">
                    <div>
                      <h3 className="font-display uppercase text-pb-ink leading-[0.92] text-xl sm:text-2xl mb-1 md:mb-2">
                        Aula {aula.numero} — {aula.titulo}
                      </h3>
                      <p className="font-body text-pb-ink-soft italic text-sm md:text-base">{aula.descricao}</p>
                    </div>

                    <ul className="space-y-2 md:space-y-3">
                      {aula.topicos.map((topico, topIdx) => (
                        <li key={topIdx} className="flex items-start gap-2 md:gap-3">
                          <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-pb-cyan flex-shrink-0 mt-0.5" />
                          <span className="font-body text-pb-ink-soft text-sm md:text-base">{topico}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-16 md:py-24 px-4 bg-pb-void">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">Entregáveis</p>
            <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-4xl sm:text-5xl">
              O que você recebe
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-pb-grid-strong border border-pb-grid-strong">
            {entregaveis.map((item, idx) => (
              <div key={idx} className="strat-card p-8 md:p-10 bg-pb-void-card text-center">
                <item.icon size={24} className="text-pb-cyan mx-auto mb-6" />
                <h3 className="font-display uppercase text-pb-ink leading-[0.92] text-lg mb-3">{item.title}</h3>
                <p className="font-body text-pb-ink-muted text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 px-4 bg-pb-void-card border-y border-pb-grid-strong">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">Depoimentos</p>
            <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-4xl sm:text-5xl">
              O que dizem os alunos
            </h2>
          </div>

          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[Autoplay({ delay: 5000 }) as any]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {depoimentos.map((dep, idx) => (
                <CarouselItem key={idx} className="pl-4 basis-full md:basis-1/3">
                  <div className="strat-card p-6 md:p-8 bg-pb-void-elev h-full flex flex-col">
                    <Quote className="w-6 h-6 text-pb-cyan mb-4 flex-shrink-0" />
                    <p className="font-body text-pb-ink-soft italic leading-relaxed mb-6 flex-grow text-sm md:text-base">
                      "{dep.text}"
                    </p>
                    <div className="flex items-center gap-3 mt-auto border-t border-pb-grid-strong pt-4">
                      <div className="w-8 h-8 bg-pb-void-card border border-pb-grid-strong flex items-center justify-center">
                        <span className="font-display text-pb-cyan text-sm">{dep.author.charAt(0)}</span>
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted">{dep.author}</span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-pb-void-card border-pb-grid-strong hover:bg-pb-void-elev text-pb-ink" />
            <CarouselNext className="hidden md:flex -right-12 bg-pb-void-card border-pb-grid-strong hover:bg-pb-void-elev text-pb-ink" />
          </Carousel>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 px-4 bg-pb-void">
        <div className="max-w-2xl mx-auto">
          <div className="strat-card p-8 sm:p-10 md:p-14 bg-pb-void-card text-center">
            <div className="border-t-2 border-pb-cyan -mt-px mb-8 w-full" />

            <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">Oferta especial</p>
            <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-3xl sm:text-4xl mb-8">
              Comece sua jornada na IA
            </h2>

            <div className="space-y-2 mb-8">
              <div className="font-body text-pb-ink-muted line-through">De R$167</div>
              <div className="font-display text-7xl sm:text-8xl text-pb-cyan leading-none">
                R$67
              </div>
              <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted">
                Pagamento único — Acesso imediato
              </p>
            </div>

            <div className="flex items-center justify-center gap-2 mb-8">
              <Shield className="w-4 h-4 text-pb-cyan" />
              <span className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-soft">Garantia de 7 dias</span>
            </div>

            <button
              onClick={handleCTA}
              className="btn-primary justify-center w-full sm:w-auto"
            >
              Quero entrar agora
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-4 bg-pb-void-card border-y border-pb-grid-strong">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">FAQ</p>
            <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-4xl sm:text-5xl">
              Perguntas frequentes
            </h2>
          </div>

          <div className="border border-pb-grid-strong">
            <Accordion type="single" collapsible className="w-full">
              {faq.map((item, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="border-b border-pb-grid-strong last:border-b-0"
                >
                  <AccordionTrigger className="px-6 py-5 font-display uppercase text-pb-ink text-left hover:no-underline hover:text-pb-cyan transition-colors text-sm md:text-base">
                    {item.pergunta}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 font-body text-pb-ink-soft leading-relaxed text-sm md:text-base">
                    {item.resposta}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 px-4 bg-pb-void">
        <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8">
          <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan">Próximo passo</p>
          <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-3xl sm:text-4xl md:text-5xl">
            Comece <span className="text-pb-cyan">simples</span>.
          </h2>

          <p className="font-body text-pb-ink-soft leading-relaxed text-base md:text-xl px-2">
            Em <span className="text-pb-ink">3 aulas</span> você ganha clareza, aplica no seu contexto e sai com um <span className="text-pb-ink">plano de 30 dias</span>.
            Se fizer sentido avançar, o próximo passo estará a um clique.
          </p>

          <button
            onClick={handleCTA}
            className="btn-primary justify-center w-full sm:w-auto"
          >
            Quero entrar por R$67
            <ArrowRight className="w-4 h-4" />
          </button>

          <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted">
            Ou role a página para rever o conteúdo do curso.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ComoAplicarIA;
