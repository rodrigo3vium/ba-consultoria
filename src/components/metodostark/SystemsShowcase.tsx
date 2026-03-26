import { ArrowRight } from "lucide-react";
import viralVideoFinderImg from "@/assets/sistema-viral-video-finder.png";
import relatorioStoriesImg from "@/assets/sistema-relatorio-stories.png";
import analiseCallsImg from "@/assets/sistema-analise-calls.png";

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

interface Props {
  onCTA: (location: string) => void;
}

const systems = [
  {
    title: "Viral Video Finder",
    description: "Sistema que encontra vídeos virais em qualquer nicho para facilitar a produção de conteúdo. Filtra por plataforma, palavras-chave e métricas de engajamento.",
    image: viralVideoFinderImg,
    tags: ["Conteúdo", "TikTok", "Pesquisa"],
    stat: "Horas → Minutos",
  },
  {
    title: "Relatório de Stories",
    description: "Sistema que analisa automaticamente a qualidade de produção de Stories do Instagram, gerando relatórios com métricas de consistência visual, engajamento e resumo do dia.",
    image: relatorioStoriesImg,
    tags: ["Instagram", "Análise", "Automação"],
    stat: "Manual → Automático",
  },
  {
    title: "Análise de Calls de Vendas",
    description: "Sistema que analisa automaticamente calls de fechamento, gerando relatórios com score de performance por fase, taxa de conversão e pontos de melhoria.",
    image: analiseCallsImg,
    tags: ["Vendas", "Análise", "IA"],
    stat: "5 calls → 1 relatório",
  },
];

const SystemCard = ({ system }: { system: typeof systems[0] }) => (
  <div
    className="flex-shrink-0 w-[380px] overflow-hidden transition-all duration-300"
    style={{
      backgroundColor: SURFACE,
      border: `0.5px solid rgba(56,189,248,0.1)`,
      borderRadius: 14,
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = "rgba(56,189,248,0.3)";
      e.currentTarget.style.transform = "translateY(-4px)";
      e.currentTarget.style.boxShadow = "0 12px 40px rgba(56,189,248,0.08)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = "rgba(56,189,248,0.1)";
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "none";
    }}
  >
    {/* Screenshot */}
    <div className="relative overflow-hidden" style={{ height: 200 }}>
      <img
        src={system.image}
        alt={system.title}
        className="w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, transparent 60%, ${SURFACE})` }} />
      {/* Stat badge */}
      <div
        className="absolute top-3 right-3"
        style={{
          fontFamily: FONT_MONO,
          fontSize: "0.6rem",
          fontWeight: 600,
          letterSpacing: "0.08em",
          color: STARK_GOLD,
          background: "rgba(6,10,18,0.85)",
          backdropFilter: "blur(8px)",
          padding: "4px 10px",
          borderRadius: 6,
          border: `0.5px solid rgba(245,158,11,0.2)`,
        }}
      >
        {system.stat}
      </div>
    </div>

    {/* Content */}
    <div className="p-5 space-y-3">
      <div className="flex items-center gap-2 flex-wrap">
        {system.tags.map((tag, i) => (
          <span
            key={i}
            style={{
              fontFamily: FONT_MONO,
              fontSize: "0.52rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase" as const,
              color: ARC,
              background: "rgba(56,189,248,0.08)",
              padding: "3px 8px",
              borderRadius: 4,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 style={{ fontFamily: FONT_DISPLAY, fontSize: "1.2rem", fontWeight: 700, color: IVORY, lineHeight: 1.2 }}>
        {system.title}
      </h3>
      <p style={{ fontFamily: FONT_BODY, fontSize: "0.82rem", color: TEXT_COLOR, lineHeight: 1.6, fontWeight: 300 }}>
        {system.description}
      </p>
    </div>
  </div>
);

const ScrollTrack = () => {
  const allSystems = [...systems, ...systems, ...systems, ...systems];
  return (
    <div className="flex gap-6" style={{ animation: "systems-scroll 30s linear infinite" }}>
      {allSystems.map((system, i) => (
        <SystemCard key={i} system={system} />
      ))}
    </div>
  );
};

const SystemsShowcase = ({ onCTA }: Props) => {
  return (
    <section className="relative" style={{ paddingTop: 100, paddingBottom: 100, backgroundColor: VOID, overflow: "hidden" }}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 60% 40% at 50% 30%, rgba(56,189,248,0.04) 0%, transparent 60%)",
      }} />

      <div className="max-w-5xl mx-auto px-6 relative z-10 mb-14">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-4">
          <div style={{ width: 32, height: 1, background: ARC }} />
          <span style={{ fontFamily: FONT_MONO, fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: ARC }}>
            Sistemas reais
          </span>
          <div className="animate-pulse" style={{ width: 6, height: 6, background: ARC_BRIGHT, borderRadius: "50%", boxShadow: "0 0 10px rgba(56,189,248,0.5)" }} />
        </div>

        <h2 style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(2rem, 4.5vw, 3.2rem)", fontWeight: 700, lineHeight: 1.1, color: IVORY, marginBottom: 16, maxWidth: 700 }}>
          Exemplos do que você vai{" "}
          <span style={{ fontStyle: "italic", color: ARC }}>aprender a construir</span>
        </h2>

        <p style={{ fontFamily: FONT_BODY, fontSize: "1rem", color: TEXT_COLOR, lineHeight: 1.7, maxWidth: 580, fontWeight: 300 }}>
          Receba os sistemas prontos, para dar Control C + V e implementar no seu negócio e no dos seus clientes.
        </p>
      </div>

      {/* Scrolling cards */}
      <div
        className="w-screen relative left-1/2 -translate-x-1/2 overflow-hidden"
        style={{ padding: "20px 0" }}
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: `linear-gradient(to right, ${VOID}, transparent)` }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: `linear-gradient(to left, ${VOID}, transparent)` }} />
        <ScrollTrack />
      </div>

      {/* CTA below */}
      <div className="max-w-5xl mx-auto px-6 relative z-10 mt-14 text-center">
        <p className="mb-6" style={{ fontFamily: FONT_BODY, fontSize: "0.95rem", color: TEXT_COLOR, fontWeight: 300 }}>
          E esses são só alguns exemplos. Dentro do Método STARK, você aprende a criar sistemas como esses — e a vendê-los.
        </p>
        <button
          onClick={() => onCTA("systems-showcase")}
          className="inline-flex items-center gap-2 transition-all duration-300 font-semibold"
          style={{ fontFamily: FONT_BODY, fontSize: "0.95rem", color: VOID, background: ARC, padding: "14px 36px", borderRadius: 8, border: "none", cursor: "pointer" }}
          onMouseEnter={(e) => { e.currentTarget.style.background = ARC_BRIGHT; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(56,189,248,0.2)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = ARC; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
        >
          Quero aprender a construir sistemas assim
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <style>{`
        @keyframes systems-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default SystemsShowcase;
