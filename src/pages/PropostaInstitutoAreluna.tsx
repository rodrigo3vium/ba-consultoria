import { useEffect } from "react";
import rodrigoPhoto from "@/assets/founders/rodrigo-albuquerque.webp";
import diegoBarretoPhoto from "@/assets/mentors/diego-barreto.webp";
import pedroSommaPhoto from "@/assets/mentors/pedro-somma.webp";
import vaboPhoto from "@/assets/mentors/vabo.webp";
import joaoOliverioPhoto from "@/assets/mentors/joao-oliverio.webp";
import joseDiogoPhoto from "@/assets/mentors/jose-diogo.webp";

const stats = [
  { num: "+R$130M", label: "gerados em vendas" },
  { num: "100+", label: "consultorias realizadas" },
  { num: "+7", label: "países atendidos" },
  { num: "+54", label: "avaliações 5 estrelas" },
];

const mentors = [
  {
    name: "Diego Barreto",
    role: "CEO - iFood",
    photo: diegoBarretoPhoto,
    bio: 'Autor do best-seller "Nova Economia," lidera a expansão e inovação no iFood.',
  },
  {
    name: "Pedro Somma",
    role: "Ex-COO - 99 Taxi",
    photo: pedroSommaPhoto,
    bio: "Papel fundamental na expansão e operação da 99, consolidando-a como líder em mobilidade.",
  },
  {
    name: "Luis Vabo Jr.",
    role: "Ex-diretor - Stone",
    photo: vaboPhoto,
    bio: "Empreendedor serial, investidor e autor de 'Falar em público é para você!'.",
  },
  {
    name: "João Olivério",
    role: "CEO - Sales As A System",
    photo: joaoOliverioPhoto,
    bio: "Especialista em vendas, Country Manager da Apollo.io e mentor no G4 Sales.",
  },
  {
    name: "José Diogo C. Rodrigues",
    role: "CMO Latam - Tinder",
    photo: joseDiogoPhoto,
    bio: "Experiência em Brand Marketing na Nike, Red Bull e atualmente Tinder Latam & Canadá.",
  },
];

const deliveryItems = [
  {
    idx: "01",
    title: "Análise automatizada da pré-venda",
    desc: "Todo atendimento da secretária / SDR é processado por IA contra um padrão de qualidade definido com você. Cada conversa recebe uma nota, com o trecho exato que justifica a nota. No fim do mês, fica claro em qual etapa do atendimento a equipe está perdendo lead — não no achismo, no dado.",
  },
  {
    idx: "02",
    title: "Análise automatizada das reuniões de fechamento",
    desc: "Cada call é processada contra o método comercial da Areluna. O sistema mostra quais etapas foram cumpridas, quais foram puladas, quais objeções apareceram, qual vendedor está executando melhor. Cada call vira diagnóstico — não mais \"ele disse que correu bem\".",
  },
  {
    idx: "03",
    title: "Dashboard de aderência ao método",
    desc: "Uma tela que mostra, em tempo real, o quão fiel a operação está ao método definido. Por vendedor, por semana, por etapa. A pergunta \"minha equipe está realmente fazendo o que eu treinei?\" deixa de ser pergunta.",
  },
  {
    idx: "04",
    title: "Pontos de melhoria comercial acionáveis",
    desc: "Toda semana, o sistema entrega 3 a 5 ações concretas baseadas no que foi analisado. Não relatório bonito pra ninguém ler — recomendação prática, com o caso real que motivou a recomendação.",
  },
];

const objectives = [
  "Traduzir o método comercial da Areluna em critérios objetivos avaliáveis por IA",
  "Codificar o padrão de qualidade do atendimento de pré-venda",
  "Instalar a infraestrutura de análise automatizada de conversa e reunião",
  "Calibrar a leitura da IA com casos reais até bater com leitura de líder comercial",
  "Entregar dashboard de aderência ao método por vendedor, semana e etapa",
  "Treinar equipe interna para operar o sistema sem dependência da BA",
  "Estabelecer ciclo de revisão semanal baseado em dado, não em relato",
];

