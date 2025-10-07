import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-sm border-b border-slate-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <img 
                src="/lovable-uploads/cc361376-bdd4-4e0e-a3f3-0abb48b729f8.png" 
                alt="BA Consultoria Logo" 
                className="h-10 w-auto"
              />
              <h1 className="text-2xl font-bold font-poppins bg-gradient-primary bg-clip-text text-transparent">
                BA Consultoria
              </h1>
            </Link>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#sobre" className="text-gray-300 hover:text-blue-400 transition-colors font-inter">
                Sobre
              </a>
              <a href="#solucoes" className="text-gray-300 hover:text-blue-400 transition-colors font-inter">
                Soluções
              </a>
              <a href="#casos" className="text-gray-300 hover:text-blue-400 transition-colors font-inter">
                Casos de Uso
              </a>
              <Link to="/blog" className="text-gray-300 hover:text-blue-400 transition-colors font-inter">
                Blog
              </Link>
            </div>
          </nav>

          <div className="hidden md:block">
            <Button 
              variant="default" 
              size="lg" 
              className="font-inter bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white"
            >
              Fale Conosco
            </Button>
          </div>

        {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-blue-400 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a 
                href="#sobre" 
                className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors font-inter"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </a>
              <a 
                href="#solucoes" 
                className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors font-inter"
                onClick={() => setIsMenuOpen(false)}
              >
                Soluções
              </a>
              <a 
                href="#casos" 
                className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors font-inter"
                onClick={() => setIsMenuOpen(false)}
              >
                Casos de Uso
              </a>
              <Link 
                to="/blog" 
                className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors font-inter"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <div className="px-3 py-2">
                <Button 
                  variant="default" 
                  className="w-full font-inter bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white"
                >
                  Fale Conosco
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;