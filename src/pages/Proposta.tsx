import PropostaLayout from "@/components/pb/PropostaLayout";
import SectionHeader from "@/components/pb/SectionHeader";
import StratCard from "@/components/pb/StratCard";
import { SAAS_BTN_PRIMARY } from "@/components/saas/ui";

const diagnosticItems = [
  {
    title: "Crescimento orgânico acelerado",
    text: "Em menos de 3 semanas focando em conteúdo para profissionais de estética, você ganhou quase 2.000 seguidores novos com alto engajamento. Isso prova que o público existe e está faminto pelo seu conteúdo.",
  },
  {
    title: "Vendas dependem de você",
    text: "100% das vendas do mês vieram diretamente do seu esforço pessoal. O time de WhatsApp não está convertendo — falta processo, script e automação para transformar interesse em compra.",
  },
  {
    title: "Experiência anterior frustrante",
    text: "A agência anterior não segmentou público, não alinhou expectativas e não entregou resultado. Isso gerou desconfiança e gasto sem retorno — precisamos reconstruir confiança com resultados reais.",
  },
  {
    title: "Potencial de escada de valor",
    text: "Você já tem um curso a R$297, consultoria a R$3.500 com taxa de conversão de ~10% em reuniões, e mais produtos em desenvolvimento. A estrutura para uma escada de valor já está nascendo.",
  },
];

const strategySteps = [
  {
    num: "01",
    title: "Potencializar o orgânico",
    text: "Vamos estruturar sua produção de conteúdo com calendário editorial, formatos que convertem e uma estratégia de Stories focada em vendas. Você já provou que sabe engajar — agora vamos direcionar esse engajamento para a compra.",
  },
  {
    num: "02",
    title: "Tráfego de retargeting na base",
    text: "Ao invés de gastar dinheiro tentando encontrar pessoas desconhecidas, vamos investir pouco para aparecer para quem já te segue, já assistiu seus vídeos e já demonstrou interesse. Conversão muito mais alta com investimento muito menor.",
  },
  {
    num: "03",
    title: "Otimização do funil de vendas",
    text: "Vamos trabalhar cada etapa: alcance → clique no link da bio → visita na página de vendas → compra. Se uma etapa não funciona, a gente corrige antes de avançar. Isso é marketing como ciência, não achismo.",
  },
  {
    num: "04",
    title: "Construção da escada de valor",
    text: "Com a base crescendo, vamos estruturar a jornada: curso de entrada (R$297) → materiais complementares → consultoria/mentoria (R$3.500+). Cada produto alimenta o próximo, aumentando o valor médio por cliente.",
  },
  {
    num: "05",
    title: "Reuniões de fechamento para high-ticket",
    text: "Para produtos acima de R$2.000, a reunião é essencial — você já provou isso em dezembro com 7-8 fechamentos de consultoria. Vamos estruturar esse processo para que aconteça de forma consistente, não apenas em picos.",
  },
];

const timelinePhases = [
  {
    label: "Mês 1–2",
    title: "Fundação",
    text: "Setup do funil, calendário editorial, páginas de vendas otimizadas, início do tráfego de retargeting. Métricas de alcance e cliques devem crescer.",
  },
  {
    label: "Mês 3–4",
    title: "Otimização",
    text: "Ajuste de criativos, melhoria nas taxas de conversão, testes A/B na página de vendas. Vendas começam a ganhar previsibilidade.",
  },
  {
    label: "Mês 5–6",
    title: "Escala",
    text: "Funil validado em crescimento. Introdução de novos produtos na escada de valor. Estrutura de reuniões de fechamento para high-ticket.",
  },
];

const option1Features = [
  "Gestão completa do tráfego pago (retargeting)",
  "Consultoria estratégica semanal",
  "Estruturação do funil de vendas",
  "Otimização de página de vendas e copy",
  "Direcionamento editorial para conteúdo orgânico",
  "Relatório mensal de métricas e performance",
  "Suporte via WhatsApp para dúvidas estratégicas",
];

