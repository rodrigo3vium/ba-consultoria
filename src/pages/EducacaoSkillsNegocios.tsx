import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";
import { tracker } from "@/lib/tracking";
import { supabase } from "@/integrations/supabase/client";
import {
  Accent,
  Eyebrow,
  SAAS_BTN_PRIMARY,
  SAAS_CARD,
  SAAS_INPUT,
  SAAS_GRADIENT_TEXT,
} from "@/components/saas/ui";

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
    document.body.style.backgroundColor = "#0A0A13";
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
          <span className="text-saas-cyan font-semibold">Sim.</span>{" "}
          O ebook é 100% gratuito, sem cartão e com acesso imediato. Sem truque, sem upsell obrigatório.
        </>
      ),
    },
    {
      q: "Serve para qualquer tipo de negócio?",
      a: (
        <>
          <span className="text-saas-cyan font-semibold">Sim.</span>{" "}
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
    <div className="min-h-screen bg-saas-void text-saas-body text-base leading-relaxed overflow-x-hidden antialiased">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-5 sm:px-10 py-[12px] border-b border-white/[0.06] bg-saas-void/80 backdrop-blur-xl">
        <div className="flex items-center gap-2.5 font-bold text-saas-ink text-[15px]">
          <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-saas-cyan to-saas-violet" />
          RA · Skills de IA
        </div>
        <a
          href="#cta"
          className={SAAS_BTN_PRIMARY + " !px-5 !py-2.5 !text-[13px]"}
        >
          Baixar Grátis
        </a>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden bg-saas-void">
        {/* Glows radiais */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full bg-saas-violet/20 blur-[110px]" />
          <div className="absolute -top-10 right-0 w-[520px] h-[420px] rounded-full bg-saas-cyan/15 blur-[110px]" />
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center px-5 sm:px-10 pt-[120px] pb-20 max-w-[1100px] mx-auto lg:min-h-screen">
          {/* LEFT */}
          <div className="animate-fade-in">
            <Eyebrow className="mb-6">Ebook gratuito · Rodrigo Albuquerque</Eyebrow>

            <h1 className="font-extrabold text-saas-ink leading-[1.1] tracking-tight text-[clamp(28px,3.6vw,46px)] mb-5">
              As <Accent>20 Skills</Accent> que separam quem usa IA{" "}
              <Accent>de quem fatura com ela.</Accent>
            </h1>

            <p className="text-[15px] md:text-base text-saas-body leading-relaxed mb-2 max-w-[460px]">
              Há alguns anos, automatizar seu negócio com inteligência artificial
              era coisa de empresa de tecnologia com time de engenheiros.
            </p>
            <p className="text-[15px] md:text-base text-saas-ink font-semibold leading-relaxed mb-9 max-w-[460px]">
              Hoje, o empreendedor que não domina essas skills está entregando
              dinheiro para quem domina.
            </p>

            <div className="flex flex-col gap-[14px] max-w-[380px]">
              <a
                href="#cta"
                className={SAAS_BTN_PRIMARY + " w-full"}
                onClick={() => handleCTA("hero")}
              >
                Baixar Ebook Gratuitamente
              </a>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-faint text-center">
                acesso imediato · sem cartão · pdf completo
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mt-7 max-w-[460px]">
              {["Criação de conteúdo", "Automação comercial", "Prospecção com IA", "Análise de dados", "Atendimento"].map((tag) => (
                <span key={tag} className="rounded-full border border-white/[0.10] bg-white/[0.03] px-3 py-1 text-[11px] text-saas-muted">{tag}</span>
              ))}
              <span className="rounded-full border border-white/[0.10] px-3 py-1 text-[11px] text-saas-faint">+ 15 skills</span>
            </div>
          </div>

          {/* RIGHT — Book mockup */}
          <div className="flex items-center justify-center relative animate-fade-in">
            <div className="relative w-[360px] h-[460px] max-w-full">
              {/* Glow */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full pointer-events-none animate-pulse"
                style={{ background: "radial-gradient(circle, rgba(139,124,246,0.14) 0%, transparent 70%)" }}
              />
              {/* Pages top */}
              <div
                className="absolute top-[18px] left-[46px] w-[256px] h-[7px] pointer-events-none"
                style={{
                  background: "repeating-linear-gradient(90deg, rgba(245,245,250,0.07) 0, rgba(245,245,250,0.07) 1px, transparent 1px, transparent 2.5px)",
                  transform: "rotate(-1.5deg)",
                  animation: "snFloat 4s ease-in-out infinite",
                }}
              />
              {/* Spine */}
              <div
                className="absolute top-[22px] left-[38px] w-[9px] h-[330px] rounded-l-md border border-white/[0.09] border-r-0 pointer-events-none"
                style={{
                  background: "linear-gradient(to right, #0A0A13, #15151F)",
                  transform: "rotate(-1.5deg)",
                  animation: "snFloat 4s ease-in-out infinite",
                }}
              />
              {/* Cover */}
              <div
                className="absolute top-[22px] left-[47px] w-[252px] h-[330px] rounded-2xl border border-white/[0.09] flex flex-col items-center justify-center text-center px-[22px] py-7 overflow-hidden"
                style={{
                  background: "linear-gradient(150deg, rgba(139,124,246,0.18) 0%, #15151F 45%, #0A0A13 100%)",
                  boxShadow: "6px 10px 40px rgba(0,0,0,0.6)",
                  transform: "rotate(-1.5deg)",
                  animation: "snFloat 4s ease-in-out infinite",
                }}
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-saas-cyan to-saas-violet opacity-70" />

                {/* Emblema */}
                <div className="w-[52px] h-[52px] rounded-full bg-gradient-to-br from-saas-cyan to-saas-violet flex items-center justify-center mb-[14px]">
                  <div className="w-[26px] h-[26px] rounded-full bg-saas-void/70 animate-pulse" />
                </div>

                <div className="font-mono text-[8px] uppercase tracking-[0.2em] text-saas-faint mb-[10px]">
                  Rodrigo Albuquerque
                </div>
                <div className={"text-[52px] font-extrabold leading-none " + SAAS_GRADIENT_TEXT}>
                  20
                </div>
                <div className="text-[13px] font-extrabold text-saas-ink tracking-tight mb-1">
                  Skills de IA
                </div>
                <div className="text-[17px] font-extrabold text-saas-ink tracking-tight mb-[14px] leading-[1.15]">
                  Para Negócios
                </div>
                <div className="w-9 h-[2px] rounded-full mx-auto mb-3 bg-gradient-to-r from-saas-cyan to-saas-violet opacity-70" />
                <div className="text-[10px] text-saas-faint leading-relaxed">
                  O guia prático para <strong className="text-saas-cyan font-semibold">faturar mais</strong>
                  <br />trabalhando menos com IA
                </div>
              </div>

              {/* Float badge */}
              <div
                className="absolute top-1 right-1 rounded-xl border border-white/[0.09] bg-saas-card px-[14px] py-[10px] text-center"
                style={{ animation: "snFloatAlt 3.5s ease-in-out infinite 1s" }}
              >
                <span className={"text-[18px] font-extrabold block leading-none " + SAAS_GRADIENT_TEXT}>100%</span>
                <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-saas-faint block mt-[3px]">Gratuito</span>
              </div>

              {/* Float stat */}
              <div
                className="absolute bottom-[30px] -right-[10px] rounded-xl border border-white/[0.09] bg-saas-card px-4 py-[10px] flex items-center gap-[10px]"
                style={{ animation: "snFloatAlt 3.5s ease-in-out infinite 2s" }}
              >
                <div className="w-[30px] h-[30px] rounded-lg bg-gradient-to-br from-saas-cyan to-saas-violet flex items-center justify-center text-[12px] font-bold text-saas-void">
                  IA
                </div>
                <div>
                  <span className={"text-[13px] font-extrabold block leading-none " + SAAS_GRADIENT_TEXT}>20 Skills</span>
                  <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-saas-faint block mt-[3px]">aplicáveis hoje</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF STRIP */}
      <div className="bg-saas-void-2 border-t border-b border-white/[0.06] px-5 sm:px-10 py-5">
        <div className="max-w-[1100px] mx-auto flex items-center justify-center gap-6 md:gap-12 flex-wrap">
          {[
            { val: "100%", lbl: "Gratuito" },
            { val: "20", lbl: "Skills práticas" },
            { val: "PDF", lbl: "Acesso imediato" },
            { val: "0", lbl: "Conhecimento técnico necessário" },
          ].map(({ val, lbl }, i, arr) => (
            <Fragment key={lbl}>
              <div className="flex items-center gap-[10px] font-mono text-[10px] uppercase tracking-[0.14em] text-saas-faint">
                <span className={"text-base font-extrabold " + SAAS_GRADIENT_TEXT}>{val}</span>
                {lbl}
              </div>
              {i < arr.length - 1 && <div className="w-px h-7 bg-white/[0.08]" />}
            </Fragment>
          ))}
        </div>
      </div>

      {/* BULLETS */}
      <section className="relative overflow-hidden border-t border-white/[0.06] px-5 sm:px-10 py-20 md:py-24">
        <div aria-hidden className="pointer-events-none absolute top-1/3 -right-40 w-[420px] h-[420px] rounded-full bg-saas-cyan/10 blur-[110px]" />
        <div className="relative max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <Eyebrow className="mb-5">O problema</Eyebrow>
            <h2 className="font-extrabold text-saas-ink leading-[1.12] tracking-tight text-[clamp(24px,3vw,38px)] mb-5">
              IA não é vantagem de quem <Accent>sabe que existe.</Accent>
            </h2>
            <p className="text-[15px] md:text-base text-saas-body leading-relaxed mb-8">
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
                <li key={item} className="flex items-start gap-3 text-[14.5px] text-saas-body leading-snug">
                  <Check className="w-4 h-4 mt-0.5 text-saas-green flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                label: "RESULTADO",
                title: "Resultado imediato",
                desc: "Aplique as primeiras skills em menos de 48 horas e sinta a diferença no operacional.",
              },
              {
                label: "ACESSÍVEL",
                title: "Sem jargão técnico",
                desc: "Cada skill explicada para quem tem negócio, não para quem programa.",
              },
              {
                label: "ROI",
                title: "ROI mensurável",
                desc: "Cada skill tem métricas de impacto: tempo economizado, receita gerada.",
              },
              {
                label: "ADAPTÁVEL",
                title: "Qualquer negócio",
                desc: "Agência, clínica, consultoria, infoproduto — o método se adapta ao seu modelo.",
              },
            ].map(({ label, title, desc }) => (
              <div key={title} className={SAAS_CARD + " p-5 transition-colors duration-300 hover:border-white/[0.2]"}>
                <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-cyan mb-[10px]">{label}</div>
                <div className="font-bold text-saas-ink text-[14px] mb-[6px]">{title}</div>
                <div className="text-[12.5px] text-saas-muted leading-snug">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="relative overflow-hidden border-t border-white/[0.06] px-5 sm:px-10 py-20 md:py-24">
        <div aria-hidden className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[560px] h-[300px] rounded-full bg-saas-violet/10 blur-[120px]" />
        <div className="relative max-w-[1100px] mx-auto">
          <div className="text-center mb-14">
            <Eyebrow className="mb-5">Os fundamentos</Eyebrow>
            <h2 className="font-extrabold text-saas-ink leading-[1.12] tracking-tight text-[clamp(24px,3vw,38px)] mb-4">
              Os três pilares das <Accent>20 Skills</Accent>
            </h2>
            <p className="text-[15px] text-saas-muted max-w-[540px] mx-auto leading-relaxed">
              Cada skill foi selecionada com base em três critérios inegociáveis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                num: "01",
                title: "Resultado na prática, não na teoria",
                desc: "Nenhuma skill foi incluída sem ter sido testada em operações reais — no meu negócio e nos negócios que acompanho.",
              },
              {
                num: "02",
                title: "Aplicável sem conhecimento técnico",
                desc: "Você não precisa saber programar, entender APIs ou contratar um desenvolvedor para aplicar qualquer uma das 20 skills.",
              },
              {
                num: "03",
                title: "Funciona em qualquer nicho",
                desc: "Agência de marketing, clínica, escritório de advocacia, e-commerce, consultoria — o método se adapta à sua realidade.",
              },
            ].map(({ num, title, desc }) => (
              <div key={num} className={SAAS_CARD + " p-7 text-center transition-colors duration-300 hover:border-white/[0.2]"}>
                <div className={"text-[42px] font-extrabold leading-none mb-3 opacity-25 " + SAAS_GRADIENT_TEXT}>{num}</div>
                <div className="font-bold text-saas-ink text-[15px] mb-3 leading-snug">{title}</div>
                <div className="text-[13px] text-saas-muted leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENTS */}
      <section className="relative overflow-hidden border-t border-white/[0.06] px-5 sm:px-10 py-20 md:py-24">
        <div aria-hidden className="pointer-events-none absolute top-1/3 -left-40 w-[420px] h-[420px] rounded-full bg-saas-cyan/10 blur-[110px]" />
        <div className="relative max-w-[1100px] mx-auto">
          <div className="text-center mb-14">
            <Eyebrow className="mb-5">O que você vai receber</Eyebrow>
            <h2 className="font-extrabold text-saas-ink leading-[1.12] tracking-tight text-[clamp(24px,3vw,38px)] mb-4">
              Skills prontas para <Accent>aplicar agora</Accent>
            </h2>
            <p className="text-[15px] text-saas-muted max-w-[540px] mx-auto leading-relaxed">
              Com exemplos reais, passo a passo e os prompts que eu mesmo uso no dia a dia.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {contents.map(([num, text]) => (
              <div key={num} className={SAAS_CARD + " flex items-center gap-4 px-5 py-4 transition-colors duration-300 hover:border-white/[0.18]"}>
                <span className="font-mono text-[11px] text-saas-cyan min-w-[30px]">{num}</span>
                <span className="text-[14px] text-saas-body">{text}</span>
              </div>
            ))}
            <div className={SAAS_CARD + " flex items-center gap-4 px-5 py-4 border-white/[0.14]"}>
              <span className="font-mono text-[11px] text-saas-cyan min-w-[30px]">11–20</span>
              <span className={"text-[14px] font-semibold " + SAAS_GRADIENT_TEXT}>+ 10 skills avançadas reveladas no ebook</span>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-t border-white/[0.06] bg-saas-void-2 px-5 sm:px-10 py-20 md:py-24">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-14">
            <Eyebrow className="mb-5">Prova social</Eyebrow>
            <h2 className="font-extrabold text-saas-ink leading-[1.12] tracking-tight text-[clamp(24px,3vw,38px)]">
              Empreendedores que já <Accent>aplicaram o método</Accent>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
              <div key={name} className={SAAS_CARD + " p-7 transition-colors duration-300 hover:border-white/[0.18]"}>
                <p className="text-[13.5px] text-saas-body leading-relaxed mb-6 italic">
                  <span className="text-saas-cyan text-xl not-italic align-[-6px] mr-1">"</span>
                  {quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-saas-cyan to-saas-violet flex items-center justify-center font-bold text-[11px] text-saas-void flex-shrink-0">
                    {initials}
                  </div>
                  <div>
                    <div className="font-semibold text-saas-ink text-[13px]">{name}</div>
                    <div className="text-[11.5px] text-saas-faint mt-0.5">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUTHOR */}
      <section className="relative overflow-hidden border-t border-white/[0.06] px-5 sm:px-10 py-20 md:py-24">
        <div aria-hidden className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-saas-cyan/10 blur-[120px]" />
        <div className="relative max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-[240px_1fr] gap-12 md:gap-16 items-center">
          <div className="flex flex-col items-center gap-4 mx-auto md:mx-0">
            <div className="relative w-[200px] h-[200px] rounded-full bg-saas-card border border-white/[0.09] flex items-center justify-center overflow-hidden">
              <span className={"text-[56px] font-extrabold " + SAAS_GRADIENT_TEXT}>RA</span>
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(circle at 30% 30%, rgba(32,221,235,0.14) 0%, transparent 60%)" }}
              />
            </div>
            <div className={SAAS_CARD + " px-5 py-3 text-center"}>
              <div className="font-bold text-saas-ink text-[13px]">Rodrigo Albuquerque</div>
              <div className="font-mono text-[9px] uppercase tracking-[0.14em] text-saas-cyan mt-1">Empreendedor · IA · Negócios</div>
            </div>
          </div>

          <div>
            <Eyebrow className="mb-5">Quem desenvolveu o método</Eyebrow>
            <h2 className="font-extrabold text-saas-ink leading-[1.12] tracking-tight text-[clamp(22px,2.5vw,32px)] mb-5">
              Construído por quem <Accent>usa no próprio negócio</Accent>
            </h2>
            <p className="text-[15px] text-saas-body leading-relaxed mb-8">
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
                  <span className={"text-[26px] font-extrabold leading-none " + SAAS_GRADIENT_TEXT}>{num}</span>
                  <span className="text-[11px] text-saas-faint">{lbl}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden border-t border-white/[0.06] px-5 sm:px-10 py-20 md:py-28 text-center" id="cta">
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[320px] rounded-full bg-saas-violet/15 blur-[130px]"
        />
        <div className="relative max-w-[680px] mx-auto">
          <Eyebrow className="mb-6">Acesso gratuito</Eyebrow>
          <h2 className="font-extrabold text-saas-ink leading-[1.12] tracking-tight text-[clamp(26px,3.6vw,44px)] mb-5">
            Baixe agora as <Accent>20 Skills de IA</Accent> e comece hoje.
          </h2>
          <p className="text-[15px] text-saas-body leading-relaxed mb-10 max-w-[52ch] mx-auto">
            Use inteligência artificial como vantagem de negócio — não como
            ferramenta de curiosidade. Acesso imediato, sem cartão, sem enrolação.
          </p>
          <a
            href="#cta"
            className={SAAS_BTN_PRIMARY + " !px-12 !py-4"}
            onClick={(e) => { e.preventDefault(); handleCTA("final_cta"); }}
          >
            Baixar Ebook Gratuitamente
          </a>
          <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-saas-faint mt-5">
            gratuito · acesso imediato · pdf completo · sem cartão
          </span>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/[0.06] px-5 sm:px-10 py-20 md:py-24">
        <div className="max-w-[760px] mx-auto">
          <div className="text-left mb-14">
            <Eyebrow className="mb-5">Dúvidas frequentes</Eyebrow>
            <h2 className="font-extrabold text-saas-ink leading-[1.12] tracking-tight text-[clamp(24px,3vw,38px)]">
              Perguntas <Accent>frequentes</Accent>
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-2xl border overflow-hidden transition-colors duration-300 bg-saas-card ${openFaq === index ? "border-white/[0.22]" : "border-white/[0.09] hover:border-white/[0.16]"}`}
              >
                <button
                  className="w-full px-6 py-5 font-semibold text-saas-ink text-[15px] cursor-pointer flex justify-between items-center gap-4 select-none bg-transparent border-none text-left"
                  onClick={() => toggleFaq(index)}
                >
                  {faq.q}
                  <span
                    className={"font-mono text-xl font-light min-w-5 text-right flex-shrink-0 transition-transform duration-300 " + SAAS_GRADIENT_TEXT}
                    style={{ transform: openFaq === index ? "rotate(45deg)" : "none" }}
                  >
                    +
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-[400ms] ease-in-out"
                  style={{ maxHeight: openFaq === index ? "300px" : "0" }}
                >
                  <div className="px-6 pb-5 text-[14px] text-saas-muted leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.06] px-5 sm:px-10 py-10 text-center">
        <div className="font-bold text-saas-ink text-[13px] mb-2">
          Rodrigo <Accent>Albuquerque</Accent>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-faint">
          © 2026 · Todos os direitos reservados
        </div>
      </footer>

      {/* LEAD MODAL */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[200] bg-saas-void/80 backdrop-blur-md flex items-center justify-center p-5"
          onClick={() => setModalOpen(false)}
        >
          <div
            className={SAAS_CARD + " relative px-8 py-9 w-full max-w-[480px]"}
            style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.6)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-[14px] right-[18px] bg-transparent border-none text-saas-faint text-[22px] cursor-pointer leading-none transition-colors duration-200 hover:text-saas-ink"
              onClick={() => setModalOpen(false)}
            >
              ×
            </button>

            <div className="mb-6">
              <Eyebrow className="mb-3">Acesso gratuito</Eyebrow>
              <h3 className="font-extrabold text-saas-ink text-[19px] tracking-tight">
                Informe seus dados
              </h3>
            </div>

            <form className="flex flex-col gap-3" onSubmit={handleSubmit} noValidate>
              <input
                className={SAAS_INPUT}
                type="text"
                placeholder="Seu nome"
                value={form.nome}
                onChange={(e) => handleField("nome", e.target.value)}
                autoComplete="name"
              />
              <input
                className={SAAS_INPUT}
                type="email"
                placeholder="Seu melhor e-mail"
                value={form.email}
                onChange={(e) => handleField("email", e.target.value)}
                autoComplete="email"
              />
              <input
                className={SAAS_INPUT}
                type="tel"
                placeholder="+55 · Seu WhatsApp"
                value={form.whatsapp}
                onChange={(e) => handleField("whatsapp", e.target.value)}
                autoComplete="tel"
              />
              <select
                className={SAAS_INPUT + " appearance-none"}
                value={form.faturamento}
                onChange={(e) => handleField("faturamento", e.target.value)}
              >
                <option value="">Qual é a sua receita mensal aproximada?</option>
                {FATURAMENTO_OPTIONS.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
              <select
                className={SAAS_INPUT + " appearance-none"}
                value={form.cargo}
                onChange={(e) => handleField("cargo", e.target.value)}
              >
                <option value="">Cargo</option>
                {CARGO_OPTIONS.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
              <select
                className={SAAS_INPUT + " appearance-none"}
                value={form.segmento}
                onChange={(e) => handleField("segmento", e.target.value)}
              >
                <option value="">Segmento</option>
                {SEGMENTO_OPTIONS.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>

              {formError && (
                <div className="text-[12px] text-red-400 py-1">
                  {formError}
                </div>
              )}

              <button
                type="submit"
                className={SAAS_BTN_PRIMARY + " justify-center w-full mt-1 disabled:opacity-60 disabled:cursor-not-allowed"}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Baixar Ebook Gratuitamente"}
              </button>

              <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-saas-faint text-center mt-2">
                gratuito · sem spam · acesso imediato
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Keyframe animations (no Tailwind equivalent for these specific transforms) */}
      <style>{`
        @keyframes snFloat {
          0%, 100% { transform: rotate(-1.5deg) translateY(0); }
          50%       { transform: rotate(-1.5deg) translateY(-10px); }
        }
        @keyframes snFloatAlt {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-7px); }
        }
      `}</style>
    </div>
  );
};

export default EducacaoSkillsNegocios;
