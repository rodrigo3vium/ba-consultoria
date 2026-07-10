import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { tracker, getPersistedUtm } from '@/lib/tracking';
import { Accent, SAAS_BTN_PRIMARY, SAAS_INPUT, SAAS_LABEL } from '@/components/saas/ui';

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

  const navCol = 'text-[13.5px] text-saas-muted hover:text-saas-ink transition-colors';

  return (
    <footer className="relative border-t border-white/[0.06] bg-saas-void">
      {/* Newsletter */}
      <section className="border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.10] bg-white/[0.03] px-3.5 py-1.5 text-[11px] font-mono uppercase tracking-[0.14em] text-saas-muted mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet" />
                Inteligência semanal
              </span>
              <h2 className="font-extrabold text-saas-ink text-[clamp(30px,4.5vw,52px)] leading-[1.05] tracking-tight">
                Fique no <Accent>comando</Accent>.
              </h2>
              <p className="mt-5 text-saas-body text-base md:text-lg max-w-xl leading-relaxed">
                Direção, não dicas. Doutrina, não tutorial. Receba o que opera por dentro da BA — antes de virar conteúdo público.
              </p>
            </div>
            <div className="lg:col-span-5">
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-3">
                <label htmlFor="footer-email" className={SAAS_LABEL}>Seu melhor e-mail</label>
                <input
                  id="footer-email"
                  type="email"
                  placeholder="nome@empresa.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  className={SAAS_INPUT}
                  required
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className={SAAS_BTN_PRIMARY + ' w-full disabled:opacity-50 disabled:cursor-not-allowed'}
                >
                  {isLoading ? 'Enviando...' : 'Inscrever'}
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
              <div className="flex items-center gap-2.5 mb-5">
                <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-saas-cyan to-saas-violet" />
                <img
                  src="/lovable-uploads/cc361376-bdd4-4e0e-a3f3-0abb48b729f8.png"
                  alt="BA Consultoria"
                  className="h-7 w-auto"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </div>
              <p className="text-saas-body text-sm leading-relaxed max-w-md">
                A BA opera na fronteira entre estratégia e execução. Implementamos IA com método, não com hype.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/[0.14] px-4 py-2 text-[12.5px] font-medium text-saas-body hover:border-saas-cyan hover:text-saas-cyan transition-colors"
                >
                  WhatsApp ↗
                </a>
                <a
                  href="https://www.linkedin.com/company/ba-consultoria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/[0.14] px-4 py-2 text-[12.5px] font-medium text-saas-body hover:border-saas-cyan hover:text-saas-cyan transition-colors"
                >
                  LinkedIn ↗
                </a>
                <a
                  href="mailto:contato@benitesalbuquerque.com.br"
                  className="rounded-full border border-white/[0.14] px-4 py-2 text-[12.5px] font-medium text-saas-body hover:border-saas-cyan hover:text-saas-cyan transition-colors"
                >
                  Email ↗
                </a>
              </div>
            </div>

            {/* Operação */}
            <div className="md:col-span-3">
              <h4 className="text-[11px] font-mono uppercase tracking-[0.14em] text-saas-cyan mb-5">
                Operação
              </h4>
              <ul className="space-y-3">
                <li><Link to="/consultoria" onClick={() => window.scrollTo(0,0)} className={navCol}>Consultoria</Link></li>
                <li><Link to="/servicos" onClick={() => window.scrollTo(0,0)} className={navCol}>Serviços</Link></li>
                <li><Link to="/tecnologia" onClick={() => window.scrollTo(0,0)} className={navCol}>Tecnologia</Link></li>
                <li><Link to="/educacao" onClick={() => window.scrollTo(0,0)} className={navCol}>Educação</Link></li>
              </ul>
            </div>

            {/* Sinal */}
            <div className="md:col-span-4">
              <h4 className="text-[11px] font-mono uppercase tracking-[0.14em] text-saas-cyan mb-5">
                Sinal
              </h4>
              <ul className="space-y-3">
                <li><Link to="/cases" onClick={() => window.scrollTo(0,0)} className={navCol}>Cases</Link></li>
                <li><Link to="/blog" onClick={() => window.scrollTo(0,0)} className={navCol}>Blog</Link></li>
                <li><Link to="/educacao/imersao-claude" onClick={() => window.scrollTo(0,0)} className={navCol}>Imersão Claude</Link></li>
                <li><Link to="/educacao/metodo-stark" onClick={() => window.scrollTo(0,0)} className={navCol}>Método Stark</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[12px] text-saas-faint">
          <div className="flex items-center gap-2.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r from-saas-cyan to-saas-violet" aria-hidden />
            <span>© {CURRENT_YEAR} BA Consultoria · CNPJ 38.142.345/0001-04</span>
          </div>
          <div className="flex gap-5 font-mono uppercase tracking-[0.1em] text-[10.5px]">
            <span>Status: operacional</span>
            <span>Build: {CURRENT_YEAR}.{String(new Date().getMonth() + 1).padStart(2, '0')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
