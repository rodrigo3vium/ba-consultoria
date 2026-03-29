import { useEffect, useRef, useState } from "react";
import { tracker } from "@/lib/tracking";
import rampChart from "@/assets/ramp-chart.png";
import rodrigoPhoto from "@/assets/founders/rodrigo-albuquerque.jpg";

const ImersaoClaude = () => {
  const [activeTab, setActiveTab] = useState("revolucoes");
  const adoptionChartRef = useRef<HTMLCanvasElement>(null);
  const users100mChartRef = useRef<HTMLCanvasElement>(null);
  const adoptionBuilt = useRef(false);
  const users100mBuilt = useRef(false);
  const chartScriptLoaded = useRef(false);

  useEffect(() => {
    tracker.page("Imersão Claude");
    document.body.style.backgroundColor = "#07070C";
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
          backgroundColor: ["#606072","#606072","#606072","#606072","#C9A227","#C9A227","#00A8E8","#D4453A"],
          borderRadius: 4, borderSkipped: false, barPercentage: 0.7,
        }],
      },
      options: {
        indexAxis: "y", responsive: true, maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: "#101018", titleColor: "#EAEAEF", bodyColor: "#9A9AAA",
            borderColor: "rgba(0,168,232,0.2)", borderWidth: 1,
            callbacks: { label: (ctx: any) => ctx.raw + " anos para atingir 50% de adoção" },
          },
        },
        scales: {
          x: {
            grid: { color: "rgba(255,255,255,0.04)" },
            ticks: { color: "#606072", font: { family: "'IBM Plex Mono', monospace", size: 11 }, callback: (v: any) => v + " anos" },
            title: { display: true, text: "Anos até 50% de adoção", color: "#606072", font: { family: "'Exo 2', sans-serif", size: 12 } },
          },
          y: { grid: { display: false }, ticks: { color: "#9A9AAA", font: { family: "'Exo 2', sans-serif", size: 12 } } },
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
          backgroundColor: ["#606072","#606072","#606072","#606072","#606072","#C9A227","#D4453A"],
          borderRadius: 4, borderSkipped: false, barPercentage: 0.65,
        }],
      },
      options: {
        indexAxis: "y", responsive: true, maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: "#101018", titleColor: "#EAEAEF", bodyColor: "#9A9AAA",
            borderColor: "rgba(0,168,232,0.2)", borderWidth: 1,
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
              color: "#606072", font: { family: "'IBM Plex Mono', monospace", size: 11 },
              callback: (v: any) => { if (v >= 12) return Math.round(v / 12) + " anos"; return v + " meses"; },
            },
            title: { display: true, text: "Tempo até 100 milhões de usuários", color: "#606072", font: { family: "'Exo 2', sans-serif", size: 12 } },
          },
          y: { grid: { display: false }, ticks: { color: "#9A9AAA", font: { family: "'Exo 2', sans-serif", size: 12 } } },
        },
      },
    });
  };

  const switchTab = (tab: string) => {
    setActiveTab(tab);
    if (tab === "adocao") setTimeout(buildAdoptionChart, 50);
    if (tab === "100m") setTimeout(build100mChart, 50);
  };

  const handleCTA = (location: string) => {
    tracker.track("cta_click", { product: "imersao-claude", cta_location: location, page: "/imersao-claude" });
    window.open("https://pay.hotmart.com/W98498495O?checkoutMode=10", "_blank");
  };

  const forYouItems = [
    "Você já usa ChatGPT ou outras IAs mas sente que está só arranhando a superfície",
    "Você é empreendedor e quer usar IA para multiplicar resultados sem aumentar equipe",
    "Você é consultor, freelancer ou prestador de serviço e quer adicionar IA ao que já oferece cobrando mais por isso",
    "Você quer aprender uma habilidade que empresas estão dispostas a pagar de R$5K a R$30K",
    "Você não é de tech. É empresário, profissional liberal, gestor e quer IA aplicada ao seu contexto",
  ];

  const faqItems = [
    { q: "Quanto custa?", a: "A imersão completa com as 3 aulas custa R$97 — pagamento único ou parcelado em até 12× no cartão. E você tem garantia incondicional de 7 dias: se não gostar, peça o reembolso integral." },
    { q: "Preciso saber programar?", a: "De jeito nenhum. O Claude entende comandos em português. Você conversa com ele, diz o que precisa, e ele executa. A imersão inteira foi desenhada para quem nunca escreveu uma linha de código na vida." },
    { q: "É só conteúdo motivacional ou tem prática?", a: "Muita prática. Na Aula 3, eu abro o Claude e construo um sistema completo na sua frente. Você sai sabendo replicar. Sem enrolação, sem teoria vazia." },
    { q: "Isso é só pra quem trabalha com tecnologia?", a: "Não. A imersão foi pensada para empreendedores, profissionais liberais, gestores e qualquer pessoa que opera um negócio." },
    { q: "E se eu não gostar?", a: "Você tem 7 dias de garantia incondicional. Se sentir que não valeu, basta pedir o reembolso — sem perguntas, sem burocracia, sem ressentimento. O risco é zero." },
  ];

  return (
    <div className="ic-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;600;700;800&family=Exo+2:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap');
        .ic-page {
          font-family: 'Exo 2', sans-serif;
          background: var(--ic-bg-dark);
          color: var(--ic-text-primary);
          line-height: 1.7;
          overflow-x: hidden;
          --ic-arc-reactor: #00A8E8;
          --ic-arc-glow: #00D4FF;
          --ic-arc-dim: #0077A8;
          --ic-stark-gold: #C9A227;
          --ic-gold-light: #E8C547;
          --ic-iron-red: #B22222;
          --ic-iron-red-light: #D4453A;
          --ic-bg-dark: #07070C;
          --ic-bg-section: #0B0B12;
          --ic-bg-card: #101018;
          --ic-bg-card-hover: #14141E;
          --ic-text-primary: #EAEAEF;
          --ic-text-secondary: #9A9AAA;
          --ic-text-muted: #606072;
          --ic-border-subtle: rgba(255,255,255,0.05);
          --ic-border-accent: rgba(0,168,232,0.15);
          --ic-border-gold: rgba(201,162,39,0.15);
        }
        .ic-page * { box-sizing: border-box; }
        .ic-page h1,.ic-page h2,.ic-page h3,.ic-page h4 { font-family: 'Chakra Petch', sans-serif; font-weight: 700; line-height: 1.2; }
        .ic-page h1 { font-size: clamp(2rem,5.5vw,3.2rem); }
        .ic-page h2 { font-size: clamp(1.5rem,4vw,2.2rem); }
        .ic-page h3 { font-size: clamp(1.1rem,3vw,1.4rem); }
        .ic-container { max-width: 800px; margin: 0 auto; padding: 0 24px; }
        .ic-section { padding: 80px 0; position: relative; }
        .ic-mono { font-family: 'IBM Plex Mono', monospace; }
        .ic-text-arc { color: var(--ic-arc-reactor); }
        .ic-text-gold { color: var(--ic-stark-gold); }
        .ic-text-red { color: var(--ic-iron-red-light); }
        .ic-highlight-gold {
          background: linear-gradient(90deg, var(--ic-stark-gold), var(--ic-gold-light));
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .ic-highlight-arc {
          background: linear-gradient(90deg, var(--ic-arc-reactor), var(--ic-arc-glow));
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .ic-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--ic-border-accent), transparent);
          margin: 0 auto; max-width: 500px;
        }
        /* CTA */
        .ic-cta-btn {
          display: inline-block;
          font-family: 'Chakra Petch', sans-serif;
          font-weight: 700; font-size: 1.05rem;
          letter-spacing: 0.5px; text-transform: uppercase;
          text-decoration: none; color: #fff;
          padding: 18px 52px; border: none; border-radius: 4px;
          cursor: pointer; position: relative; overflow: hidden;
          background: linear-gradient(135deg, var(--ic-iron-red) 0%, var(--ic-iron-red-light) 100%);
          box-shadow: 0 0 30px rgba(178,34,34,0.25), 0 4px 20px rgba(0,0,0,0.4);
          transition: all 0.3s ease;
        }
        .ic-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 50px rgba(178,34,34,0.45), 0 8px 30px rgba(0,0,0,0.5);
        }
        .ic-cta-btn::before {
          content: ''; position: absolute; top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent);
          transition: left 0.5s;
        }
        .ic-cta-btn:hover::before { left: 100%; }
        .ic-cta-btn--arc {
          background: linear-gradient(135deg, var(--ic-arc-dim) 0%, var(--ic-arc-reactor) 100%);
          box-shadow: 0 0 30px rgba(0,168,232,0.25), 0 4px 20px rgba(0,0,0,0.4);
        }
        .ic-cta-btn--arc:hover { box-shadow: 0 0 50px rgba(0,168,232,0.45), 0 8px 30px rgba(0,0,0,0.5); }
        .ic-cta-sub {
          display: block; font-family: 'Exo 2', sans-serif;
          font-weight: 400; font-size: 0.7rem;
          letter-spacing: 0; text-transform: none;
          opacity: 0.8; margin-top: 4px;
        }
        /* HERO */
        .ic-hero {
          min-height: 100vh; min-height: 100svh;
          display: flex; align-items: center; justify-content: center;
          text-align: center; padding: 100px 24px 80px;
          position: relative;
          background:
            radial-gradient(ellipse 70% 55% at 50% 0%, rgba(0,168,232,0.07) 0%, transparent 70%),
            radial-gradient(ellipse 50% 45% at 20% 90%, rgba(178,34,34,0.04) 0%, transparent 60%),
            var(--ic-bg-dark);
        }
        .ic-hero::after {
          content: ''; position: absolute; bottom: 0; left: 0; right: 0;
          height: 120px;
          background: linear-gradient(to bottom, transparent, var(--ic-bg-dark));
          pointer-events: none;
        }
        .ic-hero__reactor {
          width: 80px; height: 80px; margin: 0 auto 32px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0,212,255,0.2) 0%, rgba(0,168,232,0.05) 50%, transparent 70%);
          border: 1px solid rgba(0,168,232,0.15);
          display: flex; align-items: center; justify-content: center;
          opacity: 0; animation: ic-pulseReactor 3s ease-in-out infinite, ic-fadeIn 0.6s 0.1s forwards;
        }
        .ic-hero__reactor-core {
          width: 28px; height: 28px; border-radius: 50%;
          background: radial-gradient(circle, var(--ic-arc-glow) 0%, var(--ic-arc-reactor) 60%, transparent 100%);
          box-shadow: 0 0 20px rgba(0,212,255,0.5), 0 0 60px rgba(0,168,232,0.2);
        }
        @keyframes ic-pulseReactor {
          0%,100% { box-shadow: 0 0 30px rgba(0,168,232,0.1); }
          50% { box-shadow: 0 0 60px rgba(0,168,232,0.2); }
        }
        .ic-hero__event-tag {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.8rem; letter-spacing: 3px; text-transform: uppercase;
          color: var(--ic-stark-gold); margin-bottom: 20px;
          opacity: 0; animation: ic-fadeUp 0.7s 0.3s forwards;
        }
        .ic-hero__event-tag span {
          display: inline-block;
          background: rgba(201,162,39,0.1); border: 1px solid rgba(201,162,39,0.2);
          padding: 4px 14px; border-radius: 3px;
        }
        .ic-hero__title {
          font-size: clamp(2.2rem,6vw,3.6rem); font-weight: 800;
          margin-bottom: 24px;
          opacity: 0; animation: ic-fadeUp 0.7s 0.5s forwards;
        }
        .ic-hero__sub {
          font-size: clamp(1rem,2.5vw,1.2rem);
          color: var(--ic-text-secondary); max-width: 600px;
          margin: 0 auto 36px;
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
          font-size: 0.78rem; color: var(--ic-text-muted);
          display: flex; align-items: center; gap: 6px;
        }
        .ic-hero__meta-item .ic-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--ic-arc-reactor);
          box-shadow: 0 0 6px rgba(0,168,232,0.5);
        }
        @keyframes ic-fadeUp {
          from { opacity:0; transform:translateY(18px); }
          to { opacity:1; transform:translateY(0); }
        }
        @keyframes ic-fadeIn { from { opacity:0; } to { opacity:1; } }
        @keyframes ic-pulse { 0%,100%{opacity:1;transform:scale(1);} 50%{opacity:.4;transform:scale(.6);} }
        /* URGENCY BAR */
        .ic-urgency-bar {
          background: linear-gradient(90deg, rgba(201,162,39,0.08), rgba(201,162,39,0.02));
          border-top: 1px solid var(--ic-border-gold); border-bottom: 1px solid var(--ic-border-gold);
          text-align: center; padding: 14px 24px;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.82rem; color: var(--ic-stark-gold); letter-spacing: 0.5px;
        }
        /* PROBLEM CARDS */
        .ic-problem-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px; margin: 40px 0;
        }
        .ic-problem-card {
          background: var(--ic-bg-card); border: 1px solid var(--ic-border-subtle);
          border-radius: 6px; padding: 24px 20px; text-align: center;
          transition: border-color 0.3s;
        }
        .ic-problem-card:hover { border-color: rgba(178,34,34,0.3); }
        .ic-problem-card__stat {
          font-family: 'Chakra Petch', sans-serif;
          font-size: 2rem; font-weight: 700;
          color: var(--ic-iron-red-light); line-height: 1; margin-bottom: 8px;
        }
        .ic-problem-card__label { font-size: 0.82rem; color: var(--ic-text-muted); line-height: 1.4; }
        /* AULA CARDS */
        .ic-aula-card {
          background: var(--ic-bg-card); border: 1px solid var(--ic-border-subtle);
          border-radius: 8px; padding: 28px; margin-bottom: 16px;
          display: flex; gap: 20px; align-items: flex-start;
          transition: border-color 0.3s, background 0.3s;
        }
        .ic-aula-card:hover { border-color: var(--ic-border-accent); background: var(--ic-bg-card-hover); }
        .ic-aula-card__num {
          flex-shrink: 0; width: 52px; height: 52px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Chakra Petch', sans-serif; font-weight: 700; font-size: 1.1rem;
        }
        .ic-aula-card__num--1 { background: rgba(0,168,232,0.1); border: 1px solid rgba(0,168,232,0.2); color: var(--ic-arc-reactor); }
        .ic-aula-card__num--2 { background: rgba(201,162,39,0.1); border: 1px solid rgba(201,162,39,0.2); color: var(--ic-stark-gold); }
        .ic-aula-card__num--3 { background: rgba(178,34,34,0.1); border: 1px solid rgba(178,34,34,0.2); color: var(--ic-iron-red-light); }
        .ic-aula-card__tag {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.7rem; letter-spacing: 1px;
          text-transform: uppercase; color: var(--ic-text-muted); margin-bottom: 4px;
        }
        .ic-aula-card__title {
          font-family: 'Chakra Petch', sans-serif;
          font-weight: 700; font-size: 1.1rem; margin-bottom: 6px;
        }
        .ic-aula-card__desc { font-size: 0.88rem; color: var(--ic-text-secondary); }
        /* AUTHOR */
        .ic-author {
          display: flex; gap: 24px; align-items: flex-start;
          padding: 32px; background: var(--ic-bg-card);
          border: 1px solid var(--ic-border-subtle); border-radius: 8px;
          margin: 40px 0;
        }
        .ic-author__avatar {
          flex-shrink: 0; width: 72px; height: 72px; border-radius: 50%;
          background: linear-gradient(135deg, var(--ic-arc-reactor), var(--ic-stark-gold));
          display: flex; align-items: center; justify-content: center;
          font-family: 'Chakra Petch', sans-serif;
          font-size: 1.4rem; font-weight: 700; color: var(--ic-bg-dark);
        }
        .ic-author__name { font-family: 'Chakra Petch', sans-serif; font-weight: 700; font-size: 1.1rem; margin-bottom: 2px; }
        .ic-author__role { font-family: 'IBM Plex Mono', monospace; font-size: 0.75rem; color: var(--ic-stark-gold); margin-bottom: 10px; }
        .ic-author__text { font-size: 0.9rem; color: var(--ic-text-secondary); }
        /* BLOCKQUOTE */
        .ic-page blockquote {
          border-left: 3px solid var(--ic-stark-gold);
          padding: 18px 24px; margin: 32px 0;
          background: rgba(201,162,39,0.03);
          border-radius: 0 6px 6px 0;
          font-style: italic; color: var(--ic-text-secondary); font-size: 0.95rem;
        }
        .ic-page blockquote cite { display: block; margin-top: 10px; font-style: normal; font-size: 0.8rem; color: var(--ic-stark-gold); }
        /* CHECK LIST */
        .ic-check-list { list-style: none; margin: 28px 0; padding: 0; }
        .ic-check-list li {
          padding: 10px 0 10px 28px; position: relative;
          color: var(--ic-text-secondary); font-size: 0.92rem;
          border-bottom: 1px solid var(--ic-border-subtle);
        }
        .ic-check-list li:last-child { border-bottom: none; }
        .ic-check-list li::before { content: '▸'; position: absolute; left: 0; color: var(--ic-arc-reactor); font-weight: 700; }
        /* MID CAPTURE */
        .ic-mid-capture {
          background: var(--ic-bg-section);
          border-top: 1px solid var(--ic-border-accent);
          border-bottom: 1px solid var(--ic-border-accent);
          padding: 56px 24px; text-align: center;
        }
        /* CHART TABS */
        .ic-chart-tab {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.78rem; padding: 8px 16px;
          border: 1px solid var(--ic-border-subtle); border-radius: 4px;
          background: transparent; color: var(--ic-text-muted);
          cursor: pointer; transition: all 0.3s;
        }
        .ic-chart-tab:hover { border-color: var(--ic-border-accent); color: var(--ic-text-secondary); }
        .ic-chart-tab.active {
          background: rgba(0,168,232,0.1);
          border-color: var(--ic-arc-reactor);
          color: var(--ic-arc-reactor);
        }
        /* REVOLUTION BARS */
        .rev-timeline-visual { display: flex; flex-direction: column; gap: 16px; }
        .rev-item { opacity: 0; animation: ic-revSlideIn 0.6s var(--delay, 0s) forwards; }
        @keyframes ic-revSlideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .rev-bar {
          height: 6px; width: var(--width, 100%);
          background: var(--color, var(--ic-arc-reactor));
          border-radius: 3px; margin-bottom: 8px; min-width: 8px; position: relative;
          transition: width 0.8s ease;
        }
        .rev-bar::after {
          content: ''; position: absolute; right: 0; top: -3px;
          width: 12px; height: 12px; border-radius: 50%;
          background: var(--color, var(--ic-arc-reactor));
          box-shadow: 0 0 10px var(--color, var(--ic-arc-reactor));
        }
        .rev-info { display: flex; flex-wrap: wrap; align-items: baseline; gap: 8px 16px; }
        .rev-label { font-family: 'Chakra Petch', sans-serif; font-weight: 600; font-size: 0.95rem; color: var(--ic-text-primary); }
        .rev-date { font-size: 0.75rem; color: var(--ic-text-muted); }
        .rev-span { font-size: 0.8rem; color: var(--ic-text-secondary); }
        .rev-span--alert { color: var(--ic-iron-red-light); font-weight: 600; }
        /* PRICE BOX */
        .ic-price-box {
          text-align: center; background: var(--ic-bg-card);
          border: 1px solid var(--ic-border-accent); border-radius: 8px;
          padding: 48px 32px; margin: 40px auto; max-width: 500px;
          position: relative; overflow: hidden;
        }
        .ic-price-box::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, var(--ic-arc-reactor), var(--ic-stark-gold), var(--ic-iron-red));
        }
        .ic-price-box__tag {
          display: inline-block; font-family: 'IBM Plex Mono', monospace;
          font-size: 0.75rem; letter-spacing: 1px; text-transform: uppercase;
          color: var(--ic-bg-dark); background: var(--ic-stark-gold);
          padding: 4px 14px; border-radius: 3px; margin-bottom: 20px;
        }
        .ic-price-box__label { font-size: 0.95rem; color: var(--ic-text-secondary); margin-bottom: 8px; }
        .ic-price-box__old { font-size: 1.1rem; color: var(--ic-text-muted); text-decoration: line-through; margin-bottom: 4px; }
        .ic-price-box__amount {
          font-family: 'Chakra Petch', sans-serif;
          font-size: 3.8rem; font-weight: 700; line-height: 1; margin-bottom: 4px;
        }
        .ic-price-box__installment {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.85rem; color: var(--ic-text-muted); margin-bottom: 28px;
        }
        .ic-guarantee { text-align: center; padding: 32px 24px; margin: 16px 0; }
        .ic-guarantee__icon { font-size: 2rem; margin-bottom: 12px; }
        .ic-guarantee__title {
          font-family: 'Chakra Petch', sans-serif;
          font-size: 1.1rem; font-weight: 700;
          color: var(--ic-stark-gold); margin-bottom: 6px;
        }
        .ic-guarantee__text { color: var(--ic-text-muted); font-size: 0.88rem; max-width: 460px; margin: 0 auto; }
        /* FAQ */
        .ic-faq-item { border-bottom: 1px solid var(--ic-border-subtle); padding: 18px 0; }
        .ic-faq-item summary {
          font-family: 'Chakra Petch', sans-serif;
          font-weight: 600; font-size: 0.95rem;
          cursor: pointer; color: var(--ic-text-primary);
          list-style: none; display: flex;
          justify-content: space-between; align-items: center;
        }
        .ic-faq-item summary::-webkit-details-marker { display: none; }
        .ic-faq-item summary::after { content: '+'; font-size: 1.3rem; color: var(--ic-arc-reactor); transition: transform 0.3s; }
        .ic-faq-item[open] summary::after { content: '−'; }
        .ic-faq-item p { color: var(--ic-text-secondary); font-size: 0.88rem; margin-top: 10px; padding-right: 28px; }
        /* FOOTER */
        .ic-footer {
          text-align: center; padding: 36px 24px;
          font-size: 0.75rem; color: var(--ic-text-muted);
          border-top: 1px solid var(--ic-border-subtle);
        }
        /* RESPONSIVE */
        @media (max-width: 640px) {
          .ic-section { padding: 56px 0; }
          .ic-hero { padding: 80px 20px 60px; min-height: auto; }
          .ic-hero__reactor { width: 60px; height: 60px; margin-bottom: 24px; }
          .ic-hero__reactor-core { width: 22px; height: 22px; }
          .ic-hero__title { font-size: 1.6rem; }
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
          .ic-problem-card__stat { font-size: 1.6rem; }
          .ic-cta-btn { font-size: 0.85rem; padding: 16px 28px; }
          .ic-page blockquote { padding: 14px 16px; font-size: 0.88rem; }
          .ic-check-list li { font-size: 0.85rem; padding: 8px 0 8px 24px; }
          .ic-price-box { padding: 36px 20px; }
          .ic-urgency-bar { font-size: 0.72rem; padding: 12px 16px; }
          .ic-mid-capture { padding: 48px 0; }
          .ic-faq-item summary { font-size: 0.9rem; }
          .ic-adoption-segs { flex-wrap: wrap; }
          .ic-adoption-seg { min-width: 45% !important; flex: 1 1 45% !important; }
          .ic-nowbar { flex-wrap: wrap; }
          .ic-nowbar-pct { font-size: 16px !important; }
          .ic-chart-tab { font-size: 0.7rem !important; padding: 6px 12px !important; }
        }
      `}</style>

      {/* ══════ HERO ══════ */}
      <section className="ic-hero">
        <div className="ic-container">
          <div className="ic-hero__reactor"><div className="ic-hero__reactor-core" /></div>
          <div className="ic-hero__event-tag"><span>Use o cupom IMERSAO74 para ganhar 74% de desconto</span></div>

          <h1 className="ic-hero__title">
            Aprenda tudo sobre o <span className="ic-highlight-arc">Claude.</span> A IA mais poderosa do mundo, que executa tarefas ao invés de só responder perguntas.
          </h1>

          <p className="ic-hero__sub">
            Em apenas 3 aulas, você vai aprender tudo o que precisa sobre o Claude e vai descobrir porque 50% do uso profissional de IA migrou do ChatGPT para o Claude nos últimos 12 meses.
          </p>

          <div className="ic-hero__form-wrap">
            <button className="ic-cta-btn" onClick={() => handleCTA("hero")}>
              QUERO DOMINAR O CLAUDE
              <span className="ic-cta-sub">3 aulas · Acesso imediato · R$97</span>
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
          <video src="/videos/claude-migration.mp4" autoPlay loop muted playsInline style={{ width: 120, height: "auto", margin: "0 auto 24px", display: "block", borderRadius: 8 }} />
          <h2>Descubra porque <span className="ic-highlight-arc">50% dos usuários sérios</span> de IA generativa nos últimos meses migraram do ChatGPT para o Claude.</h2>
          <div style={{ marginTop: 40, background: "#fff", borderRadius: 8, overflow: "hidden", border: "1px solid var(--ic-border-subtle)" }}>
            <img src={rampChart} alt="Gráfico Ramp Economics Lab — Anthropic lidera gastos corporativos com IA chat, ultrapassando OpenAI em fevereiro de 2026" style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
          <p style={{ color: "var(--ic-text-muted)", fontSize: "0.78rem", marginTop: 12, fontFamily: "'IBM Plex Mono',monospace" }}>
            Fonte: Ramp Economics Lab · Dados de 50.000+ empresas nos EUA · Fev 2026
          </p>

          <p style={{ color: "var(--ic-text-secondary)", maxWidth: 620, margin: "32px auto 0", fontSize: "0.95rem" }}>
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
          <h2 style={{ textAlign: "center" }}>A velocidade só <span className="ic-highlight-gold">acelera</span></h2>
          <p style={{ textAlign: "center", color: "var(--ic-text-secondary)", maxWidth: 600, margin: "16px auto 0" }}>
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
                  { color: "var(--ic-stark-gold)", delay: "0.1s", width: "100%", label: "Revolução Agrícola", date: "~10.000 a.C.", span: "~11.800 anos até a próxima revolução", alert: false },
                  { color: "var(--ic-stark-gold)", delay: "0.3s", width: "15%", label: "Revolução Industrial", date: "~1800 d.C.", span: "~150 anos até a próxima", alert: false },
                  { color: "var(--ic-arc-reactor)", delay: "0.5s", width: "5.5%", label: "Revolução Tecnológica", date: "~1950 d.C.", span: "~65 anos até a próxima", alert: false },
                  { color: "var(--ic-iron-red-light)", delay: "0.7s", width: "0.85%", label: "Revolução da IA", date: "~2015 d.C.", span: "Acelerando em meses, não anos", alert: true },
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
              <p style={{ textAlign: "center", color: "var(--ic-text-muted)", fontSize: "0.78rem", marginTop: 16, fontFamily: "'IBM Plex Mono',monospace" }}>
                O intervalo entre revoluções caiu de milênios → séculos → décadas → anos
              </p>
            </div>

            {/* Panel: Adoção */}
            <div style={{ display: activeTab === "adocao" ? "block" : "none" }}>
              <div style={{ position: "relative", width: "100%", height: 340 }}>
                <canvas ref={adoptionChartRef} />
              </div>
              <p style={{ textAlign: "center", color: "var(--ic-text-muted)", fontSize: "0.78rem", marginTop: 12, fontFamily: "'IBM Plex Mono',monospace" }}>
                Anos até atingir 50% de adoção nos EUA · Fonte: Our World in Data, Visual Capitalist, Epoch AI
              </p>
            </div>

            {/* Panel: 100M */}
            <div style={{ display: activeTab === "100m" ? "block" : "none" }}>
              <div style={{ position: "relative", width: "100%", height: 380 }}>
                <canvas ref={users100mChartRef} />
              </div>
              <p style={{ textAlign: "center", color: "var(--ic-text-muted)", fontSize: "0.78rem", marginTop: 12, fontFamily: "'IBM Plex Mono',monospace" }}>
                Meses até atingir 100 milhões de usuários · Fonte: UBS, Visual Capitalist, Statista
              </p>
            </div>
          </div>

          <blockquote style={{ marginTop: 40 }}>
            "Em breve teremos uma pessoa fazendo o trabalho de cinco graças à IA. A dúvida é: quem não usar a tecnologia conseguirá acompanhar? Provavelmente não."
          </blockquote>

          <p style={{ color: "var(--ic-text-secondary)", textAlign: "center", maxWidth: 620, margin: "32px auto 0", fontSize: "0.95rem" }}>
            Em todas as eras da humanidade, quem se destacou foram aqueles que conseguiram dominar novas tecnologias com velocidade.
          </p>
          <p style={{ color: "var(--ic-text-primary)", textAlign: "center", fontFamily: "'Chakra Petch',sans-serif", fontWeight: 600, fontSize: "1.05rem", marginTop: 16 }}>
            Isso, tem até nome. São os <span className="ic-highlight-gold">Early Adopters</span>.
          </p>

          {/* Curva de Adoção */}
          <div style={{ marginTop: 40, borderRadius: 14, border: "0.5px solid rgba(56,189,248,0.14)", overflow: "hidden", fontFamily: "'Exo 2',sans-serif" }}>
            <div style={{ background: "#111A2E", borderBottom: "0.5px solid rgba(56,189,248,0.1)", padding: "10px 18px", display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ display: "flex", gap: 5 }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#DC2626" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#F59E0B" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#34D399" }} />
              </div>
              <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 10, color: "#5A7089", letterSpacing: 2, textTransform: "uppercase", marginLeft: 6 }}>rev_lab // stark.sys // adoção.v3</span>
              <span style={{ marginLeft: "auto", fontFamily: "'IBM Plex Mono',monospace", fontSize: 9, color: "#38BDF8", background: "rgba(56,189,248,0.08)", border: "0.5px solid rgba(56,189,248,0.2)", padding: "2px 8px", borderRadius: 4, letterSpacing: 2 }}>● LIVE</span>
            </div>
            <div style={{ padding: "18px 18px 14px", background: "#060A12" }}>
              <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 10, color: "#38BDF8", letterSpacing: 3, textTransform: "uppercase", marginBottom: 4 }}>03 — O Mecanismo</div>
              <div style={{ fontFamily: "'Chakra Petch',sans-serif", fontSize: 20, fontWeight: 700, color: "#F0F6FF", textTransform: "uppercase", lineHeight: 1.2 }}>CURVA DE <span style={{ color: "#38BDF8" }}>ADOÇÃO</span> TECNOLÓGICA</div>
              <div style={{ fontFamily: "'Exo 2',sans-serif", fontSize: 12, color: "#5A7089", fontWeight: 300, marginTop: 4, marginBottom: 12 }}>Rogers (1962) — onde você está na curva define quanto você vai ganhar</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "5px 14px", marginBottom: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 5, fontFamily: "'IBM Plex Mono',monospace", fontSize: 9, letterSpacing: 1, textTransform: "uppercase" }}><div style={{ width: 8, height: 8, borderRadius: "50%", background: "#F59E0B" }} /><span style={{ color: "#F59E0B" }}>Adotantes por período (sino)</span></div>
                <div style={{ display: "flex", alignItems: "center", gap: 5, fontFamily: "'IBM Plex Mono',monospace", fontSize: 9, letterSpacing: 1, textTransform: "uppercase" }}><div style={{ width: 8, height: 8, borderRadius: "50%", background: "#38BDF8" }} /><span style={{ color: "#38BDF8" }}>Adoção acumulada (curva S)</span></div>
                <div style={{ display: "flex", alignItems: "center", gap: 5, fontFamily: "'IBM Plex Mono',monospace", fontSize: 9, letterSpacing: 1, textTransform: "uppercase" }}><div style={{ width: 8, height: 8, borderRadius: "50%", background: "#DC2626" }} /><span style={{ color: "#DC2626" }}>Agentes de IA — agora</span></div>
              </div>

              <svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
                <defs>
                  <linearGradient id="bellGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#F59E0B" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="#F59E0B" stopOpacity={0.03} />
                  </linearGradient>
                  <linearGradient id="seg0" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#F59E0B" stopOpacity={0.12} />
                    <stop offset="100%" stopColor="#F59E0B" stopOpacity={0.02} />
                  </linearGradient>
                  <linearGradient id="seg1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#38BDF8" stopOpacity={0.1} />
                    <stop offset="100%" stopColor="#38BDF8" stopOpacity={0.02} />
                  </linearGradient>
                  <linearGradient id="seg2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#7DD3FC" stopOpacity={0.07} />
                    <stop offset="100%" stopColor="#7DD3FC" stopOpacity={0.01} />
                  </linearGradient>
                  <linearGradient id="seg3" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#5A7089" stopOpacity={0.07} />
                    <stop offset="100%" stopColor="#5A7089" stopOpacity={0.01} />
                  </linearGradient>
                  <linearGradient id="seg4" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3D5068" stopOpacity={0.07} />
                    <stop offset="100%" stopColor="#3D5068" stopOpacity={0.01} />
                  </linearGradient>
                </defs>

                {/* Segment backgrounds */}
                <rect x="50" y="10" width="15.75" height="180" fill="url(#seg0)" />
                <rect x="65.75" y="10" width="85.05" height="180" fill="url(#seg1)" />
                <rect x="150.8" y="10" width="214.2" height="180" fill="url(#seg2)" />
                <rect x="365" y="10" width="214.2" height="180" fill="url(#seg3)" />
                <rect x="579.2" y="10" width="100.8" height="180" fill="url(#seg4)" />

                {/* Segment dividers */}
                <line x1="65.75" y1="10" x2="65.75" y2="190" stroke="rgba(56,189,248,0.12)" strokeWidth="0.5" strokeDasharray="3,3" />
                <line x1="150.8" y1="10" x2="150.8" y2="190" stroke="rgba(56,189,248,0.12)" strokeWidth="0.5" strokeDasharray="3,3" />
                <line x1="365" y1="10" x2="365" y2="190" stroke="rgba(56,189,248,0.12)" strokeWidth="0.5" strokeDasharray="3,3" />
                <line x1="579.2" y1="10" x2="579.2" y2="190" stroke="rgba(56,189,248,0.12)" strokeWidth="0.5" strokeDasharray="3,3" />

                {/* Segment labels */}
                <text x="58" y="22" fontFamily="IBM Plex Mono,monospace" fontSize="7" fill="#F59E0B" textAnchor="middle" opacity="0.8">INOV.</text>
                <text x="108" y="22" fontFamily="IBM Plex Mono,monospace" fontSize="7" fill="#38BDF8" textAnchor="middle" opacity="0.8">EARLY ADO.</text>
                <text x="258" y="22" fontFamily="IBM Plex Mono,monospace" fontSize="7" fill="#7DD3FC" textAnchor="middle" opacity="0.8">EARLY MAJORITY</text>
                <text x="472" y="22" fontFamily="IBM Plex Mono,monospace" fontSize="7" fill="#5A7089" textAnchor="middle" opacity="0.8">LATE MAJORITY</text>
                <text x="630" y="22" fontFamily="IBM Plex Mono,monospace" fontSize="7" fill="#3D5068" textAnchor="middle" opacity="0.8">RETARD.</text>

                {/* Axes */}
                <line x1="50" y1="190" x2="680" y2="190" stroke="rgba(56,189,248,0.2)" strokeWidth="0.5" />
                <line x1="50" y1="10" x2="50" y2="190" stroke="rgba(56,189,248,0.15)" strokeWidth="0.5" />
                <line x1="680" y1="10" x2="680" y2="190" stroke="rgba(56,189,248,0.15)" strokeWidth="0.5" />

                {/* Y axis ticks left (bell) */}
                <text x="45" y="193" fontFamily="IBM Plex Mono,monospace" fontSize="8" fill="#F59E0B" textAnchor="end">0</text>
                <line x1="47" y1="190" x2="50" y2="190" stroke="#F59E0B" strokeWidth="0.5" />
                <text x="45" y="147" fontFamily="IBM Plex Mono,monospace" fontSize="8" fill="#F59E0B" textAnchor="end">25%</text>
                <line x1="47" y1="144" x2="50" y2="144" stroke="#F59E0B" strokeWidth="0.5" />
                <text x="45" y="102" fontFamily="IBM Plex Mono,monospace" fontSize="8" fill="#F59E0B" textAnchor="end">50%</text>
                <line x1="47" y1="99" x2="50" y2="99" stroke="#F59E0B" strokeWidth="0.5" />
                <text x="45" y="57" fontFamily="IBM Plex Mono,monospace" fontSize="8" fill="#F59E0B" textAnchor="end">75%</text>
                <line x1="47" y1="54" x2="50" y2="54" stroke="#F59E0B" strokeWidth="0.5" />
                <text x="45" y="14" fontFamily="IBM Plex Mono,monospace" fontSize="8" fill="#F59E0B" textAnchor="end">100%</text>
                <line x1="47" y1="11" x2="50" y2="11" stroke="#F59E0B" strokeWidth="0.5" />

                {/* Y axis ticks right (cumulative) */}
                <text x="685" y="193" fontFamily="IBM Plex Mono,monospace" fontSize="8" fill="#38BDF8" textAnchor="start">0%</text>
                <text x="685" y="147" fontFamily="IBM Plex Mono,monospace" fontSize="8" fill="#38BDF8" textAnchor="start">25%</text>
                <text x="685" y="102" fontFamily="IBM Plex Mono,monospace" fontSize="8" fill="#38BDF8" textAnchor="start">50%</text>
                <text x="685" y="57" fontFamily="IBM Plex Mono,monospace" fontSize="8" fill="#38BDF8" textAnchor="start">75%</text>
                <text x="685" y="14" fontFamily="IBM Plex Mono,monospace" fontSize="8" fill="#38BDF8" textAnchor="start">100%</text>

                {/* Bell curve fill */}
                <path d="M 50,190 C 60,190 65,189 80,188 C 100,187 110,185 130,182 C 150,178 155,173 170,166 C 185,158 192,150 210,138 C 228,124 238,112 258,95 C 275,80 285,66 305,50 C 320,38 332,27 345,20 C 352,16 358,13 365,11 C 372,13 378,16 385,20 C 398,27 410,38 425,50 C 445,66 455,80 472,95 C 492,112 502,124 520,138 C 538,150 545,158 560,166 C 575,173 580,178 600,182 C 620,185 630,187 650,188 C 665,189 670,190 680,190 Z" fill="url(#bellGrad)" />

                {/* Bell curve stroke */}
                <path d="M 50,190 C 60,190 65,189 80,188 C 100,187 110,185 130,182 C 150,178 155,173 170,166 C 185,158 192,150 210,138 C 228,124 238,112 258,95 C 275,80 285,66 305,50 C 320,38 332,27 345,20 C 352,16 358,13 365,11 C 372,13 378,16 385,20 C 398,27 410,38 425,50 C 445,66 455,80 472,95 C 492,112 502,124 520,138 C 538,150 545,158 560,166 C 575,173 580,178 600,182 C 620,185 630,187 650,188 C 665,189 670,190 680,190" fill="none" stroke="#F59E0B" strokeWidth="2.5" />

                {/* Cumulative S-curve */}
                <path d="M 50,189 C 70,188 90,187 110,186 C 130,184 145,181 160,177 C 175,172 185,165 200,156 C 215,146 225,135 240,122 C 258,107 268,95 285,82 C 302,68 315,57 335,46 C 348,38 356,34 365,31 C 374,28 382,26 395,23 C 410,20 422,17 440,14 C 458,12 470,11 490,11 C 520,11 550,11 580,11 C 610,11 640,11 660,11 C 668,11 674,11 680,11" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />

                {/* AGORA line */}
                <line x1="108" y1="10" x2="108" y2="190" stroke="#DC2626" strokeWidth="1.5" strokeDasharray="4,4" />
                <rect x="86" y="9" width="44" height="15" rx="3" fill="#DC2626" />
                <text x="108" y="20" fontFamily="IBM Plex Mono,monospace" fontSize="8" fill="#F0F6FF" textAnchor="middle" fontWeight="500">AGORA</text>
                <circle cx="108" cy="183" r="4" fill="#DC2626" />
                <circle cx="108" cy="178" r="4" fill="#DC2626" opacity="0.6" />
              </svg>

              {/* Segment cards */}
              <div className="ic-adoption-segs" style={{ display: "flex", gap: 6, marginTop: 12, flexWrap: "wrap" }}>
                {[
                  { label: "Inovadores", pct: "2,5%", desc: "Constroem antes do mercado existir", color: "#F59E0B" },
                  { label: "Early Adopters", pct: "13,5%", desc: "Líderes que vencem pela vantagem", color: "#38BDF8" },
                  { label: "Early Majority", pct: "34%", desc: "Adotam depois que a prova existe", color: "#7DD3FC" },
                  { label: "Late Majority", pct: "34%", desc: "Entram por pressão, não escolha", color: "#5A7089" },
                  { label: "Retardatários", pct: "16%", desc: "Chegam quando a vantagem acabou", color: "#3D5068" },
                ].map((seg) => (
                  <div key={seg.label} className="ic-adoption-seg" style={{ flex: 1, minWidth: 110, background: "#0C1220", border: "0.5px solid rgba(56,189,248,0.08)", borderRadius: 10, padding: "8px 9px", position: "relative", overflow: "hidden" }}>
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1.5, background: `linear-gradient(90deg, transparent, ${seg.color}80, transparent)` }} />
                    <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 7.5, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 3, color: seg.color }}>{seg.label}</div>
                    <div style={{ fontFamily: "'Chakra Petch',sans-serif", fontSize: 16, fontWeight: 700, lineHeight: 1, marginBottom: 2, color: seg.color }}>{seg.pct}</div>
                    <div style={{ fontFamily: "'Exo 2',sans-serif", fontSize: 9, color: "#5A7089", fontWeight: 300, lineHeight: 1.35 }}>{seg.desc}</div>
                  </div>
                ))}
              </div>

              {/* Now bar */}
              <div className="ic-nowbar" style={{ background: "rgba(220,38,38,0.06)", border: "0.5px solid rgba(220,38,38,0.25)", borderRadius: 10, padding: "10px 14px", marginTop: 12, display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 26, height: 26, borderRadius: "50%", border: "1.5px solid #DC2626", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <div style={{ width: 7, height: 7, background: "#DC2626", borderRadius: "50%", animation: "ic-pulse 2s ease-in-out infinite" }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "'Chakra Petch',sans-serif", fontSize: 11, fontWeight: 600, color: "#DC2626", textTransform: "uppercase", letterSpacing: 1 }}>⚡ Agentes de IA — Posição Atual (2025–2026)</div>
                  <div style={{ fontFamily: "'Exo 2',sans-serif", fontSize: 10, color: "#5A7089", fontWeight: 300, marginTop: 2 }}>A janela entre Early Adopters e Early Majority está aberta agora. Quem entrar hoje ainda pega a vantagem de quem chegou cedo.</div>
                </div>
                <div className="ic-nowbar-pct" style={{ fontFamily: "'Chakra Petch',sans-serif", fontSize: 20, fontWeight: 700, color: "#DC2626" }}>~8%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ MID CAPTURE ══════ */}
      <section className="ic-mid-capture">
        <div className="ic-container">
          <h2>"Tá, Rodrigo. <span className="ic-highlight-arc">O que eu faço?</span>"</h2>
          <p style={{ color: "var(--ic-text-secondary)", maxWidth: 560, margin: "12px auto 0", fontSize: "0.95rem" }}>
            É exatamente para responder essa pergunta que criei a <strong style={{ color: "var(--ic-text-primary)" }}>Imersão em Claude</strong>: 3 aulas onde eu vou te mostrar, na prática, como usar a IA que executa funções para sair na frente de quem ainda opera no manual.
          </p>
          <div style={{ marginTop: 28 }}>
            <button className="ic-cta-btn ic-cta-btn--arc" onClick={() => handleCTA("mid")}>
              QUERO PARTICIPAR DA IMERSÃO
              <span className="ic-cta-sub">3 aulas por apenas R$97</span>
            </button>
          </div>
        </div>
      </section>

      {/* ══════ 3 AULAS ══════ */}
      <section className="ic-section">
        <div className="ic-container">
          <p className="ic-mono ic-text-arc" style={{ fontSize: "0.8rem", letterSpacing: 2, textTransform: "uppercase", marginBottom: 10, textAlign: "center" }}>Imersão em Claude</p>
          <h2 style={{ textAlign: "center" }}>3 aulas que podem mudar<br />o rumo da sua <span className="ic-highlight-gold">vida</span></h2>

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

            <div className="ic-aula-card">
              <div className="ic-aula-card__num ic-aula-card__num--3">03</div>
              <div>
                <div className="ic-aula-card__tag">Aula 3 · O Caminho</div>
                <div className="ic-aula-card__title">Claude Na Prática E Como Isso Vira Dinheiro</div>
                <div className="ic-aula-card__desc">
                  Eu abro o Claude e construo um sistema completo na sua frente, do zero, usando comandos em português. Depois, mostro os 4 caminhos de monetização. Você sai com um plano concreto, independente do seu nível técnico, e pode aplicar no seu negócio ou vender para os seus clientes.
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
          <h3 style={{ color: "var(--ic-text-muted)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 2, fontFamily: "'IBM Plex Mono',monospace", marginBottom: 8, textAlign: "center" }}>Quem vai conduzir a imersão</h3>
          <h2 style={{ textAlign: "center" }}>Nós estamos juntos<br />nesse barco.</h2>

          <div className="ic-author">
            <img src={rodrigoPhoto} alt="Rodrigo Albuquerque" className="ic-author__avatar" style={{ width: 80, height: 80, borderRadius: "50%", objectFit: "cover" }} />
            <div>
              <div className="ic-author__name">Rodrigo Albuquerque</div>
              <div className="ic-author__role">Empreendedor · Entusiasta de IA · Estrategista de Negócios</div>
              <div className="ic-author__text">
                Liderei equipes que venderam mais de R$100 milhões por ano. Gerenciei times de mais de 50 pessoas. Hoje, uso IA todos os dias para construir sistemas, automatizar operações e fechar contratos.
                <br /><br />
                Não sou desenvolvedor. Não sou guru de 22 anos que mora com os pais. Sou empreendedor, pai, cristão e estou com a minha esposa há mais de 10 anos. Assim como você, tenho contas para pagar e zero tempo a perder.
                <br /><br />
                Quando vi a velocidade dessa revolução, não fiquei debatendo se valia a pena. Parei tudo, testei dezenas de ferramentas e coloquei para rodar. O <strong style={{ color: "var(--ic-arc-reactor)" }}>Claude</strong> é, de longe, a IA mais poderosa atualmente. Ela não só responde perguntas. Ela executa tarefas. Constrói sistemas e faz entregas inteiras sozinha. Criei essa imersão para mostrar exatamente o que descobri.
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="ic-divider" />

      {/* ══════ PRA QUEM É ══════ */}
      <section className="ic-section">
        <div className="ic-container">
          <h2 style={{ textAlign: "center" }}>Esta imersão é para <span className="ic-highlight-arc">você</span> se…</h2>

          <ul className="ic-check-list" style={{ marginTop: 32 }}>
            {forYouItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ══════ OFERTA ══════ */}
      <section className="ic-section" id="oferta" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(0,168,232,0.05) 0%, transparent 70%)" }}>
        <div className="ic-container" style={{ textAlign: "center" }}>
          <h2>O futuro pertence a quem<br />age <span className="ic-highlight-arc">agora</span>.</h2>
          <p style={{ color: "var(--ic-text-secondary)", maxWidth: 600, margin: "16px auto 0", fontSize: "0.95rem" }}>
            Em 3 aulas, você vai entender a revolução que está redesenhando o mercado, ver o Claude construindo um sistema ao vivo na sua frente, e sair com um plano concreto de monetização independente do seu nível técnico.
          </p>

          <div className="ic-price-box">
            <div className="ic-price-box__tag">Vagas limitadas</div>
            <div className="ic-price-box__label">Imersão em Claude — 3 aulas ao vivo</div>
            <div className="ic-price-box__old">De R$ 297,00</div>
            <div className="ic-price-box__amount"><span className="ic-highlight-arc">R$ 97</span></div>
            <div className="ic-price-box__installment">ou 12× de R$ 9,70 no cartão</div>
            <button className="ic-cta-btn" onClick={() => handleCTA("pricing")} style={{ width: "100%", maxWidth: 380 }}>
              GARANTIR MINHA VAGA AGORA
              <span className="ic-cta-sub">Acesso imediato após a confirmação do pagamento</span>
            </button>
            <p style={{ color: "var(--ic-text-muted)", fontSize: "0.78rem", marginTop: 16, fontFamily: "'IBM Plex Mono',monospace" }}>
              Pagamento seguro · Garantia de 7 dias · Acesso imediato
            </p>
          </div>

          <div className="ic-guarantee">
            <div className="ic-guarantee__icon">🔒</div>
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
          <p style={{ fontFamily: "'Chakra Petch',sans-serif", fontWeight: 600, color: "var(--ic-text-secondary)", marginBottom: 8 }}>IMERSÃO EM CLAUDE</p>
          <p>© 2026 Rodrigo Albuquerque · BA Consultoria · Todos os direitos reservados</p>
          <p style={{ marginTop: 8 }}>Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho é meramente ilustrativa.</p>
        </div>
      </footer>
    </div>
  );
};

export default ImersaoClaude;
