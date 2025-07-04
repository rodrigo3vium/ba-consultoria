import React from 'react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section className="py-20 bg-card/30" id="sobre">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
              O Futuro da <span className="bg-gradient-accent bg-clip-text text-transparent">Inteligência Artificial</span> Empresarial
            </h2>
            <p className="text-lg text-muted-foreground mb-6 font-inter leading-relaxed">
              Em um mundo impulsionado por dados, eficiência e automação, acreditamos que a IA deve 
              ser mais do que uma ferramenta - deve ser um parceiro inteligente que trabalha ao seu lado.
            </p>
            <p className="text-lg text-muted-foreground mb-8 font-inter leading-relaxed">
              Construída com aprendizado de máquina avançado e inteligência adaptativa, nossa IA 
              evolui continuamente para atender às necessidades únicas de cada empresa e setor.
            </p>
            <Button variant="hero" size="lg" className="font-inter">
              Saiba Mais Sobre Nós
            </Button>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-hero rounded-2xl p-8 shadow-card-custom">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-ba-orange font-poppins mb-2">100+</div>
                  <div className="text-sm text-muted-foreground font-inter">Empresas Atendidas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-ba-orange font-poppins mb-2">300%</div>
                  <div className="text-sm text-muted-foreground font-inter">Aumento Médio de Produtividade</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-ba-orange font-poppins mb-2">50M+</div>
                  <div className="text-sm text-muted-foreground font-inter">Processos Automatizados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-ba-orange font-poppins mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground font-inter">Suporte Técnico</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;