import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Clock, BookOpen, FileText, TrendingUp, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const ComoAplicarIA = () => {
  const handleCTA = () => {
    const whatsappNumber = "5511979794086";
    const message = encodeURIComponent("Olá! Quero me inscrever no curso 'Como aplicar IA no seu negócio' por R$49");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };
  const aulas = [{
    numero: 1,
    titulo: "História da IA: o ponto de inflexão",
    duracao: "40–60 min",
    descricao: "Entenda, sem jargão, por que agora é diferente e como isso impacta seu trabalho.",
    topicos: ["A linha do tempo da IA e o momento 'virada de chave'", "3 mitos que te travam (e o que é verdade)", "Framework Pessoa → Processo → Plataforma para colocar IA no seu fluxo de trabalho", "Mini-ganho: Pack de 7 Prompts Universais (email, roteiro, SOP, análise de planilha, checklist, follow-up…)"]
  }, {
    numero: 2,
    titulo: "Como a IA vai mudar o mundo (e o seu)",
    duracao: "45–60 min",
    descricao: "Dos conceitos ao impacto real nas áreas do negócio.",
    topicos: ["Onde a IA tira atrito (Marketing, Vendas, Operações, Atendimento)", "Janelas de arbitragem nos próximos 6–12 meses (onde poucos estão olhando)", "3 níveis de adoção: Ferramenta → Processo → Sistema (o que fazer em cada etapa)", "Exercício guiado: Matriz Impacto × Facilidade para escolher sua primeira iniciativa"]
  }, {
    numero: 3,
    titulo: "Oportunidades de IA no seu negócio (Plano 30 dias)",
    duracao: "60–75 min",
    descricao: "Mão na massa: um plano simples e objetivo para começar.",
    topicos: ["7 Playbooks prontos (WhatsApp assistido por IA, Conteúdo 10x, Prospecção, CS, Backoffice, Dados simples, GTM lite)", "Plano 30 dias: o que executar por semana para obter seu primeiro resultado", "ROI na prática: como medir ganho em horas, leads ou vendas"]
  }];
  const entregaveis = ["Pack 7 Prompts Universais (PDF)", "Matriz Impacto × Facilidade (planilha)", "Plano de 30 dias (PDF de execução)", "Planilha simples de ROI (modelos para leads/horas/vendas)", "Checklist de eventos mínimos (tracking básico para saber o que funcionou)"];
  const beneficios = ["Clareza sobre o que é e o que não é IA (sem hype)", "Primeiro resultado prático (em produtividade, leads ou qualidade de entrega)", "Um plano de 30 dias para seguir com segurança", "Base de decisão para investir com critério no próximo passo"];
  const faq = [{
    pergunta: "Preciso saber programar?",
    resposta: "Não. Tudo é feito com linguagem natural e ferramentas acessíveis."
  }, {
    pergunta: "Quanto tempo preciso?",
    resposta: "As três aulas somam ~3 horas. Os exercícios são curtos (10–20 minutos) e já geram ganho."
  }, {
    pergunta: "Quando começo?",
    resposta: "Logo após a compra, com acesso imediato às aulas e materiais."
  }, {
    pergunta: "Tem certificado?",
    resposta: "Disponibilizamos certificado de conclusão ao finalizar as aulas."
  }, {
    pergunta: "Vou ver ferramentas específicas?",
    resposta: "O foco é prático e agnóstico — você entende o porquê e o como. Onde for útil, mostro exemplos e alternativas."
  }, {
    pergunta: "E se eu quiser seguir além do básico?",
    resposta: "Ao final da Aula 3, você poderá entrar no IA para Negócios (opcional), com templates, automações e acompanhamento para acelerar a implementação."
  }, {
    pergunta: "Como peço suporte?",
    resposta: "Dúvidas de acesso e materiais: suporte por email. Dúvidas de conteúdo avançado: indicamos seguir para o IA para Negócios."
  }, {
    pergunta: "Tem turma ou é gravado?",
    resposta: "As aulas são on-demand para você assistir quando quiser. Atualizações pontuais são adicionadas conforme necessário."
  }];
  return <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-ba-blue-dark/5 to-transparent" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-ba-blue-light via-white to-ba-orange bg-clip-text text-transparent leading-tight">Como aplicar Inteligência Artificial no seu Negócio</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">Co
Se você está perdido com o barulho sobre IA, aqui vai o mapa. Em três aulas diretas ao ponto, você entende como a IA funciona, por que ela está mudando tudo e quais oportunidades práticas existem para aplicar IA no seu negócio.<span className="italic">já</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <div className="text-center">
                <div className="text-sm text-white/60">Preço de entrada</div>
                <div className="text-5xl font-bold bg-gradient-to-r from-ba-blue-light to-ba-orange bg-clip-text text-transparent">
                  R$49
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/70 pt-4">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-ba-blue-light" />
                <span>3 aulas on-demand</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-ba-blue-light" />
                <span>Materiais práticos</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-ba-blue-light" />
                <span>Nível iniciante</span>
              </div>
            </div>

            <Button onClick={handleCTA} size="lg" className="bg-gradient-primary shadow-glow hover:shadow-glow-intense text-lg px-8 py-6 h-auto">
              Quero entrar por R$49
            </Button>
          </div>
        </div>
      </section>

      {/* Por que este curso existe */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-black/80 backdrop-blur-sm border-ba-blue-light/20 hover:border-ba-blue-light/60 transition-all shadow-glow">
            <CardHeader>
              <CardTitle className="text-3xl bg-gradient-to-r from-ba-blue-light to-white bg-clip-text text-transparent">
                Por que este curso existe
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-white/80 text-lg">
              <p>
                A maioria fala de IA de forma vaga. Eu te entrego <strong className="text-white">clareza aplicável</strong>: o que fazer amanhã às 9h, sem jargão. Você sai com <strong className="text-white">prompts, checklists e um plano de 30 dias</strong> para começar com segurança e velocidade.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-ba-blue-light flex-shrink-0 mt-1" />
                  <span>Sem bla-bla-bla: foco em tarefas e resultados.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-ba-blue-light flex-shrink-0 mt-1" />
                  <span>Sem depender de programar: usamos linguagem natural.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-ba-blue-light flex-shrink-0 mt-1" />
                  <span>Sem perder meses: <strong className="text-white">ganho prático em 48h</strong>.</span>
                </li>
              </ul>
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
                  Profissionais e empreendedores que querem <strong className="text-white">usar IA no dia a dia</strong> para trabalhar melhor e crescer.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-black/80 backdrop-blur-sm border-ba-blue-light/20 hover:border-ba-blue-light/60 transition-all shadow-glow">
              <CardContent className="pt-6">
                <p className="text-white/80">
                  Quem se sente <strong className="text-white">sobrecarregado de informação</strong> e precisa de uma direção simples e concreta.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-black/80 backdrop-blur-sm border-ba-blue-light/20 hover:border-ba-blue-light/60 transition-all shadow-glow">
              <CardContent className="pt-6">
                <p className="text-white/80">
                  Donos(as) de pequenos negócios que querem <strong className="text-white">aumentar produtividade, leads e vendas</strong> sem complicação técnica.
                </p>
              </CardContent>
            </Card>
          </div>
          <p className="text-center text-white/60 italic mt-8">
            Não é para quem procura milagres ou está confortável em deixar a concorrência sair na frente.
          </p>
        </div>
      </section>

      {/* Currículo */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-ba-blue-light to-white bg-clip-text text-transparent">
            O que você vai aprender
          </h2>
          <div className="space-y-6">
            {aulas.map(aula => <Card key={aula.numero} className="bg-black/80 backdrop-blur-sm border-ba-blue-light/20 hover:border-ba-blue-light/60 transition-all shadow-glow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-xl font-bold">
                      {aula.numero}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl text-white mb-2">
                        {aula.titulo}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-ba-blue-light/80">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{aula.duracao}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-white/70 italic border-l-4 border-ba-blue-light/40 pl-4">
                    {aula.descricao}
                  </p>
                  <ul className="space-y-2">
                    {aula.topicos.map((topico, idx) => <li key={idx} className="flex items-start gap-3 text-white/80">
                        <CheckCircle2 className="w-5 h-5 text-ba-blue-light flex-shrink-0 mt-0.5" />
                        <span>{topico}</span>
                      </li>)}
                  </ul>
                </CardContent>
              </Card>)}
          </div>

          <div className="mt-8 text-center">
            <Button onClick={handleCTA} size="lg" className="bg-gradient-primary shadow-glow hover:shadow-glow-intense text-lg px-8 py-6 h-auto">
              Quero entrar por R$49
            </Button>
          </div>
        </div>
      </section>

      {/* Entregáveis */}
      <section className="py-16 px-4 bg-gradient-to-b from-ba-blue-dark/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-ba-blue-light to-white bg-clip-text text-transparent">
            O que você recebe
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {entregaveis.map((item, idx) => <Card key={idx} className="bg-black/80 backdrop-blur-sm border-ba-blue-light/20 hover:border-ba-blue-light/60 transition-all shadow-glow">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-ba-blue-light flex-shrink-0" />
                    <span className="text-white/90">{item}</span>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-ba-blue-light to-white bg-clip-text text-transparent">
            Como funciona
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-black/80 backdrop-blur-sm border-ba-blue-light/20 hover:border-ba-blue-light/60 transition-all shadow-glow">
              <CardContent className="pt-6">
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-ba-blue-light flex-shrink-0 mt-1" />
                    <span><strong className="text-white">Acesso imediato</strong> após a compra</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-ba-blue-light flex-shrink-0 mt-1" />
                    <span>Assista <strong className="text-white">no seu ritmo</strong> do celular ou computador</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-black/80 backdrop-blur-sm border-ba-blue-light/20 hover:border-ba-blue-light/60 transition-all shadow-glow">
              <CardContent className="pt-6">
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-ba-blue-light flex-shrink-0 mt-1" />
                    <span>Materiais para <strong className="text-white">baixar e aplicar</strong> no mesmo dia</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-ba-blue-light flex-shrink-0 mt-1" />
                    <span>Suporte básico por email para dúvidas de acesso e materiais</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 px-4 bg-gradient-to-b from-ba-blue-dark/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-ba-blue-light to-white bg-clip-text text-transparent">
            O que você vai conseguir ao final
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {beneficios.map((item, idx) => <Card key={idx} className="bg-black/80 backdrop-blur-sm border-ba-blue-light/20 hover:border-ba-blue-light/60 transition-all shadow-glow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-ba-blue-light flex-shrink-0 mt-1" />
                    <span className="text-white/90">{item}</span>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Preço e Garantia */}
      <section className="py-16 px-4">
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
      <section className="py-16 px-4 bg-gradient-to-b from-ba-blue-dark/5 to-transparent">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-ba-blue-light to-white bg-clip-text text-transparent">
            Perguntas frequentes
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faq.map((item, idx) => <AccordionItem key={idx} value={`item-${idx}`} className="bg-black/80 backdrop-blur-sm border border-ba-blue-light/20 rounded-lg px-6 hover:border-ba-blue-light/60 transition-all">
                <AccordionTrigger className="text-white hover:text-ba-blue-light text-left">
                  {item.pergunta}
                </AccordionTrigger>
                <AccordionContent className="text-white/80">
                  {item.resposta}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-ba-blue-light via-white to-ba-orange bg-clip-text text-transparent">
            Chamada final
          </h2>
          <p className="text-xl text-white/80">
            Comece simples. Em <strong className="text-white">3 aulas</strong> você ganha clareza, aplica no seu contexto e sai com um <strong className="text-white">plano de 30 dias</strong>. Se fizer sentido avançar, o próximo passo estará a um clique.
          </p>
          <Button onClick={handleCTA} size="lg" className="bg-gradient-primary shadow-glow hover:shadow-glow-intense text-lg px-8 py-6 h-auto">
            Quero entrar por R$49
          </Button>
          <p className="text-sm text-white/60">
            Ou role a página para rever o conteúdo do curso.
          </p>
        </div>
      </section>

      <Footer />
    </div>;
};
export default ComoAplicarIA;