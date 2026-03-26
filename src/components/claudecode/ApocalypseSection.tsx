import { ArrowRight } from "lucide-react";
import cheggLogo from "@/assets/chegg-logo.png";
import duolingoLogo from "@/assets/duolingo-logo.png";
import uipathLogo from "@/assets/uipath-logo.png";
import stackoverflowLogo from "@/assets/stackoverflow-logo.png";
import servicenowLogo from "@/assets/servicenow-logo.png";
import headlineChegg from "@/assets/headline-chegg.png";
import cnbcLogo from "@/assets/cnbc-logo.jpg";
import headlineG1 from "@/assets/headline-g1.png";
import g1Logo from "@/assets/g1-logo.png";
import headlineGizmodo from "@/assets/headline-gizmodo.png";
import gizmodoLogo from "@/assets/gizmodo-logo.png";
import headlineInvestorplace from "@/assets/headline-investorplace.png";
import investorplaceLogo from "@/assets/investorplace-logo.png";
import headlineVenturebeat from "@/assets/headline-venturebeat.png";
import venturebeatLogo from "@/assets/venturebeat-logo.png";
import headlineFastcompany from "@/assets/headline-fastcompany.png";
import fastcompanyLogo from "@/assets/fastcompany-logo.png";

// Método Stark palette
const ARC = "#38BDF8";
const IVORY = "#F0F6FF";
const DIM = "#5A7089";
const TEXT_COLOR = "#C8D6E5";
const CARD_BG = "#0C1220";
const SECTION_BG = "#060A12";
const SECTION_BG_ALT = "#111A2E";
const ARC_DIM = "rgba(56,189,248,0.7)";
const STARK_GOLD = "#F59E0B";
const VOID = "#060A12";

const FONT_DISPLAY = "'Chakra Petch', sans-serif";
const FONT_MONO = "'IBM Plex Mono', monospace";
const FONT_BODY = "'Exo 2', sans-serif";

// ── Data ──

const tickerItems = [
  { company: "CHGG", change: "▼ 99% desde 2021" },
  { company: "DUOL", change: "▼ 82% desde mai/2025" },
  { company: "PATH", change: "▼ 50% em 2024" },
  { company: "ADBE", change: "▼ 30% em 2026" },
  { company: "CRM", change: "▼ 25% em 2026" },
  { company: "Stack Overflow", change: "▼ 78% tráfego" },
  { company: "SaaS", change: "▼ $1 TRI em valor" },
];

interface CasualtyData {
  company: string;
  ticker: string;
  logoInitials: string;
  logoColor: string;
  logoImage?: string;
  badge: string;
  stat: string;
  statLabel: string;
  detail: string;
  source: string;
  hasChart: boolean;
  chartPath?: string;
  chartGradientId?: string;
}

