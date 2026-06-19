import { useEffect } from "react";

const RoyalEagleCRM = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Carrega as fontes do relatório (Spectral + Inter)
    const preconnect1 = document.createElement("link");
    preconnect1.rel = "preconnect";
    preconnect1.href = "https://fonts.googleapis.com";

    const preconnect2 = document.createElement("link");
    preconnect2.rel = "preconnect";
    preconnect2.href = "https://fonts.gstatic.com";
    preconnect2.crossOrigin = "anonymous";

    const fonts = document.createElement("link");
    fonts.rel = "stylesheet";
    fonts.href =
      "https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@400;500;600;700&display=swap";

    document.head.appendChild(preconnect1);
    document.head.appendChild(preconnect2);
    document.head.appendChild(fonts);

    const prevTitle = document.title;
    document.title = "Relatório de Andamento · Royal Eagle CRM";

    // Anima as barras quando entram na viewport (respeita prefers-reduced-motion)
    const reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = document.querySelectorAll<HTMLElement>("[data-w]");

    const setAll = () =>
      els.forEach((el) => {
        el.style.width = el.getAttribute("data-w") + "%";
      });

    let io: IntersectionObserver | null = null;
    let heroTimer: ReturnType<typeof setTimeout> | null = null;

    if (reduce) {
      setAll();
    } else if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              const target = e.target as HTMLElement;
              target.style.width = target.getAttribute("data-w") + "%";
              io?.unobserve(target);
            }
          });
        },
        { threshold: 0.3 }
      );
      els.forEach((el) => io?.observe(el));
      heroTimer = setTimeout(() => {
        document
          .querySelectorAll<HTMLElement>(".hero [data-w], .tl-bar-done")
          .forEach((el) => {
            el.style.width = el.getAttribute("data-w") + "%";
          });
      }, 200);
    } else {
      setAll();
    }

    return () => {
      document.title = prevTitle;
      io?.disconnect();
      if (heroTimer) clearTimeout(heroTimer);
      preconnect1.remove();
      preconnect2.remove();
      fonts.remove();
    };
  }, []);

  return (
    <>
      <style>{`
  .re-report{
    --paper:#FAF8F4;
    --paper-2:#F3EFE7;
    --ink:#1A2B47;
    --ink-soft:#42506A;
    --muted:#7A8194;
    --bronze:#B0823A;
    --bronze-soft:#C9A567;
    --green:#2F6B4F;
    --green-soft:#5C9277;
    --line:#E4DDD0;
    --line-2:#D6CCBA;
    --amber:#B5562A;
    --shadow:0 1px 2px rgba(26,43,71,.04),0 8px 28px rgba(26,43,71,.06);

    background:var(--paper);
    color:var(--ink);
    font-family:'Inter',system-ui,sans-serif;
    line-height:1.55;
    -webkit-font-smoothing:antialiased;
    min-height:100vh;
  }
  .re-report *{box-sizing:border-box;margin:0;padding:0}
  .re-report .wrap{max-width:880px;margin:0 auto;padding:48px 28px 72px}

  /* ---------- eyebrow / header ---------- */
  .re-report .eyebrow{
    font-size:11px;letter-spacing:.22em;text-transform:uppercase;
    color:var(--bronze);font-weight:600;display:flex;align-items:center;gap:10px;
  }
  .re-report .eyebrow::before{content:"";width:26px;height:1px;background:var(--bronze)}
  .re-report .crest{
    display:flex;align-items:center;gap:14px;margin-top:18px;
  }
  .re-report .crest-mark{
    flex:none;width:46px;height:46px;border:1.5px solid var(--ink);border-radius:50%;
    display:grid;place-items:center;color:var(--ink);
  }
  .re-report .crest-mark svg{width:24px;height:24px}
  .re-report h1{
    font-family:'Spectral',serif;font-weight:600;font-size:30px;line-height:1.1;
    letter-spacing:-.01em;
  }
  .re-report .sub{color:var(--ink-soft);font-size:14px;margin-top:3px}
  .re-report .meta-row{
    margin-top:20px;display:flex;flex-wrap:wrap;gap:8px 22px;
    font-size:12.5px;color:var(--muted);
    border-top:1px solid var(--line);padding-top:16px;
  }
  .re-report .meta-row b{color:var(--ink-soft);font-weight:600}

  /* ---------- hero countdown ---------- */
  .re-report .hero{
    margin-top:30px;background:var(--ink);color:#fff;border-radius:18px;
    padding:34px 34px 30px;position:relative;overflow:hidden;box-shadow:var(--shadow);
  }
  .re-report .hero::after{
    content:"";position:absolute;right:-60px;top:-60px;width:240px;height:240px;
    border:1px solid rgba(201,165,103,.18);border-radius:50%;
  }
  .re-report .hero::before{
    content:"";position:absolute;right:-110px;top:-30px;width:240px;height:240px;
    border:1px solid rgba(201,165,103,.12);border-radius:50%;
  }
  .re-report .hero-grid{display:flex;align-items:flex-end;gap:26px;flex-wrap:wrap;position:relative;z-index:1}
  .re-report .big-num{
    font-family:'Spectral',serif;font-weight:600;font-size:104px;line-height:.82;
    color:#fff;letter-spacing:-.03em;
  }
  .re-report .big-num .unit{
    display:block;font-size:15px;letter-spacing:.18em;text-transform:uppercase;
    color:var(--bronze-soft);font-family:'Inter',sans-serif;font-weight:600;margin-top:10px;
  }
  .re-report .hero-text{padding-bottom:8px}
  .re-report .hero-text .label{font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:var(--bronze-soft);font-weight:600}
  .re-report .hero-text .line{font-family:'Spectral',serif;font-size:23px;line-height:1.25;margin-top:6px;max-width:300px;font-weight:500}
  .re-report .hero-text .date{font-size:13.5px;color:rgba(255,255,255,.66);margin-top:8px}

  /* dual progress bars inside hero */
  .re-report .gauges{margin-top:26px;position:relative;z-index:1}
  .re-report .gauge{margin-bottom:14px}
  .re-report .gauge:last-child{margin-bottom:0}
  .re-report .gauge-top{display:flex;justify-content:space-between;align-items:baseline;font-size:12.5px;margin-bottom:7px}
  .re-report .gauge-top .g-label{color:rgba(255,255,255,.82);letter-spacing:.02em}
  .re-report .gauge-top .g-val{font-family:'Spectral',serif;font-size:17px;font-weight:600}
  .re-report .track{height:9px;background:rgba(255,255,255,.12);border-radius:20px;overflow:hidden}
  .re-report .fill{height:100%;border-radius:20px;width:0;transition:width 1.4s cubic-bezier(.16,1,.3,1)}
  .re-report .fill.time{background:linear-gradient(90deg,var(--bronze),var(--bronze-soft))}
  .re-report .fill.work{background:linear-gradient(90deg,var(--green-soft),#7DB89B)}
  .re-report .verdict{
    margin-top:20px;display:inline-flex;align-items:center;gap:9px;
    background:rgba(124,184,155,.14);border:1px solid rgba(124,184,155,.34);
    color:#A9D6BF;font-size:13px;font-weight:500;padding:8px 14px;border-radius:10px;
    position:relative;z-index:1;
  }
  .re-report .verdict svg{width:15px;height:15px;flex:none}

  /* ---------- section heads ---------- */
  .re-report .sec{margin-top:46px}
  .re-report .sec-head{display:flex;align-items:center;gap:12px;margin-bottom:22px}
  .re-report .sec-num{
    font-family:'Spectral',serif;font-size:13px;color:var(--bronze);font-weight:600;
    border:1px solid var(--line-2);width:30px;height:30px;border-radius:50%;display:grid;place-items:center;flex:none;
  }
  .re-report .sec-head h2{font-family:'Spectral',serif;font-weight:600;font-size:21px;letter-spacing:-.01em}
  .re-report .sec-head p{font-size:13px;color:var(--muted);margin-top:1px}

  /* ---------- timeline ---------- */
  .re-report .timeline{position:relative;padding:6px 0 4px}
  .re-report .tl-bar{position:absolute;left:14px;right:14px;top:21px;height:2px;background:var(--line-2)}
  .re-report .tl-bar-done{position:absolute;left:14px;top:21px;height:2px;background:var(--bronze);width:0;transition:width 1.6s cubic-bezier(.16,1,.3,1)}
  .re-report .tl-nodes{display:flex;justify-content:space-between;position:relative;z-index:1}
  .re-report .node{display:flex;flex-direction:column;align-items:center;text-align:center;flex:1;min-width:0}
  .re-report .dot{
    width:15px;height:15px;border-radius:50%;background:var(--paper);
    border:2px solid var(--line-2);margin-bottom:12px;flex:none;
  }
  .re-report .node.done .dot{background:var(--bronze);border-color:var(--bronze)}
  .re-report .node.now .dot{background:var(--ink);border-color:var(--ink);box-shadow:0 0 0 5px rgba(26,43,71,.12)}
  .re-report .node.goal .dot{background:var(--paper);border-color:var(--ink);border-style:dashed}
  .re-report .node .d-date{font-family:'Spectral',serif;font-weight:600;font-size:14px;color:var(--ink)}
  .re-report .node .d-name{font-size:11px;color:var(--muted);margin-top:3px;line-height:1.35;padding:0 4px}
  .re-report .node .d-pay{font-size:10.5px;color:var(--green);font-weight:600;margin-top:4px}
  .re-report .node.now .d-name{color:var(--ink);font-weight:600}

  /* ---------- module progress ---------- */
  .re-report .mods{display:flex;flex-direction:column;gap:16px}
  .re-report .mod-row{display:grid;grid-template-columns:1fr;gap:7px}
  .re-report .mod-top{display:flex;justify-content:space-between;align-items:baseline;gap:12px}
  .re-report .mod-name{font-size:14px;font-weight:500;color:var(--ink)}
  .re-report .mod-name .tag{font-family:'Spectral',serif;color:var(--bronze);font-weight:600;margin-right:8px;font-size:13px}
  .re-report .mod-pct{font-family:'Spectral',serif;font-weight:600;font-size:15px;color:var(--ink-soft);flex:none}
  .re-report .mtrack{height:8px;background:var(--paper-2);border-radius:20px;overflow:hidden;border:1px solid var(--line)}
  .re-report .mfill{height:100%;border-radius:20px;width:0;background:linear-gradient(90deg,var(--ink),#36507A);transition:width 1.3s cubic-bezier(.16,1,.3,1)}
  .re-report .mfill.full{background:linear-gradient(90deg,var(--green),var(--green-soft))}

  /* ---------- two-column lists ---------- */
  .re-report .cols{display:grid;grid-template-columns:1fr 1fr;gap:18px}
  .re-report .card{background:#fff;border:1px solid var(--line);border-radius:14px;padding:22px 22px 20px;box-shadow:var(--shadow)}
  .re-report .card.next{background:var(--paper-2);border-color:var(--line-2)}
  .re-report .card h3{font-size:12px;letter-spacing:.12em;text-transform:uppercase;font-weight:600;margin-bottom:16px;display:flex;align-items:center;gap:8px}
  .re-report .card.done h3{color:var(--green)}
  .re-report .card.next h3{color:var(--amber)}
  .re-report .card h3 svg{width:15px;height:15px}
  .re-report .list{list-style:none;display:flex;flex-direction:column;gap:11px}
  .re-report .list li{font-size:13.5px;color:var(--ink-soft);padding-left:20px;position:relative;line-height:1.45}
  .re-report .list li::before{content:"";position:absolute;left:0;top:7px;width:7px;height:7px;border-radius:2px}
  .re-report .card.done .list li::before{background:var(--green-soft)}
  .re-report .card.next .list li::before{background:var(--bronze-soft)}

  /* ---------- depends on client ---------- */
  .re-report .depends{background:#fff;border:1px solid var(--line);border-left:3px solid var(--bronze);border-radius:12px;padding:24px 26px}
  .re-report .depends .dlist{list-style:none;display:flex;flex-direction:column;gap:14px;margin-top:4px}
  .re-report .depends .dlist li{font-size:13.5px;color:var(--ink-soft);padding-left:24px;position:relative}
  .re-report .depends .dlist li::before{content:"?";position:absolute;left:0;top:-1px;font-family:'Spectral',serif;font-weight:700;color:var(--bronze);font-size:16px}
  .re-report .depends .dlist li b{color:var(--ink);font-weight:600}

  /* ---------- finance ---------- */
  .re-report .fin{display:grid;grid-template-columns:1.1fr 1fr;gap:18px;align-items:stretch}
  .re-report .fin-main{background:var(--ink);color:#fff;border-radius:14px;padding:24px 26px;box-shadow:var(--shadow)}
  .re-report .fin-main .flab{font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--bronze-soft);font-weight:600}
  .re-report .fin-main .fval{font-family:'Spectral',serif;font-size:34px;font-weight:600;margin-top:8px;letter-spacing:-.01em}
  .re-report .fin-main .fval span{font-size:18px;color:rgba(255,255,255,.6)}
  .re-report .fin-main .fbar{height:8px;background:rgba(255,255,255,.14);border-radius:20px;margin-top:16px;overflow:hidden}
  .re-report .fin-main .fbar i{display:block;height:100%;width:0;background:linear-gradient(90deg,var(--bronze),var(--bronze-soft));border-radius:20px;transition:width 1.4s cubic-bezier(.16,1,.3,1)}
  .re-report .fin-main .fnote{font-size:12px;color:rgba(255,255,255,.6);margin-top:10px}
  .re-report .fin-list{background:#fff;border:1px solid var(--line);border-radius:14px;padding:8px 22px;box-shadow:var(--shadow)}
  .re-report .fin-item{display:flex;justify-content:space-between;align-items:center;padding:13px 0;border-bottom:1px solid var(--line);font-size:13.5px}
  .re-report .fin-item:last-child{border-bottom:none}
  .re-report .fin-item .fi-date{color:var(--muted);font-size:12px}
  .re-report .fin-item .fi-desc{color:var(--ink-soft);font-weight:500}
  .re-report .fin-item .fi-amt{font-family:'Spectral',serif;font-weight:600;color:var(--ink)}

  /* ---------- footer ---------- */
  .re-report .foot{margin-top:54px;padding-top:22px;border-top:1px solid var(--line);font-size:12px;color:var(--muted);display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px}
  .re-report .foot b{color:var(--ink-soft);font-weight:600}

  /* ---------- responsive ---------- */
  @media (max-width:680px){
    .re-report .wrap{padding:34px 18px 56px}
    .re-report h1{font-size:24px}
    .re-report .big-num{font-size:80px}
    .re-report .hero{padding:26px 22px}
    .re-report .cols{grid-template-columns:1fr}
    .re-report .fin{grid-template-columns:1fr}
    .re-report .timeline{overflow-x:auto;padding-bottom:14px}
    .re-report .tl-nodes{min-width:540px}
    .re-report .tl-bar,.re-report .tl-bar-done{left:14px}
  }
  @media print{
    .re-report{background:#fff}
    .re-report .hero,.re-report .fin-main{-webkit-print-color-adjust:exact;print-color-adjust:exact}
    .re-report .fill,.re-report .mfill,.re-report .tl-bar-done,.re-report .fin-main .fbar i{transition:none}
  }
      `}</style>

      <div className="re-report">
        <div className="wrap">
          {/* HEADER */}
          <div className="eyebrow">Relatório de andamento</div>
          <div className="crest">
            <div className="crest-mark" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3l7 3v5c0 4-3 7-7 8-4-1-7-4-7-8V6l7-3z" />
                <path d="M9 11l2 2 4-4" />
              </svg>
            </div>
            <div>
              <h1>Royal Eagle CRM</h1>
              <div className="sub">Sistema de gestão · Insurance Group LLC</div>
            </div>
          </div>
          <div className="meta-row">
            <span><b>Cliente:</b> Edimara Pasinato Dal Pozzo</span>
            <span><b>Prazo acordado:</b> 30 dias a partir do kickoff</span>
            <span><b>Atualizado em:</b> 19 de junho de 2026</span>
          </div>

          {/* HERO COUNTDOWN */}
          <div className="hero">
            <div className="hero-grid">
              <div className="big-num">13<span className="unit">dias restantes</span></div>
              <div className="hero-text">
                <div className="label">Para a entrega final</div>
                <div className="line">Faltam 13 dias para a conclusão do prazo.</div>
                <div className="date">Início: 02/jun &nbsp;·&nbsp; Entrega prevista: 02/jul/2026</div>
              </div>
            </div>

            <div className="gauges">
              <div className="gauge">
                <div className="gauge-top">
                  <span className="g-label">Tempo do prazo utilizado</span>
                  <span className="g-val">57%</span>
                </div>
                <div className="track"><div className="fill time" data-w="57"></div></div>
              </div>
              <div className="gauge">
                <div className="gauge-top">
                  <span className="g-label">Projeto concluído</span>
                  <span className="g-val">85%</span>
                </div>
                <div className="track"><div className="fill work" data-w="85"></div></div>
              </div>
            </div>

            <div className="verdict">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" /></svg>
              85% entregue com apenas 57% do prazo usado — projeto adiantado em relação ao cronograma.
            </div>
          </div>

          {/* TIMELINE */}
          <div className="sec">
            <div className="sec-head">
              <span className="sec-num">01</span>
              <div><h2>Linha do tempo</h2><p>Do acordo inicial à entrega final</p></div>
            </div>
            <div className="timeline">
              <div className="tl-bar"></div>
              <div className="tl-bar-done" data-w="78"></div>
              <div className="tl-nodes">
                <div className="node done">
                  <div className="dot"></div>
                  <div className="d-date">20 mai</div>
                  <div className="d-name">Assinatura do contrato</div>
                  <div className="d-pay">+ Entrada · R$ 3.600</div>
                </div>
                <div className="node done">
                  <div className="dot"></div>
                  <div className="d-date">02 jun</div>
                  <div className="d-name">Kickoff e início do projeto</div>
                  <div className="d-pay">+ R$ 3.600</div>
                </div>
                <div className="node done">
                  <div className="dot"></div>
                  <div className="d-date">17 jun</div>
                  <div className="d-name">Pagamento parcial</div>
                  <div className="d-pay">+ R$ 5.000</div>
                </div>
                <div className="node now">
                  <div className="dot"></div>
                  <div className="d-date">19 jun</div>
                  <div className="d-name">Você está aqui</div>
                  <div className="d-pay" style={{ color: "var(--ink-soft)" }}>85% concluído</div>
                </div>
                <div className="node goal">
                  <div className="dot"></div>
                  <div className="d-date">02 jul</div>
                  <div className="d-name">Entrega final</div>
                  <div className="d-pay" style={{ color: "var(--muted)" }}>Meta · 30 dias</div>
                </div>
              </div>
            </div>
          </div>

          {/* MODULE PROGRESS */}
          <div className="sec">
            <div className="sec-head">
              <span className="sec-num">02</span>
              <div><h2>Progresso por módulo</h2><p>Percentual concluído de cada frente do sistema</p></div>
            </div>
            <div className="mods">
              <div className="mod-row">
                <div className="mod-top"><span className="mod-name"><span className="tag">M1</span>Planejamento e Kickoff</span><span className="mod-pct">100%</span></div>
                <div className="mtrack"><div className="mfill full" data-w="100"></div></div>
              </div>
              <div className="mod-row">
                <div className="mod-top"><span className="mod-name"><span className="tag">M2</span>Cadastro de clientes, apólices e leads (CRM)</span><span className="mod-pct">88%</span></div>
                <div className="mtrack"><div className="mfill" data-w="88"></div></div>
              </div>
              <div className="mod-row">
                <div className="mod-top"><span className="mod-name"><span className="tag">M3</span>Atendimento (WhatsApp) e comissionamento</span><span className="mod-pct">78%</span></div>
                <div className="mtrack"><div className="mfill" data-w="78"></div></div>
              </div>
              <div className="mod-row">
                <div className="mod-top"><span className="mod-name"><span className="tag">M4</span>Módulo financeiro (lançamentos e DRE)</span><span className="mod-pct">100%</span></div>
                <div className="mtrack"><div className="mfill full" data-w="100"></div></div>
              </div>
              <div className="mod-row">
                <div className="mod-top"><span className="mod-name"><span className="tag">M5</span>Painel de indicadores</span><span className="mod-pct">80%</span></div>
                <div className="mtrack"><div className="mfill" data-w="80"></div></div>
              </div>
              <div className="mod-row">
                <div className="mod-top"><span className="mod-name"><span className="tag">M6</span>Segurança, permissões e entrega final</span><span className="mod-pct">70%</span></div>
                <div className="mtrack"><div className="mfill" data-w="70"></div></div>
              </div>
            </div>
          </div>

          {/* DONE / TODO */}
          <div className="sec">
            <div className="sec-head">
              <span className="sec-num">03</span>
              <div><h2>O que já está pronto e o que falta</h2><p>Visão funcional do sistema</p></div>
            </div>
            <div className="cols">
              <div className="card done">
                <h3><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>Já entregue</h3>
                <ul className="list">
                  <li>Cadastro completo de clientes pessoa física e jurídica (com EIN e responsável) e agrupamento familiar</li>
                  <li>Apólices de Vida, Saúde, Carro e Casa, com renovação rastreável à apólice anterior</li>
                  <li>Alertas automáticos de renovação (30, 15 e 7 dias) e calendário operacional</li>
                  <li>Pipeline de leads com origem por canal e links de rastreamento por influenciador</li>
                  <li>Atendimento por WhatsApp dentro do sistema: mensagens entram e saem, áudios transcritos automaticamente</li>
                  <li>Vínculo automático da conversa ao cliente pelo telefone, com criação de cliente pela própria tela</li>
                  <li>Comissionamento com cálculo automático e relatório filtrável e exportável</li>
                  <li>Módulo financeiro completo: lançamentos, DRE simplificado e conciliação</li>
                  <li>Painel de indicadores operacional</li>
                  <li>Usuários, perfis de acesso e camada de segurança (criptografia, máscara de SSN, restore documentado)</li>
                </ul>
              </div>
              <div className="card next">
                <h3><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>Em finalização (13 dias)</h3>
                <ul className="list">
                  <li>Linha do tempo cronológica de interações na ficha do cliente (apólices, documentos e anotações datadas)</li>
                  <li>Templates de mensagens prontas no atendimento</li>
                  <li>Coleta de dados reais para configuração de funcionamento do sistema</li>
                  <li>Ajustes finais de filtros no painel de indicadores</li>
                  <li>Travas finais de segurança (2FA obrigatório para administrador)</li>
                  <li>Transferência do repositório de código e entrega das credenciais (no aceite final)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* FINANCE */}
          <div className="sec">
            <div className="sec-head">
              <span className="sec-num">04</span>
              <div><h2>Resumo financeiro</h2><p>Pagamentos realizados até a data</p></div>
            </div>
            <div className="fin">
              <div className="fin-main">
                <div className="flab">Investido até aqui</div>
                <div className="fval">R$ 12.200 <span>/ R$ 36.000</span></div>
                <div className="fbar"><i data-w="34"></i></div>
                <div className="fnote">33,9% do valor total do contrato</div>
              </div>
              <div className="fin-list">
                <div className="fin-item">
                  <div><div className="fi-desc">Entrada (assinatura)</div><div className="fi-date">20 de maio de 2026</div></div>
                  <div className="fi-amt">R$ 3.600</div>
                </div>
                <div className="fin-item">
                  <div><div className="fi-desc">Kickoff e início</div><div className="fi-date">02 de junho de 2026</div></div>
                  <div className="fi-amt">R$ 3.600</div>
                </div>
                <div className="fin-item">
                  <div><div className="fi-desc">Pagamento parcial</div><div className="fi-date">17 de junho de 2026</div></div>
                  <div className="fi-amt">R$ 5.000</div>
                </div>
              </div>
            </div>
          </div>

          {/* FOOTER */}
          <div className="foot">
            <span><b>BA Consultoria LTDA</b> · Desenvolvimento de software customizado</span>
            <span>Relatório gerado em 19/06/2026</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoyalEagleCRM;
