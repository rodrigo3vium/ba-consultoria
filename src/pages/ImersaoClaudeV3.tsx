import { useEffect, useRef, useState } from "react";
import { tracker } from "@/lib/tracking";
import { buildHotmartCheckoutUrl } from "@/lib/hotmartUtils";
import rodrigoPhoto from "@/assets/founders/rodrigo-albuquerque.webp";
import bancoPromptsImage from "@/assets/banco-prompts-laptop.png";
import bancoPromptsMobileImage from "@/assets/banco-prompts-mobile.png";

/* ─── Eyebrow: pill mono acima de headings de seção (SaaS IDV v.03) ─── */
const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.10] bg-white/[0.03] px-3.5 py-1.5 text-[11px] font-mono uppercase tracking-[0.14em] text-[#9A9CAA] mb-5">
    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#20DDEB] to-[#8B7CF6]" />
    {children}
  </span>
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
    document.body.style.backgroundColor = "#0A0A13";
    document.body.style.paddingTop = "0";
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.paddingTop = "";
    };
  }, []);

  useEffect(() => {
    if (chartScriptLoaded.current) return;
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js";
    script.async = true;
    script.onload = () => {
      chartScriptLoaded.current = true;
    };
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
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
          backgroundColor: ["#3A3F3A","#4D5252","#5E6360","#6B6F6C","#9A9CAA","#0F4F58","#20DDEB","#8B7CF6"],
          borderRadius: 6, borderSkipped: false, barPercentage: 0.7,
        }],
      },
      options: {
        indexAxis: "y", responsive: true, maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: "#15151F", titleColor: "#F5F5FA", bodyColor: "#B7B8C7",
            borderColor: "rgba(32,221,235,0.3)", borderWidth: 1,
            callbacks: { label: (ctx: any) => ctx.raw + " anos para atingir 50% de adoção" },
          },
        },
        scales: {
          x: {
            grid: { color: "rgba(255,255,255,0.04)" },
            ticks: { color: "#9A9CAA", font: { family: "'IBM Plex Mono', monospace", size: 11 }, callback: (v: any) => v + " anos" },
            title: { display: true, text: "Anos até 50% de adoção", color: "#9A9CAA", font: { family: "'IBM Plex Mono', monospace", size: 11 } },
          },
          y: { grid: { display: false }, ticks: { color: "#B7B8C7", font: { family: "'IBM Plex Mono', monospace", size: 11 } } },
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
          backgroundColor: ["#3A3F3A","#4D5252","#5E6360","#6B6F6C","#9A9CAA","#0F4F58","#8B7CF6"],
          borderRadius: 6, borderSkipped: false, barPercentage: 0.65,
        }],
      },
      options: {
        indexAxis: "y", responsive: true, maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: "#15151F", titleColor: "#F5F5FA", bodyColor: "#B7B8C7",
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
              color: "#9A9CAA", font: { family: "'IBM Plex Mono', monospace", size: 11 },
              callback: (v: any) => { if (v >= 12) return Math.round(v / 12) + " anos"; return v + " meses"; },
            },
            title: { display: true, text: "Tempo até 100 milhões de usuários", color: "#9A9CAA", font: { family: "'IBM Plex Mono', monospace", size: 11 } },
          },
          y: { grid: { display: false }, ticks: { color: "#B7B8C7", font: { family: "'IBM Plex Mono', monospace", size: 11 } } },
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
            backgroundColor: "#15151F", titleColor: "#F5F5FA", bodyColor: "#B7B8C7",
            borderColor: "rgba(32,221,235,0.3)", borderWidth: 1,
            callbacks: { label: (c: any) => ` ${c.dataset.label}: ${c.parsed.y}%` },
          },
        },
        scales: {
          x: { stacked: true, grid: { display: false }, ticks: { font: { size: 11, family: "'IBM Plex Mono', monospace" }, color: "#9A9CAA", autoSkip: false, maxRotation: 0 } },
          y: { stacked: true, min: 0, max: 100, ticks: { stepSize: 10, font: { size: 11, family: "'IBM Plex Mono', monospace" }, color: "#9A9CAA", callback: (v: any) => v + "%" }, grid: { color: "rgba(255,255,255,0.05)" } },
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

  return (
    <div className="ic-page">
      <style>{`
        .ic-page {
          font-family: 'Plus Jakarta Sans', -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          color: #B7B8C7;
          line-height: 1.65;
          overflow-x: hidden;
          position: relative;
          background: #0A0A13;
        }
        .ic-page * { box-sizing: border-box; }
        .ic-page h1, .ic-page h2, .ic-page h3, .ic-page h4 {
          font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
          font-weight: 800; text-transform: none;
          letter-spacing: -0.02em; line-height: 1.15;
          color: #F5F5FA;
        }
        .ic-page h1 { font-size: clamp(24px, 3vw, 36px); line-height: 1.18; }
        .ic-page h2 { font-size: clamp(24px, 3.2vw, 36px); line-height: 1.18; }
        .ic-page h3 { font-size: clamp(18px, 2.2vw, 22px); line-height: 1.3; }
        .ic-page strong { color: #F5F5FA; font-weight: 700; }
        .ic-container { max-width: 880px; margin: 0 auto; padding: 0 24px; }
        .ic-section { padding: 96px 0; position: relative; }
        .ic-highlight-cyan {
          background: linear-gradient(90deg, #20DDEB, #8B7CF6);
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent; color: transparent;
        }
        .ic-period-red { color: #8B7CF6; }
        .ic-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(32,221,235,0.18), rgba(139,124,246,0.18), transparent);
          margin: 0 auto; max-width: 600px;
        }
        .ic-cta-btn {
          display: inline-flex; flex-direction: column; align-items: center;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 800; font-size: 1rem;
          letter-spacing: -0.01em; text-transform: none;
          text-decoration: none; color: #0A0A13;
          padding: 18px 44px; border: none; border-radius: 9999px;
          cursor: pointer; position: relative; overflow: hidden;
          background: linear-gradient(90deg, #20DDEB, #8B7CF6);
          box-shadow: 0 8px 28px -8px rgba(139,124,246,0.55);
          transition: box-shadow 0.25s ease, transform 0.25s ease;
        }
        .ic-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 34px -6px rgba(139,124,246,0.70);
        }
        .ic-cta-btn::before {
          content: ''; position: absolute; top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent);
          transition: left 0.6s;
        }
        .ic-cta-btn:hover::before { left: 100%; }
        .ic-cta-sub {
          display: block; font-family: 'IBM Plex Mono', monospace;
          font-weight: 500; font-size: 0.65rem;
          letter-spacing: 0.14em; text-transform: uppercase;
          opacity: 0.75; margin-top: 6px; color: #0A0A13;
        }
        .ic-hero {
          min-height: 100vh; min-height: 100svh;
          display: flex; align-items: center; justify-content: center;
          text-align: center; padding: 120px 24px 80px; position: relative;
        }
        .ic-hero::before {
          content: ''; position: absolute; top: -120px; left: -120px;
          width: 480px; height: 480px; border-radius: 9999px;
          background: rgba(139,124,246,0.18); filter: blur(110px);
          pointer-events: none; z-index: 0;
        }
        .ic-hero::after {
          content: ''; position: absolute; top: -40px; right: -80px;
          width: 520px; height: 420px; border-radius: 9999px;
          background: rgba(32,221,235,0.14); filter: blur(110px);
          pointer-events: none; z-index: 0;
        }
        .ic-hero__route-svg { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; z-index: 1; }
        .ic-hero__content { position: relative; z-index: 2; max-width: 1220px; }
        .ic-hero__badge {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.7rem; letter-spacing: 0.18em; text-transform: uppercase;
          color: #9A9CAA; margin-bottom: 28px; padding: 8px 16px;
          border: 1px solid rgba(255,255,255,0.10); background: rgba(255,255,255,0.03);
          border-radius: 9999px;
          opacity: 0; animation: ic-fadeUp 0.7s 0.3s forwards;
        }
        .ic-hero__badge-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: linear-gradient(90deg, #20DDEB, #8B7CF6);
          animation: ic-pulse 2s infinite;
        }
        .ic-hero__title {
          font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800;
          font-size: clamp(24px, 3vw, 36px); line-height: 1.18;
          letter-spacing: -0.02em; color: #F5F5FA; margin-bottom: 28px;
          opacity: 0; animation: ic-fadeUp 0.8s 0.5s forwards;
        }
        .ic-hero__sub {
          font-family: 'Plus Jakarta Sans', sans-serif; font-size: clamp(0.95rem, 2vw, 1.1rem);
          font-weight: 400; color: #B7B8C7; max-width: 640px;
          margin: 0 auto 44px; line-height: 1.6;
          opacity: 0; animation: ic-fadeUp 0.8s 0.7s forwards;
        }
        .ic-hero__cta-wrap { opacity: 0; animation: ic-fadeUp 0.8s 0.9s forwards; }
        .ic-hero__meta {
          display: flex; flex-wrap: wrap; justify-content: center;
          gap: 28px; margin-top: 40px;
          opacity: 0; animation: ic-fadeUp 0.8s 1.1s forwards;
        }
        .ic-hero__meta-item {
          font-family: 'IBM Plex Mono', monospace; font-size: 0.72rem;
          color: #9A9CAA; letter-spacing: 0.14em; text-transform: uppercase;
          display: flex; align-items: center; gap: 8px;
        }
        .ic-hero__meta-item .ic-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: #20DDEB; box-shadow: 0 0 8px rgba(32,221,235,0.45);
        }
        @keyframes ic-fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes ic-fadeIn { from { opacity:0; } to { opacity:1; } }
        @keyframes ic-pulse { 0%,100%{opacity:1;transform:scale(1);} 50%{opacity:.35;transform:scale(.7);} }
        .ic-urgency-bar {
          background: rgba(139,124,246,0.06);
          border-top: 1px solid rgba(139,124,246,0.28); border-bottom: 1px solid rgba(139,124,246,0.28);
          text-align: center; padding: 14px 24px;
          font-family: 'IBM Plex Mono', monospace; font-size: 0.78rem;
          color: #B9AEFB; letter-spacing: 0.14em; text-transform: uppercase;
        }
        .ic-problem-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 16px; margin: 48px 0;
        }
        .ic-problem-card {
          background: #15151F; border: 1px solid rgba(255,255,255,0.09); border-radius: 16px;
          padding: 32px 24px; text-align: center; position: relative;
          transition: border-color 0.3s, background 0.3s;
        }
        .ic-problem-card:hover { border-color: rgba(255,255,255,0.18); background: #1A1A26; }
        .ic-problem-card__stat {
          font-family: 'Plus Jakarta Sans', sans-serif; font-size: 2.6rem; font-weight: 800;
          background: linear-gradient(90deg, #20DDEB, #8B7CF6);
          -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
          line-height: 1; margin-bottom: 12px; letter-spacing: -0.02em;
        }
        .ic-problem-card__stat--red { -webkit-text-fill-color: initial; color: #8B7CF6; background: none; }
        .ic-problem-card__label {
          font-family: 'Plus Jakarta Sans', sans-serif; font-size: 0.85rem;
          color: #9A9CAA; line-height: 1.5;
        }
        .ic-aula-card {
          background: #15151F; border: 1px solid rgba(255,255,255,0.09); border-radius: 20px;
          padding: 36px; margin-bottom: 20px;
          display: flex; gap: 28px; align-items: flex-start; position: relative;
          transition: border-color 0.3s, background 0.3s, transform 0.3s;
        }
        .ic-aula-card:hover {
          background: #1A1A26; border-color: rgba(255,255,255,0.18);
          transform: translateX(4px);
        }
        .ic-aula-card__num {
          flex-shrink: 0; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800;
          font-size: 3rem; line-height: 0.9; letter-spacing: -0.02em;
          background: linear-gradient(90deg, #20DDEB, #8B7CF6);
          -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
        }
        .ic-aula-card__tag {
          font-family: 'IBM Plex Mono', monospace; font-size: 0.7rem;
          letter-spacing: 0.16em; text-transform: uppercase;
          color: #20DDEB; margin-bottom: 10px;
        }
        .ic-aula-card__title {
          font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: 1.3rem;
          line-height: 1.2; letter-spacing: -0.01em; text-transform: none;
          margin-bottom: 14px; color: #F5F5FA;
        }
        .ic-aula-card__desc {
          font-family: 'Plus Jakarta Sans', sans-serif; font-size: 0.92rem;
          color: #B7B8C7; line-height: 1.65; font-weight: 400;
        }
        .ic-author {
          display: flex; gap: 32px; align-items: flex-start;
          padding: 40px; background: #15151F; border: 1px solid rgba(255,255,255,0.09);
          border-radius: 24px; margin: 48px auto 0; max-width: 720px; position: relative;
        }
        .ic-author__avatar {
          flex-shrink: 0; width: 96px; height: 96px; object-fit: cover;
          border: 1px solid rgba(32,221,235,0.25); border-radius: 20px; position: relative;
        }
        .ic-author__name {
          font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; font-size: 1.4rem;
          letter-spacing: -0.01em; text-transform: none; margin-bottom: 6px; color: #F5F5FA;
        }
        .ic-author__role {
          font-family: 'IBM Plex Mono', monospace; font-size: 0.72rem;
          color: #20DDEB; letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 16px;
        }
        .ic-author__text {
          font-family: 'Plus Jakarta Sans', sans-serif; font-size: 0.92rem;
          color: #B7B8C7; line-height: 1.7; font-weight: 400;
        }
        .ic-page blockquote {
          border-left: 2px solid #20DDEB; padding: 24px 32px; margin: 40px 0;
          background: rgba(32,221,235,0.03); border-radius: 0 16px 16px 0;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(1.1rem, 2.2vw, 1.4rem); font-weight: 700;
          letter-spacing: -0.01em; line-height: 1.35; text-transform: none;
          color: #F5F5FA; font-style: normal; position: relative;
        }
        .ic-check-list { list-style: none; margin: 32px 0; padding: 0; }
        .ic-check-list li {
          padding: 14px 0 14px 32px; position: relative; color: #B7B8C7;
          font-family: 'Plus Jakarta Sans', sans-serif; font-size: 0.95rem; font-weight: 400;
          line-height: 1.5; border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .ic-check-list li:last-child { border-bottom: none; }
        .ic-check-list li::before {
          content: '';
          position: absolute; left: 0; top: 20px; width: 14px; height: 2px;
          background: linear-gradient(90deg, #20DDEB, #8B7CF6); border-radius: 2px;
        }
        .ic-mid-capture {
          background: #0D0D18;
          border-top: 1px solid rgba(255,255,255,0.06); border-bottom: 1px solid rgba(255,255,255,0.06);
          padding: 80px 24px; text-align: center; position: relative;
        }
        .ic-chart-tab {
          font-family: 'IBM Plex Mono', monospace; font-size: 0.72rem; padding: 10px 18px;
          letter-spacing: 0.12em; text-transform: uppercase; border: 1px solid rgba(255,255,255,0.10);
          border-radius: 9999px;
          background: transparent; color: #9A9CAA; cursor: pointer; transition: all 0.25s;
        }
        .ic-chart-tab:hover { border-color: rgba(255,255,255,0.22); color: #B7B8C7; }
        .ic-chart-tab.active { background: rgba(32,221,235,0.10); border-color: #20DDEB; color: #20DDEB; }
        .rev-timeline-visual { display: flex; flex-direction: column; gap: 22px; }
        .rev-item { opacity: 0; animation: ic-revSlideIn 0.7s var(--delay, 0s) forwards; }
        @keyframes ic-revSlideIn { from { opacity: 0; transform: translateX(-24px); } to { opacity: 1; transform: translateX(0); } }
        .rev-bar {
          height: 4px; width: var(--width, 100%); background: var(--color, #20DDEB); border-radius: 2px;
          margin-bottom: 10px; min-width: 6px; position: relative; transition: width 0.8s ease;
        }
        .rev-bar::after {
          content: ''; position: absolute; right: 0; top: -3px; width: 10px; height: 10px; border-radius: 50%;
          background: var(--color, #20DDEB); box-shadow: 0 0 14px var(--color, #20DDEB);
        }
        .rev-info { display: flex; flex-wrap: wrap; align-items: baseline; gap: 8px 18px; }
        .rev-label {
          font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 700; font-size: 1.05rem;
          letter-spacing: -0.01em; text-transform: none; color: #F5F5FA;
        }
        .rev-date { font-family: 'IBM Plex Mono', monospace; font-size: 0.7rem; color: #9A9CAA; letter-spacing: 0.08em; }
        .rev-span { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 0.85rem; color: #B7B8C7; font-weight: 400; }
        .rev-span--alert { color: #8B7CF6; font-weight: 700; }
        .ic-price-box {
          text-align: center; background: #15151F; border: 1px solid rgba(32,221,235,0.20);
          border-radius: 24px;
          padding: 56px 36px; margin: 48px auto; max-width: 540px; position: relative;
        }
        .ic-price-box__tag {
          display: inline-block; font-family: 'IBM Plex Mono', monospace;
          font-size: 0.7rem; letter-spacing: 0.16em; text-transform: uppercase;
          color: #8B7CF6; border: 1px solid rgba(139,124,246,0.45); border-radius: 9999px;
          padding: 5px 14px; margin-bottom: 24px;
        }
        .ic-price-box__label {
          font-family: 'IBM Plex Mono', monospace; font-size: 0.78rem; color: #B7B8C7;
          letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 24px;
        }
        .ic-price-box__old {
          font-family: 'Plus Jakarta Sans', sans-serif; font-size: 0.95rem; color: #9A9CAA;
          text-decoration: line-through; text-decoration-color: #8B7CF6;
          text-decoration-thickness: 2px; margin-bottom: 8px;
        }
        .ic-price-box__amount {
          font-family: 'Plus Jakarta Sans', sans-serif; font-size: clamp(3.6rem, 9vw, 5rem);
          font-weight: 800; line-height: 0.95; letter-spacing: -0.02em; margin-bottom: 8px;
          background: linear-gradient(90deg, #20DDEB, #8B7CF6);
          -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
        }
        .ic-price-box__installment {
          font-family: 'IBM Plex Mono', monospace; font-size: 0.78rem; color: #9A9CAA;
          letter-spacing: 0.1em; margin-bottom: 32px;
        }
        .ic-guarantee {
          text-align: center; padding: 40px 24px; margin: 24px 0;
          border: 1px solid rgba(255,255,255,0.09); background: #15151F; border-radius: 24px;
          max-width: 540px; margin-left: auto; margin-right: auto; position: relative;
        }
        .ic-guarantee__shield { width: 48px; height: 48px; margin: 0 auto 16px; display: block; }
        .ic-guarantee__title {
          font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.3rem; font-weight: 800;
          letter-spacing: -0.01em; text-transform: none; color: #20DDEB; margin-bottom: 10px;
        }
        .ic-guarantee__text {
          font-family: 'Plus Jakarta Sans', sans-serif; color: #B7B8C7;
          font-size: 0.88rem; font-weight: 400; line-height: 1.6; max-width: 460px; margin: 0 auto;
        }
        .ic-bonus-box {
          background: rgba(32,221,235,0.04); border: 1px solid rgba(32,221,235,0.20); border-radius: 20px;
          padding: 28px 32px; margin: 0 auto 28px; max-width: 540px; text-align: left; position: relative;
        }
        .ic-bonus-tag {
          font-family: 'IBM Plex Mono', monospace; font-size: 0.68rem;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: #20DDEB; margin-bottom: 10px; display: block;
        }
        .ic-bonus-prompts-desktop { width: 100%; max-width: 900px; height: auto; margin: 0 auto; display: block; border-radius: 20px; }
        .ic-bonus-prompts-mobile { display: none; }
        .ic-faq-item { border-bottom: 1px solid rgba(255,255,255,0.06); padding: 22px 0; }
        .ic-faq-item summary {
          font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 700; font-size: 1.05rem;
          letter-spacing: -0.01em; text-transform: none; cursor: pointer; color: #F5F5FA;
          list-style: none; display: flex; justify-content: space-between; align-items: center; gap: 16px;
        }
        .ic-faq-item summary::-webkit-details-marker { display: none; }
        .ic-faq-item summary::after {
          content: '+'; font-family: 'IBM Plex Mono', monospace; font-size: 1.4rem;
          color: #20DDEB; transition: transform 0.3s;
        }
        .ic-faq-item[open] summary::after { content: '−'; }
        .ic-faq-item p {
          font-family: 'Plus Jakarta Sans', sans-serif; color: #B7B8C7;
          font-size: 0.9rem; font-weight: 400; line-height: 1.65; margin-top: 14px; padding-right: 28px;
        }
        .ic-footer {
          text-align: center; padding: 48px 24px; font-family: 'IBM Plex Mono', monospace;
          font-size: 0.72rem; color: #9A9CAA; letter-spacing: 0.08em;
          border-top: 1px solid rgba(255,255,255,0.06); line-height: 1.8;
        }
        .ic-footer__brand {
          font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.3rem; font-weight: 800;
          letter-spacing: -0.01em; text-transform: none; color: #F5F5FA; margin-bottom: 16px;
        }
        @media (max-width: 640px) {
          .ic-section { padding: 64px 0; }
          .ic-hero { padding: 100px 18px 64px; min-height: auto; }
          .ic-hero__title { font-size: 1.7rem; }
          .ic-hero__sub { font-size: 0.95rem; }
          .ic-hero__badge { font-size: 0.62rem; letter-spacing: 0.14em; }
          .ic-hero__meta { gap: 14px; }
          .ic-hero__meta-item { font-size: 0.65rem; letter-spacing: 0.10em; }
          .ic-container { padding: 0 16px; }
          .ic-author { flex-direction: column; align-items: center; text-align: center; padding: 28px 18px; }
          .ic-author__avatar { width: 80px; height: 80px; }
          .ic-aula-card { flex-direction: column; gap: 8px; padding: 24px 18px; }
          .ic-aula-card__num { font-size: 2.4rem; }
          .ic-aula-card__title { font-size: 1.15rem; }
          .ic-problem-grid { grid-template-columns: 1fr; }
          .ic-problem-card { padding: 24px 18px; }
          .ic-problem-card__stat { font-size: 2.2rem; }
          .ic-cta-btn { font-size: 0.9rem; padding: 16px 30px; }
          .ic-page blockquote { padding: 16px 20px; font-size: 1.05rem; }
          .ic-check-list li { font-size: 0.88rem; padding: 12px 0 12px 28px; }
          .ic-check-list li::before { top: 18px; }
          .ic-price-box { padding: 40px 22px; }
          .ic-urgency-bar { font-size: 0.68rem; padding: 12px 16px; letter-spacing: 0.1em; }
          .ic-mid-capture { padding: 56px 0; }
          .ic-faq-item summary { font-size: 1rem; }
          .ic-adoption-segs { flex-wrap: wrap; }
          .ic-adoption-seg { min-width: 45% !important; flex: 1 1 45% !important; }
          .ic-nowbar { flex-wrap: wrap; }
          .ic-nowbar-pct { font-size: 18px !important; }
          .ic-chart-tab { font-size: 0.66rem !important; padding: 8px 12px !important; letter-spacing: 0.1em !important; }
          .ic-bonus-prompts-desktop { display: none; }
          .ic-bonus-prompts-mobile { display: block; width: 150%; max-width: none; transform: translateX(-0.75rem); height: auto; border-radius: 16px; }
        }
      `}</style>

      {/* ══════ HERO ══════ */}
      <section className="ic-hero">
        <svg className="ic-hero__route-svg" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="routeGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#20DDEB" stopOpacity="0" />
              <stop offset="40%" stopColor="#20DDEB" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#38F3FF" stopOpacity="0.85" />
            </linearGradient>
            <filter id="routeGlow"><feGaussianBlur stdDeviation="4" /></filter>
          </defs>
          <path d="M 0,720 C 200,720 320,700 480,640 C 620,585 720,500 860,400 C 980,310 1100,230 1240,160 C 1320,120 1380,100 1440,80" fill="none" stroke="url(#routeGrad)" strokeWidth="1.6" filter="url(#routeGlow)" opacity="0.6" />
          <path d="M 0,720 C 200,720 320,700 480,640 C 620,585 720,500 860,400 C 980,310 1100,230 1240,160 C 1320,120 1380,100 1440,80" fill="none" stroke="#38F3FF" strokeWidth="0.8" opacity="0.5" />
          <circle cx="480" cy="640" r="3" fill="#20DDEB" opacity="0.6" />
          <circle cx="860" cy="400" r="3" fill="#20DDEB" opacity="0.6" />
          <circle cx="1240" cy="160" r="3" fill="#38F3FF" opacity="0.6" />
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
        As vagas são limitadas. Quando atingirmos o limite, esta página sai do ar.
      </div>

      {/* ══════ MIGRAÇÃO CLAUDE ══════ */}
      <section className="ic-section">
        <div className="ic-container text-center">
          <Eyebrow>Migração profissional</Eyebrow>
          <video
            src="/videos/claude-migration.mp4"
            autoPlay loop muted playsInline
            className="w-[120px] h-auto mx-auto mb-8 block rounded-xl border border-saas-cyan/20"
          />
          <h2>Descubra porque <span className="ic-highlight-cyan">50% dos usuários sérios</span> de IA generativa nos últimos meses migraram do ChatGPT para o Claude<span className="ic-period-red">.</span></h2>

          <div className="relative mt-12 bg-saas-card border border-white/[0.09] rounded-2xl p-7 pb-5">
            <p className="font-mono text-[11px] font-medium text-saas-cyan tracking-mono-wide uppercase mb-1.5 text-left">uso // chatgpt vs claude</p>
            <p className="font-mono text-[10px] text-saas-faint tracking-mono-wide uppercase mb-1 text-left">dados até fev 2026</p>
            <p className="text-xs text-saas-body mb-4 text-left font-light">Participação de mercado em gastos com assinaturas de chat de IA nos EUA</p>

            <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-4">
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
                <span key={l.label} className="font-mono flex items-center gap-1.5 text-[10px] text-saas-body tracking-[0.08em] uppercase">
                  <span className="w-3 h-3 flex-shrink-0" style={{ background: l.color }} />
                  {l.label}
                </span>
              ))}
            </div>

            <div className="relative w-full h-[380px]">
              <canvas ref={marketShareChartRef} />
            </div>

            <p className="font-mono text-[9px] text-saas-faint mt-3.5 text-left leading-relaxed tracking-[0.06em]">
              FONTE: Ramp Economics Lab (ramp.com/data). Dados de cartão corporativo e pagamento de contas de mais de 50.000 empresas dos EUA na plataforma financeira da Ramp.
            </p>
          </div>

          <p className="text-saas-body max-w-xl mx-auto mt-10 text-[0.98rem] font-light leading-relaxed">
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
          <Eyebrow>Velocidade histórica</Eyebrow>
          <h2 className="text-center">A velocidade só <span className="ic-highlight-cyan">acelera</span></h2>
          <p className="text-saas-body text-center max-w-xl mx-auto mt-5 text-[0.98rem] font-light leading-relaxed">
            Pense comigo: quantas décadas seu avô viveu com a mesma profissão? Quantas vezes seus pais precisaram se reinventar? E agora… quantas mudanças você enfrentou só nos últimos dois anos?
          </p>

          <div className="mt-14">
            <div className="flex gap-2 mb-8 justify-center flex-wrap">
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
                  { color: "#9A9CAA",   delay: "0.1s", width: "100%",  label: "Revolução Agrícola",      date: "~10.000 a.C.", span: "~11.800 anos até a próxima revolução", alert: false },
                  { color: "#B7B8C7",    delay: "0.3s", width: "15%",   label: "Revolução Industrial",   date: "~1800 d.C.",   span: "~150 anos até a próxima", alert: false },
                  { color: "#20DDEB",   delay: "0.5s", width: "5.5%",  label: "Revolução Tecnológica",  date: "~1950 d.C.",   span: "~65 anos até a próxima", alert: false },
                  { color: "#8B7CF6",     delay: "0.7s", width: "0.85%", label: "Revolução da IA",        date: "~2015 d.C.",   span: "Acelerando em meses, não anos", alert: true },
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
              <p className="font-mono text-center text-saas-faint text-[0.72rem] mt-6 tracking-[0.10em]">
                O intervalo entre revoluções caiu de milênios → séculos → décadas → anos
              </p>
            </div>

            {/* Panel: Adoção */}
            <div style={{ display: activeTab === "adocao" ? "block" : "none" }}>
              <div className="relative w-full h-[340px]">
                <canvas ref={adoptionChartRef} />
              </div>
              <p className="font-mono text-center text-saas-faint text-[0.72rem] mt-4 tracking-[0.10em]">
                Anos até atingir 50% de adoção nos EUA · Fonte: Our World in Data, Visual Capitalist, Epoch AI
              </p>
            </div>

            {/* Panel: 100M */}
            <div style={{ display: activeTab === "100m" ? "block" : "none" }}>
              <div className="relative w-full h-[380px]">
                <canvas ref={users100mChartRef} />
              </div>
              <p className="font-mono text-center text-saas-faint text-[0.72rem] mt-4 tracking-[0.10em]">
                Meses até atingir 100 milhões de usuários · Fonte: UBS, Visual Capitalist, Statista
              </p>
            </div>
          </div>

          <blockquote className="mt-12">
            "Em breve teremos uma pessoa fazendo o trabalho de cinco graças à IA. A dúvida é: quem não usar a tecnologia conseguirá acompanhar? Provavelmente não."
          </blockquote>

          <p className="text-saas-body text-center max-w-xl mx-auto mt-10 text-[0.98rem] font-light leading-relaxed">
            Em todas as eras da humanidade, quem se destacou foram aqueles que conseguiram dominar novas tecnologias com velocidade.
          </p>
          <p className="font-extrabold text-saas-ink text-[1.4rem] tracking-tight text-center mt-5">
            Isso, tem até nome. São os <span className="ic-highlight-cyan">Early Adopters</span>
          </p>

          {/* Curva de Rogers */}
          <div className="relative mt-12 rounded-2xl border border-white/[0.09] overflow-hidden bg-saas-card">
            <div className="p-5 pb-4">
              <div className="font-mono text-[10px] text-saas-cyan tracking-mono-x uppercase mb-1.5">03 — O Mecanismo</div>
              <div className="font-extrabold text-2xl text-saas-ink leading-[1.05] tracking-tight">
                Curva de <span className="text-saas-cyan">adoção</span> tecnológica
              </div>
              <div className="text-xs text-saas-faint font-light mt-1.5 mb-4">
                Rogers (1962) — onde você está na curva define quanto você vai ganhar
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-3">
                <div className="font-mono flex items-center gap-1.5 text-[9px] tracking-mono-wide uppercase">
                  <div className="w-2 h-2" style={{ background: "#38F3FF" }} />
                  <span style={{ color: "#38F3FF" }}>Adotantes por período (sino)</span>
                </div>
                <div className="font-mono flex items-center gap-1.5 text-[9px] tracking-mono-wide uppercase">
                  <div className="w-2 h-2 bg-saas-cyan" />
                  <span className="text-saas-cyan">Adoção acumulada (curva S)</span>
                </div>
                <div className="font-mono flex items-center gap-1.5 text-[9px] tracking-mono-wide uppercase">
                  <div className="w-2 h-2 bg-saas-violet" />
                  <span className="text-saas-violet">Agentes de IA — agora</span>
                </div>
              </div>

              <svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg" className="block w-full">
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
                <text x="472" y="22" fontFamily="IBM Plex Mono,monospace" fontSize="7" fill="#9A9CAA" textAnchor="middle" opacity="0.8">LATE MAJORITY</text>
                <text x="630" y="22" fontFamily="IBM Plex Mono,monospace" fontSize="7" fill="#5A5F5A" textAnchor="middle" opacity="0.8">RETARD.</text>
                <line x1="50" y1="190" x2="680" y2="190" stroke="rgba(32,221,235,0.2)" strokeWidth="0.5" />
                <line x1="50" y1="10" x2="50" y2="190" stroke="rgba(32,221,235,0.15)" strokeWidth="0.5" />
                <line x1="680" y1="10" x2="680" y2="190" stroke="rgba(32,221,235,0.15)" strokeWidth="0.5" />
                <path d="M 50,190 C 60,190 65,189 80,188 C 100,187 110,185 130,182 C 150,178 155,173 170,166 C 185,158 192,150 210,138 C 228,124 238,112 258,95 C 275,80 285,66 305,50 C 320,38 332,27 345,20 C 352,16 358,13 365,11 C 372,13 378,16 385,20 C 398,27 410,38 425,50 C 445,66 455,80 472,95 C 492,112 502,124 520,138 C 538,150 545,158 560,166 C 575,173 580,178 600,182 C 620,185 630,187 650,188 C 665,189 670,190 680,190 Z" fill="url(#bellGradV3)" />
                <path d="M 50,190 C 60,190 65,189 80,188 C 100,187 110,185 130,182 C 150,178 155,173 170,166 C 185,158 192,150 210,138 C 228,124 238,112 258,95 C 275,80 285,66 305,50 C 320,38 332,27 345,20 C 352,16 358,13 365,11 C 372,13 378,16 385,20 C 398,27 410,38 425,50 C 445,66 455,80 472,95 C 492,112 502,124 520,138 C 538,150 545,158 560,166 C 575,173 580,178 600,182 C 620,185 630,187 650,188 C 665,189 670,190 680,190" fill="none" stroke="#38F3FF" strokeWidth="2.5" />
                <path d="M 50,189 C 70,188 90,187 110,186 C 130,184 145,181 160,177 C 175,172 185,165 200,156 C 215,146 225,135 240,122 C 258,107 268,95 285,82 C 302,68 315,57 335,46 C 348,38 356,34 365,31 C 374,28 382,26 395,23 C 410,20 422,17 440,14 C 458,12 470,11 490,11 C 520,11 550,11 580,11 C 610,11 640,11 660,11 C 668,11 674,11 680,11" fill="none" stroke="#20DDEB" strokeWidth="2" strokeLinecap="round" />
                <line x1="108" y1="10" x2="108" y2="190" stroke="#8B7CF6" strokeWidth="1.5" strokeDasharray="4,4" />
                <rect x="86" y="9" width="44" height="15" rx="3" fill="#8B7CF6" />
                <text x="108" y="20" fontFamily="IBM Plex Mono,monospace" fontSize="8" fill="#F5F5FA" textAnchor="middle" fontWeight="500">AGORA</text>
                <circle cx="108" cy="183" r="4" fill="#8B7CF6" />
                <circle cx="108" cy="178" r="4" fill="#8B7CF6" opacity="0.6" />
              </svg>

              {/* Adoption segments */}
              <div className="ic-adoption-segs flex gap-1.5 mt-3.5 flex-wrap">
                {[
                  { label: "Inovadores",     pct: "2,5%",  desc: "Constroem antes do mercado existir",   color: "#38F3FF" },
                  { label: "Early Adopters", pct: "13,5%", desc: "Líderes que vencem pela vantagem",     color: "#20DDEB" },
                  { label: "Early Majority", pct: "34%",   desc: "Adotam depois que a prova existe",      color: "#1B95A5" },
                  { label: "Late Majority",  pct: "34%",   desc: "Entram por pressão, não escolha",       color: "#9A9CAA" },
                  { label: "Retardatários",  pct: "16%",   desc: "Chegam quando a vantagem acabou",       color: "#5A5F5A" },
                ].map((seg) => (
                  <div key={seg.label} className="ic-adoption-seg relative flex-1 min-w-[110px] bg-saas-card border border-white/[0.09] rounded-xl p-2.5 overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-[1.5px]" style={{ background: `linear-gradient(90deg, transparent, ${seg.color}, transparent)` }} />
                    <div className="font-mono text-[8px] tracking-mono-wide uppercase mb-1" style={{ color: seg.color }}>{seg.label}</div>
                    <div className="font-extrabold text-xl leading-none mb-1 tracking-tight" style={{ color: seg.color }}>{seg.pct}</div>
                    <div className="text-[10px] text-saas-faint font-light leading-snug">{seg.desc}</div>
                  </div>
                ))}
              </div>

              {/* Now bar */}
              <div className="ic-nowbar mt-3.5 flex items-center gap-3 bg-saas-violet/[0.06] border border-saas-violet/30 rounded-xl p-3">
                <div className="w-7 h-7 rounded-lg border border-saas-violet flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-saas-violet animate-pulse-cyan" />
                </div>
                <div className="flex-1">
                  <div className="font-mono text-[10px] font-medium text-saas-violet uppercase tracking-mono-wide">
                    Agentes de IA — Posição Atual (2025–2026)
                  </div>
                  <div className="text-[11px] text-saas-body font-light mt-1 leading-snug">
                    A janela entre Early Adopters e Early Majority está aberta agora. Quem entrar hoje ainda pega a vantagem de quem chegou cedo.
                  </div>
                </div>
                <div className="ic-nowbar-pct font-extrabold text-2xl text-saas-violet tracking-tight">~8%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ MID CAPTURE ══════ */}
      <section className="ic-mid-capture">
        <div className="ic-container">
          <Eyebrow>Próximo passo</Eyebrow>
          <h2>"Tá, Rodrigo. <span className="ic-highlight-cyan">O que eu faço com isso?</span>"</h2>
          <p className="text-saas-body max-w-xl mx-auto mt-5 text-[0.98rem] font-light leading-relaxed">
            É exatamente pra responder essa pergunta que criei a <strong>Imersão em Claude</strong>: 3 aulas onde eu vou te mostrar, na prática, como usar a IA mais poderosa do mercado pra criar sistemas que trabalham pelo seu negócio — e por que existe uma janela de oportunidade aberta agora que não vai durar.
          </p>
          <div className="mt-9">
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
          <Eyebrow>Protocolo — 3 aulas</Eyebrow>
          <p className="font-mono text-[0.78rem] tracking-mono-x uppercase mb-3 text-center text-saas-cyan">Imersão em Claude</p>
          <h2 className="text-center">3 aulas que podem mudar<br />o rumo da sua <span className="ic-highlight-cyan">vida</span></h2>

          <div className="mt-[52px]">
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
      <section className="ic-section relative overflow-hidden">
        <div className="ic-container relative z-[2]">
          <Eyebrow>Quem conduz</Eyebrow>
          <h3 className="font-mono text-[0.78rem] uppercase tracking-mono-x text-center font-medium mb-3 text-saas-cyan">
            Quem vai conduzir a imersão
          </h3>
          <h2 className="text-center">Nós estamos juntos<br />nesse barco<span className="ic-period-red">.</span></h2>

          <div className="ic-author">
            <img loading="lazy" src={rodrigoPhoto} alt="Rodrigo Albuquerque" className="ic-author__avatar" />
            <div>
              <div className="ic-author__name">Rodrigo Albuquerque</div>
              <div className="ic-author__role">Empreendedor · Entusiasta de IA · Estrategista de Negócios</div>
              <div className="ic-author__text">
                Liderei equipes que venderam mais de R$100 milhões por ano. Gerenciei times de mais de 50 pessoas. Hoje, uso IA todos os dias para construir sistemas, automatizar operações e fechar contratos.
                <br /><br />
                Não sou desenvolvedor. Não sou guru de 22 anos que mora com os pais. Sou empreendedor, pai, cristão e estou com a minha esposa há mais de 10 anos. Assim como você, tenho contas para pagar e zero tempo a perder.
                <br /><br />
                Quando vi a velocidade dessa revolução, não fiquei debatendo se valia a pena. Parei tudo, testei dezenas de ferramentas e coloquei para rodar. O <strong className="text-saas-cyan">Claude</strong> é, de longe, a IA mais poderosa atualmente. Ela não só responde perguntas. Ela executa tarefas. Constrói sistemas e faz entregas inteiras sozinha. Criei essa imersão para mostrar exatamente o que descobri.
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="ic-divider" />

      {/* ══════ PRA QUEM É ══════ */}
      <section className="ic-section">
        <div className="ic-container">
          <Eyebrow>Pra quem é</Eyebrow>
          <h2 className="text-center">Esta imersão é para <span className="ic-highlight-cyan">você</span> se…</h2>
          <ul className="ic-check-list mt-9">
            {forYouItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <div className="ic-divider" />

      {/* ══════ BÔNUS · NETWORKING ══════ */}
      <section className="ic-section">
        <div className="ic-container text-center max-w-[900px]">
          <Eyebrow>Bônus — Networking</Eyebrow>
          <span className="ic-bonus-tag inline-block mb-4">
            Bônus exclusivo · só pra alunos
          </span>
          <h2 className="text-center">
            Entre no <span className="ic-highlight-cyan">Grupo Exclusivo de Networking</span> dos alunos da Imersão
          </h2>
          <p className="text-saas-body text-[1rem] leading-[1.7] max-w-[720px] mx-auto mt-6 font-light">
            Acesso vitalício à comunidade fechada de quem está implementando IA de verdade nos próprios negócios. Troca diária com empresários e profissionais à frente da curva, oportunidades de parceria e respostas pra travas no caminho — sem ruído de grupos públicos.
          </p>

          <div className="grid gap-4 mt-11 max-w-[800px] mx-auto" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
            {[
              { tag: "01", title: "Implementações reais", desc: "Cases dos próprios alunos rodando em produção, com prints e prompts." },
              { tag: "02", title: "Parcerias B2B", desc: "Empresários se conectando para co-criar produtos e indicar clientes." },
              { tag: "03", title: "Suporte de pares", desc: "Travou numa automação? Alguém já passou por isso e responde no grupo." },
            ].map((item, i) => (
              <div key={i} className="relative text-left p-6 rounded-2xl bg-saas-card border border-white/[0.09]">
                <div className="font-mono text-[0.7rem] tracking-mono-x uppercase mb-2.5 text-saas-cyan">{item.tag}</div>
                <div className="font-extrabold text-xl leading-[1.1] mb-2 tracking-tight text-saas-ink">{item.title}</div>
                <div className="text-saas-body text-[0.85rem] leading-[1.55] font-light">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="ic-divider" />

      {/* ══════ BÔNUS · BIBLIOTECA DE PROMPTS ══════ */}
      <section className="ic-section">
        <div className="ic-container text-center max-w-[1100px]">
          <Eyebrow>Bônus — Biblioteca de prompts</Eyebrow>
          <span className="ic-bonus-tag inline-block mb-4">
            Bônus incluso · de R$ 97 por R$ 0
          </span>
          <h2 className="text-center">
            Tenha acesso ao meu <span className="ic-highlight-cyan">Banco de Prompts Secreto</span>
          </h2>
          <p className="text-saas-body text-[1rem] leading-[1.7] max-w-[720px] mx-auto mt-6 font-light">
            Mais de 50 prompts validados, prontos pra copiar e colar. São os prompts que eu uso no dia a dia com Claude — vendas, copy, análise, planejamento, operação. Atalho de meses de teste.
          </p>

          <div className="mt-11 relative">
            <img loading="lazy" src={bancoPromptsImage} alt="Banco de Prompts Secreto — mais de 50 prompts validados" className="ic-bonus-prompts-desktop" />
            <img loading="lazy" src={bancoPromptsMobileImage} alt="Banco de Prompts Secreto — mais de 50 prompts validados" className="ic-bonus-prompts-mobile" />
          </div>
        </div>
      </section>

      {/* ══════ OFERTA ══════ */}
      <section
        className="ic-section"
        id="oferta"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(32,221,235,0.07) 0%, transparent 70%)" }}
      >
        <div className="ic-container text-center">
          <Eyebrow>Oferta</Eyebrow>
          <h2>O futuro pertence a quem<br />age <span className="ic-highlight-cyan">agora</span><span className="ic-period-red">.</span></h2>

          <p className="text-saas-body max-w-xl mx-auto mt-5 text-[0.98rem] font-light leading-relaxed">
            Se a Imersão te economizar 5 horas de trabalho na primeira semana — e vai — <strong>ela já se pagou.</strong> Agora imagina quando você tiver sistemas funcionando.
          </p>

          <div className="ic-price-box">
            <div className="ic-price-box__tag">Vagas limitadas</div>
            <div className="ic-price-box__label">Imersão em Claude — 3 aulas ao vivo</div>
            <div className="ic-price-box__old">De R$ 197,00</div>
            <div className="ic-price-box__amount">R$ 47</div>
            <div className="ic-price-box__installment">ou 6× de R$ 8,82 no cartão</div>
            <button className="ic-cta-btn w-full max-w-[400px]" onClick={() => handleCTA("pricing")}>
              GARANTIR MINHA VAGA AGORA
              <span className="ic-cta-sub">Acesso imediato após a confirmação</span>
            </button>
            <p className="font-mono text-saas-faint text-[0.7rem] mt-5 tracking-mono-wide uppercase">
              Pagamento seguro · Garantia de 7 dias · Acesso imediato
            </p>
          </div>

          <div className="ic-bonus-box">
            <span className="ic-bonus-tag">Bônus incluso</span>
            <p className="text-saas-ink text-[0.95rem] leading-relaxed m-0 font-light">
              <strong>Framework de diagnóstico AVEE</strong> — descubra em 15 minutos quais são os 3 processos do seu negócio onde IA gera mais retorno.
            </p>
          </div>

          <div className="ic-guarantee">
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
      <section className="ic-section pt-16">
        <div className="ic-container">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="text-center mb-11">Perguntas frequentes</h2>

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
          <p className="mt-2.5">Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho é meramente ilustrativa.</p>
        </div>
      </footer>
    </div>
  );
};

export default ImersaoClaudeV3;