const casualties: CasualtyData[] = [
  {
    company: "Chegg",
    ticker: "NYSE: CHGG",
    logoInitials: "C",
    logoColor: "#F37321",
    logoImage: cheggLogo,
    badge: "Extinta",
    stat: "−99%",
    statLabel: "Valor de mercado",
    detail: "De US$ 14,5 bi para US$ 191 mi. Demitiu 45% dos funcionários. Alunos trocaram a plataforma pelo ChatGPT.",
    source: "CNBC · Fortune · Sherwood News",
    hasChart: true,
    chartPath: "M0,10 C20,8 40,12 80,6 120,15 160,5 200,20 240,35 260,40 280,44",
    chartGradientId: "chegg",
  },
  {
    company: "Duolingo",
    ticker: "NASDAQ: DUOL",
    logoInitials: "D",
    logoColor: "#58CC02",
    logoImage: duolingoLogo,
    badge: "Em queda",
    stat: "−82%",
    statLabel: "Desde a máxima",
    detail: "Ação de US$ 544 para ~US$ 100. GPT-5 cria apps de idiomas em minutos. Investidores em pânico.",
    source: "Fast Company · Nasdaq · Intellectia",
    hasChart: true,
    chartPath: "M0,8 C30,6 60,10 100,7 140,18 180,30 220,38 260,42 280,44",
    chartGradientId: "duolingo",
  },
  {
    company: "Stack Overflow",
    ticker: "Prosus (adquiriu por $1.8 bi)",
    logoInitials: "SO",
    logoColor: "#F48024",
    logoImage: stackoverflowLogo,
    badge: "Irrelevante",
    stat: "−78%",
    statLabel: "Volume de perguntas",
    detail: "De 200.000 perguntas/mês para menos de 4.000. Demitiu 28% da equipe. Devs migraram pro ChatGPT.",
    source: "VentureBeat · TechCrunch · DevClass",
    hasChart: true,
    chartPath: "M0,8 C40,10 80,7 120,14 160,22 200,32 240,40 270,44 280,44",
    chartGradientId: "stackoverflow",
  },
  {
    company: "UiPath",
    ticker: "NYSE: PATH",
    logoInitials: "U",
    logoColor: "#FA4616",
    logoImage: uipathLogo,
    badge: "Ameaçada",
    stat: "−50%",
    statLabel: "Queda em 2024",
    detail: "IA generativa ameaça substituir toda a automação robótica (RPA). Crescimento de 24% caiu para 9%. CEO trocado às pressas.",
    source: "Nasdaq · Motley Fool",
    hasChart: true,
    chartPath: "M0,12 C30,10 70,14 110,12 150,20 190,28 230,36 260,42 280,44",
    chartGradientId: "uipath",
  },
  {
    company: "Adobe · Salesforce · ServiceNow",
    ticker: "ADBE · CRM · NOW",
    logoInitials: "S",
    logoColor: "linear-gradient(135deg, #E8344E, #6F42C1)",
    logoImage: servicenowLogo,
    badge: "Sell-off",
    stat: "−25%",
    statLabel: "Queda média 2026",
    detail: 'A imprensa batizou: "SaaSmageddon". US$ 1 trilhão evaporou do setor de software. Investidores temem obsolescência.',
    source: "Motley Fool · InvestorPlace · Fortune",
    hasChart: true,
    chartPath: "M0,10 C40,8 80,12 130,10 170,18 210,24 250,34 270,40 280,44",
    chartGradientId: "saas",
  },
  {
    company: "O outro lado",
    ticker: "MIT NANDA Report · 2025",
    logoInitials: "MIT",
    logoColor: "#A31F34",
    badge: "Dado MIT",
    stat: "95%",
    statLabel: "Retorno zero em IA",
    detail: "Relatório do MIT (2025): 95% dos pilotos de IA generativa falharam. Quem não sabe implementar está queimando dinheiro. Quem sabe, está dominando.",
    source: "MIT NANDA · Fortune · Axios",
    hasChart: false,
  },
];

interface NewsClipData {
  source: string;
  sourceInitials: string;
  sourceColor: string;
  sourceLogo?: string;
  url: string;
  date: string;
  headline: string;
  highlightText: string;
  headlineImage?: string;
  excerpt: string;
}

