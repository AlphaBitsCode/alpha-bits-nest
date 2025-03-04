
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface PreorderEmailRequest {
  to: string;
  name: string;
  quantity: number;
  address: string;
  country: string;
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
    const { to, name, quantity, address, country, message }: PreorderEmailRequest = await req.json();

    // Log information
    console.log(`Sending Mushroom Box preorder confirmation email to ${to}`);

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
    const emailSubject = "Thank you for pre-ordering the Mushroom-in-a-Box!";
    const logoUrl = "https://alphabits.team/images/AB_Logo_full_text.png";
    
    const emailHtml = `
      <html>
        <head>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; padding: 0; }
            .header { background-color: #1e40af; color: white; padding: 20px; text-align: center; }
            .logo { max-width: 250px; height: auto; margin-bottom: 10px; }
            .content { padding: 30px; background-color: #f9fafb; }
            .preorder-details { background-color: #e5e7eb; padding: 20px; border-radius: 8px; margin: 20px 0; }
            .footer { padding: 20px; text-align: center; font-size: 0.8em; color: #6b7280; background-color: #f3f4f6; }
            .button { display: inline-block; background-color: #0ea5e9; color: white; text-decoration: none; padding: 10px 20px; border-radius: 5px; margin-top: 15px; }
            h1, h2 { color: #1e40af; }
            .highlight { color: #0ea5e9; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <img src="${logoUrl}" alt="Alpha Bits Logo" class="logo" />
              <h1>Pre-order Confirmation</h1>
            </div>
            <div class="content">
              <p>Dear ${name},</p>
              <p>Thank you for pre-ordering the <span class="highlight">Mushroom-in-a-Box</span>! We're excited that you'll be among the first to experience our innovative mushroom growing solution.</p>
              
              <div class="preorder-details">
                <h2>Pre-order Details:</h2>
                <p><strong>Quantity:</strong> ${quantity}</p>
                <p><strong>Shipping Address:</strong> ${address}</p>
                <p><strong>Country:</strong> ${country}</p>
                ${message ? `<p><strong>Your message:</strong> ${message}</p>` : ''}
              </div>
              
              <p>Your pre-order has been recorded and we'll keep you updated on:</p>
              <ul>
                <li>Production progress</li>
                <li>Shipping timeline</li>
                <li>Additional product features</li>
              </ul>
              
              <p>If you have any questions about your pre-order, please don't hesitate to reach out to us at <a href="mailto:contact@alphabits.team">contact@alphabits.team</a>.</p>
              
              <p>Best regards,<br>The Alpha Bits Team</p>
            </div>
            <div class="footer">
              <p>&copy; 2024 Alpha Bits. All rights reserved.</p>
              <p>Alpha Bits - Innovative Digital Solutions for a Sustainable Future</p>
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
      message: "Preorder confirmation email sent successfully"
    };

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error) {
    console.error("Error in send-mushroom-preorder-confirmation function:", error);
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
