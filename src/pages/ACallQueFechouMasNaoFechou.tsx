import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Helmet } from "react-helmet";
import { Check, ArrowRight, Inbox, Brain, Scale, ShieldCheck } from "lucide-react";
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
import { Accent, Eyebrow, SAAS_BTN_PRIMARY, SAAS_BTN_GHOST, SAAS_CARD, SAAS_INPUT, SAAS_LABEL } from "@/components/saas/ui";
import { CallDossieDemo } from "@/components/portfolio/CallDossieDemo";
import {
  HERO,
  STATS,
  PROBLEMA,
  LEITURA,
  SISTEMA,
  DEMO_COPY,
  RIGOR,
  RECUSA,
  CONSTRUCAO,
  CTA,
  SEGMENTOS,
  RODAPE_NOTA,
  LEAD_SOURCE,
} from "@/lib/portfolio/callFechamentoContent";

const LEITURA_ICONS = [Inbox, Brain, Scale];

const formSchema = z.object({
  nome: z.string().min(2, "Nome é obrigatório").max(100),
  whatsapp: z.string().min(10, "WhatsApp inválido").max(20),
  email: z.string().email("Email inválido").max(255),
  empresa: z.string().min(2, "Empresa é obrigatória").max(150),
  segmento: z.string().min(1, "Selecione uma opção"),
  gargalo: z.string().max(600).optional(),
});
type FormData = z.infer<typeof formSchema>;

