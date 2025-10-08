import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.74.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
  leadId: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { leadId, subject, message }: EmailRequest = await req.json();

    console.log("Sending email to lead:", leadId);

    // Get Supabase URL and service role key from environment
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

    // Create Supabase client
    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

    // Get lead information
    const { data: lead, error: leadError } = await supabase
      .from("leads")
      .select("*")
      .eq("id", leadId)
      .single();

    if (leadError || !lead) {
      console.error("Error fetching lead:", leadError);
      throw new Error("Lead not found");
    }

    // Send email
    const emailResponse = await resend.emails.send({
      from: "IA Expert <onboarding@resend.dev>",
      to: [lead.email],
      subject: subject,
      html: `
        <h2>Olá ${lead.nome}!</h2>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">
          Esta é uma mensagem automática da IA Expert.<br>
          Se você não solicitou este email, por favor ignore-o.
        </p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    // Get JWT from authorization header
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      throw new Error("No authorization header");
    }

    const token = authHeader.replace("Bearer ", "");
    const { data: { user } } = await supabase.auth.getUser(token);

    if (!user) {
      throw new Error("User not authenticated");
    }

    // Register interaction
    const { error: interactionError } = await supabase
      .from("lead_interactions")
      .insert({
        lead_id: leadId,
        user_id: user.id,
        tipo: "email",
        descricao: `Email enviado: ${subject}`,
      });

    if (interactionError) {
      console.error("Error registering interaction:", interactionError);
    }

    // Update last interaction timestamp
    await supabase
      .from("leads")
      .update({ ultima_interacao: new Date().toISOString() })
      .eq("id", leadId);

    return new Response(
      JSON.stringify({ 
        success: true, 
        emailId: emailResponse.id 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-lead-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
