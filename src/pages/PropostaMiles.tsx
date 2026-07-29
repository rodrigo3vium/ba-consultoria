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

const custos = [
  {
    num: "CUSTO 01",
    title: "Você reprocessa a mesma conversa várias vezes",
    body: "Cada cotação obriga você a voltar e reler pra lembrar destino, data e preferência. Você não está cotando — está fazendo arqueologia.",
  },
  {
    num: "CUSTO 02",
    title: "Áudio é informação presa",
    body: "O empresário apressado manda áudio. Áudio não se busca, não se filtra, não se lê na diagonal. Ou você ouve tudo de novo, ou perde.",
  },
  {
    num: "CUSTO 03",
    title: "Cliente que volta começa do zero",
    body: "Viagem corporativa é recompra. Na segunda vez, tudo que você já sabia sobre o cara — companhia preferida, assento, fidelidade, quem aprova a despesa — mora só na sua memória.",
  },
  {
    num: "CUSTO 04",
    title: "Você não sabe qual parceiro presta",
    body: "Intercâmbio, agência de modelos, indicação direta: todos mandam, nenhum tem número.",
  },
  {
    num: "CUSTO 05",
    title: "Cotação enviada e não respondida some",
    body: "Você mandou preço, o cara sumiu, e não existe lista de \"quanto dinheiro está parado esperando resposta\".",
  },
];

const blocosOrganizacao = [
  {
    num: "01",
    title: "Cada lead com o parceiro carimbado",
    body: "Todo lead entra marcado: veio do intercâmbio, da agência de modelos, de indicação direta, ou descobriu vocês sozinho. E o relatório fecha a conta — quantos mandou, quantos fecharam, quanto de receita gerou.",
    kicker: "Você para de achar e passa a saber qual parceria vale.",
  },
  {
    num: "02",
    title: "Uma porta só",
    body: "Seus dois números num painel único, com etiqueta de qual negócio é cada conversa. Acabou caçar conversa entre aparelhos.",
    kicker: null,
  },
  {
    num: "03",
    title: "Funil à vista",
    body: "Cada lead vira um card numa etapa: novo → cotando → cotação enviada → fechado. O card mostra o que ele pediu, quando falou com vocês pela última vez e há quanto tempo está parado.",
    kicker: null,
  },
];

const blocosInteligencia = [
  {
    num: "04",
    title: "Áudio vira texto na hora",
    body: "Cliente manda áudio de dois minutos, o sistema transcreve automaticamente. O que era informação presa vira texto que você lê em quinze segundos, busca por palavra e nunca mais precisa reouvir.",
    kicker: null,
  },
  {
    num: "05",
    title: "A conversa preenche a ficha sozinha",
    body: "O sistema lê a conversa inteira — texto e áudio transcrito — e monta a ficha do pedido: quem viaja, destino, datas de ida e volta, quantas pessoas, preferências, orçamento mencionado, urgência, qual empresa. Você abre o card e o pedido já está estruturado.",
    kicker: "É isso que mata a cotação paralela.",
  },
  {
    num: "06",
    title: "Ficha do viajante que acumula",
    body: "Cada informação que aparece numa conversa fica registrada no cliente: companhia que ele prefere, assento, programa de fidelidade, quem aprova a despesa na empresa dele, restrições de horário. Na terceira viagem do mesmo executivo, você cota em dois minutos com a preferência certa — sem perguntar de novo o que ele já respondeu.",
    kicker: "Em viagem corporativa, onde o mesmo cliente volta todo mês, isso é a diferença entre atender e ser insubstituível.",
  },
  {
    num: "07",
    title: "Resumo de onde parou, antes de responder",
    body: "Abriu a conversa, o sistema te dá em três linhas: quem é essa pessoa, do que se trata, o que ficou pendente e qual o próximo passo. Você responde com o contexto na tela, não na memória.",
    kicker: null,
  },
  {
    num: "08",
    title: "Cotação enviada vira registro com desfecho",
    body: "Toda cotação que sai é registrada com status: aceita, recusada, em aberto, sem desfecho. Você abre uma lista e vê exatamente quanto dinheiro está parado esperando resposta — hoje isso é invisível.",
    kicker: null,
  },
  {
    num: "09",
    title: "Fila do dia e follow-up",
    body: "O sistema ordena quem responder primeiro, por etapa e por tempo parado, e classifica quem está mais pronto pra fechar. Lead que ficou dias sem resposta aparece sozinho na sua tela.",
    kicker: null,
  },
  {
    num: "10",
    title: "Pergunta ao histórico",
    body: "\"Quem já viajou pra Orlando?\" · \"Quais cotações do intercâmbio ficaram sem resposta esse mês?\" · \"Quem mencionou renovar contrato anual?\" — você pergunta, o sistema responde a partir das conversas.",
    kicker: null,
  },
];

