import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Helmet } from "react-helmet";
import { ArrowRight } from "lucide-react";
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

const formSchema = z.object({
  nome: z.string().min(2, "Nome é obrigatório").max(100),
  whatsapp: z.string().min(10, "WhatsApp inválido").max(20),
  email: z.string().email("Email inválido").max(255),
  empresa: z.string().min(2, "Empresa é obrigatória").max(150),
  segmento: z.string().min(1, "Selecione uma opção"),
  gargalo: z.string().max(600).optional(),
});
type FormData = z.infer<typeof formSchema>;

const SectionHead = ({ idx, label, children }: { idx: string; label: string; children: React.ReactNode }) => (
  <div className="rev-item animate-fade-in mb-8">
    <div className="flex items-center gap-4 mb-6">
      <span className="font-mono text-[11px] uppercase tracking-mono-wide text-pb-cyan">{idx}</span>
      <span className="h-px flex-1 bg-pb-grid-strong" />
      <span className="font-mono text-[11px] uppercase tracking-mono-wide text-pb-ink-muted">{label}</span>
    </div>
    <h2 className="font-display uppercase text-pb-ink text-[clamp(30px,4vw,56px)] leading-[0.95] tracking-[0.005em] max-w-[20ch]">
      {children}
    </h2>
  </div>
);

