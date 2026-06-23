import { useEffect } from "react";
import { tracker } from "@/lib/tracking";
import { ClipboardList, BrainCircuit, FileCheck } from "lucide-react";
import PropostaLayout from "@/components/pb/PropostaLayout";
import rodrigoPhoto from "@/assets/founders/rodrigo-albuquerque.webp";
import diegoBarretoPhoto from "@/assets/mentors/diego-barreto.webp";
import pedroSommaPhoto from "@/assets/mentors/pedro-somma.webp";
import vaboPhoto from "@/assets/mentors/vabo.webp";
import joaoOliverioPhoto from "@/assets/mentors/joao-oliverio.webp";
import joseDiogoPhoto from "@/assets/mentors/jose-diogo.webp";

const PropostaRaioXDoTerreno = () => {
  useEffect(() => {
    tracker.page("Proposta Raio-X do Terreno");
  }, []);

  return (
    <PropostaLayout cliente="Juliano Pedrosa" projeto="Raio-X do Terreno">

      {/* ── SOBRE ── */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">// 01 SOBRE</p>
        <h2 className="font-display uppercase text-pb-ink text-[clamp(32px,4vw,56px)] leading-[0.95]">Quem está por trás</h2>

        <div className="grid grid-cols-[240px_1fr] gap-10 items-start">
          <div className="overflow-hidden border border-pb-grid-strong aspect-square">
            <img
              loading="lazy"
              src={rodrigoPhoto}
              alt="Rodrigo Albuquerque"
              className="w-full h-full object-cover"
              style={{ filter: 'grayscale(100%) contrast(1.1) brightness(0.85)' }}
            />
          </div>
          <div className="space-y-4">
            <p className="font-body text-pb-ink-soft text-[20px] leading-relaxed max-w-[760px]">
              Rodrigo Albuquerque investiu meio milhão de reais em mentoria com alguns dos maiores empreendedores do Brasil. Liderou R$80 milhões em vendas anuais e compilou na BA Consultoria o aprendizado de mais de 100 empresas atendidas.
            </p>
            <p className="font-body text-pb-ink-soft leading-relaxed max-w-[760px]">
              A BA Consultoria une consultoria estratégica, execução de marketing, automação com IA e inteligência comercial — tudo focado em gerar retorno financeiro real e escalável.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-4 border border-pb-grid-strong mt-10">
          <div className="p-6 border-r border-pb-grid-strong">
            <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted">Gerados em vendas</p>
            <p className="font-display text-[clamp(40px,4.6vw,56px)] text-pb-cyan leading-none mt-2">+R$130M</p>
          </div>
          <div className="p-6 border-r border-pb-grid-strong">
            <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted">Consultorias</p>
            <p className="font-display text-[clamp(40px,4.6vw,56px)] text-pb-ink leading-none mt-2">100+</p>
          </div>
          <div className="p-6 border-r border-pb-grid-strong">
            <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted">Países atendidos</p>
            <p className="font-display text-[clamp(40px,4.6vw,56px)] text-pb-ink leading-none mt-2">+7</p>
          </div>
          <div className="p-6">
            <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted">Avaliações 5★</p>
            <p className="font-display text-[clamp(40px,4.6vw,56px)] text-pb-ink leading-none mt-2">+54</p>
          </div>
        </div>
      </div>

      {/* ── REFERÊNCIAS ── */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">// 02 REFERÊNCIAS</p>
        <h2 className="font-display uppercase text-pb-ink text-[clamp(32px,4vw,56px)] leading-[0.95]">Nossos mentores</h2>
        <p className="font-body text-pb-ink-soft leading-relaxed max-w-[760px]">Aprendemos diretamente com alguns dos maiores líderes do mercado brasileiro.</p>

        <div className="grid grid-cols-5 gap-px bg-pb-grid-strong border border-pb-grid-strong mt-8">
          {[
            { photo: diegoBarretoPhoto, name: "Diego Barreto", role: "CEO · iFood", desc: 'Autor do best-seller Nova Economia, lidera a expansão e inovação no iFood.' },
            { photo: pedroSommaPhoto, name: "Pedro Somma", role: "Ex-COO · 99", desc: "Papel fundamental na expansão e operação da 99, consolidando-a como líder em mobilidade." },
            { photo: vaboPhoto, name: "Luis Vabo Jr.", role: "Ex-diretor · Stone", desc: "Empreendedor serial, investidor e autor de Falar em público é para você!." },
            { photo: joaoOliverioPhoto, name: "João Olivério", role: "CEO · Sales As A System", desc: "Especialista em vendas, Country Manager da Apollo.io e mentor no G4 Sales." },
            { photo: joseDiogoPhoto, name: "José Diogo C. Rodrigues", role: "CMO Latam · Tinder", desc: "Experiência em Brand Marketing na Nike, Red Bull e atualmente Tinder Latam & Canadá." },
          ].map((ref) => (
            <div key={ref.name} className="bg-pb-void-card p-6">
              <div className="overflow-hidden border-b border-pb-grid-strong -mx-6 -mt-6 mb-4" style={{ aspectRatio: "1.4" }}>
                <img
                  loading="lazy"
                  src={ref.photo}
                  alt={ref.name}
                  className="w-full h-full object-cover object-top"
                  style={{ filter: 'grayscale(100%) contrast(1.1) brightness(0.85)' }}
                />
              </div>
              <p className="font-display text-[24px] uppercase text-pb-ink leading-none">{ref.name}</p>
              <p className="font-mono text-[11px] uppercase tracking-mono-wide text-pb-cyan mt-2">{ref.role}</p>
              <p className="font-body text-[14px] text-pb-ink-muted leading-relaxed mt-2">{ref.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── CONTEXTO ── */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">// 03 CONTEXTO</p>
        <h2 className="font-display uppercase text-pb-ink text-[clamp(32px,4vw,56px)] leading-[0.95]">Onde você está hoje</h2>
        <p className="font-body text-pb-ink-soft text-[20px] leading-relaxed max-w-[760px]">
          Você já validou o método e já tem o mercado vindo atrás. Milhões de impressões em poucas semanas, negócios fechando com uma base ainda pequena, num nicho onde ninguém faz isso com autoridade real.
        </p>
        <p className="font-body text-pb-ink-soft leading-relaxed max-w-[760px]">
          O seu ativo é raro: um método de pré-viabilidade de loteamento que poucos dominam, num mercado de alto valor, com um público de alto poder aquisitivo — donos de terra e fazenda com capital. A demanda existe e está crescendo.
        </p>
        <p className="font-body text-pb-ink-soft leading-relaxed max-w-[760px]">
          O gargalo agora não é gerar interesse. É que todo o seu método ainda vive na sua cabeça e depende do seu tempo, um a um. Sem um produto de entrada que capture, entregue valor e qualifique em escala, cada lead novo é uma hora sua — e a oportunidade morre na fila.
        </p>
      </div>

      {/* ── DIAGNÓSTICO ── */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">// 04 DIAGNÓSTICO</p>
        <h2 className="font-display uppercase text-pb-ink text-[clamp(32px,4vw,56px)] leading-[0.95]">O que mapeamos</h2>

        <div className="grid grid-cols-2 gap-6">
          <div className="border border-pb-grid-strong bg-pb-void-card p-8">
            <h3 className="font-display text-[28px] uppercase text-pb-ink leading-[0.95] mb-6 flex items-center gap-3">
              <span className="inline-block w-2 h-2 bg-pb-cyan shadow-cyan-soft" />
              Pontos fortes
            </h3>
            <ul className="space-y-0">
              {[
                "Método validado e difícil de copiar (pré-viabilidade + carteira de recebíveis)",
                "Autoridade crescendo rápido e organicamente",
                "Nicho com demanda real e sem concorrência de autoridade",
                "Público de alto poder aquisitivo",
                "Ticket e margem que justificam investir em produto",
              ].map((item) => (
                <li key={item} className="font-body text-pb-ink-soft text-[15px] leading-relaxed py-3 border-b border-pb-grid last:border-0">
                  <span className="text-pb-cyan mr-2">→</span>{item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-pb-grid-strong bg-pb-void-card p-8">
            <h3 className="font-display text-[28px] uppercase text-pb-ink leading-[0.95] mb-6 flex items-center gap-3">
              <span className="inline-block w-2 h-2 bg-pb-red" />
              Gargalos atuais
            </h3>
            <ul className="space-y-0">
              {[
                "Conhecimento preso na sua cabeça — só escala com o seu tempo",
                "Pré-viabilidade feita manualmente, um a um",
                "Demanda crescendo sem estrutura pra capturar e converter",
                "Nenhum produto de entrada que filtre e qualifique",
                "Nenhuma esteira ligando o lead de entrada à consultoria de alto ticket",
              ].map((item) => (
                <li key={item} className="font-body text-pb-ink-soft text-[15px] leading-relaxed py-3 border-b border-pb-grid last:border-0">
                  <span className="text-pb-red mr-2">→</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── PRODUTO ── */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">// 05 PRODUTO</p>
        <h2 className="font-display uppercase text-pb-ink text-[clamp(32px,4vw,56px)] leading-[0.95]">Raio-X do Terreno</h2>
        <p className="font-body text-pb-ink-soft leading-relaxed max-w-[760px]">
          Um produto self-service de <span className="text-pb-cyan">R$197</span> que entrega a sua pré-viabilidade no automático — e dá ao cliente um diagnóstico que vale muito mais do que pagou.
        </p>
        <p className="font-mono text-[11px] uppercase tracking-mono-wide text-pb-ink-muted">NOME DE TRABALHO · DEFINIDO COM VOCÊ</p>

        <div className="grid grid-cols-3 gap-px bg-pb-grid-strong border border-pb-grid-strong mt-4">
          {[
            {
              icon: <ClipboardList size={22} strokeWidth={1.5} />,
              num: "PASSO 01",
              title: "RESPONDE",
              body: "O cliente preenche o questionário guiado com as informações do terreno: localização, área, zoneamento e intenção de uso.",
            },
            {
              icon: <BrainCircuit size={22} strokeWidth={1.5} />,
              num: "PASSO 02",
              title: "IA ANALISA",
              body: "O motor de inteligência artificial processa os dados, cruza com parâmetros urbanísticos e calcula a pré-viabilidade do loteamento.",
            },
            {
              icon: <FileCheck size={22} strokeWidth={1.5} />,
              num: "PASSO 03",
              title: "RELATÓRIO",
              body: "O cliente recebe o relatório em PDF com lotes estimados, VGV, investimento e retorno — e um convite direto para a sua consultoria completa.",
            },
          ].map((step) => (
            <div key={step.num} className="bg-pb-void-card p-8">
              <div className="flex items-center justify-center w-12 h-12 border border-pb-cyan-dim text-pb-cyan mb-5 shadow-cyan-soft">
                {step.icon}
              </div>
              <p className="font-mono text-[11px] uppercase tracking-mono-wide text-pb-cyan mb-3">{step.num}</p>
              <h4 className="font-display text-[22px] uppercase text-pb-ink leading-[0.98] mb-3">{step.title}</h4>
              <p className="font-body text-pb-ink-muted text-[13.5px] leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>

        <p className="font-body text-pb-ink-soft leading-relaxed max-w-[760px]">
          O R$197 não é o negócio. É a porta de entrada que paga a aquisição, entrega valor real e enche a sua consultoria de leads quentes — enquanto roda sozinho.
        </p>
      </div>

      {/* ── OBJETIVO ── */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">// 06 OBJETIVO</p>
        <h2 className="font-display uppercase text-pb-ink text-[clamp(32px,4vw,56px)] leading-[0.95]">O que isto resolve</h2>

        <div className="grid grid-cols-2 gap-x-10 gap-y-4 mt-8">
          {[
            "Tirar a pré-viabilidade da sua cabeça e transformar em produto que escala",
            "Entregar diagnóstico de valor real automaticamente",
            "Capturar e qualificar leads em escala, sem o seu tempo",
            "Colocar cada lead na sua mão em tempo real",
            "Alimentar a consultoria de alto ticket com leads pré-vendidos",
            "Preparar a operação pra crescer sem perder controle",
          ].map((item) => (
            <p key={item} className="font-body text-pb-ink-soft text-[16px] leading-relaxed pl-6 relative">
              <span className="text-pb-cyan absolute left-0">+</span>
              {item}
            </p>
          ))}
        </div>
      </div>

      {/* ── INVESTIMENTO ── */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">// 07 INVESTIMENTO</p>
        <h2 className="font-display uppercase text-pb-ink text-[clamp(32px,4vw,56px)] leading-[0.95]">Proposta comercial</h2>
        <p className="font-body text-pb-ink-soft leading-relaxed max-w-[760px]">
          Duas formas de começar. A primeira é a recomendada: coloca o produto vendendo rápido e valida o modelo antes de investir no que é polimento de gestão.
        </p>

        <div className="grid grid-cols-2 gap-6 mt-8">
          {/* MVP */}
          <div className="border border-pb-cyan-dim bg-pb-void-card p-9">
            <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4 flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 bg-pb-cyan shadow-cyan-soft" />
              Recomendado
            </p>
            <h3 className="font-display text-[34px] uppercase text-pb-ink leading-[0.95]">MVP · O Motor de Venda</h3>
            <div className="mt-4 mb-2">
              <span className="font-display text-[clamp(48px,6vw,80px)] text-pb-cyan leading-none">R$8.000</span>
            </div>
            <p className="font-mono text-[11px] text-pb-ink-muted mb-6">Custo mensal de infraestrutura é do cliente · prazo 10 dias úteis</p>
            <ul className="space-y-0">
              {[
                "Landing page de vendas",
                "Checkout integrado (Kiwify/Hotmart)",
                "Questionário guiado multi-etapas",
                "Upload de arquivos",
                "Motor de IA — análise + pré-viabilidade",
                "Relatório em PDF com a sua marca",
                "Captura de cada lead + notificação em tempo real (dados do terreno + PDF na sua mão a cada venda)",
                "Lista dos leads recebidos",
                "Convite de upsell pra consultoria no relatório",
              ].map((item) => (
                <li key={item} className="font-body text-pb-ink-soft text-[14.5px] leading-relaxed py-3 border-b border-pb-grid last:border-0">
                  <span className="text-pb-cyan mr-2">→</span>{item}
                </li>
              ))}
            </ul>
          </div>

          {/* COMPLETO */}
          <div className="border border-pb-grid-strong bg-pb-void-card p-9">
            <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">Completo</p>
            <h3 className="font-display text-[34px] uppercase text-pb-ink leading-[0.95]">Produto Completo</h3>
            <div className="mt-4 mb-2">
              <span className="font-display text-[clamp(48px,6vw,80px)] text-pb-ink leading-none">R$15.000</span>
            </div>
            <p className="font-mono text-[11px] text-pb-ink-muted mb-6">economia de R$2.000 · infraestrutura custo do cliente · prazo 18 dias úteis</p>
            <ul className="space-y-0">
              {[
                { text: "Tudo do MVP incluso", dim: false },
                { text: "+ Construção da estratégia da esteira de produtos", dim: true },
                { text: "+ Área logada persistente (cliente acessa relatórios anteriores)", dim: true },
                { text: "+ Dashboard analítico completo (métricas, filtros, pipeline, origem por canal)", dim: true },
                { text: "+ Automação do funil de upsell (sequência pós-relatório)", dim: true },
              ].map((item) => (
                <li key={item.text} className={`font-body text-[14.5px] leading-relaxed py-3 border-b border-pb-grid last:border-0 ${item.dim ? 'text-pb-ink-muted' : 'text-pb-ink-soft'}`}>
                  <span className={`mr-2 ${item.dim ? 'text-pb-ink-faint' : 'text-pb-cyan'}`}>→</span>{item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* PAGAMENTO */}
        <div className="border border-pb-grid-strong grid grid-cols-4 mt-6">
          {[
            { label: "À vista · PIX", value: "−5%", highlight: "cyan", desc: "Pagamento único antecipado. A melhor condição." },
            { label: "50% + 50% · PIX", value: "Valor cheio", highlight: "none", desc: "Entrada na assinatura, saldo na entrega. Referência." },
            { label: "Cartão · até 12x", value: "+18%", highlight: "none", desc: "" },
            { label: "Entrega expressa", value: "+40%", highlight: "red", desc: "Produto no ar em 72h. Prioridade total na fila." },
          ].map((opt, i) => (
            <div key={opt.label} className={`p-6 ${i < 3 ? 'border-r border-pb-grid-strong' : ''}`}>
              <p className="font-mono text-[11px] uppercase tracking-mono-wide text-pb-ink-muted">{opt.label}</p>
              <p className={`font-display text-[26px] uppercase leading-none mt-3 ${opt.highlight === 'cyan' ? 'text-pb-cyan' : opt.highlight === 'red' ? 'text-pb-red' : 'text-pb-ink'}`}>
                {opt.value}
              </p>
              {opt.desc && <p className="font-body text-[13px] text-pb-ink-muted leading-relaxed mt-2">{opt.desc}</p>}
            </div>
          ))}
        </div>

        <p className="font-mono text-[11px] tracking-[0.06em] text-pb-ink-muted leading-[1.7] mt-4">
          MODELO GERENCIADO — VOCÊ NÃO TOCA EM NADA TÉCNICO. HOSPEDAGEM, CUSTOS DE IA (ATÉ 100 RELATÓRIOS/MÊS) E MANUTENÇÃO INCLUSOS NA MENSALIDADE. VOLUME EXCEDENTE OU ALTERAÇÕES MAIORES: R$300/H.
        </p>
      </div>

      {/* ── CTA FINAL ── */}
      <div className="border-t border-pb-grid-strong py-16 space-y-8">
        <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">// 08 PRÓXIMO PASSO</p>
        <h2 className="font-display uppercase text-pb-ink text-[clamp(44px,7vw,104px)] leading-[0.9]">
          Vamos colocar<br />isso no ar<span className="text-pb-red">.</span>
        </h2>
        <p className="font-body text-pb-ink-soft text-[18px] leading-relaxed max-w-[680px]">
          Juliano, você já provou o método e já tem o mercado vindo atrás. O que falta não é validação — é tirar a pré-viabilidade da sua cabeça e transformar num produto que trabalha por você, em escala, enquanto você foca no que só você faz.
        </p>
        <div className="mt-10">
          <a
            href="https://wa.me/5511999718595"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            onClick={() => tracker.track("cta_click", { product: "raio-x-do-terreno", location: "proposta_cta" })}
          >
            FALAR COM RODRIGO <span aria-hidden>→</span>
          </a>
        </div>
      </div>

    </PropostaLayout>
  );
};

export default PropostaRaioXDoTerreno;
