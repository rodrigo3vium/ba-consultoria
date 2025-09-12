import React from 'react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section className="py-20 bg-slate-900" id="sobre">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full border border-ba-orange text-ba-orange bg-ba-orange/10 text-sm font-medium mb-4">
            Sobre a BA Consultoria
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6 text-white">
            Especialistas em{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Transformação Digital
            </span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed font-inter max-w-4xl mx-auto">
            Somos uma consultoria especializada em implementar soluções de Inteligência Artificial 
            que transformam empresas, aumentam a produtividade e maximizam resultados.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold font-poppins mb-6 text-white">
              O Futuro da <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Inteligência Artificial</span> Empresarial
            </h3>
            <p className="text-lg text-gray-300 mb-6 font-inter leading-relaxed">
              Em um mundo impulsionado por dados, eficiência e automação, acreditamos que a IA deve 
              ser mais do que uma ferramenta - deve ser um parceiro inteligente que trabalha ao seu lado.
            </p>
            <p className="text-lg text-gray-300 mb-8 font-inter leading-relaxed">
              Construída com aprendizado de máquina avançado e inteligência adaptativa, nossa IA 
              evolui continuamente para atender às necessidades únicas de cada empresa e setor.
            </p>
            <Button 
              variant="default" 
              size="lg" 
              className="font-inter bg-ba-orange hover:bg-ba-orange/90 text-white font-semibold rounded-xl"
              onClick={() => window.open('http://wa.me/5511999718595', '_blank')}
            >
              Saiba Mais Sobre Nós
            </Button>
          </div>
          
          <div className="relative">
            <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-ba-orange font-poppins mb-2">100+</div>
                  <div className="text-sm text-gray-400 font-inter">Empresas Atendidas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-ba-orange font-poppins mb-2">300%</div>
                  <div className="text-sm text-gray-400 font-inter">Aumento Médio de Produtividade</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-ba-orange font-poppins mb-2">50M+</div>
                  <div className="text-sm text-gray-400 font-inter">Processos Automatizados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-ba-orange font-poppins mb-2">24/7</div>
                  <div className="text-sm text-gray-400 font-inter">Suporte Técnico</div>
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