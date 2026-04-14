import { useEffect, useRef } from "react";
import rodrigoPhoto from "@/assets/founders/rodrigo-albuquerque.webp";
import diegoBarretoPhoto from "@/assets/mentors/diego-barreto.webp";
import pedroSommaPhoto from "@/assets/mentors/pedro-somma.webp";
import vaboPhoto from "@/assets/mentors/vabo.webp";
import joaoOliverioPhoto from "@/assets/mentors/joao-oliverio.webp";
import joseDiogoPhoto from "@/assets/mentors/jose-diogo.webp";
import proofHotmart from "@/assets/proof-hotmart-vendas.png";
import proofInstagram from "@/assets/proof-instagram-profile.jpg";
import proofTikTok from "@/assets/proof-tiktok-profile.jpg";

/* ── Dados fixos ───────────────────────────────────────────── */

const mentors = [
  {
    name: "Diego Barreto",
    role: "CEO — iFood",
    photo: diegoBarretoPhoto,
    bio: 'Autor do best-seller "Nova Economia," lidera a expansão e inovação no iFood.',
  },
  {
    name: "Pedro Somma",
    role: "Ex-COO — 99 Taxi",
    photo: pedroSommaPhoto,
    bio: "Papel fundamental na expansão e operação da 99, consolidando-a como líder em mobilidade.",
  },
  {
    name: "Luis Vabo Jr.",
    role: "Ex-diretor — Stone",
    photo: vaboPhoto,
    bio: "Empreendedor serial, investidor e autor de 'Falar em público é para você!'.",
  },
  {
    name: "João Olivério",
    role: "CEO — Sales As A System",
    photo: joaoOliverioPhoto,
    bio: "Especialista em vendas, Country Manager da Apollo.io e mentor no G4 Sales.",
  },
  {
    name: "José Diogo C. Rodrigues",
    role: "CMO Latam — Tinder",
    photo: joseDiogoPhoto,
    bio: "Experiência em Brand Marketing na Nike, Red Bull e atualmente Tinder Latam & Canadá.",
  },
];

const roasRows = [
  { roas: 3, label: "pessimista", retorno: "R$2.295", lucro: "-R$705", roi: "-23.5%", positive: false },
  { roas: 4, label: "breakeven", retorno: "R$3.060", lucro: "+R$60", roi: "+2%", positive: null },
  { roas: 5, label: "cenário provável", retorno: "R$3.825", lucro: "+R$825", roi: "+27.5%", positive: true },
  { roas: 7, label: "cenário provável", retorno: "R$5.355", lucro: "+R$2.355", roi: "+78.5%", positive: true },
  { roas: 9, label: "otimista", retorno: "R$6.885", lucro: "+R$3.885", roi: "+129.5%", positive: true },
  { roas: 12, label: "otimista", retorno: "R$9.180", lucro: "+R$6.180", roi: "+206%", positive: true },
];

const terms = [
  {
    title: "Investimento mínimo",
    value: "R$3.000/mês",
    detail: "100% aplicado em mídia paga (Meta Ads). Sem taxa de gestão. Compromisso mínimo de 3 meses.",
  },
  {
    title: "Seu retorno",
    value: "30% da receita líquida",
    detail: "Descontados impostos e taxa da plataforma. Split automático via coprodutor Hotmart.",
  },
  {
    title: "Rastreamento",
    value: "UTM exclusiva + link de coprodutor",
    detail: "Cada investidor tem suas próprias UTMs. Toda venda atribuída ao seu cohort é registrada automaticamente na Hotmart.",
  },
  {
    title: "Janela de atribuição",
    value: "12 meses após captação",
    detail: "Todo lead que entrou pelas suas campanhas gera retorno por 12 meses. Após esse período, o lead sai do seu cohort.",
  },
  {
    title: "Escopo de produtos",
    value: "Esteira completa",
    detail: "Você recebe 30% de tudo que o lead comprar — front-end, curso, mentoria, consultoria. Toda a esteira de produtos.",
  },
  {
    title: "Pagamento",
    value: "Split automático Hotmart",
    detail: "A Hotmart faz o split do pagamento automaticamente. Você recebe na sua conta sem intermediários.",
  },
];

const faqs = [
  {
    q: "E se o funil não vender?",
    a: "Este é um investimento de risco, como qualquer outro. A diferença é que o tráfego gera dados em tempo real — se uma campanha não performa, otimizamos ou paramos. Você acompanha tudo em um dashboard transparente.",
  },
  {
    q: "Eu tenho controle sobre as campanhas?",
    a: "Você recebe relatórios semanais com métricas de performance (CPL, leads, vendas). A gestão das campanhas é feita pela minha equipe — isso é o que garante a qualidade e otimização contínua.",
  },
  {
    q: "Posso investir mais que R$3k/mês?",
    a: "Sim. Não há teto de investimento. Quanto mais tráfego, mais leads, mais vendas, mais retorno. O modelo escala linearmente.",
  },
  {
    q: "Posso pausar o investimento?",
    a: "Sim, após o prazo mínimo de 3 meses. Esse período é necessário para maturação das campanhas — é o tempo que leva para otimizar criativos, segmentações e encontrar o ponto ideal de performance. Após os 3 meses, você pode pausar ou parar quando quiser. Os cohorts já gerados continuam ativos pela janela de 12 meses — você continua recebendo das vendas dos leads já captados.",
  },
  {
    q: "Como sei que as vendas são reais?",
    a: "Todas as vendas são processadas pela Hotmart, uma das maiores plataformas de infoprodutos do Brasil. Você terá acesso como coprodutor e pode verificar cada venda e comissão em tempo real dentro da plataforma.",
  },
];

