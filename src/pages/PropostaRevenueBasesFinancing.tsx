import { useEffect, useRef } from "react";
import diegoBarretoPhoto from "@/assets/mentors/diego-barreto.webp";
import pedroSommaPhoto from "@/assets/mentors/pedro-somma.webp";
import vaboPhoto from "@/assets/mentors/vabo.webp";
import joaoOliverioPhoto from "@/assets/mentors/joao-oliverio.webp";
import joseDiogoPhoto from "@/assets/mentors/jose-diogo.webp";
import proofHotmart from "@/assets/proof-hotmart-vendas.png";
import proofInstagram from "@/assets/proof-instagram-profile.jpg";
import proofTikTok from "@/assets/proof-tiktok-profile.jpg";
import PropostaLayout from "@/components/pb/PropostaLayout";
import { Accent, Eyebrow, StatCard, SAAS_BTN_PRIMARY, SAAS_CARD } from "@/components/saas/ui";

/* ── Dados fixos ───────────────────────────────────────────── */

const mentors = [
  {
    name: "Diego Barreto",
    role: "CEO — iFood",
    photo: diegoBarretoPhoto,
    bio: 'Autor do best-seller "Nova Economia," lidera a expansão e inovação no iFood.',
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
    bio: "Empreendedor serial, investidor e autor de 'Falar em público é para você!'.",
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

const roasRows = [
  { roas: 3, label: "pessimista", retorno: "R$2.295", lucro: "-R$705", roi: "-23.5%", positive: false },
  { roas: 4, label: "breakeven", retorno: "R$3.060", lucro: "+R$60", roi: "+2%", positive: null },
  { roas: 5, label: "cenário provável", retorno: "R$3.825", lucro: "+R$825", roi: "+27.5%", positive: true },
  { roas: 7, label: "cenário provável", retorno: "R$5.355", lucro: "+R$2.355", roi: "+78.5%", positive: true },
  { roas: 9, label: "otimista", retorno: "R$6.885", lucro: "+R$3.885", roi: "+129.5%", positive: true },
  { roas: 12, label: "otimista", retorno: "R$9.180", lucro: "+R$6.180", roi: "+206%", positive: true },
];

const terms = [
  {
    title: "Investimento mínimo",
    value: "R$3.000/mês",
    detail: "100% aplicado em mídia paga (Meta Ads). Sem taxa de gestão. Compromisso mínimo de 3 meses.",
  },
  {
    title: "Seu retorno",
    value: "30% da receita líquida",
    detail: "Descontados impostos e taxa da plataforma. Split automático via coprodutor Hotmart.",
  },
  {
    title: "Rastreamento",
    value: "UTM exclusiva + link de coprodutor",
    detail: "Cada investidor tem suas próprias UTMs. Toda venda atribuída ao seu cohort é registrada automaticamente na Hotmart.",
  },
  {
    title: "Janela de atribuição",
    value: "12 meses após captação",
    detail: "Todo lead que entrou pelas suas campanhas gera retorno por 12 meses. Após esse período, o lead sai do seu cohort.",
  },
  {
    title: "Escopo de produtos",
    value: "Esteira completa",
    detail: "Você recebe 30% de tudo que o lead comprar — front-end, curso, mentoria, consultoria. Toda a esteira de produtos.",
  },
  {
    title: "Pagamento",
    value: "Split automático Hotmart",
    detail: "A Hotmart faz o split do pagamento automaticamente. Você recebe na sua conta sem intermediários.",
  },
];

const faqs = [
  {
    q: "E se o funil não vender?",
    a: "Este é um investimento de risco, como qualquer outro. A diferença é que o tráfego gera dados em tempo real — se uma campanha não performa, otimizamos ou paramos. Você acompanha tudo em um dashboard transparente.",
  },
  {
    q: "Eu tenho controle sobre as campanhas?",
    a: "Você recebe relatórios semanais com métricas de performance (CPL, leads, vendas). A gestão das campanhas é feita pela minha equipe — isso é o que garante a qualidade e otimização contínua.",
  },
  {
    q: "Posso investir mais que R$3k/mês?",
    a: "Sim. Não há teto de investimento. Quanto mais tráfego, mais leads, mais vendas, mais retorno. O modelo escala linearmente.",
  },
  {
    q: "Posso pausar o investimento?",
    a: "Sim, após o prazo mínimo de 3 meses. Esse período é necessário para maturação das campanhas — é o tempo que leva para otimizar criativos, segmentações e encontrar o ponto ideal de performance. Após os 3 meses, você pode pausar ou parar quando quiser. Os cohorts já gerados continuam ativos pela janela de 12 meses — você continua recebendo das vendas dos leads já captados.",
  },
  {
    q: "Como sei que as vendas são reais?",
    a: "Todas as vendas são processadas pela Hotmart, uma das maiores plataformas de infoprodutos do Brasil. Você terá acesso como coprodutor e pode verificar cada venda e comissão em tempo real dentro da plataforma.",
  },
];

/* ── Canvas Chart ──────────────────────────────────────────── */

function drawCompoundChart(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.parentElement!.getBoundingClientRect();
  const W = rect.width;
  const H = 460;
  canvas.width = W * dpr;
  canvas.height = H * dpr;
  canvas.style.width = W + "px";
  canvas.style.height = H + "px";
  ctx.scale(dpr, dpr);

  const monthlyInvest = 3000;
  const roas = 15;
  const liquidRate = 0.85;
  const investorShare = 0.30;
  const investMonths = 12;
  const totalMonths = 20;

  const revDist = [0.20, 0.14, 0.12, 0.09, 0.09, 0.09, 0.06, 0.06, 0.06, 0.04, 0.04, 0.01];

  const returnAccum: number[] = [];
  const monthlyReturnArr: number[] = [];

  for (let m = 0; m < totalMonths; m++) {
    let totalRevenue = 0;
    for (let c = 0; c < Math.min(m + 1, investMonths); c++) {
      const age = m - c;
      if (age < 12) {
        totalRevenue += monthlyInvest * roas * revDist[age];
      }
    }
    const investorReturn = totalRevenue * liquidRate * investorShare;
    monthlyReturnArr.push(investorReturn);
    returnAccum.push((m > 0 ? returnAccum[m - 1] : 0) + investorReturn);
  }

  const padL = 80, padR = 40, padT = 40, padB = 60;
  const chartW = W - padL - padR;
  const chartH = H - padT - padB;
  const maxVal = Math.max(...returnAccum) * 1.12;

  function xPos(i: number) { return padL + (i / (totalMonths - 1)) * chartW; }
  function yPos(v: number) { return padT + chartH - (v / maxVal) * chartH; }

  ctx.strokeStyle = "rgba(255,255,255,0.06)";
  ctx.lineWidth = 1;
  for (let i = 0; i <= 6; i++) {
    const v = (maxVal / 6) * i;
    const y = yPos(v);
    ctx.beginPath();
    ctx.moveTo(padL, y);
    ctx.lineTo(W - padR, y);
    ctx.stroke();
    ctx.fillStyle = "rgba(255,255,255,0.3)";
    ctx.font = "11px 'IBM Plex Mono', monospace";
    ctx.textAlign = "right";
    ctx.fillText("R$" + (v / 1000).toFixed(0) + "k", padL - 10, y + 4);
  }

  ctx.textAlign = "center";
  for (let i = 0; i < totalMonths; i++) {
    if (i % 3 === 0 || i === totalMonths - 1) {
      ctx.fillStyle = "rgba(255,255,255,0.3)";
      ctx.font = "11px 'IBM Plex Mono', monospace";
      ctx.fillText("M" + (i + 1), xPos(i), H - padB + 24);
    }
  }

  const investEndX = xPos(investMonths - 1);
  ctx.fillStyle = "rgba(32,221,235,0.02)";
  ctx.fillRect(padL, padT, investEndX - padL, chartH);

  ctx.strokeStyle = "rgba(32,221,235,0.15)";
  ctx.lineWidth = 1;
  ctx.setLineDash([4, 4]);
  ctx.beginPath();
  ctx.moveTo(investEndX, padT);
  ctx.lineTo(investEndX, padT + chartH);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = "rgba(32,221,235,0.4)";
  ctx.font = "500 9px 'IBM Plex Mono', monospace";
  ctx.textAlign = "center";
  ctx.fillText("INVESTINDO", padL + (investEndX - padL) / 2, padT + 16);
  ctx.fillText("COHORTS ATIVOS", investEndX + (W - padR - investEndX) / 2, padT + 16);

  const barW = Math.max(chartW / totalMonths * 0.5, 8);
  for (let i = 0; i < totalMonths; i++) {
    const barH = (monthlyReturnArr[i] / maxVal) * chartH;
    const x = xPos(i) - barW / 2;
    const y = padT + chartH - barH;
    ctx.fillStyle = "rgba(32,221,235,0.10)";
    ctx.fillRect(x, y, barW, barH);
    ctx.strokeStyle = "rgba(32,221,235,0.3)";
    ctx.lineWidth = 0.5;
    ctx.strokeRect(x, y, barW, barH);
  }

  ctx.strokeStyle = "rgba(32,221,235,0.6)";
  ctx.lineWidth = 2;
  ctx.setLineDash([6, 4]);
  ctx.beginPath();
  for (let i = 0; i < totalMonths; i++) {
    const inv = i < investMonths ? monthlyInvest : 0;
    i === 0 ? ctx.moveTo(xPos(i), yPos(inv)) : ctx.lineTo(xPos(i), yPos(inv));
  }
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = "rgba(32,221,235,0.8)";
  ctx.font = "600 11px 'IBM Plex Mono', monospace";
  ctx.textAlign = "left";
  ctx.fillText("R$3k/mês", xPos(0) + 6, yPos(monthlyInvest) - 8);

  ctx.beginPath();
  ctx.moveTo(xPos(0), yPos(0));
  for (let i = 0; i < totalMonths; i++) ctx.lineTo(xPos(i), yPos(returnAccum[i]));
  ctx.lineTo(xPos(totalMonths - 1), yPos(0));
  ctx.closePath();
  const grad = ctx.createLinearGradient(0, padT, 0, padT + chartH);
  grad.addColorStop(0, "rgba(32,221,235,0.18)");
  grad.addColorStop(1, "rgba(32,221,235,0.01)");
  ctx.fillStyle = grad;
  ctx.fill();

  ctx.strokeStyle = "#20DDEB";
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  for (let i = 0; i < totalMonths; i++) {
    i === 0 ? ctx.moveTo(xPos(i), yPos(returnAccum[i])) : ctx.lineTo(xPos(i), yPos(returnAccum[i]));
  }
  ctx.stroke();

  for (let i = 0; i < totalMonths; i++) {
    if (i % 3 === 0 || i === totalMonths - 1) {
      ctx.beginPath();
      ctx.arc(xPos(i), yPos(returnAccum[i]), 4, 0, Math.PI * 2);
      ctx.fillStyle = "#20DDEB";
      ctx.fill();
      ctx.strokeStyle = "#0A0A13";
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }
  }

  const lastI = totalMonths - 1;
  ctx.fillStyle = "#20DDEB";
  ctx.font = "700 14px 'IBM Plex Mono', monospace";
  ctx.textAlign = "left";
  ctx.fillText("R$" + (returnAccum[lastI] / 1000).toFixed(0) + "k", xPos(lastI) + 10, yPos(returnAccum[lastI]) - 4);
}

/* ── Componente ────────────────────────────────────────────── */

const PropostaRevenueBasesFinancing = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    drawCompoundChart(canvasRef.current);
    const handleResize = () => { if (canvasRef.current) drawCompoundChart(canvasRef.current); };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <PropostaLayout
      cliente="Investidor"
      projeto="Revenue-Based Financing"
    >
      {/* ══════════ VISÃO GERAL ══════════ */}
      <div className="border-t border-white/[0.06] py-16 space-y-8">
        <Eyebrow>01 · Visão Geral</Eyebrow>
        <p className="text-saas-body text-[17px] leading-relaxed max-w-2xl">
          Um modelo de Revenue-Based Financing onde você financia a distribuição de produtos validados e recebe uma fatia direta das vendas.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { value: "30%", label: "Da receita líquida" },
            { value: "R$3k", label: "Investimento mínimo/mês" },
            { value: "12 meses", label: "Janela de atribuição" },
          ].map((m) => (
            <StatCard key={m.label} value={m.value} label={m.label} accent />
          ))}
        </div>
      </div>

      {/* ══════════ COMO FUNCIONA ══════════ */}
      <div className="border-t border-white/[0.06] py-16 space-y-8">
        <Eyebrow>02 · Modelo</Eyebrow>
        <h2 className="font-extrabold text-saas-ink tracking-tight leading-[1.12] text-[clamp(26px,3.4vw,42px)]">Como funciona</h2>
        <p className="text-saas-body text-[17px] leading-relaxed max-w-2xl">
          Você investe um valor mensal em tráfego pago. Esse valor financia campanhas que geram leads exclusivos para o seu cohort. Todo lead captado pelas suas campanhas é rastreado via UTM + link de coprodutor na Hotmart — e você recebe 30% de tudo que esse lead comprar nos próximos 12 meses.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { n: "01", title: "Você investe", text: "Define um valor mensal (mínimo R$3k) que será integralmente aplicado em anúncios no Meta Ads. Sem taxa de gestão, sem fee — 100% vai pra mídia." },
            { n: "02", title: "Campanhas rodam", text: "As campanhas são criadas e otimizadas pela minha equipe de tráfego. Cada campanha carrega UTMs exclusivas do seu cohort para rastreamento preciso." },
            { n: "03", title: "Leads compram", text: "Cada lead gerado pelas suas campanhas entra na minha esteira de produtos. Toda venda é registrada automaticamente na Hotmart com split de coprodutor." },
            { n: "04", title: "Você recebe", text: "30% da receita líquida (pós-impostos e taxa Hotmart) é creditada automaticamente na sua conta. Sem burocracia, sem cobrança manual." },
          ].map((s) => (
            <div key={s.n} className={SAAS_CARD + " p-6 relative"}>
              <span className="font-extrabold text-[56px] text-white/[0.07] absolute top-3 right-5 leading-none select-none">{s.n}</span>
              <h3 className="font-bold text-saas-ink text-lg mb-3">{s.title}</h3>
              <p className="text-saas-body text-sm leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════ ESTEIRA DE PRODUTOS ══════════ */}
      <div className="border-t border-white/[0.06] py-16 space-y-8">
        <Eyebrow>03 · Esteira de Produtos</Eyebrow>
        <h2 className="font-extrabold text-saas-ink tracking-tight leading-[1.12] text-[clamp(26px,3.4vw,42px)]">Onde seu investimento gera receita</h2>
        <p className="text-saas-body text-[17px] leading-relaxed max-w-2xl">
          Os leads captados pelo seu tráfego entram em uma esteira progressiva de produtos. Quanto maior o valor percebido, maior o ticket — e o seu retorno cresce com cada upsell natural ao longo dos 12 meses.
        </p>
        <div className="space-y-3">
          {[
            { name: "Imersão em Claude", desc: "3 aulas ao vivo — produto de entrada, alto volume de conversão", ticket: "R$97", badge: "Front-end" },
            { name: "A Revolução", desc: "Curso gravado, 8 módulos — venda digital sem call", ticket: "R$1.997", badge: "Core" },
            { name: "Super Agentes", desc: "Mentoria em grupo com calls ao vivo — venda via closer", ticket: "R$8.000", badge: "Back-end" },
            { name: "Consultoria de OS", desc: "Consultoria individual de construção de sistema operacional com IA", ticket: "R$36.000", badge: "High-end" },
          ].map((p) => (
            <div key={p.name} className={SAAS_CARD + " p-5 flex flex-wrap items-center justify-between gap-4"}>
              <div>
                <div className="font-bold text-saas-ink text-lg">{p.name}</div>
                <div className="text-[13px] text-saas-faint mt-1">{p.desc}</div>
              </div>
              <div className="flex items-center gap-4">
                <Accent className="text-[26px] font-extrabold">{p.ticket}</Accent>
                <span className="rounded-full border border-white/[0.10] bg-white/[0.03] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-saas-cyan">{p.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════ PROVA DE TRAÇÃO ══════════ */}
      <div className="border-t border-white/[0.06] py-16 space-y-8">
        <Eyebrow>04 · Prova de Tração</Eyebrow>
        <h2 className="font-extrabold text-saas-ink tracking-tight leading-[1.12] text-[clamp(26px,3.4vw,42px)]">Quem você vai financiar</h2>
        <p className="text-saas-body text-[17px] leading-relaxed max-w-2xl">
          Você não está apostando em uma ideia. Está financiando a distribuição de um ecossistema que já vende, já tem base e já tem audiência.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { value: "580+", label: "Alunos na base" },
            { value: "28.1K", label: "Seguidores Instagram" },
            { value: "32.3K", label: "Seguidores TikTok" },
          ].map((m) => (
            <div key={m.label} className="rounded-2xl border border-white/[0.09] bg-white/[0.02] p-6 text-center">
              <div className="text-[clamp(30px,4vw,44px)] font-extrabold leading-none bg-gradient-to-r from-saas-cyan to-saas-violet bg-clip-text text-transparent">{m.value}</div>
              <div className="mt-2.5 text-[12.5px] text-saas-faint">{m.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4">
          {[
            { src: proofHotmart, alt: "580 vendas na Hotmart" },
            { src: proofInstagram, alt: "Perfil Instagram 28.1K seguidores" },
            { src: proofTikTok, alt: "Perfil TikTok 32.3K seguidores" },
          ].map((img) => (
            <div key={img.alt} className="rounded-2xl border border-white/[0.09] overflow-hidden aspect-[4/3]">
              <img
                src={img.src}
                loading="lazy"
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <p className="text-saas-muted text-sm leading-relaxed">
          Esses números foram construídos organicamente, sem investimento em tráfego pago. O produto já se provou — agora imagine o que acontece quando colocamos distribuição paga por trás disso.
        </p>
      </div>

      {/* ══════════ SOBRE MIM ══════════ */}
      <div className="border-t border-white/[0.06] py-16 space-y-8">
        <Eyebrow>05 · Quem Está Por Trás</Eyebrow>
        <h2 className="font-extrabold text-saas-ink tracking-tight leading-[1.12] text-[clamp(26px,3.4vw,42px)]">Sobre mim</h2>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1 space-y-4">
            <p className="text-saas-body text-[17px] leading-relaxed">
              Meu nome é Rodrigo Albuquerque. Sou empresário, cristão, marido e pai do Edmundo (que acabou de completar 2 meses). Sou CEO de uma holding com três unidades de negócio focada em inteligência artificial, empreendedorismo e desenvolvimento pessoal.
            </p>
            <p className="text-saas-body text-[17px] leading-relaxed">
              Nos últimos anos, atendi mais de 200 clientes em 7 países diferentes. Formei mais de 580 alunos em diferentes programas de IA e construí uma audiência de mais de 60 mil seguidores entre Instagram e TikTok — tudo orgânico, sem um real investido em anúncios pro meu próprio perfil.
            </p>
            <p className="text-saas-body text-[17px] leading-relaxed">
              Minha especialidade é construir sistemas operacionais com IA para empresas — automatizar processos, eliminar gargalos operacionais e criar estruturas que escalam sem depender proporcionalmente de mais equipe. É o que eu ensino nos meus cursos e é o que eu aplico no meu próprio negócio.
            </p>
            <p className="text-saas-ink text-[17px] leading-relaxed font-semibold">
              A oportunidade que estou oferecendo aqui é simples: eu já tenho o produto, a audiência e o funil. O seu capital será utilizado para potencializar algo que já existe. E é por isso que o retorno é tão eficiente.
            </p>
          </div>
          <div className={SAAS_CARD + " p-6 min-w-[260px]"}>
            <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-saas-cyan mb-5">Trajetória</div>
            {[
              { name: "200+ clientes atendidos", desc: "Consultoria, Marketing e IA" },
              { name: "580+ alunos formados", desc: "Cursos de IA aplicada a negócios" },
              { name: "60K+ seguidores", desc: "Crescimento 100% orgânico" },
            ].map((t) => (
              <div key={t.name} className="mb-4">
                <div className="font-bold text-saas-ink text-base">{t.name}</div>
                <div className="text-xs text-saas-faint">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════ MENTORES ══════════ */}
      <div className="border-t border-white/[0.06] py-16 space-y-8">
        <Eyebrow>06 · Referências</Eyebrow>
        <h2 className="font-extrabold text-saas-ink tracking-tight leading-[1.12] text-[clamp(26px,3.4vw,42px)]">Meus Mentores e Professores</h2>
        <p className="text-saas-body text-[17px] leading-relaxed">Aprendi diretamente com alguns dos maiores líderes do mercado brasileiro.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {mentors.map((m) => (
            <div key={m.name} className={SAAS_CARD + " p-4 text-center"}>
              <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-3 border border-white/[0.09]">
                <img
                  loading="lazy"
                  src={m.photo}
                  alt={m.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="font-bold text-saas-ink text-sm mb-1">{m.name}</div>
              <div className="font-mono text-[9px] uppercase tracking-[0.14em] text-saas-cyan mb-2">{m.role}</div>
              <div className="text-saas-faint text-xs leading-relaxed">{m.bio}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════ CENÁRIOS DE RETORNO ══════════ */}
      <div className="border-t border-white/[0.06] py-16 space-y-8">
        <Eyebrow>07 · Projeções</Eyebrow>
        <h2 className="font-extrabold text-saas-ink tracking-tight leading-[1.12] text-[clamp(26px,3.4vw,42px)]">Cenários de retorno</h2>
        <p className="text-saas-body text-[17px] leading-relaxed max-w-2xl">
          A tabela abaixo mostra o seu retorno{" "}
          <span className="text-saas-cyan font-medium">somente com vendas do produto de entrada</span>{" "}
          — sem contar nenhum upsell. É o cenário mais conservador possível.
        </p>

        <div>
          <div className="font-bold text-saas-ink text-xl mb-1">Retorno mensal — somente front-end</div>
          <div className="text-[13px] text-saas-faint mb-4">Investimento: R$3.000/mês</div>

          <div className="overflow-x-auto rounded-2xl border border-white/[0.09]">
            <table className="w-full border-collapse min-w-[400px]">
              <thead>
                <tr className="border-b border-white/[0.08]">
                  {["ROAS", "Seu retorno", "Lucro", "ROI"].map((h) => (
                    <th key={h} className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-muted py-3 px-4 text-center bg-saas-card">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {roasRows.map((row) => {
                  const isRed = row.positive === false;
                  const valueClass = isRed ? "text-red-400" : "text-saas-cyan";
                  return (
                    <tr key={row.roas} className="border-b border-white/[0.06] last:border-none hover:bg-white/[0.02] transition-colors">
                      <td className="py-3 px-4 text-center">
                        <div className="font-extrabold text-saas-ink text-xl">{row.roas}</div>
                        <div className="text-[11px] text-saas-faint">{row.label}</div>
                      </td>
                      <td className={`py-3 px-4 text-center font-bold text-[15px] ${valueClass}`}>{row.retorno}</td>
                      <td className={`py-3 px-4 text-center font-bold text-[15px] ${valueClass}`}>{row.lucro}</td>
                      <td className={`py-3 px-4 text-center font-bold text-[15px] ${valueClass}`}>{row.roi}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className={SAAS_CARD + " p-5"}>
          <p className="text-saas-cyan leading-relaxed text-sm">
            A tabela acima mostra APENAS o retorno do front-end. Cada lead que entra pelo funil continua na base por 12 meses e pode comprar produtos de até R$36.000. O retorno real é significativamente maior.
          </p>
        </div>

        <div>
          <div className="font-bold text-saas-ink text-xl mb-2">O efeito real: LTV da esteira completa</div>
          <p className="text-saas-body text-[17px] leading-relaxed mb-2">
            Os leads que entram pelo front-end percorrem uma esteira com 4 produtos ao longo de 12 meses. Cada novo mês de investimento cria um novo cohort — e os cohorts anteriores continuam gerando receita. O gráfico abaixo mostra o efeito composto de 12 meses de investimento contínuo.
          </p>
          <p className="font-mono text-[10px] text-saas-faint mb-6">
            Simulação com upsells progressivos ao longo de 12 meses por cohort (A Revolução R$1.997, Super Agentes R$8.000, Consultoria R$36.000).
          </p>

          <div>
            <canvas ref={canvasRef} style={{ width: "100%", height: 460, display: "block" }} />
          </div>

          <div className="flex flex-wrap gap-6 mt-5">
            {[
              { color: "#20DDEB", label: "INVESTIMENTO MENSAL" },
              { color: "#20DDEB", label: "RETORNO ACUMULADO" },
              { color: "rgba(32,221,235,0.5)", label: "RETORNO MENSAL" },
            ].map((l) => (
              <div key={l.label} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm" style={{ background: l.color }} />
                <span className="font-mono text-[10px] text-saas-faint">{l.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={SAAS_CARD + " p-7 space-y-3 font-mono text-sm"}>
          <div className="flex justify-between items-center flex-wrap gap-2">
            <span className="text-saas-muted">Total investido em 12 meses</span>
            <span className="text-saas-cyan font-medium text-lg">R$36.000</span>
          </div>
          <div className="flex justify-between items-center flex-wrap gap-2">
            <span className="text-saas-muted">Cohorts ativos simultaneamente (mês 12)</span>
            <span className="text-saas-ink">12</span>
          </div>
          <div className="h-px bg-white/[0.09] my-2" />
          <div className="flex justify-between items-center flex-wrap gap-2">
            <span className="text-saas-muted">Seu retorno total acumulado</span>
            <Accent className="font-sans font-extrabold text-[26px]">R$137.700</Accent>
          </div>
          <div className="flex justify-between items-center flex-wrap gap-2">
            <span className="text-saas-muted">Lucro líquido</span>
            <Accent className="font-sans font-extrabold text-[26px]">R$101.700</Accent>
          </div>
          <div className="flex justify-between items-center flex-wrap gap-2">
            <span className="text-saas-ink font-medium">ROI total</span>
            <Accent className="font-sans font-extrabold text-[26px]">+282.5%</Accent>
          </div>
        </div>
      </div>

      {/* ══════════ TERMOS ══════════ */}
      <div className="border-t border-white/[0.06] py-16 space-y-8">
        <Eyebrow>08 · Termos do Acordo</Eyebrow>
        <h2 className="font-extrabold text-saas-ink tracking-tight leading-[1.12] text-[clamp(26px,3.4vw,42px)]">Estrutura do investimento</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {terms.map((t) => (
            <div key={t.title} className={SAAS_CARD + " p-6"}>
              <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan mb-3">{t.title}</div>
              <div className="font-semibold text-saas-ink text-base mb-2">{t.value}</div>
              <div className="text-saas-muted text-sm leading-relaxed">{t.detail}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════ FAQ ══════════ */}
      <div className="border-t border-white/[0.06] py-16 space-y-8">
        <Eyebrow>09 · Perguntas Frequentes</Eyebrow>
        <h2 className="font-extrabold text-saas-ink tracking-tight leading-[1.12] text-[clamp(26px,3.4vw,42px)]">Dúvidas comuns</h2>
        <div className="space-y-4">
          {faqs.map((f) => (
            <div key={f.q} className={SAAS_CARD + " p-6"}>
              <h4 className="font-bold text-saas-ink text-lg mb-3">{f.q}</h4>
              <p className="text-saas-body text-sm leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════ CTA ══════════ */}
      <div className="border-t border-white/[0.06] py-24 text-center space-y-6">
        <Eyebrow>10 · Próximo Passo</Eyebrow>
        <h2 className="font-extrabold text-saas-ink tracking-tight leading-[1.1] text-[clamp(34px,5vw,60px)]">
          Quer <Accent>entrar</Accent>?
        </h2>
        <p className="text-saas-body text-[17px] leading-relaxed max-w-md mx-auto">
          Vagas limitadas. Estou selecionando investidores para os primeiros cohorts. Se faz sentido, vamos conversar.
        </p>
        <div>
          <a
            href="https://wa.me/5511999718595"
            target="_blank"
            rel="noopener noreferrer"
            className={SAAS_BTN_PRIMARY}
          >
            Quero saber mais
          </a>
        </div>
        <p className="text-xs text-saas-faint leading-relaxed pt-6 max-w-2xl mx-auto">
          Este documento é uma apresentação de oportunidade de investimento e não constitui oferta pública de valores mobiliários. Resultados passados ou projetados não garantem retornos futuros. Todo investimento envolve risco.
        </p>
      </div>
    </PropostaLayout>
  );
};

export default PropostaRevenueBasesFinancing;
