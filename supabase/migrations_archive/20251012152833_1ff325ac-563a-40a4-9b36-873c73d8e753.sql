-- Melhorias na tabela hotmart_sales

-- Adicionar índice para melhor performance
CREATE INDEX IF NOT EXISTS idx_hotmart_sales_lead_id ON public.hotmart_sales(lead_id);
CREATE INDEX IF NOT EXISTS idx_hotmart_sales_email_lookup ON public.leads(email);

-- Adicionar constraint para evitar vendas duplicadas (mesma venda não pode ser inserida 2x)
-- Usamos produto + email + data_venda como chave única
ALTER TABLE public.hotmart_sales 
ADD CONSTRAINT unique_hotmart_sale 
UNIQUE (lead_id, produto, data_venda);