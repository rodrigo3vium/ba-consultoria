import { useState, useRef, useCallback, useEffect } from "react";

const VOID = "#060A12";
const SURFACE = "#0C1220";
const HUD_DARK = "#111A2E";
const ARC = "#38BDF8";
const ARC_BRIGHT = "#7DD3FC";
const STARK_GOLD = "#F59E0B";
const IVORY = "#F0F6FF";
const TEXT_COLOR = "#C8D6E5";
const DIM = "#5A7089";

const BORDER_NORMAL = "rgba(56,189,248,0.08)";
const BORDER_HOVER = "rgba(56,189,248,0.18)";

const FONT_DISPLAY = "'Chakra Petch', sans-serif";
const FONT_MONO = "'IBM Plex Mono', monospace";
const FONT_BODY = "'Exo 2', sans-serif";

const beliefs = [
  {
    num: "01",
    icon: "⚡",
    title: "IA não é ferramenta. É time.",
    text: "Quem usa IA como assistente vai ter resultados de assistente. Quem arquiteta IA como time vai ter resultados de time. A distinção é fundamental e define como você aprende, implementa e escala.",
  },
  {
    num: "02",
    icon: "🎯",
    title: "Entregáveis primeiro. Teoria depois.",
    text: "Cada módulo termina com algo que você aplica no seu negócio antes de avançar. Não existe \"terminar o curso e depois implementar.\" A implementação é o curso.",
  },
  {
    num: "03",
    icon: "🏗️",
    title: "Sem código. Mas com arquitetura.",
    text: "Você não precisa programar para construir sistemas de IA. Precisa pensar como arquiteto: entender entradas, saídas, fluxos e objetivos. Isso é ensinável para qualquer pessoa que opera um negócio.",
  },
  {
    num: "04",
    icon: "🚀",
    title: "Velocidade vence perfeição.",
    text: "Um sistema imperfeito rodando hoje vale mais do que um sistema perfeito que nunca saiu do papel. Você vai construir, testar, ajustar. A iteração é parte do método, não um sinal de que algo deu errado.",
  },
  {
    num: "05",
    icon: "⏳",
    title: "O mercado não vai te esperar.",
    text: "Uma minoria silenciosa já está operando com sistemas de IA rodando 24h. Eles não estão esperando o mercado adotar, eles estão criando a vantagem enquanto a maioria debate se vale a pena.",
  },
  {
    num: "06",
    icon: "🤝",
    title: "Comunidade acelera aprendizado.",
    text: "Sistemas, prompts e resultados reais compartilhados entre pessoas que operam negócios. Isso vale mais do que qualquer aula gravada. A Revolução é uma comunidade de praticantes, não um grupo de estudantes.",
  },
];

const alphaItems = [
  {
    num: "001",
    title: "Módulos do Zero ao Sistema Completo",
    text: "Cada módulo ensina um componente do sistema de IA para o seu negócio. Cada módulo termina com um entregável concreto. Você não avança sem aplicar. E aplicando, você já está operando.",
  },
  {
    num: "002",
    title: "Comunidade de Praticantes",
    text: "Usuários ativos trocando sistemas reais, prompts que funcionam e resultados verificáveis. Não é grupo de Telegram. É um ambiente onde a prática é o standard, não a exceção.",
  },
  {
    num: "003",
    title: "Chatbot IA Treinado no Método",
    text: "Um assistente especializado disponível 24 horas, treinado no método da Revolução. Você não precisa esperar pela próxima aula para tirar uma dúvida ou validar uma arquitetura.",
  },
  {
    num: "004",
    title: "Biblioteca de Prompts por Função",
    text: "Prompts organizados por função de negócio: vendas, atendimento, gestão, conteúdo, análise. Não uma lista de curiosidades, mas um acervo de sistemas que você instala e opera.",
  },
  {
    num: "005",
    title: "Lives com Especialistas",
    text: "Acesso a sessões ao vivo com quem já construiu e operou sistemas de IA em negócios reais. Contexto que nenhuma aula gravada consegue reproduzir.",
  },
  {
    num: "006",
    title: "Atualizações Contínuas",
    text: "O campo de IA muda toda semana. A Revolução evolui com ele. Novas ferramentas, novos módulos, novos sistemas, inclusos sem custo adicional.",
  },
];

const SEGMENT_ICONS = ["⚡", "🎯", "🏗", "🚀", "⏳", "🤝"];
const SEGMENT_LABELS = ["TIME", "PRÁTICA", "ARQUIT.", "VELOC.", "MERCADO", "COMUN."];

