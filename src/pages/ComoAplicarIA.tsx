import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, BookOpen, FileText, Sparkles, Quote } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ComoAplicarIA = () => {
  const handleCTA = () => {
    const whatsappNumber = "5511979794086";
    const message = encodeURIComponent("Olá! Quero me inscrever no curso 'Como aplicar IA no seu negócio' por R$49");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
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
    "Bônus: IA é Bolha ou não?",
    "Plano de execução em 30 dias personalizado para a sua realidade",
    "3 aulas sobre como aplicar IA no seu negócio"
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
    },
    {
      pergunta: "Como peço suporte?",
      resposta: "Dúvidas de acesso e materiais: suporte por email. Dúvidas de conteúdo avançado: indicamos seguir para o IA para Negócios."
    }
  ];

  const depoimentos = [
    "Parecia complicado, hoje uso IA todo dia para roteiros e emails — economizo horas.",
    "A matriz simples me ajudou a escolher por onde começar, já vi impacto em 2 semanas."
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-ba-blue-dark/5 to-transparent" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-ba-blue-light via-white to-ba-orange bg-clip-text text-transparent leading-tight">
              Como aplicar Inteligência Artificial no seu Negócio
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Se você está perdido com o barulho sobre IA, aqui vai o mapa. Em três aulas diretas ao ponto, você entende como a IA funciona, por que ela está mudando tudo e quais oportunidades práticas existem para aplicar IA no seu negócio.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/70 pt-4">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-ba-blue-light" />
                <span>3 aulas práticas + material complementar</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-ba-blue-light" />
                <span>+300 empresários satisfeitos</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <div className="text-center">
                <div className="text-sm text-white/60 line-through">De R$167 por</div>
                <div className="text-5xl font-bold bg-gradient-to-r from-ba-blue-light to-ba-orange bg-clip-text text-transparent">
                  R$49
                </div>
              </div>
            </div>

            <Button onClick={handleCTA} size="lg" className="bg-gradient-primary shadow-glow hover:shadow-glow-intense text-lg px-8 py-6 h-auto">
              Quero entrar por R$49
            </Button>
          </div>
        </div>
      </section>

      {/* Por que isso importa agora */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-black/80 backdrop-blur-sm border-ba-blue-light/20 hover:border-ba-blue-light/60 transition-all shadow-glow">
            <CardHeader>
              <CardTitle className="text-3xl bg-gradient-to-r from-ba-blue-light to-white bg-clip-text text-transparent">
                Por que isso importa agora?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-white/80 text-lg">
              <p>
                As pesquisas mostram, a IA será a maior revolução da história da humanidade. E aqueles que dominarem essa tecnologia primeiro, terão uma <strong className="text-white">vantagem competitiva</strong> em relação aos concorrentes.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Para quem é */}
      <section className="py-16 px-4 bg-gradient-to-b from-ba-blue-dark/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-ba-blue-light to-white bg-clip-text text-transparent">
            Para quem é
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-black/80 backdrop-blur-sm border-ba-blue-light/20 hover:border-ba-blue-light/60 transition-all shadow-glow">
              <CardContent className="pt-6">
                <p className="text-white/80">
                  Empreendedores que querem <strong className="text-white">usar IA no dia a dia</strong> para trabalhar melhor e crescer.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-black/80 backdrop-blur-sm border-ba-blue-light/20 hover:border-ba-blue-light/60 transition-all shadow-glow">
              <CardContent className="pt-6">
                <p className="text-white/80">
                  Quem se sente perdido <strong className="text-white">com tanta informação</strong> e precisa de uma direção simples e prática.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-black/80 backdrop-blur-sm border-ba-blue-light/20 hover:border-ba-blue-light/60 transition-all shadow-glow">
              <CardContent className="pt-6">
                <p className="text-white/80">
                  Donos de empresas que querem <strong className="text-white">aumentar produtividade, leads e vendas</strong> sem complicação técnica.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Currículo */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-ba-blue-light to-white bg-clip-text text-transparent">
            O que você vai aprender
          </h2>
          <div className="space-y-6">
            {aulas.map((aula) => (
              <Card key={aula.numero} className="bg-black/80 backdrop-blur-sm border-ba-blue-light/20 hover:border-ba-blue-light/60 transition-all shadow-glow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-xl font-bold">
                      {aula.numero}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl text-white mb-2">
                        Aula {aula.numero} — {aula.titulo}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-white/70 italic border-l-4 border-ba-blue-light/40 pl-4">
                    {aula.descricao}
                  </p>
                  <ul className="space-y-2">
                    {aula.topicos.map((topico, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-white/80">
                        <CheckCircle2 className="w-5 h-5 text-ba-blue-light flex-shrink-0 mt-0.5" />
                        <span>{topico}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Entregáveis */}
      <section className="py-16 px-4 bg-gradient-to-b from-ba-blue-dark/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-ba-blue-light to-white bg-clip-text text-transparent">
            O que você recebe
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {entregaveis.map((item, idx) => (
              <Card key={idx} className="bg-black/80 backdrop-blur-sm border-ba-blue-light/20 hover:border-ba-blue-light/60 transition-all shadow-glow">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-ba-blue-light flex-shrink-0" />
                    <span className="text-white/90">{item}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-ba-blue-light to-white bg-clip-text text-transparent">
            Depoimentos
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {depoimentos.map((depoimento, idx) => (
              <Card key={idx} className="bg-black/80 backdrop-blur-sm border-ba-blue-light/20 hover:border-ba-blue-light/60 transition-all shadow-glow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Quote className="w-6 h-6 text-ba-blue-light flex-shrink-0" />
                    <p className="text-white/80 italic">"{depoimento}"</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-white/50 text-sm mt-6 italic">
            (Insira aqui prints e depoimentos dos seus alunos/clientes.)
          </p>
        </div>
      </section>

      {/* Preço e Garantia */}
      <section className="py-16 px-4 bg-gradient-to-b from-ba-blue-dark/5 to-transparent">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-black/80 backdrop-blur-sm border-ba-blue-light/20 shadow-glow-intense">
            <CardContent className="pt-8 text-center space-y-6">
              <div>
                <div className="text-sm text-white/60 mb-2">Preço de entrada</div>
                <div className="text-6xl font-bold bg-gradient-to-r from-ba-blue-light to-ba-orange bg-clip-text text-transparent">
                  R$49
                </div>
              </div>
              <div className="text-white/80 text-lg">
                <strong className="text-white">Garantia incondicional de 7 dias</strong> — se não sentir valor, é só pedir reembolso.
              </div>
              <Button onClick={handleCTA} size="lg" className="bg-gradient-primary shadow-glow hover:shadow-glow-intense text-lg px-8 py-6 h-auto w-full">
                Quero entrar por R$49
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-ba-blue-light to-white bg-clip-text text-transparent">
            Perguntas frequentes
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faq.map((item, idx) => (
              <AccordionItem 
                key={idx} 
                value={`item-${idx}`}
                className="bg-black/80 backdrop-blur-sm border-ba-blue-light/20 rounded-lg px-6"
              >
                <AccordionTrigger className="text-white text-left hover:no-underline">
                  {item.pergunta}
                </AccordionTrigger>
                <AccordionContent className="text-white/80">
                  {item.resposta}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Chamada Final */}
      <section className="py-16 px-4 bg-gradient-to-b from-ba-blue-dark/5 to-transparent">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-xl text-white/80">
            Comece simples. Em <strong className="text-white">3 aulas</strong> você ganha clareza, aplica no seu contexto e sai com um <strong className="text-white">plano de 30 dias</strong>. Se fizer sentido avançar, o próximo passo estará a um clique.
          </p>
          <Button onClick={handleCTA} size="lg" className="bg-gradient-primary shadow-glow hover:shadow-glow-intense text-lg px-8 py-6 h-auto">
            Quero entrar por R$49
          </Button>
          <p className="text-white/50 text-sm">
            Ou role a página para rever o conteúdo do curso.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ComoAplicarIA;
