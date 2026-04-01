import { useEffect } from "react";

const PropostaWesleySardou = () => {
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

        .ws-page {
          --bg-dark: #0a0a0a;
          --bg-section: #111111;
          --bg-card: #1a1a1a;
          --bg-card-hover: #222222;
          --gold: #c8956c;
          --gold-light: #e0b893;
          --gold-dark: #a06d42;
          --cream: #f5efe6;
          --text-primary: #f0ebe3;
          --text-secondary: #9a9590;
          --text-muted: #6b6560;
          --accent-green: #5a9a6a;
          --accent-red: #c0604a;
          --border: rgba(200,149,108,0.15);
          --border-strong: rgba(200,149,108,0.3);
          --gradient-gold: linear-gradient(135deg, #a06d42, #c8956c, #e0b893);
          --shadow-gold: 0 0 60px rgba(200,149,108,0.08);

          font-family: 'DM Sans', sans-serif;
          background: var(--bg-dark);
          color: var(--text-primary);
          line-height: 1.75;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
        }

        .ws-container {
          max-width: 820px;
          margin: 0 auto;
          padding: 0 28px;
        }

        .ws-section-label {
          display: inline-block;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 16px;
        }

        .ws-section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(28px, 5vw, 42px);
          font-weight: 700;
          line-height: 1.25;
          color: var(--cream);
          margin-bottom: 20px;
        }

        .ws-section-subtitle {
          font-size: 17px;
          color: var(--text-secondary);
          max-width: 620px;
          line-height: 1.8;
        }

        .ws-divider {
          height: 1px;
          background: var(--border);
          margin: 80px auto;
          max-width: 200px;
        }

        /* HERO */
        .ws-hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 60px 24px;
          position: relative;
          background:
            radial-gradient(ellipse at 30% 20%, rgba(160,109,66,0.07) 0%, transparent 60%),
            radial-gradient(ellipse at 70% 80%, rgba(200,149,108,0.04) 0%, transparent 50%),
            var(--bg-dark);
        }

        .ws-hero::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: var(--gradient-gold);
          opacity: 0.4;
        }

        .ws-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 20px;
          border: 1px solid var(--border);
          border-radius: 100px;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 40px;
          animation: ws-fadeDown 0.8s ease;
        }

        .ws-hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(36px, 6vw, 60px);
          font-weight: 800;
          line-height: 1.15;
          color: var(--cream);
          margin-bottom: 24px;
          max-width: 700px;
          animation: ws-fadeUp 0.8s ease 0.1s both;
        }

        .ws-hero-title .ws-gold { color: var(--gold); }

        .ws-hero-desc {
          font-size: 18px;
          color: var(--text-secondary);
          max-width: 540px;
          margin: 0 auto 48px;
          line-height: 1.8;
          animation: ws-fadeUp 0.8s ease 0.2s both;
        }

        .ws-hero-meta {
          display: flex;
          gap: 40px;
          justify-content: center;
          flex-wrap: wrap;
          animation: ws-fadeUp 0.8s ease 0.3s both;
        }

        .ws-hero-meta-item { text-align: center; }

        .ws-hero-meta-item .ws-value {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          font-weight: 700;
          color: var(--gold);
          display: block;
        }

        .ws-hero-meta-item .ws-label {
          font-size: 12px;
          color: var(--text-muted);
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-top: 4px;
        }

        /* SECTIONS */
        .ws-page section { padding: 100px 0; }

        .ws-section-dark {
          background: var(--bg-section);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }

        /* ABOUT */
        .ws-about-text {
          font-size: 17px;
          color: var(--text-secondary);
          line-height: 1.9;
          max-width: 680px;
        }

        .ws-about-text + .ws-about-text { margin-top: 16px; }

        .ws-about-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 24px;
          margin-top: 48px;
        }

        .ws-about-stat {
          padding: 28px;
          border: 1px solid var(--border);
          border-radius: 12px;
          text-align: center;
          background: var(--bg-card);
        }

        .ws-about-stat .ws-num {
          font-family: 'Playfair Display', serif;
          font-size: 32px;
          font-weight: 700;
          color: var(--gold);
          display: block;
        }

        .ws-about-stat .ws-txt {
          font-size: 13px;
          color: var(--text-muted);
          margin-top: 6px;
          letter-spacing: 0.5px;
        }

        /* DIAGNOSTICO */
        .ws-diag-grid {
          display: grid;
          gap: 20px;
          margin-top: 48px;
        }

        .ws-diag-card {
          display: flex;
          gap: 20px;
          padding: 32px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 12px;
          transition: border-color 0.3s;
        }

        .ws-diag-card:hover { border-color: var(--border-strong); }

        .ws-diag-number {
          font-family: 'Playfair Display', serif;
          font-size: 36px;
          font-weight: 700;
          color: var(--gold);
          opacity: 0.4;
          line-height: 1;
          flex-shrink: 0;
          width: 40px;
        }

        .ws-diag-content h4 {
          font-size: 17px;
          font-weight: 600;
          color: var(--cream);
          margin-bottom: 8px;
        }

        .ws-diag-content p {
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.75;
        }

        /* CAMADAS */
        .ws-layer-block {
          margin-top: 60px;
          padding: 48px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 16px;
          position: relative;
          overflow: hidden;
        }

        .ws-layer-block::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: var(--gradient-gold);
          opacity: 0.5;
        }

        .ws-layer-block + .ws-layer-block { margin-top: 32px; }

        .ws-layer-tag {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 12px;
        }

        .ws-layer-title {
          font-family: 'Playfair Display', serif;
          font-size: 26px;
          font-weight: 700;
          color: var(--cream);
          margin-bottom: 16px;
        }

        .ws-layer-desc {
          font-size: 16px;
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 28px;
          max-width: 640px;
        }

        .ws-layer-items {
          list-style: none;
          display: grid;
          gap: 12px;
          padding: 0;
        }

        .ws-layer-items li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.65;
        }

        .ws-layer-items li::before {
          content: '→';
          color: var(--gold);
          flex-shrink: 0;
          margin-top: 1px;
          font-weight: 600;
        }

        .ws-layer-highlight {
          margin-top: 24px;
          padding: 20px 24px;
          background: rgba(200,149,108,0.06);
          border-left: 3px solid var(--gold);
          border-radius: 0 8px 8px 0;
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.75;
          font-style: italic;
        }

        /* MODELO DE PARCERIA */
        .ws-partnership-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-top: 48px;
        }

        .ws-partner-card {
          padding: 40px 32px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 16px;
          position: relative;
          overflow: hidden;
        }

        .ws-partner-card.ws-featured {
          border-color: var(--gold-dark);
          box-shadow: var(--shadow-gold);
        }

        .ws-partner-card.ws-featured::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: var(--gradient-gold);
        }

        .ws-partner-percent {
          font-family: 'Playfair Display', serif;
          font-size: 52px;
          font-weight: 800;
          color: var(--gold);
          line-height: 1;
          margin-bottom: 4px;
        }

        .ws-partner-label {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 20px;
        }

        .ws-partner-title {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          font-weight: 700;
          color: var(--cream);
          margin-bottom: 12px;
        }

        .ws-partner-desc {
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.75;
        }

        .ws-partner-scope {
          margin-top: 20px;
          list-style: none;
          padding: 0;
        }

        .ws-partner-scope li {
          font-size: 14px;
          color: var(--text-muted);
          padding: 6px 0;
          border-bottom: 1px solid rgba(200,149,108,0.08);
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .ws-partner-scope li::before {
          content: '✓';
          color: var(--gold);
          font-weight: 600;
          font-size: 13px;
        }

        /* ENTREGAVEIS */
        .ws-deliverables-list {
          margin-top: 48px;
          display: grid;
          gap: 16px;
        }

        .ws-deliverable-row {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px 24px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 10px;
          transition: border-color 0.3s, background 0.3s;
        }

        .ws-deliverable-row:hover {
          border-color: var(--border-strong);
          background: var(--bg-card-hover);
        }

        .ws-deliverable-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(200,149,108,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 18px;
        }

        .ws-deliverable-text {
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .ws-deliverable-text strong {
          color: var(--cream);
          font-weight: 600;
        }

        /* BENEFICIOS */
        .ws-benefits-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-top: 48px;
        }

        .ws-benefit-card {
          padding: 32px;
          border: 1px solid var(--border);
          border-radius: 12px;
          background: var(--bg-card);
        }

        .ws-benefit-card h4 {
          font-family: 'Playfair Display', serif;
          font-size: 18px;
          font-weight: 700;
          color: var(--cream);
          margin-bottom: 10px;
        }

        .ws-benefit-card p {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.75;
        }

        /* CTA */
        .ws-cta-section {
          text-align: center;
          padding: 120px 24px;
          position: relative;
          background:
            radial-gradient(ellipse at 50% 50%, rgba(160,109,66,0.06) 0%, transparent 60%),
            var(--bg-dark);
        }

        .ws-cta-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 18px 48px;
          background: var(--gradient-gold);
          color: var(--bg-dark);
          text-decoration: none;
          font-weight: 700;
          font-size: 15px;
          letter-spacing: 1px;
          text-transform: uppercase;
          border-radius: 100px;
          margin-top: 36px;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .ws-cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(200,149,108,0.3);
        }

        .ws-cta-note {
          font-size: 13px;
          color: var(--text-muted);
          margin-top: 16px;
        }

        /* FOOTER */
        .ws-footer {
          padding: 40px 0;
          text-align: center;
          border-top: 1px solid var(--border);
        }

        .ws-footer p {
          font-size: 13px;
          color: var(--text-muted);
          letter-spacing: 0.5px;
        }

        .ws-footer .ws-brand {
          color: var(--gold);
          font-weight: 600;
        }

        /* ANIMATIONS */
        @keyframes ws-fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes ws-fadeDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* RESPONSIVE */
        @media (max-width: 640px) {
          .ws-page section { padding: 64px 0; }
          .ws-layer-block { padding: 28px 20px; }
          .ws-hero-meta { gap: 24px; }
          .ws-diag-card { flex-direction: column; gap: 8px; }
          .ws-diag-number { font-size: 24px; }
          .ws-partner-card { padding: 28px 20px; }
          .ws-partnership-grid { grid-template-columns: 1fr; }
          .ws-benefits-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="ws-page">
        {/* HERO */}
        <div className="ws-hero">
          <div className="ws-hero-badge">Proposta Estratégica — Documento Confidencial</div>
          <h1 className="ws-hero-title">
            Construção do <span className="ws-gold">Ecossistema de Monetização</span>
          </h1>
          <p className="ws-hero-desc">
            Proposta de parceria estratégica para transformar audiência qualificada em receita
            recorrente e previsível através de tecnologia, automação e inteligência artificial.
          </p>
          <div className="ws-hero-meta">
            <div className="ws-hero-meta-item">
              <span className="ws-value">Wesley Sardou</span>
              <span className="ws-label">Visão & Audiência</span>
            </div>
            <div className="ws-hero-meta-item">
              <span className="ws-value">Rodrigo Albuquerque</span>
              <span className="ws-label">Estratégia & Tecnologia</span>
            </div>
          </div>
        </div>

        {/* SOBRE */}
        <section>
          <div className="ws-container">
            <span className="ws-section-label">Quem está por trás</span>
            <h2 className="ws-section-title">Sobre Rodrigo Albuquerque</h2>
            <p className="ws-about-text">
              Rodrigo Albuquerque investiu meio milhão de reais para passar dois anos sendo
              mentorado e aprendendo com alguns dos maiores empreendedores do país. É
              especialista em Inteligência Artificial aplicada a negócios e já ajudou mais de
              100 empresas a implementarem sistemas que geram resultados reais.
            </p>
            <p className="ws-about-text">
              Tem como diferencial a capacidade de construir ecossistemas completos — do
              produto digital ao CRM inteligente — que transformam audiência em receita
              previsível e escalável.
            </p>

            <div className="ws-about-stats">
              <div className="ws-about-stat">
                <span className="ws-num">100+</span>
                <span className="ws-txt">Empresas atendidas</span>
              </div>
              <div className="ws-about-stat">
                <span className="ws-num">R$ 500K</span>
                <span className="ws-txt">Investidos em formação</span>
              </div>
              <div className="ws-about-stat">
                <span className="ws-num">IA</span>
                <span className="ws-txt">Especialista aplicada a negócios</span>
              </div>
            </div>
          </div>
        </section>

        <div className="ws-divider" />

        {/* DIAGNOSTICO */}
        <section>
          <div className="ws-container">
            <span className="ws-section-label">Diagnóstico</span>
            <h2 className="ws-section-title">O que está sendo deixado na mesa</h2>
            <p className="ws-section-subtitle">
              Wesley, a sua audiência já confia em você. Pessoas qualificadas, com dinheiro,
              consumindo seu conteúdo diariamente. Hoje, esse potencial não está sendo
              convertido por três razões:
            </p>

            <div className="ws-diag-grid">
              <div className="ws-diag-card">
                <span className="ws-diag-number">1</span>
                <div className="ws-diag-content">
                  <h4>Sem produto próprio para capturar a demanda</h4>
                  <p>
                    Conteúdo gera interesse, mas não existe um destino para transformar essa
                    atenção em receita. Cada vídeo que viraliza é dinheiro que passa pela sua
                    mão e vai embora.
                  </p>
                </div>
              </div>
              <div className="ws-diag-card">
                <span className="ws-diag-number">2</span>
                <div className="ws-diag-content">
                  <h4>Sem sistema para qualificar e nutrir leads</h4>
                  <p>
                    Quando alguém demonstra interesse em processo migratório ou em vir para o
                    Texas, essa conversa morre no DM. Sem CRM, sem automação, sem seguimento.
                    Lead que não é nutrido esfria e se perde.
                  </p>
                </div>
              </div>
              <div className="ws-diag-card">
                <span className="ws-diag-number">3</span>
                <div className="ws-diag-content">
                  <h4>Sem ecossistema para gerar negócios recorrentes</h4>
                  <p>
                    Parceria com advogado, acesso a empresários brasileiros no Texas, conexões
                    com influenciadores — tudo desconectado. Cada oportunidade depende de ação
                    manual, memória e disponibilidade pessoal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SOLUCAO */}
        <section className="ws-section-dark">
          <div className="ws-container">
            <span className="ws-section-label">A Solução</span>
            <h2 className="ws-section-title">
              Três camadas para construir uma máquina de monetização
            </h2>
            <p className="ws-section-subtitle">
              Um ecossistema integrado que transforma atenção em receita, leads em
              oportunidades e dados em decisões inteligentes.
            </p>

            {/* CAMADA 1 */}
            <div className="ws-layer-block">
              <div className="ws-layer-tag">Camada 1</div>
              <h3 className="ws-layer-title">Aplicativo de Imigração</h3>
              <p className="ws-layer-desc">
                Produto digital de pagamento único ($39) com informação completa sobre
                processos migratórios para os EUA: tipos de visto, custos, documentação e
                atualizações legislativas. Modelo superior ao concorrente que cobra
                mensalidade — maior conversão, melhor percepção de valor, zero atrito no
                cancelamento.
              </p>
              <ul className="ws-layer-items">
                <li>Aplicativo completo com conteúdo estruturado e navegação intuitiva</li>
                <li>Sistema de pagamento integrado (Stripe, em dólar)</li>
                <li>Interface responsiva e profissional para mobile e desktop</li>
                <li>Área de membros com acesso permanente</li>
                <li>Infraestrutura preparada para atualizações contínuas de conteúdo</li>
              </ul>
              <div className="ws-layer-highlight">
                Esse produto gera receita direta, captura dados de potenciais clientes
                qualificados e funciona como filtro natural para identificar quem precisa de
                acompanhamento profissional.
              </div>
            </div>

            {/* CAMADA 2 */}
            <div className="ws-layer-block">
              <div className="ws-layer-tag">Camada 2</div>
              <h3 className="ws-layer-title">Curso Completo sobre o Texas</h3>
              <p className="ws-layer-desc">
                Produto de ticket médio ($197) voltado para brasileiros que estão considerando
                o Texas como destino — seja para morar, investir ou empreender. Conteúdo
                exclusivo cobrindo custo de vida, oportunidades de negócio, aspectos culturais
                e tudo que um empresário precisa saber antes de tomar uma decisão dessa
                magnitude.
              </p>
              <ul className="ws-layer-items">
                <li>Área de membros completa com módulos estruturados</li>
                <li>Sistema de pagamento e entrega automatizada</li>
                <li>Estrutura técnica pronta para gravação e publicação contínua</li>
                <li>Integração com o ecossistema para upsell e cross-sell</li>
              </ul>
              <div className="ws-layer-highlight">
                Para o empresário que está levando a família para os EUA, $197 é irrelevante
                diante do risco de tomar uma decisão errada sobre onde morar. O conteúdo se
                paga na primeira dúvida resolvida.
              </div>
            </div>

            {/* CAMADA 3 */}
            <div className="ws-layer-block">
              <div className="ws-layer-tag">Camada 3</div>
              <h3 className="ws-layer-title">CRM, Automações e Nutrição Inteligente</h3>
              <p className="ws-layer-desc">
                Todo comprador de qualquer produto entra automaticamente em um sistema
                inteligente que classifica, nutre e qualifica — transformando cada venda em
                múltiplas oportunidades de negócio.
              </p>
              <ul className="ws-layer-items">
                <li>CRM completo integrado aos produtos (captura automática na compra)</li>
                <li>Automação de WhatsApp para follow-up e nutrição pós-compra</li>
                <li>
                  Sistema de qualificação com IA que identifica perfil do lead (advogado,
                  mentoria, investimento)
                </li>
                <li>
                  Fluxos de nutrição por e-mail e WhatsApp segmentados por interesse
                </li>
                <li>
                  Dashboard com métricas de vendas, conversão e pipeline em tempo real
                </li>
              </ul>
              <div className="ws-layer-highlight">
                Nada se perde. Cada comprador vira um dado. Cada dado vira uma oportunidade. O
                sistema trabalha 24 horas por dia qualificando e direcionando leads.
              </div>
            </div>

            {/* CAMADA 4 */}
            <div className="ws-layer-block">
              <div className="ws-layer-tag">Camada 4</div>
              <h3 className="ws-layer-title">O Ecossistema Central</h3>
              <p className="ws-layer-desc">
                Aqui o jogo muda de escala. Com a base de dados crescendo, Wesley se torna uma
                central de negócios para brasileiros nos EUA — e cada novo lead alimenta
                múltiplas fontes de receita.
              </p>
              <ul className="ws-layer-items">
                <li>
                  Plataforma centralizada para gestão de todas as frentes de negócio
                </li>
                <li>
                  Sistema de indicação inteligente: o CRM identifica perfil e direciona para o
                  parceiro certo (advogado, consultoria financeira, contabilidade)
                </li>
                <li>Controle de comissões e indicações com rastreamento completo</li>
                <li>Painel unificado com visão de todas as fontes de receita</li>
                <li>
                  Infraestrutura para adicionar novos produtos e parcerias sem limite
                </li>
              </ul>
              <div className="ws-layer-highlight">
                Quanto mais gente entra no ecossistema, mais conexões são geradas e mais
                receita é produzida — sem depender de atenção individual para cada pessoa.
              </div>
            </div>
          </div>
        </section>

        {/* MODELO DE PARCERIA */}
        <section>
          <div className="ws-container">
            <span className="ws-section-label">Modelo de Parceria</span>
            <h2 className="ws-section-title">Estrutura de remuneração</h2>
            <p className="ws-section-subtitle">
              Esta não é uma proposta de prestação de serviço. É uma proposta de sociedade no
              projeto, com pele no jogo dos dois lados.
            </p>

            <div className="ws-partnership-grid">
              <div className="ws-partner-card ws-featured">
                <div className="ws-partner-percent">50%</div>
                <div className="ws-partner-label">Do faturamento</div>
                <h3 className="ws-partner-title">Infoprodutos</h3>
                <p className="ws-partner-desc">
                  Participação sobre o faturamento bruto de todos os produtos digitais criados
                  dentro do ecossistema.
                </p>
                <ul className="ws-partner-scope">
                  <li>Aplicativo de Imigração ($39)</li>
                  <li>Curso do Texas ($197)</li>
                  <li>Futuros infoprodutos do ecossistema</li>
                </ul>
              </div>

              <div className="ws-partner-card">
                <div className="ws-partner-percent">10%</div>
                <div className="ws-partner-label">Da receita gerada</div>
                <h3 className="ws-partner-title">Negócios do Ecossistema</h3>
                <p className="ws-partner-desc">
                  Participação sobre toda receita gerada a partir de leads capturados e
                  qualificados pelo ecossistema.
                </p>
                <ul className="ws-partner-scope">
                  <li>Fechamentos do advogado parceiro</li>
                  <li>Indicações para advogada da Eliane</li>
                  <li>Consultorias financeiras e contábeis</li>
                  <li>Qualquer negócio originado pelo ecossistema</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="ws-divider" />

        {/* ENTREGAVEIS */}
        <section>
          <div className="ws-container">
            <span className="ws-section-label">Contrapartida técnica</span>
            <h2 className="ws-section-title">O que será construído e entregue</h2>
            <p className="ws-section-subtitle">
              Todo o ecossistema técnico é de responsabilidade de Rodrigo Albuquerque — do
              desenvolvimento inicial à evolução contínua.
            </p>

            <div className="ws-deliverables-list">
              <div className="ws-deliverable-row">
                <div className="ws-deliverable-icon">⚡</div>
                <div className="ws-deliverable-text">
                  <strong>Aplicativo de Imigração completo</strong> — desenvolvimento, design,
                  sistema de pagamento e entrega
                </div>
              </div>
              <div className="ws-deliverable-row">
                <div className="ws-deliverable-icon">🎓</div>
                <div className="ws-deliverable-text">
                  <strong>Estrutura técnica do Curso do Texas</strong> — área de membros,
                  pagamento integrado e entrega automatizada
                </div>
              </div>
              <div className="ws-deliverable-row">
                <div className="ws-deliverable-icon">🤖</div>
                <div className="ws-deliverable-text">
                  <strong>CRM inteligente com IA</strong> — captura, qualificação e
                  classificação automática de leads
                </div>
              </div>
              <div className="ws-deliverable-row">
                <div className="ws-deliverable-icon">💬</div>
                <div className="ws-deliverable-text">
                  <strong>Automações de WhatsApp e e-mail</strong> — nutrição, follow-up e
                  segmentação por perfil de interesse
                </div>
              </div>
              <div className="ws-deliverable-row">
                <div className="ws-deliverable-icon">📊</div>
                <div className="ws-deliverable-text">
                  <strong>Dashboard completo de métricas</strong> — vendas, conversão, pipeline
                  e performance em tempo real
                </div>
              </div>
              <div className="ws-deliverable-row">
                <div className="ws-deliverable-icon">🔗</div>
                <div className="ws-deliverable-text">
                  <strong>Plataforma do ecossistema</strong> — gestão de indicações, comissões
                  e parceiros com rastreamento completo
                </div>
              </div>
              <div className="ws-deliverable-row">
                <div className="ws-deliverable-icon">🔄</div>
                <div className="ws-deliverable-text">
                  <strong>Evolução contínua</strong> — novos produtos, integrações e
                  funcionalidades conforme o ecossistema cresce
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFICIOS */}
        <section className="ws-section-dark">
          <div className="ws-container">
            <span className="ws-section-label">Por que funciona</span>
            <h2 className="ws-section-title">Vantagens da estrutura proposta</h2>

            <div className="ws-benefits-grid">
              <div className="ws-benefit-card">
                <h4>Zero investimento inicial em tecnologia</h4>
                <p>
                  Todo o desenvolvimento, hospedagem e manutenção técnica está incluído na
                  parceria. Sem custos fixos, sem risco financeiro.
                </p>
              </div>
              <div className="ws-benefit-card">
                <h4>Modelo ganha-ganha</h4>
                <p>
                  Quanto mais o ecossistema fatura, mais todos ganham. Os incentivos estão
                  alinhados para crescimento mútuo.
                </p>
              </div>
              <div className="ws-benefit-card">
                <h4>Sem conflito com parceiros existentes</h4>
                <p>
                  Cada advogado recebe leads do seu respectivo canal. A estrutura foi desenhada
                  para complementar, nunca competir.
                </p>
              </div>
              <div className="ws-benefit-card">
                <h4>Escalável por design</h4>
                <p>
                  O sistema comporta 100 ou 10.000 leads sem exigir mais atenção humana. A
                  tecnologia escala, a receita acompanha.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="ws-cta-section">
          <div className="ws-container">
            <span className="ws-section-label">Próximo passo</span>
            <h2 className="ws-section-title">Pronto para construir o ecossistema?</h2>
            <p className="ws-section-subtitle" style={{ margin: "0 auto" }}>
              Wesley, o concorrente já está no ar cobrando mensalidade com um produto inferior.
              A oportunidade é entrar agora com produto melhor, preço mais inteligente e um
              sistema por trás que eles nem imaginam que existe.
            </p>
            <a
              href="https://wa.me/5511999718595?text=Wesley%2C%20vamos%20fechar%20a%20parceria"
              className="ws-cta-button"
            >
              Fechar parceria →
            </a>
            <p className="ws-cta-note">
              Primeira versão do aplicativo rodando na próxima semana
            </p>
          </div>
        </div>

        {/* FOOTER */}
        <div className="ws-footer">
          <div className="ws-container">
            <p>
              Proposta elaborada por{" "}
              <span className="ws-brand">Rodrigo Albuquerque — Freedom Agency</span>
            </p>
            <p style={{ marginTop: "8px" }}>Documento confidencial · Abril 2026</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropostaWesleySardou;
