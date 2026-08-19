import { useEffect } from "react";
import { tracker } from "@/lib/tracking";
import PropostaLayout from "@/components/pb/PropostaLayout";
import { Accent, Eyebrow, Card, StatCard, SAAS_BTN_PRIMARY } from "@/components/saas/ui";
import rodrigoPhoto from "@/assets/founders/rodrigo-albuquerque.webp";
import diegoBarretoPhoto from "@/assets/mentors/diego-barreto.webp";
import pedroSommaPhoto from "@/assets/mentors/pedro-somma.webp";
import vaboPhoto from "@/assets/mentors/vabo.webp";
import joaoOliverioPhoto from "@/assets/mentors/joao-oliverio.webp";
import joseDiogoPhoto from "@/assets/mentors/jose-diogo.webp";

const H2_CLS =
  "font-extrabold text-saas-ink text-[clamp(26px,3.4vw,42px)] leading-[1.12] tracking-tight";

const mercado = [
  { indicador: "População total", vl: "45.952", lapa: "66.909" },
  { indicador: "Crianças de 4 e 5 anos", vl: "927", lapa: "1.316" },
  { indicador: "Crianças de 6 a 14 anos", vl: "4.463", lapa: "5.959" },
  { indicador: "Total de 4 a 14 anos", vl: "5.390", lapa: "7.275", destaque: true },
  { indicador: "Matrículas em escola particular", vl: "41,3%", lapa: "67,7%" },
];

const contexto = [
  {
    num: "PONTO 01",
    title: "Ticket mais alto da categoria",
    body: "R$295 por sessão, o maior da sua região. Cada paciente ativo representa cerca de R$1.200 por mês de receita recorrente, e permanece com você por vários meses.",
  },
  {
    num: "PONTO 02",
    title: "A captação não é sua",
    body: "Hoje ela depende de indicação médica. Funciona, mas é um canal que você não controla: se a médica que te indica parar de indicar, a fonte seca no mesmo mês.",
  },
  {
    num: "PONTO 03",
    title: "O tráfego comprou audiência, não paciente",
    body: "R$24.000 investidos em doze meses. O perfil saiu de 300 para 10 mil seguidores, mas a demanda que chegou era nacional: Nordeste, Petrópolis, interior. Um paciente fechado no período.",
  },
];

const euFaco = [
  "Defino a estratégia e o recorte geográfico",
  "Estruturo e direciono as campanhas — você e o Felipe sobem, eu digo o que subir",
  "Dirijo a produção de conteúdo: pauta, formato, o que testar",
  "Leio as métricas semanalmente e digo o que continuar, o que parar e o que testar",
  "Reestruturo Google Meu Negócio e site para captação local",
  "Treino você e sua equipe para cobrar o que é certo de cada prestador",
];

const naoFaco = [
  "Gestão operacional de tráfego — subir campanha, mexer no gerenciador diariamente",
  "Edição de vídeo, design ou publicação de posts",
  "Atendimento de WhatsApp ou agendamento",
];

const fase1 = [
  {
    titulo: "Diagnóstico completo",
    itens: [
      "Auditoria do Instagram: o que performou, o que não performou, por quê",
      "Auditoria do Google Meu Negócio seu e das 3 principais concorrentes da região",
      "Auditoria do site: o que está custando conversão",
      "Revisão do histórico de campanhas: onde o dinheiro foi e o que ele comprou",
    ],
  },
  {
    titulo: "Modelo econômico do consultório",
    itens: [
      "LTV real por paciente (ticket × permanência média)",
      "CAC-teto e ponto de break-even",
      "Validação no gerenciador do dimensionamento de público desta proposta, com o raio e os filtros definitivos",
    ],
  },
  {
    titulo: "Reestruturação de ativos",
    itens: [
      "Google Meu Negócio reescrito e otimizado: categorias, descrição, serviços, fotos, protocolo de avaliações",
      "Recomendações de correção do site, priorizadas por impacto",
      "Estrutura de campanha de presença local montada — pronta para vocês subirem",
    ],
  },
  {
    titulo: "Plano de 90 dias",
    itens: ["O que fazer, em que ordem, com que verba, medindo o quê"],
  },
];