// Generate segment paths for a hexagonal layout
function segmentPath(index: number, innerR: number, outerR: number, cx: number, cy: number): string {
  const startAngle = (index * 60 - 90) * (Math.PI / 180);
  const endAngle = ((index + 1) * 60 - 90) * (Math.PI / 180);
  const gap = 0.02; // small gap between segments

  const x1 = cx + innerR * Math.cos(startAngle + gap);
  const y1 = cy + innerR * Math.sin(startAngle + gap);
  const x2 = cx + outerR * Math.cos(startAngle + gap);
  const y2 = cy + outerR * Math.sin(startAngle + gap);
  const x3 = cx + outerR * Math.cos(endAngle - gap);
  const y3 = cy + outerR * Math.sin(endAngle - gap);
  const x4 = cx + innerR * Math.cos(endAngle - gap);
  const y4 = cy + innerR * Math.sin(endAngle - gap);

  return `M ${x1} ${y1} L ${x2} ${y2} A ${outerR} ${outerR} 0 0 1 ${x3} ${y3} L ${x4} ${y4} A ${innerR} ${innerR} 0 0 0 ${x1} ${y1} Z`;
}

function segmentMidpoint(index: number, r: number, cx: number, cy: number) {
  const midAngle = ((index * 60 + 30) - 90) * (Math.PI / 180);
  return { x: cx + r * Math.cos(midAngle), y: cy + r * Math.sin(midAngle) };
}

