import { useEffect } from "react";
import { tracker } from "@/lib/tracking";
import PropostaLayout from "@/components/pb/PropostaLayout";
import { Accent, Eyebrow, SAAS_BTN_PRIMARY } from "@/components/saas/ui";

const acquireCards = [
  {
    num: "01",
    title: "Awareness",
    desc: "Paciente descobre a Supreme via Instagram dos diretores, indicação ou busca orgânica.",
    pain: "Sem rastreamento de origem. Diretores ativos nas redes sociais mas sem UTMs — impossível saber qual canal traz o paciente de maior LTV.",
    gain: "UTMs em todos os links + atribuição automática de origem no CRM. Visibilidade real: qual canal alimenta qual especialidade.",
  },
  {
    num: "02",
    title: "Captação",
    desc: "Lead chega via WhatsApp ou DM. Secretária agenda avaliação.",
    pain: "Secretárias não preenchem nem o nome do médico. Gestora comercial com 429 tarefas/dia. Sprint Hub recém-adotado, cultura de CRM ainda frágil.",
    gain: 'IA lê conversas do WhatsApp e preenche CRM automaticamente. Gerente de vendas virtual: "Fulano está há 45 dias sem contato — entre em contato agora."',
  },
  {
    num: "03",
    title: "Consulta de Avaliação",
    desc: "Médico prescreve protocolo padrão-ouro sem falar de valores. Modelo da Supreme: separar clínica de comercial.",
    pain: "1 médica = 50% do faturamento. 10 patinhos sem perfil comercial. Informações da consulta (queixas, inseguranças, contexto pessoal) morrem na sala.",
    gain: "Transcrição automática por IA. Extração de: queixas, gatilhos emocionais, oportunidades de cross-sell. Avaliação de aderência ao checklist de vendas por médico.",
  },
  {
    num: "04",
    title: "Fechamento Comercial",
    desc: "Time comercial apresenta valores e negocia. Paciente decide.",
    pain: 'Closer entra sem contexto da consulta. Objeção "vou ver com meu marido" não é trabalhada com dados. Protocolo de 10 itens — abandono após o 3º.',
    gain: "Briefing automático para o closer: perfil emocional, queixas, protocolo prescrito. Paciente falou de queda de libido → closer já sabe acionar nutrologia hormonal.",
  },
];

const expandCards = [
  {
    num: "05",
    title: "Onboarding",
    desc: "Paciente inicia protocolo. Primeiras sessões e acompanhamento do progresso.",
    pain: "Sem régua de acompanhamento pós-fechamento. Paciente some depois da 3ª sessão. Ninguém acompanha proativamente a conclusão do protocolo.",
    gain: 'Régua automática: "Como foi sua 3ª sessão?" / "Faltam 2 sessões para completar seu protocolo." Alertas quando paciente falta ou atrasa agendamento.',
  },
  {
    num: "06",
    title: "Retenção e Resgate",
    desc: "Paciente completa ou abandona protocolo. Momento crítico de receita recorrente.",
    pain: "30 mil pacientes sem resgate ativo. Gestora comercial cita como a maior dor em toda reunião de resultado. Copia-cola genérico porque não dá tempo de pensar.",
    gain: "Follow-up individualizado: transcrição + histórico WhatsApp + dados CRM. Cada mensagem de resgate reflete o contexto daquela paciente — personalização em escala.",
  },
  {
    num: "07",
    title: "Expansão e Cross-sell",
    desc: "Paciente de uma especialidade é direcionada para outra. Derma → Nutro → Cirurgia Plástica.",
    pain: 'Depende de pessoas pensarem — com 429 tarefas/dia. Gatilhos de cross entre dermatologia, nutrologia e estética cirúrgica simplesmente não acontecem.',
    gain: 'IA detecta gatilhos na transcrição: "queda de libido" → aciona nutro hormonal. "Emagreceu 15kg" → aciona dermato para flacidez. Automático e contextualizado.',
  },
  {
    num: "08",
    title: "Advocacy e Indicação",
    desc: "Paciente satisfeita vira promotora. Ciclo recomeça com lead pré-qualificado.",
    pain: "Sem programa de indicação. Não sabem quais pacientes são promotoras. Indicações orgânicas sem rastreio — receita invisível.",
    gain: "NPS natural via análise de sentimento das interações. Ativação de promotoras no timing certo com incentivo personalizado. Lead indicado já entra rastreado.",
  },
];

