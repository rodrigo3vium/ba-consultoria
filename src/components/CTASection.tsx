import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden" id="contato">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-40 h-40 bg-ba-orange rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-ba-blue-light rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            Pronto para Transformar Sua Empresa?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 font-inter leading-relaxed">
            Agende uma consultoria gratuita e descubra como a IA pode revolucionar seus processos e aumentar seus lucros.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="accent" size="lg" className="text-lg px-8 py-4 font-inter">
              Agendar Consultoria Gratuita
            </Button>
            <Button variant="outline-glow" size="lg" className="text-lg px-8 py-4 font-inter">
              Falar com Especialista
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-ba-orange text-2xl mb-2">📧</div>
              <h3 className="font-semibold font-poppins mb-1">Email</h3>
              <p className="text-muted-foreground font-inter">contato@baconsultoria.com</p>
            </div>
            <div className="text-center">
              <div className="text-ba-orange text-2xl mb-2">📱</div>
              <h3 className="font-semibold font-poppins mb-1">Telefone</h3>
              <p className="text-muted-foreground font-inter">(11) 9999-9999</p>
            </div>
            <div className="text-center">
              <div className="text-ba-orange text-2xl mb-2">💼</div>
              <h3 className="font-semibold font-poppins mb-1">LinkedIn</h3>
              <p className="text-muted-foreground font-inter">BA Consultoria</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;