import { useEffect } from "react";
import { tracker } from "@/lib/tracking";
import { ClipboardList, BrainCircuit, FileCheck } from "lucide-react";
import rodrigoPhoto from "@/assets/founders/rodrigo-albuquerque.webp";
import diegoBarretoPhoto from "@/assets/mentors/diego-barreto.webp";
import pedroSommaPhoto from "@/assets/mentors/pedro-somma.webp";
import vaboPhoto from "@/assets/mentors/vabo.webp";
import joaoOliverioPhoto from "@/assets/mentors/joao-oliverio.webp";
import joseDiogoPhoto from "@/assets/mentors/jose-diogo.webp";

const PropostaRaioXDoTerreno = () => {
  useEffect(() => {
    tracker.page("Proposta Raio-X do Terreno");
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

        .rx-page{
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
        .rx-page *{margin:0;padding:0;box-sizing:border-box;}

        .rx-noise{
          content:''; position:fixed; inset:0; pointer-events:none; z-index:1; mix-blend-mode:overlay; opacity:0.6;
          background-image:
            radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.65) 100%),
            url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.95  0 0 0 0 0.93  0 0 0 0 0.89  0 0 0 0.12 0'/></filter><rect width='200' height='200' filter='url(%23n)'/></svg>");
        }
        .rx-bggrid{
          content:''; position:fixed; inset:0; pointer-events:none; z-index:0;
          background-image:
            linear-gradient(to right, var(--grid-line) 1px, transparent 1px),
            linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px);
          background-size:80px 80px;
          -webkit-mask-image:radial-gradient(ellipse at center, black 30%, transparent 90%);
          mask-image:radial-gradient(ellipse at center, black 30%, transparent 90%);
        }
        .rx-page .wrap{position:relative; z-index:2; max-width:1180px; margin:0 auto; padding:0 32px;}

        /* META BAR */
        .rx-page .meta-bar{
          position:sticky; top:0; z-index:50; display:flex; justify-content:space-between; align-items:center;
          padding:12px 32px; border-bottom:1px solid var(--grid-strong);
          background:rgba(5,9,11,0.85); backdrop-filter:blur(12px);
          font-family:var(--font-mono); font-size:11px; text-transform:uppercase; letter-spacing:0.15em; color:var(--text-muted);
        }
        .rx-page .meta-bar .left{display:flex; align-items:center; gap:14px;}
        .rx-page .meta-bar .dot{width:6px; height:6px; border-radius:50%; background:var(--accent-cyan); box-shadow:0 0 8px var(--accent-cyan-glow); animation:rxPulse 2s infinite;}
        .rx-page .meta-bar .right{color:var(--text-faint);}
        @keyframes rxPulse{0%,100%{opacity:1;}50%{opacity:0.4;}}

        /* SECTION SCAFFOLD */
        .rx-page section{padding:96px 0; border-top:1px solid var(--grid-strong); position:relative; scroll-margin-top:70px;}
        .rx-page .sec-head{display:flex; align-items:center; gap:16px; margin-bottom:40px;}
        .rx-page .idx{font-family:var(--font-mono); font-size:12px; letter-spacing:0.2em; color:var(--accent-cyan); text-transform:uppercase;}
        .rx-page .sec-title{font-family:var(--font-display); font-size:clamp(32px,4vw,56px); text-transform:uppercase; letter-spacing:0.01em; line-height:0.95;}
        .rx-page .lead{font-family:var(--font-body); font-size:18px; line-height:1.6; color:var(--text-secondary); max-width:760px;}
        .rx-page .lead.big{font-size:20px;}
        .rx-page p.body{font-family:var(--font-body); font-size:16px; line-height:1.6; color:var(--text-secondary); max-width:760px; margin-top:18px;}
        .rx-page .kicker{font-family:var(--font-mono); font-size:11px; letter-spacing:0.2em; text-transform:uppercase; color:var(--text-muted);}
        .rx-page .red{color:var(--accent-red);} .rx-page .cyan{color:var(--accent-cyan);}

        /* HERO */
        .rx-page .hero{min-height:92vh; display:flex; flex-direction:column; justify-content:center; position:relative; padding:120px 0 80px; border-top:none;}
        .rx-page .corner-tl,.rx-page .corner-tr,.rx-page .corner-bl,.rx-page .corner-br{position:absolute; width:26px; height:26px; border:1px solid var(--accent-cyan);}
        .rx-page .hero .corner-tl{top:90px; left:0; border-right:none; border-bottom:none;}
        .rx-page .hero .corner-tr{top:90px; right:0; border-left:none; border-bottom:none;}
        .rx-page .hero .corner-bl{bottom:30px; left:0; border-right:none; border-top:none;}
        .rx-page .hero .corner-br{bottom:30px; right:0; border-left:none; border-top:none;}
        .rx-page .coords{position:absolute; top:96px; right:0; text-align:right; font-family:var(--font-mono); font-size:10px; letter-spacing:0.18em; color:var(--text-muted); text-transform:uppercase; line-height:2;}
        .rx-page .coords b{color:var(--accent-cyan); font-weight:500;}
        .rx-page .hero .tags{display:flex; gap:10px; margin-bottom:28px; flex-wrap:wrap;}
        .rx-page .tag{font-family:var(--font-mono); font-size:10px; text-transform:uppercase; letter-spacing:0.15em; padding:5px 10px; border:1px solid var(--grid-strong); color:var(--text-secondary);}
        .rx-page .tag.cyan{border-color:var(--accent-cyan-dim); color:var(--accent-cyan);}
        .rx-page .tag.red{border-color:var(--accent-red-dim); color:var(--accent-red);}
        .rx-page .hero h1{font-family:var(--font-display); font-size:clamp(64px,11vw,168px); line-height:0.86; letter-spacing:0.005em; text-transform:uppercase; max-width:14ch;}
        .rx-page .hero .sub{margin-top:32px; max-width:640px; font-family:var(--font-body); font-size:19px; line-height:1.6; color:var(--text-secondary);}
        .rx-page .hero .cta-row{margin-top:44px; display:flex; gap:16px; align-items:center; flex-wrap:wrap;}

        /* BUTTONS */
        .rx-page .btn-primary{display:inline-flex; align-items:center; gap:12px; padding:15px 26px; font-family:var(--font-mono); font-size:12px; text-transform:uppercase; letter-spacing:0.2em; border:1px solid var(--accent-cyan); color:var(--accent-cyan); background:transparent; cursor:pointer; transition:all 0.25s ease; text-decoration:none;}
        .rx-page .btn-primary:hover{background:var(--accent-cyan); color:var(--bg-deep); box-shadow:0 0 24px var(--accent-cyan-glow);}
        .rx-page .btn-ghost{display:inline-flex; align-items:center; gap:12px; padding:15px 26px; font-family:var(--font-mono); font-size:12px; text-transform:uppercase; letter-spacing:0.2em; border:1px solid var(--grid-strong); color:var(--text-secondary); background:transparent; text-decoration:none; transition:all 0.25s ease;}
        .rx-page .btn-ghost:hover{border-color:var(--text-secondary); color:var(--text-primary);}

        /* STAT GRID */
        .rx-page .stat-grid{display:grid; grid-template-columns:repeat(4,1fr); border:1px solid var(--grid-strong); margin-top:40px;}
        .rx-page .stat{padding:28px 24px; border-right:1px solid var(--grid-strong);}
        .rx-page .stat:last-child{border-right:none;}
        .rx-page .stat .label{font-family:var(--font-mono); font-size:10px; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.15em;}
        .rx-page .stat .value{font-family:var(--font-display); font-size:clamp(40px,4.6vw,56px); line-height:1; margin-top:10px;}
        .rx-page .stat .value.cyan{color:var(--accent-cyan);}

        /* REFERENCES */
        .rx-page .ref-list{display:grid; grid-template-columns:repeat(5,1fr); gap:1px; background:var(--grid-strong); border:1px solid var(--grid-strong);}
        .rx-page .ref{background:var(--bg-card); padding:24px 26px;}
        .rx-page .ref .name{font-family:var(--font-display); font-size:24px; text-transform:uppercase; line-height:1;}
        .rx-page .ref .role{font-family:var(--font-mono); font-size:11px; letter-spacing:0.12em; text-transform:uppercase; color:var(--accent-cyan); margin-top:8px;}
        .rx-page .ref .desc{font-family:var(--font-body); font-size:14px; line-height:1.55; color:var(--text-muted); margin-top:10px;}

        /* DIAGNOSTIC */
        .rx-page .diag{display:grid; grid-template-columns:1fr 1fr; gap:24px; margin-top:8px;}
        .rx-page .diag-col{background:linear-gradient(180deg,var(--bg-card) 0%,var(--bg-elev) 100%); border:1px solid var(--grid-strong); padding:32px; position:relative;}
        .rx-page .diag-col .corner-tl{top:14px; left:14px; width:18px; height:18px; border-right:none; border-bottom:none;}
        .rx-page .diag-col h3{font-family:var(--font-display); font-size:28px; text-transform:uppercase; line-height:0.95; margin-bottom:20px;}
        .rx-page .diag-col h3 .stamp-dot{display:inline-block; width:8px; height:8px; margin-right:10px; vertical-align:middle;}
        .rx-page .diag-col.up h3 .stamp-dot{background:var(--accent-cyan); box-shadow:0 0 8px var(--accent-cyan-glow);}
        .rx-page .diag-col.down h3 .stamp-dot{background:var(--accent-red);}
        .rx-page .diag-col ul{list-style:none;}
        .rx-page .diag-col li{font-family:var(--font-body); font-size:15px; line-height:1.5; color:var(--text-secondary); padding:10px 0 10px 22px; border-bottom:1px solid var(--grid-line); position:relative;}
        .rx-page .diag-col li:last-child{border-bottom:none;}
        .rx-page .diag-col li::before{content:'›'; position:absolute; left:0; font-family:var(--font-mono); color:var(--accent-cyan);}
        .rx-page .diag-col.down li::before{color:var(--accent-red);}

        /* PRODUCT FLOW */
        .rx-page .flow{display:grid; grid-template-columns:repeat(3,1fr); gap:1px; background:var(--grid-strong); border:1px solid var(--grid-strong); margin-top:8px;}
        .rx-page .step{background:var(--bg-card); padding:26px 20px; position:relative;}
        .rx-page .step-icon{display:flex; align-items:center; justify-content:center; width:48px; height:48px; border:1px solid var(--accent-cyan-dim); color:var(--accent-cyan); margin-bottom:20px; box-shadow:0 0 16px rgba(32,221,235,0.12);}
        .rx-page .step .num{font-family:var(--font-mono); font-size:11px; letter-spacing:0.2em; color:var(--accent-cyan);}
        .rx-page .step h4{font-family:var(--font-display); font-size:22px; text-transform:uppercase; line-height:0.98; margin:14px 0 10px;}
        .rx-page .step p{font-family:var(--font-body); font-size:13.5px; line-height:1.5; color:var(--text-muted);}
        .rx-page .pricetag{display:inline-block; font-family:var(--font-display); font-size:42px; color:var(--accent-cyan); line-height:1; margin-top:4px;}

        /* OBJECTIVE */
        .rx-page .obj-grid{display:grid; grid-template-columns:repeat(2,1fr); gap:14px 40px; margin-top:8px;}
        .rx-page .obj-item{font-family:var(--font-body); font-size:16px; line-height:1.5; color:var(--text-secondary); padding-left:26px; position:relative;}
        .rx-page .obj-item::before{content:'+'; position:absolute; left:0; font-family:var(--font-mono); color:var(--accent-cyan); font-weight:600;}

        /* INVESTMENT */
        .rx-page .plans{display:grid; grid-template-columns:1fr 1fr; gap:24px; margin-top:8px;}
        .rx-page .plan{background:linear-gradient(180deg,var(--bg-card) 0%,var(--bg-elev) 100%); border:1px solid var(--grid-strong); padding:36px 32px; position:relative;}
        .rx-page .plan.featured{border-color:var(--accent-cyan-dim);}
        .rx-page .plan .corner-tl,.rx-page .plan .corner-tr{width:20px; height:20px;}
        .rx-page .plan .corner-tl{top:14px; left:14px; border-right:none; border-bottom:none;}
        .rx-page .plan .corner-tr{top:14px; right:14px; border-left:none; border-bottom:none;}
        .rx-page .plan .ribbon{font-family:var(--font-mono); font-size:10px; letter-spacing:0.2em; text-transform:uppercase; color:var(--accent-cyan); display:flex; align-items:center; gap:10px; margin-bottom:18px;}
        .rx-page .plan .ribbon::before{content:''; width:6px; height:6px; background:var(--accent-cyan); box-shadow:0 0 8px var(--accent-cyan-glow);}
        .rx-page .plan h3{font-family:var(--font-display); font-size:34px; text-transform:uppercase; line-height:0.95;}
        .rx-page .plan .price{font-family:var(--font-display); font-size:64px; line-height:1; margin:16px 0 6px;}
        .rx-page .plan.featured .price{color:var(--accent-cyan);}
        .rx-page .plan .price small{font-family:var(--font-mono); font-size:13px; letter-spacing:0.1em; color:var(--text-muted); display:block; margin-top:6px;}
        .rx-page .plan ul{list-style:none; margin-top:22px;}
        .rx-page .plan li{font-family:var(--font-body); font-size:14.5px; line-height:1.5; color:var(--text-secondary); padding:9px 0 9px 22px; border-bottom:1px solid var(--grid-line); position:relative;}
        .rx-page .plan li:last-child{border-bottom:none;}
        .rx-page .plan li::before{content:'›'; position:absolute; left:0; font-family:var(--font-mono); color:var(--accent-cyan);}
        .rx-page .plan li.dim{color:var(--text-muted);} .rx-page .plan li.dim::before{color:var(--text-faint);}

        /* PAYMENT */
        .rx-page .pay{border:1px solid var(--grid-strong); margin-top:24px; display:grid; grid-template-columns:repeat(4,1fr);}
        .rx-page .pay .opt{padding:24px; border-right:1px solid var(--grid-strong);}
        .rx-page .pay .opt:last-child{border-right:none;}
        .rx-page .pay .opt .t{font-family:var(--font-mono); font-size:11px; letter-spacing:0.15em; text-transform:uppercase; color:var(--text-muted);}
        .rx-page .pay .opt .v{font-family:var(--font-display); font-size:26px; text-transform:uppercase; margin-top:10px; line-height:1;}
        .rx-page .pay .opt .v.cyan{color:var(--accent-cyan);} .rx-page .pay .opt .v.red{color:var(--accent-red);}
        .rx-page .pay .opt .d{font-family:var(--font-body); font-size:13px; line-height:1.45; color:var(--text-muted); margin-top:8px;}
        .rx-page .note{font-family:var(--font-mono); font-size:11px; letter-spacing:0.06em; color:var(--text-muted); margin-top:18px; line-height:1.7;}

        /* CTA */
        .rx-page .final{text-align:left; padding:120px 0;}
        .rx-page .final h2{font-family:var(--font-display); font-size:clamp(44px,7vw,104px); text-transform:uppercase; line-height:0.9; max-width:16ch;}
        .rx-page .final p{font-family:var(--font-body); font-size:18px; line-height:1.6; color:var(--text-secondary); max-width:680px; margin-top:26px;}
        .rx-page .final .cta-row{margin-top:40px;}

        /* ABOUT PHOTO */
        .rx-page .about-grid{display:grid; grid-template-columns:240px 1fr; gap:40px; align-items:start; margin-top:32px;}
        .rx-page .about-photo{width:100%; aspect-ratio:1; overflow:hidden; border:1px solid var(--grid-strong);}
        .rx-page .about-photo img{width:100%; height:100%; object-fit:cover; filter:grayscale(.35) contrast(1.05) brightness(.9);}

        /* REF PHOTO */
        .rx-page .ref-photo{width:100%; aspect-ratio:1.4; overflow:hidden; border-bottom:1px solid var(--grid-strong); margin-bottom:14px; margin:-24px -26px 14px; width:calc(100% + 52px);}
        .rx-page .ref-photo img{width:100%; height:100%; object-fit:cover; object-position:top; filter:grayscale(.4) contrast(1.05) brightness(.88);}

        /* FOOTER */
        .rx-page footer{border-top:1px solid var(--grid-strong); padding:28px 0; font-family:var(--font-mono); font-size:11px; letter-spacing:0.15em; text-transform:uppercase; color:var(--text-faint);}
        .rx-page .footer-row{display:flex; justify-content:space-between; flex-wrap:wrap; gap:12px;}

        @media(max-width:880px){
          .rx-page .wrap{padding:0 20px;}
          .rx-page .stat-grid{grid-template-columns:repeat(2,1fr);}
          .rx-page .stat:nth-child(2){border-right:none;}
          .rx-page .stat:nth-child(1),.rx-page .stat:nth-child(2){border-bottom:1px solid var(--grid-strong);}
          .rx-page .about-grid{grid-template-columns:1fr;}
          .rx-page .about-photo{max-width:200px;}
          .rx-page .ref-list{grid-template-columns:1fr;}
          .rx-page .diag{grid-template-columns:1fr;}
          .rx-page .flow{grid-template-columns:1fr;}
          .rx-page .obj-grid{grid-template-columns:1fr;}
          .rx-page .plans{grid-template-columns:1fr;}
          .rx-page .pay{grid-template-columns:1fr 1fr;}
          .rx-page .pay .opt:nth-child(2){border-right:none;}
          .rx-page .coords{display:none;}
        }
        @media(max-width:520px){
          .rx-page .flow{grid-template-columns:1fr;} .rx-page .pay{grid-template-columns:1fr;} .rx-page .pay .opt{border-right:none;}
        }
      `}</style>

      <div className="rx-page">
        <div className="rx-bggrid" aria-hidden="true" />
        <div className="rx-noise" aria-hidden="true" />

        <div className="meta-bar">
          <div className="left"><span className="dot" /> BA CONSULTORIA · PROPOSTA EXCLUSIVA</div>
          <div className="right">CONFIDENCIAL · 2026</div>
        </div>

        <div className="wrap">

          {/* HERO */}
          <header className="hero">
            <span className="corner-tl" /><span className="corner-tr" />
            <span className="corner-bl" /><span className="corner-br" />
            <div className="coords">
              FILE: <b>RAIO-X-DO-TERRENO</b><br />
              BUILD: <b>MVP · V1</b><br />
              OWNER: <b>R. ALBUQUERQUE</b><br />
              STATE: <b>AGUARDANDO ASSINATURA</b>
            </div>
            <div className="tags">
              <span className="tag cyan">PROPOSTA · CONFIDENCIAL</span>
              <span className="tag">PARA: JULIANO PEDROSA</span>
            </div>
            <h1>TIRE O MÉTODO<br />DA SUA CABEÇA<span className="red">.</span></h1>
            <p className="sub">A sua pré-viabilidade de loteamento, transformada em produto digital. Entrega diagnóstico de valor real, qualifica em escala e alimenta a sua consultoria de alto ticket — sem depender do seu tempo.</p>
            <div className="cta-row">
              <a href="#investimento" className="btn-primary">VER PROPOSTA →</a>
              <a href="#produto" className="btn-ghost">COMO FUNCIONA</a>
            </div>
          </header>

          {/* SOBRE */}
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

          {/* REFERÊNCIAS */}
          <section id="referencias">
            <div className="sec-head"><span className="idx">[ 02 / REFERÊNCIAS ]</span><h2 className="sec-title">Nossos mentores</h2></div>
            <p className="lead">Aprendemos diretamente com alguns dos maiores líderes do mercado brasileiro.</p>
            <div className="ref-list" style={{ marginTop: "32px" }}>
              <div className="ref">
                <div className="ref-photo"><img loading="lazy" src={diegoBarretoPhoto} alt="Diego Barreto" /></div>
                <div className="name">Diego Barreto</div><div className="role">CEO · iFood</div><div className="desc">Autor do best-seller "Nova Economia," lidera a expansão e inovação no iFood.</div>
              </div>
              <div className="ref">
                <div className="ref-photo"><img loading="lazy" src={pedroSommaPhoto} alt="Pedro Somma" /></div>
                <div className="name">Pedro Somma</div><div className="role">Ex-COO · 99</div><div className="desc">Papel fundamental na expansão e operação da 99, consolidando-a como líder em mobilidade.</div>
              </div>
              <div className="ref">
                <div className="ref-photo"><img loading="lazy" src={vaboPhoto} alt="Luis Vabo Jr." /></div>
                <div className="name">Luis Vabo Jr.</div><div className="role">Ex-diretor · Stone</div><div className="desc">Empreendedor serial, investidor e autor de 'Falar em público é para você!'.</div>
              </div>
              <div className="ref">
                <div className="ref-photo"><img loading="lazy" src={joaoOliverioPhoto} alt="João Olivério" /></div>
                <div className="name">João Olivério</div><div className="role">CEO · Sales As A System</div><div className="desc">Especialista em vendas, Country Manager da Apollo.io e mentor no G4 Sales.</div>
              </div>
              <div className="ref">
                <div className="ref-photo"><img loading="lazy" src={joseDiogoPhoto} alt="José Diogo C. Rodrigues" /></div>
                <div className="name">José Diogo C. Rodrigues</div><div className="role">CMO Latam · Tinder</div><div className="desc">Experiência em Brand Marketing na Nike, Red Bull e atualmente Tinder Latam & Canadá.</div>
              </div>
            </div>
          </section>

          {/* CONTEXTO */}
          <section id="contexto">
            <div className="sec-head"><span className="idx">[ 03 / CONTEXTO ]</span><h2 className="sec-title">Onde você está hoje</h2></div>
            <p className="lead big">Você já validou o método e já tem o mercado vindo atrás. Milhões de impressões em poucas semanas, negócios fechando com uma base ainda pequena, num nicho onde ninguém faz isso com autoridade real.</p>
            <p className="body">O seu ativo é raro: um método de pré-viabilidade de loteamento que poucos dominam, num mercado de alto valor, com um público de alto poder aquisitivo — donos de terra e fazenda com capital. A demanda existe e está crescendo.</p>
            <p className="body">O gargalo agora não é gerar interesse. É que todo o seu método ainda vive na sua cabeça e depende do seu tempo, um a um. Sem um produto de entrada que capture, entregue valor e qualifique em escala, cada lead novo é uma hora sua — e a oportunidade morre na fila.</p>
          </section>

          {/* DIAGNÓSTICO */}
          <section id="diagnostico">
            <div className="sec-head"><span className="idx">[ 04 / DIAGNÓSTICO ]</span><h2 className="sec-title">O que mapeamos</h2></div>
            <div className="diag">
              <div className="diag-col up">
                <span className="corner-tl" />
                <h3><span className="stamp-dot" />Pontos fortes</h3>
                <ul>
                  <li>Método validado e difícil de copiar (pré-viabilidade + carteira de recebíveis)</li>
                  <li>Autoridade crescendo rápido e organicamente</li>
                  <li>Nicho com demanda real e sem concorrência de autoridade</li>
                  <li>Público de alto poder aquisitivo</li>
                  <li>Ticket e margem que justificam investir em produto</li>
                </ul>
              </div>
              <div className="diag-col down">
                <span className="corner-tl" />
                <h3><span className="stamp-dot" />Gargalos atuais</h3>
                <ul>
                  <li>Conhecimento preso na sua cabeça — só escala com o seu tempo</li>
                  <li>Pré-viabilidade feita manualmente, um a um</li>
                  <li>Demanda crescendo sem estrutura pra capturar e converter</li>
                  <li>Nenhum produto de entrada que filtre e qualifique</li>
                  <li>Nenhuma esteira ligando o lead de entrada à consultoria de alto ticket</li>
                </ul>
              </div>
            </div>
          </section>

          {/* PRODUTO */}
          <section id="produto">
            <div className="sec-head"><span className="idx">[ 05 / PRODUTO ]</span><h2 className="sec-title">"Raio-X do Terreno"</h2></div>
            <p className="lead">Um produto self-service de <span className="cyan">R$197</span> que entrega a sua pré-viabilidade no automático — e dá ao cliente um diagnóstico que vale muito mais do que pagou.</p>
            <p className="kicker" style={{ marginTop: "14px" }}>NOME DE TRABALHO · DEFINIDO COM VOCÊ</p>
            <div className="flow">
              <div className="step">
                <div className="step-icon"><ClipboardList size={22} strokeWidth={1.5} /></div>
                <div className="num">PASSO 01</div><h4>Responde</h4>
                <p>O cliente preenche o questionário guiado com as informações do terreno: localização, área, zoneamento e intenção de uso.</p>
              </div>
              <div className="step">
                <div className="step-icon"><BrainCircuit size={22} strokeWidth={1.5} /></div>
                <div className="num">PASSO 02</div><h4>IA Analisa</h4>
                <p>O motor de inteligência artificial processa os dados, cruza com parâmetros urbanísticos e calcula a pré-viabilidade do loteamento.</p>
              </div>
              <div className="step">
                <div className="step-icon"><FileCheck size={22} strokeWidth={1.5} /></div>
                <div className="num">PASSO 03</div><h4>Relatório</h4>
                <p>O cliente recebe o relatório em PDF com lotes estimados, VGV, investimento e retorno — e um convite direto para a sua consultoria completa.</p>
              </div>
            </div>
            <p className="body">O R$197 não é o negócio. É a porta de entrada que paga a aquisição, entrega valor real e enche a sua consultoria de leads quentes — enquanto roda sozinho.</p>
          </section>

          {/* OBJETIVO */}
          <section id="objetivo">
            <div className="sec-head"><span className="idx">[ 06 / OBJETIVO ]</span><h2 className="sec-title">O que isto resolve</h2></div>
            <div className="obj-grid">
              <div className="obj-item">Tirar a pré-viabilidade da sua cabeça e transformar em produto que escala</div>
              <div className="obj-item">Entregar diagnóstico de valor real automaticamente</div>
              <div className="obj-item">Capturar e qualificar leads em escala, sem o seu tempo</div>
              <div className="obj-item">Colocar cada lead na sua mão em tempo real</div>
              <div className="obj-item">Alimentar a consultoria de alto ticket com leads pré-vendidos</div>
              <div className="obj-item">Preparar a operação pra crescer sem perder controle</div>
            </div>
          </section>

          {/* INVESTIMENTO */}
          <section id="investimento">
            <div className="sec-head"><span className="idx">[ 07 / INVESTIMENTO ]</span><h2 className="sec-title">Proposta comercial</h2></div>
            <p className="lead">Duas formas de começar. A primeira é a recomendada: coloca o produto vendendo rápido e valida o modelo antes de investir no que é polimento de gestão.</p>
            <div className="plans" style={{ marginTop: "32px" }}>
              <div className="plan featured">
                <span className="corner-tl" /><span className="corner-tr" />
                <div className="ribbon">Recomendado</div>
                <h3>MVP · O Motor de Venda</h3>
                <div className="price">R$8.000<small>Custo mensal de Infraestrutura é do cliente. · prazo 10 dias úteis</small></div>
                <ul>
                  <li>Landing page de vendas</li>
                  <li>Checkout integrado (Kiwify/Hotmart)</li>
                  <li>Questionário guiado multi-etapas</li>
                  <li>Upload de arquivos</li>
                  <li>Motor de IA — análise + pré-viabilidade</li>
                  <li>Relatório em PDF com a sua marca</li>
                  <li>Captura de cada lead + notificação em tempo real (dados do terreno + PDF na sua mão a cada venda)</li>
                  <li>Lista dos leads recebidos</li>
                  <li>Convite de upsell pra consultoria no relatório</li>
                </ul>
              </div>
              <div className="plan">
                <span className="corner-tl" /><span className="corner-tr" />
                <div className="ribbon">Completo</div>
                <h3>Produto Completo</h3>
                <div className="price">R$15.000<small>economia de R$2.000 · + R$1.000/mês · prazo 18 dias úteis</small></div>
                <ul>
                  <li>Tudo do MVP incluso</li>
                  <li>Construção da estratégia da esteira de produtos</li>
                  <li className="dim">+ Área logada persistente (cliente acessa relatórios anteriores)</li>
                  <li className="dim">+ Dashboard analítico completo (métricas, filtros, pipeline, origem por canal)</li>
                  <li className="dim">+ Automação do funil de upsell (sequência pós-relatório)</li>
                </ul>
              </div>
            </div>

            <div className="pay">
              <div className="opt"><div className="t">À vista · PIX</div><div className="v cyan">−5%</div><div className="d">Pagamento único antecipado. A melhor condição.</div></div>
              <div className="opt"><div className="t">50% + 50% · PIX</div><div className="v">Valor cheio</div><div className="d">Entrada na assinatura, saldo na entrega. Referência.</div></div>
              <div className="opt"><div className="t">Cartão · até 12x</div><div className="v">+18%</div></div>
              <div className="opt"><div className="t">Entrega expressa</div><div className="v red">+40%</div><div className="d">Produto no ar em 72h. Prioridade total na fila.</div></div>
            </div>
            <p className="note">MODELO GERENCIADO — VOCÊ NÃO TOCA EM NADA TÉCNICO. HOSPEDAGEM, CUSTOS DE IA (ATÉ 100 RELATÓRIOS/MÊS) E MANUTENÇÃO INCLUSOS NA MENSALIDADE. VOLUME EXCEDENTE OU ALTERAÇÕES MAIORES: R$300/H.</p>
          </section>

          {/* CTA FINAL */}
          <section className="final">
            <span className="idx">[ 08 / PRÓXIMO PASSO ]</span>
            <h2 style={{ marginTop: "24px" }}>Vamos colocar isso no ar<span className="red">.</span></h2>
            <p>Juliano, você já provou o método e já tem o mercado vindo atrás. O que falta não é validação — é tirar a pré-viabilidade da sua cabeça e transformar num produto que trabalha por você, em escala, enquanto você foca no que só você faz.</p>
            <div className="cta-row">
              <a
                href="https://wa.me/5511999718595"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                onClick={() => tracker.track("cta_click", { product: "raio-x-do-terreno", location: "proposta_cta" })}
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
              <span>PROPOSTA RAIO-X-DO-TERRENO · MVP V1</span>
              <span>VÁLIDA POR 7 DIAS · ATÉ 16.06.2026</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default PropostaRaioXDoTerreno;
