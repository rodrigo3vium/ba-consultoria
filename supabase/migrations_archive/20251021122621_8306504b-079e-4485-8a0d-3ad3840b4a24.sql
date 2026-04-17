-- Dropar a policy existente que está causando problemas
DROP POLICY IF EXISTS "Anyone can subscribe to newsletter" ON public.newsletter_subscribers;

-- Recriar a policy permitindo INSERT sem restrições
CREATE POLICY "Anyone can subscribe to newsletter"
ON public.newsletter_subscribers
FOR INSERT
TO public
WITH CHECK (true);

-- Garantir que lead_id aceita NULL (já deveria aceitar, mas confirmando)
ALTER TABLE public.newsletter_subscribers 
ALTER COLUMN lead_id DROP NOT NULL;