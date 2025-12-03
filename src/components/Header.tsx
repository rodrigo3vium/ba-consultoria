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
    <header className="fixed top-6 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-between bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 shadow-glow">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img 
              src="/lovable-uploads/cc361376-bdd4-4e0e-a3f3-0abb48b729f8.png" 
              alt="BA Consultoria Logo" 
              className="h-8 w-auto"
            />
            <h1 className="text-xl font-bold font-poppins bg-gradient-primary bg-clip-text text-transparent hidden sm:block">
              BA Consultoria
            </h1>
          </Link>
          
          {/* Navigation - Centered pill */}
          <nav className="hidden lg:block">
            <div className="flex items-center space-x-1 bg-black/60 backdrop-blur-sm border border-white/10 rounded-full px-6 py-2">
              <Link to="/ba" className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-inter rounded-full hover:bg-white/5">
                BA
              </Link>
              <Link to="/cases" className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-inter rounded-full hover:bg-white/5">
                Cases
              </Link>
              <Link to="/servicos" className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-inter rounded-full hover:bg-white/5">
                Serviços
              </Link>
              <Link to="/blog" className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-inter rounded-full hover:bg-white/5">
                Blog
              </Link>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="relative h-9 w-9 rounded-full hover:bg-white/10">
                    <Avatar className="h-9 w-9">
                      <AvatarFallback className="bg-gradient-primary text-background">{getUserInitials()}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-black/90 backdrop-blur-xl border-white/10">
                  <DropdownMenuLabel className="text-foreground">Minha Conta</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-white/10" />
                  {isAdmin && (
                    <>
                      <DropdownMenuItem asChild className="text-muted-foreground focus:bg-white/10 focus:text-foreground cursor-pointer">
                        <Link to="/admin">
                          <Shield className="mr-2 h-4 w-4" />
                          Painel Admin
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator className="bg-white/10" />
                    </>
                  )}
                  <DropdownMenuItem 
                    onClick={handleLogout} 
                    className="text-muted-foreground focus:bg-white/10 focus:text-foreground cursor-pointer"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Sair
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/auth">
                <Button variant="ghost" size="sm" className="rounded-full hover:bg-white/10 text-muted-foreground hover:text-foreground">
                  <User className="mr-2 h-4 w-4" />
                  Entrar
                </Button>
              </Link>
            )}
            
            <Button 
              size="default"
              className="font-inter bg-gradient-primary hover:opacity-90 text-background rounded-full px-6 shadow-glow transition-all"
            >
              Fale Conosco
            </Button>
          </div>

        {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-muted-foreground hover:text-foreground p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mt-4 md:hidden bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
            <div className="px-4 pt-4 pb-4 space-y-2">
              <Link 
                to="/ba" 
                className="block px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors font-inter rounded-2xl"
                onClick={() => setIsMenuOpen(false)}
              >
                BA
              </Link>
              <Link 
                to="/cases" 
                className="block px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors font-inter rounded-2xl"
                onClick={() => setIsMenuOpen(false)}
              >
                Cases
              </Link>
              <Link 
                to="/servicos" 
                className="block px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors font-inter rounded-2xl"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </Link>
              <Link 
                to="/blog" 
                className="block px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors font-inter rounded-2xl"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              {user && isAdmin && (
                <Link 
                  to="/admin" 
                  className="block px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors font-inter rounded-2xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Painel Admin
                </Link>
              )}
              <div className="pt-2 space-y-2">
                {user ? (
                  <Button 
                    onClick={handleLogout}
                    variant="outline" 
                    className="w-full font-inter border-white/10 text-muted-foreground hover:bg-white/10 hover:text-foreground rounded-full"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Sair
                  </Button>
                ) : (
                  <Link to="/auth" className="block">
                    <Button 
                      variant="outline" 
                      className="w-full font-inter border-white/10 text-muted-foreground hover:bg-white/10 hover:text-foreground rounded-full"
                    >
                      <User className="mr-2 h-4 w-4" />
                      Entrar
                    </Button>
                  </Link>
                )}
                <Button 
                  className="w-full font-inter bg-gradient-primary hover:opacity-90 text-background rounded-full shadow-glow"
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
