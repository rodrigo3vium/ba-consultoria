import React from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/ai-hero-bg.jpg';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-ba-blue-light rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-ba-orange rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-ba-blue-medium rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold font-poppins mb-6 leading-tight">
            Transforme Sua Empresa com{' '}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Inteligência Artificial
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-inter leading-relaxed">
            Implementamos soluções de IA personalizadas para aumentar a produtividade 
            e maximizar os lucros da sua empresa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4 font-inter">
              Começar Agora
            </Button>
            <Button variant="outline-glow" size="lg" className="text-lg px-8 py-4 font-inter">
              Ver Soluções
            </Button>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-5 h-5 bg-ba-orange rounded-full"></div>
              ))}
            </div>
            <p className="text-muted-foreground font-inter">
              Confiado por mais de 100 empresas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;