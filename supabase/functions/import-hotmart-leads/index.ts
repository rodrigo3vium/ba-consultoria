import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.74.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

function sanitizeText(text: string | null | undefined): string {
  if (!text) return ''
  return text
    .replace(/\0/g, '')
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '')
    .replace(/\uFEFF/g, '')
    .trim()
}

interface HotmartSale {
  nome: string
  email: string
  whatsapp: string
  produto: string
  moeda: string
  preco_produto: number
  preco_oferta: number
  numero_parcela: number
  data_venda: string
  data_confirmacao: string
  status: string
  documento?: string
  origem_checkout?: string
  tipo_pagamento: string
}

// deno-lint-ignore-file no-explicit-any
Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
      { db: { schema: 'ba_site' } }
    )

    const { sales } = await req.json()
    console.log(`Processando ${sales.length} vendas Hotmart`)

    const report = {
      total: sales.length,
      created: 0,
      skipped: 0,
      errors: [] as string[],
    }

    for (const sale of sales as HotmartSale[]) {
      try {
        const email = sanitizeText(sale.email)?.toLowerCase()
        const nome = sanitizeText(sale.nome)

        if (!email || !nome || !email.includes('@') || !email.includes('.')) {
          report.skipped++
          report.errors.push(`Linha ignorada: email "${email}" ou nome "${nome}" inválido`)
          continue
        }

        const { error: saleError } = await supabase
          .from('hotmart_sales')
          .insert({
            email,
            nome,
            produto: sanitizeText(sale.produto),
            moeda: sanitizeText(sale.moeda),
            preco_produto: sale.preco_produto,
            preco_oferta: sale.preco_oferta,
            numero_parcela: sale.numero_parcela,
            data_venda: sale.data_venda,
            data_confirmacao: sale.data_confirmacao,
            status: sanitizeText(sale.status),
            documento: sanitizeText(sale.documento),
            origem_checkout: sanitizeText(sale.origem_checkout),
            tipo_pagamento: sanitizeText(sale.tipo_pagamento),
          })

        if (saleError) {
          console.error('Erro ao inserir venda:', saleError)
          report.errors.push(`Erro ao inserir venda para ${email}: ${saleError.message}`)
        } else {
          report.created++
        }

      } catch (error: any) {
        console.error('Erro ao processar venda:', error)
        report.errors.push(`Erro ao processar venda: ${error.message}`)
      }
    }

    console.log('Importação concluída:', report)

    return new Response(
      JSON.stringify(report),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error: any) {
    console.error('Erro geral:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
    )
  }
})
