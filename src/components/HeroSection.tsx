import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-40 h-40 bg-ba-orange rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="mb-8">
            <span className="inline-block px-6 py-2 rounded-full border border-ba-orange text-ba-orange bg-ba-orange/10 text-lg font-semibold">
              Consultoria especializada em IA
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6 leading-tight text-white">
            Transforme Sua Empresa com{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Inteligência Artificial
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6 font-inter leading-relaxed">
            Implementamos soluções de IA personalizadas para aumentar a produtividade 
            e maximizar os lucros da sua empresa
          </p>
          <div className="w-16 h-1 bg-ba-orange mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto font-inter leading-relaxed mb-8">
            Sem contratar mais gente ou trabalhar mais horas. Um caminho claro e prático 
            para aplicar IA no seu negócio, mesmo que você não saiba por onde começar.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              variant="default" 
              size="lg" 
              className="text-lg px-8 py-4 font-inter bg-ba-orange hover:bg-ba-orange/90 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.open('http://wa.me/5511999718595', '_blank')}
            >
              Começar Agora
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 font-inter border-gray-400 text-gray-300 hover:bg-gray-700 hover:text-white rounded-xl"
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
            <p className="text-gray-400 font-inter text-sm">
              Confiado por mais de 100 empresas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;