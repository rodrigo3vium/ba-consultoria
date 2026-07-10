import { useState, useEffect } from 'react';
import { Menu, X, LogOut, Shield, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { SAAS_BTN_PRIMARY } from '@/components/saas/ui';

const NAV_LINKS = [
  { to: '/ba',       label: 'BA' },
  { to: '/cases',    label: 'Cases' },
  { to: '/servicos', label: 'Serviços' },
  { to: '/blog',     label: 'Blog' },
  { to: '/educacao', label: 'Educação' },
];

const WHATSAPP_URL = 'https://wa.me/5511999718595';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAdmin, signOut } = useAuth();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-saas-void/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[64px] flex items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group" onClick={() => window.scrollTo(0, 0)}>
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-saas-cyan to-saas-violet" />
            <img
              src="/lovable-uploads/cc361376-bdd4-4e0e-a3f3-0abb48b729f8.png"
              alt="BA Consultoria"
              className="h-6 w-auto"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => window.scrollTo(0, 0)}
                className="px-4 py-2 text-[13.5px] font-medium text-saas-muted hover:text-saas-ink transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right cluster */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-1">
                {isAdmin && (
                  <Link
                    to="/admin"
                    className="flex items-center gap-1.5 px-3 py-2 text-[12.5px] font-medium text-saas-muted hover:text-saas-cyan transition-colors"
                  >
                    <Shield size={13} />
                    Admin
                  </Link>
                )}
                <button
                  onClick={signOut}
                  className="flex items-center gap-1.5 px-3 py-2 text-[12.5px] font-medium text-saas-faint hover:text-saas-ink transition-colors"
                  aria-label="Sair"
                >
                  <LogOut size={13} />
                  Sair
                </button>
              </div>
            ) : (
              <Link
                to="/auth"
                className="flex items-center gap-1.5 px-3 py-2 text-[12.5px] font-medium text-saas-faint hover:text-saas-ink transition-colors"
              >
                <User size={13} />
                Entrar
              </Link>
            )}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={SAAS_BTN_PRIMARY + ' !px-5 !py-2.5 !text-[13px]'}
            >
              Fale conosco
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-saas-muted hover:text-saas-ink p-2 transition-colors"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-saas-void/95 backdrop-blur-xl md:hidden pt-[64px]">
          <div className="max-w-7xl mx-auto px-6 py-10 h-full overflow-y-auto">
            <nav className="space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="flex items-center py-4 border-b border-white/[0.06] group"
                  onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}
                >
                  <span className="text-2xl font-bold text-saas-body group-hover:text-saas-ink transition-colors">
                    {link.label}
                  </span>
                </Link>
              ))}
              {user && isAdmin && (
                <Link
                  to="/admin"
                  className="flex items-center py-4 border-b border-white/[0.06] group"
                  onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}
                >
                  <span className="text-2xl font-bold text-saas-body group-hover:text-saas-ink transition-colors">
                    Admin
                  </span>
                </Link>
              )}
            </nav>
            <div className="mt-10 space-y-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={SAAS_BTN_PRIMARY + ' w-full'}
                onClick={() => setIsMenuOpen(false)}
              >
                Fale conosco
              </a>
              {user ? (
                <button
                  onClick={() => { setIsMenuOpen(false); signOut(); }}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-saas-body border border-white/[0.14] hover:border-white/[0.28] hover:text-saas-ink transition-colors"
                >
                  <LogOut size={14} />
                  Sair
                </button>
              ) : (
                <Link
                  to="/auth"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-saas-body border border-white/[0.14] hover:border-white/[0.28] hover:text-saas-ink transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User size={14} />
                  Entrar
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