const antiCards = [
  {
    title: "Não é",
    highlight: "CRM",
    desc: "O CRM atual da Areluna continua sendo o CRM. Atlas Insight não substitui, não migra, não compete — adiciona a camada de inteligência que falta em cima do que já roda.",
  },
  {
    title: "Não é",
    highlight: "ferramenta genérica",
    desc: "Ferramenta genérica entrega transcrição e sentiment analysis. Atlas Insight analisa contra o método comercial específico da Areluna — calibrado, não pronto de prateleira.",
  },
  {
    title: "Não é",
    highlight: "treinamento de equipe",
    desc: "Treinamento ensina o que fazer. Atlas Insight mostra se está sendo feito. São dois problemas diferentes — e Atlas Insight resolve só um deles, mas resolve direito.",
  },
];

const timeline = [
  {
    week: "01",
    title: "Codificação do método",
    desc: "Sessão de descoberta pra traduzir o método comercial da Areluna e o padrão de atendimento da pré-venda em critérios objetivos que a IA possa avaliar. Sem isso, qualquer análise vira ruído.",
  },
  {
    week: "02",
    title: "Configuração e integração",
    desc: "Sistema instalado, conectado às fontes de áudio e conversa da operação. Primeiras análises começam a rodar com casos reais da Areluna.",
  },
  {
    week: "03",
    title: "Calibração",
    desc: "Você e o time validam as primeiras análises com casos reais. Ajustamos critérios até a leitura da máquina bater com o que um líder comercial seu enxergaria na mesma conversa.",
  },
  {
    week: "04",
    title: "Go-live + treinamento operacional",
    desc: "Sistema entregue funcionando, equipe treinada para usar os dashboards, ciclo de revisão semanal estabelecido. A partir daqui, decisão comercial passa a ser tomada com base em dado de execução real.",
  },
];

