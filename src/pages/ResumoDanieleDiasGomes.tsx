import { useEffect } from "react";
import { tracker } from "@/lib/tracking";
import { Accent, Eyebrow, Card, SAAS_BTN_PRIMARY } from "@/components/saas/ui";

const H2_CLS =
  "font-extrabold text-saas-ink text-[clamp(24px,3.2vw,38px)] leading-[1.14] tracking-tight max-w-[20ch]";

const BODY = "text-saas-body text-[16.5px] leading-[1.75] max-w-[62ch]";

const cenarios = [
  {
    titulo: "Só mídia",
    desc: "R$1.200 por mês investidos em anúncios",
    valor: "1 paciente",
    nota: "para empatar",
    width: "37.5%",
  },
  {
    titulo: "Mídia + gestor de tráfego",
    desc: "R$1.200 de anúncios somados a R$2.000 de honorários",
    valor: "3 pacientes",
    nota: "para empatar",
    width: "100%",
  },
];

const googleMeuNegocio = [
  { t: "Categoria principal correta", d: "Define para quais buscas você aparece. Errar aqui invalida todo o resto." },
  { t: "Serviços cadastrados um a um", d: "Avaliação psicopedagógica, orientação parental, intervenção em dificuldades de aprendizagem. Cada um é uma porta de entrada de busca diferente." },
  { t: "Avaliações com volume e constância", d: "Cinco avaliações recentes pesam mais que trinta antigas. Vale ter um momento fixo no processo de atendimento em que o pedido é feito." },
  { t: "Respostas públicas a todas as avaliações", d: "Quem lê não é quem avaliou — é a próxima mãe decidindo." },
  { t: "Fotos reais e atualizadas do espaço", d: "A decisão de levar uma criança a um consultório é, em boa parte, uma decisão sobre o ambiente." },
  { t: "Publicações periódicas", d: "O perfil é tratado como ativo pelo algoritmo quando tem movimento." },
];

const perguntasGestor = [
  { t: "Qual meta de custo por paciente você trabalharia no meu caso, e por quê?", d: "Quem não pergunta seu ticket e sua permanência média antes de responder não vai olhar para receita." },
  { t: "Como você define o recorte geográfico de um negócio presencial?", d: "A resposta precisa envolver raio e densidade. Se falar só em interesses, é o modelo antigo." },
  { t: "Quantos criativos novos por mês, e quem escreve o roteiro?", d: "Se a resposta for “você manda o material”, ele está vendendo operação, não gestão." },
  { t: "Como você me reporta, e com que frequência?", d: "Relatório que mostra alcance e engajamento sem mostrar custo por contato qualificado não serve para decidir nada." },
  { t: "O que você faz nas primeiras duas semanas se não vier resultado?", d: "Boa resposta descreve hipóteses e testes. Má resposta pede mais verba e mais tempo." },
];

const sinaisAlerta = [
  "Comemorar crescimento de seguidores, alcance ou visualizações num negócio presencial.",
  "Não perguntar quanto vale um paciente para você antes de propor orçamento.",
  "Deixar campanha rodando sem revisão semanal — “está em aprendizado” por mais de duas semanas.",
  "Não saber dizer quantos contatos vieram de dentro do seu raio de atendimento.",
  "Tratar o WhatsApp como fim da linha: quem trouxe o contato precisa saber o que aconteceu depois dele.",
];

const socialMedia = [
  { t: "Perfil legível em cinco segundos", d: "Quem você atende, com o quê, onde. Bio, destaques e primeira dobra do feed precisam responder isso sem que ninguém precise rolar." },
  { t: "Localização explícita em todo lugar", d: "Bio, destaques, legendas. Num negócio local, esconder o bairro é abrir mão da qualificação." },
  { t: "Cadência sustentável e cumprida", d: "Duas publicações por semana durante um ano valem mais que dez numa semana e zero nas três seguintes." },
  { t: "Caminho claro para o contato", d: "Um único destino, sem atrito, com a primeira mensagem já sugerida." },
  { t: "Reaproveitamento do que funcionou", d: "Conteúdo que performou não se abandona: adapta-se e volta ao ar." },
  { t: "Relatório com uma pergunta respondida", d: "O que trouxe conversa, não o que trouxe curtida." },
];

