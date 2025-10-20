import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.74.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const handler = async (req: Request): Promise<Response> => {
  // CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    
    // Parâmetros da URL (vindos do email)
    const subscriberId = url.searchParams.get('sid');  // subscriber_id
    const rating = parseInt(url.searchParams.get('r') || '0');
    const edition = url.searchParams.get('e') || 'unknown';
    const anonymousId = url.searchParams.get('aid');
    const campaign = url.searchParams.get('utm_campaign');

    console.log('📊 Rating recebido:', { subscriberId, rating, edition });

    // Validações
    if (!subscriberId || rating < 1 || rating > 5) {
      console.error('❌ Parâmetros inválidos:', { subscriberId, rating });
      return new Response(
        JSON.stringify({ error: 'Parâmetros inválidos' }), 
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Supabase client
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    );

    // Verificar se subscriber existe
    const { data: subscriber, error: subError } = await supabase
      .from('newsletter_subscribers')
      .select('id, email, lead_id, emails_opened')
      .eq('id', subscriberId)
      .maybeSingle();

    if (subError || !subscriber) {
      console.error('❌ Subscriber não encontrado:', subError);
      return new Response(
        JSON.stringify({ error: 'Assinante não encontrado' }), 
        { 
          status: 404, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Registrar rating (upsert para evitar duplicatas)
    const { data: ratingData, error: ratingError } = await supabase
      .from('newsletter_ratings')
      .upsert({
        subscriber_id: subscriberId,
        newsletter_edition: edition,
        rating,
        anonymous_id: anonymousId,
        ip_address: req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip'),
        user_agent: req.headers.get('user-agent'),
        utm_source: 'newsletter',
        utm_medium: 'email',
        utm_campaign: campaign,
      }, {
        onConflict: 'subscriber_id,newsletter_edition',
        ignoreDuplicates: false  // Atualiza se votar de novo
      })
      .select('id')
      .maybeSingle();

    if (ratingError) {
      console.error('❌ Erro ao salvar rating:', ratingError);
      return new Response(
        JSON.stringify({ error: 'Erro ao salvar avaliação' }), 
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    console.log('✅ Rating salvo:', ratingData?.id);

    // Criar evento de tracking
    const eventPayload = {
      event_name: 'newsletter_rating',
      anonymous_id: anonymousId || crypto.randomUUID(),
      session_id: crypto.randomUUID(),
      lead_id: subscriber.lead_id,
      page_url: req.url,
      referrer: 'email',
      timestamp: new Date().toISOString(),
      idempotency_key: `rating_${subscriberId}_${edition}_${Date.now()}`,
      properties: {
        subscriber_id: subscriberId,
        rating,
        edition,
        utm_source: 'newsletter',
        utm_medium: 'email',
        utm_campaign: campaign,
      }
    };

    const { error: eventError } = await supabase.functions.invoke('track-event', {
      body: eventPayload
    });

    if (eventError) {
      console.warn('⚠️ Erro ao criar evento (não crítico):', eventError);
    }

    // Atualizar métricas do subscriber
    await supabase
      .from('newsletter_subscribers')
      .update({ 
        last_email_opened_at: new Date().toISOString(),
        emails_opened: (subscriber.emails_opened || 0) + 1 
      })
      .eq('id', subscriberId);

    // Retornar HTML de agradecimento diretamente
    const thankYouHTML = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Obrigado pelo feedback!</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      margin: 0;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
    .container {
      background: white;
      padding: 48px;
      border-radius: 16px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
      text-align: center;
      max-width: 400px;
      margin: 20px;
    }
    .emoji {
      font-size: 80px;
      margin-bottom: 24px;
      animation: bounce 1s ease-in-out;
    }
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }
    h1 {
      color: #1f2937;
      margin-bottom: 16px;
      font-size: 28px;
    }
    p {
      color: #6b7280;
      line-height: 1.6;
      font-size: 16px;
    }
    .rating-display {
      margin: 24px 0;
      padding: 16px;
      background: #f3f4f6;
      border-radius: 8px;
    }
    .stars {
      font-size: 32px;
      color: #fbbf24;
    }
    .cta {
      margin-top: 32px;
      padding: 12px 24px;
      background: #667eea;
      color: white;
      text-decoration: none;
      border-radius: 8px;
      display: inline-block;
      font-weight: 600;
      transition: background 0.2s;
    }
    .cta:hover {
      background: #5568d3;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="emoji">🙏</div>
    <h1>Obrigado pelo seu feedback!</h1>
    <div class="rating-display">
      <div class="stars">${'⭐'.repeat(rating)}</div>
      <p style="margin-top: 8px; font-size: 14px; color: #9ca3af;">Você avaliou com ${rating} ${rating === 1 ? 'estrela' : 'estrelas'}</p>
    </div>
    <p>Sua opinião é muito importante para nós e nos ajuda a melhorar a newsletter toda semana.</p>
    <a href="/" class="cta">Voltar ao site</a>
  </div>
</body>
</html>
    `;

    return new Response(thankYouHTML, {
      status: 200,
      headers: {
        ...corsHeaders,
        'Content-Type': 'text/html; charset=utf-8',
      },
    });

  } catch (error: any) {
    console.error('❌ Erro fatal:', error);
    return new Response(
      JSON.stringify({ error: error.message }), 
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
};

serve(handler);
