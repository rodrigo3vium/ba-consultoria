import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, User, LogOut, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Avatar, AvatarFallback } from './ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAdmin, signOut } = useAuth();

  const handleLogout = async () => {
    await signOut();
  };

  const getUserInitials = () => {
    if (!user?.email) return 'U';
    return user.email.charAt(0).toUpperCase();
  };

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

          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="relative h-9 w-9 rounded-full">
                    <Avatar className="h-9 w-9">
                      <AvatarFallback className="bg-blue-500 text-white">{getUserInitials()}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-slate-800 border-slate-700">
                  <DropdownMenuLabel className="text-slate-200">Minha Conta</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-slate-700" />
                  {isAdmin && (
                    <>
                      <DropdownMenuItem asChild className="text-slate-300 focus:bg-slate-700 focus:text-white cursor-pointer">
                        <Link to="/admin">
                          <Shield className="mr-2 h-4 w-4" />
                          Painel Admin
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator className="bg-slate-700" />
                    </>
                  )}
                  <DropdownMenuItem 
                    onClick={handleLogout} 
                    className="text-slate-300 focus:bg-slate-700 focus:text-white cursor-pointer"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Sair
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/auth">
                <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                  <User className="mr-2 h-4 w-4" />
                  Entrar
                </Button>
              </Link>
            )}
            
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
              {user && isAdmin && (
                <Link 
                  to="/admin" 
                  className="block px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors font-inter"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Painel Admin
                </Link>
              )}
              <div className="px-3 py-2">
                {user ? (
                  <Button 
                    onClick={handleLogout}
                    variant="outline" 
                    className="w-full font-inter border-slate-600 text-slate-300 hover:bg-slate-700"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Sair
                  </Button>
                ) : (
                  <Link to="/auth">
                    <Button 
                      variant="outline" 
                      className="w-full font-inter border-slate-600 text-slate-300 hover:bg-slate-700"
                    >
                      <User className="mr-2 h-4 w-4" />
                      Entrar
                    </Button>
                  </Link>
                )}
              </div>
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
