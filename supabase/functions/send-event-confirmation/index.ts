
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
    const logoUrl = "https://alphabits.team/images/AB_Logo_full_text.png";
    const eventsUrl = "https://alphabits.team/experiences/events";

    const emailHtml = `<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"><style>*{font-family:'Arial',sans-serif;margin:0;padding:0;box-sizing:border-box}body{background-color:#f9f9f9;color:#333;line-height:1.6}.wrapper{max-width:600px;margin:0 auto;background-color:#fff;border-radius:12px;overflow:hidden;margin-top:20px;margin-bottom:20px;box-shadow:0 4px 6px rgba(0,0,0,.05)}.header{padding:30px;text-align:center;background-color:#fff}.logo{max-width:200px;height:auto}.title{padding:20px 30px;text-align:center;background-color:#f7f7f7;border-bottom:1px solid #eaeaea}.title h1{color:#1e40af;font-size:22px;font-weight:600}.content{padding:30px}.greeting{margin-bottom:20px}.message{margin-bottom:25px}.details{background-color:#f7f7f7;border-radius:10px;padding:25px;margin-bottom:25px}.details h2{color:#1e40af;font-size:18px;margin-bottom:15px;font-weight:600}.details p{margin-bottom:10px}.details strong{font-weight:600}.cta{text-align:center;margin:25px 0}.button{display:inline-block;background-color:#1e40af;color:#fff;text-decoration:none;padding:12px 25px;border-radius:30px;font-weight:500;font-size:16px}.footer{background-color:#f7f7f7;padding:20px 30px;text-align:center;color:#666;font-size:14px;border-top:1px solid #eaeaea}.calendar{margin-top:20px;text-align:center}.calendar-link{display:inline-block;background-color:#f7f7f7;color:#1e40af;text-decoration:none;padding:10px 20px;border-radius:30px;font-weight:500;font-size:14px;border:1px solid #e0e0e0;margin:10px 5px}@media only screen and (max-width:600px){.wrapper{width:100%;border-radius:0}.content{padding:20px}}</style></head><body><div class="wrapper"><div class="header"><img src="${logoUrl}" alt="Alpha Bits Logo" class="logo"></div><div class="title"><h1>Your Event Registration is Confirmed!</h1></div><div class="content"><div class="greeting"><p>Dear ${name},</p></div><div class="message"><p>Thank you for registering for our event. We're looking forward to seeing you there!</p></div><div class="details"><h2>Event Details:</h2><p><strong>Event:</strong> ${eventTitle}</p><p><strong>Date:</strong> ${eventDate}</p><p><strong>Time:</strong> ${eventTime}</p><p><strong>Location:</strong> ${eventLocation}</p></div><div class="cta"><a href="${eventsUrl}" class="button">View All Events</a></div><div class="calendar"><p>Add to your calendar:</p><a href="#" class="calendar-link">Google Calendar</a><a href="#" class="calendar-link">Apple Calendar</a><a href="#" class="calendar-link">Outlook</a></div><p style="margin-top:25px">If you have any questions or need to make changes to your registration, please contact us at <a href="mailto:contact@alphabits.team" style="color:#1e40af;text-decoration:underline">contact@alphabits.team</a>.</p><p style="margin-top:20px">Best regards,<br>The Alpha Bits Team</p></div><div class="footer"><p>&copy; ${new Date().getFullYear()} Alpha Bits. All rights reserved.</p><p style="margin-top:5px">Alpha Bits - Innovative Digital Solutions for a Sustainable Future</p></div></div></body></html>`;

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