const foraDoEscopo = [
  "Não é robô respondendo cliente no seu lugar. A conversa continua sua. O sistema lê, organiza, prioriza e te entrega mastigado — quem fala com o cliente é você.",
  "Não integra com sistema de emissão nem GDS. Se fizer sentido, entra como fase seguinte, escopada e orçada à parte.",
  "Não faz geração de lead nem tráfego pago. O foco é o que já chega e se perde.",
];

const semanas = [
  {
    num: "01",
    title: "Semana 1 — Central no ar",
    desc: "Dois números unificados, funil configurado do seu jeito, histórico entrando, origem e parceiro sendo carimbados. Aqui você já para de caçar conversa.",
  },
  {
    num: "02",
    title: "Semana 2 — Inteligência ligada",
    desc: "Transcrição de áudio, extração automática do pedido e da ficha do viajante rodando sobre as conversas — inclusive o histórico que já existe.",
  },
  {
    num: "03",
    title: "Semana 3 — Operação assistida",
    desc: "Fila do dia, cotações com desfecho, resumo de contexto e pergunta ao histórico.",
  },
];

const essencialItens = [
  "Central unificada dos dois números",
  "Funil à vista, com card por lead",
  "Carimbo de origem e parceiro em todo lead",
  "Relatório de conversão por parceiro",
];

const inteligenteItens = [
  "Tudo do Essencial",
  "Transcrição automática de áudio",
  "Ficha do pedido preenchida pela própria conversa",
  "Ficha do viajante que acumula entre viagens",
  "Resumo de contexto antes de responder",
  "Cotações com desfecho rastreado",
  "Fila do dia com priorização",
  "Pergunta ao histórico",
];

const infraPontos = [
  {
    title: "O sistema é seu de verdade",
    body: "Não existe cenário em que você fica refém de mim pra continuar operando.",
  },
  {
    title: "Você não paga mensalidade de licença",
    body: "Paga o setup, uma vez.",
  },
  {
    title: "O custo de operação é seu, direto ao provedor, e é baixo",
    body: "No Essencial, algo entre R$150 e R$300 por mês. No Inteligente, entre R$300 e R$700, porque entra o processamento de IA das conversas — proporcional ao volume, e você vê cada centavo no painel do provedor. Abro as contas junto com você no primeiro dia.",
  },
];

const precisamos = [
  "Acesso aos dois números de WhatsApp",
  "A lista dos parceiros que hoje mandam lead",
  "Uma hora sua na primeira semana pra fechar as etapas do funil do jeito que a Miles trabalha",
  "No Inteligente: os contatos que você quer fora da análise, marcados logo no primeiro dia",
];

const BlocoLista = ({
  items,
}: {
  items: { num: string; title: string; body: string; kicker: string | null }[];
}) => (
  <div>
    {items.map((b, i) => (
      <div
        key={b.num}
        className={`grid grid-cols-[auto_1fr] gap-6 md:gap-8 py-8 ${i > 0 ? "border-t border-white/[0.06]" : ""}`}
      >
        <div className="text-4xl font-extrabold leading-none bg-gradient-to-r from-saas-cyan to-saas-violet bg-clip-text text-transparent">
          {b.num}
        </div>
        <div>
          <h3 className="font-extrabold text-saas-ink text-[21px] leading-tight">{b.title}</h3>
          <p className="mt-3 text-[15px] text-saas-body leading-relaxed max-w-[700px]">{b.body}</p>
          {b.kicker ? (
            <p className="mt-3 text-[15px] font-semibold text-saas-ink leading-relaxed max-w-[700px]">
              {b.kicker}
            </p>
          ) : null}
        </div>
      </div>
    ))}
  </div>
);

