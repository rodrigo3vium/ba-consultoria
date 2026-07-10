import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { tracker } from "@/lib/tracking";
import { buildHotmartCheckoutUrl } from "@/lib/hotmartUtils";
import { Accent, Eyebrow, SAAS_BTN_PRIMARY } from "@/components/saas/ui";

const HOTMART_BASE = "https://pay.hotmart.com/T104822269G?checkoutMode=10";
const NOTION_EBOOK =
  "https://treevium.notion.site/20-skills-para-neg-cios-344fc75e990e80178309ef115f65912e?source=copy_link";

const BEFORE_ITEMS = [
  "Sabe que IA existe, mas não sabe aplicar no seu negócio",
  "Passa horas em tarefas que poderiam ser automatizadas",
  "Testa prompt, não funciona, desiste",
  "Depende de freelancer para criar conteúdo",
  "Usa IA como curiosidade — não como alavanca de negócio",
];

const AFTER_ITEMS = [
  "Usa Claude com fluência para tarefas reais do dia a dia",
  "Delega para IA o que é repetitivo e foca no que importa",
  "Sabe estruturar qualquer instrução e ter o resultado esperado",
  "Produz conteúdo em escala sozinho, com qualidade",
  "IA como vantagem competitiva real — não como ferramenta de curiosidade",
];

const MOCKUP_FEATURES = [
  "90 min de imersão ao vivo",
  "Aplicado ao seu negócio",
  "Prompts prontos inclusos",
  "Acesso imediato",
  "Zero conhecimento técnico",
  "Qualquer segmento",
];

const TESTIMONIALS = [
  {
    result: "−8h semanais de trabalho repetitivo",
    quote:
      "Em dois dias de aplicação eliminei 8 horas semanais de trabalho repetitivo. O que mais me surpreendeu foi a simplicidade — não precisei de nenhum conhecimento técnico.",
    initials: "MF",
    name: "Marcos F.",
    role: "Dono de agência digital",
  },
  {
    result: "Propostas de 3h para 12 minutos",
    quote:
      "Aplicei a skill de criação de propostas e fui de 3 horas para 12 minutos por proposta. Em uma semana já tinha recuperado o investimento 10 vezes.",
    initials: "CL",
    name: "Carolina L.",
    role: "Consultora de marketing",
  },
  {
    result: "Atendimento automatizado sem contratar",
    quote:
      "Sou médico e nunca pensei que conseguiria usar IA no meu negócio. As skills são tão claras que qualquer pessoa aplica. Meu atendimento inicial está 100% automatizado.",
    initials: "RP",
    name: "Dr. Ricardo P.",
    role: "Médico e gestor de clínica",
  },
];

const OFFER_ITEMS = [
  {
    name: "Imersão em Claude (treinamento principal)",
    desc: "90 minutos de imersão prática do zero ao operacional",
    price: "R$197",
  },
  {
    name: "Biblioteca de Prompts Prontos",
    desc: "Os prompts exatos que uso no meu negócio, por categoria",
    price: "R$97",
  },
  {
    name: "Guia de Aplicação por Segmento",
    desc: "Como aplicar cada skill no seu tipo de negócio específico",
    price: "R$47",
  },
  {
    name: "Acesso ao grupo de implementação",
    desc: "Tire dúvidas e veja outros aplicando na prática",
    price: "R$97",
  },
];

