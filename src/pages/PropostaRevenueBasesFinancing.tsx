import { useEffect } from "react";
import diegoBarretoPhoto from "@/assets/mentors/diego-barreto.webp";
import pedroSommaPhoto from "@/assets/mentors/pedro-somma.webp";
import vaboPhoto from "@/assets/mentors/vabo.webp";
import joaoOliverioPhoto from "@/assets/mentors/joao-oliverio.webp";
import joseDiogoPhoto from "@/assets/mentors/jose-diogo.webp";

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

const products = [
  {
    name: "Imersão em Claude",
    desc: "3 aulas ao vivo — produto de entrada, alto volume de conversão",
    ticket: "R$97",
    badge: "Front-end",
  },
  {
    name: "A Revolução",
    desc: "Curso gravado, 8 módulos — venda digital sem call",
    ticket: "R$1.997",
    badge: "Core",
  },
  {
    name: "Super Agentes",
    desc: "Mentoria em grupo com calls ao vivo — venda via closer",
    ticket: "R$8.000",
    badge: "Back-end",
  },
  {
    name: "Consultoria de OS",
    desc: "Consultoria individual de construção de sistema operacional com IA",
    ticket: "R$36.000",
    badge: "High-end",
  },
];

const proofMetrics = [
  { value: "580+", label: "Alunos na base" },
  { value: "28.1K", label: "Seguidores Instagram" },
  { value: "32.3K", label: "Seguidores TikTok" },
];

const terms = [
  {
    title: "Split de Receita",
    value: "30% da receita líquida",
    detail: "Calculado sobre o valor pós-impostos e pós-taxa Hotmart (~10%)",
  },
  {
    title: "Janela de Atribuição",
    value: "12 meses por lead",
    detail: "Todo lead gerado pelo seu tráfego é seu por 12 meses, independente de quando comprar",
  },
  {
    title: "Rastreamento",
    value: "UTM + Coprodutor Hotmart",
    detail: "Link exclusivo do seu cohort na Hotmart — o split cai automaticamente na sua conta",
  },
  {
    title: "Pagamento",
    value: "Automático via Hotmart",
    detail: "Sem burocracia, sem cobrança manual, sem intermediários",
  },
  {
    title: "Investimento mínimo",
    value: "R$3.000 / mês",
    detail: "100% aplicados em mídia paga (Meta Ads). Zero fee de gestão",
  },
  {
    title: "Período recomendado",
    value: "Mínimo 3 meses",
    detail: "Para colher dados consistentes e calibrar a performance das campanhas",
  },
];

const faqs = [
  {
    q: "Como funciona o rastreamento dos meus leads?",
    a: "Cada investidor recebe UTMs exclusivas geradas para o seu cohort. Além disso, o link de entrada na Hotmart já vem configurado com o split de coprodutor. Toda venda é registrada automaticamente — você consegue acompanhar no painel da Hotmart.",
  },
  {
    q: "Quando recebo o meu retorno?",
    a: "O pagamento é feito automaticamente pela Hotmart no momento da venda. O dinheiro cai diretamente na sua conta cadastrada, sem necessidade de cobrança ou transferência manual.",
  },
  {
    q: "Posso aumentar ou diminuir o valor investido?",
    a: "Sim. Você pode ajustar o volume de investimento com 30 dias de antecedência. Aumentar o investimento gera mais leads e potencialmente maior retorno proporcional.",
  },
  {
    q: "E se as campanhas não performarem?",
    a: "Tráfego pago tem variabilidade inerente. Por isso recomendamos mínimo de 3 meses para leitura consistente. O portfólio de produtos já tem conversão validada com base orgânica — isso reduz o risco de performance nula.",
  },
  {
    q: "Tenho acesso a relatórios de desempenho?",
    a: "Sim. Você acessa o painel da Hotmart com seus dados de coprodutor e pode acompanhar vendas atribuídas em tempo real. Mensalmente compartilhamos também relatório de tráfego com CPL, alcance e volume de leads gerados.",
  },
];

/* ── Componente ────────────────────────────────────────────── */