const ImovelVazioNaoVendePB = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    tracker.page("Portfólio PB — Imóvel vazio não vende");
    document.body.style.backgroundColor = "#05090B";
    document.body.style.paddingTop = "0";
    return () => {
      document.body.style.backgroundColor = "";
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
    tracker.track("cta_click", { product: LEAD_SOURCE, location: "demo-usar-minha-foto-pb" });
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
          metadata: { empresa: data.empresa, segmento: data.segmento, gargalo: data.gargalo, idv: "pb" },
        },
      });
      if (error) throw error;
      await tracker.identify(data.email, data.whatsapp, data.nome);
      await tracker.track("lead_capture", {
        product: LEAD_SOURCE,
        source: "landing-page-pb",
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
    <div className="min-h-screen bg-pb-void text-pb-ink-soft">
      <Helmet>
        <title>Imóvel vazio não vende — Virtual staging por IA | BA</title>
        <meta
          name="description"
          content="Transforme a foto de um imóvel vazio em ambiente mobiliado em 40 segundos e por um centésimo do custo. Teste a demo ao vivo, sem cadastro."
        />
      </Helmet>

      {/* HEADER */}
      <div className="sticky top-0 z-50 border-b border-pb-grid-strong bg-pb-void/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[56px] flex items-center justify-between gap-6">
          <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-mono-wide text-pb-ink">
            <span className="w-1.5 h-1.5 rounded-full bg-pb-cyan animate-pulse" />
            BA / PORTFÓLIO
          </div>
          <button onClick={() => scrollTo("aplicar")} className="btn-primary !py-2 !px-4 !text-[11px]">
            Aplicar <span aria-hidden>→</span>
          </button>
        </div>
      </div>

      {/* HERO */}
      <section className="border-b border-pb-grid-strong">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
            <div className="rev-item animate-fade-in">
              <p className="font-mono text-[11px] uppercase tracking-mono-wide text-pb-cyan mb-6">{HERO.eyebrow}</p>
              <h1 className="font-display uppercase text-pb-ink text-[clamp(34px,5vw,60px)] leading-[0.94] tracking-[0.005em] mb-6">
                O comprador decide antes de visitar. Sua foto mostra uma parede vazia<span className="text-pb-red">.</span>
              </h1>
              <p className="font-body text-pb-ink-soft text-base md:text-lg leading-relaxed max-w-[52ch] mb-3">{HERO.sub}</p>
              <p className="font-body text-pb-ink text-base md:text-lg leading-relaxed max-w-[52ch] mb-8">{HERO.subPunch}</p>
              <div className="flex flex-wrap gap-3">
                <button onClick={() => scrollTo("demo")} className="btn-primary">
                  {HERO.cta} <span aria-hidden>→</span>
                </button>
                <button onClick={() => scrollTo("aplicar")} className="btn-ghost">
                  Aplicar para diagnóstico
                </button>
              </div>
            </div>

            {/* Teaser interativo — o visitante brinca antes de ler */}
            <div className="rev-item animate-fade-in">
              <div className="relative border border-pb-grid-strong bg-pb-void-card p-3">
                <HeroBeforeAfter variant="pb" />
              </div>
              <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted">
                Arraste sobre a imagem — vazio de um lado, mobiliado do outro
              </p>
            </div>
          </div>

          {/* STAT STRIP */}
          <div className="rev-item animate-fade-in mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-pb-grid-strong border border-pb-grid-strong">
            {STATS.map((s) => (
              <div key={s.value} className="bg-pb-void p-5">
                <div className={`font-display text-[clamp(30px,3.4vw,44px)] leading-none ${s.accent ? "text-pb-cyan" : "text-pb-ink"}`}>
                  {s.value}
                </div>
                <div className="mt-2.5 font-body text-[12.5px] text-pb-ink-muted leading-relaxed">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOBRA 1 — O PROBLEMA */}
      <section className="border-t border-pb-grid-strong py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead idx="// 01" label={PROBLEMA.eyebrow}>
            Ninguém compra o que não consegue imaginar<span className="text-pb-red">.</span>
          </SectionHead>
          <div className="rev-item animate-fade-in space-y-5 font-body text-pb-ink-soft text-[17px] leading-relaxed">
            {PROBLEMA.paras.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* DOBRA 2 — A VIRADA */}
      <section className="border-t border-pb-grid-strong py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead idx="// 02" label={VIRADA.eyebrow}>
            O open house não acontece mais na porta da casa<span className="text-pb-red">.</span>
          </SectionHead>
          <div className="rev-item animate-fade-in space-y-5 font-body text-pb-ink-soft text-[17px] leading-relaxed">
            {VIRADA.paras.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="rev-item animate-fade-in my-8 border-l-2 border-pb-cyan pl-6">
            <p className="font-display uppercase text-pb-cyan text-[clamp(22px,3vw,34px)] leading-[0.98]">{VIRADA.punch}</p>
          </div>
          <div className="rev-item animate-fade-in space-y-5 font-body text-pb-ink-soft text-[17px] leading-relaxed">
            {VIRADA.parasAfter.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* DOBRA 3 — A DEMO */}
      <section id="demo" className="border-t border-pb-grid-strong py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rev-item animate-fade-in text-center mb-10">
            <p className="font-mono text-[11px] uppercase tracking-mono-wide text-pb-cyan mb-5">// 03 {DEMO.eyebrow}</p>
            <h2 className="font-display uppercase text-pb-ink text-[clamp(34px,4.6vw,64px)] leading-[0.95] mb-4">
              Não acredite. Testa<span className="text-pb-red">.</span>
            </h2>
            <p className="font-body text-pb-ink-soft text-base md:text-lg leading-relaxed max-w-[60ch] mx-auto">{DEMO.sub}</p>
          </div>
          <div className="rev-item animate-fade-in">
            <BeforeAfterStudio variant="pb" onUsePhoto={goToForm} />
          </div>
          <p className="rev-item animate-fade-in mt-8 text-center font-body italic text-pb-ink text-[clamp(16px,2vw,20px)] leading-relaxed max-w-[52ch] mx-auto">
            {DEMO.finish}
          </p>
        </div>
      </section>

      {/* DOBRA 4 — HONESTIDADE */}
      <section className="border-t border-pb-grid-strong py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionHead idx="// 04" label={HONESTIDADE.eyebrow}>
              O que este sistema se recusa a fazer<span className="text-pb-red">.</span>
            </SectionHead>
            <div className="rev-item animate-fade-in space-y-5 font-body text-pb-ink-soft text-[17px] leading-relaxed">
              {HONESTIDADE.paras.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <p className="rev-item animate-fade-in mt-6 font-mono text-[11px] uppercase tracking-mono-wide text-pb-ink-muted">
              {HONESTIDADE.itensIntro}
            </p>
          </div>
          <div className="rev-item animate-fade-in mt-6 grid md:grid-cols-3 gap-px bg-pb-grid-strong border border-pb-grid-strong">
            {HONESTIDADE.itens.map((it, i) => (
              <div key={it.titulo} className="bg-pb-void p-6">
                <span className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display uppercase text-pb-ink text-2xl mt-3 mb-2 leading-[0.98]">{it.titulo}</h3>
                <p className="font-body text-pb-ink-soft text-[14.5px] leading-relaxed">{it.desc}</p>
              </div>
            ))}
          </div>
          <p className="rev-item animate-fade-in mt-8 font-body italic text-pb-ink text-[clamp(17px,2vw,22px)] leading-relaxed max-w-[56ch] border-l-2 border-pb-red pl-6">
            {HONESTIDADE.fecho}
          </p>
        </div>
      </section>

      {/* DOBRA 5 — O QUE MUDA NA OPERAÇÃO */}
      <section className="border-t border-pb-grid-strong py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead idx="// 05" label={OPERACAO.eyebrow}>
            De dois imóveis difíceis para a carteira inteira<span className="text-pb-red">.</span>
          </SectionHead>
          <div className="rev-item animate-fade-in border border-pb-grid-strong">
            <div className="grid grid-cols-[1.3fr_1fr_1fr] border-b border-pb-grid-strong font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted">
              <div className="px-4 md:px-6 py-4"> </div>
              <div className="px-3 md:px-6 py-4">Antes</div>
              <div className="px-3 md:px-6 py-4 text-pb-cyan">Depois</div>
            </div>
            {COMPARISON.map((r) => (
              <div
                key={r.k}
                className={`grid grid-cols-[1.3fr_1fr_1fr] items-center border-b border-pb-grid-strong last:border-none ${r.highlight ? "bg-pb-void-card" : ""}`}
              >
                <div className="px-4 md:px-6 py-4 font-body text-[13.5px] text-pb-ink">{r.k}</div>
                <div className="px-3 md:px-6 py-4 font-body text-[13.5px] text-pb-ink-muted">{r.antes}</div>
                <div className={`px-3 md:px-6 py-4 font-body text-[13.5px] ${r.highlight ? "text-pb-cyan" : "text-pb-ink-soft"}`}>
                  {r.depois}
                </div>
              </div>
            ))}
          </div>
          <p className="rev-item animate-fade-in mt-8 font-body text-pb-ink-soft text-[17px] leading-relaxed max-w-[62ch]">{OPERACAO.fecho}</p>
        </div>
      </section>

      {/* DOBRA 6 — COMO FOI CONSTRUÍDO */}
      <section className="border-t border-pb-grid-strong py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead idx="// 06" label={CONSTRUCAO.eyebrow}>
            Sob medida. Em dias, não meses<span className="text-pb-red">.</span>
          </SectionHead>
          <div className="rev-item animate-fade-in space-y-5 font-body text-pb-ink-soft text-[17px] leading-relaxed">
            {CONSTRUCAO.paras.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="rev-item animate-fade-in mt-8 border-l-2 border-pb-cyan pl-6">
            <p className="font-body text-pb-ink text-[clamp(18px,2.2vw,24px)] leading-snug">{CONSTRUCAO.punch}</p>
          </div>
        </div>
      </section>

      {/* DOBRA 7 — CTA + FORM */}
      <section id="aplicar" className="border-t border-pb-grid-strong py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="rev-item animate-fade-in">
              <p className="font-mono text-[11px] uppercase tracking-mono-wide text-pb-cyan mb-6">// 07 {CTA.eyebrow}</p>
              <h2 className="font-display uppercase text-pb-ink text-[clamp(32px,4.4vw,60px)] leading-[0.95] mb-6 max-w-[16ch]">
                O gargalo da sua empresa provavelmente não é foto de imóvel<span className="text-pb-red">.</span>
              </h2>
              <div className="space-y-4 font-body text-pb-ink-soft text-base md:text-lg leading-relaxed max-w-[48ch] mb-8">
                {CTA.paras.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <ul className="space-y-3">
                {CTA.benefits.map((t) => (
                  <li key={t} className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-mono-wide text-pb-ink-soft">
                    <span className="w-1.5 h-1.5 bg-pb-cyan flex-none" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rev-item animate-fade-in border border-pb-grid-strong bg-pb-void-card p-7 md:p-8">
              {isSubmitted ? (
                <div className="text-center py-10 px-2">
                  <p className="font-mono text-[11px] uppercase tracking-mono-wide text-pb-cyan mb-4">STATUS / OK</p>
                  <h4 className="font-display uppercase text-pb-ink text-3xl mb-3 leading-[0.98]">{CTA.successTitle}</h4>
                  <p className="font-body text-pb-ink-soft text-[15px] leading-relaxed">{CTA.successBody}</p>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-mono-wide text-pb-ink mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-pb-cyan animate-pulse" />
                    {CTA.formTitle}
                  </div>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="nome"
                        render={({ field }) => (
                          <FormItem>
                            <label className="pb-label">Nome completo</label>
                            <FormControl>
                              <input placeholder="Seu nome" className="pb-input" {...field} />
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
                              <label className="pb-label">WhatsApp</label>
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
                              <label className="pb-label">E-mail</label>
                              <FormControl>
                                <input type="email" placeholder="voce@empresa.com" className="pb-input" {...field} />
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
                              <label className="pb-label">Empresa</label>
                              <FormControl>
                                <input placeholder="Nome da empresa" className="pb-input" {...field} />
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
                              <label className="pb-label">Segmento</label>
                              <FormControl>
                                <select className="pb-input" {...field}>
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
                            <label className="pb-label">Principal gargalo hoje (opcional)</label>
                            <FormControl>
                              <textarea
                                rows={3}
                                placeholder="Em uma frase, onde você perde mais tempo ou dinheiro."
                                className="pb-input resize-none"
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
                        className="btn-primary w-full !justify-center mt-1 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? "Enviando..." : CTA.formCta}
                        {!isSubmitting && <ArrowRight size={15} />}
                      </button>
                      <p className="font-body text-xs text-pb-ink-muted leading-relaxed text-center mt-1">{CTA.formFinish}</p>
                    </form>
                  </Form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-pb-grid-strong py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="rev-item animate-fade-in font-display uppercase text-pb-ink text-[clamp(28px,4vw,52px)] leading-[0.95] max-w-[20ch] mb-10">
            Vendemos imaginação, não ilusão<span className="text-pb-red">.</span>
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-pb-grid-strong pt-6 font-mono text-[11px] uppercase tracking-mono-wide text-pb-ink-muted">
            <div>
              <div className="text-pb-ink-faint mb-1">Case</div>
              Mercado imobiliário
            </div>
            <div>
              <div className="text-pb-ink-faint mb-1">Sistema</div>
              Virtual staging / IA
            </div>
            <div>
              <div className="text-pb-ink-faint mb-1">Entrega</div>
              Sob medida · dias
            </div>
            <div>
              <div className="text-pb-ink-faint mb-1">© 2026</div>
              BA · Benites Albuquerque
            </div>
          </div>
          <p className="mt-8 font-mono text-[11px] leading-relaxed text-pb-ink-faint max-w-[80ch]">{RODAPE_TECNICO}</p>
        </div>
      </footer>
    </div>
  );
};

export default ImovelVazioNaoVendePB;