const newsClippings: NewsClipData[] = [
  {
    source: "CNBC",
    sourceInitials: "C",
    sourceColor: "#005594",
    sourceLogo: cnbcLogo,
    url: "cnbc.com/2025/10/27/chegg-slashes-45-workforce",
    date: "27 Out 2025",
    headline: 'Chegg demite 45% da equipe, culpa ',
    highlightText: '"novas realidades da IA"',
    headlineImage: headlineChegg,
    excerpt: "A empresa de educação online foi atingida pela ascensão de ferramentas de IA generativa como o ChatGPT da OpenAI, cada vez mais populares entre estudantes.",
  },
  {
    source: "G1 - Globo",
    sourceInitials: "G1",
    sourceColor: "#CC0000",
    sourceLogo: g1Logo,
    url: "g1.globo.com/economia/noticia/2026/02/05",
    date: "05 Fev 2026",
    headline: "Empresas de tecnologia perdem US$ 1 trilhão em valor de mercado com ",
    highlightText: "'ameaça' de IA chinesa",
    headlineImage: headlineG1,
    excerpt: "Cerca de US$ 1 trilhão foi eliminado do market cap de empresas de software ontem, segundo a Bloomberg.",
  },
  {
    source: "Gizmodo",
    sourceInitials: "G",
    sourceColor: "#1A1A2E",
    sourceLogo: gizmodoLogo,
    url: "gizmodo.com/chegg-chatgpt-stock-down-99",
    date: "25 Fev 2025",
    headline: "Chegg está à beira da falência após ",
    highlightText: "ChatGPT derrubar ações em 99%",
    headlineImage: headlineGizmodo,
    excerpt: "A ação está em queda de 99% desde os picos de 2021, eliminando US$ 14,5 bilhões em valor.",
  },
  {
    source: "InvestorPlace",
    sourceInitials: "I",
    sourceColor: "#0A7B3E",
    sourceLogo: investorplaceLogo,
    url: "investorplace.com/2026/02/saasmageddon-is-here",
    date: "10 Fev 2026",
    headline: "SaaSmageddon chegou — e ",
    highlightText: "nem todo software vai sobreviver",
    headlineImage: headlineInvestorplace,
    excerpt: "Como grupo, ações SaaS caíram mais de 20% desde o final de 2025 — um dos drawdowns mais rápidos fora da crise de 2008.",
  },
  {
    source: "VentureBeat",
    sourceInitials: "V",
    sourceColor: "#CC0000",
    sourceLogo: venturebeatLogo,
    url: "venturebeat.com/stack-overflow-layoffs-28-percent",
    date: "22 Dez 2025",
    headline: "Stack Overflow confirma demissões: ",
    highlightText: "28% da equipe cortada",
    headlineImage: headlineVenturebeat,
    excerpt: "Com soluções concorrentes já em uso massivo, a era da IA generativa não tem sido fácil para o Stack Overflow.",
  },
  {
    source: "Fast Company",
    sourceInitials: "FC",
    sourceColor: "#000000",
    sourceLogo: fastcompanyLogo,
    url: "fastcompany.com/duolingo-stock-dramatic-collapse",
    date: "02 Mar 2026",
    headline: "Ações da Duolingo em queda livre, continuando ",
    highlightText: "colapso dramático",
    headlineImage: headlineFastcompany,
    excerpt: "Investidores estão abandonando a Duolingo após projeções decepcionantes para 2026. Ação perdeu 82% do valor.",
  },
];

// ── Sub-components ──

interface ApocalypseSectionProps {
  onCTA: (location: string) => void;
}

const LogoIcon = ({ initials, color }: { initials: string; color: string }) => {
  return (
    <div
      className="flex items-center justify-center flex-shrink-0 text-white font-extrabold"
      style={{
        width: 36,
        height: 36,
        borderRadius: 8,
        background: color,
        fontSize: initials.length > 2 ? "0.65rem" : "0.85rem",
        border: color === "#000000" || color === "#1A1A2E" ? "1px solid rgba(255,255,255,0.15)" : undefined,
      }}
    >
      {initials}
    </div>
  );
};

