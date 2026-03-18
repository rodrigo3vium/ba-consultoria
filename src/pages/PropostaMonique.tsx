import { useEffect } from "react";

const PropostaMonique = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#0a0a0a";
    document.body.style.paddingTop = "0";
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.paddingTop = "";
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        .pm-page {
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
          --border: rgba(200,149,108,0.15);
          --gradient-gold: linear-gradient(135deg, #a06d42, #c8956c, #e0b893);

          font-family: 'DM Sans', sans-serif;
          background: var(--bg-dark);
          color: var(--text-primary);
          line-height: 1.7;
          overflow-x: hidden;
        }

        .pm-page * { margin: 0; padding: 0; box-sizing: border-box; }

        .pm-hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 60px 24px;
          position: relative;
          background: radial-gradient(ellipse at 30% 20%, rgba(160,109,66,0.08) 0%, transparent 60%),
                      radial-gradient(ellipse at 70% 80%, rgba(107,168,122,0.04) 0%, transparent 50%),
                      var(--bg-dark);
        }

        .pm-hero::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: var(--gradient-gold);
          opacity: 0.4;
        }

        .pm-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 20px;
          border: 1px solid var(--border);
          border-radius: 100px;
          font-size: 13px;
          font-weight: 500;
          color: var(--gold-light);
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 40px;
          animation: pmFadeDown 0.8s ease both;
        }

        .pm-hero-badge::before {
          content: '';
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--gold);
          animation: pmPulseDot 2s infinite;
        }

        @keyframes pmPulseDot { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }

        .pm-hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.6rem, 5.5vw, 4.6rem);
          font-weight: 700;
          line-height: 1.15;
          margin-bottom: 24px;
          animation: pmFadeUp 0.8s 0.2s ease both;
        }

        .pm-hero h1 .gold {
          background: var(--gradient-gold);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .pm-hero-sub {
          font-size: 18px;
          color: var(--text-secondary);
          max-width: 620px;
          margin-bottom: 48px;
          font-weight: 300;
          animation: pmFadeUp 0.8s 0.4s ease both;
        }

        .pm-hero-sub strong { color: var(--text-primary); font-weight: 500; }

        .pm-hero-meta {
          display: flex;
          gap: 32px;
          font-size: 13px;
          color: var(--text-muted);
          animation: pmFadeUp 0.8s 0.6s ease both;
        }

        .pm-hero-meta span { display: flex; align-items: center; gap: 6px; }
        .pm-hero-meta .dot { width: 4px; height: 4px; border-radius: 50%; background: var(--gold); display: inline-block; }

        @keyframes pmFadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pmFadeDown { from { opacity: 0; transform: translateY(-16px); } to { opacity: 1; transform: translateY(0); } }

        .pm-section {
          padding: 100px 24px;
          max-width: 900px;
          margin: 0 auto;
        }

        .pm-section-label {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 16px;
        }

        .pm-section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 4vw, 2.6rem);
          font-weight: 600;
          margin-bottom: 20px;
          line-height: 1.25;
        }

        .pm-section-text {
          color: var(--text-secondary);
          font-size: 16px;
          max-width: 700px;
          font-weight: 300;
        }

        .pm-divider {
          width: 60px;
          height: 1px;
          background: var(--gradient-gold);
          margin: 0 auto;
        }

        .pm-who-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 48px;
          align-items: start;
          margin-top: 40px;
        }

        .pm-who-avatar {
          width: 100%;
          aspect-ratio: 1;
          border-radius: 20px;
          background: linear-gradient(135deg, #1a1510 0%, #2a221a 100%);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 12px;
        }

        .pm-who-avatar .initials {
          font-family: 'Playfair Display', serif;
          font-size: 48px;
          font-weight: 700;
          background: var(--gradient-gold);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .pm-who-avatar .brand {
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--text-muted);
        }

        .pm-who-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-top: 24px;
        }

        .pm-who-stat {
          padding: 16px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 12px;
        }

        .pm-who-stat .num {
          font-family: 'Playfair Display', serif;
          font-size: 24px;
          font-weight: 700;
          color: var(--gold);
        }

        .pm-who-stat .label { font-size: 12px; color: var(--text-muted); margin-top: 4px; }

        .pm-context-box {
          margin-top: 40px;
          padding: 32px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-left: 3px solid var(--gold);
          border-radius: 0 16px 16px 0;
        }

        .pm-context-box p {
          font-size: 15px;
          color: var(--text-secondary);
          font-weight: 300;
          line-height: 1.7;
        }

        .pm-context-box p + p { margin-top: 12px; }

        .pm-context-box .highlight {
          color: var(--gold-light);
          font-weight: 500;
          font-style: italic;
        }

        .pm-obj-main {
          margin-top: 40px;
          padding: 32px;
          background: var(--bg-card);
          border: 1px solid var(--gold);
          border-radius: 16px;
          text-align: center;
        }

        .pm-obj-main h3 {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .pm-obj-main p {
          font-size: 15px;
          color: var(--text-secondary);
          font-weight: 300;
        }

        .pm-obj-secondary {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 16px;
          margin-top: 20px;
        }

        .pm-obj-item {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 24px;
          transition: border-color 0.3s, transform 0.3s;
        }

        .pm-obj-item:hover { border-color: rgba(200,149,108,0.35); transform: translateY(-2px); }

        .pm-obj-item .icon { font-size: 20px; margin-bottom: 10px; }

        .pm-obj-item p {
          font-size: 14px;
          color: var(--text-secondary);
          font-weight: 300;
          line-height: 1.55;
        }

        .pm-paths {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-top: 48px;
        }

        .pm-path-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 32px;
          position: relative;
          transition: border-color 0.3s;
        }

        .pm-path-card.recommended {
          border-color: var(--gold);
          background: linear-gradient(160deg, #1f1a15 0%, var(--bg-card) 100%);
        }

        .pm-path-card.recommended::after {
          content: '✦ RECOMENDADO';
          position: absolute;
          top: 16px; right: 16px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: var(--gold);
        }

        .pm-path-card h3 {
          font-family: 'Playfair Display', serif;
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .pm-path-card p {
          font-size: 14px;
          color: var(--text-secondary);
          font-weight: 300;
          line-height: 1.6;
        }

        .pm-phase-section {
          background: var(--bg-section);
          padding: 100px 24px;
          max-width: 100%;
        }

        .pm-phase-inner { max-width: 900px; margin: 0 auto; }

        .pm-phase-block {
          margin-top: 48px;
          padding: 40px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 20px;
        }

        .pm-phase-block + .pm-phase-block { margin-top: 24px; }

        .pm-phase-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          border-radius: 100px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .pm-phase-label.active { background: rgba(200,149,108,0.12); color: var(--gold-light); }
        .pm-phase-label.future { background: rgba(107,168,122,0.1); color: var(--accent-green); }

        .pm-phase-block h3 {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .pm-phase-block > p {
          font-size: 15px;
          color: var(--text-secondary);
          font-weight: 300;
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .pm-phase-items {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .pm-phase-items li {
          font-size: 14px;
          color: var(--text-secondary);
          font-weight: 300;
          padding-left: 22px;
          position: relative;
          line-height: 1.55;
        }

        .pm-phase-items li::before {
          content: '✦';
          position: absolute; left: 0; top: 2px;
          color: var(--gold);
          font-size: 9px;
        }

        .pm-pricing-section {
          padding: 100px 24px;
          max-width: 100%;
          background: var(--bg-dark);
        }

        .pm-pricing-inner { max-width: 900px; margin: 0 auto; }

        .pm-price-main {
          max-width: 600px;
          margin: 48px auto 0;
          border: 1px solid var(--gold);
          border-radius: 20px;
          padding: 40px 36px;
          background: linear-gradient(160deg, #1f1a15 0%, var(--bg-card) 100%);
        }

        .pm-price-main-label {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 12px;
        }

        .pm-price-main h3 {
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          font-weight: 600;
          margin-bottom: 24px;
        }

        .pm-price-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          padding: 14px 0;
          border-bottom: 1px solid var(--border);
        }

        .pm-price-row:last-of-type { border-bottom: none; }

        .pm-price-row .label {
          font-size: 14px;
          color: var(--text-secondary);
          font-weight: 400;
        }

        .pm-price-row .value {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .pm-price-row .value.note {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 400;
          color: var(--text-muted);
          max-width: 280px;
          text-align: right;
        }

        .pm-price-scope {
          margin-top: 28px;
          padding-top: 28px;
          border-top: 1px solid var(--border);
        }

        .pm-price-scope-title {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 14px;
        }

        .pm-price-scope ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .pm-price-scope ul li {
          font-size: 13px;
          color: var(--text-secondary);
          font-weight: 300;
          padding-left: 22px;
          position: relative;
          line-height: 1.5;
        }

        .pm-price-scope ul li::before {
          content: '✦';
          position: absolute; left: 0; top: 2px;
          color: var(--gold);
          font-size: 9px;
        }

        .pm-attention-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-top: 40px;
        }

        .pm-att-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 24px;
        }

        .pm-att-card h4 {
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 8px;
          color: var(--text-primary);
        }

        .pm-att-card p {
          font-size: 13px;
          color: var(--text-muted);
          font-weight: 300;
          line-height: 1.55;
        }

        .pm-timeline-bar {
          display: flex;
          gap: 0;
          margin-top: 40px;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid var(--border);
        }

        .pm-tl-phase {
          flex: 1;
          padding: 28px 20px;
          background: var(--bg-card);
          border-right: 1px solid var(--border);
          transition: background 0.3s;
        }

        .pm-tl-phase:last-child { border-right: none; }
        .pm-tl-phase:hover { background: rgba(200,149,108,0.04); }

        .pm-tl-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 8px;
        }

        .pm-tl-phase h4 { font-size: 15px; font-weight: 600; margin-bottom: 6px; }
        .pm-tl-phase p { font-size: 13px; color: var(--text-muted); font-weight: 300; line-height: 1.5; }

        .pm-cta-section {
          text-align: center;
          padding: 120px 24px;
          background: radial-gradient(ellipse at 50% 50%, rgba(160,109,66,0.06) 0%, transparent 70%), var(--bg-dark);
        }

        .pm-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 18px 48px;
          background: var(--gradient-gold);
          color: var(--bg-dark);
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          border: none;
          border-radius: 100px;
          cursor: pointer;
          text-decoration: none;
          transition: transform 0.3s, box-shadow 0.3s;
          margin-top: 40px;
        }

        .pm-cta-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(200,149,108,0.25); }

        .pm-footer {
          text-align: center;
          padding: 40px 24px;
          border-top: 1px solid var(--border);
          font-size: 13px;
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .pm-who-grid, .pm-paths, .pm-attention-grid { grid-template-columns: 1fr; }
          .pm-timeline-bar { flex-direction: column; }
          .pm-tl-phase { border-right: none; border-bottom: 1px solid var(--border); }
          .pm-tl-phase:last-child { border-bottom: none; }
          .pm-who-avatar { max-width: 200px; margin: 0 auto; }
          .pm-section { padding: 80px 20px; }
          .pm-obj-secondary { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="pm-page">
        {/* HERO */}
        <div className="pm-hero">
          <div className="pm-hero-badge">Proposta Exclusiva</div>
          <h1>
            Agenda cheia até julho.<br />
            Com <span className="gold">estratégia.</span>
          </h1>
          <p className="pm-hero-sub">
            Projeto de captação de pacientes e fortalecimento de posicionamento digital para <strong>Monique Scalon Karasek</strong> — psicóloga em Dourados.
          </p>
          <div className="pm-hero-meta">
            <span><span className="dot"></span> Proponente: Rodrigo Albuquerque</span>
            <span><span className="dot"></span> Freedom Agency</span>
          </div>
        </div>

        <div className="pm-divider"></div>

        {/* SOBRE */}
        <section className="pm-section">
          <div className="pm-section-label">Sobre</div>
          <h2 className="pm-section-title">Quem está por trás desta proposta</h2>

          <div className="pm-who-grid">
            <div className="pm-who-avatar">
              <span className="initials">RA</span>
              <span className="brand">Freedom Agency</span>
            </div>

            <div>
              <p className="pm-section-text">
                Rodrigo Albuquerque investiu meio milhão de reais em mentoria com alguns dos maiores empreendedores do Brasil. Liderou R$80 milhões em vendas anuais e compilou na Freedom Agency o aprendizado extraído de mais de 100 empresas que receberam consultoria.
              </p>
              <br />
              <p className="pm-section-text">
                A Freedom Agency não é uma agência de marketing tradicional. Olhamos o marketing como um potencializador do negócio — conectando tráfego, posicionamento e geração de receita em uma estratégia única.
              </p>

              <div className="pm-who-stats">
                <div className="pm-who-stat">
                  <div className="num">R$80M</div>
                  <div className="label">em vendas lideradas</div>
                </div>
                <div className="pm-who-stat">
                  <div className="num">100+</div>
                  <div className="label">empresas consultadas</div>
                </div>
                <div className="pm-who-stat">
                  <div className="num">R$500K</div>
                  <div className="label">investidos em mentoria</div>
                </div>
                <div className="pm-who-stat">
                  <div className="num">5x</div>
                  <div className="label">ROAS médio de clientes</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="pm-divider"></div>

        {/* CONTEXTO */}
        <section className="pm-section">
          <div className="pm-section-label">Contexto</div>
          <h2 className="pm-section-title">Onde a Monique está hoje</h2>
          <p className="pm-section-text">
            Monique está retomando com mais força sua atuação presencial em Dourados, com foco principal no público feminino. O objetivo de curto prazo é claro: preencher horários vagos da agenda até julho.
          </p>

          <div className="pm-context-box">
            <p>
              Hoje já existe produção de conteúdo em andamento — um ativo importante para fortalecer autoridade e percepção de valor. No entanto, ainda não há uma estratégia de tráfego pago implementada para acelerar a geração de demanda.
            </p>
            <p>
              Em um segundo momento, a intenção é expandir a atuação para produtos e serviços de grupo: <span className="highlight">grupos terapêuticos, workshops e iniciativas presenciais voltadas para mulheres.</span>
            </p>
            <p>
              A estratégia mais adequada agora é priorizar a captação direta de pacientes, com foco em resultado no curto prazo, sem perder de vista a construção de marca pessoal no médio prazo.
            </p>
          </div>
        </section>

        <div className="pm-divider"></div>

        {/* OBJETIVO */}
        <section className="pm-section">
          <div className="pm-section-label">Objetivo</div>
          <h2 className="pm-section-title">O que este projeto vai resolver</h2>

          <div className="pm-obj-main">
            <h3>🎯 Objetivo principal</h3>
            <p>Preencher até julho os horários vagos da agenda com novos pacientes alinhados ao perfil de atendimento da Monique.</p>
          </div>

          <div className="pm-obj-secondary">
            <div className="pm-obj-item">
              <div className="icon">📍</div>
              <p>Fortalecer o posicionamento da Monique como psicóloga de referência em Dourados</p>
            </div>
            <div className="pm-obj-item">
              <div className="icon">📊</div>
              <p>Aumentar a previsibilidade na geração de novos contatos qualificados</p>
            </div>
            <div className="pm-obj-item">
              <div className="icon">🚀</div>
              <p>Estruturar base de aquisição que futuramente apoie grupos terapêuticos, workshops e novos produtos</p>
            </div>
          </div>
        </section>

        <div className="pm-divider"></div>

        {/* DIRECIONAMENTO */}
        <section className="pm-section">
          <div className="pm-section-label">Direcionamento</div>
          <h2 className="pm-section-title">Dois caminhos possíveis — um recomendado</h2>
          <p className="pm-section-text">
            Identificamos dois caminhos dentro do tráfego pago. A recomendação é clara: começar pelo que gera resultado mais rápido.
          </p>

          <div className="pm-paths">
            <div className="pm-path-card">
              <h3>Crescimento de perfil e autoridade</h3>
              <p>Estratégia focada em aumentar seguidores, alcance e reconhecimento. Construção importante, mas tende a gerar resultado de conversão em prazo mais longo. Ideal para uma segunda etapa.</p>
            </div>
            <div className="pm-path-card recommended">
              <h3>Captação direta de pacientes</h3>
              <p>Estratégia focada em atrair pessoas com potencial real de contratação, conduzindo o contato para um canal de atendimento e conversão. Atende diretamente ao objetivo de preencher a agenda até julho.</p>
            </div>
          </div>
        </section>

        {/* ESTRATÉGIA */}
        <div className="pm-phase-section">
          <div className="pm-phase-inner">
            <div className="pm-section-label">Estratégia</div>
            <h2 className="pm-section-title">Como vamos executar</h2>
            <p className="pm-section-text">
              Duas fases complementares — a primeira resolve o problema imediato, a segunda constrói o ativo de longo prazo.
            </p>

            <div className="pm-phase-block">
              <div className="pm-phase-label active">Fase 1 — Agora</div>
              <h3>Captação de pacientes</h3>
              <p>Gerar contatos de potenciais pacientes em Dourados e região, com campanhas orientadas para conversão.</p>
              <ul className="pm-phase-items">
                <li>Definição da proposta de valor e comunicação da Monique</li>
                <li>Construção de mensagens com tom direto, objetivo e posicionamento firme</li>
                <li>Criação e estruturação da campanha de tráfego pago</li>
                <li>Segmentação de público compatível com o ticket de atendimento</li>
                <li>Direcionamento para canal de contato ideal</li>
                <li>Monitoramento dos leads e otimização contínua</li>
              </ul>
            </div>

            <div className="pm-phase-block">
              <div className="pm-phase-label future">Fase 2 — Após preencher a agenda</div>
              <h3>Posicionamento e autoridade</h3>
              <p>Com a agenda preenchida, a estratégia evolui para fortalecimento de marca e crescimento do ativo digital.</p>
              <ul className="pm-phase-items">
                <li>Crescimento qualificado do Instagram</li>
                <li>Fortalecimento de autoridade local em Dourados</li>
                <li>Construção de audiência para grupos terapêuticos e workshops</li>
                <li>Preparação para eventos presenciais e novos produtos</li>
              </ul>
            </div>
          </div>
        </div>

        {/* INVESTIMENTO */}
        <div className="pm-pricing-section">
          <div className="pm-pricing-inner">
            <div className="pm-section-label">Investimento</div>
            <h2 className="pm-section-title">Proposta comercial</h2>
            <p className="pm-section-text">
              Gestão estratégica e operacional de tráfego pago com visão de negócio — não apenas "subir anúncios".
            </p>

            <div className="pm-price-main">
              <div className="pm-price-main-label">Gestão de Tráfego Pago + Consultoria Estratégica</div>
              <h3>Captação de Pacientes + Posicionamento</h3>

              <div className="pm-price-row">
                <span className="label">Gestão estratégica mensal</span>
                <span className="value">R$ [preencher]</span>
              </div>
              <div className="pm-price-row">
                <span className="label">Verba de mídia recomendada</span>
                <span className="value">R$ [preencher]/mês</span>
              </div>
              <div className="pm-price-row">
                <span className="label">Prazo inicial recomendado</span>
                <span className="value">3 meses</span>
              </div>
              <div className="pm-price-row">
                <span className="label">Nota sobre verba de mídia</span>
                <span className="value note">Paga diretamente para a plataforma. Não está inclusa no valor da gestão.</span>
              </div>

              <div className="pm-price-scope">
                <div className="pm-price-scope-title">O que está incluso</div>
                <ul>
                  <li>Diagnóstico inicial da estratégia</li>
                  <li>Definição do objetivo e planejamento da campanha</li>
                  <li>Estruturação e configuração dos anúncios</li>
                  <li>Gestão e acompanhamento dos resultados</li>
                  <li>Otimizações periódicas de custo e desempenho</li>
                  <li>Reuniões de alinhamento estratégico</li>
                  <li>Apoio estratégico em posicionamento, aquisição e conversão</li>
                  <li>Visão conectada entre anúncio, contato e fechamento</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="pm-divider"></div>

        {/* PONTOS DE ATENÇÃO */}
        <section className="pm-section">
          <div className="pm-section-label">Pontos de atenção</div>
          <h2 className="pm-section-title">O que vamos alinhar em conjunto</h2>
          <p className="pm-section-text">
            Para que a estratégia de captação tenha melhor desempenho, alguns pontos serão trabalhados juntos desde o início.
          </p>

          <div className="pm-attention-grid">
            <div className="pm-att-card">
              <h4>Clareza da oferta</h4>
              <p>Definição precisa do que está sendo oferecido, para quem, e por que a Monique é a escolha certa.</p>
            </div>
            <div className="pm-att-card">
              <h4>Canal de entrada</h4>
              <p>Escolha do melhor canal para receber os interessados — WhatsApp, formulário, agendamento direto.</p>
            </div>
            <div className="pm-att-card">
              <h4>Velocidade de resposta</h4>
              <p>Estrutura mínima para responder leads de forma ágil. Tempo de resposta impacta diretamente na conversão.</p>
            </div>
            <div className="pm-att-card">
              <h4>Coerência de posicionamento</h4>
              <p>Alinhamento entre anúncios, conteúdo orgânico e posicionamento profissional para gerar confiança.</p>
            </div>
          </div>
        </section>

        <div className="pm-divider"></div>

        {/* PRAZO */}
        <section className="pm-section">
          <div className="pm-section-label">Prazo</div>
          <h2 className="pm-section-title">Período inicial recomendado: 3 meses</h2>
          <p className="pm-section-text">
            Tempo necessário para estruturar, validar, otimizar e gerar volume suficiente para análise e tomada de decisão.
          </p>

          <div className="pm-timeline-bar">
            <div className="pm-tl-phase">
              <div className="pm-tl-label">Mês 1</div>
              <h4>Estruturação</h4>
              <p>Onboarding, diagnóstico, definição de público, criação das campanhas e início da operação.</p>
            </div>
            <div className="pm-tl-phase">
              <div className="pm-tl-label">Mês 2</div>
              <h4>Validação</h4>
              <p>Primeiros leads chegando, ajustes de comunicação, otimização de custo e segmentação.</p>
            </div>
            <div className="pm-tl-phase">
              <div className="pm-tl-label">Mês 3</div>
              <h4>Otimização</h4>
              <p>Campanhas maduras, previsibilidade de contatos, análise de resultados para decisão sobre próximos passos.</p>
            </div>
          </div>
        </section>

        <div className="pm-divider"></div>

        {/* CTA */}
        <div className="pm-cta-section">
          <div className="pm-section-label">Próximo passo</div>
          <h2 className="pm-section-title">Vamos começar?</h2>
          <p className="pm-section-text" style={{ margin: "0 auto" }}>
            Se a proposta fizer sentido, o próximo passo é uma reunião de onboarding estratégico para aprofundar perfil de público, diferenciais, oferta atual e direcionar as mensagens e criativos das campanhas.
          </p>
          <a href="https://wa.me/5500000000000" className="pm-cta-btn" target="_blank" rel="noopener noreferrer">
            Falar com Rodrigo →
          </a>
        </div>

        {/* FOOTER */}
        <div className="pm-footer">
          Freedom Agency © 2026 — Proposta válida por 7 dias
        </div>
      </div>
    </>
  );
};

export default PropostaMonique;
