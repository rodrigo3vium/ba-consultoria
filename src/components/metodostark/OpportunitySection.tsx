import { ArrowRight } from "lucide-react";

const VOID = "#060A12";
const SURFACE = "#0C1220";
const HUD_DARK = "#111A2E";
const ARC = "#38BDF8";
const ARC_BRIGHT = "#7DD3FC";
const STARK_GOLD = "#F59E0B";
const IVORY = "#F0F6FF";
const TEXT_COLOR = "#C8D6E5";
const DIM = "#5A7089";

const FONT_DISPLAY = "'Chakra Petch', sans-serif";
const FONT_MONO = "'IBM Plex Mono', monospace";
const FONT_BODY = "'Exo 2', sans-serif";

const BORDER_NORMAL = "rgba(56,189,248,0.08)";
const BORDER_HOVER = "rgba(56,189,248,0.18)";

interface Props {
  onCTA: (location: string) => void;
}

const heroStories = [
  {
    flag: "🇮🇱",
    tag: "Fundador solo",
    name: "Maor Shlomo",
    role: "Ex-militar reservista · Sem co-fundador · Sem investidor",
    stat: "$80M",
    statColor: ARC,
    statLabel: "Exit em 6 meses",
    detail: "Construiu o Base44 sozinho, do zero, em dezembro de 2024. Em junho de 2025, vendeu para a Wix por US$ 80 milhões em cash. Em maio, a empresa lucrou US$ 189K — um homem só, bootstrapped.",
    source: "TechCrunch · GREY Journal",
  },
  {
    flag: "🇳🇱",
    tag: "Solo de Bali",
    name: "Danny Postma",
    role: "Ex-web marketer · Aprendeu a programar aos 25 · Bootstrapped",
    stat: "$300K",
    statColor: STARK_GOLD,
    statLabel: "Por mês, sozinho",
    detail: "Construiu o HeadshotPro (gerador de fotos com IA) trabalhando sozinho de Bali. Fatura US$ 300K/mês. Seu produto anterior vendeu por US$ 1 milhão em 8 meses.",
    source: "Indie Hackers · Unite.AI · Starter Story",
  },
];

const smallStories = [
  { emoji: "⏱️", stat: "$100K/ano", label: "Com 60 dias de prazo", detail: "Jaleel e Hussein largaram os empregos com 60 dias pra ganhar dinheiro. Construíram o QuickTables na Lovable. Hoje faturam +US$ 100K/ano.", source: "Lovable Blog" },
  { emoji: "🇧🇷", stat: "R$3M", label: "Em 48 horas", detail: "Q Group, edtech brasileira, construiu uma versão premium da plataforma em 1 mês usando IA. Gerou R$ 3 milhões de receita em 48h.", source: "Lovable Blog" },
  { emoji: "🏥", stat: "$1M ARR", label: "Em 5 meses", detail: "Allan construiu o ShiftNex, plataforma de staffing para saúde. Atingiu US$ 1 milhão de receita recorrente em 5 meses, com 5.000+ usuários.", source: "Lovable Blog" },
  { emoji: "🧪", stat: "$8.8M/ano", label: "100+ ferramentas de IA", detail: "Nick Dobos, autodidata, construiu +100 ferramentas de IA em um site só. Fatura ~US$ 733K/mês. Uma pessoa.", source: "CrazyBurst" },
  { emoji: "🎨", stat: "$500M/ano", label: "Zero investimento externo", detail: "Midjourney fatura US$ 500M/ano com ~40 funcionários. Nunca levantou um centavo de investidor. Receita por funcionário: +US$ 5M.", source: "Sacra · Contrary Research" },
  { emoji: "👗", stat: "$800K ARR", label: "Em 9 meses", detail: "Henrik e Peter construíram o Lumoo, plataforma de moda com IA e prova virtual, usando Lovable. Hoje atendem +15 marcas de moda nos Nórdicos.", source: "Lovable Blog" },
];

const dataStrip = [
  { value: "36%", label: "das novas empresas são fundadas por solopreneurs" },
  { value: "44%", label: "dos SaaS lucrativos são de fundadores solo" },
  { value: "95%", label: "de redução em custo vs. equipe tradicional" },
  { value: "2026", label: "ano da 1ª empresa bilionária de 1 pessoa — Dario Amodei, CEO Anthropic" },
];