const ReactorSection = () => {
  const [activeSegment, setActiveSegment] = useState<number | null>(null);
  const [rippleKey, setRippleKey] = useState(0);
  const [showHint, setShowHint] = useState(true);
  const svgRef = useRef<SVGSVGElement>(null);

  const cx = 250, cy = 250;
  const innerR = 90, outerR = 195;

  const handleSegmentClick = useCallback((index: number) => {
    setActiveSegment(index);
    setRippleKey(k => k + 1);
    setShowHint(false);
  }, []);

  // Generate particles
  const particles = Array.from({ length: 12 }, (_, i) => ({
    left: `${10 + Math.random() * 80}%`,
    bottom: "0%",
    delay: `${i * 0.7}s`,
    size: 1 + Math.random() * 2,
    opacity: 0.2 + Math.random() * 0.3,
  }));

  return (
    <>
      <style>{`
        @keyframes reactorSpinCW { to { transform: rotate(360deg) } }
        @keyframes reactorSpinCCW { to { transform: rotate(-360deg) } }
        @keyframes reactorPulse { 0%,100% { opacity: .55 } 50% { opacity: 1 } }
        @keyframes reactorPulseSlow { 0%,100% { opacity: .3 } 50% { opacity: .6 } }
        @keyframes reactorDashSpin { to { stroke-dashoffset: -100 } }
        @keyframes reactorRipple {
          0% { r: 45; opacity: .5; stroke-width: 2 }
          100% { r: 180; opacity: 0; stroke-width: .5 }
        }
        @keyframes reactorFloat {
          0% { opacity: 0; transform: translateY(0) scale(1) }
          8% { opacity: .5 }
          85% { opacity: .05 }
          100% { opacity: 0; transform: translateY(-400px) scale(.15) }
        }
        @keyframes reactorHintPulse { 0%,100% { opacity: .45 } 50% { opacity: .8 } }
        .reactor-ring-1 { animation: reactorSpinCW 50s linear infinite; transform-origin: 250px 250px }
        .reactor-ring-2 { animation: reactorSpinCCW 35s linear infinite; transform-origin: 250px 250px }
        .reactor-ring-3 { animation: reactorSpinCW 25s linear infinite; transform-origin: 250px 250px }
        .reactor-ring-4 { animation: reactorSpinCCW 60s linear infinite; transform-origin: 250px 250px }
        .reactor-core-pulse { animation: reactorPulse 3s ease-in-out infinite }
        .reactor-energy-ring { animation: reactorPulseSlow 4s ease-in-out infinite }
        .reactor-dash-spin { animation: reactorDashSpin 8s linear infinite }
        .reactor-ripple-anim { animation: reactorRipple 1s ease-out forwards }
        .reactor-particle { animation: reactorFloat 8s linear infinite }
        .reactor-hint { animation: reactorHintPulse 3.5s ease-in-out infinite }
      `}</style>

      {/* ── SEÇÃO 3 — O MECANISMO (Reactor) ── */}
      <section
        className="relative overflow-hidden flex flex-col items-center px-5"
        style={{
          backgroundColor: VOID,
          paddingTop: "60px",
          paddingBottom: "80px",
          minHeight: "100vh",
        }}
      >
        {/* Grid background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              linear-gradient(rgba(79,195,247,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(79,195,247,0.02) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 50% 42%, rgba(79,195,247,0.09) 0%, transparent 55%)",
          }}
        />
        {/* Scanlines */}
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(79,195,247,0.006) 2px, rgba(79,195,247,0.006) 4px)",
          }}
        />

        {/* Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {particles.map((p, i) => (
            <div
              key={i}
              className="absolute rounded-full reactor-particle"
              style={{
                left: p.left,
                bottom: p.bottom,
                width: `${p.size}px`,
                height: `${p.size}px`,
                background: ARC,
                animationDelay: p.delay,
                opacity: 0,
              }}
            />
          ))}
        </div>

        {/* HUD Corners */}
        <div className="hidden md:block absolute top-5 left-5 w-[60px] h-[60px] border-t-2 border-l-2 pointer-events-none z-[2]" style={{ borderColor: "rgba(79,195,247,0.08)" }} />
        <div className="hidden md:block absolute top-5 right-5 w-[60px] h-[60px] border-t-2 border-r-2 pointer-events-none z-[2]" style={{ borderColor: "rgba(79,195,247,0.08)" }} />
        <div className="hidden md:block absolute bottom-5 left-5 w-[60px] h-[60px] border-b-2 border-l-2 pointer-events-none z-[2]" style={{ borderColor: "rgba(79,195,247,0.08)" }} />
        <div className="hidden md:block absolute bottom-5 right-5 w-[60px] h-[60px] border-b-2 border-r-2 pointer-events-none z-[2]" style={{ borderColor: "rgba(79,195,247,0.08)" }} />

        {/* Power readout */}
        <div
          className="hidden md:block absolute bottom-[30px] right-[30px] text-right z-[2] pointer-events-none"
          style={{ fontFamily: FONT_MONO, fontSize: ".6rem", color: ARC, opacity: 0.25, lineHeight: 1.6 }}
        >
          SYS: {activeSegment !== null ? "ACTIVE" : "STANDBY"}<br />
          PWR: {activeSegment !== null ? "4.72" : "0.00"} GW<br />
          STARK OS v4.7
        </div>

        {/* Header */}
        <div className="text-center mb-11 relative z-[2]">
          <p
            className="text-xs uppercase tracking-[5px] mb-3"
            style={{ fontFamily: FONT_MONO, color: ARC, opacity: 0.6 }}
          >
            03 — O Mecanismo
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: FONT_DISPLAY, color: "#fff", lineHeight: 1.15 }}
          >
            A{" "}
            <span
              style={{
                background: `linear-gradient(135deg, ${ARC}, #B3E5FC)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Revolução
            </span>
          </h2>
          <p
            className="text-xl md:text-2xl font-semibold mb-3"
            style={{ fontFamily: FONT_DISPLAY, color: ARC_BRIGHT }}
          >
            Não é um curso. É um Ecossistema.
          </p>
          <p
            className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: FONT_BODY, color: TEXT_COLOR, lineHeight: 1.8, fontWeight: 300 }}
          >
            A Revolução une conceitos de IA e Negócios, para fornecer tudo o que você precisa para ganhar dinheiro desde o primeiro dia — arquitetura de sistemas que separa os profissionais que entenderam como o trabalho vai funcionar daqui pra frente.
          </p>
        </div>

        {/* Reactor + Content */}
        <div className="relative z-[2] flex flex-col items-center w-full max-w-[950px]">
          {/* SVG Reactor */}
          <div className="relative" style={{ width: "min(580px, 90vw)", height: "min(580px, 90vw)" }}>
            <svg ref={svgRef} viewBox="0 0 500 500" className="w-full h-full">
              <defs>
                <filter id="reactorGlow">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <radialGradient id="coreGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor={ARC} stopOpacity="0.3" />
                  <stop offset="100%" stopColor={ARC} stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Outer decorative rings */}
              <g className="reactor-ring-4">
                <circle cx={cx} cy={cy} r="240" fill="none" stroke="rgba(79,195,247,0.04)" strokeWidth="0.5" />
                <circle cx={cx} cy={cy} r="235" fill="none" stroke="rgba(79,195,247,0.03)" strokeWidth="0.5" strokeDasharray="3 8" />
              </g>

              <g className="reactor-ring-1">
                <circle cx={cx} cy={cy} r="220" fill="none" stroke="rgba(79,195,247,0.06)" strokeWidth="0.8" />
                <circle cx={cx} cy={cy} r="215" fill="none" stroke="rgba(79,195,247,0.04)" strokeWidth="0.5" strokeDasharray="2 6" />
              </g>

              <g className="reactor-ring-2">
                <circle cx={cx} cy={cy} r="205" fill="none" stroke="rgba(79,195,247,0.05)" strokeWidth="0.6" strokeDasharray="4 12" />
              </g>

              {/* Energy ring */}
              <circle
                className="reactor-energy-ring"
                cx={cx} cy={cy} r="200"
                fill="none"
                stroke="rgba(79,195,247,0.08)"
                strokeWidth="1"
              />

              {/* Dashed spinning ring */}
              <circle
                className="reactor-ring-3 reactor-dash-spin"
                cx={cx} cy={cy} r="80"
                fill="none"
                stroke="rgba(79,195,247,0.1)"
                strokeWidth="0.8"
                strokeDasharray="6 14"
              />

              {/* Core glow */}
              <circle cx={cx} cy={cy} r="45" fill="url(#coreGrad)" className="reactor-core-pulse" />
              <circle cx={cx} cy={cy} r="22" fill="none" stroke={ARC} strokeWidth="1" opacity="0.3" className="reactor-core-pulse" />
              <circle cx={cx} cy={cy} r="8" fill={ARC} opacity="0.6" className="reactor-core-pulse" />

              {/* Ripple */}
              <circle
                key={rippleKey}
                cx={cx}
                cy={cy}
                r="45"
                fill="none"
                stroke={ARC}
                opacity="0"
                className={rippleKey > 0 ? "reactor-ripple-anim" : ""}
              />

              {/* Segments */}
              {beliefs.map((b, i) => {
                const isActive = activeSegment === i;
                const path = segmentPath(i, innerR, outerR, cx, cy);
                const iconPos = segmentMidpoint(i, (innerR + outerR) / 2 - 10, cx, cy);
                const labelPos = segmentMidpoint(i, outerR + 16, cx, cy);
                const energyInner = segmentMidpoint(i, innerR - 5, cx, cy);
                const energyOuter = segmentMidpoint(i, outerR + 5, cx, cy);

                return (
                  <g
                    key={i}
                    className="cursor-pointer"
                    onClick={() => handleSegmentClick(i)}
                  >
                    {/* Energy line */}
                    <line
                      x1={energyInner.x} y1={energyInner.y}
                      x2={energyOuter.x} y2={energyOuter.y}
                      stroke={ARC}
                      strokeWidth="1.5"
                      opacity={isActive ? 1 : 0}
                      filter="url(#reactorGlow)"
                      style={{ transition: "all 0.6s" }}
                    />
                    {/* Segment fill */}
                    <path
                      d={path}
                      fill={isActive ? "rgba(79,195,247,0.22)" : "rgba(79,195,247,0.04)"}
                      stroke={isActive ? ARC : "rgba(79,195,247,0.12)"}
                      strokeWidth={isActive ? 1.2 : 0.8}
                      style={{ transition: "all 0.5s" }}
                    />
                    {/* Radial line from core */}
                    <line
                      x1={cx + innerR * Math.cos(((i * 60 - 90) * Math.PI) / 180)}
                      y1={cy + innerR * Math.sin(((i * 60 - 90) * Math.PI) / 180)}
                      x2={cx + outerR * Math.cos(((i * 60 - 90) * Math.PI) / 180)}
                      y2={cy + outerR * Math.sin(((i * 60 - 90) * Math.PI) / 180)}
                      stroke={isActive ? ARC : "rgba(79,195,247,0.12)"}
                      strokeWidth={isActive ? 1 : 0.8}
                      opacity={isActive ? 0.8 : 1}
                      style={{ transition: "all 0.5s" }}
                    />
                    {/* Icon */}
                    <text
                      x={iconPos.x}
                      y={iconPos.y}
                      textAnchor="middle"
                      dominantBaseline="central"
                      style={{
                        fontFamily: FONT_MONO,
                        fontSize: isActive ? "11px" : "9px",
                        fill: isActive ? "#B3E5FC" : "rgba(79,195,247,0.4)",
                        transition: "all 0.5s",
                        pointerEvents: "none",
                      }}
                    >
                      {SEGMENT_ICONS[i]}
                    </text>
                    {/* Label (hidden on mobile via CSS) */}
                    <text
                      x={labelPos.x}
                      y={labelPos.y}
                      textAnchor="middle"
                      dominantBaseline="central"
                      className="hidden md:block"
                      style={{
                        fontFamily: FONT_DISPLAY,
                        fontSize: "7px",
                        fill: isActive ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.35)",
                        transition: "all 0.5s",
                        pointerEvents: "none",
                      }}
                    >
                      {SEGMENT_LABELS[i]}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Hint */}
          {showHint && (
            <p
              className="reactor-hint text-center mt-4"
              style={{ fontFamily: FONT_MONO, fontSize: ".68rem", color: DIM }}
            >
              [ clique em um segmento do reator ]
            </p>
          )}

          {/* Content Card */}
          <div
            className="w-full max-w-[640px] mt-8 transition-all duration-500"
            style={{
              opacity: activeSegment !== null ? 1 : 0,
              transform: activeSegment !== null ? "translateY(0)" : "translateY(14px)",
              pointerEvents: activeSegment !== null ? "auto" : "none",
              minHeight: "100px",
            }}
          >
            {activeSegment !== null && (
              <div
                className="relative overflow-hidden"
                style={{
                  border: "1px solid rgba(79,195,247,0.12)",
                  borderRadius: "8px",
                  background: "rgba(8,12,24,0.92)",
                  backdropFilter: "blur(20px)",
                  padding: "26px 30px",
                }}
              >
                {/* Top gradient line */}
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: `linear-gradient(90deg, transparent, ${ARC}, transparent)`, opacity: 0.4 }}
                />
                {/* Bottom gradient line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-px"
                  style={{ background: `linear-gradient(90deg, transparent, rgba(79,195,247,0.15), transparent)` }}
                />
                {/* Corner accents */}
                <div className="absolute top-[6px] left-[6px] w-3 h-3 border-t border-l" style={{ borderColor: ARC, opacity: 0.3 }} />
                <div className="absolute top-[6px] right-[6px] w-3 h-3 border-t border-r" style={{ borderColor: ARC, opacity: 0.3 }} />
                <div className="absolute bottom-[6px] left-[6px] w-3 h-3 border-b border-l" style={{ borderColor: ARC, opacity: 0.3 }} />
                <div className="absolute bottom-[6px] right-[6px] w-3 h-3 border-b border-r" style={{ borderColor: ARC, opacity: 0.3 }} />

                <p style={{ fontFamily: FONT_MONO, fontSize: ".68rem", color: ARC, opacity: 0.6, marginBottom: "5px", letterSpacing: "3px" }}>
                  {beliefs[activeSegment].num}
                </p>
                <h4 style={{ fontFamily: FONT_DISPLAY, fontSize: "1.15rem", fontWeight: 700, color: "#fff", marginBottom: "10px", lineHeight: 1.3 }}>
                  {beliefs[activeSegment].title}
                </h4>
                <p style={{ fontFamily: FONT_BODY, fontSize: ".9rem", lineHeight: 1.75, color: DIM }}>
                  {beliefs[activeSegment].text}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Gradient separator */}
      <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${ARC}25, transparent)` }} />

      {/* ── SEÇÃO 4 — O QUE É O ESTADO ALPHA ── */}
      <section className="px-6" style={{ paddingTop: "100px", paddingBottom: "100px", backgroundColor: VOID }}>
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <span
              className="text-xs uppercase tracking-[5px]"
              style={{ fontFamily: FONT_MONO, color: DIM }}
            >
              04 — O Que É a Revolução
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
              style={{ fontFamily: FONT_DISPLAY, color: IVORY }}
            >
              Um sistema{" "}
              <span style={{ color: ARC }}>completo.</span>
            </h2>
          </div>

          {/* Description */}
          <div className="text-center max-w-3xl mx-auto">
            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ fontFamily: FONT_BODY, color: TEXT_COLOR, lineHeight: 1.8, fontWeight: 300 }}
            >
             A Revolução não é um curso sobre IA. É um ecossistema que integra: educação, prática, templates e comunidade. Construído para que você possa ter Agentes de IA trabalhando para você desde o primeiro módulo.
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alphaItems.map((item) => (
              <div
                key={item.num}
                className="p-8 space-y-4 transition-all duration-300 relative"
                style={{
                  backgroundColor: HUD_DARK,
                  border: `0.5px solid ${BORDER_NORMAL}`,
                  borderRadius: "14px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = BORDER_HOVER;
                  e.currentTarget.style.boxShadow = "0 0 40px rgba(56,189,248,0.04)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = BORDER_NORMAL;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <span
                  className="text-xs font-semibold"
                  style={{ fontFamily: FONT_MONO, color: ARC, letterSpacing: "3px", opacity: 0.6 }}
                >
                  {item.num}
                </span>
                <h4
                  className="text-lg font-bold"
                  style={{ fontFamily: FONT_DISPLAY, color: IVORY }}
                >
                  {item.title}
                </h4>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: FONT_BODY, color: TEXT_COLOR, lineHeight: 1.8, fontWeight: 300 }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ReactorSection;
