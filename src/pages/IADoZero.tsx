import { useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CheckCircle } from "lucide-react";
import { tracker } from '@/lib/tracking';
import { buildHotmartCheckoutUrl } from '@/lib/hotmartUtils';
import { Accent, Eyebrow, SAAS_BTN_PRIMARY } from "@/components/saas/ui";
import bancoPromptsImage from "@/assets/banco-prompts-laptop.png";
import bancoPromptsMobileImage from "@/assets/banco-prompts-mobile.png";

const IADoZero = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#0A0A13';
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
    <div className="min-h-screen bg-saas-void text-saas-body">

      {/* Hero Section */}
      <section className="pt-10 pb-20 relative overflow-hidden bg-saas-void">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full bg-saas-violet/20 blur-[110px]" />
          <div className="absolute -top-10 right-0 w-[520px] h-[420px] rounded-full bg-saas-cyan/15 blur-[110px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto animate-fade-in">
            <Eyebrow className="mb-8">
              Oferta com 74% de desconto
            </Eyebrow>

            <h1 className="font-extrabold text-saas-ink leading-[1.1] tracking-tight text-[clamp(28px,4.5vw,52px)] mb-6">
              Domine o ChatGPT e outras IAs + acesso a <Accent>todos os meus prompts</Accent>
            </h1>

            <p className="text-saas-body leading-relaxed text-lg md:text-xl mb-6 max-w-5xl mx-auto">
              No <span className="text-saas-cyan font-semibold">IA do Zero</span> você vai aprender como usar <span className="text-saas-cyan font-semibold">Inteligência Artificial</span> de forma prática, estratégica e eficiente para ser mais produtivo, aprender mais rápido e acelerar projetos para atingir seus objetivos por apenas{' '}
              <span className="text-saas-cyan font-semibold">R$49,90</span>.
            </p>

            <button
              className={SAAS_BTN_PRIMARY + " w-full sm:w-auto"}
              onClick={() => handleCheckout('hero')}
            >
              Quero o IA do Zero com 74% de desconto
            </button>

            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-faint mt-4">
              Acesso imediato e vitalício &bull; Aprovado por mais de 400 clientes &bull; Suporte via WhatsApp
            </p>
          </div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="border-t border-white/[0.06] py-20 md:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-extrabold text-saas-ink text-[clamp(26px,3.4vw,42px)] leading-[1.12] tracking-tight mb-8">
                  Por que isso importa?{' '}
                  <Accent>E por que agora?</Accent>
                </h2>

                <div className="space-y-6 text-saas-body leading-relaxed text-lg">
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
                <div className="rounded-2xl border border-white/[0.09] bg-saas-card p-6">
                  <span className="inline-flex items-center rounded-full mb-4 font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan border border-saas-cyan/30 bg-saas-cyan/10 px-3.5 py-1.5">
                    BREAKING NEWS
                  </span>
                  <div className="rounded-xl bg-white p-6 mb-4">
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

                  <div className="border-t border-white/[0.08] pt-4">
                    <h3 className="font-bold text-saas-ink text-lg tracking-tight text-center mb-2">
                      EMPRESAS DEMITEM FUNCIONÁRIOS E SUBSTITUEM POR IA
                    </h3>
                    <p className="text-saas-faint text-center italic">
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
      <section className="border-t border-white/[0.06] py-20 md:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="rounded-2xl border border-white/[0.09] bg-saas-card p-6">
                  <span className="inline-flex items-center rounded-full mb-4 font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan border border-saas-cyan/30 bg-saas-cyan/10 px-3.5 py-1.5">
                    BREAKING NEWS
                  </span>
                  <div className="rounded-xl bg-white p-6 mb-4">
                    <div className="text-center">
                      <img loading="lazy" src="/lovable-uploads/09c2831d-7172-433f-878b-484b0cc8a22c.png" alt="IQ Test Chart" className="w-full h-auto object-contain" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="font-bold text-saas-ink text-lg tracking-tight mb-2">
                      INTELIGÊNCIA ARTIFICIAL SUPERA 99% DA POPULAÇÃO MUNDIAL EM TESTE
                    </h3>
                    <p className="text-saas-faint italic">
                      Estudo comprova superioridade da IA em tarefas cognitivas complexas
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="space-y-6 text-saas-body leading-relaxed text-lg">
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
      <section className="border-t border-white/[0.06] py-16 md:py-20 bg-saas-void-2 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto mb-6">
            <h2 className="font-extrabold text-saas-ink text-[clamp(26px,3.4vw,42px)] leading-[1.12] tracking-tight mb-8">
              Tenha acesso ao meu{' '}
              <Accent>
                Banco de Prompts Secreto
              </Accent>
            </h2>
            <p className="text-saas-body leading-relaxed text-xl md:text-2xl mb-4">
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
      <section className="border-t border-white/[0.06] py-20 md:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="font-extrabold text-saas-ink text-[clamp(26px,3.4vw,42px)] leading-[1.12] tracking-tight mb-8">
              Para quem é o{' '}
              <Accent>IA do Zero</Accent>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              "Para quem quer alcançar o 1% em todas as áreas da vida",
              "Quem quer aprender mais em menos tempo",
              "Quem está se sentindo travado e improdutivo",
              'Quem já percebeu que a IA não é mais "opção" — é sobrevivência'
            ].map((item, index) => (
              <div key={index} className="rounded-2xl border border-white/[0.09] bg-saas-card p-6 flex items-center gap-4">
                <CheckCircle className="w-8 h-8 text-saas-green flex-shrink-0" />
                <p className="text-saas-ink leading-relaxed text-xl font-medium">{item}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              className={SAAS_BTN_PRIMARY + " w-full sm:w-auto"}
              onClick={() => handleCheckout('target_audience')}
            >
              Quero aprender a usar IA
            </button>
          </div>
        </div>
      </section>

      {/* Harvard Study Section */}
      <section className="border-t border-white/[0.06] py-20 md:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="font-extrabold text-saas-ink text-[clamp(26px,3.4vw,42px)] leading-[1.12] tracking-tight mb-8">
              <Accent>Harvard</Accent>{' '}
              está mudando o jeito de ensinar
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl border border-white/[0.09] bg-saas-card p-8 mb-8">
              <div className="rounded-xl bg-white p-6 mb-6">
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
                <p className="text-saas-body leading-relaxed text-xl">
                  Estudo realizado em Harvard comprovou que aprender utilizando{' '}
                  <span className="text-saas-cyan font-semibold">"Tutores de IA"</span>
                  {' '}é{' '}
                  <span className="text-saas-cyan font-bold">2x</span>
                  {' '}mais eficiente do que aprender através de técnicas de estudo ativo.
                </p>
                <p className="text-saas-body leading-relaxed text-xl">
                  Usar tutores de IA acelera o aprendizado em mais de{' '}
                  <span className="text-saas-cyan font-bold">120%</span>.
                </p>
              </div>
            </div>

            <div className="text-center">
              <button
                className={SAAS_BTN_PRIMARY + " w-full sm:w-auto"}
                onClick={() => handleCheckout('harvard_section')}
              >
                Quero aprender a usar IA
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="border-t border-white/[0.06] py-20 md:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="font-extrabold text-saas-ink text-[clamp(26px,3.4vw,42px)] leading-[1.12] tracking-tight mb-8">
              Reação de quem usa nossos{' '}
              <Accent>prompts</Accent>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl border border-white/[0.09] bg-saas-card p-8">
              <div className="rounded-xl border border-white/[0.08] bg-saas-void p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <p className="text-saas-body leading-relaxed text-lg italic mb-6">
                  "Vou dizer por mim, mudou meu jeito de pensar e trabalhar com IA. Um dos seus prompts tirou meu projeto de aula da gaveta, estou produzindo conteúdo técnico pra minha área de qualidade, muito obrigado, vale muito a pena o curso..."
                </p>
                <div className="text-center">
                  <p className="font-bold text-saas-ink text-lg tracking-tight">Eduardo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Section */}
      <section className="border-t border-white/[0.06] py-20 md:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="font-extrabold text-saas-ink text-[clamp(26px,3.4vw,42px)] leading-[1.12] tracking-tight mb-8">
              O que você vai{' '}
              <Accent>aprender</Accent>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="rounded-2xl border border-white/[0.09] bg-saas-card p-8 hover:border-white/[0.18] transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-8 h-8 text-saas-green mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-saas-ink text-lg tracking-tight mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-saas-body leading-relaxed">
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
      <section className="border-t border-white/[0.06] py-20 md:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="font-extrabold text-saas-ink text-[clamp(26px,3.4vw,42px)] leading-[1.12] tracking-tight mb-8">
              Investimento
            </h2>
            <p className="text-saas-body text-xl mb-12">
              Quanto custa para ter acesso ao Método IA do Zero?
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl border border-white/[0.09] bg-saas-card p-8 mb-12">
              {/* Price Section */}
              <div className="text-center mb-8">
                <div className="mb-4">
                  <span className="text-saas-faint text-2xl line-through">
                    R$ 197,00
                  </span>
                </div>
                <div className="font-extrabold tracking-tight text-6xl leading-none mb-4"><Accent>R$ 49,90</Accent></div>
                <p className="text-saas-body text-lg">
                  ou <span className="text-saas-cyan font-semibold">7x</span> de <span className="text-saas-cyan font-semibold">R$ 8,16</span>
                </p>
              </div>

              {/* What You Get */}
              <div className="mb-8">
                <h3 className="font-extrabold text-saas-ink text-2xl tracking-tight mb-6 text-center">O que você vai receber</h3>
                <div className="space-y-4">
                  {[
                    "Acesso imediato ao IA do Zero, método para produzir 10x mais usando IA",
                    "Exemplos práticos, prompts prontos e modelo de aplicação real",
                    "Um método validado de engenharia de prompts",
                    "Um guia para transformar IA em assistente pessoal, consultor de negócios ou mentor de produtividade"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-saas-green mt-1 flex-shrink-0" />
                      <p className="text-saas-body leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bonus Section */}
              <div className="mb-8">
                <h3 className="font-extrabold text-2xl tracking-tight mb-6 text-center"><Accent>Bonus</Accent></h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-saas-green mt-1 flex-shrink-0" />
                    <p className="text-saas-body leading-relaxed">
                      Acesso ao meu banco secreto de prompts com mais de 50 prompts validados prontos para uso
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-saas-green mt-1 flex-shrink-0" />
                    <p className="text-saas-body leading-relaxed">
                      Acesso a um grupo VIP no WhatsApp para ficar por dentro das últimas novidades de IA e fazer networking
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center mb-6">
                <button
                  className={SAAS_BTN_PRIMARY + " w-full max-w-md mx-auto"}
                  onClick={() => handleCheckout('pricing_section')}
                >
                  COMEÇAR A MINHA MUDANÇA DE VIDA
                </button>
              </div>

              {/* Security Badge */}
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-2 text-saas-green mb-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em]">Compra 100% segura</span>
                </div>
                <p className="text-saas-faint text-sm sm:text-base max-w-md mx-auto">
                  Receba seu acesso imediatamente após a confirmação do pagamento.
                </p>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-16">
              <div className="rounded-2xl border border-white/[0.09] bg-saas-card p-4 sm:p-6 text-center hover:border-white/[0.18] transition-colors">
                <h4 className="font-bold text-saas-ink text-lg sm:text-xl tracking-tight mb-2">Aulas 100% online</h4>
                <p className="text-saas-faint text-sm sm:text-base">Acesse de qualquer lugar</p>
              </div>
              <div className="rounded-2xl border border-white/[0.09] bg-saas-card p-4 sm:p-6 text-center hover:border-white/[0.18] transition-colors">
                <h4 className="font-bold text-saas-ink text-lg sm:text-xl tracking-tight mb-2">Bonus exclusivos</h4>
                <p className="text-saas-faint text-sm sm:text-base">Conteúdo extra valioso</p>
              </div>
              <div className="rounded-2xl border border-white/[0.09] bg-saas-card p-4 sm:p-6 text-center hover:border-white/[0.18] transition-colors">
                <h4 className="font-bold text-saas-ink text-lg sm:text-xl tracking-tight mb-2">Suporte para a plataforma</h4>
                <p className="text-saas-faint text-sm sm:text-base">Assistência completa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="border-t border-white/[0.06] py-20 md:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="font-extrabold text-saas-ink text-[clamp(26px,3.4vw,42px)] leading-[1.12] tracking-tight mb-8">
              <Accent>7 dias</Accent> de garantia incondicional
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl border border-white/[0.09] bg-saas-card p-8">
              <div className="text-center mb-8">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-saas-cyan to-saas-violet flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-saas-void" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>

                <p className="text-saas-body leading-relaxed text-xl mb-8">
                  Tente por 7 dias. Se você não estiver completamente satisfeito, nós devolvemos seu dinheiro —{' '}
                  <span className="text-saas-cyan font-semibold">sem nenhum tipo de questionamento</span>.
                </p>

                <div className="space-y-3 text-saas-body">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-5 h-5 text-saas-green" />
                    <span>Garantia de 7 dias</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-5 h-5 text-saas-green" />
                    <span>Reembolso total</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-5 h-5 text-saas-green" />
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
