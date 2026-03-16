import { ArrowRight } from "lucide-react";

const GOLD = "#c9a227";
const PARCHMENT = "#f0e6d0";
const MUTED = "#6b7d5a";
const CARD_BG = "#1c2e1e";
const SECTION_BG = "#0e1a0f";
const SECTION_BG_ALT = "#162318";
const GOLD_DIM = "rgba(201, 162, 39, 0.7)";

const tickerItems = [
  { company: "CHGG", change: "▼ 99% desde 2021" },
  { company: "DUOL", change: "▼ 82% desde mai/2025" },
  { company: "PATH", change: "▼ 50% em 2024" },
  { company: "ADBE", change: "▼ 30% em 2026" },
  { company: "CRM", change: "▼ 25% em 2026" },
  { company: "Stack Overflow", change: "▼ 78% tráfego" },
  { company: "SaaS", change: "▼ $1 TRI em valor" },
];

interface CasualtyCard {
  company: string;
  badge: string;
  stat: string;
  statLabel: string;
  detail: string;
  source: string;
  chartPath: string;
  chartGradientId: string;
}

const casualties: CasualtyCard[] = [
  {
    company: "Chegg",
    badge: "EXTINTA",
    stat: "−99%",
    statLabel: "Queda no valor de mercado",
    detail: "De US$ 14,5 bilhões para US$ 191 milhões. Demitiu 45% dos funcionários. Alunos trocaram a plataforma pelo ChatGPT — de graça e instantâneo.",
    source: "Fonte: CNBC, Fortune, Sherwood News",
    chartPath: "M0,10 C20,8 40,12 80,6 120,15 160,5 200,20 240,35 260,40 280,44",
    chartGradientId: "chegg",
  },
  {
    company: "Duolingo",
    badge: "EM QUEDA",
    stat: "−82%",
    statLabel: "Queda desde a máxima",
    detail: "Ação despencou de US$ 544 para ~US$ 100. A OpenAI demonstrou que o GPT-5 cria apps de idiomas em minutos. Investidores entraram em pânico.",
    source: "Fonte: Fast Company, Intellectia, Nasdaq",
    chartPath: "M0,8 C30,6 60,10 100,7 140,18 180,30 220,38 260,42 280,44",
    chartGradientId: "duolingo",
  },
  {
    company: "Stack Overflow",
    badge: "IRRELEVANTE",
    stat: "−78%",
    statLabel: "Queda no volume de perguntas",
    detail: "De 200.000 perguntas/mês para menos de 4.000. Demitiu 28% da equipe. Devs migraram para o ChatGPT e GitHub Copilot.",
    source: "Fonte: VentureBeat, TechCrunch, DevClass",
    chartPath: "M0,8 C40,10 80,7 120,14 160,22 200,32 240,40 270,44 280,44",
    chartGradientId: "stackoverflow",
  },
  {
    company: "UiPath",
    badge: "AMEAÇADA",
    stat: "−50%",
    statLabel: "Queda em 2024",
    detail: "IA generativa ameaça substituir a automação robótica (RPA) da UiPath. Crescimento desacelerou de 24% para 9%. CEO trocado às pressas.",
    source: "Fonte: Nasdaq, Motley Fool",
    chartPath: "M0,12 C30,10 70,14 110,12 150,20 190,28 230,36 260,42 280,44",
    chartGradientId: "uipath",
  },
  {
    company: "Adobe · Salesforce · ServiceNow",
    badge: "SELL-OFF",
    stat: "−25%",
    statLabel: "Queda média em 2026",
    detail: 'A imprensa já batizou: "SaaSmageddon". US$ 1 trilhão evaporou do setor de software. Investidores temem que IA torne SaaS obsoleto.',
    source: "Fonte: Motley Fool, InvestorPlace, Fortune",
    chartPath: "M0,10 C40,8 80,12 130,10 170,18 210,24 250,34 270,40 280,44",
    chartGradientId: "saas",
  },
  {
    company: "O outro lado",
    badge: "DADO MIT",
    stat: "95%",
    statLabel: "Empresas com retorno ZERO em IA",
    detail: "Relatório do MIT (2025) revelou: 95% dos pilotos de IA generativa nas empresas falharam. Quem não sabe implementar está queimando dinheiro. Quem sabe, está dominando.",
    source: "Fonte: MIT NANDA Report, Fortune, Axios",
    chartPath: "M0,40 C30,38 70,42 110,36 150,30 190,20 230,12 260,8 280,6",
    chartGradientId: "mit",
  },
];