const tresPerguntas = [
  { p: "O que fizemos que funcionou e precisamos continuar fazendo?", d: "Identifica o que já é ativo e não deve ser mexido por tédio." },
  { p: "O que fizemos que não funcionou e precisamos parar?", d: "É a mais difícil, porque quase sempre envolve abandonar algo em que já se investiu." },
  { p: "O que ainda não testamos e vale a pena testar?", d: "Garante que sempre haja hipótese nova entrando na fila." },
];

const resumoFinal = [
  { t: "Seu negócio é local, não digital", d: "Todo investimento precisa ser julgado por essa régua. Contato de fora do raio não conta." },
  { t: "A verba nunca foi o problema", d: "O que faltava era recorte geográfico." },
  { t: "A meta é um paciente por mês fora da indicação", d: "A um custo de até R$1.200. Escalar vem depois disso, nunca antes." },
  { t: "Google Meu Negócio antes de qualquer outra coisa", d: "Maior intenção de compra, menor concorrência, custo próximo de zero." },
  { t: "Conteúdo é autoridade, não captação", d: "Continue fazendo — só não meça o consultório por ele." },
];

/* ── Blocos reutilizáveis ─────────────────────────────── */

const Secao = ({
  num,
  titulo,
  children,
}: {
  num: string;
  titulo: React.ReactNode;
  children: React.ReactNode;
}) => (
  <section className="border-t border-white/[0.06] py-14 md:py-16">
    <Eyebrow>{num}</Eyebrow>
    <h2 className={"mt-5 " + H2_CLS}>{titulo}</h2>
    <div className="mt-7 space-y-5">{children}</div>
  </section>
);

const Lista = ({ items }: { items: { t: string; d: string }[] }) => (
  <ul className="mt-2">
    {items.map((item) => (
      <li key={item.t} className="py-4 border-b border-white/[0.06] last:border-0 max-w-[62ch]">
        <p className="font-semibold text-saas-ink text-[15.5px] leading-snug">
          <span className="text-saas-cyan mr-2">→</span>{item.t}
        </p>
        <p className="text-saas-muted text-[14.5px] leading-relaxed mt-1.5 pl-6">{item.d}</p>
      </li>
    ))}
  </ul>
);

/* ── Página ───────────────────────────────────────────── */

