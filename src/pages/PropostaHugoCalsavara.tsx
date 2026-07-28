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

const fases = [
  {
    fase: "01 Estrutura",
    quando: "Semanas 1–2",
    desc: "Conta de anúncios no seu nome, página de captura, formulário, rastreamento completo, painel no ar. Você não paga mídia ainda.",
  },
  {
    fase: "02 Teste",
    quando: "Semanas 3–8",
    desc: "Rodamos variações de criativo e público. O objetivo aqui não é vender, é descobrir o que funciona. Nessa fase você vai receber lead ruim junto com lead bom — é assim que o sistema aprende.",
  },
  {
    fase: "03 Validação",
    quando: "Semanas 9–12",
    desc: "Cortamos o que não performa, concentramos no que performa. Custo por lead estabiliza. Aqui a gente decide: escala ou pivota a estratégia.",
  },
  {
    fase: "04 Escala",
    quando: "Mês 4+",
    desc: "Aumentamos investimento só sobre o que já provou retorno.",
  },
];

const estrutura = [
  "Business Manager e conta de anúncios configurados no seu nome — o ativo, o histórico e o público são seus, não meus",
  "Página de captura com formulário de qualificação",
  "Pixel e API de Conversões instalados: quando um lead vira reunião ou contrato, esse sinal volta pro Meta e a plataforma passa a buscar gente parecida com quem comprou, não com quem só clicou",
  "Notificação instantânea no seu WhatsApp a cada lead novo — velocidade de resposta é o que mais mexe em taxa de contato",
];

const criativos = [
  "Roteiros prontos entregues por mim",
  "1 sessão de gravação guiada por mês — você grava seguindo o roteiro; sem edição, sem pauta, sem \"o que eu posto hoje\"",
  "Dessa sessão saem 6 a 8 variações de anúncio editadas",
  "Otimização semanal das campanhas (ajustes finos)",
  "Revisão estratégica mensal — decisão grande, só com volume suficiente pra ter confiança no dado",
];

const perfil = [
  "Reestruturação de bio e foto",
  "Destaques organizados: quem é você, o que protege, prova social, como funciona",
  "12 posts produzidos — os 12 que a pessoa vê ao entrar",
  "Entrega em até 21 dias",
];

const acompanhamento = [
  {
    title: "Painel de acompanhamento",
    body: "Com seu acesso. Quanto entrou, quanto saiu, quanto custou cada lead. Aberto, a qualquer hora.",
  },
  {
    title: "Relatório semanal",
    body: "Curto: o que mudou, o que estou testando, o que preciso de você.",
  },
  {
    title: "Revisão mensal",
    body: "Uma call: o que funcionou, o que morreu, pra onde vamos.",
  },
  {
    title: "Compromisso de dizer não",
    body: "Se o número não fechar, eu falo pra reduzir ou parar. Já fiz isso com cliente e vou fazer com você. Não me interessa segurar contrato queimando seu dinheiro — meu negócio depende do seu resultado, não da sua mensalidade.",
  },
];

const naoE = [
  "Não é garantia de número de vendas. A venda continua sendo sua — e pelo que você me contou, essa parte você faz melhor que eu.",
  "A mídia não é honorário. Vai direto pro Meta, no seu cartão, com você vendo cada centavo.",
  "Abaixo de R$2.000/mês de investimento eu não recomendo começar. Não é ganância: com menos que isso não há volume pra ter confiança estatística, e a gente passa três meses tomando decisão no achismo.",
  "Não vou te transformar em influenciador. Você não quer isso e eu concordo que não precisa.",
];

const investimento = [
  {
    item: "Gestão de tráfego",
    valor: "R$1.500/mês",
    condicao: "Mínimo 3 meses — é o ciclo de maturação da campanha. Sem taxa de setup: a montagem da estrutura está dentro do primeiro mês.",
  },
  {
    item: "Autoridade de Perfil",
    valor: "R$1.500",
    condicao: "Entrega única, parcelável em 2x. Não é serviço mensal de social media — é arrumar a vitrine uma vez, bem feito, pra sustentar o tráfego.",
  },
  {
    item: "Investimento em mídia",
    valor: "R$2.000/mês",
    condicao: "Sugerido. Pago direto ao Meta, na sua conta, no seu cartão. Não passa por mim.",
  },
];

