
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
  to: string;
  name: string;
  product: string;
  institutionName?: string;
  institutionType?: string;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get environment variables
    const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
    
    // Create Supabase client
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Parse request body
    const { to, name, product, institutionName, institutionType, message }: EmailRequest = await req.json();

    // Log information
    console.log(`Sending confirmation email to ${to} for product ${product}`);

    // For now, we'll log the email content instead of sending it
    // Later we'll integrate with a proper email service
    const emailContent = `
      Email To: ${to}
      Subject: Thank you for your interest in ${product}!
      
      Dear ${name},
      
      Thank you for your interest in our ${product} solution. We've received your inquiry and will get back to you soon.
      
      Product: ${product}
      ${institutionName ? `Institution: ${institutionName}` : ''}
      ${institutionType ? `Institution Type: ${institutionType}` : ''}
      ${message ? `Your message: ${message}` : ''}
      
      Best regards,
      The Alpha Bits Team
    `;
    
    console.log("Email content that would be sent:");
    console.log(emailContent);
    
    // Return a success response
    const emailResponse = {
      to,
      subject: `Thank you for your interest in ${product}`,
      status: "simulated",
      message: "Email sending simulated (not actually sent)"
    };

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error) {
    console.error("Error in send-confirmation function:", error);
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
