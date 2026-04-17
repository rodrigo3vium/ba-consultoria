-- Permite upsert por (tenant_id, email) na edge function submit-contact
CREATE UNIQUE INDEX IF NOT EXISTS contacts_tenant_email_key
  ON public.contacts (tenant_id, lower(email))
  WHERE email IS NOT NULL;