const option2Features = [
  "Tudo da Opção 1 incluso",
  "Atuação como sócio estratégico do projeto digital",
  "Planejamento completo da escada de valor",
  "Estruturação de novos produtos digitais",
  "Edição de criativos para tráfego pago (conforme disponibilidade)",
  "Treinamento do time de atendimento comercial",
  "Compromisso de resultado mútuo — eu ganho quando você ganha",
];

const stats = [
  { num: "R$80M", label: "em vendas lideradas" },
  { num: "100+", label: "empresas consultadas" },
  { num: "R$500K", label: "investidos em mentoria" },
  { num: "5x", label: "ROAS médio de clientes" },
];

const Proposta = () => {
  return (
    <PropostaLayout
      cliente="Duda Bambil"
      projeto="Máquina Digital Previsível"
    >
      {/* SOBRE */}
      <section className="border-t border-white/[0.06] py-16">
        <SectionHeader
          idx="01"
          label="Sobre"
          headline="Quem está por trás desta proposta"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {/* Avatar */}
          <div className="rounded-2xl border border-white/[0.09] bg-saas-card p-8 flex flex-col items-center justify-center gap-4 aspect-square">
            <span className="font-extrabold text-[clamp(40px,6vw,64px)] leading-none bg-gradient-to-r from-saas-cyan to-saas-violet bg-clip-text text-transparent">RA</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-muted">Freedom Agency</span>
          </div>

          {/* Texto + stats */}
          <div className="md:col-span-2">
            <p className="text-saas-ink leading-relaxed mb-4 text-lg italic">
              Rodrigo Albuquerque investiu meio milhão de reais em mentoria com
              alguns dos maiores empreendedores do Brasil. Liderou R$80 milhões
              em vendas anuais e compilou na Freedom Agency o aprendizado
              extraído de mais de 100 empresas que receberam consultoria.
            </p>
            <p className="text-saas-body leading-relaxed mb-6">
              A Freedom Agency não é uma agência de marketing tradicional. É uma
              operação de revenue que une consultoria estratégica, execução de
              marketing e inteligência comercial — tudo focado em gerar retorno
              financeiro real.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-white/[0.09] bg-white/[0.02] p-4">
                  <span className="font-extrabold text-[clamp(24px,3vw,36px)] leading-none block bg-gradient-to-r from-saas-cyan to-saas-violet bg-clip-text text-transparent">{s.num}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-faint mt-1 block">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIAGNÓSTICO */}
      <section className="border-t border-white/[0.06] py-16">
        <SectionHeader
          idx="02"
          label="Diagnóstico"
          headline="O que identificamos na nossa conversa"
          sub="A partir da nossa reunião, mapeamos os principais pontos do seu cenário atual e as oportunidades que existem para destravar o próximo nível do seu negócio digital."
        />

        <div className="grid md:grid-cols-2 gap-4">
          {diagnosticItems.map((item) => (
            <StratCard key={item.title}>
              <h3 className="font-bold text-saas-ink text-lg leading-snug mb-3">{item.title}</h3>
              <p className="text-saas-body text-sm leading-relaxed">{item.text}</p>
            </StratCard>
          ))}
        </div>
      </section>

      {/* ESTRATÉGIA */}
      <section className="border-t border-white/[0.06] py-16">
        <SectionHeader
          idx="03"
          label="Estratégia"
          headline="Como vamos construir sua máquina digital"
          sub="A estratégia combina a força do seu conteúdo orgânico com tráfego pago de retargeting para maximizar conversões — sem depender de funil frio arriscado."
        />

        <div className="flex flex-col gap-0">
          {strategySteps.map((step, i) => (
            <div key={step.num} className="flex gap-6">
              {/* Número + linha */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="rounded-full bg-gradient-to-br from-saas-cyan to-saas-violet w-12 h-12 flex items-center justify-center">
                  <span className="font-mono text-[12px] font-bold text-saas-void">{step.num}</span>
                </div>
                {i < strategySteps.length - 1 && (
                  <div className="w-px flex-1 bg-white/[0.09] my-1" />
                )}
              </div>
              {/* Conteúdo */}
              <div className={i === strategySteps.length - 1 ? "pb-0" : "pb-8"}>
                <h3 className="font-bold text-saas-ink text-xl leading-tight mb-2 mt-3">{step.title}</h3>
                <p className="text-saas-body text-sm leading-relaxed">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LINHA DO TEMPO */}
      <section className="border-t border-white/[0.06] py-16">
        <SectionHeader
          idx="04"
          label="Expectativa"
          headline="Linha do tempo realista"
          sub="Transparência é fundamental. Resultados vêm com consistência — e a gente precisa ver as métricas evoluindo desde o primeiro mês."
        />

        <div className="grid md:grid-cols-3 rounded-2xl border border-white/[0.09] overflow-hidden">
          {timelinePhases.map((phase, i) => (
            <div
              key={phase.label}
              className={`bg-saas-card p-6 ${i < timelinePhases.length - 1 ? "border-b md:border-b-0 md:border-r border-white/[0.06]" : ""}`}
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan block mb-2">{phase.label}</span>
              <h4 className="font-bold text-saas-ink text-lg leading-tight mb-3">{phase.title}</h4>
              <p className="text-saas-body text-sm leading-relaxed">{phase.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INVESTIMENTO */}
      <section className="border-t border-white/[0.06] py-16">
        <SectionHeader
          idx="05"
          label="Investimento"
          headline="Proposta comercial"
          sub="Duas opções de formato para você escolher a que melhor se encaixa no seu momento atual."
        />

        <div className="grid md:grid-cols-2 gap-4">
          {/* Opção 1 */}
          <div className="rounded-2xl border border-white/[0.09] bg-saas-card p-8">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan block mb-3">Opção 1</span>
            <h3 className="font-extrabold text-saas-ink text-2xl leading-tight mb-4">Prestação de Serviço + Consultoria</h3>
            <div className="border-b border-white/[0.09] pb-6 mb-6">
              <span className="font-extrabold text-saas-ink text-[clamp(28px,4vw,40px)] leading-none block mb-1">Fee mensal fixo</span>
              <span className="text-saas-body text-sm">
                Valor a definir conforme escopo final + investimento mínimo em tráfego pago
              </span>
            </div>
            <ul className="flex flex-col gap-3">
              {option1Features.map((f) => (
                <li key={f} className="flex gap-2 text-saas-body text-sm leading-relaxed">
                  <span className="text-saas-cyan flex-shrink-0">→</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Opção 2 — destaque */}
          <div className="rounded-2xl border border-saas-violet/50 bg-saas-card p-8 relative overflow-hidden">
            <div className="absolute top-4 right-0 bg-gradient-to-r from-saas-cyan to-saas-violet px-6 py-1.5 rounded-l-full font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-saas-void">
              Recomendado
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan block mb-3">Opção 2</span>
            <h3 className="font-extrabold text-saas-ink text-2xl leading-tight mb-4">Coprodução Estratégica</h3>
            <div className="border-b border-white/[0.09] pb-6 mb-6">
              <span className="font-extrabold text-saas-ink text-[clamp(28px,4vw,40px)] leading-none block mb-1">% sobre vendas</span>
              <span className="text-saas-body text-sm">
                Sem fee fixo — entrada na porcentagem + investimento mínimo em tráfego pago
              </span>
            </div>
            <ul className="flex flex-col gap-3">
              {option2Features.map((f) => (
                <li key={f} className="flex gap-2 text-saas-body text-sm leading-relaxed">
                  <span className="text-saas-cyan flex-shrink-0">→</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-saas-muted text-sm italic mt-4">
          * Em ambas as opções, o investimento mínimo em tráfego pago será
          definido em conjunto. O seu compromisso principal é com a produção
          de conteúdo orgânico consistente.
        </p>
      </section>

      {/* CTA */}
      <section className="border-t border-white/[0.06] py-16 text-center">
        <SectionHeader
          idx="06"
          label="Próximo passo"
          headline="Vamos construir isso juntos?"
          sub="Se essa proposta fez sentido para você, o próximo passo é alinharmos os detalhes finais — valores, cronograma e escopo exato. Sem compromisso, sem pressão."
          align="center"
        />
        <a
          href="https://wa.me/5511999718595"
          target="_blank"
          rel="noopener noreferrer"
          className={SAAS_BTN_PRIMARY}
        >
          Falar com Rodrigo →
        </a>
      </section>
    </PropostaLayout>
  );
};

export default Proposta;
