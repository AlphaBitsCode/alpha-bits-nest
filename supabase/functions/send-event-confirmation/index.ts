
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

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
    const smtpUser = Deno.env.get("SMTP_USER") || "";
    const smtpPass = Deno.env.get("SMTP_PASS") || "";
    const senderEmail = Deno.env.get("SENDER_EMAIL") || "dev@alphabits.team";
    const ccEmail = "contact@alphabits.team";
    
    // Create Supabase client
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Parse request body
    const { name, email, eventTitle, eventDate, eventTime, eventLocation }: EventRegistrationRequest = await req.json();

    // Log information
    console.log(`Sending event confirmation email to ${email} for event ${eventTitle}`);

    // Create SMTP client
    const client = new SMTPClient({
      connection: {
        hostname: "smtp.gmail.com",
        port: 465,
        tls: true,
        auth: {
          username: smtpUser,
          password: smtpPass,
        },
      },
    });

    // Prepare email content
    const emailSubject = `Your registration for ${eventTitle} is confirmed!`;
    const emailHtml = `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #1e40af; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background-color: #f9fafb; }
            .event-details { background-color: #e5e7eb; padding: 15px; border-radius: 5px; margin: 15px 0; }
            .footer { padding: 20px; text-align: center; font-size: 0.8em; color: #6b7280; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Your Event Registration is Confirmed!</h1>
            </div>
            <div class="content">
              <p>Dear ${name},</p>
              <p>Thank you for registering for our event. We're looking forward to seeing you there!</p>
              
              <div class="event-details">
                <p><strong>Event:</strong> ${eventTitle}</p>
                <p><strong>Date:</strong> ${eventDate}</p>
                <p><strong>Time:</strong> ${eventTime}</p>
                <p><strong>Location:</strong> ${eventLocation}</p>
              </div>
              
              <p>If you have any questions or need to make changes to your registration, please contact us at contact@alphabits.team.</p>
              <p>Best regards,<br>The Alpha Bits Team</p>
            </div>
            <div class="footer">
              <p>&copy; 2024 Alpha Bits. All rights reserved.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email
    await client.send({
      from: senderEmail,
      to: email,
      cc: ccEmail,
      replyTo: "contact@alphabits.team",
      subject: emailSubject,
      html: emailHtml,
    });

    // Close the connection
    await client.close();

    // Return a success response
    const emailResponse = {
      to: email,
      subject: emailSubject,
      status: "sent",
      message: "Email sending successful"
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