const PropostaRevenueBasesFinancing = () => {
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

        /* ── Reset ── */
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
          font-family: var(--font-mono);
          font-size: 11px; letter-spacing: 4px; text-transform: uppercase;
          color: var(--gold); margin-bottom: 32px; opacity: 0.9;
        }

        .rbf-hero h1 {
          font-family: var(--font-display);
          font-size: clamp(32px, 5vw, 56px); font-weight: 700; line-height: 1.15;
          max-width: 800px; margin-bottom: 24px; color: var(--text-primary);
        }
        .rbf-hero h1 span { color: var(--gold); }

        .rbf-hero-sub {
          font-size: 18px; font-weight: 300; color: var(--text-secondary);
          max-width: 600px; margin-bottom: 48px;
        }

        .rbf-hero-metrics { display: flex; gap: 48px; flex-wrap: wrap; justify-content: center; }

        .rbf-metric-value {
          font-family: var(--font-display);
          font-size: 36px; font-weight: 700; color: var(--gold);
        }
        .rbf-metric-label {
          font-family: var(--font-mono);
          font-size: 10px; letter-spacing: 2px; text-transform: uppercase;
          color: var(--text-dim); margin-top: 4px;
        }

        /* ── Seções ── */
        .rbf-section {
          padding: 80px 24px;
          max-width: 960px;
          margin: 0 auto;
        }

        .rbf-section-wide {
          padding: 80px 24px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .rbf-section-label {
          font-family: var(--font-mono);
          font-size: 10px; letter-spacing: 4px; text-transform: uppercase;
          color: var(--gold); margin-bottom: 16px; opacity: 0.8;
        }

        .rbf-section h2 {
          font-family: var(--font-display);
          font-size: clamp(24px, 3.5vw, 36px); font-weight: 600;
          margin-bottom: 24px; line-height: 1.25;
        }

        .rbf-section p, .rbf-section-wide p {
          font-size: 16px; font-weight: 300; color: var(--text-secondary);
          margin-bottom: 16px; max-width: 720px;
        }

        .rbf-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold-border), transparent);
          max-width: 960px; margin: 0 auto;
        }

        /* ── Steps ── */
        .rbf-steps {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 24px; margin-top: 40px;
        }

        .rbf-step {
          background: var(--bg-surface); border: 0.5px solid var(--gold-border);
          border-radius: 12px; padding: 32px 24px; position: relative;
          transition: border-color 0.3s;
        }
        .rbf-step:hover { border-color: var(--gold-border-hover); }

        .rbf-step-number {
          font-family: var(--font-display); font-size: 48px; font-weight: 700;
          color: var(--gold); opacity: 0.15; position: absolute; top: 16px; right: 20px;
        }

        .rbf-step h3 {
          font-family: var(--font-display); font-size: 18px; font-weight: 600; margin-bottom: 12px;
        }

        .rbf-step p {
          font-size: 14px; color: var(--text-secondary); font-weight: 300; max-width: none; margin-bottom: 0;
        }

        /* ── Products ── */
        .rbf-products { display: flex; flex-direction: column; gap: 16px; margin-top: 40px; }

        .rbf-product {
          background: var(--bg-surface); border: 0.5px solid var(--gold-border);
          border-radius: 12px; padding: 24px 28px;
          display: flex; justify-content: space-between; align-items: center;
          flex-wrap: wrap; gap: 16px; transition: border-color 0.3s;
        }
        .rbf-product:hover { border-color: var(--gold-border-hover); }

        .rbf-product-info h4 {
          font-family: var(--font-display); font-size: 18px; font-weight: 600; margin-bottom: 4px;
        }
        .rbf-product-info span { font-size: 13px; color: var(--text-dim); font-weight: 300; }

        .rbf-product-ticket {
          font-family: var(--font-display); font-size: 24px; font-weight: 700;
          color: var(--gold); white-space: nowrap;
        }

        .rbf-badge {
          font-family: var(--font-mono); font-size: 9px; letter-spacing: 2px; text-transform: uppercase;
          padding: 4px 12px; border-radius: 4px;
          background: var(--gold-subtle); color: var(--gold);
          border: 0.5px solid var(--gold-border);
        }

        /* ── Proof metrics ── */
        .rbf-proof-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 24px; margin-top: 40px;
        }

        .rbf-proof-card {
          background: var(--bg-surface); border: 0.5px solid var(--gold-border);
          border-radius: 12px; padding: 28px 24px; text-align: center;
        }

        .rbf-proof-value {
          font-family: var(--font-display); font-size: 36px; font-weight: 700; color: var(--gold);
        }
        .rbf-proof-label {
          font-family: var(--font-mono); font-size: 10px; letter-spacing: 2px; text-transform: uppercase;
          color: var(--text-dim); margin-top: 6px;
        }

        /* ── Mentors ── */
        .rbf-mentors-grid {
          display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px; margin-top: 48px;
        }
        .rbf-mentor-card {
          background: var(--bg-surface); border: 0.5px solid var(--gold-border);
          border-radius: 16px; padding: 24px 16px; text-align: center;
          transition: border-color 0.3s, transform 0.3s;
        }
        .rbf-mentor-card:hover { border-color: var(--gold-border-hover); transform: translateY(-2px); }
        .rbf-mentor-photo {
          width: 80px; height: 80px; border-radius: 50%; overflow: hidden;
          margin: 0 auto 12px; border: 1px solid var(--gold-border);
        }
        .rbf-mentor-photo img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(30%); }
        .rbf-mentor-name {
          font-family: var(--font-display); font-size: 14px; font-weight: 600;
          color: var(--text-primary); margin-bottom: 4px;
        }
        .rbf-mentor-role { font-size: 11px; color: var(--gold); margin-bottom: 8px; font-weight: 500; }
        .rbf-mentor-bio { font-size: 12px; color: var(--text-dim); font-weight: 300; line-height: 1.5; }

        /* ── Scenarios ── */
        .rbf-scenarios { margin-top: 40px; overflow-x: auto; }

        .rbf-scenario-grid {
          display: grid; grid-template-columns: 1.2fr 1fr 1fr 1fr;
          gap: 1px; background: var(--gold-border);
          border-radius: 12px; overflow: hidden; min-width: 560px;
        }

        .rbf-sc-cell {
          background: var(--bg-surface); padding: 20px 16px; text-align: center;
        }
        .rbf-sc-cell.hd {
          background: var(--bg-elevated);
          font-family: var(--font-mono); font-size: 10px; letter-spacing: 2px;
          text-transform: uppercase; color: var(--text-dim); padding: 14px 16px;
        }
        .rbf-sc-cell.lbl { text-align: left; font-weight: 500; font-size: 14px; }

        .rbf-sc-big {
          font-family: var(--font-display); font-size: 22px; font-weight: 700; color: var(--gold);
        }
        .rbf-sc-sub { font-size: 12px; color: var(--text-dim); margin-top: 4px; }
        .rbf-sc-cell.hl { background: rgba(201,168,76,0.04); }

        .rbf-sc-tag {
          display: inline-block; font-family: var(--font-mono); font-size: 9px;
          letter-spacing: 1px; text-transform: uppercase;
          padding: 3px 8px; border-radius: 3px; margin-bottom: 8px;
        }
        .rbf-tag-conservative { background: rgba(107,99,88,0.2); color: var(--text-dim); }
        .rbf-tag-realistic { background: var(--gold-subtle); color: var(--gold); }
        .rbf-tag-optimistic { background: var(--green-dim); color: var(--green); }

        /* ── Terms ── */
        .rbf-terms-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px; margin-top: 40px;
        }
        .rbf-term-card {
          background: var(--bg-surface); border: 0.5px solid var(--gold-border);
          border-radius: 12px; padding: 28px 24px;
        }
        .rbf-term-title {
          font-family: var(--font-mono); font-size: 10px; letter-spacing: 3px;
          text-transform: uppercase; color: var(--gold); margin-bottom: 12px;
        }
        .rbf-term-value { font-size: 15px; color: var(--text-primary); font-weight: 500; }
        .rbf-term-detail { font-size: 13px; color: var(--text-dim); font-weight: 300; margin-top: 8px; }

        /* ── Math box ── */
        .rbf-math-box {
          background: var(--bg-elevated); border: 0.5px solid var(--gold-border);
          border-radius: 12px; padding: 32px; margin-top: 32px;
          font-family: var(--font-mono); font-size: 14px; line-height: 2.2;
          color: var(--text-secondary);
        }
        .rbf-math-line {
          display: flex; justify-content: space-between; align-items: center;
          flex-wrap: wrap; gap: 8px;
        }
        .rbf-math-lbl { color: var(--text-dim); font-size: 13px; }
        .rbf-math-val { color: var(--text-primary); font-weight: 500; }
        .rbf-math-val.gold { color: var(--gold); font-weight: 700; font-size: 16px; }
        .rbf-math-val.green { color: var(--green); font-weight: 700; font-size: 16px; }
        .rbf-math-sep { height: 1px; background: var(--gold-border); margin: 12px 0; }

        /* ── Guarantee ── */
        .rbf-guarantee {
          background: var(--bg-surface); border: 1px solid var(--gold-border);
          border-radius: 16px; padding: 48px 40px; text-align: center; margin-top: 48px;
        }
        .rbf-guarantee h3 {
          font-family: var(--font-display); font-size: 24px; font-weight: 600; margin-bottom: 16px;
        }
        .rbf-guarantee p { margin: 0 auto; text-align: center; }

        /* ── FAQ ── */
        .rbf-faq { margin-top: 40px; display: flex; flex-direction: column; gap: 16px; }
        .rbf-faq-item {
          background: var(--bg-surface); border: 0.5px solid var(--gold-border);
          border-radius: 12px; padding: 24px 28px;
        }
        .rbf-faq-item h4 {
          font-family: var(--font-display); font-size: 16px; font-weight: 600;
          margin-bottom: 10px; color: var(--text-primary);
        }
        .rbf-faq-item p { font-size: 14px; color: var(--text-secondary); font-weight: 300; margin: 0; max-width: none; }

        /* ── CTA section ── */
        .rbf-cta {
          text-align: center; padding: 100px 24px;
          background:
            radial-gradient(ellipse at 50% 100%, rgba(201,168,76,0.06) 0%, transparent 60%),
            var(--bg-primary);
        }
        .rbf-cta h2 {
          font-family: var(--font-display);
          font-size: clamp(28px, 4vw, 44px); font-weight: 700; margin-bottom: 16px;
        }
        .rbf-cta p { margin: 0 auto 40px; text-align: center; color: var(--text-secondary); font-weight: 300; max-width: 560px; }

        .rbf-btn {
          display: inline-block; font-family: var(--font-body); font-weight: 600;
          font-size: 16px; letter-spacing: 1px; text-transform: uppercase;
          background: var(--gold); color: var(--bg-primary);
          padding: 18px 48px; border-radius: 8px; border: none;
          cursor: pointer; text-decoration: none; transition: all 0.3s ease;
        }
        .rbf-btn:hover {
          background: var(--gold-bright);
          box-shadow: 0 0 30px rgba(201,168,76,0.2);
          transform: translateY(-2px);
        }

        /* ── Footer ── */
        .rbf-footer {
          text-align: center; padding: 40px 24px;
          font-size: 12px; color: var(--text-dim);
          border-top: 1px solid rgba(201,168,76,0.06);
        }

        /* ── Responsivo ── */
        @media (max-width: 768px) {
          .rbf-hero-metrics { gap: 32px; }
          .rbf-metric-value { font-size: 28px; }
          .rbf-mentors-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .rbf-scenario-grid { grid-template-columns: 1fr 1fr; }
          .rbf-math-box { padding: 20px; }
          .rbf-guarantee { padding: 32px 24px; }
          .rbf-product { flex-direction: column; align-items: flex-start; }
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
            <div>
              <div className="rbf-metric-value">30%</div>
              <div className="rbf-metric-label">Da receita líquida</div>
            </div>
            <div>
              <div className="rbf-metric-value">R$3k</div>
              <div className="rbf-metric-label">Investimento mínimo/mês</div>
            </div>
            <div>
              <div className="rbf-metric-value">12 meses</div>
              <div className="rbf-metric-label">Janela de atribuição</div>
            </div>
          </div>
        </div>

        <div className="rbf-divider" />

        {/* ══════════ COMO FUNCIONA ══════════ */}
        <div className="rbf-section">
          <div className="rbf-section-label">// Modelo</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px,3.5vw,36px)", fontWeight: 600, marginBottom: 24, lineHeight: 1.25 }}>Como funciona</h2>
          <p>
            Você investe um valor mensal em tráfego pago. Esse valor financia campanhas que geram leads exclusivos para o seu cohort. Todo lead captado pelas suas campanhas é rastreado via UTM + link de coprodutor na Hotmart — e você recebe 30% de tudo que esse lead comprar nos próximos 12 meses.
          </p>

          <div className="rbf-steps">
            {[
              {
                n: "01",
                title: "Você investe",
                text: "Define um valor mensal (mínimo R$3k) que será integralmente aplicado em anúncios no Meta Ads. Sem taxa de gestão, sem fee — 100% vai pra mídia.",
              },
              {
                n: "02",
                title: "Campanhas rodam",
                text: "As campanhas são criadas e otimizadas pela minha equipe de tráfego. Cada campanha carrega UTMs exclusivas do seu cohort para rastreamento preciso.",
              },
              {
                n: "03",
                title: "Leads compram",
                text: "Cada lead gerado pelas suas campanhas entra na minha esteira de produtos. Toda venda é registrada automaticamente na Hotmart com split de coprodutor.",
              },
              {
                n: "04",
                title: "Você recebe",
                text: "30% da receita líquida (pós-impostos e taxa Hotmart) é creditada automaticamente na sua conta. Sem burocracia, sem cobrança manual.",
              },
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
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px,3.5vw,36px)", fontWeight: 600, marginBottom: 24, lineHeight: 1.25 }}>Onde seu investimento gera receita</h2>
          <p>
            Os leads captados pelo seu tráfego entram em uma esteira progressiva de produtos. Quanto maior o valor percebido, maior o ticket — e o seu retorno cresce com cada upsell natural ao longo dos 12 meses.
          </p>

          <div className="rbf-products">
            {products.map((p) => (
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
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px,3.5vw,36px)", fontWeight: 600, marginBottom: 24, lineHeight: 1.25 }}>Quem você vai financiar</h2>
          <p>
            Você não está apostando em uma ideia. Está financiando a distribuição de um ecossistema que já vende, já tem base e já tem audiência.
          </p>

          <div className="rbf-proof-grid">
            {proofMetrics.map((m) => (
              <div key={m.label} className="rbf-proof-card">
                <div className="rbf-proof-value">{m.value}</div>
                <div className="rbf-proof-label">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rbf-divider" />

        {/* ══════════ MENTORES ══════════ */}
        <div className="rbf-section-wide" style={{ padding: "80px 24px" }}>
          <div className="rbf-section-label" style={{ display: "block", textAlign: "center" }}>// Referências</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px,3.5vw,36px)", fontWeight: 600, marginBottom: 16, lineHeight: 1.25, textAlign: "center" }}>
            Nossos Mentores e Professores
          </h2>
          <p style={{ textAlign: "center", margin: "0 auto 0" }}>
            Aprendemos diretamente com alguns dos maiores líderes do mercado brasileiro.
          </p>

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
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px,3.5vw,36px)", fontWeight: 600, marginBottom: 24, lineHeight: 1.25 }}>Cenários de retorno</h2>
          <p>
            Baseado em CPLs reais do mercado de infoprodutos e nas taxas de conversão históricas dos produtos. Os valores abaixo consideram um investimento único de R$5.000 e o período de atribuição de 12 meses.
          </p>

          <div className="rbf-scenarios">
            <div className="rbf-scenario-grid">
              {/* Header row */}
              <div className="rbf-sc-cell hd" style={{ textAlign: "left" }}>Indicador</div>
              <div className="rbf-sc-cell hd">Conservador</div>
              <div className="rbf-sc-cell hd hl">Realista</div>
              <div className="rbf-sc-cell hd">Otimista</div>

              {/* Tags row */}
              <div className="rbf-sc-cell lbl" style={{ color: "var(--text-dim)", fontSize: 13 }}>Cenário</div>
              <div className="rbf-sc-cell">
                <span className="rbf-sc-tag rbf-tag-conservative">Conservador</span>
              </div>
              <div className="rbf-sc-cell hl">
                <span className="rbf-sc-tag rbf-tag-realistic">Realista</span>
              </div>
              <div className="rbf-sc-cell">
                <span className="rbf-sc-tag rbf-tag-optimistic">Otimista</span>
              </div>

              {/* Investimento */}
              <div className="rbf-sc-cell lbl">Investimento</div>
              <div className="rbf-sc-cell">
                <div className="rbf-sc-big" style={{ fontSize: 18 }}>R$5.000</div>
              </div>
              <div className="rbf-sc-cell hl">
                <div className="rbf-sc-big" style={{ fontSize: 18 }}>R$5.000</div>
              </div>
              <div className="rbf-sc-cell">
                <div className="rbf-sc-big" style={{ fontSize: 18 }}>R$5.000</div>
              </div>

              {/* CPL */}
              <div className="rbf-sc-cell lbl">CPL estimado</div>
              <div className="rbf-sc-cell">
                <div className="rbf-sc-big" style={{ fontSize: 18 }}>R$50</div>
                <div className="rbf-sc-sub">~100 leads</div>
              </div>
              <div className="rbf-sc-cell hl">
                <div className="rbf-sc-big" style={{ fontSize: 18 }}>R$33</div>
                <div className="rbf-sc-sub">~150 leads</div>
              </div>
              <div className="rbf-sc-cell">
                <div className="rbf-sc-big" style={{ fontSize: 18 }}>R$20</div>
                <div className="rbf-sc-sub">~250 leads</div>
              </div>

              {/* Receita atribuída */}
              <div className="rbf-sc-cell lbl">Receita atribuída<br /><span style={{ fontSize: 11, color: "var(--text-dim)" }}>(12 meses)</span></div>
              <div className="rbf-sc-cell">
                <div className="rbf-sc-big" style={{ fontSize: 18 }}>~R$3.500</div>
              </div>
              <div className="rbf-sc-cell hl">
                <div className="rbf-sc-big" style={{ fontSize: 18 }}>~R$10.000</div>
              </div>
              <div className="rbf-sc-cell">
                <div className="rbf-sc-big" style={{ fontSize: 18 }}>~R$30.000</div>
              </div>

              {/* Retorno */}
              <div className="rbf-sc-cell lbl">Seu retorno (30%)</div>
              <div className="rbf-sc-cell">
                <div className="rbf-sc-big">~R$1.050</div>
              </div>
              <div className="rbf-sc-cell hl">
                <div className="rbf-sc-big">~R$3.000</div>
              </div>
              <div className="rbf-sc-cell">
                <div className="rbf-sc-big" style={{ color: "var(--green)" }}>~R$9.000</div>
              </div>
            </div>
          </div>
        </div>

        <div className="rbf-divider" />

        {/* ══════════ TERMOS ══════════ */}
        <div className="rbf-section">
          <div className="rbf-section-label">// Termos</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px,3.5vw,36px)", fontWeight: 600, marginBottom: 24, lineHeight: 1.25 }}>Condições da parceria</h2>
          <p>Transparência total. Você sabe exatamente o que está contratando.</p>

          <div className="rbf-terms-grid">
            {terms.map((t) => (
              <div key={t.title} className="rbf-term-card">
                <div className="rbf-term-title">{t.title}</div>
                <div className="rbf-term-value">{t.value}</div>
                <div className="rbf-term-detail">{t.detail}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rbf-divider" />

        {/* ══════════ MATH BREAKDOWN ══════════ */}
        <div className="rbf-section">
          <div className="rbf-section-label">// A conta</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px,3.5vw,36px)", fontWeight: 600, marginBottom: 24, lineHeight: 1.25 }}>Como o dinheiro flui</h2>
          <p>Exemplo prático com R$5.000 investidos em um mês, cenário realista (CPL R$33, 150 leads).</p>

          <div className="rbf-math-box">
            <div className="rbf-math-line">
              <span className="rbf-math-lbl">Investimento em mídia</span>
              <span className="rbf-math-val">R$ 5.000</span>
            </div>
            <div className="rbf-math-line">
              <span className="rbf-math-lbl">CPL médio estimado</span>
              <span className="rbf-math-val">R$ 33</span>
            </div>
            <div className="rbf-math-line">
              <span className="rbf-math-lbl">Leads gerados (cohort exclusivo)</span>
              <span className="rbf-math-val">~150 leads</span>
            </div>
            <div className="rbf-math-sep" />
            <div className="rbf-math-line">
              <span className="rbf-math-lbl">Conversões Imersão Claude (~3%)</span>
              <span className="rbf-math-val">4 × R$97 = R$388</span>
            </div>
            <div className="rbf-math-line">
              <span className="rbf-math-lbl">Conversões A Revolução (~1%)</span>
              <span className="rbf-math-val">1 × R$1.997 = R$1.997</span>
            </div>
            <div className="rbf-math-line">
              <span className="rbf-math-lbl">Conversões Super Agentes (~0.5%)</span>
              <span className="rbf-math-val">1 × R$8.000 = R$8.000</span>
            </div>
            <div className="rbf-math-sep" />
            <div className="rbf-math-line">
              <span className="rbf-math-lbl">Receita bruta atribuída (12 meses)</span>
              <span className="rbf-math-val gold">~R$10.385</span>
            </div>
            <div className="rbf-math-line">
              <span className="rbf-math-lbl">Receita líquida (após taxas ~10%)</span>
              <span className="rbf-math-val">~R$9.346</span>
            </div>
            <div className="rbf-math-sep" />
            <div className="rbf-math-line">
              <span className="rbf-math-lbl">Seu retorno (30%)</span>
              <span className="rbf-math-val green">~R$2.804</span>
            </div>
          </div>
        </div>

        <div className="rbf-divider" />

        {/* ══════════ GARANTIA ══════════ */}
        <div className="rbf-section">
          <div className="rbf-guarantee">
            <h3>Transparência como garantia</h3>
            <p style={{ color: "var(--text-secondary)", fontWeight: 300, maxWidth: 600 }}>
              Você acessa o painel de coprodutor na Hotmart em tempo real. Cada venda gerada pelos seus leads aparece imediatamente. Não há caixa-preta — o rastreamento é público, auditável e automático. Meu compromisso é com a clareza total do modelo.
            </p>
          </div>
        </div>

        <div className="rbf-divider" />

        {/* ══════════ FAQ ══════════ */}
        <div className="rbf-section">
          <div className="rbf-section-label">// FAQ</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px,3.5vw,36px)", fontWeight: 600, marginBottom: 24, lineHeight: 1.25 }}>Perguntas frequentes</h2>

          <div className="rbf-faq">
            {faqs.map((f) => (
              <div key={f.q} className="rbf-faq-item">
                <h4>{f.q}</h4>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════ CTA ══════════ */}
        <div className="rbf-cta">
          <h2>Pronto para entrar?</h2>
          <p>
            Vagas limitadas por cohort. Cada investidor recebe rastreamento exclusivo — e por isso não abrimos ilimitado. Entre em contato para entender as vagas disponíveis.
          </p>
          <a
            href="https://wa.me/5511999718595"
            target="_blank"
            rel="noopener noreferrer"
            className="rbf-btn"
          >
            Quero investir →
          </a>
        </div>

        {/* FOOTER */}
        <div className="rbf-footer">
          BA Consultoria © 2026 — Proposta confidencial, não compartilhe sem autorização
        </div>

      </div>
    </>
  );
};

export default PropostaRevenueBasesFinancing;
