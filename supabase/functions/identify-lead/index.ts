import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    );

    const { email, phone, name, anonymous_id, session_id } = await req.json();

    if (!email || !anonymous_id) {
      return new Response(
        JSON.stringify({ error: 'Email and anonymous_id required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' }}
      );
    }

    // 1. Buscar ou criar lead
    let { data: lead, error: leadError } = await supabase
      .from('leads')
      .select('id, first_touch_source')
      .eq('email', email)
      .maybeSingle();

    if (!lead) {
      // Criar novo lead com valor padrão que respeita a constraint
      const { data: newLead, error: createError } = await supabase
        .from('leads')
        .insert({
          nome: name,
          email,
          whatsapp: phone,
          produto: 'ia-para-negocios', // Valor padrão válido
          origem: 'organic',
          status: 'novo'
        })
        .select('id')
        .single();

      if (createError) throw createError;
      lead = newLead;
    }

    // 2. Criar alias (liga anonymous_id ao lead_id)
    await supabase
      .from('lead_aliases')
      .insert({
        anonymous_id,
        lead_id: lead.id
      })
      .onConflict('anonymous_id,lead_id')
      .ignoreDuplicates();

    // 3. Atualizar eventos anônimos passados
    await supabase
      .from('events')
      .update({ lead_id: lead.id })
      .eq('anonymous_id', anonymous_id)
      .is('lead_id', null);

    // 4. Atualizar sessões
    await supabase
      .from('sessions')
      .update({ lead_id: lead.id })
      .eq('anonymous_id', anonymous_id);

    // 5. Atualizar first touch se não existir
    const { data: firstSession } = await supabase
      .from('sessions')
      .select('utm_source, utm_medium, utm_campaign')
      .eq('lead_id', lead.id)
      .order('first_event_at', { ascending: true })
      .limit(1)
      .maybeSingle();

    if (firstSession && !lead.first_touch_source) {
      await supabase
        .from('leads')
        .update({
          first_touch_source: firstSession.utm_source,
          first_touch_medium: firstSession.utm_medium,
          first_touch_campaign: firstSession.utm_campaign
        })
        .eq('id', lead.id);
    }

    console.log(`Lead identified: ${email} → ${lead.id}`);

    return new Response(
      JSON.stringify({ 
        success: true, 
        lead_id: lead.id 
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }}
    );

  } catch (err) {
    console.error('Identify error:', err);
    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' }}
    );
  }
});
