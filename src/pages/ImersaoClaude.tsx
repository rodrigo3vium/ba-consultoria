import { useEffect, useRef, useState } from "react";
import { CheckCircle, Lock, Plus, Minus } from "lucide-react";
import { tracker } from "@/lib/tracking";
import { buildHotmartCheckoutUrl } from "@/lib/hotmartUtils";
import rodrigoPhoto from "@/assets/founders/rodrigo-albuquerque.webp";
import { Accent, Eyebrow, SAAS_CARD, SAAS_GRADIENT_TEXT } from "@/components/saas/ui";

const BTN_CTA =
  "inline-flex flex-col items-center justify-center gap-1 rounded-full px-8 py-4 text-sm font-bold text-saas-void bg-gradient-to-r from-saas-cyan to-saas-violet shadow-saas-btn hover:shadow-saas-btn-h hover:-translate-y-0.5 transition-all";
const BTN_CTA_SUB = "text-[11px] font-medium normal-case tracking-normal opacity-80";

const CHART_FONT = "'Plus Jakarta Sans', sans-serif";

const ImersaoClaude = () => {
  const [activeTab, setActiveTab] = useState("revolucoes");
  const adoptionChartRef = useRef<HTMLCanvasElement>(null);
  const users100mChartRef = useRef<HTMLCanvasElement>(null);
  const marketShareChartRef = useRef<HTMLCanvasElement>(null);
  const adoptionBuilt = useRef(false);
  const users100mBuilt = useRef(false);
  const marketShareBuilt = useRef(false);
  const chartScriptLoaded = useRef(false);

  useEffect(() => {
    tracker.page("Imersão Claude");
    document.body.style.backgroundColor = "#0A0A13";
    document.body.style.paddingTop = "0";
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.paddingTop = "";
    };
  }, []);

  // Load Chart.js dynamically
  useEffect(() => {
    if (chartScriptLoaded.current) return;
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js";
    script.async = true;
    script.onload = () => { chartScriptLoaded.current = true; };
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  // Intersection observer for revolution bars
  useEffect(() => {
    const items = document.querySelectorAll(".rev-item");
    items.forEach((el) => {
      const htmlEl = el as HTMLElement;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              (e.target as HTMLElement).style.animationPlayState = "running";
              observer.unobserve(e.target);
            }
          });
        },
        { threshold: 0.2 }
      );
      htmlEl.style.animationPlayState = "paused";
      observer.observe(htmlEl);
    });
  }, []);

  const buildAdoptionChart = () => {
    if (adoptionBuilt.current || !adoptionChartRef.current || !(window as any).Chart) return;
    adoptionBuilt.current = true;
    const ctx = adoptionChartRef.current.getContext("2d");
    if (!ctx) return;
    new (window as any).Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Telefone\n(1876)", "Eletricidade\n(1882)", "Rádio\n(1920)", "TV\n(1950)", "PC\n(1981)", "Internet\n(1991)", "Smartphone\n(2007)", "IA Gen.\n(2022)"],
        datasets: [{
          data: [100, 70, 22, 18, 16, 7, 5, 3],
          backgroundColor: ["#7B7C8C","#7B7C8C","#7B7C8C","#7B7C8C","#9A9CAA","#9A9CAA","#20DDEB","#8B7CF6"],
          borderRadius: 6, borderSkipped: false, barPercentage: 0.7,
        }],
      },
      options: {
        indexAxis: "y", responsive: true, maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: "#15151F", titleColor: "#F5F5FA", bodyColor: "#B7B8C7",
            borderColor: "rgba(32,221,235,0.25)", borderWidth: 1,
            callbacks: { label: (ctx: any) => ctx.raw + " anos para atingir 50% de adoção" },
          },
        },
        scales: {
          x: {
            grid: { color: "rgba(255,255,255,0.05)" },
            ticks: { color: "#7B7C8C", font: { family: CHART_FONT, size: 11 }, callback: (v: any) => v + " anos" },
            title: { display: true, text: "Anos até 50% de adoção", color: "#7B7C8C", font: { family: CHART_FONT, size: 11 } },
          },
          y: { grid: { display: false }, ticks: { color: "#B7B8C7", font: { family: CHART_FONT, size: 11 } } },
        },
      },
    });
  };

  const build100mChart = () => {
    if (users100mBuilt.current || !users100mChartRef.current || !(window as any).Chart) return;
    users100mBuilt.current = true;
    const ctx = users100mChartRef.current.getContext("2d");
    if (!ctx) return;
    new (window as any).Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Telefone", "Facebook", "YouTube", "Instagram", "Spotify", "TikTok", "ChatGPT"],
        datasets: [{
          data: [900, 54, 48, 30, 18, 9, 2],
          backgroundColor: ["#7B7C8C","#7B7C8C","#7B7C8C","#7B7C8C","#7B7C8C","#9A9CAA","#8B7CF6"],
          borderRadius: 6, borderSkipped: false, barPercentage: 0.65,
        }],
      },
      options: {
        indexAxis: "y", responsive: true, maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: "#15151F", titleColor: "#F5F5FA", bodyColor: "#B7B8C7",
            borderColor: "rgba(32,221,235,0.25)", borderWidth: 1,
            callbacks: {
              label: (ctx: any) => {
                const v = ctx.raw;
                if (v >= 12) return Math.round(v / 12) + " anos (" + v + " meses)";
                return v + (v === 1 ? " mês" : " meses");
              },
            },
          },
        },
        scales: {
          x: {
            grid: { color: "rgba(255,255,255,0.05)" },
            ticks: {
              color: "#7B7C8C", font: { family: CHART_FONT, size: 11 },
              callback: (v: any) => { if (v >= 12) return Math.round(v / 12) + " anos"; return v + " meses"; },
            },
            title: { display: true, text: "Tempo até 100 milhões de usuários", color: "#7B7C8C", font: { family: CHART_FONT, size: 11 } },
          },
          y: { grid: { display: false }, ticks: { color: "#B7B8C7", font: { family: CHART_FONT, size: 11 } } },
        },
      },
    });
  };

  const buildMarketShareChart = () => {
    if (marketShareBuilt.current || !marketShareChartRef.current || !(window as any).Chart) return;
    marketShareBuilt.current = true;
    const ctx = marketShareChartRef.current.getContext("2d");
    if (!ctx) return;
    new (window as any).Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Fev\n2025","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez","Jan\n2026","Fev"],
        datasets: [
          { label: "Claude Enterprise", data: [3,3,3,3,3,3,3,3,3,4,4,4,5], backgroundColor: "#7a3010", stack: "s" },
          { label: "Claude Max", data: [2,2,2,2,2,2,2,2,2,3,4,5,5], backgroundColor: "#c06020", stack: "s" },
          { label: "Claude Team", data: [4,5,7,10,13,15,17,20,22,28,33,38,45], backgroundColor: "#e8903a", stack: "s" },
          { label: "Outro Anthropic", data: [1,2,2,3,3,3,3,3,3,4,5,6,14], backgroundColor: "#f5ddb0", stack: "s" },
          { label: "ChatGPT Business", data: [44,41,38,36,34,33,33,32,30,25,19,15,12], backgroundColor: "#7ab8f0", stack: "s" },
          { label: "ChatGPT Plus", data: [20,18,15,13,12,12,12,12,13,14,16,16,10], backgroundColor: "#4a90d9", stack: "s" },
          { label: "ChatGPT Pro", data: [13,13,14,14,14,14,13,12,12,11,10,10,5], backgroundColor: "#2e6eb5", stack: "s" },
          { label: "Outro OpenAI", data: [13,16,19,19,19,18,17,16,15,11,9,6,4], backgroundColor: "#1a4a8a", stack: "s" },
        ],
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: "#15151F", titleColor: "#F5F5FA", bodyColor: "#B7B8C7",
            borderColor: "rgba(32,221,235,0.25)", borderWidth: 1,
            callbacks: { label: (c: any) => ` ${c.dataset.label}: ${c.parsed.y}%` },
          },
        },
        scales: {
          x: { stacked: true, grid: { display: false }, ticks: { font: { size: 11, family: CHART_FONT }, color: "#7B7C8C", autoSkip: false, maxRotation: 0 } },
          y: { stacked: true, min: 0, max: 100, ticks: { stepSize: 10, font: { size: 11, family: CHART_FONT }, color: "#7B7C8C", callback: (v: any) => v + "%" }, grid: { color: "rgba(255,255,255,0.06)" } },
        },
      },
    });
  };

  // Auto-build market share chart when section scrolls into view
  useEffect(() => {
    const canvas = marketShareChartRef.current;
    if (!canvas) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            buildMarketShareChart();
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(canvas);
    return () => observer.disconnect();
  }, []);

  const switchTab = (tab: string) => {
    setActiveTab(tab);
    if (tab === "adocao") setTimeout(buildAdoptionChart, 50);
    if (tab === "100m") setTimeout(build100mChart, 50);
  };

  const handleCTA = (location: string) => {
    tracker.track("cta_click", { product: "imersao-claude", cta_location: location, page: "/imersao-claude" });
    const checkoutUrl = buildHotmartCheckoutUrl({
      baseUrl: "https://pay.hotmart.com/T104822269G?checkoutMode=10",
    });
    window.open(checkoutUrl, "_blank");
  };

  const forYouItems = [
    "Você já usa ChatGPT ou outras IAs mas sente que está só arranhando a superfície",
    "Você é empreendedor e quer usar IA para multiplicar resultados sem aumentar equipe",
    "Você é consultor, freelancer ou prestador de serviço e quer adicionar IA ao que já oferece cobrando mais por isso",
    "Você quer aprender uma habilidade que empresas estão dispostas a pagar de R$5K a R$30K",
    "Você não é de tech. É empresário, profissional liberal, gestor e quer IA aplicada ao seu contexto",
  ];

  const aulas = [
    {
      n: "01",
      tag: "Aula 1 · A Revolução",
      title: "O Que Está Acontecendo Agora Que Quase Ninguém Percebeu",
      desc: "Nos últimos 12 meses, mais mudou na forma como se aprende, trabalha e ganha dinheiro do que nos últimos 12 anos. Você vai entender por que a terceira onda da IA veio para revolucionar.",
      accent: "cyan" as const,
    },
    {
      n: "02",
      tag: "Aula 2 · A Janela",
      title: "Quem Está Caindo, Quem Está Subindo — E Onde Você Entra",
      desc: "Empresas bilionárias derretendo. Freelancers perdendo clientes da noite pro dia. Mas do outro lado, pessoas comuns estão faturando R$10K, R$50K, R$300K por mês, sozinhas, sem equipe, sem investidor. A janela está aberta agora. Você vai ver os números e entender exatamente por quê.",
      accent: "muted" as const,
    },
    {
      n: "03",
      tag: "Aula 3 · O Caminho",
      title: "Claude Na Prática E Como Isso Vira Dinheiro",
      desc: "Eu abro o Claude e construo um sistema completo na sua frente, do zero, usando comandos em português. Depois, mostro os 4 caminhos de monetização. Você sai com um plano concreto, independente do seu nível técnico, e pode aplicar no seu negócio ou vender para os seus clientes.",
      accent: "violet" as const,
    },
  ];

  const faqItems = [
    { q: "Quanto custa?", a: "A imersão completa com as 3 aulas custa R$97 — pagamento único ou parcelado em até 12× no cartão. E você tem garantia incondicional de 7 dias: se não gostar, peça o reembolso integral." },
    { q: "Preciso saber programar?", a: "De jeito nenhum. O Claude entende comandos em português. Você conversa com ele, diz o que precisa, e ele executa. A imersão inteira foi desenhada para quem nunca escreveu uma linha de código na vida." },
    { q: "É só conteúdo motivacional ou tem prática?", a: "Muita prática. Na Aula 3, eu abro o Claude e construo um sistema completo na sua frente. Você sai sabendo replicar. Sem enrolação, sem teoria vazia." },
    { q: "Isso é só pra quem trabalha com tecnologia?", a: "Não. A imersão foi pensada para empreendedores, profissionais liberais, gestores e qualquer pessoa que opera um negócio." },
    { q: "E se eu não gostar?", a: "Você tem 7 dias de garantia incondicional. Se sentir que não valeu, basta pedir o reembolso — sem perguntas, sem burocracia, sem ressentimento. O risco é zero." },
  ];

  return (
    <div className="min-h-screen bg-saas-void text-saas-body antialiased">
      <style>{`
        .rev-item { opacity: 0; animation: icRevSlideIn 0.6s var(--delay, 0s) forwards; }
        @keyframes icRevSlideIn { from { opacity: 0; transform: translateX(-16px); } to { opacity: 1; transform: translateX(0); } }
        .rev-bar {
          height: 6px; width: var(--width, 100%); border-radius: 999px;
          background: var(--color, #20DDEB); position: relative; transition: width 0.8s ease;
        }
        .rev-bar::after {
          content: ''; position: absolute; right: 0; top: -3px;
          width: 12px; height: 12px; border-radius: 50%;
          background: var(--color, #20DDEB); box-shadow: 0 0 10px var(--color, #20DDEB);
        }
      `}</style>

      {/* ══════ HERO ══════ */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:pt-36 md:pb-20 text-center">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[560px] h-[420px] rounded-full bg-saas-violet/20 blur-[120px]" />
          <div className="absolute top-10 right-0 w-[420px] h-[360px] rounded-full bg-saas-cyan/15 blur-[110px]" />
        </div>

        <div className="relative max-w-3xl mx-auto animate-fade-in">
          <div className="flex justify-center mb-6">
            <Eyebrow>Oferta especial: compre hoje com 67% de desconto</Eyebrow>
          </div>

          <h1 className="font-extrabold text-saas-ink text-[clamp(26px,5vw,50px)] leading-[1.1] tracking-tight">
            Aprenda tudo sobre o <Accent>Claude.</Accent> A IA mais poderosa do mundo, que executa tarefas ao invés de só responder perguntas.
          </h1>

          <p className="mt-7 text-saas-body text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            Em apenas 3 aulas, você vai aprender tudo o que precisa sobre o Claude e vai descobrir porque 50% do uso profissional de IA migrou do ChatGPT para o Claude nos últimos 12 meses.
          </p>

          <div className="mt-9 flex justify-center">
            <button className={BTN_CTA} onClick={() => handleCTA("hero")}>
              QUERO DOMINAR O CLAUDE
              <span className={BTN_CTA_SUB}>3 aulas · Acesso imediato · R$97</span>
            </button>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3">
            {["3 aulas ao vivo", "Claude na prática", "Zero código", "Acesso imediato"].map((m) => (
              <span key={m} className="inline-flex items-center gap-2 text-xs text-saas-faint">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet" />
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ URGENCY BAR ══════ */}
      <div className="border-y border-saas-cyan/20 bg-saas-cyan/[0.04] text-center py-3 px-4">
        <p className="text-saas-cyan text-[13px] md:text-sm">
          As vagas são limitadas. Quando atingirmos o limite, esta página sai do ar.
        </p>
      </div>

      {/* ══════ MIGRAÇÃO CLAUDE ══════ */}
      <section className="border-t border-white/[0.06] py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <video
            src="/videos/claude-migration.mp4"
            autoPlay loop muted playsInline
            className="w-[110px] h-auto mx-auto mb-8 rounded-xl"
          />
          <h2 className="font-extrabold text-saas-ink text-[clamp(24px,3.4vw,38px)] leading-[1.15] tracking-tight">
            Descubra porque <Accent>50% dos usuários sérios</Accent> de IA generativa nos últimos meses migraram do ChatGPT para o Claude.
          </h2>

          <div className={SAAS_CARD + " mt-10 p-6 md:p-7 text-left"}>
            <p className="text-saas-ink font-semibold text-base mb-1">Uso do ChatGPT vs Claude</p>
            <p className="text-saas-muted text-sm mb-1">Dados até fev 2026</p>
            <p className="text-saas-faint text-xs mb-5">Participação de mercado em gastos com assinaturas de chat de IA nos EUA</p>

            <div className="flex flex-wrap gap-x-4 gap-y-2 mb-5">
              {[
                { color: "#1a4a8a", label: "Outro OpenAI" },
                { color: "#2e6eb5", label: "ChatGPT Pro" },
                { color: "#4a90d9", label: "ChatGPT Plus" },
                { color: "#7ab8f0", label: "ChatGPT Business" },
                { color: "#f5ddb0", label: "Outro Anthropic" },
                { color: "#e8903a", label: "Claude Team" },
                { color: "#c06020", label: "Claude Max" },
                { color: "#7a3010", label: "Claude Enterprise" },
              ].map((l) => (
                <span key={l.label} className="inline-flex items-center gap-1.5 text-[11px] text-saas-faint">
                  <span className="w-3 h-3 rounded-sm flex-shrink-0" style={{ background: l.color }} />
                  {l.label}
                </span>
              ))}
            </div>

            <div className="relative w-full h-[340px] md:h-[380px]">
              <canvas ref={marketShareChartRef} />
            </div>

            <p className="text-saas-faint-2 text-[11px] mt-4 leading-relaxed">
              Fonte: Ramp Economics Lab (ramp.com/data). Dados de cartão corporativo e pagamento de contas de mais de 50.000 empresas dos EUA na plataforma financeira da Ramp.
            </p>
          </div>

          <p className="text-saas-body text-[15px] leading-relaxed max-w-xl mx-auto mt-10">
            Nos últimos 12 meses, mais mudou na forma como se ganha dinheiro do que nos últimos 12 anos. E isso é só o começo. Os números mostram o que está por vir:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className={SAAS_CARD + " p-6"}>
              <div className={SAAS_GRADIENT_TEXT + " font-extrabold text-4xl leading-none mb-2"}>92%</div>
              <div className="text-saas-faint text-xs leading-relaxed">das empresas planejam adotar IA até 2027</div>
            </div>
            <div className={SAAS_CARD + " p-6"}>
              <div className={SAAS_GRADIENT_TEXT + " font-extrabold text-4xl leading-none mb-2"}>41%</div>
              <div className="text-saas-faint text-xs leading-relaxed">dos empregos podem simplesmente desaparecer</div>
            </div>
            <div className={SAAS_CARD + " p-6"}>
              <div className={SAAS_GRADIENT_TEXT + " font-extrabold text-4xl leading-none mb-2"}>5×</div>
              <div className="text-saas-faint text-xs leading-relaxed">mais produtividade exigida por profissional</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ VELOCIDADE DAS REVOLUÇÕES ══════ */}
      <section className="border-t border-white/[0.06] py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center font-extrabold text-saas-ink text-[clamp(24px,3.4vw,38px)] leading-[1.15] tracking-tight">
            A velocidade só <Accent>acelera</Accent>
          </h2>
          <p className="text-center text-saas-body text-[15px] leading-relaxed max-w-xl mx-auto mt-4">
            Pense comigo: quantas décadas seu avô viveu com a mesma profissão? Quantas vezes seus pais precisaram se reinventar? E agora… quantas mudanças você enfrentou só nos últimos dois anos?
          </p>

          <div className="mt-12">
            {/* Tab switcher */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {[
                { key: "revolucoes", label: "Revoluções" },
                { key: "adocao", label: "Adoção de Tecnologia" },
                { key: "100m", label: "Tempo até 100M de usuários" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => switchTab(tab.key)}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${
                    activeTab === tab.key
                      ? "border-saas-cyan/50 bg-saas-cyan/10 text-saas-cyan"
                      : "border-white/[0.10] text-saas-faint hover:border-white/[0.20] hover:text-saas-body"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Panel: Revoluções */}
            <div style={{ display: activeTab === "revolucoes" ? "block" : "none" }}>
              <div className="flex flex-col gap-5">
                {[
                  { color: "#7B7C8C", delay: "0.1s", width: "100%", label: "Revolução Agrícola", date: "~10.000 a.C.", span: "~11.800 anos até a próxima revolução", alert: false },
                  { color: "#9A9CAA", delay: "0.3s", width: "15%", label: "Revolução Industrial", date: "~1800 d.C.", span: "~150 anos até a próxima", alert: false },
                  { color: "#20DDEB", delay: "0.5s", width: "5.5%", label: "Revolução Tecnológica", date: "~1950 d.C.", span: "~65 anos até a próxima", alert: false },
                  { color: "#8B7CF6", delay: "0.7s", width: "0.85%", label: "Revolução da IA", date: "~2015 d.C.", span: "Acelerando em meses, não anos", alert: true },
                ].map((r, i) => (
                  <div key={i} className="rev-item" style={{ "--color": r.color, "--delay": r.delay } as React.CSSProperties}>
                    <div className="rev-bar" style={{ "--width": r.width } as React.CSSProperties} />
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mt-2.5">
                      <span className="font-bold text-saas-ink text-base">{r.label}</span>
                      <span className="font-mono text-[11px] text-saas-faint">{r.date}</span>
                      <span className={`text-sm ${r.alert ? "text-saas-violet font-semibold" : "text-saas-body"}`}>{r.span}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center font-mono text-[11px] uppercase tracking-[0.1em] text-saas-faint-2 mt-6">
                O intervalo entre revoluções caiu de milênios → séculos → décadas → anos
              </p>
            </div>

            {/* Panel: Adoção */}
            <div style={{ display: activeTab === "adocao" ? "block" : "none" }}>
              <div className="relative w-full h-[320px] md:h-[340px]">
                <canvas ref={adoptionChartRef} />
              </div>
              <p className="text-center font-mono text-[11px] uppercase tracking-[0.1em] text-saas-faint-2 mt-4">
                Anos até atingir 50% de adoção nos EUA · Fonte: Our World in Data, Visual Capitalist, Epoch AI
              </p>
            </div>

            {/* Panel: 100M */}
            <div style={{ display: activeTab === "100m" ? "block" : "none" }}>
              <div className="relative w-full h-[360px] md:h-[380px]">
                <canvas ref={users100mChartRef} />
              </div>
              <p className="text-center font-mono text-[11px] uppercase tracking-[0.1em] text-saas-faint-2 mt-4">
                Meses até atingir 100 milhões de usuários · Fonte: UBS, Visual Capitalist, Statista
              </p>
            </div>
          </div>

          <blockquote className="mt-12 rounded-r-2xl border-l-2 border-saas-cyan/40 bg-white/[0.02] px-6 py-5 text-saas-body text-[15px] italic leading-relaxed">
            "Em breve teremos uma pessoa fazendo o trabalho de cinco graças à IA. A dúvida é: quem não usar a tecnologia conseguirá acompanhar? Provavelmente não."
          </blockquote>

          <p className="text-center text-saas-body text-[15px] leading-relaxed max-w-xl mx-auto mt-10">
            Em todas as eras da humanidade, quem se destacou foram aqueles que conseguiram dominar novas tecnologias com velocidade.
          </p>
          <p className="text-center font-extrabold text-saas-ink text-xl mt-4">
            Isso, tem até nome. São os <Accent>Early Adopters</Accent>.
          </p>

          {/* Curva de Adoção */}
          <div className={SAAS_CARD + " mt-12 overflow-hidden"}>
            <div className="border-b border-white/[0.08] px-6 md:px-8 py-6">
              <Eyebrow>03 / O mecanismo</Eyebrow>
              <h3 className="mt-3 font-extrabold text-saas-ink text-xl md:text-2xl leading-tight tracking-tight">
                Curva de <Accent>adoção</Accent> tecnológica
              </h3>
              <p className="mt-1.5 text-saas-faint text-sm">Rogers (1962) — onde você está na curva define quanto você vai ganhar</p>
            </div>

            <div className="p-6 md:p-8">
              <div className="flex flex-wrap gap-x-5 gap-y-2 mb-6">
                <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.1em] text-saas-muted">
                  <span className="w-2 h-2 rounded-full bg-saas-muted" />Adotantes por período (sino)
                </span>
                <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.1em] text-saas-cyan">
                  <span className="w-2 h-2 rounded-full bg-saas-cyan" />Adoção acumulada (curva S)
                </span>
                <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.1em] text-saas-violet">
                  <span className="w-2 h-2 rounded-full bg-saas-violet" />Agentes de IA — agora
                </span>
              </div>

              <svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg" className="block w-full">
                <defs>
                  <linearGradient id="bellGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#9A9CAA" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="#9A9CAA" stopOpacity={0.03} />
                  </linearGradient>
                  <linearGradient id="seg0" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#9A9CAA" stopOpacity={0.12} />
                    <stop offset="100%" stopColor="#9A9CAA" stopOpacity={0.02} />
                  </linearGradient>
                  <linearGradient id="seg1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#20DDEB" stopOpacity={0.10} />
                    <stop offset="100%" stopColor="#20DDEB" stopOpacity={0.02} />
                  </linearGradient>
                  <linearGradient id="seg2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#20DDEB" stopOpacity={0.06} />
                    <stop offset="100%" stopColor="#20DDEB" stopOpacity={0.01} />
                  </linearGradient>
                  <linearGradient id="seg3" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#7B7C8C" stopOpacity={0.07} />
                    <stop offset="100%" stopColor="#7B7C8C" stopOpacity={0.01} />
                  </linearGradient>
                  <linearGradient id="seg4" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#7B7C8C" stopOpacity={0.05} />
                    <stop offset="100%" stopColor="#7B7C8C" stopOpacity={0.01} />
                  </linearGradient>
                </defs>

                {/* Segment backgrounds */}
                <rect x="50" y="10" width="15.75" height="180" fill="url(#seg0)" />
                <rect x="65.75" y="10" width="85.05" height="180" fill="url(#seg1)" />
                <rect x="150.8" y="10" width="214.2" height="180" fill="url(#seg2)" />
                <rect x="365" y="10" width="214.2" height="180" fill="url(#seg3)" />
                <rect x="579.2" y="10" width="100.8" height="180" fill="url(#seg4)" />

                {/* Segment dividers */}
                <line x1="65.75" y1="10" x2="65.75" y2="190" stroke="rgba(32,221,235,0.12)" strokeWidth="0.5" strokeDasharray="3,3" />
                <line x1="150.8" y1="10" x2="150.8" y2="190" stroke="rgba(32,221,235,0.12)" strokeWidth="0.5" strokeDasharray="3,3" />
                <line x1="365" y1="10" x2="365" y2="190" stroke="rgba(32,221,235,0.12)" strokeWidth="0.5" strokeDasharray="3,3" />
                <line x1="579.2" y1="10" x2="579.2" y2="190" stroke="rgba(32,221,235,0.12)" strokeWidth="0.5" strokeDasharray="3,3" />

                {/* Segment labels */}
                <text x="58" y="22" fontFamily="IBM Plex Mono,monospace" fontSize="7" fill="#9A9CAA" textAnchor="middle" opacity="0.8">INOV.</text>
                <text x="108" y="22" fontFamily="IBM Plex Mono,monospace" fontSize="7" fill="#20DDEB" textAnchor="middle" opacity="0.8">EARLY ADO.</text>
                <text x="258" y="22" fontFamily="IBM Plex Mono,monospace" fontSize="7" fill="#20DDEB" textAnchor="middle" opacity="0.6">EARLY MAJORITY</text>
                <text x="472" y="22" fontFamily="IBM Plex Mono,monospace" fontSize="7" fill="#7B7C8C" textAnchor="middle" opacity="0.8">LATE MAJORITY</text>
                <text x="630" y="22" fontFamily="IBM Plex Mono,monospace" fontSize="7" fill="#7B7C8C" textAnchor="middle" opacity="0.6">RETARD.</text>

                {/* Axes */}
                <line x1="50" y1="190" x2="680" y2="190" stroke="rgba(32,221,235,0.2)" strokeWidth="0.5" />
                <line x1="50" y1="10" x2="50" y2="190" stroke="rgba(32,221,235,0.15)" strokeWidth="0.5" />
                <line x1="680" y1="10" x2="680" y2="190" stroke="rgba(32,221,235,0.15)" strokeWidth="0.5" />

                {/* Y axis ticks left (bell) */}
                <text x="45" y="193" fontFamily="IBM Plex Mono,monospace" fontSize="8" fill="#9A9CAA" textAnchor="end">0</text>
                <line x1="47" y1="190" x2="50" y2="190" stroke="#9A9CAA" strokeWidth="0.5" />
                <text x="45" y="147" fontFamily="IBM Plex Mono,monospace" fontSize="8" fill="#9A9CAA" textAnchor="end">25%</text>
                <line x1="47" y1="144" x2="50" y2="144" stroke="#9A9CAA" strokeWidth="0.5" />
                <text x="45" y="102" fontFamily="IBM Plex Mono,monospace" fontSize="8" fill="#9A9CAA" textAnchor="end">50%</text>
                <line x1="47" y1="99" x2="50" y2="99" stroke="#9A9CAA" strokeWidth="0.5" />
                <text x="45" y="57" fontFamily="IBM Plex Mono,monospace" fontSize="8" fill="#9A9CAA" textAnchor="end">75%</text>
                <line x1="47" y1="54" x2="50" y2="54" stroke="#9A9CAA" strokeWidth="0.5" />
                <text x="45" y="14" fontFamily="IBM Plex Mono,monospace" fontSize="8" fill="#9A9CAA" textAnchor="end">100%</text>
                <line x1="47" y1="11" x2="50" y2="11" stroke="#9A9CAA" strokeWidth="0.5" />

                {/* Y axis ticks right (cumulative) */}
                <text x="685" y="193" fontFamily="IBM Plex Mono,monospace" fontSize="8" fill="#20DDEB" textAnchor="start">0%</text>
                <text x="685" y="147" fontFamily="IBM Plex Mono,monospace" fontSize="8" fill="#20DDEB" textAnchor="start">25%</text>
                <text x="685" y="102" fontFamily="IBM Plex Mono,monospace" fontSize="8" fill="#20DDEB" textAnchor="start">50%</text>
                <text x="685" y="57" fontFamily="IBM Plex Mono,monospace" fontSize="8" fill="#20DDEB" textAnchor="start">75%</text>
                <text x="685" y="14" fontFamily="IBM Plex Mono,monospace" fontSize="8" fill="#20DDEB" textAnchor="start">100%</text>

                {/* Bell curve fill */}
                <path d="M 50,190 C 60,190 65,189 80,188 C 100,187 110,185 130,182 C 150,178 155,173 170,166 C 185,158 192,150 210,138 C 228,124 238,112 258,95 C 275,80 285,66 305,50 C 320,38 332,27 345,20 C 352,16 358,13 365,11 C 372,13 378,16 385,20 C 398,27 410,38 425,50 C 445,66 455,80 472,95 C 492,112 502,124 520,138 C 538,150 545,158 560,166 C 575,173 580,178 600,182 C 620,185 630,187 650,188 C 665,189 670,190 680,190 Z" fill="url(#bellGrad)" />

                {/* Bell curve stroke */}
                <path d="M 50,190 C 60,190 65,189 80,188 C 100,187 110,185 130,182 C 150,178 155,173 170,166 C 185,158 192,150 210,138 C 228,124 238,112 258,95 C 275,80 285,66 305,50 C 320,38 332,27 345,20 C 352,16 358,13 365,11 C 372,13 378,16 385,20 C 398,27 410,38 425,50 C 445,66 455,80 472,95 C 492,112 502,124 520,138 C 538,150 545,158 560,166 C 575,173 580,178 600,182 C 620,185 630,187 650,188 C 665,189 670,190 680,190" fill="none" stroke="#9A9CAA" strokeWidth="2.5" />

                {/* Cumulative S-curve */}
                <path d="M 50,189 C 70,188 90,187 110,186 C 130,184 145,181 160,177 C 175,172 185,165 200,156 C 215,146 225,135 240,122 C 258,107 268,95 285,82 C 302,68 315,57 335,46 C 348,38 356,34 365,31 C 374,28 382,26 395,23 C 410,20 422,17 440,14 C 458,12 470,11 490,11 C 520,11 550,11 580,11 C 610,11 640,11 660,11 C 668,11 674,11 680,11" fill="none" stroke="#20DDEB" strokeWidth="2" strokeLinecap="round" />

                {/* AGORA line */}
                <line x1="108" y1="10" x2="108" y2="190" stroke="#8B7CF6" strokeWidth="1.5" strokeDasharray="4,4" />
                <rect x="86" y="9" width="44" height="15" rx="4" fill="#8B7CF6" />
                <text x="108" y="20" fontFamily="IBM Plex Mono,monospace" fontSize="8" fill="#F5F5FA" textAnchor="middle" fontWeight="500">AGORA</text>
                <circle cx="108" cy="183" r="4" fill="#8B7CF6" />
                <circle cx="108" cy="178" r="4" fill="#8B7CF6" opacity="0.6" />
              </svg>

              {/* Segment cards */}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {[
                  { label: "Inovadores", pct: "2,5%", desc: "Constroem antes do mercado existir", color: "#9A9CAA" },
                  { label: "Early Adopters", pct: "13,5%", desc: "Líderes que vencem pela vantagem", color: "#20DDEB" },
                  { label: "Early Majority", pct: "34%", desc: "Adotam depois que a prova existe", color: "#20DDEB" },
                  { label: "Late Majority", pct: "34%", desc: "Entram por pressão, não escolha", color: "#7B7C8C" },
                  { label: "Retardatários", pct: "16%", desc: "Chegam quando a vantagem acabou", color: "#7B7C8C" },
                ].map((seg) => (
                  <div key={seg.label} className="flex-1 min-w-[110px] rounded-xl border border-white/[0.08] bg-white/[0.02] p-3">
                    <div className="font-mono text-[9px] uppercase tracking-[0.1em] mb-1" style={{ color: seg.color }}>{seg.label}</div>
                    <div className="font-extrabold text-lg leading-none mb-1" style={{ color: seg.color }}>{seg.pct}</div>
                    <div className="text-saas-faint text-[10.5px] leading-snug">{seg.desc}</div>
                  </div>
                ))}
              </div>

              {/* Now bar */}
              <div className="flex items-center gap-3 mt-4 rounded-xl border border-saas-violet/30 bg-saas-violet/[0.08] px-4 py-3">
                <div className="w-7 h-7 rounded-full border border-saas-violet flex items-center justify-center flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-saas-violet animate-pulse" />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-saas-violet text-[11px] uppercase tracking-[0.06em]">Agentes de IA — Posição Atual (2025–2026)</div>
                  <div className="text-saas-faint text-[11px] mt-1">A janela entre Early Adopters e Early Majority está aberta agora. Quem entrar hoje ainda pega a vantagem de quem chegou cedo.</div>
                </div>
                <div className="font-extrabold text-saas-violet text-lg flex-shrink-0">~8%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ MID CAPTURE ══════ */}
      <section className="border-y border-saas-cyan/15 bg-saas-card/60 py-16 md:py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-extrabold text-saas-ink text-[clamp(24px,3.2vw,34px)] leading-[1.15] tracking-tight">
            "Tá, Rodrigo. <Accent>O que eu faço?</Accent>"
          </h2>
          <p className="mt-4 text-saas-body text-[15px] leading-relaxed max-w-lg mx-auto">
            É exatamente para responder essa pergunta que criei a <strong className="text-saas-ink font-semibold">Imersão em Claude</strong>: 3 aulas onde eu vou te mostrar, na prática, como usar a IA que executa funções para sair na frente de quem ainda opera no manual.
          </p>
          <div className="mt-8 flex justify-center">
            <button className={BTN_CTA} onClick={() => handleCTA("mid")}>
              QUERO PARTICIPAR DA IMERSÃO
              <span className={BTN_CTA_SUB}>3 aulas por apenas R$97</span>
            </button>
          </div>
        </div>
      </section>

      {/* ══════ 3 AULAS ══════ */}
      <section className="border-t border-white/[0.06] py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-4">
            <Eyebrow>Imersão em Claude</Eyebrow>
          </div>
          <h2 className="text-center font-extrabold text-saas-ink text-[clamp(24px,3.4vw,38px)] leading-[1.15] tracking-tight">
            3 aulas que podem mudar<br className="hidden sm:block" /> o rumo da sua <Accent>vida</Accent>
          </h2>

          <div className="mt-12">
            {aulas.map((a) => (
              <div key={a.n} className={SAAS_CARD + " p-6 md:p-7 mb-4 flex gap-5 md:gap-6 items-start transition-colors hover:border-white/[0.18]"}>
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-extrabold text-sm border ${
                    a.accent === "cyan"
                      ? "bg-saas-cyan/10 border-saas-cyan/30 text-saas-cyan"
                      : a.accent === "violet"
                      ? "bg-saas-violet/10 border-saas-violet/30 text-saas-violet"
                      : "bg-white/[0.05] border-white/[0.15] text-saas-muted"
                  }`}
                >
                  {a.n}
                </div>
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-saas-faint mb-1.5">{a.tag}</div>
                  <h3 className="font-extrabold text-saas-ink text-lg md:text-xl leading-snug tracking-tight mb-2">{a.title}</h3>
                  <p className="text-saas-body text-sm leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ QUEM É O RODRIGO ══════ */}
      <section className="border-t border-white/[0.06] py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-center font-mono text-[11px] uppercase tracking-[0.14em] text-saas-faint mb-3">
            Quem vai conduzir a imersão
          </p>
          <h2 className="text-center font-extrabold text-saas-ink text-[clamp(24px,3.4vw,38px)] leading-[1.15] tracking-tight">
            Nós estamos juntos<br className="hidden sm:block" /> nesse barco.
          </h2>

          <div className={SAAS_CARD + " mt-10 p-7 md:p-9 flex flex-col md:flex-row gap-6 md:gap-8 items-start"}>
            <img
              loading="lazy"
              src={rodrigoPhoto}
              alt="Rodrigo Albuquerque"
              className="w-20 h-20 rounded-full object-cover flex-shrink-0 border border-white/[0.10]"
            />
            <div>
              <div className="font-extrabold text-saas-ink text-lg mb-1">Rodrigo Albuquerque</div>
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-saas-cyan mb-4">
                Empreendedor · Entusiasta de IA · Estrategista de Negócios
              </div>
              <div className="text-saas-body text-sm leading-relaxed space-y-4">
                <p>Liderei equipes que venderam mais de R$100 milhões por ano. Gerenciei times de mais de 50 pessoas. Hoje, uso IA todos os dias para construir sistemas, automatizar operações e fechar contratos.</p>
                <p>Não sou desenvolvedor. Não sou guru de 22 anos que mora com os pais. Sou empreendedor, pai, cristão e estou com a minha esposa há mais de 10 anos. Assim como você, tenho contas para pagar e zero tempo a perder.</p>
                <p>
                  Quando vi a velocidade dessa revolução, não fiquei debatendo se valia a pena. Parei tudo, testei dezenas de ferramentas e coloquei para rodar. O <strong className="text-saas-cyan font-semibold">Claude</strong> é, de longe, a IA mais poderosa atualmente. Ela não só responde perguntas. Ela executa tarefas. Constrói sistemas e faz entregas inteiras sozinha. Criei essa imersão para mostrar exatamente o que descobri.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ PRA QUEM É ══════ */}
      <section className="border-t border-white/[0.06] py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center font-extrabold text-saas-ink text-[clamp(24px,3.4vw,38px)] leading-[1.15] tracking-tight">
            Esta imersão é para <Accent>você</Accent> se…
          </h2>

          <ul className="mt-8 space-y-3 max-w-2xl mx-auto">
            {forYouItems.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-saas-body text-[15px] leading-relaxed border-b border-white/[0.06] pb-3 last:border-none"
              >
                <CheckCircle size={16} className="text-saas-green mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ══════ OFERTA ══════ */}
      <section id="oferta" className="relative border-t border-white/[0.06] py-20 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[560px] h-[360px] rounded-full bg-saas-cyan/10 blur-[120px]" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="font-extrabold text-saas-ink text-[clamp(26px,3.6vw,42px)] leading-[1.12] tracking-tight">
            O futuro pertence a quem<br className="hidden sm:block" /> age <Accent>agora</Accent>.
          </h2>
          <p className="mt-5 text-saas-body text-[15px] leading-relaxed max-w-xl mx-auto">
            Em 3 aulas, você vai entender a revolução que está redesenhando o mercado, ver o Claude construindo um sistema ao vivo na sua frente, e sair com um plano concreto de monetização independente do seu nível técnico.
          </p>

          <div className={SAAS_CARD + " max-w-md mx-auto mt-10 p-8 md:p-10 text-center"}>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-saas-cyan/10 border border-saas-cyan/30 text-saas-cyan font-mono text-[10px] uppercase tracking-[0.16em] px-3 py-1 mb-6">
              Vagas limitadas
            </span>
            <p className="text-saas-muted text-sm mb-2">Imersão em Claude — 3 aulas ao vivo</p>
            <p className="text-saas-faint text-sm line-through mb-1">De R$ 297,00</p>
            <p className={SAAS_GRADIENT_TEXT + " font-extrabold text-[52px] md:text-[60px] leading-none mb-2"}>R$ 97</p>
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-saas-faint mb-8">ou 12× de R$ 9,70 no cartão</p>
            <button className={BTN_CTA + " w-full"} onClick={() => handleCTA("pricing")}>
              GARANTIR MINHA VAGA AGORA
              <span className={BTN_CTA_SUB}>Acesso imediato após a confirmação do pagamento</span>
            </button>
            <p className="mt-5 text-saas-faint text-xs">Pagamento seguro · Garantia de 7 dias · Acesso imediato</p>
          </div>

          <div className="max-w-md mx-auto mt-6 text-center py-8">
            <Lock className="w-7 h-7 text-saas-cyan mx-auto mb-3" strokeWidth={1.5} />
            <p className="font-extrabold text-saas-ink text-base mb-2">Garantia incondicional de 7 dias</p>
            <p className="text-saas-faint text-sm leading-relaxed max-w-xs mx-auto">
              Assista às aulas, aplique o que aprender. Se dentro de 7 dias você sentir que não valeu cada centavo, basta pedir o reembolso integral. Sem perguntas, sem burocracia.
            </p>
          </div>
        </div>
      </section>

      {/* ══════ FAQ ══════ */}
      <section className="border-t border-white/[0.06] py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center font-extrabold text-saas-ink text-[clamp(24px,3.2vw,36px)] leading-[1.15] tracking-tight mb-10">
            Perguntas frequentes
          </h2>

          {faqItems.map((faq, i) => (
            <details key={i} className="group border-b border-white/[0.08] py-5">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-semibold text-saas-ink text-base md:text-lg [&::-webkit-details-marker]:hidden">
                {faq.q}
                <span className="relative w-4 h-4 flex-shrink-0 text-saas-cyan">
                  <Plus className="w-4 h-4 group-open:hidden" />
                  <Minus className="w-4 h-4 hidden group-open:block" />
                </span>
              </summary>
              <p className="mt-3 text-saas-body text-sm leading-relaxed pr-6">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ══════ FOOTER ══════ */}
      <footer className="border-t border-white/[0.06] py-10 px-4 text-center">
        <p className="font-extrabold text-saas-ink text-sm mb-2">IMERSÃO EM CLAUDE</p>
        <p className="text-saas-faint text-xs leading-relaxed">© 2026 Rodrigo Albuquerque · BA Consultoria · Todos os direitos reservados</p>
        <p className="text-saas-faint-2 text-[11px] mt-2 max-w-xl mx-auto leading-relaxed">
          Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho é meramente ilustrativa.
        </p>
      </footer>
    </div>
  );
};

export default ImersaoClaude;
