import { useEffect } from "react";
import { tracker } from "@/lib/tracking";
import { Accent, Eyebrow, SAAS_BTN_PRIMARY, SAAS_CARD } from "@/components/saas/ui";
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
    <div className="relative min-h-screen bg-saas-void text-saas-body leading-relaxed overflow-x-hidden antialiased">

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-[100] px-5 md:px-8 py-[18px] bg-saas-void/80 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-w-[1180px] mx-auto flex justify-between items-center">
          <a href="#" className="flex items-center gap-2.5 font-bold text-saas-ink text-[16px] no-underline whitespace-nowrap">
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-saas-cyan to-saas-violet" />
            Agentic OS
          </a>
          <div className="font-mono text-[10px] text-saas-muted tracking-[0.14em] uppercase flex items-center gap-2">
            <span className="inline-block w-[6px] h-[6px] rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet animate-pulse" />
            BRIEFING ESTRATÉGICO · 2026
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-[160px] pb-[100px] min-h-screen flex items-center relative z-[2] overflow-hidden">

        {/* Glows decorativos */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full bg-saas-violet/20 blur-[110px]" />
          <div className="absolute top-10 right-0 w-[520px] h-[420px] rounded-full bg-saas-cyan/15 blur-[110px]" />
        </div>

        <div className="max-w-[1180px] mx-auto px-5 md:px-8 relative z-[5]">
          <div className="max-w-[880px]">

            {/* Briefing meta */}
            <div className="flex items-center gap-6 flex-wrap mb-12 font-mono text-[11px] text-saas-muted tracking-[0.2em] uppercase">
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet" />
                DOC 001 / V2.0
              </span>
              <span className="hidden sm:inline">CLASSIFICAÇÃO · PÚBLICO</span>
            </div>

            {/* Pre-headline */}
            <span className="text-[15px] font-semibold text-saas-cyan mb-8 inline-block leading-relaxed">
              <span className="hidden md:block">
                Para empresários que já entenderam:<br />
                IA não é uma ferramenta. É a nova infraestrutura.
              </span>
              <span className="md:hidden">
                Para empresários que entenderam que IA é infraestrutura
              </span>
            </span>

            {/* H1 */}
            <h1 className="font-extrabold text-saas-ink text-[clamp(26px,3.6vw,44px)] leading-[1.1] tracking-tight mb-10">
              Você não precisa de mais uma ferramenta.<br />
              Você precisa de um <Accent>ecossistema vivo</Accent>
              <span className="hidden md:inline">, onde a IA conecta cada área do seu negócio</span>.
            </h1>

            {/* Sub-headline */}
            <p className="text-[clamp(17px,1.5vw,20px)] text-saas-body max-w-[720px] mb-8 leading-[1.65]">
              <strong className="text-saas-ink font-semibold">Agentic OS</strong> — um sistema operacional agêntico — é o futuro da tecnologia empresarial. Ele concentra todos os dados da sua operação de ponta a ponta, evolui junto com o seu negócio, e contém apenas o que faz sentido para a sua realidade. Nada de SaaS genérico. Nada de feature inútil. <em className="not-italic text-saas-cyan font-medium">Só o que gera resultado.</em>
            </p>

            {/* Transition text */}
            <p className="text-[16px] text-saas-body max-w-[720px] my-14 leading-[1.7] pl-6 border-l-2 border-white/[0.10]">
              A maior parte dos empresários nunca ouviu falar de Agentic OS — e tem dificuldade de visualizar como isso pode fazer o negócio crescer. Os benefícios são vários. Três deles mudam o jogo:
            </p>

            {/* Benefits grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-12">

              {/* Benefit 01 */}
              <div className={SAAS_CARD + " p-8 transition-colors duration-300 hover:border-white/[0.18]"}>
                <span className="block text-[48px] font-extrabold leading-none mb-4"><Accent>01</Accent></span>
                <h3 className="font-bold text-saas-ink text-[19px] leading-snug tracking-tight mb-5 pb-5 border-b border-white/[0.09]">Redução nos custos de ferramentas</h3>
                <p className="text-[15px] text-saas-cyan italic mb-4 leading-[1.5]">Sua empresa paga por dezenas de ferramentas que são subutilizadas.</p>
                <p className="text-[14px] text-saas-body leading-[1.7] mb-6">
                  A empresa média opera com dezenas de aplicações SaaS. Um Agentic OS consolida o que importa em um único lugar — você reduz a stack, reduz o ruído e aumenta exponencialmente a produtividade do time.
                </p>
                <p className="font-mono text-[10px] text-saas-muted tracking-[0.08em] uppercase border-t border-white/[0.06] pt-3.5 leading-relaxed">Fontes: Zylo SaaS Management Index 2025, Gartner.</p>
              </div>

              {/* Benefit 02 */}
              <div className={SAAS_CARD + " p-8 transition-colors duration-300 hover:border-white/[0.18]"}>
                <span className="block text-[48px] font-extrabold leading-none mb-4"><Accent>02</Accent></span>
                <h3 className="font-bold text-saas-ink text-[19px] leading-snug tracking-tight mb-5 pb-5 border-b border-white/[0.09]">Aumento na produtividade por funcionário</h3>
                <p className="text-[15px] text-saas-cyan italic mb-4 leading-[1.5]">Contratar mais não é a solução.</p>
                <p className="text-[14px] text-saas-body leading-[1.7] mb-6">
                  Durante os últimos anos, a métrica mais importante para medir a eficiência de uma empresa era o RPE (Receita por Funcionário). Agora, isso ganha uma nova camada. Pesquisas mostram ganhos entre 44% em funções inteiras e mais de 10x em tarefas específicas. É trabalho de semanas feito em alguns dias.
                </p>
                <p className="font-mono text-[10px] text-saas-muted tracking-[0.08em] uppercase border-t border-white/[0.06] pt-3.5 leading-relaxed">Fontes: McKinsey State of AI 2025, Anthropic Internal Productivity Report 2025.</p>
              </div>

              {/* Benefit 03 */}
              <div className={SAAS_CARD + " p-8 transition-colors duration-300 hover:border-white/[0.18]"}>
                <span className="block text-[48px] font-extrabold leading-none mb-4"><Accent>03</Accent></span>
                <h3 className="font-bold text-saas-ink text-[19px] leading-snug tracking-tight mb-5 pb-5 border-b border-white/[0.09]">Mais inteligência comercial = mais receita</h3>
                <p className="text-[15px] text-saas-cyan italic mb-4 leading-[1.5]">"Dados são o novo petróleo" — agora isso virou realidade.</p>
                <p className="text-[14px] text-saas-body leading-[1.7] mb-6">
                  Durante décadas ouvimos essa frase, mas até ontem não era realidade para a maioria das empresas. Com um Agentic OS, pela primeira vez, você pode usar de fato os dados da sua empresa para aumentar suas vendas. Empresas com IA aplicada a vendas reportam aumento de mais de 30% em taxa de fechamento e até 50% em leads qualificados.
                </p>
                <p className="font-mono text-[10px] text-saas-muted tracking-[0.08em] uppercase border-t border-white/[0.06] pt-3.5 leading-relaxed">Fontes: Bain &amp; Company 2025, McKinsey.</p>
              </div>
            </div>

            {/* CTA transition */}
            <div className="text-center mt-24 px-8 py-10 border-t border-b border-white/[0.06]">
              <span className="mx-auto mb-5 block w-10 h-[3px] rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet" aria-hidden />
              <p className="text-[15px] text-saas-body max-w-[640px] mx-auto leading-[1.7]">
                Continue lendo. Nas próximas seções você vai entender exatamente como uma Agentic OS funciona na prática — e por que esse vai ser o padrão das empresas que vão dominar o mercado.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO — COMO FUNCIONA */}
      <section className="relative z-[2] border-t border-b border-white/[0.06] bg-saas-void-2 py-[140px] max-md:py-20">
        <div className="max-w-[1180px] mx-auto px-5 md:px-8">

          {/* Section label */}
          <Eyebrow className="mb-6">Como funciona na prática</Eyebrow>

          <h2 className="font-extrabold text-saas-ink text-[clamp(26px,3.4vw,42px)] leading-[1.12] tracking-tight mb-9">
            E na prática, como uma <Accent>Agentic OS</Accent> funciona?
          </h2>

          <p className="text-[17px] text-saas-body max-w-[820px] mb-20 leading-[1.7]">
            Um Agentic OS é composto por módulos que cobrem cada área crítica do seu negócio. Cada módulo tem agentes de IA executando tarefas, analisando dados e gerando inteligência de forma contínua — sem você precisar pedir. Para você entender a profundidade do conceito, vamos abrir um módulo por completo.
            <br /><br />
            <strong className="text-saas-ink font-semibold">OS Comercial.</strong>
          </p>

          {/* MÓDULO COMERCIAL */}
          <div className={SAAS_CARD + " p-6 md:p-14 mb-[100px]"}>

            <Eyebrow className="mb-5">Módulo 01 · Aberto</Eyebrow>
            <h3 className="font-extrabold text-saas-ink text-[clamp(34px,4.5vw,56px)] leading-[1.05] tracking-tight mb-6">Comercial</h3>
            <p className="text-[16px] text-saas-body mb-16 max-w-[720px] leading-[1.7]">
              O coração da maioria das empresas. É aqui que o caos costuma ser maior — e onde uma Agentic OS gera retorno mais rápido. Veja o que vive dentro deste módulo:
            </p>

            <div className="flex flex-col gap-[100px] max-md:gap-14">

              {/* Item 01 */}
              <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-8 md:gap-16 items-center">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-2 font-mono text-[9px] uppercase">
                    <span className="text-saas-muted tracking-[0.2em]">EVIDÊNCIA · FRAME 01</span>
                    <span className="text-saas-cyan tracking-[0.2em]">CRM · AUTO-SYNC</span>
                  </div>
                  <div className="rounded-2xl border border-white/[0.09] bg-saas-void p-2 overflow-hidden">
                    <img src={img01} alt="CRM com preenchimento automático via Agentic OS" loading="lazy" className="w-full h-auto block rounded-xl" />
                  </div>
                </div>
                <div className="py-2">
                  <span className="block text-[56px] font-extrabold leading-none mb-5"><Accent>01</Accent></span>
                  <h4 className="font-bold text-saas-ink text-[clamp(22px,2.2vw,28px)] leading-snug tracking-tight mb-6 pb-5 border-b border-white/[0.09]">Seu CRM se preenche sozinho</h4>
                  <p className="text-[15px] text-saas-body leading-[1.75]">
                    Toda conversa de WhatsApp, toda call de fechamento, toda reunião de diagnóstico, cada interação no site — tudo é transcrito, analisado e registrado no CRM automaticamente. Status, próximos passos, objeções, oportunidades. Hoje, vendedores gastam só 28% do tempo vendendo de fato — o resto vai pra tarefas administrativas, atualização de CRM e busca de informação. Agora, não mais. Seu CRM nunca mais ficará sem informações.
                  </p>
                  <p className="font-mono text-[10px] text-saas-muted tracking-[0.08em] uppercase border-t border-white/[0.06] pt-3.5 mt-3.5 leading-relaxed">Fonte: Salesforce State of Sales 2025 · Forrester Activity Study (3.031 vendedores).</p>
                </div>
              </div>

              {/* Item 02 */}
              <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-8 md:gap-16 items-center">
                <div className="md:order-2">
                  <div className="flex items-center justify-between gap-3 mb-2 font-mono text-[9px] uppercase">
                    <span className="text-saas-muted tracking-[0.2em]">EVIDÊNCIA · FRAME 02</span>
                    <span className="text-saas-cyan tracking-[0.2em]">WHATSAPP · 24/7</span>
                  </div>
                  <div className="rounded-2xl border border-white/[0.09] bg-saas-void p-2 overflow-hidden">
                    <img src={img02} alt="Análise de WhatsApp em tempo real via Agentic OS" loading="lazy" className="w-full h-auto block rounded-xl" />
                  </div>
                </div>
                <div className="py-2 md:order-1">
                  <span className="block text-[56px] font-extrabold leading-none mb-5"><Accent>02</Accent></span>
                  <h4 className="font-bold text-saas-ink text-[clamp(22px,2.2vw,28px)] leading-snug tracking-tight mb-6 pb-5 border-b border-white/[0.09]">Cada WhatsApp atendido é analisado em tempo real</h4>
                  <p className="text-[15px] text-saas-body leading-[1.75]">
                    Agentes monitoram o atendimento comercial via WhatsApp 24/7. Identificam quando o time não respondeu uma objeção, quando perdeu uma oportunidade de upsell, quando deixou um lead esfriar, quando não seguiu o script de atendimento. Seu time nunca mais vai esquecer de um cliente.
                  </p>
                </div>
              </div>

              {/* Item 03 */}
              <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-8 md:gap-16 items-center">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-2 font-mono text-[9px] uppercase">
                    <span className="text-saas-muted tracking-[0.2em]">EVIDÊNCIA · FRAME 03</span>
                    <span className="text-saas-cyan tracking-[0.2em]">CALL · ANÁLISE SEMÂNTICA</span>
                  </div>
                  <div className="rounded-2xl border border-white/[0.09] bg-saas-void p-2 overflow-hidden">
                    <img src={img03} alt="Avaliação de call de fechamento via Agentic OS" loading="lazy" className="w-full h-auto block rounded-xl" />
                  </div>
                </div>
                <div className="py-2">
                  <span className="block text-[56px] font-extrabold leading-none mb-5"><Accent>03</Accent></span>
                  <h4 className="font-bold text-saas-ink text-[clamp(22px,2.2vw,28px)] leading-snug tracking-tight mb-6 pb-5 border-b border-white/[0.09]">Cada call de fechamento é avaliada</h4>
                  <p className="text-[15px] text-saas-body leading-[1.75]">
                    Toda call comercial é transcrita e analisada contra a sua metodologia de vendas. O sistema identifica o que funcionou, o que faltou, e onde o vendedor pode melhorar. Treinamento contínuo sem você precisar revisar gravação.
                  </p>
                </div>
              </div>

              {/* Item 04 */}
              <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-8 md:gap-16 items-center">
                <div className="md:order-2">
                  <div className="flex items-center justify-between gap-3 mb-2 font-mono text-[9px] uppercase">
                    <span className="text-saas-muted tracking-[0.2em]">EVIDÊNCIA · FRAME 04</span>
                    <span className="text-saas-cyan tracking-[0.2em]">RELATÓRIO · WEEKLY SYNC</span>
                  </div>
                  <div className="rounded-2xl border border-white/[0.09] bg-saas-void p-2 overflow-hidden">
                    <img src={img04} alt="Relatório semanal consolidado automaticamente via Agentic OS" loading="lazy" className="w-full h-auto block rounded-xl" />
                  </div>
                </div>
                <div className="py-2 md:order-1">
                  <span className="block text-[56px] font-extrabold leading-none mb-5"><Accent>04</Accent></span>
                  <h4 className="font-bold text-saas-ink text-[clamp(22px,2.2vw,28px)] leading-snug tracking-tight mb-6 pb-5 border-b border-white/[0.09]">Relatórios semanais consolidados, sem ninguém fazer relatório</h4>
                  <p className="text-[15px] text-saas-body leading-[1.75]">
                    Toda semana, um agente consolida o que aconteceu no comercial — WhatsApps, calls, taxa de conversão por etapa, gargalos detectados — e te entrega um relatório executivo. Você abre a segunda-feira já sabendo onde focar.
                  </p>
                </div>
              </div>

              {/* Item 05 */}
              <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-8 md:gap-16 items-center">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-2 font-mono text-[9px] uppercase">
                    <span className="text-saas-muted tracking-[0.2em]">EVIDÊNCIA · FRAME 05</span>
                    <span className="text-saas-cyan tracking-[0.2em]">TRÁFEGO · ATTRIBUTION SYNC</span>
                  </div>
                  <div className="rounded-2xl border border-white/[0.09] bg-saas-void p-2 overflow-hidden">
                    <img src={img05} alt="Tráfego pago integrado à inteligência comercial via Agentic OS" loading="lazy" className="w-full h-auto block rounded-xl" />
                  </div>
                </div>
                <div className="py-2">
                  <span className="block text-[56px] font-extrabold leading-none mb-5"><Accent>05</Accent></span>
                  <h4 className="font-bold text-saas-ink text-[clamp(22px,2.2vw,28px)] leading-snug tracking-tight mb-6 pb-5 border-b border-white/[0.09]">Tráfego pago integrado à inteligência comercial</h4>
                  <p className="text-[15px] text-saas-body leading-[1.75]">
                    O sistema cruza dados das suas campanhas (Meta, Google) com o desempenho real no fechamento. Você descobre qual criativo gera lead que fecha, não só lead que clica. E sua verba de tráfego para de ser gasta com leads curiosos.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* QUEBRA DE IMPACTO */}
          <div className="my-[100px] py-16 max-md:py-12 text-center border-t border-b border-white/[0.06]">
            <p className="font-extrabold text-saas-ink text-[clamp(28px,4.6vw,64px)] leading-[1.05] tracking-tight">
              E tudo isso é apenas <Accent>UM</Accent> dos módulos.
            </p>
          </div>

          {/* OUTROS MÓDULOS */}
          <p className="text-[17px] text-saas-body max-w-[700px] mb-14 leading-[1.7]">
            Uma Agentic OS madura conecta toda a operação. Veja outros módulos comuns:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-[100px]">

            {/* Financeiro */}
            <div className={SAAS_CARD + " p-8 flex flex-col transition-colors duration-300 hover:border-white/[0.18]"}>
              <div className="w-full max-w-[200px] aspect-square mx-auto mb-6 rounded-2xl border border-white/[0.09] bg-saas-void flex items-center justify-center overflow-hidden">
                <img src={iconFinanceiro} alt="Módulo Financeiro" loading="lazy" className="w-full h-full object-contain block" />
              </div>
              <Eyebrow className="self-start mb-4">Módulo 02</Eyebrow>
              <h3 className="font-bold text-saas-ink text-[19px] tracking-tight mb-[18px] pb-4 border-b border-white/[0.09] leading-snug">Financeiro</h3>
              <p className="text-[14px] text-saas-body leading-[1.7]">
                Categorização de despesas em tempo real, projeção de fluxo de caixa rodando todo dia, alertas quando um indicador sai do padrão. Seu financeiro para de ser histórico e vira preditivo. Você descobre o problema antes dele virar problema.
              </p>
            </div>

            {/* Gestão de Tarefas */}
            <div className={SAAS_CARD + " p-8 flex flex-col transition-colors duration-300 hover:border-white/[0.18]"}>
              <div className="w-full max-w-[200px] aspect-square mx-auto mb-6 rounded-2xl border border-white/[0.09] bg-saas-void flex items-center justify-center overflow-hidden">
                <img src={iconTarefas} alt="Módulo Gestão de Tarefas" loading="lazy" className="w-full h-full object-contain block" />
              </div>
              <Eyebrow className="self-start mb-4">Módulo 03</Eyebrow>
              <h3 className="font-bold text-saas-ink text-[19px] tracking-tight mb-[18px] pb-4 border-b border-white/[0.09] leading-snug">Gestão de Tarefas</h3>
              <p className="text-[14px] text-saas-body leading-[1.7]">
                Tarefas extraídas automaticamente de reuniões, emails e WhatsApps. Atribuição inteligente baseada em carga e contexto de cada pessoa. Acompanhamento de execução sem ninguém precisar atualizar status. Seu time executa, a OS organiza.
              </p>
            </div>

            {/* Conteúdo */}
            <div className={SAAS_CARD + " p-8 flex flex-col transition-colors duration-300 hover:border-white/[0.18]"}>
              <div className="w-full max-w-[200px] aspect-square mx-auto mb-6 rounded-2xl border border-white/[0.09] bg-saas-void flex items-center justify-center overflow-hidden">
                <img src={iconConteudo} alt="Módulo Conteúdo" loading="lazy" className="w-full h-full object-contain block" />
              </div>
              <Eyebrow className="self-start mb-4">Módulo 04</Eyebrow>
              <h3 className="font-bold text-saas-ink text-[19px] tracking-tight mb-[18px] pb-4 border-b border-white/[0.09] leading-snug">Conteúdo</h3>
              <p className="text-[14px] text-saas-body leading-[1.7]">
                Calendário editorial, briefings, status de produção e métricas por canal — tudo no mesmo lugar. O conteúdo orgânico que alimenta o topo do funil para de viver em planilhas espalhadas e passa a operar como parte de um organismo único, sincronizado com o resto da empresa.
              </p>
            </div>
          </div>

          {/* TABELA COMPARATIVA */}
          <div className="mt-[120px] pt-[100px] border-t border-white/[0.06]">

            <div className="text-center mb-[72px]">
              <Eyebrow className="mb-6">Análise comparativa</Eyebrow>
              <h3 className="font-extrabold text-saas-ink text-[clamp(26px,3.4vw,42px)] leading-[1.12] tracking-tight mb-8">
                Por que <Accent>Agentic OS</Accent> é diferente de tudo que sua empresa já usou.
              </h3>
              <p className="text-[16px] text-saas-body max-w-[720px] mx-auto leading-[1.7]">
                Sua empresa já operou tecnologia de várias formas. Cada uma resolveu uma parte do problema — e deixou outras abertas. A tabela abaixo mostra onde cada modelo entrega e onde falha.
              </p>
            </div>

            <div className={SAAS_CARD + " p-5 md:p-10 overflow-x-auto"}>
              <table className="w-full border-collapse min-w-[880px]">
                <thead>
                  <tr>
                    <th className="font-mono text-[10px] font-semibold text-saas-cyan tracking-[0.2em] uppercase text-left px-[18px] py-[18px] border-b border-white/[0.09] align-middle">Critério</th>
                    <th className="font-mono text-[10px] font-semibold text-saas-muted tracking-[0.2em] uppercase text-left px-[18px] py-[18px] border-b border-white/[0.09] align-middle">SaaS</th>
                    <th className="font-mono text-[10px] font-semibold text-saas-muted tracking-[0.2em] uppercase text-left px-[18px] py-[18px] border-b border-white/[0.09] align-middle">Planilhas + automações</th>
                    <th className="font-mono text-[10px] font-semibold text-saas-muted tracking-[0.2em] uppercase text-left px-[18px] py-[18px] border-b border-white/[0.09] align-middle">Dev Interno</th>
                    <th className="relative font-mono text-[12px] font-semibold tracking-[0.2em] uppercase text-left px-[18px] py-[18px] border-b border-white/[0.09] align-middle
                      after:absolute after:bottom-[-1px] after:left-[18px] after:right-[18px] after:h-0.5 after:bg-gradient-to-r after:from-saas-cyan after:to-saas-violet after:content-['']">
                      <span className="bg-gradient-to-r from-saas-cyan to-saas-violet bg-clip-text text-transparent">Agentic OS</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      criterio: "Dados confiáveis",
                      saas: <><span className="font-mono font-semibold text-[14px] text-saas-faint mr-1.5">&#x2715;</span> Dados não se comunicam entre ferramentas</>,
                      plan: <><span className="font-mono font-semibold text-[14px] text-yellow-400 mr-1.5">!</span> Precisa de gambiarra para integrar</>,
                      dev:  <><span className="font-mono font-semibold text-[14px] text-saas-green mr-1.5">&#x2713;</span> Possível, mas custosa</>,
                      aos:  <><span className="font-mono font-semibold text-[14px] text-saas-green mr-1.5">&#x2713;</span> Nativa, por design</>,
                    },
                    {
                      criterio: "Adaptação ao seu negócio",
                      saas: <><span className="font-mono font-semibold text-[14px] text-saas-faint mr-1.5">&#x2715;</span> Inexistente</>,
                      plan: <><span className="font-mono font-semibold text-[14px] text-yellow-400 mr-1.5">!</span> Manual</>,
                      dev:  <><span className="font-mono font-semibold text-[14px] text-saas-green mr-1.5">&#x2713;</span> Alta</>,
                      aos:  <><span className="font-mono font-semibold text-[14px] text-saas-green mr-1.5">&#x2713;</span> Total, automatizada</>,
                    },
                    {
                      criterio: "Inteligência Artificial",
                      saas: <><span className="font-mono font-semibold text-[14px] text-saas-faint mr-1.5">&#x2715;</span> Isolada</>,
                      plan: <><span className="font-mono font-semibold text-[14px] text-saas-faint mr-1.5">&#x2715;</span> Inexistente</>,
                      dev:  <><span className="font-mono font-semibold text-[14px] text-saas-faint mr-1.5">&#x2715;</span> Inexistente</>,
                      aos:  <><span className="font-mono font-semibold text-[14px] text-saas-green mr-1.5">&#x2713;</span> Agentes trabalhando 24h por dia para o seu negócio</>,
                    },
                    {
                      criterio: "Tecnologia Viva",
                      saas: <><span className="font-mono font-semibold text-[14px] text-saas-faint mr-1.5">&#x2715;</span> Inexistente</>,
                      plan: <><span className="font-mono font-semibold text-[14px] text-saas-faint mr-1.5">&#x2715;</span> Inexistente</>,
                      dev:  <><span className="font-mono font-semibold text-[14px] text-yellow-400 mr-1.5">!</span> Custo cresce muito</>,
                      aos:  <><span className="font-mono font-semibold text-[14px] text-saas-green mr-1.5">&#x2713;</span> Cresce junto, sem atrito</>,
                    },
                    {
                      criterio: "Visão unificada",
                      saas: <><span className="font-mono font-semibold text-[14px] text-saas-faint mr-1.5">&#x2715;</span> 12 abas abertas</>,
                      plan: <><span className="font-mono font-semibold text-[14px] text-saas-faint mr-1.5">&#x2715;</span> Cada um vê uma coisa</>,
                      dev:  <><span className="font-mono font-semibold text-[14px] text-saas-green mr-1.5">&#x2713;</span> Sim, se bem feito</>,
                      aos:  <><span className="font-mono font-semibold text-[14px] text-saas-green mr-1.5">&#x2713;</span> Um único organismo</>,
                    },
                    {
                      criterio: "Dependência",
                      saas: <><span className="font-mono font-semibold text-[14px] text-saas-faint mr-1.5">&#x2715;</span> Dependência do fornecedor</>,
                      plan: <><span className="font-mono font-semibold text-[14px] text-saas-green mr-1.5">&#x2713;</span> Zero</>,
                      dev:  <><span className="font-mono font-semibold text-[14px] text-saas-green mr-1.5">&#x2713;</span> Zero (se o time fica)</>,
                      aos:  <><span className="font-mono font-semibold text-[14px] text-saas-green mr-1.5">&#x2713;</span> Zero — é seu</>,
                    },
                    {
                      criterio: "Velocidade de Implementação",
                      saas: <><span className="font-mono font-semibold text-[14px] text-saas-green mr-1.5">&#x2713;</span> Imediato</>,
                      plan: <><span className="font-mono font-semibold text-[14px] text-saas-green mr-1.5">&#x2713;</span> Imediato</>,
                      dev:  <><span className="font-mono font-semibold text-[14px] text-saas-faint mr-1.5">&#x2715;</span> Anos</>,
                      aos:  <><span className="font-mono font-semibold text-[14px] text-yellow-400 mr-1.5">!</span> Implantação progressiva</>,
                    },
                  ].map((row, i) => (
                    <tr key={i} className="group hover:[&>td]:bg-white/[0.02]">
                      <td className="text-[13px] font-semibold text-saas-ink px-[18px] py-[18px] border-b border-white/[0.06] align-middle min-w-[200px] max-w-[220px] leading-[1.4]">{row.criterio}</td>
                      <td className="text-[13px] text-saas-body px-[18px] py-[18px] border-b border-white/[0.06] align-middle">{row.saas}</td>
                      <td className="text-[13px] text-saas-body px-[18px] py-[18px] border-b border-white/[0.06] align-middle">{row.plan}</td>
                      <td className="text-[13px] text-saas-body px-[18px] py-[18px] border-b border-white/[0.06] align-middle">{row.dev}</td>
                      <td className="text-[13px] text-saas-ink px-[18px] py-[18px] border-b border-white/[0.09] border-l border-r border-l-white/[0.09] border-r-white/[0.09] align-middle font-medium bg-saas-violet/[0.06]">{row.aos}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* PROVA POR AUTORIDADE */}
          <div className="mt-[120px] pt-[100px] border-t border-white/[0.06]">

            <div className="text-center mb-[72px]">
              <Eyebrow className="mb-6">Prova por autoridade</Eyebrow>
              <h3 className="font-extrabold text-saas-ink text-[clamp(26px,3.4vw,42px)] leading-[1.12] tracking-tight mb-8">
                Isso não é <Accent>opinião isolada</Accent>. É para onde a tecnologia está indo.
              </h3>
              <p className="text-[16px] text-saas-body max-w-[720px] mx-auto leading-[1.7]">
                Você não precisa acreditar em mim. Os CEOs que estão construindo o futuro da computação já estão dizendo, em alto e bom som, que o paradigma mudou. Veja o que eles estão falando:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-6">

              {/* Featured quote */}
              <div className={SAAS_CARD + " relative md:col-span-6 p-6 md:p-14 flex flex-col overflow-hidden"}>
                <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 w-[380px] h-[380px] rounded-full bg-saas-violet/15 blur-[110px]" />
                <div className="relative text-[72px] font-extrabold leading-[0.5] mb-7"><Accent>"</Accent></div>
                <p className="relative text-[clamp(20px,2.2vw,26px)] text-saas-ink leading-[1.45] mb-8 flex-1">
                  Minha mensagem para os CEOs neste momento: <strong className="text-saas-cyan font-semibold">somos a última geração a gerenciar apenas humanos</strong>. A partir daqui, vamos gerenciar trabalhadores humanos e trabalhadores digitais.
                </p>
                <div className="relative border-t border-white/[0.09] pt-5 mt-auto">
                  <div className="font-bold text-saas-ink text-[17px] mb-1">Marc Benioff</div>
                  <div className="font-mono text-[10px] text-saas-cyan tracking-[0.14em] uppercase mb-1.5">CEO · Salesforce</div>
                  <div className="font-mono text-[10px] text-saas-muted tracking-[0.08em]">World Economic Forum · Davos, Janeiro 2025</div>
                </div>
              </div>

              {/* Secondary quotes */}
              <div className={SAAS_CARD + " md:col-span-3 p-8 flex flex-col transition-colors duration-300 hover:border-white/[0.18]"}>
                <div className="text-[56px] font-extrabold leading-[0.5] mb-6"><Accent>"</Accent></div>
                <p className="text-[15px] text-saas-ink leading-[1.65] mb-8 flex-1">
                  Acreditamos que, em 2025, vamos ver os primeiros agentes de IA <strong className="text-saas-cyan font-semibold">"entrarem na força de trabalho"</strong> e mudarem materialmente o output das empresas.
                </p>
                <div className="border-t border-white/[0.09] pt-5 mt-auto">
                  <div className="font-bold text-saas-ink text-[15px] mb-1">Sam Altman</div>
                  <div className="font-mono text-[10px] text-saas-cyan tracking-[0.14em] uppercase mb-1.5">CEO · OpenAI</div>
                  <div className="font-mono text-[10px] text-saas-muted tracking-[0.08em]">Blog post "Reflections" · Janeiro 2025</div>
                </div>
              </div>

              <div className={SAAS_CARD + " md:col-span-3 p-8 flex flex-col transition-colors duration-300 hover:border-white/[0.18]"}>
                <div className="text-[56px] font-extrabold leading-[0.5] mb-6"><Accent>"</Accent></div>
                <p className="text-[15px] text-saas-ink leading-[1.65] mb-8 flex-1">
                  Nosso agente de IA faz hoje o trabalho equivalente a <strong className="text-saas-cyan font-semibold">mais de 853 funcionários em tempo integral</strong>. Economizamos US$ 60 milhões e melhoramos o tempo de resposta em 82%.
                </p>
                <div className="border-t border-white/[0.09] pt-5 mt-auto">
                  <div className="font-bold text-saas-ink text-[15px] mb-1">Sebastian Siemiatkowski</div>
                  <div className="font-mono text-[10px] text-saas-cyan tracking-[0.14em] uppercase mb-1.5">CEO · Klarna</div>
                  <div className="font-mono text-[10px] text-saas-muted tracking-[0.08em]">Q3 2025 Earnings Call · Novembro 2025</div>
                </div>
              </div>

              {/* Tertiary quotes */}
              <div className={SAAS_CARD + " md:col-span-2 p-8 flex flex-col transition-colors duration-300 hover:border-white/[0.18]"}>
                <div className="text-[56px] font-extrabold leading-[0.5] mb-6"><Accent>"</Accent></div>
                <p className="text-[13px] text-saas-ink leading-[1.6] mb-6 flex-1">
                  Antes de pedir mais headcount, times precisam demonstrar por que não conseguem fazer o trabalho usando IA. Como essa área se pareceria se agentes autônomos já fossem parte do time?
                </p>
                <div className="border-t border-white/[0.09] pt-5 mt-auto">
                  <div className="font-bold text-saas-ink text-[15px] mb-1">Tobi Lütke</div>
                  <div className="font-mono text-[10px] text-saas-cyan tracking-[0.14em] uppercase mb-1.5">CEO · Shopify</div>
                  <div className="font-mono text-[10px] text-saas-muted tracking-[0.08em]">Memorando interno · Abril 2025</div>
                </div>
              </div>

              <div className={SAAS_CARD + " md:col-span-2 p-8 flex flex-col transition-colors duration-300 hover:border-white/[0.18]"}>
                <div className="text-[56px] font-extrabold leading-[0.5] mb-6"><Accent>"</Accent></div>
                <p className="text-[13px] text-saas-ink leading-[1.6] mb-6 flex-1">
                  As forças de trabalho do futuro serão uma combinação de humanos e humanos digitais. Você vai licenciar alguns e contratar outros, dependendo da expertise.
                </p>
                <div className="border-t border-white/[0.09] pt-5 mt-auto">
                  <div className="font-bold text-saas-ink text-[15px] mb-1">Jensen Huang</div>
                  <div className="font-mono text-[10px] text-saas-cyan tracking-[0.14em] uppercase mb-1.5">CEO · NVIDIA</div>
                  <div className="font-mono text-[10px] text-saas-muted tracking-[0.08em]">Entrevista Citadel Securities · Outubro 2025</div>
                </div>
              </div>

              <div className={SAAS_CARD + " md:col-span-2 p-8 flex flex-col transition-colors duration-300 hover:border-white/[0.18]"}>
                <div className="text-[56px] font-extrabold leading-[0.5] mb-6"><Accent>"</Accent></div>
                <p className="text-[13px] text-saas-ink leading-[1.6] mb-6 flex-1">
                  41% dos empregadores esperam reduzir headcount até 2030 por causa de transformação tecnológica. O paradigma de trabalho está sendo reescrito agora.
                </p>
                <div className="border-t border-white/[0.09] pt-5 mt-auto">
                  <div className="font-bold text-saas-ink text-[15px] mb-1">World Economic Forum</div>
                  <div className="font-mono text-[10px] text-saas-cyan tracking-[0.14em] uppercase mb-1.5">Future of Jobs Report</div>
                  <div className="font-mono text-[10px] text-saas-muted tracking-[0.08em]">Edição 2025</div>
                </div>
              </div>

            </div>
          </div>

          {/* FECHAMENTO FINAL */}
          <div className={SAAS_CARD + " relative mx-auto mt-[120px] max-w-[880px] text-center px-6 md:px-10 py-14 md:py-24 rounded-3xl overflow-hidden"}>
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute -top-24 -left-24 w-[380px] h-[380px] rounded-full bg-saas-violet/20 blur-[110px]" />
              <div className="absolute -bottom-24 -right-24 w-[380px] h-[380px] rounded-full bg-saas-cyan/15 blur-[110px]" />
            </div>

            <div className="relative">
              <Eyebrow className="mb-9">Conclusão do Briefing</Eyebrow>

              <p className="font-extrabold text-saas-ink text-[clamp(44px,7vw,92px)] leading-[0.95] tracking-tight mb-10">
                O mundo <Accent>mudou</Accent>.
              </p>

              <p className="text-[clamp(17px,1.8vw,21px)] text-saas-body leading-[1.6] mb-14 max-w-[680px] mx-auto">
                O Agentic OS é o oposto do paradigma do SaaS tradicional.<br />
                <strong className="text-saas-ink font-semibold">Não é você se adaptando à ferramenta. É a ferramenta sendo construída pra ser você.</strong>
              </p>

              <a
                href="https://wa.me/5511999718595"
                className={SAAS_BTN_PRIMARY + " !px-10 !py-4 !text-[15px]"}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => tracker.track("cta_click", { product: "agentic-os", location: "final-cta" })}
              >
                Quero viver essa revolução &#8594;
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-[2] border-t border-white/[0.06] mt-[60px] pt-20 pb-[60px]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-8">
          <div className="flex justify-between items-center flex-wrap gap-6">
            <div className="flex items-center gap-2.5 font-bold text-saas-ink text-[18px]">
              <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-saas-cyan to-saas-violet" />
              Agentic OS
            </div>
            <div className="font-mono text-[11px] text-saas-muted tracking-[0.14em] uppercase">DOC 001 · V2.0 · 2026 · BRIEFING ESTRATÉGICO</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AgenticOS;
