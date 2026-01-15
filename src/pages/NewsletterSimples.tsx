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
    <div className="min-h-screen flex flex-col bg-ba-gray">
      <Header />

      <main className="flex-grow flex items-center justify-center px-4 py-16 md:py-24">
        <div className="w-full max-w-lg">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-8 md:p-10">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-ba-blue to-ba-orange flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Title */}
              <h1 className="text-2xl md:text-3xl font-bold text-white text-center mb-3">
                Newsletter BA
              </h1>

              {/* Description */}
              <p className="text-white/70 text-center mb-8">
                Receba insights semanais sobre IA, automação e estratégias para crescer seu negócio.
              </p>

              {/* Form */}
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="nome"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Seu nome"
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
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
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
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
                    className="w-full h-12 bg-gradient-to-r from-ba-blue to-ba-orange hover:opacity-90 text-white font-semibold text-base"
                  >
                    {isSubmitting ? (
                      "Cadastrando..."
                    ) : (
                      <>
                        Quero receber
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>

              {/* Benefits */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center justify-center gap-2 text-white/60 text-sm">
                  <Sparkles className="w-4 h-4 text-ba-orange" />
                  <span>100% gratuito • Cancele quando quiser</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NewsletterSimples;
