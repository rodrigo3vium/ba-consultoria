import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.74.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Sanitiza texto removendo null bytes e caracteres de controle
function sanitizeText(text: string | null | undefined): string {
  if (!text) return ''
  return text
    .replace(/\0/g, '')           // Remove null bytes
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '') // Remove caracteres de controle
    .replace(/\uFEFF/g, '')       // Remove BOM
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

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { sales, updateDuplicates } = await req.json()
    console.log(`Processando ${sales.length} vendas. UpdateDuplicates: ${updateDuplicates}`)

    const report = {
      total: sales.length,
      created: 0,
      updated: 0,
      skipped: 0,
      errors: [] as string[],
      leads: [] as any[]
    }

    for (const sale of sales as HotmartSale[]) {
      try {
        // Sanitizar e formatar dados
        const email = sanitizeText(sale.email)?.toLowerCase()
        const whatsapp = sanitizeText(sale.whatsapp)?.replace(/\D/g, '') || ''
        const nome = sanitizeText(sale.nome)
        const produto = sanitizeText(sale.produto)?.toLowerCase().replace(/\s+/g, '-') || ''
        
        // Validar dados essenciais
        if (!email || !nome || email.length < 3 || nome.length < 2) {
          report.skipped++
          report.errors.push(`Linha ignorada: email "${email}" ou nome "${nome}" inválido`)
          continue
        }
        
        // Validar formato de email
        if (!email.includes('@') || !email.includes('.')) {
          report.skipped++
          report.errors.push(`Email inválido: ${email}`)
          continue
        }

        // Extrair origem do checkout (formato: plataforma|influencer|tipo|null|origem)
        let origem = 'Hotmart'
        let first_touch_source = null
        let first_touch_medium = null
        let first_touch_campaign = null
        
        if (sale.origem_checkout) {
          const parts = sale.origem_checkout.split('|')
          if (parts.length >= 3) {
            first_touch_source = parts[0] || null  // instagram, tiktok
            first_touch_medium = parts[2] || null  // organico
            first_touch_campaign = parts[1] || null // rodrigo, null
            origem = `${parts[0]}_${parts[4] || 'bio'}` // instagram_bio, tiktok_bio, instagram_dm
          }
        }

        // Verificar se lead já existe
        const { data: existingLead, error: searchError } = await supabase
          .from('leads')
          .select('id')
          .eq('email', email)
          .maybeSingle()

        if (searchError) {
          console.error('Erro ao buscar lead:', searchError)
          report.errors.push(`Erro ao buscar ${email}: ${searchError.message}`)
          continue
        }

        let leadId: string

        if (existingLead) {
          // Lead existe
          if (updateDuplicates) {
            // Atualizar lead existente
            const { error: updateError } = await supabase
              .from('leads')
              .update({
                nome,
                whatsapp,
                produto,
                origem,
                first_touch_source: first_touch_source || existingLead.first_touch_source,
                first_touch_medium: first_touch_medium || existingLead.first_touch_medium,
                first_touch_campaign: first_touch_campaign || existingLead.first_touch_campaign,
              })
              .eq('id', existingLead.id)

            if (updateError) {
              console.error('Erro ao atualizar lead:', updateError)
              report.errors.push(`Erro ao atualizar ${email}: ${updateError.message}`)
              continue
            }

            leadId = existingLead.id
            report.updated++
          } else {
            // Pular duplicado
            leadId = existingLead.id
            report.skipped++
          }
        } else {
          // Criar novo lead
          const { data: newLead, error: insertError } = await supabase
            .from('leads')
            .insert({
              nome,
              email,
              whatsapp,
              produto,
              origem,
              first_touch_source,
              first_touch_medium,
              first_touch_campaign,
              status: 'convertido',
            })
            .select('id')
            .single()

          if (insertError) {
            console.error('Erro ao criar lead:', insertError)
            report.errors.push(`Erro ao criar ${email}: ${insertError.message}`)
            continue
          }

          leadId = newLead.id
          report.created++
        }

        // Inserir informação de venda Hotmart (sanitizada)
        const { error: saleError } = await supabase
          .from('hotmart_sales')
          .insert({
            lead_id: leadId,
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
        }

        report.leads.push({ id: leadId, email, nome })

      } catch (error) {
        console.error('Erro ao processar venda:', error)
        report.errors.push(`Erro ao processar venda: ${error.message}`)
      }
    }

    console.log('Importação concluída:', report)

    return new Response(
      JSON.stringify(report),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('Erro geral:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400 
      }
    )
  }
})