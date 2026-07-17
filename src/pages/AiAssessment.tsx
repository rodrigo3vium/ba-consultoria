import { useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  Check,
  X,
  ArrowRight,
  ShieldCheck,
  Stethoscope,
  Search,
  FileText,
  PhoneCall,
  Clock,
  Calculator,
  Image as ImageIcon,
} from "lucide-react";
import { tracker } from "@/lib/tracking";
import { Accent, Eyebrow, Card, SAAS_BTN_PRIMARY } from "@/components/saas/ui";

const PRODUCT = "ai-assessment";
const PRICE = "R$997";
const WA_HREF = `https://wa.me/5511999718595?text=${encodeURIComponent(
  "Olá! Quero agendar meu Diagnóstico de IA.",
)}`;

const H2_CLS =
  "font-extrabold text-saas-ink text-[clamp(26px,3.4vw,42px)] leading-[1.12] tracking-tight";

/* Cards do hero — PLACEHOLDER: ajustar métricas depois */
const heroStats = [
  { value: "5–10h", label: "recuperadas por semana" },
  { value: "3–7", label: "ferramentas prescritas" },
  { value: "45min", label: "de diagnóstico" },
];

function CtaButton({
  location,
  children,
  className = "",
}: {
  location: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={WA_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className={SAAS_BTN_PRIMARY + " " + className}
      onClick={() => tracker.track("cta_click", { product: PRODUCT, location })}
    >
      {children}
    </a>
  );
}

const passos = [
  {
    icon: PhoneCall,
    num: "01",
    title: "Sessão de Diagnóstico",
    meta: "45 min · online",
    body: "Uma entrevista estruturada — sem pitch, sem enrolação. Eu mapeio onde seu trabalho empilha, o que você teme fazer toda semana e o que você já tentou automatizar e falhou.",
  },
  {
    icon: Search,
    num: "02",
    title: "Análise profunda",
    meta: "feita por mim",
    body: "Eu cruzo cada gargalo identificado com o mercado inteiro de ferramentas de IA e automação, filtrando pelo seu tamanho, orçamento e nível técnico.",
  },
  {
    icon: FileText,
    num: "03",
    title: "Relatório de Prescrição",
    meta: "3 a 7 ferramentas",
    body: "Cada ferramenta com a dor que resolve, custo mensal, tempo de setup e horas devolvidas por semana. Mais: matriz de esforço × impacto, um plano de início de 4 dias (10 min por dia) e o cálculo do seu ROI líquido.",
  },
  {
    icon: PhoneCall,
    num: "04",
    title: "Call de Revisão",
    meta: "30 min",
    body: "Eu apresento o relatório recomendação por recomendação, respondo tudo, e você sai sabendo exatamente o que fazer segunda-feira de manhã.",
  },
];

const casos = [
  {
    tag: "Corretor de negócios",
    problema: "Afogado em e-mails: a cada empresa listada pra venda, 400–500 e-mails de interessados fazendo as mesmas 5 perguntas.",
    prescricao: "Uma base de conhecimento com IA treinada no material da listagem.",
    resultado: "Zero e-mails repetitivos — e elogio espontâneo dos dois lados da negociação.",
  },
  {
    tag: "Empresa de eventos",
    problema: "Refém do retrabalho: toda venda nova exigia montar manualmente o mesmo projeto, as mesmas tarefas, as mesmas tags.",
    prescricao: "Uma automação simples, configurada uma vez.",
    resultado: "Um processo que cresce junto com a empresa em vez de crescer junto com a folha.",
  },
  {
    tag: "E-commerce",
    problema: "10 horas por semana monitorando anúncios num processo de 16 passos e queria automatizar o caos.",
    prescricao: "Diagnóstico honesto: automatizar aquilo seria automatizar o problema. Primeiro o processo foi redesenhado.",
    resultado: "Só depois de enxuto o processo foi automatizado — sem carregar o defeito adiante.",
  },
];

const faqs = [
  {
    q: "Por que eu não pergunto isso pro ChatGPT de graça?",
    a: "Pode perguntar. Ele vai te devolver uma lista genérica das 20 ferramentas mais famosas da internet. O que ele não faz: uma entrevista de 45 minutos que descobre o que você nem sabe que é automatizável, o filtro pro seu tamanho e orçamento, e uma garantia com dinheiro na mesa. Você não está pagando por uma lista — está pagando por um diagnóstico com pele em jogo.",
  },
  {
    q: "Eu sou péssimo com tecnologia.",
    a: "Perfeito — você é exatamente o perfil. A prescrição já vem com o tempo de setup de cada ferramenta, e a maioria se configura em menos de 30 minutos. O plano de 4 dias existe pra isso: 10 minutos por dia e você colhe a maior parte do benefício.",
  },
  {
    q: "Eu já uso IA.",
    a: "Ótimo. Meus maiores casos de ganho vieram de gente que “já usava ChatGPT” — e não fazia ideia das outras categorias de ferramenta que existiam pro problema específico dela.",
  },
  {
    q: "Quanto vou gastar com as ferramentas depois?",
    a: "Média entre meus clientes: R$60/mês no total. Eu só prescrevo o que cabe no bolso de um negócio do seu tamanho.",
  },
  {
    q: "Vocês implementam?",
    a: `Esse é o diagnóstico em si. A implementação é um projeto separado — e se você quiser seguir por esse caminho, seus ${PRICE} viram crédito integral.`,
  },
  {
    q: "Vou precisar trocar meus sistemas atuais?",
    a: "Não. Eu prescrevo em cima do que você já usa. A regra é somar, não demolir.",
  },
];

const stackFinal = [
  "Sessão de diagnóstico de 45 minutos",
  "Análise completa dos seus gargalos",
  "Relatório de Prescrição com 3–7 ferramentas, custos e ROI calculado",
  "Plano de início de 4 dias",
  "Call de revisão de 30 minutos",
  "Garantia das 5 Horas",
  `${PRICE} em crédito se evoluir pra implementação`,
];

const AiAssessment = () => {
  useEffect(() => {
    tracker.page("Diagnóstico de IA");
    const prev = {
      bg: document.body.style.backgroundColor,
      color: document.body.style.color,
      pt: document.body.style.paddingTop,
    };
    document.body.style.backgroundColor = "#0A0A13";
    document.body.style.color = "#B7B8C7";
    document.body.style.paddingTop = "0";
    return () => {
      document.body.style.backgroundColor = prev.bg;
      document.body.style.color = prev.color;
      document.body.style.paddingTop = prev.pt;
    };
  }, []);

  return (
    <div className="min-h-screen bg-saas-void text-saas-body antialiased">
      <Helmet>
        <title>Diagnóstico de IA — recupere horas no seu negócio | BA Consultoria</title>
        <meta
          name="description"
          content="Um diagnóstico estruturado de IA: você sai com um relatório personalizado com 3 a 7 ferramentas certas pra recuperar 5 a 10 horas por semana no seu negócio. Se não achar 5 horas, você recebe 100% de volta."
        />
      </Helmet>

      {/* ========== HERO ========== */}
      <header className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full bg-saas-violet/20 blur-[110px]" />
          <div className="absolute -top-10 right-0 w-[520px] h-[420px] rounded-full bg-saas-cyan/15 blur-[110px]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 md:pt-28 md:pb-24">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-14 items-center">
            {/* ── Conteúdo (esquerda) ── */}
            <div className="text-left">
              <div className="animate-fade-in">
                <Eyebrow>Diagnóstico de IA</Eyebrow>
              </div>

              <h1
                className="animate-fade-in mt-7 font-extrabold text-saas-ink text-[clamp(28px,3.2vw,36px)] leading-[1.1] tracking-tight"
                style={{ animationDelay: "0.12s" }}
              >
                Recupere <Accent>5 a 10 horas por semana</Accent> com tarefas que poderiam estar sendo automatizadas
              </h1>

              <p
                className="animate-fade-in mt-6 text-saas-body text-base md:text-lg leading-relaxed max-w-[54ch]"
                style={{ animationDelay: "0.3s" }}
              >
                Um diagnóstico estruturado, onde você sai com um relatório personalizado te mostrando
                3 a 7 ferramentas prontas para usar.{" "}
                <strong className="font-semibold text-saas-ink">
                  Se você não encontrar pelo menos 5 horas semanais para economizar, você recebe 100%
                  do valor investido de volta.
                </strong>
              </p>

              <div
                className="animate-fade-in mt-9 flex flex-col items-start gap-3"
                style={{ animationDelay: "0.42s" }}
              >
                <CtaButton location="hero" className="w-full sm:w-auto text-[15px] sm:px-9 py-4">
                  Agendar meu Diagnóstico <ArrowRight size={16} />
                </CtaButton>
                <span className="text-[13px] text-saas-faint">
                  45 minutos do seu tempo. Esse é o único risco real.
                </span>
              </div>

              {/* ── 3 cards (PLACEHOLDER — ajustar métricas) ── */}
              <div
                className="animate-fade-in mt-10 grid grid-cols-3 gap-3 sm:gap-4"
                style={{ animationDelay: "0.54s" }}
              >
                {heroStats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-white/[0.09] bg-white/[0.02] p-4 sm:p-5"
                  >
                    <div className="text-[clamp(20px,2.4vw,28px)] font-extrabold leading-none whitespace-nowrap bg-gradient-to-r from-saas-cyan to-saas-violet bg-clip-text text-transparent">
                      {s.value}
                    </div>
                    <div className="mt-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.1em] text-saas-faint leading-snug">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Imagem (direita, só desktop) — PLACEHOLDER ── */}
            <div className="hidden lg:flex animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="w-full aspect-[4/5] rounded-3xl border border-dashed border-white/[0.14] bg-white/[0.02] flex flex-col items-center justify-center gap-3 text-saas-faint">
                <ImageIcon size={40} strokeWidth={1.5} />
                <span className="font-mono text-[11px] uppercase tracking-[0.14em]">Imagem aqui</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ========== PROBLEMA ========== */}
      <section className="border-t border-white/[0.06] py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow>O problema</Eyebrow>
          <h2 className={"mt-5 " + H2_CLS}>
            Você sabe que precisa de IA. O problema é que você não tem tempo nem de almoçar.
          </h2>

          <div className="mt-8 space-y-5 text-saas-body text-[17px] leading-relaxed">
            <p>
              Todo dia alguém te fala que IA vai mudar tudo. Seus concorrentes já estão usando
              — ou pelo menos é o que parece. E você, trabalhando 50, 60 horas por semana, dentro
              da operação, apagando incêndio.
            </p>
            <p>Aí sobram dois caminhos, e os dois são ruins:</p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            <Card className="p-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-saas-faint mb-3">
                Caminho 1 · Ignorar
              </p>
              <p className="text-saas-body text-[15px] leading-relaxed">
                Enfiar a cabeça na areia e torcer pra não ficar pra trás. Todo mês que passa, essa
                aposta fica mais cara.
              </p>
            </Card>
            <Card className="p-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-saas-faint mb-3">
                Caminho 2 · Virar estudante
              </p>
              <p className="text-saas-body text-[15px] leading-relaxed">
                Assistir tutorial às 23h, testar 40 ferramentas, assinar 5, abandonar todas em 3
                semanas. Você não abriu um negócio pra fazer curso de tecnologia.
              </p>
            </Card>
          </div>

          <div className="mt-8 rounded-2xl border border-white/[0.09] bg-white/[0.02] p-7">
            <span className="block w-10 h-[3px] rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet mb-5" aria-hidden />
            <p className="text-saas-body text-[16px] leading-[1.7]">
              E aqui está o custo que ninguém calcula: não é a mensalidade da ferramenta que você
              deixou de assinar. São as{" "}
              <Accent className="font-semibold">7 horas por semana</Accent> que você continua
              pagando com o recurso mais caro da sua empresa — o seu próprio tempo. Faça a conta:
              7 horas × o valor da sua hora × 52 semanas.{" "}
              <strong className="text-saas-ink">Esse é o preço de continuar como está.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ========== MECANISMO ÚNICO ========== */}
      <section className="border-t border-white/[0.06] py-20 md:py-24 bg-saas-void-2">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow>O mecanismo</Eyebrow>
          <h2 className={"mt-5 " + H2_CLS}>
            Você não precisa aprender IA. Você precisa de uma <Accent>prescrição</Accent>.
          </h2>

          <div className="mt-8 flex items-start gap-4 rounded-2xl border border-white/[0.09] bg-saas-card p-7">
            <span className="inline-flex w-11 h-11 flex-none rounded-full bg-gradient-to-r from-saas-cyan/15 to-saas-violet/15 items-center justify-center">
              <Stethoscope className="text-saas-cyan" size={20} />
            </span>
            <p className="text-saas-body text-[17px] leading-relaxed">
              Quando você fica doente, você não faz faculdade de medicina. Você vai ao médico,
              descreve os sintomas, e sai com uma receita. É exatamente isso que o{" "}
              <strong className="text-saas-ink">Diagnóstico de IA</strong> faz pelo seu negócio.
            </p>
          </div>

          <div className="mt-6 space-y-5 text-saas-body text-[17px] leading-relaxed">
            <p>
              Seu problema nunca foi falta de conhecimento em IA. É falta de diagnóstico. As
              ferramentas já existem — milhares delas, a maioria custando menos de R$30/mês. O que
              não existe é alguém cruzando os seus gargalos específicos com a ferramenta certa, no
              tamanho do seu negócio.
            </p>
            <p>
              Eu faço esse cruzamento. E um detalhe que importa:{" "}
              <Accent className="font-semibold">
                eu não vendo software e não ganho comissão de nenhuma ferramenta que prescrevo.
              </Accent>{" "}
              A recomendação é isenta — como uma receita médica deve ser.
            </p>
          </div>
        </div>
      </section>

      {/* ========== COMO FUNCIONA ========== */}
      <section className="border-t border-white/[0.06] py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow>Como funciona</Eyebrow>
          <h2 className={"mt-5 " + H2_CLS}>Do sintoma à receita, em quatro passos</h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {passos.map((p) => {
              const Icon = p.icon;
              return (
                <Card key={p.num} className="p-7 hover:border-white/[0.18] transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex w-10 h-10 rounded-xl bg-white/[0.04] items-center justify-center">
                      <Icon className="text-saas-cyan" size={18} />
                    </span>
                    <div className="text-3xl font-extrabold leading-none bg-gradient-to-r from-saas-cyan to-saas-violet bg-clip-text text-transparent">
                      {p.num}
                    </div>
                  </div>
                  <h3 className="font-bold text-saas-ink text-lg">
                    {p.title}
                    <span className="ml-2 font-mono text-[11px] uppercase tracking-[0.14em] text-saas-faint align-middle">
                      {p.meta}
                    </span>
                  </h3>
                  <p className="mt-2 text-[14.5px] text-saas-body leading-relaxed">{p.body}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== A MATEMÁTICA ========== */}
      <section className="border-t border-white/[0.06] py-20 md:py-24 bg-saas-void-2">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow>A matemática</Eyebrow>
          <h2 className={"mt-5 " + H2_CLS}>
            A conta que faz esse investimento parecer <Accent>pequeno</Accent>
          </h2>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { value: "7h", label: "recuperadas por semana (cliente médio)" },
              { value: "R$60", label: "custo total das ferramentas / mês" },
              { value: "~R$3.000", label: "em tempo devolvido / mês (hora a R$100)" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/[0.09] bg-white/[0.02] p-6 text-center">
                <div className="text-[clamp(24px,3.2vw,34px)] font-extrabold leading-none whitespace-nowrap bg-gradient-to-r from-saas-cyan to-saas-violet bg-clip-text text-transparent">
                  {s.value}
                </div>
                <div className="mt-3 text-[13px] text-saas-faint leading-relaxed">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-start gap-4 rounded-2xl border border-white/[0.09] bg-saas-card p-7">
            <span className="inline-flex w-11 h-11 flex-none rounded-full bg-gradient-to-r from-saas-cyan/15 to-saas-violet/15 items-center justify-center">
              <Calculator className="text-saas-cyan" size={20} />
            </span>
            <p className="text-saas-body text-[16px] leading-[1.7]">
              Se a sua hora vale R$100 — conservador pra quem é dono — são ~R$3.000/mês em tempo
              devolvido, em troca de R$60/mês em ferramentas. Todo mês. Enquanto o negócio existir.{" "}
              <strong className="text-saas-ink">
                O diagnóstico se paga na primeira semana de implementação. Tudo depois é margem.
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* ========== GARANTIA + CRÉDITO ========== */}
      <section className="border-t border-white/[0.06] py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow>Garantia</Eyebrow>
          <h2 className={"mt-5 " + H2_CLS}>A Garantia das 5 Horas</h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            <Card className="p-8">
              <span className="inline-flex w-11 h-11 rounded-full bg-saas-green/10 items-center justify-center mb-5">
                <ShieldCheck className="text-saas-green" size={22} />
              </span>
              <p className="text-saas-body text-[16px] leading-relaxed">
                Se durante a sessão de diagnóstico eu não encontrar pelo menos{" "}
                <strong className="text-saas-ink">5 horas semanais recuperáveis</strong> com
                ferramentas que cabem no seu negócio e no seu bolso, você recebe 100% do valor de
                volta. Sem formulário, sem constrangimento, sem letra miúda.
              </p>
              <div className="mt-6 space-y-3 border-t border-white/[0.06] pt-6">
                <p className="text-[14.5px] text-saas-body leading-relaxed">
                  <span className="font-semibold text-saas-ink">Pior caso:</span> você perde 45
                  minutos e ainda sai conhecendo duas ou três ferramentas que nunca tinha ouvido
                  falar.
                </p>
                <p className="text-[14.5px] text-saas-body leading-relaxed">
                  <span className="font-semibold text-saas-ink">Melhor caso:</span> você recupera
                  quase um dia inteiro de trabalho, toda semana, pelo resto da vida do seu negócio.
                </p>
              </div>
            </Card>

            <Card className="border-saas-violet/40 p-8">
              <span className="inline-flex w-11 h-11 rounded-full bg-gradient-to-r from-saas-cyan/15 to-saas-violet/15 items-center justify-center mb-5">
                <Check className="text-saas-cyan" size={22} />
              </span>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-saas-cyan mb-3">
                E mais
              </p>
              <p className="text-saas-body text-[16px] leading-relaxed">
                Se depois do relatório você quiser que eu implemente as soluções pra você, os{" "}
                <strong className="text-saas-ink">{PRICE}</strong> viram{" "}
                <Accent className="font-semibold">crédito integral</Accent> em qualquer projeto de
                implementação nos 30 dias seguintes.
              </p>
              <p className="mt-4 text-[15px] text-saas-muted leading-relaxed">
                Na prática, o diagnóstico sai de graça.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ========== PROVA ========== */}
      <section className="border-t border-white/[0.06] py-20 md:py-24 bg-saas-void-2">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow>Prova</Eyebrow>
          <h2 className={"mt-5 " + H2_CLS}>O que acontece quando o diagnóstico é certo</h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {casos.map((c) => (
              <Card key={c.tag} className="p-7 flex flex-col">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-saas-cyan mb-4">
                  {c.tag}
                </p>
                <p className="text-saas-body text-[14.5px] leading-relaxed">{c.problema}</p>
                <div className="mt-5 pt-5 border-t border-white/[0.06]">
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-faint mb-2">
                    Prescrição
                  </p>
                  <p className="text-saas-muted text-[14px] leading-relaxed">{c.prescricao}</p>
                </div>
                <div className="mt-5 pt-5 border-t border-white/[0.06]">
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan mb-2">
                    Resultado
                  </p>
                  <p className="text-saas-ink text-[14.5px] leading-relaxed font-medium">
                    {c.resultado}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ========== QUALIFICAÇÃO ========== */}
      <section className="border-t border-white/[0.06] py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow>Pra quem é</Eyebrow>
          <h2 className={"mt-5 " + H2_CLS}>Isso é pra você?</h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex w-9 h-9 rounded-full bg-saas-green/10 items-center justify-center">
                  <Check className="text-saas-green" size={18} />
                </span>
                <h3 className="font-bold text-saas-ink text-base">É pra você se</h3>
              </div>
              <ul className="space-y-3.5">
                {[
                  "Seu negócio tem de 2 a 20 funcionários",
                  "Fatura entre R$500 mil e R$5 milhões por ano",
                  "Você é o dono que ainda opera dentro dele",
                  "Quer o resultado da IA sem virar o técnico da IA",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14.5px] text-saas-body leading-relaxed">
                    <Check className="w-4 h-4 text-saas-green flex-none mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex w-9 h-9 rounded-full bg-white/[0.05] items-center justify-center">
                  <X className="text-saas-faint" size={18} />
                </span>
                <h3 className="font-bold text-saas-ink text-base">Não é pra você se</h3>
              </div>
              <ul className="space-y-3.5">
                {[
                  "Você quer aprender IA como hobby",
                  "Precisa de um software customizado construído do zero",
                  "Seu negócio ainda não tem processo nenhum pra otimizar",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14.5px] text-saas-muted leading-relaxed">
                    <X className="w-4 h-4 text-saas-faint flex-none mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* ========== ESCASSEZ ========== */}
      <section className="border-t border-white/[0.06] py-20 md:py-24 bg-saas-void-2">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Eyebrow className="mx-auto">Vagas limitadas</Eyebrow>
          <h2 className={"mt-5 " + H2_CLS}>Por um motivo simples</h2>
          <p className="mt-6 text-saas-body text-[17px] leading-relaxed max-w-[60ch] mx-auto">
            Cada diagnóstico consome horas do meu trabalho direto — a entrevista, a análise, o
            relatório e a revisão são feitos por mim, não por um estagiário nem por um robô. Por
            isso eu abro <Accent className="font-semibold">poucas vagas por mês</Accent>.
          </p>
          <div className="mt-10 flex justify-center">
            <CtaButton location="escassez" className="w-full sm:w-auto text-[15px] sm:px-9 py-4">
              Agendar meu Diagnóstico <ArrowRight size={16} />
            </CtaButton>
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section className="border-t border-white/[0.06] py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className={"mt-5 " + H2_CLS}>Perguntas que você provavelmente está se fazendo</h2>

          <div className="mt-10 space-y-4">
            {faqs.map((f) => (
              <Card key={f.q} className="p-7">
                <h3 className="font-bold text-saas-ink text-[16px] leading-snug">{f.q}</h3>
                <p className="mt-3 text-saas-body text-[14.5px] leading-relaxed">{f.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA FINAL ========== */}
      <section className="border-t border-white/[0.06] py-20 md:py-24 relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[360px] rounded-full bg-saas-violet/10 blur-[110px]" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Eyebrow className="mx-auto">O que você leva por {PRICE}</Eyebrow>
          <h2 className="mt-6 font-extrabold text-saas-ink text-[clamp(30px,5vw,52px)] leading-[1.08] tracking-tight">
            Sua semana vai continuar tendo <Accent>168 horas</Accent>.
          </h2>
          <p className="mt-6 text-saas-body text-[17px] leading-relaxed max-w-[60ch] mx-auto">
            A única questão é quantas delas ainda vão estar sendo engolidas por trabalho que uma
            ferramenta de R$20/mês faria.
          </p>

          <div className="mt-10 mx-auto max-w-[600px] rounded-2xl border border-white/[0.09] bg-saas-card p-7 text-left">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-faint mb-5">
              Incluso
            </p>
            <ul className="space-y-3">
              {stackFinal.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14.5px] text-saas-body leading-relaxed">
                  <Check className="w-4 h-4 text-saas-cyan flex-none mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex flex-col items-center gap-3">
            <CtaButton location="cta_final" className="w-full sm:w-auto text-[15px] sm:px-9 py-4">
              Agendar meu Diagnóstico <ArrowRight size={16} />
            </CtaButton>
            <span className="inline-flex items-center gap-2 text-[13px] text-saas-faint">
              <Clock size={13} /> Se eu não achar suas 5 horas, você não paga. Simples assim.
            </span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.06] py-10 text-center text-[13px] text-saas-faint">
        BA Consultoria © 2026 · Diagnóstico de IA
      </footer>
    </div>
  );
};

export default AiAssessment;
