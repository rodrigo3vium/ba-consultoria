import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Helmet } from "react-helmet";
import { Check, ShieldCheck, ArrowRight } from "lucide-react";
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
import { BeforeAfterStudio, HeroBeforeAfter } from "@/components/portfolio/BeforeAfterStudio";
import {
  HERO,
  STATS,
  PROBLEMA,
  VIRADA,
  DEMO,
  HONESTIDADE,
  COMPARISON,
  OPERACAO,
  CONSTRUCAO,
  CTA,
  SEGMENTOS,
  RODAPE_TECNICO,
  LEAD_SOURCE,
} from "@/lib/portfolio/imovelVazioContent";

const FONT_STACK = "'Plus Jakarta Sans', -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

const BTN_PRIMARY =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-[#0A0A13] bg-gradient-to-r from-[#20DDEB] to-[#8B7CF6] shadow-[0_8px_28px_-8px_rgba(139,124,246,0.55)] hover:shadow-[0_10px_34px_-6px_rgba(139,124,246,0.7)] transition-shadow";
const BTN_GHOST =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-[#B7B8C7] border border-white/[0.14] hover:border-white/[0.28] hover:text-[#F5F5FA] transition-colors";
const CARD_CLS = "rounded-2xl border border-white/[0.09] bg-[#15151F]";
const INPUT_CLS =
  "w-full rounded-xl bg-white/[0.04] border border-white/[0.10] text-[#F5F5FA] placeholder:text-[#5D5F6B] px-4 py-3 text-[15px] outline-none focus:border-[#8B7CF6] focus:ring-2 focus:ring-[#8B7CF6]/30 transition";
const LABEL_CLS = "block text-xs font-semibold text-[#9A9CAA] mb-2";

const formSchema = z.object({
  nome: z.string().min(2, "Nome é obrigatório").max(100),
  whatsapp: z.string().min(10, "WhatsApp inválido").max(20),
  email: z.string().email("Email inválido").max(255),
  empresa: z.string().min(2, "Empresa é obrigatória").max(150),
  segmento: z.string().min(1, "Selecione uma opção"),
  gargalo: z.string().max(600).optional(),
});
type FormData = z.infer<typeof formSchema>;

function Accent({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-[#20DDEB] to-[#8B7CF6] bg-clip-text text-transparent">{children}</span>
  );
}

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.10] bg-white/[0.03] px-3.5 py-1.5 text-[11px] font-mono uppercase tracking-[0.14em] text-[#9A9CAA] mb-5">
    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#20DDEB] to-[#8B7CF6]" />
    {children}
  </span>
);

const ImovelVazioNaoVende = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    tracker.page("Portfólio — Imóvel vazio não vende");
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
        { threshold: 0.12 },
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const goToForm = () => {
    tracker.track("cta_click", { product: LEAD_SOURCE, location: "demo-usar-minha-foto" });
    scrollTo("aplicar");
  };

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { nome: "", whatsapp: "", email: "", empresa: "", segmento: "", gargalo: "" },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("submit-contact", {
        body: {
          name: data.nome,
          email: data.email,
          whatsapp: data.whatsapp,
          source: LEAD_SOURCE,
          utm: getPersistedUtm(),
          metadata: { empresa: data.empresa, segmento: data.segmento, gargalo: data.gargalo },
        },
      });
      if (error) throw error;
      await tracker.identify(data.email, data.whatsapp, data.nome);
      await tracker.track("lead_capture", {
        product: LEAD_SOURCE,
        source: "landing-page",
        empresa: data.empresa,
        segmento: data.segmento,
      });
      setIsSubmitted(true);
    } catch (err) {
      console.error("Erro ao salvar lead:", err);
      toast.error("Erro ao enviar. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="imovel-vazio min-h-screen bg-[#0A0A13] text-[#B7B8C7] antialiased" style={{ fontFamily: FONT_STACK }}>
      <Helmet>
        <title>Imóvel vazio não vende — Virtual staging por IA | BA</title>
        <meta
          name="description"
          content="Transforme a foto de um imóvel vazio em ambiente mobiliado em 40 segundos e por um centésimo do custo. Teste a demo ao vivo, sem cadastro."
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
        .imovel-vazio h1, .imovel-vazio h2, .imovel-vazio h3, .imovel-vazio h4 { font-family: inherit; text-transform: none; }
        .imovel-vazio p { font-family: inherit; }
        .imovel-vazio .mono { font-family: 'IBM Plex Mono', ui-monospace, monospace; }
      `}</style>

      {/* HEADER */}
      <div className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#0A0A13]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[64px] flex items-center justify-between gap-6">
          <div className="flex items-center gap-2.5 font-bold text-[#F5F5FA] text-[15px]">
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#20DDEB] to-[#8B7CF6]" />
            BA · Portfólio
          </div>
          <button onClick={() => scrollTo("aplicar")} className={BTN_PRIMARY + " !px-5 !py-2.5 !text-[13px]"}>
            Aplicar para diagnóstico
          </button>
        </div>
      </div>

      {/* HERO */}
      <header className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full bg-[#8B7CF6]/20 blur-[110px]" />
          <div className="absolute -top-10 right-0 w-[520px] h-[420px] rounded-full bg-[#20DDEB]/15 blur-[110px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 md:pt-16 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center">
            <div className="rev-item animate-fade-in">
              <span className="mono inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#20DDEB] mb-5">
                {HERO.eyebrow}
              </span>
              <h1 className="font-extrabold text-[#F5F5FA] text-[clamp(25px,3.5vw,42px)] leading-[1.1] tracking-tight mb-5">
                O comprador decide antes de visitar. Sua foto mostra uma <Accent>parede vazia</Accent>.
              </h1>
              <p className="text-[#B7B8C7] text-base md:text-lg leading-relaxed max-w-[52ch] mb-3">{HERO.sub}</p>
              <p className="text-[#F5F5FA] text-base md:text-lg font-semibold leading-relaxed max-w-[52ch] mb-8">
                {HERO.subPunch}
              </p>
              <div className="flex flex-wrap gap-3">
                <button onClick={() => scrollTo("demo")} className={BTN_PRIMARY}>
                  {HERO.cta} <ArrowRight size={16} />
                </button>
                <button onClick={() => scrollTo("aplicar")} className={BTN_GHOST}>
                  Aplicar para diagnóstico
                </button>
              </div>
            </div>

            {/* Teaser interativo — o visitante brinca antes de ler */}
            <div className="rev-item animate-fade-in">
              <div className={CARD_CLS + " p-3 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.6)]"}>
                <HeroBeforeAfter variant="saas" />
              </div>
              <p className="mt-3 text-center text-xs text-[#7B7C8C]">Arraste sobre a imagem. Vazio de um lado, mobiliado do outro.</p>
            </div>
          </div>

          {/* STAT STRIP */}
          <div className="rev-item animate-fade-in mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {STATS.map((s) => (
              <div key={s.value} className="rounded-2xl border border-white/[0.09] bg-white/[0.02] p-5">
                <div
                  className={`text-[clamp(26px,3vw,38px)] font-extrabold leading-none ${
                    s.accent ? "bg-gradient-to-r from-[#20DDEB] to-[#8B7CF6] bg-clip-text text-transparent" : "text-[#F5F5FA]"
                  }`}
                >
                  {s.value}
                </div>
                <div className="mt-2.5 text-[12.5px] text-[#7B7C8C] leading-relaxed">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* DOBRA 1 — O PROBLEMA */}
      <section className="border-t border-white/[0.06] py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rev-item animate-fade-in">
            <Eyebrow>{PROBLEMA.eyebrow}</Eyebrow>
            <h2 className="font-extrabold text-[#F5F5FA] text-[clamp(26px,3.4vw,42px)] leading-[1.12] tracking-tight mb-8 max-w-[24ch]">
              Ninguém compra o que não consegue <Accent>imaginar</Accent>.
            </h2>
          </div>
          <div className="rev-item animate-fade-in space-y-5 text-[#B7B8C7] text-[17px] leading-relaxed">
            {PROBLEMA.paras.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* DOBRA 2 — A VIRADA */}
      <section className="border-t border-white/[0.06] py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rev-item animate-fade-in">
            <Eyebrow>{VIRADA.eyebrow}</Eyebrow>
            <h2 className="font-extrabold text-[#F5F5FA] text-[clamp(26px,3.4vw,42px)] leading-[1.12] tracking-tight mb-8 max-w-[24ch]">
              O open house não acontece mais na <Accent>porta da casa</Accent>.
            </h2>
          </div>
          <div className="rev-item animate-fade-in space-y-5 text-[#B7B8C7] text-[17px] leading-relaxed">
            {VIRADA.paras.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className={"rev-item animate-fade-in my-8 " + CARD_CLS + " p-7"}>
            <p className="font-extrabold text-[clamp(19px,2.4vw,26px)] leading-snug">
              <Accent>{VIRADA.punch}</Accent>
            </p>
          </div>
          <div className="rev-item animate-fade-in space-y-5 text-[#B7B8C7] text-[17px] leading-relaxed">
            {VIRADA.parasAfter.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* DOBRA 3 — A DEMO */}
      <section id="demo" className="border-t border-white/[0.06] py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rev-item animate-fade-in text-center mb-10">
            <Eyebrow>{DEMO.eyebrow}</Eyebrow>
            <h2 className="font-extrabold text-[#F5F5FA] text-[clamp(28px,3.8vw,46px)] leading-[1.08] tracking-tight mb-4">
              Não acredite. <Accent>Testa.</Accent>
            </h2>
            <p className="text-[#9A9CAA] text-base md:text-lg leading-relaxed max-w-[60ch] mx-auto">{DEMO.sub}</p>
          </div>
          <div className="rev-item animate-fade-in">
            <BeforeAfterStudio variant="saas" onUsePhoto={goToForm} />
          </div>
          <p className="rev-item animate-fade-in mt-8 text-center italic text-[#F5F5FA] text-[clamp(16px,2vw,20px)] leading-relaxed max-w-[52ch] mx-auto">
            {DEMO.finish}
          </p>
        </div>
      </section>

      {/* DOBRA 4 — HONESTIDADE */}
      <section className="border-t border-white/[0.06] py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rev-item animate-fade-in max-w-3xl">
            <Eyebrow>{HONESTIDADE.eyebrow}</Eyebrow>
            <h2 className="font-extrabold text-[#F5F5FA] text-[clamp(26px,3.4vw,42px)] leading-[1.12] tracking-tight mb-8 max-w-[22ch]">
              O que este sistema se <Accent>recusa a fazer</Accent>.
            </h2>
            <div className="space-y-5 text-[#B7B8C7] text-[17px] leading-relaxed">
              {HONESTIDADE.paras.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <p className="mt-6 text-sm font-semibold text-[#9A9CAA]">{HONESTIDADE.itensIntro}</p>
          </div>
          <div className="rev-item animate-fade-in mt-6 grid md:grid-cols-3 gap-4">
            {HONESTIDADE.itens.map((it) => (
              <div key={it.titulo} className={CARD_CLS + " p-6"}>
                <span className="inline-flex w-10 h-10 rounded-full bg-gradient-to-br from-[#20DDEB] to-[#8B7CF6] items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5 text-[#0A0A13]" />
                </span>
                <h3 className="font-bold text-[#F5F5FA] text-lg mb-2">{it.titulo}</h3>
                <p className="text-[#9A9CAA] text-[14.5px] leading-relaxed">{it.desc}</p>
              </div>
            ))}
          </div>
          <p className="rev-item animate-fade-in mt-8 italic text-[#F5F5FA] text-[clamp(17px,2vw,22px)] leading-relaxed max-w-[56ch]">
            <span className="block w-10 h-[3px] rounded-full bg-gradient-to-r from-[#20DDEB] to-[#8B7CF6] mb-5" aria-hidden />
            {HONESTIDADE.fecho}
          </p>
        </div>
      </section>

      {/* DOBRA 5 — O QUE MUDA NA OPERAÇÃO */}
      <section className="border-t border-white/[0.06] py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rev-item animate-fade-in mb-8">
            <Eyebrow>{OPERACAO.eyebrow}</Eyebrow>
            <h2 className="font-extrabold text-[#F5F5FA] text-[clamp(26px,3.4vw,42px)] leading-[1.12] tracking-tight max-w-[24ch]">
              De dois imóveis difíceis para a <Accent>carteira inteira</Accent>.
            </h2>
          </div>
          <div className={"rev-item animate-fade-in overflow-hidden " + CARD_CLS}>
            <div className="grid grid-cols-[1.3fr_1fr_1fr] text-xs font-bold uppercase tracking-wide text-[#7B7C8C] border-b border-white/[0.08]">
              <div className="px-4 md:px-6 py-4"> </div>
              <div className="px-3 md:px-6 py-4">Antes</div>
              <div className="px-3 md:px-6 py-4 text-[#8B7CF6]">Depois</div>
            </div>
            {COMPARISON.map((r) => (
              <div
                key={r.k}
                className={`grid grid-cols-[1.3fr_1fr_1fr] items-center border-b border-white/[0.06] last:border-none ${
                  r.highlight ? "bg-gradient-to-r from-[#8B7CF6]/[0.08] to-transparent" : ""
                }`}
              >
                <div className="px-4 md:px-6 py-4 text-[13.5px] font-medium text-[#F5F5FA]">{r.k}</div>
                <div className="px-3 md:px-6 py-4 text-[13.5px] text-[#7B7C8C]">{r.antes}</div>
                <div className={`px-3 md:px-6 py-4 text-[13.5px] font-medium ${r.highlight ? "text-[#20DDEB]" : "text-[#B7B8C7]"}`}>
                  {r.depois}
                </div>
              </div>
            ))}
          </div>
          <p className="rev-item animate-fade-in mt-8 text-[#B7B8C7] text-[17px] leading-relaxed max-w-[62ch]">{OPERACAO.fecho}</p>
        </div>
      </section>

      {/* DOBRA 6 — COMO FOI CONSTRUÍDO */}
      <section className="border-t border-white/[0.06] py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rev-item animate-fade-in">
            <Eyebrow>{CONSTRUCAO.eyebrow}</Eyebrow>
            <h2 className="font-extrabold text-[#F5F5FA] text-[clamp(26px,3.4vw,42px)] leading-[1.12] tracking-tight mb-8 max-w-[22ch]">
              Sob medida. Em dias, <Accent>não meses</Accent>.
            </h2>
          </div>
          <div className="rev-item animate-fade-in space-y-5 text-[#B7B8C7] text-[17px] leading-relaxed">
            {CONSTRUCAO.paras.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className={"rev-item animate-fade-in mt-8 " + CARD_CLS + " p-7"}>
            <p className="font-extrabold text-[#F5F5FA] text-[clamp(18px,2.2vw,24px)] leading-snug">{CONSTRUCAO.punch}</p>
          </div>
        </div>
      </section>

      {/* DOBRA 7 — CTA + FORM */}
      <section id="aplicar" className="border-t border-white/[0.06] py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="rev-item animate-fade-in">
              <Eyebrow>{CTA.eyebrow}</Eyebrow>
              <h2 className="font-extrabold text-[#F5F5FA] text-[clamp(28px,3.6vw,44px)] leading-tight mb-5 max-w-[20ch]">
                O gargalo da sua empresa provavelmente não é <Accent>foto de imóvel</Accent>.
              </h2>
              <div className="space-y-4 text-[#B7B8C7] text-base md:text-lg leading-relaxed max-w-[48ch] mb-8">
                {CTA.paras.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <ul className="space-y-3">
                {CTA.benefits.map((t) => (
                  <li key={t} className="flex items-center gap-3 text-sm font-medium text-[#B7B8C7]">
                    <Check className="w-4 h-4 text-[#6EE7B7] flex-none" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className={"relative rev-item animate-fade-in " + CARD_CLS + " p-7 md:p-8 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.6)]"}>
              {isSubmitted ? (
                <div className="text-center py-10 px-2">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#20DDEB] to-[#8B7CF6] mx-auto mb-6 flex items-center justify-center">
                    <Check className="w-6 h-6 text-[#0A0A13]" />
                  </div>
                  <h4 className="font-extrabold text-[#F5F5FA] text-2xl mb-2.5">{CTA.successTitle}</h4>
                  <p className="text-[#9A9CAA] text-[15px] leading-relaxed">{CTA.successBody}</p>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-2.5 text-sm font-bold text-[#F5F5FA] mb-6">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#20DDEB] to-[#8B7CF6] animate-pulse" />
                    {CTA.formTitle}
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
                      <div className="grid sm:grid-cols-2 gap-4">
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
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
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
                          name="segmento"
                          render={({ field }) => (
                            <FormItem>
                              <label className={LABEL_CLS}>Segmento</label>
                              <FormControl>
                                <select className={INPUT_CLS} {...field}>
                                  <option value="" disabled>
                                    Selecione
                                  </option>
                                  {SEGMENTOS.map((o) => (
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
                      </div>
                      <FormField
                        control={form.control}
                        name="gargalo"
                        render={({ field }) => (
                          <FormItem>
                            <label className={LABEL_CLS}>Qual o principal gargalo da sua operação hoje? (opcional)</label>
                            <FormControl>
                              <textarea
                                rows={3}
                                placeholder="Em uma frase, onde você perde mais tempo ou dinheiro."
                                className={INPUT_CLS + " resize-none"}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={BTN_PRIMARY + " w-full mt-1 disabled:opacity-50 disabled:cursor-not-allowed"}
                      >
                        {isSubmitting ? "Enviando..." : CTA.formCta}
                      </button>
                      <p className="text-xs text-[#7B7C8C] leading-relaxed text-center mt-1">{CTA.formFinish}</p>
                    </form>
                  </Form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.06] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="rev-item animate-fade-in font-extrabold text-[#F5F5FA] text-[clamp(24px,3.4vw,40px)] leading-tight max-w-[22ch] mb-10">
            Vendemos imaginação, <Accent>não ilusão</Accent>.
          </p>
          <div className="flex flex-wrap justify-between gap-6 border-t border-white/[0.06] pt-6 text-sm text-[#7B7C8C]">
            <div>
              <div className="text-[#4E505A] text-xs mb-1">Case</div>
              Mercado imobiliário
            </div>
            <div>
              <div className="text-[#4E505A] text-xs mb-1">Sistema</div>
              Virtual staging por IA
            </div>
            <div>
              <div className="text-[#4E505A] text-xs mb-1">Entrega</div>
              Sob medida · dias
            </div>
            <div>
              <div className="text-[#4E505A] text-xs mb-1">© 2026</div>
              BA · Benites Albuquerque
            </div>
          </div>
          <p className="mono mt-8 text-[11px] leading-relaxed text-[#5D5F6B] max-w-[80ch]">{RODAPE_TECNICO}</p>
        </div>
      </footer>
    </div>
  );
};

export default ImovelVazioNaoVende;