const precisamos = [
  "Acesso ao Instagram e à página do Facebook",
  "Uma sessão de 40 minutos pra extração: seu processo, suas objeções mais comuns, os 3 perfis de cliente que mais fecham",
  "Uma sessão de gravação por mês",
  "Retorno rápido sobre a qualidade dos leads — \"esse aqui era bom, esse aqui era curioso\". É esse retorno que treina o algoritmo. Sem ele, o sistema fica cego.",
];

const proximosPassos = [
  { num: "01", title: "Decisão", desc: "Você e sua esposa decidem até terça (28/07)." },
  { num: "02", title: "Assinatura e acessos", desc: "Na mesma semana da decisão." },
  { num: "03", title: "Estrutura no ar", desc: "Em até 14 dias — conta, página, formulário, rastreamento e painel." },
  { num: "04", title: "Anúncios rodando", desc: "Na sequência da estrutura publicada." },
];

const PropostaHugoCalsavara = () => {
  useEffect(() => {
    tracker.page("Proposta Hugo Calsavara");
  }, []);

  return (
    <PropostaLayout
      cliente="Hugo Calsavara"
      projeto="Aquisição de Clientes por Tráfego Pago"
      data="27 de julho de 2026"
    >

      {/* ── SOBRE ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>01 Sobre</Eyebrow>
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
        <Eyebrow>02 Referências</Eyebrow>
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

      {/* ── O QUE EU ENTENDI ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>03 Contexto</Eyebrow>
        <h2 className={"mt-5 " + H2_CLS}>O que eu entendi da nossa conversa</h2>

        <div className="mt-8 space-y-5 text-saas-body leading-relaxed">
          <p className="text-[20px] max-w-[760px]">
            Sua operação funciona 100% por indicação. Cliente chega recomendado, você já chega na reunião sabendo a história da família — e por isso a conversa converte. O problema não é vender: é que a roda só gira na velocidade das indicações, e sua agenda já bate 8h da manhã às 19h.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              num: "PONTO 01",
              title: "Você não quer volume",
              body: "Você falou com todas as letras: prefere 20 pessoas, 8 preenchendo formulário e 4 fechando, do que 100 leads frios entupindo a agenda.",
            },
            {
              num: "PONTO 02",
              title: "Cliente errado custa caro",
              body: "Seu cliente é renda de 20k+. Abaixo disso a percepção de valor cai e o cancelamento em 3 meses te machuca mais em pontuação e convenção do que a venda te paga.",
            },
            {
              num: "PONTO 03",
              title: "O medo não é o preço",
              body: "É entregar dinheiro pra alguém que manda relatório nos primeiros 15 dias e depois some. Essa proposta responde a esses três pontos, nessa ordem.",
            },
          ].map((card) => (
            <Card key={card.num} className="p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-saas-cyan mb-4">{card.num}</p>
              <h4 className="font-extrabold text-[20px] text-saas-ink leading-tight mb-4">{card.title}</h4>
              <p className="text-saas-muted text-[14.5px] leading-relaxed">{card.body}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* ── OBJETIVO ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>04 Objetivo</Eyebrow>
        <h2 className={"mt-5 " + H2_CLS}>O que este projeto vai resolver</h2>

        <div className="mt-8 space-y-5 text-saas-body leading-relaxed">
          <p className="text-[20px] max-w-[760px]">
            Substituir parte da dependência de indicação por um fluxo previsível de pessoas qualificadas — que chegam na sua reunião já sabendo quem você é e já tendo declarado renda, vínculo e situação familiar.
          </p>
          <p className="max-w-[760px]">
            Métrica de sucesso do trimestre: ter um <b className="text-saas-ink font-semibold">custo por lead qualificado conhecido e estável</b>, e um número de contrato fechado que pague o investimento com folga.
          </p>
        </div>

        <Card className="mt-8 p-9">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan mb-4">Régua de decisão</p>
          <h3 className="font-extrabold text-[24px] text-saas-ink leading-tight">
            Cada <Accent>R$1</Accent> investido precisa voltar como <Accent>R$3</Accent>, no mínimo.
          </h3>
          <p className="text-saas-body text-[15px] leading-relaxed mt-4 max-w-[760px]">
            É a mesma régua que eu uso internamente. Com R$3.500/mês entre honorário e mídia, isso significa fechar pelo menos <b className="text-saas-ink font-semibold">R$10.500 em contrato por mês</b>. Abaixo disso eu vou te dizer pra parar — não pra aumentar o investimento.
          </p>
        </Card>
      </div>

      {/* ── A LÓGICA ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>05 A lógica</Eyebrow>
        <h2 className={"mt-5 " + H2_CLS}>Atrito × volume</h2>

        <div className="mt-8 space-y-5 text-saas-body leading-relaxed">
          <p className="text-[20px] max-w-[760px]">
            Quanto mais pergunta você coloca antes da reunião, mais quente chega o lead — e menos gente chega. É um botão, não uma chave.
          </p>
          <p className="max-w-[760px]">
            Você quer atrito alto. Perfeito, é a decisão certa pro seu ticket. Mas atrito alto exige volume na entrada, senão passam três semanas e não chega ninguém.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-8">
            <h3 className="font-extrabold text-[20px] text-saas-ink leading-tight mb-4 flex items-center gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet" />
              Como vamos calibrar
            </h3>
            <p className="text-saas-body text-[15px] leading-relaxed">
              Começamos com formulário curto — nome, WhatsApp, faixa de renda, filhos, vínculo CLT/autônomo. Assim que o volume permitir, subimos o atrito: mais perguntas, menos gente, lead mais quente.
            </p>
          </Card>
          <Card className="p-8">
            <h3 className="font-extrabold text-[20px] text-saas-ink leading-tight mb-4 flex items-center gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-white/[0.20]" />
              O que não fazemos
            </h3>
            <p className="text-saas-body text-[15px] leading-relaxed">
              O contrário. Começar apertado demais nos deixa três meses sem dado nenhum pra decidir — e decisão sem dado é achismo caro.
            </p>
          </Card>
        </div>
      </div>

      {/* ── AS 4 FASES ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>06 Como funciona</Eyebrow>
        <h2 className={"mt-5 " + H2_CLS}>Quatro fases</h2>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-white/[0.09]">
          <table className="w-full border-collapse min-w-[680px]">
            <thead>
              <tr className="border-b border-white/[0.08]">
                {["Fase", "Quando", "O que acontece"].map((h) => (
                  <th key={h} className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-muted py-3 px-4 text-left bg-saas-card">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {fases.map((row) => (
                <tr key={row.fase} className="border-b border-white/[0.06] last:border-none hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-4 align-top font-extrabold text-saas-ink text-[15px] whitespace-nowrap">{row.fase}</td>
                  <td className="py-4 px-4 align-top whitespace-nowrap">
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan">{row.quando}</span>
                  </td>
                  <td className="py-4 px-4 align-top text-saas-body text-[13.5px] leading-relaxed">{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/[0.14] px-6 py-3 text-sm text-saas-body">
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet animate-pulse" />
          <span>
            Maturação realista: <b className="font-semibold text-saas-ink">3 a 6 meses</b>. Quem promete resultado no primeiro mês está vendendo sorte.
          </span>
        </div>
      </div>

      {/* ── O QUE ESTÁ INCLUSO ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>07 O que está incluso</Eyebrow>
        <h2 className={"mt-5 " + H2_CLS}>Dois blocos</h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-saas-violet/40 p-9">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan mb-4">Bloco 1 · Recorrente</p>
            <h3 className="font-extrabold text-[24px] text-saas-ink leading-tight">Gestão de Tráfego</h3>

            <p className="text-saas-muted text-[13px] font-semibold uppercase tracking-[0.1em] mt-6 mb-1">Estrutura e rastreamento</p>
            <ul>
              {estrutura.map((item) => (
                <li key={item} className="text-saas-body text-[14.5px] leading-relaxed py-3 border-b border-white/[0.06] last:border-0">
                  <span className="text-saas-cyan mr-2">→</span>{item}
                </li>
              ))}
            </ul>

            <p className="text-saas-muted text-[13px] font-semibold uppercase tracking-[0.1em] mt-7 mb-1">Criativos e operação</p>
            <p className="text-saas-faint text-[13px] leading-relaxed mb-1">Sem você virar produtor de conteúdo.</p>
            <ul>
              {criativos.map((item) => (
                <li key={item} className="text-saas-body text-[14.5px] leading-relaxed py-3 border-b border-white/[0.06] last:border-0">
                  <span className="text-saas-cyan mr-2">→</span>{item}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-9">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan mb-4">Bloco 2 · Entrega única</p>
            <h3 className="font-extrabold text-[24px] text-saas-ink leading-tight">Autoridade de Perfil</h3>
            <p className="text-saas-body text-[15px] leading-relaxed mt-4">
              75% de quem vê seu anúncio vai clicar no seu perfil antes de preencher qualquer coisa. Rola até o fim da primeira tela e decide se você é confiável. É essa tela que essa entrega resolve.
            </p>
            <ul className="mt-4">
              {perfil.map((item) => (
                <li key={item} className="text-saas-body text-[14.5px] leading-relaxed py-3 border-b border-white/[0.06] last:border-0">
                  <span className="text-saas-cyan mr-2">→</span>{item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-saas-faint text-[13px] leading-relaxed">
              Não é serviço mensal de social media: é arrumar a vitrine uma vez, bem feito, pra sustentar o tráfego.
            </p>
          </Card>
        </div>
      </div>

      {/* ── ACOMPANHAMENTO ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>08 Acompanhamento</Eyebrow>
        <h2 className={"mt-5 " + H2_CLS}>A parte que você me perguntou primeiro</h2>
        <p className="mt-5 text-saas-body leading-relaxed max-w-[760px]">
          Você já foi queimado por quem manda relatório nos primeiros 15 dias e depois some. Aqui está o que impede isso de acontecer.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {acompanhamento.map((item) => (
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

      {/* ── O QUE ESSA PROPOSTA NÃO É ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>09 Transparência</Eyebrow>
        <h2 className={"mt-5 " + H2_CLS}>O que essa proposta não é</h2>

        <Card className="mt-8 p-8">
          <ul>
            {naoE.map((item) => (
              <li key={item} className="text-saas-body text-[15px] leading-relaxed py-4 border-b border-white/[0.06] last:border-0">
                <span className="text-saas-faint mr-2">–</span>{item}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* ── INVESTIMENTO ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>10 Investimento</Eyebrow>
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

        <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/[0.14] px-6 py-3 text-sm text-saas-body">
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet animate-pulse" />
          <span>
            Desembolso no mês 1: <b className="font-semibold text-saas-ink">R$1.500</b> (gestão) + <b className="font-semibold text-saas-ink">R$750</b> (perfil, 1ª parcela) + mídia
          </span>
        </div>
      </div>

      {/* ── O QUE PRECISO DE VOCÊ ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>11 Antes de começar</Eyebrow>
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
      </div>

      {/* ── PRÓXIMOS PASSOS ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>12 Próximos passos</Eyebrow>
        <h2 className={"mt-5 " + H2_CLS}>Do sim ao anúncio no ar</h2>

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
      </div>

      {/* ── CTA FINAL ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>Próximo passo</Eyebrow>
        <h2 className="mt-5 font-extrabold text-saas-ink text-[clamp(34px,6vw,64px)] leading-[1.05] tracking-tight">
          A indicação continua.<br />A dependência dela, não<Accent>.</Accent>
        </h2>
        <p className="mt-6 text-saas-body text-[18px] leading-relaxed max-w-[680px]">
          Você já sabe vender — a conversa converte quando a pessoa certa senta na sua frente. O que falta é uma fila previsível de pessoas certas chegando sem depender de quem lembrou de te indicar essa semana.
        </p>
        <div className="mt-10">
          <a
            href="https://wa.me/5511999718595"
            target="_blank"
            rel="noopener noreferrer"
            className={SAAS_BTN_PRIMARY}
            onClick={() => tracker.track("cta_click", { product: "hugo-calsavara", location: "proposta_cta" })}
          >
            Falar com Rodrigo <span aria-hidden>→</span>
          </a>
        </div>
        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-saas-faint">
          Proposta válida por 15 dias · Data: 27/07/2026
        </p>
      </div>

    </PropostaLayout>
  );
};

export default PropostaHugoCalsavara;
