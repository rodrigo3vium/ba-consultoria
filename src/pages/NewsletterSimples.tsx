import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { tracker } from "@/lib/tracking";
import { Mail, Sparkles, ArrowRight } from "lucide-react";

const newsletterSchema = z.object({
  nome: z.string().trim().min(2, "Digite seu nome").max(100, "Nome muito longo"),
  email: z.string().trim().email("Digite um e-mail válido").max(255, "E-mail muito longo"),
});

type NewsletterForm = z.infer<typeof newsletterSchema>;

const NewsletterSimples = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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

      // Save to leads table
      const { data: lead, error: leadError } = await supabase
        .from("leads")
        .upsert(
          {
            nome: data.nome,
            email: data.email,
            whatsapp: "",
            produto: "Newsletter BA",
            origem: "Newsletter Simples",
          },
          { onConflict: "email", ignoreDuplicates: false }
        )
        .select("id")
        .single();

      if (leadError) {
        throw new Error(leadError.message);
      }

      // Save to newsletter_subscribers table
      const urlParams = new URLSearchParams(window.location.search);
      const { error: subscriberError } = await supabase
        .from("newsletter_subscribers")
        .upsert(
          {
            nome: data.nome,
            email: data.email,
            lead_id: lead.id,
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
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-ba-blue-light/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-ba-orange/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto">
            {/* Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-ba-blue to-ba-orange flex items-center justify-center">
                <Mail className="w-10 h-10 text-white" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-ba-blue-light via-white to-ba-orange bg-clip-text text-transparent leading-tight pb-2">
              Newsletter BA
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground text-center mb-12 max-w-xl mx-auto">
              Receba insights semanais sobre IA, automação e estratégias para crescer seu negócio.
            </p>

            {/* Form Card */}
            <Card className="border-ba-blue-light/20 bg-black/40 backdrop-blur">
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
                              className="bg-muted/50 border-border text-foreground placeholder:text-muted-foreground h-14 text-base"
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
                              className="bg-muted/50 border-border text-foreground placeholder:text-muted-foreground h-14 text-base"
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
                      className="w-full h-14 bg-gradient-to-r from-ba-blue to-ba-orange hover:opacity-90 text-white font-semibold text-lg"
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
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
                    <Sparkles className="w-4 h-4 text-ba-orange" />
                    <span>100% gratuito • Cancele quando quiser</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewsletterSimples;
