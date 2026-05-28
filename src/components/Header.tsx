import { useState, useEffect } from 'react';
import { Menu, X, LogOut, Shield, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

const NAV_LINKS = [
  { to: '/ba',       label: 'BA',       idx: '01' },
  { to: '/cases',    label: 'Cases',    idx: '02' },
  { to: '/servicos', label: 'Serviços', idx: '03' },
  { to: '/blog',     label: 'Blog',     idx: '04' },
  { to: '/educacao', label: 'Educação', idx: '05' },
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
      <header className="fixed top-0 left-0 right-0 z-50 bg-pb-void/85 backdrop-blur-xl border-b border-pb-grid-strong">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" onClick={() => window.scrollTo(0, 0)}>
            <img
              src="/lovable-uploads/cc361376-bdd4-4e0e-a3f3-0abb48b729f8.png"
              alt="BA Consultoria"
              className="h-7 w-auto"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <span className="hidden sm:flex flex-col leading-none">
              <span className="font-display text-pb-ink text-lg tracking-wider uppercase">BA</span>
              <span className="font-mono text-[9px] text-pb-ink-muted tracking-mono-wide uppercase">Consultoria</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => window.scrollTo(0, 0)}
                className="group relative px-4 py-2 font-mono text-[11px] uppercase tracking-mono-wide text-pb-ink-soft hover:text-pb-ink transition-colors"
              >
                <span className="text-pb-ink-faint mr-2 group-hover:text-pb-cyan transition-colors">{link.idx}</span>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right cluster */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-2">
                {isAdmin && (
                  <Link
                    to="/admin"
                    className="flex items-center gap-2 px-3 py-2 font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-soft hover:text-pb-cyan transition-colors"
                  >
                    <Shield size={12} />
                    Admin
                  </Link>
                )}
                <button
                  onClick={signOut}
                  className="flex items-center gap-2 px-3 py-2 font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted hover:text-pb-red transition-colors"
                  aria-label="Sair"
                >
                  <LogOut size={12} />
                  Sair
                </button>
              </div>
            ) : (
              <Link
                to="/auth"
                className="flex items-center gap-2 px-3 py-2 font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted hover:text-pb-ink transition-colors"
              >
                <User size={12} />
                Entrar
              </Link>
            )}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Fale Conosco
              <span aria-hidden>→</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-pb-ink-soft hover:text-pb-cyan p-2 transition-colors"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-pb-void/95 backdrop-blur-xl md:hidden pt-[72px]">
          <div className="max-w-7xl mx-auto px-6 py-10 h-full overflow-y-auto">
            <div className="flex items-center gap-3 mb-10 font-mono text-[11px] uppercase tracking-mono-wide">
              <span className="text-pb-cyan">// MENU</span>
              <span className="h-px flex-1 bg-pb-grid-strong" />
            </div>
            <nav className="space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="flex items-baseline gap-4 py-4 border-b border-pb-grid-strong/40 group"
                  onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}
                >
                  <span className="font-mono text-[10px] text-pb-cyan tracking-mono-wide">{link.idx}</span>
                  <span className="font-display text-3xl uppercase text-pb-ink-soft group-hover:text-pb-ink transition-colors">
                    {link.label}
                  </span>
                </Link>
              ))}
              {user && isAdmin && (
                <Link
                  to="/admin"
                  className="flex items-baseline gap-4 py-4 border-b border-pb-grid-strong/40 group"
                  onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}
                >
                  <span className="font-mono text-[10px] text-pb-cyan tracking-mono-wide">06</span>
                  <span className="font-display text-3xl uppercase text-pb-ink-soft group-hover:text-pb-ink transition-colors">
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
                className="btn-primary w-full justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Fale Conosco
                <span aria-hidden>→</span>
              </a>
              {user ? (
                <button
                  onClick={() => { setIsMenuOpen(false); signOut(); }}
                  className="btn-ghost w-full justify-center"
                >
                  <LogOut size={12} />
                  Sair
                </button>
              ) : (
                <Link
                  to="/auth"
                  className="btn-ghost w-full justify-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User size={12} />
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