const ResumoDanieleDiasGomes = () => {
  useEffect(() => {
    tracker.page("Resumo Daniele Dias Gomes");
  }, []);

  return (
    <div className="min-h-screen bg-saas-void text-saas-body">
      {/* Meta-bar */}
      <div className="border-b border-white/[0.06] bg-saas-void/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-saas-muted">
              BA Consultoria · Notas da conversa
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-saas-faint hidden sm:block">
            18 de agosto de 2026
          </span>
        </div>
      </div>

      {/* Capa */}
      <div className="relative border-b border-white/[0.06] overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full bg-saas-violet/20 blur-[110px]" />
          <div className="absolute top-0 right-0 w-[520px] h-[420px] rounded-full bg-saas-cyan/15 blur-[110px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 pt-20 pb-16">
          <div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-saas-cyan">
            <span>Notas da nossa conversa</span>
            <span className="h-px w-12 bg-white/[0.14]" />
            <span className="text-saas-muted">Daniele Dias Gomes</span>
          </div>

          <h1 className="font-extrabold text-saas-ink leading-[1.06] tracking-tight text-[clamp(34px,5.6vw,64px)] max-w-[16ch]">
            O dinheiro estava certo.<br />O <Accent>endereço</Accent> estava errado.
          </h1>

          <p className="mt-7 text-saas-body text-[18px] leading-relaxed max-w-[58ch]">
            O que conversamos, organizado — incluindo o resumo que eu fiquei de te mandar sobre o que cobrar de um gestor de tráfego e de uma social media.
          </p>

          <div className="mt-10 flex flex-wrap gap-x-12 gap-y-5">
            {[
              { label: "De", value: "Rodrigo Albuquerque" },
              { label: "Para", value: "Daniele Dias Gomes" },
              { label: "Data", value: "18 de agosto de 2026" },
            ].map((c) => (
              <div key={c.label}>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-saas-cyan mb-1.5">{c.label}</p>
                <p className="text-saas-ink text-[14px] font-semibold">{c.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Conteúdo */}
      <main className="max-w-4xl mx-auto px-6 pb-4">

        <Secao num="01" titulo="O que é este documento">
          <p className={BODY}>
            Ficamos de conversar e eu fiquei de te mandar organizado o raciocínio que usei para olhar o seu negócio, mais a parte prática: os critérios para avaliar quem trabalha no seu marketing.
          </p>
          <p className={BODY}>
            É isto aqui. É seu para usar como quiser, inclusive com qualquer profissional que você contratar daqui em diante.
          </p>
        </Secao>

        <Secao num="02" titulo="A leitura do seu negócio">
          <Card className="p-8 border-saas-violet/40">
            <p className="font-extrabold text-[clamp(19px,2.4vw,26px)] text-saas-ink leading-snug max-w-[30ch]">
              Você não tem um negócio digital. Você tem um <Accent>negócio local</Accent>.
            </p>
          </Card>
          <p className={BODY}>
            Você atende presencialmente, com criança, num consultório fixo. Isso te coloca na mesma categoria de uma clínica de bairro ou de um restaurante — e não na de um produtor de conteúdo.
          </p>
          <p className={BODY}>
            Essa classificação muda uma regra fundamental: <b className="text-saas-ink font-semibold">audiência fora do seu raio de atendimento não é audiência, é custo.</b> Uma seguidora de Petrópolis não é um contato frio que talvez amadureça com o tempo. É uma impossibilidade. Ela nunca vai sentar na sua cadeira, não importa quantas vezes seja impactada.
          </p>
          <p className={BODY}>
            São Paulo agrava isso, porque é uma cidade que contém várias cidades dentro dela. Alguém do outro lado da capital está tão fora do seu alcance quanto alguém de outro estado.
          </p>
          <p className={BODY}>
            O crescimento do perfil no último ano foi real. Mas ele mediu alcance — e alcance não é o indicador do seu tipo de negócio.
          </p>
        </Secao>

        <Secao num="03" titulo="A conta que decide tudo">
          <p className={BODY}>
            Toda decisão de investimento em captação se resolve numa razão só: <b className="text-saas-ink font-semibold">quanto um paciente te deixa</b> contra <b className="text-saas-ink font-semibold">quanto custou trazê-lo</b>.
          </p>
          <p className={BODY}>
            No seu caso, com sessões de R$295 em atendimento semanal, um paciente representa cerca de <b className="text-saas-ink font-semibold">R$1.200 por mês</b>. Se ele permanece seis meses, deixa aproximadamente R$7.200.
          </p>
          <p className={BODY}>
            Isso define o seu teto: gastando até R$1.200 para trazer um paciente, você recupera o investimento já no primeiro mês. Todo mês seguinte de permanência é lucro.
          </p>
          <p className={BODY}>
            É aqui que aparece a parte que quase ninguém calcula — <b className="text-saas-ink font-semibold">cada custo fixo somado à operação eleva a meta</b>:
          </p>

          <div className="pt-4">
            {cenarios.map((c) => (
              <div key={c.titulo} className="py-6 border-b border-white/[0.06] last:border-0">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 mb-4">
                  <div className="max-w-[38ch]">
                    <p className="text-saas-ink text-[15.5px] font-semibold">{c.titulo}</p>
                    <p className="text-saas-muted text-[14px] leading-relaxed mt-0.5">{c.desc}</p>
                  </div>
                  <div className="sm:text-right shrink-0">
                    <p className="font-extrabold text-[22px] leading-none"><Accent>{c.valor}</Accent></p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-faint mt-1.5">{c.nota}</p>
                  </div>
                </div>
                <div className="h-[9px] rounded-full bg-white/[0.05] overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet"
                    style={{ width: c.width }}
                  />
                </div>
              </div>
            ))}
          </div>

          <Card className="p-8 border-saas-violet/40">
            <p className="text-saas-ink text-[16px] leading-relaxed">
              Você passa a precisar de uma campanha <b className="font-semibold">três vezes mais eficiente</b> para chegar exatamente ao mesmo lugar.
            </p>
            <p className="text-saas-body text-[15px] leading-relaxed mt-4">
              Não é um argumento contra contratar alguém. É um argumento sobre ordem: primeiro se descobre que o canal funciona com estrutura mínima, depois se paga alguém para escalar o que já se provou.
            </p>
          </Card>

          <p className={BODY}>
            <b className="text-saas-ink font-semibold">Escalar um funil que ainda não se paga é apenas queimar dinheiro mais rápido.</b> Isso vale em qualquer tamanho de empresa. Nesta semana mesmo conversei com uma companhia que investe R$70 mil por mês em anúncios e tem quinze pessoas no marketing, sem ter atingido o equilíbrio — quanto mais escala, mais perde.
          </p>
          <p className={BODY}>
            A meta dos próximos meses, portanto, não é crescer. É chegar ao ponto em que <b className="text-saas-ink font-semibold">um paciente novo por mês</b> entra por um canal que não seja indicação, a um custo dentro do teto. A partir daí, colocar mais dinheiro deixa de ser aposta e passa a ser conta.
          </p>
        </Secao>

        <Secao num="04" titulo="Por que aparecer perto vale mais que aparecer muito">
          <p className={BODY}>
            A referência publicitária de construção de marca é de <b className="text-saas-ink font-semibold">oito impactos por mês por pessoa</b>, sustentados ao longo do tempo. Não é uma campanha com começo e fim — é presença.
          </p>
          <p className={BODY}>
            É isso que faz alguém lembrar de você no dia em que a professora avisa que o filho não está acompanhando a turma. Nesse momento a mãe não vai pesquisar: ela vai lembrar de um nome.
          </p>
          <p className={BODY}>
            Existe também um prazo de validade. Marca que <b className="text-saas-ink font-semibold">para</b> de aparecer nessa frequência começa a sair da memória em poucos meses. É por isso que grandes marcas nacionais nunca param de anunciar mesmo sendo unanimidade — no dia em que somem, o espaço na cabeça das pessoas é ocupado por outra.
          </p>
          <p className={BODY}>
            E aqui está a vantagem do seu tipo de negócio: manter essa frequência para <i>todas</i> as mães do país custaria milhões. Manter para as mães da sua região é perfeitamente factível com o orçamento que você já tem.
          </p>
          <p className={BODY}>
            O que a campanha precisa é de um único parâmetro correto: <b className="text-saas-ink font-semibold">o raio de exibição fechado no seu território</b>. Público, interesse e comportamento podem ficar abertos — o algoritmo encontra sozinho quem tem filho em idade escolar, e faz isso melhor que qualquer segmentação manual. O que ele não faz sozinho é decidir que Petrópolis não interessa. Essa instrução precisa vir de fora, e foi ela que faltou.
          </p>
        </Secao>

        <Secao num="05" titulo="O canal mais subestimado do seu tipo de negócio">
          <p className={BODY}>
            O Google Meu Negócio é, na prática, a rede social dos negócios locais. É onde a intenção de compra é mais alta, porque quem busca “psicopedagoga perto de mim” já decidiu que precisa de uma.
          </p>
          <p className={BODY}>
            É também onde a concorrência costuma ser mais frágil, porque quase ninguém trata o perfil como ativo. O que faz diferença:
          </p>
          <Lista items={googleMeuNegocio} />
          <p className={BODY}>
            Me manda o nome da clínica e o das concorrentes que eu dou uma olhada, como combinamos.
          </p>
        </Secao>

        <Secao num="06" titulo="O papel certo da produção de conteúdo">
          <p className={BODY}>
            Você gosta de gravar, gosta de ensinar, e o conteúdo que mais performou no seu perfil foi uma ideia sua, executada por você, sem ninguém no meio. Isso não é detalhe: na esmagadora maioria dos perfis que dão certo, a direção parte do dono do negócio. Ninguém conhece as dores que as mães trazem melhor que você.
          </p>
          <p className={BODY}>
            A ressalva é sobre <b className="text-saas-ink font-semibold">função</b>, não sobre mérito. Para um negócio local, conteúdo orgânico é um canal ruim de captação — o esforço é alto e o alcance é geograficamente indiscriminado, como você já viveu. Mas é um excelente ativo de <b className="text-saas-ink font-semibold">autoridade</b>: sustenta o seu preço, ampara a indicação médica, e constrói a base de um produto futuro para mães ou para outras profissionais, se um dia você quiser.
          </p>
          <p className={BODY}>
            Ou seja: continue. Gostar de produzir já é uma vantagem enorme sobre a concorrência, porque a maioria detesta. Só não meça o resultado do consultório por ele, e não coloque nele a energia que a captação exige.
          </p>
          <p className={BODY}>
            Sobre delegar: mesmo operações grandes de conteúdo mantêm a origem das ideias com o dono. O que se delega bem é edição, publicação, arte e desdobramento. O que raramente se delega é <b className="text-saas-ink font-semibold">o que dizer</b>.
          </p>
        </Secao>

        <Secao num="07" titulo="O que cobrar de um gestor de tráfego">
          <p className={BODY}>
            Esta é a parte que prometi. O mercado mudou e boa parte dos profissionais não acompanhou: durante anos o trabalho consistia em achar públicos e montar segmentações. Hoje o algoritmo faz sozinho a maior parte disso, e quem continua vendendo só a operação está vendendo algo que virou tarefa de estagiário.
          </p>
          <Card className="p-8 border-saas-violet/40">
            <p className="font-extrabold text-[clamp(18px,2.2vw,24px)] text-saas-ink leading-snug max-w-[34ch]">
              Cerca de <Accent>80% do trabalho</Accent> de um bom gestor hoje é direção criativa.
            </p>
            <p className="text-saas-body text-[15px] leading-relaxed mt-4 max-w-[58ch]">
              Decidir o que será dito, em que formato, contra qual objeção, e o que testar em seguida. O resto é execução.
            </p>
          </Card>

          <div className="pt-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan mb-1">
              Perguntas para fazer antes de contratar
            </p>
            <Lista items={perguntasGestor} />
          </div>

          <div className="pt-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-muted mb-1">
              Sinais de alerta
            </p>
            <ul className="mt-2">
              {sinaisAlerta.map((item) => (
                <li key={item} className="text-saas-body text-[15px] leading-relaxed py-3.5 border-b border-white/[0.06] last:border-0 max-w-[62ch]">
                  <span className="text-saas-faint mr-2">–</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </Secao>

        <Secao num="08" titulo="O que cobrar de uma social media">
          <p className={BODY}>
            O erro mais comum é contratar social media esperando captação. O trabalho dela é <b className="text-saas-ink font-semibold">consistência e clareza</b>, não geração de pacientes. Cobrar dela o que ela não pode entregar é o caminho mais rápido para trocar de profissional a cada seis meses.
          </p>
          <Lista items={socialMedia} />
          <p className={BODY}>
            E o ponto que costuma incomodar: a qualidade cai quando o número de clientes sobe — você mesma comentou isso. Vale perguntar quantos perfis a pessoa atende hoje. É uma pergunta legítima, e a resposta diz mais sobre o resultado futuro do que qualquer portfólio.
          </p>
        </Secao>

        <Secao num="09" titulo="O ritual que separa quem cresce de quem tenta">
          <p className={BODY}>
            A prática mais consistente que eu conheço em marketing veio de uma conversa com o primeiro funcionário de uma empresa brasileira que se tornou bilionária e chegou a mais de dez mil pessoas. Perguntei qual tinha sido o critério do sucesso. A resposta não teve nada de sofisticado: <b className="text-saas-ink font-semibold">disciplina operacional para olhar os números toda semana e responder três perguntas.</b>
          </p>

          <div className="pt-2">
            {tresPerguntas.map((q, i) => (
              <div
                key={q.p}
                className={`grid grid-cols-[auto_1fr] gap-5 md:gap-7 py-6 ${i > 0 ? "border-t border-white/[0.06]" : ""}`}
              >
                <div className="text-[32px] font-extrabold leading-none bg-gradient-to-r from-saas-cyan to-saas-violet bg-clip-text text-transparent">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="max-w-[54ch]">
                  <p className="text-saas-ink text-[16.5px] font-semibold leading-snug">{q.p}</p>
                  <p className="text-saas-muted text-[14.5px] leading-relaxed mt-1.5">{q.d}</p>
                </div>
              </div>
            ))}
          </div>

          <p className={BODY}>
            Essa mesma empresa competia com uma concorrente global que tinha levantado dezenas de milhões de dólares. Não havia como ganhar no leilão de anúncios — cada lance da concorrente era ordens de grandeza maior. A virada não veio de mídia: veio de uma parceria de campo que a concorrente não conseguia replicar, e que só apareceu depois de meses respondendo essas três perguntas.
          </p>
          <p className={BODY}>
            <b className="text-saas-ink font-semibold">Essa é a habilidade que não se terceiriza.</b> Você pode contratar quem executa, mas a leitura semanal e a decisão precisam ficar com quem é dono do negócio. É exatamente o que você e o Felipe começaram a fazer ao assumir as campanhas — e, na minha opinião, foi o movimento certo.
          </p>
        </Secao>

        <Secao num="10" titulo="Se eu tivesse que resumir em cinco linhas">
          <Lista items={resumoFinal} />
        </Secao>

        {/* Nota final */}
        <div className="border-t border-white/[0.06] py-14 md:py-16">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan mb-4">Nota</p>
          <p className="text-saas-body text-[15px] leading-relaxed max-w-[62ch]">
            Os números deste documento são os do seu próprio consultório, conforme você me passou na conversa: sessão de R$295, atendimento semanal, permanência de alguns meses. Se alguma dessas premissas estiver diferente na prática, a conta muda — e vale refazer antes de decidir qualquer coisa.
          </p>

          <p className="mt-10 text-saas-ink text-[18px] leading-relaxed max-w-[52ch]">
            Qualquer dúvida sobre qualquer parte disto, é só me chamar.
            <br />
            <span className="text-saas-muted">— Rodrigo</span>
          </p>

          <div className="mt-10">
            <a
              href="https://wa.me/5511999718595"
              target="_blank"
              rel="noopener noreferrer"
              className={SAAS_BTN_PRIMARY}
              onClick={() => tracker.track("cta_click", { product: "resumo-daniele-dias-gomes", location: "resumo_footer" })}
            >
              Falar com Rodrigo <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </main>

      {/* Rodapé */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-saas-muted">
          <span>BA Consultoria · CNPJ 38.142.345/0001-04</span>
          <span className="text-saas-faint">18 de agosto de 2026</span>
        </div>
      </div>
    </div>
  );
};

export default ResumoDanieleDiasGomes;
