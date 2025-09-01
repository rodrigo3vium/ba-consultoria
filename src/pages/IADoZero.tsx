import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const IADoZero = () => {
  const handleWhatsAppContact = () => {
    const message = encodeURIComponent("Olá! Quero o IA do Zero por R$ 49,90. Como faço para adquirir?");
    window.open(`https://wa.me/5511999718595?text=${message}`, '_blank');
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
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
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
              Só R$ 49,90
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6 leading-tight text-white">
              Treinei o ChatGPT para me deixar{' '}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                mais produtivo
              </span>
              <br />
              <span className="text-white">(e inteligente)</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-6 font-inter leading-relaxed">
              Agora você vai fazer o mesmo,{' '}
              <span className="text-green-400 font-semibold">do zero</span>
              {' '}e com passo a passo.
            </p>
            
            <p className="text-lg text-gray-400 max-w-4xl mx-auto font-inter leading-relaxed mb-12">
              Mesmo que você nunca tenha usado IA, com o{' '}
              <span className="text-blue-400 font-semibold">IA do Zero</span>
              {' '}você vai aprender como usar o ChatGPT de forma prática, estratégica e eficiente para aprender mais rápido, acelerar projetos e atingir seus objetivos com mais velocidade.
            </p>
            
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Clique no botão abaixo e comece a dominar a ferramenta que vai mudar sua forma de viver — por apenas{' '}
              <span className="text-green-400 font-bold">R$ 49</span>.
            </p>
            
            <Button 
              variant="default" 
              size="lg" 
              className="text-xl px-12 py-6 font-inter bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={handleWhatsAppContact}
            >
              QUERO O IA DO ZERO
            </Button>
          </div>
        </div>
      </section>

      {/* Learning Section */}
      <section className="py-20 bg-slate-900">
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

      <Footer />
    </div>
  );
};

export default IADoZero;