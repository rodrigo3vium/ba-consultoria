import { useEffect } from "react";

const PropostaGiuliaSalvatora = () => {
  useEffect(() => {
    const prev = {
      bg: document.body.style.backgroundColor,
      color: document.body.style.color,
      pt: document.body.style.paddingTop,
    };
    document.body.style.backgroundColor = "#0e1a0f";
    document.body.style.color = "#f0e6d0";
    document.body.style.paddingTop = "0";
    return () => {
      document.body.style.backgroundColor = prev.bg;
      document.body.style.color = prev.color;
      document.body.style.paddingTop = prev.pt;
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".gs-reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=IM+Fell+English:ital@0;1&display=swap');

        .gs-page {
          --bg-deep: #0e1a0f;
          --bg-surface: #162318;
          --bg-card: #1c2e1e;
          --bg-card-hover: #243828;
          --gold: #c9a227;
          --gold-light: #dbb83a;
          --gold-dim: rgba(201, 162, 39, 0.15);
          --gold-glow: rgba(201, 162, 39, 0.06);
          --gold-muted: rgba(201, 162, 39, 0.35);
          --parchment: #f0e6d0;
          --cream: #ddd4b8;
          --muted: #6b7d5a;
          --text-dim: rgba(240, 230, 208, 0.5);
          --oxblood: #6b1a1a;
          --border: rgba(201, 162, 39, 0.12);
          --border-strong: rgba(201, 162, 39, 0.25);
          --font-display: 'Playfair Display', Georgia, serif;
          --font-body: 'Cormorant Garamond', Georgia, serif;
          --font-accent: 'IM Fell English', Georgia, serif;

          font-family: var(--font-body);
          color: var(--parchment);
          background: var(--bg-deep);
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
        }

        .gs-page::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 9999;
        }

        .gs-ambient-glow {
          position: fixed;
          width: 700px;
          height: 700px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(201,162,39,0.03) 0%, transparent 65%);
          pointer-events: none;
          z-index: 0;
          top: -250px;
          right: -250px;
        }

        .gs-ambient-glow-2 {
          position: fixed;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(45,74,48,0.15) 0%, transparent 65%);
          pointer-events: none;
          z-index: 0;
          bottom: -150px;
          left: -150px;
        }

        .gs-container {
          max-width: 820px;
          margin: 0 auto;
          padding: 0 28px;
          position: relative;
          z-index: 1;
        }

        .gs-ornament {
          text-align: center;
          color: var(--gold);
          opacity: 0.3;
          letter-spacing: 12px;
          font-size: 13px;
          padding: 48px 0;
          font-family: var(--font-accent);
        }

        .gs-thin-rule {
          height: 1px;
          background: linear-gradient(to right, transparent, var(--border-strong), transparent);
        }

        /* HERO */
        .gs-hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 80px 28px;
          position: relative;
        }

        .gs-hero-eyebrow {
          font-family: var(--font-accent);
          font-style: italic;
          font-size: 14px;
          color: var(--gold);
          letter-spacing: 4px;
          margin-bottom: 32px;
          opacity: 0;
          animation: gs-fadeUp 0.9s ease forwards 0.2s;
        }

        .gs-hero h1 {
          font-family: var(--font-display);
          font-size: clamp(2.6rem, 5.5vw, 4rem);
          font-weight: 700;
          line-height: 1.15;
          color: var(--parchment);
          margin-bottom: 28px;
          letter-spacing: 1px;
          opacity: 0;
          animation: gs-fadeUp 0.9s ease forwards 0.4s;
        }

        .gs-hero h1 em {
          font-style: italic;
          font-weight: 400;
          color: var(--gold);
        }

        .gs-hero-sub {
          font-family: var(--font-body);
          font-size: 1.2rem;
          font-weight: 300;
          line-height: 1.8;
          color: var(--cream);
          max-width: 500px;
          margin-bottom: 48px;
          opacity: 0;
          animation: gs-fadeUp 0.9s ease forwards 0.6s;
        }

        .gs-hero-flourish {
          font-family: var(--font-accent);
          font-style: italic;
          font-size: 13px;
          color: var(--gold);
          letter-spacing: 8px;
          opacity: 0;
          animation: gs-fadeUp 0.9s ease forwards 0.8s;
        }

        /* SECTIONS */
        .gs-page section {
          padding: 80px 0;
        }

        .gs-section-label {
          font-family: var(--font-accent);
          font-size: 11px;
          letter-spacing: 5px;
          text-transform: uppercase;
          color: var(--gold);
          opacity: 0.7;
          margin-bottom: 14px;
        }

        .gs-section-title {
          font-family: var(--font-display);
          font-size: clamp(1.7rem, 3.5vw, 2.4rem);
          font-weight: 400;
          line-height: 1.3;
          color: var(--cream);
          margin-bottom: 16px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border);
        }

        .gs-section-desc {
          font-family: var(--font-body);
          font-size: 1.1rem;
          font-weight: 300;
          line-height: 1.85;
          color: var(--text-dim);
          max-width: 580px;
          margin-bottom: 48px;
          font-style: italic;
        }

        /* FRENTES */
        .gs-frente {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 4px;
          padding: 44px 40px;
          margin-bottom: 20px;
          position: relative;
          transition: all 0.4s ease;
        }

        .gs-frente:hover {
          border-color: var(--border-strong);
          background: var(--bg-card-hover);
        }

        .gs-frente::before {
          content: '';
          position: absolute;
          top: 0;
          left: 40px;
          right: 40px;
          height: 1px;
          background: linear-gradient(to right, transparent, var(--gold-dim), transparent);
        }

        .gs-frente-number {
          font-family: var(--font-accent);
          font-style: italic;
          font-size: 12px;
          color: var(--gold);
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .gs-frente-number::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--border);
        }

        .gs-frente h3 {
          font-family: var(--font-display);
          font-size: 1.45rem;
          font-weight: 500;
          margin-bottom: 18px;
          line-height: 1.35;
          color: var(--cream);
        }

        .gs-frente-desc {
          font-family: var(--font-body);
          color: var(--text-dim);
          line-height: 1.8;
          font-size: 1.05rem;
          font-weight: 300;
          margin-bottom: 20px;
          font-style: italic;
        }

        .gs-deliverable-list {
          list-style: none;
          margin-top: 24px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          padding: 0;
        }

        .gs-deliverable-list li {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          font-family: var(--font-body);
          font-size: 1rem;
          color: rgba(240, 230, 208, 0.7);
          line-height: 1.7;
          font-weight: 400;
        }

        .gs-deliverable-list li::before {
          content: '✦';
          color: var(--gold);
          font-size: 8px;
          margin-top: 8px;
          flex-shrink: 0;
          opacity: 0.6;
        }

        .gs-highlight-box {
          background: var(--gold-glow);
          border: 1px solid var(--gold-dim);
          border-left: 3px solid var(--gold);
          border-radius: 2px;
          padding: 20px 24px;
          margin-top: 24px;
          font-family: var(--font-accent);
          font-style: italic;
          font-size: 0.95rem;
          color: var(--gold-light);
          line-height: 1.7;
        }

        /* MODELO COMERCIAL */
        .gs-modelo-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 28px;
        }

        .gs-modelo-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 4px;
          padding: 40px 32px;
          text-align: center;
          transition: all 0.4s ease;
          position: relative;
        }

        .gs-modelo-card:hover {
          border-color: var(--border-strong);
        }

        .gs-modelo-card .gs-percentage {
          font-family: var(--font-display);
          font-size: 3.4rem;
          font-weight: 700;
          color: var(--gold);
          line-height: 1;
          margin-bottom: 6px;
          letter-spacing: -1px;
        }

        .gs-modelo-card .gs-percentage span {
          font-size: 1.4rem;
          font-weight: 400;
        }

        .gs-modelo-card .gs-product-name {
          font-family: var(--font-body);
          font-size: 1.05rem;
          color: var(--cream);
          font-weight: 500;
          margin-bottom: 6px;
        }

        .gs-modelo-card .gs-product-detail {
          font-family: var(--font-accent);
          font-style: italic;
          font-size: 0.8rem;
          color: var(--muted);
        }

        .gs-modelo-quote {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 4px;
          padding: 32px 36px;
          position: relative;
        }

        .gs-modelo-quote::before {
          content: '"';
          font-family: var(--font-display);
          font-size: 5rem;
          color: var(--gold);
          opacity: 0.12;
          position: absolute;
          top: 4px;
          left: 20px;
          line-height: 1;
        }

        .gs-modelo-quote p {
          font-family: var(--font-accent);
          font-style: italic;
          font-size: 1rem;
          color: rgba(240, 230, 208, 0.6);
          line-height: 1.8;
          padding-left: 28px;
        }

        /* PROXIMOS PASSOS */
        .gs-steps-list {
          counter-reset: step;
          display: flex;
          flex-direction: column;
        }

        .gs-step-item {
          counter-increment: step;
          display: flex;
          align-items: flex-start;
          gap: 24px;
          padding: 24px 0;
          border-bottom: 1px solid var(--border);
          transition: all 0.3s ease;
        }

        .gs-step-item:last-child {
          border-bottom: none;
        }

        .gs-step-item:hover {
          padding-left: 8px;
        }

        .gs-step-item::before {
          content: counter(step, decimal-leading-zero);
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--gold);
          flex-shrink: 0;
          margin-top: 2px;
          min-width: 30px;
          opacity: 0.7;
        }

        .gs-step-text {
          font-family: var(--font-body);
          font-size: 1.02rem;
          color: rgba(240, 230, 208, 0.65);
          line-height: 1.7;
          font-weight: 400;
        }

        .gs-step-text strong {
          color: var(--cream);
          font-weight: 600;
        }

        /* CTA */
        .gs-cta-section {
          text-align: center;
          padding: 100px 28px 60px;
        }

        .gs-cta-section h2 {
          font-family: var(--font-display);
          font-size: clamp(1.5rem, 3.2vw, 2rem);
          font-weight: 400;
          margin-bottom: 12px;
          line-height: 1.35;
          color: var(--cream);
        }

        .gs-cta-section h2 em {
          font-style: italic;
          color: var(--gold);
        }

        .gs-cta-section p {
          font-family: var(--font-accent);
          font-style: italic;
          color: var(--muted);
          font-size: 1rem;
          margin-bottom: 40px;
        }

        .gs-cta-button {
          display: inline-block;
          padding: 14px 40px;
          border: 1px solid var(--gold);
          color: var(--gold);
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 4px;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 3px;
          transition: all 0.4s ease;
          background: transparent;
        }

        .gs-cta-button:hover {
          background: var(--gold);
          color: var(--bg-deep);
          box-shadow: 0 4px 24px rgba(201, 162, 39, 0.15);
        }

        /* FOOTER */
        .gs-footer {
          text-align: center;
          padding: 40px 28px;
          border-top: 1px solid var(--border);
        }

        .gs-footer-brand {
          font-family: var(--font-display);
          font-size: 14px;
          color: var(--muted);
          font-weight: 500;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .gs-footer-brand span {
          color: var(--gold);
        }

        .gs-footer-sub {
          font-family: var(--font-accent);
          font-style: italic;
          font-size: 12px;
          color: var(--muted);
          margin-top: 8px;
          opacity: 0.5;
        }

        /* ANIMATIONS */
        @keyframes gs-fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .gs-reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .gs-reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .gs-modelo-grid {
            grid-template-columns: 1fr;
          }
          .gs-frente {
            padding: 32px 24px;
          }
          .gs-page section {
            padding: 56px 0;
          }
          .gs-hero {
            padding: 60px 20px;
          }
          .gs-modelo-quote p {
            padding-left: 16px;
          }
        }
      `}</style>

      <div className="gs-page">
        <div className="gs-ambient-glow" />
        <div className="gs-ambient-glow-2" />

        {/* HERO */}
        <header className="gs-hero">
          <div className="gs-hero-eyebrow">— Proposta Comercial —</div>
          <h1>
            Receita, tecnologia
            <br />
            e <em>inteligência</em>
            <br />
            para a Sal.
          </h1>
          <p className="gs-hero-sub">
            Uma parceria estratégica para transformar a Sal em um ecossistema de receita
            inteligente — com IA aplicada, funil otimizado e infraestrutura própria.
          </p>
          <div className="gs-hero-flourish">— ✦ —</div>
        </header>

        {/* CONTENT */}
        <div className="gs-container">
          <div className="gs-thin-rule" />

          {/* ESCOPO */}
          <section className="gs-reveal">
            <div className="gs-section-label">Escopo de Atuação</div>
            <h2 className="gs-section-title">
              Três frentes, um objetivo — fazer a Sal faturar mais.
            </h2>
            <p className="gs-section-desc">
              Meu papel é ser o braço direito da Sal em receita e tecnologia. Um olhar
              integrado que conecta inteligência artificial, otimização comercial e
              infraestrutura interna.
            </p>

            {/* FRENTE 1 */}
            <div className="gs-frente gs-reveal">
              <div className="gs-frente-number">Frente I</div>
              <h3>Inteligência Artificial aplicada à operação e ao produto</h3>
              <p className="gs-frente-desc">
                Soluções que agregam valor direto para suas clientes e diferenciam a Sal no
                mercado. O foco é transformar o Método Sal em tecnologia — sem perder
                autenticidade.
              </p>
              <ul className="gs-deliverable-list">
                <li>
                  Bot completo de produção de conteúdo alimentado pelo Método Sal, árvore de
                  conteúdo, manual de marca individual e referências — gera roteiros de Stories
                  personalizados por cliente, conectados aos galhos temáticos, pautas quentes e
                  posicionamento de cada aluna.
                </li>
                <li>
                  Monitoramento automatizado de Stories das clientes com relatórios diários —
                  análise de produção baseada nos seus parâmetros, com feedback individual e
                  personalizado.
                </li>
                <li>
                  Adaptação de referências virais: a aluna sobe um vídeo que performou bem em
                  outro perfil e a IA adapta para o contexto, tom de voz e nicho dela.
                </li>
                <li>
                  Produção de carrosséis com IA usando regras avançadas de design — hierarquia
                  visual, tipografia, espaçamento — adaptados à identidade visual da Sal.
                </li>
              </ul>
              <div className="gs-highlight-box">
                Esse bot pode se tornar um produto à parte, vendido por assinatura junto com o
                curso de produção de conteúdo — uma nova linha de receita recorrente.
              </div>
            </div>

            {/* FRENTE 2 */}
            <div className="gs-frente gs-reveal">
              <div className="gs-frente-number">Frente II</div>
              <h3>Otimização do funil de receita de ponta a ponta</h3>
              <p className="gs-frente-desc">
                Trabalho de CRO — Chief Revenue Officer. Mapeamento e melhoria contínua de
                todas as taxas de conversão, do topo do funil até o pós-venda. Cada etapa vira
                um ponto de alavancagem.
              </p>
              <ul className="gs-deliverable-list">
                <li>
                  Mapeamento completo do funil: site → formulário de filtro → call de vendas →
                  fechamento → ascensão entre produtos.
                </li>
                <li>
                  Reunião semanal de vendas — acompanhamento de métricas e proposição de testes
                  para melhorar conversão.
                </li>
                <li>
                  Processo de repescagem de leads: toda a base que entrou, demonstrou interesse,
                  foi cliente antiga ou disse "agora não" volta a ser trabalhada de forma
                  sistemática.
                </li>
                <li>
                  Estratégia de ascensão entre produtos — levar clientes dos cursos de entrada
                  para mentoria e ofertas de maior ticket.
                </li>
                <li>
                  Insights comerciais gerados por IA a partir dos dados da operação — conforme a
                  base cresce, a personalização das abordagens melhora exponencialmente.
                </li>
              </ul>
            </div>

            {/* FRENTE 3 */}
            <div className="gs-frente gs-reveal">
              <div className="gs-frente-number">Frente III</div>
              <h3>Infraestrutura tecnológica interna</h3>
              <p className="gs-frente-desc">
                Eliminar a dependência de múltiplas plataformas pagas que não se integram,
                reduzir custos e dar liberdade total para customizar. Tudo fica da Sal, sem
                lock-in.
              </p>
              <ul className="gs-deliverable-list">
                <li>
                  CRM próprio para organizar a base, gerar alertas de follow-up e dar
                  visibilidade ao pipeline comercial.
                </li>
                <li>Formulários internos substituindo Typeform/Respondi.</li>
                <li>Automações de e-mail e integração com WhatsApp.</li>
                <li>
                  Tudo construído sobre plataformas open source — código é nosso, custo é
                  mínimo, liberdade é total.
                </li>
              </ul>
            </div>
          </section>

          <div className="gs-ornament">— ✦ —</div>

          {/* MODELO COMERCIAL */}
          <section className="gs-reveal">
            <div className="gs-section-label">Modelo Comercial</div>
            <h2 className="gs-section-title">
              Alinhamento total com o seu resultado.
            </h2>
            <p className="gs-section-desc">
              Se eu não gerar resultado, eu não ganho. Meu incentivo está 100% atrelado ao
              faturamento da Sal.
            </p>

            <div className="gs-modelo-grid">
              <div className="gs-modelo-card">
                <div className="gs-percentage">
                  15<span>%</span>
                </div>
                <div className="gs-product-name">Mentorias e novos produtos</div>
                <div className="gs-product-detail">Faturamento gerado · Repasse mensal</div>
              </div>
              <div className="gs-modelo-card">
                <div className="gs-percentage">
                  20<span>%</span>
                </div>
                <div className="gs-product-name">Curso — Método Sal</div>
                <div className="gs-product-detail">Mantido conforme acordado</div>
              </div>
            </div>

            <div className="gs-modelo-quote">
              <p>
                Custos de operação como ferramentas e infraestrutura são negociados conforme
                surgirem. Precisa ser bom para os dois lados. Não estou vendendo horas — estou
                assumindo a responsabilidade de fazer a Sal faturar mais.
              </p>
            </div>
          </section>

          <div className="gs-ornament">— ✦ —</div>

          {/* PROXIMOS PASSOS */}
          <section className="gs-reveal">
            <div className="gs-section-label">Próximos Passos</div>
            <h2 className="gs-section-title">O que acontece depois do sim.</h2>

            <div className="gs-steps-list">
              <div className="gs-step-item">
                <div className="gs-step-text">
                  <strong>Confirmar o aceite desta proposta</strong> para iniciar formalmente a
                  parceria.
                </div>
              </div>
              <div className="gs-step-item">
                <div className="gs-step-text">
                  <strong>Sessão de trabalho de 2–3 horas</strong> para absorver o Método Sal
                  completo e estruturar o bot de conteúdo.
                </div>
              </div>
              <div className="gs-step-item">
                <div className="gs-step-text">
                  <strong>Envio dos primeiros roteiros gerados por IA</strong> baseados nas
                  transcrições dos seus vídeos, para validação.
                </div>
              </div>
              <div className="gs-step-item">
                <div className="gs-step-text">
                  <strong>Mapeamento completo do funil</strong> e estruturação do processo de
                  repescagem de leads.
                </div>
              </div>
              <div className="gs-step-item">
                <div className="gs-step-text">
                  <strong>Definição e implementação do CRM interno</strong> para organizar a
                  base e dar visibilidade ao pipeline.
                </div>
              </div>
              <div className="gs-step-item">
                <div className="gs-step-text">
                  <strong>Teste da integração Claude + ManyChat</strong> para automação de DM.
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* CTA */}
        <div className="gs-cta-section gs-reveal">
          <div className="gs-container">
            <h2>
              Pronta para construir
              <br />o <em>ecossistema</em> da Sal?
            </h2>
            <p>Vamos transformar método, dados e tecnologia em receita.</p>
            <a href="https://wa.me/5511999718595?text=Aceito%20a%20nossa%20parceria!" className="gs-cta-button">
              Confirmar Proposta →
            </a>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="gs-footer">
          <div className="gs-footer-brand">
            <span>BA</span> · Benites Albuquerque
          </div>
          <div className="gs-footer-sub">Proposta confidencial — Abril 2026</div>
        </footer>
      </div>
    </>
  );
};

export default PropostaGiuliaSalvatora;
