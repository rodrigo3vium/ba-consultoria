import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface NewsletterData {
  email: string;
  name?: string;
  whatsapp?: string;
  source?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, name, whatsapp, source }: NewsletterData = await req.json();

    console.log('Syncing contact to ActiveCampaign:', { email, name, source });

    // Validate required fields
    if (!email) {
      return new Response(
        JSON.stringify({ error: 'Email é obrigatório' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const apiKey = Deno.env.get('ACTIVECAMPAIGN_API_KEY');
    let accountUrl = Deno.env.get('ACTIVECAMPAIGN_ACCOUNT_URL');
    const listId = Deno.env.get('ACTIVECAMPAIGN_LIST_ID');

    // Normalize accountUrl - remove protocol if provided (accepts https:// or http://)
    if (accountUrl) {
      accountUrl = accountUrl.replace(/^https?:\/\//, '');
      console.log('Using ActiveCampaign account URL:', accountUrl);
    }

    if (!apiKey || !accountUrl || !listId) {
      console.error('Missing ActiveCampaign configuration');
      return new Response(
        JSON.stringify({ error: 'Configuração do ActiveCampaign incompleta' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const acHeaders = {
      'Api-Token': apiKey,
      'Content-Type': 'application/json',
    };

    // Step 1: Create or update contact
    const contactPayload: any = {
      contact: {
        email,
        firstName: name || '',
      }
    };

    // Add custom fields if provided
    if (whatsapp) {
      contactPayload.contact.phone = whatsapp;
    }

    console.log('Creating/updating contact in ActiveCampaign...');
    const contactResponse = await fetch(`https://${accountUrl}/api/3/contact/sync`, {
      method: 'POST',
      headers: acHeaders,
      body: JSON.stringify(contactPayload),
    });

    if (!contactResponse.ok) {
      const errorText = await contactResponse.text();
      console.error('ActiveCampaign contact sync error:', errorText);
      return new Response(
        JSON.stringify({ error: 'Erro ao sincronizar contato no ActiveCampaign' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const contactData = await contactResponse.json();
    const contactId = contactData.contact.id;
    console.log('Contact synced successfully. ID:', contactId);

    // Step 2: Add contact to list
    console.log('Adding contact to list:', listId);
    const listPayload = {
      contactList: {
        list: listId,
        contact: contactId,
        status: 1, // 1 = Active, 2 = Unsubscribed
      }
    };

    const listResponse = await fetch(`https://${accountUrl}/api/3/contactLists`, {
      method: 'POST',
      headers: acHeaders,
      body: JSON.stringify(listPayload),
    });

    if (!listResponse.ok) {
      const errorText = await listResponse.text();
      console.error('ActiveCampaign list subscription error:', errorText);
      // Don't fail if already subscribed
      if (!errorText.includes('already exists')) {
        return new Response(
          JSON.stringify({ error: 'Erro ao adicionar contato à lista' }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
    } else {
      console.log('Contact added to list successfully');
    }

    // Step 3: Add tags
    const tags = ['Newsletter', 'Website'];
    if (source) {
      tags.push(source);
    }

    console.log('Adding tags:', tags);
    for (const tagName of tags) {
      // First, get or create the tag
      const tagResponse = await fetch(`https://${accountUrl}/api/3/tags`, {
        method: 'POST',
        headers: acHeaders,
        body: JSON.stringify({
          tag: {
            tag: tagName,
            tagType: 'contact',
          }
        }),
      });

      let tagId;
      if (tagResponse.ok) {
        const tagData = await tagResponse.json();
        tagId = tagData.tag.id;
      } else {
        // Tag might already exist, try to find it
        const searchResponse = await fetch(`https://${accountUrl}/api/3/tags?search=${encodeURIComponent(tagName)}`, {
          headers: acHeaders,
        });
        
        if (searchResponse.ok) {
          const searchData = await searchResponse.json();
          if (searchData.tags && searchData.tags.length > 0) {
            tagId = searchData.tags[0].id;
          }
        }
      }

      if (tagId) {
        // Add tag to contact
        await fetch(`https://${accountUrl}/api/3/contactTags`, {
          method: 'POST',
          headers: acHeaders,
          body: JSON.stringify({
            contactTag: {
              contact: contactId,
              tag: tagId,
            }
          }),
        });
      }
    }

    console.log('Contact synced to ActiveCampaign successfully');

    return new Response(
      JSON.stringify({ 
        success: true, 
        contactId,
        message: 'Inscrição realizada com sucesso!' 
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error: any) {
    console.error('Error in sync-activecampaign function:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Erro ao processar inscrição' }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
};

serve(handler);
