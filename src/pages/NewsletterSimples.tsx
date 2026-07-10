import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { tracker } from "@/lib/tracking";
import { Mail, Sparkles, ArrowRight } from "lucide-react";
import { Accent, SAAS_BTN_PRIMARY, SAAS_CARD, SAAS_INPUT } from "@/components/saas/ui";

const newsletterSchema = z.object({
  nome: z.string().trim().min(2, "Digite seu nome").max(100, "Nome muito longo"),
  email: z.string().trim().email("Digite um e-mail válido").max(255, "E-mail muito longo"),
});

type NewsletterForm = z.infer<typeof newsletterSchema>;

const NewsletterSimples = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Remove body padding and set black background for standalone page
  useEffect(() => {
    document.body.style.backgroundColor = '#0A0A13';
    document.body.style.paddingTop = '0';
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.paddingTop = '';
    };
  }, []);

  const form = useForm<NewsletterForm>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      nome: "",
      email: "",
    },
  });

  const onSubmit = async (data: NewsletterForm) => {
    setIsSubmitting(true);

    try {
      // Identify lead
      await tracker.identify(data.email, "", data.nome);
      const anonymousId = tracker.getAnonymousId();

      // Salvar no BA Hub contacts
      await supabase.functions.invoke('submit-contact', {
        body: { name: data.nome, email: data.email, source: 'newsletter' },
      });

      // Save to newsletter_subscribers table
      const urlParams = new URLSearchParams(window.location.search);
      const { error: subscriberError } = await supabase
        .from("newsletter_subscribers")
        .upsert(
          {
            nome: data.nome,
            email: data.email,
            anonymous_id: anonymousId,
            subscription_source: "newsletter_simples",
            utm_source: urlParams.get("utm_source"),
            utm_medium: urlParams.get("utm_medium"),
            utm_campaign: urlParams.get("utm_campaign"),
            referrer: document.referrer || null,
            status: "active",
          },
          { onConflict: "email", ignoreDuplicates: true }
        );

      if (subscriberError && subscriberError.code === "23505") {
        toast({
          title: "Você já está inscrito!",
          description: "Este e-mail já está cadastrado na nossa newsletter.",
        });
        setIsSubmitting(false);
        return;
      }

      // Track event
      tracker.track("newsletter_signup", {
        source: "newsletter_simples",
      });

      toast({
        title: "Inscrição confirmada! 🎉",
        description: "Você receberá nossa próxima edição em breve.",
      });

      form.reset();
    } catch (error) {
      console.error("Newsletter signup error:", error);
      toast({
        title: "Erro ao cadastrar",
        description: "Tente novamente em alguns instantes.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-saas-void text-saas-body flex items-center justify-center">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-saas-violet/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-saas-cyan/15 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto">
            {/* Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-saas-cyan to-saas-violet flex items-center justify-center">
                <Mail className="w-10 h-10 text-saas-void" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-[clamp(32px,6vw,56px)] font-extrabold text-saas-ink text-center mb-6 leading-[1.1] tracking-tight">
              Newsletter <Accent>BA</Accent>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-saas-muted text-center mb-12 max-w-xl mx-auto">
              Receba insights semanais sobre IA, automação e estratégias para crescer seu negócio.
            </p>

            {/* Form Card */}
            <Card className={SAAS_CARD + " shadow-[0_24px_60px_-24px_rgba(0,0,0,0.6)]"}>
              <CardContent className="p-8 md:p-10">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <FormField
                      control={form.control}
                      name="nome"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Seu nome"
                              className={SAAS_INPUT + " h-14"}
                              {...field}
                            />
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
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="Seu melhor e-mail"
                              className={SAAS_INPUT + " h-14"}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className={SAAS_BTN_PRIMARY + " w-full h-14 text-lg disabled:opacity-50 disabled:cursor-not-allowed"}
                    >
                      {isSubmitting ? (
                        "Cadastrando..."
                      ) : (
                        <>
                          Quero receber
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>

                {/* Benefits */}
                <div className="mt-8 pt-6 border-t border-white/[0.06]">
                  <div className="flex items-center justify-center gap-2 text-saas-faint text-sm">
                    <Sparkles className="w-4 h-4 text-saas-cyan" />
                    <span>100% gratuito • Cancele quando quiser</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsletterSimples;
