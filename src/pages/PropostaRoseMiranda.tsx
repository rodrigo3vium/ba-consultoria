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

const PropostaRoseMiranda = () => {
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

        .rm-page {
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
        .rm-container { max-width: 900px; margin: 0 auto; padding: 0 24px; }
        .rm-section-label { display: inline-block; font-size: 12px; font-weight: 600; letter-spacing: 3px; text-transform: uppercase; color: var(--gold); margin-bottom: 16px; }
        .rm-section-title { font-family: 'Playfair Display', serif; font-size: clamp(1.8rem, 4vw, 2.6rem); font-weight: 600; line-height: 1.25; margin-bottom: 20px; }
        .rm-section-subtitle { font-size: 16px; color: var(--text-secondary); max-width: 700px; font-weight: 300; }
        .rm-divider { width: 60px; height: 1px; background: var(--gradient-gold); margin: 0 auto; }

        /* ── Hero ── */
        .rm-hero {
          min-height: 100vh;
          display: flex; flex-direction: column; justify-content: center; align-items: center;
          text-align: center; padding: 60px 24px; position: relative;
          background: radial-gradient(ellipse at 30% 20%, rgba(160,109,66,0.08) 0%, transparent 60%),
                      radial-gradient(ellipse at 70% 80%, rgba(107,168,122,0.04) 0%, transparent 50%),
                      var(--bg-dark);
        }
        .rm-hero::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: var(--gradient-gold); opacity: 0.4; }

        .rm-hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 8px 20px; border: 1px solid var(--border); border-radius: 100px;
          font-size: 13px; font-weight: 500; color: var(--gold-light);
          letter-spacing: 2px; text-transform: uppercase; margin-bottom: 40px;
          animation: rm-fadeDown 0.8s ease both;
        }
        .rm-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--gold); animation: rm-pulse-dot 2s infinite; }

        .rm-hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.6rem, 5.5vw, 4.6rem); font-weight: 700;
          line-height: 1.15; margin-bottom: 24px;
          animation: rm-fadeUp 0.8s 0.2s ease both;
        }
        .rm-gold { background: var(--gradient-gold); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }

        .rm-hero-desc {
          font-size: 18px; color: var(--text-secondary); max-width: 620px;
          margin-bottom: 48px; font-weight: 300;
          animation: rm-fadeUp 0.8s 0.4s ease both;
        }
        .rm-hero-desc strong { color: var(--text-primary); font-weight: 500; }

        .rm-hero-meta {
          display: flex; gap: 32px; font-size: 13px; color: var(--text-muted);
          animation: rm-fadeUp 0.8s 0.6s ease both; flex-wrap: wrap; justify-content: center;
        }
        .rm-hero-meta-item { display: flex; align-items: center; gap: 6px; }
        .rm-hero-meta-dot { width: 4px; height: 4px; border-radius: 50%; background: var(--gold); }

        /* ── Sobre ── */
        .rm-about-grid { display: grid; grid-template-columns: 1fr 2fr; gap: 48px; align-items: start; margin-top: 40px; }
        .rm-about-photo { width: 100%; aspect-ratio: 1; border-radius: 20px; overflow: hidden; border: 1px solid var(--border); }
        .rm-about-photo img { width: 100%; height: 100%; object-fit: cover; }
        .rm-about-text { color: var(--text-secondary); font-size: 16px; font-weight: 300; margin-bottom: 16px; }
        .rm-stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 24px; }
        .rm-stat-card { padding: 16px; background: var(--bg-card); border: 1px solid var(--border); border-radius: 12px; }
        .rm-stat-num { font-family: 'Playfair Display', serif; font-size: 24px; font-weight: 700; color: var(--gold); }
        .rm-stat-label { font-size: 12px; color: var(--text-muted); margin-top: 4px; }

        /* ── Mentores ── */
        .rm-mentors-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px; }
        .rm-mentor-card {
          background: var(--bg-card); border: 1px solid var(--border); border-radius: 16px;
          padding: 20px; text-align: center; transition: border-color 0.3s, transform 0.3s;
        }
        .rm-mentor-card:hover { border-color: var(--border-strong); transform: translateY(-2px); }
        .rm-mentor-photo { width: 80px; height: 80px; border-radius: 50%; overflow: hidden; margin: 0 auto 12px; border: 1px solid rgba(200,149,108,0.2); }
        .rm-mentor-photo img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(30%); }
        .rm-mentor-name { font-family: 'Playfair Display', serif; font-size: 15px; font-weight: 600; color: var(--text-primary); margin-bottom: 4px; }
        .rm-mentor-role { font-size: 12px; font-weight: 600; color: var(--gold); margin-bottom: 8px; }
        .rm-mentor-bio { font-size: 12px; color: var(--text-muted); font-weight: 300; line-height: 1.5; }

        /* ── Contexto ── */
        .rm-context-card {
          margin-top: 40px; padding: 32px; background: var(--bg-card);
          border: 1px solid var(--border); border-left: 3px solid var(--gold);
          border-radius: 0 16px 16px 0;
        }
        .rm-context-card p { font-size: 15px; color: var(--text-secondary); font-weight: 300; line-height: 1.7; }
        .rm-context-card p + p { margin-top: 12px; }
        .rm-context-highlight { color: var(--gold-light); font-weight: 500; font-style: italic; }

        /* ── Diagnóstico ── */
        .rm-diag-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 48px; }
        .rm-diag-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 16px; padding: 32px; }
        .rm-diag-header { display: flex; align-items: center; gap: 10px; margin-bottom: 20px; font-size: 14px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; }
        .rm-diag-header.rm-green { color: var(--accent-green); }
        .rm-diag-header.rm-red { color: var(--accent-red); }
        .rm-diag-icon { width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 14px; }
        .rm-diag-icon.rm-green { background: rgba(107,168,122,0.12); }
        .rm-diag-icon.rm-red { background: rgba(168,107,107,0.12); }
        .rm-diag-list { list-style: none; display: flex; flex-direction: column; gap: 10px; padding: 0; }
        .rm-diag-list li { font-size: 14px; color: var(--text-secondary); font-weight: 300; padding-left: 20px; position: relative; line-height: 1.55; }
        .rm-diag-list.rm-green li::before { content: '✦'; position: absolute; left: 0; top: 1px; color: var(--accent-green); font-size: 9px; }
        .rm-diag-list.rm-red li::before { content: '▪'; position: absolute; left: 0; top: 2px; color: var(--accent-red); font-size: 10px; }

        /* ── Objetivos ── */
        .rm-obj-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 16px; margin-top: 40px; }
        .rm-obj-card {
          background: var(--bg-card); border: 1px solid var(--border); border-radius: 14px;
          padding: 24px; transition: border-color 0.3s, transform 0.3s;
        }
        .rm-obj-card:hover { border-color: var(--border-strong); transform: translateY(-2px); }
        .rm-obj-num { font-family: 'Playfair Display', serif; font-size: 28px; font-weight: 700; color: var(--gold); margin-bottom: 8px; }
        .rm-obj-text { font-size: 14px; color: var(--text-secondary); font-weight: 300; line-height: 1.55; }

        /* ── Investimento (Tabela) ── */
        .rm-pricing-table {
          margin-top: 48px;
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          border: 1px solid var(--border);
          border-radius: 16px;
          overflow: hidden;
        }
        .rm-pricing-table thead th {
          background: var(--bg-card);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--gold);
          padding: 20px 24px;
          text-align: left;
          border-bottom: 1px solid var(--border);
        }
        .rm-pricing-table thead th:last-child { text-align: right; }
        .rm-pricing-table tbody tr { transition: background 0.3s; }
        .rm-pricing-table tbody tr:hover { background: rgba(200,149,108,0.04); }
        .rm-pricing-table tbody td {
          padding: 20px 24px;
          border-bottom: 1px solid var(--border);
          font-size: 15px;
          color: var(--text-secondary);
          font-weight: 300;
          vertical-align: middle;
        }
        .rm-pricing-table tbody tr:last-child td { border-bottom: none; }
        .rm-pricing-table tbody td:first-child { font-weight: 500; color: var(--text-primary); }
        .rm-pricing-table tbody td:last-child {
          text-align: right;
          font-family: 'Playfair Display', serif;
          font-size: 18px;
          font-weight: 700;
          color: var(--text-primary);
        }
        .rm-pricing-note {
          font-size: 13px;
          color: var(--text-muted);
          font-style: italic;
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
        }
        .rm-pricing-badge {
          display: inline-block;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--gold);
          background: rgba(200,149,108,0.1);
          padding: 3px 10px;
          border-radius: 100px;
          margin-left: 8px;
          vertical-align: middle;
        }

        /* ── CTA ── */
        .rm-cta {
          text-align: center; padding: 120px 24px;
          background: radial-gradient(ellipse at 50% 50%, rgba(160,109,66,0.06) 0%, transparent 70%), var(--bg-dark);
        }
        .rm-cta-message { font-family: 'Playfair Display', serif; font-size: 18px; font-weight: 400; font-style: italic; color: var(--text-secondary); max-width: 600px; margin: 0 auto 40px; line-height: 1.6; }
        .rm-cta-button {
          display: inline-flex; align-items: center; gap: 12px;
          padding: 18px 48px; background: var(--gradient-gold); color: var(--bg-dark);
          font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 700;
          letter-spacing: 1px; text-transform: uppercase; border: none; border-radius: 100px;
          cursor: pointer; text-decoration: none; transition: transform 0.3s, box-shadow 0.3s;
        }
        .rm-cta-button:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(200,149,108,0.25); }

        /* ── Footer ── */
        .rm-footer { text-align: center; padding: 40px 24px; border-top: 1px solid var(--border); font-size: 13px; color: var(--text-muted); }

        /* ── Animações ── */
        @keyframes rm-fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes rm-fadeDown { from { opacity: 0; transform: translateY(-16px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes rm-pulse-dot { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }

        /* ── Responsivo ── */
        @media (max-width: 768px) {
          .rm-about-grid { grid-template-columns: 1fr !important; }
          .rm-about-grid > div:first-child { max-width: 200px; margin: 0 auto; }
          .rm-diag-grid { grid-template-columns: 1fr !important; }
          .rm-pricing-grid { grid-template-columns: 1fr !important; }
          .rm-stats-grid { grid-template-columns: 1fr 1fr !important; }
          .rm-mentors-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

      <div className="rm-page">

        {/* ========== HERO ========== */}
        <div className="rm-hero">
          <div className="rm-hero-badge">
            <span className="rm-dot" />
            Proposta Exclusiva
          </div>

          <h1 className="rm-hero-title">
            Estrutura Digital para
            <br />
            <span className="rm-gold">Acelerar seus Negócios</span>
          </h1>

          <p className="rm-hero-desc">
            Automação, presença digital e geração de demanda para a consultoria da{" "}
            <strong>Rose Miranda</strong> — tudo o que você precisa para ir ao mercado com estrutura profissional.
          </p>

          <div className="rm-hero-meta">
            <span className="rm-hero-meta-item">
              <span className="rm-hero-meta-dot" />
              Proponente: Rodrigo Albuquerque
            </span>
            <span className="rm-hero-meta-item">
              <span className="rm-hero-meta-dot" />
              Cliente: Rose Miranda
            </span>
            <span className="rm-hero-meta-item">
              <span className="rm-hero-meta-dot" />
              BA Consultoria
            </span>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="rm-divider" />

        {/* ========== SOBRE (FIXO) ========== */}
        <section style={{ padding: "100px 24px", maxWidth: "900px", margin: "0 auto" }}>
          <p className="rm-section-label">Sobre</p>
          <h2 className="rm-section-title">Quem está por trás desta proposta</h2>

          <div className="rm-about-grid">
            <div className="rm-about-photo">
              <img loading="lazy" src={rodrigoPhoto} alt="Rodrigo Albuquerque" />
            </div>
            <div>
              <p className="rm-about-text">
                Rodrigo Albuquerque investiu meio milhão de reais em mentoria com alguns dos maiores empreendedores do Brasil. Liderou R$80 milhões em vendas anuais e compilou na BA Consultoria o aprendizado extraído de mais de 100 empresas que receberam consultoria.
              </p>
              <p className="rm-about-text">
                A BA Consultoria une consultoria estratégica, execução de marketing, automação com IA e inteligência comercial — tudo focado em gerar retorno financeiro real e escalável.
              </p>
              <div className="rm-stats-grid">
                {stats.map((s) => (
                  <div key={s.num} className="rm-stat-card">
                    <div className="rm-stat-num">{s.num}</div>
                    <div className="rm-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DIVIDER */}
        <div className="rm-divider" />

        {/* ========== MENTORES (FIXO) ========== */}
        <section style={{ padding: "100px 24px", maxWidth: "1100px", margin: "0 auto" }}>
          <p className="rm-section-label" style={{ textAlign: "center" }}>Referências</p>
          <h2 className="rm-section-title" style={{ textAlign: "center" }}>Nossos Mentores e Professores</h2>
          <p className="rm-section-subtitle" style={{ textAlign: "center", margin: "0 auto 48px" }}>
            Aprendemos diretamente com alguns dos maiores líderes do mercado brasileiro.
          </p>

          <div className="rm-mentors-grid">
            {mentors.map((m) => (
              <div key={m.name} className="rm-mentor-card">
                <div className="rm-mentor-photo">
                  <img loading="lazy" src={m.photo} alt={m.name} />
                </div>
                <h3 className="rm-mentor-name">{m.name}</h3>
                <p className="rm-mentor-role">{m.role}</p>
                <p className="rm-mentor-bio">{m.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* DIVIDER */}
        <div className="rm-divider" />

        {/* ========== CONTEXTO ========== */}
        <section style={{ padding: "100px 24px", maxWidth: "900px", margin: "0 auto" }}>
          <p className="rm-section-label">Contexto</p>
          <h2 className="rm-section-title">Onde a Rose está hoje</h2>
          <p className="rm-section-subtitle">
            Empresária há mais de 25 anos, Rose está iniciando uma nova fase profissional — e precisa de infraestrutura digital para transformar experiência em escala.
          </p>

          <div className="rm-context-card">
            <p>
              Rose Miranda é empresária desde os 18 anos, já passou por quatro segmentos diferentes e acumula mais de 25 anos de experiência com vendas, gestão de times comerciais e atendimento ao cliente. Dona da Íntegra há décadas, construiu uma base de mais de 10 mil contatos e um networking forte em São Paulo — inclusive com convites para palestrar em grupos de Alphaville.
            </p>
            <p>
              Agora, Rose quer fazer a transição para consultoria empresarial, ajudando outras empresas a estruturar suas áreas comerciais, CRM e processos de vendas. A demanda orgânica já começou a aparecer — pessoas estão procurando ela depois de posts em redes sociais. O principal gargalo agora não é falta de experiência ou de rede — é{" "}
              <span className="rm-context-highlight">a ausência de estrutura digital para captar, organizar e converter essa demanda em clientes de consultoria.</span>
            </p>
          </div>
        </section>

        {/* ========== DIAGNÓSTICO ========== */}
        <div style={{ background: "var(--bg-section)", padding: "100px 24px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p className="rm-section-label">Diagnóstico</p>
            <h2 className="rm-section-title">O que mapeamos na nossa conversa</h2>
            <p className="rm-section-subtitle">Uma profissional com bagagem imensa, mas que precisa de ferramentas para transformar potencial em operação.</p>

            <div className="rm-diag-grid">
              {/* Pontos Fortes */}
              <div className="rm-diag-card">
                <div className="rm-diag-header rm-green">
                  <span className="rm-diag-icon rm-green">✦</span>
                  Pontos Fortes
                </div>
                <ul className="rm-diag-list rm-green">
                  {[
                    "25+ anos de experiência empresarial e comercial em múltiplos segmentos",
                    "Base de mais de 10 mil contatos construída organicamente ao longo de décadas",
                    "Networking ativo em São Paulo — convites para palestras e grupos empresariais em Alphaville",
                    "Demanda orgânica já aparecendo — pessoas procurando seus serviços pelas redes sociais",
                    "Visão 360° do negócio — entende que resultado depende da integração entre marketing, vendas e operação",
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Gargalos */}
              <div className="rm-diag-card">
                <div className="rm-diag-header rm-red">
                  <span className="rm-diag-icon rm-red">▪</span>
                  Gargalos Atuais
                </div>
                <ul className="rm-diag-list rm-red">
                  {[
                    "Zero estrutura digital — sem site, sem landing page, sem CRM implementado",
                    "Comunicação manual e individual — envia mensagens uma a uma para cada contato no WhatsApp",
                    "Sem processo de captação ativa — demanda chega por acaso, não por estratégia",
                    "Falta de material de apresentação profissional para fechar com novos clientes",
                    "Transição de modelo de negócio sem infraestrutura de suporte tecnológico",
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="rm-divider" />

        {/* ========== OBJETIVOS ========== */}
        <section style={{ padding: "100px 24px", maxWidth: "900px", margin: "0 auto" }}>
          <p className="rm-section-label">Objetivo</p>
          <h2 className="rm-section-title">O que este projeto vai resolver</h2>
          <p className="rm-section-subtitle">Criar a infraestrutura digital completa para Rose operar sua consultoria com profissionalismo e escala.</p>

          <div className="rm-obj-grid">
            {[
              { num: "01", text: "Automação de WhatsApp + CRM personalizado para gerenciar a base de 10 mil contatos, disparar mensagens segmentadas e acompanhar o funil de vendas de forma organizada — sem precisar mandar um a um." },
              { num: "02", text: "Presença digital profissional com site completo que posicione Rose como referência em consultoria empresarial e comercial, transmitindo credibilidade para fechar com novos clientes." },
              { num: "03", text: "Máquina de geração de demanda com landing page otimizada e gestão de tráfego pago para atrair empresários qualificados de forma contínua e previsível." },
            ].map((obj) => (
              <div key={obj.num} className="rm-obj-card">
                <div className="rm-obj-num">{obj.num}</div>
                <p className="rm-obj-text">{obj.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ========== INVESTIMENTO ========== */}
        <div style={{ background: "var(--bg-section)", padding: "100px 24px" }}>
          <div style={{ maxWidth: "960px", margin: "0 auto" }}>
            <p className="rm-section-label">Investimento</p>
            <h2 className="rm-section-title">Proposta comercial</h2>
            <p className="rm-section-subtitle">Serviços disponíveis para montar a estrutura ideal para o seu momento.</p>

            <table className="rm-pricing-table">
              <thead>
                <tr>
                  <th>Serviço</th>
                  <th>Observação</th>
                  <th>Valor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Automação WhatsApp + CRM</td>
                  <td><span className="rm-pricing-note">Implementação personalizada</span></td>
                  <td>R$ 8.000</td>
                </tr>
                <tr>
                  <td>Landing Page</td>
                  <td><span className="rm-pricing-note">Página única</span></td>
                  <td>R$ 1.500</td>
                </tr>
                <tr>
                  <td>Site Completo</td>
                  <td><span className="rm-pricing-note">—</span></td>
                  <td>R$ 3.000</td>
                </tr>
                <tr>
                  <td>Gestão de Tráfego Pago <span className="rm-pricing-badge">Mensal</span></td>
                  <td><span className="rm-pricing-note">Recorrente</span></td>
                  <td>R$ 1.500<span style={{ fontSize: "13px", fontWeight: 400, color: "var(--text-muted)" }}>/mês</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ========== CTA ========== */}
        <div className="rm-cta">
          <p className="rm-section-label">Próximo passo</p>
          <h2 className="rm-section-title">Vamos começar?</h2>
          <p className="rm-cta-message">
            Rose, você tem 25 anos de experiência, uma rede forte e a demanda já está batendo na porta. O que falta é a estrutura para capturar tudo isso. Vamos construir juntos.
          </p>
          <a
            href="https://wa.me/5511999718595"
            target="_blank"
            rel="noopener noreferrer"
            className="rm-cta-button"
          >
            Falar com Rodrigo →
          </a>
        </div>

        {/* FOOTER */}
        <div className="rm-footer">
          BA Consultoria © 2026 — Proposta válida por 7 dias
        </div>
      </div>
    </>
  );
};

export default PropostaRoseMiranda;