const headlines = [
  { source: "CNBC", text: "Chegg demite 45% da equipe, culpa", highlight: "'novas realidades da IA'" },
  { source: "Fortune", text: "Dinheiro burro entra enquanto traders perdem $1 trilhão ao perceber que", highlight: "IA vai engolir empresas de tecnologia primeiro" },
  { source: "Gizmodo", text: "Chegg está à beira da falência após", highlight: "ChatGPT derrubar ações em 99%" },
  { source: "InvestorPlace", text: "SaaSmageddon chegou — e", highlight: "nem todo software vai sobreviver" },
  { source: "VentureBeat", text: "Stack Overflow confirma demissões:", highlight: "28% da equipe cortada" },
  { source: "Fast Company", text: "Ações da Duolingo em queda livre, continuando", highlight: "colapso dramático" },
];

interface ApocalypseSectionProps {
  onCTA: (location: string) => void;
}

const MiniChart = ({ path, gradientId }: { path: string; gradientId: string }) => (
  <div className="h-12 mb-4 relative">
    <svg viewBox="0 0 280 48" className="w-full h-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id={`grad-${gradientId}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={GOLD} stopOpacity="0.3" />
          <stop offset="100%" stopColor={GOLD} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${path} L280,48 L0,48 Z`} fill={`url(#grad-${gradientId})`} />
      <path d={path} fill="none" stroke={GOLD} strokeWidth="2" opacity="0.7" />
    </svg>
  </div>
);

const TickerTrack = () => (
  <div className="flex gap-12" style={{ animation: "ticker-scroll 40s linear infinite" }}>
    {[...tickerItems, ...tickerItems].map((item, i) => (
      <span key={i} className="flex items-center gap-2 whitespace-nowrap font-mono text-xs" style={{ color: MUTED }}>
        <span style={{ color: PARCHMENT, fontWeight: 600 }}>{item.company}</span>
        <span style={{ color: GOLD, fontWeight: 600 }}>{item.change}</span>
      </span>
    ))}
  </div>
);

export default function ApocalypseSection({ onCTA }: ApocalypseSectionProps) {
  return (
    <>
      {/* Ticker + keyframes */}
      <style>{`
        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <section className="relative px-6 overflow-hidden" style={{ backgroundColor: SECTION_BG, paddingTop: "100px", paddingBottom: "100px" }}>
        {/* Subtle radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(201,162,39,0.06) 0%, transparent 60%)",
          }}
        />

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Eyebrow + Title */}
          <div className="mb-6 flex items-center gap-3">
            <span className="inline-block w-8 h-px" style={{ backgroundColor: GOLD }} />
            <span
              className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.25em]"
              style={{ color: GOLD }}
            >
              Enquanto você espera
            </span>
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                backgroundColor: GOLD,
                boxShadow: `0 0 8px ${GOLD}`,
                animation: "pulse 2s ease-in-out infinite",
              }}
            />
          </div>

          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] mb-5 max-w-[700px]"
            style={{ fontFamily: "'Playfair Display', serif", color: PARCHMENT }}
          >
            O mercado já está{" "}
            <em style={{ fontStyle: "italic", color: GOLD }}>sentindo o impacto</em>
          </h2>

          <p
            className="text-base max-w-[600px] mb-16"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: MUTED,
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            Empresas bilionárias estão derretendo em tempo real. Não é teoria — são números.{" "}
            <strong style={{ color: PARCHMENT, fontWeight: 600 }}>
              Quem não se adapta à inteligência artificial está sendo engolido por quem já se adaptou.
            </strong>
          </p>
        </div>

        {/* Ticker */}
        <div
          className="w-screen relative left-1/2 -translate-x-1/2 overflow-hidden mb-14"
          style={{
            borderTop: `1px solid rgba(201,162,39,0.15)`,
            borderBottom: `1px solid rgba(201,162,39,0.15)`,
            padding: "14px 0",
            backgroundColor: "rgba(201,162,39,0.02)",
          }}
        >
          <TickerTrack />
        </div>

        {/* Casualty Cards */}
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {casualties.map((c, i) => (
              <div
                key={i}
                className="p-7 border transition-all duration-300"
                style={{
                  backgroundColor: CARD_BG,
                  borderColor: "rgba(201,162,39,0.12)",
                  borderRadius: "4px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(201,162,39,0.4)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(201,162,39,0.12)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <span className="text-lg font-bold" style={{ fontFamily: "'DM Sans', sans-serif", color: PARCHMENT }}>
                    {c.company}
                  </span>
                  <span
                    className="font-mono text-[0.7rem] font-semibold px-2.5 py-1"
                    style={{
                      backgroundColor: "rgba(201,162,39,0.12)",
                      color: GOLD,
                      borderRadius: "4px",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {c.badge}
                  </span>
                </div>

                {/* Stat */}
                <div
                  className="text-4xl font-black leading-none mb-1"
                  style={{ fontFamily: "'Playfair Display', serif", color: GOLD, letterSpacing: "-0.02em" }}
                >
                  {c.stat}
                </div>
                <div
                  className="font-mono text-[0.65rem] uppercase mb-5"
                  style={{ color: MUTED, letterSpacing: "0.15em" }}
                >
                  {c.statLabel}
                </div>

                {/* Mini chart */}
                <MiniChart path={c.chartPath} gradientId={c.chartGradientId} />

                {/* Detail */}
                <p className="text-sm leading-relaxed mb-3" style={{ color: MUTED, fontWeight: 300 }}>
                  {c.detail}
                </p>

                {/* Source */}
                <p
                  className="font-mono text-[0.6rem] uppercase"
                  style={{ color: GOLD_DIM, letterSpacing: "0.1em", opacity: 0.7 }}
                >
                  {c.source}
                </p>
              </div>
            ))}
          </div>

          {/* Headlines */}
          <div className="mb-16">
            <p
              className="font-mono text-[0.65rem] font-semibold uppercase mb-5"
              style={{ color: GOLD_DIM, letterSpacing: "0.2em" }}
            >
              Manchetes reais
            </p>

            <div className="flex flex-col">
              {headlines.map((h, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 py-4 transition-all duration-200"
                  style={{ borderBottom: "1px solid rgba(201,162,39,0.08)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(201,162,39,0.02)";
                    e.currentTarget.style.paddingLeft = "8px";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.paddingLeft = "0";
                  }}
                >
                  <span
                    className="font-mono text-[0.6rem] uppercase flex-shrink-0 sm:min-w-[90px]"
                    style={{ color: GOLD_DIM, letterSpacing: "0.08em" }}
                  >
                    {h.source}
                  </span>
                  <span
                    className="text-base"
                    style={{ fontFamily: "'Playfair Display', serif", color: PARCHMENT, fontStyle: "italic", lineHeight: 1.4 }}
                  >
                    "{h.text} <span style={{ color: GOLD, fontWeight: 700, fontStyle: "normal" }}>{h.highlight}</span>"
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div
            className="text-center p-12 border relative overflow-hidden"
            style={{
              borderColor: "rgba(201,162,39,0.15)",
              borderRadius: "4px",
              background: `linear-gradient(135deg, rgba(201,162,39,0.03) 0%, rgba(14,26,15,0.95) 100%)`,
            }}
          >
            {/* Top gold line */}
            <div
              className="absolute top-0 left-[20%] right-[20%] h-px"
              style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }}
            />

            <h3
              className="text-2xl md:text-3xl font-bold mb-3 leading-snug"
              style={{ fontFamily: "'Playfair Display', serif", color: PARCHMENT }}
            >
              A pergunta não é se a IA vai mudar tudo.
              <br />
              A pergunta é: <em style={{ color: GOLD, fontStyle: "italic" }}>você vai estar pronto?</em>
            </h3>

            <p
              className="text-base mb-8 max-w-md mx-auto"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: MUTED,
                fontWeight: 300,
              }}
            >
              Na masterclass, eu vou te mostrar como usar IA na prática —{" "}
              do jeito que quem está ganhando já usa.
            </p>

            <button
              onClick={() => onCTA("apocalypse")}
              className="inline-flex items-center gap-3 text-sm uppercase tracking-[3px] border px-8 py-4 transition-all duration-500"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
                color: GOLD,
                borderColor: "rgba(201,162,39,0.4)",
                borderRadius: "2px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = GOLD;
                e.currentTarget.style.color = SECTION_BG;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = GOLD;
              }}
            >
              Garantir minha vaga
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
