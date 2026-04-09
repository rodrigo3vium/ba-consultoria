import { useEffect } from "react";
import rodrigoPhoto from "@/assets/founders/rodrigo-albuquerque.webp";
import diegoBarretoPhoto from "@/assets/mentors/diego-barreto.webp";
import pedroSommaPhoto from "@/assets/mentors/pedro-somma.webp";
import vaboPhoto from "@/assets/mentors/vabo.webp";
import joaoOliverioPhoto from "@/assets/mentors/joao-oliverio.webp";
import joseDiogoPhoto from "@/assets/mentors/jose-diogo.webp";

const mentors = [
  {
    name: "Diego Barreto",
    role: "CEO — iFood",
    photo: diegoBarretoPhoto,
    bio: 'Autor do best-seller "Nova Economia", lidera a expansão e inovação no iFood.',
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
    bio: 'Empreendedor serial, investidor e autor de "Falar em público é para você!".',
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

const stats = [
  { num: "+R$130M", label: "gerados em vendas" },
  { num: "100+", label: "consultorias realizadas" },
  { num: "+7", label: "países atendidos" },
  { num: "+54", label: "avaliações 5 estrelas" },
];

const PropostaDanielleSena = () => {
  useEffect(() => {
    const prev = {
      bg: document.body.style.backgroundColor,
      color: document.body.style.color,
      pt: document.body.style.paddingTop,
    };
    document.body.style.backgroundColor = "#0D0D0D";
    document.body.style.color = "#E8E2D9";
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
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap');

        .ds-page {
          background: #0D0D0D;
          color: #E8E2D9;
          font-family: 'DM Sans', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .ds-page *,
        .ds-page *::before,
        .ds-page *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .ds-hero {
          padding: 64px 48px 48px;
          border-bottom: 0.5px solid #2A2A2A;
          position: relative;
          overflow: hidden;
        }

        .ds-hero::before {
          content: '';
          position: absolute;
          top: -80px;
          right: -80px;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          border: 0.5px solid #C9A84C22;
        }

        .ds-hero::after {
          content: '';
          position: absolute;
          top: -40px;
          right: -40px;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          border: 0.5px solid #C9A84C33;
        }

        .ds-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.15em;
          color: #C9A84C;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .ds-hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: 42px;
          font-weight: 400;
          color: #F0EAE0;
          line-height: 1.2;
          margin: 0 0 16px;
          max-width: 560px;
        }

        .ds-hero h1 em {
          font-style: italic;
          color: #C9A84C;
        }

        .ds-hero-sub {
          font-size: 15px;
          color: #888;
          font-weight: 300;
          max-width: 480px;
          line-height: 1.6;
        }

        .ds-section {
          padding: 48px;
          border-bottom: 0.5px solid #1E1E1E;
        }

        .ds-section-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.2em;
          color: #C9A84C;
          text-transform: uppercase;
          margin-bottom: 32px;
        }

        .ds-about-grid {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 40px;
          align-items: start;
        }

        .ds-about-photo {
          width: 100%;
          aspect-ratio: 1;
          border-radius: 16px;
          overflow: hidden;
          border: 0.5px solid #2A2A2A;
        }

        .ds-about-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(20%);
          display: block;
        }

        .ds-about-text {
          font-size: 15px;
          color: #B8B0A4;
          line-height: 1.7;
          font-weight: 300;
          margin-bottom: 16px;
        }

        .ds-about-text:last-of-type {
          margin-bottom: 24px;
        }

        .ds-stats-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }

        .ds-stat {
          background: #111;
          border: 0.5px solid #2A2A2A;
          border-radius: 8px;
          padding: 16px 18px;
        }

        .ds-stat-num {
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          color: #C9A84C;
          font-weight: 400;
          line-height: 1;
          margin-bottom: 6px;
        }

        .ds-stat-label {
          font-size: 12px;
          color: #666;
          font-weight: 300;
        }

        .ds-mentors-intro {
          font-size: 14px;
          color: #888;
          font-weight: 300;
          line-height: 1.6;
          margin-bottom: 32px;
          max-width: 560px;
        }

        .ds-mentors-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 14px;
        }

        .ds-mentor-card {
          background: #111;
          border: 0.5px solid #2A2A2A;
          border-radius: 12px;
          padding: 22px 16px;
          text-align: center;
          transition: border-color 0.3s ease;
        }

        .ds-mentor-card:hover {
          border-color: #C9A84C44;
        }

        .ds-mentor-photo {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          overflow: hidden;
          margin: 0 auto 14px;
          border: 0.5px solid #2A2A2A;
        }

        .ds-mentor-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(40%);
          display: block;
        }

        .ds-mentor-name {
          font-family: 'Playfair Display', serif;
          font-size: 14px;
          color: #F0EAE0;
          font-weight: 400;
          margin-bottom: 4px;
          line-height: 1.3;
        }

        .ds-mentor-role {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          color: #C9A84C;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .ds-mentor-bio {
          font-size: 11px;
          color: #666;
          font-weight: 300;
          line-height: 1.5;
        }

        .ds-problem-block {
          background: #141414;
          border: 0.5px solid #2A2A2A;
          border-left: 2px solid #C9A84C;
          border-radius: 0 8px 8px 0;
          padding: 24px 28px;
          margin-bottom: 16px;
        }

        .ds-problem-block p {
          font-size: 15px;
          color: #B8B0A4;
          line-height: 1.7;
          font-weight: 300;
        }

        .ds-problem-block p strong {
          color: #E8E2D9;
          font-weight: 500;
        }

        .ds-month-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        .ds-month-card {
          background: #111111;
          border: 0.5px solid #2A2A2A;
          border-radius: 12px;
          padding: 28px 24px;
        }

        .ds-month-card:first-child {
          border-top: 2px solid #C9A84C;
        }

        .ds-month-num {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: #555;
          letter-spacing: 0.1em;
          margin-bottom: 8px;
        }

        .ds-month-title {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          color: #F0EAE0;
          margin-bottom: 20px;
          font-weight: 400;
        }

        .ds-month-items {
          list-style: none;
        }

        .ds-month-items li {
          font-size: 13px;
          color: #888;
          font-weight: 300;
          padding: 7px 0;
          border-bottom: 0.5px solid #1A1A1A;
          line-height: 1.5;
          display: flex;
          gap: 10px;
          align-items: flex-start;
        }

        .ds-month-items li:last-child {
          border-bottom: none;
        }

        .ds-month-items li::before {
          content: '—';
          color: #C9A84C;
          flex-shrink: 0;
          font-size: 11px;
          margin-top: 1px;
        }

        .ds-cycle-block {
          background: #111;
          border: 0.5px solid #2A2A2A;
          border-radius: 12px;
          padding: 32px;
          margin-top: 24px;
        }

        .ds-cycle-title {
          font-family: 'Playfair Display', serif;
          font-size: 18px;
          color: #F0EAE0;
          margin-bottom: 24px;
          font-weight: 400;
        }

        .ds-cycle-steps {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 12px;
        }

        .ds-cycle-step {
          background: #0D0D0D;
          border: 0.5px solid #2A2A2A;
          border-radius: 8px;
          padding: 16px;
          text-align: center;
        }

        .ds-cycle-step-num {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: #C9A84C;
          letter-spacing: 0.1em;
          margin-bottom: 8px;
        }

        .ds-cycle-step-label {
          font-size: 13px;
          color: #B8B0A4;
          font-weight: 300;
          line-height: 1.4;
        }

        .ds-invest-block {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 48px;
          flex-wrap: wrap;
        }

        .ds-price-area {
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex-shrink: 0;
        }

        .ds-price-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: #555;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .ds-price-value {
          font-family: 'Playfair Display', serif;
          font-size: 48px;
          color: #C9A84C;
          font-weight: 400;
          line-height: 1;
        }

        .ds-price-sub {
          font-size: 13px;
          color: #555;
          font-weight: 300;
          margin-top: 4px;
        }

        .ds-payment-options {
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
        }

        .ds-payment-option {
          background: #111;
          border: 0.5px solid #2A2A2A;
          border-radius: 8px;
          padding: 16px 20px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .ds-payment-option-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: #C9A84C;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .ds-payment-option-desc {
          font-size: 13px;
          color: #888;
          font-weight: 300;
          line-height: 1.5;
        }

        .ds-includes {
          margin-top: 32px;
          padding-top: 32px;
          border-top: 0.5px solid #1E1E1E;
        }

        .ds-includes-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: #444;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .ds-includes-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
        }

        .ds-include-item {
          display: flex;
          gap: 10px;
          align-items: flex-start;
        }

        .ds-include-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #C9A84C;
          margin-top: 7px;
          flex-shrink: 0;
        }

        .ds-include-text {
          font-size: 13px;
          color: #666;
          font-weight: 300;
          line-height: 1.5;
        }

        .ds-footer-block {
          padding: 48px;
          text-align: center;
        }

        .ds-footer-quote {
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          font-style: italic;
          color: #555;
          max-width: 480px;
          margin: 0 auto 32px;
          line-height: 1.5;
        }

        .ds-footer-quote em {
          color: #C9A84C;
          font-style: normal;
        }

        .ds-divider {
          width: 40px;
          height: 0.5px;
          background: #C9A84C;
          margin: 0 auto 32px;
        }

        .ds-footer-stamp {
          font-size: 12px;
          color: #333;
          font-family: 'JetBrains Mono', monospace;
          letter-spacing: 0.1em;
          margin-top: 32px;
        }

        @media (max-width: 900px) {
          .ds-mentors-grid { grid-template-columns: repeat(2, 1fr); }
          .ds-about-grid { grid-template-columns: 1fr; gap: 28px; }
          .ds-about-photo { max-width: 240px; }
        }

        @media (max-width: 640px) {
          .ds-hero { padding: 40px 24px 32px; }
          .ds-hero h1 { font-size: 30px; }
          .ds-section { padding: 36px 24px; }
          .ds-month-grid { grid-template-columns: 1fr; }
          .ds-cycle-steps { grid-template-columns: repeat(2, 1fr); }
          .ds-invest-block { flex-direction: column; }
          .ds-includes-grid { grid-template-columns: 1fr; }
          .ds-footer-block { padding: 36px 24px; }
          .ds-mentors-grid { grid-template-columns: 1fr; }
          .ds-stats-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="ds-page">
        <div className="ds-hero">
          <div className="ds-tag">Áurea Performance · Proposta de consultoria</div>
          <h1>
            Posicionamento para quem <em>já sabe</em> o que vale
          </h1>
          <p className="ds-hero-sub">
            Uma consultoria de três meses para construir a imagem que reflete o padrão do seu trabalho — e atrai o paciente que reconhece isso.
          </p>
        </div>

        <div className="ds-section">
          <div className="ds-section-label">Quem está por trás</div>
          <div className="ds-about-grid">
            <div className="ds-about-photo">
              <img loading="lazy" src={rodrigoPhoto} alt="Rodrigo Albuquerque" />
            </div>
            <div>
              <p className="ds-about-text">
                Rodrigo Albuquerque investiu meio milhão de reais em mentoria com alguns dos maiores empreendedores do Brasil. Liderou R$80 milhões em vendas anuais e compilou na BA Consultoria o aprendizado extraído de mais de 100 empresas que receberam consultoria.
              </p>
              <p className="ds-about-text">
                A BA Consultoria une consultoria estratégica, execução de marketing, automação com IA e inteligência comercial — tudo focado em gerar retorno financeiro real e escalável.
              </p>
              <div className="ds-stats-grid">
                {stats.map((s) => (
                  <div key={s.num} className="ds-stat">
                    <div className="ds-stat-num">{s.num}</div>
                    <div className="ds-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="ds-section">
          <div className="ds-section-label">Referências</div>
          <p className="ds-mentors-intro">
            Aprendemos diretamente com alguns dos maiores líderes do mercado brasileiro — e é essa bagagem que sustenta cada decisão estratégica da consultoria.
          </p>
          <div className="ds-mentors-grid">
            {mentors.map((m) => (
              <div key={m.name} className="ds-mentor-card">
                <div className="ds-mentor-photo">
                  <img loading="lazy" src={m.photo} alt={m.name} />
                </div>
                <div className="ds-mentor-name">{m.name}</div>
                <div className="ds-mentor-role">{m.role}</div>
                <div className="ds-mentor-bio">{m.bio}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="ds-section">
          <div className="ds-section-label">O cenário</div>
          <div className="ds-problem-block">
            <p>
              Você tem <strong>cinco anos de experiência</strong>, um trabalho de excelência e uma visão clara do nível de clínica que quer construir. O que ainda não existe é a imagem que comunica isso ao público que você quer alcançar.
            </p>
          </div>
          <div className="ds-problem-block">
            <p>
              A maioria das estratégias de marketing resolve o problema do <strong>volume</strong>. O que você precisa é de posicionamento — a construção deliberada de uma percepção de valor que atraia quem reconhece qualidade e paga por ela.
            </p>
          </div>
          <div className="ds-problem-block">
            <p>
              Não é sobre gravar mais. Não é sobre roteiro. É sobre <strong>entender o que em você gera desejo nesse público</strong> — e amplificar isso de forma autêntica.
            </p>
          </div>
        </div>

        <div className="ds-section">
          <div className="ds-section-label">O processo</div>
          <div className="ds-month-grid">
            <div className="ds-month-card">
              <div className="ds-month-num">Mês 01</div>
              <div className="ds-month-title">Fundação</div>
              <ul className="ds-month-items">
                <li>Sessão de imersão: quem você é, pra quem, e o seu diferencial real</li>
                <li>Documento de posicionamento: ICP, proposta de valor e tom de voz</li>
                <li>Auditoria completa do Instagram com diretrizes de ajuste</li>
                <li>Guia de identidade de linguagem — o que dizer e o que evitar</li>
              </ul>
            </div>
            <div className="ds-month-card">
              <div className="ds-month-num">Mês 02</div>
              <div className="ds-month-title">Ajustes</div>
              <ul className="ds-month-items">
                <li>Ciclos semanais de avaliação e refinamento</li>
                <li>Análise do que está funcionando e do que precisa mudar</li>
                <li>Calibração de conteúdo com base em dados reais</li>
                <li>Desenvolvimento da consistência de posicionamento</li>
              </ul>
            </div>
            <div className="ds-month-card">
              <div className="ds-month-num">Mês 03</div>
              <div className="ds-month-title">Consolidação</div>
              <ul className="ds-month-items">
                <li>Ciclos semanais com foco em escala e consistência</li>
                <li>Revisão geral do posicionamento construído</li>
                <li>Plano de continuidade — o que você faz sozinha daqui pra frente</li>
                <li>Documento final consolidado com tudo que foi construído</li>
              </ul>
            </div>
          </div>

          <div className="ds-cycle-block">
            <div className="ds-cycle-title">Como funcionam os ciclos semanais — meses 2 e 3</div>
            <div className="ds-cycle-steps">
              <div className="ds-cycle-step">
                <div className="ds-cycle-step-num">01</div>
                <div className="ds-cycle-step-label">O que foi executado na semana</div>
              </div>
              <div className="ds-cycle-step">
                <div className="ds-cycle-step-num">02</div>
                <div className="ds-cycle-step-label">Análise dos resultados e reações</div>
              </div>
              <div className="ds-cycle-step">
                <div className="ds-cycle-step-num">03</div>
                <div className="ds-cycle-step-label">Hipóteses e melhorias propostas</div>
              </div>
              <div className="ds-cycle-step">
                <div className="ds-cycle-step-num">04</div>
                <div className="ds-cycle-step-label">Próxima ação definida</div>
              </div>
            </div>
          </div>
        </div>

        <div className="ds-section">
          <div className="ds-section-label">Investimento</div>
          <div className="ds-invest-block">
            <div className="ds-price-area">
              <div className="ds-price-label">Valor total</div>
              <div className="ds-price-value">R$ 6.000</div>
              <div className="ds-price-sub">3 meses de consultoria</div>
            </div>
            <div className="ds-payment-options">
              <div className="ds-payment-option">
                <div className="ds-payment-option-label">Pix</div>
                <div className="ds-payment-option-desc">50% na contratação + 50% após 30 dias</div>
              </div>
              <div className="ds-payment-option">
                <div className="ds-payment-option-label">Cartão de crédito</div>
                <div className="ds-payment-option-desc">3x de R$ 2.000</div>
              </div>
            </div>
          </div>

          <div className="ds-includes">
            <div className="ds-includes-label">O que está incluído</div>
            <div className="ds-includes-grid">
              <div className="ds-include-item">
                <div className="ds-include-dot"></div>
                <div className="ds-include-text">1 call semanal de acompanhamento (45–60 min)</div>
              </div>
              <div className="ds-include-item">
                <div className="ds-include-dot"></div>
                <div className="ds-include-text">Canal direto para dúvidas no meio do caminho</div>
              </div>
              <div className="ds-include-item">
                <div className="ds-include-dot"></div>
                <div className="ds-include-text">Documento de posicionamento + guia de linguagem</div>
              </div>
              <div className="ds-include-item">
                <div className="ds-include-dot"></div>
                <div className="ds-include-text">Entrega final consolidada ao término dos 3 meses</div>
              </div>
            </div>
          </div>
        </div>

        <div className="ds-footer-block">
          <div className="ds-divider"></div>
          <p className="ds-footer-quote">
            O luxo é a cultura da excelência. Tudo começa com a <em>percepção</em> de quem você é.
          </p>
          <p className="ds-footer-stamp">ÁUREA PERFORMANCE · RODRIGO ALBUQUERQUE</p>
        </div>
      </div>
    </>
  );
};

export default PropostaDanielleSena;