const OpportunitySection = ({ onCTA }: Props) => {
  return (
    <section className="relative px-6" style={{ paddingTop: "100px", paddingBottom: "120px", backgroundColor: VOID, overflow: "hidden" }}>
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(56,189,248,0.06) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(245,158,11,0.04) 0%, transparent 50%)",
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(56,189,248,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.02) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        opacity: 0.4,
      }} />

      <div className="max-w-5xl mx-auto relative z-10 space-y-16">
        {/* Header */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div style={{ width: 32, height: 1, background: ARC }} />
            <span style={{ fontFamily: FONT_MONO, fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: ARC }}>
              O outro lado da moeda
            </span>
            <div className="animate-pulse" style={{ width: 6, height: 6, background: ARC_BRIGHT, borderRadius: "50%", boxShadow: `0 0 10px rgba(56,189,248,0.5)` }} />
          </div>

          <h2 style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(2.2rem, 5vw, 3.6rem)", fontWeight: 700, lineHeight: 1.1, color: IVORY, marginBottom: 20, maxWidth: 750 }}>
            Mas pra quem sabe usar,{" "}
            <span style={{ fontStyle: "italic", color: ARC }}>as oportunidades são infinitas</span>
          </h2>

          <p style={{ fontFamily: FONT_BODY, fontSize: "1.05rem", color: TEXT_COLOR, lineHeight: 1.7, maxWidth: 640, fontWeight: 300 }}>
            Enquanto empresas bilionárias derretem, pessoas comuns estão construindo negócios milionários — sozinhas, sem equipe, sem investidor. A diferença? <strong style={{ color: IVORY, fontWeight: 600 }}>Saber usar IA como alavanca.</strong>
          </p>
        </div>

        {/* Hero Stories */}
        <div className="grid md:grid-cols-2 gap-4">
          {heroStories.map((story, i) => (
            <div
              key={i}
              className="p-7 transition-all duration-300"
              style={{ backgroundColor: SURFACE, border: `1px solid rgba(56,189,248,0.1)`, borderRadius: 14, position: "relative", overflow: "hidden" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(56,189,248,0.25)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(56,189,248,0.1)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{ fontFamily: FONT_MONO, fontSize: "0.58rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: ARC, background: "rgba(56,189,248,0.08)", padding: "4px 10px", borderRadius: 4, display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 16 }}>
                {story.flag} {story.tag}
              </div>
              <div style={{ fontFamily: FONT_BODY, fontSize: "0.85rem", fontWeight: 600, color: IVORY, marginBottom: 4 }}>{story.name}</div>
              <div style={{ fontFamily: FONT_MONO, fontSize: "0.6rem", color: TEXT_COLOR, marginBottom: 18, letterSpacing: "0.04em" }}>{story.role}</div>
              <div style={{ fontFamily: FONT_DISPLAY, fontSize: "2.6rem", fontWeight: 700, lineHeight: 1, marginBottom: 4, color: story.statColor, letterSpacing: "-0.02em" }}>{story.stat}</div>
              <div style={{ fontFamily: FONT_MONO, fontSize: "0.58rem", textTransform: "uppercase", letterSpacing: "0.12em", color: TEXT_COLOR, marginBottom: 18 }}>{story.statLabel}</div>
              <div style={{ fontFamily: FONT_BODY, fontSize: "0.85rem", color: TEXT_COLOR, lineHeight: 1.6, fontWeight: 300 }}>{story.detail}</div>
              <div style={{ fontFamily: FONT_MONO, fontSize: "0.52rem", color: DIM, marginTop: 14, textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.6 }}>{story.source}</div>
            </div>
          ))}
        </div>

        {/* Small Stories Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {smallStories.map((story, i) => (
            <div
              key={i}
              className="p-5 transition-all duration-300"
              style={{ backgroundColor: HUD_DARK, border: `1px solid rgba(245,158,11,0.08)`, borderRadius: 12 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(245,158,11,0.2)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(245,158,11,0.08)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <span className="text-2xl block mb-3">{story.emoji}</span>
              <div style={{ fontFamily: FONT_DISPLAY, fontSize: "1.6rem", fontWeight: 700, color: STARK_GOLD, lineHeight: 1, marginBottom: 4 }}>{story.stat}</div>
              <div style={{ fontFamily: FONT_MONO, fontSize: "0.55rem", textTransform: "uppercase", letterSpacing: "0.1em", color: TEXT_COLOR, marginBottom: 12 }}>{story.label}</div>
              <div style={{ fontFamily: FONT_BODY, fontSize: "0.8rem", color: TEXT_COLOR, lineHeight: 1.55, fontWeight: 300 }}>{story.detail}</div>
              <div style={{ fontFamily: FONT_MONO, fontSize: "0.5rem", color: DIM, marginTop: 10, textTransform: "uppercase", letterSpacing: "0.08em", opacity: 0.5 }}>{story.source}</div>
            </div>
          ))}
        </div>

        {/* Data Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden" style={{ background: "rgba(56,189,248,0.06)", border: `1px solid rgba(56,189,248,0.1)`, borderRadius: 12 }}>
          {dataStrip.map((d, i) => (
            <div key={i} className="text-center" style={{ backgroundColor: VOID, padding: "24px 20px" }}>
              <div style={{ fontFamily: FONT_DISPLAY, fontSize: "1.8rem", fontWeight: 700, color: ARC, lineHeight: 1, marginBottom: 6 }}>{d.value}</div>
              <div style={{ fontFamily: FONT_MONO, fontSize: "0.55rem", textTransform: "uppercase", letterSpacing: "0.1em", color: TEXT_COLOR, lineHeight: 1.4 }}>{d.label}</div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="text-center relative py-10">
          <span className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none select-none" style={{ fontFamily: FONT_DISPLAY, fontSize: "6rem", color: "rgba(56,189,248,0.1)", lineHeight: 1 }}>"</span>
          <p className="relative z-10 max-w-2xl mx-auto mb-3" style={{ fontFamily: FONT_BODY, fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", fontStyle: "italic", color: IVORY, lineHeight: 1.5 }}>
            Quando perguntaram ao CEO da Anthropic quando veríamos a primeira empresa de um bilhão de dólares com um único funcionário, a resposta foi direta: <span style={{ color: ARC, fontWeight: 700, fontStyle: "normal" }}>"2026."</span>
          </p>
          <span style={{ fontFamily: FONT_MONO, fontSize: "0.65rem", color: TEXT_COLOR, letterSpacing: "0.1em", textTransform: "uppercase" }}>Dario Amodei · CEO, Anthropic</span>
        </div>

        {/* CTA */}
        <div className="text-center relative overflow-hidden" style={{ padding: "48px 32px", border: `1px solid rgba(56,189,248,0.12)`, borderRadius: 16, background: "linear-gradient(135deg, rgba(56,189,248,0.03) 0%, rgba(6,10,18,0.95) 100%)" }}>
          <div className="absolute top-0 left-[20%] right-[20%] h-px" style={{ background: `linear-gradient(90deg, transparent, ${ARC}, transparent)` }} />
          <h3 className="mb-3" style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700, color: IVORY, lineHeight: 1.3 }}>
            Essas pessoas não são gênios.{" "}
            <em style={{ color: STARK_GOLD, fontStyle: "italic" }}>Elas só começaram antes.</em>
          </h3>
          <p className="max-w-lg mx-auto mb-8" style={{ fontFamily: FONT_BODY, fontSize: "0.95rem", color: TEXT_COLOR, fontWeight: 300, lineHeight: 1.6 }}>
            Na masterclass, você vai ver na prática como eu uso IA para construir, automatizar e economizar — e como você pode fazer o mesmo a partir de hoje.
          </p>
          <button
            onClick={() => onCTA("opportunity")}
            className="inline-flex items-center gap-2 transition-all duration-300 font-semibold"
            style={{ fontFamily: FONT_BODY, fontSize: "0.95rem", color: VOID, background: ARC, padding: "14px 36px", borderRadius: 8, letterSpacing: "0.02em", border: "none", cursor: "pointer" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = ARC_BRIGHT; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(56,189,248,0.2)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = ARC; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
          >
            Garantir minha vaga
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OpportunitySection;
