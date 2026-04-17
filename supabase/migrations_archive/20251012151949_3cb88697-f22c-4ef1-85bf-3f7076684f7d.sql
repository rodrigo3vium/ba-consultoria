-- Criar tabela para armazenar informações de venda da Hotmart
CREATE TABLE IF NOT EXISTS public.hotmart_sales (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  lead_id uuid REFERENCES public.leads(id) ON DELETE CASCADE,
  produto text NOT NULL,
  moeda text,
  preco_produto numeric,
  preco_oferta numeric,
  numero_parcela integer,
  data_venda timestamp with time zone,
  data_confirmacao timestamp with time zone,
  status text,
  documento text,
  origem_checkout text,
  tipo_pagamento text,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Habilitar RLS
ALTER TABLE public.hotmart_sales ENABLE ROW LEVEL SECURITY;

-- Políticas RLS para hotmart_sales
CREATE POLICY "Admins podem ver vendas Hotmart"
  ON public.hotmart_sales
  FOR SELECT
  TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins podem inserir vendas Hotmart"
  ON public.hotmart_sales
  FOR INSERT
  TO authenticated
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- Criar índices para performance
CREATE INDEX idx_hotmart_sales_lead_id ON public.hotmart_sales(lead_id);
CREATE INDEX idx_hotmart_sales_data_venda ON public.hotmart_sales(data_venda DESC);