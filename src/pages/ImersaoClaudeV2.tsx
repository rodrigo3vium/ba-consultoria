import { useEffect, useRef, useState } from "react";
import { tracker } from "@/lib/tracking";
import { buildHotmartCheckoutUrl } from "@/lib/hotmartUtils";
import rodrigoPhoto from "@/assets/founders/rodrigo-albuquerque.webp";
import bancoPromptsImage from "@/assets/banco-prompts-laptop.png";
import bancoPromptsMobileImage from "@/assets/banco-prompts-mobile.png";

const ImersaoClaudeV2 = () => {
  const [activeTab, setActiveTab] = useState("revolucoes");
  const adoptionChartRef = useRef<HTMLCanvasElement>(null);
  const users100mChartRef = useRef<HTMLCanvasElement>(null);
  const marketShareChartRef = useRef<HTMLCanvasElement>(null);
  const adoptionBuilt = useRef(false);
  const users100mBuilt = useRef(false);
  const marketShareBuilt = useRef(false);
  const chartScriptLoaded = useRef(false);

  useEffect(() => {
    tracker.page("Imersão Claude v2");
    document.body.style.backgroundColor = "#0A0A13";
    document.body.style.paddingTop = "0";
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.paddingTop = "";
    };
  }, []);

  // Load Chart.js dynamically
  useEffect(() => {
    if (chartScriptLoaded.current) return;
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js";
    script.async = true;
    script.onload = () => { chartScriptLoaded.current = true; };
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  // Intersection observer for revolution bars
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
          backgroundColor: ["#7B7C8C","#7B7C8C","#7B7C8C","#7B7C8C","#B7B8C7","#B7B8C7","#20DDEB","#8B7CF6"],
          borderRadius: 4, borderSkipped: false, barPercentage: 0.7,
        }],
      },
      options: {
        indexAxis: "y", responsive: true, maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: "#15151F", titleColor: "#F5F5FA", bodyColor: "#B7B8C7",
            borderColor: "rgba(32,221,235,0.2)", borderWidth: 1,
            callbacks: { label: (ctx: any) => ctx.raw + " anos para atingir 50% de adoção" },
          },
        },
        scales: {
          x: {
            grid: { color: "rgba(255,255,255,0.04)" },
            ticks: { color: "#7B7C8C", font: { family: "'IBM Plex Mono', monospace", size: 11 }, callback: (v: any) => v + " anos" },
            title: { display: true, text: "Anos até 50% de adoção", color: "#7B7C8C", font: { family: "'Plus Jakarta Sans', sans-serif", size: 12 } },
          },
          y: { grid: { display: false }, ticks: { color: "#B7B8C7", font: { family: "'Plus Jakarta Sans', sans-serif", size: 12 } } },
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
          backgroundColor: ["#7B7C8C","#7B7C8C","#7B7C8C","#7B7C8C","#7B7C8C","#B7B8C7","#8B7CF6"],
          borderRadius: 4, borderSkipped: false, barPercentage: 0.65,
        }],
      },
      options: {
        indexAxis: "y", responsive: true, maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: "#15151F", titleColor: "#F5F5FA", bodyColor: "#B7B8C7",
            borderColor: "rgba(32,221,235,0.2)", borderWidth: 1,
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
              color: "#7B7C8C", font: { family: "'IBM Plex Mono', monospace", size: 11 },
              callback: (v: any) => { if (v >= 12) return Math.round(v / 12) + " anos"; return v + " meses"; },
            },
            title: { display: true, text: "Tempo até 100 milhões de usuários", color: "#7B7C8C", font: { family: "'Plus Jakarta Sans', sans-serif", size: 12 } },
          },
          y: { grid: { display: false }, ticks: { color: "#B7B8C7", font: { family: "'Plus Jakarta Sans', sans-serif", size: 12 } } },
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
          { label: "Claude Enterprise", data: [3,3,3,3,3,3,3,3,3,4,4,4,5], backgroundColor: "#7a3010", stack: "s" },
          { label: "Claude Max", data: [2,2,2,2,2,2,2,2,2,3,4,5,5], backgroundColor: "#c06020", stack: "s" },
          { label: "Claude Team", data: [4,5,7,10,13,15,17,20,22,28,33,38,45], backgroundColor: "#e8903a", stack: "s" },
          { label: "Outro Anthropic", data: [1,2,2,3,3,3,3,3,3,4,5,6,14], backgroundColor: "#f5ddb0", stack: "s" },
          { label: "ChatGPT Business", data: [44,41,38,36,34,33,33,32,30,25,19,15,12], backgroundColor: "#7ab8f0", stack: "s" },
          { label: "ChatGPT Plus", data: [20,18,15,13,12,12,12,12,13,14,16,16,10], backgroundColor: "#4a90d9", stack: "s" },
          { label: "ChatGPT Pro", data: [13,13,14,14,14,14,13,12,12,11,10,10,5], backgroundColor: "#2e6eb5", stack: "s" },
          { label: "Outro OpenAI", data: [13,16,19,19,19,18,17,16,15,11,9,6,4], backgroundColor: "#1a4a8a", stack: "s" },
        ],
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { callbacks: { label: (c: any) => ` ${c.dataset.label}: ${c.parsed.y}%` } },
        },
        scales: {
          x: { stacked: true, grid: { display: false }, ticks: { font: { size: 11 }, color: "#7B7C8C", autoSkip: false, maxRotation: 0 } },
          y: { stacked: true, min: 0, max: 100, ticks: { stepSize: 10, font: { size: 11 }, color: "#7B7C8C", callback: (v: any) => v + "%" }, grid: { color: "rgba(150,150,150,0.15)" } },
        },
      },
    });
  };

  // Auto-build market share chart when section scrolls into view
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
    tracker.track("cta_click", { product: "imersao-claude-v2", cta_location: location, page: "/educacao/imersao-claude-v2" });
    const checkoutUrl = buildHotmartCheckoutUrl({
      baseUrl: "https://pay.hotmart.com/T104822269G?checkoutMode=10",
    });
    window.open(checkoutUrl, "_blank");
  };

  // ── MUDANÇA 3: Para quem é (persona PB) ──
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

  return (
    <div className="ic-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500;600&display=swap');
        .ic-page {
          font-family: 'Plus Jakarta Sans', -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          background: #0A0A13;
          color: #F5F5FA;
          line-height: 1.7;
          overflow-x: hidden;
        }
        .ic-page * { box-sizing: border-box; }
        .ic-page h1,.ic-page h2,.ic-page h3,.ic-page h4 {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
          line-height: 1.12;
          letter-spacing: -0.01em;
          text-transform: none;
          color: #F5F5FA;
        }
        .ic-page h1 { font-size: clamp(2rem,5.5vw,3.4rem); }
        .ic-page h2 { font-size: clamp(1.5rem,4vw,2.4rem); }
        .ic-page h3 { font-size: clamp(1.1rem,3vw,1.5rem); }
        .ic-container { max-width: 800px; margin: 0 auto; padding: 0 24px; }
        .ic-section { padding: 80px 0; position: relative; }
        .ic-mono { font-family: 'IBM Plex Mono', monospace; }
        .ic-text-cyan { color: #20DDEB; }
        .ic-text-red  { color: #8B7CF6; }
        .ic-text-muted { color: #7B7C8C; }
        .ic-highlight-cyan {
          background: linear-gradient(90deg, #20DDEB, #8B7CF6);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .ic-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(32,221,235,0.15), transparent);
          margin: 0 auto; max-width: 500px;
        }
        /* CTA */
        .ic-cta-btn {
          display: inline-block;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700; font-size: 0.95rem;
          letter-spacing: 0.02em; text-transform: none;
          text-decoration: none; color: #0A0A13;
          padding: 16px 44px; border: none; border-radius: 9999px;
          cursor: pointer; position: relative; overflow: hidden;
          background: linear-gradient(90deg, #20DDEB, #8B7CF6);
          box-shadow: 0 8px 28px -8px rgba(139,124,246,0.55);
          transition: all 0.3s ease;
        }
        .ic-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 34px -6px rgba(139,124,246,0.7);
        }
        .ic-cta-btn::before {
          content: ''; position: absolute; top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
          transition: left 0.5s;
        }
        .ic-cta-btn:hover::before { left: 100%; }
        .ic-cta-sub {
          display: block; font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 400; font-size: 0.7rem;
          letter-spacing: 0; text-transform: none;
          opacity: 0.85; margin-top: 4px;
        }
        /* HERO */
        .ic-hero {
          min-height: 100vh; min-height: 100svh;
          display: flex; align-items: center; justify-content: center;
          text-align: center; padding: 100px 24px 80px;
          position: relative;
          background:
            radial-gradient(ellipse 70% 55% at 50% 0%, rgba(32,221,235,0.06) 0%, transparent 70%),
            radial-gradient(ellipse 50% 45% at 20% 90%, rgba(139,124,246,0.03) 0%, transparent 60%),
            #0A0A13;
        }
        .ic-hero::after {
          content: ''; position: absolute; bottom: 0; left: 0; right: 0;
          height: 120px;
          background: linear-gradient(to bottom, transparent, #0A0A13);
          pointer-events: none;
        }
        .ic-hero__reactor {
          width: 80px; height: 80px; margin: 0 auto 32px;
          background: radial-gradient(circle, rgba(32,221,235,0.15) 0%, rgba(32,221,235,0.04) 50%, transparent 70%);
          border: 1px solid rgba(32,221,235,0.15);
          display: flex; align-items: center; justify-content: center;
          opacity: 0; animation: ic-pulseReactor 3s ease-in-out infinite, ic-fadeIn 0.6s 0.1s forwards;
        }
        .ic-hero__reactor-core {
          width: 28px; height: 28px;
          background: radial-gradient(circle, #38F3FF 0%, #20DDEB 60%, transparent 100%);
          box-shadow: 0 0 20px rgba(32,221,235,0.5), 0 0 60px rgba(32,221,235,0.2);
        }
        @keyframes ic-pulseReactor {
          0%,100% { box-shadow: 0 0 30px rgba(32,221,235,0.1); }
          50% { box-shadow: 0 0 60px rgba(32,221,235,0.2); }
        }
        .ic-hero__event-tag {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.8rem; letter-spacing: 3px; text-transform: uppercase;
          color: #20DDEB; margin-bottom: 20px;
          opacity: 0; animation: ic-fadeUp 0.7s 0.3s forwards;
        }
        .ic-hero__event-tag span {
          display: inline-block;
          background: rgba(32,221,235,0.08); border: 1px solid rgba(32,221,235,0.2);
          padding: 4px 14px; border-radius: 9999px;
        }
        .ic-hero__title {
          font-size: clamp(2.2rem,6vw,3.6rem);
          margin-bottom: 24px; line-height: 0.95;
          opacity: 0; animation: ic-fadeUp 0.7s 0.5s forwards;
        }
        .ic-hero__sub {
          font-size: clamp(1rem,2.5vw,1.15rem);
          color: #B7B8C7; max-width: 600px;
          margin: 0 auto 36px; font-family: 'Plus Jakarta Sans', sans-serif;
          opacity: 0; animation: ic-fadeUp 0.7s 0.7s forwards;
        }
        .ic-hero__form-wrap { opacity: 0; animation: ic-fadeUp 0.7s 0.9s forwards; }
        .ic-hero__meta {
          display: flex; flex-wrap: wrap; justify-content: center;
          gap: 20px; margin-top: 32px;
          opacity: 0; animation: ic-fadeUp 0.7s 1.1s forwards;
        }
        .ic-hero__meta-item {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.78rem; color: #7B7C8C;
          display: flex; align-items: center; gap: 6px;
        }
        .ic-hero__meta-item .ic-dot {
          width: 6px; height: 6px;
          background: #20DDEB;
          box-shadow: 0 0 6px rgba(32,221,235,0.5);
        }
        @keyframes ic-fadeUp {
          from { opacity:0; transform:translateY(18px); }
          to { opacity:1; transform:translateY(0); }
        }
        @keyframes ic-fadeIn { from { opacity:0; } to { opacity:1; } }
        @keyframes ic-pulse { 0%,100%{opacity:1;transform:scale(1);} 50%{opacity:.4;transform:scale(.6);} }
        /* URGENCY BAR */
        .ic-urgency-bar {
          background: linear-gradient(90deg, rgba(32,221,235,0.06), rgba(32,221,235,0.02));
          border-top: 1px solid rgba(32,221,235,0.15); border-bottom: 1px solid rgba(32,221,235,0.15);
          text-align: center; padding: 14px 24px;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.82rem; color: #20DDEB; letter-spacing: 0.5px;
        }
        /* PROBLEM CARDS */
        .ic-problem-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px; margin: 40px 0;
        }
        .ic-problem-card {
          background: #15151F; border: 1px solid rgba(255,255,255,0.09);
          border-radius: 16px;
          padding: 24px 20px; text-align: center;
          transition: border-color 0.3s;
        }
        .ic-problem-card:hover { border-color: rgba(139,124,246,0.3); }
        .ic-problem-card__stat {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 2.4rem; font-weight: 800;
          color: #8B7CF6; line-height: 1; margin-bottom: 8px;
        }
        .ic-problem-card__label { font-size: 0.82rem; color: #7B7C8C; line-height: 1.4; font-family: 'Plus Jakarta Sans', sans-serif; }
        /* AULA CARDS */
        .ic-aula-card {
          background: #15151F; border: 1px solid rgba(255,255,255,0.09);
          border-radius: 20px;
          padding: 28px; margin-bottom: 16px;
          display: flex; gap: 20px; align-items: flex-start;
          transition: border-color 0.3s, background 0.3s;
        }
        .ic-aula-card:hover { border-color: rgba(32,221,235,0.2); background: #1A1A28; }
        .ic-aula-card__num {
          flex-shrink: 0; width: 52px; height: 52px; border-radius: 9999px;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 700; font-size: 1.3rem;
        }
        .ic-aula-card__num--1 { background: rgba(32,221,235,0.08); border: 1px solid rgba(32,221,235,0.2); color: #20DDEB; }
        .ic-aula-card__num--2 { background: rgba(154,156,170,0.08); border: 1px solid rgba(154,156,170,0.2); color: #B7B8C7; }
        .ic-aula-card__num--3 { background: rgba(139,124,246,0.08); border: 1px solid rgba(139,124,246,0.2); color: #8B7CF6; }
        .ic-aula-card__tag {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.7rem; letter-spacing: 0.15em;
          text-transform: uppercase; color: #7B7C8C; margin-bottom: 4px;
        }
        .ic-aula-card__title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 800; font-size: 1.2rem; margin-bottom: 6px;
          text-transform: none; line-height: 1.25; color: #F5F5FA;
        }
        .ic-aula-card__desc { font-size: 0.9rem; color: #B7B8C7; font-family: 'Plus Jakarta Sans', sans-serif; }
        /* AUTHOR */
        .ic-author {
          display: flex; gap: 24px; align-items: flex-start;
          padding: 32px; background: #15151F;
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 20px;
          margin: 40px 0;
        }
        .ic-author__name { font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: 1.3rem; margin-bottom: 2px; text-transform: none; color: #F5F5FA; }
        .ic-author__role { font-family: 'IBM Plex Mono', monospace; font-size: 0.75rem; color: #20DDEB; margin-bottom: 10px; }
        .ic-author__text { font-size: 0.9rem; color: #B7B8C7; font-family: 'Plus Jakarta Sans', sans-serif; line-height: 1.7; }
        /* BLOCKQUOTE */
        .ic-page blockquote {
          border-left: 3px solid rgba(32,221,235,0.35);
          border-radius: 0 16px 16px 0;
          padding: 18px 24px; margin: 32px 0;
          background: rgba(255,255,255,0.02);
          font-style: italic; color: #B7B8C7; font-size: 0.95rem;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .ic-page blockquote cite { display: block; margin-top: 10px; font-style: normal; font-size: 0.8rem; color: #7B7C8C; font-family: 'IBM Plex Mono', monospace; }
        /* CHECK LIST */
        .ic-check-list { list-style: none; margin: 28px 0; padding: 0; }
        .ic-check-list li {
          padding: 10px 0 10px 28px; position: relative;
          color: #B7B8C7; font-size: 0.92rem;
          border-bottom: 1px solid rgba(255,255,255,0.10);
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .ic-check-list li:last-child { border-bottom: none; }
        .ic-check-list li::before { content: '▸'; position: absolute; left: 0; color: #20DDEB; font-weight: 700; }
        /* MID CAPTURE */
        .ic-mid-capture {
          background: #15151F;
          border-top: 1px solid rgba(32,221,235,0.15);
          border-bottom: 1px solid rgba(32,221,235,0.15);
          padding: 56px 24px; text-align: center;
        }
        /* CHART TABS */
        .ic-chart-tab {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.78rem; padding: 8px 16px; border-radius: 9999px;
          border: 1px solid rgba(255,255,255,0.10);
          background: transparent; color: #7B7C8C;
          cursor: pointer; transition: all 0.3s;
        }
        .ic-chart-tab:hover { border-color: rgba(32,221,235,0.2); color: #B7B8C7; }
        .ic-chart-tab.active {
          background: rgba(32,221,235,0.08);
          border-color: #20DDEB;
          color: #20DDEB;
        }
        /* REVOLUTION BARS */
        .rev-timeline-visual { display: flex; flex-direction: column; gap: 16px; }
        .rev-item { opacity: 0; animation: ic-revSlideIn 0.6s var(--delay, 0s) forwards; }
        @keyframes ic-revSlideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .rev-bar {
          height: 6px; width: var(--width, 100%); border-radius: 4px;
          background: var(--color, #20DDEB);
          margin-bottom: 8px; min-width: 8px; position: relative;
          transition: width 0.8s ease;
        }
        .rev-bar::after {
          content: ''; position: absolute; right: 0; top: -3px;
          width: 12px; height: 12px; border-radius: 9999px;
          background: var(--color, #20DDEB);
          box-shadow: 0 0 10px var(--color, #20DDEB);
        }
        .rev-info { display: flex; flex-wrap: wrap; align-items: baseline; gap: 8px 16px; }
        .rev-label { font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 400; font-size: 1.05rem; color: #F5F5FA; }
        .rev-date { font-size: 0.75rem; color: #7B7C8C; font-family: 'IBM Plex Mono', monospace; }
        .rev-span { font-size: 0.85rem; color: #B7B8C7; font-family: 'Plus Jakarta Sans', sans-serif; }
        .rev-span--alert { color: #8B7CF6; font-weight: 600; }
        /* PRICE BOX */
        .ic-price-box {
          text-align: center; background: #15151F;
          border: 1px solid rgba(32,221,235,0.2);
          border-radius: 24px;
          padding: 48px 32px; margin: 40px auto; max-width: 500px;
          position: relative; overflow: hidden;
        }
        .ic-price-box::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, #20DDEB, #8B7CF6);
        }
        .ic-price-box__tag {
          display: inline-block; font-family: 'IBM Plex Mono', monospace;
          font-size: 0.75rem; letter-spacing: 0.15em; text-transform: uppercase;
          color: #0A0A13; background: #20DDEB; border-radius: 9999px;
          padding: 4px 14px; margin-bottom: 20px;
        }
        .ic-price-box__label { font-size: 0.95rem; color: #B7B8C7; margin-bottom: 8px; font-family: 'Plus Jakarta Sans', sans-serif; }
        .ic-price-box__old { font-size: 1.1rem; color: #7B7C8C; text-decoration: line-through; margin-bottom: 4px; font-family: 'Plus Jakarta Sans', sans-serif; }
        .ic-price-box__amount {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 4rem; font-weight: 800; line-height: 1; margin-bottom: 4px;
        }
        .ic-price-box__installment {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.85rem; color: #7B7C8C; margin-bottom: 28px;
        }
        .ic-guarantee { text-align: center; padding: 32px 24px; margin: 16px 0; }
        .ic-guarantee__icon { font-size: 2rem; margin-bottom: 12px; }
        .ic-guarantee__title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1.3rem; font-weight: 800;
          color: #20DDEB; margin-bottom: 6px; text-transform: none;
        }
        .ic-guarantee__text { color: #7B7C8C; font-size: 0.88rem; max-width: 460px; margin: 0 auto; font-family: 'Plus Jakarta Sans', sans-serif; }
        /* BONUS BOX */
        .ic-bonus-box {
          background: rgba(32,221,235,0.04);
          border: 1px solid rgba(32,221,235,0.2);
          border-radius: 16px;
          padding: 24px 28px;
          margin: 0 auto 24px; max-width: 500px; text-align: left;
        }
        .ic-bonus-tag {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.65rem; letter-spacing: 0.15em; text-transform: uppercase;
          color: #20DDEB; margin-bottom: 8px; display: block;
        }
        /* BONUS images */
        .ic-bonus-prompts-desktop {
          width: 100%; max-width: 900px; height: auto;
          margin: 0 auto; display: block; border-radius: 16px;
        }
        .ic-bonus-prompts-mobile { display: none; border-radius: 16px; }
        /* BONUS CARD */
        .ic-bonus-card {
          background: #15151F;
          border: 1px solid rgba(32,221,235,0.18);
          border-radius: 16px;
          padding: 20px 18px;
          text-align: left;
        }
        .ic-bonus-card__tag {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.7rem; letter-spacing: 0.15em;
          color: #20DDEB; margin-bottom: 8px;
        }
        .ic-bonus-card__title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1rem; font-weight: 800;
          color: #F5F5FA; margin-bottom: 6px; text-transform: none;
        }
        .ic-bonus-card__desc { color: #B7B8C7; font-size: 0.85rem; line-height: 1.5; font-family: 'Plus Jakarta Sans', sans-serif; }
        /* FAQ */
        .ic-faq-item { border-bottom: 1px solid rgba(255,255,255,0.10); padding: 18px 0; }
        .ic-faq-item summary {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700; font-size: 1.1rem;
          cursor: pointer; color: #F5F5FA;
          list-style: none; display: flex;
          justify-content: space-between; align-items: center;
          text-transform: none;
        }
        .ic-faq-item summary::-webkit-details-marker { display: none; }
        .ic-faq-item summary::after { content: '+'; font-size: 1.3rem; color: #20DDEB; transition: transform 0.3s; font-family: 'IBM Plex Mono', monospace; }
        .ic-faq-item[open] summary::after { content: '−'; }
        .ic-faq-item p { color: #B7B8C7; font-size: 0.9rem; margin-top: 10px; padding-right: 28px; font-family: 'Plus Jakarta Sans', sans-serif; line-height: 1.7; }
        /* FOOTER */
        .ic-footer {
          text-align: center; padding: 36px 24px;
          font-size: 0.75rem; color: #7B7C8C;
          border-top: 1px solid rgba(255,255,255,0.10);
          font-family: 'IBM Plex Mono', monospace;
        }
        /* CHART WRAPPER */
        .ic-chart-box {
          background: #15151F;
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 16px;
          padding: 24px 20px 16px;
        }
        /* ADOPTION CURVE BOX */
        .ic-adoption-box {
          border: 1px solid rgba(32,221,235,0.14);
          border-radius: 16px;
          overflow: hidden;
        }
        .ic-adoption-header {
          background: #1A1A28;
          border-bottom: 1px solid rgba(32,221,235,0.10);
          padding: 10px 18px;
          display: flex; align-items: center; gap: 8px;
        }
        .ic-adoption-body {
          padding: 18px 18px 14px;
          background: #0A0A13;
        }
        /* RESPONSIVE */
        @media (max-width: 640px) {
          .ic-section { padding: 56px 0; }
          .ic-hero { padding: 80px 20px 60px; min-height: auto; }
          .ic-hero__reactor { width: 60px; height: 60px; margin-bottom: 24px; }
          .ic-hero__reactor-core { width: 22px; height: 22px; }
          .ic-hero__title { font-size: 1.8rem; }
          .ic-hero__event-tag { font-size: 0.65rem; letter-spacing: 1.5px; }
          .ic-hero__event-tag span { padding: 3px 10px; }
          .ic-hero__meta { gap: 12px; }
          .ic-hero__meta-item { font-size: 0.7rem; }
          .ic-container { padding: 0 16px; }
          .ic-author { flex-direction: column; align-items: center; text-align: center; padding: 24px 16px; }
          .ic-aula-card { flex-direction: column; align-items: center; text-align: center; padding: 20px 16px; }
          .ic-aula-card__num { width: 44px; height: 44px; font-size: 0.95rem; }
          .ic-problem-grid { grid-template-columns: 1fr; }
          .ic-problem-card { padding: 18px 16px; }
          .ic-problem-card__stat { font-size: 2rem; }
          .ic-cta-btn { font-size: 1rem; padding: 16px 28px; }
          .ic-page blockquote { padding: 14px 16px; font-size: 0.88rem; }
          .ic-check-list li { font-size: 0.85rem; padding: 8px 0 8px 24px; }
          .ic-price-box { padding: 36px 20px; }
          .ic-urgency-bar { font-size: 0.72rem; padding: 12px 16px; }
          .ic-mid-capture { padding: 48px 0; }
          .ic-faq-item summary { font-size: 1rem; }
          .ic-adoption-segs { flex-wrap: wrap; }
          .ic-adoption-seg { min-width: 45% !important; flex: 1 1 45% !important; }
          .ic-nowbar { flex-wrap: wrap; }
          .ic-nowbar-pct { font-size: 16px !important; }
          .ic-chart-tab { font-size: 0.7rem !important; padding: 6px 12px !important; }
          .ic-bonus-prompts-desktop { display: none; }
          .ic-bonus-prompts-mobile {
            display: block; width: 150%; max-width: none;
            transform: translateX(-0.75rem); height: auto;
          }
        }
      `}</style>

      {/* ══════ HERO ══════ */}
      {/* MUDANÇA 1: Nova headline + sub */}
      <section className="ic-hero">
        <div className="ic-container">
          <div className="ic-hero__reactor"><div className="ic-hero__reactor-core" /></div>
          <div className="ic-hero__event-tag"><span>Oferta especial: Compre hoje com 67% de desconto!</span></div>

          <h1 className="ic-hero__title">
            Você usa ChatGPT pra reescrever texto e acha que está usando IA. Em 3 aulas eu vou te mostrar{" "}
            <span className="ic-highlight-cyan">o que significa usar IA de verdade no seu negócio.</span>
          </h1>

          <p className="ic-hero__sub">
            Descubra por que 50% do uso profissional de IA migrou do ChatGPT para o Claude — e como empresários estão economizando 10-15 horas por semana com sistemas que trabalham sozinhos.
          </p>

          <div className="ic-hero__form-wrap">
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
        As vagas são limitadas. Quando atingirmos o limite, esta página sai do ar.
      </div>

      {/* ══════ MIGRAÇÃO CLAUDE ══════ */}
      <section className="ic-section">
        <div className="ic-container" style={{ textAlign: "center" }}>
          <video src="/videos/claude-migration.mp4" autoPlay loop muted playsInline style={{ width: 120, height: "auto", margin: "0 auto 24px", display: "block" }} />
          <h2>Descubra porque <span className="ic-highlight-cyan">50% dos usuários sérios</span> de IA generativa nos últimos meses migraram do ChatGPT para o Claude.</h2>

          <div className="ic-chart-box" style={{ marginTop: 40 }}>
            <p style={{ fontSize: 18, fontWeight: 500, color: "#F5F5FA", margin: "0 0 4px", textAlign: "left", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Uso do ChatGPT vs Claude</p>
            <p style={{ fontSize: 14, fontWeight: 500, color: "#B7B8C7", margin: "0 0 4px", textAlign: "left", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Dados até fev 2026</p>
            <p style={{ fontSize: 12, color: "#B7B8C7", margin: "0 0 16px", textAlign: "left", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Participação de mercado em gastos com assinaturas de chat de IA nos EUA</p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 16px", marginBottom: 16 }}>
              {[
                { color: "#1a4a8a", label: "Outro OpenAI" },
                { color: "#2e6eb5", label: "ChatGPT Pro" },
                { color: "#4a90d9", label: "ChatGPT Plus" },
                { color: "#7ab8f0", label: "ChatGPT Business" },
                { color: "#f5ddb0", label: "Outro Anthropic" },
                { color: "#e8903a", label: "Claude Team" },
                { color: "#c06020", label: "Claude Max" },
                { color: "#7a3010", label: "Claude Enterprise" },
              ].map((l) => (
                <span key={l.label} style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "#B7B8C7", fontFamily: "'IBM Plex Mono', monospace" }}>
                  <span style={{ width: 12, height: 12, background: l.color, flexShrink: 0 }} />
                  {l.label}
                </span>
              ))}
            </div>

            <div style={{ position: "relative", width: "100%", height: 380 }}>
              <canvas ref={marketShareChartRef} />
            </div>

            <p style={{ fontSize: 10, color: "#7B7C8C", marginTop: 12, textAlign: "left", lineHeight: 1.5, fontFamily: "'IBM Plex Mono', monospace" }}>
              Fonte: Ramp Economics Lab (ramp.com/data). Dados de cartão corporativo e pagamento de contas de mais de 50.000 empresas dos EUA na plataforma financeira da Ramp.
            </p>
          </div>

          <p style={{ color: "#B7B8C7", maxWidth: 620, margin: "32px auto 0", fontSize: "0.95rem", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Nos últimos 12 meses, mais mudou na forma como se ganha dinheiro do que nos últimos 12 anos. E isso é só o começo. Os números mostram o que está por vir:
          </p>

          <div className="ic-problem-grid" style={{ marginTop: 32 }}>
            <div className="ic-problem-card">
              <div className="ic-problem-card__stat">92%</div>
              <div className="ic-problem-card__label">das empresas planejam adotar IA até 2027</div>
            </div>
            <div className="ic-problem-card">
              <div className="ic-problem-card__stat">41%</div>
              <div className="ic-problem-card__label">dos empregos podem simplesmente desaparecer</div>
            </div>
            <div className="ic-problem-card">
              <div className="ic-problem-card__stat">5×</div>
              <div className="ic-problem-card__label">mais produtividade exigida por profissional</div>
            </div>
          </div>
        </div>
      </section>

      <div className="ic-divider" />

      {/* ══════ VELOCIDADE DAS REVOLUÇÕES ══════ */}
      <section className="ic-section">
        <div className="ic-container">
          <h2 style={{ textAlign: "center" }}>A velocidade só <span className="ic-highlight-cyan">acelera</span></h2>
          <p style={{ textAlign: "center", color: "#B7B8C7", maxWidth: 600, margin: "16px auto 0", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Pense comigo: quantas décadas seu avô viveu com a mesma profissão? Quantas vezes seus pais precisaram se reinventar? E agora… quantas mudanças você enfrentou só nos últimos dois anos?
          </p>

          <div style={{ marginTop: 48 }}>
            {/* Tab switcher */}
            <div style={{ display: "flex", gap: 8, marginBottom: 24, justifyContent: "center", flexWrap: "wrap" }}>
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
                  { color: "#B7B8C7", delay: "0.1s", width: "100%", label: "Revolução Agrícola", date: "~10.000 a.C.", span: "~11.800 anos até a próxima revolução", alert: false },
                  { color: "#B7B8C7", delay: "0.3s", width: "15%", label: "Revolução Industrial", date: "~1800 d.C.", span: "~150 anos até a próxima", alert: false },
                  { color: "#20DDEB", delay: "0.5s", width: "5.5%", label: "Revolução Tecnológica", date: "~1950 d.C.", span: "~65 anos até a próxima", alert: false },
                  { color: "#8B7CF6", delay: "0.7s", width: "0.85%", label: "Revolução da IA", date: "~2015 d.C.", span: "Acelerando em meses, não anos", alert: true },
                ].map((r, i) => (
                  <div key={i} className="rev-item" style={{ "--color": r.color, "--delay": r.delay } as React.CSSProperties}>
                    <div className="rev-bar" style={{ "--width": r.width } as React.CSSProperties} />
                    <div className="rev-info">
                      <span className="rev-label">{r.label}</span>
                      <span className="rev-date ic-mono">{r.date}</span>
                      <span className={`rev-span ${r.alert ? "rev-span--alert" : ""}`}>{r.span}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p style={{ textAlign: "center", color: "#7B7C8C", fontSize: "0.78rem", marginTop: 16, fontFamily: "'IBM Plex Mono',monospace" }}>
                O intervalo entre revoluções caiu de milênios → séculos → décadas → anos
              </p>
            </div>

            {/* Panel: Adoção */}
            <div style={{ display: activeTab === "adocao" ? "block" : "none" }}>
              <div style={{ position: "relative", width: "100%", height: 340 }}>
                <canvas ref={adoptionChartRef} />
              </div>
              <p style={{ textAlign: "center", color: "#7B7C8C", fontSize: "0.78rem", marginTop: 12, fontFamily: "'IBM Plex Mono',monospace" }}>
                Anos até atingir 50% de adoção nos EUA · Fonte: Our World in Data, Visual Capitalist, Epoch AI
              </p>
            </div>

            {/* Panel: 100M */}
            <div style={{ display: activeTab === "100m" ? "block" : "none" }}>
              <div style={{ position: "relative", width: "100%", height: 380 }}>
                <canvas ref={users100mChartRef} />
              </div>
              <p style={{ textAlign: "center", color: "#7B7C8C", fontSize: "0.78rem", marginTop: 12, fontFamily: "'IBM Plex Mono',monospace" }}>
                Meses até atingir 100 milhões de usuários · Fonte: UBS, Visual Capitalist, Statista
              </p>
            </div>
          </div>

          <blockquote style={{ marginTop: 40 }}>
            "Em breve teremos uma pessoa fazendo o trabalho de cinco graças à IA. A dúvida é: quem não usar a tecnologia conseguirá acompanhar? Provavelmente não."
          </blockquote>

          <p style={{ color: "#B7B8C7", textAlign: "center", maxWidth: 620, margin: "32px auto 0", fontSize: "0.95rem", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Em todas as eras da humanidade, quem se destacou foram aqueles que conseguiram dominar novas tecnologias com velocidade.
          </p>
          <p style={{ color: "#F5F5FA", textAlign: "center", fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "1.4rem", marginTop: 16 }}>
            Isso, tem até nome. São os <span className="ic-highlight-cyan">Early Adopters</span>.
          </p>

          {/* Curva de Adoção */}
          <div className="ic-adoption-box" style={{ marginTop: 40 }}>
            <div className="ic-adoption-header">
              <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 10, color: "#7B7C8C", letterSpacing: "0.14em", textTransform: "uppercase" }}>Curva de adoção tecnológica</span>
              <span style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: 5, fontFamily: "'IBM Plex Mono',monospace", fontSize: 9, color: "#20DDEB", background: "rgba(32,221,235,0.08)", border: "1px solid rgba(32,221,235,0.2)", padding: "3px 10px", borderRadius: 9999, letterSpacing: "0.1em" }}>
                <span style={{ width: 5, height: 5, borderRadius: 9999, background: "#20DDEB", animation: "ic-pulse 2s ease-in-out infinite" }} />
                Ao vivo
              </span>
            </div>
            <div className="ic-adoption-body">
              <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 10, color: "#20DDEB", letterSpacing: 3, textTransform: "uppercase", marginBottom: 4 }}>03 — O Mecanismo</div>
              <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 20, fontWeight: 800, color: "#F5F5FA", lineHeight: 1.25 }}>Curva de <span style={{ color: "#20DDEB" }}>adoção</span> tecnológica</div>
              <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 12, color: "#7B7C8C", fontWeight: 400, marginTop: 4, marginBottom: 12 }}>Rogers (1962) — onde você está na curva define quanto você vai ganhar</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "5px 14px", marginBottom: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 5, fontFamily: "'IBM Plex Mono',monospace", fontSize: 9, letterSpacing: 1, textTransform: "uppercase" }}><div style={{ width: 8, height: 8, background: "#B7B8C7" }} /><span style={{ color: "#B7B8C7" }}>Adotantes por período (sino)</span></div>
                <div style={{ display: "flex", alignItems: "center", gap: 5, fontFamily: "'IBM Plex Mono',monospace", fontSize: 9, letterSpacing: 1, textTransform: "uppercase" }}><div style={{ width: 8, height: 8, background: "#20DDEB" }} /><span style={{ color: "#20DDEB" }}>Adoção acumulada (curva S)</span></div>
                <div style={{ display: "flex", alignItems: "center", gap: 5, fontFamily: "'IBM Plex Mono',monospace", fontSize: 9, letterSpacing: 1, textTransform: "uppercase" }}><div style={{ width: 8, height: 8, background: "#8B7CF6" }} /><span style={{ color: "#8B7CF6" }}>Agentes de IA — agora</span></div>
              </div>

              <svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
                <defs>
                  <linearGradient id="bellGradV2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#B7B8C7" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="#B7B8C7" stopOpacity={0.03} />
                  </linearGradient>
                </defs>
                <rect x="50" y="10" width="15.75" height="180" fill="rgba(154,156,170,0.04)" />
                <rect x="65.75" y="10" width="85.05" height="180" fill="rgba(32,221,235,0.04)" />
                <rect x="150.8" y="10" width="214.2" height="180" fill="rgba(32,221,235,0.03)" />
                <rect x="365" y="10" width="214.2" height="180" fill="rgba(125,130,125,0.03)" />
                <rect x="579.2" y="10" width="100.8" height="180" fill="rgba(125,130,125,0.02)" />
                <line x1="65.75" y1="10" x2="65.75" y2="190" stroke="rgba(32,221,235,0.12)" strokeWidth="0.5" strokeDasharray="3,3" />
                <line x1="150.8" y1="10" x2="150.8" y2="190" stroke="rgba(32,221,235,0.12)" strokeWidth="0.5" strokeDasharray="3,3" />
                <line x1="365" y1="10" x2="365" y2="190" stroke="rgba(32,221,235,0.12)" strokeWidth="0.5" strokeDasharray="3,3" />
                <line x1="579.2" y1="10" x2="579.2" y2="190" stroke="rgba(32,221,235,0.12)" strokeWidth="0.5" strokeDasharray="3,3" />
                <text x="58" y="22" fontFamily="IBM Plex Mono,monospace" fontSize="7" fill="#B7B8C7" textAnchor="middle" opacity="0.8">INOV.</text>
                <text x="108" y="22" fontFamily="IBM Plex Mono,monospace" fontSize="7" fill="#20DDEB" textAnchor="middle" opacity="0.8">EARLY ADO.</text>
                <text x="258" y="22" fontFamily="IBM Plex Mono,monospace" fontSize="7" fill="#20DDEB" textAnchor="middle" opacity="0.6">EARLY MAJORITY</text>
                <text x="472" y="22" fontFamily="IBM Plex Mono,monospace" fontSize="7" fill="#7B7C8C" textAnchor="middle" opacity="0.8">LATE MAJORITY</text>
                <text x="630" y="22" fontFamily="IBM Plex Mono,monospace" fontSize="7" fill="#7B7C8C" textAnchor="middle" opacity="0.6">RETARD.</text>
                <line x1="50" y1="190" x2="680" y2="190" stroke="rgba(32,221,235,0.2)" strokeWidth="0.5" />
                <line x1="50" y1="10" x2="50" y2="190" stroke="rgba(32,221,235,0.15)" strokeWidth="0.5" />
                <line x1="680" y1="10" x2="680" y2="190" stroke="rgba(32,221,235,0.15)" strokeWidth="0.5" />
                <path d="M 50,190 C 60,190 65,189 80,188 C 100,187 110,185 130,182 C 150,178 155,173 170,166 C 185,158 192,150 210,138 C 228,124 238,112 258,95 C 275,80 285,66 305,50 C 320,38 332,27 345,20 C 352,16 358,13 365,11 C 372,13 378,16 385,20 C 398,27 410,38 425,50 C 445,66 455,80 472,95 C 492,112 502,124 520,138 C 538,150 545,158 560,166 C 575,173 580,178 600,182 C 620,185 630,187 650,188 C 665,189 670,190 680,190 Z" fill="url(#bellGradV2)" />
                <path d="M 50,190 C 60,190 65,189 80,188 C 100,187 110,185 130,182 C 150,178 155,173 170,166 C 185,158 192,150 210,138 C 228,124 238,112 258,95 C 275,80 285,66 305,50 C 320,38 332,27 345,20 C 352,16 358,13 365,11 C 372,13 378,16 385,20 C 398,27 410,38 425,50 C 445,66 455,80 472,95 C 492,112 502,124 520,138 C 538,150 545,158 560,166 C 575,173 580,178 600,182 C 620,185 630,187 650,188 C 665,189 670,190 680,190" fill="none" stroke="#B7B8C7" strokeWidth="2.5" />
                <path d="M 50,189 C 70,188 90,187 110,186 C 130,184 145,181 160,177 C 175,172 185,165 200,156 C 215,146 225,135 240,122 C 258,107 268,95 285,82 C 302,68 315,57 335,46 C 348,38 356,34 365,31 C 374,28 382,26 395,23 C 410,20 422,17 440,14 C 458,12 470,11 490,11 C 520,11 550,11 580,11 C 610,11 640,11 660,11 C 668,11 674,11 680,11" fill="none" stroke="#20DDEB" strokeWidth="2" strokeLinecap="round" />
                <line x1="108" y1="10" x2="108" y2="190" stroke="#8B7CF6" strokeWidth="1.5" strokeDasharray="4,4" />
                <rect x="86" y="9" width="44" height="15" rx="2" fill="#8B7CF6" />
                <text x="108" y="20" fontFamily="IBM Plex Mono,monospace" fontSize="8" fill="#F5F5FA" textAnchor="middle" fontWeight="500">AGORA</text>
                <circle cx="108" cy="183" r="4" fill="#8B7CF6" />
                <circle cx="108" cy="178" r="4" fill="#8B7CF6" opacity="0.6" />
              </svg>

              <div className="ic-adoption-segs" style={{ display: "flex", gap: 6, marginTop: 12, flexWrap: "wrap" }}>
                {[
                  { label: "Inovadores", pct: "2,5%", desc: "Constroem antes do mercado existir", color: "#B7B8C7" },
                  { label: "Early Adopters", pct: "13,5%", desc: "Líderes que vencem pela vantagem", color: "#20DDEB" },
                  { label: "Early Majority", pct: "34%", desc: "Adotam depois que a prova existe", color: "#20DDEB" },
                  { label: "Late Majority", pct: "34%", desc: "Entram por pressão, não escolha", color: "#7B7C8C" },
                  { label: "Retardatários", pct: "16%", desc: "Chegam quando a vantagem acabou", color: "#7B7C8C" },
                ].map((seg) => (
                  <div key={seg.label} className="ic-adoption-seg" style={{ flex: 1, minWidth: 110, background: "#15151F", border: "1px solid rgba(255,255,255,0.10)", borderRadius: 10, padding: "8px 9px", position: "relative", overflow: "hidden" }}>
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1.5, background: `linear-gradient(90deg, transparent, ${seg.color}80, transparent)` }} />
                    <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 7.5, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 3, color: seg.color }}>{seg.label}</div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 16, fontWeight: 400, lineHeight: 1, marginBottom: 2, color: seg.color }}>{seg.pct}</div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 9, color: "#7B7C8C", fontWeight: 300, lineHeight: 1.35 }}>{seg.desc}</div>
                  </div>
                ))}
              </div>

              <div className="ic-nowbar" style={{ background: "rgba(139,124,246,0.06)", border: "1px solid rgba(139,124,246,0.25)", borderRadius: 14, padding: "10px 14px", marginTop: 12, display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 26, height: 26, borderRadius: 9999, border: "1.5px solid #8B7CF6", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <div style={{ width: 7, height: 7, borderRadius: 9999, background: "#8B7CF6", animation: "ic-pulse 2s ease-in-out infinite" }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 11, fontWeight: 700, color: "#8B7CF6" }}>Agentes de IA — Posição Atual (2025–2026)</div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 10, color: "#7B7C8C", fontWeight: 400, marginTop: 2 }}>A janela entre Early Adopters e Early Majority está aberta agora. Quem entrar hoje ainda pega a vantagem de quem chegou cedo.</div>
                </div>
                <div className="ic-nowbar-pct" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 20, fontWeight: 800, color: "#8B7CF6" }}>~8%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ MID CAPTURE ══════ */}
      {/* MUDANÇA 5: H2 e body */}
      <section className="ic-mid-capture">
        <div className="ic-container">
          <h2>"Tá, Rodrigo. <span className="ic-highlight-cyan">O que eu faço com isso?</span>"</h2>
          <p style={{ color: "#B7B8C7", maxWidth: 580, margin: "12px auto 0", fontSize: "0.95rem", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            É exatamente pra responder essa pergunta que criei a <strong style={{ color: "#F5F5FA" }}>Imersão em Claude</strong>: 3 aulas onde eu vou te mostrar, na prática, como usar a IA mais poderosa do mercado pra criar sistemas que trabalham pelo seu negócio — e por que existe uma janela de oportunidade aberta agora que não vai durar.
          </p>
          <div style={{ marginTop: 28 }}>
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
          <p className="ic-mono ic-text-cyan" style={{ fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 10, textAlign: "center" }}>Imersão em Claude</p>
          <h2 style={{ textAlign: "center" }}>3 aulas que podem mudar<br />o rumo da sua <span className="ic-highlight-cyan">vida</span></h2>

          <div style={{ marginTop: 44 }}>
            <div className="ic-aula-card">
              <div className="ic-aula-card__num ic-aula-card__num--1">01</div>
              <div>
                <div className="ic-aula-card__tag">Aula 1 · A Revolução</div>
                <div className="ic-aula-card__title">O Que Está Acontecendo Agora Que Quase Ninguém Percebeu</div>
                <div className="ic-aula-card__desc">
                  Nos últimos 12 meses, mais mudou na forma como se aprende, trabalha e ganha dinheiro do que nos últimos 12 anos. Você vai entender por que a terceira onda da IA veio para revolucionar.
                </div>
              </div>
            </div>

            <div className="ic-aula-card">
              <div className="ic-aula-card__num ic-aula-card__num--2">02</div>
              <div>
                <div className="ic-aula-card__tag">Aula 2 · A Janela</div>
                <div className="ic-aula-card__title">Quem Está Caindo, Quem Está Subindo — E Onde Você Entra</div>
                <div className="ic-aula-card__desc">
                  Empresas bilionárias derretendo. Freelancers perdendo clientes da noite pro dia. Mas do outro lado, pessoas comuns estão faturando R$10K, R$50K, R$300K por mês, sozinhas, sem equipe, sem investidor. A janela está aberta agora. Você vai ver os números e entender exatamente por quê.
                </div>
              </div>
            </div>

            {/* MUDANÇA 2: Aula 3 — tag, título e descrição */}
            <div className="ic-aula-card">
              <div className="ic-aula-card__num ic-aula-card__num--3">03</div>
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
      <section className="ic-section">
        <div className="ic-container">
          <h3 style={{ color: "#9A9CAA", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.15em", fontFamily: "'IBM Plex Mono',monospace", marginBottom: 8, textAlign: "center" }}>Quem vai conduzir a imersão</h3>
          <h2 style={{ textAlign: "center" }}>Nós estamos juntos<br />nesse barco.</h2>

          <div className="ic-author">
            <img loading="lazy" src={rodrigoPhoto} alt="Rodrigo Albuquerque" style={{ width: 80, height: 80, objectFit: "cover", flexShrink: 0 }} />
            <div>
              <div className="ic-author__name">Rodrigo Albuquerque</div>
              <div className="ic-author__role">Empreendedor · Entusiasta de IA · Estrategista de Negócios</div>
              <div className="ic-author__text">
                Liderei equipes que venderam mais de R$100 milhões por ano. Gerenciei times de mais de 50 pessoas. Hoje, uso IA todos os dias para construir sistemas, automatizar operações e fechar contratos.
                <br /><br />
                Não sou desenvolvedor. Não sou guru de 22 anos que mora com os pais. Sou empreendedor, pai, cristão e estou com a minha esposa há mais de 10 anos. Assim como você, tenho contas para pagar e zero tempo a perder.
                <br /><br />
                Quando vi a velocidade dessa revolução, não fiquei debatendo se valia a pena. Parei tudo, testei dezenas de ferramentas e coloquei para rodar. O <strong style={{ color: "#20DDEB" }}>Claude</strong> é, de longe, a IA mais poderosa atualmente. Ela não só responde perguntas. Ela executa tarefas. Constrói sistemas e faz entregas inteiras sozinha. Criei essa imersão para mostrar exatamente o que descobri.
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="ic-divider" />

      {/* ══════ PRA QUEM É ══════ */}
      {/* MUDANÇA 3: Lista atualizada para persona PB */}
      <section className="ic-section">
        <div className="ic-container">
          <h2 style={{ textAlign: "center" }}>Esta imersão é para <span className="ic-highlight-cyan">você</span> se…</h2>

          <ul className="ic-check-list" style={{ marginTop: 32 }}>
            {forYouItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <div className="ic-divider" />

      {/* ══════ BÔNUS · NETWORKING ══════ */}
      <section className="ic-section">
        <div className="ic-container" style={{ textAlign: "center", maxWidth: 900 }}>
          <span className="ic-bonus-tag" style={{ display: "inline-block", marginBottom: 16 }}>
            Bônus exclusivo · só pra alunos
          </span>
          <h2 style={{ textAlign: "center" }}>
            Entre no <span className="ic-highlight-cyan">Grupo Exclusivo de Networking</span> dos alunos da Imersão
          </h2>
          <p style={{ color: "#B7B8C7", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: 720, margin: "20px auto 0", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Acesso vitalício à comunidade fechada de quem está implementando IA de verdade nos próprios negócios. Troca diária com empresários e profissionais à frente da curva, oportunidades de parceria e respostas pra travas no caminho — sem ruído de grupos públicos.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16, marginTop: 40, maxWidth: 780, marginLeft: "auto", marginRight: "auto" }}>
            {[
              { tag: "01", title: "Implementações reais", desc: "Cases dos próprios alunos rodando em produção, com prints e prompts." },
              { tag: "02", title: "Parcerias B2B", desc: "Empresários se conectando para co-criar produtos e indicar clientes." },
              { tag: "03", title: "Suporte de pares", desc: "Travou numa automação? Alguém já passou por isso e responde no grupo." },
            ].map((item, i) => (
              <div key={i} className="ic-bonus-card">
                <div className="ic-bonus-card__tag">{item.tag}</div>
                <div className="ic-bonus-card__title">{item.title}</div>
                <div className="ic-bonus-card__desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="ic-divider" />

      {/* ══════ BÔNUS · BIBLIOTECA DE PROMPTS ══════ */}
      <section className="ic-section">
        <div className="ic-container" style={{ textAlign: "center", maxWidth: 1100 }}>
          <span className="ic-bonus-tag" style={{ display: "inline-block", marginBottom: 16 }}>
            Bônus incluso · de R$ 97 por R$ 0
          </span>
          <h2 style={{ textAlign: "center" }}>
            Tenha acesso ao meu <span className="ic-highlight-cyan">Banco de Prompts Secreto</span>
          </h2>
          <p style={{ color: "#B7B8C7", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: 720, margin: "20px auto 0", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Mais de 50 prompts validados, prontos pra copiar e colar. São os prompts que eu uso no dia a dia com Claude — vendas, copy, análise, planejamento, operação. Atalho de meses de teste.
          </p>

          <div style={{ marginTop: 40 }}>
            <img
              loading="lazy"
              src={bancoPromptsImage}
              alt="Banco de Prompts Secreto — mais de 50 prompts validados"
              className="ic-bonus-prompts-desktop"
            />
            <img
              loading="lazy"
              src={bancoPromptsMobileImage}
              alt="Banco de Prompts Secreto — mais de 50 prompts validados"
              className="ic-bonus-prompts-mobile"
            />
          </div>
        </div>
      </section>

      {/* ══════ OFERTA ══════ */}
      <section className="ic-section" id="oferta" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(32,221,235,0.04) 0%, transparent 70%)" }}>
        <div className="ic-container" style={{ textAlign: "center" }}>
          <h2>O futuro pertence a quem<br />age <span className="ic-highlight-cyan">agora</span>.</h2>

          {/* MUDANÇA 6: ROI anchor com economia de tempo */}
          <p style={{ color: "#B7B8C7", maxWidth: 600, margin: "16px auto 0", fontSize: "0.95rem", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Se a Imersão te economizar 5 horas de trabalho na primeira semana — e vai —{" "}
            <strong style={{ color: "#F5F5FA" }}>ela já se pagou.</strong>{" "}
            Agora imagina quando você tiver sistemas funcionando.
          </p>

          <div className="ic-price-box">
            <div className="ic-price-box__tag">Vagas limitadas</div>
            <div className="ic-price-box__label">Imersão em Claude — 3 aulas ao vivo</div>
            <div className="ic-price-box__old">De R$ 197,00</div>
            <div className="ic-price-box__amount"><span className="ic-highlight-cyan">R$ 47</span></div>
            <div className="ic-price-box__installment">ou 6× de R$ 8,82 no cartão</div>
            <button className="ic-cta-btn" onClick={() => handleCTA("pricing")} style={{ width: "100%", maxWidth: 380 }}>
              GARANTIR MINHA VAGA AGORA
              <span className="ic-cta-sub">Acesso imediato após a confirmação do pagamento</span>
            </button>
            <p style={{ color: "#7B7C8C", fontSize: "0.78rem", marginTop: 16, fontFamily: "'IBM Plex Mono',monospace" }}>
              Pagamento seguro · Garantia de 7 dias · Acesso imediato
            </p>
          </div>

          {/* MUDANÇA 4: Bônus — Framework AVEE */}
          <div className="ic-bonus-box">
            <span className="ic-bonus-tag">Bônus incluso</span>
            <p style={{ color: "#F5F5FA", fontSize: "0.95rem", lineHeight: 1.6, margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              <strong>Framework de diagnóstico AVEE</strong> — descubra em 15 minutos quais são os 3 processos do seu negócio onde IA gera mais retorno.
            </p>
          </div>

          <div className="ic-guarantee">
            <div className="ic-guarantee__icon">&#128274;</div>
            <div className="ic-guarantee__title">Garantia incondicional de 7 dias</div>
            <div className="ic-guarantee__text">
              Assista às aulas, aplique o que aprender. Se dentro de 7 dias você sentir que não valeu cada centavo, basta pedir o reembolso integral. Sem perguntas, sem burocracia.
            </div>
          </div>
        </div>
      </section>

      <div className="ic-divider" />

      {/* ══════ FAQ ══════ */}
      <section className="ic-section" style={{ paddingTop: 56 }}>
        <div className="ic-container">
          <h2 style={{ textAlign: "center", marginBottom: 36 }}>Perguntas frequentes</h2>

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
          <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 400, color: "#B7B8C7", marginBottom: 8, fontSize: "0.9rem", letterSpacing: 2 }}>IMERSÃO EM CLAUDE</p>
          <p>© 2026 Rodrigo Albuquerque · BA Consultoria · Todos os direitos reservados</p>
          <p style={{ marginTop: 8 }}>Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho é meramente ilustrativa.</p>
        </div>
      </footer>
    </div>
  );
};

export default ImersaoClaudeV2;
