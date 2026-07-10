import { useEffect } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { CheckCircle2, BookOpen, FileText, Quote, Play, Users, Target, Lightbulb, Zap, ArrowRight, Shield, Gift } from "lucide-react";
import { Accent, Eyebrow, Card, SAAS_BTN_PRIMARY } from "@/components/saas/ui";

// News images
import diarioComercioImg from "@/assets/news/diario-comercio.png";
import businessInsiderImg from "@/assets/news/business-insider.png";
import forbesImg from "@/assets/news/forbes.png";
import workdayImg from "@/assets/news/workday.png";

const ComoAplicarIA = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#0A0A13';
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
    <div className="min-h-screen bg-saas-void text-saas-body overflow-hidden">

      {/* Hero Section */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center px-4 py-16 md:py-20 overflow-hidden">
        {/* Glows radiais */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full bg-saas-violet/20 blur-[110px]" />
          <div className="absolute -top-10 right-0 w-[520px] h-[420px] rounded-full bg-saas-cyan/15 blur-[110px]" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center space-y-6 md:space-y-8 animate-fade-in">

            {/* Badge */}
            <Eyebrow>+300 empresários já transformaram seus negócios</Eyebrow>

            {/* Main Title */}
            <h1 className="font-extrabold text-saas-ink tracking-tight leading-[1.1] text-[clamp(30px,4.6vw,56px)]">
              Como aplicar{' '}
              <Accent>Inteligência Artificial</Accent>
              {' '}no seu Negócio
            </h1>

            {/* Subtitle */}
            <p className="text-saas-body leading-relaxed text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-2">
              Se você está perdido com o barulho sobre IA, aqui vai o mapa.
              <span className="text-saas-ink font-semibold"> Em três aulas diretas ao ponto</span>, você entende como a IA funciona, por que ela está mudando tudo e quais oportunidades práticas existem.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-3 px-4">
              <div className="flex items-center justify-center gap-2 rounded-full border border-white/[0.10] bg-white/[0.03] px-4 py-2">
                <BookOpen className="w-4 h-4 text-saas-cyan" />
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-body">3 aulas práticas</span>
              </div>
              <div className="flex items-center justify-center gap-2 rounded-full border border-white/[0.10] bg-white/[0.03] px-4 py-2">
                <FileText className="w-4 h-4 text-saas-cyan" />
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-body">Material complementar</span>
              </div>
              <div className="flex items-center justify-center gap-2 rounded-full border border-white/[0.10] bg-white/[0.03] px-4 py-2">
                <Shield className="w-4 h-4 text-saas-cyan" />
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-body">Garantia de 7 dias</span>
              </div>
            </div>

            {/* Pricing Block */}
            <div className="flex flex-col items-center gap-3 md:gap-4 pt-2 md:pt-4">
              <div className="flex items-baseline gap-3">
                <span className="text-saas-faint text-base md:text-lg line-through">R$167</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-faint">por</span>
                <span className="font-extrabold tracking-tight text-6xl sm:text-7xl md:text-8xl leading-none">
                  <Accent>R$67</Accent>
                </span>
              </div>

              <button
                onClick={handleCTA}
                className={SAAS_BTN_PRIMARY + " w-full sm:w-auto"}
              >
                Quero entrar por R$67
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="relative border-t border-white/[0.06] py-20 md:py-24 px-4 bg-saas-void-2">
        <div className="max-w-4xl mx-auto relative">
          <div className="space-y-4 md:space-y-6">
            <Eyebrow>Por que agora</Eyebrow>
            <h2 className="font-extrabold text-saas-ink text-[clamp(26px,3.4vw,42px)] leading-[1.12] tracking-tight">
              Por que isso importa <Accent>agora</Accent>?
            </h2>
            <p className="text-saas-body leading-relaxed text-base sm:text-lg md:text-xl">
              As pesquisas e notícias mostram que a IA será a <span className="text-saas-ink font-semibold">maior revolução da história da humanidade</span>. E aqueles que dominarem essa tecnologia primeiro, terão uma vantagem competitiva <span className="text-saas-cyan font-semibold">impossível de alcançar</span> pelos concorrentes.
            </p>
          </div>

          {/* News Carousel */}
          <div className="mt-12 md:mt-16">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-faint mb-6 md:mb-8">O que a mídia está dizendo</p>
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
                    <div className="rounded-2xl border border-white/[0.09] overflow-hidden hover:border-white/[0.28] transition-all duration-300">
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
              <CarouselPrevious className="hidden md:flex -left-12 bg-saas-card border-white/[0.09] hover:bg-white/[0.06] text-saas-ink" />
              <CarouselNext className="hidden md:flex -right-12 bg-saas-card border-white/[0.09] hover:bg-white/[0.06] text-saas-ink" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* For Whom Section */}
      <section className="border-t border-white/[0.06] py-20 md:py-24 px-4 bg-saas-void">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <Eyebrow>Público-alvo</Eyebrow>
            <h2 className="mt-5 font-extrabold text-saas-ink text-[clamp(26px,3.4vw,42px)] leading-[1.12] tracking-tight">
              Para quem é este curso
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
              <Card key={idx} className="p-8 md:p-10">
                <span className="inline-flex w-10 h-10 rounded-full bg-gradient-to-br from-saas-cyan to-saas-violet items-center justify-center mb-6">
                  <item.icon size={20} className="text-saas-void" />
                </span>
                <h3 className="font-bold text-saas-ink text-lg mb-3">{item.title}</h3>
                <p className="text-saas-body leading-relaxed text-sm md:text-base">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="border-t border-white/[0.06] py-20 md:py-24 px-4 bg-saas-void-2">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <Eyebrow>Currículo</Eyebrow>
            <h2 className="mt-5 font-extrabold text-saas-ink text-[clamp(26px,3.4vw,42px)] leading-[1.12] tracking-tight">
              O que você vai aprender
            </h2>
          </div>

          <div className="space-y-4">
            {aulas.map((aula) => (
              <Card key={aula.numero} className="p-6 md:p-8 group">
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                  {/* Number Badge */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl border border-white/[0.09] bg-white/[0.02] flex items-center justify-center">
                      <span className="font-extrabold text-2xl md:text-3xl leading-none">
                        <Accent>{aula.numero}</Accent>
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 space-y-3 md:space-y-4">
                    <div>
                      <h3 className="font-bold text-saas-ink text-xl sm:text-2xl tracking-tight mb-1 md:mb-2">
                        Aula {aula.numero} — {aula.titulo}
                      </h3>
                      <p className="text-saas-muted italic text-sm md:text-base">{aula.descricao}</p>
                    </div>

                    <ul className="space-y-2 md:space-y-3">
                      {aula.topicos.map((topico, topIdx) => (
                        <li key={topIdx} className="flex items-start gap-2 md:gap-3">
                          <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-saas-green flex-shrink-0 mt-0.5" />
                          <span className="text-saas-body text-sm md:text-base">{topico}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="border-t border-white/[0.06] py-20 md:py-24 px-4 bg-saas-void">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <Eyebrow>Entregáveis</Eyebrow>
            <h2 className="mt-5 font-extrabold text-saas-ink text-[clamp(26px,3.4vw,42px)] leading-[1.12] tracking-tight">
              O que você recebe
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {entregaveis.map((item, idx) => (
              <Card key={idx} className="p-8 md:p-10 text-center">
                <span className="inline-flex w-10 h-10 rounded-full bg-gradient-to-br from-saas-cyan to-saas-violet items-center justify-center mx-auto mb-6">
                  <item.icon size={20} className="text-saas-void" />
                </span>
                <h3 className="font-bold text-saas-ink text-lg mb-3">{item.title}</h3>
                <p className="text-saas-muted text-sm leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="border-t border-white/[0.06] py-20 md:py-24 px-4 bg-saas-void-2">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <Eyebrow>Depoimentos</Eyebrow>
            <h2 className="mt-5 font-extrabold text-saas-ink text-[clamp(26px,3.4vw,42px)] leading-[1.12] tracking-tight">
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
                  <Card className="p-6 md:p-8 h-full flex flex-col">
                    <Quote className="w-6 h-6 text-saas-cyan mb-4 flex-shrink-0" />
                    <p className="text-saas-body italic leading-relaxed mb-6 flex-grow text-sm md:text-base">
                      "{dep.text}"
                    </p>
                    <div className="flex items-center gap-3 mt-auto border-t border-white/[0.06] pt-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-saas-cyan to-saas-violet flex items-center justify-center">
                        <span className="text-saas-void text-sm font-bold">{dep.author.charAt(0)}</span>
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-faint">{dep.author}</span>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-saas-card border-white/[0.09] hover:bg-white/[0.06] text-saas-ink" />
            <CarouselNext className="hidden md:flex -right-12 bg-saas-card border-white/[0.09] hover:bg-white/[0.06] text-saas-ink" />
          </Carousel>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="border-t border-white/[0.06] py-20 md:py-24 px-4 bg-saas-void">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 sm:p-10 md:p-14 text-center shadow-saas-card">
            <div className="mx-auto mb-8 h-[3px] w-12 rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet" aria-hidden />

            <Eyebrow>Oferta especial</Eyebrow>
            <h2 className="mt-5 font-extrabold text-saas-ink text-[clamp(26px,3.4vw,40px)] leading-[1.12] tracking-tight mb-8">
              Comece sua jornada na IA
            </h2>

            <div className="space-y-2 mb-8">
              <div className="text-saas-faint line-through">De R$167</div>
              <div className="font-extrabold tracking-tight text-7xl sm:text-8xl leading-none">
                <Accent>R$67</Accent>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-faint pt-2">
                Pagamento único — Acesso imediato
              </p>
            </div>

            <div className="flex items-center justify-center gap-2 mb-8">
              <Shield className="w-4 h-4 text-saas-cyan" />
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-body">Garantia de 7 dias</span>
            </div>

            <button
              onClick={handleCTA}
              className={SAAS_BTN_PRIMARY + " w-full sm:w-auto"}
            >
              Quero entrar agora
              <ArrowRight className="w-4 h-4" />
            </button>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-t border-white/[0.06] py-20 md:py-24 px-4 bg-saas-void-2">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-5 font-extrabold text-saas-ink text-[clamp(26px,3.4vw,42px)] leading-[1.12] tracking-tight">
              Perguntas frequentes
            </h2>
          </div>

          <Card className="overflow-hidden">
            <Accordion type="single" collapsible className="w-full">
              {faq.map((item, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="border-b border-white/[0.06] last:border-b-0"
                >
                  <AccordionTrigger className="px-6 py-5 font-semibold text-saas-ink text-left hover:no-underline hover:text-saas-cyan transition-colors text-sm md:text-base">
                    {item.pergunta}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-saas-body leading-relaxed text-sm md:text-base">
                    {item.resposta}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="border-t border-white/[0.06] py-20 md:py-24 px-4 bg-saas-void">
        <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8">
          <Eyebrow>Próximo passo</Eyebrow>
          <h2 className="font-extrabold text-saas-ink text-[clamp(26px,3.4vw,42px)] leading-[1.12] tracking-tight">
            Comece <Accent>simples</Accent>.
          </h2>

          <p className="text-saas-body leading-relaxed text-base md:text-xl px-2">
            Em <span className="text-saas-ink font-semibold">3 aulas</span> você ganha clareza, aplica no seu contexto e sai com um <span className="text-saas-ink font-semibold">plano de 30 dias</span>.
            Se fizer sentido avançar, o próximo passo estará a um clique.
          </p>

          <button
            onClick={handleCTA}
            className={SAAS_BTN_PRIMARY + " w-full sm:w-auto"}
          >
            Quero entrar por R$67
            <ArrowRight className="w-4 h-4" />
          </button>

          <p className="text-xs text-saas-faint">
            Ou role a página para rever o conteúdo do curso.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ComoAplicarIA;