const fase2 = [
  {
    title: "1 call estratégica por mês",
    body: "60 minutos com você — e com o Felipe, se fizer sentido.",
  },
  {
    title: "Revisão semanal dos números",
    body: "Com o ritual de três perguntas: o que funcionou e continua, o que não funcionou e para, o que ainda não testamos e vale testar.",
  },
  {
    title: "Direção criativa",
    body: "Pautas e formatos definidos por mim, gravados por você. 80% do resultado de uma campanha hoje vem do criativo, não da configuração.",
  },
  {
    title: "Canal direto e painel",
    body: "WhatsApp comigo em horário comercial, mais um painel de acompanhamento com as métricas que importam.",
  },
];

const precisamos = [
  "Acesso ao gerenciador de anúncios, Google Meu Negócio, Instagram e site",
  "Duas horas por semana suas ou do Felipe para executar o que for definido",
  "Disposição para gravar — você já disse que gosta, e isso é uma vantagem enorme sobre qualquer concorrente",
  "Verba de mídia à parte, paga direto por você à plataforma: R$500/mês para cobrir a Vila Leopoldina, ou R$1.400/mês para cobrir Vila Leopoldina + Lapa",
];

const indicadores = [
  "Contatos qualificados no WhatsApp — dentro do seu raio de atendimento; os de fora não contam",
  "Taxa de conversão de contato para primeira sessão",
  "Custo por paciente novo",
  "Frequência de impacto no público local",
  "Posição e volume de acionamentos no Google Meu Negócio",
];

const investimento = [
  {
    item: "Fase 1 — Fundação",
    valor: "R$2.500",
    condicao: "Mês 1. 50% na assinatura, 50% na entrega do plano.",
  },
  {
    item: "Fase 2 — Direção contínua",
    valor: "R$1.200/mês",
    condicao: "Mínimo de 3 meses. A partir do dia 31.",
  },
  {
    item: "Verba de mídia",
    valor: "R$500/mês",
    condicao:
      "Sugerida para cobrir a Vila Leopoldina (R$1.400/mês com a Lapa). Paga direto por você à plataforma — não passa por mim.",
  },
];

const proximosPassos = [
  {
    num: "01",
    title: "Você me envia os nomes",
    desc: "Nome da clínica e das concorrentes que quer que eu analise.",
  },
  {
    num: "02",
    title: "Conversa com o Felipe",
    desc: "Eu marco separadamente — o cenário dele é diferente e a proposta será própria.",
  },
  {
    num: "03",
    title: "Fase 1 no ar",
    desc: "Confirmado o aceite, a Fundação começa em até 3 dias úteis.",
  },
];

