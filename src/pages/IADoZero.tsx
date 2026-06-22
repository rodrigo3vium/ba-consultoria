import { useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CheckCircle } from "lucide-react";
import { tracker } from '@/lib/tracking';
import { buildHotmartCheckoutUrl } from '@/lib/hotmartUtils';
import bancoPromptsImage from "@/assets/banco-prompts-laptop.png";
import bancoPromptsMobileImage from "@/assets/banco-prompts-mobile.png";

const IADoZero = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#05090B';
    document.body.style.paddingTop = '0';
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.paddingTop = '';
    };
  }, []);

  const handleCheckout = (ctaLocation: string) => {
    tracker.track('cta_click', {
      cta_type: 'hotmart_checkout',
      cta_location: ctaLocation,
      product: 'ia-do-zero'
    });

    const checkoutUrl = buildHotmartCheckoutUrl({
      baseUrl: 'https://pay.hotmart.com/L94763179U?checkoutMode=10'
    });

    window.location.href = checkoutUrl;
  };

  const benefits = [
    {
      title: "10x mais eficiente",
      description: "Como escrever melhor, pensar mais rápido e aprender qualquer coisa com ajuda personalizada da IA"
    },
    {
      title: "Multiplicador de conhecimento",
      description: "Como usar IA para multiplicar sua produtividade (mesmo que você não saiba nada de tecnologia)"
    },
    {
      title: "Engenharia de Prompt",
      description: "Como usar prompts prontos e engenharia de comandos para obter resultados profissionais da IA"
    },
    {
      title: "As melhores IAs do mercado",
      description: "Descubra qual a melhor IA para cada tarefa do seu dia a dia"
    }
  ];

  return (
    <div className="min-h-screen bg-pb-void">

      {/* Hero Section */}
      <section className="pt-4 pb-20 relative overflow-hidden bg-pb-void">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <span className="inline-block mb-8 border border-pb-grid-strong bg-pb-void-card px-6 py-2 font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan">
              Oferta com 74% de desconto
            </span>

            <h1 className="font-display uppercase text-pb-ink leading-[0.92] text-4xl md:text-6xl mb-6">
              Domine o ChatGPT e outras IAs + acesso a todos os meus prompts
            </h1>

            <p className="font-body text-pb-ink-soft leading-relaxed text-lg md:text-xl mb-6 max-w-5xl mx-auto">
              No <span className="text-pb-cyan font-semibold">IA do Zero</span> você vai aprender como usar <span className="text-pb-cyan font-semibold">Inteligência Artificial</span> de forma prática, estratégica e eficiente para ser mais produtivo, aprender mais rápido e acelerar projetos para atingir seus objetivos por apenas{' '}
              <span className="text-pb-cyan font-semibold">R$49,90</span>.
            </p>

            <button
              className="btn-primary justify-center w-full sm:w-auto"
              onClick={() => handleCheckout('hero')}
            >
              Quero o IA do Zero com 74% de desconto
            </button>

            <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted mt-4">
              Acesso imediato e vitalício &bull; Aprovado por mais de 400 clientes &bull; Suporte via WhatsApp
            </p>
          </div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="py-20 bg-pb-void relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-4xl md:text-5xl mb-8">
                  Por que isso importa?{' '}
                  <span className="text-pb-cyan">E por que agora?</span>
                </h2>

                <div className="space-y-6 font-body text-pb-ink-soft leading-relaxed text-lg">
                  <p>
                    Nos próximos 12 meses, o mundo vai se dividir entre quem usa bem a inteligência artificial e quem ficou para trás.
                  </p>
                  <p>
                    Não é exagero. É realidade. As maiores empresas do mundo já anunciaram que não vão mais contratar ninguém que não saiba usar IA.
                  </p>
                  <p>
                    A diferença de produtividade entre quem sabe e quem não sabe usar IA já é brutal.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-pb-void-card border border-pb-grid-strong p-6">
                  <span className="inline-block mb-4 font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan border border-pb-cyan/30 bg-pb-cyan/10 px-3 py-1">
                    BREAKING NEWS
                  </span>
                  <div className="bg-white p-6 mb-4">
                    <Carousel className="w-full">
                      <CarouselContent>
                        <CarouselItem>
                          <img loading="lazy"
                            src="/lovable-uploads/98363185-f8bf-40af-bd61-1fd97f8c9ba7.png"
                            alt="Duolingo substituindo trabalhadores por IA"
                            className="w-full h-auto object-contain"
                          />
                        </CarouselItem>
                        <CarouselItem>
                          <img loading="lazy"
                            src="/lovable-uploads/5bb241ec-4824-4db5-813c-2e1292f72128.png"
                            alt="CEO sobre uso de IA no trabalho"
                            className="w-full h-auto object-contain"
                          />
                        </CarouselItem>
                      </CarouselContent>
                      <CarouselPrevious className="left-2" />
                      <CarouselNext className="right-2" />
                    </Carousel>
                  </div>

                  <div className="border-t border-pb-grid-strong pt-4">
                    <h3 className="font-display uppercase text-pb-ink text-xl text-center mb-2">
                      EMPRESAS DEMITEM FUNCIONÁRIOS E SUBSTITUEM POR IA
                    </h3>
                    <p className="font-body text-pb-ink-muted text-center italic">
                      A revolução já começou nas maiores empresas do mundo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PhD in Pocket Section */}
      <section className="py-20 bg-pb-void relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="bg-pb-void-card border border-pb-grid-strong p-6">
                  <span className="inline-block mb-4 font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan border border-pb-cyan/30 bg-pb-cyan/10 px-3 py-1">
                    BREAKING NEWS
                  </span>
                  <div className="bg-white p-6 mb-4">
                    <div className="text-center">
                      <img loading="lazy" src="/lovable-uploads/09c2831d-7172-433f-878b-484b0cc8a22c.png" alt="IQ Test Chart" className="w-full h-auto object-contain" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="font-display uppercase text-pb-ink text-xl mb-2">
                      INTELIGÊNCIA ARTIFICIAL SUPERA 99% DA POPULAÇÃO MUNDIAL EM TESTE
                    </h3>
                    <p className="font-body text-pb-ink-muted italic">
                      Estudo comprova superioridade da IA em tarefas cognitivas complexas
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="space-y-6 font-body text-pb-ink-soft leading-relaxed text-lg">
                  <p>
                    Você está prestes a ter acesso a um "PhD de bolso", um consultor mais inteligente que 99% dos humanos, que pode transformar sua vida pessoal e profissional — se você souber usar do jeito certo.
                  </p>
                  <p>
                    A inteligência artificial já superou a capacidade cognitiva da maioria da população mundial. Agora, a questão não é mais se a IA vai dominar, mas quem vai saber usá-la primeiro.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banco de Prompts Section */}
      <section className="py-12 bg-pb-ink relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto mb-6">
            <h2 className="font-display uppercase text-pb-void leading-[0.92] text-4xl md:text-5xl mb-8">
              Tenha acesso ao meu{' '}
              <span className="text-pb-cyan">
                Banco de Prompts Secreto
              </span>
            </h2>
            <p className="font-body text-pb-void/80 leading-relaxed text-xl md:text-2xl mb-4">
              Tenha acesso a mais de 50 prompts validados. Prontos para copiar e colar. São os meus prompts que uso no dia a dia.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Desktop Image */}
            <img loading="lazy"
              src={bancoPromptsImage}
              alt="Banco de Prompts Secreto - Mais de 50 prompts validados"
              className="hidden md:block w-full h-auto"
            />
            {/* Mobile Image */}
            <div className="block md:hidden overflow-hidden -mr-4">
              <img loading="lazy"
                src={bancoPromptsMobileImage}
                alt="Banco de Prompts Secreto - Mais de 50 prompts validados"
                className="h-auto"
                style={{ width: '150%', maxWidth: 'none', transform: 'translateX(-0.75rem)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 bg-pb-void relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-4xl md:text-5xl mb-8">
              Para quem é o{' '}
              <span className="text-pb-cyan">IA do Zero</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              "Para quem quer alcançar o 1% em todas as áreas da vida",
              "Quem quer aprender mais em menos tempo",
              "Quem está se sentindo travado e improdutivo",
              'Quem já percebeu que a IA não é mais "opção" — é sobrevivência'
            ].map((item, index) => (
              <div key={index} className="bg-pb-void-card border border-pb-grid-strong p-6 flex items-center gap-4">
                <CheckCircle className="w-8 h-8 text-pb-cyan flex-shrink-0" />
                <p className="font-body text-pb-ink leading-relaxed text-xl font-medium">{item}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              className="btn-primary justify-center w-full sm:w-auto"
              onClick={() => handleCheckout('target_audience')}
            >
              Quero aprender a usar IA
            </button>
          </div>
        </div>
      </section>

      {/* Harvard Study Section */}
      <section className="py-20 bg-pb-void relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-4xl md:text-5xl mb-8">
              <span className="text-pb-cyan">Harvard</span>{' '}
              está mudando o jeito de ensinar
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-pb-void-card border border-pb-grid-strong p-8 mb-8">
              <div className="bg-white p-6 mb-6">
                <div className="text-sm text-gray-500 mb-2">Home › Publications › AI Tutoring Outperforms Active Learning</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Tutoring Outperforms Active Learning</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>Authors:</strong> Gregory Pudin, Kelly Miller, Anna Kefalas, Timothy Melbourne, Gregorio Ponti</p>
                  <p><strong>Date:</strong> 05/2024</p>
                  <p><strong>Publication:</strong> Research Square</p>
                  <p><strong>Link:</strong> https://doi.org/10.21203/rs.3.rs-4343874/v1</p>
                </div>
              </div>

              <div className="text-center space-y-6">
                <p className="font-body text-pb-ink-soft leading-relaxed text-xl">
                  Estudo realizado em Harvard comprovou que aprender utilizando{' '}
                  <span className="text-pb-cyan font-semibold">"Tutores de IA"</span>
                  {' '}é{' '}
                  <span className="text-pb-cyan font-bold">2x</span>
                  {' '}mais eficiente do que aprender através de técnicas de estudo ativo.
                </p>
                <p className="font-body text-pb-ink-soft leading-relaxed text-xl">
                  Usar tutores de IA acelera o aprendizado em mais de{' '}
                  <span className="text-pb-cyan font-bold">120%</span>.
                </p>
              </div>
            </div>

            <div className="text-center">
              <button
                className="btn-primary justify-center w-full sm:w-auto"
                onClick={() => handleCheckout('harvard_section')}
              >
                Quero aprender a usar IA
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-pb-void relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-4xl md:text-5xl mb-8">
              Reação de quem usa nossos{' '}
              <span className="text-pb-cyan">prompts</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-pb-void-card border border-pb-grid-strong p-8">
              <div className="bg-pb-void border border-pb-grid-strong p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500"></div>
                  <div className="w-3 h-3 bg-yellow-500"></div>
                  <div className="w-3 h-3 bg-green-500"></div>
                </div>
                <p className="font-body text-pb-ink-soft leading-relaxed text-lg italic mb-6">
                  "Vou dizer por mim, mudou meu jeito de pensar e trabalhar com IA. Um dos seus prompts tirou meu projeto de aula da gaveta, estou produzindo conteúdo técnico pra minha área de qualidade, muito obrigado, vale muito a pena o curso..."
                </p>
                <div className="text-center">
                  <p className="font-display uppercase text-pb-ink text-xl">Eduardo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Section */}
      <section className="py-20 bg-pb-void relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-4xl md:text-5xl mb-8">
              O que você vai{' '}
              <span className="text-pb-cyan">aprender</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-pb-void-card border border-pb-grid-strong p-8 hover:border-pb-cyan/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-8 h-8 text-pb-cyan mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-display uppercase text-pb-cyan text-xl mb-3">
                      {benefit.title}
                    </h3>
                    <p className="font-body text-pb-ink-soft leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-20 bg-pb-void relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-4xl md:text-5xl mb-8">
              Investimento
            </h2>
            <p className="font-body text-pb-ink-soft text-xl mb-12">
              Quanto custa para ter acesso ao Método IA do Zero?
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-pb-void-card border border-pb-grid-strong p-8 mb-12">
              {/* Price Section */}
              <div className="text-center mb-8">
                <div className="mb-4">
                  <span className="font-mono text-pb-ink-muted text-2xl line-through">
                    R$ 197,00
                  </span>
                </div>
                <div className="font-display uppercase text-pb-cyan text-6xl leading-none mb-4">R$ 49,90</div>
                <p className="font-body text-pb-ink-soft text-lg">
                  ou <span className="text-pb-cyan font-semibold">7x</span> de <span className="text-pb-cyan font-semibold">R$ 8,16</span>
                </p>
              </div>

              {/* What You Get */}
              <div className="mb-8">
                <h3 className="font-display uppercase text-pb-ink text-2xl mb-6 text-center">O que você vai receber</h3>
                <div className="space-y-4">
                  {[
                    "Acesso imediato ao IA do Zero, método para produzir 10x mais usando IA",
                    "Exemplos práticos, prompts prontos e modelo de aplicação real",
                    "Um método validado de engenharia de prompts",
                    "Um guia para transformar IA em assistente pessoal, consultor de negócios ou mentor de produtividade"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-pb-cyan mt-1 flex-shrink-0" />
                      <p className="font-body text-pb-ink-soft leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bonus Section */}
              <div className="mb-8">
                <h3 className="font-display uppercase text-pb-cyan text-2xl mb-6 text-center">Bonus</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-pb-cyan mt-1 flex-shrink-0" />
                    <p className="font-body text-pb-ink-soft leading-relaxed">
                      Acesso ao meu banco secreto de prompts com mais de 50 prompts validados prontos para uso
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-pb-cyan mt-1 flex-shrink-0" />
                    <p className="font-body text-pb-ink-soft leading-relaxed">
                      Acesso a um grupo VIP no WhatsApp para ficar por dentro das últimas novidades de IA e fazer networking
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center mb-6">
                <button
                  className="btn-primary justify-center w-full max-w-md mx-auto"
                  onClick={() => handleCheckout('pricing_section')}
                >
                  COMEÇAR A MINHA MUDANÇA DE VIDA
                </button>
              </div>

              {/* Security Badge */}
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-2 text-pb-cyan mb-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-mono text-[10px] uppercase tracking-mono-wide">Compra 100% segura</span>
                </div>
                <p className="font-body text-pb-ink-muted text-sm sm:text-base max-w-md mx-auto">
                  Receba seu acesso imediatamente após a confirmação do pagamento.
                </p>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-16">
              <div className="bg-pb-void-card border border-pb-grid-strong p-4 sm:p-6 text-center hover:border-pb-cyan/30 transition-all">
                <h4 className="font-display uppercase text-pb-cyan text-lg sm:text-xl mb-2">Aulas 100% online</h4>
                <p className="font-body text-pb-ink-muted text-sm sm:text-base">Acesse de qualquer lugar</p>
              </div>
              <div className="bg-pb-void-card border border-pb-grid-strong p-4 sm:p-6 text-center hover:border-pb-cyan/30 transition-all">
                <h4 className="font-display uppercase text-pb-cyan text-lg sm:text-xl mb-2">Bonus exclusivos</h4>
                <p className="font-body text-pb-ink-muted text-sm sm:text-base">Conteúdo extra valioso</p>
              </div>
              <div className="bg-pb-void-card border border-pb-grid-strong p-4 sm:p-6 text-center hover:border-pb-cyan/30 transition-all">
                <h4 className="font-display uppercase text-pb-cyan text-lg sm:text-xl mb-2">Suporte para a plataforma</h4>
                <p className="font-body text-pb-ink-muted text-sm sm:text-base">Assistência completa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 bg-pb-void relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-4xl md:text-5xl mb-8">
              <span className="text-pb-cyan">7 dias</span> de garantia incondicional
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-pb-void-card border border-pb-grid-strong p-8">
              <div className="text-center mb-8">
                <div className="w-20 h-20 border border-pb-cyan/30 bg-pb-cyan/10 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-pb-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>

                <p className="font-body text-pb-ink-soft leading-relaxed text-xl mb-8">
                  Tente por 7 dias. Se você não estiver completamente satisfeito, nós devolvemos seu dinheiro —{' '}
                  <span className="text-pb-cyan font-semibold">sem nenhum tipo de questionamento</span>.
                </p>

                <div className="space-y-3 font-body text-pb-ink-soft">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-5 h-5 text-pb-cyan" />
                    <span>Garantia de 7 dias</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-5 h-5 text-pb-cyan" />
                    <span>Reembolso total</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-5 h-5 text-pb-cyan" />
                    <span>Sem questionamentos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default IADoZero;
