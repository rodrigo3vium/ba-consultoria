import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, TrendingUp, Lightbulb, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { tracker } from "@/lib/tracking";
import { supabase } from "@/integrations/supabase/client";
import {
  Accent,
  Card,
  SAAS_BTN_PRIMARY,
  SAAS_CARD,
  SAAS_INPUT,
  SAAS_LABEL,
} from "@/components/saas/ui";

const newsletterSchema = z.object({
  name: z.string().min(3, "Nome deve ter no mínimo 3 caracteres").max(100, "Nome muito longo"),
  email: z.string().email("Email inválido").max(255, "Email muito longo"),
  whatsapp: z.string().optional(),
});

type NewsletterForm = z.infer<typeof newsletterSchema>;

const Newsletter = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<NewsletterForm>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      name: "",
      email: "",
      whatsapp: "",
    },
  });

  const onSubmit = async (values: NewsletterForm) => {
    try {
      setIsSubmitting(true);
      console.log('📧 Iniciando cadastro newsletter:', values.email);

      await tracker.identify(values.email, values.whatsapp || "", values.name);
      const anonymousId = tracker.getAnonymousId();
      const urlParams = new URLSearchParams(window.location.search);

      // Salvar no BA Hub contacts
      await supabase.functions.invoke('submit-contact', {
        body: {
          name: values.name,
          email: values.email,
          whatsapp: values.whatsapp || null,
          source: 'newsletter',
          utm: {
            source: urlParams.get('utm_source'),
            medium: urlParams.get('utm_medium'),
            campaign: urlParams.get('utm_campaign'),
          },
        },
      });

      // Salvar na tabela newsletter_subscribers
      const { error: upsertError } = await supabase
        .from('newsletter_subscribers')
        .upsert({
          email: values.email,
          nome: values.name,
          whatsapp: values.whatsapp || null,
          anonymous_id: anonymousId,
          subscription_source: 'newsletter_page',
          utm_source: urlParams.get('utm_source'),
          utm_medium: urlParams.get('utm_medium'),
          utm_campaign: urlParams.get('utm_campaign'),
          referrer: document.referrer || null,
          status: 'active'
        }, {
          onConflict: 'email',
          ignoreDuplicates: true
        });

      if (upsertError && upsertError.code === '23505') {
        toast({
          title: "Você já está inscrito! ✅",
          description: "Verifique sua caixa de entrada toda segunda às 8h.",
        });
        form.reset();
        return;
      }
      if (upsertError) throw new Error(upsertError.message);

      // Sincronizar com ActiveCampaign
      try {
        const { error: acError } = await supabase.functions.invoke('sync-activecampaign', {
          body: {
            email: values.email,
            name: values.name,
            whatsapp: values.whatsapp,
            source: 'Newsletter Page',
          },
        });

        if (acError) {
          console.error('⚠️ Erro ao sincronizar com ActiveCampaign:', acError);
          // Não falha o processo todo se AC sync falhar
        } else {
          console.log('✅ Sincronizado com ActiveCampaign');
        }
      } catch (acSyncError) {
        console.error('⚠️ Erro ao sincronizar com ActiveCampaign:', acSyncError);
        // Continua mesmo se ActiveCampaign falhar
      }

      await tracker.track('newsletter_signup', { source: 'newsletter_page' });

      // Sucesso
      toast({
        title: "Inscrição confirmada! 🎉",
        description: "Você receberá nossa newsletter toda segunda-feira às 8h.",
      });

      form.reset();

    } catch (error) {
      console.error('❌ Erro detalhado:', error);

      toast({
        title: "Erro ao processar inscrição",
        description: error instanceof Error ? error.message : "Tente novamente em alguns instantes.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: "Negócios",
      description: "Cases práticos de aplicações de IA"
    },
    {
      icon: Lightbulb,
      title: "Novidades",
      description: "Atualizações sobre as últimas inovações e lançamentos em Inteligência Artificial"
    },
    {
      icon: Mail,
      title: "Ferramentas",
      description: "Uma curadoria das melhores ferramentas de IA do mercado"
    },
    {
      icon: Calendar,
      title: "Vida",
      description: "Dicas para viver uma vida melhor, afinal, nem só de IA viverá o homem"
    }
  ];

  return (
    <div className="min-h-screen bg-saas-void text-saas-body">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Glows radiais de acento */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/4 w-[480px] h-[480px] rounded-full bg-saas-violet/20 blur-[110px]" />
          <div className="absolute bottom-0 right-1/4 w-[520px] h-[420px] rounded-full bg-saas-cyan/15 blur-[110px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-6 px-4 animate-fade-in">
            <h1 className="font-extrabold text-saas-ink text-[clamp(28px,4.5vw,52px)] leading-[1.1] tracking-tight">
              Receba Insights Semanais sobre IA{" "}
              <Accent>e Negócios</Accent>
            </h1>
            <p className="text-lg md:text-xl text-saas-body max-w-2xl mx-auto leading-relaxed">
              Toda segunda-feira às 8h, você recebe no seu email as melhores estratégias,
              tendências e casos práticos de Inteligência Artificial aplicada a negócios.
            </p>
          </div>
        </div>
      </section>

      {/* Formulário de Cadastro */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className={SAAS_CARD + " max-w-2xl mx-auto p-7 md:p-8 shadow-saas-card animate-fade-in"}>
            <div className="text-center mb-6">
              <h2 className="font-extrabold text-saas-ink text-[clamp(24px,3vw,34px)] tracking-tight">
                Inscreva-se Gratuitamente
              </h2>
              <p className="mt-2.5 text-saas-muted text-base">
                Junte-se a centenas de profissionais que já recebem nossa newsletter
              </p>
            </div>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label htmlFor="name" className={SAAS_LABEL}>Nome Completo</label>
                <input
                  id="name"
                  placeholder="Seu nome"
                  {...form.register("name")}
                  className={SAAS_INPUT}
                />
                {form.formState.errors.name && (
                  <p className="mt-1.5 text-sm text-destructive">{form.formState.errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className={SAAS_LABEL}>Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  {...form.register("email")}
                  className={SAAS_INPUT}
                />
                {form.formState.errors.email && (
                  <p className="mt-1.5 text-sm text-destructive">{form.formState.errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="whatsapp" className={SAAS_LABEL}>WhatsApp (opcional)</label>
                <input
                  id="whatsapp"
                  placeholder="(11) 98765-4321"
                  {...form.register("whatsapp")}
                  className={SAAS_INPUT}
                />
                <p className="mt-1.5 text-sm text-saas-faint">
                  Opcional - para receber avisos de eventos exclusivos
                </p>
              </div>

              <button
                type="submit"
                className={SAAS_BTN_PRIMARY + " w-full disabled:opacity-50 disabled:cursor-not-allowed"}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processando..." : "Quero Receber a Newsletter"}
              </button>

              <p className="text-xs text-center text-saas-faint leading-relaxed">
                Ao se inscrever, você concorda em receber emails semanais.
                Cancele quando quiser com um clique.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="border-t border-white/[0.06] bg-saas-void-2 py-20 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-extrabold text-saas-ink text-[clamp(26px,3.4vw,42px)] leading-[1.12] tracking-tight text-center mb-12">
            O que você vai receber
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="p-6 space-y-4 hover:border-white/[0.14] transition-colors animate-fade-in"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-saas-cyan to-saas-violet flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-saas-void" />
                </div>
                <h3 className="text-xl font-bold text-saas-ink">{benefit.title}</h3>
                <p className="text-saas-muted leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Frequência e Privacidade */}
      <section className="border-t border-white/[0.06] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="flex items-center justify-center gap-2 text-saas-cyan">
              <Calendar className="w-5 h-5" />
              <p className="text-lg font-semibold">
                Enviada toda segunda-feira às 8h
              </p>
            </div>
            <p className="text-saas-body">
              Sem spam. Sem vendas agressivas. Apenas conteúdo de qualidade para
              você dominar IA e aplicar no seu negócio.
            </p>
            <p className="text-sm text-saas-faint">
              Cancelamento com um clique a qualquer momento. Seus dados estão seguros
              e nunca serão compartilhados com terceiros.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Newsletter;
