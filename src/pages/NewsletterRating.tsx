import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { tracker } from '@/lib/tracking';
import { Button } from '@/components/ui/button';
import { Heart, Meh, Frown, Smile, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20">
        <div className="animate-pulse text-muted-foreground">Carregando...</div>
      </div>
    );
  }

  if (!subscriberId || !edition) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 p-4">
        <div className="max-w-md text-center">
          <h1 className="text-2xl font-bold text-destructive mb-4">Link inválido</h1>
          <p className="text-muted-foreground">
            O link de avaliação está incompleto ou inválido.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 p-4">
      <div className="max-w-2xl w-full bg-card border shadow-lg rounded-lg p-8 md:p-12 animate-fade-in">
        {!submitted ? (
          <>
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-3">
                Como você avalia esta newsletter?
              </h1>
              {subscriber && (
                <p className="text-muted-foreground">
                  Olá, {subscriber.nome}! Sua opinião é muito importante para nós.
                </p>
              )}
              <p className="text-sm text-muted-foreground mt-2">
                Edição: <span className="font-semibold">{edition}</span>
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
                      rounded-xl border-2 transition-all duration-300
                      hover:scale-110 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed
                      ${isSelected 
                        ? 'border-primary bg-primary/10 scale-105' 
                        : 'border-border hover:border-primary/50'
                      }
                    `}
                  >
                    <Icon 
                      className={`
                        w-8 h-8 md:w-12 md:h-12 mb-2 transition-colors
                        ${isSelected ? 'text-primary' : option.color}
                        group-hover:${option.color}
                      `}
                    />
                    <span className="text-xs md:text-sm font-medium text-center">
                      {option.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {submitting && (
              <div className="text-center text-muted-foreground animate-pulse">
                Enviando sua avaliação...
              </div>
            )}
          </>
        ) : (
          <div className="text-center animate-fade-in">
            <div className="inline-block p-4 bg-green-500/10 rounded-full mb-6">
              <Sparkles className="w-16 h-16 text-green-500" />
            </div>
            
            <h2 className="text-3xl font-bold mb-4">
              Obrigado pela sua avaliação!
            </h2>
            
            <p className="text-muted-foreground mb-8">
              Sua opinião nos ajuda a melhorar cada vez mais o conteúdo das newsletters.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="default" 
                onClick={() => window.location.href = '/blog'}
              >
                Ver últimos artigos
              </Button>
              <Button 
                variant="outline" 
                onClick={() => window.location.href = '/'}
              >
                Voltar para home
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsletterRating;