const ACallQueFechouMasNaoFechou = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    tracker.page("Portfólio — A call que fechou mas não fechou");
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
    tracker.track("cta_click", { product: LEAD_SOURCE, location: "demo-cta" });
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
    <div className="min-h-screen bg-saas-void text-saas-body antialiased">
      <Helmet>
        <title>A call que fechou mas não fechou — Análise de calls por IA | BA</title>
        <meta
          name="description"
          content="Uma paciente disse 'faz, não importa o preço' e saiu sem pagar nada. Veja o dossiê real que uma régua de IA gerou dessa consulta — nota, blocos, citações e o que faltou dizer."
        />
      </Helmet>

      {/* HEADER */}
      <div className="sticky top-0 z-50 border-b border-white/[0.06] bg-saas-void/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[64px] flex items-center justify-between gap-6">
          <div className="flex items-center gap-2.5 font-bold text-saas-ink text-[15px]">
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-saas-cyan to-saas-violet" />
            BA · Portfólio
          </div>
          <button onClick={() => scrollTo("aplicar")} className={SAAS_BTN_PRIMARY + " !px-5 !py-2.5 !text-[13px]"}>
            Aplicar para diagnóstico
          </button>
        </div>
      </div>

      {/* HERO */}
      <header className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full bg-saas-violet/20 blur-[110px]" />
          <div className="absolute -top-10 right-0 w-[520px] h-[420px] rounded-full bg-saas-cyan/15 blur-[110px]" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 md:pt-16 md:pb-24">
          <div className="rev-item animate-fade-in text-center">
            <Eyebrow className="mb-5">{HERO.eyebrow}</Eyebrow>
            <h1 className="font-extrabold text-saas-ink text-[clamp(28px,4.4vw,48px)] leading-[1.12] tracking-tight mb-5">
              <Accent>"Faz. Não importa o preço."</Accent>
            </h1>
            <p className="text-saas-ink text-[17px] md:text-xl font-medium leading-relaxed max-w-[52ch] mx-auto mb-10">
              {HERO.subBefore}
            </p>
          </div>

          {/* Terminal de transcrição — sem enfeite */}
          <div className="rev-item animate-fade-in rounded-2xl border border-white/[0.09] bg-black/40 overflow-hidden">
            <div className="px-5 py-4 space-y-4 font-mono text-[13px] leading-relaxed">
              {HERO.transcript.map((line, i) => (
                <div key={i}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-saas-faint-2 text-[11px]">[{line.time}]</span>
                    <span className={`text-[11px] font-bold tracking-wide ${line.speaker === "PACIENTE" ? "text-saas-cyan" : "text-saas-faint"}`}>
                      {line.speaker}
                    </span>
                  </div>
                  {line.lines.map((l, j) => (
                    <p key={j} className="text-saas-ink pl-1">
                      {l}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="rev-item animate-fade-in mt-8 space-y-4 text-saas-body text-[16px] md:text-[17px] leading-relaxed max-w-[62ch] mx-auto text-center">
            {HERO.paras.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="rev-item animate-fade-in mt-8 flex flex-wrap justify-center gap-3">
            <button onClick={() => scrollTo("demo")} className={SAAS_BTN_PRIMARY}>
              {HERO.cta} <ArrowRight size={16} />
            </button>
            <button onClick={() => scrollTo("aplicar")} className={SAAS_BTN_GHOST}>
              Aplicar para diagnóstico
            </button>
          </div>

          {/* STAT STRIP */}
          <div className="rev-item animate-fade-in mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/[0.09] bg-white/[0.02] p-5">
                <div
                  className={`text-[clamp(22px,2.6vw,32px)] font-extrabold leading-none ${
                    s.accent ? "bg-gradient-to-r from-saas-cyan to-saas-violet bg-clip-text text-transparent" : "text-saas-ink"
                  }`}
                >
                  {s.value}
                </div>
                <div className="mt-2.5 text-[12.5px] text-saas-faint leading-relaxed">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* DOBRA 1 — O PROBLEMA */}
      <section className="border-t border-white/[0.06] py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rev-item animate-fade-in">
            <Eyebrow className="mb-5">{PROBLEMA.eyebrow}</Eyebrow>
            <h2 className="font-extrabold text-saas-ink text-[clamp(26px,3.4vw,42px)] leading-[1.12] tracking-tight mb-8 max-w-[22ch]">
              {PROBLEMA.headlineFull}
            </h2>
          </div>
          <div className="rev-item animate-fade-in space-y-5 text-saas-body text-[17px] leading-relaxed">
            {PROBLEMA.paras.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className={"rev-item animate-fade-in mt-8 " + SAAS_CARD + " p-7"}>
            <p className="font-extrabold text-[clamp(19px,2.4vw,26px)] leading-snug">
              <Accent>{PROBLEMA.punch}</Accent>
            </p>
          </div>
        </div>
      </section>

      {/* DOBRA 2 — POR QUE NINGUÉM VIU */}
      <section className="border-t border-white/[0.06] py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rev-item animate-fade-in">
            <Eyebrow className="mb-5">{LEITURA.eyebrow}</Eyebrow>
            <h2 className="font-extrabold text-saas-ink text-[clamp(26px,3.4vw,42px)] leading-[1.12] tracking-tight mb-6 max-w-[22ch]">
              {LEITURA.headlineFull}
            </h2>
            <p className="text-saas-body text-[17px] leading-relaxed">{LEITURA.intro}</p>
          </div>
          <div className="rev-item animate-fade-in mt-6 grid md:grid-cols-3 gap-4">
            {LEITURA.itens.map((it, i) => {
              const Icon = LEITURA_ICONS[i];
              return (
                <div key={it.titulo} className={SAAS_CARD + " p-6"}>
                  <span className="inline-flex w-10 h-10 rounded-full bg-gradient-to-br from-saas-cyan to-saas-violet items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-saas-void" />
                  </span>
                  <h3 className="font-bold text-saas-ink text-lg mb-2">{it.titulo}</h3>
                  <p className="text-saas-muted text-[14.5px] leading-relaxed">{it.desc}</p>
                </div>
              );
            })}
          </div>
          <div className={"rev-item animate-fade-in mt-8 " + SAAS_CARD + " p-7 space-y-2.5"}>
            {LEITURA.bias.map((p, i) => (
              <p key={i} className={i === 2 ? "font-bold text-saas-ink" : "text-saas-body"}>
                {p}
              </p>
            ))}
          </div>
          <p className="rev-item animate-fade-in mt-8 text-saas-body text-[17px] leading-relaxed">{LEITURA.fecho}</p>
        </div>
      </section>

      {/* DOBRA 3 — O QUE CONSTRUÍMOS */}
      <section className="border-t border-white/[0.06] py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rev-item animate-fade-in">
            <Eyebrow className="mb-5">{SISTEMA.eyebrow}</Eyebrow>
            <h2 className="font-extrabold text-saas-ink text-[clamp(26px,3.4vw,42px)] leading-[1.12] tracking-tight mb-8 max-w-[22ch]">
              <Accent>{SISTEMA.headline}</Accent>
            </h2>
          </div>
          <div className="rev-item animate-fade-in space-y-5 text-saas-body text-[17px] leading-relaxed">
            {SISTEMA.paras.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* DOBRA 4 — A DEMO */}
      <section id="demo" className="border-t border-white/[0.06] py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rev-item animate-fade-in text-center mb-10">
            <Eyebrow className="mb-5">{DEMO_COPY.eyebrow}</Eyebrow>
            <h2 className="font-extrabold text-saas-ink text-[clamp(28px,3.8vw,46px)] leading-[1.08] tracking-tight mb-4">
              {DEMO_COPY.headline} <Accent>{DEMO_COPY.headlineAccent}</Accent>
            </h2>
            <p className="text-saas-muted text-base md:text-lg leading-relaxed max-w-[60ch] mx-auto">{DEMO_COPY.sub}</p>
          </div>
          <div className="rev-item animate-fade-in">
            <CallDossieDemo />
          </div>
          <p className="rev-item animate-fade-in mt-8 text-center italic text-saas-ink text-[clamp(16px,2vw,20px)] leading-relaxed max-w-[52ch] mx-auto">
            {DEMO_COPY.finish}
          </p>
        </div>
      </section>

      {/* DOBRA 5 — POR QUE ISSO NÃO É CHATGPT */}
      <section className="border-t border-white/[0.06] py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rev-item animate-fade-in">
            <Eyebrow className="mb-5">{RIGOR.eyebrow}</Eyebrow>
            <h2 className="font-extrabold text-saas-ink text-[clamp(26px,3.4vw,42px)] leading-[1.12] tracking-tight mb-6 max-w-[24ch]">
              {RIGOR.headlineFull}
            </h2>
            <p className="text-saas-body text-[17px] leading-relaxed mb-8">{RIGOR.intro}</p>
          </div>
          <div className="rev-item animate-fade-in space-y-7">
            {RIGOR.itens.map((it) => (
              <div key={it.titulo} className="border-l-2 border-saas-violet/30 pl-5">
                <h3 className="font-bold text-saas-ink text-[16px] mb-2">{it.titulo}</h3>
                <p className="text-saas-body text-[15px] leading-relaxed">{it.corpo}</p>
              </div>
            ))}
          </div>
          <p className="rev-item animate-fade-in mt-8 italic text-saas-ink text-[clamp(17px,2vw,22px)] leading-relaxed max-w-[56ch]">
            <span className="block w-10 h-[3px] rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet mb-5" aria-hidden />
            {RIGOR.fecho}
          </p>
        </div>
      </section>

      {/* DOBRA 6 — O QUE O SISTEMA SE RECUSA A FAZER */}
      <section className="border-t border-white/[0.06] py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rev-item animate-fade-in">
            <Eyebrow className="mb-5">{RECUSA.eyebrow}</Eyebrow>
            <h2 className="font-extrabold text-saas-ink text-[clamp(26px,3.4vw,42px)] leading-[1.12] tracking-tight mb-8 max-w-[22ch]">
              {RECUSA.headline} <Accent>{RECUSA.headlineAccent}</Accent>
            </h2>
          </div>
          <div className="rev-item animate-fade-in space-y-5 text-saas-body text-[17px] leading-relaxed">
            {RECUSA.paras.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="rev-item animate-fade-in mt-8 flex items-start gap-3 rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
            <ShieldCheck className="w-5 h-5 text-saas-green flex-none mt-0.5" />
            <p className="text-saas-muted text-[14px] leading-relaxed">{RECUSA.lgpd}</p>
          </div>
        </div>
      </section>

      {/* DOBRA 7 — COMO FOI CONSTRUÍDO */}
      <section className="border-t border-white/[0.06] py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rev-item animate-fade-in">
            <Eyebrow className="mb-5">{CONSTRUCAO.eyebrow}</Eyebrow>
            <h2 className="font-extrabold text-saas-ink text-[clamp(26px,3.4vw,42px)] leading-[1.12] tracking-tight mb-8 max-w-[22ch]">
              {CONSTRUCAO.headline} <Accent>{CONSTRUCAO.headlineAccent}</Accent>
            </h2>
          </div>
          <div className="rev-item animate-fade-in space-y-5 text-saas-body text-[17px] leading-relaxed">
            {CONSTRUCAO.paras.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className={"rev-item animate-fade-in mt-8 " + SAAS_CARD + " p-7"}>
            <p className="font-extrabold text-saas-ink text-[clamp(18px,2.2vw,24px)] leading-snug">{CONSTRUCAO.punch}</p>
          </div>
        </div>
      </section>

      {/* DOBRA 8 — CTA + FORM */}
      <section id="aplicar" className="border-t border-white/[0.06] py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="rev-item animate-fade-in">
              <Eyebrow className="mb-5">{CTA.eyebrow}</Eyebrow>
              <h2 className="font-extrabold text-saas-ink text-[clamp(28px,3.6vw,44px)] leading-tight mb-5 max-w-[20ch]">
                {CTA.headline} <Accent>{CTA.headlineAccent}</Accent>
              </h2>
              <div className="space-y-4 text-saas-body text-base md:text-lg leading-relaxed max-w-[48ch] mb-8">
                {CTA.paras.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <ul className="space-y-3">
                {CTA.benefits.map((t) => (
                  <li key={t} className="flex items-center gap-3 text-sm font-medium text-saas-body">
                    <Check className="w-4 h-4 text-saas-green flex-none" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className={"relative rev-item animate-fade-in " + SAAS_CARD + " p-7 md:p-8 shadow-saas-card"}>
              {isSubmitted ? (
                <div className="text-center py-10 px-2">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-saas-cyan to-saas-violet mx-auto mb-6 flex items-center justify-center">
                    <Check className="w-6 h-6 text-saas-void" />
                  </div>
                  <h4 className="font-extrabold text-saas-ink text-2xl mb-2.5">{CTA.successTitle}</h4>
                  <p className="text-saas-muted text-[15px] leading-relaxed">{CTA.successBody}</p>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-2.5 text-sm font-bold text-saas-ink mb-6">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet animate-pulse" />
                    {CTA.formTitle}
                  </div>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="nome"
                        render={({ field }) => (
                          <FormItem>
                            <label className={SAAS_LABEL}>Nome completo</label>
                            <FormControl>
                              <input placeholder="Seu nome" className={SAAS_INPUT} {...field} />
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
                              <label className={SAAS_LABEL}>WhatsApp</label>
                              <FormControl>
                                <input placeholder="(00) 00000-0000" className={SAAS_INPUT} {...field} />
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
                              <label className={SAAS_LABEL}>E-mail</label>
                              <FormControl>
                                <input type="email" placeholder="voce@empresa.com" className={SAAS_INPUT} {...field} />
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
                              <label className={SAAS_LABEL}>Empresa</label>
                              <FormControl>
                                <input placeholder="Nome da empresa" className={SAAS_INPUT} {...field} />
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
                              <label className={SAAS_LABEL}>Segmento</label>
                              <FormControl>
                                <select className={SAAS_INPUT} {...field}>
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
                            <label className={SAAS_LABEL}>Onde você desconfia que sua operação perde dinheiro sem perceber? (opcional)</label>
                            <FormControl>
                              <textarea
                                rows={3}
                                placeholder="Em uma frase, onde você perde mais tempo ou dinheiro."
                                className={SAAS_INPUT + " resize-none"}
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
                        className={SAAS_BTN_PRIMARY + " w-full mt-1 disabled:opacity-50 disabled:cursor-not-allowed"}
                      >
                        {isSubmitting ? "Enviando..." : CTA.formCta}
                      </button>
                      <p className="text-xs text-saas-faint leading-relaxed text-center mt-1">{CTA.formFinish}</p>
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
          <p className="rev-item animate-fade-in font-extrabold text-saas-ink text-[clamp(24px,3.4vw,40px)] leading-tight max-w-[26ch] mb-10">
            Um sistema que avalia gente precisa estar <Accent>certo</Accent>.
          </p>
          <div className="flex flex-wrap justify-between gap-6 border-t border-white/[0.06] pt-6 text-sm text-saas-faint">
            <div>
              <div className="text-saas-faint-2 text-xs mb-1">Case</div>
              Clínicas de alto ticket
            </div>
            <div>
              <div className="text-saas-faint-2 text-xs mb-1">Sistema</div>
              Análise de calls por IA
            </div>
            <div>
              <div className="text-saas-faint-2 text-xs mb-1">Entrega</div>
              Sob medida · dias
            </div>
            <div>
              <div className="text-saas-faint-2 text-xs mb-1">© 2026</div>
              BA · Benites Albuquerque
            </div>
          </div>
          <p className="font-mono mt-8 text-[11px] leading-relaxed text-saas-faint-2 max-w-[80ch]">{RODAPE_NOTA}</p>
        </div>
      </footer>
    </div>
  );
};

export default ACallQueFechouMasNaoFechou;
