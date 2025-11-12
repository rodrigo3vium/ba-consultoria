import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  MapPin, 
  Star, 
  Phone, 
  TrendingUp, 
  Search, 
  AlertCircle,
  CheckCircle,
  Target,
  BarChart,
  Shield,
  Zap,
  Users,
  Award
} from "lucide-react";

const GoogleMeuNegocio = () => {
  const whatsappNumber = "5548996036565";
  const whatsappMessage = encodeURIComponent("Olá! Quero fazer o diagnóstico gratuito do meu Google Meu Negócio.");

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-card via-card-premium to-card pt-8">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--ba-blue-dark)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--ba-blue-dark)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
          
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary">Especialistas em Google Meu Negócio</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Coloque sua empresa no topo do Google sem gastar R$1
              </h1>
              
              <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                Otimizamos seu Google Meu Negócio para transformar ele em uma máquina de geração de clientes qualificados todos os dias.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button 
                  size="lg" 
                  className="text-lg px-8"
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
                >
                  <TrendingUp className="mr-2 h-5 w-5" />
                  Quero aparecer no topo
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8"
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
                >
                  <Search className="mr-2 h-5 w-5" />
                  Fazer diagnóstico gratuito
                </Button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-accent fill-accent" />
                  <span>+100 negócios locais atendidos</span>
                </div>
                <span className="hidden sm:inline">•</span>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>100% de Satisfação</span>
                </div>
                <span className="hidden sm:inline">•</span>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>São Paulo e região</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problema Section */}
        <section className="py-20 bg-card-premium">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <AlertCircle className="w-12 h-12 text-destructive mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Hoje, quando alguém procura "{'"'}[seu serviço] perto de mim{'"'}", quem aparece? Você ou seu concorrente?
                </h2>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Os erros mais comuns que te deixam invisível:
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Categoria errada e dados inconsistentes (nome/endereço/telefone)",
                    "Poucas avaliações ou respostas frias",
                    "Fotos ruins/desatualizadas e perfil sem posts",
                    "Horários, serviços e links confusos",
                    "Duplicidade de fichas e penalidades silenciosas"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-destructive/10 border border-destructive/20 rounded-lg">
                  <p className="text-lg font-semibold text-center">
                    Se o cliente te encontra, mas o perfil não convence, ele liga para o concorrente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solução Section */}
        <section className="py-20 bg-gradient-to-br from-card to-card-premium">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Perfil otimizado + reputação forte + atividade constante = mais clientes do Maps
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Nós tratamos seu Google Meu Negócio como um canal de aquisição, não como uma ficha abandonada.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-10">
                {[
                  { icon: Phone, title: "Mais ligações e pedidos de rota", color: "text-primary" },
                  { icon: TrendingUp, title: "Mais visitas ao site e orçamentos", color: "text-accent" },
                  { icon: MapPin, title: "Posicionamento melhor no mapa (sem promessas milagrosas)", color: "text-secondary" },
                  { icon: Star, title: "Reputação que fecha venda antes do primeiro contato", color: "text-accent" }
                ].map((benefit, index) => (
                  <Card key={index} className="p-6 bg-card border-border hover:shadow-xl transition-all hover:scale-102">
                    <benefit.icon className={`w-10 h-10 ${benefit.color} mb-4`} />
                    <h3 className="text-lg font-semibold">{benefit.title}</h3>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <Button 
                  size="lg"
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
                >
                  Quero meu diagnóstico gratuito
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Como Funciona Section */}
        <section className="py-20 bg-card-premium">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Como funciona (plano simples)
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    step: "01",
                    title: "Diagnóstico gratuito (7–10 min)",
                    description: "Escaneamos sua ficha, comparamos com concorrentes locais e listamos os 'ganhos fáceis'.",
                    icon: Search
                  },
                  {
                    step: "02",
                    title: "Otimização completa (setup)",
                    description: "Arrumamos categorias, serviços, descrição, fotos, NAP, UTM, Q&A, links e removemos duplicidades.",
                    icon: Zap
                  },
                  {
                    step: "03",
                    title: "Gestão mensal",
                    description: "Coleta e resposta de avaliações, posts semanais, ofertas, atualização de fotos, Q&A, monitoramento e relatório.",
                    icon: BarChart
                  }
                ].map((step, index) => (
                  <Card key={index} className="p-8 bg-card border-border relative overflow-hidden hover:shadow-xl transition-all">
                    <div className="absolute top-4 right-4 text-6xl font-bold text-primary/10">
                      {step.step}
                    </div>
                    <step.icon className="w-12 h-12 text-primary mb-4 relative z-10" />
                    <h3 className="text-xl font-bold mb-3 relative z-10">{step.title}</h3>
                    <p className="text-muted-foreground relative z-10">{step.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* O que Entregamos Section */}
        <section className="py-20 bg-gradient-to-br from-card to-card-premium">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                O que entregamos (escopo claro)
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card className="p-8 bg-card border-primary/20">
                  <h3 className="text-2xl font-bold mb-6 text-primary">Setup Turbo (uma vez)</h3>
                  <ul className="space-y-3">
                    {[
                      "Auditoria técnica (GBP + citações básicas)",
                      "Correção de NAP e categorias",
                      "Descrição persuasiva",
                      "Serviços/atributos completos",
                      "Fotos e diretrizes visuais",
                      "Links com UTM",
                      "Q&A pronto (FAQ)",
                      "Padronização de mensagens (chat/ligação)",
                      "Plano de coleta de reviews"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                <Card className="p-8 bg-card border-accent/20">
                  <h3 className="text-2xl font-bold mb-6 text-accent">Gestão Mensal</h3>
                  <ul className="space-y-3">
                    {[
                      "4–8 posts/mês (ofertas, bastidores, provas)",
                      "Coleta e resposta de avaliações (script + monitoramento)",
                      "Atualização de fotos/atributos/horários sazonais",
                      "Relatório mensal com métricas (ligações, rotas, visitas ao site, CTR)",
                      "Ajustes contínuos para subir a relevância local"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>

              <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
                <div className="flex items-start gap-3 mb-4">
                  <Award className="w-8 h-8 text-primary flex-shrink-0" />
                  <h3 className="text-2xl font-bold">Bônus inclusos</h3>
                </div>
                <ul className="grid md:grid-cols-3 gap-4">
                  {[
                    "Kit 'Pedir Avaliações' (templates WhatsApp + QR)",
                    "20 respostas-modelo para elogios, críticas e objeções",
                    "Checklist de fotos que vendem (guia rápido para sua equipe)"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Resultados Section */}
        <section className="py-20 bg-card-premium">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Resultados de clientes
              </h2>

              <div className="grid md:grid-cols-3 gap-6 mb-10">
                {[
                  {
                    title: "Clínica Odontológica",
                    location: "Florianópolis",
                    result: "Aumento consistente nas ações do perfil (ligações/rotas) após 60 dias"
                  },
                  {
                    title: "Restaurante Local",
                    location: "Centro",
                    result: "Duplicidade removida e ficha recuperada; retomada de tráfego em 30 dias"
                  },
                  {
                    title: "Academia",
                    location: "Região Sul",
                    result: "Reputação elevou conversões com +47 novas avaliações em 90 dias"
                  }
                ].map((caso, index) => (
                  <Card key={index} className="p-6 bg-card border-border hover:shadow-xl transition-all">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span className="text-sm text-muted-foreground">{caso.location}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-3">{caso.title}</h3>
                    <p className="text-muted-foreground">{caso.result}</p>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <Button 
                  size="lg"
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
                >
                  Quero aparecer no topo do Maps
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Para Quem É Section */}
        <section className="py-20 bg-gradient-to-br from-card to-card-premium">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Para quem é este serviço
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Users,
                    title: "Negócios locais",
                    description: "Clínicas, restaurantes, oficinas, academias, imobiliárias, obras/serviços que dependem de ligações, rotas e visitas"
                  },
                  {
                    icon: Target,
                    title: "Canal previsível",
                    description: "Quem quer um canal rápido e previsível para atrair clientes da região de forma consistente"
                  },
                  {
                    icon: Shield,
                    title: "Reputação como ativo",
                    description: "Quem entende que reputação é um ativo valioso e precisa de manutenção profissional"
                  }
                ].map((item, index) => (
                  <Card key={index} className="p-8 bg-card border-border text-center hover:shadow-xl transition-all">
                    <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Planos e Preços Section */}
        <section className="py-20 bg-card-premium">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Planos e preços
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card className="p-8 bg-gradient-to-br from-card to-card-premium border-primary/20 hover:shadow-xl transition-all">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">Setup Turbo</h3>
                    <p className="text-muted-foreground">Pagamento único</p>
                  </div>
                  
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-primary mb-2">Sob consulta</div>
                    <p className="text-sm text-muted-foreground">Entrega em até 7 dias</p>
                  </div>

                  <div className="space-y-3 mb-8">
                    <p className="text-muted-foreground text-center">
                      Ideal para acertar tudo de primeira e destravar resultados.
                    </p>
                    <ul className="space-y-2">
                      {[
                        "Auditoria completa",
                        "Otimização total do perfil",
                        "Setup de avaliações",
                        "Entrega rápida"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    className="w-full"
                    size="lg"
                    onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
                  >
                    Solicitar orçamento
                  </Button>
                </Card>

                <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-accent/20 hover:shadow-xl transition-all relative overflow-hidden">
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold">
                    RECOMENDADO
                  </div>
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">Gestão Mensal</h3>
                    <p className="text-muted-foreground">Plano recorrente</p>
                  </div>
                  
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-accent mb-2">Sob consulta</div>
                    <p className="text-sm text-muted-foreground">Sem fidelidade • Pausa quando quiser</p>
                  </div>

                  <div className="space-y-3 mb-8">
                    <p className="text-muted-foreground text-center">
                      Para manter o perfil vivo, subindo posições e conversões.
                    </p>
                    <ul className="space-y-2">
                      {[
                        "Tudo do Setup Turbo",
                        "Posts semanais",
                        "Gestão de avaliações",
                        "Relatório mensal",
                        "Otimizações contínuas"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                    size="lg"
                    onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
                  >
                    Falar com especialista
                  </Button>
                </Card>
              </div>

              <Card className="p-6 bg-gradient-to-r from-primary/10 to-transparent border-primary/20">
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Garantia simples</h3>
                    <p className="text-muted-foreground">
                      Se, após o Setup Turbo, você achar que a entrega não valeu o investimento, devolvemos 100%. Sem letras miúdas.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-br from-card to-card-premium">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Perguntas frequentes
              </h2>

              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Quanto tempo leva para ver resultado?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Geralmente as primeiras melhorias (ligações/rotas) surgem entre 30–60 dias. Reputação sólida é composta mês a mês com trabalho consistente.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Preciso ter site?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Ajuda muito (autoridade e conversão). Se não tiver, otimizamos para ligações e rotas diretas do perfil.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Vocês respondem avaliações negativas?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Sim — com protocolo profissional: acalmar, resolver e recuperar a confiança. Transformamos críticas em oportunidades de demonstrar profissionalismo.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Vocês garantem topo do ranking?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Não fazemos "promessa de ranking". Garantimos processo, consistência e melhoria de conversão do perfil. O Google usa algoritmos complexos, mas fazemos tudo que está ao nosso alcance para melhorar seu posicionamento.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    Trabalham com anúncios?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Podemos integrar Google Ads local depois que o orgânico estiver redondo (opcional). Primeiro otimizamos a base, depois amplificamos com mídia paga se fizer sentido.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Sobre Section */}
        <section className="py-20 bg-card-premium">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-card-premium border-primary/20">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Quem faz</h2>
                </div>
                
                <p className="text-lg text-muted-foreground text-center leading-relaxed">
                  Especialista em crescimento para pequenos negócios, com foco em aquisição local de clientes através do Google Meu Negócio. Processo enxuto, execução rápida e relatório que você entende.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Final Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-card to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Pronto para dominar o Google Maps?
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Faça seu diagnóstico gratuito e descubra como colocar sua empresa no topo das buscas locais.
              </p>
              <Button 
                size="lg" 
                className="text-lg px-12"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
              >
                <Search className="mr-2 h-5 w-5" />
                Quero meu diagnóstico gratuito
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GoogleMeuNegocio;