/* ── Canvas Chart ──────────────────────────────────────────── */

function drawCompoundChart(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.parentElement!.getBoundingClientRect();
  const W = rect.width;
  const H = 460;
  canvas.width = W * dpr;
  canvas.height = H * dpr;
  canvas.style.width = W + "px";
  canvas.style.height = H + "px";
  ctx.scale(dpr, dpr);

  const monthlyInvest = 3000;
  const roas = 15;
  const liquidRate = 0.85;
  const investorShare = 0.30;
  const investMonths = 12;
  const totalMonths = 20;

  const revDist = [0.20, 0.14, 0.12, 0.09, 0.09, 0.09, 0.06, 0.06, 0.06, 0.04, 0.04, 0.01];

  const returnAccum: number[] = [];
  const monthlyReturnArr: number[] = [];

  for (let m = 0; m < totalMonths; m++) {
    let totalRevenue = 0;
    for (let c = 0; c < Math.min(m + 1, investMonths); c++) {
      const age = m - c;
      if (age < 12) {
        totalRevenue += monthlyInvest * roas * revDist[age];
      }
    }
    const investorReturn = totalRevenue * liquidRate * investorShare;
    monthlyReturnArr.push(investorReturn);
    returnAccum.push((m > 0 ? returnAccum[m - 1] : 0) + investorReturn);
  }

  const padL = 80, padR = 40, padT = 40, padB = 60;
  const chartW = W - padL - padR;
  const chartH = H - padT - padB;
  const maxVal = Math.max(...returnAccum) * 1.12;

  function xPos(i: number) { return padL + (i / (totalMonths - 1)) * chartW; }
  function yPos(v: number) { return padT + chartH - (v / maxVal) * chartH; }

  // Grid lines
  ctx.strokeStyle = "rgba(201,168,76,0.06)";
  ctx.lineWidth = 1;
  for (let i = 0; i <= 6; i++) {
    const v = (maxVal / 6) * i;
    const y = yPos(v);
    ctx.beginPath();
    ctx.moveTo(padL, y);
    ctx.lineTo(W - padR, y);
    ctx.stroke();
    ctx.fillStyle = "#5A7089";
    ctx.font = "11px JetBrains Mono, monospace";
    ctx.textAlign = "right";
    ctx.fillText("R$" + (v / 1000).toFixed(0) + "k", padL - 10, y + 4);
  }

  // X-axis labels
  ctx.textAlign = "center";
  for (let i = 0; i < totalMonths; i++) {
    if (i % 3 === 0 || i === totalMonths - 1) {
      ctx.fillStyle = "#5A7089";
      ctx.font = "11px JetBrains Mono, monospace";
      ctx.fillText("M" + (i + 1), xPos(i), H - padB + 24);
    }
  }

  // Zone shading
  const investEndX = xPos(investMonths - 1);
  ctx.fillStyle = "rgba(201,168,76,0.02)";
  ctx.fillRect(padL, padT, investEndX - padL, chartH);

  ctx.strokeStyle = "rgba(201,168,76,0.15)";
  ctx.lineWidth = 1;
  ctx.setLineDash([4, 4]);
  ctx.beginPath();
  ctx.moveTo(investEndX, padT);
  ctx.lineTo(investEndX, padT + chartH);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = "#3D5068";
  ctx.font = "500 9px JetBrains Mono, monospace";
  ctx.textAlign = "center";
  ctx.fillText("INVESTINDO", padL + (investEndX - padL) / 2, padT + 16);
  ctx.fillText("COHORTS ATIVOS", investEndX + (W - padR - investEndX) / 2, padT + 16);

  // Monthly return bars
  const barW = Math.max(chartW / totalMonths * 0.5, 8);
  for (let i = 0; i < totalMonths; i++) {
    const barH = (monthlyReturnArr[i] / maxVal) * chartH;
    const x = xPos(i) - barW / 2;
    const y = padT + chartH - barH;
    ctx.fillStyle = "rgba(56,189,248,0.12)";
    ctx.fillRect(x, y, barW, barH);
    ctx.strokeStyle = "rgba(56,189,248,0.3)";
    ctx.lineWidth = 0.5;
    ctx.strokeRect(x, y, barW, barH);
  }

  // Investment dashed line
  ctx.strokeStyle = "#C9A84C";
  ctx.lineWidth = 2;
  ctx.setLineDash([6, 4]);
  ctx.beginPath();
  for (let i = 0; i < totalMonths; i++) {
    const inv = i < investMonths ? monthlyInvest : 0;
    i === 0 ? ctx.moveTo(xPos(i), yPos(inv)) : ctx.lineTo(xPos(i), yPos(inv));
  }
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = "#C9A84C";
  ctx.font = "600 11px DM Sans, sans-serif";
  ctx.textAlign = "left";
  ctx.fillText("R$3k/mês", xPos(0) + 6, yPos(monthlyInvest) - 8);

  // Return area
  ctx.beginPath();
  ctx.moveTo(xPos(0), yPos(0));
  for (let i = 0; i < totalMonths; i++) ctx.lineTo(xPos(i), yPos(returnAccum[i]));
  ctx.lineTo(xPos(totalMonths - 1), yPos(0));
  ctx.closePath();
  const grad = ctx.createLinearGradient(0, padT, 0, padT + chartH);
  grad.addColorStop(0, "rgba(74,222,128,0.18)");
  grad.addColorStop(1, "rgba(74,222,128,0.01)");
  ctx.fillStyle = grad;
  ctx.fill();

  // Return line
  ctx.strokeStyle = "#4ADE80";
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  for (let i = 0; i < totalMonths; i++) {
    i === 0 ? ctx.moveTo(xPos(i), yPos(returnAccum[i])) : ctx.lineTo(xPos(i), yPos(returnAccum[i]));
  }
  ctx.stroke();

  // Dots
  for (let i = 0; i < totalMonths; i++) {
    if (i % 3 === 0 || i === totalMonths - 1) {
      ctx.beginPath();
      ctx.arc(xPos(i), yPos(returnAccum[i]), 4, 0, Math.PI * 2);
      ctx.fillStyle = "#4ADE80";
      ctx.fill();
      ctx.strokeStyle = "#060A12";
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }
  }

  // Final label
  const lastI = totalMonths - 1;
  ctx.fillStyle = "#4ADE80";
  ctx.font = "700 14px DM Sans, sans-serif";
  ctx.textAlign = "left";
  ctx.fillText("R$" + (returnAccum[lastI] / 1000).toFixed(0) + "k", xPos(lastI) + 10, yPos(returnAccum[lastI]) - 4);
}

