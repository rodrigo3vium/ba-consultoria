import { useEffect } from "react";
import { tracker } from "@/lib/tracking";
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

const PropostaRoyalEagle = () => {
  useEffect(() => {
    const prev = {
      bg: document.body.style.backgroundColor,
      color: document.body.style.color,
      pt: document.body.style.paddingTop,
      ox: document.body.style.overflowX,
    };
    document.body.style.backgroundColor = "#05090B";
    document.body.style.color = "#C8C0B2";
    document.body.style.paddingTop = "0";
    document.body.style.overflowX = "hidden";
    return () => {
      document.body.style.backgroundColor = prev.bg;
      document.body.style.color = prev.color;
      document.body.style.paddingTop = prev.pt;
      document.body.style.overflowX = prev.ox;
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@400;500;600;700&family=IBM+Plex+Mono:wght@300;400;500;600&family=Fraunces:ital,wght@0,400;0,600;1,400&display=swap');

        .re-page {
          --bg-main:#05090B;
          --bg-deep:#020405;
          --bg-card:#0B1114;
          --bg-elev:#11171A;
          --text-primary:#F2EDE4;
          --text-secondary:#C8C0B2;
          --text-muted:#7D827D;
          --text-faint:#4A4F4D;
          --accent-cyan:#20DDEB;
          --accent-cyan-soft:#38F3FF;
          --accent-cyan-dim:#0F8995;
          --accent-cyan-glow:rgba(32,221,235,.45);
          --accent-red:#E44935;
          --accent-red-dim:#8C2A20;
          --grid-line:rgba(255,255,255,.045);
          --grid-strong:rgba(255,255,255,.10);
          --font-display:'Bebas Neue','Oswald',sans-serif;
          --font-mono:'IBM Plex Mono','Space Mono',monospace;
          --font-body:'Fraunces',Georgia,serif;
          --display:clamp(72px,11vw,180px);
          --h1:clamp(48px,6vw,88px);
          --h2:clamp(32px,4vw,56px);
          --h3:clamp(24px,2.4vw,32px);

          font-family:var(--font-body);
          background:var(--bg-main);
          color:var(--text-secondary);
          line-height:1.6;
          min-height:100vh;
          position:relative;
          scroll-behavior:smooth;
          -webkit-font-smoothing:antialiased;
        }
        .re-page *{box-sizing:border-box;margin:0;padding:0}

        .re-grid{
          position:fixed;inset:0;pointer-events:none;z-index:0;
          background-image:linear-gradient(to right,var(--grid-line) 1px,transparent 1px),linear-gradient(to bottom,var(--grid-line) 1px,transparent 1px);
          background-size:80px 80px;
          -webkit-mask-image:radial-gradient(ellipse at center,black 30%,transparent 90%);
          mask-image:radial-gradient(ellipse at center,black 30%,transparent 90%);
        }
        .re-noise{
          position:fixed;inset:0;pointer-events:none;z-index:2;mix-blend-mode:overlay;opacity:.6;
          background-image:radial-gradient(ellipse at center,transparent 0%,rgba(0,0,0,.65) 100%),url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.95  0 0 0 0 0.93  0 0 0 0 0.89  0 0 0 0.12 0'/></filter><rect width='200' height='200' filter='url(%23n)'/></svg>");
        }
        .re-main{position:relative;z-index:1}

        .re-meta-bar{
          position:sticky;top:0;display:flex;justify-content:space-between;align-items:center;
          padding:14px 48px;border-bottom:1px solid var(--grid-strong);
          background:rgba(5,9,11,.85);backdrop-filter:blur(12px);
          font-family:var(--font-mono);font-size:11px;text-transform:uppercase;letter-spacing:.15em;
          color:var(--text-muted);z-index:50;
        }
        .re-meta-bar .left,.re-meta-bar .right{display:flex;align-items:center;gap:24px}
        .re-meta-bar .dot{width:6px;height:6px;border-radius:50%;background:var(--accent-cyan);box-shadow:0 0 8px var(--accent-cyan-glow);animation:rePulse 2s infinite}
        .re-meta-bar .live{color:var(--accent-cyan);display:flex;align-items:center;gap:8px}
        .re-meta-bar .sep{color:var(--text-faint)}
        @keyframes rePulse{0%,100%{opacity:1}50%{opacity:.4}}

        .re-hero{
          min-height:100vh;padding:64px 48px 80px;position:relative;
          display:flex;flex-direction:column;justify-content:space-between;
          border-bottom:1px solid var(--grid-strong);
        }
        .re-corners{position:absolute;inset:24px;pointer-events:none}
        .re-corner-tl,.re-corner-tr,.re-corner-bl,.re-corner-br{position:absolute;width:32px;height:32px;border:1px solid var(--accent-cyan)}
        .re-corner-tl{top:0;left:0;border-right:none;border-bottom:none}
        .re-corner-tr{top:0;right:0;border-left:none;border-bottom:none}
        .re-corner-bl{bottom:0;left:0;border-right:none;border-top:none}
        .re-corner-br{bottom:0;right:0;border-left:none;border-top:none}
        .re-hero-top{display:grid;grid-template-columns:1fr auto;gap:48px;align-items:start;padding-top:48px}
        .re-protocol{font-family:var(--font-mono);font-size:11px;text-transform:uppercase;letter-spacing:.2em;color:var(--accent-cyan)}
        .re-protocol::before{content:'';display:inline-block;width:24px;height:1px;background:var(--accent-cyan);vertical-align:middle;margin-right:12px;box-shadow:0 0 6px var(--accent-cyan-glow)}
        .re-coordinates{
          font-family:var(--font-mono);font-size:10px;text-transform:uppercase;letter-spacing:.18em;
          color:var(--text-muted);border-left:1px solid var(--grid-strong);padding-left:24px;
          display:grid;grid-template-columns:auto 1fr;gap:8px 16px;min-width:260px;
        }
        .re-coordinates .k{color:var(--text-faint);text-align:left}
        .re-coordinates .v{color:var(--text-primary);text-align:right}
        .re-hero-center{padding:64px 0 48px}
        .re-hero-headline{
          font-family:var(--font-display);font-weight:400;font-size:var(--display);
          line-height:.88;letter-spacing:.005em;color:var(--text-primary);text-transform:uppercase;
        }
        .re-hero-headline .dot{color:var(--accent-red)}
        .re-hero-headline .cyan{color:var(--accent-cyan)}
        .re-hero-sub{margin-top:40px;max-width:620px;font-family:var(--font-body);font-size:19px;color:var(--text-secondary);line-height:1.5}
        .re-hero-sub::before{content:'';display:block;width:48px;height:1px;background:var(--accent-cyan);margin-bottom:24px;box-shadow:0 0 6px var(--accent-cyan-glow)}
        .re-hero-bottom{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid var(--grid-strong);padding-top:28px}
        .re-hero-bottom .field{padding-right:24px}
        .re-hero-bottom .field:not(:last-child){border-right:1px solid var(--grid-strong)}
        .re-hero-bottom .field-label{font-family:var(--font-mono);font-size:10px;color:var(--text-muted);text-transform:uppercase;letter-spacing:.2em;margin-bottom:8px}
        .re-hero-bottom .field-value{font-family:var(--font-body);font-size:14px;color:var(--text-primary);line-height:1.4}

        .re-section{padding:88px 48px;border-bottom:1px solid var(--grid-strong);position:relative;scroll-margin-top:80px}
        .re-section-header{display:grid;grid-template-columns:120px 1fr;gap:48px;margin-bottom:56px;align-items:start}
        .re-section-idx{font-family:var(--font-mono);font-size:11px;color:var(--accent-cyan);letter-spacing:.2em;text-transform:uppercase;border-top:1px solid var(--accent-cyan);padding-top:16px}
        .re-section-title{font-family:var(--font-display);font-weight:400;font-size:var(--h1);line-height:.92;letter-spacing:.01em;text-transform:uppercase;color:var(--text-primary);max-width:900px}
        .re-section-title .dot{color:var(--accent-red)}
        .re-section-title .cyan{color:var(--accent-cyan)}

        .re-diag-block{margin-bottom:56px}
        .re-diag-header{display:flex;align-items:center;gap:16px;padding:20px 0;border-bottom:1px solid var(--grid-strong);margin-bottom:32px}
        .re-diag-tag{font-family:var(--font-mono);font-size:10px;letter-spacing:.18em;text-transform:uppercase;padding:5px 12px;border:1px solid var(--accent-red-dim);color:var(--accent-red);display:inline-block;flex-shrink:0}
        .re-diag-cat{font-family:var(--font-display);font-weight:400;font-size:var(--h3);line-height:.95;letter-spacing:.01em;text-transform:uppercase;color:var(--text-primary)}
        .re-diag-cat .dot{color:var(--accent-red)}
        .re-diag-item{display:grid;grid-template-columns:200px 1fr;gap:32px;padding:24px 0;border-bottom:1px solid var(--grid-line)}
        .re-diag-item:last-child{border-bottom:none}
        .re-diag-label{font-family:var(--font-display);font-weight:400;font-size:22px;line-height:.95;letter-spacing:.01em;text-transform:uppercase;color:var(--text-primary)}
        .re-diag-label .dot{color:var(--accent-red)}
        .re-diag-text{font-family:var(--font-body);font-size:15px;color:var(--text-secondary);line-height:1.6}
        .re-diag-text b{color:var(--accent-cyan);font-weight:600}
        .re-diag-text .src{font-family:var(--font-mono);font-size:10px;color:var(--text-muted);letter-spacing:.1em;display:block;margin-top:8px}

        .re-pilar-grid{display:grid;grid-template-columns:1fr 1fr;gap:0;border:1px solid var(--grid-strong)}
        .re-pilar{padding:40px 32px;position:relative}
        .re-pilar:nth-child(1){border-right:1px solid var(--grid-strong);border-bottom:1px solid var(--grid-strong)}
        .re-pilar:nth-child(2){border-bottom:1px solid var(--grid-strong)}
        .re-pilar:nth-child(3){border-right:1px solid var(--grid-strong)}
        .re-pilar-letter{font-family:var(--font-display);font-size:64px;line-height:1;color:var(--accent-cyan);letter-spacing:.01em;opacity:.3;position:absolute;top:20px;right:24px}
        .re-pilar-name{font-family:var(--font-mono);font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:var(--accent-cyan);margin-bottom:20px}
        .re-pilar h4{font-family:var(--font-display);font-weight:400;font-size:28px;line-height:.95;letter-spacing:.01em;text-transform:uppercase;color:var(--text-primary);margin-bottom:20px}
        .re-pilar h4 .dot{color:var(--accent-red)}
        .re-pilar ul{list-style:none;padding:0;display:flex;flex-direction:column;gap:10px}
        .re-pilar li{font-family:var(--font-body);font-size:14px;color:var(--text-secondary);line-height:1.5;padding-left:20px;position:relative}
        .re-pilar li::before{content:'—';position:absolute;left:0;color:var(--text-faint)}

        .re-invest{border:1px solid var(--accent-cyan-dim);background:linear-gradient(135deg,rgba(32,221,235,.03),transparent);padding:56px 48px;text-align:center}
        .re-invest-label{font-family:var(--font-mono);font-size:10px;color:var(--accent-cyan);letter-spacing:.2em;text-transform:uppercase;margin-bottom:16px}
        .re-invest-value{font-family:var(--font-display);font-size:clamp(72px,12vw,140px);line-height:.88;color:var(--text-primary);letter-spacing:.01em}
        .re-invest-value .cyan{color:var(--accent-cyan)}

        .re-about-grid{display:grid;grid-template-columns:280px 1fr;gap:48px;align-items:start}
        .re-about-photo{width:100%;aspect-ratio:1;overflow:hidden;border:1px solid var(--grid-strong);position:relative}
        .re-about-photo img{width:100%;height:100%;object-fit:cover;filter:grayscale(.35) contrast(1.05) brightness(.9)}
        .re-about-text{font-family:var(--font-body);font-size:17px;color:var(--text-secondary);line-height:1.7}
        .re-about-text b{color:var(--text-primary);font-weight:600}
        .re-stat-grid{display:grid;grid-template-columns:1fr 1fr;border:1px solid var(--grid-strong);margin-top:32px}
        .re-stat{padding:24px;border-bottom:1px solid var(--grid-strong)}
        .re-stat:nth-child(odd){border-right:1px solid var(--grid-strong)}
        .re-stat:nth-child(3),.re-stat:nth-child(4){border-bottom:none}
        .re-stat-num{font-family:var(--font-display);font-weight:400;font-size:48px;line-height:1;color:var(--accent-cyan);letter-spacing:.01em}
        .re-stat-label{font-family:var(--font-mono);font-size:10px;color:var(--text-muted);text-transform:uppercase;letter-spacing:.15em;margin-top:8px}

        .re-mentors-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:16px}
        .re-mentor{border:1px solid var(--grid-strong);padding:20px;background:linear-gradient(180deg,var(--bg-card) 0%,var(--bg-elev) 100%);transition:border-color .25s ease}
        .re-mentor:hover{border-color:var(--accent-cyan-dim)}
        .re-mentor-photo{width:100%;aspect-ratio:1;overflow:hidden;border:1px solid var(--grid-strong);margin-bottom:16px}
        .re-mentor-photo img{width:100%;height:100%;object-fit:cover;filter:grayscale(.4) contrast(1.05) brightness(.88)}
        .re-mentor-name{font-family:var(--font-display);font-weight:400;font-size:20px;line-height:1;letter-spacing:.01em;text-transform:uppercase;color:var(--text-primary)}
        .re-mentor-role{font-family:var(--font-mono);font-size:9px;letter-spacing:.12em;text-transform:uppercase;color:var(--accent-cyan);margin:8px 0 12px}
        .re-mentor-bio{font-family:var(--font-body);font-size:12px;color:var(--text-muted);line-height:1.5}

        .re-cta{padding:88px 48px;border-bottom:1px solid var(--grid-strong);text-align:center;position:relative}
        .re-cta-label{font-family:var(--font-mono);font-size:10px;color:var(--accent-cyan);letter-spacing:.2em;text-transform:uppercase;margin-bottom:24px}
        .re-cta-title{font-family:var(--font-display);font-weight:400;font-size:clamp(36px,5vw,64px);line-height:.95;letter-spacing:.01em;text-transform:uppercase;color:var(--text-primary)}
        .re-cta-title .dot{color:var(--accent-red)}
        .re-btn{display:inline-flex;align-items:center;gap:12px;margin-top:40px;padding:16px 32px;font-family:var(--font-mono);font-size:12px;text-transform:uppercase;letter-spacing:.2em;border:1px solid var(--accent-cyan);color:var(--accent-cyan);background:transparent;cursor:pointer;text-decoration:none;transition:all .25s ease}
        .re-btn:hover{background:var(--accent-cyan);color:var(--bg-deep);box-shadow:0 0 24px var(--accent-cyan-glow)}

        .re-closing{padding:64px 48px;position:relative}
        .re-closing-sig{padding-top:32px;border-top:1px solid var(--grid-strong);display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:24px}
        .re-closing-sig .name{font-family:var(--font-display);font-size:28px;letter-spacing:.01em;text-transform:uppercase;color:var(--text-primary)}
        .re-closing-sig .name small{display:block;font-family:var(--font-mono);font-size:10px;color:var(--text-muted);letter-spacing:.2em;margin-top:8px}
        .re-closing-sig .footer-meta{font-family:var(--font-mono);font-size:10px;color:var(--text-muted);letter-spacing:.2em;text-transform:uppercase;text-align:right}

        .re-footnotes{padding:32px 48px;border-top:1px solid var(--grid-line);font-family:var(--font-mono);font-size:9px;color:var(--text-faint);letter-spacing:.1em;line-height:1.8;position:relative;z-index:1}
        .re-footnotes span{color:var(--text-muted)}

        @media(max-width:900px){
          .re-meta-bar{padding:12px 20px;font-size:9px;flex-wrap:wrap;gap:6px 0}
          .re-meta-bar .left,.re-meta-bar .right{gap:10px;flex-wrap:wrap;min-width:0}
          .re-coordinates .k,.re-coordinates .v{overflow-wrap:anywhere}
          .re-hero,.re-section,.re-cta,.re-closing{padding:48px 20px}
          .re-hero-top{grid-template-columns:1fr;gap:24px}
          .re-coordinates{min-width:0;padding-left:0;border-left:none;border-top:1px solid var(--grid-strong);padding-top:16px;width:100%}
          .re-hero-bottom{grid-template-columns:1fr;gap:16px}
          .re-hero-bottom .field{border-right:none!important;border-bottom:1px solid var(--grid-strong);padding-bottom:16px;margin-bottom:8px}
          .re-hero-bottom .field:last-child{border-bottom:none}
          .re-section-header{grid-template-columns:1fr;gap:20px}
          .re-diag-item{grid-template-columns:1fr;gap:12px}
          .re-diag-header{flex-wrap:wrap}
          .re-pilar-grid{grid-template-columns:1fr}
          .re-pilar:nth-child(1),.re-pilar:nth-child(2),.re-pilar:nth-child(3){border-right:none;border-bottom:1px solid var(--grid-strong)}
          .re-pilar:nth-child(4){border-bottom:none}
          .re-invest{padding:40px 24px}
          .re-about-grid{grid-template-columns:1fr;gap:24px}
          .re-about-photo{max-width:240px}
          .re-mentors-grid{grid-template-columns:repeat(2,1fr)}
          .re-closing-sig{flex-direction:column;align-items:flex-start}
          .re-closing-sig .footer-meta{text-align:left}
          .re-footnotes{padding:24px 20px}
        }
      `}</style>

      <div className="re-page">
        <div className="re-grid" aria-hidden="true" />
        <div className="re-noise" aria-hidden="true" />

        {/* META BAR */}
        <div className="re-meta-bar">
          <div className="left">
            <span className="live"><span className="dot" />Doc · Proposta</span>
            <span className="sep">|</span>
            <span>FILE / PROP-RE-2026.06</span>
          </div>
          <div className="right">
            <span>OWNER / R.ALBUQUERQUE</span>
          </div>
        </div>

        <main className="re-main">
          {/* HERO */}
          <section className="re-hero">
            <div className="re-corners">
              <span className="re-corner-tl" /><span className="re-corner-tr" />
              <span className="re-corner-bl" /><span className="re-corner-br" />
            </div>

            <div className="re-hero-top">
              <div className="re-protocol">Protocolo 02 · Proposta</div>
              <div className="re-coordinates">
                <span className="k">file</span><span className="v">PROP-RE-2026.06</span>
                <span className="k">ref</span><span className="v">DIAG-RE-2026.05</span>
                <span className="k">owner</span><span className="v">R. Albuquerque</span>
                <span className="k">state</span><span className="v">aguardando aceite</span>
              </div>
            </div>

            <div className="re-hero-center">
              <h1 className="re-hero-headline">
                Proposta de<br />
                <span className="cyan">Arquitetura</span><br />
                de Receita<span className="dot">.</span>
              </h1>
              <p className="re-hero-sub">
                Esse documento mapeou 8 pontos de falha no processo comercial atual.
              </p>
            </div>

            <div className="re-hero-bottom">
              <div className="field">
                <div className="field-label">Para</div>
                <div className="field-value">Edimara Dal Pozzo<br /><span style={{ color: "var(--text-muted)", fontSize: "13px" }}>CEO · Royal Eagle</span></div>
              </div>
              <div className="field">
                <div className="field-label">Por</div>
                <div className="field-value">Rodrigo Albuquerque<br /><span style={{ color: "var(--text-muted)", fontSize: "13px" }}>BA Consultoria</span></div>
              </div>
              <div className="field">
                <div className="field-label">Data</div>
                <div className="field-value">Junho · 2026</div>
              </div>
            </div>
          </section>

          {/* 01 / DIAGNÓSTICO */}
          <section className="re-section" id="diagnostico">
            <div className="re-section-header">
              <div className="re-section-idx">01 / De–Para</div>
              <h2 className="re-section-title">Diagnóstico de<br /><span className="cyan">Arquitetura</span><br />de Receita<span className="dot">.</span></h2>
            </div>

            {/* BLOCO 1 — MARKETING */}
            <div className="re-diag-block">
              <div className="re-diag-header">
                <span className="re-diag-tag">⚠ Crítico</span>
                <span className="re-diag-cat">Sem infraestrutura de marketing<span className="dot">.</span></span>
              </div>

              <div className="re-diag-item">
                <div className="re-diag-label">Tráfego pago sem as ferramentas corretas<span className="dot">.</span></div>
                <div className="re-diag-text">
                  O Meta não tem informações o suficiente para encontrar os melhores leads. Sem a utilização da infraestrutura correta, o tráfego depende de sorte. Alguns meses gera resultado, outros não.
                </div>
              </div>

              <div className="re-diag-item">
                <div className="re-diag-label">Sem produção de conteúdo<span className="dot">.</span></div>
                <div className="re-diag-text">
                  Sem produção de conteúdo e criativos de forma estratégica e consistente.
                </div>
              </div>
            </div>

            {/* BLOCO 2 — COMERCIAL */}
            <div className="re-diag-block">
              <div className="re-diag-header">
                <span className="re-diag-tag">⚠ Crítico</span>
                <span className="re-diag-cat">Falta de processos comerciais estruturados<span className="dot">.</span></span>
              </div>

              <div className="re-diag-item">
                <div className="re-diag-label">Tempo de<br />atendimento<span className="dot">.</span></div>
                <div className="re-diag-text">
                  Segundo o estudo do MIT com InsideSales.com (Dr. James Oldroyd, publicado na Harvard Business Review), leads contatados em até 5 minutos têm <b>21× mais chance</b> de serem qualificados do que os contatados após 30 minutos. Em alguns casos, os leads da Royal Eagle esperaram até <b>5 horas</b> pelo atendimento.
                  <span className="src">¹ Oldroyd, J. — MIT/InsideSales.com, Harvard Business Review, 2011</span>
                </div>
              </div>

              <div className="re-diag-item">
                <div className="re-diag-label">Follow-up<span className="dot">.</span></div>
                <div className="re-diag-text">
                  Não há controle de quantidade de follow-up, e essa é a principal métrica de conversão.
                </div>
              </div>

              <div className="re-diag-item">
                <div className="re-diag-label">Metas e<br />acompanhamento<span className="dot">.</span></div>
                <div className="re-diag-text">
                  Não existem metas, processos, scripts e treinamento comercial para otimizar o faturamento da empresa com um método escalável.
                </div>
              </div>
            </div>

            {/* BLOCO 3 — BASE */}
            <div className="re-diag-block">
              <div className="re-diag-header">
                <span className="re-diag-tag">⚠ Crítico</span>
                <span className="re-diag-cat">Falta de estratégia sólida para expandir a base atual de clientes<span className="dot">.</span></span>
              </div>

              <div className="re-diag-item">
                <div className="re-diag-label">Base parada<span className="dot">.</span></div>
                <div className="re-diag-text">
                  Hoje, existem 6 mil clientes ativos na base que não estão sendo trabalhados. Esses clientes poderiam estar gerando indicações ou comprando novos produtos.
                  <br /><br />
                  Segundo pesquisa de Frederick Reichheld da Bain &amp; Company (Harvard Business Review), vender novamente para o mesmo cliente é de <b>5 a 25× mais barato</b> do que adquirir um cliente novo. Na mesma pesquisa — que incluiu o setor de seguros — aumentar a retenção em apenas 5% gerou até <b>85% mais lucro</b>.
                  <span className="src">² Reichheld, F. &amp; Sasser Jr., W. E. — "Zero Defections", Harvard Business Review, 1990</span>
                </div>
              </div>
            </div>
          </section>

          {/* 02 / ESCOPO */}
          <section className="re-section" id="escopo">
            <div className="re-section-header">
              <div className="re-section-idx">02 / Escopo</div>
              <h2 className="re-section-title">4 pilares<span className="dot">.</span></h2>
            </div>

            <div className="re-pilar-grid">
              <div className="re-pilar">
                <div className="re-pilar-letter">A</div>
                <div className="re-pilar-name">// Pilar A</div>
                <h4>Conteúdo &amp;<br />Criativo<span className="dot">.</span></h4>
                <ul>
                  <li>30 posts/mês para o perfil principal</li>
                  <li>30 posts/mês para o perfil secundário (em espanhol)</li>
                  <li>4 vídeos do mascote por mês</li>
                  <li>Direcionamento, roteirização e edição de criativos, landing pages e recursos necessários para otimizar o tráfego</li>
                </ul>
              </div>

              <div className="re-pilar">
                <div className="re-pilar-letter">B</div>
                <div className="re-pilar-name">// Pilar B</div>
                <h4>Tráfego<span className="dot">.</span></h4>
                <ul>
                  <li>Gestão estratégica do tráfego pago</li>
                  <li>Construção de infraestrutura para potencializar o resultado atual</li>
                  <li>Brainstorming semanal de criativos que estão trazendo o melhor retorno</li>
                </ul>
              </div>

              <div className="re-pilar">
                <div className="re-pilar-letter">C</div>
                <div className="re-pilar-name">// Pilar C</div>
                <h4>Máquina<br />Comercial<span className="dot">.</span></h4>
                <ul>
                  <li>Estruturação do time comercial</li>
                  <li>Construção de processos da área</li>
                  <li>Scripts de venda com cadência de follow-up</li>
                  <li>Treinamento comercial</li>
                  <li>Reunião semanal com o time de vendas</li>
                  <li>Metas claras e métricas de acompanhamento</li>
                </ul>
              </div>

              <div className="re-pilar">
                <div className="re-pilar-letter">D</div>
                <div className="re-pilar-name">// Pilar D</div>
                <h4>Retenção<br />&amp; Base<span className="dot">.</span></h4>
                <ul>
                  <li>Ativação da base de 6 mil clientes</li>
                  <li>Redesign do programa de indicação</li>
                  <li>Melhoria do processo de onboarding</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 03 / INVESTIMENTO */}
          <section className="re-section" id="investimento">
            <div className="re-section-header">
              <div className="re-section-idx">03 / Valor</div>
              <h2 className="re-section-title">Investimento<span className="dot">.</span></h2>
            </div>

            <div className="re-invest">
              <div className="re-invest-label">// Mensalidade</div>
              <div className="re-invest-value">$ 3<span className="cyan">.</span>000<span style={{ fontSize: ".4em", color: "var(--text-muted)" }}>,00</span></div>
            </div>
          </section>

          {/* 04 / OPERADOR — SOBRE */}
          <section className="re-section" id="operador">
            <div className="re-section-header">
              <div className="re-section-idx">04 / Operador</div>
              <h2 className="re-section-title">Quem assina<span className="dot">.</span></h2>
            </div>

            <div className="re-about-grid">
              <div className="re-about-photo">
                <img loading="lazy" src={rodrigoPhoto} alt="Rodrigo Albuquerque" />
              </div>
              <div>
                <p className="re-about-text">
                  Rodrigo Albuquerque liderou <b>R$80 milhões em vendas anuais</b> antes de fundar a BA Consultoria, onde compilou o aprendizado de mais de 100 empresas atendidas. A BA opera nas quatro frentes que sustentam crescimento de receita: consultoria estratégica, execução de marketing, automação com IA e inteligência comercial.
                </p>
                <div className="re-stat-grid">
                  {stats.map((s) => (
                    <div key={s.num} className="re-stat">
                      <div className="re-stat-num">{s.num}</div>
                      <div className="re-stat-label">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 05 / REDE — REFERÊNCIAS */}
          <section className="re-section" id="rede">
            <div className="re-section-header">
              <div className="re-section-idx">05 / Rede</div>
              <h2 className="re-section-title">Referências<span className="dot">.</span></h2>
            </div>

            <div className="re-mentors-grid">
              {mentors.map((m) => (
                <div key={m.name} className="re-mentor">
                  <div className="re-mentor-photo">
                    <img loading="lazy" src={m.photo} alt={m.name} />
                  </div>
                  <h3 className="re-mentor-name">{m.name}</h3>
                  <p className="re-mentor-role">{m.role}</p>
                  <p className="re-mentor-bio">{m.bio}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="re-cta" id="contato">
            <div className="re-cta-label">// Próximo passo</div>
            <h2 className="re-cta-title">O diagnóstico está feito<span className="dot">.</span><br />Falta a decisão<span className="dot">.</span></h2>
            <a
              className="re-btn"
              href="https://wa.me/5511999718595"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => tracker.track("cta_click", { product: "royal-eagle", location: "proposta_cta" })}
            >
              Falar no WhatsApp →
            </a>
          </section>

          {/* CLOSING */}
          <section className="re-closing">
            <div className="re-closing-sig">
              <div className="name">Rodrigo Albuquerque<small>BA Consultoria · Junho 2026</small></div>
              <div className="footer-meta">File PROP-RE-2026.06<br />Ref. DIAG-RE-2026.05<br />Fim do documento</div>
            </div>
          </section>
        </main>

        <div className="re-footnotes">
          <span>¹</span> Oldroyd, J. B. — "The Short Life of Online Sales Leads", MIT Sloan / InsideSales.com, publicado na Harvard Business Review, 2011.<br />
          <span>²</span> Reichheld, F. F. &amp; Sasser Jr., W. E. — "Zero Defections: Quality Comes to Services", Harvard Business Review, 1990.
        </div>
      </div>
    </>
  );
};

export default PropostaRoyalEagle;
