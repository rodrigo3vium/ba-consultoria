-- Criar tabela de ratings de newsletter
CREATE TABLE public.newsletter_ratings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Vinculação
  subscriber_id UUID NOT NULL REFERENCES public.newsletter_subscribers(id) ON DELETE CASCADE,
  newsletter_edition TEXT NOT NULL,
  
  -- Rating
  rating INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
  
  -- Tracking
  anonymous_id UUID,
  ip_address INET,
  user_agent TEXT,
  
  -- UTM/Source
  utm_source TEXT DEFAULT 'newsletter',
  utm_medium TEXT DEFAULT 'email',
  utm_campaign TEXT,
  
  -- Timestamp
  rated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  
  -- Constraint: 1 voto por pessoa por edição
  UNIQUE(subscriber_id, newsletter_edition)
);

-- Índices para performance
CREATE INDEX idx_newsletter_ratings_subscriber ON public.newsletter_ratings(subscriber_id);
CREATE INDEX idx_newsletter_ratings_edition ON public.newsletter_ratings(newsletter_edition);
CREATE INDEX idx_newsletter_ratings_rating ON public.newsletter_ratings(rating);
CREATE INDEX idx_newsletter_ratings_date ON public.newsletter_ratings(rated_at DESC);

-- RLS
ALTER TABLE public.newsletter_ratings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can view all ratings"
  ON public.newsletter_ratings FOR SELECT
  USING (has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert ratings"
  ON public.newsletter_ratings FOR INSERT
  WITH CHECK (has_role(auth.uid(), 'admin'));

-- View para relatórios de performance
CREATE VIEW public.vw_newsletter_performance AS
SELECT 
  nr.newsletter_edition,
  COUNT(DISTINCT nr.subscriber_id) AS total_ratings,
  ROUND(AVG(nr.rating), 2) AS avg_rating,
  COUNT(CASE WHEN nr.rating = 5 THEN 1 END) AS rating_5_count,
  COUNT(CASE WHEN nr.rating = 4 THEN 1 END) AS rating_4_count,
  COUNT(CASE WHEN nr.rating = 3 THEN 1 END) AS rating_3_count,
  COUNT(CASE WHEN nr.rating = 2 THEN 1 END) AS rating_2_count,
  COUNT(CASE WHEN nr.rating = 1 THEN 1 END) AS rating_1_count,
  MIN(nr.rated_at) AS first_rating_at,
  MAX(nr.rated_at) AS last_rating_at
FROM public.newsletter_ratings nr
GROUP BY nr.newsletter_edition
ORDER BY first_rating_at DESC;