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
    title: "Você não sabe qual parceiro presta",
    body: "Intercâmbio, agência de modelos, indicação direta — todos mandam lead, nenhum tem número. Sem isso você não decide onde investir relacionamento, e trata igual quem manda cliente que fecha e quem manda volume que não vira nada.",
  },
  {
    num: "CUSTO 02",
    title: "Ordem de chegada virou sua priorização",
    body: "Quem falou ontem foi empurrado pra baixo por quem falou hoje. Ordem de chegada não tem relação nenhuma com quem está pronto pra fechar.",
  },
  {
    num: "CUSTO 03",
    title: "Cotação paralela come seu dia",
    body: "Enquanto você caça mensagem pra lembrar o que o cara pediu, você não está cotando nem fechando.",
  },
  {
    num: "CUSTO 04",
    title: "A operação mora na sua cabeça",
    body: "O que segura tudo hoje é sua memória. Memória não escala, não delega e não tira férias.",
  },
];

const blocos = [
  {
    num: "01",
    title: "Cada lead com o parceiro carimbado",
    body: "Todo lead entra marcado na origem: veio do intercâmbio, da agência de modelos, de indicação direta, ou descobriu vocês sozinho. E o relatório fecha a conta por parceiro — quantos mandou, quantos viraram cliente, quanto de receita gerou.",
    kicker: "Você para de achar e passa a saber qual parceria vale a pena.",
  },
  {
    num: "02",
    title: "Uma porta só",
    body: "Seus dois números — pessoal e da empresa — entram num painel único, com etiqueta de qual negócio é cada conversa. Acabou caçar conversa. Se amanhã quiser plugar um terceiro número, entra no mesmo lugar.",
    kicker: null,
  },
  {
    num: "03",
    title: "Funil à vista",
    body: "Cada lead vira um card numa etapa: novo → cotando → proposta enviada → fechado. O card mostra o que ele pediu, quando falou com vocês pela última vez e há quanto tempo está parado.",
    kicker: "Lead parado fica visível. Hoje ele só desaparece.",
  },
  {
    num: "04",
    title: "Painel de gestão",
    body: "Quantos leads entraram, por onde entraram, tempo médio de resposta, conversão por parceiro, o que está travado. Uma tela — a gestão à vista que você pediu.",
    kicker: null,
  },
  {
    num: "05",
    title: "Fila do dia",
    body: "O sistema ordena quem responder primeiro, pela etapa e pelo tempo parado. Você abre de manhã e já sabe onde encostar.",
    kicker: "Não é o WhatsApp decidindo sua ordem por quem mandou mensagem por último.",
  },
  {
    num: "06",
    title: "Follow-up que não depende de lembrar",
    body: "Lead que ficou dias sem resposta aparece sozinho na sua tela. O que hoje se perde por esquecimento vira uma linha na lista.",
    kicker: null,
  },
];

const foraDoEscopo = [
  "Não é robô respondendo cliente no seu lugar. A conversa continua sua. O sistema organiza, prioriza e registra.",
  "Não integra com sistema de emissão nem GDS. Se fizer sentido, entra como fase seguinte, escopada e orçada à parte.",
  "Não faz geração de lead nem tráfego pago. O foco aqui é o que já chega e se perde.",
];

const semanas = [
  {
    num: "01",
    title: "Semana 1 — Central no ar",
    desc: "Seus dois números unificados, funil configurado do seu jeito, histórico entrando, origem e parceiro já sendo carimbados. Nesta semana você já para de caçar conversa.",
  },
  {
    num: "02",
    title: "Semana 2 — Gestão à vista",
    desc: "Painel de indicadores, relatório por parceiro, ajustes do funil com base no uso real da primeira semana.",
  },
  {
    num: "03",
    title: "Semana 3 — Automação",
    desc: "Fila do dia e alertas de lead parado.",
  },
];

const essencialItens = [
  "Central unificada dos dois números",
  "Funil à vista, com card por lead",
  "Carimbo de origem e parceiro em todo lead",
  "Relatório de conversão por parceiro",
  "50% na assinatura, 50% na entrega",
  "30 dias de suporte após a entrega final",
];

