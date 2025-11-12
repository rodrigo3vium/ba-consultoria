import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Email inválido",
        description: "Por favor, insira um email válido.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const { error } = await supabase.functions.invoke('sync-activecampaign', {
        body: {
          email,
          source: 'Footer Newsletter',
        },
      });

      if (error) throw error;

      toast({
        title: "Inscrição realizada!",
        description: "Você receberá nossas novidades em breve.",
      });
      setEmail('');
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      toast({
        title: "Erro na inscrição",
        description: "Não foi possível completar sua inscrição. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="relative bg-black border-t border-ba-blue-light/10">
      {/* Newsletter CTA */}
      <div className="relative border-b border-ba-blue-light/10">
        <div className="absolute inset-0 bg-gradient-to-b from-ba-blue-dark/5 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-ba-blue-light/5 rounded-full blur-3xl"></div>
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4 bg-gradient-to-r from-ba-blue-light via-white to-ba-orange bg-clip-text text-transparent">
              Fique por dentro das novidades
            </h2>
            <p className="text-muted-foreground font-inter mb-8">
              Receba insights exclusivos sobre IA, automação e estratégias para transformar seu negócio
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Seu melhor email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-black/80 backdrop-blur-sm border-ba-blue-light/10 text-foreground placeholder:text-muted-foreground hover:border-ba-blue-light/40 focus:border-ba-blue-light/60 transition-colors rounded-full px-6"
                disabled={isLoading}
              />
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-gradient-primary hover:opacity-90 text-background rounded-full px-8 font-semibold shadow-glow transition-all hover:shadow-glow-intense"
              >
                {isLoading ? 'Inscrevendo...' : 'Inscrever'}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="relative py-12">
        <div className="absolute inset-0 bg-gradient-to-t from-ba-blue-dark/5 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="absolute -z-10 -top-8 -left-8 w-64 h-64 bg-ba-blue-light/5 rounded-full blur-3xl"></div>
              <h3 className="text-3xl md:text-4xl font-bold font-poppins bg-gradient-to-r from-ba-blue-light via-white to-ba-orange bg-clip-text text-transparent mb-4">
                BA Consultoria
              </h3>
              <p className="text-muted-foreground font-inter mb-4 max-w-md">
                Transformamos empresas através da implementação inteligente de soluções de IA, 
                focando em produtividade e resultados reais.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-ba-blue-light transition-colors font-inter">
                  LinkedIn
                </a>
                <a href="#" className="text-muted-foreground hover:text-ba-blue-light transition-colors font-inter">
                  WhatsApp
                </a>
                <a href="#" className="text-muted-foreground hover:text-ba-blue-light transition-colors font-inter">
                  Email
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold font-poppins text-foreground mb-4">Serviços</h4>
              <ul className="space-y-2 font-inter">
                <li><a href="#" className="text-muted-foreground hover:text-ba-blue-light transition-colors">Automação IA</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-ba-blue-light transition-colors">Chatbots</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-ba-blue-light transition-colors">Análise Preditiva</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-ba-blue-light transition-colors">Consultoria</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold font-poppins text-foreground mb-4">Empresa</h4>
              <ul className="space-y-2 font-inter">
                <li><a href="#sobre" className="text-muted-foreground hover:text-ba-blue-light transition-colors">Sobre</a></li>
                <li><a href="#casos" className="text-muted-foreground hover:text-ba-blue-light transition-colors">Casos de Sucesso</a></li>
                <li><a href="#contato" className="text-muted-foreground hover:text-ba-blue-light transition-colors">Contato</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-ba-blue-light transition-colors">Privacidade</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-ba-blue-light/10 mt-8 pt-8 text-center">
            <p className="text-muted-foreground font-inter">
              © 2024 BA Consultoria. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;