import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { tracker } from '@/lib/tracking';
import { Heart, Meh, Frown, Smile, Sparkles } from 'lucide-react';
import { toast } from 'sonner';
import { SAAS_CARD, SAAS_BTN_PRIMARY, SAAS_BTN_GHOST } from '@/components/saas/ui';

const NewsletterRating = () => {
  const [searchParams] = useSearchParams();
  const subscriberId = searchParams.get('sid');
  const edition = searchParams.get('e');

  const [subscriber, setSubscriber] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [rating, setRating] = useState<number | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const loadSubscriber = async () => {
      if (!subscriberId) {
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('newsletter_subscribers')
          .select('*')
          .eq('id', subscriberId)
          .maybeSingle();

        if (error) throw error;
        setSubscriber(data);
      } catch (error) {
        console.error('Error loading subscriber:', error);
      } finally {
        setLoading(false);
      }
    };

    loadSubscriber();
    tracker.page('Newsletter Rating');
  }, [subscriberId]);

  const handleRating = async (selectedRating: number) => {
    if (!subscriberId || !edition) {
      toast.error('Informações inválidas');
      return;
    }

    setSubmitting(true);
    setRating(selectedRating);

    try {
      // Chamar edge function
      const { error } = await supabase.functions.invoke('track-newsletter-rating', {
        body: {
          subscriber_id: subscriberId,
          rating: selectedRating,
          edition: edition,
          anonymous_id: tracker.getAnonymousId(),
        }
      });

      if (error) throw error;

      // Track evento
      await tracker.track('newsletter_rating_submitted', {
        rating: selectedRating,
        edition: edition,
        subscriber_id: subscriberId,
      });

      setSubmitted(true);
      toast.success('Obrigado pela sua avaliação!');
    } catch (error) {
      console.error('Error submitting rating:', error);
      toast.error('Erro ao enviar avaliação. Tente novamente.');
      setRating(null);
    } finally {
      setSubmitting(false);
    }
  };

  const ratingOptions = [
    { value: 1, icon: Frown, label: 'Muito ruim', color: 'text-red-500' },
    { value: 2, icon: Meh, label: 'Ruim', color: 'text-orange-500' },
    { value: 3, icon: Smile, label: 'Regular', color: 'text-yellow-500' },
    { value: 4, icon: Heart, label: 'Bom', color: 'text-blue-500' },
    { value: 5, icon: Sparkles, label: 'Excelente', color: 'text-green-500' },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-saas-void text-saas-body">
        <div className="animate-pulse text-saas-muted">Carregando...</div>
      </div>
    );
  }

  if (!subscriberId || !edition) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-saas-void text-saas-body p-4">
        <div className="max-w-md text-center">
          <h1 className="text-2xl font-extrabold tracking-tight text-saas-ink mb-4">Link inválido</h1>
          <p className="text-saas-muted">
            O link de avaliação está incompleto ou inválido.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-saas-void text-saas-body p-4">
      {/* Glows radiais de fundo (assinatura SaaS) */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full bg-saas-violet/20 blur-[110px]" />
      <div className="pointer-events-none absolute -bottom-24 right-0 w-[520px] h-[420px] rounded-full bg-saas-cyan/15 blur-[110px]" />

      <div className={`relative max-w-2xl w-full ${SAAS_CARD} shadow-saas-card p-8 md:p-12 animate-fade-in`}>
        {!submitted ? (
          <>
            <div className="text-center mb-8">
              <h1 className="font-extrabold text-saas-ink text-[clamp(25px,3.5vw,42px)] leading-[1.1] tracking-tight mb-3">
                Como você avalia esta newsletter?
              </h1>
              {subscriber && (
                <p className="text-saas-body">
                  Olá, {subscriber.nome}! Sua opinião é muito importante para nós.
                </p>
              )}
              <p className="text-sm text-saas-faint mt-2">
                Edição: <span className="font-semibold text-saas-ink">{edition}</span>
              </p>
            </div>

            <div className="grid grid-cols-5 gap-3 md:gap-4 mb-8">
              {ratingOptions.map((option) => {
                const Icon = option.icon;
                const isSelected = rating === option.value;

                return (
                  <button
                    key={option.value}
                    onClick={() => handleRating(option.value)}
                    disabled={submitting}
                    className={`
                      group relative flex flex-col items-center justify-center p-4 md:p-6
                      rounded-2xl border transition-all duration-300
                      hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed
                      ${isSelected
                        ? 'border-saas-violet bg-saas-violet/10 scale-105'
                        : 'border-white/[0.09] hover:border-white/[0.20]'
                      }
                    `}
                  >
                    <Icon
                      className={`
                        w-8 h-8 md:w-12 md:h-12 mb-2 transition-colors
                        ${isSelected ? 'text-saas-ink' : option.color}
                      `}
                    />
                    <span className="text-xs md:text-sm font-medium text-center text-saas-body">
                      {option.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {submitting && (
              <div className="text-center text-saas-muted animate-pulse">
                Enviando sua avaliação...
              </div>
            )}
          </>
        ) : (
          <div className="text-center animate-fade-in">
            <div className="inline-block p-4 bg-saas-green/10 rounded-full mb-6">
              <Sparkles className="w-16 h-16 text-saas-green" />
            </div>

            <h2 className="font-extrabold text-saas-ink text-[clamp(24px,3vw,36px)] tracking-tight mb-4">
              Obrigado pela sua avaliação!
            </h2>

            <p className="text-saas-body mb-8">
              Sua opinião nos ajuda a melhorar cada vez mais o conteúdo das newsletters.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className={SAAS_BTN_PRIMARY}
                onClick={() => window.location.href = '/blog'}
              >
                Ver últimos artigos
              </button>
              <button
                className={SAAS_BTN_GHOST}
                onClick={() => window.location.href = '/'}
              >
                Voltar para home
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsletterRating;
