import { useEffect } from "react";
import rodrigoPhoto from "@/assets/founders/rodrigo-albuquerque.webp";
import diegoBarretoPhoto from "@/assets/mentors/diego-barreto.webp";
import pedroSommaPhoto from "@/assets/mentors/pedro-somma.webp";
import vaboPhoto from "@/assets/mentors/vabo.webp";
import joaoOliverioPhoto from "@/assets/mentors/joao-oliverio.webp";
import joseDiogoPhoto from "@/assets/mentors/jose-diogo.webp";

/* ── Dados fixos ───────────────────────────────────────────── */

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

/* ── Componente ────────────────────────────────────────────── */

const PropostaTreevium = () => {
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
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        .trv-page {
          --bg-dark: #0a0a0a;
          --bg-section: #111111;
          --bg-card: #1a1a1a;
          --gold: #c8956c;
          --gold-light: #e0b893;
          --gold-dark: #a06d42;
          --text-primary: #f0ebe3;
          --text-secondary: #9a9590;
          --text-muted: #6b6560;
          --accent-green: #6ba87a;
          --accent-red: #a86b6b;
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

        /* ── Utilitários ── */
        .trv-container { max-width: 900px; margin: 0 auto; padding: 0 24px; }
        .trv-section-label { display: inline-block; font-size: 12px; font-weight: 600; letter-spacing: 3px; text-transform: uppercase; color: var(--gold); margin-bottom: 16px; }
        .trv-section-title { font-family: 'Playfair Display', serif; font-size: clamp(1.8rem, 4vw, 2.6rem); font-weight: 600; line-height: 1.25; margin-bottom: 20px; }
        .trv-section-subtitle { font-size: 16px; color: var(--text-secondary); max-width: 700px; font-weight: 300; }
        .trv-divider { width: 60px; height: 1px; background: var(--gradient-gold); margin: 0 auto; }

        /* ── Hero ── */
        .trv-hero {
          min-height: 100vh;
          display: flex; flex-direction: column; justify-content: center; align-items: center;
          text-align: center; padding: 60px 24px; position: relative;
          background: radial-gradient(ellipse at 30% 20%, rgba(160,109,66,0.08) 0%, transparent 60%),
                      radial-gradient(ellipse at 70% 80%, rgba(107,168,122,0.04) 0%, transparent 50%),
                      var(--bg-dark);
        }
        .trv-hero::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: var(--gradient-gold); opacity: 0.4; }

        .trv-hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 8px 20px; border: 1px solid var(--border); border-radius: 100px;
          font-size: 13px; font-weight: 500; color: var(--gold-light);
          letter-spacing: 2px; text-transform: uppercase; margin-bottom: 40px;
          animation: trv-fadeDown 0.8s ease both;
        }
        .trv-hero-badge .trv-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--gold); animation: trv-pulse-dot 2s infinite; }

        .trv-hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.6rem, 5.5vw, 4.6rem); font-weight: 700;
          line-height: 1.15; margin-bottom: 24px; max-width: 15ch;
          animation: trv-fadeUp 0.8s 0.2s ease both;
        }
        .trv-hero-title .trv-gold { background: var(--gradient-gold); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; font-style: italic; }

        .trv-hero-desc {
          font-size: 18px; color: var(--text-secondary); max-width: 620px;
          margin-bottom: 48px; font-weight: 300;
          animation: trv-fadeUp 0.8s 0.4s ease both;
        }
        .trv-hero-desc strong { color: var(--text-primary); font-weight: 500; }

        .trv-hero-meta {
          display: flex; gap: 32px; font-size: 13px; color: var(--text-muted);
          animation: trv-fadeUp 0.8s 0.6s ease both; flex-wrap: wrap; justify-content: center;
        }
        .trv-hero-meta-item { display: flex; align-items: center; gap: 6px; }
        .trv-hero-meta-dot { width: 4px; height: 4px; border-radius: 50%; background: var(--gold); }

        /* ── Sobre ── */
        .trv-about-grid { display: grid; grid-template-columns: 1fr 2fr; gap: 48px; align-items: start; margin-top: 40px; }
        .trv-about-photo { width: 100%; aspect-ratio: 1; border-radius: 20px; overflow: hidden; border: 1px solid var(--border); }
        .trv-about-photo img { width: 100%; height: 100%; object-fit: cover; }
        .trv-about-text { color: var(--text-secondary); font-size: 16px; font-weight: 300; margin-bottom: 16px; }
        .trv-stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 24px; }
        .trv-stat-card { padding: 16px; background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px; }
        .trv-stat-num { font-family: 'Playfair Display', serif; font-size: 24px; font-weight: 700; color: var(--gold); }
        .trv-stat-label { font-size: 12px; color: var(--text-muted); margin-top: 4px; }

        /* ── Mentores ── */
        .trv-mentors-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px; }
        .trv-mentor-card {
          background: var(--bg-card); border: 1px solid var(--border); border-radius: 16px;
          padding: 20px; text-align: center; transition: border-color 0.3s, transform 0.3s;
        }
        .trv-mentor-card:hover { border-color: var(--border-strong); transform: translateY(-2px); }
        .trv-mentor-photo { width: 80px; height: 80px; border-radius: 50%; overflow: hidden; margin: 0 auto 12px; border: 1px solid rgba(200,149,108,0.2); }
        .trv-mentor-photo img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(30%); }
        .trv-mentor-name { font-family: 'Playfair Display', serif; font-size: 15px; font-weight: 600; color: var(--text-primary); margin-bottom: 4px; }
        .trv-mentor-role { font-size: 12px; font-weight: 600; color: var(--gold); margin-bottom: 8px; }
        .trv-mentor-bio { font-size: 12px; color: var(--text-muted); font-weight: 300; line-height: 1.5; }

        /* ── Contexto ── */
        .trv-context-card {
          margin-top: 40px; padding: 32px; background: var(--bg-card);
          border: 1px solid var(--border); border-left: 3px solid var(--gold);
          border-radius: 0 16px 16px 0;
        }
        .trv-context-card p { font-size: 15px; color: var(--text-secondary); font-weight: 300; line-height: 1.7; }
        .trv-context-card p + p { margin-top: 12px; }
        .trv-context-highlight { color: var(--gold-light); font-weight: 500; font-style: italic; }

        /* ── Diagnóstico ── */
        .trv-diag-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 48px; }
        .trv-diag-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 16px; padding: 32px; }
        .trv-diag-header { display: flex; align-items: center; gap: 10px; margin-bottom: 20px; font-size: 14px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; }
        .trv-diag-header.trv-green { color: var(--accent-green); }
        .trv-diag-header.trv-red { color: var(--accent-red); }
        .trv-diag-icon { width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 14px; }
        .trv-diag-icon.trv-green { background: rgba(107,168,122,0.12); }
        .trv-diag-icon.trv-red { background: rgba(168,107,107,0.12); }
        .trv-diag-list { list-style: none; display: flex; flex-direction: column; gap: 10px; padding: 0; }
        .trv-diag-list li { font-size: 14px; color: var(--text-secondary); font-weight: 300; padding-left: 20px; position: relative; line-height: 1.55; }
        .trv-diag-list.trv-green li::before { content: '✦'; position: absolute; left: 0; top: 1px; color: var(--accent-green); font-size: 9px; }
        .trv-diag-list.trv-red li::before { content: '▪'; position: absolute; left: 0; top: 2px; color: var(--accent-red); font-size: 10px; }

        /* ── Objetivos ── */
        .trv-obj-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 16px; margin-top: 40px; }
        .trv-obj-card {
          background: var(--bg-card); border: 1px solid var(--border); border-radius: 14px;
          padding: 24px; transition: border-color 0.3s, transform 0.3s;
        }
        .trv-obj-card:hover { border-color: var(--border-strong); transform: translateY(-2px); }
        .trv-obj-num { font-family: 'Playfair Display', serif; font-size: 28px; font-weight: 700; color: var(--gold); margin-bottom: 8px; }
        .trv-obj-text { font-size: 14px; color: var(--text-secondary); font-weight: 300; line-height: 1.55; }

        /* ── Timeline ── */
        .trv-steps { display: grid; gap: 0; margin-top: 40px; }
        .trv-step { display: grid; grid-template-columns: auto 1fr; gap: 28px; padding: 28px 0; border-top: 1px solid var(--border); }
        .trv-step:first-child { border-top: none; }
        .trv-step-num { font-family: 'Playfair Display', serif; font-size: 2.4rem; line-height: 1; font-weight: 600; color: transparent; -webkit-text-stroke: 1px var(--gold); }
        .trv-step-body h3 { font-family: 'Playfair Display', serif; font-size: 1.25rem; font-weight: 600; color: var(--text-primary); }
        .trv-step-body p { margin-top: 6px; font-size: 14px; color: var(--text-secondary); font-weight: 300; line-height: 1.6; }
        .trv-prazo {
          margin-top: 32px; display: inline-flex; align-items: center; gap: 12px;
          border: 1px solid var(--border-strong); border-radius: 100px; padding: 12px 24px;
          font-size: 14px; color: var(--text-secondary);
        }
        .trv-prazo b { color: var(--gold-light); font-weight: 600; }
        .trv-prazo .trv-prazo-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--gold); box-shadow: 0 0 10px var(--gold); }

        /* ── Investimento (preço único) ── */
        .trv-invest-wrap { max-width: 560px; margin: 48px auto 0; }
        .trv-pricing-card {
          background: linear-gradient(160deg, #1f1a15 0%, var(--bg-card) 100%);
          border: 1px solid var(--gold); border-radius: 20px;
          padding: 44px 40px; position: relative; overflow: hidden; text-align: center;
        }
        .trv-pricing-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: var(--gradient-gold); }
        .trv-pricing-label { font-size: 12px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: var(--gold); margin-bottom: 12px; }
        .trv-pricing-name { font-family: 'Playfair Display', serif; font-size: 24px; font-weight: 600; margin-bottom: 10px; }
        .trv-pricing-desc { font-size: 14px; color: var(--text-muted); font-weight: 300; margin-bottom: 28px; line-height: 1.6; }
        .trv-pricing-figure {
          font-family: 'Playfair Display', serif; font-size: clamp(3rem, 9vw, 4.4rem); font-weight: 700; line-height: 1;
          background: var(--gradient-gold); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .trv-pricing-figure-note { font-size: 13px; color: var(--text-secondary); font-weight: 400; margin-top: 10px; }
        .trv-pricing-deliverables { margin-top: 32px; padding-top: 28px; border-top: 1px solid var(--border); text-align: left; }
        .trv-pricing-deliverables-label { font-size: 11px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: var(--text-muted); margin-bottom: 16px; }
        .trv-pricing-deliverables-list { list-style: none; display: flex; flex-direction: column; gap: 12px; padding: 0; }
        .trv-pricing-deliverables-list li { font-size: 14px; color: var(--text-secondary); font-weight: 300; padding-left: 24px; position: relative; line-height: 1.5; }
        .trv-pricing-deliverables-list li::before { content: '✦'; position: absolute; left: 0; top: 2px; color: var(--gold); font-size: 10px; }
        .trv-pricing-deliverables-list li strong { color: var(--text-primary); font-weight: 600; }

        /* ── CTA ── */
        .trv-cta {
          text-align: center; padding: 120px 24px;
          background: radial-gradient(ellipse at 50% 50%, rgba(160,109,66,0.06) 0%, transparent 70%), var(--bg-dark);
        }
        .trv-cta-message { font-family: 'Playfair Display', serif; font-size: 18px; font-weight: 400; font-style: italic; color: var(--text-secondary); max-width: 600px; margin: 0 auto 40px; line-height: 1.6; }
        .trv-cta-button {
          display: inline-flex; align-items: center; gap: 12px;
          padding: 18px 48px; background: var(--gradient-gold); color: var(--bg-dark);
          font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 700;
          letter-spacing: 1px; text-transform: uppercase; border: none; border-radius: 100px;
          cursor: pointer; text-decoration: none; transition: transform 0.3s, box-shadow 0.3s;
        }
        .trv-cta-button:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(200,149,108,0.25); }

        /* ── Footer ── */
        .trv-footer { text-align: center; padding: 40px 24px; border-top: 1px solid var(--border); font-size: 13px; color: var(--text-muted); }

        /* ── Animações ── */
        @keyframes trv-fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes trv-fadeDown { from { opacity: 0; transform: translateY(-16px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes trv-pulse-dot { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }

        /* ── Responsivo ── */
        @media (max-width: 768px) {
          .trv-about-grid { grid-template-columns: 1fr !important; }
          .trv-about-grid > div:first-child { max-width: 200px; margin: 0 auto; }
          .trv-diag-grid { grid-template-columns: 1fr !important; }
          .trv-stats-grid { grid-template-columns: 1fr 1fr !important; }
          .trv-mentors-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .trv-step { grid-template-columns: 1fr !important; gap: 8px; }
        }
      `}</style>

      <div className="trv-page">

        {/* ========== HERO ========== */}
        <div className="trv-hero">
          <div className="trv-hero-badge">
            <span className="trv-dot" />
            Proposta Exclusiva · Julho 2026
          </div>

          <h1 className="trv-hero-title">
            Sua captação de clientes deixa de ser{" "}
            <span className="trv-gold">manual.</span>
          </h1>

          <p className="trv-hero-desc">
            Um site que você edita sozinha e um sistema que captura, qualifica e organiza
            cada interessada até a reunião — o mesmo motor que roda por trás do
            ecossistema do <strong>Studio Sal</strong>.
          </p>

          <div className="trv-hero-meta">
            <span className="trv-hero-meta-item">
              <span className="trv-hero-meta-dot" />
              Proponente: Rodrigo Albuquerque
            </span>
            <span className="trv-hero-meta-item">
              <span className="trv-hero-meta-dot" />
              Preparado para: Daniela · Treevium
            </span>
            <span className="trv-hero-meta-item">
              <span className="trv-hero-meta-dot" />
              BA Consultoria
            </span>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="trv-divider" />

        {/* ========== SOBRE (FIXO) ========== */}
        <section style={{ padding: "100px 24px", maxWidth: "900px", margin: "0 auto" }}>
          <p className="trv-section-label">Sobre</p>
          <h2 className="trv-section-title">Quem está por trás desta proposta</h2>

          <div className="trv-about-grid">
            <div className="trv-about-photo">
              <img loading="lazy" src={rodrigoPhoto} alt="Rodrigo Albuquerque" />
            </div>
            <div>
              <p className="trv-about-text">
                Rodrigo Albuquerque investiu meio milhão de reais em mentoria com alguns
                dos maiores empreendedores do Brasil. Liderou R$80 milhões em vendas anuais
                e compilou na BA Consultoria o aprendizado extraído de mais de 100 empresas
                que receberam consultoria.
              </p>
              <p className="trv-about-text">
                A BA Consultoria une consultoria estratégica, execução de marketing,
                automação com IA e inteligência comercial — tudo focado em gerar retorno
                financeiro real e escalável.
              </p>
              <div className="trv-stats-grid">
                {stats.map((s) => (
                  <div key={s.num} className="trv-stat-card">
                    <div className="trv-stat-num">{s.num}</div>
                    <div className="trv-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DIVIDER */}
        <div className="trv-divider" />

        {/* ========== MENTORES (FIXO) ========== */}
        <section style={{ padding: "100px 24px", maxWidth: "1100px", margin: "0 auto" }}>
          <p className="trv-section-label" style={{ textAlign: "center", display: "block" }}>Referências</p>
          <h2 className="trv-section-title" style={{ textAlign: "center" }}>Nossos Mentores e Professores</h2>
          <p className="trv-section-subtitle" style={{ textAlign: "center", margin: "0 auto 48px" }}>
            Aprendemos diretamente com alguns dos maiores líderes do mercado brasileiro.
          </p>

          <div className="trv-mentors-grid">
            {mentors.map((m) => (
              <div key={m.name} className="trv-mentor-card">
                <div className="trv-mentor-photo">
                  <img loading="lazy" src={m.photo} alt={m.name} />
                </div>
                <h3 className="trv-mentor-name">{m.name}</h3>
                <p className="trv-mentor-role">{m.role}</p>
                <p className="trv-mentor-bio">{m.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* DIVIDER */}
        <div className="trv-divider" />

        {/* ========== CONTEXTO ========== */}
        <section style={{ padding: "100px 24px", maxWidth: "900px", margin: "0 auto" }}>
          <p className="trv-section-label">O ponto de partida</p>
          <h2 className="trv-section-title">Hoje, quase tudo depende de você — na mão.</h2>
          <p className="trv-section-subtitle">
            Um site que resiste às suas mudanças e uma triagem que consome as suas horas.
            A proposta abaixo resolve as duas pontas.
          </p>

          <div className="trv-context-card">
            <p>
              Cada lead é respondido e qualificado por você, uma conversa de cada vez,
              direto no WhatsApp. Não existe um filtro antes de chegar em você: o
              interessado real e o curioso ocupam exatamente o mesmo tempo.
            </p>
            <p>
              E o site trava do outro lado — mudar um texto ou uma imagem vira uma pequena
              obra, e cada proposta nova exige montar uma página quase do zero.
            </p>
            <p>
              O gargalo agora não é falta de interessados — é o{" "}
              <span className="trv-context-highlight">
                tempo que a triagem manual e um site engessado roubam de você, colocando
                um teto no quanto você consegue crescer.
              </span>
            </p>
          </div>
        </section>

        {/* ========== DIAGNÓSTICO ========== */}
        <div style={{ background: "var(--bg-section)", padding: "100px 24px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p className="trv-section-label">Diagnóstico</p>
            <h2 className="trv-section-title">O que mapeamos na nossa conversa</h2>
            <p className="trv-section-subtitle">
              Você já tem a demanda e o atendimento no ponto. O que falta é a estrutura que
              trabalha antes de você e obedece você.
            </p>

            <div className="trv-diag-grid">
              {/* Pontos Fortes */}
              <div className="trv-diag-card">
                <div className="trv-diag-header trv-green">
                  <span className="trv-diag-icon trv-green">✦</span>
                  Pontos Fortes
                </div>
                <ul className="trv-diag-list trv-green">
                  {[
                    "Você já atrai interessados de forma consistente",
                    "Cada lead é atendido pessoalmente, com o cuidado que fideliza",
                    "Marca própria conectada ao ecossistema do Studio Sal",
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Gargalos */}
              <div className="trv-diag-card">
                <div className="trv-diag-header trv-red">
                  <span className="trv-diag-icon trv-red">▪</span>
                  Gargalos Atuais
                </div>
                <ul className="trv-diag-list trv-red">
                  {[
                    "Triagem manual, conversa por conversa, no WhatsApp",
                    "Sem filtro entre o curioso e quem realmente tem perfil",
                    "Site travado: mudar um texto ou imagem vira uma pequena obra",
                    "Cada proposta nova exige montar uma página quase do zero",
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="trv-divider" />

        {/* ========== OBJETIVOS ========== */}
        <section style={{ padding: "100px 24px", maxWidth: "900px", margin: "0 auto" }}>
          <p className="trv-section-label">O que vamos entregar</p>
          <h2 className="trv-section-title">Um ecossistema próprio, em três partes</h2>
          <p className="trv-section-subtitle">
            Um site que obedece você, uma triagem que trabalha antes de você e a autonomia
            para operar tudo sozinha.
          </p>

          <div className="trv-obj-grid">
            {[
              {
                num: "01",
                text: "Um site novo, rápido e focado em converter — que você edita sozinha: textos, imagens e páginas de proposta novas em minutos, sem depender de ninguém.",
              },
              {
                num: "02",
                text: "Um motor de qualificação: um formulário inteligente recebe e filtra cada interessada, e os leads com perfil chegam organizados, prontos pra você abordar no WhatsApp e marcar a reunião.",
              },
              {
                num: "03",
                text: "Treinamento em vídeo, direto ao ponto: você assiste uma vez, consulta sempre que bater dúvida e fica dona da operação de ponta a ponta.",
              },
            ].map((obj) => (
              <div key={obj.num} className="trv-obj-card">
                <div className="trv-obj-num">{obj.num}</div>
                <p className="trv-obj-text">{obj.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ========== CRONOGRAMA ========== */}
        <div style={{ background: "var(--bg-section)", padding: "100px 24px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p className="trv-section-label">Como vamos construir</p>
            <h2 className="trv-section-title">Do aceite ao sistema rodando</h2>

            <div className="trv-steps">
              {[
                {
                  num: "01",
                  title: "Site + painel de edição",
                  desc: "Estruturo o site novo e o painel que te dá autonomia total sobre o conteúdo.",
                },
                {
                  num: "02",
                  title: "Motor de qualificação",
                  desc: "Coloco de pé o formulário, a lógica que qualifica os leads e o encaminhamento organizado pro WhatsApp.",
                },
                {
                  num: "03",
                  title: "Treinamento + entrega",
                  desc: "Ajustes finais, gravação do treinamento e entrega do sistema completo, funcionando.",
                },
              ].map((step) => (
                <div key={step.num} className="trv-step">
                  <div className="trv-step-num">{step.num}</div>
                  <div className="trv-step-body">
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="trv-prazo">
              <span className="trv-prazo-dot" />
              Prazo estimado de entrega:&nbsp; <b>até 3 semanas</b> &nbsp;após o aceite
            </div>
          </div>
        </div>

        {/* ========== INVESTIMENTO ========== */}
        <section style={{ padding: "100px 24px", maxWidth: "900px", margin: "0 auto" }}>
          <p className="trv-section-label" style={{ textAlign: "center", display: "block" }}>Investimento</p>
          <h2 className="trv-section-title" style={{ textAlign: "center" }}>Valor único pelo projeto completo</h2>

          <div className="trv-invest-wrap">
            <div className="trv-pricing-card">
              <div className="trv-pricing-label">Projeto Completo</div>
              <h3 className="trv-pricing-name">Ecossistema Treevium</h3>
              <p className="trv-pricing-desc">
                Site editável, motor de qualificação de leads e treinamento gravado — tudo
                entregue funcionando e sob o seu controle.
              </p>

              <div className="trv-pricing-figure">R$&nbsp;6.000,00</div>
              <div className="trv-pricing-figure-note">Valor único · sem mensalidade</div>

              <div className="trv-pricing-deliverables">
                <div className="trv-pricing-deliverables-label">O que está incluso</div>
                <ul className="trv-pricing-deliverables-list">
                  <li>
                    <strong>Site editável por você</strong> — painel simples pra trocar
                    textos e imagens e montar páginas de proposta em minutos
                  </li>
                  <li>
                    <strong>Motor de qualificação</strong> — formulário inteligente que
                    filtra cada interessada e entrega os leads organizados pro WhatsApp
                  </li>
                  <li>
                    <strong>Treinamento gravado</strong> — passo a passo em vídeo pra você
                    operar tudo sem depender de mim
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ========== CTA ========== */}
        <div className="trv-cta">
          <p className="trv-section-label">Próximo passo</p>
          <h2 className="trv-section-title">É só dar o sinal verde.</h2>
          <p className="trv-cta-message">
            A partir do aceite, alinhamos o kickoff e a construção começa na mesma semana.
            Você acompanha cada etapa e, no fim, recebe tudo rodando e sob o seu controle.
            Vamos construir isso, Daniela.
          </p>
          <a
            href="https://wa.me/5511999718595"
            target="_blank"
            rel="noopener noreferrer"
            className="trv-cta-button"
          >
            Falar com Rodrigo →
          </a>
        </div>

        {/* FOOTER */}
        <div className="trv-footer">
          BA Consultoria © 2026 — Proposta válida por 7 dias
        </div>
      </div>
    </>
  );
};

export default PropostaTreevium;
