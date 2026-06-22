import React, { useState, useEffect } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import {
  Brain,
  Target,
  TrendingUp,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Clock,
  DollarSign,
  Building2,
  MessageSquare,
  Database,
  Shield,
  Heart,
  Lightbulb,
  Rocket,
  Gift,
  Star
} from 'lucide-react';
import LeadFormIANegocios from '@/components/LeadFormIANegocios';
import { tracker } from '@/lib/tracking';

const IAParaNegocios = () => {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = '#05090B';
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
    <div className="min-h-screen bg-pb-void">

      {/* Top Bar */}
      <div className="bg-pb-void-card border-b border-pb-grid-strong py-3 text-center">
        <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan">
          Exclusivo para PMEs que faturam entre R$ 1 e 5 milhões por ano
        </p>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-pb-void py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Column */}
            <div className="space-y-8">
              <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan">
                IA para Negócios — Ecossistema de Implementação
              </p>
              <h1 className="font-display uppercase text-pb-ink leading-[0.92] text-5xl md:text-6xl lg:text-7xl">
                Se torne o líder do seu mercado utilizando soluções de Inteligência Artificial para aumentar lucro e ganhar produtividade no seu negócio
              </h1>

              <p className="font-body text-pb-ink-soft leading-relaxed text-lg md:text-xl">
                O IA para negócios é um ecossistema completo, que auxilia você e sua equipe
                na implementação de soluções de IA na sua empresa.
              </p>

              <button
                className="btn-primary"
                onClick={() => handleWhatsAppContact('hero_top')}
              >
                Quero mais informações
                <ArrowRight size={16} />
              </button>

              {/* Trust Indicators */}
              <div className="flex items-center gap-3 pt-4 border-t border-pb-grid-strong">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 bg-pb-void-card border border-pb-grid-strong flex items-center justify-center">
                    <Building2 size={18} className="text-pb-cyan" />
                  </div>
                  <div className="w-10 h-10 bg-pb-void-elev border border-pb-grid-strong flex items-center justify-center">
                    <TrendingUp size={18} className="text-pb-ink" />
                  </div>
                  <div className="w-10 h-10 bg-pb-void-card border border-pb-grid-strong flex items-center justify-center">
                    <Award size={18} className="text-pb-cyan" />
                  </div>
                </div>
                <p className="font-mono text-[11px] text-pb-ink-muted uppercase tracking-mono-wide">
                  <span className="text-pb-cyan">+ de 100 empresas</span> já transformaram seus negócios com IA
                </p>
              </div>
            </div>

            {/* Right Column — Stat Grid */}
            <div className="stat-grid grid-cols-2">
              <div className="stat-cell">
                <div className="label">Anos de mercado</div>
                <div className="value cyan">+12</div>
              </div>
              <div className="stat-cell">
                <div className="label">Empresas atendidas</div>
                <div className="value">+100</div>
              </div>
              <div className="stat-cell">
                <div className="label">Produtividade média</div>
                <div className="value cyan">+40%</div>
                <div className="delta">aumento documentado</div>
              </div>
              <div className="stat-cell">
                <div className="label">Prazo de resultado</div>
                <div className="value">90</div>
                <div className="delta">dias</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o Ecossistema */}
      <section className="py-16 bg-pb-void-card border-y border-pb-grid-strong">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-body text-pb-ink-soft leading-relaxed text-lg md:text-xl">
              O IA para negócios é um ecossistema completo, que auxilia você e sua equipe
              na implementação de soluções de IA na sua empresa. Colhendo resultados concretos,
              em 90 dias, mesmo que vocês estejam saindo do zero e sem precisar fazer novas contratações.
              Temos trilhas dedicadas para quem está no Estratégico e no Operacional do negócio.
            </p>
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="py-20 bg-pb-void">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">Perfil ideal</p>
            <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-4xl md:text-5xl">
              Isso é pra você se...
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-pb-grid-strong max-w-6xl mx-auto border border-pb-grid-strong">
            {[
              {
                icon: Building2,
                title: "Você é dono ou sócio de uma Empresa que fatura entre R$ 1–5 mi/ano",
                description: "e precisa ganhar eficiência sem inflar a folha de pagamento."
              },
              {
                icon: Clock,
                title: "Suas tarefas estão consumindo horas em planilhas, e-mails e follow-ups manuais",
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
                <div key={index} className="strat-card p-8 bg-pb-void-card">
                  <IconComponent size={24} className="text-pb-cyan mb-6" />
                  <h3 className="font-display uppercase text-pb-ink leading-[0.92] text-xl mb-3">
                    {item.title}
                  </h3>
                  <p className="font-body text-pb-ink-soft leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* A História */}
      <section className="py-20 bg-pb-void-card border-y border-pb-grid-strong">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4 text-center">Narrativa de transformação</p>
            <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-4xl md:text-5xl text-center mb-12">
              Da dor ao desejo
            </h2>

            <div className="space-y-6 font-body text-pb-ink-soft leading-relaxed text-lg">
              <p>
                Imagine chegar ao fim do mês e perceber que <strong className="text-pb-ink">40% do seu tempo foi gasto em tarefas que não geram receita</strong>:
                copiar dados, enviar lembretes, montar relatórios, responder perguntas repetidas. Enquanto isso, grandes players usam IA para reduzir custos,
                criar campanhas em minutos e atender clientes 24/7 — <strong className="text-pb-ink">roubando mercado num piscar de olhos</strong>.
              </p>

              <p>
                Eu estava exatamente aí. Minha empresa faturava razoavelmente bem, mas cada ponto de crescimento custava mais horas,
                mais gente, mais estresse. <strong className="text-pb-ink">O lucro encolhia, a concorrência escalava</strong> e eu sentia que ficaria preso nesse ciclo para sempre.
              </p>

              <p>
                Foi quando decidi testar pequenas automações de IA — mesmo sem saber programar.
              </p>

              <p className="font-mono text-[11px] uppercase tracking-mono-wide text-pb-cyan">Em três meses:</p>

              <div className="stat-grid grid-cols-1 md:grid-cols-3 my-8">
                <div className="stat-cell">
                  <div className="label">Tempo de proposta</div>
                  <div className="value cyan">−60%</div>
                  <div className="delta">geração automática de PDFs via ChatGPT + Make</div>
                </div>
                <div className="stat-cell">
                  <div className="label">Ticket médio</div>
                  <div className="value">+27%</div>
                  <div className="delta">bot de upsell trabalhando 24/7</div>
                </div>
                <div className="stat-cell">
                  <div className="label">Economia mensal</div>
                  <div className="value cyan">R$8k</div>
                  <div className="delta">reconciliação financeira automatizada</div>
                </div>
              </div>

              <p>
                O mais surpreendente? <strong className="text-pb-ink">Ninguém novo foi contratado</strong>. Bastou um roteiro claro, ferramentas no-code e uma cadência de melhoria contínua.
              </p>

              <p>
                Esse roteiro virou o ecossistema <strong className="text-pb-ink">IA para Negócios</strong>: mentoria, trilhas práticas e suporte que colocam
                <strong className="text-pb-ink"> você no volante da próxima revolução</strong>, sem depender de devs ou orçamentos gigantes. Porque a verdadeira dor não é aprender uma nova tecnologia,
                e sim <strong className="text-pb-ink">ficar parado enquanto ela decide quem prospera e quem fecha as portas</strong>.
              </p>

              <div className="border border-pb-grid-strong p-8 text-center mt-8">
                <p className="font-display uppercase text-pb-ink leading-[0.92] text-2xl md:text-3xl">
                  Se o seu desejo é liderar o mercado — em vez de persegui-lo —, esta mentoria foi feita para você
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promessa */}
      <section className="py-20 bg-pb-void">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4 text-center">Compromisso do programa</p>
            <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-4xl md:text-5xl text-center mb-12">
              Promessa poderosa
            </h2>

            <div className="strat-card p-10 bg-pb-void-card text-center">
              <p className="font-body text-pb-ink leading-relaxed text-xl md:text-2xl">
                "Em apenas 90 dias você e sua equipe vão automatizar três processos críticos do seu negócio,
                reduzir até 40% dos custos operacionais e liberar pelo menos 10 horas por semana —
                tudo isso usando ferramentas de IA no-code, sem contratar nenhum desenvolvedor."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O que muda na prática */}
      <section className="py-20 bg-pb-void-card border-y border-pb-grid-strong">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">Resultados esperados</p>
            <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-4xl md:text-5xl">
              O que muda na prática
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="border border-pb-grid-strong overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-pb-grid-strong bg-pb-void-elev">
                    <th className="text-left p-4 font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan">Benefício</th>
                    <th className="text-left p-4 font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted">Antes</th>
                    <th className="text-left p-4 font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan">Depois da Mentoria</th>
                  </tr>
                </thead>
                <tbody>
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
                      after: "Processos de back-office automatizados; corte de até 40% nos custos ocultos."
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
                    <tr key={index} className="border-b border-pb-grid-strong hover:bg-pb-void-elev transition-colors">
                      <td className="p-4 font-display uppercase text-pb-ink text-sm">{item.benefit}</td>
                      <td className="p-4 font-body text-pb-ink-muted text-sm">{item.before}</td>
                      <td className="p-4 font-body text-pb-ink-soft text-sm">{item.after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* O que está incluso */}
      <section className="py-20 bg-pb-void">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">Escopo completo</p>
            <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-4xl md:text-5xl">
              O que está incluso
            </h2>
            <p className="font-body text-pb-ink-soft leading-relaxed text-xl max-w-3xl mx-auto mt-4">
              A oferta completa do ecossistema IA para Negócios
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-pb-grid-strong max-w-6xl mx-auto border border-pb-grid-strong">
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
                title: "Plano 90 dias mão na massa",
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
                title: "Playbooks e templates prontos",
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
                  "Estudos de caso por nicho (varejo, saúde, construção, agência de marketing)."
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
                <div key={index} className="strat-card p-8 bg-pb-void-card">
                  <IconComponent size={24} className="text-pb-cyan mb-6" />
                  <h3 className="font-display uppercase text-pb-ink leading-[0.92] text-lg mb-4">
                    {item.title}
                  </h3>
                  <ul className="space-y-2">
                    {item.items.map((subItem, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle size={12} className="text-pb-cyan mt-0.5 flex-shrink-0" />
                        <span className="font-body text-pb-ink-soft text-sm leading-relaxed">{subItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Estudos de Caso */}
      <section className="py-20 bg-pb-void-card border-y border-pb-grid-strong">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">Prova social</p>
            <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-4xl md:text-5xl">
              Estudos de caso reais
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-pb-grid-strong max-w-6xl mx-auto border border-pb-grid-strong mb-12">
            {[
              {
                title: "Agência de Marketing — Relatórios automatizados",
                problem: "Gastar tempo gerando relatórios periódicos para clientes",
                solution: "Gerenciador → Planilhas → Mensagem automática pro cliente + Dashboard",
                result: "+2h/semana liberadas"
              },
              {
                title: "Clínica odontológica — No-show",
                problem: "Faltas em consultas comprometendo a agenda.",
                solution: "Bot WhatsApp com confirmação automática + remarcação assistida por IA.",
                result: "−35% no-show e fila organizada."
              },
              {
                title: "Construção civil — Orçamentos",
                problem: "Propostas demoradas e pouco padronizadas.",
                solution: "Geração automática de orçamento em PDF (Sheets + GPT + Make).",
                result: "−60% do tempo de preparo e +18% taxa de aceite."
              }
            ].map((caseStudy, index) => (
              <div key={index} className="strat-card p-8 bg-pb-void-card">
                <h3 className="font-display uppercase text-pb-ink leading-[0.92] text-lg mb-6">
                  {caseStudy.title}
                </h3>
                <div className="space-y-3 font-body text-sm">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-red">Problema — </span>
                    <span className="text-pb-ink-soft">{caseStudy.problem}</span>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan">Solução — </span>
                    <span className="text-pb-ink-soft">{caseStudy.solution}</span>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink">Resultado — </span>
                    <span className="text-pb-ink font-semibold">{caseStudy.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-pb-grid-strong max-w-4xl mx-auto border border-pb-grid-strong">
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
              <div key={index} className="strat-card p-8 bg-pb-void-elev text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-pb-cyan fill-current" />
                  ))}
                </div>
                <blockquote className="font-body text-pb-ink-soft italic mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <cite className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted">
                  {testimonial.author}
                </cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section className="py-20 bg-pb-void">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">Proteção do investimento</p>
            <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-4xl md:text-5xl">
              Garantia — risco zero
            </h2>
            <p className="font-body text-pb-ink-soft leading-relaxed text-xl max-w-3xl mx-auto mt-4">
              Dupla proteção para você decidir com tranquilidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-pb-grid-strong max-w-4xl mx-auto border border-pb-grid-strong">
            <div className="strat-card p-8 bg-pb-void-card">
              <Shield size={24} className="text-pb-cyan mb-6" />
              <h3 className="font-display uppercase text-pb-ink leading-[0.92] text-xl mb-4">
                Garantia Incondicional de 7 Dias
              </h3>
              <p className="font-body text-pb-ink-soft leading-relaxed">
                Entre, assista às primeiras aulas (E1 + O1) e teste os templates. Se não fizer sentido para sua realidade,
                <strong className="text-pb-ink"> devolvemos 100%</strong> do investimento. Sem perguntas.
              </p>
            </div>

            <div className="strat-card p-8 bg-pb-void-card">
              <CheckCircle size={24} className="text-pb-cyan mb-6" />
              <h3 className="font-display uppercase text-pb-ink leading-[0.92] text-xl mb-4">
                Garantia de Implementação em 90 Dias
              </h3>
              <p className="font-body text-pb-ink-soft leading-relaxed">
                Se, cumprindo as ações combinadas, você <strong className="text-pb-ink">não tiver ao menos 3 processos automatizados + 1 painel com 3–5 KPIs ativos</strong>,
                nós devolvemos 100% do seu dinheiro, sem questionamentos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bônus */}
      <section className="py-20 bg-pb-void-card border-y border-pb-grid-strong">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">Apenas nesta turma</p>
            <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-4xl md:text-5xl">
              Bônus exclusivos
            </h2>
            <div className="mt-4 inline-flex">
              <span className="pb-tag cyan">Valor de referência: R$ 2.800</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-pb-grid-strong max-w-6xl mx-auto border border-pb-grid-strong">
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
              <div key={index} className="strat-card p-8 bg-pb-void-elev relative">
                <div className="absolute top-4 right-4">
                  <span className="pb-tag cyan">{bonus.value}</span>
                </div>
                <Gift size={24} className="text-pb-cyan mb-6" />
                <h3 className="font-display uppercase text-pb-ink leading-[0.92] text-lg mb-4 pr-20">
                  Bônus #{index + 1} — {bonus.title}
                </h3>
                <p className="font-body text-pb-ink-soft text-sm leading-relaxed mb-3">
                  {bonus.description}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted">
                  Entrega: {bonus.delivery}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investimento */}
      <section className="py-20 bg-pb-void">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">Condições de acesso</p>
              <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-4xl md:text-5xl">
                Investimento
              </h2>
            </div>

            <div className="strat-card p-10 bg-pb-void-card">
              <div className="text-center mb-8">
                <div className="font-display text-7xl text-pb-ink leading-none mb-2">R$ 3.000</div>
                <p className="font-body text-pb-ink-soft text-xl">à vista ou 12× de R$ 300</p>
              </div>

              <div className="border-t border-pb-grid-strong pt-8 space-y-4">
                <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan text-center mb-4">Inclui:</p>
                <ul className="space-y-3">
                  {[
                    "Mentoria 12 semanas (trilho Estratégico + Operacional)",
                    "Tutores GPT personalizados (Estratégico e Operacional)",
                    "Biblioteca de 120+ prompts por área",
                    "Cenários de n8n clonáveis",
                    "Revisão técnica de 1 workflow",
                    "Comunidade e gravações por 12 meses"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-pb-cyan mt-0.5 flex-shrink-0" />
                      <span className="font-body text-pb-ink-soft">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-pb-grid-strong pt-8 text-center">
                <button
                  className="btn-primary justify-center w-full"
                  onClick={() => handleWhatsAppContact('pricing_section')}
                >
                  Garantir minha vaga
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-pb-void-card border-y border-pb-grid-strong">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">Dúvidas frequentes</p>
            <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-4xl md:text-5xl">
              Perguntas frequentes
            </h2>
          </div>

          <div className="max-w-4xl mx-auto border border-pb-grid-strong">
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
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-pb-grid-strong last:border-b-0">
                  <AccordionTrigger className="px-6 py-5 font-display uppercase text-pb-ink text-left hover:no-underline hover:text-pb-cyan transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 font-body text-pb-ink-soft leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-pb-void">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-6">Decisão final</p>
            <h2 className="font-display uppercase text-pb-ink leading-[0.92] text-4xl md:text-5xl mb-8">
              Você pode continuar com a rotina que drena tempo e margem — ou, nos próximos 90 dias, liderar seu mercado
            </h2>

            <p className="font-body text-pb-ink-soft leading-relaxed text-lg mb-8 max-w-3xl mx-auto">
              A mentoria IA para Negócios foi desenhada para PMEs como a sua: direta, prática e com garantia dupla.
              As vagas são limitadas a 15 empresas.
            </p>

            <p className="font-display uppercase text-pb-ink text-2xl mb-10">
              Se o plano é liderar (não reagir), é agora
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <button
                className="btn-primary"
                onClick={() => handleWhatsAppContact('final_cta')}
              >
                Quero liderar meu mercado com IA
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="space-y-2 font-body text-pb-ink-soft text-sm border-t border-pb-grid-strong pt-8">
              <p><strong className="text-pb-ink">P.S.</strong> Bônus de R$ 2.800 incluídos nesta turma e 7 dias de teste sem risco.</p>
              <p>
                <strong className="text-pb-ink">P.P.S.</strong> Ainda em dúvida?{' '}
                <button
                  onClick={() => handleWhatsAppContact('schedule_link')}
                  className="underline text-pb-cyan hover:text-pb-cyan-soft transition-colors"
                >
                  Agende 15 min
                </button>{' '}
                para entendermos se faz sentido para o seu caso.
              </p>
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
