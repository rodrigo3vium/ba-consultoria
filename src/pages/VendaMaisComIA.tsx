import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Helmet } from "react-helmet";
import { Check, X, Flame } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { supabase } from "@/integrations/supabase/client";
import { tracker, getPersistedUtm } from "@/lib/tracking";
import { toast } from "sonner";

const formSchema = z.object({
  nome: z.string().min(2, "Nome é obrigatório").max(100),
  whatsapp: z.string().min(10, "WhatsApp inválido").max(20),
  email: z.string().email("Email inválido").max(255),
  empresa: z.string().min(2, "Nome da empresa é obrigatório").max(150),
  leadsMes: z.string().min(1, "Selecione uma opção"),
});

type FormData = z.infer<typeof formSchema>;

const FONT_STACK = "'Plus Jakarta Sans', -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

const BTN_PRIMARY =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-[#0A0A13] bg-gradient-to-r from-[#20DDEB] to-[#8B7CF6] shadow-[0_8px_28px_-8px_rgba(139,124,246,0.55)] hover:shadow-[0_10px_34px_-6px_rgba(139,124,246,0.7)] transition-shadow";
const BTN_GHOST =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-[#B7B8C7] border border-white/[0.14] hover:border-white/[0.28] hover:text-[#F5F5FA] transition-colors";
const CARD_CLS = "rounded-2xl border border-white/[0.09] bg-[#15151F]";
const INPUT_CLS =
  "w-full rounded-xl bg-white/[0.04] border border-white/[0.10] text-[#F5F5FA] placeholder:text-[#5D5F6B] px-4 py-3 text-[15px] outline-none focus:border-[#8B7CF6] focus:ring-2 focus:ring-[#8B7CF6]/30 transition";
const LABEL_CLS = "block text-xs font-semibold text-[#9A9CAA] mb-2";

const LEADS_OPTIONS = ["Até 100", "100 – 500", "500 – 2.000", "Acima de 2.000"];

const NAV_LINKS = [
  { label: "Solução", id: "solucao" },
  { label: "Agentes", id: "agentes" },
  { label: "Processo", id: "processo" },
  { label: "Garantia", id: "garantia" },
];

const HERO_STATS = [
  { value: "4X", label: "Capacidade de atendimento por SDR — de 25 p/ 100 leads/dia", accent: true },
  { value: "24/7", label: "Operação ininterrupta, sem folga", accent: false },
  { value: "<1min", label: "Tempo médio de resposta", accent: false },
  { value: "80%", label: "Das vendas exigem 5+ follow-ups — a maioria para no 2º", accent: false },
];

const PROBLEMS = [
  "Lead fora do horário = lead perdido",
  "Follow-up esquecido = venda perdida",
  "SDR caro, inconsistente e difícil de escalar",
  "Conhecimento que sai junto com a pessoa",
];

const HOUR_DATA = [
  { h: 0, v: 660 }, { h: 1, v: 610 }, { h: 2, v: 470 }, { h: 3, v: 250 },
  { h: 4, v: 150 }, { h: 5, v: 80 }, { h: 6, v: 45 }, { h: 7, v: 30 }, { h: 8, v: 60 },
  { h: 9, v: 130 }, { h: 10, v: 360 }, { h: 11, v: 660 }, { h: 12, v: 910 },
  { h: 13, v: 1070 }, { h: 14, v: 1000 }, { h: 15, v: 1020 }, { h: 16, v: 1040 }, { h: 17, v: 990 },
  { h: 18, v: 1000 }, { h: 19, v: 950 }, { h: 20, v: 850 }, { h: 21, v: 730 }, { h: 22, v: 710 }, { h: 23, v: 680 },
];
const HOUR_MAX = Math.max(...HOUR_DATA.map((d) => d.v));

const HourlyLeadsChart = () => (
  <div className="relative pt-14">
    <div className="absolute left-[10%] top-0 -translate-x-1/2 z-10">
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#F2667B] to-[#F2667B]/50 border border-white/20 shadow-[0_10px_30px_-10px_rgba(242,102,123,0.7)] flex items-center justify-center">
        <span className="text-white font-extrabold text-base">50%</span>
      </div>
    </div>
    <div className="absolute left-[58%] -top-8 -translate-x-1/2 z-10">
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#20DDEB] to-[#8B7CF6] border border-white/20 shadow-[0_10px_30px_-10px_rgba(139,124,246,0.7)] flex items-center justify-center">
        <span className="text-white font-extrabold text-base">50%</span>
      </div>
    </div>
    <div className="flex items-end gap-1 h-56">
      {HOUR_DATA.map((d) => {
        const biz = d.h >= 9 && d.h <= 17;
        return (
          <div key={d.h} className="flex-1 flex flex-col items-center justify-end h-full gap-1.5">
            <div
              className={`w-full rounded-t-[3px] ${biz ? "bg-gradient-to-t from-[#20DDEB] to-[#8B7CF6]" : "bg-[#F2667B]/60"}`}
              style={{ height: `${Math.max((d.v / HOUR_MAX) * 100, 3)}%` }}
            />
            <span className="text-[9px] text-[#5D5F6B]">{d.h}</span>
          </div>
        );
      })}
    </div>
  </div>
);

const CONTACT_ATTEMPTS = [
  { label: "Uma", pct: 3 },
  { label: "Duas", pct: 6 },
  { label: "Três", pct: 26 },
  { label: "Quatro", pct: 10 },
  { label: "Cinco", pct: 19 },
  { label: "Seis", pct: 8 },
  { label: "Sete", pct: 3 },
  { label: "Oito", pct: 4 },
  { label: "Mais de 8", pct: 10 },
  { label: "Não sei", pct: 11 },
];
const CONTACT_MAX = Math.max(...CONTACT_ATTEMPTS.map((d) => d.pct));

const ContactAttemptsChart = () => (
  <div className="flex items-end gap-2 md:gap-3 h-56">
    {CONTACT_ATTEMPTS.map((d) => (
      <div key={d.label} className="flex-1 flex flex-col items-center justify-end h-full">
        <span className="text-xs font-bold text-[#B7B8C7] mb-1.5">{d.pct}%</span>
        <div
          className="w-full rounded-t-md bg-gradient-to-t from-[#8B7CF6] to-[#20DDEB]"
          style={{ height: `${Math.max((d.pct / CONTACT_MAX) * 100, 3)}%` }}
        />
        <span className="mt-2 text-[10px] text-[#7B7C8C] text-center leading-tight">{d.label}</span>
      </div>
    ))}
  </div>
);

const PILLARS = [
  {
    tag: "ATENDIMENTO & SDR",
    title: "Primeiro contato em segundos",
    desc: "O lead chegou? Em menos de um minuto ele já está sendo atendido, qualificado e direcionado. Dia ou noite, feriado ou domingo.",
    checks: [
      "Responde no WhatsApp na hora",
      "Qualifica com perguntas certas",
      "Agenda direto na agenda",
      "Encaminha pro vendedor certo",
    ],
  },
  {
    tag: "FOLLOW-UP & REAQUECIMENTO",
    title: "Nenhum lead fica pra trás",
    desc: "Lead sumiu? Proposta sem resposta? O agente vai atrás com cadência, timing e a copy que funciona — porque 80% das vendas só fecham no 5º toque.",
    checks: [
      "Reativa leads que esfriaram",
      "Persegue proposta sem resposta",
      "Lembra de datas importantes",
      "Mantém o relacionamento vivo",
    ],
  },
  {
    tag: "SALES COACH",
    title: "Seu time vendendo melhor todo dia",
    desc: "Escuta as conversas do time, identifica onde a venda foi perdida e sugere o próximo passo. Treino contínuo, sem depender de gravação assistida à mão.",
    checks: [
      "Escuta 100% das conversas",
      "Pontua a performance",
      "Aponta onde perdeu a venda",
      "Gera insight pro gestor",
    ],
  },
];

const CMP_ROWS = [
  { k: "Custo mensal", old: "R$4.000 – R$6.000", neo: "Fração de um CLT" },
  { k: "Disponibilidade", old: "8h/dia, seg–sex", neo: "24h/dia, 7 dias" },
  { k: "Resposta", old: "Minutos a horas", neo: "Segundos" },
  { k: "Consistência", old: "Varia com o humor", neo: "100% consistente" },
  { k: "Escala", old: "Contratar mais gente", neo: "Aumentar capacidade" },
  { k: "Férias / demissão", old: "Sim", neo: "Nunca" },
];

const STEPS = [
  { n: "01", title: "Diagnóstico", desc: "Entendemos seu processo de vendas, seu público e seus gargalos." },
  { n: "02", title: "Configuração", desc: "Treinamos o agente com seu script, sua linguagem e suas regras." },
  { n: "03", title: "Integração", desc: "Conectamos ao seu WhatsApp, CRM e agenda." },
  { n: "04", title: "Operação", desc: "O agente começa a atender. Você acompanha tudo em tempo real." },
];

const DIFFS = [
  {
    title: (
      <>
        IA é 20%.
        <br />
        Processo é <Accent>80%</Accent>
      </>
    ),
    desc: "Não adianta o melhor agente sobre um processo de vendas ruim. A gente arruma os dois — arquitetura antes de automação.",
  },
  {
    title: "Não é árvore de decisão",
    desc: "ManyChat e fluxo travado furam o WOW na segunda mensagem. Aqui é IA que conversa de verdade, treinada no seu negócio.",
  },
  {
    title: "Somos de vendas",
    desc: "Especialistas em vendas que usam IA — não especialistas em IA tentando entender de venda. A diferença aparece na copy do agente.",
  },
  {
    title: "Treinado no seu jogo",
    desc: "Sua linguagem, suas objeções, sua estratégia. O agente fala como a sua empresa fala — não como um template genérico.",
  },
];

const FAQS = [
  {
    q: "Meu cliente vai perceber que é robô?",
    a: 'O agente conversa com naturalidade, no seu tom de voz, e resolve o que o cliente precisa. A maioria só descobre que falou com uma IA quando a gente conta — e aí o efeito é o oposto: o cliente pensa "quero um desses no meu negócio".',
  },
  {
    q: "Funciona pro meu tipo de negócio?",
    a: "Se você recebe lead no WhatsApp e vende por conversa, funciona. O diagnóstico existe pra mapear seu processo antes de qualquer coisa — se não fizer sentido, a gente fala na cara.",
  },
  {
    q: "E se der problema?",
    a: "O agente escala pra um humano na hora certa — quando detecta um caso que pede pessoa. Você acompanha todas as conversas em tempo real e assume o controle quando quiser.",
  },
  {
    q: "Quanto tempo pra implementar?",
    a: "Dias, não meses. Diagnóstico, configuração no seu processo, integração com WhatsApp e agenda, e o agente já entra em operação. Você acompanha cada etapa.",
  },
];

function Accent({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-[#20DDEB] to-[#8B7CF6] bg-clip-text text-transparent">{children}</span>
  );
}

const SectionIntro = ({
  eyebrow,
  title,
  sub,
  center = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub?: React.ReactNode;
  center?: boolean;
}) => (
  <div className={`rev-item animate-fade-in mb-10 md:mb-14 ${center ? "text-center" : ""}`}>
    <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.10] bg-white/[0.03] px-3.5 py-1.5 text-xs font-semibold tracking-wide text-[#9A9CAA] mb-5">
      {eyebrow}
    </span>
    <h2 className="font-extrabold text-[#F5F5FA] text-[clamp(28px,3.6vw,44px)] leading-[1.12] tracking-tight max-w-[36ch]">
      {title}
    </h2>
    {sub && <p className="mt-4 text-[#9A9CAA] text-base md:text-lg leading-relaxed max-w-[60ch]">{sub}</p>}
  </div>
);

const PulseDot = ({ color = "gradient" as "gradient" | "rose" }) => (
  <span
    className={`inline-block w-1.5 h-1.5 rounded-full flex-none animate-pulse ${
      color === "gradient" ? "bg-gradient-to-r from-[#20DDEB] to-[#8B7CF6]" : "bg-[#F2667B]"
    }`}
  />
);

const VendaMaisComIA = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    tracker.page("Venda Mais com IA — Agente WhatsApp");
    document.body.style.paddingTop = "0";
    return () => {
      document.body.style.paddingTop = "";
    };
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>(".rev-item");
    const observers: IntersectionObserver[] = [];
    items.forEach((el) => {
      el.style.animationPlayState = "paused";
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              (entry.target as HTMLElement).style.animationPlayState = "running";
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { nome: "", whatsapp: "", email: "", empresa: "", leadsMes: "" },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("submit-contact", {
        body: {
          name: data.nome,
          email: data.email,
          whatsapp: data.whatsapp,
          source: "venda-mais-com-ia",
          utm: getPersistedUtm(),
          metadata: { empresa: data.empresa, leads_mes: data.leadsMes },
        },
      });

      if (error) throw error;

      await tracker.identify(data.email, data.whatsapp, data.nome);
      await tracker.track("lead_capture", {
        product: "venda-mais-com-ia",
        source: "landing-page",
        empresa: data.empresa,
        leads_mes: data.leadsMes,
      });

      setIsSubmitted(true);
    } catch (err) {
      console.error("Erro ao salvar lead:", err);
      toast.error("Erro ao processar inscrição. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="venda-mais-ia min-h-screen bg-[#0A0A13] text-[#B7B8C7] antialiased" style={{ fontFamily: FONT_STACK }}>
      <Helmet>
        <title>Agente de IA — Vendas no WhatsApp 24/7</title>
        <meta
          name="description"
          content="Um agente de IA que atende, qualifica, agenda e faz follow-up no seu WhatsApp 24 horas por dia. Peça um diagnóstico gratuito e veja funcionando antes de decidir."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <style>{`
        body::after{display:none !important;}
        .venda-mais-ia h1, .venda-mais-ia h2, .venda-mais-ia h3, .venda-mais-ia h4 {
          font-family: inherit;
          text-transform: none;
        }
        .venda-mais-ia p {
          font-family: inherit;
        }
      `}</style>

      {/* HEADER */}
      <div className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#0A0A13]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between gap-6">
          <div className="flex items-center gap-2.5 font-bold text-[#F5F5FA] text-[15px]">
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#20DDEB] to-[#8B7CF6]" />
            Agente BA
          </div>
          <nav className="hidden min-[860px]:flex items-center gap-8 text-sm font-medium text-[#9A9CAA]">
            {NAV_LINKS.map((l) => (
              <button key={l.id} onClick={() => scrollToSection(l.id)} className="hover:text-[#F5F5FA] transition-colors">
                {l.label}
              </button>
            ))}
          </nav>
          <button onClick={() => scrollToSection("aplicar")} className={BTN_PRIMARY + " !px-5 !py-2.5 !text-[13px]"}>
            Quero um diagnóstico
          </button>
        </div>
      </div>

      {/* HERO */}
      <header className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full bg-[#8B7CF6]/20 blur-[110px]" />
          <div className="absolute -top-10 right-0 w-[520px] h-[420px] rounded-full bg-[#20DDEB]/15 blur-[110px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-20 md:pt-20 md:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
            <div className="rev-item animate-fade-in">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.10] bg-white/[0.03] px-4 py-2 text-xs font-semibold text-[#B7B8C7] mb-7">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#20DDEB] to-[#8B7CF6]" />
                <b className="text-[#F5F5FA]">SOLUÇÃO MAIS PROCURADA</b>
                <span className="text-[#5D5F6B]">·</span>
                Agente de Vendas BA
              </span>
              <p className="text-sm font-medium text-[#7B7C8C] mb-4">Para empresários que perdem lead por demora.</p>
              <h1 className="font-extrabold text-[#F5F5FA] text-[clamp(38px,5.4vw,68px)] leading-[1.05] tracking-tight mb-6">
                Seu melhor vendedor <Accent>não dorme</Accent>.
              </h1>
              <p className="text-[#B7B8C7] text-base md:text-lg leading-relaxed max-w-[46ch] mb-9">
                Um agente de IA que atende, qualifica, agenda e faz follow-up no seu WhatsApp.{" "}
                <b className="text-[#F5F5FA] font-semibold">24 horas por dia, 7 dias por semana.</b> Responde em
                segundos, nunca esquece um lead e{" "}
                <b className="text-[#F5F5FA] font-semibold">custa uma fração de um CLT.</b>
              </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={() => scrollToSection("aplicar")} className={BTN_PRIMARY}>
                  Quero ver funcionando →
                </button>
                <button onClick={() => scrollToSection("solucao")} className={BTN_GHOST}>
                  Como funciona
                </button>
              </div>
            </div>

            <div className="rev-item animate-fade-in flex flex-col gap-4">
              {/* dashboard card */}
              <div className={CARD_CLS + " shadow-[0_24px_60px_-24px_rgba(0,0,0,0.6)] p-5"}>
                <div className="flex items-center justify-between text-xs text-[#7B7C8C] mb-4">
                  <span>agente_dashboard.exe</span>
                  <div className="flex gap-1.5">
                    <i className="w-2 h-2 rounded-full bg-[#F26B6B] inline-block" />
                    <i className="w-2 h-2 rounded-full bg-[#F5C451] inline-block" />
                    <i className="w-2 h-2 rounded-full bg-[#5FD98A] inline-block" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2.5 mb-4">
                  <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-3.5">
                    <div className="text-[11px] text-[#7B7C8C] mb-1.5">Leads hoje</div>
                    <div className="text-2xl font-extrabold text-[#F5F5FA]">142</div>
                    <div className="text-[11px] font-bold text-[#6EE7B7] mt-1">↑ 18%</div>
                  </div>
                  <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-3.5">
                    <div className="text-[11px] text-[#7B7C8C] mb-1.5">Agendados</div>
                    <div className="text-2xl font-extrabold text-[#F5F5FA]">38</div>
                    <div className="text-[11px] font-bold text-[#6EE7B7] mt-1">↑ 9%</div>
                  </div>
                  <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-3.5">
                    <div className="text-[11px] text-[#7B7C8C] mb-1.5">Atendidos</div>
                    <div className="text-2xl font-extrabold text-[#F5F5FA]">100%</div>
                    <div className="text-[11px] font-bold text-[#6EE7B7] mt-1">consistente</div>
                  </div>
                </div>
                <svg width="100%" height="52" viewBox="0 0 400 52" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="heroSpark" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#8B7CF6" stopOpacity="0.45" />
                      <stop offset="100%" stopColor="#20DDEB" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <polyline
                    points="0,38 50,30 100,34 150,18 200,24 250,10 300,16 350,6 400,12"
                    fill="none"
                    stroke="#8B7CF6"
                    strokeWidth="2"
                  />
                  <polygon
                    points="0,38 50,30 100,34 150,18 200,24 250,10 300,16 350,6 400,12 400,52 0,52"
                    fill="url(#heroSpark)"
                    stroke="none"
                  />
                </svg>
              </div>

              {/* chat card */}
              <div className={CARD_CLS + " shadow-[0_24px_60px_-24px_rgba(0,0,0,0.6)] p-5"}>
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#20DDEB] to-[#8B7CF6] flex-none" />
                  <div>
                    <div className="text-sm font-bold text-[#F5F5FA]">Agente BA</div>
                    <div className="text-xs text-[#6EE7B7] flex items-center gap-1.5">
                      <i className="w-1.5 h-1.5 rounded-full bg-[#6EE7B7] inline-block" />
                      online
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <div className="max-w-[82%] self-start rounded-2xl rounded-bl-md bg-white/[0.04] px-4 py-2.5 text-[14px] text-[#B7B8C7] leading-snug">
                    Oi, ainda dá pra saber mais sobre o serviço?
                  </div>
                  <div className="max-w-[82%] self-end rounded-2xl rounded-br-md bg-gradient-to-br from-[#20DDEB]/20 to-[#8B7CF6]/20 px-4 py-2.5 text-[14px] text-[#F5F5FA] leading-snug">
                    Dá sim. Funciono 24/7 por aqui. Qual o seu maior gargalo hoje?
                  </div>
                  <div className="max-w-[82%] self-start rounded-2xl rounded-bl-md bg-white/[0.04] px-4 py-2.5 text-[14px] text-[#B7B8C7] leading-snug">
                    Perco muito lead que chega de madrugada.
                  </div>
                  <div className="max-w-[82%] self-end rounded-2xl rounded-br-md bg-gradient-to-br from-[#20DDEB]/20 to-[#8B7CF6]/20 px-4 py-2.5 text-[14px] text-[#F5F5FA] leading-snug">
                    Esse é exatamente o problema que eu resolvo. Já vou te qualificar e agendar com o time. Pode ser
                    amanhã 9h?
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STAT STRIP */}
          <div className="rev-item animate-fade-in mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {HERO_STATS.map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/[0.09] bg-white/[0.02] p-6">
                <div
                  className={`text-[clamp(32px,3.6vw,44px)] font-extrabold leading-none ${
                    s.accent ? "bg-gradient-to-r from-[#20DDEB] to-[#8B7CF6] bg-clip-text text-transparent" : "text-[#F5F5FA]"
                  }`}
                >
                  {s.value}
                </div>
                <div className="mt-2.5 text-[13px] text-[#7B7C8C] leading-relaxed">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* 01 O PROBLEMA */}
      <section id="dor" className="border-t border-white/[0.06] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="O problema"
            title={
              <>
                Seu WhatsApp é um cemitério de <Accent>oportunidades</Accent>.
              </>
            }
          />
          <div className="rev-item animate-fade-in grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-5 text-[#B7B8C7] text-[17px] leading-relaxed">
              <p>
                O lead chegou às 22h. Seu time só viu às 9h. Quando ligaram, ele já tinha fechado com o
                concorrente que respondeu primeiro.
              </p>
              <p>
                O follow-up ficou pra depois. <b className="text-[#F5F5FA] font-semibold">Depois virou nunca.</b> A
                venda esfriou sozinha, sem ninguém perceber.
              </p>
              <p>
                E o SDR humano custa caro, trabalha 8h, tem dia ruim, pede demissão — e leva o know-how embora
                quando sai.
              </p>
            </div>
            <div className={CARD_CLS + " p-8"}>
              <p className="text-sm font-bold text-[#F5F5FA] mb-1.5">O custo invisível</p>
              <p className="text-[#7B7C8C] text-sm mb-6 leading-relaxed">
                A oportunidade que evapora enquanto ninguém está olhando.
              </p>
              <ul className="space-y-4">
                {PROBLEMS.map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-none w-5 h-5 rounded-full bg-[#F2667B]/15 flex items-center justify-center">
                      <X className="w-3 h-3 text-[#F2667B]" />
                    </span>
                    <span className="text-[15px] text-[#B7B8C7] leading-snug">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={"rev-item animate-fade-in mt-14 " + CARD_CLS + " p-7 md:p-10"}>
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-[#8B7CF6] mb-3">
                  O padrão que ninguém mede
                </p>
                <h3 className="font-extrabold text-[#F5F5FA] text-2xl leading-snug mb-8 max-w-[30ch]">
                  Metade dos seus leads chega <Accent>fora do horário comercial</Accent>.
                </h3>
                <HourlyLeadsChart />
                <p className="mt-4 text-xs text-[#5D5F6B] leading-relaxed">
                  Distribuição típica de leads por hora do dia (0h–23h) em operações de captação via
                  WhatsApp/formulário.
                </p>
              </div>
              <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-7">
                <div className="text-5xl font-extrabold mb-3">
                  <Accent>100x</Accent>
                </div>
                <p className="text-[#B7B8C7] text-[15px] leading-relaxed mb-5">
                  Responder em <b className="text-[#F5F5FA] font-semibold">5 minutos</b> em vez de 30 minutos
                  aumenta em até 100 vezes a chance de conversão do lead.
                </p>
                <p className="text-xs text-[#5D5F6B] leading-relaxed">
                  Fonte: Oldroyd, McElheran &amp; Elkington, <span className="italic">Harvard Business Review</span>{" "}
                  (2011), com dados da InsideSales.com.
                </p>
              </div>
            </div>
          </div>

          <div className="rev-item animate-fade-in mt-16 text-center">
            <p className="font-extrabold text-[clamp(22px,2.8vw,32px)] leading-snug max-w-[26ch] mx-auto">
              <Accent>
                E se você tivesse um vendedor que nunca dorme, nunca esquece e custa uma fração de um CLT?
              </Accent>
            </p>
          </div>
        </div>
      </section>

      {/* 02 A SOLUÇÃO */}
      <section id="solucao" className="border-t border-white/[0.06] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="A solução"
            title={
              <>
                O vendedor que não dorme, não esquece e não pede <Accent>demissão</Accent>.
              </>
            }
          />
          <div className="rev-item animate-fade-in max-w-[820px]">
            <div className="space-y-5 text-[#B7B8C7] text-lg leading-relaxed">
              <p>
                Um agente de IA que trabalha 24 horas, nunca reclama, responde em segundos e segue o seu processo
                com precisão. A velocidade de resposta é maior que a de qualquer humano — e ele não perde o timing
                que fecha a venda.
              </p>
              <p>
                Ele atua direto na restrição do funil:{" "}
                <b className="text-[#F5F5FA] font-semibold">o número de leads que dá pra atender por dia.</b> Com o
                agente, dá pra comprar mais mídia sem desperdiçar lead por falta de atendimento.
              </p>
            </div>
            <div className={"mt-8 flex items-start gap-4 " + CARD_CLS + " p-6"}>
              <span className="flex-none w-9 h-9 rounded-full bg-gradient-to-br from-[#20DDEB] to-[#8B7CF6] flex items-center justify-center mt-0.5">
                <Check className="w-4 h-4 text-[#0A0A13]" />
              </span>
              <p className="text-[#F5F5FA] text-base leading-relaxed">
                Não é chatbot burro de árvore de decisão que irrita cliente e entrega o jogo na segunda mensagem. É
                um agente treinado no seu processo, com a sua linguagem, seguindo a sua estratégia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GARGALO DO FOLLOW-UP */}
      <section id="follow-up" className="border-t border-white/[0.06] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="O gargalo do follow-up"
            title={
              <>
                A maioria desiste <Accent>antes da venda fechar</Accent>.
              </>
            }
            sub="A maior parte das vendas só fecha depois da 5ª tentativa de contato — mas poucas empresas chegam até lá."
          />
          <div className={"rev-item animate-fade-in " + CARD_CLS + " p-7 md:p-10"}>
            <p className="text-xs font-bold uppercase tracking-wide text-[#8B7CF6] mb-8 max-w-[46ch]">
              Em média, quantas tentativas de contato sua empresa faz com cada lead?
            </p>
            <ContactAttemptsChart />
            <p className="mt-6 text-xs text-[#5D5F6B]">Fonte: Inside Sales Benchmark Brasil.</p>
          </div>
        </div>
      </section>

      {/* 03 O ECOSSISTEMA */}
      <section id="agentes" className="border-t border-white/[0.06] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="O ecossistema"
            title={
              <>
                Três agentes. Uma <Accent>máquina de vendas</Accent>.
              </>
            }
          />
          <div className="grid md:grid-cols-3 gap-5">
            {PILLARS.map((p, i) => (
              <div
                key={p.tag}
                className={"rev-item animate-fade-in " + CARD_CLS + " p-7 hover:border-white/[0.18] transition-colors"}
              >
                <span className="inline-flex w-8 h-8 rounded-full bg-white/[0.05] border border-white/[0.08] items-center justify-center text-xs font-bold text-[#F5F5FA] mb-5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-xs font-bold uppercase tracking-wide text-[#8B7CF6] mb-2">{p.tag}</p>
                <h3 className="font-extrabold text-[#F5F5FA] text-xl leading-snug mb-3">{p.title}</h3>
                <p className="text-[#9A9CAA] text-[15px] leading-relaxed mb-5">{p.desc}</p>
                <ul className="space-y-2.5">
                  {p.checks.map((c) => (
                    <li key={c} className="flex items-center gap-2.5 text-[13.5px] text-[#B7B8C7]">
                      <Check className="w-3.5 h-3.5 text-[#6EE7B7] flex-none" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 O CONTRASTE */}
      <section id="comparativo" className="border-t border-white/[0.06] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="O contraste"
            title={
              <>
                Agente de IA <Accent>vs</Accent> SDR humano.
              </>
            }
          />
          <div className="rev-item animate-fade-in grid md:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-white/[0.07] p-7 opacity-60">
              <p className="text-xs font-bold text-[#7B7C8C] mb-1.5">O tradicional</p>
              <p className="font-extrabold text-[#F5F5FA] text-2xl mb-6">SDR humano (CLT)</p>
              {CMP_ROWS.map((r) => (
                <div
                  key={r.k}
                  className="flex items-center justify-between gap-3 py-3.5 border-b border-white/[0.06] last:border-none"
                >
                  <span className="text-[13px] text-[#7B7C8C]">{r.k}</span>
                  <span className="text-[14.5px] text-[#B7B8C7] text-right">{r.old}</span>
                </div>
              ))}
            </div>
            <div className={CARD_CLS + " p-7 shadow-[0_0_0_1px_rgba(139,124,246,0.25),0_24px_50px_-30px_rgba(139,124,246,0.5)]"}>
              <p className="text-xs font-bold text-[#8B7CF6] mb-1.5">A evolução</p>
              <p className="font-extrabold text-2xl mb-6">
                <Accent>Agente de IA</Accent>
              </p>
              {CMP_ROWS.map((r) => (
                <div
                  key={r.k}
                  className="flex items-center justify-between gap-3 py-3.5 border-b border-white/[0.06] last:border-none"
                >
                  <span className="text-[13px] text-[#7B7C8C]">{r.k}</span>
                  <span className="text-[14.5px] text-[#F5F5FA] font-medium text-right">{r.neo}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="rev-item animate-fade-in mt-10 italic text-[#F5F5FA] text-[clamp(17px,2vw,22px)] leading-relaxed max-w-[46ch]">
            <span
              className="block w-10 h-[3px] rounded-full bg-gradient-to-r from-[#20DDEB] to-[#8B7CF6] mb-5"
              aria-hidden
            />
            Você troca um custo fixo alto e imprevisível por um custo menor e uma performance que não varia.
          </p>
        </div>
      </section>

      {/* 05 A IMPLEMENTAÇÃO */}
      <section id="processo" className="border-t border-white/[0.06] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="A implementação"
            title={
              <>
                Em dias, não em <Accent>meses</Accent>.
              </>
            }
            sub="Do diagnóstico à operação."
          />
          <div className="rev-item animate-fade-in relative">
            <div className="hidden md:block absolute left-0 right-0 top-[42px] h-px bg-white/[0.09]" aria-hidden />
            <div className="relative grid md:grid-cols-4 gap-4">
              {STEPS.map((s, i) => {
                const isFinal = i === STEPS.length - 1;
                return (
                  <div
                    key={s.n}
                    className={
                      CARD_CLS +
                      " p-6" +
                      (isFinal
                        ? " border-[#8B7CF6]/50 bg-gradient-to-b from-[#8B7CF6]/[0.08] to-transparent"
                        : "")
                    }
                  >
                    <div
                      className={
                        "w-9 h-9 rounded-full flex items-center justify-center text-xs font-extrabold mb-4 " +
                        (isFinal
                          ? "bg-gradient-to-br from-[#20DDEB] to-[#8B7CF6] text-[#0A0A13]"
                          : "bg-[#15151F] border border-white/[0.14] text-[#F5F5FA]")
                      }
                    >
                      {s.n}
                    </div>
                    <h4 className={"font-bold text-[15px] mb-2.5 " + (isFinal ? "text-[#8B7CF6]" : "text-[#F5F5FA]")}>
                      {s.title}
                    </h4>
                    <p className="text-sm text-[#7B7C8C] leading-relaxed">{s.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 06 GARANTIA */}
      <section id="garantia" className="border-t border-white/[0.06] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rev-item animate-fade-in rounded-3xl border border-white/[0.10] bg-gradient-to-br from-[#8B7CF6]/[0.08] via-transparent to-[#20DDEB]/[0.06] p-9 md:p-14 grid md:grid-cols-[1fr_auto] gap-10 items-center">
            <div>
              <h2 className="font-extrabold text-[#F5F5FA] text-[clamp(28px,3.6vw,44px)] leading-tight mb-4">
                Você vê antes de <Accent>decidir</Accent>.
              </h2>
              <p className="text-[#B7B8C7] text-base leading-relaxed max-w-[52ch]">
                Coloca o agente pra rodar na sua operação e acompanha o resultado com os próprios olhos.{" "}
                <b className="text-[#F5F5FA] font-semibold">Sem letra miúda, sem burocracia.</b> A gente confia no
                que entrega — e faz questão de que você veja funcionando antes de qualquer decisão de continuar.
              </p>
              <p className="mt-4 text-sm font-medium text-[#7B7C8C]">
                Demonstração ao vivo + período de operação assistida
              </p>
            </div>
            <div
              className="rounded-full w-[168px] h-[168px] flex-none flex flex-col items-center justify-center text-center bg-[#0A0A13] border border-white/[0.10] mx-auto"
              style={{ boxShadow: "0 0 0 6px rgba(139,124,246,0.10)" }}
            >
              <div className="font-extrabold text-xl leading-tight">
                <Accent>
                  RISCO
                  <br />
                  ZERO
                </Accent>
              </div>
              <div className="mt-1.5 text-[10.5px] text-[#7B7C8C] leading-snug px-3">
                Você vê rodando antes de fechar
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 07 POR QUE NÓS */}
      <section id="diferenciais" className="border-t border-white/[0.06] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Por que nós"
            title={
              <>
                Por que não é só mais um <Accent>chatbot</Accent>.
              </>
            }
          />
          <div className="grid md:grid-cols-2 gap-5">
            {DIFFS.map((d, i) => (
              <div
                key={i}
                className={"rev-item animate-fade-in " + CARD_CLS + " p-7 hover:border-white/[0.18] transition-colors"}
              >
                <h3 className="font-extrabold text-[#F5F5FA] text-xl leading-snug mb-3">{d.title}</h3>
                <p className="text-[#9A9CAA] text-[15px] leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08 AS PERGUNTAS */}
      <section id="perguntas" className="border-t border-white/[0.06] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="As perguntas"
            title={
              <>
                O que você deve estar <Accent>perguntando</Accent>.
              </>
            }
          />
          <Accordion type="single" collapsible className="rev-item animate-fade-in space-y-3">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className={CARD_CLS + " border-b-0 px-6"}>
                <AccordionTrigger className="text-[#F5F5FA] text-base md:text-lg font-semibold hover:no-underline text-left py-5">
                  &ldquo;{f.q}&rdquo;
                </AccordionTrigger>
                <AccordionContent className="text-[#9A9CAA] text-[15px] leading-relaxed max-w-[70ch] pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 09 CTA + FORM */}
      <section id="aplicar" className="border-t border-white/[0.06] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="rev-item animate-fade-in">
              <span className="inline-flex items-center rounded-full border border-white/[0.10] bg-white/[0.03] px-3.5 py-1.5 text-xs font-semibold text-[#9A9CAA] mb-5">
                O diagnóstico
              </span>
              <h2 className="font-extrabold text-[#F5F5FA] text-[clamp(28px,3.6vw,44px)] leading-tight mb-5 max-w-[18ch]">
                Cada minuto sem responder é uma venda pro <Accent>concorrente</Accent>.
              </h2>
              <p className="text-[#B7B8C7] text-base md:text-lg leading-relaxed max-w-[44ch] mb-8">
                Agende uma conversa. A gente mostra o agente funcionando na prática e faz um diagnóstico do seu
                processo de vendas.
              </p>
              <ul className="space-y-3">
                {["Diagnóstico gratuito", "Demonstração ao vivo", "Sem compromisso"].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-sm font-medium text-[#B7B8C7]">
                    <Check className="w-4 h-4 text-[#6EE7B7] flex-none" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className={"relative rev-item animate-fade-in " + CARD_CLS + " p-8 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.6)]"}>
              {isSubmitted ? (
                <div className="text-center py-10 px-2">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#20DDEB] to-[#8B7CF6] mx-auto mb-6 flex items-center justify-center">
                    <Check className="w-6 h-6 text-[#0A0A13]" />
                  </div>
                  <h4 className="font-extrabold text-[#F5F5FA] text-2xl mb-2.5">Recebido!</h4>
                  <p className="text-[#9A9CAA] text-[15px] leading-relaxed">
                    Vamos te chamar no WhatsApp pra agendar o diagnóstico e mostrar o agente rodando na prática.
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-2.5 text-sm font-bold text-[#F5F5FA] mb-6">
                    <PulseDot />
                    Agendar diagnóstico
                  </div>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="nome"
                        render={({ field }) => (
                          <FormItem>
                            <label className={LABEL_CLS}>Nome completo</label>
                            <FormControl>
                              <input placeholder="Seu nome" className={INPUT_CLS} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="whatsapp"
                        render={({ field }) => (
                          <FormItem>
                            <label className={LABEL_CLS}>WhatsApp</label>
                            <FormControl>
                              <input placeholder="(00) 00000-0000" className={INPUT_CLS} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <label className={LABEL_CLS}>E-mail</label>
                            <FormControl>
                              <input type="email" placeholder="voce@empresa.com" className={INPUT_CLS} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="empresa"
                        render={({ field }) => (
                          <FormItem>
                            <label className={LABEL_CLS}>Empresa</label>
                            <FormControl>
                              <input placeholder="Nome da empresa" className={INPUT_CLS} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="leadsMes"
                        render={({ field }) => (
                          <FormItem>
                            <label className={LABEL_CLS}>Quantos leads você recebe por mês?</label>
                            <FormControl>
                              <select className={INPUT_CLS} {...field}>
                                <option value="" disabled>
                                  Selecione
                                </option>
                                {LEADS_OPTIONS.map((o) => (
                                  <option key={o} value={o}>
                                    {o}
                                  </option>
                                ))}
                              </select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={BTN_PRIMARY + " w-full mt-2 disabled:opacity-50 disabled:cursor-not-allowed"}
                      >
                        {isSubmitting ? "Enviando..." : "Quero ver o agente funcionando"}
                      </button>
                      <div className="flex items-center gap-2.5 rounded-xl bg-[#F2667B]/10 border border-[#F2667B]/25 px-4 py-3 mt-4">
                        <Flame className="w-4 h-4 text-[#F2667B] flex-none" />
                        <p className="text-xs font-semibold text-[#F2667B] leading-snug">
                          Vagas limitadas por mês para garantir qualidade na implementação
                        </p>
                      </div>
                    </form>
                  </Form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.06] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="rev-item animate-fade-in font-extrabold text-[#F5F5FA] text-[clamp(26px,3.6vw,42px)] leading-tight max-w-[20ch] mb-10">
            O lead não <Accent>espera</Accent>.
          </p>
          <div className="flex flex-wrap justify-between gap-6 border-t border-white/[0.06] pt-6 text-sm text-[#7B7C8C]">
            <div>
              <div className="text-[#4E505A] text-xs mb-1">Produto</div>
              Agente de IA para WhatsApp
            </div>
            <div>
              <div className="text-[#4E505A] text-xs mb-1">Canal</div>
              Atendimento · Follow-up · Sales Coach
            </div>
            <div>
              <div className="text-[#4E505A] text-xs mb-1">Operação</div>
              24 / 7
            </div>
            <div>
              <div className="text-[#4E505A] text-xs mb-1">© 2026</div>
              Todos os direitos reservados
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VendaMaisComIA;
