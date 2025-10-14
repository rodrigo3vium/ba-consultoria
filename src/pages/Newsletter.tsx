import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, TrendingUp, Lightbulb, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { tracker } from "@/lib/tracking";
import { supabase } from "@/integrations/supabase/client";

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

      // 1. Identificar lead via tracker
      await tracker.identify(values.email, values.whatsapp || "", values.name);

      // 2. Atualizar tags e produto do lead
      // Primeiro buscar o lead atual para pegar as tags existentes
      const { data: leadData } = await supabase
        .from('leads')
        .select('tags')
        .eq('email', values.email)
        .single();

      const currentTags = leadData?.tags || [];
      const updatedTags = currentTags.includes('newsletter') 
        ? currentTags 
        : [...currentTags, 'newsletter'];

      const { error: updateError } = await supabase
        .from('leads')
        .update({ 
          tags: updatedTags,
          produto: 'Newsletter'
        })
        .eq('email', values.email);

      if (updateError) {
        console.error('Erro ao atualizar tags:', updateError);
      }

      // 3. Registrar evento de signup
      await tracker.track('newsletter_signup', {
        source: 'newsletter_page'
      });

      // 4. Mostrar sucesso
      toast({
        title: "Inscrição confirmada! 🎉",
        description: "Você receberá nossa newsletter toda segunda-feira às 8h.",
      });

      // Limpar formulário
      form.reset();
      
    } catch (error) {
      console.error('Erro ao processar inscrição:', error);
      toast({
        title: "Erro ao processar inscrição",
        description: "Tente novamente em alguns instantes.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: "Tendências de IA",
      description: "Fique por dentro das últimas inovações em Inteligência Artificial"
    },
    {
      icon: Lightbulb,
      title: "Dicas Práticas",
      description: "Aprenda como aplicar IA no seu dia a dia e nos seus negócios"
    },
    {
      icon: Mail,
      title: "Casos de Sucesso",
      description: "Conheça histórias reais de transformação digital"
    },
    {
      icon: Calendar,
      title: "Eventos Exclusivos",
      description: "Acesso antecipado a workshops e webinars sobre IA"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-ba-blue-light/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-ba-orange/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-6 px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-ba-blue-light via-white to-ba-orange bg-clip-text text-transparent leading-[1.1] sm:leading-tight">
              Receba Insights Semanais sobre IA{" "}
              <span className="inline-block">e Negócios</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Toda segunda-feira às 8h, você recebe no seu email as melhores estratégias,
              tendências e casos práticos de Inteligência Artificial aplicada a negócios.
            </p>
          </div>
        </div>
      </section>

      {/* Formulário de Cadastro */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto border-ba-blue-light/20 bg-black/40 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-3xl text-center">Inscreva-se Gratuitamente</CardTitle>
              <CardDescription className="text-center text-base">
                Junte-se a centenas de profissionais que já recebem nossa newsletter
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input
                    id="name"
                    placeholder="Seu nome"
                    {...form.register("name")}
                    className="bg-black/50 border-ba-blue-light/30 focus:border-ba-blue-light"
                  />
                  {form.formState.errors.name && (
                    <p className="text-sm text-destructive">{form.formState.errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    {...form.register("email")}
                    className="bg-black/50 border-ba-blue-light/30 focus:border-ba-blue-light"
                  />
                  {form.formState.errors.email && (
                    <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="whatsapp">WhatsApp (opcional)</Label>
                  <Input
                    id="whatsapp"
                    placeholder="(11) 98765-4321"
                    {...form.register("whatsapp")}
                    className="bg-black/50 border-ba-blue-light/30 focus:border-ba-blue-light"
                  />
                  <p className="text-sm text-muted-foreground">
                    Opcional - para receber avisos de eventos exclusivos
                  </p>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary hover:shadow-glow"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processando..." : "Quero Receber a Newsletter"}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Ao se inscrever, você concorda em receber emails semanais. 
                  Cancele quando quiser com um clique.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-gradient-to-b from-transparent to-ba-blue-light/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            O que você vai receber
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-ba-blue-light/20 bg-black/40 backdrop-blur hover:border-ba-blue-light/40 transition-all">
                <CardContent className="pt-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Frequência e Privacidade */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="flex items-center justify-center gap-2 text-ba-orange">
              <Calendar className="w-5 h-5" />
              <p className="text-lg font-semibold">
                Enviada toda segunda-feira às 8h
              </p>
            </div>
            <p className="text-muted-foreground">
              Sem spam. Sem vendas agressivas. Apenas conteúdo de qualidade para 
              você dominar IA e aplicar no seu negócio.
            </p>
            <p className="text-sm text-muted-foreground">
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
