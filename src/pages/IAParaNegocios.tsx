import React, { useState, useEffect } from 'react';
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
  Workflow,
  Star,
  Timer,
  Gift,
  Heart,
  PiggyBank,
  Lightbulb,
  Rocket
} from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import LeadFormIANegocios from '@/components/LeadFormIANegocios';
import { tracker } from '@/lib/tracking';

const IAParaNegocios = () => {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  // Set body background to black and remove header padding for this page
  useEffect(() => {
    document.body.style.backgroundColor = '#000000';
    document.body.style.paddingTop = '0';
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.paddingTop = '';
    };
  }, []);

  const handleWhatsAppContact = (ctaLocation: string) => {
    tracker.track('cta_click', {
      cta_type: 'whatsapp',
      cta_location: ctaLocation,
      product: 'ia-para-negocios'
    });
    window.open('https://wa.me/5511999718595', '_blank');
  };

  const handleLeadSuccess = () => {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre o programa IA para Negócios.");
    window.open(`https://wa.me/5511999718595?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-black">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black">
        {/* Top Bar */}
        <div className="bg-gradient-primary py-3 text-center relative z-10">
          <p className="text-background font-semibold text-sm md:text-base font-inter uppercase tracking-wide">
            Exclusivo para PMEs que faturam entre R$ 1 e 5 milhões por ano
          </p>
        </div>

        {/* Hero Content */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-ba-blue-dark/5 to-transparent"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-ba-blue-light/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-ba-orange/10 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div className="space-y-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight bg-gradient-to-r from-ba-blue-light via-white to-ba-orange bg-clip-text text-transparent">
                  Se torne o líder do seu mercado{' '}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    utilizando soluções de Inteligência Artificial
                  </span>
                  {' '}para aumentar lucro e ganhar produtividade no seu negócio.
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground font-inter leading-relaxed">
                  O IA para negócios é um ecossistema completo, que auxilia você e sua equipe 
                  na implementação de soluções de IA na sua empresa.
                </p>

                <Button 
                  size="lg" 
                  className="text-lg px-10 py-6 font-inter bg-gradient-primary hover:opacity-90 text-background font-semibold uppercase tracking-wide shadow-glow hover:shadow-glow-intense transition-all duration-300 rounded-full"
                  onClick={() => handleWhatsAppContact('hero_top')}
                >
                  Quero mais informações
                </Button>

                {/* Trust Indicators */}
                <div className="flex flex-col space-y-3 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="w-10 h-10 rounded-full bg-gradient-primary border-2 border-black flex items-center justify-center">
                        <Building2 size={20} className="text-background" />
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-ba-blue-dark to-ba-blue-light border-2 border-black flex items-center justify-center">
                        <TrendingUp size={20} className="text-white" />
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-ba-orange to-ba-orange/80 border-2 border-black flex items-center justify-center">
                        <Award size={20} className="text-background" />
                      </div>
                    </div>
                    <p className="text-muted-foreground font-inter">
                      <span className="text-ba-blue-light font-semibold">+ de 100 empresas</span> já transformaram seus negócios com IA
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Visual Cards */}
              <div className="relative h-[400px] lg:h-[500px]">
                {/* Background gradient glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-ba-blue-light/10 via-transparent to-ba-orange/10 rounded-3xl blur-2xl"></div>
                
                {/* Floating Cards */}
                <div className="relative h-full flex items-center justify-center">
                  {/* Card 1 - Top Right */}
                  <Card className="absolute top-8 right-4 bg-black/80 border-ba-blue-light/20 backdrop-blur-sm shadow-glow hover:border-ba-blue-light/60 transition-all duration-300 animate-float">
                    <CardContent className="p-6">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent font-poppins">+12</span>
                        <div className="text-left">
                          <p className="text-sm text-muted-foreground font-inter">Anos de</p>
                          <p className="text-sm text-muted-foreground font-inter">mercado</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Card 2 - Middle Left */}
                  <Card className="absolute top-32 left-0 bg-black/80 border-ba-blue-light/20 backdrop-blur-sm shadow-glow hover:border-ba-blue-light/60 transition-all duration-300 animate-float" style={{ animationDelay: '0.5s' }}>
                    <CardContent className="p-6">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent font-poppins">+100</span>
                        <div className="text-left">
                          <p className="text-sm text-muted-foreground font-inter">Empresas</p>
                          <p className="text-sm text-muted-foreground font-inter">atendidas</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Card 3 - Bottom Right */}
                  <Card className="absolute bottom-8 right-8 bg-black/80 border-ba-blue-light/20 backdrop-blur-sm shadow-glow hover:border-ba-blue-light/60 transition-all duration-300 animate-float" style={{ animationDelay: '1s' }}>
                    <CardContent className="p-6">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent font-poppins">+40%</span>
                        <div className="text-left">
                          <p className="text-sm text-muted-foreground font-inter">Aumento médio</p>
                          <p className="text-sm text-muted-foreground font-inter">de produtividade</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre a Mentoria */}
      <section className="py-16 bg-black relative">
        <div className="absolute inset-0 bg-gradient-to-b from-ba-blue-dark/5 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-inter">
              O IA para negócios é um ecossistema completo, que auxilia você e sua equipe 
              na implementação de soluções de IA na sua empresa. Colhendo resultados concretos, 
              em 90 dias, mesmo que vocês estejam saindo do zero e sem precisar fazer novas contratações. 
              Temos trilhas dedicadas para quem está no Estratégico e no Operacional do negócio.
            </p>
          </div>
        </div>
      </section>

      {/* Isso é pra você se... */}
      <section className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-gradient-to-t from-ba-blue-dark/5 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4 bg-gradient-to-r from-ba-blue-light via-white to-ba-orange bg-clip-text text-transparent">
              Isso é pra você <span className="bg-gradient-primary bg-clip-text text-transparent">se...</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Building2,
                title: "Você é dono ou sócio de uma Empresa que fatura entre R$ 1–5 mi/ano",
                description: "e precisa ganhar eficiência sem inflar a folha de pagamento."
              },
              {
                icon: Clock,
                title: "Suas tarefas (ou da equipe) estão consumindo horas em planilhas, e-mails e follow-ups manuais",
                description: "mas você ainda não sabe automatizar com segurança."
              },
              {
                icon: DollarSign,
                title: "Quer ver ROI palpável em até 90 dias",
                description: "em vez de conteúdo que nunca sai do papel."
              },
              {
                icon: Rocket,
                title: "Busca vantagem competitiva real",
                description: "reduzir custos operacionais, acelerar vendas ou melhorar atendimento antes que o concorrente o faça."
              },
              {
                icon: Users,
                title: "Não tem equipe técnica dedicada",
                description: "(ou não pretende contratar desenvolvedores agora) e precisa de soluções no-code que o próprio time possa tocar."
              },
              {
                icon: Heart,
                title: "Valoriza acompanhamento de perto",
                description: "com trilha estratégica para decisões de direção e trilha operacional para execução diária."
              }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="bg-black/80 backdrop-blur-sm border border-ba-blue-light/20 hover:bg-black/90 hover:border-ba-blue-light/60 transition-all duration-300 shadow-glow">
                  <CardHeader>
                    <div className="p-3 bg-gradient-primary rounded-full w-fit mb-4">
                      <IconComponent size={24} className="text-background" />
                    </div>
                    <CardTitle className="text-lg font-poppins mb-2 text-foreground">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="font-inter text-muted-foreground">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* A História */}
      <section className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-gradient-to-b from-ba-blue-dark/5 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-8 text-center bg-gradient-to-r from-ba-blue-light via-white to-ba-orange bg-clip-text text-transparent">
              A História — <span className="bg-gradient-primary bg-clip-text text-transparent">da Dor ao Desejo</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground font-inter leading-relaxed">
              <p>
                Imagine chegar ao fim do mês e perceber que <strong>40% do seu tempo (e da sua equipe) foi gasto em tarefas que não geram receita</strong>: 
                copiar dados, enviar lembretes, montar relatórios, responder perguntas repetidas. Enquanto isso, grandes players usam IA para reduzir custos, 
                criar campanhas em minutos e atender clientes 24/7 — <strong>roubando mercado num piscar de olhos</strong>.
              </p>
              
              <p>
                Eu estava exatamente aí. Minha empresa faturava razoavelmente bem, mas cada ponto de crescimento custava mais horas, 
                mais gente, mais estresse. <strong>O lucro encolhia, a concorrência escalava</strong> e eu sentia que ficaria preso nesse ciclo para sempre.
              </p>
              
              <p>
                Foi quando decidi testar pequenas automações de IA — mesmo sem saber programar.
              </p>
              
              <p className="font-semibold text-foreground">Em três meses:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <Card className="bg-black/80 backdrop-blur-sm border border-ba-blue-light/20 text-center hover:border-ba-blue-light/60 transition-all shadow-glow">
                  <CardContent className="pt-6">
                    <div className="text-sm text-muted-foreground"><strong className="text-ba-blue-light">Cortei 60% do tempo de proposta</strong> usando geração automática de PDFs via ChatGPT e Make.</div>
                  </CardContent>
                </Card>
                <Card className="bg-black/80 backdrop-blur-sm border border-ba-blue-light/20 text-center hover:border-ba-blue-light/60 transition-all shadow-glow">
                  <CardContent className="pt-6">
                    <div className="text-sm text-muted-foreground"><strong className="text-ba-blue-light">Aumentei em 27% o ticket médio</strong> com um bot de upsell que trabalha enquanto a equipe dorme.</div>
                  </CardContent>
                </Card>
                <Card className="bg-black/80 backdrop-blur-sm border border-ba-blue-light/20 text-center hover:border-ba-blue-light/60 transition-all shadow-glow">
                  <CardContent className="pt-6">
                    <div className="text-sm text-muted-foreground"><strong className="text-ba-blue-light">Economizei R$ 8 mil/mês</strong> só com reconciliação financeira automatizada.</div>
                  </CardContent>
                </Card>
              </div>
              
              <p>
                O mais surpreendente? <strong>Ninguém novo foi contratado</strong>. Bastou um roteiro claro, ferramentas no-code e uma cadência de melhoria contínua.
              </p>
              
              <p>
                Esse roteiro virou o ecossistema <strong>IA para Negócios</strong>: mentoria, trilhas práticas e suporte que colocam 
                <strong> você no volante da próxima revolução</strong>, sem depender de devs ou orçamentos gigantes. Porque a verdadeira dor não é aprender uma nova tecnologia, 
                e sim <strong>ficar parado enquanto ela decide quem prospera e quem fecha as portas</strong>.
              </p>
              
              <div className="text-center mt-8">
                <p className="text-xl font-semibold text-foreground">
                  Se o seu desejo é liderar o mercado — em vez de persegui-lo —, esta mentoria foi feita para você.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promessa Poderosa */}
      <section className="py-20 relative bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-ba-blue-light/10 to-ba-orange/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-8 bg-gradient-to-r from-ba-blue-light via-white to-ba-orange bg-clip-text text-transparent">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Promessa Poderosa</span>
            </h2>
            
            <Card className="bg-black/80 backdrop-blur-sm border border-ba-blue-light/20 p-8 hover:border-ba-blue-light/60 transition-all shadow-glow">
              <CardContent className="pt-0">
                <div className="text-2xl md:text-3xl font-bold font-poppins leading-tight text-foreground">
                  "Em apenas 90 dias você e sua equipe vão automatizar três processos críticos do seu negócio, 
                  reduzir até 40% dos custos operacionais e liberar pelo menos 10 horas por semana — 
                  tudo isso usando ferramentas de IA no-code, sem contratar nenhum desenvolvedor."
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefícios Detalhados */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4 text-white">
              O que muda <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">na prática</span>
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left p-4 font-poppins text-lg text-white">Benefício</th>
                    <th className="text-left p-4 font-poppins text-lg text-white">Antes</th>
                    <th className="text-left p-4 font-poppins text-lg text-white">Depois da Mentoria IA para Negócios</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  {[
                    {
                      benefit: "Produtividade Explosiva",
                      before: "Equipe presa em tarefas manuais e retrabalho.",
                      after: "Automação no-code reduz 4h/dia por colaborador — mais tempo para vender e inovar."
                    },
                    {
                      benefit: "Crescimento de Receita",
                      before: "Campanhas demoradas, leads frios, upsell na sorte.",
                      after: "IA gera anúncios e upsells personalizados em minutos; aumento projetado de 20–30% no ticket médio."
                    },
                    {
                      benefit: "Custos Operacionais Menores",
                      before: "Planilhas, copi-cola, erros humanos que drenam caixa.",
                      after: "Processos de back-office (financeiro, estoque, RH) automatizados; corte de até 40% nos custos ocultos."
                    },
                    {
                      benefit: "Decisão Guiada por Dados",
                      before: "Relatórios feitos 'quando sobra tempo', visão atrasada do negócio.",
                      after: "Dashboard vivo com 3-5 KPIs críticos; reuniões de 30 min quinzenais que ajustam rota rápido."
                    },
                    {
                      benefit: "Time Enxuto e Eficiente",
                      before: "Pressão para contratar devs ou agência cara.",
                      after: "Ferramentas no-code + trilha operacional: o próprio time executa, sem headcount extra."
                    },
                    {
                      benefit: "Vantagem Competitiva",
                      before: "Concorrentes começam a usar IA e ganham mercado.",
                      after: "Você implementa primeiro: atendimento 24/7, resposta instantânea, marketing dinâmico."
                    }
                  ].map((item, index) => (
                    <tr key={index} className="hover:bg-slate-800/20 transition-colors">
                      <td className="p-4 font-semibold text-white">{item.benefit}</td>
                      <td className="p-4 text-gray-300 text-sm">{item.before}</td>
                      <td className="p-4 text-sm font-medium text-gray-300">{item.after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* O que está incluso */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4 text-white">
              O que está <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">incluso</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
              A oferta completa do ecossistema IA para Negócios
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Rocket,
                title: "Ecossistema completo de implementação (12 semanas)",
                items: [
                  "Trilho Estratégico (dono/sócios): E1, E2, E5, E6, E7, E8, E9 — decisões, KPIs, road-map e time.",
                  "Trilho Operacional (equipe): O1 a O8 — prompts, automações no-code, dados leves, segurança e criativos."
                ]
              },
              {
                icon: Target,
                title: "Plano 90 dias 'mão na massa'",
                items: [
                  "3 processos críticos automatizados (definidos no E1 e implantados no O3/O4).",
                  "1 painel executivo com 3–5 KPIs ligados ao caixa.",
                  "1 road-map de 12 meses (três ondas) para escalar o que funcionou."
                ]
              },
              {
                icon: MessageSquare,
                title: "Canal privado",
                items: [
                  "Resposta em até 24h úteis."
                ]
              },
              {
                icon: Brain,
                title: "Tutores de IA personalizados",
                items: [
                  "Implemente todas as aulas com um Tutor personalizado.",
                  "GPT Tutor Estratégico (decisões, KPIs, canvas).",
                  "GPT Tutor Operacional (prompts, integrações, troubleshooting)."
                ]
              },
              {
                icon: Database,
                title: "Playbooks & templates prontos",
                items: [
                  "Biblioteca de 120+ prompts por área (marketing, vendas, atendimento, back-office).",
                  "Cenários clonáveis (n8n): É só copiar, colar e rodar.",
                  "Planilhas: Templates prontos para poupar tempo."
                ]
              },
              {
                icon: Lightbulb,
                title: "Treinamentos e materiais",
                items: [
                  "Aulas ao vivo gravadas + acesso às gravações por 12 meses.",
                  "Guias passo a passo (PDF) por módulo e listas de checagem.",
                  "Estudos de caso por nicho (varejo, serviços de saúde, construção, agência de marketing)."
                ]
              },
              {
                icon: Award,
                title: "Garantias e certificação",
                items: [
                  "Revisão técnica de 1 workflow por empresa (assinado pelo instrutor).",
                  "Certificado 'Applied AI for SMBs' mediante entrega do piloto e participação mínima.",
                  "Selo 'Processo Automatizado' para os 3 fluxos concluídos."
                ]
              }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700">
                  <CardHeader>
                    <div className="p-3 bg-slate-700 rounded-full w-fit mb-4">
                      <IconComponent size={24} className="text-blue-400" />
                    </div>
                    <CardTitle className="text-lg font-poppins mb-4 text-white">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-2">
                      {item.items.map((subItem, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle size={12} className="text-blue-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{subItem}</span>
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

      {/* Prova Social */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4 text-white">
              <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">Estudos de Caso</span> Reais
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            {[
              {
                title: "Agência de Marketing – Relatórios automatizados",
                problem: "Gastar tempo gerando relatórios periódicos para clientes",
                solution: "Gerenciador → Planilhas → Mensagem automática pro cliente + Dashboard",
                result: "+2h/semana liberadas"
              },
              {
                title: "Clínica odontológica – No-show",
                problem: "faltas em consultas comprometendo a agenda.",
                solution: "bot WhatsApp com confirmação automática + remarcação assistida por IA.",
                result: "−35% no-show e fila organizada."
              },
              {
                title: "Construção civil – Orçamentos",
                problem: "propostas demoradas e pouco padronizadas.",
                solution: "geração automática de orçamento em PDF (Sheets + GPT + Make).",
                result: "−60% do tempo de preparo e +18% taxa de aceite."
              }
            ].map((caseStudy, index) => (
              <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700">
                <CardHeader>
                  <CardTitle className="text-lg font-poppins mb-4 text-white">
                    {caseStudy.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <span className="font-semibold text-red-500">Problema:</span>
                      <span className="text-gray-300 ml-1">{caseStudy.problem}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-blue-400">Solução:</span>
                      <span className="text-gray-300 ml-1">{caseStudy.solution}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-green-400">Resultado:</span>
                      <span className="text-gray-300 ml-1">{caseStudy.result}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                quote: "Em dois meses automatizamos proposta e follow-up. Liberamos o equivalente a 10 horas/semana",
                author: "[Nome, Cargo]"
              },
              {
                quote: "O bot de WhatsApp tirou o peso do atendimento repetitivo. Nossa equipe foca em casos complexos e o NPS subiu",
                author: "[Nome, Cargo]"
              },
              {
                quote: "Com o dashboard de KPIs, nossas reuniões passaram a levar 30 minutos",
                author: "[Nome, Sócio]"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-300 italic mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <cite className="text-sm font-semibold text-white">
                    {testimonial.author}
                  </cite>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section className="py-20 bg-gradient-to-br from-green-500/10 to-blue-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4 text-white">
              Garantia — <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">Risco Zero</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
              Dupla proteção para você decidir com tranquilidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-slate-800/80 backdrop-blur-sm border border-green-500/30">
              <CardHeader>
                <div className="p-3 bg-green-500/20 rounded-full w-fit mb-4">
                  <Shield size={24} className="text-green-400" />
                </div>
                <CardTitle className="text-xl font-poppins text-white">
                  Garantia Incondicional de 7 Dias
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Entre, assista às primeiras aulas (E1 + O1) e teste os templates. Se não fizer sentido para sua realidade, 
                  <strong> devolvemos 100%</strong> do investimento. Sem perguntas.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/80 backdrop-blur-sm border border-blue-500/30">
              <CardHeader>
                <div className="p-3 bg-blue-500/20 rounded-full w-fit mb-4">
                  <CheckCircle size={24} className="text-blue-400" />
                </div>
                <CardTitle className="text-xl font-poppins text-white">
                  Garantia de Implementação em 90 Dias
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Se, cumprindo as ações combinadas, você <strong>não tiver ao menos 3 processos automatizados + 1 painel com 3–5 KPIs ativos</strong>, 
                  nós devolvemos 100% do seu dinheiro, sem questionamentos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bônus */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4 text-white">
              <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">Bônus</span> Exclusivos
            </h2>
            <Badge variant="outline" className="border-green-500 text-green-400 bg-green-500/10 text-lg px-4 py-2">
              Valor de referência: R$ 2.800 — Apenas nesta turma
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "GPT Tutors do Curso",
                value: "R$ 1.200",
                description: "Tire dúvidas 24/7, receba feedback em tempo real e exercícios adaptativos.",
                delivery: "acesso imediato dentro do portal"
              },
              {
                title: "Biblioteca de 120+ Prompts",
                value: "R$ 600",
                description: "Marketing, Vendas, Atendimento, Back-office, Operações — prontos para copiar e usar.",
                delivery: "Google Doc + atualizações trimestrais"
              },
              {
                title: "Revisão Técnica de 1 Workflow",
                value: "R$ 1.000",
                description: "Auditoria do seu fluxo mais crítico: custo, robustez e segurança.",
                delivery: "sessão de 30 min + checklist assinado"
              }
            ].map((bonus, index) => (
              <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 relative">
                <div className="absolute -top-3 -right-3">
                  <Badge variant="default" className="bg-green-500 text-white">
                    {bonus.value}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="p-3 bg-slate-700 rounded-full w-fit mb-4">
                    <Gift size={24} className="text-blue-400" />
                  </div>
                  <CardTitle className="text-lg font-poppins text-white">
                    Bônus #{index + 1} — {bonus.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm mb-3">
                    {bonus.description}
                  </p>
                  <p className="text-xs text-gray-400 italic">
                    Entrega: {bonus.delivery}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Preço e Ancoragem */}
      <section className="py-20 bg-gradient-to-br from-blue-500/10 to-green-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4 text-white">
                <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">Investimento</span>
              </h2>
            </div>

            <Card className="bg-slate-800/90 backdrop-blur-sm border border-blue-500/30 p-8">
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-4">
                    R$ 3.000
                  </div>
                  <p className="text-xl text-gray-300 mb-6">à vista ou 12× de R$ 300</p>
                </div>

                <Separator className="bg-slate-700" />

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white text-center">Inclui:</h3>
                  <ul className="space-y-3">
                    {[
                      "Mentoria 12 semanas (trilho Estratégico + Operacional)",
                      "Tutores GPT personalizados (Estratégico e Operacional)",
                      "Biblioteca de 120+ prompts por área",
                      "Cenários de n8n clonáveis",
                      "Revisão técnica de 1 workflow",
                      "Comunidade e gravações por 12 meses"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator className="bg-slate-700" />

                <div className="text-center">
                  <Button 
                    size="lg" 
                    className="text-lg px-10 py-6 font-inter bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold uppercase tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 w-full"
                    onClick={() => handleWhatsAppContact('pricing_section')}
                  >
                    Garantir minha vaga
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4 text-white">
              Perguntas <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">Frequentes</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "Preciso saber programar?",
                  answer: "Não. O método é no-code. Você usará ChatGPT/Assistants, Make/Zapier, Google Sheets, Supabase e Looker com passo a passo."
                },
                {
                  question: "Quanto tempo por semana eu (e a equipe) preciso?",
                  answer: "Média de 3–5h/semana por pessoa. Proprietário entra nas decisões (E1/E2/E6/E7) e a equipe executa os labs operacionais."
                },
                {
                  question: "Em quanto tempo vejo resultado?",
                  answer: "Nas primeiras 4–6 semanas já há ganho de horas e redução de retrabalho. O objetivo formal é 3 processos automatizados em 90 dias."
                },
                {
                  question: "Quais ferramentas usamos e quanto custam?",
                  answer: "ChatGPT Team/Plus, Make/Zapier, Google Workspace, Supabase (camada grátis/baixo custo) e Looker. Orçamento típico: R$ 150–600/mês por empresa, dependendo do volume."
                },
                {
                  question: "E se meus dados forem sensíveis (LGPD)?",
                  answer: "Aplicamos anonimização no fluxo, cofres de segredos e controles de acesso. Você decide o que entra ou não na IA. Fornecemos checklist LGPD operacional."
                },
                {
                  question: "Como funciona a garantia?",
                  answer: "7 dias incondicional. E Garantia de Implementação: cumprindo as ações, se não tiver 3 fluxos + painel ativos, estendemos 30 dias sem custo para ajustar e concluir."
                },
                {
                  question: "O que exatamente entregamos em 90 dias?",
                  answer: "3 fluxos em produção (ex.: lead→proposta, FAQ 24/7, conciliação), 1 painel executivo com 3–5 KPIs, road-map de 12 meses para escalar."
                },
                {
                  question: "Quantas pessoas da empresa podem participar?",
                  answer: "Recomendado 2–6 participantes (1 decisor + 1–5 operadores). Turma limitada a 15 empresas para manter o suporte próximo."
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-poppins text-white">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 font-inter">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-40 h-40 bg-green-500 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-8 leading-tight text-white">
              Você pode continuar com a rotina que drena tempo e margem — ou, nos próximos 90 dias, 
              <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent"> liderar seu mercado</span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 font-inter leading-relaxed">
              A mentoria IA para Negócios foi desenhada para PMEs como a sua: direta, prática e com garantia dupla. 
              As vagas são limitadas a 15 empresas.
            </p>
            
            <div className="text-xl font-semibold mb-8 text-white">
              Se o plano é liderar (não reagir), é agora.
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                className="text-xl px-12 py-6 font-inter bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white"
                onClick={() => handleWhatsAppContact('final_cta')}
              >
                Quero liderar meu mercado com IA
                <ArrowRight className="ml-2" size={24} />
              </Button>
            </div>
            
            <div className="space-y-2 text-sm text-gray-300">
              <p><strong>P.S.</strong> Bônus de R$ 2.800 incluídos nesta turma e 7 dias de teste sem risco.</p>
              <p><strong>P.P.S.</strong> Ainda em dúvida? <button onClick={() => handleWhatsAppContact('schedule_link')} className="underline text-blue-400 hover:text-blue-300">Agende 15 min</button> para entendermos se faz sentido para o seu caso.</p>
            </div>
          </div>
        </div>
      </section>

      
      <LeadFormIANegocios 
        open={isLeadFormOpen} 
        onOpenChange={setIsLeadFormOpen}
        onSuccess={handleLeadSuccess}
      />
    </div>
  );
};

export default IAParaNegocios;