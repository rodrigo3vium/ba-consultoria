import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Brain, 
  Target, 
  TrendingUp, 
  Users, 
  Calendar, 
  Award, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  DollarSign,
  Building2,
  Zap,
  BarChart,
  Shield,
  Palette,
  MessageSquare,
  Database,
  Bot,
  Workflow
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const strategicModules = [
  {
    code: "E1",
    title: "Alavancas de Valor",
    hours: 4,
    focus: "Selecionar até três processos de maior impacto financeiro para IA",
    icon: Target,
    deliverables: ["Inventário completo de processos", "Top-3 oportunidades priorizadas"]
  },
  {
    code: "E2", 
    title: "Projeto-Piloto 90 dias",
    hours: 5,
    focus: "Converter cada alavanca em projeto-piloto enxuto",
    icon: Calendar,
    deliverables: ["Canvas 90-dias aprovado", "Pitch-deck interno", "Planilha budget/payback"]
  },
  {
    code: "E5",
    title: "Gestão de Mudança & Adoção",
    hours: 5,
    focus: "Fazer a equipe usar e manter a IA nas rotinas",
    icon: Users,
    deliverables: ["Road-map de adoção 6 semanas", "Treinamento 4h pronto", "Leaderboard Slack"]
  },
  {
    code: "E6",
    title: "Painel Executivo & Cadência",
    hours: 4,
    focus: "Dashboard vivo e reuniões de 30 min quinzenais",
    icon: BarChart,
    deliverables: ["Painel IA-PME v1.0", "Agenda de reunião + template de ata"]
  },
  {
    code: "E7",
    title: "Road-map 12 Meses (3 Ondas)",
    hours: 5,
    focus: "Escalar piloto para eficiência, crescimento e inovação",
    icon: TrendingUp,
    deliverables: ["Mapa 12 meses", "Backlog priorizado", "Term sheet Go/No-Go"]
  },
  {
    code: "E8",
    title: "Formação de Time IA",
    hours: 5,
    focus: "Definir papéis, contratação, terceirização e upskilling",
    icon: Building2,
    deliverables: ["Mapa de funções", "Job descriptions", "Plano de upskilling"]
  },
  {
    code: "E9",
    title: "Parcerias & Vendors",
    hours: 5,
    focus: "Escolher, negociar e monitorar fornecedores de IA",
    icon: MessageSquare,
    deliverables: ["Shortlist top-5 vendors", "RFP enviada", "Minuta de contrato"]
  }
];

const operationalModules = [
  {
    code: "O1",
    title: "Fundamentos Essenciais",
    hours: 6,
    focus: "Conceitos básicos, sandbox e primeiros prompts",
    icon: Brain,
    deliverables: ["Cheat sheet IA", "Sandbox corporativo configurado"]
  },
  {
    code: "O2",
    title: "Prompt Engineering 80/20",
    hours: 6,
    focus: "Criar prompts de alto impacto com RISCIS",
    icon: Zap,
    deliverables: ["Prompt playbook (50+)", "Planilha iterativa de score"]
  },
  {
    code: "O3",
    title: "Automação No-Code",
    hours: 7,
    focus: "Workflows Make/Zapier integrando IA a apps e planilhas",
    icon: Workflow,
    deliverables: ["Workflow Lead→Proposta em produção", "Blueprint de automação"]
  },
  {
    code: "O4",
    title: "Casos de Uso Core",
    hours: 7,
    focus: "Implementar IA em Marketing/Vendas, Atendimento, Back-office e Operações",
    icon: Bot,
    deliverables: ["4 fluxos core rodando", "Backlog ICE 10 próximos casos"]
  },
  {
    code: "O5",
    title: "Integrações & Dados Leves",
    hours: 6,
    focus: "APIs, webhooks, Supabase, qualidade de dado 5×5",
    icon: Database,
    deliverables: ["Pipeline Sheet→DB→BI", "Checklist de qualidade"]
  },
  {
    code: "O6",
    title: "Medição & Iteração",
    hours: 5,
    focus: "Ciclo PDCA 15-15-15 e log de experimentos",
    icon: BarChart,
    deliverables: ["Dashboard PDCA ativo", "Log de experimentos"]
  },
  {
    code: "O7",
    title: "Segurança & Compliance dia-a-dia",
    hours: 5,
    focus: "Cofre de segredos, anonimização, alertas de gasto",
    icon: Shield,
    deliverables: ["Tokens migrados ao vault", "Playbook de incidentes"]
  },
  {
    code: "O8",
    title: "IA Generativa Criativa",
    hours: 6,
    focus: "Produzir criativos (imagem, vídeo, áudio, código) e manter consistência visual",
    icon: Palette,
    deliverables: ["Pacote de criativos 1-semana", "Guia de estilo IA"]
  }
];

const tools = [
  { category: "LLMs", items: ["OpenAI GPT-4o", "Google Gemini Pro", "Anthropic Claude"], icon: Brain },
  { category: "Automação", items: ["Make.com", "Zapier", "Pipedream"], icon: Workflow },
  { category: "Dados", items: ["Google Sheets", "Supabase", "Looker Studio"], icon: Database },
  { category: "Criativos", items: ["DALL·E", "Midjourney", "Runway", "ElevenLabs"], icon: Palette }
];

