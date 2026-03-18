import { useEffect } from "react";

const PropostaDudaBambil = () => {
  useEffect(() => {
    document.body.style.paddingTop = "0px";
    return () => {
      document.body.style.paddingTop = "";
    };
  }, []);

  return (
    <>
      <style>{`
        .pdb-page {
          --bg-dark: #0a0a0a;
          --bg-section: #111111;
          --bg-card: #1a1a1a;
          --gold: #c8956c;
          --gold-light: #e0b893;
          --gold-dark: #a06d42;
          --cream: #f5efe6;
          --text-primary: #f0ebe3;
          --text-secondary: #9a9590;
          --text-muted: #6b6560;
          --accent-blue: #5b8fa8;
          --pdb-border: rgba(200,149,108,0.15);
          --gradient-gold: linear-gradient(135deg, #a06d42, #c8956c, #e0b893);

          font-family: 'DM Sans', sans-serif;
          background: var(--bg-dark);
          color: var(--text-primary);
          line-height: 1.7;
          overflow-x: hidden;
        }

        .pdb-page * { box-sizing: border-box; }

        /* HERO */
        .pdb-hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 60px 24px;
          position: relative;
          background: radial-gradient(ellipse at 30% 20%, rgba(160,109,66,0.08) 0%, transparent 60%),
                      radial-gradient(ellipse at 70% 80%, rgba(91,143,168,0.05) 0%, transparent 50%),
                      var(--bg-dark);
        }

        .pdb-hero::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: var(--gradient-gold);
          opacity: 0.4;
        }

        .pdb-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 20px;
          border: 1px solid var(--pdb-border);
          border-radius: 100px;
          font-size: 13px;
          font-weight: 500;
          color: var(--gold-light);
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 40px;
          animation: pdbFadeDown 0.8s ease both;
        }

        .pdb-hero-badge::before {
          content: '';
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--gold);
          animation: pdbPulseDot 2s infinite;
        }

        @keyframes pdbPulseDot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .pdb-hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.8rem, 6vw, 5rem);
          font-weight: 700;
          line-height: 1.15;
          margin-bottom: 24px;
          animation: pdbFadeUp 0.8s 0.2s ease both;
        }

        .pdb-hero h1 .pdb-gold {
          background: var(--gradient-gold);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .pdb-hero-sub {
          font-size: 18px;
          color: var(--text-secondary);
          max-width: 560px;
          margin-bottom: 48px;
          font-weight: 300;
          animation: pdbFadeUp 0.8s 0.4s ease both;
        }

        .pdb-hero-sub strong {
          color: var(--text-primary);
          font-weight: 500;
        }

        @keyframes pdbFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pdbFadeDown {
          from { opacity: 0; transform: translateY(-16px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* SECTIONS */
        .pdb-section {
          padding: 100px 24px;
          max-width: 900px;
          margin: 0 auto;
        }

        .pdb-section-label {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 16px;
        }

        .pdb-section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 4vw, 2.6rem);
          font-weight: 600;
          margin-bottom: 20px;
          line-height: 1.25;
        }

        .pdb-section-text {
          color: var(--text-secondary);
          font-size: 16px;
          max-width: 700px;
          font-weight: 300;
        }

        /* DIVIDER */
        .pdb-divider {
          width: 60px;
          height: 1px;
          background: var(--gradient-gold);
          margin: 0 auto;
        }

        /* DIAGNOSTIC */
        .pdb-diagnostic {
          background: var(--bg-section);
          border-radius: 0;
          padding: 100px 24px;
          max-width: 100%;
          position: relative;
        }

        .pdb-diagnostic-inner {
          max-width: 900px;
          margin: 0 auto;
        }

        .pdb-diagnostic-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-top: 48px;
        }

        .pdb-diag-card {
          background: var(--bg-card);
          border: 1px solid var(--pdb-border);
          border-radius: 16px;
          padding: 32px;
          transition: border-color 0.3s, transform 0.3s;
        }

        .pdb-diag-card:hover {
          border-color: rgba(200,149,108,0.35);
          transform: translateY(-2px);
        }

        .pdb-diag-icon {
          width: 40px; height: 40px;
          border-radius: 10px;
          background: rgba(200,149,108,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          font-size: 18px;
        }

        .pdb-diag-card h3 {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 8px;
          color: var(--text-primary);
        }

        .pdb-diag-card p {
          font-size: 14px;
          color: var(--text-secondary);
          font-weight: 300;
          line-height: 1.6;
        }

        /* STRATEGY */
        .pdb-strategy-steps {
          margin-top: 48px;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .pdb-step {
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 0;
          position: relative;
        }

        .pdb-step-line {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .pdb-step-num {
          width: 48px; height: 48px;
          border-radius: 50%;
          background: var(--bg-card);
          border: 2px solid var(--gold);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Playfair Display', serif;
          font-size: 18px;
          font-weight: 700;
          color: var(--gold);
          flex-shrink: 0;
        }

        .pdb-step-connector {
          width: 2px;
          flex: 1;
          background: linear-gradient(to bottom, var(--gold-dark), transparent);
          min-height: 20px;
        }

        .pdb-step-content {
          padding: 8px 0 48px 0;
        }

        .pdb-step-content h3 {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .pdb-step-content p {
          color: var(--text-secondary);
          font-size: 15px;
          font-weight: 300;
          line-height: 1.7;
        }

        .pdb-step:last-child .pdb-step-connector { display: none; }
        .pdb-step:last-child .pdb-step-content { padding-bottom: 0; }

        /* PRICING */
        .pdb-pricing-section {
          background: var(--bg-section);
          padding: 100px 24px;
          max-width: 100%;
        }

        .pdb-pricing-inner {
          max-width: 900px;
          margin: 0 auto;
        }

        .pdb-pricing-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-top: 48px;
        }

        .pdb-price-card {
          background: var(--bg-card);
          border: 1px solid var(--pdb-border);
          border-radius: 20px;
          padding: 40px 32px;
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s;
        }

        .pdb-price-card:hover {
          border-color: rgba(200,149,108,0.4);
        }

        .pdb-price-card.pdb-featured {
          border-color: var(--gold);
          background: linear-gradient(160deg, #1f1a15 0%, var(--bg-card) 100%);
        }

        .pdb-price-card.pdb-featured::before {
          content: 'RECOMENDADO';
          position: absolute;
          top: 16px; right: -32px;
          background: var(--gradient-gold);
          color: var(--bg-dark);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;
          padding: 6px 40px;
          transform: rotate(45deg);
        }

        .pdb-price-card-label {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 12px;
        }

        .pdb-price-card h3 {
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .pdb-price-card .pdb-price {
          font-size: 14px;
          color: var(--text-secondary);
          margin-bottom: 24px;
          padding-bottom: 24px;
          border-bottom: 1px solid var(--pdb-border);
        }

        .pdb-price .pdb-amount {
          font-family: 'Playfair Display', serif;
          font-size: 36px;
          font-weight: 700;
          color: var(--text-primary);
          display: block;
          margin-bottom: 4px;
        }

        .pdb-price-card ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 0;
          margin: 0;
        }

        .pdb-price-card ul li {
          font-size: 14px;
          color: var(--text-secondary);
          font-weight: 300;
          padding-left: 24px;
          position: relative;
        }

        .pdb-price-card ul li::before {
          content: '✦';
          position: absolute;
          left: 0;
          color: var(--gold);
          font-size: 10px;
          top: 3px;
        }

        /* TIMELINE */
        .pdb-timeline-bar {
          display: flex;
          gap: 0;
          margin-top: 48px;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid var(--pdb-border);
        }

        .pdb-tl-phase {
          flex: 1;
          padding: 28px 20px;
          background: var(--bg-card);
          border-right: 1px solid var(--pdb-border);
          transition: background 0.3s;
        }

        .pdb-tl-phase:last-child { border-right: none; }

        .pdb-tl-phase:hover {
          background: rgba(200,149,108,0.05);
        }

        .pdb-tl-phase-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 8px;
        }

        .pdb-tl-phase h4 {
          font-size: 15px;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .pdb-tl-phase p {
          font-size: 13px;
          color: var(--text-muted);
          font-weight: 300;
          line-height: 1.5;
        }

        /* CTA */
        .pdb-cta-section {
          text-align: center;
          padding: 120px 24px;
          position: relative;
          background: radial-gradient(ellipse at 50% 50%, rgba(160,109,66,0.06) 0%, transparent 70%),
                      var(--bg-dark);
        }

        .pdb-cta-btn {
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

        .pdb-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(200,149,108,0.25);
        }

        /* FOOTER */
        .pdb-footer {
          text-align: center;
          padding: 40px 24px;
          border-top: 1px solid var(--pdb-border);
          font-size: 13px;
          color: var(--text-muted);
        }

        /* WHO */
        .pdb-who-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 48px;
          align-items: start;
          margin-top: 40px;
        }

        .pdb-who-avatar {
          width: 100%;
          aspect-ratio: 1;
          border-radius: 20px;
          background: linear-gradient(135deg, #1a1510 0%, #2a221a 100%);
          border: 1px solid var(--pdb-border);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 12px;
        }

        .pdb-who-avatar .pdb-initials {
          font-family: 'Playfair Display', serif;
          font-size: 48px;
          font-weight: 700;
          background: var(--gradient-gold);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .pdb-who-avatar .pdb-brand {
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--text-muted);
        }

        .pdb-who-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-top: 24px;
        }

        .pdb-who-stat {
          padding: 16px;
          background: var(--bg-card);
          border: 1px solid var(--pdb-border);
          border-radius: 12px;
        }

        .pdb-who-stat .pdb-num {
          font-family: 'Playfair Display', serif;
          font-size: 24px;
          font-weight: 700;
          color: var(--gold);
        }

        .pdb-who-stat .pdb-label {
          font-size: 12px;
          color: var(--text-muted);
          margin-top: 4px;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .pdb-diagnostic-grid, .pdb-pricing-cards, .pdb-who-grid { grid-template-columns: 1fr; }
          .pdb-timeline-bar { flex-direction: column; }
          .pdb-tl-phase { border-right: none; border-bottom: 1px solid var(--pdb-border); }
          .pdb-tl-phase:last-child { border-bottom: none; }
          .pdb-who-avatar { max-width: 200px; margin: 0 auto; }
          .pdb-section { padding: 80px 20px; }
          .pdb-step { grid-template-columns: 60px 1fr; }
        }
      `}</style>

      <div className="pdb-page">
        {/* HERO */}
        <div className="pdb-hero">
          <div className="pdb-hero-badge">Proposta Exclusiva</div>
          <h1>
            Transforme seu conhecimento<br />
            em <span className="pdb-gold">receita digital</span>
          </h1>
          <p className="pdb-hero-sub">
            Proposta personalizada para <strong>Duda Bambil</strong> — estratégia orgânica + tráfego de retargeting para escalar as vendas do seu curso e construir uma máquina digital previsível.
          </p>
        </div>

        <div className="pdb-divider" />

        {/* SOBRE */}
        <section className="pdb-section">
          <div className="pdb-section-label">Sobre</div>
          <h2 className="pdb-section-title">Quem está por trás desta proposta</h2>
          <div className="pdb-who-grid">
            <div className="pdb-who-avatar">
              <span className="pdb-initials">RA</span>
              <span className="pdb-brand">Freedom Agency</span>
            </div>
            <div>
              <p className="pdb-section-text" style={{ marginBottom: 16 }}>
                Rodrigo Albuquerque investiu meio milhão de reais em mentoria com alguns dos maiores empreendedores do Brasil. Liderou R$80 milhões em vendas anuais e compilou na Freedom Agency o aprendizado extraído de mais de 100 empresas que receberam consultoria.
              </p>
              <p className="pdb-section-text">
                A Freedom Agency não é uma agência de marketing tradicional. É uma operação de revenue que une consultoria estratégica, execução de marketing e inteligência comercial — tudo focado em gerar retorno financeiro real.
              </p>
              <div className="pdb-who-stats">
                <div className="pdb-who-stat">
                  <div className="pdb-num">R$80M</div>
                  <div className="pdb-label">em vendas lideradas</div>
                </div>
                <div className="pdb-who-stat">
                  <div className="pdb-num">100+</div>
                  <div className="pdb-label">empresas consultadas</div>
                </div>
                <div className="pdb-who-stat">
                  <div className="pdb-num">R$500K</div>
                  <div className="pdb-label">investidos em mentoria</div>
                </div>
                <div className="pdb-who-stat">
                  <div className="pdb-num">5x</div>
                  <div className="pdb-label">ROAS médio de clientes</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="pdb-divider" />

        {/* DIAGNÓSTICO */}
        <div className="pdb-diagnostic">
          <div className="pdb-diagnostic-inner">
            <div className="pdb-section-label">Diagnóstico</div>
            <h2 className="pdb-section-title">O que identificamos na nossa conversa</h2>
            <p className="pdb-section-text">
              A partir da nossa reunião, mapeamos os principais pontos do seu cenário atual e as oportunidades que existem para destravar o próximo nível do seu negócio digital.
            </p>
            <div className="pdb-diagnostic-grid">
              <div className="pdb-diag-card">
                <div className="pdb-diag-icon">📈</div>
                <h3>Crescimento orgânico acelerado</h3>
                <p>Em menos de 3 semanas focando em conteúdo para profissionais de estética, você ganhou quase 2.000 seguidores novos com alto engajamento. Isso prova que o público existe e está faminto pelo seu conteúdo.</p>
              </div>
              <div className="pdb-diag-card">
                <div className="pdb-diag-icon">💰</div>
                <h3>Vendas dependem de você</h3>
                <p>100% das vendas do mês vieram diretamente do seu esforço pessoal. O time de WhatsApp não está convertendo — falta processo, script e automação para transformar interesse em compra.</p>
              </div>
              <div className="pdb-diag-card">
                <div className="pdb-diag-icon">🎯</div>
                <h3>Experiência anterior frustrante</h3>
                <p>A agência anterior não segmentou público, não alinhou expectativas e não entregou resultado. Isso gerou desconfiança e gasto sem retorno — precisamos reconstruir confiança com resultados reais.</p>
              </div>
              <div className="pdb-diag-card">
                <div className="pdb-diag-icon">🚀</div>
                <h3>Potencial de escada de valor</h3>
                <p>Você já tem um curso a R$297, consultoria a R$3.500 com taxa de conversão de ~10% em reuniões, e mais produtos em desenvolvimento. A estrutura para uma escada de valor já está nascendo.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ESTRATÉGIA */}
        <section className="pdb-section">
          <div className="pdb-section-label">Estratégia</div>
          <h2 className="pdb-section-title">Como vamos construir sua máquina digital</h2>
          <p className="pdb-section-text">
            A estratégia combina a força do seu conteúdo orgânico com tráfego pago de retargeting para maximizar conversões — sem depender de funil frio arriscado.
          </p>
          <div className="pdb-strategy-steps">
            {[
              { num: 1, title: "Potencializar o orgânico", text: "Vamos estruturar sua produção de conteúdo com calendário editorial, formatos que convertem e uma estratégia de Stories focada em vendas. Você já provou que sabe engajar — agora vamos direcionar esse engajamento para a compra." },
              { num: 2, title: "Tráfego de retargeting na base", text: "Ao invés de gastar dinheiro tentando encontrar pessoas desconhecidas, vamos investir pouco para aparecer para quem já te segue, já assistiu seus vídeos e já demonstrou interesse. Conversão muito mais alta com investimento muito menor." },
              { num: 3, title: "Otimização do funil de vendas", text: "Vamos trabalhar cada etapa: alcance → clique no link da bio → visita na página de vendas → compra. Se uma etapa não funciona, a gente corrige antes de avançar. Isso é marketing como ciência, não achismo." },
              { num: 4, title: "Construção da escada de valor", text: "Com a base crescendo, vamos estruturar a jornada: curso de entrada (R$297) → materiais complementares → consultoria/mentoria (R$3.500+). Cada produto alimenta o próximo, aumentando o valor médio por cliente." },
              { num: 5, title: "Reuniões de fechamento para high-ticket", text: "Para produtos acima de R$2.000, a reunião é essencial — você já provou isso em dezembro com 7-8 fechamentos de consultoria. Vamos estruturar esse processo para que aconteça de forma consistente, não apenas em picos." },
            ].map((step, i, arr) => (
              <div className="pdb-step" key={step.num}>
                <div className="pdb-step-line">
                  <div className="pdb-step-num">{step.num}</div>
                  {i < arr.length - 1 && <div className="pdb-step-connector" />}
                </div>
                <div className="pdb-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TIMELINE */}
        <section className="pdb-section">
          <div className="pdb-section-label">Expectativa</div>
          <h2 className="pdb-section-title">Linha do tempo realista</h2>
          <p className="pdb-section-text">
            Transparência é fundamental. Resultados vêm com consistência — e a gente precisa ver as métricas evoluindo desde o primeiro mês.
          </p>
          <div className="pdb-timeline-bar">
            <div className="pdb-tl-phase">
              <div className="pdb-tl-phase-label">Mês 1</div>
              <h4>Movimento e clareza</h4>
              <p>Diagnóstico completo, estratégia definida, melhoria inicial de indicadores. Primeiros ajustes no funil e no conteúdo.</p>
            </div>
            <div className="pdb-tl-phase">
              <div className="pdb-tl-phase-label">Mês 2-3</div>
              <h4>Evolução consistente</h4>
              <p>Crescimento de alcance, cliques e audiência qualificada. Conversão começa a ganhar tração com otimizações contínuas.</p>
            </div>
            <div className="pdb-tl-phase">
              <div className="pdb-tl-phase-label">Mês 3-8</div>
              <h4>Maturação da estrutura</h4>
              <p>Funil validado, vendas com previsibilidade, base sólida para escalar. Introdução de novos produtos na escada de valor.</p>
            </div>
          </div>
        </section>

        {/* INVESTIMENTO */}
        <div className="pdb-pricing-section">
          <div className="pdb-pricing-inner">
            <div className="pdb-section-label">Investimento</div>
            <h2 className="pdb-section-title">Proposta comercial</h2>
            <p className="pdb-section-text">
              Consultoria estratégica + direcionamento de crescimento digital com foco em resultado. Formato mensal, acompanhamento contínuo.
            </p>

            <div className="pdb-pricing-cards" style={{ gridTemplateColumns: "1fr" }}>
              <div className="pdb-price-card pdb-featured">
                <div className="pdb-price-card-label">Acompanhamento Estratégico Mensal</div>
                <h3>Consultoria + Direcionamento Digital</h3>
                <div className="pdb-price">
                  <span className="pdb-amount">R$ 1.500/mês</span>
                  Acompanhamento contínuo com foco em crescimento orgânico, conversão e otimização do funil
                </div>
                <ul>
                  <li style={{ fontWeight: 600, color: "var(--text-primary)", fontSize: 15 }}>① Direcionamento de conteúdo orgânico</li>
                  <li>Definição das linhas editoriais mais estratégicas</li>
                  <li>Orientação sobre formatos com maior potencial de performance</li>
                  <li>Construção de lógica de conteúdo que aproxima a audiência da compra</li>
                  <li>Alinhamento entre conteúdo de rotina, relacionamento e venda</li>
                  <li style={{ fontWeight: 600, color: "var(--text-primary)", fontSize: 15, marginTop: 16 }}>② Funil de tráfego para público quente</li>
                  <li>Desenho da jornada de conversão para quem já conhece a marca</li>
                  <li>Definição dos públicos mais estratégicos para reimpacto</li>
                  <li>Estruturação da lógica de campanhas para audiência quente</li>
                  <li>Leitura de métricas e otimizações contínuas do funil</li>
                  <li style={{ fontWeight: 600, color: "var(--text-primary)", fontSize: 15, marginTop: 16 }}>③ Apoio na conversão da audiência</li>
                  <li>Orientação sobre Stories com intenção de venda</li>
                  <li>Ajuste de chamadas para ação e gatilhos</li>
                  <li>Estruturação de sequências de aquecimento</li>
                  <li>Alinhamento entre conteúdo, oferta e momento de conversão</li>
                  <li style={{ fontWeight: 600, color: "var(--text-primary)", fontSize: 15, marginTop: 16 }}>④ Acompanhamento estratégico</li>
                  <li>Reuniões estratégicas periódicas</li>
                  <li>Acompanhamento de alcance, cliques, tráfego e conversão</li>
                  <li>Direcionamento de oferta e construção da escada de valor</li>
                  <li>Ajustes de rota conforme resposta do conteúdo e do mercado</li>
                </ul>
              </div>
            </div>

            <div className="pdb-pricing-cards" style={{ marginTop: 24 }}>
              <div className="pdb-price-card">
                <div className="pdb-price-card-label">O que não está incluso</div>
                <ul>
                  <li>Produção ou gravação de conteúdo pela nossa equipe</li>
                  <li>Edição de vídeos</li>
                  <li>Atendimento comercial via WhatsApp</li>
                  <li>Operação de social media</li>
                  <li>Gestão de tráfego pago frio como foco principal</li>
                  <li>Criação técnica de landing pages e automações (orçamento à parte se necessário)</li>
                </ul>
              </div>
              <div className="pdb-price-card">
                <div className="pdb-price-card-label">Seu compromisso</div>
                <ul>
                  <li>Gravação recorrente de conteúdos</li>
                  <li>Execução da rotina de publicação</li>
                  <li>Alinhamento com a equipe de captação/edição</li>
                  <li>Retorno sobre métricas, percepções e vendas</li>
                  <li>Participação nas reuniões estratégicas</li>
                  <li>Implementação dos direcionamentos combinados</li>
                </ul>
              </div>
            </div>

            <p className="pdb-section-text" style={{ marginTop: 32, fontStyle: "italic", fontSize: 14 }}>
              A estratégia reduz risco, mas o resultado depende da constância. Esse projeto funciona melhor quando existe consistência de execução.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="pdb-cta-section">
          <div className="pdb-section-label">Próximo passo</div>
          <h2 className="pdb-section-title">Vamos construir isso juntos?</h2>
          <p className="pdb-section-text" style={{ margin: "0 auto" }}>
            Se fizer sentido seguir, o próximo passo é validar o formato, alinhar a rotina de acompanhamento, organizar os ativos atuais e iniciar o diagnóstico do funil e da operação de conteúdo.
          </p>
          <a href="https://wa.me/5551999999999" className="pdb-cta-btn" target="_blank" rel="noopener noreferrer">
            Falar com Rodrigo →
          </a>
        </div>

        <div className="pdb-footer">
          Freedom Agency © 2026 — Proposta válida por 7 dias
        </div>
      </div>
    </>
  );
};

export default PropostaDudaBambil;
