import React from 'react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section className="py-20 bg-background" id="sobre">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
            Quem somos
          </h2>
          <div className="w-16 h-1 bg-ba-orange mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground font-inter leading-relaxed">
            Somos especialistas em transformação de negócios com IA, com experiência internacional 
            e foco em resultados práticos para pequenas e médias empresas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold font-poppins mb-6">
              O Futuro da <span className="bg-gradient-primary bg-clip-text text-transparent">Inteligência Artificial</span> Empresarial
            </h3>
            <p className="text-lg text-muted-foreground mb-6 font-inter leading-relaxed">
              Em um mundo impulsionado por dados, eficiência e automação, acreditamos que a IA deve 
              ser mais do que uma ferramenta - deve ser um parceiro inteligente que trabalha ao seu lado.
            </p>
            <p className="text-lg text-muted-foreground mb-8 font-inter leading-relaxed">
              Construída com aprendizado de máquina avançado e inteligência adaptativa, nossa IA 
              evolui continuamente para atender às necessidades únicas de cada empresa e setor.
            </p>
            <Button 
              variant="accent" 
              size="lg" 
              className="font-inter"
              onClick={() => window.open('http://wa.me/5511999718595', '_blank')}
            >
              Saiba Mais Sobre Nós
            </Button>
          </div>
          
          <div className="relative">
            <div className="bg-card-premium/80 backdrop-blur-sm border border-card-premium-border rounded-2xl p-8 shadow-premium">
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