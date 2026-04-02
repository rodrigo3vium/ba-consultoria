import { useEffect } from "react";

const gold = "#C6A84E";
const goldLight = "#D4BC72";
const goldGlow = "rgba(198,168,78,0.15)";
const dark = "#0A0A0A";
const darkCard = "#111111";
const darkBorder = "#1E1E1E";
const textPrimary = "#F0ECE2";
const textSecondary = "#9A9488";
const textMuted = "#5A564E";

const blue = "#6b9fff";
const blueGlow = "rgba(107,159,255,0.15)";
const green = "#5de4a5";
const greenGlow = "rgba(93,228,165,0.15)";
const amber = "#ffb347";
const amberGlow = "rgba(255,179,71,0.08)";

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
    gain: "IA lê conversas do WhatsApp e preenche CRM automaticamente. Gerente de vendas virtual: \"Fulano está há 45 dias sem contato — entre em contato agora.\"",
  },
  {
    num: "03",
    title: "Consulta de Avaliação",
    desc: "Médico prescreve protocolo padrão-ouro sem falar de valores. Modelo da Supreme: separar clínica de comercial.",
    pain: "1 médica = 50% do faturamento. 10 \"patinhos\" sem perfil comercial. Informações da consulta (queixas, inseguranças, contexto pessoal) morrem na sala.",
    gain: "Transcrição automática por IA. Extração de: queixas, gatilhos emocionais, oportunidades de cross-sell. Avaliação de aderência ao checklist de vendas por médico.",
  },
  {
    num: "04",
    title: "Fechamento Comercial",
    desc: "Time comercial apresenta valores e negocia. Paciente decide.",
    pain: "Closer entra sem contexto da consulta. Objeção \"vou ver com meu marido\" não é trabalhada com dados. Protocolo de 10 itens — abandono após o 3º.",
    gain: "Briefing automático para o closer: perfil emocional, queixas, protocolo prescrito. Paciente falou de queda de libido → closer já sabe acionar nutrologia hormonal.",
  },
];

const expandCards = [
  {
    num: "05",
    title: "Onboarding",
    desc: "Paciente inicia protocolo. Primeiras sessões e acompanhamento do progresso.",
    pain: "Sem régua de acompanhamento pós-fechamento. Paciente some depois da 3ª sessão. Ninguém acompanha proativamente a conclusão do protocolo.",
    gain: "Régua automática: \"Como foi sua 3ª sessão?\" / \"Faltam 2 sessões para completar seu protocolo.\" Alertas quando paciente falta ou atrasa agendamento.",
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
    pain: "Depende de pessoas pensarem — com 429 tarefas/dia. Gatilhos de cross entre dermatologia, nutrologia e estética cirúrgica simplesmente não acontecem.",
    gain: "IA detecta gatilhos na transcrição: \"queda de libido\" → aciona nutro hormonal. \"Emagreceu 15kg\" → aciona dermato para flacidez. Automático e contextualizado.",
  },
  {
    num: "08",
    title: "Advocacy e Indicação",
    desc: "Paciente satisfeita vira promotora. Ciclo recomeça com lead pré-qualificado.",
    pain: "Sem programa de indicação. Não sabem quais pacientes são promotoras. Indicações orgânicas sem rastreio — receita invisível.",
    gain: "NPS natural via análise de sentimento das interações. Ativação de promotoras no timing certo com incentivo personalizado. Lead indicado já entra rastreado.",
  },
];

