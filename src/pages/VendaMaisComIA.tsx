import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Helmet } from "react-helmet";
import { Check, Flame, Clock, Timer, RefreshCw } from "lucide-react";
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
import {
  Accent,
  Eyebrow,
  SAAS_BTN_PRIMARY,
  SAAS_BTN_GHOST,
  SAAS_CARD,
  SAAS_INPUT,
  SAAS_LABEL,
} from "@/components/saas/ui";
import certHubspot from "@/assets/certificacoes/hubspot.jpeg";
import certIbm from "@/assets/certificacoes/ibm.jpeg";
import certScient from "@/assets/certificacoes/scient.jpeg";
import certStanford from "@/assets/certificacoes/stanford.png";
import rodrigoPhoto from "@/assets/founders/rodrigo-albuquerque.webp";
import mentorDiego from "@/assets/mentors/diego-barreto.webp";
import mentorSomma from "@/assets/mentors/pedro-somma.webp";
import mentorVabo from "@/assets/mentors/vabo.webp";
import mentorJoao from "@/assets/mentors/joao-oliverio.webp";
import mentorDiogo from "@/assets/mentors/jose-diogo.webp";

const formSchema = z.object({
  nome: z.string().min(2, "Nome é obrigatório").max(100),
  whatsapp: z.string().min(10, "WhatsApp inválido").max(20),
  email: z.string().email("Email inválido").max(255),
  empresa: z.string().min(2, "Nome da empresa é obrigatório").max(150),
  leadsMes: z.string().min(1, "Selecione uma opção"),
});

type FormData = z.infer<typeof formSchema>;

const FONT_STACK = "'Plus Jakarta Sans', -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

const LEADS_OPTIONS = ["Até 100", "100 – 500", "500 – 2.000", "Acima de 2.000"];

const NAV_LINKS = [
  { label: "Solução", id: "solucao" },
  { label: "Agentes", id: "agentes" },
  { label: "Processo", id: "processo" },
  { label: "Garantia", id: "garantia" },
];

const HERO_STATS = [
  { value: "24/7", label: "Operação ininterrupta, sem folga", accent: false },
  { value: "<1min", label: "Tempo médio de resposta", accent: false },
  { value: "78%", label: "Dos clientes fecham com quem responde primeiro", accent: true },
];

