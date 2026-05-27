import { useEffect, useRef, useState } from "react";
import { tracker } from "@/lib/tracking";
import { buildHotmartCheckoutUrl } from "@/lib/hotmartUtils";
import rodrigoPhoto from "@/assets/founders/rodrigo-albuquerque.webp";
import bancoPromptsImage from "@/assets/banco-prompts-laptop.png";
import bancoPromptsMobileImage from "@/assets/banco-prompts-mobile.png";

const HudCorners = ({ color = "var(--ic-accent-cyan)", size = 14, inset = 8 }: { color?: string; size?: number; inset?: number }) => (
  <>
    <span aria-hidden style={{ position: "absolute", top: inset, left: inset, width: size, height: size, borderTop: `1px solid ${color}`, borderLeft: `1px solid ${color}`, pointerEvents: "none" }} />
    <span aria-hidden style={{ position: "absolute", top: inset, right: inset, width: size, height: size, borderTop: `1px solid ${color}`, borderRight: `1px solid ${color}`, pointerEvents: "none" }} />
    <span aria-hidden style={{ position: "absolute", bottom: inset, left: inset, width: size, height: size, borderBottom: `1px solid ${color}`, borderLeft: `1px solid ${color}`, pointerEvents: "none" }} />
    <span aria-hidden style={{ position: "absolute", bottom: inset, right: inset, width: size, height: size, borderBottom: `1px solid ${color}`, borderRight: `1px solid ${color}`, pointerEvents: "none" }} />
  </>
);

