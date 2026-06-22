import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { tracker } from "@/lib/tracking";
import { supabase } from "@/integrations/supabase/client";

const FATURAMENTO_OPTIONS = [
  "Abaixo de R$ 30 mil",
  "Entre R$ 30 e R$ 50 mil",
  "Entre R$ 50 e R$ 100 mil",
  "Entre R$ 100 e R$ 300 mil",
  "Entre R$ 300 e R$ 500 mil",
  "Entre R$ 500 mil e R$ 1 milhão",
  "Acima de R$ 1 milhão",
];
const CARGO_OPTIONS = [
  "CEO / Fundador",
  "Diretor",
  "Gerente",
  "Coordenador",
  "Analista",
  "Outro",
];
const SEGMENTO_OPTIONS = [
  "Agência / Marketing",
  "Saúde / Clínica",
  "Educação",
  "E-commerce / Varejo",
  "Consultoria / Serviços",
  "Jurídico / Advocacia",
  "Tecnologia",
  "Outro",
];

interface FormData {
  nome: string;
  email: string;
  whatsapp: string;
  faturamento: string;
  cargo: string;
  segmento: string;
}

const EducacaoSkillsNegocios = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [utm, setUtm] = useState<Record<string, string>>({});
  const [form, setForm] = useState<FormData>({
    nome: "",
    email: "",
    whatsapp: "",
    faturamento: "",
    cargo: "",
    segmento: "",
  });

  useEffect(() => {
    document.body.style.backgroundColor = "#05090B";
    document.body.style.paddingTop = "0";
    tracker.page("20 Skills de IA Para Negócios");

    const params = new URLSearchParams(window.location.search);
    const captured: Record<string, string> = {};
    ["source", "medium", "campaign", "term", "content"].forEach((k) => {
      const v = params.get(`utm_${k}`);
      if (v) captured[k] = v;
    });
    ["fbclid", "gclid"].forEach((k) => {
      const v = params.get(k);
      if (v) captured[k] = v;
    });
    if (document.referrer) captured.referrer = document.referrer;
    if (Object.keys(captured).length) setUtm(captured);

    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.paddingTop = "";
    };
  }, []);

  const handleCTA = (location: string) => {
    tracker.track("cta_click", {
      product: "20-skills-negocios",
      cta_location: location,
      page: "/educacao/20-skill-negocios",
    });
    setModalOpen(true);
  };

  const handleField = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setFormError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome.trim() || !form.email.trim() || !form.whatsapp.trim() ||
        !form.faturamento || !form.cargo || !form.segmento) {
      setFormError("Preencha todos os campos para continuar.");
      return;
    }
    setIsSubmitting(true);
    setFormError("");
    try {
      const name = form.nome.trim();
      const email = form.email.trim();
      const whatsapp = form.whatsapp.trim();
      const utmPayload = Object.keys(utm).length ? utm : undefined;

      const [contactRes, emailRes] = await Promise.allSettled([
        supabase.functions.invoke("submit-contact", {
          body: {
            name,
            email,
            whatsapp,
            source: "ebook-20-skills",
            utm: utmPayload,
            metadata: {
              faturamento: form.faturamento,
              cargo: form.cargo,
              segmento: form.segmento,
            },
          },
        }),
        supabase.functions.invoke("send-ebook-email", {
          body: {
            name,
            email,
            ebook_slug: "20-skills-negocios",
            utm: utmPayload,
          },
        }),
      ]);

      if (contactRes.status === "rejected") throw contactRes.reason;
      const contactValue = contactRes.value as { error?: unknown; data?: { contact_id?: string } | null };
      if (contactValue?.error) throw contactValue.error;
      const contactId = contactValue?.data?.contact_id;

      if (emailRes.status === "rejected" || (emailRes.value as { error?: unknown })?.error) {
        console.error("Ebook email delivery failed:", emailRes);
      } else {
        await tracker.track("ebook_email_dispatched", { ebook: "20-skills-negocios" });
      }

      await tracker.identify(email, whatsapp, name);
      await tracker.track("form_submitted", {
        form_type: "20-skills-negocios",
        product: "20-skills-negocios",
        faturamento: form.faturamento,
        cargo: form.cargo,
        segmento: form.segmento,
      });

      setModalOpen(false);
      navigate("/educacao/obrigado-imersao-claude", { state: { contactId } });
    } catch (err: unknown) {
      const msg = (err as { message?: string })?.message;
      console.error("Lead form error:", err);
      setFormError(msg ? `Erro: ${msg}` : "Erro ao enviar. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "É realmente gratuito?",
      a: (
        <>
          <span className="text-pb-cyan font-mono">SIM.</span>{" "}
          O ebook é 100% gratuito, sem cartão e com acesso imediato. Sem truque, sem upsell obrigatório.
        </>
      ),
    },
    {
      q: "Serve para qualquer tipo de negócio?",
      a: (
        <>
          <span className="text-pb-cyan font-mono">SIM.</span>{" "}
          O conteúdo foi desenvolvido para empreendedores e profissionais liberais de qualquer
          segmento — agências, clínicas, prestadores de serviço, infoprodutores.
          As skills se adaptam à realidade de cada operação.
        </>
      ),
    },
    {
      q: "É teórico ou mostra como aplicar na prática?",
      a: (
        <>
          O material é 100% prático. Você vai encontrar exemplos reais, prompts
          prontos e passo a passo para implementar cada skill imediatamente — sem
          precisar de equipe técnica ou conhecimento avançado.
        </>
      ),
    },
    {
      q: "Quanto tempo leva para ver resultado?",
      a: (
        <>
          Depende do seu ponto de partida, mas a maioria consegue aplicar pelo
          menos 3 skills nas primeiras 48 horas. O resultado mais comum nos
          primeiros dias é eliminar tarefas repetitivas que consomem horas da
          semana.
        </>
      ),
    },
  ];

  const contents = [
    ["01", "Criação de conteúdo com IA (posts, roteiros, emails)"],
    ["02", "Automação de processos internos sem código"],
    ["03", "Prospecção e qualificação de leads com IA"],
    ["04", "Atendimento e follow-up automatizados"],
    ["05", "Análise de dados e tomada de decisão com IA"],
    ["06", "Criação de propostas e materiais comerciais"],
    ["07", "Gestão de equipe e delegação com IA"],
    ["08", "Pesquisa de mercado e análise de concorrência"],
    ["09", "Produção de vídeos e roteiros em escala"],
    ["10", "Treinamento e onboarding automatizados"],
  ];

  return (
    <div className="bg-pb-void text-pb-ink-soft font-body text-base leading-relaxed overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-10 py-[18px] border-b border-pb-grid-strong bg-pb-void/85 backdrop-blur-xl">
        <div className="font-mono text-[11px] uppercase tracking-mono-x text-pb-ink">
          RA <span className="text-pb-cyan">·</span> Skills de IA
        </div>
        <a
          href="#cta"
          className="btn-primary text-[10px] py-[10px] px-[22px]"
        >
          Baixar Gratis
        </a>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen" style={{ background: "radial-gradient(ellipse at 15% 40%, rgba(32,221,235,0.07) 0%, transparent 55%), radial-gradient(ellipse at 85% 15%, rgba(228,73,53,0.04) 0%, transparent 45%), #05090B" }}>
        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(32,221,235,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(32,221,235,0.022) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Corner bracket top-left */}
        <div className="absolute top-[92px] left-5 w-10 h-10 border-t border-l border-pb-cyan/25 pointer-events-none" />

        <div className="relative grid grid-cols-2 gap-[60px] items-center px-10 pt-[120px] pb-20 max-w-[1100px] mx-auto" style={{ minHeight: "100vh" }}>
          {/* LEFT */}
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-mono-x text-pb-cyan mb-6">
              <span className="w-1.5 h-1.5 bg-pb-cyan animate-[pb-pulse_2s_ease-in-out_infinite]" />
              Ebook gratuito · Rodrigo Albuquerque
            </div>

            <h1 className="font-display uppercase text-pb-ink leading-[0.92] text-[clamp(32px,4.2vw,56px)] mb-4 tracking-wide">
              As <span className="text-pb-cyan">20 Skills</span>
              <br />
              que separam
              <br />
              quem usa IA
              <br />
              <span className="text-pb-cyan">de quem fatura com ela.</span>
            </h1>

            <p className="font-body text-[15px] text-pb-ink-soft leading-relaxed mb-2 max-w-[460px]">
              Há alguns anos, automatizar seu negócio com inteligência artificial
              era coisa de empresa de tecnologia com time de engenheiros.
            </p>
            <p className="font-body text-[15px] text-pb-cyan leading-relaxed mb-9 max-w-[460px]">
              Hoje, o empreendedor que não domina essas skills está entregando
              dinheiro para quem domina.
            </p>

            <div className="flex flex-col gap-[14px] max-w-[380px]">
              <a
                href="#cta"
                className="btn-primary justify-center w-full text-[12px] py-[18px] px-9"
                onClick={() => handleCTA("hero")}
              >
                Baixar Ebook Gratuitamente
              </a>
              <span className="font-mono text-[9px] uppercase tracking-mono-x text-pb-ink-muted text-center">
                acesso imediato · sem cartao · pdf completo
              </span>
            </div>

            <div className="flex flex-wrap gap-[7px] mt-7 max-w-[460px]">
              {["Criação de conteúdo", "Automação comercial", "Prospecção com IA", "Análise de dados", "Atendimento"].map((tag) => (
                <span key={tag} className="pb-tag cyan text-[9px] px-[11px] py-[5px]">{tag}</span>
              ))}
              <span className="pb-tag text-[9px] px-[11px] py-[5px] border-pb-grid-strong text-pb-ink-soft">+ 15 skills</span>
            </div>
          </div>

          {/* RIGHT — Book mockup */}
          <div className="flex items-center justify-center relative">
            <div className="relative w-[360px] h-[460px]">
              {/* Glow */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] pointer-events-none animate-[pb-pulse_3.5s_ease-in-out_infinite]"
                style={{ background: "radial-gradient(circle, rgba(32,221,235,0.1) 0%, transparent 70%)" }}
              />
              {/* Pages top */}
              <div
                className="absolute top-[18px] left-[46px] w-[256px] h-[7px] pointer-events-none"
                style={{
                  background: "repeating-linear-gradient(90deg, rgba(242,237,228,0.07) 0, rgba(242,237,228,0.07) 1px, transparent 1px, transparent 2.5px)",
                  transform: "rotate(-1.5deg)",
                  animation: "snFloat 4s ease-in-out infinite",
                }}
              />
              {/* Spine */}
              <div
                className="absolute top-[22px] left-[38px] w-[9px] h-[330px] border border-pb-grid-strong border-r-0 bg-pb-void-deep pointer-events-none"
                style={{
                  background: "linear-gradient(to right, #040710, #0C1525)",
                  transform: "rotate(-1.5deg)",
                  animation: "snFloat 4s ease-in-out infinite",
                }}
              />
              {/* Cover */}
              <div
                className="absolute top-[22px] left-[47px] w-[252px] h-[330px] border border-pb-cyan/20 flex flex-col items-center justify-center text-center px-[22px] py-7 overflow-hidden"
                style={{
                  background: "linear-gradient(150deg, #0F1E3A 0%, #0A1528 45%, #070D1C 100%)",
                  boxShadow: "6px 10px 40px rgba(0,0,0,0.75), inset 0 0 0 0.5px rgba(32,221,235,0.08)",
                  transform: "rotate(-1.5deg)",
                  animation: "snFloat 4s ease-in-out infinite",
                }}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #20DDEB, transparent)", opacity: 0.4 }} />
                {/* Corner bracket */}
                <div className="absolute top-2 right-2 w-[14px] h-[14px] border-t border-r border-pb-cyan/30" />

                {/* "Reactor" */}
                <div
                  className="w-[52px] h-[52px] border border-pb-cyan/35 flex items-center justify-center mb-[14px]"
                  style={{ animation: "snReactorSpin 10s linear infinite" }}
                >
                  <div
                    className="w-[30px] h-[30px] border border-pb-cyan/50 animate-[pb-pulse_2.5s_ease-in-out_infinite]"
                    style={{ background: "radial-gradient(circle, rgba(32,221,235,0.5) 0%, rgba(32,221,235,0.12) 60%, transparent 100%)" }}
                  />
                </div>

                <div className="font-mono text-[7px] uppercase tracking-[2.5px] text-pb-ink-muted mb-[10px]">
                  Rodrigo Albuquerque
                </div>
                <div className="font-display text-[52px] text-pb-cyan leading-none" style={{ textShadow: "0 0 24px rgba(32,221,235,0.35)" }}>
                  20
                </div>
                <div className="font-display text-[12px] uppercase text-pb-ink tracking-widest mb-1">
                  Skills de IA
                </div>
                <div className="font-display text-[16px] uppercase text-pb-ink mb-[14px] leading-[1.15]">
                  Para Negocios
                </div>
                <div className="w-9 h-px mx-auto mb-3" style={{ background: "linear-gradient(90deg, transparent, #20DDEB, transparent)" }} />
                <div className="font-mono text-[7px] uppercase tracking-[0.8px] text-pb-ink-muted leading-relaxed">
                  O guia pratico para <strong className="text-pb-cyan">faturar mais</strong>
                  <br />trabalhando menos com IA
                </div>
              </div>

              {/* Float badge */}
              <div
                className="absolute top-1 right-1 border border-pb-grid-strong bg-pb-void-card px-[14px] py-[10px] text-center"
                style={{ animation: "snFloatAlt 3.5s ease-in-out infinite 1s" }}
              >
                <span className="font-display text-[18px] text-pb-cyan block leading-none">100%</span>
                <span className="font-mono text-[7px] uppercase tracking-[1.5px] text-pb-ink-muted block mt-[3px]">Gratuito</span>
              </div>

              {/* Float stat */}
              <div
                className="absolute bottom-[30px] -right-[10px] bg-pb-void-card border border-pb-grid-strong px-4 py-[10px] flex items-center gap-[10px]"
                style={{ animation: "snFloatAlt 3.5s ease-in-out infinite 2s" }}
              >
                <div className="w-[30px] h-[30px] border border-pb-grid-strong bg-pb-void-elev flex items-center justify-center text-[13px]">
                  IA
                </div>
                <div>
                  <span className="font-display text-[13px] text-pb-cyan block leading-none">20 Skills</span>
                  <span className="font-mono text-[7.5px] uppercase tracking-[1px] text-pb-ink-muted block mt-[3px]">aplicaveis hoje</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF STRIP */}
      <div className="bg-pb-void-card border-t border-b border-pb-grid-strong px-10 py-5">
        <div className="max-w-[1100px] mx-auto flex items-center justify-center gap-12 flex-wrap">
          {[
            { val: "100%", lbl: "Gratuito" },
            { val: "20", lbl: "Skills práticas" },
            { val: "PDF", lbl: "Acesso imediato" },
            { val: "0", lbl: "Conhecimento técnico necessário" },
          ].map(({ val, lbl }, i, arr) => (
            <>
              <div key={lbl} className="flex items-center gap-[10px] font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted">
                <span className="text-pb-cyan font-display text-base">{val}</span>
                {lbl}
              </div>
              {i < arr.length - 1 && <div className="w-px h-7 bg-pb-grid-strong" />}
            </>
          ))}
        </div>
      </div>

      {/* BULLETS */}
      <section className="px-10 py-[100px]" style={{ background: "radial-gradient(ellipse at 80% 50%, rgba(32,221,235,0.05) 0%, transparent 50%), #05090B" }}>
        <div className="max-w-[1100px] mx-auto grid grid-cols-2 gap-20 items-center">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-mono-x text-pb-cyan mb-4 inline-block">
              O problema
            </div>
            <h2 className="font-display uppercase text-pb-ink leading-[0.95] text-[clamp(24px,3vw,36px)] mb-5">
              IA nao e
              <br />
              vantagem de quem
              <br />
              <em className="not-italic text-pb-cyan">sabe que existe.</em>
            </h2>
            <p className="font-body text-[15px] text-pb-ink-soft leading-relaxed mb-8">
              O guia prático com as habilidades que aplico no meu negócio e
              ensinei a centenas de empreendedores que hoje usam inteligência
              artificial para trabalhar menos e faturar mais.
            </p>
            <ul className="list-none flex flex-col gap-[14px] p-0">
              {[
                "Implementação sem precisar de equipe técnica",
                "Conteúdo e vendas rodando no piloto automático",
                "Processos internos que escalam sem contratar mais",
                "Crie sistemas que trabalham enquanto você dorme",
                "Use IA como vantagem competitiva real, não como curiosidade",
              ].map((item) => (
                <li key={item} className="flex items-start gap-[14px] text-[14px] text-pb-ink-soft leading-snug font-body">
                  <span className="min-w-[20px] w-5 h-5 mt-0.5 border border-pb-grid-strong bg-pb-void-elev flex items-center justify-center font-mono text-[10px] text-pb-cyan flex-shrink-0">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              {
                label: "RESULTADO",
                title: "Resultado imediato",
                desc: "Aplique as primeiras skills em menos de 48 horas e sinta a diferença no operacional.",
              },
              {
                label: "ACESSIVEL",
                title: "Sem jargão técnico",
                desc: "Cada skill explicada para quem tem negócio, não para quem programa.",
              },
              {
                label: "ROI",
                title: "ROI mensurável",
                desc: "Cada skill tem métricas de impacto: tempo economizado, receita gerada.",
              },
              {
                label: "ADAPTAVEL",
                title: "Qualquer negócio",
                desc: "Agência, clínica, consultoria, infoproduto — o método se adapta ao seu modelo.",
              },
            ].map(({ label, title, desc }) => (
              <div key={title} className="strat-card relative group">
                <div className="absolute top-2 right-2 w-[10px] h-[10px] border-t border-r border-pb-cyan/20" />
                <div className="font-mono text-[9px] uppercase tracking-mono-x text-pb-cyan mb-[10px]">{label}</div>
                <div className="font-display text-[12px] uppercase text-pb-ink mb-[6px] tracking-wide">{title}</div>
                <div className="font-body text-[12px] text-pb-ink-muted leading-snug">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="px-10 py-[100px] bg-pb-void-card border-t border-b border-pb-grid-strong">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-[60px]">
            <div className="font-mono text-[10px] uppercase tracking-mono-x text-pb-cyan mb-4 inline-block">
              Os fundamentos
            </div>
            <h2 className="font-display uppercase text-pb-ink leading-[0.95] text-[clamp(22px,3vw,34px)] mb-[14px]">
              Os tres pilares
              <br />
              das 20 Skills
            </h2>
            <p className="font-body text-[15px] text-pb-ink-muted max-w-[540px] mx-auto">
              Cada skill foi selecionada com base em três critérios inegociáveis.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Resultado na prática,\nnão na teoria",
                desc: "Nenhuma skill foi incluída sem ter sido testada em operações reais — no meu negócio e nos negócios que acompanho.",
              },
              {
                num: "02",
                title: "Aplicável sem\nconhecimento técnico",
                desc: "Você não precisa saber programar, entender APIs ou contratar um desenvolvedor para aplicar qualquer uma das 20 skills.",
              },
              {
                num: "03",
                title: "Funciona em\nqualquer nicho",
                desc: "Agência de marketing, clínica, escritório de advocacia, e-commerce, consultoria — o método se adapta à sua realidade.",
              },
            ].map(({ num, title, desc }) => (
              <div key={num} className="bg-pb-void border border-pb-grid-strong px-7 py-8 text-center relative transition-[border-color] duration-300 hover:border-pb-cyan/25">
                {/* Top accent */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60px] h-px opacity-50" style={{ background: "linear-gradient(90deg, transparent, #20DDEB, transparent)" }} />
                <div className="font-display text-[48px] text-pb-cyan opacity-15 leading-none mb-3">{num}</div>
                <div className="font-display text-[14px] uppercase text-pb-ink mb-3 tracking-wide leading-[1.15]">
                  {title.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i === 0 && <br />}
                    </span>
                  ))}
                </div>
                <div className="font-body text-[13px] text-pb-ink-muted leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENTS */}
      <section className="px-10 py-[100px]" style={{ background: "radial-gradient(ellipse at 20% 80%, rgba(32,221,235,0.05) 0%, transparent 50%), #05090B" }}>
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-[60px]">
            <div className="font-mono text-[10px] uppercase tracking-mono-x text-pb-cyan mb-4 inline-block">
              O que você vai receber
            </div>
            <h2 className="font-display uppercase text-pb-ink leading-[0.95] text-[clamp(22px,3vw,34px)] mb-[14px]">
              Skills prontas
              <br />
              para aplicar agora
            </h2>
            <p className="font-body text-[15px] text-pb-ink-muted max-w-[540px] mx-auto">
              Com exemplos reais, passo a passo e os prompts que eu mesmo uso no dia a dia.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-[14px] mt-12">
            {contents.map(([num, text]) => (
              <div key={num} className="flex items-center gap-4 bg-pb-void-card border border-pb-grid-strong px-5 py-4 transition-[border-color] duration-300 hover:border-pb-cyan/25">
                <span className="font-mono text-[10px] text-pb-cyan opacity-60 min-w-[28px]">{num}</span>
                <span className="font-body text-[14px] text-pb-ink-soft">{text}</span>
              </div>
            ))}
            <div className="flex items-center gap-4 bg-pb-void-card border border-pb-grid-strong px-5 py-4 transition-[border-color] duration-300 hover:border-pb-cyan/25">
              <span className="font-mono text-[10px] text-pb-cyan opacity-60 min-w-[28px]">11–20</span>
              <span className="font-body text-[14px] text-pb-cyan">+ 10 skills avançadas reveladas no ebook</span>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-10 py-[100px] bg-pb-void-card border-t border-b border-pb-grid-strong">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-[60px]">
            <div className="font-mono text-[10px] uppercase tracking-mono-x text-pb-cyan mb-4 inline-block">
              Prova social
            </div>
            <h2 className="font-display uppercase text-pb-ink leading-[0.95] text-[clamp(22px,3vw,34px)]">
              Empreendedores que
              <br />
              ja aplicaram o metodo
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-5 mt-12">
            {[
              {
                quote: "Em dois dias de aplicação eliminei 6 horas semanais de trabalho repetitivo. O que mais me surpreendeu foi a simplicidade — não precisei de nenhum conhecimento técnico.",
                initials: "MF",
                name: "Marcos F.",
                role: "Dono de agência digital",
              },
              {
                quote: "Apliquei a skill de prospecção e em uma semana fechei dois clientes novos. Antes eu ficava horas montando mensagens. Agora o processo é automático.",
                initials: "CL",
                name: "Carolina L.",
                role: "Consultora de marketing",
              },
              {
                quote: "Sou médico e nunca pensei que conseguiria usar IA no meu negócio. As skills são tão claras que qualquer pessoa aplica. Meu atendimento melhorou 100%.",
                initials: "RP",
                name: "Dr. Ricardo P.",
                role: "Médico e gestor de clínica",
              },
            ].map(({ quote, initials, name, role }) => (
              <div key={name} className="bg-pb-void border border-pb-grid-strong p-7 relative transition-[border-color] duration-300 hover:border-pb-cyan/25">
                <div className="absolute top-2 right-2 w-[10px] h-[10px] border-t border-r border-pb-cyan/15" />
                <p className="font-body text-[13px] text-pb-ink-soft leading-relaxed mb-5 italic">
                  <span className="text-pb-cyan font-body text-xl not-italic align-[-6px] mr-1">"</span>
                  {quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 border border-pb-grid-strong bg-pb-void-elev flex items-center justify-center font-mono text-[11px] text-pb-cyan flex-shrink-0">
                    {initials}
                  </div>
                  <div>
                    <div className="font-display text-[11px] uppercase text-pb-ink tracking-wide">{name}</div>
                    <div className="font-mono text-[9px] uppercase tracking-mono-wide text-pb-ink-muted mt-0.5">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUTHOR */}
      <section className="px-10 py-[100px]" style={{ background: "radial-gradient(ellipse at 70% 40%, rgba(32,221,235,0.05) 0%, transparent 50%), #05090B" }}>
        <div className="max-w-[1100px] mx-auto grid gap-16 items-center" style={{ gridTemplateColumns: "280px 1fr" }}>
          <div className="flex flex-col items-center gap-4">
            <div className="w-[220px] h-[220px] bg-pb-void-card border-2 border-pb-cyan/20 flex items-center justify-center font-display text-[64px] text-pb-cyan relative overflow-visible">
              RA
              <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 30% 30%, rgba(32,221,235,0.12) 0%, transparent 60%)" }} />
              {/* Spinning ring */}
              <div
                className="absolute pointer-events-none border border-pb-cyan/12"
                style={{
                  inset: "-8px",
                  animation: "snReactorSpin 15s linear infinite",
                }}
              >
                <div className="absolute -top-[3px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-pb-cyan opacity-60" />
              </div>
            </div>
            <div className="bg-pb-void-card border border-pb-grid-strong px-[18px] py-[10px] text-center">
              <div className="font-display text-[13px] uppercase text-pb-ink tracking-wide">Rodrigo Albuquerque</div>
              <div className="font-mono text-[8px] uppercase tracking-[2px] text-pb-cyan mt-[3px]">Empreendedor · IA · Negócios</div>
            </div>
          </div>

          <div>
            <div className="font-mono text-[10px] uppercase tracking-mono-x text-pb-cyan mb-4 inline-block">
              Quem desenvolveu o método
            </div>
            <h2 className="font-display uppercase text-pb-ink leading-[0.95] text-[clamp(20px,2.5vw,30px)] mb-4">
              Construido por quem
              <br />
              <span className="text-pb-cyan">usa no proprio negocio</span>
            </h2>
            <p className="font-body text-[15px] text-pb-ink-soft leading-relaxed mb-7">
              Rodrigo Albuquerque é empreendedor, criador de conteúdo sobre IA e
              negócios, e fundador da BA — holding com operações em marketing,
              assessoria de receita e educação digital. Nos últimos anos,
              implementou inteligência artificial em todos os processos do seu
              negócio e compilou nesse ebook as 20 skills que mais geraram
              resultado real — para ele e para os empreendedores que acompanha.
            </p>
            <div className="flex gap-8 flex-wrap">
              {[
                { num: "3", lbl: "Empresas na holding" },
                { num: "20", lbl: "Skills validadas" },
                { num: "100%", lbl: "Baseado em casos reais" },
              ].map(({ num, lbl }) => (
                <div key={lbl} className="flex flex-col gap-1">
                  <span className="font-display text-[24px] text-pb-cyan">{num}</span>
                  <span className="font-mono text-[9px] uppercase tracking-mono-wide text-pb-ink-muted">{lbl}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-10 py-[120px] bg-pb-void-card border-t border-pb-grid-strong text-center relative overflow-hidden" id="cta">
        {/* Top accent line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px opacity-40" style={{ background: "linear-gradient(90deg, transparent, #20DDEB, transparent)" }} />
        {/* Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(32,221,235,0.06) 0%, transparent 70%)" }}
        />
        <div className="max-w-[680px] mx-auto relative z-[1]">
          <div className="font-mono text-[10px] uppercase tracking-mono-x text-pb-cyan mb-4 inline-block">
            Acesso gratuito
          </div>
          <h2 className="font-display uppercase text-pb-ink leading-[0.95] text-[clamp(22px,3.2vw,40px)] mb-[14px]">
            Baixe agora as <span className="text-pb-cyan">20 Skills de IA</span>
            <br />e comece hoje.
          </h2>
          <p className="font-body text-[15px] text-pb-ink-muted mb-10 leading-relaxed">
            Use inteligência artificial como vantagem de negócio — não como
            ferramenta de curiosidade. Acesso imediato, sem cartão, sem enrolação.
          </p>
          <a
            href="#cta"
            className="btn-primary inline-flex text-[13px] py-5 px-14 mb-4"
            onClick={(e) => { e.preventDefault(); handleCTA("final_cta"); }}
          >
            Baixar Ebook Gratuitamente
          </a>
          <span className="block font-mono text-[9px] uppercase tracking-mono-x text-pb-ink-muted mt-3">
            gratuito · acesso imediato · pdf completo · sem cartao
          </span>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-10 py-[100px] bg-pb-void border-t border-pb-grid-strong">
        <div className="max-w-[760px] mx-auto">
          <div className="text-left mb-[60px]">
            <div className="font-mono text-[10px] uppercase tracking-mono-x text-pb-cyan mb-4 inline-block">
              Dúvidas frequentes
            </div>
            <h2 className="font-display uppercase text-pb-ink leading-[0.95] text-[clamp(22px,3vw,34px)]">
              Perguntas
              <br />
              frequentes
            </h2>
          </div>
          <div className="flex flex-col gap-3 mt-12">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-pb-void-card border overflow-hidden transition-[border-color] duration-300 ${openFaq === index ? "border-pb-cyan/20" : "border-pb-grid-strong hover:border-pb-cyan/15"}`}
              >
                <button
                  className="w-full px-6 py-5 font-display text-[13px] uppercase text-pb-ink tracking-wide cursor-pointer flex justify-between items-center gap-4 select-none bg-transparent border-none text-left"
                  onClick={() => toggleFaq(index)}
                >
                  {faq.q}
                  <span className="text-pb-cyan font-mono text-xl font-light min-w-5 text-right flex-shrink-0 transition-transform duration-300" style={{ transform: openFaq === index ? "rotate(45deg)" : "none" }}>
                    +
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-[400ms] ease-in-out"
                  style={{ maxHeight: openFaq === index ? "300px" : "0" }}
                >
                  <div className="px-6 pb-5 font-body text-[14px] text-pb-ink-muted leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-10 py-10 bg-pb-void border-t border-pb-grid-strong text-center">
        <div className="font-display text-[12px] uppercase text-pb-ink-muted tracking-[1.5px] mb-2">
          Rodrigo <span className="text-pb-cyan">Albuquerque</span>
        </div>
        <div className="font-mono text-[9px] uppercase tracking-[1.5px] text-pb-ink-muted">
          © 2026 · Todos os direitos reservados
        </div>
      </footer>

      {/* LEAD MODAL */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[200] bg-pb-void/82 backdrop-blur-md flex items-center justify-center p-5"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative bg-pb-void-card border border-pb-cyan/20 px-8 py-9 w-full max-w-[480px]"
            style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.7), inset 0 0 0 0.5px rgba(32,221,235,0.06)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-px opacity-50" style={{ background: "linear-gradient(90deg, transparent, #20DDEB, transparent)" }} />

            <button
              className="absolute top-[14px] right-[18px] bg-transparent border-none text-pb-ink-muted text-[22px] cursor-pointer leading-none transition-colors duration-200 hover:text-pb-ink font-mono"
              onClick={() => setModalOpen(false)}
            >
              ×
            </button>

            <div className="mb-6">
              <div className="font-mono text-[10px] uppercase tracking-mono-x text-pb-cyan mb-2">
                Acesso gratuito
              </div>
              <h3 className="font-display text-[18px] uppercase text-pb-ink tracking-wide">
                INFORME SEUS DADOS:
              </h3>
            </div>

            <form className="flex flex-col gap-3" onSubmit={handleSubmit} noValidate>
              <input
                className="pb-input"
                type="text"
                placeholder="* SEU NOME..."
                value={form.nome}
                onChange={(e) => handleField("nome", e.target.value)}
                autoComplete="name"
              />
              <input
                className="pb-input"
                type="email"
                placeholder="* SEU MELHOR E-MAIL..."
                value={form.email}
                onChange={(e) => handleField("email", e.target.value)}
                autoComplete="email"
              />
              <input
                className="pb-input"
                type="tel"
                placeholder="* +55 · SEU WHATSAPP..."
                value={form.whatsapp}
                onChange={(e) => handleField("whatsapp", e.target.value)}
                autoComplete="tel"
              />
              <select
                className="pb-input appearance-none"
                value={form.faturamento}
                onChange={(e) => handleField("faturamento", e.target.value)}
                style={{ background: "hsl(var(--bg-deep))" }}
              >
                <option value="">* QUAL É A SUA RECEITA MENSAL APROXIMADA?</option>
                {FATURAMENTO_OPTIONS.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
              <select
                className="pb-input appearance-none"
                value={form.cargo}
                onChange={(e) => handleField("cargo", e.target.value)}
                style={{ background: "hsl(var(--bg-deep))" }}
              >
                <option value="">* CARGO</option>
                {CARGO_OPTIONS.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
              <select
                className="pb-input appearance-none"
                value={form.segmento}
                onChange={(e) => handleField("segmento", e.target.value)}
                style={{ background: "hsl(var(--bg-deep))" }}
              >
                <option value="">* SEGMENTO</option>
                {SEGMENTO_OPTIONS.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>

              {formError && (
                <div className="font-mono text-[10px] uppercase tracking-[1px] text-pb-red py-1">
                  {formError}
                </div>
              )}

              <button
                type="submit"
                className="btn-primary justify-center w-full text-[11px] py-4 mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? "ENVIANDO..." : "BAIXAR EBOOK GRATUITAMENTE"}
              </button>

              <div className="font-mono text-[9px] uppercase tracking-mono-x text-pb-ink-muted text-center mt-2">
                gratuito · sem spam · acesso imediato
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Keyframe animations (no Tailwind equivalent for these specific transforms) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=IBM+Plex+Mono:wght@300;400;500;600&family=Fraunces:ital,wght@0,400;0,600;1,400&display=swap');

        @keyframes snFloat {
          0%, 100% { transform: rotate(-1.5deg) translateY(0); }
          50%       { transform: rotate(-1.5deg) translateY(-10px); }
        }
        @keyframes snFloatAlt {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-7px); }
        }
        @keyframes snReactorSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        @media (max-width: 860px) {
          .esn-hero-grid { grid-template-columns: 1fr !important; }
          .esn-hero-visual { order: -1; }
          .esn-two-col { grid-template-columns: 1fr !important; }
          .esn-three-col { grid-template-columns: 1fr !important; }
          .esn-author-grid { grid-template-columns: 1fr !important; text-align: center; }
        }
      `}</style>
    </div>
  );
};

export default EducacaoSkillsNegocios;
