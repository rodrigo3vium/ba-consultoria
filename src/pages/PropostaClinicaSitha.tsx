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

const PropostaClinicaSitha = () => {
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

        .sit-page {
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
        .sit-container { max-width: 900px; margin: 0 auto; padding: 0 24px; }
        .sit-section-label { display: inline-block; font-size: 12px; font-weight: 600; letter-spacing: 3px; text-transform: uppercase; color: var(--gold); margin-bottom: 16px; }
        .sit-section-title { font-family: 'Playfair Display', serif; font-size: clamp(1.8rem, 4vw, 2.6rem); font-weight: 600; line-height: 1.25; margin-bottom: 20px; }
        .sit-section-subtitle { font-size: 16px; color: var(--text-secondary); max-width: 700px; font-weight: 300; }
        .sit-divider { width: 60px; height: 1px; background: var(--gradient-gold); margin: 0 auto; }

        /* ── Hero ── */
        .sit-hero {
          min-height: 100vh;
          display: flex; flex-direction: column; justify-content: center; align-items: center;
          text-align: center; padding: 60px 24px; position: relative;
          background: radial-gradient(ellipse at 30% 20%, rgba(160,109,66,0.08) 0%, transparent 60%),
                      radial-gradient(ellipse at 70% 80%, rgba(107,168,122,0.04) 0%, transparent 50%),
                      var(--bg-dark);
        }
        .sit-hero::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: var(--gradient-gold); opacity: 0.4; }

        .sit-hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 8px 20px; border: 1px solid var(--border); border-radius: 100px;
          font-size: 13px; font-weight: 500; color: var(--gold-light);
          letter-spacing: 2px; text-transform: uppercase; margin-bottom: 40px;
          animation: sit-fadeDown 0.8s ease both;
        }
        .sit-hero-badge .sit-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--gold); animation: sit-pulse-dot 2s infinite; }

        .sit-hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.4rem, 5vw, 4.2rem); font-weight: 700;
          line-height: 1.15; margin-bottom: 24px;
          animation: sit-fadeUp 0.8s 0.2s ease both;
        }
        .sit-hero-title .sit-gold { background: var(--gradient-gold); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }

        .sit-hero-desc {
          font-size: 18px; color: var(--text-secondary); max-width: 640px;
          margin-bottom: 48px; font-weight: 300;
          animation: sit-fadeUp 0.8s 0.4s ease both;
        }
        .sit-hero-desc strong { color: var(--text-primary); font-weight: 500; }

        .sit-hero-meta {
          display: flex; gap: 32px; font-size: 13px; color: var(--text-muted);
          animation: sit-fadeUp 0.8s 0.6s ease both; flex-wrap: wrap; justify-content: center;
        }
        .sit-hero-meta-item { display: flex; align-items: center; gap: 6px; }
        .sit-hero-meta-dot { width: 4px; height: 4px; border-radius: 50%; background: var(--gold); }

        /* ── Sobre ── */
        .sit-about-grid { display: grid; grid-template-columns: 1fr 2fr; gap: 48px; align-items: start; margin-top: 40px; }
        .sit-about-photo { width: 100%; aspect-ratio: 1; border-radius: 20px; overflow: hidden; border: 1px solid var(--border); }
        .sit-about-photo img { width: 100%; height: 100%; object-fit: cover; }
        .sit-about-text { color: var(--text-secondary); font-size: 16px; font-weight: 300; margin-bottom: 16px; }
        .sit-stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 24px; }
        .sit-stat-card { padding: 16px; background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px; }
        .sit-stat-num { font-family: 'Playfair Display', serif; font-size: 24px; font-weight: 700; color: var(--gold); }
        .sit-stat-label { font-size: 12px; color: var(--text-muted); margin-top: 4px; }

        /* ── Mentores ── */
        .sit-mentors-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px; }
        .sit-mentor-card {
          background: var(--bg-card); border: 1px solid var(--border); border-radius: 16px;
          padding: 20px; text-align: center; transition: border-color 0.3s, transform 0.3s;
        }
        .sit-mentor-card:hover { border-color: var(--border-strong); transform: translateY(-2px); }
        .sit-mentor-photo { width: 80px; height: 80px; border-radius: 50%; overflow: hidden; margin: 0 auto 12px; border: 1px solid rgba(200,149,108,0.2); }
        .sit-mentor-photo img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(30%); }
        .sit-mentor-name { font-family: 'Playfair Display', serif; font-size: 15px; font-weight: 600; color: var(--text-primary); margin-bottom: 4px; }
        .sit-mentor-role { font-size: 12px; font-weight: 600; color: var(--gold); margin-bottom: 8px; }
        .sit-mentor-bio { font-size: 12px; color: var(--text-muted); font-weight: 300; line-height: 1.5; }

        /* ── Contexto ── */
        .sit-context-card {
          margin-top: 40px; padding: 32px; background: var(--bg-card);
          border: 1px solid var(--border); border-left: 3px solid var(--gold);
          border-radius: 0 16px 16px 0;
        }
        .sit-context-card p { font-size: 15px; color: var(--text-secondary); font-weight: 300; line-height: 1.7; }
        .sit-context-card p + p { margin-top: 12px; }
        .sit-context-highlight { color: var(--gold-light); font-weight: 500; font-style: italic; }

        /* ── Diagnóstico ── */
        .sit-diag-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 48px; }
        .sit-diag-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 16px; padding: 32px; }
        .sit-diag-header { display: flex; align-items: center; gap: 10px; margin-bottom: 20px; font-size: 14px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; }
        .sit-diag-header.sit-green { color: var(--accent-green); }
        .sit-diag-header.sit-red { color: var(--accent-red); }
        .sit-diag-icon { width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 14px; }
        .sit-diag-icon.sit-green { background: rgba(107,168,122,0.12); }
        .sit-diag-icon.sit-red { background: rgba(168,107,107,0.12); }
        .sit-diag-list { list-style: none; display: flex; flex-direction: column; gap: 10px; padding: 0; }
        .sit-diag-list li { font-size: 14px; color: var(--text-secondary); font-weight: 300; padding-left: 20px; position: relative; line-height: 1.55; }
        .sit-diag-list.sit-green li::before { content: '✦'; position: absolute; left: 0; top: 1px; color: var(--accent-green); font-size: 9px; }
        .sit-diag-list.sit-red li::before { content: '▪'; position: absolute; left: 0; top: 2px; color: var(--accent-red); font-size: 10px; }

        /* ── Objetivos ── */
        .sit-obj-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 16px; margin-top: 40px; }
        .sit-obj-card {
          background: var(--bg-card); border: 1px solid var(--border); border-radius: 14px;
          padding: 24px; transition: border-color 0.3s, transform 0.3s;
        }
        .sit-obj-card:hover { border-color: var(--border-strong); transform: translateY(-2px); }
        .sit-obj-num { font-family: 'Playfair Display', serif; font-size: 28px; font-weight: 700; color: var(--gold); margin-bottom: 8px; }
        .sit-obj-text { font-size: 14px; color: var(--text-secondary); font-weight: 300; line-height: 1.55; }

        /* ── Como funciona (valor) ── */
        .sit-value-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 48px; }
        .sit-value-card {
          background: var(--bg-card); border: 1px solid var(--border); border-radius: 16px;
          padding: 32px; transition: border-color 0.3s, transform 0.3s;
        }
        .sit-value-card:hover { border-color: var(--border-strong); transform: translateY(-2px); }
        .sit-value-icon { width: 44px; height: 44px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 18px; background: rgba(200,149,108,0.1); margin-bottom: 18px; }
        .sit-value-title { font-family: 'Playfair Display', serif; font-size: 18px; font-weight: 600; color: var(--text-primary); margin-bottom: 10px; line-height: 1.3; }
        .sit-value-text { font-size: 14px; color: var(--text-secondary); font-weight: 300; line-height: 1.6; }

        /* ── Investimento ── */
        .sit-pricing-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 48px; }
        .sit-pricing-card {
          background: var(--bg-card); border: 1px solid var(--border); border-radius: 20px;
          padding: 40px 32px; position: relative; overflow: hidden; transition: border-color 0.3s;
        }
        .sit-pricing-card.sit-featured {
          background: linear-gradient(160deg, #1f1a15 0%, var(--bg-card) 100%);
          border-color: var(--gold);
        }
        .sit-pricing-ribbon {
          position: absolute; top: 18px; right: -30px;
          background: var(--gradient-gold); color: var(--bg-dark);
          font-size: 9px; font-weight: 700; letter-spacing: 1.5px;
          padding: 5px 38px; transform: rotate(45deg);
        }
        .sit-pricing-label { font-size: 12px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: var(--gold); margin-bottom: 12px; }
        .sit-pricing-name { font-family: 'Playfair Display', serif; font-size: 22px; font-weight: 600; margin-bottom: 8px; }
        .sit-pricing-desc { font-size: 14px; color: var(--text-muted); font-weight: 300; margin-bottom: 24px; line-height: 1.55; }
        .sit-pricing-row { display: flex; justify-content: space-between; align-items: baseline; padding: 16px 0; border-bottom: 1px solid var(--border); gap: 16px; }
        .sit-pricing-row-label { font-size: 14px; color: var(--text-secondary); font-weight: 400; }
        .sit-pricing-row-value { font-family: 'Playfair Display', serif; font-size: 20px; font-weight: 700; text-align: right; }
        .sit-pricing-row-value.sit-small { font-size: 16px; font-weight: 500; color: var(--text-secondary); }
        .sit-pricing-deliverables { margin-top: 24px; padding-top: 24px; border-top: 1px solid var(--border); }
        .sit-pricing-deliverables-label { font-size: 11px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: var(--text-muted); margin-bottom: 14px; }
        .sit-pricing-deliverables-list { list-style: none; display: flex; flex-direction: column; gap: 10px; padding: 0; }
        .sit-pricing-deliverables-list li { font-size: 13px; color: var(--text-secondary); font-weight: 300; padding-left: 22px; position: relative; line-height: 1.5; }
        .sit-pricing-deliverables-list li::before { content: '✦'; position: absolute; left: 0; top: 2px; color: var(--gold); font-size: 9px; }

        /* ── Recomendação ── */
        .sit-recommend {
          margin-top: 40px; padding: 28px 32px; background: var(--bg-card);
          border: 1px solid var(--border); border-left: 3px solid var(--gold);
          border-radius: 0 16px 16px 0;
        }
        .sit-recommend p { font-size: 15px; color: var(--text-secondary); font-weight: 300; line-height: 1.7; }
        .sit-recommend strong { color: var(--gold-light); font-weight: 500; }

        /* ── CTA ── */
        .sit-cta {
          text-align: center; padding: 120px 24px;
          background: radial-gradient(ellipse at 50% 50%, rgba(160,109,66,0.06) 0%, transparent 70%), var(--bg-dark);
        }
        .sit-cta-message { font-family: 'Playfair Display', serif; font-size: 18px; font-weight: 400; font-style: italic; color: var(--text-secondary); max-width: 600px; margin: 0 auto 40px; line-height: 1.6; }
        .sit-cta-button {
          display: inline-flex; align-items: center; gap: 12px;
          padding: 18px 48px; background: var(--gradient-gold); color: var(--bg-dark);
          font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 700;
          letter-spacing: 1px; text-transform: uppercase; border: none; border-radius: 100px;
          cursor: pointer; text-decoration: none; transition: transform 0.3s, box-shadow 0.3s;
        }
        .sit-cta-button:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(200,149,108,0.25); }

        /* ── Footer ── */
        .sit-footer { text-align: center; padding: 40px 24px; border-top: 1px solid var(--border); font-size: 13px; color: var(--text-muted); }

        /* ── Animações ── */
        @keyframes sit-fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes sit-fadeDown { from { opacity: 0; transform: translateY(-16px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes sit-pulse-dot { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }

        /* ── Responsivo ── */
        @media (max-width: 768px) {
          .sit-about-grid { grid-template-columns: 1fr !important; }
          .sit-about-grid > div:first-child { max-width: 200px; margin: 0 auto; }
          .sit-diag-grid { grid-template-columns: 1fr !important; }
          .sit-value-grid { grid-template-columns: 1fr !important; }
          .sit-pricing-grid { grid-template-columns: 1fr !important; }
          .sit-stats-grid { grid-template-columns: 1fr 1fr !important; }
          .sit-mentors-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

      <div className="sit-page">

        {/* ========== HERO ========== */}
        <div className="sit-hero">
          <div className="sit-hero-badge">
            <span className="sit-dot" />
            Proposta Exclusiva
          </div>

          <h1 className="sit-hero-title">
            Inteligência comercial para a
            <br />
            <span className="sit-gold">Clínica Sitha</span>
          </h1>

          <p className="sit-hero-desc">
            A clínica não tem problema de demanda — tem perda no meio do funil. Leads que
            esfriam no WhatsApp, no-shows que viram cadeira vazia e follow-ups que dependem
            de alguém lembrar. Esta proposta estrutura isso em <strong>dois níveis</strong>.
          </p>

          <div className="sit-hero-meta">
            <span className="sit-hero-meta-item">
              <span className="sit-hero-meta-dot" />
              Proponente: Rodrigo Albuquerque
            </span>
            <span className="sit-hero-meta-item">
              <span className="sit-hero-meta-dot" />
              Cliente: Clínica Sitha
            </span>
            <span className="sit-hero-meta-item">
              <span className="sit-hero-meta-dot" />
              BA Consultoria
            </span>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="sit-divider" />

        {/* ========== SOBRE (FIXO) ========== */}
        <section style={{ padding: "100px 24px", maxWidth: "900px", margin: "0 auto" }}>
          <p className="sit-section-label">Sobre</p>
          <h2 className="sit-section-title">Quem está por trás desta proposta</h2>

          <div className="sit-about-grid">
            <div className="sit-about-photo">
              <img loading="lazy" src={rodrigoPhoto} alt="Rodrigo Albuquerque" />
            </div>
            <div>
              <p className="sit-about-text">
                Rodrigo Albuquerque investiu meio milhão de reais em mentoria com alguns dos maiores empreendedores do Brasil. Liderou R$ milhões em vendas anuais e compilou na BA Consultoria o aprendizado extraído de mais de 100 empresas que receberam consultoria.
              </p>
              <p className="sit-about-text">
                A BA Consultoria une consultoria estratégica, execução de marketing, automação com IA e inteligência comercial — tudo focado em gerar retorno financeiro real e escalável.
              </p>
              <div className="sit-stats-grid">
                {stats.map((s) => (
                  <div key={s.num} className="sit-stat-card">
                    <div className="sit-stat-num">{s.num}</div>
                    <div className="sit-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DIVIDER */}
        <div className="sit-divider" />

        {/* ========== MENTORES (FIXO) ========== */}
        <section style={{ padding: "100px 24px", maxWidth: "1100px", margin: "0 auto" }}>
          <p className="sit-section-label" style={{ textAlign: "center" }}>Referências</p>
          <h2 className="sit-section-title" style={{ textAlign: "center" }}>Nossos Mentores e Professores</h2>
          <p className="sit-section-subtitle" style={{ textAlign: "center", margin: "0 auto 48px" }}>
            Aprendemos diretamente com alguns dos maiores líderes do mercado brasileiro.
          </p>

          <div className="sit-mentors-grid">
            {mentors.map((m) => (
              <div key={m.name} className="sit-mentor-card">
                <div className="sit-mentor-photo">
                  <img loading="lazy" src={m.photo} alt={m.name} />
                </div>
                <h3 className="sit-mentor-name">{m.name}</h3>
                <p className="sit-mentor-role">{m.role}</p>
                <p className="sit-mentor-bio">{m.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* DIVIDER */}
        <div className="sit-divider" />

        {/* ========== CONTEXTO (DINÂMICO) ========== */}
        <section style={{ padding: "100px 24px", maxWidth: "900px", margin: "0 auto" }}>
          <p className="sit-section-label">Contexto</p>
          <h2 className="sit-section-title">Onde a Clínica Sitha está hoje</h2>
          <p className="sit-section-subtitle">
            O tráfego traz o lead e a clínica tem demanda. O que falta é estrutura para não
            perder o que já chega.
          </p>

          <div className="sit-context-card">
            <p>
              O conhecimento que faz a clínica funcionar — protocolos, decisões, histórico de
              casos, o jeito Sitha de conduzir cada tratamento — vive espalhado na cabeça das
              pessoas: da Dra. Thais, da nutri, de quem está no WhatsApp naquele dia. Em paralelo,
              cada negociação acontece numa conversa que ninguém volta a ler, e as decisões
              comerciais acabam tomadas sem visibilidade do que de fato travou.
            </p>
            <p>
              O gargalo agora não é demanda — é{" "}
              <span className="sit-context-highlight">conhecimento disperso e lead que esfria sem acompanhamento.</span>{" "}
              O paciente pergunta o preço e some, marca e não aparece, diz "vou pensar" e não é
              retomado — e no fim do mês a agenda poderia ter sido maior.
            </p>
          </div>
        </section>

        {/* ========== DIAGNÓSTICO (DINÂMICO) ========== */}
        <div style={{ background: "var(--bg-section)", padding: "100px 24px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p className="sit-section-label">Diagnóstico</p>
            <h2 className="sit-section-title">O que mapeamos na nossa conversa</h2>
            <p className="sit-section-subtitle">A base é forte. O retorno está em fechar as frestas por onde o paciente escapa.</p>

            <div className="sit-diag-grid">
              {/* Pontos Fortes */}
              <div className="sit-diag-card">
                <div className="sit-diag-header sit-green">
                  <span className="sit-diag-icon sit-green">✦</span>
                  Pontos Fortes
                </div>
                <ul className="sit-diag-list sit-green">
                  {[
                    "Demanda saudável: o tráfego já traz leads de forma consistente.",
                    "Um jeito Sitha de conduzir os tratamentos que comprovadamente converte e fideliza.",
                    "Base de pacientes e histórico de casos acumulados ao longo dos anos.",
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Gargalos */}
              <div className="sit-diag-card">
                <div className="sit-diag-header sit-red">
                  <span className="sit-diag-icon sit-red">▪</span>
                  Gargalos Atuais
                </div>
                <ul className="sit-diag-list sit-red">
                  {[
                    "O conhecimento depende da memória de cada pessoa — quem sai da equipe leva junto, quem entra demora meses.",
                    "Leads esfriam no WhatsApp sem follow-up e no-shows viram cadeira vazia.",
                    "Falta visibilidade de onde cada negociação trava — a resposta fica enterrada nas conversas.",
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="sit-divider" />

        {/* ========== OBJETIVOS (DINÂMICO) ========== */}
        <section style={{ padding: "100px 24px", maxWidth: "900px", margin: "0 auto" }}>
          <p className="sit-section-label">Objetivo</p>
          <h2 className="sit-section-title">O que este projeto vai resolver</h2>
          <p className="sit-section-subtitle">Transformar o conhecimento e o tráfego que já existem em agenda cheia.</p>

          <div className="sit-obj-grid">
            {[
              { num: "01", text: "Centralizar o conhecimento da clínica num cérebro único e consultável, que deixa de depender da memória de cada pessoa." },
              { num: "02", text: "Identificar onde cada negociação é perdida e transformar cada venda que escapou em correção." },
              { num: "03", text: "Garantir que nenhum lead morno, no-show ou paciente inativo esfrie sem o toque certo na hora certa." },
            ].map((obj) => (
              <div key={obj.num} className="sit-obj-card">
                <div className="sit-obj-num">{obj.num}</div>
                <p className="sit-obj-text">{obj.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ========== COMO FUNCIONA / VALOR (DINÂMICO) ========== */}
        <div style={{ background: "var(--bg-section)", padding: "100px 24px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <p className="sit-section-label">Como funciona</p>
            <h2 className="sit-section-title">O que o Agente de IA faz todos os dias</h2>
            <p className="sit-section-subtitle">
              Sobre a fundação do Segundo Cérebro (Opção A), o Agente de IA (Opção B) trabalha o
              comercial sem depender de ninguém lembrar de fazer. Três frentes:
            </p>

            <div className="sit-value-grid">
              {[
                {
                  icon: "🔎",
                  title: "Mostra onde o dinheiro escapou",
                  text: "O agente lê cada conversa de WhatsApp e cada call de venda e aponta o ponto exato em que o paciente foi perdido: a objeção não tratada, o preço cedo demais, o \"vou pensar\" largado. Cada venda perdida vira correção, não mistério.",
                },
                {
                  icon: "⭐",
                  title: "Faz o melhor atendimento virar padrão",
                  text: "Como conversa com o Segundo Cérebro, o agente orienta com a clínica inteira por trás. O jeito Sitha deixa de ser talento individual e vira padrão da casa — a atendente nova passa a vender no nível da melhor da equipe.",
                },
                {
                  icon: "🔁",
                  title: "Não deixa nenhum lead esfriar sozinho",
                  text: "O \"vou pensar\" recebe o follow-up certo na hora certa. O no-show é resgatado antes de virar cadeira vazia. O paciente que sumiu há meses volta para a pauta. Lead que você já pagou para trazer deixa de morrer no esquecimento.",
                },
              ].map((v) => (
                <div key={v.title} className="sit-value-card">
                  <div className="sit-value-icon">{v.icon}</div>
                  <h3 className="sit-value-title">{v.title}</h3>
                  <p className="sit-value-text">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="sit-divider" />

        {/* ========== INVESTIMENTO (DINÂMICO) ========== */}
        <div style={{ background: "var(--bg-section)", padding: "100px 24px" }}>
          <div style={{ maxWidth: "960px", margin: "0 auto" }}>
            <p className="sit-section-label">Investimento</p>
            <h2 className="sit-section-title">Proposta comercial</h2>
            <p className="sit-section-subtitle">
              Dois níveis. A Opção A é a fundação que guarda e responde; a Opção B coloca a
              fundação para agir todos os dias no comercial.
            </p>

            <div className="sit-pricing-grid">
              {/* Opção A — Segundo Cérebro */}
              <div className="sit-pricing-card">
                <div className="sit-pricing-label">Opção A</div>
                <h3 className="sit-pricing-name">Segundo Cérebro</h3>
                <p className="sit-pricing-desc">
                  O conhecimento da clínica deixa de morar na cabeça das pessoas e vira a memória
                  viva da casa — consultável em linguagem natural.
                </p>

                {[
                  { label: "Implementação", value: "R$ 9.500", small: false },
                  { label: "Sustentação mensal", value: "R$ 997/mês", small: true },
                  { label: "Escopo", value: "Guarda e responde", small: true },
                ].map((row) => (
                  <div key={row.label} className="sit-pricing-row">
                    <span className="sit-pricing-row-label">{row.label}</span>
                    <span className={`sit-pricing-row-value ${row.small ? "sit-small" : ""}`}>{row.value}</span>
                  </div>
                ))}

                <div className="sit-pricing-deliverables">
                  <div className="sit-pricing-deliverables-label">Entregáveis</div>
                  <ul className="sit-pricing-deliverables-list">
                    {[
                      "Base de protocolos, processos e histórico organizada num cérebro único e consultável",
                      "Consulta em linguagem natural, direto no WhatsApp ou painel",
                      "Ingestão contínua: cada decisão e caso novo alimenta a base automaticamente",
                    ].map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Opção B — Featured */}
              <div className="sit-pricing-card sit-featured">
                <div className="sit-pricing-ribbon">RECOMENDADO</div>
                <div className="sit-pricing-label">Opção B</div>
                <h3 className="sit-pricing-name">Segundo Cérebro + Agente de IA</h3>
                <p className="sit-pricing-desc">
                  Tudo da Opção A — e sobre essa base um Agente de IA que trabalha o comercial
                  todos os dias. A clínica deixa de ter memória e passa a ter visão. E a visão age.
                </p>

                {[
                  { label: "Implementação", value: "R$ 24.000", small: false },
                  { label: "Parcelamento", value: "ou 2x R$ 12.000", small: true },
                  { label: "Operação mensal", value: "R$ 2.500/mês", small: true },
                ].map((row) => (
                  <div key={row.label} className="sit-pricing-row">
                    <span className="sit-pricing-row-label">{row.label}</span>
                    <span className={`sit-pricing-row-value ${row.small ? "sit-small" : ""}`}>{row.value}</span>
                  </div>
                ))}

                <div className="sit-pricing-deliverables">
                  <div className="sit-pricing-deliverables-label">Entregáveis</div>
                  <ul className="sit-pricing-deliverables-list">
                    {[
                      "Todo o Segundo Cérebro da Opção A",
                      "Análise automática de WhatsApp e calls de venda, com diagnóstico do que travou cada negociação",
                      "Follow-up inteligente de leads frios, no-shows e pacientes inativos",
                      "Padronização do atendimento puxada do que já funciona na clínica",
                      "Relatório comercial: onde está vazando e quanto",
                    ].map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="sit-recommend">
              <p>
                <strong>A recomendação é honesta.</strong> A Opção A é uma fundação sólida — mas
                memória sem ação rende pouco. O retorno mora na Opção B: é onde o conhecimento da
                clínica vira paciente fechado, atendimento padronizado e lead que para de morrer no
                esquecimento. Recuperar 2 ou 3 pacientes por mês que hoje escorrem já paga a
                estrutura inteira — e ela trabalha todo dia, sem depender de você.
              </p>
            </div>
          </div>
        </div>

        {/* ========== CTA ========== */}
        <div className="sit-cta">
          <p className="sit-section-label">Próximo passo</p>
          <h2 className="sit-section-title">Vamos começar?</h2>
          <p className="sit-cta-message">
            A pergunta não é se a Sitha pode investir nisso. É quanto a operação ganha ao parar de
            perder o que já é seu.
          </p>
          <a
            href="https://wa.me/5511999718595"
            target="_blank"
            rel="noopener noreferrer"
            className="sit-cta-button"
          >
            Falar com Rodrigo →
          </a>
        </div>

        {/* FOOTER */}
        <div className="sit-footer">
          BA Consultoria © 2026 — Proposta válida por 7 dias
        </div>
      </div>
    </>
  );
};

export default PropostaClinicaSitha;