const timeline = [
  { week: 1, focus: "Kick-off + Alavancas de Valor + Fundamentos", modules: ["E1", "O1"] },
  { week: 2, focus: "Prompt Engineering Avançado", modules: ["O2"] },
  { week: 3, focus: "Projeto-Piloto 90 dias", modules: ["E2"] },
  { week: 4, focus: "Automação No-Code", modules: ["O3"] },
  { week: 5, focus: "Casos de Uso Core", modules: ["O4"] },
  { week: 6, focus: "Dados + Primeiro PDCA", modules: ["O5", "O6"] },
  { week: 7, focus: "Gestão de Mudança + Retro", modules: ["E5", "O6"] },
  { week: 8, focus: "Painel Executivo + Segurança", modules: ["E6", "O7"] },
  { week: 9, focus: "Road-map 12 Meses", modules: ["E7"] },
  { week: 10, focus: "Time IA + Criativos", modules: ["E8", "O8"] },
  { week: 11, focus: "Vendors + Revisão KPIs", modules: ["E9"] },
  { week: 12, focus: "Demo-Day & Planejamento", modules: ["Demo-Day"] }
];

const IAParaNegocios = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-40 h-40 bg-ba-orange rounded-full blur-xl"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-ba-blue-light rounded-full blur-xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <Badge variant="outline" className="mb-4 border-ba-orange text-ba-orange">
              Programa Premium • 12 Semanas
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6 leading-tight">
              IA para{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Negócios
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 font-inter leading-relaxed">
              Lucro & Eficiência para PMEs
            </p>
            <div className="w-16 h-1 bg-ba-orange mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto font-inter leading-relaxed mb-8">
              Programa prático de 12 semanas para implementar IA que aumenta lucro e produtividade em ≤ 90 dias, 
              sem depender de equipe técnica extensa.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-ba-orange" />
                <span>81 horas + mentoria</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={16} className="text-ba-orange" />
                <span>2 trilhos paralelos</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={16} className="text-ba-orange" />
                <span>Certificação incluída</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="accent" 
                size="lg" 
                className="text-lg px-8 py-4 font-inter"
                onClick={() => window.open('http://wa.me/5511999718595', '_blank')}
              >
                Quero me Inscrever
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                variant="outline-glow" 
                size="lg" 
                className="text-lg px-8 py-4 font-inter"
                onClick={() => window.open('http://wa.me/5511999718595', '_blank')}
              >
                Falar com Consultor
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Para Quem É Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              Para Quem é Este <span className="bg-gradient-primary bg-clip-text text-transparent">Programa</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
              Desenvolvido especificamente para PMEs que querem implementar IA de forma estratégica
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-card-premium/80 backdrop-blur-sm border border-card-premium-border">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-card-premium-border rounded-full">
                    <Building2 size={24} className="text-ba-orange" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-poppins">Proprietários de PMEs</CardTitle>
                    <CardDescription>Faturamento anual R$ 1-5 milhões</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Decisões estratégicas sobre IA",
                    "ROI e viabilidade de projetos",
                    "Gestão de mudança organizacional",
                    "Planejamento de escala (3 ondas)",
                    "Formação de time interno"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle size={16} className="text-ba-orange mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground font-inter">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card-premium/80 backdrop-blur-sm border border-card-premium-border">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-card-premium-border rounded-full">
                    <Users size={24} className="text-ba-orange" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-poppins">Equipes Operacionais</CardTitle>
                    <CardDescription>Marketing, Vendas, Atendimento, Financeiro</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Automação prática de processos",
                    "Prompt engineering avançado",
                    "Workflows no-code (Make/Zapier)",
                    "Implementação de casos de uso",
                    "Monitoramento e iteração"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle size={16} className="text-ba-orange mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground font-inter">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trilhos Section */}
      <section className="py-20 bg-card-premium/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              Dois <span className="bg-gradient-primary bg-clip-text text-transparent">Trilhos</span> Paralelos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
              Estratégico para proprietários e Operacional para equipes, correndo simultaneamente
            </p>
          </div>

          {/* Trilho Estratégico */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <Badge variant="default" className="bg-ba-orange text-white px-4 py-2 text-lg">
                Trilho Estratégico • Proprietários
              </Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {strategicModules.map((module, index) => {
                const IconComponent = module.icon;
                return (
                  <Card key={index} className="bg-card-premium/80 backdrop-blur-sm border border-card-premium-border hover:bg-card-premium-hover transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-3 bg-card-premium-border rounded-full">
                          <IconComponent size={24} className="text-ba-orange" />
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {module.hours}h
                        </Badge>
                      </div>
                      <CardTitle className="text-lg font-poppins mb-2">
                        {module.code}: {module.title}
                      </CardTitle>
                      <CardDescription className="text-sm font-inter">
                        {module.focus}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-foreground">Entregas:</h4>
                        {module.deliverables.map((deliverable, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <CheckCircle size={12} className="text-ba-orange mt-0.5 flex-shrink-0" />
                            <span className="text-xs text-muted-foreground">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <Separator className="my-16" />

          {/* Trilho Operacional */}
          <div>
            <div className="flex items-center justify-center mb-8">
              <Badge variant="default" className="bg-ba-blue-light text-white px-4 py-2 text-lg">
                Trilho Operacional • Equipes
              </Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {operationalModules.map((module, index) => {
                const IconComponent = module.icon;
                return (
                  <Card key={index} className="bg-card-premium/80 backdrop-blur-sm border border-card-premium-border hover:bg-card-premium-hover transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-3 bg-card-premium-border rounded-full">
                          <IconComponent size={24} className="text-ba-blue-light" />
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {module.hours}h
                        </Badge>
                      </div>
                      <CardTitle className="text-lg font-poppins mb-2">
                        {module.code}: {module.title}
                      </CardTitle>
                      <CardDescription className="text-sm font-inter">
                        {module.focus}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-foreground">Entregas:</h4>
                        {module.deliverables.map((deliverable, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <CheckCircle size={12} className="text-ba-blue-light mt-0.5 flex-shrink-0" />
                            <span className="text-xs text-muted-foreground">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              Cronograma das <span className="bg-gradient-primary bg-clip-text text-transparent">12 Semanas</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
              Uma jornada estruturada do planejamento ao Demo-Day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {timeline.map((week, index) => (
              <Card key={index} className="bg-card-premium/80 backdrop-blur-sm border border-card-premium-border">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <Badge variant="outline" className="bg-ba-orange text-white border-ba-orange">
                      Semana {week.week}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-poppins">{week.focus}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {week.modules.map((moduleCode, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {moduleCode}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ferramentas Section */}
      <section className="py-20 bg-card-premium/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Ferramentas</span> e Tecnologias
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
              Stack completo para implementação de IA nos negócios
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((toolCategory, index) => {
              const IconComponent = toolCategory.icon;
              return (
                <Card key={index} className="bg-card-premium/80 backdrop-blur-sm border border-card-premium-border text-center">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-card-premium-border rounded-full">
                        <IconComponent size={28} className="text-ba-orange" />
                      </div>
                    </div>
                    <CardTitle className="text-xl font-poppins">{toolCategory.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {toolCategory.items.map((tool, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground font-inter">
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Resultados Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
                <span className="bg-gradient-primary bg-clip-text text-transparent">Resultados</span> Garantidos
              </h2>
              <p className="text-xl text-muted-foreground font-inter">
                O que você terá ao final das 12 semanas
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Award,
                  title: "Demo-Day & Certificação",
                  description: "Apresentação do ROI real alcançado e certificado 'Applied AI for SMBs' (180h totais)"
                },
                {
                  icon: Workflow,
                  title: "Automações em Produção",
                  description: "Pelo menos 3 fluxos de IA funcionando e gerando valor mensurável"
                },
                {
                  icon: BarChart,
                  title: "Dashboard Executivo",
                  description: "Painel vivo com KPIs de IA e reuniões quinzenais estruturadas"
                },
                {
                  icon: TrendingUp,
                  title: "Road-map 12 Meses",
                  description: "Planejamento de 3 ondas de escala com backlog ICE priorizado"
                },
                {
                  icon: Users,
                  title: "Time Capacitado",
                  description: "Equipe treinada em IA aplicada com trilhas de desenvolvimento"
                },
                {
                  icon: Shield,
                  title: "Segurança & Compliance",
                  description: "Políticas LGPD, cofres de segredos e procedimentos de incidente"
                }
              ].map((result, index) => (
                <Card key={index} className="bg-card-premium/80 backdrop-blur-sm border border-card-premium-border">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-card-premium-border rounded-full flex-shrink-0">
                        <result.icon size={24} className="text-ba-orange" />
                      </div>
                      <div>
                        <h3 className="font-semibold font-poppins mb-2 text-lg text-foreground">
                          {result.title}
                        </h3>
                        <p className="text-muted-foreground font-inter leading-relaxed">
                          {result.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 border-ba-orange text-ba-orange">
              Transforme Seu Negócio em 12 Semanas
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-8">
              Pronto para Implementar IA que Gera <span className="bg-gradient-primary bg-clip-text text-transparent">ROI Real</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 font-inter leading-relaxed">
              Saia do programa com automações funcionando, equipe capacitada e road-map de 12 meses para escalar. 
              Certificação oficial inclusa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                variant="accent" 
                size="lg" 
                className="text-lg px-8 py-4 font-inter"
                onClick={() => window.open('http://wa.me/5511999718595', '_blank')}
              >
                Quero me Inscrever Agora
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                variant="outline-glow" 
                size="lg" 
                className="text-lg px-8 py-4 font-inter"
                onClick={() => window.open('http://wa.me/5511999718595', '_blank')}
              >
                Falar com Especialista
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-ba-orange" />
                <span>81h aulas + mentoria</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={16} className="text-ba-orange" />
                <span>Certificação oficial</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign size={16} className="text-ba-orange" />
                <span>ROI em 90 dias</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IAParaNegocios;