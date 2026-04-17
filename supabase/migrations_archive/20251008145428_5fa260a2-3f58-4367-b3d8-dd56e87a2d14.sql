-- Create enum for lead status
CREATE TYPE public.lead_status AS ENUM ('novo', 'contatado', 'qualificado', 'convertido', 'perdido');

-- Create enum for interaction type
CREATE TYPE public.interaction_type AS ENUM ('email', 'whatsapp', 'telefone', 'reuniao', 'nota');

-- Add new columns to leads table
ALTER TABLE public.leads
ADD COLUMN status public.lead_status NOT NULL DEFAULT 'novo',
ADD COLUMN origem TEXT,
ADD COLUMN observacoes TEXT,
ADD COLUMN ultima_interacao TIMESTAMP WITH TIME ZONE,
ADD COLUMN responsavel_id UUID REFERENCES auth.users(id),
ADD COLUMN tags TEXT[] DEFAULT '{}';

-- Create lead_interactions table
CREATE TABLE public.lead_interactions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  lead_id UUID NOT NULL REFERENCES public.leads(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id),
  tipo public.interaction_type NOT NULL,
  descricao TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on lead_interactions
ALTER TABLE public.lead_interactions ENABLE ROW LEVEL SECURITY;

-- Create policies for lead_interactions
CREATE POLICY "Admins can view all interactions"
ON public.lead_interactions
FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert interactions"
ON public.lead_interactions
FOR INSERT
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Create policy to allow admins to update leads
CREATE POLICY "Admins can update leads"
ON public.leads
FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'));

-- Create index for better performance
CREATE INDEX idx_lead_interactions_lead_id ON public.lead_interactions(lead_id);
CREATE INDEX idx_leads_status ON public.leads(status);