-- Corrigir security definer na view vw_newsletter_performance
DROP VIEW IF EXISTS public.vw_newsletter_performance;

CREATE VIEW public.vw_newsletter_performance 
WITH (security_invoker=true)
AS
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