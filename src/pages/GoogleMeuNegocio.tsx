import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
  X,
  Zap,
  Users,
  Award,
  MousePointerClick,
  ExternalLink
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Strategic HUD Editorial v.02 — paleta PB
const CYAN = "#20DDEB";
const BG_MAIN = "#05090B";
const BG_CARD = "#0B1114";
const BG_ELEV = "#11171A";
const INK = "#F2EDE4";
const INK_MUTED = "#7D827D";
const BORDER = "rgba(255,255,255,0.10)";
const BORDER_CYAN = "rgba(32,221,235,0.30)";

const GoogleMeuNegocio = () => {
  const whatsappNumber = "5511979794086";
  const whatsappMessage = encodeURIComponent("Olá! Quero fazer o diagnóstico gratuito do meu Google Meu Negócio.");

  const luanaEngagementData = [
    { dia: 0, engajamentos: 31 },
    { dia: 30, engajamentos: 67 },
    { dia: 60, engajamentos: 77 }
  ];

  const openWhatsApp = () => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');

  return (
    <div className="min-h-screen flex flex-col bg-pb-void">
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=IBM+Plex+Mono:wght@300;400;500;600&family=Fraunces:ital,wght@0,400;0,600;1,400&display=swap');
      `}</style>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-pb-void pt-8">
          <div className="absolute inset-0 pointer-events-none" style={{
            background: `radial-gradient(ellipse 60% 40% at 50% 20%, rgba(32,221,235,0.05) 0%, transparent 70%)`,
          }} />

          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1 mb-6"
                style={{ border: `1px solid ${BORDER_CYAN}` }}>
                <MapPin className="w-4 h-4 text-pb-cyan" />
                <span className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan">Especialistas em Google Meu Negócio</span>
              </div>

              <h1 className="font-display uppercase text-pb-ink leading-[0.92] text-4xl md:text-6xl mb-6">
                Coloque sua empresa no topo do Google sem gastar R$1
              </h1>

              <p className="font-body text-pb-ink-soft text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
                Otimizamos seu Google Meu Negócio para transformar ele em uma máquina de geração de clientes qualificados todos os dias.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <button
                  onClick={openWhatsApp}
                  className="inline-flex items-center justify-center gap-2 font-mono text-[12px] uppercase tracking-mono-wide px-8 py-4 transition-all duration-300 text-pb-cyan"
                  style={{ border: `1px solid ${CYAN}`, background: "transparent" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = CYAN;
                    e.currentTarget.style.color = BG_MAIN;
                    e.currentTarget.style.boxShadow = `0 0 24px rgba(32,221,235,0.45)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = CYAN;
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <TrendingUp className="h-5 w-5" />
                  Quero aparecer no topo
                </button>
                <button
                  onClick={openWhatsApp}
                  className="inline-flex items-center justify-center gap-2 font-mono text-[12px] uppercase tracking-mono-wide px-8 py-4 transition-all duration-300 text-pb-ink-soft"
                  style={{ border: `1px solid ${BORDER}`, background: "transparent" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = CYAN;
                    e.currentTarget.style.color = CYAN;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = BORDER;
                    e.currentTarget.style.color = INK_MUTED;
                  }}
                >
                  <Search className="h-5 w-5" />
                  Fazer diagnóstico gratuito
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-pb-cyan" />
                  <span>+100 negócios locais atendidos</span>
                </div>
                <span className="hidden sm:inline">·</span>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-pb-cyan" />
                  <span>100% de Satisfação</span>
                </div>
                <span className="hidden sm:inline">·</span>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-pb-cyan" />
                  <span>São Paulo e região</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problema Section */}
        <section className="py-20 bg-pb-void-card" style={{ borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <AlertCircle className="w-12 h-12 text-pb-red mx-auto mb-4" />
                <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-3xl md:text-4xl mb-4">
                  Hoje, quando alguém procura "[seu serviço] perto de mim", quem aparece? Você ou seu concorrente?
                </h2>
              </div>

              <div
                className="p-8"
                style={{ backgroundColor: BG_MAIN, border: `1px solid ${BORDER}` }}
              >
                <h3 className="font-display uppercase text-pb-ink text-2xl mb-6 text-center">
                  95% dos negócios estão com o cadastro do Google feito incorretamente
                </h3>

                <div className="w-full mb-8 overflow-hidden" style={{ border: `1px solid ${BORDER}` }}>
                  <img loading="lazy"
                    src="/lovable-uploads/google-meu-negocio-comparison.png"
                    alt="Comparação entre perfil Google Meu Negócio mal configurado e bem configurado"
                    className="w-full h-auto"
                  />
                </div>

                <div className="mt-8 p-8" style={{ backgroundColor: BG_CARD, border: `1px solid ${BORDER}` }}>
                  <h4 className="font-display uppercase text-pb-ink text-2xl md:text-3xl mb-8 text-center">
                    O resultado?
                  </h4>
                  <div className="grid gap-4 max-w-2xl mx-auto">
                    {[
                      "Menos pesquisas",
                      "Menos visibilidade",
                      "Menos clientes",
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-4 p-4 animate-fade-in"
                        style={{
                          backgroundColor: BG_ELEV,
                          border: `1px solid ${BORDER}`,
                          animationDelay: `${i * 0.1}s`,
                        }}
                      >
                        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center" style={{ backgroundColor: BG_MAIN }}>
                          <X className="w-5 h-5 text-pb-red" />
                        </div>
                        <span className="font-body text-pb-ink-soft text-lg md:text-xl">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solução Section */}
        <section className="py-20 bg-pb-void">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <Target className="w-12 h-12 text-pb-cyan mx-auto mb-4" />
                <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-3xl md:text-4xl mb-6">
                  Perfil otimizado + reputação forte + atividade constante = mais clientes do Maps
                </h2>
                <p className="font-body text-pb-ink-soft text-xl max-w-3xl mx-auto">
                  Nós tratamos seu Google Meu Negócio como um canal de aquisição, não como uma ficha abandonada.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-10">
                {[
                  { icon: Phone, title: "Mais ligações e pedidos de rota" },
                  { icon: TrendingUp, title: "Mais visitas ao site e orçamentos" },
                  { icon: MapPin, title: "Posicionamento melhor no mapa (sem promessas milagrosas)" },
                  { icon: Star, title: "Reputação que fecha venda antes do primeiro contato" }
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="p-6 transition-all duration-300"
                    style={{
                      backgroundColor: BG_CARD,
                      border: `1px solid ${BORDER}`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = BORDER_CYAN;
                      e.currentTarget.style.boxShadow = `0 0 24px rgba(32,221,235,0.08)`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = BORDER;
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <benefit.icon className="w-10 h-10 text-pb-cyan mb-4" />
                    <h3 className="font-display uppercase text-pb-ink text-lg">{benefit.title}</h3>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <button
                  onClick={openWhatsApp}
                  className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-mono-wide px-8 py-4 transition-all duration-300 text-pb-cyan"
                  style={{ border: `1px solid ${CYAN}`, background: "transparent" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = CYAN;
                    e.currentTarget.style.color = BG_MAIN;
                    e.currentTarget.style.boxShadow = `0 0 24px rgba(32,221,235,0.45)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = CYAN;
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  Quero meu diagnóstico gratuito
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Como Funciona Section */}
        <section className="py-20 bg-pb-void-card" style={{ borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-3xl md:text-4xl text-center mb-12">
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
                  <div
                    key={index}
                    className="p-8 relative overflow-hidden transition-all duration-300"
                    style={{
                      backgroundColor: BG_ELEV,
                      border: `1px solid ${BORDER}`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = BORDER_CYAN;
                      e.currentTarget.style.boxShadow = `0 0 24px rgba(32,221,235,0.08)`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = BORDER;
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div className="absolute top-4 right-4 font-display text-6xl leading-none" style={{ color: "rgba(32,221,235,0.08)" }}>
                      {step.step}
                    </div>
                    <step.icon className="w-12 h-12 text-pb-cyan mb-4 relative z-10" />
                    <h3 className="font-display uppercase text-pb-ink text-xl mb-3 relative z-10">{step.title}</h3>
                    <p className="font-body text-pb-ink-muted relative z-10">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Resultados Section */}
        <section className="py-20 bg-pb-void">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-3xl md:text-4xl text-center mb-12">
                Resultados de clientes
              </h2>

              <Carousel className="max-w-6xl mx-auto">
                <CarouselContent>
                  {/* Card Senzano Imobiliária */}
                  <CarouselItem>
                    <div
                      className="p-8 md:p-10 transition-all duration-300"
                      style={{ backgroundColor: BG_CARD, border: `1px solid ${BORDER}` }}
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 overflow-hidden" style={{ border: `1px solid ${BORDER}` }}>
                          <img loading="lazy"
                            src="/lovable-uploads/senzano-logo.jpeg"
                            alt="Senzano Imobiliária"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-display uppercase text-pb-ink text-2xl">Senzano Imobiliária</h3>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-pb-cyan" />
                            <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted">Campo Grande - MS</p>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {[
                          { icon: Phone, label: "O número de ligações", value: "171%" },
                          { icon: Search, label: "O número de pesquisas", value: "138%" },
                          { icon: MapPin, label: "O número de rotas", value: "188%" },
                        ].map((stat, i) => (
                          <div
                            key={i}
                            className="flex flex-col items-center text-center p-6 transition-all duration-300"
                            style={{ backgroundColor: BG_ELEV, border: `1px solid ${BORDER}` }}
                            onMouseEnter={(e) => { e.currentTarget.style.borderColor = BORDER_CYAN; }}
                            onMouseLeave={(e) => { e.currentTarget.style.borderColor = BORDER; }}
                          >
                            <div className="w-16 h-16 flex items-center justify-center mb-4" style={{ backgroundColor: BG_MAIN }}>
                              <stat.icon className="w-8 h-8 text-pb-cyan" />
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                              <TrendingUp className="w-5 h-5 text-pb-cyan" />
                              <span className="font-display text-pb-cyan text-5xl">{stat.value}</span>
                            </div>
                            <p className="font-body text-pb-ink-muted">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CarouselItem>

                  {/* Card Luana Guastini */}
                  <CarouselItem>
                    <div
                      className="p-8 md:p-10 transition-all duration-300"
                      style={{ backgroundColor: BG_CARD, border: `1px solid ${BORDER}` }}
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 overflow-hidden" style={{ border: `1px solid ${BORDER}` }}>
                          <img loading="lazy"
                            src="/lovable-uploads/luana-guastini-logo.png"
                            alt="Luana Guastini"
                            className="w-full h-full object-contain bg-white p-2"
                          />
                        </div>
                        <div>
                          <h3 className="font-display uppercase text-pb-ink text-2xl">Luana Guastini</h3>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-pb-cyan" />
                            <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted">Santos - SP</p>
                          </div>
                        </div>
                      </div>

                      <p className="font-body text-pb-ink-muted mb-6">
                        A Dra. Luana estava cadastrada no GMN em uma categoria que não beneficiava ela. Apenas com um ajuste estratégico, conseguimos subir mais de 30 posições no ranking e gerar um movimento com clientes muito mais qualificados.
                      </p>

                      {/* Gráfico de Evolução */}
                      <div className="mb-6 p-6" style={{ backgroundColor: BG_ELEV, border: `1px solid ${BORDER}` }}>
                        <h4 className="font-display uppercase text-pb-ink text-lg mb-4 text-center">Evolução de Engajamentos</h4>
                        <ResponsiveContainer width="100%" height={200}>
                          <LineChart data={luanaEngagementData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                            <XAxis
                              dataKey="dia"
                              stroke={INK_MUTED}
                              tick={{ fill: INK_MUTED, fontFamily: 'IBM Plex Mono', fontSize: 10 }}
                              label={{ value: 'Dias', position: 'insideBottom', offset: -5, fill: INK_MUTED }}
                            />
                            <YAxis
                              stroke={INK_MUTED}
                              tick={{ fill: INK_MUTED, fontFamily: 'IBM Plex Mono', fontSize: 10 }}
                              label={{ value: 'Engajamentos', angle: -90, position: 'insideLeft', fill: INK_MUTED }}
                            />
                            <Tooltip
                              contentStyle={{
                                backgroundColor: BG_CARD,
                                border: `1px solid ${BORDER}`,
                                borderRadius: '0',
                                fontFamily: 'IBM Plex Mono',
                                fontSize: '11px',
                              }}
                              labelStyle={{ color: INK }}
                            />
                            <Line
                              type="monotone"
                              dataKey="engajamentos"
                              stroke={CYAN}
                              strokeWidth={2}
                              dot={{ fill: CYAN, r: 4, strokeWidth: 0 }}
                              activeDot={{ r: 6, fill: CYAN }}
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {[
                          { icon: MousePointerClick, label: "Interações em 60 dias", value: "148%" },
                          { icon: Phone, label: "Chamadas em 120 dias", value: "400%" },
                          { icon: ExternalLink, label: "Cliques no site", value: "57%" },
                        ].map((stat, i) => (
                          <div
                            key={i}
                            className="flex flex-col items-center text-center p-6 transition-all duration-300"
                            style={{ backgroundColor: BG_ELEV, border: `1px solid ${BORDER}` }}
                            onMouseEnter={(e) => { e.currentTarget.style.borderColor = BORDER_CYAN; }}
                            onMouseLeave={(e) => { e.currentTarget.style.borderColor = BORDER; }}
                          >
                            <div className="w-16 h-16 flex items-center justify-center mb-4" style={{ backgroundColor: BG_MAIN }}>
                              <stat.icon className="w-8 h-8 text-pb-cyan" />
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                              <TrendingUp className="w-5 h-5 text-pb-cyan" />
                              <span className="font-display text-pb-cyan text-5xl">{stat.value}</span>
                            </div>
                            <p className="font-body text-pb-ink-muted">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
              </Carousel>
            </div>
          </div>
        </section>

        {/* Para Quem É Section */}
        <section className="py-20 bg-pb-void-card" style={{ borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-3xl md:text-4xl text-center mb-12">
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
                  <div
                    key={index}
                    className="p-8 text-center transition-all duration-300"
                    style={{
                      backgroundColor: BG_ELEV,
                      border: `1px solid ${BORDER}`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = BORDER_CYAN;
                      e.currentTarget.style.boxShadow = `0 0 24px rgba(32,221,235,0.08)`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = BORDER;
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <item.icon className="w-12 h-12 text-pb-cyan mx-auto mb-4" />
                    <h3 className="font-display uppercase text-pb-ink text-xl mb-3">{item.title}</h3>
                    <p className="font-body text-pb-ink-muted">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-pb-void">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-3xl md:text-4xl text-center mb-12">
                Perguntas frequentes
              </h2>

              <Accordion type="single" collapsible className="space-y-4">
                {[
                  {
                    value: "item-1",
                    trigger: "Quanto tempo leva para ver resultado?",
                    content: "Geralmente as primeiras melhorias (ligações/rotas) surgem entre 30–60 dias. Reputação sólida é composta mês a mês com trabalho consistente."
                  },
                  {
                    value: "item-2",
                    trigger: "Preciso ter site?",
                    content: "Ajuda muito (autoridade e conversão). Se não tiver, otimizamos para ligações e rotas diretas do perfil."
                  },
                  {
                    value: "item-3",
                    trigger: "Vocês respondem avaliações negativas?",
                    content: "Sim — com protocolo profissional: acalmar, resolver e recuperar a confiança. Transformamos críticas em oportunidades de demonstrar profissionalismo."
                  },
                  {
                    value: "item-4",
                    trigger: "Vocês garantem topo do ranking?",
                    content: "Não fazemos \"promessa de ranking\". Garantimos processo, consistência e melhoria de conversão do perfil. O Google usa algoritmos complexos, mas fazemos tudo que está ao nosso alcance para melhorar seu posicionamento."
                  },
                  {
                    value: "item-5",
                    trigger: "Trabalham com anúncios?",
                    content: "Podemos integrar Google Ads local depois que o orgânico estiver redondo (opcional). Primeiro otimizamos a base, depois amplificamos com mídia paga se fizer sentido."
                  },
                ].map((item) => (
                  <AccordionItem
                    key={item.value}
                    value={item.value}
                    className="px-6 transition-colors duration-300"
                    style={{ backgroundColor: BG_CARD, border: `1px solid ${BORDER}` }}
                  >
                    <AccordionTrigger className="font-body text-pb-ink hover:no-underline hover:text-pb-cyan transition-colors">
                      {item.trigger}
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-pb-ink-muted">
                      {item.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Final Section */}
        <section className="py-20 bg-pb-void-card relative overflow-hidden" style={{ borderTop: `1px solid ${BORDER}` }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            background: `radial-gradient(ellipse 50% 50% at 50% 50%, rgba(32,221,235,0.04) 0%, transparent 70%)`,
          }} />
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-3xl md:text-5xl mb-6">
                Pronto para dominar o Google Maps?
              </h2>
              <p className="font-body text-pb-ink-soft text-xl mb-10 max-w-2xl mx-auto">
                Faça seu diagnóstico gratuito e descubra como colocar sua empresa no topo das buscas locais.
              </p>
              <button
                onClick={openWhatsApp}
                className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-mono-wide px-12 py-4 transition-all duration-300 text-pb-cyan"
                style={{ border: `1px solid ${CYAN}`, background: "transparent" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = CYAN;
                  e.currentTarget.style.color = BG_MAIN;
                  e.currentTarget.style.boxShadow = `0 0 24px rgba(32,221,235,0.45)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = CYAN;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <Search className="h-5 w-5" />
                Quero meu diagnóstico gratuito
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GoogleMeuNegocio;
