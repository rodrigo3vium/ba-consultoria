import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { tracker, getPersistedUtm } from '@/lib/tracking';

const WHATSAPP_URL = 'https://wa.me/5511999718595';
const CURRENT_YEAR = new Date().getFullYear();

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      toast({
        title: 'Email inválido',
        description: 'Por favor, insira um email válido.',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);

    try {
      await tracker.identify(email, '', '');
      const anonymousId = tracker.getAnonymousId();
      const utm = getPersistedUtm();

      await supabase.functions.invoke('submit-contact', {
        body: {
          email,
          source: 'newsletter-footer',
          utm: {
            source: utm.utm_source ?? null,
            medium: utm.utm_medium ?? null,
            campaign: utm.utm_campaign ?? null,
          },
        },
      });

      const { error: subscriberError } = await supabase
        .from('newsletter_subscribers')
        .insert({
          email,
          nome: email.split('@')[0],
          anonymous_id: anonymousId,
          subscription_source: 'footer',
          utm_source: utm.utm_source ?? null,
          utm_medium: utm.utm_medium ?? null,
          utm_campaign: utm.utm_campaign ?? null,
          referrer: document.referrer || null,
          status: 'active',
        });

      if (subscriberError && subscriberError.code !== '23505') {
        throw subscriberError;
      }

      await tracker.track('newsletter_signup_footer', {
        email,
        source: 'footer',
        page: window.location.pathname,
      });

      const { error: acError } = await supabase.functions.invoke('sync-activecampaign', {
        body: { email, source: 'Footer Newsletter' },
      });
      if (acError) console.error('ActiveCampaign sync error:', acError);

      toast({
        title: 'Inscrição confirmada.',
        description: 'Você está no comando.',
      });
      setEmail('');
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      toast({
        title: 'Falha na inscrição',
        description: 'Não foi possível completar. Tente novamente.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="relative border-t border-pb-grid-strong bg-pb-void">
      {/* Newsletter */}
      <section className="border-b border-pb-grid-strong">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6 font-mono text-[11px] uppercase tracking-mono-wide">
                <span className="text-pb-cyan">// PROTOCOLO 99</span>
                <span className="h-px w-12 bg-pb-grid-strong" />
                <span className="text-pb-ink-muted">Inteligência semanal</span>
              </div>
              <h2 className="font-display uppercase text-pb-ink text-[clamp(36px,5vw,72px)] leading-[0.9]">
                Fique no comando<span className="text-pb-red">.</span>
              </h2>
              <p className="mt-5 font-body text-pb-ink-soft text-base md:text-lg max-w-xl leading-relaxed">
                Direção, não dicas. Doutrina, não tutorial. Receba o que opera por dentro da BA — antes de virar conteúdo público.
              </p>
            </div>
            <div className="lg:col-span-5">
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-3">
                <label htmlFor="footer-email" className="pb-label">Email de comando</label>
                <input
                  id="footer-email"
                  type="email"
                  placeholder="nome@empresa.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  className="pb-input"
                  required
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Enviando...' : 'Inscrever'}
                  <span aria-hidden>→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Sitemap */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-12 gap-10">
            {/* Brand */}
            <div className="col-span-2 md:col-span-5">
              <div className="flex items-center gap-3 mb-5">
                <img
                  src="/lovable-uploads/cc361376-bdd4-4e0e-a3f3-0abb48b729f8.png"
                  alt="BA Consultoria"
                  className="h-8 w-auto"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
                <div className="flex flex-col leading-none">
                  <span className="font-display text-pb-ink text-xl uppercase tracking-wider">BA Consultoria</span>
                  <span className="font-mono text-[10px] text-pb-ink-muted tracking-mono-wide uppercase mt-1">// IA aplicada a negócios</span>
                </div>
              </div>
              <p className="font-body text-pb-ink-soft text-sm leading-relaxed max-w-md">
                A BA opera na fronteira entre estratégia e execução. Implementamos IA com método, não com hype.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pb-tag cyan hover:bg-pb-cyan hover:text-pb-void-deep transition-colors"
                >
                  WhatsApp ↗
                </a>
                <a
                  href="https://www.linkedin.com/company/ba-consultoria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pb-tag hover:border-pb-cyan-dim hover:text-pb-cyan transition-colors"
                >
                  LinkedIn ↗
                </a>
                <a
                  href="mailto:contato@benitesalbuquerque.com.br"
                  className="pb-tag hover:border-pb-cyan-dim hover:text-pb-cyan transition-colors"
                >
                  Email ↗
                </a>
              </div>
            </div>

            {/* Operação */}
            <div className="md:col-span-3">
              <h4 className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-5">
                // Operação
              </h4>
              <ul className="space-y-3 font-mono text-[12px] uppercase tracking-mono-wide">
                <li><Link to="/consultoria" onClick={() => window.scrollTo(0,0)} className="text-pb-ink-soft hover:text-pb-ink transition-colors">Consultoria</Link></li>
                <li><Link to="/servicos" onClick={() => window.scrollTo(0,0)} className="text-pb-ink-soft hover:text-pb-ink transition-colors">Serviços</Link></li>
                <li><Link to="/tecnologia" onClick={() => window.scrollTo(0,0)} className="text-pb-ink-soft hover:text-pb-ink transition-colors">Tecnologia</Link></li>
                <li><Link to="/educacao" onClick={() => window.scrollTo(0,0)} className="text-pb-ink-soft hover:text-pb-ink transition-colors">Educação</Link></li>
              </ul>
            </div>

            {/* Sinal */}
            <div className="md:col-span-4">
              <h4 className="font-mono text-[10px] uppercase tracking-mono-wide text-pb-cyan mb-5">
                // Sinal
              </h4>
              <ul className="space-y-3 font-mono text-[12px] uppercase tracking-mono-wide">
                <li><Link to="/cases" onClick={() => window.scrollTo(0,0)} className="text-pb-ink-soft hover:text-pb-ink transition-colors">Cases</Link></li>
                <li><Link to="/blog" onClick={() => window.scrollTo(0,0)} className="text-pb-ink-soft hover:text-pb-ink transition-colors">Blog</Link></li>
                <li><Link to="/educacao/imersao-claude" onClick={() => window.scrollTo(0,0)} className="text-pb-ink-soft hover:text-pb-ink transition-colors">Imersão Claude</Link></li>
                <li><Link to="/educacao/metodo-stark" onClick={() => window.scrollTo(0,0)} className="text-pb-ink-soft hover:text-pb-ink transition-colors">Método Stark</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom bar */}
      <div className="border-t border-pb-grid-strong">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-mono-wide text-pb-ink-muted">
          <div className="flex items-center gap-3">
            <span className="inline-block w-1.5 h-1.5 bg-pb-cyan animate-pulse-cyan" aria-hidden style={{ boxShadow: '0 0 8px hsl(var(--accent-cyan))' }} />
            <span>© {CURRENT_YEAR} BA Consultoria · CNPJ 38.142.345/0001-04</span>
          </div>
          <div className="flex gap-5">
            <span>STATUS: OPERACIONAL</span>
            <span>BUILD: {CURRENT_YEAR}.{String(new Date().getMonth() + 1).padStart(2, '0')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
