
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { SmtpClient } from "https://deno.land/x/smtp@v0.7.0/mod.ts";

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
    const smtpHost = Deno.env.get("SMTP_HOST") || "smtp.gmail.com";
    const smtpPort = parseInt(Deno.env.get("SMTP_PORT") || "465");
    const smtpUser = Deno.env.get("SMTP_USER") || "";
    const smtpPass = Deno.env.get("SMTP_PASS") || "";
    const senderEmail = Deno.env.get("SENDER_EMAIL") || "Alpha Bits <dev@alphabits.team>";

    if (!smtpUser || !smtpPass) {
      throw new Error("SMTP credentials not configured");
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { to, name, product, institutionName, institutionType, message }: EmailRequest = await req.json();

    // Configure SMTP client
    const client = new SmtpClient();
    await client.connectTLS({
      hostname: smtpHost,
      port: smtpPort,
      username: smtpUser,
      password: smtpPass,
    });

    // Create email content with HTML formatting
    const emailContent = `
      <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
            <h2 style="color: #2e7d32;">Thank you for your interest in ${product}!</h2>
            <p>Dear ${name},</p>
            ${product === 'Farm In Box' ? `
            <p>Thank you for your interest in implementing ${product} at ${institutionName}. We're excited to help bring hands-on sustainable farming education to your institution.</p>
            <p>Our team has received your inquiry and we're looking forward to discussing how ${product} can enhance your educational curriculum through practical, engaging experiences in sustainable agriculture and environmental science.</p>
            ` : `
            <p>We're thrilled that you're interested in our ${product} solution! It's wonderful to connect with someone who shares our passion for sustainable farming and education.</p>
            <p>Our team has received your inquiry and we're excited to tell you more about how ${product} can bring hands-on growing experiences to your space.</p>
            `}
            <p>We will review your requirements in detail and get back to you very soon with more information tailored to your needs.</p>
            ${message ? `
            <div style="background-color: #f9f9f9; padding: 15px; margin: 20px 0; border-radius: 5px;">
              <p style="color: #666; margin: 0;"><strong>Your Additional Information:</strong></p>
              <p style="margin: 10px 0 0 0;">${message}</p>
            </div>
            ` : ''}
            <p>If you have any immediate questions or thoughts in the meantime, please don't hesitate to reply to this email.</p>
            <p style="margin-top: 30px;">Best regards,</p>
            <p><strong>The Alpha Bits Team</strong></p>
            
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #eaeaea;" />
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; font-family: monospace; font-size: 0.9em;">
              <p style="color: #666; margin: 0 0 10px 0;">Request Information Log:</p>
              <pre style="margin: 0; white-space: pre-wrap;">
Timestamp: ${new Date().toISOString()}
Product: ${product}
Name: ${name}
Email: ${to}
${institutionName ? `Institution: ${institutionName}` : ''}
${institutionType ? `Institution Type: ${institutionType}` : ''}
              </pre>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send the email
    await client.send({
      from: "Alpha Bits <dev@alphabits.team>",
      to: to,
      cc: "contact@alphabits.team",
      replyTo: "contact@alphabits.team",
      subject: `Thank you for your interest in ${product}`,
      content: "Please view this email in an HTML-compatible email client.",
      html: emailContent,
    });

    // Close the connection
    await client.close();

    // Return success response
    const emailResponse = {
      to,
      subject: `Thank you for your interest in ${product}`,
      status: "sent",
    };

    console.log("Email sent successfully to:", to);

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