/* ── Componente ────────────────────────────────────────────── */

const PropostaRevenueBasesFinancing = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const prev = {
      bg: document.body.style.backgroundColor,
      color: document.body.style.color,
      pt: document.body.style.paddingTop,
    };
    document.body.style.backgroundColor = "#0a0c10";
    document.body.style.color = "#F0EDE6";
    document.body.style.paddingTop = "0";
    return () => {
      document.body.style.backgroundColor = prev.bg;
      document.body.style.color = prev.color;
      document.body.style.paddingTop = prev.pt;
    };
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;
    drawCompoundChart(canvasRef.current);
    const handleResize = () => { if (canvasRef.current) drawCompoundChart(canvasRef.current); };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

        .rbf-page {
          --bg-primary:   #0a0c10;
          --bg-surface:   #12141a;
          --bg-elevated:  #1a1d26;
          --gold:         #C9A84C;
          --gold-bright:  #d4b85e;
          --gold-dim:     #8a7233;
          --gold-subtle:  rgba(201,168,76,0.06);
          --gold-border:  rgba(201,168,76,0.12);
          --gold-border-hover: rgba(201,168,76,0.25);
          --text-primary: #F0EDE6;
          --text-secondary: #B8B0A2;
          --text-dim:     #6B6358;
          --green:        #4ADE80;
          --green-dim:    rgba(74,222,128,0.10);
          --red-accent:   #E74C3C;
          --font-display: 'Playfair Display', Georgia, serif;
          --font-body:    'DM Sans', sans-serif;
          --font-mono:    'JetBrains Mono', monospace;

          font-family: var(--font-body);
          background: var(--bg-primary);
          color: var(--text-primary);
          line-height: 1.7;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
        }

        .rbf-page *, .rbf-page *::before, .rbf-page *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── Hero ── */
        .rbf-hero {
          min-height: 100vh;
          display: flex; flex-direction: column; justify-content: center; align-items: center;
          text-align: center; padding: 60px 24px; position: relative; overflow: hidden;
          background:
            radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.06) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 100%, rgba(201,168,76,0.03) 0%, transparent 50%),
            var(--bg-primary);
        }
        .rbf-hero::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold-border), transparent);
        }
        .rbf-hero-label {
          font-family: var(--font-mono); font-size: 11px; letter-spacing: 4px;
          text-transform: uppercase; color: var(--gold); margin-bottom: 32px; opacity: 0.9;
        }
        .rbf-hero h1 {
          font-family: var(--font-display); font-size: clamp(32px, 5vw, 56px); font-weight: 700;
          line-height: 1.15; max-width: 800px; margin-bottom: 24px; color: var(--text-primary);
        }
        .rbf-hero h1 span { color: var(--gold); }
        .rbf-hero-sub {
          font-size: 18px; font-weight: 300; color: var(--text-secondary);
          max-width: 600px; margin-bottom: 48px;
        }
        .rbf-hero-metrics { display: flex; gap: 48px; flex-wrap: wrap; justify-content: center; }
        .rbf-metric-value { font-family: var(--font-display); font-size: 36px; font-weight: 700; color: var(--gold); }
        .rbf-metric-label {
          font-family: var(--font-mono); font-size: 10px; letter-spacing: 2px;
          text-transform: uppercase; color: var(--text-dim); margin-top: 4px;
        }

        /* ── Sections ── */
        .rbf-section { padding: 80px 24px; max-width: 960px; margin: 0 auto; }
        .rbf-section-wide { padding: 80px 24px; max-width: 1100px; margin: 0 auto; }
        .rbf-section-label {
          font-family: var(--font-mono); font-size: 10px; letter-spacing: 4px;
          text-transform: uppercase; color: var(--gold); margin-bottom: 16px; opacity: 0.8;
        }
        .rbf-h2 {
          font-family: var(--font-display); font-size: clamp(24px, 3.5vw, 36px);
          font-weight: 600; margin-bottom: 24px; line-height: 1.25;
        }
        .rbf-p {
          font-size: 16px; font-weight: 300; color: var(--text-secondary);
          margin-bottom: 16px; max-width: 720px;
        }
        .rbf-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold-border), transparent);
          max-width: 960px; margin: 0 auto;
        }

        /* ── Steps ── */
        .rbf-steps { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 24px; margin-top: 40px; }
        .rbf-step {
          background: var(--bg-surface); border: 0.5px solid var(--gold-border);
          border-radius: 12px; padding: 32px 24px; position: relative; transition: border-color 0.3s;
        }
        .rbf-step:hover { border-color: var(--gold-border-hover); }
        .rbf-step-number {
          font-family: var(--font-display); font-size: 48px; font-weight: 700;
          color: var(--gold); opacity: 0.15; position: absolute; top: 16px; right: 20px;
        }
        .rbf-step h3 { font-family: var(--font-display); font-size: 18px; font-weight: 600; margin-bottom: 12px; }
        .rbf-step p { font-size: 14px; color: var(--text-secondary); font-weight: 300; }

        /* ── Products ── */
        .rbf-products { display: flex; flex-direction: column; gap: 16px; margin-top: 40px; }
        .rbf-product {
          background: var(--bg-surface); border: 0.5px solid var(--gold-border);
          border-radius: 12px; padding: 24px 28px;
          display: flex; justify-content: space-between; align-items: center;
          flex-wrap: wrap; gap: 16px; transition: border-color 0.3s;
        }
        .rbf-product:hover { border-color: var(--gold-border-hover); }
        .rbf-product-info h4 { font-family: var(--font-display); font-size: 18px; font-weight: 600; margin-bottom: 4px; }
        .rbf-product-info span { font-size: 13px; color: var(--text-dim); font-weight: 300; }
        .rbf-product-ticket { font-family: var(--font-display); font-size: 24px; font-weight: 700; color: var(--gold); white-space: nowrap; }
        .rbf-badge {
          font-family: var(--font-mono); font-size: 9px; letter-spacing: 2px; text-transform: uppercase;
          padding: 4px 12px; border-radius: 4px; background: var(--gold-subtle); color: var(--gold);
          border: 0.5px solid var(--gold-border);
        }

        /* ── Proof metrics ── */
        .rbf-proof-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 24px; margin-top: 40px; }
        .rbf-proof-card {
          background: var(--bg-surface); border: 0.5px solid var(--gold-border);
          border-radius: 12px; padding: 28px 24px; text-align: center;
        }
        .rbf-proof-value { font-family: var(--font-display); font-size: 36px; font-weight: 700; color: var(--gold); }
        .rbf-proof-label {
          font-family: var(--font-mono); font-size: 10px; letter-spacing: 2px;
          text-transform: uppercase; color: var(--text-dim); margin-top: 6px;
        }

        /* ── Screenshot grid ── */
        .rbf-screenshot-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 32px; }
        .rbf-screenshot {
          background: var(--bg-surface); border: 0.5px solid var(--gold-border);
          border-radius: 12px; overflow: hidden; aspect-ratio: 4/3;
          display: flex; align-items: center; justify-content: center;
        }
        .rbf-screenshot img { width: 100%; height: 100%; object-fit: cover; opacity: 0.9; display: block; }

        /* ── Sobre mim ── */
        .rbf-sobre-grid { display: flex; gap: 32px; align-items: flex-start; flex-wrap: wrap; margin-top: 32px; }
        .rbf-sobre-text { flex: 1; min-width: 280px; }
        .rbf-sobre-text p { font-size: 16px; color: var(--text-secondary); font-weight: 300; margin-bottom: 16px; max-width: none; }
        .rbf-sobre-text p.highlight { color: var(--gold); font-weight: 500; }
        .rbf-traj-card {
          flex: 0 0 auto; min-width: 260px; max-width: 320px;
          background: var(--bg-surface); border: 0.5px solid var(--gold-border);
          border-radius: 12px; padding: 28px 24px;
        }
        .rbf-traj-title {
          font-family: var(--font-mono); font-size: 10px; letter-spacing: 3px;
          text-transform: uppercase; color: var(--gold); margin-bottom: 20px;
        }
        .rbf-traj-item { margin-bottom: 16px; }
        .rbf-traj-item-name { font-weight: 600; font-size: 15px; color: var(--text-primary); }
        .rbf-traj-item-desc { font-size: 13px; color: var(--text-dim); }

        /* ── Mentors ── */
        .rbf-mentors-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 16px; margin-top: 40px; }
        .rbf-mentor-card {
          background: var(--bg-surface); border: 0.5px solid var(--gold-border);
          border-radius: 12px; padding: 24px 16px; text-align: center;
          transition: border-color 0.3s, transform 0.3s;
        }
        .rbf-mentor-card:hover { border-color: var(--gold-border-hover); transform: translateY(-2px); }
        .rbf-mentor-photo {
          width: 80px; height: 80px; border-radius: 50%; overflow: hidden;
          margin: 0 auto 16px; border: 1px solid var(--gold-border);
          display: flex; align-items: center; justify-content: center;
          background: var(--bg-elevated);
        }
        .rbf-mentor-photo img { width: 100%; height: 100%; object-fit: cover; }
        .rbf-mentor-name { font-family: var(--font-display); font-size: 16px; font-weight: 600; margin-bottom: 4px; }
        .rbf-mentor-role {
          font-family: var(--font-mono); font-size: 10px; letter-spacing: 1px;
          color: var(--gold); margin-bottom: 10px;
        }
        .rbf-mentor-bio { font-size: 13px; color: var(--text-dim); font-weight: 300; line-height: 1.5; }

        /* ── Scenarios ── */
        .rbf-scenarios { margin-top: 40px; overflow-x: auto; }
        .rbf-scenario-grid {
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 1px; background: var(--gold-border);
          border-radius: 12px; overflow: hidden; min-width: 400px;
        }
        .rbf-sc-cell { background: var(--bg-surface); padding: 20px 16px; text-align: center; }
        .rbf-sc-cell.hd {
          background: var(--bg-elevated); font-family: var(--font-mono);
          font-size: 10px; letter-spacing: 2px; text-transform: uppercase;
          color: var(--text-dim); padding: 14px 16px;
        }
        .rbf-sc-big { font-family: var(--font-display); font-size: 18px; font-weight: 700; color: var(--gold); }
        .rbf-sc-sub { font-size: 12px; color: var(--text-dim); margin-top: 4px; }
        .rbf-sc-cell.hl { background: rgba(201,168,76,0.04); }
        .rbf-sc-cell.green-bg { background: rgba(74,222,128,0.03); }
        .rbf-sc-red { color: var(--red-accent); font-weight: 600; }
        .rbf-sc-gold { color: var(--gold); font-weight: 600; }
        .rbf-sc-green { color: var(--green); font-weight: 700; }

        /* ── Note box ── */
        .rbf-note {
          background: var(--bg-elevated); border: 0.5px solid var(--gold-border);
          border-radius: 10px; padding: 20px 24px; margin-top: 24px;
        }
        .rbf-note p { font-size: 14px; color: var(--gold); font-weight: 500; margin: 0; max-width: none; }

        /* ── Chart legend ── */
        .rbf-chart-legend { display: flex; gap: 32px; margin-top: 20px; flex-wrap: wrap; }
        .rbf-legend-item { display: flex; align-items: center; gap: 8px; }
        .rbf-legend-dot { width: 12px; height: 12px; border-radius: 2px; }
        .rbf-legend-label {
          font-family: var(--font-mono); font-size: 11px; color: var(--text-dim); letter-spacing: 1px;
        }

        /* ── Math box ── */
        .rbf-math-box {
          background: var(--bg-elevated); border: 0.5px solid var(--gold-border);
          border-radius: 12px; padding: 32px; margin-top: 40px;
          font-family: var(--font-mono); font-size: 14px; line-height: 2.2; color: var(--text-secondary);
        }
        .rbf-math-box.green-border { border-color: rgba(74,222,128,0.2); }
        .rbf-math-line { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; }
        .rbf-math-lbl { color: var(--text-dim); font-size: 13px; }
        .rbf-math-val { color: var(--text-primary); font-weight: 500; }
        .rbf-math-val.gold { color: var(--gold); font-weight: 700; font-size: 18px; }
        .rbf-math-val.green { color: var(--green); font-weight: 700; font-size: 24px; }
        .rbf-math-val.green-bold { color: var(--green); font-weight: 700; font-size: 24px; }
        .rbf-math-sep { height: 1px; background: var(--gold-border); margin: 12px 0; }

        /* ── Terms ── */
        .rbf-terms-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-top: 40px; }
        .rbf-term-card { background: var(--bg-surface); border: 0.5px solid var(--gold-border); border-radius: 12px; padding: 28px 24px; }
        .rbf-term-title {
          font-family: var(--font-mono); font-size: 10px; letter-spacing: 3px;
          text-transform: uppercase; color: var(--gold); margin-bottom: 12px;
        }
        .rbf-term-value { font-size: 15px; color: var(--text-primary); font-weight: 400; }
        .rbf-term-detail { font-size: 13px; color: var(--text-dim); font-weight: 300; margin-top: 8px; }

        /* ── FAQ ── */
        .rbf-faq { margin-top: 40px; display: flex; flex-direction: column; gap: 16px; }
        .rbf-faq-item { background: var(--bg-surface); border: 0.5px solid var(--gold-border); border-radius: 12px; padding: 24px 28px; }
        .rbf-faq-item h4 { font-family: var(--font-display); font-size: 16px; font-weight: 600; margin-bottom: 10px; color: var(--text-primary); }
        .rbf-faq-item p { font-size: 14px; color: var(--text-secondary); font-weight: 300; margin: 0; }

        /* ── CTA ── */
        .rbf-cta {
          text-align: center; padding: 100px 24px;
          background: radial-gradient(ellipse at 50% 100%, rgba(201,168,76,0.06) 0%, transparent 60%), var(--bg-primary);
        }
        .rbf-cta h2 { font-family: var(--font-display); font-size: clamp(28px, 4vw, 44px); font-weight: 700; margin-bottom: 16px; }
        .rbf-cta p { font-size: 17px; color: var(--text-secondary); font-weight: 300; margin: 0 auto 40px; max-width: 560px; text-align: center; }
        .rbf-btn {
          display: inline-block; font-family: var(--font-body); font-weight: 600;
          font-size: 16px; letter-spacing: 1px; text-transform: uppercase;
          background: var(--gold); color: var(--bg-primary);
          padding: 18px 48px; border-radius: 8px; border: none;
          cursor: pointer; text-decoration: none; transition: all 0.3s ease;
        }
        .rbf-btn:hover { background: var(--gold-bright); box-shadow: 0 0 30px rgba(201,168,76,0.2); transform: translateY(-2px); }

        /* ── Footer ── */
        .rbf-footer {
          text-align: center; padding: 40px 24px;
          font-size: 12px; color: var(--text-dim);
          border-top: 1px solid rgba(201,168,76,0.06);
        }
        .rbf-footer p + p { margin-top: 8px; }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .rbf-hero-metrics { gap: 32px; }
          .rbf-metric-value { font-size: 28px; }
          .rbf-scenario-grid { grid-template-columns: 1fr 1fr; }
          .rbf-math-box { padding: 20px; }
          .rbf-product { flex-direction: column; align-items: flex-start; }
          .rbf-screenshot-grid { grid-template-columns: 1fr !important; }
          .rbf-mentors-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .rbf-sobre-grid { flex-direction: column; }
          .rbf-traj-card { max-width: 100%; min-width: unset; width: 100%; }
        }
      `}</style>

      <div className="rbf-page">

        {/* ══════════ HERO ══════════ */}
        <div className="rbf-hero">
          <div className="rbf-hero-label">Oportunidade de investimento</div>
          <h1>
            O investimento que se paga no primeiro mês{" "}
            <span>e continua rendendo por 12.</span>
            <br />
            Sem teto, sem burocracia.
          </h1>
          <p className="rbf-hero-sub">
            Um modelo de Revenue-Based Financing onde você financia a distribuição de produtos validados e recebe uma fatia direta das vendas.
          </p>
          <div className="rbf-hero-metrics">
            {[
              { value: "30%", label: "Da receita líquida" },
              { value: "R$3k", label: "Investimento mínimo/mês" },
              { value: "12 meses", label: "Janela de atribuição" },
            ].map((m) => (
              <div key={m.label}>
                <div className="rbf-metric-value">{m.value}</div>
                <div className="rbf-metric-label">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rbf-divider" />

        {/* ══════════ COMO FUNCIONA ══════════ */}
        <div className="rbf-section">
          <div className="rbf-section-label">// Modelo</div>
          <h2 className="rbf-h2">Como funciona</h2>
          <p className="rbf-p">
            Você investe um valor mensal em tráfego pago. Esse valor financia campanhas que geram leads exclusivos para o seu cohort. Todo lead captado pelas suas campanhas é rastreado via UTM + link de coprodutor na Hotmart — e você recebe 30% de tudo que esse lead comprar nos próximos 12 meses.
          </p>
          <div className="rbf-steps">
            {[
              { n: "01", title: "Você investe", text: "Define um valor mensal (mínimo R$3k) que será integralmente aplicado em anúncios no Meta Ads. Sem taxa de gestão, sem fee — 100% vai pra mídia." },
              { n: "02", title: "Campanhas rodam", text: "As campanhas são criadas e otimizadas pela minha equipe de tráfego. Cada campanha carrega UTMs exclusivas do seu cohort para rastreamento preciso." },
              { n: "03", title: "Leads compram", text: "Cada lead gerado pelas suas campanhas entra na minha esteira de produtos. Toda venda é registrada automaticamente na Hotmart com split de coprodutor." },
              { n: "04", title: "Você recebe", text: "30% da receita líquida (pós-impostos e taxa Hotmart) é creditada automaticamente na sua conta. Sem burocracia, sem cobrança manual." },
            ].map((s) => (
              <div key={s.n} className="rbf-step">
                <div className="rbf-step-number">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rbf-divider" />

        {/* ══════════ ESTEIRA DE PRODUTOS ══════════ */}
        <div className="rbf-section">
          <div className="rbf-section-label">// Esteira de produtos</div>
          <h2 className="rbf-h2">Onde seu investimento gera receita</h2>
          <p className="rbf-p">
            Os leads captados pelo seu tráfego entram em uma esteira progressiva de produtos. Quanto maior o valor percebido, maior o ticket — e o seu retorno cresce com cada upsell natural ao longo dos 12 meses.
          </p>
          <div className="rbf-products">
            {[
              { name: "Imersão em Claude", desc: "3 aulas ao vivo — produto de entrada, alto volume de conversão", ticket: "R$97", badge: "Front-end" },
              { name: "A Revolução", desc: "Curso gravado, 8 módulos — venda digital sem call", ticket: "R$1.997", badge: "Core" },
              { name: "Super Agentes", desc: "Mentoria em grupo com calls ao vivo — venda via closer", ticket: "R$8.000", badge: "Back-end" },
              { name: "Consultoria de OS", desc: "Consultoria individual de construção de sistema operacional com IA", ticket: "R$36.000", badge: "High-end" },
            ].map((p) => (
              <div key={p.name} className="rbf-product">
                <div className="rbf-product-info">
                  <h4>{p.name}</h4>
                  <span>{p.desc}</span>
                </div>
                <div className="rbf-product-ticket">{p.ticket}</div>
                <div className="rbf-badge">{p.badge}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rbf-divider" />

        {/* ══════════ QUEM VOCÊ VAI FINANCIAR ══════════ */}
        <div className="rbf-section">
          <div className="rbf-section-label">// Prova de tração</div>
          <h2 className="rbf-h2">Quem você vai financiar</h2>
          <p className="rbf-p">
            Você não está apostando em uma ideia. Está financiando a distribuição de um ecossistema que já vende, já tem base e já tem audiência.
          </p>
          <div className="rbf-proof-grid">
            {[
              { value: "580+", label: "Alunos na base" },
              { value: "28.1K", label: "Seguidores Instagram" },
              { value: "32.3K", label: "Seguidores TikTok" },
            ].map((m) => (
              <div key={m.label} className="rbf-proof-card">
                <div className="rbf-proof-value">{m.value}</div>
                <div className="rbf-proof-label">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Screenshot grid */}
          <div className="rbf-screenshot-grid">
            <div className="rbf-screenshot">
              <img src={proofHotmart} loading="lazy" alt="580 vendas na Hotmart" />
            </div>
            <div className="rbf-screenshot">
              <img src={proofInstagram} loading="lazy" alt="Perfil Instagram 28.1K seguidores" />
            </div>
            <div className="rbf-screenshot">
              <img src={proofTikTok} loading="lazy" alt="Perfil TikTok 32.3K seguidores" />
            </div>
          </div>

          <p className="rbf-p" style={{ marginTop: 24, fontSize: 14 }}>
            Esses números foram construídos organicamente, sem investimento em tráfego pago. O produto já se provou — agora imagine o que acontece quando colocamos distribuição paga por trás disso.
          </p>
        </div>

        <div className="rbf-divider" />

        {/* ══════════ SOBRE MIM ══════════ */}
        <div className="rbf-section">
          <div className="rbf-section-label">// Quem está por trás</div>
          <h2 className="rbf-h2">Sobre mim</h2>
          <div className="rbf-sobre-grid">
            <div className="rbf-sobre-text">
              <p>Meu nome é Rodrigo Albuquerque. Sou empresário, cristão, marido e pai do Edmundo (que acabou de completar 2 meses). Sou CEO de uma holding com três unidades de negócio focada em inteligência artificial, empreendedorismo e desenvolvimento pessoal.</p>
              <p>Nos últimos anos, atendi mais de 200 clientes em 7 países diferentes. Formei mais de 580 alunos em diferentes programas de IA e construí uma audiência de mais de 60 mil seguidores entre Instagram e TikTok — tudo orgânico, sem um real investido em anúncios pro meu próprio perfil.</p>
              <p>Minha especialidade é construir sistemas operacionais com IA para empresas — automatizar processos, eliminar gargalos operacionais e criar estruturas que escalam sem depender proporcionalmente de mais equipe. É o que eu ensino nos meus cursos e é o que eu aplico no meu próprio negócio.</p>
              <p className="highlight">A oportunidade que estou oferecendo aqui é simples: eu já tenho o produto, a audiência e o funil. O seu capital será utilizado para potencializar algo que já existe. E é por isso que o retorno é tão eficiente.</p>
            </div>
            <div className="rbf-traj-card">
              <div className="rbf-traj-title">Trajetória</div>
              {[
                { name: "200+ clientes atendidos", desc: "Consultoria, Marketing e IA" },
                { name: "580+ alunos formados", desc: "Cursos de IA aplicada a negócios" },
                { name: "60K+ seguidores", desc: "Crescimento 100% orgânico" },
              ].map((t) => (
                <div key={t.name} className="rbf-traj-item">
                  <div className="rbf-traj-item-name">{t.name}</div>
                  <div className="rbf-traj-item-desc">{t.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rbf-divider" />

        {/* ══════════ MENTORES ══════════ */}
        <div className="rbf-section">
          <div className="rbf-section-label">// Referências</div>
          <h2 className="rbf-h2">Meus Mentores e Professores</h2>
          <p className="rbf-p">Aprendi diretamente com alguns dos maiores líderes do mercado brasileiro.</p>
          <div className="rbf-mentors-grid">
            {mentors.map((m) => (
              <div key={m.name} className="rbf-mentor-card">
                <div className="rbf-mentor-photo">
                  <img loading="lazy" src={m.photo} alt={m.name} />
                </div>
                <div className="rbf-mentor-name">{m.name}</div>
                <div className="rbf-mentor-role">{m.role}</div>
                <div className="rbf-mentor-bio">{m.bio}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rbf-divider" />

        {/* ══════════ CENÁRIOS DE RETORNO ══════════ */}
        <div className="rbf-section">
          <div className="rbf-section-label">// Projeções</div>
          <h2 className="rbf-h2">Cenários de retorno</h2>
          <p className="rbf-p">
            A tabela abaixo mostra o seu retorno{" "}
            <strong style={{ color: "var(--gold)" }}>somente com vendas do produto de entrada</strong>{" "}
            — sem contar nenhum upsell. É o cenário mais conservador possível.
          </p>

          <h3 style={{ fontFamily: "var(--font-display)", marginTop: 48, marginBottom: 6, fontSize: 20 }}>
            Retorno mensal — somente front-end
          </h3>
          <p style={{ fontSize: 13, color: "var(--text-dim)", marginBottom: 20 }}>Investimento: R$3.000/mês</p>

          <div className="rbf-scenarios">
            <div className="rbf-scenario-grid">
              {["ROAS", "Seu retorno", "Lucro", "ROI"].map((h) => (
                <div key={h} className="rbf-sc-cell hd">{h}</div>
              ))}
              {roasRows.map((row) => {
                const isGreen = row.positive === true;
                const isGold = row.positive === null;
                const isRed = row.positive === false;
                const bg = isGreen ? (row.roas >= 9 ? "green-bg" : "hl") : "";
                const isBreakeven = row.roas === 4;
                return (
                  <>
                    <div key={row.roas + "-roas"} className={`rbf-sc-cell ${bg}`}>
                      <div className="rbf-sc-big">{row.roas}</div>
                      <div className="rbf-sc-sub">{row.label}</div>
                    </div>
                    <div key={row.roas + "-ret"} className={`rbf-sc-cell ${bg}`}>
                      <span className={isRed ? "rbf-sc-red" : isGold || isBreakeven ? "rbf-sc-gold" : "rbf-sc-green"}>
                        {row.retorno}
                      </span>
                    </div>
                    <div key={row.roas + "-luc"} className={`rbf-sc-cell ${bg}`}>
                      <span className={isRed ? "rbf-sc-red" : isGold || isBreakeven ? "rbf-sc-gold" : "rbf-sc-green"}>
                        {row.lucro}
                      </span>
                    </div>
                    <div key={row.roas + "-roi"} className={`rbf-sc-cell ${bg}`}>
                      <span className={isRed ? "rbf-sc-red" : isGold || isBreakeven ? "rbf-sc-gold" : "rbf-sc-green"}>
                        {row.roi}
                      </span>
                    </div>
                  </>
                );
              })}
            </div>
          </div>

          <div className="rbf-note">
            <p>A tabela acima mostra APENAS o retorno do front-end. Cada lead que entra pelo funil continua na base por 12 meses e pode comprar produtos de até R$36.000. O retorno real é significativamente maior.</p>
          </div>

          {/* LTV + Compound chart */}
          <h3 style={{ fontFamily: "var(--font-display)", marginTop: 72, marginBottom: 8, fontSize: 20 }}>
            O efeito real: LTV da esteira completa
          </h3>
          <p className="rbf-p">
            Os leads que entram pelo front-end percorrem uma esteira com 4 produtos ao longo de 12 meses. Cada novo mês de investimento cria um novo cohort — e os cohorts anteriores continuam gerando receita. O gráfico abaixo mostra o efeito composto de 12 meses de investimento contínuo.
          </p>
          <p style={{ fontSize: 13, color: "var(--text-dim)", marginBottom: 32 }}>
            Simulação com upsells progressivos ao longo de 12 meses por cohort (A Revolução R$1.997, Super Agentes R$8.000, Consultoria R$36.000).
          </p>

          <div style={{ marginTop: 24 }}>
            <canvas ref={canvasRef} style={{ width: "100%", height: 460, display: "block" }} />
          </div>

          <div className="rbf-chart-legend">
            {[
              { color: "var(--gold)", label: "INVESTIMENTO MENSAL" },
              { color: "var(--green)", label: "RETORNO ACUMULADO" },
              { color: "rgba(56,189,248,0.6)", label: "RETORNO MENSAL" },
            ].map((l) => (
              <div key={l.label} className="rbf-legend-item">
                <div className="rbf-legend-dot" style={{ background: l.color }} />
                <span className="rbf-legend-label">{l.label}</span>
              </div>
            ))}
          </div>

          <div className="rbf-math-box green-border">
            <div className="rbf-math-line">
              <span className="rbf-math-lbl">Total investido em 12 meses</span>
              <span className="rbf-math-val gold">R$36.000</span>
            </div>
            <div className="rbf-math-line">
              <span className="rbf-math-lbl">Cohorts ativos simultaneamente (mês 12)</span>
              <span className="rbf-math-val">12</span>
            </div>
            <div className="rbf-math-sep" />
            <div className="rbf-math-line">
              <span className="rbf-math-lbl">Seu retorno total acumulado</span>
              <span className="rbf-math-val green">R$137.700</span>
            </div>
            <div className="rbf-math-line">
              <span className="rbf-math-lbl">Lucro líquido</span>
              <span className="rbf-math-val green">R$101.700</span>
            </div>
            <div className="rbf-math-line">
              <span className="rbf-math-lbl" style={{ fontWeight: 600, color: "var(--text-primary)" }}>ROI total</span>
              <span className="rbf-math-val green">+282.5%</span>
            </div>
          </div>
        </div>

        <div className="rbf-divider" />

        {/* ══════════ TERMOS ══════════ */}
        <div className="rbf-section">
          <div className="rbf-section-label">// Termos do acordo</div>
          <h2 className="rbf-h2">Estrutura do investimento</h2>
          <div className="rbf-terms-grid">
            {terms.map((t) => (
              <div key={t.title} className="rbf-term-card">
                <h4 className="rbf-term-title">{t.title}</h4>
                <p className="rbf-term-value">{t.value}</p>
                <p className="rbf-term-detail">{t.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rbf-divider" />

        {/* ══════════ FAQ ══════════ */}
        <div className="rbf-section">
          <div className="rbf-section-label">// Perguntas frequentes</div>
          <h2 className="rbf-h2">Dúvidas comuns</h2>
          <div className="rbf-faq">
            {faqs.map((f) => (
              <div key={f.q} className="rbf-faq-item">
                <h4>{f.q}</h4>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rbf-divider" />

        {/* ══════════ CTA ══════════ */}
        <div className="rbf-cta">
          <div className="rbf-section-label" style={{ display: "block" }}>// Próximo passo</div>
          <h2>Quer entrar?</h2>
          <p>Vagas limitadas. Estou selecionando investidores para os primeiros cohorts. Se faz sentido, vamos conversar.</p>
          <a
            href="https://wa.me/5511999718595"
            target="_blank"
            rel="noopener noreferrer"
            className="rbf-btn"
          >
            Quero saber mais
          </a>
        </div>

        {/* FOOTER */}
        <div className="rbf-footer">
          <p>Este documento é uma apresentação de oportunidade de investimento e não constitui oferta pública de valores mobiliários. Resultados passados ou projetados não garantem retornos futuros. Todo investimento envolve risco.</p>
          <p>© 2026 — Rodrigo Albuquerque</p>
        </div>

      </div>
    </>
  );
};

export default PropostaRevenueBasesFinancing;
