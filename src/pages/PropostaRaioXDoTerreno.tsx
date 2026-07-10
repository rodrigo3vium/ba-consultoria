import { useEffect } from "react";
import { tracker } from "@/lib/tracking";
import { ClipboardList, BrainCircuit, FileCheck } from "lucide-react";
import PropostaLayout from "@/components/pb/PropostaLayout";
import SectionHeader from "@/components/pb/SectionHeader";
import { Accent, StatCard, SAAS_BTN_PRIMARY } from "@/components/saas/ui";
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
      <div className="border-t border-white/[0.06] py-16 space-y-8">
        <SectionHeader idx="// 01" label="Sobre" headline="Quem está por trás" />

        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-10 items-start">
          <div className="overflow-hidden rounded-2xl border border-white/[0.09] aspect-square">
            <img
              loading="lazy"
              src={rodrigoPhoto}
              alt="Rodrigo Albuquerque"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-4">
            <p className="text-saas-body text-[20px] leading-relaxed max-w-[760px]">
              Rodrigo Albuquerque investiu meio milhão de reais em mentoria com alguns dos maiores empreendedores do Brasil. Liderou R$80 milhões em vendas anuais e compilou na BA Consultoria o aprendizado de mais de 100 empresas atendidas.
            </p>
            <p className="text-saas-body leading-relaxed max-w-[760px]">
              A BA Consultoria une consultoria estratégica, execução de marketing, automação com IA e inteligência comercial — tudo focado em gerar retorno financeiro real e escalável.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-10">
          <StatCard value="+R$130M" label="Gerados em vendas" accent />
          <StatCard value="100+" label="Consultorias" />
          <StatCard value="+7" label="Países atendidos" />
          <StatCard value="+54" label="Avaliações 5★" />
        </div>
      </div>

      {/* ── REFERÊNCIAS ── */}
      <div className="border-t border-white/[0.06] py-16 space-y-8">
        <SectionHeader
          idx="// 02"
          label="Referências"
          headline="Nossos mentores"
          sub="Aprendemos diretamente com alguns dos maiores líderes do mercado brasileiro."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
          {[
            { photo: diegoBarretoPhoto, name: "Diego Barreto", role: "CEO · iFood", desc: 'Autor do best-seller Nova Economia, lidera a expansão e inovação no iFood.' },
            { photo: pedroSommaPhoto, name: "Pedro Somma", role: "Ex-COO · 99", desc: "Papel fundamental na expansão e operação da 99, consolidando-a como líder em mobilidade." },
            { photo: vaboPhoto, name: "Luis Vabo Jr.", role: "Ex-diretor · Stone", desc: "Empreendedor serial, investidor e autor de Falar em público é para você!." },
            { photo: joaoOliverioPhoto, name: "João Olivério", role: "CEO · Sales As A System", desc: "Especialista em vendas, Country Manager da Apollo.io e mentor no G4 Sales." },
            { photo: joseDiogoPhoto, name: "José Diogo C. Rodrigues", role: "CMO Latam · Tinder", desc: "Experiência em Brand Marketing na Nike, Red Bull e atualmente Tinder Latam & Canadá." },
          ].map((ref) => (
            <div key={ref.name} className="rounded-2xl border border-white/[0.09] bg-saas-card p-6 overflow-hidden">
              <div className="overflow-hidden border-b border-white/[0.06] -mx-6 -mt-6 mb-4" style={{ aspectRatio: "1.4" }}>
                <img
                  loading="lazy"
                  src={ref.photo}
                  alt={ref.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <p className="font-bold text-saas-ink text-lg leading-tight">{ref.name}</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-saas-cyan mt-2">{ref.role}</p>
              <p className="text-[13.5px] text-saas-muted leading-relaxed mt-2">{ref.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── CONTEXTO ── */}
      <div className="border-t border-white/[0.06] py-16 space-y-8">
        <SectionHeader idx="// 03" label="Contexto" headline="Onde você está hoje" />
        <p className="text-saas-body text-[20px] leading-relaxed max-w-[760px]">
          Você já validou o método e já tem o mercado vindo atrás. Milhões de impressões em poucas semanas, negócios fechando com uma base ainda pequena, num nicho onde ninguém faz isso com autoridade real.
        </p>
        <p className="text-saas-body leading-relaxed max-w-[760px]">
          O seu ativo é raro: um método de pré-viabilidade de loteamento que poucos dominam, num mercado de alto valor, com um público de alto poder aquisitivo — donos de terra e fazenda com capital. A demanda existe e está crescendo.
        </p>
        <p className="text-saas-body leading-relaxed max-w-[760px]">
          O gargalo agora não é gerar interesse. É que todo o seu método ainda vive na sua cabeça e depende do seu tempo, um a um. Sem um produto de entrada que capture, entregue valor e qualifique em escala, cada lead novo é uma hora sua — e a oportunidade morre na fila.
        </p>
      </div>

      {/* ── DIAGNÓSTICO ── */}
      <div className="border-t border-white/[0.06] py-16 space-y-8">
        <SectionHeader idx="// 04" label="Diagnóstico" headline="O que mapeamos" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/[0.09] bg-saas-card p-8">
            <h3 className="font-extrabold text-saas-ink text-xl tracking-tight mb-6 flex items-center gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet" />
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
                <li key={item} className="text-saas-body text-[15px] leading-relaxed py-3 border-b border-white/[0.06] last:border-0">
                  <span className="text-saas-cyan mr-2">→</span>{item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/[0.09] bg-saas-card p-8">
            <h3 className="font-extrabold text-saas-ink text-xl tracking-tight mb-6 flex items-center gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-saas-violet" />
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
                <li key={item} className="text-saas-body text-[15px] leading-relaxed py-3 border-b border-white/[0.06] last:border-0">
                  <span className="text-saas-violet mr-2">→</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── PRODUTO ── */}
      <div className="border-t border-white/[0.06] py-16 space-y-8">
        <SectionHeader idx="// 05" label="Produto" headline="Raio-X do Terreno" />
        <p className="text-saas-body leading-relaxed max-w-[760px]">
          Um produto self-service de <Accent className="font-bold">R$197</Accent> que entrega a sua pré-viabilidade no automático — e dá ao cliente um diagnóstico que vale muito mais do que pagou.
        </p>
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-saas-muted">NOME DE TRABALHO · DEFINIDO COM VOCÊ</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {[
            {
              icon: <ClipboardList size={22} strokeWidth={1.5} />,
              num: "Passo 01",
              title: "Responde",
              body: "O cliente preenche o questionário guiado com as informações do terreno: localização, área, zoneamento e intenção de uso.",
            },
            {
              icon: <BrainCircuit size={22} strokeWidth={1.5} />,
              num: "Passo 02",
              title: "IA analisa",
              body: "O motor de inteligência artificial processa os dados, cruza com parâmetros urbanísticos e calcula a pré-viabilidade do loteamento.",
            },
            {
              icon: <FileCheck size={22} strokeWidth={1.5} />,
              num: "Passo 03",
              title: "Relatório",
              body: "O cliente recebe o relatório em PDF com lotes estimados, VGV, investimento e retorno — e um convite direto para a sua consultoria completa.",
            },
          ].map((step) => (
            <div key={step.num} className="rounded-2xl border border-white/[0.09] bg-saas-card p-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-saas-cyan to-saas-violet text-saas-void mb-5">
                {step.icon}
              </div>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-saas-cyan mb-3">{step.num}</p>
              <h4 className="font-extrabold text-saas-ink text-xl tracking-tight mb-3">{step.title}</h4>
              <p className="text-saas-muted text-[13.5px] leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>

        <p className="text-saas-body leading-relaxed max-w-[760px]">
          O R$197 não é o negócio. É a porta de entrada que paga a aquisição, entrega valor real e enche a sua consultoria de leads quentes — enquanto roda sozinho.
        </p>
      </div>

      {/* ── OBJETIVO ── */}
      <div className="border-t border-white/[0.06] py-16 space-y-8">
        <SectionHeader idx="// 06" label="Objetivo" headline="O que isto resolve" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 mt-8">
          {[
            "Tirar a pré-viabilidade da sua cabeça e transformar em produto que escala",
            "Entregar diagnóstico de valor real automaticamente",
            "Capturar e qualificar leads em escala, sem o seu tempo",
            "Colocar cada lead na sua mão em tempo real",
            "Alimentar a consultoria de alto ticket com leads pré-vendidos",
            "Preparar a operação pra crescer sem perder controle",
          ].map((item) => (
            <p key={item} className="text-saas-body text-[16px] leading-relaxed pl-6 relative">
              <span className="text-saas-cyan absolute left-0">+</span>
              {item}
            </p>
          ))}
        </div>
      </div>

      {/* ── INVESTIMENTO ── */}
      <div className="border-t border-white/[0.06] py-16 space-y-8">
        <SectionHeader idx="// 07" label="Investimento" headline="Proposta comercial" />
        <p className="text-saas-body leading-relaxed max-w-[760px]">
          Duas formas de começar. A primeira é a recomendada: coloca o produto vendendo rápido e valida o modelo antes de investir no que é polimento de gestão.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* MVP */}
          <div className="rounded-2xl border border-saas-cyan/40 bg-saas-card p-9">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan mb-4 flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet animate-pulse" />
              Recomendado
            </p>
            <h3 className="font-extrabold text-saas-ink text-2xl tracking-tight leading-tight">MVP · O Motor de Venda</h3>
            <div className="mt-4 mb-2">
              <Accent className="font-extrabold text-[clamp(48px,6vw,80px)] leading-none">R$8.000</Accent>
            </div>
            <p className="font-mono text-[11px] text-saas-muted mb-6">Custo mensal de infraestrutura é do cliente · prazo 10 dias úteis</p>
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
                <li key={item} className="text-saas-body text-[14.5px] leading-relaxed py-3 border-b border-white/[0.06] last:border-0">
                  <span className="text-saas-cyan mr-2">→</span>{item}
                </li>
              ))}
            </ul>
          </div>

          {/* COMPLETO */}
          <div className="rounded-2xl border border-white/[0.09] bg-saas-card p-9">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan mb-4">Completo</p>
            <h3 className="font-extrabold text-saas-ink text-2xl tracking-tight leading-tight">Produto Completo</h3>
            <div className="mt-4 mb-2">
              <span className="font-extrabold text-saas-ink text-[clamp(48px,6vw,80px)] leading-none">R$15.000</span>
            </div>
            <p className="font-mono text-[11px] text-saas-muted mb-6">economia de R$2.000 · infraestrutura custo do cliente · prazo 18 dias úteis</p>
            <ul className="space-y-0">
              {[
                { text: "Tudo do MVP incluso", dim: false },
                { text: "+ Construção da estratégia da esteira de produtos", dim: true },
                { text: "+ Área logada persistente (cliente acessa relatórios anteriores)", dim: true },
                { text: "+ Dashboard analítico completo (métricas, filtros, pipeline, origem por canal)", dim: true },
                { text: "+ Automação do funil de upsell (sequência pós-relatório)", dim: true },
              ].map((item) => (
                <li key={item.text} className={`text-[14.5px] leading-relaxed py-3 border-b border-white/[0.06] last:border-0 ${item.dim ? 'text-saas-muted' : 'text-saas-body'}`}>
                  <span className={`mr-2 ${item.dim ? 'text-saas-faint' : 'text-saas-cyan'}`}>→</span>{item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* PAGAMENTO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {[
            { label: "À vista · PIX", value: "−5%", highlight: "cyan", desc: "Pagamento único antecipado. A melhor condição." },
            { label: "50% + 50% · PIX", value: "Valor cheio", highlight: "none", desc: "Entrada na assinatura, saldo na entrega. Referência." },
            { label: "Cartão · até 12x", value: "+18%", highlight: "none", desc: "" },
            { label: "Entrega expressa", value: "+40%", highlight: "violet", desc: "Produto no ar em 72h. Prioridade total na fila." },
          ].map((opt) => (
            <div key={opt.label} className="rounded-2xl border border-white/[0.09] bg-white/[0.02] p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-saas-muted">{opt.label}</p>
              {opt.highlight === 'cyan' ? (
                <Accent className="block font-extrabold text-[26px] leading-none mt-3">{opt.value}</Accent>
              ) : (
                <p className={`font-extrabold text-[26px] leading-none mt-3 ${opt.highlight === 'violet' ? 'text-saas-violet' : 'text-saas-ink'}`}>
                  {opt.value}
                </p>
              )}
              {opt.desc && <p className="text-[13px] text-saas-muted leading-relaxed mt-2">{opt.desc}</p>}
            </div>
          ))}
        </div>

        <p className="font-mono text-[11px] tracking-[0.06em] text-saas-faint leading-[1.7] mt-4">
          Modelo gerenciado — você não toca em nada técnico. Hospedagem, custos de IA (até 100 relatórios/mês) e manutenção inclusos na mensalidade. Volume excedente ou alterações maiores: R$300/h.
        </p>
      </div>

      {/* ── CTA FINAL ── */}
      <div className="border-t border-white/[0.06] py-16 space-y-8">
        <SectionHeader
          idx="// 08"
          label="Próximo passo"
          headline={<>Vamos colocar<br />isso no ar<Accent>.</Accent></>}
        />
        <p className="text-saas-body text-[18px] leading-relaxed max-w-[680px]">
          Juliano, você já provou o método e já tem o mercado vindo atrás. O que falta não é validação — é tirar a pré-viabilidade da sua cabeça e transformar num produto que trabalha por você, em escala, enquanto você foca no que só você faz.
        </p>
        <div className="mt-10">
          <a
            href="https://wa.me/5511999718595"
            target="_blank"
            rel="noopener noreferrer"
            className={SAAS_BTN_PRIMARY}
            onClick={() => tracker.track("cta_click", { product: "raio-x-do-terreno", location: "proposta_cta" })}
          >
            Falar com Rodrigo <span aria-hidden>→</span>
          </a>
        </div>
      </div>

    </PropostaLayout>
  );
};

export default PropostaRaioXDoTerreno;