const StageCard = ({ card }: { card: typeof acquireCards[0] }) => (
  <div className="rounded-2xl border border-white/[0.09] bg-saas-card p-7">
    <div className="flex items-baseline gap-3 mb-2">
      <span className="font-mono text-[10px] text-saas-faint">{card.num}</span>
      <span className="font-extrabold text-[20px] text-saas-ink leading-none tracking-tight">{card.title}</span>
    </div>
    <p className="text-saas-body text-[13px] leading-relaxed mb-5 pl-8">
      {card.desc}
    </p>

    {/* Vazamento */}
    <div className="rounded-xl border border-white/[0.09] bg-white/[0.02] p-4 pl-5 mb-3">
      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-saas-faint mb-2 flex items-center gap-2">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-saas-faint" />
        Vazamento
      </p>
      <p className="text-saas-muted text-[12.5px] leading-relaxed">{card.pain}</p>
    </div>

    {/* Ganho */}
    <div className="rounded-xl border border-saas-cyan/20 bg-white/[0.02] p-4 pl-5">
      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-saas-cyan mb-2 flex items-center gap-2">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet" />
        Ganho
      </p>
      <p className="text-saas-muted text-[12.5px] leading-relaxed">{card.gain}</p>
    </div>
  </div>
);

const FollowUpClinicaSupreme = () => {
  useEffect(() => {
    tracker.page("Follow-up Clínica Supreme");
  }, []);

  return (
    <PropostaLayout cliente="Clínica Supreme" projeto="Follow-up Comercial">

      {/* ── INTRO ── */}
      <div className="border-t border-white/[0.06] py-16 space-y-6">
        <Eyebrow>Revenue Architecture · Modelo Bowtie</Eyebrow>
        <h2 className="font-extrabold text-saas-ink text-[clamp(26px,3.4vw,44px)] leading-[1.12] tracking-tight">
          De ponta a ponta, onde a Supreme <Accent>ganha receita</Accent>
        </h2>
        <p className="text-saas-body text-[17px] leading-relaxed max-w-[640px]">
          Mapeamento completo do ciclo de receita com pontos de automação e ganho em cada etapa — inspirado no Bowtie da Winning by Design.
        </p>
      </div>

      {/* ── BOWTIE SVG ── */}
      <div className="border-t border-white/[0.06] py-12">
        <svg
          viewBox="0 0 1200 260"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          aria-label="Diagrama Bowtie do ciclo de receita da Supreme"
        >
          <defs>
            <linearGradient id="blueGradSup" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#20DDEB" stopOpacity={0.18} />
              <stop offset="100%" stopColor="#20DDEB" stopOpacity={0.02} />
            </linearGradient>
            <linearGradient id="greenGradSup" x1="1" y1="0" x2="0" y2="0">
              <stop offset="0%" stopColor="#8B7CF6" stopOpacity={0.18} />
              <stop offset="100%" stopColor="#8B7CF6" stopOpacity={0.02} />
            </linearGradient>
            <radialGradient id="centerGlowSup" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#20DDEB" stopOpacity={0.12} />
              <stop offset="100%" stopColor="#20DDEB" stopOpacity={0} />
            </radialGradient>
            <filter id="glowSup">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Left funnel */}
          <path d="M 30,25 L 555,115 L 555,145 L 30,235 Z" fill="url(#blueGradSup)" stroke="rgba(32,221,235,0.18)" strokeWidth="0.5" />
          <line x1="160" y1="45" x2="160" y2="215" stroke="rgba(32,221,235,0.08)" strokeWidth="0.5" strokeDasharray="2,4" />
          <line x1="290" y1="65" x2="290" y2="195" stroke="rgba(32,221,235,0.08)" strokeWidth="0.5" strokeDasharray="2,4" />
          <line x1="420" y1="85" x2="420" y2="175" stroke="rgba(32,221,235,0.08)" strokeWidth="0.5" strokeDasharray="2,4" />

          {/* Right funnel */}
          <path d="M 1170,25 L 645,115 L 645,145 L 1170,235 Z" fill="url(#greenGradSup)" stroke="rgba(139,124,246,0.18)" strokeWidth="0.5" />
          <line x1="780" y1="85" x2="780" y2="175" stroke="rgba(139,124,246,0.08)" strokeWidth="0.5" strokeDasharray="2,4" />
          <line x1="910" y1="65" x2="910" y2="195" stroke="rgba(139,124,246,0.08)" strokeWidth="0.5" strokeDasharray="2,4" />
          <line x1="1040" y1="45" x2="1040" y2="215" stroke="rgba(139,124,246,0.08)" strokeWidth="0.5" strokeDasharray="2,4" />

          {/* Center glow */}
          <circle cx="600" cy="130" r="90" fill="url(#centerGlowSup)" />
          <circle cx="600" cy="130" r="32" fill="rgba(32,221,235,0.06)" stroke="rgba(32,221,235,0.3)" strokeWidth="1" filter="url(#glowSup)" />
          <text x="600" y="125" textAnchor="middle" fill="#20DDEB" fontFamily="'IBM Plex Mono', monospace" fontSize="9" letterSpacing="1">PRIMEIRO</text>
          <text x="600" y="140" textAnchor="middle" fill="#20DDEB" fontFamily="'IBM Plex Mono', monospace" fontSize="9" letterSpacing="1">VALOR</text>

          {/* Stage labels — Left */}
          <text x="85" y="134" textAnchor="middle" fill="rgba(32,221,235,0.55)" fontFamily="'IBM Plex Mono', monospace" fontSize="8" letterSpacing="1.5">AWARENESS</text>
          <text x="220" y="134" textAnchor="middle" fill="rgba(32,221,235,0.55)" fontFamily="'IBM Plex Mono', monospace" fontSize="8" letterSpacing="1.5">CAPTAÇÃO</text>
          <text x="350" y="134" textAnchor="middle" fill="rgba(32,221,235,0.55)" fontFamily="'IBM Plex Mono', monospace" fontSize="8" letterSpacing="1.5">CONSULTA</text>
          <text x="485" y="134" textAnchor="middle" fill="rgba(32,221,235,0.55)" fontFamily="'IBM Plex Mono', monospace" fontSize="8" letterSpacing="1.5">FECHAMENTO</text>

          {/* Stage labels — Right */}
          <text x="715" y="134" textAnchor="middle" fill="rgba(139,124,246,0.6)" fontFamily="'IBM Plex Mono', monospace" fontSize="8" letterSpacing="1.5">ONBOARD</text>
          <text x="845" y="134" textAnchor="middle" fill="rgba(139,124,246,0.6)" fontFamily="'IBM Plex Mono', monospace" fontSize="8" letterSpacing="1.5">RETENÇÃO</text>
          <text x="975" y="134" textAnchor="middle" fill="rgba(139,124,246,0.6)" fontFamily="'IBM Plex Mono', monospace" fontSize="8" letterSpacing="1.5">EXPANSÃO</text>
          <text x="1105" y="134" textAnchor="middle" fill="rgba(139,124,246,0.6)" fontFamily="'IBM Plex Mono', monospace" fontSize="8" letterSpacing="1.5">ADVOCACY</text>

          {/* Dots */}
          <circle cx="85" cy="148" r="2.5" fill="#20DDEB" opacity="0.5" />
          <circle cx="220" cy="148" r="2.5" fill="#20DDEB" opacity="0.5" />
          <circle cx="350" cy="148" r="2.5" fill="#20DDEB" opacity="0.5" />
          <circle cx="485" cy="148" r="2.5" fill="#20DDEB" opacity="0.5" />
          <circle cx="715" cy="148" r="2.5" fill="#8B7CF6" opacity="0.5" />
          <circle cx="845" cy="148" r="2.5" fill="#8B7CF6" opacity="0.5" />
          <circle cx="975" cy="148" r="2.5" fill="#8B7CF6" opacity="0.5" />
          <circle cx="1105" cy="148" r="2.5" fill="#8B7CF6" opacity="0.5" />
        </svg>
      </div>

      {/* ── LABELS DE LADO ── */}
      <div className="border-t border-white/[0.06] py-8">
        <div className="grid grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-block w-2 h-2 rounded-full bg-saas-cyan" />
              <h3 className="font-extrabold text-[22px] text-saas-ink leading-none tracking-tight">Aquisição</h3>
            </div>
            <p className="text-saas-muted text-[13px] leading-relaxed pl-5">Do desconhecido ao primeiro protocolo fechado</p>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-block w-2 h-2 rounded-full bg-saas-violet" />
              <h3 className="font-extrabold text-[22px] text-saas-ink leading-none tracking-tight">Expansão</h3>
            </div>
            <p className="text-saas-muted text-[13px] leading-relaxed pl-5">Do primeiro valor à receita recorrente e indicação</p>
          </div>
        </div>
      </div>

      {/* ── ETAPAS DE AQUISIÇÃO ── */}
      <div className="border-t border-white/[0.06] py-16 space-y-8">
        <Eyebrow>Etapas · Aquisição</Eyebrow>
        <div className="grid grid-cols-2 gap-5">
          {acquireCards.map((card) => (
            <StageCard key={card.num} card={card} />
          ))}
        </div>
      </div>

      {/* ── NEXUS CENTRAL ── */}
      <div className="border-t border-white/[0.06] py-16">
        <div className="rounded-2xl border border-white/[0.09] bg-saas-card p-10 text-center max-w-[700px] mx-auto">
          <h3 className="font-extrabold text-[clamp(26px,3vw,34px)] text-saas-ink leading-[1.1] tracking-tight mb-4">
            O ponto de <Accent>inflexão</Accent>
          </h3>
          <p className="text-saas-body text-[14px] leading-relaxed max-w-[480px] mx-auto mb-8">
            Paciente completa o primeiro procedimento e percebe valor. Tudo à direita do Bowtie depende desse momento — e da base de 30 mil pacientes que já passou por ele.
          </p>
          <div className="flex justify-center gap-12 flex-wrap">
            {[
              { value: "30k+", label: "Pacientes na base" },
              { value: "1–2%", label: "Resgate = receita extra" },
              { value: "3", label: "Especialidades cruzáveis" },
            ].map((kpi) => (
              <div key={kpi.label} className="text-center">
                <p className="text-[clamp(40px,4vw,56px)] font-extrabold leading-none bg-gradient-to-r from-saas-cyan to-saas-violet bg-clip-text text-transparent">{kpi.value}</p>
                <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-saas-faint mt-2">{kpi.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── ETAPAS DE EXPANSÃO ── */}
      <div className="border-t border-white/[0.06] py-16 space-y-8">
        <Eyebrow>Etapas · Expansão</Eyebrow>
        <div className="grid grid-cols-2 gap-5">
          {expandCards.map((card) => (
            <StageCard key={card.num} card={card} />
          ))}
        </div>
      </div>

      {/* ── CTA FINAL ── */}
      <div className="border-t border-white/[0.06] py-16 space-y-8">
        <Eyebrow>Próximo passo</Eyebrow>
        <h2 className="font-extrabold text-saas-ink text-[clamp(32px,5.5vw,64px)] leading-[1.05] tracking-tight">
          Vamos ativar<br />a base<Accent>.</Accent>
        </h2>
        <p className="text-saas-body text-[18px] leading-relaxed max-w-[680px]">
          30 mil pacientes e um ciclo de receita mapeado. O que falta é a camada de inteligência que lê, prioriza e age — em cada etapa, todos os dias.
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-saas-faint">
          Preparado por Rodrigo Albuquerque · Modelo Bowtie adaptado da Winning by Design · Abril 2026
        </p>
        <div className="mt-8">
          <a
            href="https://wa.me/5511999718595"
            target="_blank"
            rel="noopener noreferrer"
            className={SAAS_BTN_PRIMARY}
            onClick={() => tracker.track("cta_click", { product: "clinica-supreme", location: "followup_cta" })}
          >
            Falar no WhatsApp <span aria-hidden>→</span>
          </a>
        </div>
      </div>

    </PropostaLayout>
  );
};

export default FollowUpClinicaSupreme;
