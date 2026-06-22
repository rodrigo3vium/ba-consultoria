import { useEffect } from "react";
import { tracker } from "@/lib/tracking";
import rodrigoPhoto from "@/assets/founders/rodrigo-albuquerque.webp";
import diegoBarretoPhoto from "@/assets/mentors/diego-barreto.webp";
import pedroSommaPhoto from "@/assets/mentors/pedro-somma.webp";
import vaboPhoto from "@/assets/mentors/vabo.webp";
import joaoOliverioPhoto from "@/assets/mentors/joao-oliverio.webp";
import joseDiogoPhoto from "@/assets/mentors/jose-diogo.webp";

const PropostaClinicaSitha = () => {
  useEffect(() => {
    tracker.page("Proposta Clínica Sitha");
    const prev = {
      bg: document.body.style.backgroundColor,
      color: document.body.style.color,
      pt: document.body.style.paddingTop,
      ox: document.body.style.overflowX,
    };
    document.body.style.backgroundColor = "#05090B";
    document.body.style.color = "#F2EDE4";
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

        .sit-page {
          --bg-main:#05090B; --bg-deep:#020405; --bg-card:#0B1114; --bg-elev:#11171A;
          --text-primary:#F2EDE4; --text-secondary:#C8C0B2; --text-muted:#7D827D; --text-faint:#4A4F4D;
          --accent-cyan:#20DDEB; --accent-cyan-soft:#38F3FF; --accent-cyan-dim:#0F8995; --accent-cyan-glow:rgba(32,221,235,0.45);
          --accent-red:#E44935; --accent-red-dim:#8C2A20;
          --grid-line:rgba(255,255,255,0.045); --grid-strong:rgba(255,255,255,0.10);
          --font-display:'Bebas Neue','Oswald',sans-serif;
          --font-mono:'IBM Plex Mono','Space Mono',monospace;
          --font-body:'Fraunces',Georgia,serif;

          background:var(--bg-main); color:var(--text-primary);
          font-family:var(--font-body); position:relative; overflow-x:hidden;
          scroll-behavior:smooth; min-height:100vh;
          -webkit-font-smoothing:antialiased;
        }
        .sit-page *{margin:0;padding:0;box-sizing:border-box;}

        .sit-noise{
          position:fixed; inset:0; pointer-events:none; z-index:1; mix-blend-mode:overlay; opacity:0.6;
          background-image:
            radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.65) 100%),
            url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.95  0 0 0 0 0.93  0 0 0 0 0.89  0 0 0 0.12 0'/></filter><rect width='200' height='200' filter='url(%23n)'/></svg>");
        }
        .sit-bggrid{
          position:fixed; inset:0; pointer-events:none; z-index:0;
          background-image:
            linear-gradient(to right, var(--grid-line) 1px, transparent 1px),
            linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px);
          background-size:80px 80px;
          -webkit-mask-image:radial-gradient(ellipse at center, black 30%, transparent 90%);
          mask-image:radial-gradient(ellipse at center, black 30%, transparent 90%);
        }
        .sit-page .wrap{position:relative; z-index:2; max-width:1180px; margin:0 auto; padding:0 32px;}

        /* META BAR */
        .sit-page .meta-bar{
          position:sticky; top:0; z-index:50; display:flex; justify-content:space-between; align-items:center;
          padding:12px 32px; border-bottom:1px solid var(--grid-strong);
          background:rgba(5,9,11,0.85); backdrop-filter:blur(12px);
          font-family:var(--font-mono); font-size:11px; text-transform:uppercase; letter-spacing:0.15em; color:var(--text-muted);
        }
        .sit-page .meta-bar .left{display:flex; align-items:center; gap:14px;}
        .sit-page .meta-bar .dot{width:6px; height:6px; border-radius:50%; background:var(--accent-cyan); box-shadow:0 0 8px var(--accent-cyan-glow); animation:sitPulse 2s infinite;}
        .sit-page .meta-bar .right{color:var(--text-faint);}
        @keyframes sitPulse{0%,100%{opacity:1;}50%{opacity:0.4;}}

        /* SECTION SCAFFOLD */
        .sit-page section{padding:96px 0; border-top:1px solid var(--grid-strong); position:relative; scroll-margin-top:70px;}
        .sit-page .sec-head{display:flex; align-items:center; gap:16px; margin-bottom:40px;}
        .sit-page .idx{font-family:var(--font-mono); font-size:12px; letter-spacing:0.2em; color:var(--accent-cyan); text-transform:uppercase;}
        .sit-page .sec-title{font-family:var(--font-display); font-size:clamp(32px,4vw,56px); text-transform:uppercase; letter-spacing:0.01em; line-height:0.95;}
        .sit-page .lead{font-family:var(--font-body); font-size:18px; line-height:1.6; color:var(--text-secondary); max-width:760px;}
        .sit-page .lead.big{font-size:20px;}
        .sit-page p.body{font-family:var(--font-body); font-size:16px; line-height:1.6; color:var(--text-secondary); max-width:760px; margin-top:18px;}
        .sit-page .kicker{font-family:var(--font-mono); font-size:11px; letter-spacing:0.2em; text-transform:uppercase; color:var(--text-muted);}
        .sit-page .red{color:var(--accent-red);} .sit-page .cyan{color:var(--accent-cyan);}

        /* HERO */
        .sit-page .hero{min-height:92vh; display:flex; flex-direction:column; justify-content:center; position:relative; padding:120px 0 80px; border-top:none;}
        .sit-page .corner-tl,.sit-page .corner-tr,.sit-page .corner-bl,.sit-page .corner-br{position:absolute; width:26px; height:26px; border:1px solid var(--accent-cyan);}
        .sit-page .hero .corner-tl{top:90px; left:0; border-right:none; border-bottom:none;}
        .sit-page .hero .corner-tr{top:90px; right:0; border-left:none; border-bottom:none;}
        .sit-page .hero .corner-bl{bottom:30px; left:0; border-right:none; border-top:none;}
        .sit-page .hero .corner-br{bottom:30px; right:0; border-left:none; border-top:none;}
        .sit-page .coords{position:absolute; top:96px; right:0; text-align:right; font-family:var(--font-mono); font-size:10px; letter-spacing:0.18em; color:var(--text-muted); text-transform:uppercase; line-height:2;}
        .sit-page .coords b{color:var(--accent-cyan); font-weight:500;}
        .sit-page .hero .tags{display:flex; gap:10px; margin-bottom:28px; flex-wrap:wrap;}
        .sit-page .tag{font-family:var(--font-mono); font-size:10px; text-transform:uppercase; letter-spacing:0.15em; padding:5px 10px; border:1px solid var(--grid-strong); color:var(--text-secondary);}
        .sit-page .tag.cyan{border-color:var(--accent-cyan-dim); color:var(--accent-cyan);}
        .sit-page .tag.red{border-color:var(--accent-red-dim); color:var(--accent-red);}
        .sit-page .hero h1{font-family:var(--font-display); font-size:clamp(64px,11vw,168px); line-height:0.86; letter-spacing:0.005em; text-transform:uppercase; max-width:14ch;}
        .sit-page .hero .sub{margin-top:32px; max-width:640px; font-family:var(--font-body); font-size:19px; line-height:1.6; color:var(--text-secondary);}
        .sit-page .hero .cta-row{margin-top:44px; display:flex; gap:16px; align-items:center; flex-wrap:wrap;}

        /* BUTTONS */
        .sit-page .btn-primary{display:inline-flex; align-items:center; gap:12px; padding:15px 26px; font-family:var(--font-mono); font-size:12px; text-transform:uppercase; letter-spacing:0.2em; border:1px solid var(--accent-cyan); color:var(--accent-cyan); background:transparent; cursor:pointer; transition:all 0.25s ease; text-decoration:none;}
        .sit-page .btn-primary:hover{background:var(--accent-cyan); color:var(--bg-deep); box-shadow:0 0 24px var(--accent-cyan-glow);}
        .sit-page .btn-ghost{display:inline-flex; align-items:center; gap:12px; padding:15px 26px; font-family:var(--font-mono); font-size:12px; text-transform:uppercase; letter-spacing:0.2em; border:1px solid var(--grid-strong); color:var(--text-secondary); background:transparent; text-decoration:none; transition:all 0.25s ease;}
        .sit-page .btn-ghost:hover{border-color:var(--text-secondary); color:var(--text-primary);}

        /* STAT GRID */
        .sit-page .stat-grid{display:grid; grid-template-columns:repeat(4,1fr); border:1px solid var(--grid-strong); margin-top:40px;}
        .sit-page .stat{padding:28px 24px; border-right:1px solid var(--grid-strong);}
        .sit-page .stat:last-child{border-right:none;}
        .sit-page .stat .label{font-family:var(--font-mono); font-size:10px; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.15em;}
        .sit-page .stat .value{font-family:var(--font-display); font-size:clamp(40px,4.6vw,56px); line-height:1; margin-top:10px;}
        .sit-page .stat .value.cyan{color:var(--accent-cyan);}

        /* REFERENCES */
        .sit-page .ref-list{display:grid; grid-template-columns:repeat(5,1fr); gap:1px; background:var(--grid-strong); border:1px solid var(--grid-strong);}
        .sit-page .ref{background:var(--bg-card); padding:24px 26px;}
        .sit-page .ref .name{font-family:var(--font-display); font-size:24px; text-transform:uppercase; line-height:1;}
        .sit-page .ref .role{font-family:var(--font-mono); font-size:11px; letter-spacing:0.12em; text-transform:uppercase; color:var(--accent-cyan); margin-top:8px;}
        .sit-page .ref .desc{font-family:var(--font-body); font-size:14px; line-height:1.55; color:var(--text-muted); margin-top:10px;}
        .sit-page .ref-photo{width:100%; aspect-ratio:1.4; overflow:hidden; border-bottom:1px solid var(--grid-strong); margin:-24px -26px 14px; width:calc(100% + 52px);}
        .sit-page .ref-photo img{width:100%; height:100%; object-fit:cover; object-position:top; filter:grayscale(.4) contrast(1.05) brightness(.88);}

        /* ABOUT */
        .sit-page .about-grid{display:grid; grid-template-columns:240px 1fr; gap:40px; align-items:start; margin-top:32px;}
        .sit-page .about-photo{width:100%; aspect-ratio:1; overflow:hidden; border:1px solid var(--grid-strong);}
        .sit-page .about-photo img{width:100%; height:100%; object-fit:cover; filter:grayscale(.35) contrast(1.05) brightness(.9);}

        /* DIAGNOSTIC */
        .sit-page .diag{display:grid; grid-template-columns:1fr 1fr; gap:24px; margin-top:8px;}
        .sit-page .diag-col{background:linear-gradient(180deg,var(--bg-card) 0%,var(--bg-elev) 100%); border:1px solid var(--grid-strong); padding:32px; position:relative;}
        .sit-page .diag-col .corner-tl{top:14px; left:14px; width:18px; height:18px; border-right:none; border-bottom:none;}
        .sit-page .diag-col h3{font-family:var(--font-display); font-size:28px; text-transform:uppercase; line-height:0.95; margin-bottom:20px;}
        .sit-page .diag-col h3 .stamp-dot{display:inline-block; width:8px; height:8px; margin-right:10px; vertical-align:middle;}
        .sit-page .diag-col.up h3 .stamp-dot{background:var(--accent-cyan); box-shadow:0 0 8px var(--accent-cyan-glow);}
        .sit-page .diag-col.down h3 .stamp-dot{background:var(--accent-red);}
        .sit-page .diag-col ul{list-style:none;}
        .sit-page .diag-col li{font-family:var(--font-body); font-size:15px; line-height:1.5; color:var(--text-secondary); padding:10px 0 10px 22px; border-bottom:1px solid var(--grid-line); position:relative;}
        .sit-page .diag-col li:last-child{border-bottom:none;}
        .sit-page .diag-col li::before{content:'›'; position:absolute; left:0; font-family:var(--font-mono); color:var(--accent-cyan);}
        .sit-page .diag-col.down li::before{color:var(--accent-red);}

        /* OBJECTIVE */
        .sit-page .obj-grid{display:grid; grid-template-columns:repeat(2,1fr); gap:14px 40px; margin-top:8px;}
        .sit-page .obj-item{font-family:var(--font-body); font-size:16px; line-height:1.5; color:var(--text-secondary); padding-left:26px; position:relative;}
        .sit-page .obj-item::before{content:'+'; position:absolute; left:0; font-family:var(--font-mono); color:var(--accent-cyan); font-weight:600;}

        /* COMO FUNCIONA — value cards */
        .sit-page .value-grid{display:grid; grid-template-columns:repeat(3,1fr); gap:1px; background:var(--grid-strong); border:1px solid var(--grid-strong); margin-top:8px;}
        .sit-page .value-card{background:var(--bg-card); padding:32px 28px; position:relative;}
        .sit-page .value-card .v-num{font-family:var(--font-mono); font-size:11px; letter-spacing:0.2em; color:var(--accent-cyan); text-transform:uppercase; margin-bottom:16px;}
        .sit-page .value-card h4{font-family:var(--font-display); font-size:26px; text-transform:uppercase; line-height:0.95; margin-bottom:14px;}
        .sit-page .value-card p{font-family:var(--font-body); font-size:14.5px; line-height:1.55; color:var(--text-muted);}

        /* INVESTMENT */
        .sit-page .plans{display:grid; grid-template-columns:1fr 1fr; gap:24px; margin-top:32px;}
        .sit-page .plan{background:linear-gradient(180deg,var(--bg-card) 0%,var(--bg-elev) 100%); border:1px solid var(--grid-strong); padding:36px 32px; position:relative;}
        .sit-page .plan.featured{border-color:var(--accent-cyan-dim);}
        .sit-page .plan .corner-tl,.sit-page .plan .corner-tr{width:20px; height:20px;}
        .sit-page .plan .corner-tl{top:14px; left:14px; border-right:none; border-bottom:none;}
        .sit-page .plan .corner-tr{top:14px; right:14px; border-left:none; border-bottom:none;}
        .sit-page .plan .ribbon{font-family:var(--font-mono); font-size:10px; letter-spacing:0.2em; text-transform:uppercase; color:var(--accent-cyan); display:flex; align-items:center; gap:10px; margin-bottom:18px;}
        .sit-page .plan .ribbon::before{content:''; width:6px; height:6px; background:var(--accent-cyan); box-shadow:0 0 8px var(--accent-cyan-glow);}
        .sit-page .plan h3{font-family:var(--font-display); font-size:34px; text-transform:uppercase; line-height:0.95;}
        .sit-page .plan .plan-desc{font-family:var(--font-body); font-size:14px; line-height:1.55; color:var(--text-muted); margin-top:12px; margin-bottom:4px;}
        .sit-page .plan .price-row{display:flex; justify-content:space-between; align-items:baseline; padding:14px 0; border-bottom:1px solid var(--grid-line);}
        .sit-page .plan .price-label{font-family:var(--font-mono); font-size:11px; text-transform:uppercase; letter-spacing:0.12em; color:var(--text-muted);}
        .sit-page .plan .price-val{font-family:var(--font-display); font-size:36px; line-height:1;}
        .sit-page .plan.featured .price-val.main{color:var(--accent-cyan);}
        .sit-page .plan .price-val.sub{font-family:var(--font-mono); font-size:15px; color:var(--text-secondary); letter-spacing:0.05em;}
        .sit-page .plan .deliverables-label{font-family:var(--font-mono); font-size:10px; letter-spacing:0.2em; text-transform:uppercase; color:var(--text-muted); margin-top:22px; margin-bottom:12px;}
        .sit-page .plan ul{list-style:none;}
        .sit-page .plan li{font-family:var(--font-body); font-size:14.5px; line-height:1.5; color:var(--text-secondary); padding:9px 0 9px 22px; border-bottom:1px solid var(--grid-line); position:relative;}
        .sit-page .plan li:last-child{border-bottom:none;}
        .sit-page .plan li::before{content:'›'; position:absolute; left:0; font-family:var(--font-mono); color:var(--accent-cyan);}

        /* REC NOTE */
        .sit-page .rec-note{border:1px solid var(--grid-strong); border-left:2px solid var(--accent-cyan); padding:24px 28px; margin-top:24px; font-family:var(--font-body); font-size:15px; line-height:1.7; color:var(--text-secondary);}
        .sit-page .rec-note strong{color:var(--text-primary);}

        /* CTA FINAL */
        .sit-page .final{text-align:left; padding:120px 0;}
        .sit-page .final h2{font-family:var(--font-display); font-size:clamp(44px,7vw,104px); text-transform:uppercase; line-height:0.9; max-width:16ch;}
        .sit-page .final p{font-family:var(--font-body); font-size:18px; line-height:1.6; color:var(--text-secondary); max-width:680px; margin-top:26px;}
        .sit-page .final .cta-row{margin-top:40px;}

        /* FOOTER */
        .sit-page footer{border-top:1px solid var(--grid-strong); padding:28px 0; font-family:var(--font-mono); font-size:11px; letter-spacing:0.15em; text-transform:uppercase; color:var(--text-faint);}
        .sit-page .footer-row{display:flex; justify-content:space-between; flex-wrap:wrap; gap:12px;}

        /* RESPONSIVE */
        @media(max-width:880px){
          .sit-page .wrap{padding:0 20px;}
          .sit-page .stat-grid{grid-template-columns:repeat(2,1fr);}
          .sit-page .stat:nth-child(2){border-right:none;}
          .sit-page .stat:nth-child(1),.sit-page .stat:nth-child(2){border-bottom:1px solid var(--grid-strong);}
          .sit-page .about-grid{grid-template-columns:1fr;}
          .sit-page .about-photo{max-width:200px;}
          .sit-page .ref-list{grid-template-columns:1fr 1fr;}
          .sit-page .diag{grid-template-columns:1fr;}
          .sit-page .value-grid{grid-template-columns:1fr;}
          .sit-page .obj-grid{grid-template-columns:1fr;}
          .sit-page .plans{grid-template-columns:1fr;}
          .sit-page .coords{display:none;}
        }
        @media(max-width:520px){
          .sit-page .ref-list{grid-template-columns:1fr;}
        }
      `}</style>

      <div className="sit-page">
        <div className="sit-bggrid" aria-hidden="true" />
        <div className="sit-noise" aria-hidden="true" />

        {/* META BAR */}
        <div className="meta-bar">
          <div className="left"><span className="dot" /> BA CONSULTORIA · PROPOSTA EXCLUSIVA</div>
          <div className="right">CONFIDENCIAL · 2026</div>
        </div>

        <div className="wrap">

          {/* ── HERO ── */}
          <header className="hero">
            <span className="corner-tl" /><span className="corner-tr" />
            <span className="corner-bl" /><span className="corner-br" />
            <div className="coords">
              FILE: <b>CLINICA-SITHA</b><br />
              OWNER: <b>R. ALBUQUERQUE</b><br />
              ESTADO: <b>AGUARDANDO DECISÃO</b>
            </div>
            <div className="tags">
              <span className="tag cyan">PROPOSTA · CONFIDENCIAL</span>
              <span className="tag">PARA: CLÍNICA SITHA</span>
            </div>
            <h1>PROPOSTA DE<br />CONSULTORIA<br />DE IA<span className="red">.</span></h1>
            <p className="sub">
              A clínica tem demanda, uma estrutura sólida e um jeito de atender que funciona.
              O próximo salto não vem de consertar nada — vem da camada de inteligência que
              mostra onde estão as oportunidades de crescimento que a operação já cria todos os
              dias. Esta proposta entrega isso em dois níveis.
            </p>
            <div className="cta-row">
              <a href="#investimento" className="btn-primary">VER PROPOSTA →</a>
              <a href="#como-funciona" className="btn-ghost">COMO FUNCIONA</a>
            </div>
          </header>

          {/* ── SOBRE ── */}
          <section id="sobre">
            <div className="sec-head"><span className="idx">[ 01 / SOBRE ]</span><h2 className="sec-title">Quem está por trás</h2></div>
            <div className="about-grid">
              <div className="about-photo">
                <img loading="lazy" src={rodrigoPhoto} alt="Rodrigo Albuquerque" />
              </div>
              <div>
                <p className="lead big">Rodrigo Albuquerque investiu meio milhão de reais em mentoria com alguns dos maiores empreendedores do Brasil. Liderou R$80 milhões em vendas anuais e compilou na BA Consultoria o aprendizado de mais de 100 empresas atendidas.</p>
                <p className="body">A BA Consultoria une consultoria estratégica, execução de marketing, automação com IA e inteligência comercial — tudo focado em gerar retorno financeiro real e escalável.</p>
              </div>
            </div>
            <div className="stat-grid">
              <div className="stat"><div className="label">Gerados em vendas</div><div className="value cyan">+R$130M</div></div>
              <div className="stat"><div className="label">Consultorias</div><div className="value">100+</div></div>
              <div className="stat"><div className="label">Países atendidos</div><div className="value">+7</div></div>
              <div className="stat"><div className="label">Avaliações 5★</div><div className="value">+54</div></div>
            </div>
          </section>

          {/* ── REFERÊNCIAS ── */}
          <section id="referencias">
            <div className="sec-head"><span className="idx">[ 02 / REFERÊNCIAS ]</span><h2 className="sec-title">Nossos mentores</h2></div>
            <p className="lead">Aprendemos diretamente com alguns dos maiores líderes do mercado brasileiro.</p>
            <div className="ref-list" style={{ marginTop: "32px" }}>
              <div className="ref">
                <div className="ref-photo"><img loading="lazy" src={diegoBarretoPhoto} alt="Diego Barreto" /></div>
                <div className="name">Diego Barreto</div><div className="role">CEO · iFood</div>
                <div className="desc">Autor do best-seller "Nova Economia," lidera a expansão e inovação no iFood.</div>
              </div>
              <div className="ref">
                <div className="ref-photo"><img loading="lazy" src={pedroSommaPhoto} alt="Pedro Somma" /></div>
                <div className="name">Pedro Somma</div><div className="role">Ex-COO · 99</div>
                <div className="desc">Papel fundamental na expansão e operação da 99, consolidando-a como líder em mobilidade.</div>
              </div>
              <div className="ref">
                <div className="ref-photo"><img loading="lazy" src={vaboPhoto} alt="Luis Vabo Jr." /></div>
                <div className="name">Luis Vabo Jr.</div><div className="role">Ex-diretor · Stone</div>
                <div className="desc">Empreendedor serial, investidor e autor de 'Falar em público é para você!'.</div>
              </div>
              <div className="ref">
                <div className="ref-photo"><img loading="lazy" src={joaoOliverioPhoto} alt="João Olivério" /></div>
                <div className="name">João Olivério</div><div className="role">CEO · Sales As A System</div>
                <div className="desc">Especialista em vendas, Country Manager da Apollo.io e mentor no G4 Sales.</div>
              </div>
              <div className="ref">
                <div className="ref-photo"><img loading="lazy" src={joseDiogoPhoto} alt="José Diogo C. Rodrigues" /></div>
                <div className="name">José Diogo C. Rodrigues</div><div className="role">CMO Latam · Tinder</div>
                <div className="desc">Experiência em Brand Marketing na Nike, Red Bull e atualmente Tinder Latam & Canadá.</div>
              </div>
            </div>
          </section>

          {/* ── CONTEXTO ── */}
          <section id="contexto">
            <div className="sec-head"><span className="idx">[ 03 / CONTEXTO ]</span><h2 className="sec-title">Onde a Sitha está hoje</h2></div>
            <p className="lead big">O tráfego traz o lead. A clínica tem demanda e uma estrutura que funciona. O que falta é visibilidade sobre onde estão as oportunidades de crescer.</p>
            <p className="body">O conhecimento que faz a clínica funcionar — protocolos, decisões, histórico de casos, o jeito Sitha de conduzir cada tratamento — é riquíssimo, mas vive distribuído na cabeça das pessoas: da Dra. Thais, da nutri, de quem está no WhatsApp naquele dia. É um ativo enorme que ainda não está num lugar onde a clínica inteira possa consultar e crescer em cima dele.</p>
            <p className="body">No dia a dia, cada conversa e cada decisão comercial geram um sinal valioso sobre o que está convertendo, quem vale reativar e onde há mais espaço. Hoje esse sinal não é lido nem agregado — então boa parte das oportunidades de crescimento passa despercebida, simplesmente porque ninguém tem como enxergá-la em escala.</p>
            <p className="body">O gap não é a estrutura. É <span className="cyan">visibilidade</span> — enxergar as <span className="cyan">oportunidades que a operação já cria todos os dias.</span></p>
          </section>

          {/* ── DIAGNÓSTICO ── */}
          <section id="diagnostico">
            <div className="sec-head"><span className="idx">[ 04 / DIAGNÓSTICO ]</span><h2 className="sec-title">O que mapeamos</h2></div>
            <p className="lead">A base é forte. O retorno está em enxergar e capturar as oportunidades que ela já cria.</p>
            <div className="diag">
              <div className="diag-col up">
                <span className="corner-tl" />
                <h3><span className="stamp-dot" />Pontos fortes</h3>
                <ul>
                  <li>Demanda saudável: o tráfego já traz leads de forma consistente</li>
                  <li>Um jeito Sitha de conduzir tratamentos que comprovadamente converte e fideliza</li>
                  <li>Base de pacientes e histórico de casos acumulados ao longo dos anos</li>
                </ul>
              </div>
              <div className="diag-col up">
                <span className="corner-tl" />
                <h3><span className="stamp-dot" />Oportunidades</h3>
                <ul>
                  <li>Uma base de pacientes e histórico que, organizados, viram inteligência para reativação e crescimento</li>
                  <li>Um jeito Sitha de atender que, mapeado, pode ser replicado por toda a equipe</li>
                  <li>Sinais comerciais gerados todo dia — conversas e decisões que, lidos, revelam onde há mais espaço para crescer</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ── OBJETIVO ── */}
          <section id="objetivo">
            <div className="sec-head"><span className="idx">[ 05 / OBJETIVO ]</span><h2 className="sec-title">O que este projeto resolve</h2></div>
            <p className="lead">Transformar o conhecimento e o tráfego que já existem em crescimento visível e dirigível.</p>
            <div className="obj-grid" style={{ marginTop: "32px" }}>
              <div className="obj-item">Centralizar o conhecimento da clínica num cérebro único e consultável, que a equipe inteira pode usar para crescer em cima dele</div>
              <div className="obj-item">Dar visibilidade das oportunidades de crescimento que a operação já gera — quem reativar, qual abordagem replicar, onde há mais espaço</div>
              <div className="obj-item">Priorizar os pacientes e as abordagens com maior potencial de retorno, e ativá-los na hora certa</div>
              <div className="obj-item">Fazer o jeito Sitha de atender deixar de ser talento individual e virar padrão da casa, replicável em escala</div>
            </div>
          </section>

          {/* ── COMO FUNCIONA ── */}
          <section id="como-funciona">
            <div className="sec-head"><span className="idx">[ 06 / COMO FUNCIONA ]</span><h2 className="sec-title">O que o agente faz</h2></div>
            <p className="lead">Sobre a fundação do Segundo Cérebro, o Agente de IA dá à clínica a visão que falta — e trabalha o comercial todos os dias para capturar o que ela revela.</p>
            <div className="value-grid">
              <div className="value-card">
                <div className="v-num">FRENTE 01</div>
                <h4>MOSTRA ONDE ESTÁ O CRESCIMENTO</h4>
                <p>O agente lê cada conversa de WhatsApp e cada call de venda e aponta onde há mais a ganhar: quais pacientes vale reativar, quais abordagens estão convertendo melhor, em que ponto da jornada a clínica tem mais espaço para crescer. A operação ganha visão de onde está o próximo resultado.</p>
              </div>
              <div className="value-card">
                <div className="v-num">FRENTE 02</div>
                <h4>FAZ O MELHOR VIRAR PADRÃO</h4>
                <p>Como conversa com o Segundo Cérebro, o agente orienta com a clínica inteira por trás. O que já funciona — o atendimento que converte, o protocolo que fideliza — é mapeado e replicado em escala: a atendente nova passa a vender no nível da melhor da equipe.</p>
              </div>
              <div className="value-card">
                <div className="v-num">FRENTE 03</div>
                <h4>ATIVA AS OPORTUNIDADES NA HORA CERTA</h4>
                <p>Cada oportunidade que vale a pena perseguir entra na pauta no momento certo: o paciente com maior potencial de retorno, a abordagem que merece um próximo passo, a conversa pronta para avançar. O follow-up inteligente garante que o potencial que a clínica já tem vira agenda.</p>
              </div>
            </div>
          </section>

          {/* ── INVESTIMENTO ── */}
          <section id="investimento">
            <div className="sec-head"><span className="idx">[ 07 / INVESTIMENTO ]</span><h2 className="sec-title">Proposta comercial</h2></div>
            <p className="lead">Dois níveis. A Opção A é a fundação que organiza e responde. A Opção B coloca essa fundação para enxergar e capturar oportunidades todos os dias.</p>

            <div className="plans">
              {/* OPÇÃO A */}
              <div className="plan">
                <span className="corner-tl" /><span className="corner-tr" />
                <div className="ribbon">Opção A</div>
                <h3>Segundo Cérebro</h3>
                <p className="plan-desc">O conhecimento da clínica deixa de morar na cabeça das pessoas e vira a memória viva da casa — consultável em linguagem natural.</p>
                <div className="price-row">
                  <span className="price-label">Implementação</span>
                  <span className="price-val">R$8.000</span>
                </div>
                <div className="price-row">
                  <span className="price-label">Infraestrutura</span>
                  <span className="price-val sub">Custo do cliente</span>
                </div>
                <div className="deliverables-label">Entregáveis</div>
                <ul>
                  <li>Base de protocolos, processos e histórico organizada num cérebro único e consultável</li>
                  <li>Consulta em linguagem natural, direto no WhatsApp ou painel</li>
                  <li>Ingestão contínua: cada decisão e caso novo alimenta a base automaticamente</li>
                </ul>
              </div>

              {/* OPÇÃO B — FEATURED */}
              <div className="plan featured">
                <span className="corner-tl" /><span className="corner-tr" />
                <div className="ribbon">Recomendado · Opção B</div>
                <h3>Segundo Cérebro + Agente de IA</h3>
                <p className="plan-desc">Tudo da Opção A — e sobre essa base um Agente de IA que lê a operação e revela onde estão as oportunidades de crescimento. A clínica deixa de ter só memória e passa a ter visão. E a visão age.</p>
                <div className="price-row">
                  <span className="price-label">Implementação</span>
                  <span className="price-val main">R$24.000</span>
                </div>
                <div className="price-row">
                  <span className="price-label">Parcelamento</span>
                  <span className="price-val sub">ou 2× R$12.000</span>
                </div>
                <div className="price-row">
                  <span className="price-label">Infraestrutura</span>
                  <span className="price-val sub">Custo do cliente</span>
                </div>
                <div className="deliverables-label">Entregáveis</div>
                <ul>
                  <li>Todo o Segundo Cérebro da Opção A</li>
                  <li>Leitura automática de WhatsApp e calls para revelar onde há mais a ganhar em cada negociação</li>
                  <li>Ativação inteligente dos pacientes e abordagens com maior potencial de retorno</li>
                  <li>Padronização do atendimento puxada do que já funciona na clínica</li>
                  <li>Relatório de oportunidades: onde crescer e quanto</li>
                </ul>
              </div>
            </div>

            <div className="rec-note">
              <strong>A recomendação é honesta.</strong> A Opção A é uma base sólida — organiza o conhecimento e responde. O retorno mora na Opção B: é onde essa base vira visão que aponta crescimento, atendimento padronizado e oportunidade ativada na hora certa. Capturar 2 ou 3 oportunidades de crescimento por mês que hoje passam despercebidas já paga a estrutura inteira — e ela trabalha todo dia, sem depender de você.
            </div>
          </section>

          {/* ── CTA FINAL ── */}
          <section className="final">
            <span className="idx">[ 08 / PRÓXIMO PASSO ]</span>
            <h2 style={{ marginTop: "24px" }}>Vamos enxergar<br />o próximo<br />passo<span className="red">.</span></h2>
            <p>A Sitha já tem a estrutura e a demanda para crescer. O que falta é a inteligência que mostra por onde — e é exatamente isso que esta proposta entrega.</p>
            <div className="cta-row">
              <a
                href="https://wa.me/5511999718595"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                onClick={() => tracker.track("cta_click", { product: "clinica-sitha", location: "proposta_cta" })}
              >
                FALAR COM RODRIGO →
              </a>
            </div>
          </section>

        </div>

        <footer>
          <div className="wrap">
            <div className="footer-row">
              <span>BA CONSULTORIA © 2026</span>
              <span>PROPOSTA CLÍNICA SITHA · V1</span>
              <span>VÁLIDA POR 7 DIAS</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default PropostaClinicaSitha;
