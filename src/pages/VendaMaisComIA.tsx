import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Helmet } from "react-helmet";
import { Check, X } from "lucide-react";
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
import CornerBrackets from "@/components/pb/CornerBrackets";
import Stamp from "@/components/pb/Stamp";
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

const LEADS_OPTIONS = ["Até 100", "100 – 500", "500 – 2.000", "Acima de 2.000"];

const NAV_LINKS = [
  { label: "Solução", id: "solucao" },
  { label: "Agentes", id: "agentes" },
  { label: "Processo", id: "processo" },
  { label: "Garantia", id: "garantia" },
];

const PILLARS = [
  {
    tag: "AGENTE 01 · ATENDIMENTO & SDR",
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
    tag: "AGENTE 02 · FOLLOW-UP & REAQUECIMENTO",
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
    tag: "AGENTE 03 · SALES COACH",
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
        Processo é 80<span className="text-pb-red">%</span>
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

const SecHead = ({ idx, title }: { idx: string; title: React.ReactNode }) => (
  <div className="rev-item animate-fade-in mb-10 md:mb-12">
    <span className="font-mono text-[11px] uppercase tracking-mono-wide text-pb-cyan">{idx}</span>
    <h2 className="mt-3 font-display uppercase text-pb-ink text-[clamp(32px,4vw,56px)] leading-[0.95]">
      {title}
    </h2>
  </div>
);

const PulseDot = ({ color = "cyan" as "cyan" | "red" }) => (
  <span
    className={`inline-block w-1.5 h-1.5 rounded-full animate-pulse-cyan flex-none ${
      color === "cyan" ? "bg-pb-cyan shadow-[0_0_8px_rgba(32,221,235,0.6)]" : "bg-pb-red shadow-[0_0_8px_rgba(228,73,53,0.6)]"
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
    <div className="min-h-screen bg-pb-void text-pb-ink-soft font-body">
      <Helmet>
        <title>Agente de IA — Vendas no WhatsApp 24/7</title>
        <meta
          name="description"
          content="Um agente de IA que atende, qualifica, agenda e faz follow-up no seu WhatsApp 24 horas por dia. Peça um diagnóstico gratuito e veja funcionando antes de decidir."
        />
      </Helmet>

      {/* META BAR */}
      <div className="meta-bar">
        <div className="flex items-center min-w-0">
          <span className="dot cyan" />
          <span className="truncate">Agente de IA // WhatsApp</span>
        </div>
        <nav className="flex items-center gap-6 flex-none">
          <div className="hidden min-[860px]:flex items-center gap-6">
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollToSection(l.id)}
                className="hover:text-pb-cyan transition-colors"
              >
                {l.label}
              </button>
            ))}
          </div>
          <button
            onClick={() => scrollToSection("aplicar")}
            className="btn-primary"
            style={{ padding: "8px 16px", fontSize: "10px" }}
          >
            Quero um diagnóstico
          </button>
        </nav>
      </div>

      {/* HERO */}
      <header className="relative pt-10 pb-16 md:pt-14 md:pb-20 overflow-hidden">
        <div className="hidden lg:block absolute top-5 right-8 text-right font-mono text-[10px] uppercase tracking-mono-wide leading-loose text-pb-ink-faint">
          <div>
            FILE: <span className="text-pb-ink-soft">AGENTE.LP</span>
          </div>
          <div>
            BUILD: <span className="text-pb-ink-soft">2026.07</span>
          </div>
          <div>
            CHANNEL: <span className="text-pb-ink-soft">WHATSAPP</span>
          </div>
          <div>
            STATE: <span className="text-pb-cyan">● 24/7</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
            <div className="rev-item animate-fade-in">
              <Stamp>AGENTE DE IA PARA VENDAS</Stamp>
              <p className="mt-6 font-mono text-xs uppercase tracking-mono-wide text-pb-ink-muted">
                Para empresários que perdem lead por demora.
              </p>
              <h1 className="mt-4 font-display uppercase text-pb-ink text-[clamp(44px,6vw,88px)] leading-[0.9]">
                Seu melhor vendedor
                <br />
                não dorme<span className="text-pb-red">.</span>
              </h1>
              <p className="mt-7 font-body text-pb-ink-soft text-base md:text-lg leading-relaxed max-w-[40ch]">
                Um agente de IA que atende, qualifica, agenda e faz follow-up no seu WhatsApp. 24 horas por dia,
                7 dias por semana. Responde em segundos, nunca esquece um lead e custa uma fração de um CLT.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button onClick={() => scrollToSection("aplicar")} className="btn-primary">
                  Quero ver funcionando
                </button>
                <button onClick={() => scrollToSection("solucao")} className="btn-ghost">
                  Como funciona ↓
                </button>
              </div>
            </div>

            {/* CHAT MOCKUP */}
            <div className="relative rev-item animate-fade-in bg-gradient-to-b from-pb-void-card to-pb-void-elev border border-pb-grid-strong">
              <CornerBrackets size={22} offset={-1} />
              <div className="flex items-center justify-between px-4 py-3 border-b border-pb-grid-strong font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted">
                <span>Agente // Conversa ao vivo</span>
                <span className="flex items-center gap-2 text-pb-cyan">
                  <PulseDot />
                  Online
                </span>
              </div>
              <div className="flex flex-col gap-3.5 p-5 bg-pb-void-deep">
                <div className="max-w-[78%] self-start bg-pb-void-elev border border-pb-grid-strong p-3.5">
                  <span className="block font-mono text-[9px] uppercase tracking-mono-wide text-pb-ink-muted mb-1.5">
                    Lead · 22:47
                  </span>
                  <span className="font-body text-[14.5px] leading-snug text-pb-ink-soft">
                    Oi, ainda dá pra saber mais sobre o serviço?
                  </span>
                </div>
                <div className="max-w-[78%] self-end bg-pb-cyan/[0.08] border border-pb-cyan-dim p-3.5">
                  <span className="block font-mono text-[9px] uppercase tracking-mono-wide text-pb-cyan mb-1.5">
                    Agente
                  </span>
                  <span className="font-body text-[14.5px] leading-snug text-pb-ink">
                    Dá sim. Funciono 24/7 por aqui. Me conta: qual o seu maior gargalo hoje?
                  </span>
                </div>
                <div className="self-end flex items-center gap-2 font-mono text-[9px] uppercase tracking-mono-wide text-pb-ink-muted">
                  <span className="w-1 h-1 rounded-full bg-pb-cyan shadow-[0_0_6px_rgba(32,221,235,0.6)]" />
                  Resposta em 0.8s
                </div>
                <div className="max-w-[78%] self-start bg-pb-void-elev border border-pb-grid-strong p-3.5">
                  <span className="block font-mono text-[9px] uppercase tracking-mono-wide text-pb-ink-muted mb-1.5">
                    Lead · 22:47
                  </span>
                  <span className="font-body text-[14.5px] leading-snug text-pb-ink-soft">
                    Perco muito lead que chega de madrugada.
                  </span>
                </div>
                <div className="max-w-[78%] self-end bg-pb-cyan/[0.08] border border-pb-cyan-dim p-3.5">
                  <span className="block font-mono text-[9px] uppercase tracking-mono-wide text-pb-cyan mb-1.5">
                    Agente
                  </span>
                  <span className="font-body text-[14.5px] leading-snug text-pb-ink">
                    Esse é exatamente o problema que eu resolvo. Já vou te qualificar e agendar com o time. Pode
                    ser amanhã 9h?
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-3 border-t border-pb-grid-strong">
                <div className="p-4 border-r border-pb-grid-strong">
                  <div className="font-display text-3xl leading-none text-pb-ink">142</div>
                  <div className="mt-1.5 font-mono text-[8px] uppercase tracking-mono-wide text-pb-ink-muted">
                    Leads hoje
                  </div>
                </div>
                <div className="p-4 border-r border-pb-grid-strong">
                  <div className="font-display text-3xl leading-none text-pb-ink">38</div>
                  <div className="mt-1.5 font-mono text-[8px] uppercase tracking-mono-wide text-pb-ink-muted">
                    Agendados (auto)
                  </div>
                </div>
                <div className="p-4 bg-pb-void-deep">
                  <div className="font-display text-3xl leading-none text-pb-cyan">100%</div>
                  <div className="mt-1.5 font-mono text-[8px] uppercase tracking-mono-wide text-pb-ink-muted">
                    Atendidos
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STAT GRID */}
          <div className="rev-item animate-fade-in mt-14 grid grid-cols-2 md:grid-cols-4 border border-pb-grid-strong divide-x divide-y md:divide-y-0 divide-pb-grid-strong">
            <div className="p-6">
              <div className="font-display text-[clamp(40px,4.4vw,58px)] leading-none text-pb-cyan">4X</div>
              <div className="mt-2.5 font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted leading-relaxed">
                Capacidade de atendimento por SDR — de 25 p/ 100 leads/dia
              </div>
            </div>
            <div className="p-6">
              <div className="font-display text-[clamp(40px,4.4vw,58px)] leading-none text-pb-ink">24/7</div>
              <div className="mt-2.5 font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted leading-relaxed">
                Operação ininterrupta, sem folga
              </div>
            </div>
            <div className="p-6">
              <div className="font-display text-[clamp(40px,4.4vw,58px)] leading-none text-pb-ink">&lt;1min</div>
              <div className="mt-2.5 font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted leading-relaxed">
                Tempo médio de resposta
              </div>
            </div>
            <div className="p-6">
              <div className="font-display text-[clamp(40px,4.4vw,58px)] leading-none text-pb-ink">80%</div>
              <div className="mt-2.5 font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted leading-relaxed">
                Das vendas exigem 5+ follow-ups — a maioria para no 2º
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 01 O PROBLEMA */}
      <section id="dor" className="border-t border-pb-grid-strong py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SecHead
            idx="01 / O PROBLEMA"
            title={
              <>
                Seu WhatsApp é um cemitério de oportunidades<span className="text-pb-red">.</span>
              </>
            }
          />
          <div className="rev-item animate-fade-in grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-5 font-body text-pb-ink-soft text-[17px] leading-relaxed">
              <p>
                O lead chegou às 22h. Seu time só viu às 9h. Quando ligaram, ele já tinha fechado com o
                concorrente que respondeu primeiro.
              </p>
              <p>
                O follow-up ficou pra depois. <strong className="text-pb-ink font-semibold">Depois virou nunca.</strong>{" "}
                A venda esfriou sozinha, sem ninguém perceber.
              </p>
              <p>
                E o SDR humano custa caro, trabalha 8h, tem dia ruim, pede demissão — e leva o know-how embora
                quando sai.
              </p>
            </div>
            <div className="bg-gradient-to-b from-pb-void-card to-pb-void-elev border border-pb-grid-strong p-8">
              <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-2">
                O custo invisível
              </p>
              <p className="font-body text-pb-ink-muted text-sm mb-6 leading-relaxed">
                A oportunidade que evapora enquanto ninguém está olhando.
              </p>
              <ul>
                {[
                  "Lead fora do horário = lead perdido",
                  "Follow-up esquecido = venda perdida",
                  "SDR caro, inconsistente e difícil de escalar",
                  "Conhecimento que sai junto com a pessoa",
                ].map((t) => (
                  <li
                    key={t}
                    className="flex items-start gap-3.5 py-4 border-b border-pb-grid last:border-none font-body text-[15.5px] text-pb-ink-soft"
                  >
                    <X className="w-4 h-4 text-pb-red flex-none mt-0.5" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="rev-item animate-fade-in mt-14 text-center">
            <p className="font-display uppercase text-pb-cyan text-[clamp(26px,3.4vw,44px)] leading-[1.02] max-w-[24ch] mx-auto">
              E se você tivesse um vendedor que nunca dorme, nunca esquece e custa uma fração de um CLT?
            </p>
          </div>
        </div>
      </section>

      {/* 02 A SOLUÇÃO */}
      <section id="solucao" className="border-t border-pb-grid-strong py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SecHead
            idx="02 / A SOLUÇÃO"
            title={
              <>
                O vendedor que não dorme, não esquece e não pede demissão<span className="text-pb-red">.</span>
              </>
            }
          />
          <div className="rev-item animate-fade-in max-w-[820px]">
            <p className="font-mono text-[11px] uppercase tracking-mono-wide text-pb-ink-muted mb-5">
              Apresentamos
            </p>
            <div className="space-y-5 font-body text-pb-ink-soft text-lg leading-relaxed">
              <p>
                Um agente de IA que trabalha 24 horas, nunca reclama, responde em segundos e segue o seu
                processo com precisão. A velocidade de resposta é maior que a de qualquer humano — e ele não
                perde o timing que fecha a venda.
              </p>
              <p>
                Ele atua direto na restrição do funil:{" "}
                <strong className="text-pb-ink font-semibold">
                  o número de leads que dá pra atender por dia.
                </strong>{" "}
                Com o agente, dá pra comprar mais mídia sem desperdiçar lead por falta de atendimento.
              </p>
            </div>
            <div className="mt-8 flex items-start gap-4 bg-pb-void-card border border-pb-grid-strong border-l-2 border-l-pb-cyan p-6">
              <div className="w-[22px] h-[22px] border border-pb-cyan flex-none flex items-center justify-center mt-0.5">
                <Check className="w-3.5 h-3.5 text-pb-cyan" />
              </div>
              <p className="font-body text-[16px] text-pb-ink leading-relaxed">
                Não é chatbot burro de árvore de decisão que irrita cliente e entrega o jogo na segunda
                mensagem. É um agente treinado no seu processo, com a sua linguagem, seguindo a sua estratégia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 O ECOSSISTEMA */}
      <section id="agentes" className="border-t border-pb-grid-strong py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SecHead
            idx="03 / O ECOSSISTEMA"
            title={
              <>
                Três agentes. Uma máquina de vendas<span className="text-pb-red">.</span>
              </>
            }
          />
          <div className="grid md:grid-cols-3 gap-5">
            {PILLARS.map((p) => (
              <div
                key={p.tag}
                className="rev-item animate-fade-in bg-gradient-to-b from-pb-void-card to-pb-void-elev border border-pb-grid-strong border-t-2 border-t-pb-cyan p-7 hover:border-pb-cyan-dim transition-colors duration-300"
              >
                <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-4">{p.tag}</p>
                <h3 className="font-display uppercase text-pb-ink text-2xl leading-[0.98] mb-3">{p.title}</h3>
                <p className="font-body text-pb-ink-soft text-[15px] leading-relaxed mb-5">{p.desc}</p>
                <ul className="space-y-2.5">
                  {p.checks.map((c) => (
                    <li
                      key={c}
                      className="flex items-center gap-2.5 font-mono text-[11.5px] uppercase tracking-wide text-pb-ink-muted"
                    >
                      <Check className="w-3.5 h-3.5 text-pb-cyan flex-none" />
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
      <section id="comparativo" className="border-t border-pb-grid-strong py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SecHead
            idx="04 / O CONTRASTE"
            title={
              <>
                Agente de IA vs SDR humano<span className="text-pb-red">.</span>
              </>
            }
          />
          <div className="rev-item animate-fade-in grid md:grid-cols-2 gap-5">
            <div className="border border-pb-grid-strong p-7 opacity-70">
              <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted mb-1.5">
                O tradicional
              </p>
              <p className="font-display uppercase text-pb-ink text-[28px] leading-none mb-6">SDR humano (CLT)</p>
              {CMP_ROWS.map((r) => (
                <div
                  key={r.k}
                  className="flex items-center justify-between gap-3 py-3.5 border-b border-pb-grid last:border-none"
                >
                  <span className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted">{r.k}</span>
                  <span className="font-body text-[14.5px] text-pb-ink-soft text-right">{r.old}</span>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-b from-pb-void-card to-pb-void-elev border border-pb-grid-strong border-t-2 border-t-pb-cyan p-7">
              <p className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted mb-1.5">
                A evolução
              </p>
              <p className="font-display uppercase text-pb-cyan text-[28px] leading-none mb-6">Agente de IA</p>
              {CMP_ROWS.map((r) => (
                <div
                  key={r.k}
                  className="flex items-center justify-between gap-3 py-3.5 border-b border-pb-grid last:border-none"
                >
                  <span className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted">{r.k}</span>
                  <span className="font-body text-[14.5px] text-pb-ink text-right">{r.neo}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="rev-item animate-fade-in mt-10 font-body italic text-pb-ink text-[clamp(17px,2vw,22px)] leading-relaxed max-w-[46ch]">
            <span className="block w-10 h-px bg-pb-cyan mb-5" aria-hidden />
            Você troca um custo fixo alto e imprevisível por um custo menor e uma performance que não varia.
          </p>
        </div>
      </section>

      {/* 05 A IMPLEMENTAÇÃO */}
      <section id="processo" className="border-t border-pb-grid-strong py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SecHead
            idx="05 / A IMPLEMENTAÇÃO"
            title={
              <>
                Em dias, não em meses<span className="text-pb-red">.</span>
              </>
            }
          />
          <p className="rev-item animate-fade-in font-mono text-[11px] uppercase tracking-mono-wide text-pb-ink-muted mb-8">
            Do diagnóstico à operação
          </p>
          <div className="rev-item animate-fade-in grid md:grid-cols-4 border border-pb-grid-strong divide-y md:divide-y-0 md:divide-x divide-pb-grid-strong">
            {STEPS.map((s) => (
              <div key={s.n} className="p-6">
                <div className="font-display text-4xl leading-none text-pb-cyan mb-3.5">{s.n}</div>
                <h4 className="font-mono text-xs uppercase tracking-mono-wide text-pb-ink mb-3">{s.title}</h4>
                <p className="font-body text-sm text-pb-ink-muted leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 GARANTIA */}
      <section id="garantia" className="border-t border-pb-grid-strong py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rev-item animate-fade-in grid md:grid-cols-[1fr_auto] gap-10 items-center border border-pb-cyan-dim bg-gradient-to-b from-pb-cyan/[0.04] to-transparent p-9 md:p-12">
            <div>
              <h2 className="font-display uppercase text-pb-ink text-[clamp(32px,4vw,56px)] leading-[0.95] mb-4">
                Você vê antes de decidir<span className="text-pb-red">.</span>
              </h2>
              <p className="font-body text-pb-ink-soft text-base leading-relaxed max-w-[52ch]">
                Coloca o agente pra rodar na sua operação e acompanha o resultado com os próprios olhos.{" "}
                <strong className="text-pb-ink font-semibold">Sem letra miúda, sem burocracia.</strong> A gente
                confia no que entrega — e faz questão de que você veja funcionando antes de qualquer decisão de
                continuar.
              </p>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-mono-wide text-pb-ink-muted">
                Demonstração ao vivo + período de operação assistida
              </p>
            </div>
            <div className="border border-pb-cyan p-7 text-center min-w-[200px]">
              <div className="font-display text-[clamp(38px,4vw,52px)] leading-[0.9] text-pb-cyan">
                RISCO
                <br />
                ZERO
              </div>
              <div className="mt-2.5 font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted leading-relaxed">
                Você vê rodando
                <br />
                antes de fechar
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 07 POR QUE NÓS */}
      <section id="diferenciais" className="border-t border-pb-grid-strong py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SecHead
            idx="06 / POR QUE NÓS"
            title={
              <>
                Por que não é só mais um chatbot<span className="text-pb-red">.</span>
              </>
            }
          />
          <div className="grid md:grid-cols-2 gap-5">
            {DIFFS.map((d, i) => (
              <div
                key={i}
                className="rev-item animate-fade-in bg-pb-void-card border border-pb-grid-strong p-7 hover:border-pb-cyan-dim transition-colors duration-300"
              >
                <h3 className="font-display uppercase text-pb-ink text-[26px] leading-none mb-3.5">{d.title}</h3>
                <p className="font-body text-pb-ink-soft text-[15px] leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08 AS PERGUNTAS */}
      <section id="perguntas" className="border-t border-pb-grid-strong py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SecHead
            idx="07 / AS PERGUNTAS"
            title={
              <>
                O que você deve estar perguntando<span className="text-pb-red">.</span>
              </>
            }
          />
          <Accordion type="single" collapsible className="rev-item animate-fade-in">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-pb-grid-strong">
                <AccordionTrigger className="font-display uppercase text-pb-ink text-xl md:text-2xl hover:no-underline hover:text-pb-cyan text-left py-6">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-pb-ink-soft text-base leading-relaxed max-w-[70ch] pb-6">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 09 CTA + FORM */}
      <section id="aplicar" className="border-t border-pb-grid-strong py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-14 items-start">
            <div className="rev-item animate-fade-in">
              <span className="font-mono text-[11px] uppercase tracking-mono-wide text-pb-cyan">
                08 / O DIAGNÓSTICO
              </span>
              <h2 className="mt-3 font-display uppercase text-pb-ink text-[clamp(32px,4vw,56px)] leading-[0.95]">
                Cada minuto sem responder é uma venda pro concorrente<span className="text-pb-red">.</span>
              </h2>
              <p className="mt-5 font-body text-pb-ink-soft text-base md:text-lg leading-relaxed max-w-[44ch]">
                Agende uma conversa. A gente mostra o agente funcionando na prática e faz um diagnóstico do seu
                processo de vendas.
              </p>
              <ul className="mt-8 space-y-3">
                {["Diagnóstico gratuito", "Demonstração ao vivo", "Sem compromisso"].map((t) => (
                  <li
                    key={t}
                    className="flex items-center gap-3 font-mono text-xs uppercase tracking-mono-wide text-pb-ink-soft"
                  >
                    <Check className="w-3.5 h-3.5 text-pb-cyan flex-none" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative rev-item animate-fade-in bg-gradient-to-b from-pb-void-card to-pb-void-elev border border-pb-grid-strong p-8">
              <CornerBrackets size={20} offset={-1} />
              {isSubmitted ? (
                <div className="text-center py-10 px-2">
                  <div className="w-11 h-11 border border-pb-cyan mx-auto mb-6 flex items-center justify-center">
                    <Check className="w-5 h-5 text-pb-cyan" />
                  </div>
                  <h4 className="font-display uppercase text-pb-ink text-3xl mb-2.5">Recebido</h4>
                  <p className="font-body text-pb-ink-soft text-[15px] leading-relaxed">
                    Vamos te chamar no WhatsApp pra agendar o diagnóstico e mostrar o agente rodando na prática.
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-6">
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
                            <label className="pb-label mb-2 block">Nome completo</label>
                            <FormControl>
                              <input placeholder="Seu nome" className="pb-input" {...field} />
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
                            <label className="pb-label mb-2 block">WhatsApp</label>
                            <FormControl>
                              <input placeholder="(00) 00000-0000" className="pb-input" {...field} />
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
                            <label className="pb-label mb-2 block">E-mail</label>
                            <FormControl>
                              <input type="email" placeholder="voce@empresa.com" className="pb-input" {...field} />
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
                            <label className="pb-label mb-2 block">Empresa</label>
                            <FormControl>
                              <input placeholder="Nome da empresa" className="pb-input" {...field} />
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
                            <label className="pb-label mb-2 block">Quantos leads você recebe por mês?</label>
                            <FormControl>
                              <select className="pb-input" {...field}>
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
                        className="btn-primary w-full justify-center mt-2 disabled:opacity-50"
                      >
                        {isSubmitting ? "Enviando..." : "Quero ver o agente funcionando"}
                      </button>
                      <p className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted mt-4">
                        <PulseDot color="red" />
                        Vagas limitadas por mês para garantir qualidade na implementação
                      </p>
                    </form>
                  </Form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-pb-grid-strong py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="rev-item animate-fade-in font-display uppercase text-pb-ink text-[clamp(28px,4vw,52px)] leading-[0.98] max-w-[22ch] mb-10">
            O lead não espera<span className="text-pb-red">.</span>
          </p>
          <div className="flex flex-wrap justify-between gap-6 border-t border-pb-grid pt-6 font-mono text-[11px] uppercase tracking-mono-wide text-pb-ink-muted">
            <div>
              <div className="text-pb-ink-faint mb-1">Produto</div>
              Agente de IA para WhatsApp
            </div>
            <div>
              <div className="text-pb-ink-faint mb-1">Canal</div>
              Atendimento · Follow-up · Sales Coach
            </div>
            <div>
              <div className="text-pb-ink-faint mb-1">Operação</div>
              24 / 7
            </div>
            <div>
              <div className="text-pb-ink-faint mb-1">© 2026</div>
              Todos os direitos reservados
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VendaMaisComIA;
