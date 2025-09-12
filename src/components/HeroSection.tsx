import React from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/ai-hero-bg.jpg';

const HeroSection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-40 h-40 bg-ba-orange rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-ba-blue-light rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="mb-4">
            <span className="inline-block px-4 py-2 rounded-full border border-ba-orange text-ba-orange text-sm font-medium">
              Consultoria especializada em IA
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6 leading-tight">
            Transforme Sua Empresa com{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Inteligência Artificial
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 font-inter leading-relaxed">
            Implementamos soluções de IA personalizadas para aumentar a produtividade 
            e maximizar os lucros da sua empresa
          </p>
          <div className="w-16 h-1 bg-ba-orange mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto font-inter leading-relaxed mb-8">
            Sem contratar mais gente ou trabalhar mais horas. Um caminho claro e prático 
            para aplicar IA no seu negócio, mesmo que você não saiba por onde começar.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              variant="accent" 
              size="lg" 
              className="text-lg px-8 py-4 font-inter"
              onClick={() => window.open('http://wa.me/5511999718595', '_blank')}
            >
              Começar Agora
            </Button>
            <Button 
              variant="outline-glow" 
              size="lg" 
              className="text-lg px-8 py-4 font-inter"
            >
              Ver Soluções
            </Button>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-3 h-3 bg-ba-orange rounded-full"></div>
              ))}
            </div>
            <p className="text-muted-foreground font-inter text-sm">
              Confiado por mais de 100 empresas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;