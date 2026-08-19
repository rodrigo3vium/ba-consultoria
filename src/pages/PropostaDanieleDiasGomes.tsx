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

const meses = [
  {
    fase: "Mês 1 · Fundação",
    entrega: "Diagnóstico e estrutura",
    desc: "Auditoria do Instagram, do site e do Google Meu Negócio — o seu e o das 3 concorrentes. Modelo econômico do consultório: LTV, CAC-teto, break-even. Google Meu Negócio reescrito. Estrutura de campanha local montada e validada no gerenciador, pronta para vocês subirem. Plano de 90 dias por escrito.",
  },
  {
    fase: "Mês 2 · Direção",
    entrega: "Campanha no ar, leitura semanal",
    desc: "Revisão semanal dos números com o ritual de três perguntas: o que funcionou e continua, o que não funcionou e para, o que ainda não testamos e vale testar. Pautas e formatos definidos por mim, gravados por você.",
  },
  {
    fase: "Mês 3 · Calibragem",
    entrega: "Custo por paciente estável",
    desc: "Cortamos o que não performa e concentramos no que performa. No fim do ciclo você sabe quanto custa um paciente novo pelo canal próprio — e se vale expandir o raio para a Lapa.",
  },
];

const naoIncluso = [
  "Gestão operacional de tráfego — subir campanha, mexer no gerenciador todo dia",
  "Edição de vídeo, design ou publicação de posts",
  "Atendimento de WhatsApp ou agendamento",
];

const precisamos = [
  "Acesso ao gerenciador de anúncios, Google Meu Negócio, Instagram e site",
  "Duas horas por semana suas ou do Felipe para executar o que for definido",
  "Verba de mídia à parte, paga direto por você à plataforma",
];

const indicadores = [
  "Contatos qualificados no WhatsApp — dentro do seu raio; os de fora não contam",
  "Taxa de conversão de contato para primeira sessão",
  "Custo por paciente novo",
  "Posição e acionamentos no Google Meu Negócio",
];