const PropostaDanieleDiasGomes = () => {
  useEffect(() => {
    tracker.page("Proposta Daniele Dias Gomes");
  }, []);

  return (
    <PropostaLayout
      cliente="Daniele Dias Gomes"
      projeto="Direção de Marketing"
      data="18 de agosto de 2026"
    >

      {/* ── O DIAGNÓSTICO ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>01 O diagnóstico</Eyebrow>
        <h2 className="mt-5 font-extrabold text-saas-ink text-[clamp(28px,4.6vw,52px)] leading-[1.08] tracking-tight">
          O dinheiro estava certo.<br />O <Accent>alvo</Accent> estava errado.
        </h2>

        <p className="mt-8 text-saas-body text-[20px] leading-relaxed max-w-[760px]">
          Você comprou alcance nacional para um negócio que atende num raio de poucos quilômetros. Não foi falta de verba nem de esforço — foi falta de direção.
        </p>

        <Card className="mt-8 p-9 border-saas-violet/40">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan mb-4">O que os R$24.000 compraram</p>
          <p className="font-extrabold text-[clamp(20px,2.6vw,28px)] text-saas-ink leading-snug max-w-[760px]">
            Doze meses de audiência em Petrópolis e no Nordeste — e um paciente que podia sentar na sua cadeira.
          </p>
        </Card>

        <p className="mt-8 text-saas-body text-[20px] leading-relaxed max-w-[760px]">
          O mesmo dinheiro, apontado corretamente, compraria presença dominante e ininterrupta em cada família da sua região por <b className="text-saas-ink font-semibold">mais de dois anos seguidos</b>.
        </p>
      </div>

      {/* ── CONTEXTO ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>02 Contexto</Eyebrow>
        <h2 className={"mt-5 " + H2_CLS}>O que eu entendi da sua operação</h2>

        <div className="mt-8 space-y-5 text-saas-body leading-relaxed">
          <p className="text-[20px] max-w-[760px]">
            Consultório de psicopedagogia na Vila Leopoldina, atendimento presencial, ticket de R$295 por sessão. O negócio funciona — o que não existe é um canal de captação que seja seu.
          </p>
          <p className="max-w-[760px]">
            Você já cortou o investimento de R$2.000 para R$500 por mês e hoje mexe nas campanhas com seu marido. A decisão de cortar foi correta: escalar um funil que ainda não se paga é queimar dinheiro mais rápido.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {contexto.map((card) => (
            <Card key={card.num} className="p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-saas-cyan mb-4">{card.num}</p>
              <h4 className="font-extrabold text-[20px] text-saas-ink leading-tight mb-4">{card.title}</h4>
              <p className="text-saas-muted text-[14.5px] leading-relaxed">{card.body}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* ── O MERCADO ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>03 O mercado</Eyebrow>
        <h2 className={"mt-5 " + H2_CLS}>O tamanho real do seu mercado</h2>
        <p className="mt-5 text-saas-body leading-relaxed max-w-[760px]">
          Antes de propor qualquer coisa, eu levantei o número. Dados oficiais da Prefeitura de São Paulo — ObservaSampa e Secretaria Municipal de Educação.
        </p>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-white/[0.09]">
          <table className="w-full border-collapse min-w-[560px]">
            <thead>
              <tr className="border-b border-white/[0.08]">
                {["Indicador", "Vila Leopoldina", "Lapa"].map((h) => (
                  <th key={h} className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-muted py-3 px-4 text-left bg-saas-card">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {mercado.map((row) => (
                <tr key={row.indicador} className="border-b border-white/[0.06] last:border-none hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-4 align-top text-saas-body text-[14px] leading-relaxed">{row.indicador}</td>
                  <td className={"py-4 px-4 align-top text-[16px] whitespace-nowrap " + (row.destaque ? "font-extrabold" : "font-semibold text-saas-ink")}>
                    {row.destaque ? <Accent>{row.vl}</Accent> : row.vl}
                  </td>
                  <td className={"py-4 px-4 align-top text-[16px] whitespace-nowrap " + (row.destaque ? "font-extrabold" : "font-semibold text-saas-ink")}>
                    {row.destaque ? <Accent>{row.lapa}</Accent> : row.lapa}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard value="5.390" label="Crianças de 4 a 14 anos na Vila Leopoldina" />
          <StatCard value="~3.850" label="Mães dessas crianças" />
          <StatCard value="~1.600" label="Famílias com capacidade de pagamento" accent />
          <StatCard value="~R$450" label="Custo de mídia por mês para impactar todas elas" />
        </div>

        <Card className="mt-8 p-9 border-saas-violet/40">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan mb-4">O número que muda a conversa</p>
          <p className="font-extrabold text-[clamp(20px,2.6vw,28px)] text-saas-ink leading-snug max-w-[760px]">
            Mil e seiscentas famílias. Esse é o seu mercado inteiro, e ele cabe na palma da mão.
          </p>
        </Card>

        <div className="mt-8 space-y-5 text-saas-body leading-relaxed">
          <p className="max-w-[760px]">
            O filtro de capacidade de pagamento vem das matrículas em escola particular — 41,3% no distrito. É o melhor indicador disponível de família que paga psicopedagogia sem reembolso de convênio.
          </p>
          <p className="max-w-[760px]">
            A referência de frequência publicitária é de <b className="text-saas-ink font-semibold">8 impactos por mês por pessoa</b>. Não é uma campanha — é presença sustentada. É o que faz alguém pensar em você quando a professora do filho diz que ele não está acompanhando.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-8">
            <h3 className="font-extrabold text-[20px] text-saas-ink leading-tight mb-4 flex items-center gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet" />
              Cenário 1 · Vila Leopoldina
            </h3>
            <p className="text-saas-body text-[15px] leading-relaxed">
              ~1.600 famílias pagantes, 8 impactos por mês em cada uma, por aproximadamente <b className="text-saas-ink font-semibold">R$450/mês</b>. Você já investe R$500.
            </p>
          </Card>
          <Card className="p-8">
            <h3 className="font-extrabold text-[20px] text-saas-ink leading-tight mb-4 flex items-center gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet" />
              Cenário 2 · + Lapa e Alto da Lapa
            </h3>
            <p className="text-saas-body text-[15px] leading-relaxed">
              O universo sobe para cerca de 5.100 famílias pagantes e o custo para aproximadamente <b className="text-saas-ink font-semibold">R$1.400/mês</b> — ainda menos do que os R$2.000 do ano passado.
            </p>
          </Card>
        </div>

        <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/[0.14] px-6 py-3 text-sm text-saas-body">
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet animate-pulse" />
          <span>
            E há uma segunda camada: <b className="font-semibold text-saas-ink">sua concorrente também não está fazendo isso</b>. Nenhuma está. Esse território está vago.
          </span>
        </div>

        <p className="mt-8 text-saas-faint text-[13px] leading-relaxed max-w-[760px]">
          Os números de população são oficiais. Os de mídia são projeção baseada em CPM médio para São Paulo com segmentação local — validamos no gerenciador na primeira semana.
        </p>
      </div>

      {/* ── A TESE ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>04 A tese</Eyebrow>
        <h2 className={"mt-5 " + H2_CLS}>Local não é limitação. É a vantagem.</h2>

        <div className="mt-8 space-y-5 text-saas-body leading-relaxed">
          <p className="text-[20px] max-w-[760px]">
            Aparecer para todas as mães do Brasil custa milhões. Aparecer para todas as mães com filho em idade escolar da sua região custa menos do que você já gasta hoje.
          </p>
          <p className="max-w-[760px]">
            É um universo que cabe no seu orçamento atual, e é exatamente onde ninguém está olhando. O que falta na sua operação não é execução — você grava, você cria, você teve a ideia do quadro na Paulista sozinha e ela foi o conteúdo que mais performou no seu perfil.
          </p>
        </div>

        <Card className="mt-8 p-9">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan mb-4">A cadeira vazia</p>
          <h3 className="font-extrabold text-[24px] text-saas-ink leading-tight">
            O que falta é alguém sentado na cadeira de <Accent>diretor de marketing</Accent>.
          </h3>
          <p className="text-saas-body text-[15px] leading-relaxed mt-4 max-w-[760px]">
            Quem lê os números toda semana, decide onde o dinheiro vai, define o que vale gravar e cobra resultado de cada real investido. É essa cadeira que eu ocupo.
          </p>
        </Card>
      </div>

      {/* ── ESCOPO ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>05 Escopo</Eyebrow>
        <h2 className={"mt-5 " + H2_CLS}>O que eu faço — e o que eu não faço</h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-saas-violet/40 p-9">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan mb-4">Eu faço</p>
            <ul>
              {euFaco.map((item) => (
                <li key={item} className="text-saas-body text-[14.5px] leading-relaxed py-3 border-b border-white/[0.06] last:border-0">
                  <span className="text-saas-cyan mr-2">→</span>{item}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-9">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-muted mb-4">Eu não faço</p>
            <ul>
              {naoFaco.map((item) => (
                <li key={item} className="text-saas-body text-[14.5px] leading-relaxed py-3 border-b border-white/[0.06] last:border-0">
                  <span className="text-saas-faint mr-2">–</span>{item}
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-xl bg-white/[0.03] border border-white/[0.08] p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan mb-2">Por que assim</p>
              <p className="text-saas-body text-[14.5px] leading-relaxed">
                Cobrar de você um gestor de tráfego a R$2.000/mês elevaria seu custo mensal para R$3.200. Com receita de R$1.200 por paciente, você precisaria fechar <b className="text-saas-ink font-semibold">três pacientes novos por mês</b> só para empatar. Mantendo a operação com vocês, o break-even é de <b className="text-saas-ink font-semibold">um paciente</b> — mais barato, mais rápido, e o conhecimento fica dentro de casa.
              </p>
            </div>
          </Card>
        </div>
      </div>

      {/* ── COMO FUNCIONA ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>06 Como funciona</Eyebrow>
        <h2 className={"mt-5 " + H2_CLS}>Duas fases</h2>

        <div className="mt-10">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-saas-muted whitespace-nowrap">
              Fase 1 · Fundação · dias 1 a 30
            </span>
            <span className="h-px flex-1 bg-white/[0.10]" />
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {fase1.map((bloco) => (
              <Card key={bloco.titulo} className="p-8">
                <h4 className="font-extrabold text-[19px] text-saas-ink leading-tight mb-3">{bloco.titulo}</h4>
                <ul>
                  {bloco.itens.map((item) => (
                    <li key={item} className="text-saas-body text-[14px] leading-relaxed py-2.5 border-b border-white/[0.06] last:border-0">
                      <span className="text-saas-cyan mr-2">→</span>{item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-saas-muted whitespace-nowrap">
              Fase 2 · Direção contínua · dia 31 em diante
            </span>
            <span className="h-px flex-1 bg-white/[0.10]" />
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {fase2.map((item) => (
              <Card key={item.title} className="p-8">
                <h3 className="font-extrabold text-[20px] text-saas-ink leading-tight mb-4 flex items-center gap-3">
                  <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet" />
                  {item.title}
                </h3>
                <p className="text-saas-body text-[15px] leading-relaxed">{item.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* ── O QUE PRECISO DE VOCÊ ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>07 Antes de começar</Eyebrow>
        <h2 className={"mt-5 " + H2_CLS}>O que eu preciso de você</h2>

        <Card className="mt-8 p-8">
          <ul>
            {precisamos.map((item) => (
              <li key={item} className="text-saas-body text-[15px] leading-relaxed py-4 border-b border-white/[0.06] last:border-0">
                <span className="text-saas-cyan mr-2">→</span>{item}
              </li>
            ))}
          </ul>
        </Card>

        <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/[0.14] px-6 py-3 text-sm text-saas-body">
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet animate-pulse" />
          <span>
            Recomendo começar com <b className="font-semibold text-saas-ink">R$500</b> e expandir o raio só depois do primeiro paciente fechado.
          </span>
        </div>
      </div>

      {/* ── COMO MEDIMOS ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>08 Medição</Eyebrow>
        <h2 className={"mt-5 " + H2_CLS}>Como medimos que está funcionando</h2>

        <Card className="mt-8 p-9 border-saas-violet/40">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan mb-4">Meta dos primeiros 90 dias</p>
          <h3 className="font-extrabold text-[24px] text-saas-ink leading-tight">
            Não é escalar. É atingir o <Accent>break-even do canal próprio</Accent>.
          </h3>
          <p className="text-saas-body text-[15px] leading-relaxed mt-4 max-w-[760px]">
            Um paciente novo por mês vindo de fora da indicação, com custo de aquisição igual ou menor que R$1.200. Chegando lá, o canal se paga no primeiro mês e todo mês seguinte de permanência daquele paciente é lucro. Só a partir desse ponto faz sentido colocar mais dinheiro.
          </p>
        </Card>

        <Card className="mt-6 p-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-muted mb-2">Indicadores acompanhados</p>
          <ul>
            {indicadores.map((item) => (
              <li key={item} className="text-saas-body text-[15px] leading-relaxed py-4 border-b border-white/[0.06] last:border-0">
                <span className="text-saas-cyan mr-2">→</span>{item}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* ── INVESTIMENTO ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>09 Investimento</Eyebrow>
        <h2 className={"mt-5 " + H2_CLS}>Valor do projeto</h2>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-white/[0.09]">
          <table className="w-full border-collapse min-w-[560px]">
            <thead>
              <tr className="border-b border-white/[0.08]">
                {["Item", "Valor", "Condição"].map((h) => (
                  <th key={h} className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-muted py-3 px-4 text-left bg-saas-card">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {investimento.map((row) => (
                <tr key={row.item} className="border-b border-white/[0.06] last:border-none hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-4 align-top font-extrabold text-saas-ink text-[15px] whitespace-nowrap">{row.item}</td>
                  <td className="py-4 px-4 align-top font-extrabold text-[17px] whitespace-nowrap"><Accent>{row.valor}</Accent></td>
                  <td className="py-4 px-4 align-top text-saas-body text-[13.5px] leading-relaxed">{row.condicao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-white/[0.14] px-6 py-4 text-sm text-saas-body leading-relaxed">
            <b className="font-semibold text-saas-ink">Total do ciclo de 90 dias:</b> R$6.100 — ou <b className="font-semibold text-saas-ink">R$5.500</b> à vista.
          </div>
          <div className="rounded-2xl border border-white/[0.14] px-6 py-4 text-sm text-saas-body leading-relaxed">
            A mídia é paga por você, direto na plataforma, e <b className="font-semibold text-saas-ink">não passa por mim</b>.
          </div>
        </div>

        <Card className="mt-8 p-9 border-saas-violet/40">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan mb-4">Um recorte para dimensionar</p>
          <p className="font-extrabold text-[clamp(19px,2.4vw,26px)] text-saas-ink leading-snug max-w-[760px]">
            R$1.200 por mês é o que um único paciente te paga. Se este trabalho trouxer um paciente a mais por mês, ele se pagou. Se trouxer dois, é a operação mais lucrativa do seu consultório.
          </p>
        </Card>
      </div>

      {/* ── PRÓXIMOS PASSOS ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>10 Próximos passos</Eyebrow>
        <h2 className={"mt-5 " + H2_CLS}>Do sim ao começo</h2>

        <div className="mt-10">
          {proximosPassos.map((step, i) => (
            <div
              key={step.num}
              className={`grid grid-cols-[auto_1fr] gap-6 md:gap-8 py-7 ${i > 0 ? "border-t border-white/[0.06]" : ""}`}
            >
              <div className="text-4xl font-extrabold leading-none bg-gradient-to-r from-saas-cyan to-saas-violet bg-clip-text text-transparent">
                {step.num}
              </div>
              <div>
                <h3 className="font-bold text-saas-ink text-lg">{step.title}</h3>
                <p className="mt-1.5 text-[14.5px] text-saas-body leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <Card className="mt-8 p-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan mb-3">Bônus, independente de fechamento</p>
          <p className="text-saas-body text-[15px] leading-relaxed max-w-[760px]">
            Vou te mandar o resumo estruturado que prometi na call — o que cobrar de um gestor de tráfego e de uma social media, com os critérios de avaliação. É seu para usar comigo ou sem mim.
          </p>
        </Card>
      </div>

      {/* ── SOBRE ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>11 Sobre</Eyebrow>
        <h2 className={"mt-5 " + H2_CLS}>Quem está por trás</h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-[240px_1fr] gap-10 items-start">
          <div className="rounded-2xl overflow-hidden border border-white/[0.09] aspect-square">
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

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard value="+R$130M" label="Gerados em vendas" accent />
          <StatCard value="100+" label="Consultorias" />
          <StatCard value="+7" label="Países atendidos" />
          <StatCard value="+54" label="Avaliações 5★" />
        </div>
      </div>

      {/* ── REFERÊNCIAS ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>12 Referências</Eyebrow>
        <h2 className={"mt-5 " + H2_CLS}>Nossos mentores</h2>
        <p className="mt-5 text-saas-body leading-relaxed max-w-[760px]">
          Aprendemos diretamente com alguns dos maiores líderes do mercado brasileiro.
        </p>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { photo: diegoBarretoPhoto, name: "Diego Barreto", role: "CEO · iFood", desc: "Autor do best-seller Nova Economia, lidera a expansão e inovação no iFood." },
            { photo: pedroSommaPhoto, name: "Pedro Somma", role: "Ex-COO · 99", desc: "Papel fundamental na expansão e operação da 99, consolidando-a como líder em mobilidade." },
            { photo: vaboPhoto, name: "Luis Vabo Jr.", role: "Ex-diretor · Stone", desc: "Empreendedor serial, investidor e autor de Falar em público é para você!." },
            { photo: joaoOliverioPhoto, name: "João Olivério", role: "CEO · Sales As A System", desc: "Especialista em vendas, Country Manager da Apollo.io e mentor no G4 Sales." },
            { photo: joseDiogoPhoto, name: "José Diogo C. Rodrigues", role: "CMO Latam · Tinder", desc: "Experiência em Brand Marketing na Nike, Red Bull e atualmente Tinder Latam & Canadá." },
          ].map((ref) => (
            <div key={ref.name} className="rounded-2xl overflow-hidden border border-white/[0.09] bg-saas-card">
              <div className="overflow-hidden" style={{ aspectRatio: "1.4" }}>
                <img
                  loading="lazy"
                  src={ref.photo}
                  alt={ref.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-5">
                <p className="font-extrabold text-[18px] text-saas-ink leading-tight">{ref.name}</p>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-saas-cyan mt-2">{ref.role}</p>
                <p className="text-[13.5px] text-saas-muted leading-relaxed mt-2">{ref.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA FINAL ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>Próximo passo</Eyebrow>
        <h2 className="mt-5 font-extrabold text-saas-ink text-[clamp(34px,6vw,64px)] leading-[1.05] tracking-tight">
          A indicação continua.<br />O acaso, não<Accent>.</Accent>
        </h2>
        <p className="mt-6 text-saas-body text-[18px] leading-relaxed max-w-[680px]">
          Mil e seiscentas famílias moram a poucos quilômetros do seu consultório e nenhuma concorrente está falando com elas. O que falta é direção — e ela custa menos do que um paciente por mês.
        </p>
        <div className="mt-10">
          <a
            href="https://wa.me/5511999718595"
            target="_blank"
            rel="noopener noreferrer"
            className={SAAS_BTN_PRIMARY}
            onClick={() => tracker.track("cta_click", { product: "daniele-dias-gomes", location: "proposta_cta" })}
          >
            Falar com Rodrigo <span aria-hidden>→</span>
          </a>
        </div>
        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-saas-faint">
          Proposta válida por 15 dias · Data: 18/08/2026
        </p>
      </div>

    </PropostaLayout>
  );
};

export default PropostaDanieleDiasGomes;