const PropostaInstitutoAreluna = () => {
  useEffect(() => {
    const prev = {
      bg: document.body.style.backgroundColor,
      color: document.body.style.color,
      pt: document.body.style.paddingTop,
    };
    document.body.style.backgroundColor = "#0a0a0a";
    document.body.style.color = "#f0ebe3";
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
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        .ar-page {
          --bg-dark: #0a0a0a;
          --bg-section: #111111;
          --bg-card: #1a1a1a;
          --gold: #c8956c;
          --gold-light: #e0b893;
          --gold-dark: #a06d42;
          --text-primary: #f0ebe3;
          --text-secondary: #9a9590;
          --text-muted: #6b6560;
          --border: rgba(200,149,108,0.15);
          --border-strong: rgba(200,149,108,0.35);
          --gradient-gold: linear-gradient(135deg, #a06d42, #c8956c, #e0b893);

          font-family: 'DM Sans', sans-serif;
          background: var(--bg-dark);
          color: var(--text-primary);
          line-height: 1.75;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
        }

        .ar-container { max-width: 900px; margin: 0 auto; padding: 0 24px; }
        .ar-section-label { display: inline-block; font-size: 12px; font-weight: 600; letter-spacing: 3px; text-transform: uppercase; color: var(--gold); margin-bottom: 16px; }
        .ar-section-title { font-family: 'Playfair Display', serif; font-size: clamp(1.8rem, 4vw, 2.6rem); font-weight: 700; line-height: 1.2; margin-bottom: 20px; }
        .ar-section-title em { font-style: italic; color: var(--gold); font-weight: 400; }
        .ar-section-subtitle { font-size: 16px; color: var(--text-secondary); max-width: 700px; font-weight: 300; margin-bottom: 48px; }
        .ar-divider { width: 60px; height: 1px; background: var(--gradient-gold); margin: 0 auto; }

        /* Hero */
        .ar-hero {
          min-height: 100vh;
          display: flex; flex-direction: column; justify-content: center; align-items: center;
          text-align: center; padding: 80px 24px;
          background:
            radial-gradient(ellipse at 30% 20%, rgba(160,109,66,0.08) 0%, transparent 60%),
            radial-gradient(ellipse at 70% 80%, rgba(200,149,108,0.04) 0%, transparent 50%),
            var(--bg-dark);
          position: relative;
        }
        .ar-hero::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: var(--gradient-gold); opacity: 0.4; }

        .ar-hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 8px 20px; border: 1px solid var(--border); border-radius: 100px;
          font-size: 13px; font-weight: 500; color: var(--gold-light);
          letter-spacing: 2px; text-transform: uppercase; margin-bottom: 40px;
          animation: arFadeDown 0.8s ease both;
        }
        .ar-hero-badge .ar-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--gold); animation: arPulseDot 2s infinite; }

        .ar-client-logo {
          display: inline-flex; align-items: center; justify-content: center;
          background: rgba(255,255,255,0.95); border-radius: 12px;
          padding: 16px 28px; margin-bottom: 36px;
          animation: arFadeDown 0.8s 0.1s ease both;
          box-shadow: 0 4px 24px rgba(0,0,0,0.4);
        }
        .ar-client-logo img { height: 56px; width: auto; }

        .ar-hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.4rem, 5.5vw, 4.2rem); font-weight: 700;
          line-height: 1.15; margin-bottom: 24px;
          animation: arFadeUp 0.8s 0.2s ease both;
        }
        .ar-hero-title em { font-style: italic; color: var(--gold); font-weight: 400; background: var(--gradient-gold); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }

        .ar-hero-desc {
          font-size: 17px; color: var(--text-secondary); max-width: 640px;
          margin-bottom: 48px; font-weight: 300; line-height: 1.6;
          animation: arFadeUp 0.8s 0.4s ease both;
        }

        .ar-hero-meta {
          display: flex; gap: 32px; font-size: 13px; color: var(--text-muted);
          animation: arFadeUp 0.8s 0.6s ease both; flex-wrap: wrap; justify-content: center;
        }
        .ar-hero-meta-item { display: flex; align-items: center; gap: 6px; }
        .ar-hero-meta-dot { width: 4px; height: 4px; border-radius: 50%; background: var(--gold); }

        /* Sobre */
        .ar-about-grid { display: grid; grid-template-columns: 1fr 2fr; gap: 48px; align-items: start; margin-top: 40px; }
        .ar-about-photo { width: 100%; aspect-ratio: 1; border-radius: 20px; overflow: hidden; border: 1px solid var(--border); }
        .ar-about-photo img { width: 100%; height: 100%; object-fit: cover; }
        .ar-about-text { color: var(--text-secondary); font-size: 16px; font-weight: 300; margin-bottom: 16px; line-height: 1.7; }
        .ar-stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 24px; }
        .ar-stat-card { padding: 16px; background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px; }
        .ar-stat-num { font-family: 'Playfair Display', serif; font-size: 24px; font-weight: 700; color: var(--gold); }
        .ar-stat-label { font-size: 12px; color: var(--text-muted); margin-top: 4px; }

        /* Mentores */
        .ar-mentors-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 16px; }
        .ar-mentor-card {
          background: var(--bg-card); border: 1px solid var(--border); border-radius: 16px;
          padding: 20px; text-align: center; transition: border-color 0.3s, transform 0.3s;
        }
        .ar-mentor-card:hover { border-color: var(--border-strong); transform: translateY(-2px); }
        .ar-mentor-photo { width: 72px; height: 72px; border-radius: 50%; overflow: hidden; margin: 0 auto 12px; border: 1px solid rgba(200,149,108,0.2); }
        .ar-mentor-photo img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(30%); }
        .ar-mentor-name { font-family: 'Playfair Display', serif; font-size: 14px; font-weight: 600; color: var(--text-primary); margin-bottom: 4px; }
        .ar-mentor-role { font-size: 11px; font-weight: 600; color: var(--gold); margin-bottom: 8px; }
        .ar-mentor-bio { font-size: 11px; color: var(--text-muted); font-weight: 300; line-height: 1.5; }

        /* Contexto */
        .ar-context-card {
          margin-top: 40px; padding: 40px; background: var(--bg-card);
          border: 1px solid var(--border); border-left: 3px solid var(--gold);
          border-radius: 0 16px 16px 0;
        }
        .ar-context-card p { font-size: 16px; color: var(--text-secondary); font-weight: 300; line-height: 1.75; }
        .ar-context-card p + p { margin-top: 16px; }
        .ar-context-card strong { color: var(--text-primary); font-weight: 500; }
        .ar-context-highlight { color: var(--gold-light); font-weight: 500; font-style: italic; }

        /* Entrega */
        .ar-delivery-list { display: grid; gap: 4px; margin-top: 40px; }
        .ar-delivery-item {
          background: var(--bg-card); border: 1px solid var(--border);
          padding: 36px; display: grid; grid-template-columns: 64px 1fr; gap: 28px;
          align-items: start; transition: border-color 0.3s, background 0.3s;
        }
        .ar-delivery-item:hover { border-color: var(--border-strong); background: #1f1f1f; }
        .ar-delivery-idx {
          font-family: 'Playfair Display', serif; font-size: 36px;
          color: var(--gold); font-style: italic; font-weight: 400; line-height: 1;
        }
        .ar-delivery-item h3 {
          font-family: 'Playfair Display', serif; font-size: 20px;
          color: var(--text-primary); margin-bottom: 12px; font-weight: 700; line-height: 1.25;
        }
        .ar-delivery-item p { color: var(--text-secondary); font-size: 15px; line-height: 1.65; font-weight: 300; }

        /* Objetivos */
        .ar-obj-list { display: grid; gap: 0; margin-top: 40px; }
        .ar-obj-row {
          display: grid; grid-template-columns: 56px 1fr; gap: 24px;
          padding: 20px 0; border-bottom: 1px solid var(--border); align-items: center;
        }
        .ar-obj-row:first-child { border-top: 1px solid var(--border); }
        .ar-obj-num { font-family: 'Playfair Display', serif; font-size: 20px; font-weight: 700; color: var(--gold); font-style: italic; }
        .ar-obj-text { font-size: 15px; color: var(--text-secondary); font-weight: 300; line-height: 1.55; }

        /* Anti-venda */
        .ar-anti-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 40px; }
        .ar-anti-card {
          padding: 32px; border-left: 2px solid var(--gold);
          background: var(--bg-card); border-radius: 0 12px 12px 0;
          transition: background 0.3s;
        }
        .ar-anti-card:hover { background: #1f1f1f; }
        .ar-anti-card h4 { font-family: 'Playfair Display', serif; font-size: 18px; color: var(--text-primary); margin-bottom: 12px; font-weight: 700; }
        .ar-anti-card h4 em { font-style: italic; color: var(--gold); font-weight: 400; }
        .ar-anti-card p { font-size: 14px; color: var(--text-secondary); line-height: 1.6; font-weight: 300; }

        /* Timeline */
        .ar-timeline { margin-top: 40px; }
        .ar-timeline-row {
          display: grid; grid-template-columns: 160px 1fr; gap: 48px;
          padding: 36px 0; border-bottom: 1px solid var(--border); align-items: start;
        }
        .ar-timeline-row:first-child { border-top: 1px solid var(--border); }
        .ar-timeline-week { font-size: 11px; letter-spacing: 3px; text-transform: uppercase; color: var(--gold); font-weight: 600; }
        .ar-timeline-num {
          display: block; font-family: 'Playfair Display', serif; font-size: 52px;
          color: var(--text-primary); font-style: italic; margin-top: 6px;
          letter-spacing: -2px; font-weight: 700; line-height: 1;
        }
        .ar-timeline-content h3 {
          font-family: 'Playfair Display', serif; font-size: 20px;
          color: var(--text-primary); margin-bottom: 10px; font-weight: 700;
        }
        .ar-timeline-content p { color: var(--text-secondary); font-size: 15px; line-height: 1.65; font-weight: 300; }

        /* Investimento */
        .ar-invest-box {
          background: linear-gradient(160deg, #1a1510 0%, var(--bg-card) 100%);
          border: 1px solid var(--border-strong); border-radius: 20px;
          padding: 64px 56px; text-align: center; position: relative; overflow: hidden;
          margin-top: 48px;
        }
        .ar-invest-box::before {
          content: ''; position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: radial-gradient(ellipse at 50% 0%, rgba(200,149,108,0.06) 0%, transparent 60%);
          pointer-events: none;
        }
        .ar-invest-label { font-size: 11px; font-weight: 600; letter-spacing: 3px; text-transform: uppercase; color: var(--gold); margin-bottom: 20px; }
        .ar-invest-price {
          font-family: 'Playfair Display', serif;
          font-size: clamp(56px, 8vw, 84px); color: var(--text-primary);
          font-weight: 700; line-height: 1; margin-bottom: 16px; letter-spacing: -2px;
        }
        .ar-invest-price em { color: var(--gold); font-style: italic; font-weight: 400; font-size: 0.55em; vertical-align: top; margin-top: 12px; display: inline-block; }
        .ar-invest-sub { font-size: 12px; color: var(--text-muted); letter-spacing: 2px; text-transform: uppercase; margin-bottom: 48px; }
        .ar-invest-detail {
          display: grid; grid-template-columns: 1fr 1fr; gap: 32px;
          max-width: 680px; margin: 0 auto; padding-top: 32px;
          border-top: 1px solid var(--border); text-align: left;
        }
        .ar-invest-detail h5 { font-size: 10px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: var(--gold); margin-bottom: 12px; }
        .ar-invest-detail p { font-size: 14px; color: var(--text-secondary); line-height: 1.65; font-weight: 300; }

        /* CTA */
        .ar-cta {
          text-align: center; padding: 120px 24px;
          background: radial-gradient(ellipse at 50% 50%, rgba(160,109,66,0.06) 0%, transparent 70%), var(--bg-dark);
        }
        .ar-cta-message { font-family: 'Playfair Display', serif; font-size: 17px; font-weight: 400; font-style: italic; color: var(--text-secondary); max-width: 580px; margin: 0 auto 40px; line-height: 1.65; }
        .ar-cta-button {
          display: inline-flex; align-items: center; gap: 12px;
          padding: 18px 48px; background: var(--gradient-gold); color: var(--bg-dark);
          font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 700;
          letter-spacing: 1.5px; text-transform: uppercase; border: none; border-radius: 100px;
          cursor: pointer; text-decoration: none; transition: transform 0.3s, box-shadow 0.3s;
        }
        .ar-cta-button:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(200,149,108,0.25); }

        /* Footer */
        .ar-footer { text-align: center; padding: 40px 24px; border-top: 1px solid var(--border); font-size: 12px; color: var(--text-muted); letter-spacing: 1px; }

        /* Animações */
        @keyframes arFadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes arFadeDown { from { opacity: 0; transform: translateY(-16px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes arPulseDot { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }

        /* Responsivo */
        @media (max-width: 768px) {
          .ar-about-grid { grid-template-columns: 1fr; }
          .ar-about-grid > div:first-child { max-width: 200px; margin: 0 auto; }
          .ar-stats-grid { grid-template-columns: 1fr 1fr; }
          .ar-mentors-grid { grid-template-columns: repeat(2, 1fr); }
          .ar-anti-grid { grid-template-columns: 1fr; }
          .ar-timeline-row { grid-template-columns: 1fr; gap: 12px; }
          .ar-timeline-num { font-size: 38px; }
          .ar-delivery-item { grid-template-columns: 1fr; gap: 12px; padding: 28px 24px; }
          .ar-invest-box { padding: 48px 24px; }
          .ar-invest-detail { grid-template-columns: 1fr; gap: 24px; }
          .ar-hero-meta { gap: 16px; }
        }
      `}</style>

      <div className="ar-page">

        {/* ========== HERO ========== */}
        <div className="ar-hero">
          <div className="ar-hero-badge">
            <span className="ar-dot" />
            Proposta Comercial
          </div>

          <div
            className="ar-client-logo"
            ref={(el) => {
              if (el) {
                const img = el.querySelector("img");
                if (img) img.onerror = () => { el.style.display = "none"; };
              }
            }}
          >
            <img
              src="/instituto-areluna-logo.png"
              alt="Instituto Areluna"
              style={{ height: 56, width: "auto" }}
            />
          </div>

          <h1 className="ar-hero-title">
            Proposta comercial
            <br />
            <em>Areluna</em>
          </h1>

          <p className="ar-hero-desc">
            Implementação de camada de inteligência comercial sobre a operação atual da Areluna — análise automatizada de pré-venda e fechamento, dashboard de aderência ao método e ciclo de revisão semanal.
          </p>

          <div className="ar-hero-meta">
            <span className="ar-hero-meta-item">
              <span className="ar-hero-meta-dot" />
              Proponente: Rodrigo Albuquerque
            </span>
            <span className="ar-hero-meta-item">
              <span className="ar-hero-meta-dot" />
              Cliente: Instituto Areluna
            </span>
            <span className="ar-hero-meta-item">
              <span className="ar-hero-meta-dot" />
              BA Consultoria · 2026
            </span>
          </div>
        </div>

        <div className="ar-divider" />

        {/* ========== SOBRE ========== */}
        <section style={{ padding: "100px 24px" }}>
          <div className="ar-container">
            <p className="ar-section-label">Sobre</p>
            <h2 className="ar-section-title">Quem está por trás <em>desta proposta</em></h2>

            <div className="ar-about-grid">
              <div className="ar-about-photo">
                <img loading="lazy" src={rodrigoPhoto} alt="Rodrigo Albuquerque" />
              </div>
              <div>
                <p className="ar-about-text">
                  Rodrigo Albuquerque liderou <strong style={{ color: "#f0ebe3", fontWeight: 500 }}>R$80 milhões em vendas anuais</strong> antes de fundar a BA Consultoria, onde compilou o aprendizado de mais de 100 empresas atendidas. A BA opera nas quatro frentes que sustentam crescimento de receita: consultoria estratégica, execução de marketing, automação com IA e inteligência comercial.
                </p>
                <div className="ar-stats-grid">
                  {stats.map((s) => (
                    <div key={s.num} className="ar-stat-card">
                      <div className="ar-stat-num">{s.num}</div>
                      <div className="ar-stat-label">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="ar-divider" />

        {/* ========== REFERÊNCIAS ========== */}
        <section style={{ padding: "100px 24px", background: "var(--bg-section)" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
            <p className="ar-section-label" style={{ display: "block", textAlign: "center" }}>Referências</p>
            <h2 className="ar-section-title" style={{ textAlign: "center" }}>Nossos mentores <em>e professores</em></h2>
            <p className="ar-section-subtitle" style={{ textAlign: "center", margin: "0 auto 48px" }}>
              Aprendemos diretamente com alguns dos maiores líderes do mercado brasileiro.
            </p>
            <div className="ar-mentors-grid">
              {mentors.map((m) => (
                <div key={m.name} className="ar-mentor-card">
                  <div className="ar-mentor-photo">
                    <img loading="lazy" src={m.photo} alt={m.name} />
                  </div>
                  <h3 className="ar-mentor-name">{m.name}</h3>
                  <p className="ar-mentor-role">{m.role}</p>
                  <p className="ar-mentor-bio">{m.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="ar-divider" />

        {/* ========== CONTEXTO ========== */}
        <section style={{ padding: "100px 24px" }}>
          <div className="ar-container">
            <p className="ar-section-label">Contexto</p>
            <h2 className="ar-section-title">Onde a Areluna <em>está hoje</em></h2>

            <div className="ar-context-card">
              <p>
                A operação tem método comercial definido, equipe estruturada e volume de conversa suficiente para gerar leitura. O que não há hoje é <strong>visibilidade do que acontece de fato</strong> nas duas etapas que decidem receita: o atendimento da pré-venda e a reunião de fechamento.
              </p>
              <p>
                A leitura dessas etapas depende de relato do próprio vendedor. Isso significa que a gestão comercial toma decisão com base em versão, não em dado de execução.
              </p>
              <p>
                Como consequência prática: lead qualificado é perdido por falha não identificada, vendedor com performance abaixo do esperado fica sem correção precisa, e o método comercial perde aderência ao longo do tempo sem que isso seja percebido até o resultado mensal aparecer.
              </p>
              <p>
                <span className="ar-context-highlight">Atlas Insight foi desenhado especificamente para essa lacuna.</span>
              </p>
            </div>
          </div>
        </section>

        {/* ========== A ENTREGA ========== */}
        <section style={{ padding: "100px 24px", background: "var(--bg-section)" }}>
          <div className="ar-container">
            <p className="ar-section-label">A Entrega</p>
            <h2 className="ar-section-title">Quatro camadas de visibilidade <em>sobre a operação atual</em></h2>
            <p className="ar-section-subtitle">
              Atlas Insight não é ferramenta genérica de análise de call. É um sistema calibrado no método comercial específico da Areluna.
            </p>

            <div className="ar-delivery-list">
              {deliveryItems.map((item) => (
                <div key={item.idx} className="ar-delivery-item">
                  <div className="ar-delivery-idx">{item.idx}</div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="ar-divider" />

        {/* ========== OBJETIVO ========== */}
        <section style={{ padding: "100px 24px" }}>
          <div className="ar-container">
            <p className="ar-section-label">Objetivo</p>
            <h2 className="ar-section-title">O que este projeto <em>vai resolver</em></h2>
            <p className="ar-section-subtitle">
              Sete frentes cobertas pela implementação, do diagnóstico técnico ao ciclo de revisão semanal.
            </p>

            <div className="ar-obj-list">
              {objectives.map((text, i) => (
                <div key={i} className="ar-obj-row">
                  <div className="ar-obj-num">{String(i + 1).padStart(2, "0")}</div>
                  <div className="ar-obj-text">{text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== ANTI-VENDA ========== */}
        <section style={{ padding: "100px 24px", background: "var(--bg-section)" }}>
          <div className="ar-container">
            <p className="ar-section-label">Para Que Fique Claro</p>
            <h2 className="ar-section-title">O que Atlas Insight <em>não é.</em></h2>
            <p className="ar-section-subtitle">
              A clareza sobre o que o produto não é evita expectativa errada e garante que o resultado final seja o esperado.
            </p>

            <div className="ar-anti-grid">
              {antiCards.map((card) => (
                <div key={card.highlight} className="ar-anti-card">
                  <h4>{card.title} <em>{card.highlight}</em></h4>
                  <p>{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="ar-divider" />

        {/* ========== TIMELINE ========== */}
        <section style={{ padding: "100px 24px" }}>
          <div className="ar-container">
            <p className="ar-section-label">A Implementação</p>
            <h2 className="ar-section-title">Quatro semanas, escopo <em>travado</em></h2>
            <p className="ar-section-subtitle">
              Cronograma fechado, sem extensões e sem evolução de escopo durante a execução. Discovery acontece no início, ajuste fino na calibração.
            </p>

            <div className="ar-timeline">
              {timeline.map((row) => (
                <div key={row.week} className="ar-timeline-row">
                  <div>
                    <span className="ar-timeline-week">Semana</span>
                    <span className="ar-timeline-num">{row.week}</span>
                  </div>
                  <div className="ar-timeline-content">
                    <h3>{row.title}</h3>
                    <p>{row.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== INVESTIMENTO ========== */}
        <section style={{ padding: "100px 24px", background: "var(--bg-section)" }}>
          <div className="ar-container">
            <p className="ar-section-label">Investimento</p>
            <h2 className="ar-section-title">Projeto fechado, escopo <em>travado.</em></h2>

            <div className="ar-invest-box">
              <div className="ar-invest-label">Implementação Completa</div>
              <div className="ar-invest-price">
                <em>R$</em> 12.000
              </div>
              <div className="ar-invest-sub">4 Semanas · Pagamento Único · Suporte 30 Dias</div>

              <div className="ar-invest-detail">
                <div>
                  <h5>Inclui</h5>
                  <p>Implementação completa, codificação do método, integração com as fontes de áudio, calibração, treinamento operacional da equipe e 30 dias de suporte pós-go-live para ajuste fino de critérios.</p>
                </div>
                <div>
                  <h5>Não inclui</h5>
                  <p>Dispositivos de captura de áudio das reuniões presenciais. Recomendação técnica é fornecida durante a implementação — aquisição é por conta do cliente.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== CTA ========== */}
        <div className="ar-cta">
          <p className="ar-section-label">Próximo Passo</p>
          <h2 className="ar-section-title" style={{ maxWidth: 700, margin: "0 auto 24px" }}>
            Alinhar implementação <em>e cronograma</em>
          </h2>
          <p className="ar-cta-message">
            Próximo passo é uma reunião de 30 minutos para revisar a proposta, ajustar pontos específicos da operação da Areluna e definir data de início.
          </p>
          <a
            href="https://wa.me/5511999718595"
            target="_blank"
            rel="noopener noreferrer"
            className="ar-cta-button"
          >
            Agendar Reunião →
          </a>
        </div>

        {/* ========== FOOTER ========== */}
        <div className="ar-footer">
          BA Consultoria © 2026 — Proposta válida por 7 dias · Proposta confidencial
        </div>

      </div>
    </>
  );
};

export default PropostaInstitutoAreluna;
