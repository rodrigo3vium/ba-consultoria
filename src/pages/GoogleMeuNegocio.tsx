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
  MousePointerClick,
  ExternalLink
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Accent, SAAS_BTN_PRIMARY, SAAS_BTN_GHOST, SAAS_CARD, SAAS_GRADIENT_TEXT } from "@/components/saas/ui";

// SaaS IDV v.03 — hex literais só para o recharts (que não lê classes Tailwind)
const CHART_CYAN = "#20DDEB";
const CHART_CARD = "#15151F";
const CHART_INK = "#F5F5FA";
const CHART_MUTED = "#9A9CAA";
const CHART_BORDER = "rgba(255,255,255,0.09)";

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
    <div className="min-h-screen flex flex-col bg-saas-void text-saas-body">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden pt-8">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full bg-saas-violet/20 blur-[110px]" />
            <div className="absolute -top-10 right-0 w-[520px] h-[420px] rounded-full bg-saas-cyan/15 blur-[110px]" />
          </div>

          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.10] bg-white/[0.03] px-3.5 py-1.5 mb-6 animate-fade-in">
                <MapPin className="w-3.5 h-3.5 text-saas-cyan" />
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-muted">Especialistas em Google Meu Negócio</span>
              </div>

              <h1 className="font-extrabold text-saas-ink text-[clamp(28px,4vw,48px)] leading-[1.1] tracking-tight mb-6 animate-fade-in">
                Coloque sua empresa no <Accent>topo do Google</Accent> sem gastar R$1
              </h1>

              <p className="text-saas-body text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in">
                Otimizamos seu Google Meu Negócio para transformar ele em uma máquina de geração de clientes qualificados todos os dias.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in">
                <button onClick={openWhatsApp} className={SAAS_BTN_PRIMARY}>
                  <TrendingUp className="h-4 w-4" />
                  Quero aparecer no topo
                </button>
                <button onClick={openWhatsApp} className={SAAS_BTN_GHOST}>
                  <Search className="h-4 w-4" />
                  Fazer diagnóstico gratuito
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 font-mono text-[10px] uppercase tracking-[0.14em] text-saas-faint">
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-saas-cyan" />
                  <span>+100 negócios locais atendidos</span>
                </div>
                <span className="hidden sm:inline">·</span>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-saas-cyan" />
                  <span>100% de Satisfação</span>
                </div>
                <span className="hidden sm:inline">·</span>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-saas-cyan" />
                  <span>São Paulo e região</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problema Section */}
        <section className="border-t border-white/[0.06] bg-saas-void-2 py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-flex w-12 h-12 rounded-full bg-gradient-to-br from-saas-cyan to-saas-violet items-center justify-center mb-4">
                  <AlertCircle className="w-6 h-6 text-saas-void" />
                </span>
                <h2 className="font-extrabold text-saas-ink text-[clamp(26px,3.4vw,42px)] leading-[1.12] tracking-tight mb-4">
                  Hoje, quando alguém procura "[seu serviço] perto de mim", <Accent>quem aparece?</Accent> Você ou seu concorrente?
                </h2>
              </div>

              <div className="rounded-2xl border border-white/[0.09] bg-saas-void p-8">
                <h3 className="font-extrabold text-saas-ink text-xl md:text-2xl tracking-tight mb-6 text-center">
                  95% dos negócios estão com o cadastro do Google feito incorretamente
                </h3>

                <div className="w-full mb-8 overflow-hidden rounded-xl border border-white/[0.09]">
                  <img loading="lazy"
                    src="/lovable-uploads/google-meu-negocio-comparison.png"
                    alt="Comparação entre perfil Google Meu Negócio mal configurado e bem configurado"
                    className="w-full h-auto"
                  />
                </div>

                <div className={"mt-8 p-8 " + SAAS_CARD}>
                  <h4 className="font-extrabold text-saas-ink text-2xl md:text-3xl tracking-tight mb-8 text-center">
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
                        className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.09] bg-white/[0.03] animate-fade-in"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.09] flex items-center justify-center">
                          <X className="w-5 h-5 text-saas-muted" />
                        </div>
                        <span className="text-saas-body text-lg md:text-xl">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solução Section */}
        <section className="border-t border-white/[0.06] py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-flex w-12 h-12 rounded-full bg-gradient-to-br from-saas-cyan to-saas-violet items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-saas-void" />
                </span>
                <h2 className="font-extrabold text-saas-ink text-[clamp(26px,3.4vw,42px)] leading-[1.12] tracking-tight mb-6">
                  Perfil otimizado + reputação forte + atividade constante = <Accent>mais clientes do Maps</Accent>
                </h2>
                <p className="text-saas-body text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
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
                    className={SAAS_CARD + " p-6 hover:border-white/[0.20] transition-colors"}
                  >
                    <benefit.icon className="w-10 h-10 text-saas-cyan mb-4" />
                    <h3 className="font-bold text-saas-ink text-lg">{benefit.title}</h3>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <button onClick={openWhatsApp} className={SAAS_BTN_PRIMARY}>
                  Quero meu diagnóstico gratuito
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Como Funciona Section */}
        <section className="border-t border-white/[0.06] bg-saas-void-2 py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-extrabold text-saas-ink text-[clamp(26px,3.4vw,42px)] leading-[1.12] tracking-tight text-center mb-12">
                Como funciona <Accent>(plano simples)</Accent>
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
                    className={SAAS_CARD + " p-8 relative overflow-hidden hover:border-white/[0.20] transition-colors"}
                  >
                    <div className="absolute top-4 right-4 font-extrabold text-6xl leading-none text-white/[0.05]">
                      {step.step}
                    </div>
                    <step.icon className="w-12 h-12 text-saas-cyan mb-4 relative z-10" />
                    <h3 className="font-bold text-saas-ink text-xl mb-3 relative z-10">{step.title}</h3>
                    <p className="text-saas-muted text-[15px] leading-relaxed relative z-10">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Resultados Section */}
        <section className="border-t border-white/[0.06] py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-extrabold text-saas-ink text-[clamp(26px,3.4vw,42px)] leading-[1.12] tracking-tight text-center mb-12">
                Resultados de <Accent>clientes</Accent>
              </h2>

              <Carousel className="max-w-6xl mx-auto">
                <CarouselContent>
                  {/* Card Senzano Imobiliária */}
                  <CarouselItem>
                    <div className={SAAS_CARD + " p-8 md:p-10"}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 overflow-hidden rounded-xl border border-white/[0.09]">
                          <img loading="lazy"
                            src="/lovable-uploads/senzano-logo.jpeg"
                            alt="Senzano Imobiliária"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-extrabold text-saas-ink text-xl md:text-2xl tracking-tight">Senzano Imobiliária</h3>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-saas-cyan" />
                            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-faint">Campo Grande - MS</p>
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
                            className="flex flex-col items-center text-center p-6 rounded-2xl border border-white/[0.09] bg-white/[0.02] hover:border-white/[0.20] transition-colors"
                          >
                            <div className="w-14 h-14 rounded-full bg-white/[0.04] border border-white/[0.09] flex items-center justify-center mb-4">
                              <stat.icon className="w-7 h-7 text-saas-cyan" />
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                              <TrendingUp className="w-5 h-5 text-saas-cyan" />
                              <span className={"font-extrabold text-4xl md:text-5xl leading-none " + SAAS_GRADIENT_TEXT}>{stat.value}</span>
                            </div>
                            <p className="text-saas-muted text-sm leading-relaxed">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CarouselItem>

                  {/* Card Luana Guastini */}
                  <CarouselItem>
                    <div className={SAAS_CARD + " p-8 md:p-10"}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 overflow-hidden rounded-xl border border-white/[0.09]">
                          <img loading="lazy"
                            src="/lovable-uploads/luana-guastini-logo.png"
                            alt="Luana Guastini"
                            className="w-full h-full object-contain bg-white p-2"
                          />
                        </div>
                        <div>
                          <h3 className="font-extrabold text-saas-ink text-xl md:text-2xl tracking-tight">Luana Guastini</h3>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-saas-cyan" />
                            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-faint">Santos - SP</p>
                          </div>
                        </div>
                      </div>

                      <p className="text-saas-muted mb-6 leading-relaxed">
                        A Dra. Luana estava cadastrada no GMN em uma categoria que não beneficiava ela. Apenas com um ajuste estratégico, conseguimos subir mais de 30 posições no ranking e gerar um movimento com clientes muito mais qualificados.
                      </p>

                      {/* Gráfico de Evolução */}
                      <div className="mb-6 p-6 rounded-2xl border border-white/[0.09] bg-white/[0.02]">
                        <h4 className="font-bold text-saas-ink text-lg mb-4 text-center">Evolução de Engajamentos</h4>
                        <ResponsiveContainer width="100%" height={200}>
                          <LineChart data={luanaEngagementData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                            <XAxis
                              dataKey="dia"
                              stroke={CHART_MUTED}
                              tick={{ fill: CHART_MUTED, fontFamily: 'IBM Plex Mono', fontSize: 10 }}
                              label={{ value: 'Dias', position: 'insideBottom', offset: -5, fill: CHART_MUTED }}
                            />
                            <YAxis
                              stroke={CHART_MUTED}
                              tick={{ fill: CHART_MUTED, fontFamily: 'IBM Plex Mono', fontSize: 10 }}
                              label={{ value: 'Engajamentos', angle: -90, position: 'insideLeft', fill: CHART_MUTED }}
                            />
                            <Tooltip
                              contentStyle={{
                                backgroundColor: CHART_CARD,
                                border: `1px solid ${CHART_BORDER}`,
                                borderRadius: '12px',
                                fontFamily: 'IBM Plex Mono',
                                fontSize: '11px',
                              }}
                              labelStyle={{ color: CHART_INK }}
                            />
                            <Line
                              type="monotone"
                              dataKey="engajamentos"
                              stroke={CHART_CYAN}
                              strokeWidth={2}
                              dot={{ fill: CHART_CYAN, r: 4, strokeWidth: 0 }}
                              activeDot={{ r: 6, fill: CHART_CYAN }}
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
                            className="flex flex-col items-center text-center p-6 rounded-2xl border border-white/[0.09] bg-white/[0.02] hover:border-white/[0.20] transition-colors"
                          >
                            <div className="w-14 h-14 rounded-full bg-white/[0.04] border border-white/[0.09] flex items-center justify-center mb-4">
                              <stat.icon className="w-7 h-7 text-saas-cyan" />
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                              <TrendingUp className="w-5 h-5 text-saas-cyan" />
                              <span className={"font-extrabold text-4xl md:text-5xl leading-none " + SAAS_GRADIENT_TEXT}>{stat.value}</span>
                            </div>
                            <p className="text-saas-muted text-sm leading-relaxed">{stat.label}</p>
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
        <section className="border-t border-white/[0.06] bg-saas-void-2 py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-extrabold text-saas-ink text-[clamp(26px,3.4vw,42px)] leading-[1.12] tracking-tight text-center mb-12">
                Para quem é <Accent>este serviço</Accent>
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
                    className={SAAS_CARD + " p-8 text-center hover:border-white/[0.20] transition-colors"}
                  >
                    <item.icon className="w-12 h-12 text-saas-cyan mx-auto mb-4" />
                    <h3 className="font-bold text-saas-ink text-xl mb-3">{item.title}</h3>
                    <p className="text-saas-muted text-[15px] leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="border-t border-white/[0.06] py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-extrabold text-saas-ink text-[clamp(26px,3.4vw,42px)] leading-[1.12] tracking-tight text-center mb-12">
                Perguntas <Accent>frequentes</Accent>
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
                    className={SAAS_CARD + " px-6 transition-colors duration-300"}
                  >
                    <AccordionTrigger className="text-saas-ink font-semibold text-left hover:no-underline hover:text-saas-cyan transition-colors">
                      {item.trigger}
                    </AccordionTrigger>
                    <AccordionContent className="text-saas-muted leading-relaxed">
                      {item.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Final Section */}
        <section className="border-t border-white/[0.06] bg-saas-void-2 py-20 md:py-24 relative overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[380px] rounded-full bg-saas-violet/15 blur-[110px]" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[420px] h-[340px] rounded-full bg-saas-cyan/10 blur-[110px]" />
          </div>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <h2 className="font-extrabold text-saas-ink text-[clamp(28px,3.8vw,46px)] leading-[1.08] tracking-tight mb-6">
                Pronto para dominar o <Accent>Google Maps</Accent>?
              </h2>
              <p className="text-saas-body text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                Faça seu diagnóstico gratuito e descubra como colocar sua empresa no topo das buscas locais.
              </p>
              <button onClick={openWhatsApp} className={SAAS_BTN_PRIMARY + " px-12"}>
                <Search className="h-4 w-4" />
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
