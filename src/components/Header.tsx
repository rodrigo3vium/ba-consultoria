import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center space-x-3">
              <img 
                src="/lovable-uploads/cc361376-bdd4-4e0e-a3f3-0abb48b729f8.png" 
                alt="BA Consultoria Logo" 
                className="h-10 w-auto"
              />
              <h1 className="text-2xl font-bold font-poppins bg-gradient-primary bg-clip-text text-transparent">
                BA Consultoria
              </h1>
            </div>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#sobre" className="text-foreground hover:text-primary transition-colors font-inter">
                Sobre
              </a>
              <a href="#solucoes" className="text-foreground hover:text-primary transition-colors font-inter">
                Soluções
              </a>
              <a href="#casos" className="text-foreground hover:text-primary transition-colors font-inter">
                Casos de Uso
              </a>
              <a href="#contato" className="text-foreground hover:text-primary transition-colors font-inter">
                Contato
              </a>
            </div>
          </nav>

          <div className="hidden md:block">
            <Button variant="hero" size="lg" className="font-inter">
              Fale Conosco
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;