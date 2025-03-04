
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

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
    const smtpUser = Deno.env.get("SMTP_USER") || "";
    const smtpPass = Deno.env.get("SMTP_PASS") || "";
    const senderEmail = Deno.env.get("SENDER_EMAIL") || "dev@alphabits.team";
    const ccEmail = "contact@alphabits.team";
    
    // Create Supabase client
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Parse request body
    const { to, name, product, institutionName, institutionType, message }: EmailRequest = await req.json();

    // Log information
    console.log(`Sending confirmation email to ${to} for product ${product}`);

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
    const emailSubject = `Thank you for your interest in ${product}!`;
    const emailHtml = `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #1e40af; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background-color: #f9fafb; }
            .footer { padding: 20px; text-align: center; font-size: 0.8em; color: #6b7280; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Thank You for Your Interest!</h1>
            </div>
            <div class="content">
              <p>Dear ${name},</p>
              <p>Thank you for your interest in our <strong>${product}</strong> solution. We've received your inquiry and will get back to you soon.</p>
              <p><strong>Product:</strong> ${product}</p>
              ${institutionName ? `<p><strong>Institution:</strong> ${institutionName}</p>` : ''}
              ${institutionType ? `<p><strong>Institution Type:</strong> ${institutionType}</p>` : ''}
              ${message ? `<p><strong>Your message:</strong> ${message}</p>` : ''}
              <p>If you have any questions in the meantime, please don't hesitate to reach out to us at contact@alphabits.team.</p>
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
      to: to,
      cc: ccEmail,
      replyTo: "contact@alphabits.team",
      subject: emailSubject,
      html: emailHtml,
    });

    // Close the connection
    await client.close();
    
    // Return a success response
    const emailResponse = {
      to,
      subject: emailSubject,
      status: "sent",
      message: "Email sent successfully"
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
