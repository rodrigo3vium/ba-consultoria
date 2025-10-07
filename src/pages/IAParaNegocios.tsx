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
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const IAParaNegocios = () => {
  const handleWhatsAppContact = () => {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre o programa IA para Negócios.");
    window.open(`https://wa.me/5511999718595?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-slate-900 relative overflow-hidden">
        {/* Top Bar */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 py-3 text-center">
          <p className="text-white font-semibold text-sm md:text-base font-inter uppercase tracking-wide">
            Exclusivo para PMEs que faturam entre R$ 1 e 5 milhões por ano
          </p>
        </div>

        {/* Hero Content */}
        <div className="relative">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-48 h-48 bg-green-500 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div className="space-y-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight text-white">
                  Tenha soluções de IA{' '}
                  <span className="bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
                    sob medida
                  </span>
                  {' '}para seu negócio
                </h1>

                <p className="text-lg md:text-xl text-gray-300 font-inter leading-relaxed">
                  Implemente Inteligência Artificial de forma prática e estratégica na sua empresa. 
                  Aumente lucros, ganhe eficiência e lidere seu mercado em 90 dias.
                </p>

                <Button 
                  size="lg" 
                  className="text-lg px-10 py-6 font-inter bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold uppercase tracking-wide shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={handleWhatsAppContact}
                >
                  Quero mais informações
                </Button>

                {/* Trust Indicators */}
                <div className="flex flex-col space-y-3 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 border-2 border-slate-900 flex items-center justify-center">
                        <Building2 size={20} className="text-white" />
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-500 border-2 border-slate-900 flex items-center justify-center">
                        <TrendingUp size={20} className="text-white" />
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 border-2 border-slate-900 flex items-center justify-center">
                        <Award size={20} className="text-white" />
                      </div>
                    </div>
                    <p className="text-gray-300 font-inter">
                      <span className="text-green-400 font-semibold">+ de 100 empresas</span> já transformaram seus negócios com IA
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Visual Cards */}
              <div className="relative h-[400px] lg:h-[500px]">
                {/* Background gradient glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-green-500/20 rounded-3xl blur-2xl"></div>
                
                {/* Floating Cards */}
                <div className="relative h-full flex items-center justify-center">
                  {/* Card 1 - Top Right */}
                  <Card className="absolute top-8 right-4 bg-slate-800/90 border-slate-700 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 animate-float">
                    <CardContent className="p-6">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-green-400 font-poppins">+12</span>
                        <div className="text-left">
                          <p className="text-sm text-gray-300 font-inter">Anos de</p>
                          <p className="text-sm text-gray-300 font-inter">mercado</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Card 2 - Middle Left */}
                  <Card className="absolute top-32 left-0 bg-slate-800/90 border-slate-700 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 animate-float" style={{ animationDelay: '0.5s' }}>
                    <CardContent className="p-6">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-blue-400 font-poppins">+100</span>
                        <div className="text-left">
                          <p className="text-sm text-gray-300 font-inter">Empresas</p>
                          <p className="text-sm text-gray-300 font-inter">atendidas</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Card 3 - Bottom Right */}
                  <Card className="absolute bottom-8 right-8 bg-slate-800/90 border-slate-700 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 animate-float" style={{ animationDelay: '1s' }}>
                    <CardContent className="p-6">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-green-400 font-poppins">+40%</span>
                        <div className="text-left">
                          <p className="text-sm text-gray-300 font-inter">Aumento médio</p>
                          <p className="text-sm text-gray-300 font-inter">de produtividade</p>
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
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-inter">
              A mentoria IA para negócios é um ecossistema completo, que auxilia você e sua equipe 
              na implementação de soluções de IA na sua empresa. Colhendo resultados concretos, 
              em 90 dias, mesmo que vocês estejam saindo do zero e sem precisar fazer novas contratações. 
              Temos trilhas dedicadas para quem está no Estratégico e no Operacional do negócio.
            </p>
          </div>
        </div>
      </section>

      {/* Isso é pra você se... */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4 text-white">
              Isso é pra você <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">se...</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Building2,
                title: "Você é dono ou sócio de uma PME",
                description: "que fatura entre R$ 1–5 mi/ano e precisa ganhar eficiência sem inflar a folha de pagamento."
              },
              {
                icon: Clock,
                title: "Suas tarefas estão consumindo horas",
                description: "em planilhas, e-mails e follow-ups manuais, mas você ainda não sabe automatizar com segurança."
              },
              {
                icon: DollarSign,
                title: "Quer ver ROI palpável",
                description: "em até 90 dias, em vez de projetos de IA caros que nunca saem do papel."
              },
              {
                icon: Rocket,
                title: "Busca vantagem competitiva real",
                description: "reduzir custos operacionais, acelerar vendas ou melhorar atendimento antes que o concorrente descubra."
              },
              {
                icon: Users,
                title: "Não tem equipe técnica dedicada",
                description: "e precisa de soluções no-code que o próprio time possa tocar."
              },
              {
                icon: Heart,
                title: "Valoriza acompanhamento de perto",
                description: "com trilha estratégica para decisões de direção e trilha operacional para execução diária."
              }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
                  <CardHeader>
                    <div className="p-3 bg-slate-700 rounded-full w-fit mb-4">
                      <IconComponent size={24} className="text-blue-400" />
                    </div>
                    <CardTitle className="text-lg font-poppins mb-2 text-white">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="font-inter text-gray-300">
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
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-8 text-center text-white">
              A História — <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">da Dor ao Desejo</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-300 font-inter leading-relaxed">
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
                Foi quando decidi testar pequenas automações de IA — mesmo sem saber programar. Em três meses:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <Card className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-center">
                  <CardContent className="pt-6">
                    <div className="text-2xl font-bold text-green-400 mb-2">60%</div>
                    <div className="text-sm text-gray-300">Cortei o tempo de proposta usando geração automática de PDFs via ChatGPT e Make.</div>
                  </CardContent>
                </Card>
                <Card className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-center">
                  <CardContent className="pt-6">
                    <div className="text-2xl font-bold text-green-400 mb-2">27%</div>
                    <div className="text-sm text-gray-300">Aumentei o ticket médio com um bot de upsell que trabalha enquanto a equipe dorme.</div>
                  </CardContent>
                </Card>
                <Card className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-center">
                  <CardContent className="pt-6">
                    <div className="text-2xl font-bold text-green-400 mb-2">R$ 8 mil/mês</div>
                    <div className="text-sm text-gray-300">Economizei só com reconciliação financeira automatizada.</div>
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
                <p className="text-xl font-semibold text-white">
                  Se o seu desejo é liderar o mercado — em vez de persegui-lo —, esta mentoria foi feita para você.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promessa Poderosa */}
      <section className="py-20 bg-gradient-to-br from-green-500/10 to-blue-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-8 text-white">
              Nossa <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">Promessa</span>
            </h2>
            
            <Card className="bg-slate-800/90 backdrop-blur-sm border border-slate-700 p-8">
              <CardContent className="pt-0">
                <div className="text-2xl md:text-3xl font-bold font-poppins leading-tight text-white">
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
                  "Trilho Estratégico (dono/sócios): E1, E2, E5, E6, E7, E8, E9",
                  "Trilho Operacional (equipe): O1 a O8"
                ]
              },
              {
                icon: Target,
                title: "Plano 90 dias 'mão na massa'",
                items: [
                  "3 processos críticos automatizados",
                  "1 painel executivo com 3–5 KPIs",
                  "1 road-map de 12 meses (três ondas)"
                ]
              },
              {
                icon: Users,
                title: "Mentorias e suporte",
                items: [
                  "Mentoria em grupo semanal (90 min)",
                  "Plantão de dúvidas quinzenal (60 min)",
                  "Canal privado (Slack/Discord)"
                ]
              },
              {
                icon: Brain,
                title: "Tutores de IA personalizados",
                items: [
                  "GPT Tutor Estratégico",
                  "GPT Tutor Operacional",
                  "Histórico salvo + sugestões"
                ]
              },
              {
                icon: Database,
                title: "Playbooks & templates prontos",
                items: [
                  "Biblioteca de 120+ prompts",
                  "Cenários clonáveis (Make/Zapier)",
                  "Dashboard Looker Studio"
                ]
              },
              {
                icon: Award,
                title: "Garantias e certificação",
                items: [
                  "Revisão técnica de 1 workflow",
                  "Certificado 'Applied AI for SMBs'",
                  "Selo 'Processo Automatizado'"
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
                title: "Varejo físico – Estoque previsível",
                problem: "rupturas e sobras frequentes.",
                solution: "planilha de vendas → previsão simples (AutoML) → alerta de compra no Slack.",
                result: "−10% desperdício e −8% ruptura em 6 semanas."
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
                  Se, cumprindo as ações combinadas, você não tiver ao menos 3 processos automatizados + 1 painel com 3–5 KPIs ativos, 
                  nós <strong>estendemos a mentoria por mais 30 dias sem custo</strong> e ajustamos os fluxos até ficar de pé.
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
              Valor de referência: R$ 4.900 — Apenas nesta turma
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
                title: "Kit 'Texto → Vídeo'",
                value: "R$ 900",
                description: "Roteiro → voz IA → vídeo vertical legendado para posts e anúncios.",
                delivery: "cenário Make/Zapier clonável + tutorial"
              },
              {
                title: "Biblioteca de 120+ Prompts",
                value: "R$ 600",
                description: "Marketing, Vendas, Atendimento, Back-office, Operações — prontos para copiar e usar.",
                delivery: "Google Doc + atualizações trimestrais"
              },
              {
                title: "Leaderboard de Adoção",
                value: "R$ 500",
                description: "Ranking automático de uso/entregas para manter o time engajado.",
                delivery: "Apps Script + template"
              },
              {
                title: "Minutas RFI/RFP e Contrato",
                value: "R$ 700",
                description: "Peças jurídicas enxutas para negociar com vendors sem dor de cabeça.",
                delivery: ".docx editável"
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

      {/* Escassez/Urgência */}
      <section className="py-20 bg-gradient-to-br from-red-500/10 to-orange-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-8 text-white">
              <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">Vagas Limitadas</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: Users,
                  title: "Turma limitada a 15 empresas",
                  description: "Mantemos grupos pequenos para garantir revisão técnica do seu workflow e acompanhamento próximo."
                },
                {
                  icon: Timer,
                  title: "Bônus válidos apenas nesta turma",
                  description: "Os 6 bônus (GPT Tutors, Kit Texto→Vídeo, etc.) não são garantidos nas próximas edições."
                },
                {
                  icon: TrendingUp,
                  title: "Preço de lançamento",
                  description: "Valor atual é preço de entrada. Na próxima turma, o investimento sobe devido ao aumento de suporte."
                },
                {
                  icon: CheckCircle,
                  title: "Prioridade por ordem de confirmação",
                  description: "A vaga é assegurada apenas após o pagamento/contrato. Interessados sem confirmação ficam em standby."
                }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card key={index} className="bg-slate-800/80 backdrop-blur-sm border border-orange-500/30 text-left">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-orange-500/20 rounded-full">
                          <IconComponent size={20} className="text-orange-400" />
                        </div>
                        <CardTitle className="text-lg font-poppins text-white">
                          {item.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-gray-300 text-sm">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
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
                onClick={handleWhatsAppContact}
              >
                Quero liderar meu mercado com IA
                <ArrowRight className="ml-2" size={24} />
              </Button>
            </div>
            
            <div className="space-y-2 text-sm text-gray-300">
              <p><strong>P.S.</strong> Bônus de R$ 4.900 incluídos nesta turma e 7 dias de teste sem risco.</p>
              <p><strong>P.P.S.</strong> Ainda em dúvida? <button onClick={handleWhatsAppContact} className="underline text-blue-400 hover:text-blue-300">Agende 15 min</button> para entendermos se faz sentido para o seu caso.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IAParaNegocios;