
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
    const productUrl = "https://alphabits.team/products/mushroom-in-box";
    
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            * {
              font-family: 'Arial', sans-serif;
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body {
              background-color: #f9f9f9;
              color: #333;
              line-height: 1.6;
            }
            .wrapper {
              max-width: 600px;
              margin: 0 auto;
              background-color: #ffffff;
              border-radius: 12px;
              overflow: hidden;
              margin-top: 20px;
              margin-bottom: 20px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            }
            .header {
              padding: 30px;
              text-align: center;
              background-color: #ffffff;
            }
            .logo {
              max-width: 200px;
              height: auto;
            }
            .title {
              padding: 20px 30px;
              text-align: center;
              background-color: #f7f7f7;
              border-bottom: 1px solid #eaeaea;
            }
            .title h1 {
              color: #1e40af;
              font-size: 22px;
              font-weight: 600;
            }
            .content {
              padding: 30px;
            }
            .greeting {
              margin-bottom: 20px;
            }
            .message {
              margin-bottom: 25px;
            }
            .details {
              background-color: #f7f7f7;
              border-radius: 10px;
              padding: 25px;
              margin-bottom: 25px;
            }
            .details h2 {
              color: #1e40af;
              font-size: 18px;
              margin-bottom: 15px;
              font-weight: 600;
            }
            .details p {
              margin-bottom: 10px;
            }
            .details strong {
              font-weight: 600;
            }
            .cta {
              text-align: center;
              margin: 25px 0;
            }
            .button {
              display: inline-block;
              background-color: #1e40af;
              color: white;
              text-decoration: none;
              padding: 12px 25px;
              border-radius: 30px;
              font-weight: 500;
              font-size: 16px;
            }
            .footer {
              background-color: #f7f7f7;
              padding: 20px 30px;
              text-align: center;
              color: #666;
              font-size: 14px;
              border-top: 1px solid #eaeaea;
            }
            .highlight {
              color: #1e40af;
              font-weight: 600;
            }
            @media only screen and (max-width: 600px) {
              .wrapper {
                width: 100%;
                border-radius: 0;
              }
              .content {
                padding: 20px;
              }
            }
          </style>
        </head>
        <body>
          <div class="wrapper">
            <div class="header">
              <img src="${logoUrl}" alt="Alpha Bits Logo" class="logo" />
            </div>
            <div class="title">
              <h1>Pre-order Confirmation</h1>
            </div>
            <div class="content">
              <div class="greeting">
                <p>Dear ${name},</p>
              </div>
              <div class="message">
                <p>Thank you for pre-ordering the <span class="highlight">Mushroom-in-a-Box</span>! We're excited that you'll be among the first to experience our innovative mushroom growing solution.</p>
              </div>
              
              <div class="details">
                <h2>Pre-order Details:</h2>
                <p><strong>Quantity:</strong> ${quantity}</p>
                <p><strong>Shipping Address:</strong> ${address}</p>
                <p><strong>Country:</strong> ${country}</p>
                ${message ? `<p><strong>Your message:</strong> ${message}</p>` : ''}
              </div>
              
              <p>Your pre-order has been recorded and we'll keep you updated on:</p>
              <ul style="margin-left: 20px; margin-bottom: 20px;">
                <li>Production progress</li>
                <li>Shipping timeline</li>
                <li>Additional product features</li>
              </ul>
              
              <div class="cta">
                <a href="${productUrl}" class="button">View Product Page</a>
              </div>
              
              <p>If you have any questions about your pre-order, please don't hesitate to reach out to us at <a href="mailto:contact@alphabits.team" style="color: #1e40af; text-decoration: underline;">contact@alphabits.team</a>.</p>
              
              <p style="margin-top: 20px;">Best regards,<br>The Alpha Bits Team</p>
            </div>
            <div class="footer">
              <p>&copy; ${new Date().getFullYear()} Alpha Bits. All rights reserved.</p>
              <p style="margin-top: 5px;">Alpha Bits - Innovative Digital Solutions for a Sustainable Future</p>
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