const MONEY_LOST = [
  {
    icon: Clock,
    color: "#F2667B",
    tint: "bg-[#F2667B]/12",
    title: "Lead fora do horário = dinheiro perdido",
    desc: "Cada minuto sem resposta é um cliente migrando pro concorrente que respondeu primeiro.",
  },
  {
    icon: Timer,
    color: "#F5A051",
    tint: "bg-[#F5A051]/12",
    title: "Demora na resposta = dinheiro perdido",
    desc: "A janela de interesse do lead dura minutos. Passou disso, esfriou — e a venda esfria junto.",
  },
  {
    icon: RefreshCw,
    color: "#8B7CF6",
    tint: "bg-saas-violet/15",
    title: "Follow-up que não é feito = dinheiro perdido",
    desc: '"Depois eu falo com ele" é o caixão silencioso da sua receita — e é ali que a maioria das vendas fecha.',
  },
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
  <div className="relative pt-28">
    <div className="absolute left-[10%] top-10 -translate-x-1/2 z-10">
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#F2667B] to-[#F2667B]/50 border border-white/20 shadow-[0_10px_30px_-10px_rgba(242,102,123,0.7)] flex items-center justify-center">
        <span className="text-white font-extrabold text-base">50%</span>
      </div>
    </div>
    <div className="absolute left-[58%] top-2 -translate-x-1/2 z-10">
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-saas-cyan to-saas-violet border border-white/20 shadow-[0_10px_30px_-10px_rgba(139,124,246,0.7)] flex items-center justify-center">
        <span className="text-white font-extrabold text-base">50%</span>
      </div>
    </div>
    <div className="flex items-end gap-[2px] sm:gap-1 h-56">
      {HOUR_DATA.map((d) => {
        const biz = d.h >= 9 && d.h <= 17;
        return (
          <div key={d.h} className="flex-1 flex flex-col items-center justify-end h-full gap-1.5">
            <div
              className={`w-full rounded-t-[3px] ${biz ? "bg-gradient-to-t from-saas-cyan to-saas-violet" : "bg-[#F2667B]/60"}`}
              style={{ height: `${Math.max((d.v / HOUR_MAX) * 100, 3)}%` }}
            />
            <span className={"text-[9px] text-saas-faint-2 " + (d.h % 2 !== 0 ? "opacity-0 sm:opacity-100" : "")}>
              {d.h}
            </span>
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
  <div className="overflow-x-auto -mx-1 px-1">
    <div className="flex items-end gap-2 md:gap-3 h-56 min-w-[440px] sm:min-w-0">
      {CONTACT_ATTEMPTS.map((d) => (
        <div key={d.label} className="flex-1 flex flex-col items-center justify-end h-full">
          <span className="text-xs font-bold text-saas-body mb-1.5">{d.pct}%</span>
          <div
            className="w-full rounded-t-md bg-gradient-to-t from-saas-violet to-saas-cyan"
            style={{ height: `${Math.max((d.pct / CONTACT_MAX) * 100, 3)}%` }}
          />
          <span className="mt-2 text-[9px] sm:text-[10px] text-saas-faint text-center leading-tight">{d.label}</span>
        </div>
      ))}
    </div>
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
    title: "Seu vendedor melhor todo dia",
    desc: "Analisamos as conversas da Bia, identificamos onde a venda foi perdida e aprendemos com os padrões que performam melhor. Treino contínuo, sem depender de análise manual.",
    checks: [
      "Analisa 100% das conversas",
      "Pontua a performance",
      "Aponta onde perdeu a venda",
      "Gera insight pra melhoria do treinamento",
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

const CERTS = [
  {
    name: "Stanford University",
    src: certStanford,
    desc: "Aprendemos como um processo de comunicação eficiente pode ser usado para gerar maior taxa de resposta e, consequentemente, mais vendas.",
  },
  {
    name: "HubSpot",
    src: certHubspot,
    desc: "Aprendemos como um dos maiores CRMs do mundo usa seus fluxos para maximizar a eficiência do processo comercial.",
  },
  {
    name: "IBM",
    src: certIbm,
    desc: "Aprendemos com uma das maiores empresas de tecnologia do mundo como manter seus dados seguros.",
  },
  {
    name: "Scient",
    src: certScient,
    desc: "Aprendemos como as empresas do Vale do Silício estão usando IA hoje nos seus processos comerciais.",
  },
];

const MENTORS = [
  { name: "Diego Barreto", role: "CEO · iFood", photo: mentorDiego, bio: 'Autor do best-seller "Nova Economia", lidera a expansão e inovação no iFood.' },
  { name: "Pedro Somma", role: "Ex-COO · 99", photo: mentorSomma, bio: "Papel fundamental na expansão e operação da 99, consolidando-a como líder em mobilidade." },
  { name: "Luis Vabo Jr.", role: "Ex-diretor · Stone", photo: mentorVabo, bio: "Empreendedor serial, investidor e autor de 'Falar em público é para você!'." },
  { name: "João Olivério", role: "CEO · Sales As A System", photo: mentorJoao, bio: "Especialista em vendas, Country Manager da Apollo.io e mentor no G4 Sales." },
  { name: "José Diogo C. Rodrigues", role: "CMO Latam · Tinder", photo: mentorDiogo, bio: "Experiência em Brand Marketing na Nike, Red Bull e atualmente Tinder Latam & Canadá." },
];

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
    <Eyebrow className="mb-5">{eyebrow}</Eyebrow>
    <h2 className="font-extrabold text-saas-ink text-[clamp(28px,3.6vw,44px)] leading-[1.12] tracking-tight max-w-[36ch]">
      {title}
    </h2>
    {sub && <p className="mt-4 text-saas-muted text-base md:text-lg leading-relaxed max-w-[60ch]">{sub}</p>}
  </div>
);

const PulseDot = ({ color = "gradient" as "gradient" | "rose" }) => (
  <span
    className={`inline-block w-1.5 h-1.5 rounded-full flex-none animate-pulse ${
      color === "gradient" ? "bg-gradient-to-r from-saas-cyan to-saas-violet" : "bg-[#F2667B]"
    }`}
  />
);

const VendaMaisComIA = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedCert, setSelectedCert] = useState<number | null>(0);

  useEffect(() => {
    tracker.page("Venda Mais com IA — Agente WhatsApp");
    document.body.style.paddingTop = "0";
    return () => {
      document.body.style.paddingTop = "";
    };
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>(".rev-item");
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
    items.forEach((el) => {
      el.style.animationPlayState = "paused";
      observer.observe(el);
    });
    return () => observer.disconnect();
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
    <div className="venda-mais-ia min-h-screen bg-saas-void text-saas-body antialiased" style={{ fontFamily: FONT_STACK }}>
      <Helmet>
        <title>Agente de IA — Vendas no WhatsApp 24/7</title>
        <meta
          name="description"
          content="Um agente de IA que atende, qualifica, agenda e faz follow-up no seu WhatsApp 24 horas por dia. Peça um diagnóstico gratuito e veja funcionando antes de decidir."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap"
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
        /* iOS não dá zoom automático em foco quando o input tem >= 16px */
        @media (max-width: 640px) {
          .venda-mais-ia input, .venda-mais-ia select, .venda-mais-ia textarea {
            font-size: 16px;
          }
        }
      `}</style>

      {/* HEADER */}
      <div className="sticky top-0 z-50 border-b border-white/[0.06] bg-saas-void/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between gap-6">
          <div className="flex items-center gap-2.5 font-bold text-saas-ink text-[15px]">
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-saas-cyan to-saas-violet" />
            Bia
          </div>
          <nav className="hidden min-[860px]:flex items-center gap-8 text-sm font-medium text-saas-muted">
            {NAV_LINKS.map((l) => (
              <button key={l.id} onClick={() => scrollToSection(l.id)} className="hover:text-saas-ink transition-colors">
                {l.label}
              </button>
            ))}
          </nav>
          <button onClick={() => scrollToSection("aplicar")} className={SAAS_BTN_PRIMARY + " !px-5 !py-2.5 !text-[13px] !min-h-[44px]"}>
            Quero um diagnóstico
          </button>
        </div>
      </div>

      {/* HERO */}
      <header className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full bg-saas-violet/20 blur-[110px]" />
          <div className="absolute -top-10 right-0 w-[520px] h-[420px] rounded-full bg-saas-cyan/15 blur-[110px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-20 md:pt-20 md:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
            <div className="rev-item animate-fade-in">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.10] bg-white/[0.03] px-4 py-2 text-xs font-semibold text-saas-body mb-7">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet" />
                <b className="text-saas-ink">SOLUÇÃO MAIS PROCURADA</b>
                <span className="text-saas-faint-2">·</span>
                Bia · Agente de Vendas
              </span>
              <p className="text-sm font-medium text-saas-faint mb-4">Para empresários que querem vender mais.</p>
              <h1 className="font-extrabold text-saas-ink text-[clamp(30px,5.4vw,68px)] leading-[1.05] tracking-tight mb-6">
                Faça vendas <Accent>24h por dia. 7 dias por semana.</Accent>
              </h1>
              <p className="text-saas-body text-base md:text-lg leading-relaxed max-w-[46ch] mb-9">
                Um agente de IA que atende, qualifica, agenda e faz follow-up no seu WhatsApp. Responde em
                segundos e nunca esquece um lead.{" "}
                <b className="text-saas-ink font-semibold">Sem desculpas. Sem reclamação.</b>
              </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={() => scrollToSection("aplicar")} className={SAAS_BTN_PRIMARY}>
                  Quero ver funcionando →
                </button>
                <button onClick={() => scrollToSection("solucao")} className={SAAS_BTN_GHOST}>
                  Como funciona
                </button>
              </div>
            </div>

            <div className="rev-item animate-fade-in flex flex-col gap-4">
              {/* dashboard card */}
              <div className={SAAS_CARD + " shadow-saas-card p-5"}>
                <div className="flex items-center justify-between text-xs text-saas-faint mb-4">
                  <span>agente_dashboard.exe</span>
                  <div className="flex gap-1.5">
                    <i className="w-2 h-2 rounded-full bg-[#F26B6B] inline-block" />
                    <i className="w-2 h-2 rounded-full bg-[#F5C451] inline-block" />
                    <i className="w-2 h-2 rounded-full bg-[#5FD98A] inline-block" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2.5 mb-4">
                  <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-3.5">
                    <div className="text-[11px] text-saas-faint mb-1.5">Leads hoje</div>
                    <div className="text-2xl font-extrabold text-saas-ink">142</div>
                    <div className="text-[11px] font-bold text-saas-green mt-1">↑ 18%</div>
                  </div>
                  <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-3.5">
                    <div className="text-[11px] text-saas-faint mb-1.5">Agendados</div>
                    <div className="text-2xl font-extrabold text-saas-ink">38</div>
                    <div className="text-[11px] font-bold text-saas-green mt-1">↑ 9%</div>
                  </div>
                  <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-3.5">
                    <div className="text-[11px] text-saas-faint mb-1.5">Atendidos</div>
                    <div className="text-2xl font-extrabold text-saas-ink">100%</div>
                    <div className="text-[11px] font-bold text-saas-green mt-1">consistente</div>
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
              <div className={SAAS_CARD + " shadow-saas-card p-5"}>
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-br from-saas-cyan to-saas-violet flex-none" />
                  <div>
                    <div className="text-sm font-bold text-saas-ink">Bia</div>
                    <div className="text-xs text-saas-green flex items-center gap-1.5">
                      <i className="w-1.5 h-1.5 rounded-full bg-saas-green inline-block" />
                      online
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <div className="max-w-[82%] self-start rounded-2xl rounded-bl-md bg-white/[0.04] px-4 py-2.5 text-[14px] text-saas-body leading-snug">
                    Olá, gostaria de saber mais sobre o produto.
                  </div>
                  <div className="max-w-[82%] self-end rounded-2xl rounded-br-md bg-gradient-to-br from-saas-cyan/20 to-saas-violet/20 px-4 py-2.5 text-[14px] text-saas-ink leading-snug">
                    Claro, a Bia é um agente de vendas inteligente que atende seus clientes e fecha vendas 24h por dia.
                    Qual desafio você está enfrentando hoje?
                  </div>
                  <div className="max-w-[82%] self-start rounded-2xl rounded-bl-md bg-white/[0.04] px-4 py-2.5 text-[14px] text-saas-body leading-snug">
                    Não consigo manter a consistência de atendimento na minha empresa.
                  </div>
                  <div className="max-w-[82%] self-end rounded-2xl rounded-br-md bg-gradient-to-br from-saas-cyan/20 to-saas-violet/20 px-4 py-2.5 text-[14px] text-saas-ink leading-snug">
                    Entendo. E faz super sentido. Consistência de velocidade no atendimento e follow-ups é algo muito
                    difícil de alcançar só com atendimento humano.
                  </div>
                  <div className="max-w-[82%] self-end rounded-2xl rounded-br-md bg-gradient-to-br from-saas-cyan/20 to-saas-violet/20 px-4 py-2.5 text-[14px] text-saas-ink leading-snug">
                    Mas é exatamente para isso que eu fui criada.
                  </div>
                  <div className="max-w-[82%] self-end rounded-2xl rounded-br-md bg-gradient-to-br from-saas-cyan/20 to-saas-violet/20 px-4 py-2.5 text-[14px] text-saas-ink leading-snug">
                    O que acha de marcarmos uma reunião essa semana para nosso time te explicar mais sobre a solução?
                    Temos um horário amanhã às 9h ou depois de amanhã às 15h.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STAT STRIP */}
          <div className="rev-item animate-fade-in mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {HERO_STATS.map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/[0.09] bg-white/[0.02] p-6">
                <div
                  className={`text-[clamp(32px,3.6vw,44px)] font-extrabold leading-none ${
                    s.accent ? "bg-gradient-to-r from-saas-cyan to-saas-violet bg-clip-text text-transparent" : "text-saas-ink"
                  }`}
                >
                  {s.value}
                </div>
                <div className="mt-2.5 text-[13px] text-saas-faint leading-relaxed">{s.label}</div>
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
                Quantas vendas você perdeu essa semana por <Accent>demora no atendimento</Accent>?
              </>
            }
            sub="E quantas vendas a mais poderiam ter sido feitas se 1 follow-up a mais tivesse sido feito?"
          />
          <div className="grid md:grid-cols-3 gap-5">
            {MONEY_LOST.map((m) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.title}
                  className={"rev-item animate-fade-in " + SAAS_CARD + " p-7 hover:border-white/[0.18] transition-colors"}
                >
                  <span className={"inline-flex w-12 h-12 rounded-xl items-center justify-center mb-6 " + m.tint}>
                    <Icon className="w-5 h-5" style={{ color: m.color }} />
                  </span>
                  <h3 className="font-extrabold text-saas-ink text-lg md:text-xl leading-snug mb-3">{m.title}</h3>
                  <p className="text-saas-muted text-[15px] leading-relaxed">{m.desc}</p>
                </div>
              );
            })}
          </div>
          <p className="rev-item animate-fade-in mt-6 text-saas-body text-base md:text-lg max-w-2xl">
            E o pior: <b className="text-saas-ink font-semibold">você está pagando caro para ter esse desperdício.</b>
          </p>

          <div className={"rev-item animate-fade-in mt-14 " + SAAS_CARD + " p-7 md:p-10"}>
            <div className="grid lg:grid-cols-[0.95fr_1.15fr] gap-10 lg:gap-14 items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-saas-violet mb-3">
                  O padrão que ninguém mede
                </p>
                <h3 className="font-extrabold text-saas-ink text-[clamp(24px,2.6vw,32px)] leading-snug mb-6 max-w-[22ch]">
                  Metade dos seus leads chega <Accent>fora do horário comercial</Accent>.
                </h3>
                <p className="text-saas-body text-base md:text-lg leading-relaxed max-w-[42ch]">
                  Responder em 5 minutos em vez de 30 minutos{" "}
                  <Accent className="font-bold">aumenta em até 100 vezes a chance de conversão</Accent> do lead.
                </p>
                <p className="mt-5 text-xs text-saas-faint leading-relaxed max-w-[42ch]">
                  Fonte: Oldroyd, McElheran &amp; Elkington, <span className="italic">Harvard Business Review</span>{" "}
                  (2011), com dados da InsideSales.com.
                </p>
              </div>
              <div>
                <HourlyLeadsChart />
                <p className="mt-4 text-xs text-saas-faint leading-relaxed">
                  Distribuição típica de leads por hora do dia (0h–23h) em operações de captação via
                  WhatsApp/formulário.
                </p>
              </div>
            </div>
          </div>

          <div className="rev-item animate-fade-in mt-16 text-center">
            <p className="font-extrabold text-saas-ink text-[clamp(22px,2.8vw,32px)] leading-snug max-w-[30ch] mx-auto">
              E se você tivesse um vendedor que{" "}
              <Accent>nunca dorme, nunca esquece, nunca reclama</Accent> e custa uma fração de um CLT?
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
                Bia, a sua <Accent>funcionária dos sonhos</Accent>.
              </>
            }
            sub={
              <>
                Uma agente de IA treinada nas melhores metodologias de vendas do mundo. Trabalhando 24h por dia no
                seu negócio.{" "}
                <b className="text-saas-ink font-semibold">Nunca mais perca uma venda por falta de atendimento.</b>
              </>
            }
          />
          <div className={"rev-item animate-fade-in max-w-[820px] flex items-start gap-4 " + SAAS_CARD + " p-6"}>
            <span className="flex-none w-9 h-9 rounded-full bg-gradient-to-br from-saas-cyan to-saas-violet flex items-center justify-center mt-0.5">
              <Check className="w-4 h-4 text-saas-void" />
            </span>
            <p className="text-saas-ink text-base leading-relaxed">
              Não é chatbot burro de árvore de decisão que irrita cliente e entrega o jogo na segunda mensagem. É um
              agente treinado no seu processo, com a sua linguagem, seguindo a sua estratégia.
            </p>
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
          <div className={"rev-item animate-fade-in " + SAAS_CARD + " p-7 md:p-10"}>
            <p className="text-xs font-bold uppercase tracking-wide text-saas-violet mb-8 max-w-[46ch]">
              Em média, quantas tentativas de contato sua empresa faz com cada lead?
            </p>
            <ContactAttemptsChart />
            <p className="mt-6 text-xs text-saas-faint">Fonte: Inside Sales Benchmark Brasil.</p>
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
                className={"rev-item animate-fade-in " + SAAS_CARD + " p-7 hover:border-white/[0.18] transition-colors"}
              >
                <span className="inline-flex w-8 h-8 rounded-full bg-white/[0.05] border border-white/[0.08] items-center justify-center text-xs font-bold text-saas-ink mb-5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-xs font-bold uppercase tracking-wide text-saas-violet mb-2">{p.tag}</p>
                <h3 className="font-extrabold text-saas-ink text-xl leading-snug mb-3">{p.title}</h3>
                <p className="text-saas-muted text-[15px] leading-relaxed mb-5">{p.desc}</p>
                <ul className="space-y-2.5">
                  {p.checks.map((c) => (
                    <li key={c} className="flex items-center gap-2.5 text-[13.5px] text-saas-body">
                      <Check className="w-3.5 h-3.5 text-saas-green flex-none" />
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
                SDR humano <Accent>vs</Accent> Bia (Agente de IA).
              </>
            }
          />
          <div className="rev-item animate-fade-in grid md:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-white/[0.07] p-7 opacity-60">
              <p className="text-xs font-bold text-saas-faint mb-1.5">O tradicional</p>
              <p className="font-extrabold text-saas-ink text-2xl mb-6">SDR humano (CLT)</p>
              {CMP_ROWS.map((r) => (
                <div
                  key={r.k}
                  className="flex items-center justify-between gap-3 py-3.5 border-b border-white/[0.06] last:border-none"
                >
                  <span className="text-[13px] text-saas-faint">{r.k}</span>
                  <span className="text-[14.5px] text-saas-body text-right">{r.old}</span>
                </div>
              ))}
            </div>
            <div className={SAAS_CARD + " p-7 shadow-[0_0_0_1px_rgba(139,124,246,0.25),0_24px_50px_-30px_rgba(139,124,246,0.5)]"}>
              <p className="text-xs font-bold text-saas-violet mb-1.5">A evolução</p>
              <p className="font-extrabold text-2xl mb-6">
                <Accent>Bia · Agente de IA</Accent>
              </p>
              {CMP_ROWS.map((r) => (
                <div
                  key={r.k}
                  className="flex items-center justify-between gap-3 py-3.5 border-b border-white/[0.06] last:border-none"
                >
                  <span className="text-[13px] text-saas-faint">{r.k}</span>
                  <span className="text-[14.5px] text-saas-ink font-medium text-right">{r.neo}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="rev-item animate-fade-in mt-10 italic text-saas-ink text-[clamp(17px,2vw,22px)] leading-relaxed max-w-[46ch]">
            <span
              className="block w-10 h-[3px] rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet mb-5"
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
            sub="Do diagnóstico à operação em 15 dias."
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
                      SAAS_CARD +
                      " p-6" +
                      (isFinal
                        ? " border-saas-violet/50 bg-gradient-to-b from-saas-violet/[0.08] to-transparent"
                        : "")
                    }
                  >
                    <div
                      className={
                        "w-9 h-9 rounded-full flex items-center justify-center text-xs font-extrabold mb-4 " +
                        (isFinal
                          ? "bg-gradient-to-br from-saas-cyan to-saas-violet text-saas-void"
                          : "bg-saas-card border border-white/[0.14] text-saas-ink")
                      }
                    >
                      {s.n}
                    </div>
                    <h4 className={"font-bold text-[15px] mb-2.5 " + (isFinal ? "text-saas-violet" : "text-saas-ink")}>
                      {s.title}
                    </h4>
                    <p className="text-sm text-saas-faint leading-relaxed">{s.desc}</p>
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
          <div className="rev-item animate-fade-in rounded-3xl border border-white/[0.10] bg-gradient-to-br from-saas-violet/[0.08] via-transparent to-saas-cyan/[0.06] p-9 md:p-14 grid md:grid-cols-[1fr_auto] gap-10 items-center">
            <div>
              <h2 className="font-extrabold text-saas-ink text-[clamp(28px,3.6vw,44px)] leading-tight mb-4">
                Você vê antes de <Accent>decidir</Accent>.
              </h2>
              <p className="text-saas-body text-base leading-relaxed max-w-[52ch]">
                Coloca o agente pra rodar na sua operação e acompanha o resultado com os próprios olhos.{" "}
                <b className="text-saas-ink font-semibold">Sem letra miúda, sem burocracia.</b> A gente confia no
                que entrega — e faz questão de que você veja funcionando antes de qualquer decisão de continuar.
              </p>
              <p className="mt-4 text-sm font-medium text-saas-faint">
                Demonstração ao vivo + período de operação assistida
              </p>
            </div>
            <div
              className="rounded-full w-[168px] h-[168px] flex-none flex flex-col items-center justify-center text-center bg-saas-void border border-white/[0.10] mx-auto"
              style={{ boxShadow: "0 0 0 6px rgba(139,124,246,0.10)" }}
            >
              <div className="font-extrabold text-xl leading-tight">
                <Accent>
                  RISCO
                  <br />
                  ZERO
                </Accent>
              </div>
              <div className="mt-1.5 text-[10.5px] text-saas-faint leading-snug px-3">
                Você vê rodando antes de fechar
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUEM SOMOS */}
      <section id="quem-somos" className="border-t border-white/[0.06] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Quem somos nós"
            title={
              <>
                De vendedor <Accent>para vendedor</Accent>.
              </>
            }
          />
          <div className="rev-item animate-fade-in grid lg:grid-cols-[300px_1fr] gap-8 lg:gap-12 items-start">
            <div className="mx-auto max-w-[240px] lg:mx-0 lg:max-w-none">
              <div className="rounded-2xl overflow-hidden border border-white/[0.09] shadow-saas-card">
                <img
                  src={rodrigoPhoto}
                  alt="Rodrigo Albuquerque"
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={577}
                  className="w-full h-full object-cover aspect-[4/5]"
                />
              </div>
              <p className="mt-3 text-sm font-bold text-saas-ink">Rodrigo Albuquerque</p>
              <p className="text-xs text-saas-faint">Fundador · BA Consultoria</p>
            </div>
            <div className="space-y-5 text-saas-body text-base md:text-lg leading-relaxed max-w-[640px]">
              <p>Não somos um time de desenvolvedores que nunca pisou em um salão de vendas.</p>
              <p>
                O que gera diferença real na nossa tecnologia é o treinamento de vendas que usamos para treinar a Bia.
              </p>
              <p>
                Depois de gerenciar mais de{" "}
                <b className="text-saas-ink font-semibold">R$80 milhões</b> em vendas anuais e times de vendas de
                mais de <b className="text-saas-ink font-semibold">50 pessoas</b>, Rodrigo abriu a BA Consultoria,
                onde já atendeu mais de <b className="text-saas-ink font-semibold">50 clientes</b> em{" "}
                <b className="text-saas-ink font-semibold">7 países</b> diferentes e gerou mais de{" "}
                <b className="text-saas-ink font-semibold">R$250 milhões</b> em vendas. Hoje, a Bia tem no seu
                treinamento o melhor dos dois mundos:
              </p>
              <p>
                conhecimento prático que só quem vive de vendas possui, aliado às metodologias que as empresas que
                mais crescem no mundo utilizam.
              </p>
            </div>
          </div>

          {/* Certificações */}
          <div className="rev-item animate-fade-in mt-14">
            <p className="text-xs font-bold uppercase tracking-wide text-saas-violet mb-2">Certificações</p>
            <p className="text-sm text-saas-faint mb-6">Clique em cada uma para ver o que ela agrega ao treinamento da Bia.</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl">
              {CERTS.map((c, i) => {
                const active = selectedCert === i;
                return (
                  <button
                    type="button"
                    key={c.name}
                    onClick={() => setSelectedCert(active ? null : i)}
                    aria-pressed={active}
                    className={
                      "rounded-2xl bg-white h-24 flex items-center justify-center px-6 py-5 shadow-saas-card transition-all duration-200 " +
                      (active
                        ? "ring-2 ring-saas-cyan ring-offset-2 ring-offset-saas-void"
                        : "border border-white/[0.09] opacity-70 hover:opacity-100")
                    }
                  >
                    <img src={c.src} alt={c.name} loading="lazy" decoding="async" className="max-h-full max-w-full object-contain" />
                  </button>
                );
              })}
            </div>
            {selectedCert !== null && (
              <div className={"mt-4 max-w-3xl flex items-start gap-3.5 " + SAAS_CARD + " p-5"}>
                <span className="flex-none w-7 h-7 rounded-full bg-gradient-to-br from-saas-cyan to-saas-violet flex items-center justify-center mt-0.5">
                  <Check className="w-3.5 h-3.5 text-saas-void" />
                </span>
                <p className="text-saas-body text-[15px] leading-relaxed">
                  <b className="text-saas-ink font-semibold">{CERTS[selectedCert].name}:</b>{" "}
                  {CERTS[selectedCert].desc}
                </p>
              </div>
            )}
          </div>

          {/* Mentores */}
          <div className="rev-item animate-fade-in mt-16">
            <h3 className="font-extrabold text-saas-ink text-[clamp(22px,2.6vw,30px)] leading-snug mb-3 max-w-[24ch]">
              Mentorado pelos <Accent>melhores empreendedores do Brasil</Accent>.
            </h3>
            <p className="text-saas-muted text-base leading-relaxed max-w-2xl mb-8">
              Rodrigo investiu mais de meio milhão de reais em mentoria com alguns dos maiores líderes do mercado
              brasileiro.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {MENTORS.map((m) => (
                <div key={m.name} className={SAAS_CARD + " p-5"}>
                  <div className="rounded-xl border border-white/[0.09] overflow-hidden aspect-square mb-4">
                    <img loading="lazy" decoding="async" src={m.photo} alt={m.name} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="font-bold text-saas-ink text-[15px] leading-snug tracking-tight">{m.name}</h4>
                  <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-saas-cyan mt-2 mb-3">{m.role}</p>
                  <p className="text-saas-muted text-[12px] leading-relaxed">{m.bio}</p>
                </div>
              ))}
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
                className={"rev-item animate-fade-in " + SAAS_CARD + " p-7 hover:border-white/[0.18] transition-colors"}
              >
                <h3 className="font-extrabold text-saas-ink text-xl leading-snug mb-3">{d.title}</h3>
                <p className="text-saas-muted text-[15px] leading-relaxed">{d.desc}</p>
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
              <AccordionItem key={i} value={`item-${i}`} className={SAAS_CARD + " border-b-0 px-6"}>
                <AccordionTrigger className="text-saas-ink text-base md:text-lg font-semibold hover:no-underline text-left py-5">
                  &ldquo;{f.q}&rdquo;
                </AccordionTrigger>
                <AccordionContent className="text-saas-muted text-[15px] leading-relaxed max-w-[70ch] pb-5">
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
              <Eyebrow className="mb-5">O diagnóstico</Eyebrow>
              <h2 className="font-extrabold text-saas-ink text-[clamp(28px,3.6vw,44px)] leading-tight mb-5 max-w-[18ch]">
                Cada minuto sem responder é uma venda perdida pro <Accent>concorrente</Accent>.
              </h2>
              <p className="text-saas-body text-base md:text-lg leading-relaxed max-w-[44ch] mb-8">
                Agende uma conversa. Fazemos um diagnóstico do seu processo comercial para entender se faz sentido ou
                não colocar um agente de IA no seu negócio — sem compromisso.
              </p>
              <ul className="space-y-3">
                {["Diagnóstico gratuito", "Relatório de uso", "Sem compromisso"].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-sm font-medium text-saas-body">
                    <Check className="w-4 h-4 text-saas-green flex-none" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className={"relative rev-item animate-fade-in " + SAAS_CARD + " p-8 shadow-saas-card"}>
              {isSubmitted ? (
                <div className="text-center py-10 px-2">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-saas-cyan to-saas-violet mx-auto mb-6 flex items-center justify-center">
                    <Check className="w-6 h-6 text-saas-void" />
                  </div>
                  <h4 className="font-extrabold text-saas-ink text-2xl mb-2.5">Recebido!</h4>
                  <p className="text-saas-muted text-[15px] leading-relaxed">
                    Vamos te chamar no WhatsApp pra agendar o diagnóstico e mostrar o agente rodando na prática.
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-2.5 text-sm font-bold text-saas-ink mb-6">
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
                            <label htmlFor={field.name} className={SAAS_LABEL}>Nome completo</label>
                            <FormControl>
                              <input id={field.name} placeholder="Seu nome" className={SAAS_INPUT} {...field} />
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
                            <label htmlFor={field.name} className={SAAS_LABEL}>WhatsApp</label>
                            <FormControl>
                              <input id={field.name} placeholder="(00) 00000-0000" className={SAAS_INPUT} {...field} />
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
                            <label htmlFor={field.name} className={SAAS_LABEL}>E-mail</label>
                            <FormControl>
                              <input id={field.name} type="email" placeholder="voce@empresa.com" className={SAAS_INPUT} {...field} />
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
                            <label htmlFor={field.name} className={SAAS_LABEL}>Empresa</label>
                            <FormControl>
                              <input id={field.name} placeholder="Nome da empresa" className={SAAS_INPUT} {...field} />
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
                            <label htmlFor={field.name} className={SAAS_LABEL}>Quantos leads você recebe por mês?</label>
                            <FormControl>
                              <select id={field.name} className={SAAS_INPUT} {...field}>
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
                        className={SAAS_BTN_PRIMARY + " w-full mt-2 disabled:opacity-50 disabled:cursor-not-allowed"}
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
          <p className="rev-item animate-fade-in font-extrabold text-saas-ink text-[clamp(26px,3.6vw,42px)] leading-tight max-w-[20ch] mb-10">
            O lead não <Accent>espera</Accent>.
          </p>
          <div className="grid grid-cols-2 gap-6 sm:flex sm:flex-wrap sm:justify-between border-t border-white/[0.06] pt-6 text-sm text-saas-faint">
            <div>
              <div className="text-saas-faint text-xs mb-1">Produto</div>
              Agente de IA para WhatsApp
            </div>
            <div>
              <div className="text-saas-faint text-xs mb-1">Canal</div>
              Atendimento · Follow-up · Sales Coach
            </div>
            <div>
              <div className="text-saas-faint text-xs mb-1">Operação</div>
              24 / 7
            </div>
            <div>
              <div className="text-saas-faint text-xs mb-1">© 2026</div>
              Todos os direitos reservados
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VendaMaisComIA;