const PropostaMiles = () => {
  useEffect(() => {
    tracker.page("Proposta Miles");
  }, []);

  return (
    <PropostaLayout
      cliente="Pedro Lucas · Miles"
      projeto="Central de Leads Miles"
      data="29 de julho de 2026"
    >

      {/* ── O DIAGNÓSTICO ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>01 O diagnóstico</Eyebrow>
        <h2 className="mt-5 font-extrabold text-saas-ink text-[clamp(28px,4.6vw,52px)] leading-[1.08] tracking-tight">
          Seu problema não é organizar conversa.<br />É que tudo que importa está <Accent>dentro delas</Accent>.
        </h2>

        <p className="mt-8 text-saas-body text-[20px] leading-relaxed max-w-[760px]">
          O destino, as datas, quem viaja, a preferência de voo, o orçamento, o parceiro que indicou — está tudo lá, no meio de trezentas mensagens e de um áudio de dois minutos que você já ouviu duas vezes.
        </p>

        <Card className="mt-8 p-9 border-saas-violet/40">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan mb-4">Nas suas palavras</p>
          <p className="font-extrabold text-[clamp(20px,2.6vw,28px)] text-saas-ink leading-snug max-w-[760px]">
            "Não ficar perdendo muito tempo com cotação paralela, eu tenho que ficar procurando mensagem."
          </p>
        </Card>

        <p className="mt-8 text-saas-body text-[20px] leading-relaxed max-w-[760px]">
          Nenhuma pasta organizada resolve isso. O que resolve é o sistema <b className="text-saas-ink font-semibold">ler</b> a conversa por você.
        </p>
      </div>

      {/* ── O QUE EU ENTENDI DA MILES ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>02 Contexto</Eyebrow>
        <h2 className={"mt-5 " + H2_CLS}>O que eu entendi da Miles</h2>

        <div className="mt-8 space-y-5 text-saas-body leading-relaxed">
          <p className="text-[20px] max-w-[760px]">
            Agência de viagens corporativa. O cliente é o empresário que não dá conta de procurar passagem e tocar a empresa ao mesmo tempo — vocês assumem a logística por ele. Em paralelo, atendem parceiros: intercâmbio, agência de modelos.
          </p>
          <p className="max-w-[760px]">
            Lead chega por indicação e por descoberta. Cai no WhatsApp da empresa e no seu pessoal — que também tem cliente da empresa e outros negócios seus.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-8">
            <h3 className="font-extrabold text-[20px] text-saas-ink leading-tight mb-4 flex items-center gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet" />
              Comercial pequeno é decisão, não defeito
            </h3>
            <p className="text-saas-body text-[15px] leading-relaxed">
              O comercial é pequeno por escolha sua. Não é defeito a corrigir, é decisão que a operação precisa sustentar. Hoje ela não sustenta.
            </p>
          </Card>
          <Card className="p-8">
            <h3 className="font-extrabold text-[20px] text-saas-ink leading-tight mb-4 flex items-center gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet" />
              Duas saídas
            </h3>
            <p className="text-saas-body text-[15px] leading-relaxed">
              Contratar alguém pra caçar informação dentro de conversa, ou fazer o sistema ler. A primeira custa salário, encargos, treinamento, e tira férias.
            </p>
          </Card>
        </div>
      </div>

      {/* ── O QUE ISSO CUSTA HOJE ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>03 O custo do modelo atual</Eyebrow>
        <h2 className={"mt-5 " + H2_CLS}>O que isso custa hoje</h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {custos.map((card) => (
            <Card key={card.num} className="p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-saas-cyan mb-4">{card.num}</p>
              <h4 className="font-extrabold text-[20px] text-saas-ink leading-tight mb-4">{card.title}</h4>
              <p className="text-saas-muted text-[14.5px] leading-relaxed">{card.body}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* ── O QUE A MILES PASSA A TER ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>04 A entrega</Eyebrow>
        <h2 className={"mt-5 " + H2_CLS}>O que a Miles passa a ter</h2>

        <div className="mt-10">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-saas-muted whitespace-nowrap">
              Blocos de organização
            </span>
            <span className="h-px flex-1 bg-white/[0.10]" />
          </div>
          <BlocoLista items={blocosOrganizacao} />
        </div>

        <div className="mt-12">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-saas-cyan whitespace-nowrap">
              Blocos de inteligência
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-saas-cyan/40 to-transparent" />
          </div>
          <BlocoLista items={blocosInteligencia} />
        </div>
      </div>

      {/* ── PRIVACIDADE ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>05 Privacidade</Eyebrow>
        <h2 className={"mt-5 " + H2_CLS}>Sobre o seu WhatsApp pessoal</h2>

        <div className="mt-8 space-y-5 text-saas-body leading-relaxed">
          <p className="text-[20px] max-w-[760px]">
            Você mesmo disse: o número pessoal tem cliente da empresa, mas tem outros negócios seus — e tem sua vida.
          </p>
        </div>

        <Card className="mt-8 p-9 border-saas-violet/40">
          <p className="text-saas-body text-[17px] leading-relaxed max-w-[760px]">
            Todo contato tem um botão de <b className="text-saas-ink font-semibold">excluir da análise</b>. Marcou, a IA nunca lê aquela conversa, e o que já tiver sido registrado daquele contato é apagado. Família, sócio, assunto pessoal: fora do sistema, definitivamente.
          </p>
          <p className="text-saas-muted text-[15px] leading-relaxed mt-4 max-w-[760px]">
            Isso não é detalhe de contrato. É requisito de construção, e está aqui por escrito porque você vai plugar um número pessoal.
          </p>
        </Card>
      </div>

      {/* ── O QUE NÃO ESTÁ INCLUSO ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>06 Escopo</Eyebrow>
        <h2 className={"mt-5 " + H2_CLS}>O que não está incluso</h2>

        <Card className="mt-8 p-8">
          <ul>
            {foraDoEscopo.map((item) => (
              <li key={item} className="text-saas-body text-[15px] leading-relaxed py-4 border-b border-white/[0.06] last:border-0">
                <span className="text-saas-faint mr-2">–</span>{item}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* ── INVESTIMENTO ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>07 Investimento</Eyebrow>
        <h2 className={"mt-5 " + H2_CLS}>Duas formas de começar</h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-9">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-muted mb-4">Essencial</p>
            <h3 className="font-extrabold text-[32px] text-saas-ink leading-tight">R$6.000</h3>
            <p className="text-saas-ink text-[15px] font-semibold leading-relaxed mt-3">
              O sistema organiza. Você continua fazendo o trabalho de leitura.
            </p>
            <p className="text-saas-muted text-[14px] leading-relaxed mt-3 mb-4">
              Blocos 1, 2 e 3.
            </p>
            <ul>
              {essencialItens.map((item) => (
                <li key={item} className="text-saas-body text-[14.5px] leading-relaxed py-3 border-b border-white/[0.06] last:border-0">
                  <span className="text-saas-cyan mr-2">→</span>{item}
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-xl bg-white/[0.03] border border-white/[0.08] p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-muted mb-2">Chega uma conversa nova</p>
              <p className="text-saas-body text-[14.5px] leading-relaxed">
                Ela aparece no lugar certo, com o parceiro marcado, e você lê pra saber o que o cliente quer.
              </p>
            </div>
          </Card>

          <Card className="border-saas-violet/40 p-9">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan mb-4">Inteligente · Recomendado</p>
            <h3 className="font-extrabold text-[32px] leading-tight"><Accent>R$12.000</Accent></h3>
            <p className="text-saas-ink text-[15px] font-semibold leading-relaxed mt-3">
              O sistema lê, entende e te entrega mastigado.
            </p>
            <p className="text-saas-muted text-[14px] leading-relaxed mt-3 mb-4">
              Tudo do Essencial, mais os blocos 4 a 10.
            </p>
            <ul>
              {inteligenteItens.map((item) => (
                <li key={item} className="text-saas-body text-[14.5px] leading-relaxed py-3 border-b border-white/[0.06] last:border-0">
                  <span className="text-saas-cyan mr-2">→</span>{item}
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-xl bg-white/[0.03] border border-white/[0.08] p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan mb-2">Chega uma conversa nova</p>
              <p className="text-saas-body text-[14.5px] leading-relaxed">
                O áudio já está transcrito, o pedido já está estruturado no card, o sistema já te diz quem é o cliente e o que ele prefere, e já colocou ele na ordem certa da sua fila.
              </p>
            </div>
          </Card>
        </div>

        <Card className="mt-8 p-9 border-saas-violet/40">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan mb-4">A diferença entre os dois, em uma frase</p>
          <p className="font-extrabold text-[clamp(19px,2.4vw,26px)] text-saas-ink leading-snug max-w-[760px]">
            No Essencial você para de perder conversa. No Inteligente você para de perder tempo dentro dela.
          </p>
        </Card>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-white/[0.14] px-6 py-4 text-sm text-saas-body leading-relaxed">
            <b className="font-semibold text-saas-ink">Ambos:</b> 50% na assinatura, 50% na entrega. 30 dias de suporte após a entrega final.
          </div>
          <div className="rounded-2xl border border-white/[0.14] px-6 py-4 text-sm text-saas-body leading-relaxed">
            Quem começa no Essencial pode subir pro Inteligente depois por <b className="font-semibold text-saas-ink">R$7.000</b>.
          </div>
        </div>

        <Card className="mt-6 p-9">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan mb-4">Uma conta pra fazer</p>
          <p className="text-saas-body text-[17px] leading-relaxed max-w-[760px]">
            Um assistente comercial júnior custa em torno de <b className="text-saas-ink font-semibold">R$3.500 por mês</b> com encargos, e você ainda precisa explicar tudo pra ele. O Inteligente se paga em <b className="text-saas-ink font-semibold">menos de quatro meses</b> — e não pede férias, não pede aumento e não leva o histórico embora quando sai.
          </p>
        </Card>
      </div>

      {/* ── PRAZO ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>08 Prazo</Eyebrow>
        <h2 className={"mt-5 " + H2_CLS}>Três semanas do aceite ao sistema rodando</h2>

        <div className="mt-10">
          {semanas.map((step, i) => (
            <div
              key={step.num}
              className={`grid grid-cols-[auto_1fr] gap-6 md:gap-8 py-7 ${i > 0 ? "border-t border-white/[0.06]" : ""}`}
            >
              <div className="text-4xl font-extrabold leading-none bg-gradient-to-r from-saas-cyan to-saas-violet bg-clip-text text-transparent">
                {step.num}
              </div>
              <div>
                <h3 className="font-bold text-saas-ink text-lg">{step.title}</h3>
                <p className="mt-1.5 text-[14.5px] text-saas-body leading-relaxed max-w-[700px]">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 inline-flex items-start gap-3 rounded-2xl border border-white/[0.14] px-6 py-4 text-sm text-saas-body max-w-[760px]">
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet animate-pulse mt-1.5 shrink-0" />
          <span className="leading-relaxed">
            Não são três meses porque não estou construindo do zero — essa base já existe e já roda em produção.
          </span>
        </div>

        <p className="mt-4 text-saas-faint text-[13.5px] leading-relaxed max-w-[760px] italic">
          No Essencial, a entrega se concentra na semana 1 e nos ajustes da semana 2.
        </p>
      </div>

      {/* ── INFRAESTRUTURA ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>09 Infraestrutura</Eyebrow>
        <h2 className={"mt-5 " + H2_CLS}>O sistema roda no seu nome</h2>
        <p className="mt-5 text-saas-body text-[20px] leading-relaxed max-w-[760px]">
          Servidor, banco de dados, conexão com o WhatsApp e a chave de IA ficam registrados na Miles — não em nome meu.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {infraPontos.map((p) => (
            <Card key={p.title} className="p-8">
              <h3 className="font-extrabold text-[19px] text-saas-ink leading-tight mb-4 flex items-start gap-3">
                <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet mt-2 shrink-0" />
                {p.title}
              </h3>
              <p className="text-saas-muted text-[14.5px] leading-relaxed">{p.body}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* ── O QUE PRECISO DE VOCÊ ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>10 Antes de começar</Eyebrow>
        <h2 className={"mt-5 " + H2_CLS}>O que preciso de você</h2>

        <Card className="mt-8 p-8">
          <ul>
            {precisamos.map((item) => (
              <li key={item} className="text-saas-body text-[15px] leading-relaxed py-4 border-b border-white/[0.06] last:border-0">
                <span className="text-saas-cyan mr-2">→</span>{item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-saas-ink text-[15px] font-semibold leading-relaxed">
            O resto é comigo.
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
          A informação já chegou.<br />Falta parar de escavar<Accent>.</Accent>
        </h2>
        <p className="mt-6 text-saas-body text-[18px] leading-relaxed max-w-[680px]">
          Lê, marca o que faz sentido e o que não faz, e me devolve. Escolhido o plano, eu mando o contrato e a primeira semana começa no dia seguinte ao pagamento da entrada.
        </p>
        <div className="mt-10">
          <a
            href="https://wa.me/5511999718595"
            target="_blank"
            rel="noopener noreferrer"
            className={SAAS_BTN_PRIMARY}
            onClick={() => tracker.track("cta_click", { product: "miles", location: "proposta_cta" })}
          >
            Falar com Rodrigo <span aria-hidden>→</span>
          </a>
        </div>
        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-saas-faint">
          Rodrigo Albuquerque · BA · 29/07/2026
        </p>
      </div>

    </PropostaLayout>
  );
};

export default PropostaMiles;