const completoItens = [
  "Tudo do Essencial",
  "Painel de gestão com indicadores",
  "Fila do dia priorizada por etapa e tempo parado",
  "Follow-up automático de lead parado",
  "As três semanas completas, os seis blocos",
  "50% na assinatura, 50% na entrega",
  "30 dias de suporte após a entrega final",
];

const infraPontos = [
  {
    title: "O sistema é seu de verdade",
    body: "Não existe cenário em que você fica refém de mim pra continuar operando.",
  },
  {
    title: "Você não paga mensalidade de licença",
    body: "O que você paga é o setup, uma vez.",
  },
  {
    title: "O custo de operação é seu e é baixo",
    body: "Na faixa de volume que você descreveu, fica em torno de R$150 a R$400 por mês, pago direto aos provedores. Eu abro as contas junto com você no primeiro dia e te mostro exatamente onde cada centavo cai.",
  },
];

const precisamos = [
  "Acesso aos dois números de WhatsApp que entram no sistema",
  "A lista dos parceiros que hoje mandam lead",
  "Uma hora sua na primeira semana pra fechar as etapas do funil do jeito que a Miles trabalha",
];

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
        <h2 className="mt-5 font-extrabold text-saas-ink text-[clamp(30px,5vw,56px)] leading-[1.08] tracking-tight">
          Você não tem problema de lead.<br />Tem problema de <Accent>rastro</Accent>.
        </h2>

        <div className="mt-8 space-y-5 text-saas-body leading-relaxed">
          <p className="text-[20px] max-w-[760px]">
            Lead chega por indicação, chega por quem descobre vocês, chega de parceiro. Cai no WhatsApp da empresa, cai no seu pessoal. E some.
          </p>
        </div>

        <Card className="mt-8 p-9 border-saas-violet/40">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan mb-4">Nas suas palavras</p>
          <p className="font-extrabold text-[clamp(20px,2.6vw,28px)] text-saas-ink leading-snug max-w-[760px]">
            "Tem gente que mandou mensagem ontem e já caiu 15 mensagens em cima."
          </p>
        </Card>

        <p className="mt-8 text-saas-body text-[20px] leading-relaxed max-w-[760px]">
          Não é volume que falta. É saber <b className="text-saas-ink font-semibold">onde cada um está</b> — e <b className="text-saas-ink font-semibold">de onde veio</b>.
        </p>
      </div>

      {/* ── O QUE EU ENTENDI DA MILES ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>02 Contexto</Eyebrow>
        <h2 className={"mt-5 " + H2_CLS}>O que eu entendi da Miles</h2>

        <div className="mt-8 space-y-5 text-saas-body leading-relaxed">
          <p className="text-[20px] max-w-[760px]">
            Vocês são uma agência de viagens corporativa. O cliente é o empresário que não dá conta de procurar passagem e tocar a empresa ao mesmo tempo — vocês assumem a logística por ele. Em paralelo, atendem parceiros: empresas de intercâmbio, agência de modelos.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-8">
            <h3 className="font-extrabold text-[20px] text-saas-ink leading-tight mb-4 flex items-center gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet" />
              Comercial pequeno é decisão, não defeito
            </h3>
            <p className="text-saas-body text-[15px] leading-relaxed">
              O comercial é pequeno por escolha sua. Isso não é um defeito a corrigir. É uma decisão que a operação precisa sustentar — e hoje ela não sustenta.
            </p>
          </Card>
          <Card className="p-8">
            <h3 className="font-extrabold text-[20px] text-saas-ink leading-tight mb-4 flex items-center gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet" />
              Duas saídas
            </h3>
            <p className="text-saas-body text-[15px] leading-relaxed">
              Contratar alguém pra caçar conversa, ou fazer o sistema caçar. A primeira custa salário, encargos, treinamento, e tira férias.
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
        <p className="mt-5 text-saas-body leading-relaxed max-w-[760px]">
          Seis blocos. Cada um resolve uma das coisas que hoje mora na sua cabeça.
        </p>

        <div className="mt-10">
          {blocos.map((b, i) => (
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
                  <p className="mt-3 text-[15px] font-semibold text-saas-ink leading-relaxed max-w-[700px]">{b.kicker}</p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── O QUE NÃO ESTÁ INCLUSO ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>05 Escopo</Eyebrow>
        <h2 className={"mt-5 " + H2_CLS}>O que não está incluso</h2>
        <p className="mt-5 text-saas-body leading-relaxed max-w-[760px]">
          Deixo explícito pra não haver ruído depois.
        </p>

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

      {/* ── COMO SAI DO PAPEL ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>06 Prazo</Eyebrow>
        <h2 className={"mt-5 " + H2_CLS}>Como sai do papel</h2>

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
            <b className="font-semibold text-saas-ink">Três semanas do aceite ao sistema completo rodando.</b> Não são três meses porque não estou construindo do zero — a base já existe e já roda em produção em outra operação.
          </span>
        </div>
      </div>

      {/* ── INVESTIMENTO ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>07 Investimento</Eyebrow>
        <h2 className={"mt-5 " + H2_CLS}>Duas formas de começar</h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-9">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan mb-4">Essencial</p>
            <h3 className="font-extrabold text-[32px] text-saas-ink leading-tight">R$6.000</h3>
            <p className="text-saas-muted text-[14px] leading-relaxed mt-3 mb-4">
              A central, o funil e o rastro de origem. Sem painel de indicadores, sem fila do dia, sem follow-up automático.
            </p>
            <ul>
              {essencialItens.map((item) => (
                <li key={item} className="text-saas-body text-[14.5px] leading-relaxed py-3 border-b border-white/[0.06] last:border-0">
                  <span className="text-saas-cyan mr-2">→</span>{item}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="border-saas-violet/40 p-9">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan mb-4">Completo · Recomendado</p>
            <h3 className="font-extrabold text-[32px] leading-tight"><Accent>R$12.000</Accent></h3>
            <p className="text-saas-muted text-[14px] leading-relaxed mt-3 mb-4">
              Tudo que está descrito acima: as três semanas, os seis blocos.
            </p>
            <ul>
              {completoItens.map((item) => (
                <li key={item} className="text-saas-body text-[14.5px] leading-relaxed py-3 border-b border-white/[0.06] last:border-0">
                  <span className="text-saas-cyan mr-2">→</span>{item}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/[0.14] px-6 py-3 text-sm text-saas-body">
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet" />
          <span>
            Quem começa no Essencial pode subir pro Completo depois por <b className="font-semibold text-saas-ink">R$7.000</b>
          </span>
        </div>

        <Card className="mt-8 p-9">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan mb-4">Uma conta pra você fazer</p>
          <p className="text-saas-body text-[17px] leading-relaxed max-w-[760px]">
            Um assistente comercial júnior custa em torno de <b className="text-saas-ink font-semibold">R$3.500 por mês</b> com encargos. O Completo se paga em <b className="text-saas-ink font-semibold">menos de quatro meses</b> — e não pede férias, não pede aumento e não leva o histórico embora quando sai.
          </p>
        </Card>
      </div>

      {/* ── INFRAESTRUTURA ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>08 Infraestrutura</Eyebrow>
        <h2 className={"mt-5 " + H2_CLS}>O sistema roda no seu nome</h2>
        <p className="mt-5 text-saas-body text-[20px] leading-relaxed max-w-[760px]">
          Servidor, banco de dados e conexão com o WhatsApp ficam registrados na Miles — não em nome meu.
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
        <Eyebrow>09 Antes de começar</Eyebrow>
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
            Só isso. O resto é comigo.
          </p>
        </Card>
      </div>

      {/* ── SOBRE ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>10 Sobre</Eyebrow>
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
        <Eyebrow>11 Referências</Eyebrow>
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
          O lead já chega.<br />Falta parar de perder o rastro<Accent>.</Accent>
        </h2>
        <p className="mt-6 text-saas-body text-[18px] leading-relaxed max-w-[680px]">
          Lê, marca o que faz sentido e o que não faz, e me devolve. Se estiver alinhado, você escolhe o plano, eu mando o contrato e a primeira semana começa no dia seguinte ao pagamento da entrada.
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
