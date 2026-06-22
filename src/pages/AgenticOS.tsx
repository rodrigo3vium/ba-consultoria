import { useEffect } from "react";
import { tracker } from "@/lib/tracking";
import img01 from "@/assets/agentic-os/aos-01-crm.jpg";
import img02 from "@/assets/agentic-os/aos-02-whatsapp.jpg";
import img03 from "@/assets/agentic-os/aos-03-call.jpg";
import img04 from "@/assets/agentic-os/aos-04-relatorio.jpg";
import img05 from "@/assets/agentic-os/aos-05-trafego.jpg";
import iconFinanceiro from "@/assets/agentic-os/icon-financeiro.jpg";
import iconTarefas from "@/assets/agentic-os/icon-tarefas.jpg";
import iconConteudo from "@/assets/agentic-os/icon-conteudo.jpg";

const AgenticOS = () => {
  useEffect(() => {
    tracker.page("Agentic OS");
    document.body.style.paddingTop = "0";

    return () => {
      document.body.style.paddingTop = "";
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-pb-void text-pb-ink-soft font-body leading-relaxed overflow-x-hidden antialiased">

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-[100] px-8 py-[18px] bg-pb-void/85 backdrop-blur-xl border-b border-pb-grid-strong">
        <div className="max-w-[1180px] mx-auto flex justify-between items-center">
          <a href="#" className="font-display text-[22px] tracking-[0.12em] text-pb-ink no-underline whitespace-nowrap uppercase">
            <span className="text-pb-cyan mr-1">&#x27C1;</span> AGENTIC OS
          </a>
          <div className="font-mono text-[10px] text-pb-ink-muted tracking-mono-x uppercase flex items-center gap-2">
            <span className="inline-block w-[6px] h-[6px] rounded-full bg-pb-cyan shadow-cyan-glow animate-pulse-cyan" />
            BRIEFING ESTRATÉGICO · 2026
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-[160px] pb-[100px] min-h-screen flex items-center relative z-[2]">

        {/* Compass decoration */}
        <div className="absolute right-[-120px] top-1/2 -translate-y-1/2 w-[580px] h-[580px] pointer-events-none opacity-[0.18] z-[1] hidden md:block" aria-hidden>
          <svg viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <g style={{ animation: "aos-slow-rotate 120s linear infinite", transformOrigin: "center" }}>
              <circle cx="300" cy="300" r="280" stroke="#20DDEB" strokeWidth="0.5" strokeDasharray="2 8" />
              <circle cx="300" cy="300" r="230" stroke="#20DDEB" strokeWidth="0.5" opacity="0.6" />
              <circle cx="300" cy="300" r="180" stroke="#20DDEB" strokeWidth="0.5" opacity="0.4" />
              <line x1="300" y1="20" x2="300" y2="50" stroke="#20DDEB" strokeWidth="1" />
              <line x1="300" y1="550" x2="300" y2="580" stroke="#20DDEB" strokeWidth="1" />
              <line x1="20" y1="300" x2="50" y2="300" stroke="#20DDEB" strokeWidth="1" />
              <line x1="550" y1="300" x2="580" y2="300" stroke="#20DDEB" strokeWidth="1" />
              <line x1="300" y1="20" x2="300" y2="35" stroke="#20DDEB" strokeWidth="0.5" transform="rotate(45 300 300)" />
              <line x1="300" y1="20" x2="300" y2="35" stroke="#20DDEB" strokeWidth="0.5" transform="rotate(135 300 300)" />
              <line x1="300" y1="20" x2="300" y2="35" stroke="#20DDEB" strokeWidth="0.5" transform="rotate(225 300 300)" />
              <line x1="300" y1="20" x2="300" y2="35" stroke="#20DDEB" strokeWidth="0.5" transform="rotate(315 300 300)" />
              <line x1="300" y1="280" x2="300" y2="320" stroke="#20DDEB" strokeWidth="0.5" />
              <line x1="280" y1="300" x2="320" y2="300" stroke="#20DDEB" strokeWidth="0.5" />
              <circle cx="300" cy="300" r="4" fill="#20DDEB" />
            </g>
            <text x="300" y="14" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="10" fill="#20DDEB" letterSpacing="2">N</text>
            <text x="300" y="596" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="10" fill="#20DDEB" letterSpacing="2">S</text>
            <text x="10" y="304" fontFamily="IBM Plex Mono" fontSize="10" fill="#20DDEB">W</text>
            <text x="585" y="304" fontFamily="IBM Plex Mono" fontSize="10" fill="#20DDEB">E</text>
          </svg>
        </div>

        <div className="max-w-[1180px] mx-auto px-5 md:px-8 relative z-[5]">
          <div className="max-w-[880px]">

            {/* Briefing coords */}
            <div className="flex items-center gap-6 flex-wrap mb-12 font-mono text-[11px] text-pb-ink-muted tracking-[0.25em] uppercase
              before:content-[''] before:w-8 before:h-px before:bg-pb-cyan before:inline-block">
              <span><span className="text-pb-cyan">&#9679;</span> DOC 001 / V2.0</span>
              <span className="hidden sm:inline">CLASSIFICAÇÃO · PÚBLICO</span>
              <span className="hidden sm:inline">LAT −20.4486 · LONG −54.6295</span>
            </div>

            {/* Pre-headline */}
            <span className="font-mono text-[12px] text-pb-cyan tracking-mono-x uppercase mb-8 inline-block pl-4 border-l-2 border-pb-cyan leading-relaxed">
              <span className="hidden md:block">
                Para empresários que já entenderam:<br />
                IA não é uma ferramenta. É a nova infraestrutura.
              </span>
              <span className="md:hidden">
                Para empresários que entenderam que IA é infraestrutura
              </span>
            </span>

            {/* H1 */}
            <h1 className="font-display font-normal text-[clamp(20px,4.8vw,62px)] leading-[0.95] text-pb-ink uppercase tracking-[0.005em] mb-12">
              Você não precisa de mais uma ferramenta.<br />
              Você precisa de um <span className="text-pb-cyan">ecossistema vivo</span>
              <span className="hidden md:inline">,<br />
              onde a IA conecta<br />
              cada área do seu negócio</span>
              <span className="text-pb-red">.</span>
            </h1>

            {/* Sub-headline */}
            <p className="font-body text-[clamp(17px,1.5vw,20px)] text-pb-ink-soft max-w-[720px] mb-8 font-light leading-[1.65]">
              <strong className="text-pb-ink font-medium">Agentic OS</strong> — um sistema operacional agêntico — é o futuro da tecnologia empresarial. Ele concentra todos os dados da sua operação de ponta a ponta, evolui junto com o seu negócio, e contém apenas o que faz sentido para a sua realidade. Nada de SaaS genérico. Nada de feature inútil. <em className="not-italic text-pb-cyan font-normal">Só o que gera resultado.</em>
            </p>

            {/* Transition text */}
            <p className="text-[16px] text-pb-ink-soft max-w-[720px] my-14 leading-[1.7] pl-6 border-l border-pb-grid-strong">
              A maior parte dos empresários nunca ouviu falar de Agentic OS — e tem dificuldade de visualizar como isso pode fazer o negócio crescer. Os benefícios são vários. Três deles mudam o jogo:
            </p>

            {/* Benefits grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-12">

              {/* Benefit 01 */}
              <div className="relative bg-pb-void-card border border-pb-grid-strong p-9 transition-colors duration-300 hover:border-pb-cyan-dim
                before:absolute before:top-0 before:left-0 before:w-6 before:h-px before:bg-pb-cyan before:content-['']">
                <span className="font-display text-[56px] text-pb-cyan block leading-none mb-2 [text-shadow:0_0_24px_rgba(32,221,235,0.45)]">01</span>
                <h3 className="font-display text-[22px] text-pb-ink uppercase leading-[1.15] mb-6 pb-5 border-b border-pb-grid-strong tracking-[0.01em]">Redução nos custos de ferramentas</h3>
                <p className="text-[15px] text-pb-cyan-soft italic mb-4 leading-[1.5]">Sua empresa paga por dezenas de ferramentas que são subutilizadas.</p>
                <p className="text-[14px] text-pb-ink-soft font-light leading-[1.7] mb-6">
                  A empresa média opera com dezenas de aplicações SaaS. Um Agentic OS consolida o que importa em um único lugar — você reduz a stack, reduz o ruído e aumenta exponencialmente a produtividade do time.
                </p>
                <p className="font-mono text-[10px] text-pb-ink-muted tracking-[0.08em] uppercase border-t border-pb-grid-strong pt-3.5 leading-relaxed">Fontes: Zylo SaaS Management Index 2025, Gartner.</p>
              </div>

              {/* Benefit 02 */}
              <div className="relative bg-pb-void-card border border-pb-grid-strong p-9 transition-colors duration-300 hover:border-pb-cyan-dim
                before:absolute before:top-0 before:left-0 before:w-6 before:h-px before:bg-pb-cyan before:content-['']">
                <span className="font-display text-[56px] text-pb-cyan block leading-none mb-2 [text-shadow:0_0_24px_rgba(32,221,235,0.45)]">02</span>
                <h3 className="font-display text-[22px] text-pb-ink uppercase leading-[1.15] mb-6 pb-5 border-b border-pb-grid-strong tracking-[0.01em]">Aumento na produtividade por funcionário</h3>
                <p className="text-[15px] text-pb-cyan-soft italic mb-4 leading-[1.5]">Contratar mais não é a solução.</p>
                <p className="text-[14px] text-pb-ink-soft font-light leading-[1.7] mb-6">
                  Durante os últimos anos, a métrica mais importante para medir a eficiência de uma empresa era o RPE (Receita por Funcionário). Agora, isso ganha uma nova camada. Pesquisas mostram ganhos entre 44% em funções inteiras e mais de 10x em tarefas específicas. É trabalho de semanas feito em alguns dias.
                </p>
                <p className="font-mono text-[10px] text-pb-ink-muted tracking-[0.08em] uppercase border-t border-pb-grid-strong pt-3.5 leading-relaxed">Fontes: McKinsey State of AI 2025, Anthropic Internal Productivity Report 2025.</p>
              </div>

              {/* Benefit 03 */}
              <div className="relative bg-pb-void-card border border-pb-grid-strong p-9 transition-colors duration-300 hover:border-pb-cyan-dim
                before:absolute before:top-0 before:left-0 before:w-6 before:h-px before:bg-pb-cyan before:content-['']">
                <span className="font-display text-[56px] text-pb-cyan block leading-none mb-2 [text-shadow:0_0_24px_rgba(32,221,235,0.45)]">03</span>
                <h3 className="font-display text-[22px] text-pb-ink uppercase leading-[1.15] mb-6 pb-5 border-b border-pb-grid-strong tracking-[0.01em]">Mais inteligência comercial = mais receita</h3>
                <p className="text-[15px] text-pb-cyan-soft italic mb-4 leading-[1.5]">"Dados são o novo petróleo" — agora isso virou realidade.</p>
                <p className="text-[14px] text-pb-ink-soft font-light leading-[1.7] mb-6">
                  Durante décadas ouvimos essa frase, mas até ontem não era realidade para a maioria das empresas. Com um Agentic OS, pela primeira vez, você pode usar de fato os dados da sua empresa para aumentar suas vendas. Empresas com IA aplicada a vendas reportam aumento de mais de 30% em taxa de fechamento e até 50% em leads qualificados.
                </p>
                <p className="font-mono text-[10px] text-pb-ink-muted tracking-[0.08em] uppercase border-t border-pb-grid-strong pt-3.5 leading-relaxed">Fontes: Bain &amp; Company 2025, McKinsey.</p>
              </div>
            </div>

            {/* CTA transition */}
            <div className="relative text-center mt-24 px-8 py-10 border-t border-b border-pb-grid-strong
              before:absolute before:top-[-1px] before:left-[calc(50%-40px)] before:w-20 before:h-px before:bg-pb-cyan before:content-['']
              after:absolute after:bottom-[-1px] after:left-[calc(50%-40px)] after:w-20 after:h-px after:bg-pb-cyan after:content-['']">
              <div className="text-[18px] text-pb-cyan mb-4 tracking-[0.3em] font-mono animate-pulse-cyan">&#9660; &#9660; &#9660;</div>
              <p className="text-[14px] text-pb-ink-soft max-w-[640px] mx-auto leading-[1.7] font-body">
                Continue lendo. Nas próximas seções você vai entender exatamente como uma Agentic OS funciona na prática — e por que esse vai ser o padrão das empresas que vão dominar o mercado.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO — COMO FUNCIONA */}
      <section className="relative z-[2] border-t border-b border-pb-grid-strong bg-pb-void-deep py-[140px] max-md:py-20">
        <div className="max-w-[1180px] mx-auto px-5 md:px-8">

          {/* Section label */}
          <span className="font-mono text-[11px] font-medium tracking-[0.3em] uppercase text-pb-cyan mb-6 inline-flex items-center gap-3
            before:content-[''] before:w-7 before:h-px before:bg-pb-cyan before:inline-block">
            Como funciona na prática
          </span>

          <h2 className="font-display font-normal text-[clamp(40px,6vw,88px)] leading-[0.95] text-pb-ink uppercase tracking-[0.01em] mb-9">
            E na prática, como uma <span className="text-pb-cyan">Agentic OS</span> funciona?
          </h2>

          <p className="text-[17px] text-pb-ink-soft max-w-[820px] mb-24 leading-[1.7] font-body">
            Um Agentic OS é composto por módulos que cobrem cada área crítica do seu negócio. Cada módulo tem agentes de IA executando tarefas, analisando dados e gerando inteligência de forma contínua — sem você precisar pedir. Para você entender a profundidade do conceito, vamos abrir um módulo por completo.
            <br /><br />
            <strong className="text-pb-ink font-medium">OS Comercial.</strong>
          </p>

          {/* MÓDULO COMERCIAL */}
          <div className="relative bg-pb-void-card border border-pb-grid-strong p-16 max-md:p-6 mb-[100px]
            before:absolute before:top-[-1px] before:left-[-1px] before:w-6 before:h-6 before:border-t-2 before:border-l-2 before:border-pb-cyan before:pointer-events-none before:content-['']
            after:absolute after:bottom-[-1px] after:right-[-1px] after:w-6 after:h-6 after:border-b-2 after:border-r-2 after:border-pb-cyan after:pointer-events-none after:content-['']">

            <span className="font-mono text-[11px] text-pb-cyan tracking-[0.3em] uppercase mb-4 block">&#10230; Módulo 01 · Aberto</span>
            <h3 className="font-display font-normal text-[clamp(48px,6vw,80px)] text-pb-ink uppercase leading-[0.95] tracking-[0.01em] mb-6">Comercial</h3>
            <p className="text-[16px] text-pb-ink-soft mb-16 max-w-[720px] leading-[1.7] font-body">
              O coração da maioria das empresas. É aqui que o caos costuma ser maior — e onde uma Agentic OS gera retorno mais rápido. Veja o que vive dentro deste módulo:
            </p>

            <div className="flex flex-col gap-[100px] max-md:gap-14">

              {/* Item 01 */}
              <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-16 max-md:gap-6 items-center">
                <div className="relative bg-pb-void-deep border border-pb-grid-strong p-2
                  before:absolute before:top-[-1px] before:left-[-1px] before:w-4 before:h-4 before:border-t before:border-l before:border-pb-cyan before:pointer-events-none before:content-['']
                  after:absolute after:bottom-[-1px] after:right-[-1px] after:w-4 after:h-4 after:border-b after:border-r after:border-pb-cyan after:pointer-events-none after:content-['']">
                  <span className="absolute top-[-22px] left-0 font-mono text-[9px] text-pb-ink-muted tracking-[0.25em] uppercase">EVIDÊNCIA · FRAME 01</span>
                  <span className="absolute top-[-22px] right-0 font-mono text-[9px] text-pb-cyan tracking-[0.2em] uppercase">CRM · AUTO-SYNC</span>
                  <img src={img01} alt="CRM com preenchimento automático via Agentic OS" loading="lazy" className="w-full h-auto block" />
                </div>
                <div className="py-2">
                  <span className="font-display text-[64px] text-pb-cyan block leading-none mb-5 [text-shadow:0_0_28px_rgba(32,221,235,0.45)]">01</span>
                  <h4 className="font-display text-[clamp(24px,2.4vw,32px)] text-pb-ink uppercase leading-[1.15] mb-6 pb-5 border-b border-pb-grid-strong tracking-[0.01em]">Seu CRM se preenche sozinho</h4>
                  <p className="text-[15px] text-pb-ink-soft leading-[1.75] font-body">
                    Toda conversa de WhatsApp, toda call de fechamento, toda reunião de diagnóstico, cada interação no site — tudo é transcrito, analisado e registrado no CRM automaticamente. Status, próximos passos, objeções, oportunidades. Hoje, vendedores gastam só 28% do tempo vendendo de fato — o resto vai pra tarefas administrativas, atualização de CRM e busca de informação. Agora, não mais. Seu CRM nunca mais ficará sem informações.
                  </p>
                  <p className="font-mono text-[10px] text-pb-ink-muted tracking-[0.08em] uppercase border-t border-pb-grid-strong pt-3.5 mt-3.5 leading-relaxed">Fonte: Salesforce State of Sales 2025 · Forrester Activity Study (3.031 vendedores).</p>
                </div>
              </div>

              {/* Item 02 */}
              <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-16 max-md:gap-6 items-center">
                <div className="relative bg-pb-void-deep border border-pb-grid-strong p-2 md:order-2
                  before:absolute before:top-[-1px] before:left-[-1px] before:w-4 before:h-4 before:border-t before:border-l before:border-pb-cyan before:pointer-events-none before:content-['']
                  after:absolute after:bottom-[-1px] after:right-[-1px] after:w-4 after:h-4 after:border-b after:border-r after:border-pb-cyan after:pointer-events-none after:content-['']">
                  <span className="absolute top-[-22px] left-0 font-mono text-[9px] text-pb-ink-muted tracking-[0.25em] uppercase">EVIDÊNCIA · FRAME 02</span>
                  <span className="absolute top-[-22px] right-0 font-mono text-[9px] text-pb-cyan tracking-[0.2em] uppercase">WHATSAPP · 24/7</span>
                  <img src={img02} alt="Análise de WhatsApp em tempo real via Agentic OS" loading="lazy" className="w-full h-auto block" />
                </div>
                <div className="py-2 md:order-1">
                  <span className="font-display text-[64px] text-pb-cyan block leading-none mb-5 [text-shadow:0_0_28px_rgba(32,221,235,0.45)]">02</span>
                  <h4 className="font-display text-[clamp(24px,2.4vw,32px)] text-pb-ink uppercase leading-[1.15] mb-6 pb-5 border-b border-pb-grid-strong tracking-[0.01em]">Cada WhatsApp atendido é analisado em tempo real</h4>
                  <p className="text-[15px] text-pb-ink-soft leading-[1.75] font-body">
                    Agentes monitoram o atendimento comercial via WhatsApp 24/7. Identificam quando o time não respondeu uma objeção, quando perdeu uma oportunidade de upsell, quando deixou um lead esfriar, quando não seguiu o script de atendimento. Seu time nunca mais vai esquecer de um cliente.
                  </p>
                </div>
              </div>

              {/* Item 03 */}
              <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-16 max-md:gap-6 items-center">
                <div className="relative bg-pb-void-deep border border-pb-grid-strong p-2
                  before:absolute before:top-[-1px] before:left-[-1px] before:w-4 before:h-4 before:border-t before:border-l before:border-pb-cyan before:pointer-events-none before:content-['']
                  after:absolute after:bottom-[-1px] after:right-[-1px] after:w-4 after:h-4 after:border-b after:border-r after:border-pb-cyan after:pointer-events-none after:content-['']">
                  <span className="absolute top-[-22px] left-0 font-mono text-[9px] text-pb-ink-muted tracking-[0.25em] uppercase">EVIDÊNCIA · FRAME 03</span>
                  <span className="absolute top-[-22px] right-0 font-mono text-[9px] text-pb-cyan tracking-[0.2em] uppercase">CALL · ANÁLISE SEMÂNTICA</span>
                  <img src={img03} alt="Avaliação de call de fechamento via Agentic OS" loading="lazy" className="w-full h-auto block" />
                </div>
                <div className="py-2">
                  <span className="font-display text-[64px] text-pb-cyan block leading-none mb-5 [text-shadow:0_0_28px_rgba(32,221,235,0.45)]">03</span>
                  <h4 className="font-display text-[clamp(24px,2.4vw,32px)] text-pb-ink uppercase leading-[1.15] mb-6 pb-5 border-b border-pb-grid-strong tracking-[0.01em]">Cada call de fechamento é avaliada</h4>
                  <p className="text-[15px] text-pb-ink-soft leading-[1.75] font-body">
                    Toda call comercial é transcrita e analisada contra a sua metodologia de vendas. O sistema identifica o que funcionou, o que faltou, e onde o vendedor pode melhorar. Treinamento contínuo sem você precisar revisar gravação.
                  </p>
                </div>
              </div>

              {/* Item 04 */}
              <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-16 max-md:gap-6 items-center">
                <div className="relative bg-pb-void-deep border border-pb-grid-strong p-2 md:order-2
                  before:absolute before:top-[-1px] before:left-[-1px] before:w-4 before:h-4 before:border-t before:border-l before:border-pb-cyan before:pointer-events-none before:content-['']
                  after:absolute after:bottom-[-1px] after:right-[-1px] after:w-4 after:h-4 after:border-b after:border-r after:border-pb-cyan after:pointer-events-none after:content-['']">
                  <span className="absolute top-[-22px] left-0 font-mono text-[9px] text-pb-ink-muted tracking-[0.25em] uppercase">EVIDÊNCIA · FRAME 04</span>
                  <span className="absolute top-[-22px] right-0 font-mono text-[9px] text-pb-cyan tracking-[0.2em] uppercase">RELATÓRIO · WEEKLY SYNC</span>
                  <img src={img04} alt="Relatório semanal consolidado automaticamente via Agentic OS" loading="lazy" className="w-full h-auto block" />
                </div>
                <div className="py-2 md:order-1">
                  <span className="font-display text-[64px] text-pb-cyan block leading-none mb-5 [text-shadow:0_0_28px_rgba(32,221,235,0.45)]">04</span>
                  <h4 className="font-display text-[clamp(24px,2.4vw,32px)] text-pb-ink uppercase leading-[1.15] mb-6 pb-5 border-b border-pb-grid-strong tracking-[0.01em]">Relatórios semanais consolidados, sem ninguém fazer relatório</h4>
                  <p className="text-[15px] text-pb-ink-soft leading-[1.75] font-body">
                    Toda semana, um agente consolida o que aconteceu no comercial — WhatsApps, calls, taxa de conversão por etapa, gargalos detectados — e te entrega um relatório executivo. Você abre a segunda-feira já sabendo onde focar.
                  </p>
                </div>
              </div>

              {/* Item 05 */}
              <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-16 max-md:gap-6 items-center">
                <div className="relative bg-pb-void-deep border border-pb-grid-strong p-2
                  before:absolute before:top-[-1px] before:left-[-1px] before:w-4 before:h-4 before:border-t before:border-l before:border-pb-cyan before:pointer-events-none before:content-['']
                  after:absolute after:bottom-[-1px] after:right-[-1px] after:w-4 after:h-4 after:border-b after:border-r after:border-pb-cyan after:pointer-events-none after:content-['']">
                  <span className="absolute top-[-22px] left-0 font-mono text-[9px] text-pb-ink-muted tracking-[0.25em] uppercase">EVIDÊNCIA · FRAME 05</span>
                  <span className="absolute top-[-22px] right-0 font-mono text-[9px] text-pb-cyan tracking-[0.2em] uppercase">TRÁFEGO · ATTRIBUTION SYNC</span>
                  <img src={img05} alt="Tráfego pago integrado à inteligência comercial via Agentic OS" loading="lazy" className="w-full h-auto block" />
                </div>
                <div className="py-2">
                  <span className="font-display text-[64px] text-pb-cyan block leading-none mb-5 [text-shadow:0_0_28px_rgba(32,221,235,0.45)]">05</span>
                  <h4 className="font-display text-[clamp(24px,2.4vw,32px)] text-pb-ink uppercase leading-[1.15] mb-6 pb-5 border-b border-pb-grid-strong tracking-[0.01em]">Tráfego pago integrado à inteligência comercial</h4>
                  <p className="text-[15px] text-pb-ink-soft leading-[1.75] font-body">
                    O sistema cruza dados das suas campanhas (Meta, Google) com o desempenho real no fechamento. Você descobre qual criativo gera lead que fecha, não só lead que clica. E sua verba de tráfego para de ser gasta com leads curiosos.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* QUEBRA DE IMPACTO */}
          <div className="relative my-[100px] py-20 max-md:py-12 text-center border-t border-b border-[rgba(32,221,235,0.25)]
            before:absolute before:top-[-12px] before:left-1/2 before:-translate-x-1/2 before:bg-pb-void-deep before:px-4 before:text-pb-cyan before:font-mono before:text-[18px] before:content-['⟶']">
            <p className="font-display font-normal text-[clamp(36px,5.5vw,84px)] text-pb-ink uppercase leading-[0.95] tracking-[0.01em]">
              E tudo isso é apenas <strong className="text-pb-cyan font-normal [text-shadow:0_0_32px_rgba(32,221,235,0.45)]">UM</strong> dos módulos<span className="text-pb-red">.</span>
            </p>
          </div>

          {/* OUTROS MÓDULOS */}
          <p className="text-[17px] text-pb-ink-soft max-w-[700px] mb-14 leading-[1.7] font-body">
            Uma Agentic OS madura conecta toda a operação. Veja outros módulos comuns:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-[100px]">

            {/* Financeiro */}
            <div className="relative bg-pb-void-card border border-pb-grid-strong p-8 flex flex-col transition-colors duration-300 hover:border-[rgba(32,221,235,0.25)]
              before:absolute before:top-0 before:left-0 before:w-8 before:h-px before:bg-pb-cyan before:content-['']">
              <div className="w-full max-w-[200px] aspect-square mx-auto mb-6 bg-pb-void-deep border border-pb-grid-strong flex items-center justify-center overflow-hidden">
                <img src={iconFinanceiro} alt="Módulo Financeiro" loading="lazy" className="w-full h-full object-contain block" />
              </div>
              <span className="font-mono text-[10px] text-pb-cyan tracking-[0.3em] uppercase mb-2 block">&#10230; Módulo 02</span>
              <h3 className="font-display text-[22px] text-pb-ink uppercase mb-[18px] pb-4 border-b border-pb-grid-strong tracking-[0.01em] leading-[1.1]">Financeiro</h3>
              <p className="text-[14px] text-pb-ink-soft leading-[1.7] font-body">
                Categorização de despesas em tempo real, projeção de fluxo de caixa rodando todo dia, alertas quando um indicador sai do padrão. Seu financeiro para de ser histórico e vira preditivo. Você descobre o problema antes dele virar problema.
              </p>
            </div>

            {/* Gestão de Tarefas */}
            <div className="relative bg-pb-void-card border border-pb-grid-strong p-8 flex flex-col transition-colors duration-300 hover:border-[rgba(32,221,235,0.25)]
              before:absolute before:top-0 before:left-0 before:w-8 before:h-px before:bg-pb-cyan before:content-['']">
              <div className="w-full max-w-[200px] aspect-square mx-auto mb-6 bg-pb-void-deep border border-pb-grid-strong flex items-center justify-center overflow-hidden">
                <img src={iconTarefas} alt="Módulo Gestão de Tarefas" loading="lazy" className="w-full h-full object-contain block" />
              </div>
              <span className="font-mono text-[10px] text-pb-cyan tracking-[0.3em] uppercase mb-2 block">&#10230; Módulo 03</span>
              <h3 className="font-display text-[22px] text-pb-ink uppercase mb-[18px] pb-4 border-b border-pb-grid-strong tracking-[0.01em] leading-[1.1]">Gestão de Tarefas</h3>
              <p className="text-[14px] text-pb-ink-soft leading-[1.7] font-body">
                Tarefas extraídas automaticamente de reuniões, emails e WhatsApps. Atribuição inteligente baseada em carga e contexto de cada pessoa. Acompanhamento de execução sem ninguém precisar atualizar status. Seu time executa, a OS organiza.
              </p>
            </div>

            {/* Conteúdo */}
            <div className="relative bg-pb-void-card border border-pb-grid-strong p-8 flex flex-col transition-colors duration-300 hover:border-[rgba(32,221,235,0.25)]
              before:absolute before:top-0 before:left-0 before:w-8 before:h-px before:bg-pb-cyan before:content-['']">
              <div className="w-full max-w-[200px] aspect-square mx-auto mb-6 bg-pb-void-deep border border-pb-grid-strong flex items-center justify-center overflow-hidden">
                <img src={iconConteudo} alt="Módulo Conteúdo" loading="lazy" className="w-full h-full object-contain block" />
              </div>
              <span className="font-mono text-[10px] text-pb-cyan tracking-[0.3em] uppercase mb-2 block">&#10230; Módulo 04</span>
              <h3 className="font-display text-[22px] text-pb-ink uppercase mb-[18px] pb-4 border-b border-pb-grid-strong tracking-[0.01em] leading-[1.1]">Conteúdo</h3>
              <p className="text-[14px] text-pb-ink-soft leading-[1.7] font-body">
                Calendário editorial, briefings, status de produção e métricas por canal — tudo no mesmo lugar. O conteúdo orgânico que alimenta o topo do funil para de viver em planilhas espalhadas e passa a operar como parte de um organismo único, sincronizado com o resto da empresa.
              </p>
            </div>
          </div>

          {/* TABELA COMPARATIVA */}
          <div className="relative mt-[120px] pt-[100px] border-t border-pb-grid-strong
            before:absolute before:top-[-1px] before:left-1/2 before:-translate-x-1/2 before:w-[120px] before:h-0.5 before:bg-pb-cyan before:[box-shadow:0_0_16px_rgba(32,221,235,0.45)] before:content-['']">

            <div className="text-center mb-[72px]">
              <span className="font-mono text-[11px] font-medium tracking-[0.3em] uppercase text-pb-cyan mb-6 inline-flex items-center gap-3
                before:content-[''] before:w-7 before:h-px before:bg-pb-cyan before:inline-block">
                Análise comparativa
              </span>
              <h3 className="font-display font-normal text-[clamp(36px,5vw,64px)] text-pb-ink uppercase leading-[0.95] tracking-[0.01em] mb-8">
                Por que <span className="text-pb-cyan">Agentic OS</span> é diferente de tudo que sua empresa já usou.
              </h3>
              <p className="text-[16px] text-pb-ink-soft max-w-[720px] mx-auto leading-[1.7] font-body">
                Sua empresa já operou tecnologia de várias formas. Cada uma resolveu uma parte do problema — e deixou outras abertas. A tabela abaixo mostra onde cada modelo entrega e onde falha.
              </p>
            </div>

            <div className="relative bg-pb-void-card border border-pb-grid-strong p-10 max-md:p-5 overflow-x-auto
              before:absolute before:top-[-1px] before:left-[-1px] before:w-5 before:h-5 before:border-t-2 before:border-l-2 before:border-pb-cyan before:pointer-events-none before:content-['']
              after:absolute after:bottom-[-1px] after:right-[-1px] after:w-5 after:h-5 after:border-b-2 after:border-r-2 after:border-pb-cyan after:pointer-events-none after:content-['']">
              <table className="w-full border-collapse min-w-[880px]">
                <thead>
                  <tr>
                    <th className="font-mono text-[10px] font-semibold text-pb-cyan tracking-[0.25em] uppercase text-left px-[18px] py-[18px] border-b border-pb-grid-strong align-middle">&#10230; Critério</th>
                    <th className="font-mono text-[10px] font-semibold text-pb-ink-muted tracking-[0.25em] uppercase text-left px-[18px] py-[18px] border-b border-pb-grid-strong align-middle">SaaS</th>
                    <th className="font-mono text-[10px] font-semibold text-pb-ink-muted tracking-[0.25em] uppercase text-left px-[18px] py-[18px] border-b border-pb-grid-strong align-middle">Planilhas + automações</th>
                    <th className="font-mono text-[10px] font-semibold text-pb-ink-muted tracking-[0.25em] uppercase text-left px-[18px] py-[18px] border-b border-pb-grid-strong align-middle">Dev Interno</th>
                    <th className="relative font-mono text-[12px] font-semibold text-pb-cyan-soft tracking-[0.3em] uppercase text-left px-[18px] py-[18px] border-b border-pb-grid-strong align-middle [text-shadow:0_0_12px_rgba(32,221,235,0.45)]
                      after:absolute after:bottom-[-1px] after:left-[18px] after:right-[18px] after:h-0.5 after:bg-pb-cyan after:[box-shadow:0_0_10px_rgba(32,221,235,0.45)] after:content-['']">Agentic OS</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      criterio: "Dados confiáveis",
                      saas: <><span className="font-mono font-semibold text-[14px] text-pb-red mr-1.5">&#x2715;</span> Dados não se comunicam entre ferramentas</>,
                      plan: <><span className="font-mono font-semibold text-[14px] text-yellow-400 mr-1.5">!</span> Precisa de gambiarra para integrar</>,
                      dev:  <><span className="font-mono font-semibold text-[14px] text-pb-cyan mr-1.5">&#x2713;</span> Possível, mas custosa</>,
                      aos:  <><span className="font-mono font-semibold text-[14px] text-pb-cyan mr-1.5">&#x2713;</span> Nativa, por design</>,
                    },
                    {
                      criterio: "Adaptação ao seu negócio",
                      saas: <><span className="font-mono font-semibold text-[14px] text-pb-red mr-1.5">&#x2715;</span> Inexistente</>,
                      plan: <><span className="font-mono font-semibold text-[14px] text-yellow-400 mr-1.5">!</span> Manual</>,
                      dev:  <><span className="font-mono font-semibold text-[14px] text-pb-cyan mr-1.5">&#x2713;</span> Alta</>,
                      aos:  <><span className="font-mono font-semibold text-[14px] text-pb-cyan mr-1.5">&#x2713;</span> Total, automatizada</>,
                    },
                    {
                      criterio: "Inteligência Artificial",
                      saas: <><span className="font-mono font-semibold text-[14px] text-pb-red mr-1.5">&#x2715;</span> Isolada</>,
                      plan: <><span className="font-mono font-semibold text-[14px] text-pb-red mr-1.5">&#x2715;</span> Inexistente</>,
                      dev:  <><span className="font-mono font-semibold text-[14px] text-pb-red mr-1.5">&#x2715;</span> Inexistente</>,
                      aos:  <><span className="font-mono font-semibold text-[14px] text-pb-cyan mr-1.5">&#x2713;</span> Agentes trabalhando 24h por dia para o seu negócio</>,
                    },
                    {
                      criterio: "Tecnologia Viva",
                      saas: <><span className="font-mono font-semibold text-[14px] text-pb-red mr-1.5">&#x2715;</span> Inexistente</>,
                      plan: <><span className="font-mono font-semibold text-[14px] text-pb-red mr-1.5">&#x2715;</span> Inexistente</>,
                      dev:  <><span className="font-mono font-semibold text-[14px] text-yellow-400 mr-1.5">!</span> Custo cresce muito</>,
                      aos:  <><span className="font-mono font-semibold text-[14px] text-pb-cyan mr-1.5">&#x2713;</span> Cresce junto, sem atrito</>,
                    },
                    {
                      criterio: "Visão unificada",
                      saas: <><span className="font-mono font-semibold text-[14px] text-pb-red mr-1.5">&#x2715;</span> 12 abas abertas</>,
                      plan: <><span className="font-mono font-semibold text-[14px] text-pb-red mr-1.5">&#x2715;</span> Cada um vê uma coisa</>,
                      dev:  <><span className="font-mono font-semibold text-[14px] text-pb-cyan mr-1.5">&#x2713;</span> Sim, se bem feito</>,
                      aos:  <><span className="font-mono font-semibold text-[14px] text-pb-cyan mr-1.5">&#x2713;</span> Um único organismo</>,
                    },
                    {
                      criterio: "Dependência",
                      saas: <><span className="font-mono font-semibold text-[14px] text-pb-red mr-1.5">&#x2715;</span> Dependência do fornecedor</>,
                      plan: <><span className="font-mono font-semibold text-[14px] text-pb-cyan mr-1.5">&#x2713;</span> Zero</>,
                      dev:  <><span className="font-mono font-semibold text-[14px] text-pb-cyan mr-1.5">&#x2713;</span> Zero (se o time fica)</>,
                      aos:  <><span className="font-mono font-semibold text-[14px] text-pb-cyan mr-1.5">&#x2713;</span> Zero — é seu</>,
                    },
                    {
                      criterio: "Velocidade de Implementação",
                      saas: <><span className="font-mono font-semibold text-[14px] text-pb-cyan mr-1.5">&#x2713;</span> Imediato</>,
                      plan: <><span className="font-mono font-semibold text-[14px] text-pb-cyan mr-1.5">&#x2713;</span> Imediato</>,
                      dev:  <><span className="font-mono font-semibold text-[14px] text-pb-red mr-1.5">&#x2715;</span> Anos</>,
                      aos:  <><span className="font-mono font-semibold text-[14px] text-yellow-400 mr-1.5">!</span> Implantação progressiva</>,
                    },
                  ].map((row, i) => (
                    <tr key={i} className="group hover:[&>td]:bg-[rgba(32,221,235,0.04)]">
                      <td className="font-mono text-[11px] text-pb-ink font-medium uppercase tracking-mono-wide px-[18px] py-[18px] border-b border-pb-grid-strong align-middle min-w-[200px] max-w-[220px] leading-[1.4]">{row.criterio}</td>
                      <td className="font-body text-[13px] text-pb-ink-soft px-[18px] py-[18px] border-b border-pb-grid-strong align-middle font-light">{row.saas}</td>
                      <td className="font-body text-[13px] text-pb-ink-soft px-[18px] py-[18px] border-b border-pb-grid-strong align-middle font-light">{row.plan}</td>
                      <td className="font-body text-[13px] text-pb-ink-soft px-[18px] py-[18px] border-b border-pb-grid-strong align-middle font-light">{row.dev}</td>
                      <td className="font-body text-[13px] text-pb-cyan-soft px-[18px] py-[18px] border-b border-[rgba(32,221,235,0.25)] border-l border-r border-l-[rgba(32,221,235,0.25)] border-r-[rgba(32,221,235,0.25)] align-middle font-medium bg-[rgba(32,221,235,0.04)]">{row.aos}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* PROVA POR AUTORIDADE */}
          <div className="relative mt-[120px] pt-[100px] border-t border-pb-grid-strong
            before:absolute before:top-[-1px] before:left-1/2 before:-translate-x-1/2 before:w-[120px] before:h-0.5 before:bg-pb-cyan before:[box-shadow:0_0_16px_rgba(32,221,235,0.45)] before:content-['']">

            <div className="text-center mb-[72px]">
              <span className="font-mono text-[11px] font-medium tracking-[0.3em] uppercase text-pb-cyan mb-6 inline-flex items-center gap-3
                before:content-[''] before:w-7 before:h-px before:bg-pb-cyan before:inline-block">
                Prova por autoridade
              </span>
              <h3 className="font-display font-normal text-[clamp(36px,5vw,64px)] text-pb-ink uppercase leading-[0.95] tracking-[0.01em] mb-8">
                Isso não é <span className="text-pb-cyan">opinião isolada</span>. É para onde a tecnologia está indo.
              </h3>
              <p className="text-[16px] text-pb-ink-soft max-w-[720px] mx-auto leading-[1.7] font-body">
                Você não precisa acreditar em mim. Os CEOs que estão construindo o futuro da computação já estão dizendo, em alto e bom som, que o paradigma mudou. Veja o que eles estão falando:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-6">

              {/* Featured quote */}
              <div className="relative md:col-span-6 bg-[linear-gradient(135deg,rgba(32,221,235,0.04)_0%,hsl(var(--bg-card))_100%)] border border-[rgba(32,221,235,0.25)] p-14 max-md:p-6 flex flex-col transition-colors duration-300
                before:absolute before:top-0 before:left-0 before:w-6 before:h-px before:bg-pb-cyan before:content-['']">
                <div className="font-display text-[100px] leading-[0.4] text-pb-cyan opacity-70 mb-7 [text-shadow:0_0_20px_rgba(32,221,235,0.45)]">"</div>
                <p className="font-body text-[clamp(20px,2.2vw,26px)] text-pb-ink leading-[1.45] font-light mb-8 flex-1">
                  Minha mensagem para os CEOs neste momento: <strong className="text-pb-cyan-soft font-medium">somos a última geração a gerenciar apenas humanos</strong>. A partir daqui, vamos gerenciar trabalhadores humanos e trabalhadores digitais.
                </p>
                <div className="border-t border-pb-grid-strong pt-5 mt-auto">
                  <div className="font-display text-[18px] text-pb-ink uppercase tracking-[0.08em] mb-1">Marc Benioff</div>
                  <div className="font-mono text-[10px] text-pb-cyan tracking-mono-x uppercase mb-1.5">CEO · Salesforce</div>
                  <div className="font-mono text-[10px] text-pb-ink-muted tracking-[0.08em]">World Economic Forum · Davos, Janeiro 2025</div>
                </div>
              </div>

              {/* Secondary quotes */}
              <div className="relative md:col-span-3 bg-pb-void-card border border-pb-grid-strong p-8 flex flex-col transition-colors duration-300 hover:border-[rgba(32,221,235,0.25)]
                before:absolute before:top-0 before:left-0 before:w-6 before:h-px before:bg-pb-cyan before:content-['']">
                <div className="font-display text-[72px] leading-[0.4] text-pb-cyan opacity-70 mb-6 [text-shadow:0_0_20px_rgba(32,221,235,0.45)]">"</div>
                <p className="font-body text-[15px] text-pb-ink leading-[1.65] font-light mb-8 flex-1">
                  Acreditamos que, em 2025, vamos ver os primeiros agentes de IA <strong className="text-pb-cyan-soft font-medium">"entrarem na força de trabalho"</strong> e mudarem materialmente o output das empresas.
                </p>
                <div className="border-t border-pb-grid-strong pt-5 mt-auto">
                  <div className="font-display text-[15px] text-pb-ink uppercase tracking-[0.08em] mb-1">Sam Altman</div>
                  <div className="font-mono text-[10px] text-pb-cyan tracking-mono-x uppercase mb-1.5">CEO · OpenAI</div>
                  <div className="font-mono text-[10px] text-pb-ink-muted tracking-[0.08em]">Blog post "Reflections" · Janeiro 2025</div>
                </div>
              </div>

              <div className="relative md:col-span-3 bg-pb-void-card border border-pb-grid-strong p-8 flex flex-col transition-colors duration-300 hover:border-[rgba(32,221,235,0.25)]
                before:absolute before:top-0 before:left-0 before:w-6 before:h-px before:bg-pb-cyan before:content-['']">
                <div className="font-display text-[72px] leading-[0.4] text-pb-cyan opacity-70 mb-6 [text-shadow:0_0_20px_rgba(32,221,235,0.45)]">"</div>
                <p className="font-body text-[15px] text-pb-ink leading-[1.65] font-light mb-8 flex-1">
                  Nosso agente de IA faz hoje o trabalho equivalente a <strong className="text-pb-cyan-soft font-medium">mais de 853 funcionários em tempo integral</strong>. Economizamos US$ 60 milhões e melhoramos o tempo de resposta em 82%.
                </p>
                <div className="border-t border-pb-grid-strong pt-5 mt-auto">
                  <div className="font-display text-[15px] text-pb-ink uppercase tracking-[0.08em] mb-1">Sebastian Siemiatkowski</div>
                  <div className="font-mono text-[10px] text-pb-cyan tracking-mono-x uppercase mb-1.5">CEO · Klarna</div>
                  <div className="font-mono text-[10px] text-pb-ink-muted tracking-[0.08em]">Q3 2025 Earnings Call · Novembro 2025</div>
                </div>
              </div>

              {/* Tertiary quotes */}
              <div className="relative md:col-span-2 bg-pb-void-card border border-pb-grid-strong p-8 flex flex-col transition-colors duration-300 hover:border-[rgba(32,221,235,0.25)]
                before:absolute before:top-0 before:left-0 before:w-6 before:h-px before:bg-pb-cyan before:content-['']">
                <div className="font-display text-[72px] leading-[0.4] text-pb-cyan opacity-70 mb-6 [text-shadow:0_0_20px_rgba(32,221,235,0.45)]">"</div>
                <p className="font-body text-[13px] text-pb-ink leading-[1.6] font-light mb-6 flex-1">
                  Antes de pedir mais headcount, times precisam demonstrar por que não conseguem fazer o trabalho usando IA. Como essa área se pareceria se agentes autônomos já fossem parte do time?
                </p>
                <div className="border-t border-pb-grid-strong pt-5 mt-auto">
                  <div className="font-display text-[15px] text-pb-ink uppercase tracking-[0.08em] mb-1">Tobi Lütke</div>
                  <div className="font-mono text-[10px] text-pb-cyan tracking-mono-x uppercase mb-1.5">CEO · Shopify</div>
                  <div className="font-mono text-[10px] text-pb-ink-muted tracking-[0.08em]">Memorando interno · Abril 2025</div>
                </div>
              </div>

              <div className="relative md:col-span-2 bg-pb-void-card border border-pb-grid-strong p-8 flex flex-col transition-colors duration-300 hover:border-[rgba(32,221,235,0.25)]
                before:absolute before:top-0 before:left-0 before:w-6 before:h-px before:bg-pb-cyan before:content-['']">
                <div className="font-display text-[72px] leading-[0.4] text-pb-cyan opacity-70 mb-6 [text-shadow:0_0_20px_rgba(32,221,235,0.45)]">"</div>
                <p className="font-body text-[13px] text-pb-ink leading-[1.6] font-light mb-6 flex-1">
                  As forças de trabalho do futuro serão uma combinação de humanos e humanos digitais. Você vai licenciar alguns e contratar outros, dependendo da expertise.
                </p>
                <div className="border-t border-pb-grid-strong pt-5 mt-auto">
                  <div className="font-display text-[15px] text-pb-ink uppercase tracking-[0.08em] mb-1">Jensen Huang</div>
                  <div className="font-mono text-[10px] text-pb-cyan tracking-mono-x uppercase mb-1.5">CEO · NVIDIA</div>
                  <div className="font-mono text-[10px] text-pb-ink-muted tracking-[0.08em]">Entrevista Citadel Securities · Outubro 2025</div>
                </div>
              </div>

              <div className="relative md:col-span-2 bg-pb-void-card border border-pb-grid-strong p-8 flex flex-col transition-colors duration-300 hover:border-[rgba(32,221,235,0.25)]
                before:absolute before:top-0 before:left-0 before:w-6 before:h-px before:bg-pb-cyan before:content-['']">
                <div className="font-display text-[72px] leading-[0.4] text-pb-cyan opacity-70 mb-6 [text-shadow:0_0_20px_rgba(32,221,235,0.45)]">"</div>
                <p className="font-body text-[13px] text-pb-ink leading-[1.6] font-light mb-6 flex-1">
                  41% dos empregadores esperam reduzir headcount até 2030 por causa de transformação tecnológica. O paradigma de trabalho está sendo reescrito agora.
                </p>
                <div className="border-t border-pb-grid-strong pt-5 mt-auto">
                  <div className="font-display text-[15px] text-pb-ink uppercase tracking-[0.08em] mb-1">World Economic Forum</div>
                  <div className="font-mono text-[10px] text-pb-cyan tracking-mono-x uppercase mb-1.5">Future of Jobs Report</div>
                  <div className="font-mono text-[10px] text-pb-ink-muted tracking-[0.08em]">Edição 2025</div>
                </div>
              </div>

            </div>
          </div>

          {/* FECHAMENTO FINAL */}
          <div className="relative mx-auto mt-[120px] max-w-[880px] text-center px-10 py-24 max-md:px-6 max-md:py-14
            bg-[linear-gradient(135deg,rgba(32,221,235,0.04)_0%,hsl(var(--bg-card))_100%)]
            border border-[rgba(32,221,235,0.25)] overflow-hidden
            before:absolute before:top-[-1px] before:left-[-1px] before:w-8 before:h-8 before:border-t-2 before:border-l-2 before:border-pb-cyan before:pointer-events-none before:content-['']
            after:absolute after:bottom-[-1px] after:right-[-1px] after:w-8 after:h-8 after:border-b-2 after:border-r-2 after:border-pb-cyan after:pointer-events-none after:content-['']">

            <div className="font-mono text-[11px] text-pb-cyan tracking-[0.3em] uppercase mb-9">&#10230; Conclusão do Briefing</div>

            <p className="font-display font-normal text-[clamp(56px,9vw,128px)] text-pb-ink uppercase leading-[0.9] tracking-[0.01em] mb-10">
              O mundo <span className="text-pb-cyan [text-shadow:0_0_32px_rgba(32,221,235,0.45)]">mudou</span><span className="text-pb-red">.</span>
            </p>

            <p className="font-body text-[clamp(17px,1.8vw,21px)] text-pb-ink-soft leading-[1.6] font-light mb-14 max-w-[680px] mx-auto">
              O Agentic OS é o oposto do paradigma do SaaS tradicional.<br />
              <strong className="text-pb-ink font-medium">Não é você se adaptando à ferramenta. É a ferramenta sendo construída pra ser você.</strong>
            </p>

            <a
              href="https://wa.me/5511999718595"
              className="btn-primary inline-block px-14 py-[22px] text-[14px] tracking-[0.25em] shadow-cyan-glow hover:shadow-[0_8px_40px_rgba(32,221,235,0.45)] hover:bg-pb-cyan-soft hover:text-pb-void-deep transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => tracker.track("cta_click", { product: "agentic-os", location: "final-cta" })}
            >
              Quero viver essa revolução &#8594;
            </a>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-[2] border-t border-pb-grid-strong mt-[60px] pt-20 pb-[60px]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-8">
          <div className="flex justify-between items-center flex-wrap gap-6">
            <div className="font-display text-[24px] tracking-[0.12em] text-pb-ink uppercase">
              <span className="text-pb-cyan">&#x27C1;</span> AGENTIC OS
            </div>
            <div className="font-mono text-[11px] text-pb-ink-muted tracking-mono-x uppercase">DOC 001 · V2.0 · 2026 · BRIEFING ESTRATÉGICO</div>
          </div>
        </div>
      </footer>

      {/* Keyframe para rotação da bússola — escopo local */}
      <style>{`@keyframes aos-slow-rotate { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
};

export default AgenticOS;