const Coord = ({ children }: { children: React.ReactNode }) => (
  <div className="ic-mono" style={{ fontSize: 10, color: "var(--ic-text-muted)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 18 }}>
    {children}
  </div>
);

const ImersaoClaudeV3 = () => {
  const [activeTab, setActiveTab] = useState("revolucoes");
  const adoptionChartRef = useRef<HTMLCanvasElement>(null);
  const users100mChartRef = useRef<HTMLCanvasElement>(null);
  const marketShareChartRef = useRef<HTMLCanvasElement>(null);
  const adoptionBuilt = useRef(false);
  const users100mBuilt = useRef(false);
  const marketShareBuilt = useRef(false);
  const chartScriptLoaded = useRef(false);

  useEffect(() => {
    tracker.page("Imersão Claude v3");
    document.body.style.backgroundColor = "#05090B";
    document.body.style.paddingTop = "0";
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.paddingTop = "";
    };
  }, []);

  useEffect(() => {
    if (chartScriptLoaded.current) return;
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js";
    script.async = true;
    script.onload = () => { chartScriptLoaded.current = true; };
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll(".rev-item");
    items.forEach((el) => {
      const htmlEl = el as HTMLElement;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              (e.target as HTMLElement).style.animationPlayState = "running";
              observer.unobserve(e.target);
            }
          });
        },
        { threshold: 0.2 }
      );
      htmlEl.style.animationPlayState = "paused";
      observer.observe(htmlEl);
    });
  }, []);

  const buildAdoptionChart = () => {
    if (adoptionBuilt.current || !adoptionChartRef.current || !(window as any).Chart) return;
    adoptionBuilt.current = true;
    const ctx = adoptionChartRef.current.getContext("2d");
    if (!ctx) return;
    new (window as any).Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Telefone\n(1876)", "Eletricidade\n(1882)", "Rádio\n(1920)", "TV\n(1950)", "PC\n(1981)", "Internet\n(1991)", "Smartphone\n(2007)", "IA Gen.\n(2022)"],
        datasets: [{
          data: [100, 70, 22, 18, 16, 7, 5, 3],
          backgroundColor: ["#3A3F3A","#4D5252","#5E6360","#6B6F6C","#7D827D","#0F4F58","#20DDEB","#E44935"],
          borderRadius: 2, borderSkipped: false, barPercentage: 0.7,
        }],
      },
      options: {
        indexAxis: "y", responsive: true, maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: "#0F1518", titleColor: "#F2EDE4", bodyColor: "#C8C0B2",
            borderColor: "rgba(32,221,235,0.3)", borderWidth: 1,
            callbacks: { label: (ctx: any) => ctx.raw + " anos para atingir 50% de adoção" },
          },
        },
        scales: {
          x: {
            grid: { color: "rgba(255,255,255,0.04)" },
            ticks: { color: "#7D827D", font: { family: "'IBM Plex Mono', monospace", size: 11 }, callback: (v: any) => v + " anos" },
            title: { display: true, text: "Anos até 50% de adoção", color: "#7D827D", font: { family: "'IBM Plex Mono', monospace", size: 11 } },
          },
          y: { grid: { display: false }, ticks: { color: "#C8C0B2", font: { family: "'IBM Plex Mono', monospace", size: 11 } } },
        },
      },
    });
  };

  const build100mChart = () => {
    if (users100mBuilt.current || !users100mChartRef.current || !(window as any).Chart) return;
    users100mBuilt.current = true;
    const ctx = users100mChartRef.current.getContext("2d");
    if (!ctx) return;
    new (window as any).Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Telefone", "Facebook", "YouTube", "Instagram", "Spotify", "TikTok", "ChatGPT"],
        datasets: [{
          data: [900, 54, 48, 30, 18, 9, 2],
          backgroundColor: ["#3A3F3A","#4D5252","#5E6360","#6B6F6C","#7D827D","#0F4F58","#E44935"],
          borderRadius: 2, borderSkipped: false, barPercentage: 0.65,
        }],
      },
      options: {
        indexAxis: "y", responsive: true, maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: "#0F1518", titleColor: "#F2EDE4", bodyColor: "#C8C0B2",
            borderColor: "rgba(32,221,235,0.3)", borderWidth: 1,
            callbacks: {
              label: (ctx: any) => {
                const v = ctx.raw;
                if (v >= 12) return Math.round(v / 12) + " anos (" + v + " meses)";
                return v + (v === 1 ? " mês" : " meses");
              },
            },
          },
        },
        scales: {
          x: {
            grid: { color: "rgba(255,255,255,0.04)" },
            ticks: {
              color: "#7D827D", font: { family: "'IBM Plex Mono', monospace", size: 11 },
              callback: (v: any) => { if (v >= 12) return Math.round(v / 12) + " anos"; return v + " meses"; },
            },
            title: { display: true, text: "Tempo até 100 milhões de usuários", color: "#7D827D", font: { family: "'IBM Plex Mono', monospace", size: 11 } },
          },
          y: { grid: { display: false }, ticks: { color: "#C8C0B2", font: { family: "'IBM Plex Mono', monospace", size: 11 } } },
        },
      },
    });
  };

  const buildMarketShareChart = () => {
    if (marketShareBuilt.current || !marketShareChartRef.current || !(window as any).Chart) return;
    marketShareBuilt.current = true;
    const ctx = marketShareChartRef.current.getContext("2d");
    if (!ctx) return;
    new (window as any).Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Fev\n2025","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez","Jan\n2026","Fev"],
        datasets: [
          { label: "Claude Enterprise", data: [3,3,3,3,3,3,3,3,3,4,4,4,5], backgroundColor: "#0A3438", stack: "s" },
          { label: "Claude Max",        data: [2,2,2,2,2,2,2,2,2,3,4,5,5], backgroundColor: "#0F4F58", stack: "s" },
          { label: "Claude Team",       data: [4,5,7,10,13,15,17,20,22,28,33,38,45], backgroundColor: "#1B95A5", stack: "s" },
          { label: "Outro Anthropic",   data: [1,2,2,3,3,3,3,3,3,4,5,6,14], backgroundColor: "#20DDEB", stack: "s" },
          { label: "ChatGPT Business",  data: [44,41,38,36,34,33,33,32,30,25,19,15,12], backgroundColor: "#6A6F6B", stack: "s" },
          { label: "ChatGPT Plus",      data: [20,18,15,13,12,12,12,12,13,14,16,16,10], backgroundColor: "#535854", stack: "s" },
          { label: "ChatGPT Pro",       data: [13,13,14,14,14,14,13,12,12,11,10,10,5], backgroundColor: "#3D423E", stack: "s" },
          { label: "Outro OpenAI",      data: [13,16,19,19,19,18,17,16,15,11,9,6,4], backgroundColor: "#2A2E2B", stack: "s" },
        ],
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: "#0F1518", titleColor: "#F2EDE4", bodyColor: "#C8C0B2",
            borderColor: "rgba(32,221,235,0.3)", borderWidth: 1,
            callbacks: { label: (c: any) => ` ${c.dataset.label}: ${c.parsed.y}%` },
          },
        },
        scales: {
          x: { stacked: true, grid: { display: false }, ticks: { font: { size: 11, family: "'IBM Plex Mono', monospace" }, color: "#7D827D", autoSkip: false, maxRotation: 0 } },
          y: { stacked: true, min: 0, max: 100, ticks: { stepSize: 10, font: { size: 11, family: "'IBM Plex Mono', monospace" }, color: "#7D827D", callback: (v: any) => v + "%" }, grid: { color: "rgba(255,255,255,0.05)" } },
        },
      },
    });
  };

  useEffect(() => {
    const canvas = marketShareChartRef.current;
    if (!canvas) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            buildMarketShareChart();
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(canvas);
    return () => observer.disconnect();
  }, []);

  const switchTab = (tab: string) => {
    setActiveTab(tab);
    if (tab === "adocao") setTimeout(buildAdoptionChart, 50);
    if (tab === "100m") setTimeout(build100mChart, 50);
  };

  const handleCTA = (location: string) => {
    tracker.track("cta_click", { product: "imersao-claude-v3", cta_location: location, page: "/educacao/imersao-claude-v3" });
    const checkoutUrl = buildHotmartCheckoutUrl({
      baseUrl: "https://pay.hotmart.com/T104822269G?checkoutMode=10",
    });
    window.open(checkoutUrl, "_blank");
  };

  const forYouItems = [
    "Você usa ChatGPT mas sente que está só arranhando a superfície — sabe que dá pra fazer mais, mas não sabe como",
    "Você é dono de agência, profissional liberal ou empresário do digital e quer usar IA pra sair do operacional",
    "Você trabalha 50-60 horas por semana e sente que é o gargalo do próprio negócio",
    "Você já testou 2 ou 3 ferramentas de IA e não implementou nenhuma de verdade",
    "Você não é de tech — é empresário, e quer IA aplicada ao seu negócio, não teoria",
  ];

  const faqItems = [
    { q: "Quanto custa?", a: "A imersão completa com as 3 aulas custa R$47 — pagamento único ou parcelado em até 6× no cartão. E você tem garantia incondicional de 7 dias: se não gostar, peça o reembolso integral." },
    { q: "Preciso saber programar?", a: "De jeito nenhum. O Claude entende comandos em português. Você conversa com ele, diz o que precisa, e ele executa. A imersão inteira foi desenhada para quem nunca escreveu uma linha de código na vida." },
    { q: "É só conteúdo motivacional ou tem prática?", a: "Muita prática. Na Aula 3, eu abro o Claude e construo um sistema completo na sua frente. Você sai sabendo replicar. Sem enrolação, sem teoria vazia." },
    { q: "Isso é só pra quem trabalha com tecnologia?", a: "Não. A imersão foi pensada para empreendedores, profissionais liberais, gestores e qualquer pessoa que opera um negócio." },
    { q: "E se eu não gostar?", a: "Você tem 7 dias de garantia incondicional. Se sentir que não valeu, basta pedir o reembolso — sem perguntas, sem burocracia, sem ressentimento. O risco é zero." },
  ];

  // Grain SVG data URI — feTurbulence noise for analog texture
  const grainDataUri = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.95 0 0 0 0 0.93 0 0 0 0 0.88 0 0 0 0.55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.18'/></svg>`;

  return (
    <div className="ic-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Anton&family=IBM+Plex+Mono:wght@400;500;600&family=Inter+Tight:wght@300;400;500;600;700;800&display=swap');
        .ic-page {
          font-family: 'Inter Tight', 'Inter', sans-serif;
          color: var(--ic-text-primary);
          line-height: 1.65;
          overflow-x: hidden;
          position: relative;
          --ic-bg-main: #05090B;
          --ic-bg-deep: #020405;
          --ic-bg-section: #0B1114;
          --ic-bg-card: #0F1518;
          --ic-bg-texture: #11171A;
          --ic-text-primary: #F2EDE4;
          --ic-text-secondary: #C8C0B2;
          --ic-text-muted: #7D827D;
          --ic-accent-cyan: #20DDEB;
          --ic-accent-cyan-soft: #38F3FF;
          --ic-accent-cyan-glow: rgba(32,221,235,0.45);
          --ic-accent-red: #E44935;
          --ic-grid-line: rgba(255,255,255,0.05);
          --ic-grid-strong: rgba(255,255,255,0.10);
          --ic-border-subtle: rgba(255,255,255,0.06);
          --ic-border-accent: rgba(32,221,235,0.20);
          background: var(--ic-bg-main);
        }
        .ic-page * { box-sizing: border-box; }
        /* ── GLOBAL OVERLAYS ── */
        .ic-page::before {
          content: ''; position: fixed; inset: 0;
          pointer-events: none; z-index: 1;
          background-image:
            linear-gradient(var(--ic-grid-line) 1px, transparent 1px),
            linear-gradient(90deg, var(--ic-grid-line) 1px, transparent 1px);
          background-size: 80px 80px;
        }
        .ic-page::after {
          content: ''; position: fixed; inset: 0;
          pointer-events: none; z-index: 2;
          background:
            radial-gradient(ellipse at 50% 30%, transparent 30%, rgba(0,0,0,0.45) 70%, rgba(0,0,0,0.78) 100%),
            url("${grainDataUri}");
          background-repeat: no-repeat, repeat;
        }
        .ic-page > * { position: relative; z-index: 3; }
        /* ── TYPOGRAPHY ── */
        .ic-page h1, .ic-page h2, .ic-page h3, .ic-page h4 {
          font-family: 'Bebas Neue', 'Anton', 'Oswald', sans-serif;
          font-weight: 400;
          text-transform: uppercase;
          letter-spacing: 0.02em;
          line-height: 0.95;
          color: var(--ic-text-primary);
        }
        .ic-page h1 { font-size: clamp(2.6rem, 7vw, 5rem); }
        .ic-page h2 { font-size: clamp(1.8rem, 5vw, 3rem); }
        .ic-page h3 { font-size: clamp(1.2rem, 3vw, 1.5rem); }
        .ic-page strong { color: var(--ic-text-primary); font-weight: 700; }
        .ic-container { max-width: 880px; margin: 0 auto; padding: 0 24px; }
        .ic-section { padding: 96px 0; position: relative; }
        /* ── LIGHT VARIANT — papel quente ── */
        .ic-section--light {
          background: #EFECE3;
          --ic-text-primary: #0A0E10;
          --ic-text-secondary: #3A3F3A;
          --ic-text-muted: #6A7068;
          --ic-bg-card: #FFFCF5;
          --ic-border-subtle: #D8D2C5;
          --ic-border-accent: rgba(15,79,88,0.30);
        }
        .ic-section--light h1,
        .ic-section--light h2,
        .ic-section--light h3,
        .ic-section--light h4 { color: #0A0E10; }
        .ic-section--light .ic-text-accent { color: #0F4F58; }
        /* ── UTILITY CLASSES ── */
        .ic-mono { font-family: 'IBM Plex Mono', 'Space Mono', monospace; }
        .ic-text-accent { color: var(--ic-accent-cyan); }
        .ic-text-red { color: var(--ic-accent-red); }
        .ic-highlight-cyan {
          color: var(--ic-accent-cyan);
          text-shadow: 0 0 18px var(--ic-accent-cyan-glow);
        }
        .ic-period-red {
          color: var(--ic-accent-red);
          text-shadow: 0 0 12px rgba(228,73,53,0.55);
        }
        .ic-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--ic-border-accent), transparent);
          margin: 0 auto; max-width: 600px;
        }
        /* ── CTA BUTTON ── */
        .ic-cta-btn {
          display: inline-flex; flex-direction: column; align-items: center;
          font-family: 'Bebas Neue', 'Anton', sans-serif;
          font-weight: 400; font-size: 1.4rem;
          letter-spacing: 0.10em; text-transform: uppercase;
          text-decoration: none; color: var(--ic-bg-deep);
          padding: 22px 56px; border: none; border-radius: 0;
          cursor: pointer; position: relative; overflow: hidden;
          background: var(--ic-accent-cyan);
          box-shadow:
            0 0 0 1px var(--ic-accent-cyan-soft) inset,
            0 0 40px var(--ic-accent-cyan-glow),
            0 8px 32px rgba(0,0,0,0.6);
          transition: all 0.25s ease;
        }
        .ic-cta-btn:hover {
          transform: translateY(-2px);
          background: var(--ic-accent-cyan-soft);
          box-shadow:
            0 0 0 1px #fff inset,
            0 0 60px rgba(56,243,255,0.65),
            0 12px 40px rgba(0,0,0,0.6);
        }
        .ic-cta-btn::before {
          content: ''; position: absolute; top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          transition: left 0.6s;
        }
        .ic-cta-btn:hover::before { left: 100%; }
        .ic-cta-sub {
          display: block; font-family: 'IBM Plex Mono', monospace;
          font-weight: 400; font-size: 0.65rem;
          letter-spacing: 0.18em; text-transform: uppercase;
          opacity: 0.85; margin-top: 6px; color: var(--ic-bg-deep);
        }
        /* ── HERO ── */
        .ic-hero {
          min-height: 100vh; min-height: 100svh;
          display: flex; align-items: center; justify-content: center;
          text-align: center; padding: 120px 24px 80px;
          position: relative;
        }
        .ic-hero__route-svg {
          position: absolute; inset: 0; width: 100%; height: 100%;
          pointer-events: none; z-index: 0;
        }
        .ic-hero__content { position: relative; z-index: 2; max-width: 920px; }
        .ic-hero__badge {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.7rem; letter-spacing: 0.22em; text-transform: uppercase;
          color: var(--ic-accent-cyan); margin-bottom: 28px;
          padding: 6px 14px;
          border-top: 1px solid var(--ic-accent-cyan);
          border-bottom: 1px solid var(--ic-accent-cyan);
          opacity: 0; animation: ic-fadeUp 0.7s 0.3s forwards;
        }
        .ic-hero__badge-dot {
          width: 6px; height: 6px; background: var(--ic-accent-red);
          border-radius: 50%; animation: ic-pulse 2s infinite;
        }
        .ic-hero__title {
          font-family: 'Bebas Neue', 'Anton', sans-serif;
          font-size: clamp(2.6rem, 8vw, 5.6rem);
          line-height: 0.92;
          letter-spacing: 0.01em;
          color: var(--ic-text-primary);
          margin-bottom: 32px;
          opacity: 0; animation: ic-fadeUp 0.8s 0.5s forwards;
        }
        .ic-hero__sub {
          font-family: 'Inter Tight', sans-serif;
          font-size: clamp(0.95rem, 2vw, 1.15rem);
          font-weight: 300;
          color: var(--ic-text-secondary); max-width: 640px;
          margin: 0 auto 44px;
          line-height: 1.6;
          opacity: 0; animation: ic-fadeUp 0.8s 0.7s forwards;
        }
        .ic-hero__cta-wrap { opacity: 0; animation: ic-fadeUp 0.8s 0.9s forwards; }
        .ic-hero__meta {
          display: flex; flex-wrap: wrap; justify-content: center;
          gap: 28px; margin-top: 40px;
          opacity: 0; animation: ic-fadeUp 0.8s 1.1s forwards;
        }
        .ic-hero__meta-item {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.72rem; color: var(--ic-text-muted);
          letter-spacing: 0.16em; text-transform: uppercase;
          display: flex; align-items: center; gap: 8px;
        }
        .ic-hero__meta-item .ic-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: var(--ic-accent-cyan);
          box-shadow: 0 0 8px var(--ic-accent-cyan-glow);
        }
        @keyframes ic-fadeUp {
          from { opacity:0; transform:translateY(20px); }
          to { opacity:1; transform:translateY(0); }
        }
        @keyframes ic-fadeIn { from { opacity:0; } to { opacity:1; } }
        @keyframes ic-pulse { 0%,100%{opacity:1;transform:scale(1);} 50%{opacity:.35;transform:scale(.7);} }
        /* ── URGENCY BAR ── */
        .ic-urgency-bar {
          background: rgba(228,73,53,0.05);
          border-top: 1px solid rgba(228,73,53,0.35);
          border-bottom: 1px solid rgba(228,73,53,0.35);
          text-align: center; padding: 14px 24px;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.78rem; color: var(--ic-accent-red);
          letter-spacing: 0.18em; text-transform: uppercase;
        }
        /* ── PROBLEM CARDS ── */
        .ic-problem-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 16px; margin: 48px 0;
        }
        .ic-problem-card {
          background: var(--ic-bg-card);
          border: 1px solid var(--ic-border-subtle);
          padding: 32px 24px; text-align: center;
          position: relative;
          transition: border-color 0.3s, background 0.3s;
        }
        .ic-problem-card:hover {
          border-color: var(--ic-border-accent);
          background: var(--ic-bg-texture);
        }
        .ic-problem-card__stat {
          font-family: 'Bebas Neue', 'Anton', sans-serif;
          font-size: 3.4rem; font-weight: 400;
          color: var(--ic-accent-cyan); line-height: 1; margin-bottom: 12px;
          letter-spacing: 0.02em;
        }
        .ic-problem-card__stat--red { color: var(--ic-accent-red); }
        .ic-problem-card__label {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.75rem; color: var(--ic-text-muted);
          line-height: 1.5; letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        /* ── AULA CARDS ── */
        .ic-aula-card {
          background: var(--ic-bg-card);
          border: 1px solid var(--ic-border-subtle);
          border-left: 1px solid var(--ic-accent-cyan);
          padding: 36px; margin-bottom: 20px;
          display: flex; gap: 28px; align-items: flex-start;
          position: relative;
          transition: border-color 0.3s, background 0.3s, transform 0.3s;
        }
        .ic-aula-card:hover {
          background: var(--ic-bg-texture);
          border-color: var(--ic-border-accent);
          border-left-color: var(--ic-accent-cyan-soft);
          transform: translateX(4px);
        }
        .ic-aula-card__num {
          flex-shrink: 0;
          font-family: 'Bebas Neue', 'Anton', sans-serif;
          font-size: 4.5rem; line-height: 0.9;
          color: var(--ic-accent-cyan);
          text-shadow: 0 0 24px var(--ic-accent-cyan-glow);
          letter-spacing: 0.02em;
        }
        .ic-aula-card__tag {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.7rem; letter-spacing: 0.20em;
          text-transform: uppercase;
          color: var(--ic-accent-cyan); margin-bottom: 10px;
        }
        .ic-aula-card__title {
          font-family: 'Bebas Neue', 'Anton', sans-serif;
          font-weight: 400; font-size: 1.55rem;
          line-height: 1.05; letter-spacing: 0.01em;
          text-transform: uppercase;
          margin-bottom: 14px;
          color: var(--ic-text-primary);
        }
        .ic-aula-card__desc {
          font-size: 0.92rem; color: var(--ic-text-secondary);
          line-height: 1.65; font-weight: 300;
        }
        /* ── AUTHOR ── */
        .ic-author {
          display: flex; gap: 32px; align-items: flex-start;
          padding: 40px; background: var(--ic-bg-card);
          border: 1px solid var(--ic-border-subtle);
          margin: 48px auto 0; max-width: 720px;
          position: relative;
        }
        .ic-author__avatar {
          flex-shrink: 0; width: 96px; height: 96px;
          border-radius: 0;
          object-fit: cover;
          border: 1px solid var(--ic-border-accent);
          position: relative;
        }
        .ic-author__name {
          font-family: 'Bebas Neue', 'Anton', sans-serif;
          font-weight: 400; font-size: 1.6rem;
          letter-spacing: 0.02em; text-transform: uppercase;
          margin-bottom: 6px;
        }
        .ic-author__role {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.72rem; color: var(--ic-accent-cyan);
          letter-spacing: 0.16em; text-transform: uppercase;
          margin-bottom: 16px;
        }
        .ic-author__text {
          font-size: 0.92rem; color: var(--ic-text-secondary);
          line-height: 1.7; font-weight: 300;
        }
        /* ── BLOCKQUOTE ── */
        .ic-page blockquote {
          border-left: 2px solid var(--ic-accent-cyan);
          padding: 24px 32px; margin: 40px 0;
          background: rgba(32,221,235,0.03);
          font-family: 'Bebas Neue', 'Anton', sans-serif;
          font-size: clamp(1.2rem, 2.5vw, 1.6rem);
          font-weight: 400;
          letter-spacing: 0.01em;
          line-height: 1.2;
          text-transform: uppercase;
          color: var(--ic-text-primary);
          font-style: normal;
          position: relative;
        }
        /* ── CHECK LIST ── */
        .ic-check-list { list-style: none; margin: 32px 0; padding: 0; }
        .ic-check-list li {
          padding: 14px 0 14px 32px; position: relative;
          color: var(--ic-text-secondary);
          font-size: 0.95rem; font-weight: 300;
          line-height: 1.5;
          border-bottom: 1px solid var(--ic-border-subtle);
        }
        .ic-check-list li:last-child { border-bottom: none; }
        .ic-check-list li::before {
          content: '>';
          font-family: 'IBM Plex Mono', monospace;
          position: absolute; left: 0; top: 14px;
          color: var(--ic-accent-cyan);
          font-weight: 500;
        }
        /* ── MID CAPTURE ── */
        .ic-mid-capture {
          background: var(--ic-bg-section);
          border-top: 1px solid var(--ic-border-accent);
          border-bottom: 1px solid var(--ic-border-accent);
          padding: 80px 24px; text-align: center;
          position: relative;
        }
        /* ── CHART TABS ── */
        .ic-chart-tab {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.72rem; padding: 10px 18px;
          letter-spacing: 0.16em; text-transform: uppercase;
          border: 1px solid var(--ic-border-subtle);
          background: transparent; color: var(--ic-text-muted);
          cursor: pointer; transition: all 0.25s;
          border-radius: 0;
        }
        .ic-chart-tab:hover {
          border-color: var(--ic-border-accent);
          color: var(--ic-text-secondary);
        }
        .ic-chart-tab.active {
          background: rgba(32,221,235,0.08);
          border-color: var(--ic-accent-cyan);
          color: var(--ic-accent-cyan);
        }
        /* ── REVOLUTION BARS ── */
        .rev-timeline-visual { display: flex; flex-direction: column; gap: 22px; }
        .rev-item { opacity: 0; animation: ic-revSlideIn 0.7s var(--delay, 0s) forwards; }
        @keyframes ic-revSlideIn {
          from { opacity: 0; transform: translateX(-24px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .rev-bar {
          height: 4px; width: var(--width, 100%);
          background: var(--color, var(--ic-accent-cyan));
          margin-bottom: 10px; min-width: 6px; position: relative;
          transition: width 0.8s ease;
        }
        .rev-bar::after {
          content: ''; position: absolute; right: 0; top: -3px;
          width: 10px; height: 10px;
          background: var(--color, var(--ic-accent-cyan));
          box-shadow: 0 0 14px var(--color, var(--ic-accent-cyan));
        }
        .rev-info { display: flex; flex-wrap: wrap; align-items: baseline; gap: 8px 18px; }
        .rev-label {
          font-family: 'Bebas Neue', 'Anton', sans-serif;
          font-weight: 400; font-size: 1.15rem;
          letter-spacing: 0.02em; text-transform: uppercase;
          color: var(--ic-text-primary);
        }
        .rev-date {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.7rem; color: var(--ic-text-muted);
          letter-spacing: 0.10em;
        }
        .rev-span {
          font-size: 0.85rem; color: var(--ic-text-secondary);
          font-weight: 300;
        }
        .rev-span--alert { color: var(--ic-accent-red); font-weight: 500; }
        /* ── PRICE BOX ── */
        .ic-price-box {
          text-align: center; background: var(--ic-bg-card);
          border: 1px solid var(--ic-border-accent);
          padding: 56px 36px; margin: 48px auto; max-width: 540px;
          position: relative;
        }
        .ic-price-box__tag {
          display: inline-block;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.7rem; letter-spacing: 0.20em; text-transform: uppercase;
          color: var(--ic-accent-red);
          border: 1px solid var(--ic-accent-red);
          padding: 5px 14px; margin-bottom: 24px;
        }
        .ic-price-box__label {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.78rem; color: var(--ic-text-secondary);
          letter-spacing: 0.14em; text-transform: uppercase;
          margin-bottom: 24px;
        }
        .ic-price-box__old {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.95rem; color: var(--ic-text-muted);
          text-decoration: line-through;
          text-decoration-color: var(--ic-accent-red);
          text-decoration-thickness: 2px;
          margin-bottom: 8px;
        }
        .ic-price-box__amount {
          font-family: 'Bebas Neue', 'Anton', sans-serif;
          font-size: clamp(4.5rem, 12vw, 6.5rem);
          font-weight: 400; line-height: 0.95;
          letter-spacing: 0.01em;
          margin-bottom: 8px;
          color: var(--ic-accent-cyan);
          text-shadow: 0 0 40px var(--ic-accent-cyan-glow);
        }
        .ic-price-box__installment {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.78rem; color: var(--ic-text-muted);
          letter-spacing: 0.12em;
          margin-bottom: 32px;
        }
        /* ── GUARANTEE ── */
        .ic-guarantee {
          text-align: center; padding: 40px 24px; margin: 24px 0;
          border: 1px solid var(--ic-border-subtle);
          background: var(--ic-bg-card);
          max-width: 540px; margin-left: auto; margin-right: auto;
          position: relative;
        }
        .ic-guarantee__shield {
          width: 48px; height: 48px; margin: 0 auto 16px;
          display: block;
        }
        .ic-guarantee__title {
          font-family: 'Bebas Neue', 'Anton', sans-serif;
          font-size: 1.4rem; font-weight: 400;
          letter-spacing: 0.04em; text-transform: uppercase;
          color: var(--ic-accent-cyan);
          margin-bottom: 10px;
        }
        .ic-guarantee__text {
          color: var(--ic-text-secondary);
          font-size: 0.88rem; font-weight: 300;
          line-height: 1.6;
          max-width: 460px; margin: 0 auto;
        }
        /* ── BONUS ── */
        .ic-bonus-box {
          background: rgba(32,221,235,0.04);
          border: 1px solid var(--ic-border-accent);
          padding: 28px 32px;
          margin: 0 auto 28px; max-width: 540px; text-align: left;
          position: relative;
        }
        .ic-bonus-tag {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.68rem; letter-spacing: 0.22em; text-transform: uppercase;
          color: var(--ic-accent-cyan); margin-bottom: 10px; display: block;
        }
        .ic-bonus-prompts-desktop {
          width: 100%; max-width: 900px; height: auto;
          margin: 0 auto; display: block;
        }
        .ic-bonus-prompts-mobile { display: none; }
        /* ── FAQ ── */
        .ic-faq-item {
          border-bottom: 1px solid var(--ic-border-subtle);
          padding: 22px 0;
        }
        .ic-faq-item summary {
          font-family: 'Bebas Neue', 'Anton', sans-serif;
          font-weight: 400; font-size: 1.2rem;
          letter-spacing: 0.02em; text-transform: uppercase;
          cursor: pointer; color: var(--ic-text-primary);
          list-style: none; display: flex;
          justify-content: space-between; align-items: center;
          gap: 16px;
        }
        .ic-faq-item summary::-webkit-details-marker { display: none; }
        .ic-faq-item summary::after {
          content: '+'; font-family: 'IBM Plex Mono', monospace;
          font-size: 1.4rem; color: var(--ic-accent-cyan);
          transition: transform 0.3s;
        }
        .ic-faq-item[open] summary::after { content: '−'; }
        .ic-faq-item p {
          color: var(--ic-text-secondary);
          font-size: 0.9rem; font-weight: 300;
          line-height: 1.65;
          margin-top: 14px; padding-right: 28px;
        }
        /* ── FOOTER ── */
        .ic-footer {
          text-align: center; padding: 48px 24px;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.72rem; color: var(--ic-text-muted);
          letter-spacing: 0.10em;
          border-top: 1px solid var(--ic-border-subtle);
          line-height: 1.8;
        }
        .ic-footer__brand {
          font-family: 'Bebas Neue', 'Anton', sans-serif;
          font-size: 1.6rem; font-weight: 400;
          letter-spacing: 0.06em; text-transform: uppercase;
          color: var(--ic-text-primary);
          margin-bottom: 16px;
        }
        /* ── RESPONSIVE ── */
        @media (max-width: 640px) {
          .ic-section { padding: 64px 0; }
          .ic-hero { padding: 100px 18px 64px; min-height: auto; }
          .ic-hero__title { font-size: 2.2rem; }
          .ic-hero__sub { font-size: 0.95rem; }
          .ic-hero__badge { font-size: 0.62rem; letter-spacing: 0.16em; }
          .ic-hero__meta { gap: 14px; }
          .ic-hero__meta-item { font-size: 0.65rem; letter-spacing: 0.10em; }
          .ic-container { padding: 0 16px; }
          .ic-author { flex-direction: column; align-items: center; text-align: center; padding: 28px 18px; }
          .ic-author__avatar { width: 80px; height: 80px; }
          .ic-aula-card { flex-direction: column; gap: 8px; padding: 24px 18px; }
          .ic-aula-card__num { font-size: 3.5rem; }
          .ic-aula-card__title { font-size: 1.3rem; }
          .ic-problem-grid { grid-template-columns: 1fr; }
          .ic-problem-card { padding: 24px 18px; }
          .ic-problem-card__stat { font-size: 2.6rem; }
          .ic-cta-btn { font-size: 1rem; padding: 18px 32px; }
          .ic-page blockquote { padding: 16px 20px; font-size: 1.05rem; }
          .ic-check-list li { font-size: 0.88rem; padding: 12px 0 12px 28px; }
          .ic-check-list li::before { top: 12px; }
          .ic-price-box { padding: 40px 22px; }
          .ic-urgency-bar { font-size: 0.68rem; padding: 12px 16px; letter-spacing: 0.14em; }
          .ic-mid-capture { padding: 56px 0; }
          .ic-faq-item summary { font-size: 1rem; }
          .ic-adoption-segs { flex-wrap: wrap; }
          .ic-adoption-seg { min-width: 45% !important; flex: 1 1 45% !important; }
          .ic-nowbar { flex-wrap: wrap; }
          .ic-nowbar-pct { font-size: 18px !important; }
          .ic-chart-tab { font-size: 0.66rem !important; padding: 8px 12px !important; letter-spacing: 0.12em !important; }
          .ic-bonus-prompts-desktop { display: none; }
          .ic-bonus-prompts-mobile {
            display: block; width: 150%; max-width: none;
            transform: translateX(-0.75rem); height: auto;
          }
        }
      `}</style>

      {/* ══════ HERO ══════ */}
      <section className="ic-hero">
        {/* Linha curva de "rota" — gráfico ciano de navegação */}
        <svg className="ic-hero__route-svg" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="routeGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#20DDEB" stopOpacity="0" />
              <stop offset="40%" stopColor="#20DDEB" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#38F3FF" stopOpacity="0.85" />
            </linearGradient>
            <filter id="routeGlow"><feGaussianBlur stdDeviation="4" /></filter>
          </defs>
          {/* Crosshair central sutil */}
          <line x1="720" y1="0" x2="720" y2="900" stroke="rgba(32,221,235,0.06)" strokeWidth="0.5" strokeDasharray="4,8" />
          <line x1="0" y1="450" x2="1440" y2="450" stroke="rgba(32,221,235,0.06)" strokeWidth="0.5" strokeDasharray="4,8" />
          {/* Rota curva — performance/progresso */}
          <path d="M 0,720 C 200,720 320,700 480,640 C 620,585 720,500 860,400 C 980,310 1100,230 1240,160 C 1320,120 1380,100 1440,80" fill="none" stroke="url(#routeGrad)" strokeWidth="1.6" filter="url(#routeGlow)" opacity="0.85" />
          <path d="M 0,720 C 200,720 320,700 480,640 C 620,585 720,500 860,400 C 980,310 1100,230 1240,160 C 1320,120 1380,100 1440,80" fill="none" stroke="#38F3FF" strokeWidth="0.8" opacity="0.7" />
          {/* Pontos de decisão */}
          <circle cx="480" cy="640" r="3" fill="#20DDEB" />
          <circle cx="860" cy="400" r="3" fill="#20DDEB" />
          <circle cx="1240" cy="160" r="3" fill="#38F3FF" />
          {/* Cantos HUD */}
          <path d="M 24,24 L 24,52 M 24,24 L 52,24" stroke="#20DDEB" strokeWidth="1" opacity="0.6" fill="none" />
          <path d="M 1416,24 L 1416,52 M 1416,24 L 1388,24" stroke="#20DDEB" strokeWidth="1" opacity="0.6" fill="none" />
          <path d="M 24,876 L 24,848 M 24,876 L 52,876" stroke="#20DDEB" strokeWidth="1" opacity="0.6" fill="none" />
          <path d="M 1416,876 L 1416,848 M 1416,876 L 1388,876" stroke="#20DDEB" strokeWidth="1" opacity="0.6" fill="none" />
        </svg>

        <div className="ic-container ic-hero__content">
          <div className="ic-hero__badge">
            <span className="ic-hero__badge-dot" />
            <span>OFERTA · 67% OFF · ATIVA AGORA</span>
          </div>

          <h1 className="ic-hero__title">
            Você usa ChatGPT pra reescrever texto e acha que está usando IA. Em 3 aulas eu vou te mostrar{" "}
            <span className="ic-highlight-cyan">o que significa usar IA de verdade no seu negócio</span>
            <span className="ic-period-red">.</span>
          </h1>

          <p className="ic-hero__sub">
            Descubra por que 50% do uso profissional de IA migrou do ChatGPT para o Claude — e como empresários estão economizando 10-15 horas por semana com sistemas que trabalham sozinhos.
          </p>

          <div className="ic-hero__cta-wrap">
            <button className="ic-cta-btn" onClick={() => handleCTA("hero")}>
              QUERO DOMINAR O CLAUDE
              <span className="ic-cta-sub">3 aulas · Acesso imediato · R$47</span>
            </button>
          </div>

          <div className="ic-hero__meta">
            <div className="ic-hero__meta-item"><span className="ic-dot" /> 3 aulas ao vivo</div>
            <div className="ic-hero__meta-item"><span className="ic-dot" /> Claude na prática</div>
            <div className="ic-hero__meta-item"><span className="ic-dot" /> Zero código</div>
            <div className="ic-hero__meta-item"><span className="ic-dot" /> Acesso imediato</div>
          </div>
        </div>
      </section>

      {/* ══════ URGENCY BAR ══════ */}
      <div className="ic-urgency-bar">
        ⚠ As vagas são limitadas. Quando atingirmos o limite, esta página sai do ar.
      </div>

      {/* ══════ MIGRAÇÃO CLAUDE ══════ */}
      <section className="ic-section">
        <div className="ic-container" style={{ textAlign: "center" }}>
          <Coord>SEC.01 // MIGRAÇÃO_PROFISSIONAL // STATUS: LIVE</Coord>
          <video src="/videos/claude-migration.mp4" autoPlay loop muted playsInline style={{ width: 120, height: "auto", margin: "0 auto 32px", display: "block", border: "1px solid var(--ic-border-accent)" }} />
          <h2>Descubra porque <span className="ic-highlight-cyan">50% dos usuários sérios</span> de IA generativa nos últimos meses migraram do ChatGPT para o Claude<span className="ic-period-red">.</span></h2>

          <div style={{ marginTop: 48, background: "var(--ic-bg-card)", border: "1px solid var(--ic-border-subtle)", padding: "28px 24px 20px", position: "relative" }}>
            <HudCorners />
            <p className="ic-mono" style={{ fontSize: 11, fontWeight: 500, color: "var(--ic-accent-cyan)", letterSpacing: "0.18em", textTransform: "uppercase", margin: "0 0 6px", textAlign: "left" }}>uso // chatgpt vs claude</p>
            <p className="ic-mono" style={{ fontSize: 10, color: "var(--ic-text-muted)", letterSpacing: "0.14em", textTransform: "uppercase", margin: "0 0 4px", textAlign: "left" }}>dados até fev 2026</p>
            <p style={{ fontSize: 12, color: "var(--ic-text-secondary)", margin: "0 0 18px", textAlign: "left", fontWeight: 300 }}>Participação de mercado em gastos com assinaturas de chat de IA nos EUA</p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 16px", marginBottom: 18 }}>
              {[
                { color: "#2A2E2B", label: "Outro OpenAI" },
                { color: "#3D423E", label: "ChatGPT Pro" },
                { color: "#535854", label: "ChatGPT Plus" },
                { color: "#6A6F6B", label: "ChatGPT Business" },
                { color: "#20DDEB", label: "Outro Anthropic" },
                { color: "#1B95A5", label: "Claude Team" },
                { color: "#0F4F58", label: "Claude Max" },
                { color: "#0A3438", label: "Claude Enterprise" },
              ].map((l) => (
                <span key={l.label} className="ic-mono" style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 10, color: "var(--ic-text-secondary)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  <span style={{ width: 12, height: 12, background: l.color, flexShrink: 0 }} />
                  {l.label}
                </span>
              ))}
            </div>

            <div style={{ position: "relative", width: "100%", height: 380 }}>
              <canvas ref={marketShareChartRef} />
            </div>

            <p className="ic-mono" style={{ fontSize: 9, color: "var(--ic-text-muted)", marginTop: 14, textAlign: "left", lineHeight: 1.6, letterSpacing: "0.06em" }}>
              FONTE: Ramp Economics Lab (ramp.com/data). Dados de cartão corporativo e pagamento de contas de mais de 50.000 empresas dos EUA na plataforma financeira da Ramp.
            </p>
          </div>

          <p style={{ color: "var(--ic-text-secondary)", maxWidth: 640, margin: "40px auto 0", fontSize: "0.98rem", fontWeight: 300, lineHeight: 1.65 }}>
            Nos últimos 12 meses, mais mudou na forma como se ganha dinheiro do que nos últimos 12 anos. E isso é só o começo. Os números mostram o que está por vir:
          </p>

          <div className="ic-problem-grid">
            <div className="ic-problem-card">
              <div className="ic-problem-card__stat">92%</div>
              <div className="ic-problem-card__label">das empresas planejam adotar IA até 2027</div>
            </div>
            <div className="ic-problem-card">
              <div className="ic-problem-card__stat">41%</div>
              <div className="ic-problem-card__label">dos empregos podem simplesmente desaparecer</div>
            </div>
            <div className="ic-problem-card">
              <div className="ic-problem-card__stat ic-problem-card__stat--red">5×</div>
              <div className="ic-problem-card__label">mais produtividade exigida por profissional</div>
            </div>
          </div>
        </div>
      </section>

      <div className="ic-divider" />

      {/* ══════ VELOCIDADE DAS REVOLUÇÕES ══════ */}
      <section className="ic-section">
        <div className="ic-container">
          <Coord>SEC.02 // VELOCIDADE_HISTÓRICA // ROGERS.1962</Coord>
          <h2 style={{ textAlign: "center" }}>A velocidade só <span className="ic-highlight-cyan">acelera</span></h2>
          <p style={{ textAlign: "center", color: "var(--ic-text-secondary)", maxWidth: 620, margin: "20px auto 0", fontSize: "0.98rem", fontWeight: 300, lineHeight: 1.65 }}>
            Pense comigo: quantas décadas seu avô viveu com a mesma profissão? Quantas vezes seus pais precisaram se reinventar? E agora… quantas mudanças você enfrentou só nos últimos dois anos?
          </p>

          <div style={{ marginTop: 56 }}>
            {/* Tab switcher */}
            <div style={{ display: "flex", gap: 8, marginBottom: 32, justifyContent: "center", flexWrap: "wrap" }}>
              {[
                { key: "revolucoes", label: "Revoluções" },
                { key: "adocao", label: "Adoção de Tecnologia" },
                { key: "100m", label: "Tempo até 100M de usuários" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  className={`ic-chart-tab ${activeTab === tab.key ? "active" : ""}`}
                  onClick={() => switchTab(tab.key)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Panel: Revoluções */}
            <div style={{ display: activeTab === "revolucoes" ? "block" : "none" }}>
              <div className="rev-timeline-visual">
                {[
                  { color: "var(--ic-text-muted)",   delay: "0.1s", width: "100%",  label: "Revolução Agrícola",      date: "~10.000 a.C.", span: "~11.800 anos até a próxima revolução", alert: false },
                  { color: "var(--ic-text-secondary)", delay: "0.3s", width: "15%",   label: "Revolução Industrial",   date: "~1800 d.C.",   span: "~150 anos até a próxima", alert: false },
                  { color: "var(--ic-accent-cyan)",  delay: "0.5s", width: "5.5%",  label: "Revolução Tecnológica",  date: "~1950 d.C.",   span: "~65 anos até a próxima", alert: false },
                  { color: "var(--ic-accent-red)",   delay: "0.7s", width: "0.85%", label: "Revolução da IA",        date: "~2015 d.C.",   span: "Acelerando em meses, não anos", alert: true },
                ].map((r, i) => (
                  <div key={i} className="rev-item" style={{ "--color": r.color, "--delay": r.delay } as React.CSSProperties}>
                    <div className="rev-bar" style={{ "--width": r.width } as React.CSSProperties} />
                    <div className="rev-info">
                      <span className="rev-label">{r.label}</span>
                      <span className="rev-date">{r.date}</span>
                      <span className={`rev-span ${r.alert ? "rev-span--alert" : ""}`}>{r.span}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="ic-mono" style={{ textAlign: "center", color: "var(--ic-text-muted)", fontSize: "0.72rem", marginTop: 24, letterSpacing: "0.10em" }}>
                O intervalo entre revoluções caiu de milênios → séculos → décadas → anos
              </p>
            </div>

            {/* Panel: Adoção */}
            <div style={{ display: activeTab === "adocao" ? "block" : "none" }}>
              <div style={{ position: "relative", width: "100%", height: 340 }}>
                <canvas ref={adoptionChartRef} />
              </div>
              <p className="ic-mono" style={{ textAlign: "center", color: "var(--ic-text-muted)", fontSize: "0.72rem", marginTop: 16, letterSpacing: "0.10em" }}>
                Anos até atingir 50% de adoção nos EUA · Fonte: Our World in Data, Visual Capitalist, Epoch AI
              </p>
            </div>

            {/* Panel: 100M */}
            <div style={{ display: activeTab === "100m" ? "block" : "none" }}>
              <div style={{ position: "relative", width: "100%", height: 380 }}>
                <canvas ref={users100mChartRef} />
              </div>
              <p className="ic-mono" style={{ textAlign: "center", color: "var(--ic-text-muted)", fontSize: "0.72rem", marginTop: 16, letterSpacing: "0.10em" }}>
                Meses até atingir 100 milhões de usuários · Fonte: UBS, Visual Capitalist, Statista
              </p>
            </div>
          </div>

          <blockquote style={{ marginTop: 48 }}>
            "Em breve teremos uma pessoa fazendo o trabalho de cinco graças à IA. A dúvida é: quem não usar a tecnologia conseguirá acompanhar? Provavelmente não."
          </blockquote>

          <p style={{ color: "var(--ic-text-secondary)", textAlign: "center", maxWidth: 640, margin: "40px auto 0", fontSize: "0.98rem", fontWeight: 300, lineHeight: 1.65 }}>
            Em todas as eras da humanidade, quem se destacou foram aqueles que conseguiram dominar novas tecnologias com velocidade.
          </p>
          <p style={{ color: "var(--ic-text-primary)", textAlign: "center", fontFamily: "'Bebas Neue','Anton',sans-serif", fontWeight: 400, fontSize: "1.4rem", letterSpacing: "0.02em", textTransform: "uppercase", marginTop: 20 }}>
            Isso, tem até nome. São os <span className="ic-highlight-cyan">Early Adopters</span>
          </p>

          {/* Curva de Rogers — HUD strategic */}
          <div style={{ marginTop: 48, border: "1px solid var(--ic-border-accent)", overflow: "hidden", fontFamily: "'Inter Tight',sans-serif", position: "relative", background: "var(--ic-bg-deep)" }}>
            <div style={{ background: "var(--ic-bg-section)", borderBottom: "1px solid var(--ic-border-accent)", padding: "12px 20px", display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ display: "flex", gap: 6 }}>
                <div style={{ width: 9, height: 9, background: "#E44935" }} />
                <div style={{ width: 9, height: 9, background: "#7D827D" }} />
                <div style={{ width: 9, height: 9, background: "#20DDEB" }} />
              </div>
              <span className="ic-mono" style={{ fontSize: 10, color: "var(--ic-text-muted)", letterSpacing: "0.20em", textTransform: "uppercase", marginLeft: 8 }}>intel.brief // sec.03 // adoption.v3</span>
              <span className="ic-mono" style={{ marginLeft: "auto", fontSize: 9, color: "var(--ic-accent-cyan)", border: "1px solid var(--ic-border-accent)", padding: "3px 10px", letterSpacing: "0.20em", textTransform: "uppercase" }}>● LIVE</span>
            </div>
            <div style={{ padding: "22px 22px 18px" }}>
              <div className="ic-mono" style={{ fontSize: 10, color: "var(--ic-accent-cyan)", letterSpacing: "0.24em", textTransform: "uppercase", marginBottom: 6 }}>03 — O Mecanismo</div>
              <div style={{ fontFamily: "'Bebas Neue','Anton',sans-serif", fontSize: 24, fontWeight: 400, color: "var(--ic-text-primary)", textTransform: "uppercase", lineHeight: 1.05, letterSpacing: "0.02em" }}>Curva de <span style={{ color: "var(--ic-accent-cyan)" }}>adoção</span> tecnológica</div>
              <div style={{ fontFamily: "'Inter Tight',sans-serif", fontSize: 12, color: "var(--ic-text-muted)", fontWeight: 300, marginTop: 6, marginBottom: 16 }}>Rogers (1962) — onde você está na curva define quanto você vai ganhar</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 16px", marginBottom: 12 }}>
                <div className="ic-mono" style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase" }}><div style={{ width: 8, height: 8, background: "#38F3FF" }} /><span style={{ color: "#38F3FF" }}>Adotantes por período (sino)</span></div>
                <div className="ic-mono" style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase" }}><div style={{ width: 8, height: 8, background: "#20DDEB" }} /><span style={{ color: "#20DDEB" }}>Adoção acumulada (curva S)</span></div>
                <div className="ic-mono" style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase" }}><div style={{ width: 8, height: 8, background: "#E44935" }} /><span style={{ color: "#E44935" }}>Agentes de IA — agora</span></div>
              </div>

              <svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
                <defs>
                  <linearGradient id="bellGradV3" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#38F3FF" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="#38F3FF" stopOpacity={0.03} />
                  </linearGradient>
                </defs>
                <rect x="50" y="10" width="15.75" height="180" fill="rgba(56,243,255,0.04)" />
                <rect x="65.75" y="10" width="85.05" height="180" fill="rgba(32,221,235,0.05)" />
                <rect x="150.8" y="10" width="214.2" height="180" fill="rgba(32,221,235,0.03)" />
                <rect x="365" y="10" width="214.2" height="180" fill="rgba(125,130,125,0.04)" />
                <rect x="579.2" y="10" width="100.8" height="180" fill="rgba(90,95,90,0.03)" />
                <line x1="65.75" y1="10" x2="65.75" y2="190" stroke="rgba(32,221,235,0.18)" strokeWidth="0.5" strokeDasharray="3,3" />
                <line x1="150.8" y1="10" x2="150.8" y2="190" stroke="rgba(32,221,235,0.18)" strokeWidth="0.5" strokeDasharray="3,3" />
                <line x1="365" y1="10" x2="365" y2="190" stroke="rgba(32,221,235,0.18)" strokeWidth="0.5" strokeDasharray="3,3" />
                <line x1="579.2" y1="10" x2="579.2" y2="190" stroke="rgba(32,221,235,0.18)" strokeWidth="0.5" strokeDasharray="3,3" />
                <text x="58" y="22" fontFamily="IBM Plex Mono,monospace" fontSize="7" fill="#38F3FF" textAnchor="middle" opacity="0.8">INOV.</text>
                <text x="108" y="22" fontFamily="IBM Plex Mono,monospace" fontSize="7" fill="#20DDEB" textAnchor="middle" opacity="0.85">EARLY ADO.</text>
                <text x="258" y="22" fontFamily="IBM Plex Mono,monospace" fontSize="7" fill="#1B95A5" textAnchor="middle" opacity="0.8">EARLY MAJORITY</text>
                <text x="472" y="22" fontFamily="IBM Plex Mono,monospace" fontSize="7" fill="#7D827D" textAnchor="middle" opacity="0.8">LATE MAJORITY</text>
                <text x="630" y="22" fontFamily="IBM Plex Mono,monospace" fontSize="7" fill="#5A5F5A" textAnchor="middle" opacity="0.8">RETARD.</text>
                <line x1="50" y1="190" x2="680" y2="190" stroke="rgba(32,221,235,0.2)" strokeWidth="0.5" />
                <line x1="50" y1="10" x2="50" y2="190" stroke="rgba(32,221,235,0.15)" strokeWidth="0.5" />
                <line x1="680" y1="10" x2="680" y2="190" stroke="rgba(32,221,235,0.15)" strokeWidth="0.5" />
                <path d="M 50,190 C 60,190 65,189 80,188 C 100,187 110,185 130,182 C 150,178 155,173 170,166 C 185,158 192,150 210,138 C 228,124 238,112 258,95 C 275,80 285,66 305,50 C 320,38 332,27 345,20 C 352,16 358,13 365,11 C 372,13 378,16 385,20 C 398,27 410,38 425,50 C 445,66 455,80 472,95 C 492,112 502,124 520,138 C 538,150 545,158 560,166 C 575,173 580,178 600,182 C 620,185 630,187 650,188 C 665,189 670,190 680,190 Z" fill="url(#bellGradV3)" />
                <path d="M 50,190 C 60,190 65,189 80,188 C 100,187 110,185 130,182 C 150,178 155,173 170,166 C 185,158 192,150 210,138 C 228,124 238,112 258,95 C 275,80 285,66 305,50 C 320,38 332,27 345,20 C 352,16 358,13 365,11 C 372,13 378,16 385,20 C 398,27 410,38 425,50 C 445,66 455,80 472,95 C 492,112 502,124 520,138 C 538,150 545,158 560,166 C 575,173 580,178 600,182 C 620,185 630,187 650,188 C 665,189 670,190 680,190" fill="none" stroke="#38F3FF" strokeWidth="2.5" />
                <path d="M 50,189 C 70,188 90,187 110,186 C 130,184 145,181 160,177 C 175,172 185,165 200,156 C 215,146 225,135 240,122 C 258,107 268,95 285,82 C 302,68 315,57 335,46 C 348,38 356,34 365,31 C 374,28 382,26 395,23 C 410,20 422,17 440,14 C 458,12 470,11 490,11 C 520,11 550,11 580,11 C 610,11 640,11 660,11 C 668,11 674,11 680,11" fill="none" stroke="#20DDEB" strokeWidth="2" strokeLinecap="round" />
                <line x1="108" y1="10" x2="108" y2="190" stroke="#E44935" strokeWidth="1.5" strokeDasharray="4,4" />
                <rect x="86" y="9" width="44" height="15" fill="#E44935" />
                <text x="108" y="20" fontFamily="IBM Plex Mono,monospace" fontSize="8" fill="#F2EDE4" textAnchor="middle" fontWeight="500">AGORA</text>
                <circle cx="108" cy="183" r="4" fill="#E44935" />
                <circle cx="108" cy="178" r="4" fill="#E44935" opacity="0.6" />
              </svg>

              <div className="ic-adoption-segs" style={{ display: "flex", gap: 6, marginTop: 14, flexWrap: "wrap" }}>
                {[
                  { label: "Inovadores",     pct: "2,5%",  desc: "Constroem antes do mercado existir",   color: "#38F3FF" },
                  { label: "Early Adopters", pct: "13,5%", desc: "Líderes que vencem pela vantagem",     color: "#20DDEB" },
                  { label: "Early Majority", pct: "34%",   desc: "Adotam depois que a prova existe",      color: "#1B95A5" },
                  { label: "Late Majority",  pct: "34%",   desc: "Entram por pressão, não escolha",       color: "#7D827D" },
                  { label: "Retardatários",  pct: "16%",   desc: "Chegam quando a vantagem acabou",       color: "#5A5F5A" },
                ].map((seg) => (
                  <div key={seg.label} className="ic-adoption-seg" style={{ flex: 1, minWidth: 110, background: "var(--ic-bg-section)", border: "1px solid var(--ic-border-subtle)", padding: "10px 12px", position: "relative", overflow: "hidden" }}>
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1.5, background: `linear-gradient(90deg, transparent, ${seg.color}, transparent)` }} />
                    <div className="ic-mono" style={{ fontSize: 8, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 4, color: seg.color }}>{seg.label}</div>
                    <div style={{ fontFamily: "'Bebas Neue','Anton',sans-serif", fontSize: 20, fontWeight: 400, lineHeight: 1, marginBottom: 4, color: seg.color, letterSpacing: "0.02em" }}>{seg.pct}</div>
                    <div style={{ fontFamily: "'Inter Tight',sans-serif", fontSize: 10, color: "var(--ic-text-muted)", fontWeight: 300, lineHeight: 1.4 }}>{seg.desc}</div>
                  </div>
                ))}
              </div>

              <div className="ic-nowbar" style={{ background: "rgba(228,73,53,0.06)", border: "1px solid rgba(228,73,53,0.30)", padding: "12px 16px", marginTop: 14, display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 28, height: 28, border: "1px solid #E44935", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <div style={{ width: 8, height: 8, background: "#E44935", animation: "ic-pulse 2s ease-in-out infinite" }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div className="ic-mono" style={{ fontSize: 10, fontWeight: 500, color: "#E44935", textTransform: "uppercase", letterSpacing: "0.16em" }}>⚡ Agentes de IA — Posição Atual (2025–2026)</div>
                  <div style={{ fontFamily: "'Inter Tight',sans-serif", fontSize: 11, color: "var(--ic-text-secondary)", fontWeight: 300, marginTop: 4, lineHeight: 1.5 }}>A janela entre Early Adopters e Early Majority está aberta agora. Quem entrar hoje ainda pega a vantagem de quem chegou cedo.</div>
                </div>
                <div className="ic-nowbar-pct" style={{ fontFamily: "'Bebas Neue','Anton',sans-serif", fontSize: 24, fontWeight: 400, color: "#E44935", letterSpacing: "0.02em" }}>~8%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ MID CAPTURE ══════ */}
      <section className="ic-mid-capture">
        <div className="ic-container">
          <Coord>SEC.04 // PRÓXIMO_PASSO</Coord>
          <h2>"Tá, Rodrigo. <span className="ic-highlight-cyan">O que eu faço com isso?</span>"</h2>
          <p style={{ color: "var(--ic-text-secondary)", maxWidth: 620, margin: "20px auto 0", fontSize: "0.98rem", fontWeight: 300, lineHeight: 1.65 }}>
            É exatamente pra responder essa pergunta que criei a <strong>Imersão em Claude</strong>: 3 aulas onde eu vou te mostrar, na prática, como usar a IA mais poderosa do mercado pra criar sistemas que trabalham pelo seu negócio — e por que existe uma janela de oportunidade aberta agora que não vai durar.
          </p>
          <div style={{ marginTop: 36 }}>
            <button className="ic-cta-btn" onClick={() => handleCTA("mid")}>
              QUERO PARTICIPAR DA IMERSÃO
              <span className="ic-cta-sub">3 aulas por apenas R$47</span>
            </button>
          </div>
        </div>
      </section>

      {/* ══════ 3 AULAS ══════ */}
      <section className="ic-section">
        <div className="ic-container">
          <Coord>SEC.05 // PROTOCOLO // 03 AULAS</Coord>
          <p className="ic-mono" style={{ fontSize: "0.78rem", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 12, textAlign: "center", color: "var(--ic-accent-cyan)" }}>Imersão em Claude</p>
          <h2 style={{ textAlign: "center" }}>3 aulas que podem mudar<br />o rumo da sua <span className="ic-highlight-cyan">vida</span></h2>

          <div style={{ marginTop: 52 }}>
            <div className="ic-aula-card">
              <div className="ic-aula-card__num">01</div>
              <div>
                <div className="ic-aula-card__tag">Aula 1 · A Revolução</div>
                <div className="ic-aula-card__title">O Que Está Acontecendo Agora Que Quase Ninguém Percebeu</div>
                <div className="ic-aula-card__desc">
                  Nos últimos 12 meses, mais mudou na forma como se aprende, trabalha e ganha dinheiro do que nos últimos 12 anos. Você vai entender por que a terceira onda da IA veio para revolucionar.
                </div>
              </div>
            </div>

            <div className="ic-aula-card">
              <div className="ic-aula-card__num">02</div>
              <div>
                <div className="ic-aula-card__tag">Aula 2 · A Janela</div>
                <div className="ic-aula-card__title">Quem Está Caindo, Quem Está Subindo — E Onde Você Entra</div>
                <div className="ic-aula-card__desc">
                  Empresas bilionárias derretendo. Freelancers perdendo clientes da noite pro dia. Mas do outro lado, pessoas comuns estão faturando R$10K, R$50K, R$300K por mês, sozinhas, sem equipe, sem investidor. A janela está aberta agora. Você vai ver os números e entender exatamente por quê.
                </div>
              </div>
            </div>

            <div className="ic-aula-card">
              <div className="ic-aula-card__num">03</div>
              <div>
                <div className="ic-aula-card__tag">Aula 3 · O Método</div>
                <div className="ic-aula-card__title">Claude Code Na Prática E O Método Capital</div>
                <div className="ic-aula-card__desc">
                  Eu abro o Claude Code e construo um sistema completo na sua frente, do zero, usando português. Depois, apresento o Método Capital — como descobrir ONDE no seu negócio a IA gera mais retorno e implementar os primeiros sistemas em semanas. Você sai com clareza total sobre o que fazer primeiro, independente do seu nível técnico.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="ic-divider" />

      {/* ══════ QUEM É O RODRIGO ══════ */}
      <section className="ic-section ic-section--light" style={{ position: "relative", overflow: "hidden" }}>
        {/* Bússola SVG de fundo */}
        <svg aria-hidden style={{ position: "absolute", right: "-80px", top: "50%", transform: "translateY(-50%)", width: 480, height: 480, opacity: 0.06, pointerEvents: "none" }} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="95" fill="none" stroke="#0A0E10" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="75" fill="none" stroke="#0A0E10" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="55" fill="none" stroke="#0A0E10" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="30" fill="none" stroke="#0A0E10" strokeWidth="0.5" />
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
            <line key={angle} x1="100" y1="100" x2={100 + 95 * Math.cos((angle - 90) * Math.PI / 180)} y2={100 + 95 * Math.sin((angle - 90) * Math.PI / 180)} stroke="#0A0E10" strokeWidth="0.5" />
          ))}
          <polygon points="100,15 105,100 100,90 95,100" fill="#0F4F58" />
          <text x="100" y="10" fontFamily="IBM Plex Mono,monospace" fontSize="6" fill="#0A0E10" textAnchor="middle">N</text>
          <text x="195" y="103" fontFamily="IBM Plex Mono,monospace" fontSize="6" fill="#0A0E10" textAnchor="middle">L</text>
          <text x="100" y="197" fontFamily="IBM Plex Mono,monospace" fontSize="6" fill="#0A0E10" textAnchor="middle">S</text>
          <text x="5" y="103" fontFamily="IBM Plex Mono,monospace" fontSize="6" fill="#0A0E10" textAnchor="middle">O</text>
        </svg>

        <div className="ic-container" style={{ position: "relative", zIndex: 2 }}>
          <Coord>SEC.06 // OPERADOR // BRIEFING</Coord>
          <h3 style={{ color: "#0F4F58", fontFamily: "'IBM Plex Mono',monospace", fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.20em", marginBottom: 12, textAlign: "center", fontWeight: 500 }}>Quem vai conduzir a imersão</h3>
          <h2 style={{ textAlign: "center" }}>Nós estamos juntos<br />nesse barco<span className="ic-period-red">.</span></h2>

          <div className="ic-author">
            <HudCorners color="#0F4F58" />
            <img loading="lazy" src={rodrigoPhoto} alt="Rodrigo Albuquerque" className="ic-author__avatar" />
            <div>
              <div className="ic-author__name">Rodrigo Albuquerque</div>
              <div className="ic-author__role" style={{ color: "#0F4F58" }}>Empreendedor · Entusiasta de IA · Estrategista de Negócios</div>
              <div className="ic-author__text">
                Liderei equipes que venderam mais de R$100 milhões por ano. Gerenciei times de mais de 50 pessoas. Hoje, uso IA todos os dias para construir sistemas, automatizar operações e fechar contratos.
                <br /><br />
                Não sou desenvolvedor. Não sou guru de 22 anos que mora com os pais. Sou empreendedor, pai, cristão e estou com a minha esposa há mais de 10 anos. Assim como você, tenho contas para pagar e zero tempo a perder.
                <br /><br />
                Quando vi a velocidade dessa revolução, não fiquei debatendo se valia a pena. Parei tudo, testei dezenas de ferramentas e coloquei para rodar. O <strong style={{ color: "#0F4F58" }}>Claude</strong> é, de longe, a IA mais poderosa atualmente. Ela não só responde perguntas. Ela executa tarefas. Constrói sistemas e faz entregas inteiras sozinha. Criei essa imersão para mostrar exatamente o que descobri.
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="ic-divider" />

      {/* ══════ PRA QUEM É ══════ */}
      <section className="ic-section">
        <div className="ic-container">
          <Coord>SEC.07 // TARGET // CHECKLIST</Coord>
          <h2 style={{ textAlign: "center" }}>Esta imersão é para <span className="ic-highlight-cyan">você</span> se…</h2>

          <ul className="ic-check-list" style={{ marginTop: 36 }}>
            {forYouItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <div className="ic-divider" />

      {/* ══════ BÔNUS · NETWORKING ══════ */}
      <section className="ic-section ic-section--light">
        <div className="ic-container" style={{ textAlign: "center", maxWidth: 900 }}>
          <Coord>SEC.08 // BÔNUS_01 // NETWORKING</Coord>
          <span className="ic-bonus-tag" style={{ color: "#0F4F58", display: "inline-block", marginBottom: 16 }}>
            Bônus exclusivo · só pra alunos
          </span>
          <h2 style={{ textAlign: "center" }}>
            Entre no <span style={{ color: "#0F4F58" }}>Grupo Exclusivo de Networking</span> dos alunos da Imersão
          </h2>
          <p style={{ color: "var(--ic-text-secondary)", fontSize: "1rem", lineHeight: 1.7, maxWidth: 720, margin: "24px auto 0", fontWeight: 300 }}>
            Acesso vitalício à comunidade fechada de quem está implementando IA de verdade nos próprios negócios. Troca diária com empresários e profissionais à frente da curva, oportunidades de parceria e respostas pra travas no caminho — sem ruído de grupos públicos.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16, marginTop: 44, maxWidth: 800, marginLeft: "auto", marginRight: "auto" }}>
            {[
              { tag: "01", title: "Implementações reais", desc: "Cases dos próprios alunos rodando em produção, com prints e prompts." },
              { tag: "02", title: "Parcerias B2B", desc: "Empresários se conectando para co-criar produtos e indicar clientes." },
              { tag: "03", title: "Suporte de pares", desc: "Travou numa automação? Alguém já passou por isso e responde no grupo." },
            ].map((item, i) => (
              <div key={i} style={{ background: "var(--ic-bg-card)", border: "1px solid rgba(15,79,88,0.25)", padding: "24px 20px", textAlign: "left", position: "relative" }}>
                <HudCorners color="#0F4F58" size={10} inset={6} />
                <div className="ic-mono" style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#0F4F58", marginBottom: 10 }}>
                  {item.tag}
                </div>
                <div style={{ fontFamily: "'Bebas Neue','Anton',sans-serif", fontWeight: 400, fontSize: "1.2rem", color: "#0A0E10", marginBottom: 8, letterSpacing: "0.02em", textTransform: "uppercase", lineHeight: 1.1 }}>
                  {item.title}
                </div>
                <div style={{ color: "var(--ic-text-secondary)", fontSize: "0.85rem", lineHeight: 1.55, fontWeight: 300 }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="ic-divider" />

      {/* ══════ BÔNUS · BIBLIOTECA DE PROMPTS ══════ */}
      <section className="ic-section ic-section--light">
        <div className="ic-container" style={{ textAlign: "center", maxWidth: 1100 }}>
          <Coord>SEC.09 // BÔNUS_02 // BIBLIOTECA</Coord>
          <span className="ic-bonus-tag" style={{ color: "#0F4F58", display: "inline-block", marginBottom: 16 }}>
            Bônus incluso · de R$ 97 por R$ 0
          </span>
          <h2 style={{ textAlign: "center" }}>
            Tenha acesso ao meu <span style={{ color: "#0F4F58" }}>Banco de Prompts Secreto</span>
          </h2>
          <p style={{ color: "var(--ic-text-secondary)", fontSize: "1rem", lineHeight: 1.7, maxWidth: 720, margin: "24px auto 0", fontWeight: 300 }}>
            Mais de 50 prompts validados, prontos pra copiar e colar. São os prompts que eu uso no dia a dia com Claude — vendas, copy, análise, planejamento, operação. Atalho de meses de teste.
          </p>

          <div style={{ marginTop: 44, position: "relative" }}>
            <img loading="lazy" src={bancoPromptsImage} alt="Banco de Prompts Secreto — mais de 50 prompts validados" className="ic-bonus-prompts-desktop" />
            <img loading="lazy" src={bancoPromptsMobileImage} alt="Banco de Prompts Secreto — mais de 50 prompts validados" className="ic-bonus-prompts-mobile" />
          </div>
        </div>
      </section>

      {/* ══════ OFERTA ══════ */}
      <section className="ic-section" id="oferta" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(32,221,235,0.07) 0%, transparent 70%)" }}>
        <div className="ic-container" style={{ textAlign: "center" }}>
          <Coord>SEC.10 // DECISÃO // OFERTA_ATIVA</Coord>
          <h2>O futuro pertence a quem<br />age <span className="ic-highlight-cyan">agora</span><span className="ic-period-red">.</span></h2>

          <p style={{ color: "var(--ic-text-secondary)", maxWidth: 620, margin: "20px auto 0", fontSize: "0.98rem", fontWeight: 300, lineHeight: 1.65 }}>
            Se a Imersão te economizar 5 horas de trabalho na primeira semana — e vai —{" "}
            <strong>ela já se pagou.</strong>{" "}
            Agora imagina quando você tiver sistemas funcionando.
          </p>

          <div className="ic-price-box">
            <HudCorners size={16} inset={10} />
            <div className="ic-price-box__tag">Vagas limitadas</div>
            <div className="ic-price-box__label">Imersão em Claude — 3 aulas ao vivo</div>
            <div className="ic-price-box__old">De R$ 197,00</div>
            <div className="ic-price-box__amount">R$ 47</div>
            <div className="ic-price-box__installment">ou 6× de R$ 8,82 no cartão</div>
            <button className="ic-cta-btn" onClick={() => handleCTA("pricing")} style={{ width: "100%", maxWidth: 400 }}>
              GARANTIR MINHA VAGA AGORA
              <span className="ic-cta-sub">Acesso imediato após a confirmação</span>
            </button>
            <p className="ic-mono" style={{ color: "var(--ic-text-muted)", fontSize: "0.7rem", marginTop: 20, letterSpacing: "0.14em", textTransform: "uppercase" }}>
              Pagamento seguro · Garantia de 7 dias · Acesso imediato
            </p>
          </div>

          <div className="ic-bonus-box">
            <span className="ic-bonus-tag">Bônus incluso</span>
            <p style={{ color: "var(--ic-text-primary)", fontSize: "0.95rem", lineHeight: 1.65, margin: 0, fontWeight: 300 }}>
              <strong>Framework de diagnóstico AVEE</strong> — descubra em 15 minutos quais são os 3 processos do seu negócio onde IA gera mais retorno.
            </p>
          </div>

          <div className="ic-guarantee">
            <HudCorners size={12} inset={8} />
            <svg className="ic-guarantee__shield" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 4 L42 12 L42 24 C42 34 34 42 24 44 C14 42 6 34 6 24 L6 12 Z" fill="none" stroke="#20DDEB" strokeWidth="1.5" />
              <path d="M16 24 L22 30 L34 18" fill="none" stroke="#20DDEB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="ic-guarantee__title">Garantia incondicional de 7 dias</div>
            <div className="ic-guarantee__text">
              Assista às aulas, aplique o que aprender. Se dentro de 7 dias você sentir que não valeu cada centavo, basta pedir o reembolso integral. Sem perguntas, sem burocracia.
            </div>
          </div>
        </div>
      </section>

      <div className="ic-divider" />

      {/* ══════ FAQ ══════ */}
      <section className="ic-section" style={{ paddingTop: 64 }}>
        <div className="ic-container">
          <Coord>SEC.11 // FAQ // QUERIES</Coord>
          <h2 style={{ textAlign: "center", marginBottom: 44 }}>Perguntas frequentes</h2>

          {faqItems.map((faq, i) => (
            <details key={i} className="ic-faq-item">
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ══════ FOOTER ══════ */}
      <footer className="ic-footer">
        <div className="ic-container">
          <p className="ic-footer__brand">Imersão em Claude</p>
          <p>© 2026 Rodrigo Albuquerque · BA Consultoria · Todos os direitos reservados</p>
          <p style={{ marginTop: 10 }}>Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho é meramente ilustrativa.</p>
        </div>
      </footer>
    </div>
  );
};

export default ImersaoClaudeV3;
