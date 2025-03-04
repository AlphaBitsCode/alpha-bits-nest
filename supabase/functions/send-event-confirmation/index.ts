
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface EventRegistrationRequest {
  name: string;
  email: string;
  eventTitle: string;
  eventDate: string;
  eventTime: string;
  eventLocation: string;
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
    const { name, email, eventTitle, eventDate, eventTime, eventLocation }: EventRegistrationRequest = await req.json();

    // Log information
    console.log(`Sending event confirmation email to ${email} for event ${eventTitle}`);

    // For now, we'll log the email content instead of sending it
    // In a production environment, you would integrate with an email service like SendGrid, Mailgun, etc.
    const emailContent = `
      Email To: ${email}
      Subject: Your registration for ${eventTitle} is confirmed!
      
      Dear ${name},
      
      Thank you for registering for our event:
      
      Event: ${eventTitle}
      Date: ${eventDate}
      Time: ${eventTime}
      Location: ${eventLocation}
      
      We're looking forward to seeing you there!
      
      Best regards,
      The Alpha Bits Team
    `;
    
    console.log("Email content that would be sent:");
    console.log(emailContent);
    
    // Return a success response
    const emailResponse = {
      to: email,
      subject: `Your registration for ${eventTitle} is confirmed!`,
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
    console.error("Error in send-event-confirmation function:", error);
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
