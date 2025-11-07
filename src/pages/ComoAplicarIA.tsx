import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Zap, Target, TrendingUp, Shield } from "lucide-react";

const ComoAplicarIA = () => {
  const handleCTA = () => {
    window.open("https://wa.me/5511999999999", "_blank");
  };

  const setores = [
    {
      nome: "Marketing",
      exemplos: "ideação e variação de criativos, páginas e anúncios mais rápidos, nutrição e follow-ups que não dependem do dono."
    },
    {
      nome: "Vendas",
      exemplos: "qualificação e priorização de leads, roteiros de contato, propostas assistidas, CRM sempre atualizado."
    },
    {
      nome: "Atendimento/CS",
      exemplos: "respostas baseadas na sua base de conhecimento, redução de tempo de resolução, NPS automatizado."
    },
    {
      nome: "Operações/Financeiro",
      exemplos: "reconciliação e conferência de dados, resumos de DRE gerencial, relatórios prontos para decisão."
    },
    {
      nome: "Produto/Serviço",
      exemplos: "análise de feedback de clientes, melhorias de onboarding, documentação clara para a equipe."
    },
    {
      nome: "TI",
      exemplos: "documentação de processos, assistentes internos para dúvidas recorrentes, padronização de tarefas repetitivas."
    },
    {
      nome: "Recrutamento",
      exemplos: "triagem de currículos, roteiros de entrevistas, alinhamento candidato-vaga mais rápido."
    },
    {
      nome: "Jurídico",
      exemplos: "leitura e sumarização de contratos, checklist de prazos e pendências."
    },
    {
      nome: "Treinamento",
      exemplos: "trilhas de treinamento sob demanda, materiais e avaliações consistentes."
    }
  ];

  const beneficios = [
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      titulo: "Masterclass Prática",
      descricao: "Aula direta: fundamentos práticos, priorização por receita e como evitar armadilhas comuns."
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      titulo: "Base de Conhecimento",
      descricao: "30+ exemplos por setor com complexidade, tempo, recursos e framework passo a passo."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      titulo: "Agente de Entrevista",
      descricao: "GPT customizado que te faz as perguntas certas e aponta onde a IA paga mais rápido no seu contexto."
    }
  ];

  const diferenciais = [
    "Benchmarks da economia real: nada de 'case de startup de venture'. Exemplos testados em PMEs brasileiras.",
    "Foco em resultado, não em ferramenta: você recebe frameworks replicáveis com a stack que já usa.",
    "Decisão guiada: o Agente de Entrevista aponta onde começar para destravar receita e tempo."
  ];

  const passos = [
    "Assista à Masterclass e entenda o mapa (receita primeiro).",
    "Escolha 1–3 exemplos na base (filtre por impacto/tempo/complexidade).",
    "Implemente com o framework e o Checklist.",
    "Dúvidas? Fale no WhatsApp (até 24h).",
    "Repita e vá construindo a sua esteira de ganhos."
  ];

  const objecoes = [
    {
      pergunta: "Não tenho tempo.",
      resposta: "Justamente por isso: você seleciona o exemplo de maior impacto/menor esforço e executa com o Checklist."
    },
    {
      pergunta: "Minha equipe não é técnica.",
      resposta: "Não precisa ser. O material é no-code/low-code e focado em processo. Ferramenta é acessório; resultado vem do fluxo."
    },
    {
      pergunta: "Vai sair caro em ferramentas.",
      resposta: "O foco é em frameworks. Você pode implementar com o que já tem (ou equivalente gratuito)."
    },
    {
      pergunta: "Não vou conseguir implementar.",
      resposta: "Passo a passo, entregáveis claros e suporte por WhatsApp. Comece pequeno e compõe."
    },
    {
      pergunta: "IA é hype.",
      resposta: "Hype é falar de IA sem P&L. Aqui você prioriza casos que pagam a conta (receita e eficiência) e mede."
    }
  ];

  const faq = [
    {
      pergunta: "Preciso trocar minha stack?",
      resposta: "Não. Os frameworks funcionam com ferramentas equivalentes. Ajuste ao que você já usa."
    },
    {
      pergunta: "Serve para qualquer segmento de PME?",
      resposta: "O conteúdo é organizado por setor de negócio e prioriza marketing e vendas primeiro (receita)."
    },
    {
      pergunta: "Tem suporte 1:1 ou implementação feita por vocês?",
      resposta: "Não. Suporte é assíncrono via WhatsApp. A ideia é te dar autonomia."
    },
    {
      pergunta: "Quando recebo acesso?",
      resposta: "Imediato: Masterclass, Base no Notion e Agente de Entrevista (link do GPT)."
    },
    {
      pergunta: "Posso pedir reembolso?",
      resposta: "Sim, até 7 dias, sem justificativa."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Playbook prático para aplicar IA na sua empresa
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-muted-foreground">
            Mais de 30 exemplos divididos por setor — sem hype, só o que dá resultado.
          </p>
          <p className="text-lg mb-8 text-foreground max-w-3xl mx-auto">
            Saia do FOMO: descubra o que fazer, onde começar e como implementar IA na sua PME (R$2–10MM/ano). 
            Sem depender de time técnico, sem trocar a sua operação por teoria.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button size="lg" onClick={handleCTA} className="text-lg px-8">
              Começar agora por R$49
            </Button>
          </div>

          <div className="space-y-2 text-sm">
            <p className="text-muted-foreground">
              <span className="line-through">De R$197</span> por <span className="text-primary font-bold text-lg">R$49</span> até 30/11/2025
            </p>
            <p className="text-muted-foreground">
              Acesso 1 ano • Garantia de 7 dias • Pix ou Cartão (7× R$8,16)
            </p>
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-block mt-4"
            >
              Tirar dúvidas no WhatsApp (resposta em até 24h)
            </a>
          </div>
        </div>
      </section>

      {/* O que você vai receber */}
      <section className="py-16 px-4 bg-background">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
            O que você vai receber
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {beneficios.map((item, index) => (
              <Card key={index} className="border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="mb-4">{item.icon}</div>
                  <CardTitle className="text-xl">{item.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-lg font-semibold text-foreground">
              <Shield className="inline h-5 w-5 mr-2 text-primary" />
              Bônus: Checklist de Implementação (do mapeamento até o go-live, item a item)
            </p>
          </div>
        </div>
      </section>

      {/* Setores cobertos */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">
            Setores cobertos (com exemplos práticos)
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Tudo organizado por impacto esperado, complexidade e tempo — para você escolher o que dá ROI primeiro.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {setores.map((setor, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{setor.nome}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{setor.exemplos}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Por que é diferente */}
      <section className="py-16 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
            Por que é diferente
          </h2>
          <div className="space-y-4">
            {diferenciais.map((item, index) => (
              <div key={index} className="flex gap-4 items-start">
                <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
            Como funciona (simples)
          </h2>
          <div className="space-y-6">
            {passos.map((passo, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                  {index + 1}
                </div>
                <p className="text-lg text-foreground pt-1">{passo}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" onClick={handleCTA} className="text-lg px-8">
              Começar agora por R$49
            </Button>
          </div>
        </div>
      </section>

      {/* Objeções */}
      <section className="py-16 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
            Objeções (e respostas francas)
          </h2>
          <div className="space-y-6">
            {objecoes.map((item, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">"{item.pergunta}"</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.resposta}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Preço, acesso e garantia */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
            Preço, acesso e garantia
          </h2>
          <div className="bg-card border border-border rounded-lg p-8 mb-8">
            <p className="text-5xl font-bold text-primary mb-4">R$49</p>
            <p className="text-muted-foreground mb-6">
              <span className="line-through">De R$197</span> até 30/11/2025
            </p>
            <ul className="space-y-3 text-left max-w-md mx-auto mb-8">
              <li className="flex gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Acesso por 1 ano + atualizações inclusas</span>
              </li>
              <li className="flex gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Suporte por WhatsApp (resposta em até 24h)</span>
              </li>
              <li className="flex gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Garantia incondicional de 7 dias</span>
              </li>
              <li className="flex gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Pix ou Cartão (7× R$8,16)</span>
              </li>
            </ul>
            <Button size="lg" onClick={handleCTA} className="text-lg px-8">
              Garantir meu acesso por R$49
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-background">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
            FAQ rápido
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faq.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-foreground">
                  {item.pergunta}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.resposta}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="text-xl mb-6 text-foreground font-semibold">
            Assinado: Rodrigo Albuquerque
          </p>
          <p className="text-lg mb-8 text-muted-foreground">
            Playbook direto, sem firula. Execute o que paga a conta primeiro.
          </p>
          <Button size="lg" onClick={handleCTA} className="text-lg px-8 mb-4">
            Começar agora por R$49
          </Button>
          <p className="text-sm text-muted-foreground">
            <span className="line-through">De R$197</span> por R$49 até 30/11/2025 • Acesso 1 ano • Garantia de 7 dias • Pix ou Cartão (7× R$8,16)
          </p>
        </div>
      </section>
    </div>
  );
};

export default ComoAplicarIA;