const FollowUpClinicaSupreme = () => {
  useEffect(() => {
    const prev = {
      bg: document.body.style.backgroundColor,
      color: document.body.style.color,
      pt: document.body.style.paddingTop,
    };
    document.body.style.backgroundColor = dark;
    document.body.style.color = textPrimary;
    document.body.style.paddingTop = "0";
    return () => {
      document.body.style.backgroundColor = prev.bg;
      document.body.style.color = prev.color;
      document.body.style.paddingTop = prev.pt;
    };
  }, []);

  const renderCard = (card: typeof acquireCards[0], color: "blue" | "green") => {
    const accentColor = color === "blue" ? blue : green;
    const accentGlow = color === "blue" ? blueGlow : greenGlow;
    const gainClass = color === "blue" ? "gain-blue" : "gain-green";

    return (
      <div
        key={card.num}
        style={{
          background: darkCard,
          border: `1px solid ${darkBorder}`,
          borderRadius: "16px",
          padding: "28px",
          position: "relative",
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = `${accentColor}33`;
          e.currentTarget.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = darkBorder;
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        {/* Accent bar */}
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: 0,
            width: "3px",
            height: "32px",
            borderRadius: "0 4px 4px 0",
            background: accentColor,
            boxShadow: `0 0 20px ${accentGlow}`,
          }}
        />

        {/* Header */}
        <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "8px" }}>
          <span style={{ fontFamily: "'Geist Mono', 'SF Mono', monospace", fontSize: "10px", color: textMuted, minWidth: "20px" }}>{card.num}</span>
          <span style={{ fontSize: "16px", fontWeight: 600, letterSpacing: "-0.2px", color: textPrimary }}>{card.title}</span>
        </div>

        {/* Description */}
        <p style={{ fontSize: "13px", color: textSecondary, fontWeight: 300, marginBottom: "20px", paddingLeft: "30px", lineHeight: 1.65 }}>
          {card.desc}
        </p>

        {/* Pain insight */}
        <div
          style={{
            borderRadius: "10px",
            padding: "16px 18px",
            marginLeft: "30px",
            marginBottom: "10px",
            fontSize: "12.5px",
            lineHeight: 1.65,
            fontWeight: 400,
            background: amberGlow,
            border: "1px solid rgba(255,179,71,0.12)",
          }}
        >
          <div style={{ fontFamily: "'Geist Mono', 'SF Mono', monospace", fontSize: "9px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "6px", color: amber, display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ display: "inline-block", width: "4px", height: "4px", borderRadius: "50%", background: amber }} />
            Vazamento
          </div>
          <span style={{ color: textSecondary }}>{card.pain}</span>
        </div>

        {/* Gain insight */}
        <div
          style={{
            borderRadius: "10px",
            padding: "16px 18px",
            marginLeft: "30px",
            marginBottom: "10px",
            fontSize: "12.5px",
            lineHeight: 1.65,
            fontWeight: 400,
            background: color === "blue" ? blueGlow : greenGlow,
            border: `1px solid ${color === "blue" ? "rgba(107,159,255,0.12)" : "rgba(93,228,165,0.12)"}`,
          }}
        >
          <div style={{ fontFamily: "'Geist Mono', 'SF Mono', monospace", fontSize: "9px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "6px", color: accentColor, display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ display: "inline-block", width: "4px", height: "4px", borderRadius: "50%", background: accentColor }} />
            Ganho
          </div>
          <span style={{ color: textSecondary }}>{card.gain}</span>
        </div>
      </div>
    );
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600&family=DM+Sans:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500&display=swap');
        .csfu-page {
          font-family: 'DM Sans', -apple-system, sans-serif;
          background: ${dark};
          color: ${textPrimary};
          line-height: 1.6;
          overflow-x: hidden;
        }
        @keyframes csfu-fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes csfu-pulse {
          0%, 100% { opacity: 0.4; transform: translateX(-50%) scale(1); }
          50% { opacity: 0.7; transform: translateX(-50%) scale(1.1); }
        }
      `}</style>

      <div className="csfu-page">
        {/* ========== HEADER ========== */}
        <header style={{ textAlign: "center", padding: "80px 32px 64px", position: "relative" }}>
          <div style={{ position: "absolute", top: "-60px", left: "50%", transform: "translateX(-50%)", width: "400px", height: "400px", background: `radial-gradient(ellipse, ${goldGlow} 0%, transparent 70%)`, pointerEvents: "none", animation: "csfu-pulse 8s ease-in-out infinite" }} />

          <p style={{ fontFamily: "'Geist Mono', 'SF Mono', monospace", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: textMuted, marginBottom: "16px", position: "relative", animation: "csfu-fadeUp 0.8s ease 0.1s both" }}>
            Revenue Architecture · Modelo Bowtie
          </p>

          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, letterSpacing: "-1px", lineHeight: 1.15, marginBottom: "16px", position: "relative", animation: "csfu-fadeUp 0.8s ease 0.3s both" }}>
            De ponta a ponta, onde a<br />
            <span style={{ color: gold, fontStyle: "italic" }}>Supreme</span> ganha receita
          </h1>

          <p style={{ color: textSecondary, fontSize: "15px", fontWeight: 300, maxWidth: "520px", margin: "0 auto", lineHeight: 1.7, position: "relative", animation: "csfu-fadeUp 0.8s ease 0.5s both" }}>
            Mapeamento completo do ciclo de receita com pontos de automação e ganho em cada etapa — inspirado no Bowtie da Winning by Design.
          </p>
        </header>

        {/* ========== BOWTIE SVG ========== */}
        <div style={{ maxWidth: "1200px", margin: "0 auto 72px", padding: "0 32px" }} className="csfu-bowtie">
          <svg viewBox="0 0 1200 260" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }}>
            <defs>
              <linearGradient id="blueGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#6b9fff" stopOpacity={0.2} />
                <stop offset="100%" stopColor="#6b9fff" stopOpacity={0.02} />
              </linearGradient>
              <linearGradient id="greenGrad" x1="1" y1="0" x2="0" y2="0">
                <stop offset="0%" stopColor="#5de4a5" stopOpacity={0.2} />
                <stop offset="100%" stopColor="#5de4a5" stopOpacity={0.02} />
              </linearGradient>
              <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor={gold} stopOpacity={0.18} />
                <stop offset="100%" stopColor={gold} stopOpacity={0} />
              </radialGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Left funnel */}
            <path d="M 30,25 L 555,115 L 555,145 L 30,235 Z" fill="url(#blueGrad)" stroke="rgba(107,159,255,0.18)" strokeWidth="0.5" />
            <line x1="160" y1="45" x2="160" y2="215" stroke="rgba(107,159,255,0.08)" strokeWidth="0.5" strokeDasharray="2,4" />
            <line x1="290" y1="65" x2="290" y2="195" stroke="rgba(107,159,255,0.08)" strokeWidth="0.5" strokeDasharray="2,4" />
            <line x1="420" y1="85" x2="420" y2="175" stroke="rgba(107,159,255,0.08)" strokeWidth="0.5" strokeDasharray="2,4" />

            {/* Right funnel */}
            <path d="M 1170,25 L 645,115 L 645,145 L 1170,235 Z" fill="url(#greenGrad)" stroke="rgba(93,228,165,0.18)" strokeWidth="0.5" />
            <line x1="780" y1="85" x2="780" y2="175" stroke="rgba(93,228,165,0.08)" strokeWidth="0.5" strokeDasharray="2,4" />
            <line x1="910" y1="65" x2="910" y2="195" stroke="rgba(93,228,165,0.08)" strokeWidth="0.5" strokeDasharray="2,4" />
            <line x1="1040" y1="45" x2="1040" y2="215" stroke="rgba(93,228,165,0.08)" strokeWidth="0.5" strokeDasharray="2,4" />

            {/* Center glow */}
            <circle cx="600" cy="130" r="90" fill="url(#centerGlow)" />
            <circle cx="600" cy="130" r="32" fill={`${gold}10`} stroke={`${gold}4D`} strokeWidth="1" filter="url(#glow)" />
            <text x="600" y="125" textAnchor="middle" fill={gold} fontFamily="'Playfair Display', serif" fontSize="11" fontStyle="italic">Primeiro</text>
            <text x="600" y="140" textAnchor="middle" fill={gold} fontFamily="'Playfair Display', serif" fontSize="11" fontStyle="italic">Valor</text>

            {/* Stage labels — Left */}
            <text x="85" y="134" textAnchor="middle" fill="rgba(107,159,255,0.6)" fontFamily="'Geist Mono', monospace" fontSize="8" letterSpacing="1.5">AWARENESS</text>
            <text x="220" y="134" textAnchor="middle" fill="rgba(107,159,255,0.6)" fontFamily="'Geist Mono', monospace" fontSize="8" letterSpacing="1.5">CAPTAÇÃO</text>
            <text x="350" y="134" textAnchor="middle" fill="rgba(107,159,255,0.6)" fontFamily="'Geist Mono', monospace" fontSize="8" letterSpacing="1.5">CONSULTA</text>
            <text x="485" y="134" textAnchor="middle" fill="rgba(107,159,255,0.6)" fontFamily="'Geist Mono', monospace" fontSize="8" letterSpacing="1.5">FECHAMENTO</text>

            {/* Stage labels — Right */}
            <text x="715" y="134" textAnchor="middle" fill="rgba(93,228,165,0.6)" fontFamily="'Geist Mono', monospace" fontSize="8" letterSpacing="1.5">ONBOARD</text>
            <text x="845" y="134" textAnchor="middle" fill="rgba(93,228,165,0.6)" fontFamily="'Geist Mono', monospace" fontSize="8" letterSpacing="1.5">RETENÇÃO</text>
            <text x="975" y="134" textAnchor="middle" fill="rgba(93,228,165,0.6)" fontFamily="'Geist Mono', monospace" fontSize="8" letterSpacing="1.5">EXPANSÃO</text>
            <text x="1105" y="134" textAnchor="middle" fill="rgba(93,228,165,0.6)" fontFamily="'Geist Mono', monospace" fontSize="8" letterSpacing="1.5">ADVOCACY</text>

            {/* Dots */}
            <circle cx="85" cy="148" r="2.5" fill="#6b9fff" opacity="0.5" />
            <circle cx="220" cy="148" r="2.5" fill="#6b9fff" opacity="0.5" />
            <circle cx="350" cy="148" r="2.5" fill="#6b9fff" opacity="0.5" />
            <circle cx="485" cy="148" r="2.5" fill="#6b9fff" opacity="0.5" />
            <circle cx="715" cy="148" r="2.5" fill="#5de4a5" opacity="0.5" />
            <circle cx="845" cy="148" r="2.5" fill="#5de4a5" opacity="0.5" />
            <circle cx="975" cy="148" r="2.5" fill="#5de4a5" opacity="0.5" />
            <circle cx="1105" cy="148" r="2.5" fill="#5de4a5" opacity="0.5" />
          </svg>
        </div>

        {/* ========== SIDE LABELS ========== */}
        <div style={{ maxWidth: "1200px", margin: "0 auto 48px", padding: "0 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px" }} className="csfu-sides">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: blue, boxShadow: `0 0 12px ${blueGlow}` }} />
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 400 }}>Aquisição</h2>
              </div>
              <p style={{ color: textMuted, fontSize: "13px", fontWeight: 300, paddingLeft: "20px" }}>Do desconhecido ao primeiro protocolo fechado</p>
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: green, boxShadow: `0 0 12px ${greenGlow}` }} />
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 400 }}>Expansão</h2>
              </div>
              <p style={{ color: textMuted, fontSize: "13px", fontWeight: 300, paddingLeft: "20px" }}>Do primeiro valor à receita recorrente e indicação</p>
            </div>
          </div>
        </div>

        {/* ========== ACQUIRE STAGES ========== */}
        <div style={{ maxWidth: "1200px", margin: "0 auto 56px", padding: "0 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }} className="csfu-stages">
            {acquireCards.map((card) => renderCard(card, "blue"))}
          </div>
        </div>

        {/* ========== CENTER NEXUS ========== */}
        <div
          style={{
            position: "relative",
            margin: "-8px auto 56px",
            maxWidth: "700px",
            background: goldGlow,
            border: `1px solid ${gold}26`,
            borderRadius: "20px",
            padding: "40px",
            textAlign: "center",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", top: "-80px", left: "50%", transform: "translateX(-50%)", width: "300px", height: "300px", background: `radial-gradient(ellipse, ${goldGlow}, transparent 70%)`, pointerEvents: "none" }} />

          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "24px", fontWeight: 400, marginBottom: "10px", position: "relative" }}>
            O ponto de <span style={{ color: gold, fontStyle: "italic" }}>inflexão</span>
          </h3>
          <p style={{ color: textSecondary, fontSize: "14px", fontWeight: 300, maxWidth: "480px", margin: "0 auto 28px", lineHeight: 1.7, position: "relative" }}>
            Paciente completa o primeiro procedimento e percebe valor. Tudo à direita do Bowtie depende desse momento — e da base de 30 mil pacientes que já passou por ele.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "48px", position: "relative", flexWrap: "wrap" }} className="csfu-kpis">
            {[
              { value: "30k+", label: "Pacientes na base" },
              { value: "1–2%", label: "Resgate = receita extra" },
              { value: "3", label: "Especialidades cruzáveis" },
            ].map((kpi) => (
              <div key={kpi.label}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "36px", color: gold, lineHeight: 1 }}>{kpi.value}</div>
                <div style={{ fontFamily: "'Geist Mono', 'SF Mono', monospace", fontSize: "9px", letterSpacing: "1.5px", textTransform: "uppercase", color: textMuted, marginTop: "6px" }}>{kpi.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ========== EXPAND STAGES ========== */}
        <div style={{ maxWidth: "1200px", margin: "0 auto 56px", padding: "0 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }} className="csfu-stages">
            {expandCards.map((card) => renderCard(card, "green"))}
          </div>
        </div>

        {/* DIVIDER */}
        <div style={{ width: "60px", height: "1px", background: gold, margin: "0 auto" }} />

        {/* ========== FOOTER ========== */}
        <div style={{ textAlign: "center", padding: "48px 24px", borderTop: `1px solid ${darkBorder}`, marginTop: "48px" }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", color: gold, marginBottom: "8px" }}>BA Consultoria</div>
          <p style={{ fontSize: "0.75rem", color: textMuted, letterSpacing: "1px" }}>
            Preparado por Rodrigo Albuquerque · Modelo Bowtie adaptado da Winning by Design · Abril 2026
          </p>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 768px) {
          .csfu-sides { grid-template-columns: 1fr !important; gap: 24px !important; }
          .csfu-stages { grid-template-columns: 1fr !important; }
          .csfu-kpis { gap: 28px !important; }
          .csfu-bowtie { margin-bottom: 48px !important; padding: 0 20px !important; }
        }
      `}</style>
    </>
  );
};

export default FollowUpClinicaSupreme;