const ObrigadoImersaoClaude = () => {
  const [seconds, setSeconds] = useState(14 * 60 + 59);
  const location = useLocation();
  const contactId = (location.state as { contactId?: string } | null)?.contactId;

  useEffect(() => {
    window.scrollTo(0, 0);
    tracker.page("Obrigado Imersão Claude");

    document.body.style.backgroundColor = "#0A0A13";
    document.body.style.paddingTop = "0";

    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.paddingTop = "";
    };
  }, []);

  // countdown
  useEffect(() => {
    if (seconds <= 0) return;
    const id = setInterval(() => setSeconds((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, [seconds]);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m < 10 ? "0" : ""}${m}:${sec < 10 ? "0" : ""}${sec}`;
  };

  const handleCta = (ctaLocation: string) => {
    tracker.track("cta_click", { product: "imersao-claude", cta_location: ctaLocation, page: "/educacao/obrigado-imersao-claude" });
    const checkoutUrl = buildHotmartCheckoutUrl({ baseUrl: HOTMART_BASE, contactId });
    window.open(checkoutUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-saas-void text-saas-body antialiased">
      {/* CONFIRM BAR */}
      <div className="flex items-center justify-center gap-3 border-b border-saas-green/20 bg-saas-green/[0.08] px-6 py-3.5">
        <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full border border-saas-green/40 bg-saas-green/15 text-[11px] text-saas-green">
          ✓
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-saas-green">
          Ebook enviado · Verifique seu email agora
        </span>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden px-4 pb-14 pt-16 text-center sm:px-6 md:pb-16 md:pt-20 lg:px-8">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-[420px] w-[560px] -translate-x-1/2 rounded-full bg-saas-violet/20 blur-[110px]" />
          <div className="absolute top-10 right-0 h-[360px] w-[420px] rounded-full bg-saas-cyan/15 blur-[110px]" />
        </div>
        <div className="relative mx-auto max-w-2xl animate-fade-in">
          <Eyebrow>Antes de fechar essa página</Eyebrow>
          <h1 className="mt-5 font-extrabold text-saas-ink text-[clamp(26px,4vw,44px)] leading-[1.12] tracking-tight">
            As 20 Skills são o <Accent>mapa.</Accent>
            <span className="mt-1 block">A Imersão é o território.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-[54ch] text-base leading-relaxed text-saas-body md:text-lg">
            Você pode ler o ebook, entender as skills e ainda assim não saber por onde começar. É o
            problema de todo guia: ele te mostra <em>o que fazer</em> — mas não te coloca na frente
            do teclado fazendo.
          </p>
          <p className="mx-auto mt-3 max-w-[50ch] text-[15px] italic text-saas-faint">
            O PDF das 20 Skills já foi enviado para o seu email. O que está abaixo vale mais.
          </p>
          <div className="mt-9 inline-flex items-center gap-2.5 rounded-full border border-white/[0.12] bg-white/[0.03] px-5 py-3">
            <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-saas-cyan" />
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-saas-faint">
              Oferta expira em
            </span>
            <span className="min-w-[52px] font-mono text-lg font-bold tabular-nums text-saas-cyan">
              {formatTime(seconds)}
            </span>
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="border-t border-white/[0.06] bg-saas-void-2 px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-center font-extrabold text-saas-ink text-[clamp(22px,3vw,32px)] leading-[1.15] tracking-tight">
            Antes x depois da
            <br />
            <Accent>Imersão em Claude</Accent>
          </h2>
          <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-[1fr_auto_1fr] md:gap-0">
            <div className="rounded-2xl border border-white/[0.09] bg-saas-card p-7">
              <div className="mb-5 flex items-center gap-2 border-b border-white/[0.08] pb-4 text-[13px] font-bold uppercase tracking-wide text-saas-faint">
                <span>✕</span> Sem a Imersão
              </div>
              <div className="flex flex-col gap-3.5">
                {BEFORE_ITEMS.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-saas-body">
                    <span className="mt-0.5 min-w-[16px] text-saas-faint-2">✕</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden items-center justify-center px-6 text-2xl text-saas-violet/50 md:flex">→</div>
            <div className="rounded-2xl border border-saas-cyan/20 bg-saas-card p-7">
              <div className="mb-5 flex items-center gap-2 border-b border-saas-cyan/15 pb-4 text-[13px] font-bold uppercase tracking-wide text-saas-cyan">
                <span>✓</span> Com a Imersão
              </div>
              <div className="flex flex-col gap-3.5">
                {AFTER_ITEMS.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-saas-body">
                    <span className="mt-0.5 min-w-[16px] text-saas-green">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT */}
      <section className="border-t border-white/[0.06] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>O próximo passo</Eyebrow>
          <h2 className="mt-5 mb-4 font-extrabold text-saas-ink text-[clamp(24px,3.4vw,38px)] leading-[1.15] tracking-tight">
            Imersão em <Accent>Claude</Accent>
          </h2>
          <p className="mx-auto mb-12 max-w-[60ch] text-[15px] leading-relaxed text-saas-body">
            O treinamento prático onde você aprende a usar o Claude — a IA mais avançada do mundo —
            aplicado diretamente ao seu negócio. Não é curso teórico. Não tem módulo sobre "o futuro
            da IA". É você abrindo o Claude e executando.
          </p>

          <div className="mx-auto max-w-xl overflow-hidden rounded-2xl border border-white/[0.09] bg-saas-card text-left">
            <div className="flex items-center gap-2.5 border-b border-white/[0.08] bg-saas-void-2 px-7 py-5">
              <span className="h-2 w-2 rounded-full bg-white/20" />
              <span className="h-2 w-2 rounded-full bg-white/20" />
              <span className="h-2 w-2 rounded-full bg-white/20" />
              <span className="flex-1 text-center font-mono text-[9px] uppercase tracking-[0.16em] text-saas-faint">
                imersao-em-claude · rodrigo-albuquerque
              </span>
            </div>
            <div className="px-7 py-8">
              <span className="inline-flex items-center rounded-md border border-saas-cyan/20 bg-saas-cyan/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-saas-cyan">
                Treinamento prático
              </span>
              <div className="mt-4 mb-2 font-extrabold text-saas-ink text-[26px] leading-[1.1]">
                Imersão em <Accent>Claude</Accent>
              </div>
              <div className="mb-6 text-[13px] leading-relaxed text-saas-faint">
                90 minutos. Do zero ao operacional. Sem enrolação, sem teoria, sem conhecimento
                técnico necessário.
              </div>
              <div className="mb-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {MOCKUP_FEATURES.map((f, i) => (
                  <div key={i} className="flex items-start gap-2 text-[12px] leading-relaxed text-saas-body">
                    <span className="mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-sm border border-saas-green/30 bg-saas-green/10 text-[8px] text-saas-green">
                      ✓
                    </span>
                    {f}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3.5 border-t border-white/[0.08] pt-5">
                <span className="font-mono text-[13px] text-saas-faint-2 line-through">R$ 197</span>
                <span className="font-extrabold text-saas-ink text-3xl">
                  R$97 <small className="text-base font-normal text-saas-faint">hoje</small>
                </span>
                <span className="rounded-md border border-saas-green/25 bg-saas-green/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-saas-green">
                  51% OFF
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-t border-white/[0.06] bg-saas-void-2 px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-center font-extrabold text-saas-ink text-[clamp(20px,2.8vw,30px)] leading-[1.15] tracking-tight">
            Quem já passou pela
            <br />
            <Accent>Imersão</Accent>
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/[0.09] bg-saas-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.18]"
              >
                <div className="mb-3 text-[13px] font-bold leading-snug">
                  <Accent>{t.result}</Accent>
                </div>
                <p className="mb-5 text-[13px] italic leading-relaxed text-saas-body">{t.quote}</p>
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-saas-cyan to-saas-violet text-[11px] font-bold text-saas-void">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-[12px] font-bold text-saas-ink">{t.name}</div>
                    <div className="mt-0.5 font-mono text-[9px] uppercase tracking-wider text-saas-faint">
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFER BOX */}
      <section className="relative overflow-hidden border-t border-white/[0.06] px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/2 left-1/2 h-[420px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-saas-cyan/10 blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-xl">
          <div className="mb-9 text-center">
            <Eyebrow>Oferta desta página</Eyebrow>
            <h2 className="mt-5 font-extrabold text-saas-ink text-[clamp(24px,3.4vw,38px)] leading-[1.15] tracking-tight">
              Tudo que você recebe
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-saas-cyan/20 bg-saas-card">
            <div className="border-b border-white/[0.08] bg-saas-void-2 px-9 py-7 text-center">
              <div className="mb-2.5 font-mono text-[9px] uppercase tracking-[0.2em] text-saas-cyan">
                Disponível somente agora
              </div>
              <div className="font-bold text-saas-ink text-[13px] uppercase tracking-wide">
                Imersão em Claude — Pacote Completo
              </div>
            </div>

            <div className="px-9 py-9">
              <div className="mb-8 flex flex-col gap-3.5">
                {OFFER_ITEMS.map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-start justify-between gap-4 ${
                      i < OFFER_ITEMS.length - 1 ? "border-b border-white/[0.06] pb-3.5" : ""
                    }`}
                  >
                    <div className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-md border border-saas-green/30 bg-saas-green/10 text-[9px] text-saas-green">
                        ✓
                      </span>
                      <div className="text-[13px] text-saas-body">
                        <strong className="block text-[13px] font-semibold text-saas-ink">
                          {item.name}
                        </strong>
                        {item.desc}
                      </div>
                    </div>
                    <span className="mt-0.5 whitespace-nowrap font-mono text-[11px] text-saas-faint-2 line-through">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mb-7 flex items-center justify-between rounded-xl border border-white/[0.08] bg-saas-void-2 px-6 py-5">
                <div className="font-bold text-[11px] uppercase tracking-wide text-saas-faint">
                  Valor total
                </div>
                <div className="text-right">
                  <span className="block font-mono text-[11px] text-saas-faint-2 line-through">
                    De R$ 438,00
                  </span>
                  <span className="block font-extrabold text-saas-ink text-[36px] leading-none">
                    R$97
                  </span>
                </div>
              </div>

              <button className={`${SAAS_BTN_PRIMARY} mb-3 w-full`} onClick={() => handleCta("offer-box")}>
                Quero a Imersão por R$97 agora
              </button>
              <span className="mb-6 block text-center font-mono text-[9px] uppercase tracking-[0.16em] text-saas-faint">
                ✓ acesso imediato &nbsp;·&nbsp; 7 dias de garantia &nbsp;·&nbsp; pagamento seguro
              </span>

              <div className="flex items-center gap-4 rounded-xl border border-saas-green/15 bg-saas-green/[0.05] px-5 py-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-saas-green/30 bg-saas-green/10 text-xl">
                  🛡
                </div>
                <div>
                  <div className="mb-1 font-bold text-[11px] uppercase tracking-wide text-saas-green">
                    Garantia de 7 dias
                  </div>
                  <div className="text-[12px] leading-relaxed text-saas-faint">
                    Se você assistir e achar que não valeu, devolvemos tudo. Sem perguntas, sem
                    burocracia. Risco zero, tudo a ganhar.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OBJECTION */}
      <section className="border-t border-white/[0.06] bg-saas-void-2 px-4 py-16 text-center sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-5 font-extrabold text-saas-ink text-[clamp(18px,2.5vw,26px)] leading-[1.25] tracking-tight">
            Por que <Accent>R$97</Accent> se o ebook foi gratuito?
          </h2>
          <p className="mb-6 text-[15px] leading-[1.8] text-saas-body">
            Porque o ebook te dá o mapa. A Imersão te coloca no carro e te ensina a dirigir. São
            coisas diferentes — e{" "}
            <strong className="font-semibold text-saas-ink">
              90 minutos contigo em modo prático vale mais do que qualquer PDF.
            </strong>
          </p>
          <p className="mb-6 text-[15px] leading-[1.8] text-saas-body">
            O ebook te mostra as 20 skills. A Imersão te faz{" "}
            <strong className="font-semibold text-saas-ink">executar pelo menos 5 delas</strong>{" "}
            antes de terminar a aula.
          </p>
          <button className={SAAS_BTN_PRIMARY} onClick={() => handleCta("objection")}>
            Garantir meu acesso agora
          </button>
        </div>
      </section>

      {/* SKIP */}
      <div className="px-4 pt-10 pb-14 text-center sm:px-6 lg:px-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-saas-faint-2">
          <a
            href={NOTION_EBOOK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-saas-faint underline decoration-white/20 underline-offset-4 transition-colors hover:text-saas-body"
          >
            Não quero a Imersão agora — ir direto para o ebook
          </a>
        </p>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.06] px-4 py-8 text-center sm:px-6 lg:px-8">
        <div className="mb-1.5 font-bold text-[11px] uppercase tracking-wide text-saas-faint">
          Rodrigo <Accent>Albuquerque</Accent>
        </div>
        <div className="font-mono text-[9px] uppercase tracking-[0.14em] text-saas-faint-2">
          © 2026 · Todos os direitos reservados
        </div>
      </footer>
    </div>
  );
};

export default ObrigadoImersaoClaude;