const PropostaDanieleDiasGomes = () => {
  useEffect(() => {
    tracker.page("Proposta Daniele Dias Gomes");
  }, []);

  return (
    <PropostaLayout
      cliente="Daniele Dias Gomes"
      projeto="Consultoria de Marketing · 90 dias"
      data="18 de agosto de 2026"
    >

      {/* ── O DIAGNÓSTICO ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>01 O diagnóstico</Eyebrow>
        <h2 className="mt-5 font-extrabold text-saas-ink text-[clamp(28px,4.6vw,52px)] leading-[1.08] tracking-tight">
          O dinheiro estava certo.<br />O <Accent>alvo</Accent> estava errado.
        </h2>

        <p className="mt-8 text-saas-body text-[20px] leading-relaxed max-w-[760px]">
          Você investiu R$24.000 em tráfego ao longo de um ano. O perfil saiu de 300 para 10 mil seguidores, mas a demanda que chegou era nacional — Nordeste, Petrópolis, interior. Um paciente fechado em doze meses.
        </p>
        <p className="mt-5 text-saas-body leading-relaxed max-w-[760px]">
          Você comprou alcance nacional para um consultório que atende num raio de poucos quilômetros. Não foi falta de verba nem de esforço: foi falta de direção. E a captação que sobrou depende de indicação médica — um canal que funciona, mas que não é seu. Se a médica parar de indicar, a fonte seca no mesmo mês.
        </p>

        <Card className="mt-8 p-9 border-saas-violet/40">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan mb-4">O mesmo dinheiro, apontado certo</p>
          <p className="font-extrabold text-[clamp(20px,2.6vw,28px)] text-saas-ink leading-snug max-w-[760px]">
            Compraria presença dominante e ininterrupta em cada família da sua região por mais de dois anos seguidos.
          </p>
        </Card>
      </div>

      {/* ── O MERCADO ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>02 O mercado</Eyebrow>
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
          <StatCard value="~R$450" label="Mídia por mês para impactar todas elas, 8× cada" />
        </div>

        <Card className="mt-8 p-9 border-saas-violet/40">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan mb-4">O número que muda a conversa</p>
          <p className="font-extrabold text-[clamp(20px,2.6vw,28px)] text-saas-ink leading-snug max-w-[760px]">
            Mil e seiscentas famílias. Esse é o seu mercado inteiro, e ele cabe na palma da mão.
          </p>
        </Card>

        <p className="mt-8 text-saas-body leading-relaxed max-w-[760px]">
          O filtro de capacidade de pagamento vem das matrículas em escola particular — 41,3% no distrito, o melhor indicador disponível de família que paga psicopedagogia sem reembolso de convênio. E a referência de frequência publicitária é de <b className="text-saas-ink font-semibold">8 impactos por mês por pessoa</b>: não é uma campanha, é presença sustentada. É o que faz alguém pensar em você quando a professora do filho diz que ele não está acompanhando.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-8">
            <h3 className="font-extrabold text-[20px] text-saas-ink leading-tight mb-4 flex items-center gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet" />
              Vila Leopoldina
            </h3>
            <p className="text-saas-body text-[15px] leading-relaxed">
              ~1.600 famílias pagantes, 8 impactos por mês em cada uma, por aproximadamente <b className="text-saas-ink font-semibold">R$450/mês</b>. Você já investe R$500.
            </p>
          </Card>
          <Card className="p-8">
            <h3 className="font-extrabold text-[20px] text-saas-ink leading-tight mb-4 flex items-center gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet" />
              + Lapa e Alto da Lapa
            </h3>
            <p className="text-saas-body text-[15px] leading-relaxed">
              O universo sobe para cerca de 5.100 famílias pagantes e o custo para aproximadamente <b className="text-saas-ink font-semibold">R$1.400/mês</b> — ainda menos do que os R$2.000 do ano passado.
            </p>
          </Card>
        </div>

        <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/[0.14] px-6 py-3 text-sm text-saas-body">
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet animate-pulse" />
          <span>
            E <b className="font-semibold text-saas-ink">sua concorrente também não está fazendo isso</b>. Nenhuma está. Esse território está vago.
          </span>
        </div>

        <p className="mt-8 text-saas-faint text-[13px] leading-relaxed max-w-[760px]">
          Os números de população são oficiais. Os de mídia são projeção baseada em CPM médio para São Paulo com segmentação local — validamos no gerenciador na primeira semana.
        </p>
      </div>

      {/* ── A TESE ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>03 A tese</Eyebrow>
        <h2 className={"mt-5 " + H2_CLS}>Local não é limitação. É a vantagem.</h2>

        <p className="mt-8 text-saas-body text-[20px] leading-relaxed max-w-[760px]">
          Aparecer para todas as mães do Brasil custa milhões. Aparecer para todas as mães com filho em idade escolar da sua região custa menos do que você já gasta hoje — e é exatamente onde ninguém está olhando.
        </p>

        <Card className="mt-8 p-9">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan mb-4">A cadeira vazia</p>
          <h3 className="font-extrabold text-[24px] text-saas-ink leading-tight">
            O que falta não é execução. É alguém na cadeira de <Accent>diretor de marketing</Accent>.
          </h3>
          <p className="text-saas-body text-[15px] leading-relaxed mt-4 max-w-[760px]">
            Você grava, você cria — a ideia do quadro na Paulista foi sua e foi o conteúdo que mais performou no seu perfil. Falta quem leia os números toda semana, decida onde o dinheiro vai, defina o que vale gravar e cobre resultado de cada real investido. É essa cadeira que eu ocupo por 90 dias.
          </p>
        </Card>
      </div>

      {/* ── A CONSULTORIA ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>04 A consultoria</Eyebrow>
        <h2 className={"mt-5 " + H2_CLS}>Três meses, três entregas</h2>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-white/[0.09]">
          <table className="w-full border-collapse min-w-[680px]">
            <thead>
              <tr className="border-b border-white/[0.08]">
                {["Ciclo", "Entrega", "O que acontece"].map((h) => (
                  <th key={h} className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-muted py-3 px-4 text-left bg-saas-card">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {meses.map((row) => (
                <tr key={row.fase} className="border-b border-white/[0.06] last:border-none hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-4 align-top font-extrabold text-saas-ink text-[15px] whitespace-nowrap">{row.fase}</td>
                  <td className="py-4 px-4 align-top whitespace-nowrap">
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan">{row.entrega}</span>
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
            Ao longo dos 3 meses: <b className="font-semibold text-saas-ink">1 call estratégica a cada 15 dias</b> — 6 no ciclo —, revisão semanal dos números, direção criativa e canal direto comigo no WhatsApp.
          </span>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-9">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-muted mb-4">Não está incluso</p>
            <ul>
              {naoIncluso.map((item) => (
                <li key={item} className="text-saas-body text-[14.5px] leading-relaxed py-3 border-b border-white/[0.06] last:border-0">
                  <span className="text-saas-faint mr-2">–</span>{item}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-saas-body text-[14px] leading-relaxed">
              A execução fica com vocês. Somar um gestor de tráfego a R$2.000/mês exigiria <b className="text-saas-ink font-semibold">três pacientes novos por mês</b> só para empatar. Do jeito proposto, o conhecimento fica dentro de casa e o retorno chega antes.
            </p>
          </Card>

          <Card className="border-saas-violet/40 p-9">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan mb-4">O que preciso de você</p>
            <ul>
              {precisamos.map((item) => (
                <li key={item} className="text-saas-body text-[14.5px] leading-relaxed py-3 border-b border-white/[0.06] last:border-0">
                  <span className="text-saas-cyan mr-2">→</span>{item}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-saas-body text-[14px] leading-relaxed">
              E disposição para gravar — você já disse que gosta, e isso é uma vantagem enorme sobre qualquer concorrente.
            </p>
          </Card>
        </div>
      </div>

      {/* ── MEDIÇÃO ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>05 Medição</Eyebrow>
        <h2 className={"mt-5 " + H2_CLS}>Como sabemos que funcionou</h2>

        <Card className="mt-8 p-9 border-saas-violet/40">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan mb-4">Meta dos 90 dias</p>
          <h3 className="font-extrabold text-[24px] text-saas-ink leading-tight">
            Não é escalar. É atingir o <Accent>break-even do canal próprio</Accent>.
          </h3>
          <p className="text-saas-body text-[15px] leading-relaxed mt-4 max-w-[760px]">
            Um paciente novo por mês vindo de fora da indicação, com custo de aquisição igual ou menor que R$1.200. Chegando lá, cada mês de permanência daquele paciente é lucro — e só a partir desse ponto faz sentido colocar mais dinheiro. Escalar um funil que ainda não se paga é queimar dinheiro mais rápido; foi o que aconteceu no ano passado.
          </p>
          <div className="mt-6 rounded-xl bg-white/[0.03] border border-white/[0.08] p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-muted mb-3">Indicadores acompanhados</p>
            <ul>
              {indicadores.map((item) => (
                <li key={item} className="text-saas-body text-[14.5px] leading-relaxed py-2.5 border-b border-white/[0.06] last:border-0">
                  <span className="text-saas-cyan mr-2">→</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </div>

      {/* ── INVESTIMENTO ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>06 Investimento</Eyebrow>
        <h2 className={"mt-5 " + H2_CLS}>Uma consultoria, um valor</h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-saas-violet/40 p-9">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan mb-4">Consultoria · 90 dias</p>
            <h3 className="font-extrabold text-[40px] leading-none"><Accent>R$6.000</Accent></h3>
            <p className="text-saas-ink text-[15px] font-semibold leading-relaxed mt-4">
              3x de R$2.000, ou R$5.400 à vista.
            </p>
            <p className="text-saas-muted text-[14px] leading-relaxed mt-3">
              Ciclo fechado de três meses. Tudo das seções acima está incluso — não há taxa de setup nem cobrança separada por entrega.
            </p>
          </Card>

          <Card className="p-9">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-muted mb-4">Verba de mídia · à parte</p>
            <h3 className="font-extrabold text-[40px] text-saas-ink leading-none">R$500<span className="text-[20px] text-saas-muted font-bold">/mês</span></h3>
            <p className="text-saas-ink text-[15px] font-semibold leading-relaxed mt-4">
              Para cobrir a Vila Leopoldina. R$1.400/mês com a Lapa.
            </p>
            <p className="text-saas-muted text-[14px] leading-relaxed mt-3">
              Paga direto por você à plataforma — não passa por mim. Recomendo começar com R$500 e expandir o raio só depois do primeiro paciente fechado.
            </p>
          </Card>
        </div>

        <Card className="mt-8 p-9 border-saas-violet/40">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan mb-4">Um recorte para dimensionar</p>
          <p className="font-extrabold text-[clamp(19px,2.4vw,26px)] text-saas-ink leading-snug max-w-[760px]">
            Um paciente vale R$1.200 por mês. Um único paciente novo que fique cinco meses com você paga a consultoria inteira. O segundo já é lucro.
          </p>
        </Card>
      </div>

      {/* ── BÔNUS ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>07 Bônus</Eyebrow>
        <h2 className={"mt-5 " + H2_CLS}>Independente de fechamento</h2>

        <p className="mt-8 text-saas-body text-[20px] leading-relaxed max-w-[760px]">
          Vou te mandar o resumo estruturado que prometi na call — o que cobrar de um gestor de tráfego e de uma social media, com os critérios de avaliação. É seu para usar comigo ou sem mim.
        </p>
      </div>

      {/* ── SOBRE ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>08 Sobre</Eyebrow>
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

        <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { photo: diegoBarretoPhoto, name: "Diego Barreto", role: "CEO · iFood" },
            { photo: pedroSommaPhoto, name: "Pedro Somma", role: "Ex-COO · 99" },
            { photo: vaboPhoto, name: "Luis Vabo Jr.", role: "Ex-diretor · Stone" },
            { photo: joaoOliverioPhoto, name: "João Olivério", role: "CEO · Sales As A System" },
            { photo: joseDiogoPhoto, name: "José Diogo C. Rodrigues", role: "CMO Latam · Tinder" },
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
              <div className="p-4">
                <p className="font-extrabold text-[15px] text-saas-ink leading-tight">{ref.name}</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan mt-1.5">{ref.role}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-saas-faint">
          Mentores e professores da BA Consultoria
        </p>
      </div>

      {/* ── CTA FINAL ── */}
      <div className="border-t border-white/[0.06] py-16">
        <Eyebrow>Próximo passo</Eyebrow>
        <h2 className="mt-5 font-extrabold text-saas-ink text-[clamp(34px,6vw,64px)] leading-[1.05] tracking-tight">
          A indicação continua.<br />O acaso, não<Accent>.</Accent>
        </h2>
        <p className="mt-6 text-saas-body text-[18px] leading-relaxed max-w-[680px]">
          Mil e seiscentas famílias moram a poucos quilômetros do seu consultório e nenhuma concorrente está falando com elas. O que falta é direção — e ela custa menos do que um paciente que fica cinco meses.
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
