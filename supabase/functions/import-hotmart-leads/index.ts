import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.74.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
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
        // Limpar e formatar dados
        const email = sale.email?.trim().toLowerCase()
        const whatsapp = sale.whatsapp?.replace(/\D/g, '') || ''
        const nome = sale.nome?.trim() || ''
        const produto = sale.produto?.trim().toLowerCase().replace(/\s+/g, '-') || ''
        
        if (!email || !nome) {
          report.skipped++
          report.errors.push(`Linha ignorada: email ou nome vazio`)
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
              status: 'cliente',
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

        // Inserir informação de venda Hotmart
        const { error: saleError } = await supabase
          .from('hotmart_sales')
          .insert({
            lead_id: leadId,
            produto: sale.produto,
            moeda: sale.moeda,
            preco_produto: sale.preco_produto,
            preco_oferta: sale.preco_oferta,
            numero_parcela: sale.numero_parcela,
            data_venda: sale.data_venda,
            data_confirmacao: sale.data_confirmacao,
            status: sale.status,
            documento: sale.documento,
            origem_checkout: sale.origem_checkout,
            tipo_pagamento: sale.tipo_pagamento,
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