const MiniChart = ({ path, gradientId }: { path: string; gradientId: string }) => (
  <div className="flex-1 h-[52px] relative">
    <svg viewBox="0 0 280 48" className="w-full h-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id={`grad-${gradientId}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={ARC} stopOpacity="0.3" />
          <stop offset="100%" stopColor={ARC} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${path} L280,48 L0,48 Z`} fill={`url(#grad-${gradientId})`} />
      <path d={path} fill="none" stroke={ARC} strokeWidth="2" opacity="0.7" />
    </svg>
  </div>
);

const TickerTrack = () => (
  <div className="flex gap-12" style={{ animation: "ticker-scroll 40s linear infinite" }}>
    {[...tickerItems, ...tickerItems].map((item, i) => (
      <span key={i} className="flex items-center gap-2.5 whitespace-nowrap font-medium" style={{ fontFamily: FONT_MONO, fontSize: "0.78rem", color: DIM }}>
        <span style={{ color: IVORY, fontWeight: 600 }}>{item.company}</span>
        <span style={{ color: ARC, fontWeight: 600 }}>{item.change}</span>
      </span>
    ))}
  </div>
);

const CasualtyCard = ({ c }: { c: CasualtyData }) => (
  <div
    className="relative overflow-hidden p-6 md:p-7 transition-all duration-300 group"
    style={{
      backgroundColor: CARD_BG,
      border: `0.5px solid rgba(56,189,248,0.08)`,
      borderRadius: 14,
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = "rgba(56,189,248,0.18)";
      e.currentTarget.style.transform = "translateY(-3px)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = "rgba(56,189,248,0.08)";
      e.currentTarget.style.transform = "translateY(0)";
    }}
  >
    {/* Top arc line on hover */}
    <div
      className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      style={{ background: `linear-gradient(90deg, transparent, ${ARC}50, transparent)` }}
    />

    {/* Logo row */}
    <div className="flex justify-between items-center mb-5">
      <div className="flex items-center gap-2.5">
        {c.logoImage ? (
          <img src={c.logoImage} alt={c.company} className="flex-shrink-0 object-cover" style={{ width: 36, height: 36, borderRadius: 8 }} />
        ) : (
          <LogoIcon initials={c.logoInitials} color={c.logoColor} />
        )}
        <div className="flex flex-col">
          <span className="text-[1.1rem] font-bold leading-tight uppercase" style={{ fontFamily: FONT_DISPLAY, color: IVORY }}>
            {c.company}
          </span>
          <span className="text-[0.6rem] mt-px" style={{ fontFamily: FONT_MONO, color: DIM, letterSpacing: "0.08em" }}>
            {c.ticker}
          </span>
        </div>
      </div>
      <span
        className="text-[0.6rem] font-semibold px-2.5 py-1 uppercase whitespace-nowrap"
        style={{
          fontFamily: FONT_MONO,
          backgroundColor: "rgba(56,189,248,0.06)",
          color: ARC,
          borderRadius: 4,
          letterSpacing: "0.05em",
        }}
      >
        {c.badge}
      </span>
    </div>

    {/* Stat + chart row */}
    <div className={`flex ${c.hasChart ? "items-end gap-4" : ""} mb-4 flex-col sm:flex-row`}>
      <div className="flex-shrink-0">
        <div
          className="text-[2.6rem] font-black leading-none"
          style={{ fontFamily: FONT_DISPLAY, color: STARK_GOLD, letterSpacing: "-0.02em" }}
        >
          {c.stat}
        </div>
        <div className="text-[0.58rem] uppercase mt-1" style={{ fontFamily: FONT_MONO, color: DIM, letterSpacing: "0.12em" }}>
          {c.statLabel}
        </div>
      </div>
      {c.hasChart && c.chartPath && c.chartGradientId && (
        <MiniChart path={c.chartPath} gradientId={c.chartGradientId} />
      )}
    </div>

    {/* Detail */}
    <p className="text-[0.85rem] leading-relaxed mb-3.5" style={{ fontFamily: FONT_BODY, color: DIM, fontWeight: 300 }}>
      {c.detail}
    </p>

    {/* Source */}
    <p className="text-[0.55rem] uppercase" style={{ fontFamily: FONT_MONO, color: ARC_DIM, letterSpacing: "0.1em", opacity: 0.6 }}>
      {c.source}
    </p>
  </div>
);

const NewsClip = ({ n }: { n: NewsClipData }) => (
  <div
    className="overflow-hidden transition-all duration-300"
    style={{
      backgroundColor: SECTION_BG_ALT,
      border: "0.5px solid rgba(56,189,248,0.06)",
      borderRadius: 14,
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = "rgba(56,189,248,0.15)";
      e.currentTarget.style.transform = "translateY(-2px)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = "rgba(56,189,248,0.06)";
      e.currentTarget.style.transform = "translateY(0)";
    }}
  >
    {/* Browser bar */}
    <div className="flex items-center gap-2 px-3.5 py-2" style={{ background: "rgba(56,189,248,0.02)", borderBottom: "0.5px solid rgba(56,189,248,0.04)" }}>
      <div className="flex gap-1">
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#DC2626" }} />
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#F59E0B" }} />
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#34D399" }} />
      </div>
      <span className="text-[0.55rem] truncate" style={{ fontFamily: FONT_MONO, color: "rgba(56,189,248,0.3)" }}>
        {n.url}
      </span>
    </div>

    {/* Content */}
    <div className="p-4 md:p-[18px]">
      {/* Source row */}
      <div className="flex items-center gap-2 mb-2.5">
        {n.sourceLogo ? (
          <img
            src={n.sourceLogo}
            alt={n.source}
            className="flex-shrink-0"
            style={{ width: 20, height: 20, borderRadius: 4, objectFit: "cover" }}
          />
        ) : (
          <div
            className="flex items-center justify-center flex-shrink-0 text-white font-extrabold"
            style={{
              width: 20,
              height: 20,
              borderRadius: 4,
              background: n.sourceColor,
              fontSize: "0.55rem",
              border: n.sourceColor === "#000000" || n.sourceColor === "#1A1A2E" ? "1px solid rgba(255,255,255,0.15)" : undefined,
            }}
          >
            {n.sourceInitials}
          </div>
        )}
        <span className="text-[0.7rem] font-bold uppercase" style={{ fontFamily: FONT_MONO, color: "rgba(240,246,255,0.5)", letterSpacing: "0.06em" }}>
          {n.source}
        </span>
        <span className="text-[0.55rem] ml-auto" style={{ fontFamily: FONT_MONO, color: "rgba(240,246,255,0.2)" }}>
          {n.date}
        </span>
      </div>

      {n.headlineImage ? (
        <img src={n.headlineImage} alt={n.headline + n.highlightText} className="w-full rounded mb-2" style={{ maxHeight: 120, objectFit: "contain", objectPosition: "left" }} />
      ) : (
        <p className="text-[1.05rem] leading-[1.4] mb-2" style={{ fontFamily: FONT_DISPLAY, color: IVORY, fontWeight: 600 }}>
          {n.headline}<span style={{ color: ARC, fontWeight: 700 }}>{n.highlightText}</span>
        </p>
      )}

      {/* Excerpt */}
      <p
        className="text-[0.75rem] leading-[1.5] line-clamp-2"
        style={{ fontFamily: FONT_BODY, color: "rgba(200,214,229,0.35)", fontWeight: 300 }}
      >
        {n.excerpt}
      </p>
    </div>
  </div>
);

// ── Main Section ──

export default function ApocalypseSection({ onCTA }: ApocalypseSectionProps) {
  return (
    <>
      <style>{`
        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <section className="relative px-6 overflow-hidden" style={{ backgroundColor: SECTION_BG, paddingTop: 100, paddingBottom: 120 }}>
        {/* Radial glow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(56,189,248,0.04) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 20% 80%, rgba(56,189,248,0.02) 0%, transparent 50%)",
        }} />
        {/* Grid overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-50" style={{
          backgroundImage: "linear-gradient(rgba(56,189,248,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

        <div className="max-w-[1100px] mx-auto relative z-10">
          {/* Eyebrow + Title */}
          <div className="mb-4 flex items-center gap-2.5">
            <span className="inline-block w-8 h-px" style={{ backgroundColor: ARC }} />
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.25em]" style={{ fontFamily: FONT_MONO, color: ARC }}>
              Enquanto você espera
            </span>
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: ARC, boxShadow: `0 0 8px ${ARC}`, animation: "pulse 2s ease-in-out infinite" }} />
          </div>

          <h2
            className="text-[clamp(2.2rem,5vw,3.6rem)] font-black leading-[1.1] mb-5 max-w-[700px] uppercase"
            style={{ fontFamily: FONT_DISPLAY, color: IVORY }}
          >
            O mercado já está{" "}
            <em style={{ fontStyle: "italic", color: ARC }}>sentindo o impacto</em>
          </h2>

          <p className="text-[1.05rem] max-w-[620px] mb-16" style={{ fontFamily: FONT_BODY, color: DIM, lineHeight: 1.7, fontWeight: 300 }}>
            Empresas bilionárias estão derretendo em tempo real. Não é teoria — são números.{" "}
            <strong style={{ color: IVORY, fontWeight: 600 }}>
              Quem não se adapta à inteligência artificial está sendo engolido por quem já se adaptou.
            </strong>
          </p>
        </div>

        {/* Ticker */}
        <div
          className="w-screen relative left-1/2 -translate-x-1/2 overflow-hidden mb-14"
          style={{ borderTop: `0.5px solid rgba(56,189,248,0.12)`, borderBottom: `0.5px solid rgba(56,189,248,0.12)`, padding: "14px 0", backgroundColor: "rgba(56,189,248,0.02)" }}
        >
          <TickerTrack />
        </div>

        <div className="max-w-[1100px] mx-auto relative z-10">
          {/* Casualty Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-[72px]">
            {casualties.map((c, i) => (
              <CasualtyCard key={i} c={c} />
            ))}
          </div>

          {/* News Section */}
          <div className="mb-[72px]">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em]" style={{ fontFamily: FONT_MONO, color: ARC_DIM }}>
                Manchetes reais
              </span>
              <span className="flex-1 h-px" style={{ background: "rgba(56,189,248,0.1)" }} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {newsClippings.map((n, i) => (
                <NewsClip key={i} n={n} />
              ))}
            </div>
          </div>

          {/* CTA */}
          <div
            className="text-center p-12 relative overflow-hidden"
            style={{
              border: `0.5px solid rgba(56,189,248,0.12)`,
              borderRadius: 14,
              background: `linear-gradient(135deg, rgba(56,189,248,0.03) 0%, rgba(6,10,18,0.95) 100%)`,
            }}
          >
            <div className="absolute top-[-1px] left-[20%] right-[20%] h-px" style={{ background: `linear-gradient(90deg, transparent, ${ARC}50, transparent)` }} />

            <h3
              className="text-[clamp(1.4rem,3vw,2rem)] font-bold mb-3 leading-snug uppercase"
              style={{ fontFamily: FONT_DISPLAY, color: IVORY }}
            >
              A pergunta não é se a IA vai mudar tudo.
              <br />
              A pergunta é: <span style={{ color: ARC }}>você vai estar pronto?</span>
            </h3>

            <p className="text-[0.95rem] mb-8 max-w-[500px] mx-auto" style={{ fontFamily: FONT_BODY, color: DIM, fontWeight: 300 }}>
              Na masterclass, eu vou te mostrar como usar IA na prática — do jeito que quem está ganhando já usa.
            </p>

            <button
              onClick={() => onCTA("apocalypse")}
              className="inline-flex items-center gap-2 text-[0.95rem] font-semibold px-9 py-3.5 transition-all duration-300 uppercase"
              style={{
                fontFamily: FONT_MONO,
                color: VOID,
                backgroundColor: ARC,
                borderRadius: 6,
                letterSpacing: "0.08em",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#7DD3FC";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(56,189,248,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = ARC;
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
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
