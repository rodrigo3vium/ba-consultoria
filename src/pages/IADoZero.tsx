import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CheckCircle } from "lucide-react";
import { tracker } from '@/lib/tracking';

const IADoZero = () => {
  const handleCheckout = (ctaLocation: string) => {
    tracker.track('cta_click', {
      cta_type: 'hotmart_checkout',
      cta_location: ctaLocation,
      product: 'ia-do-zero'
    });
    window.location.href = 'https://pay.hotmart.com/L94763179U?';
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
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="pt-10 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-40 h-40 bg-green-500 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <Badge 
              variant="outline" 
              className="mb-8 border-green-500 text-green-400 bg-green-500/10 px-6 py-2 text-lg font-semibold rounded-full"
            >
              🔒 Oferta de Black Friday com 74% 💸 de desconto.
            </Badge>
            
            <h1 className="text-3xl md:text-5xl font-bold font-poppins mb-6 leading-tight text-white">
              Treinei o ChatGPT para me deixar <span className="text-green-400">mais produtivo</span> (e inteligente). Agora você vai fazer o mesmo, do zero e com <span className="text-green-400">passo a passo</span>.
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-300 mb-6 font-inter leading-relaxed max-w-5xl mx-auto">
              Mesmo que você nunca tenha usado IA, com o{' '}
              <span className="text-blue-400 font-semibold">IA do Zero</span>
              {' '}você vai aprender como usar o ChatGPT{' '}
              <span className="text-green-400 font-semibold">(E outras IAs)</span>
              {' '}de forma prática, estratégica e eficiente para aprender mais rápido, acelerar projetos e atingir seus objetivos com mais velocidade por apenas{' '}
              <span className="text-green-400 font-bold">R$49,90</span>.
            </h2>
            
            <Button 
              variant="default" 
              size="lg" 
              className="text-xl md:text-2xl px-8 md:px-16 py-6 md:py-8 font-inter bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              onClick={() => handleCheckout('hero')}
            >
              Quero o IA do Zero com 74% de desconto
            </Button>
            
            <p className="text-sm text-gray-400 mt-4">
              Acesso imediato e vitalício • Aprovado por mais de 400 clientes • Suporte via WhatsApp
            </p>
          </div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-8 text-white">
                  Por que isso importa? E por que{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    agora
                  </span>
                  ?
                </h2>
                
                <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
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
                <Card className="bg-slate-800/50 border-slate-700 p-6">
                  <Badge className="mb-4 bg-green-500/20 text-green-400 border-green-500">
                    BREAKING NEWS
                  </Badge>
                  <div className="bg-white rounded-lg p-6 mb-4">
                    <Carousel className="w-full">
                      <CarouselContent>
                        <CarouselItem>
                          <img 
                            src="/lovable-uploads/98363185-f8bf-40af-bd61-1fd97f8c9ba7.png" 
                            alt="Duolingo substituindo trabalhadores por IA" 
                            className="w-full h-auto object-contain rounded"
                          />
                        </CarouselItem>
                        <CarouselItem>
                          <img 
                            src="/lovable-uploads/5bb241ec-4824-4db5-813c-2e1292f72128.png" 
                            alt="CEO sobre uso de IA no trabalho" 
                            className="w-full h-auto object-contain rounded"
                          />
                        </CarouselItem>
                      </CarouselContent>
                      <CarouselPrevious className="left-2" />
                      <CarouselNext className="right-2" />
                    </Carousel>
                  </div>
                  
                  <div className="border-t border-gray-600 pt-4">
                    <h3 className="text-xl font-bold text-white text-center mb-2">
                      EMPRESAS DEMITEM FUNCIONÁRIOS E SUBSTITUEM POR IA
                    </h3>
                    <p className="text-gray-300 text-center italic">
                      A revolução já começou nas maiores empresas do mundo
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PhD in Pocket Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <Card className="bg-slate-900/50 border-slate-600 p-6">
                  <Badge className="mb-4 bg-green-500/20 text-green-400 border-green-500">
                    BREAKING NEWS
                  </Badge>
                  <div className="bg-white rounded-lg p-6 mb-4">
                    <div className="text-center">
                      <div className="mb-4">
                        <img src="/lovable-uploads/09c2831d-7172-433f-878b-484b0cc8a22c.png" alt="IQ Test Chart" className="w-full h-auto object-contain rounded" />
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      INTELIGÊNCIA ARTIFICIAL SUPERA 99% DA POPULAÇÃO MUNDIAL EM TESTE
                    </h3>
                    <p className="text-gray-400 italic">
                      Estudo comprova superioridade da IA em tarefas cognitivas complexas
                    </p>
                  </div>
                </Card>
              </div>
              
              <div>
                <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
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

      {/* Target Audience Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-8 text-white">
              Para quem é o{' '}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                IA do Zero
              </span>
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              "Para quem quer alcançar o 1% em todas as áreas da vida",
              "Quem quer aprender mais em menos tempo",
              "Quem está se sentindo travado e improdutivo",
              'Quem já percebeu que a IA não é mais "opção" — é sobrevivência'
            ].map((item, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 p-6">
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0" />
                  <p className="text-xl text-white font-medium">{item}</p>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              variant="default" 
              size="lg" 
              className="text-base sm:text-xl px-6 sm:px-12 py-4 sm:py-6 font-inter bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              onClick={() => handleCheckout('target_audience')}
            >
              QUERO APRENDER A USAR IA
            </Button>
          </div>
        </div>
      </section>

      {/* Harvard Study Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-8 text-white">
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Harvard
              </span>
              {' '}está mudando o jeito de ensinar
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-900/50 border-slate-600 p-8 mb-8">
              <div className="bg-white rounded-lg p-6 mb-6">
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
                <p className="text-xl text-gray-300 leading-relaxed">
                  Estudo realizado em Harvard comprovou que aprender utilizando{' '}
                  <span className="text-blue-400 font-semibold">"Tutores de IA"</span>
                  {' '}é{' '}
                  <span className="text-green-400 font-bold">2×</span>
                  {' '}mais eficiente do que aprender através de técnicas de estudo ativo.
                </p>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Usar tutores de IA acelera o aprendizado em mais de{' '}
                  <span className="text-blue-400 font-bold">120%</span>.
                </p>
              </div>
            </Card>
            
            <div className="text-center">
              <Button 
                variant="default" 
                size="lg" 
                className="text-base sm:text-xl px-6 sm:px-12 py-4 sm:py-6 font-inter bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                onClick={() => handleCheckout('harvard_section')}
              >
                QUERO APRENDER A USAR IA
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-8 text-white">
              Reação de quem usa nossos{' '}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                prompts
              </span>
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700 p-8">
              <div className="bg-slate-900 rounded-lg p-6 border border-slate-600">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed italic mb-6">
                  "Vou dizer por mim, mudou meu jeito de pensar e trabalhar com IA. Um dos seus prompts tirou meu projeto de aula da gaveta, estou produzindo conteúdo técnico pra minha área de qualidade, muito obrigado, vale muito a pena o curso..."
                </p>
                <div className="text-center">
                  <p className="text-white font-semibold text-xl">Eduardo</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>



      {/* Learning Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-8 text-white">
              O que você vai{' '}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                aprender
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-8 h-8 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-blue-400 mb-3 font-poppins">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed font-inter">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-8 text-white">
              Investimento
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Quanto custa para ter acesso ao Método IA do Zero?
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700 p-8 mb-12">
              {/* Price Section */}
              <div className="text-center mb-8">
                <div className="mb-4">
                  <span className="text-2xl text-gray-500 line-through relative">
                    R$ 197,00
                  </span>
                </div>
                <div className="text-6xl font-bold text-blue-400 mb-4">R$ 49,90</div>
                <p className="text-lg text-gray-300">
                  ou <span className="text-green-400 font-semibold">7x</span> de <span className="text-green-400 font-semibold">R$ 8,16</span>
                </p>
              </div>

              {/* What You Get */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">O que você vai receber</h3>
                <div className="space-y-4">
                  {[
                    "Acesso imediato ao IA do Zero, método para produzir 10x mais usando IA",
                    "Exemplos práticos, prompts prontos e modelo de aplicação real",
                    "Um método validado de engenharia de prompts",
                    "Um guia para transformar IA em assistente pessoal, consultor de negócios ou mentor de produtividade"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                      <p className="text-gray-300 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bonus Section */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-green-400 mb-6 text-center">Bônus</h3>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 leading-relaxed">
                    Acesso a um grupo VIP no WhatsApp para ficar por dentro das últimas novidades de IA e fazer networking
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center mb-6">
                <Button 
                  variant="default" 
                  size="lg" 
                  className="text-base sm:text-xl px-6 sm:px-12 py-4 sm:py-6 font-inter bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-md mx-auto"
                  onClick={() => handleCheckout('pricing_section')}
                >
                  COMEÇAR A MINHA MUDANÇA DE VIDA
                </Button>
              </div>

              {/* Security Badge */}
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-2 text-green-400 mb-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold text-lg">Compra 100% segura!</span>
                </div>
                <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto">
                  Receba seu acesso imediatamente após a confirmação do pagamento.
                </p>
              </div>
            </Card>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-16">
              <Card className="bg-slate-800/50 border-slate-700 p-4 sm:p-6 text-center">
                <h4 className="text-lg sm:text-xl font-semibold text-blue-400 mb-2">Aulas 100% online</h4>
                <p className="text-gray-400 text-sm sm:text-base">Acesse de qualquer lugar</p>
              </Card>
              <Card className="bg-slate-800/50 border-slate-700 p-4 sm:p-6 text-center">
                <h4 className="text-lg sm:text-xl font-semibold text-blue-400 mb-2">Bônus exclusivos</h4>
                <p className="text-gray-400 text-sm sm:text-base">Conteúdo extra valioso</p>
              </Card>
              <Card className="bg-slate-800/50 border-slate-700 p-4 sm:p-6 text-center">
                <h4 className="text-lg sm:text-xl font-semibold text-blue-400 mb-2">Suporte para a plataforma</h4>
                <p className="text-gray-400 text-sm sm:text-base">Assistência completa</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-8 text-white">
              <span className="text-blue-400">7 dias</span> de garantia incondicional
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-900/50 border-slate-600 p-8">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  Tente por 7 dias. Se você não estiver completamente satisfeito, nós devolvemos seu dinheiro —{' '}
                  <span className="text-blue-400 font-semibold">sem nenhum tipo de questionamento</span>.
                </p>
                
                <div className="space-y-3 text-gray-400">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Garantia de 7 dias</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Reembolso total</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Sem questionamentos</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default IADoZero;