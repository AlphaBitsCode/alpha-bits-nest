
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface CourseConfirmationRequest {
  name: string;
  email: string;
  course: string;
  startDate: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, course, startDate }: CourseConfirmationRequest = await req.json();

    // Simple validation
    if (!name || !email || !course) {
      throw new Error("Missing required fields");
    }

    console.log(`Sending course confirmation email to ${email}`);

    const emailResponse = await resend.emails.send({
      from: "Alpha Bits <no-reply@alphabits.vn>",
      to: [email],
      subject: `Đăng ký thành công khóa học: ${course}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h1 style="color: #0d9488; margin-bottom: 20px;">Xin chào ${name}!</h1>
          
          <p style="font-size: 16px; margin-bottom: 20px;">
            Cảm ơn bạn đã đăng ký khóa học <strong>${course}</strong>.
          </p>
          
          <p style="font-size: 16px; margin-bottom: 20px;">
            Chúng tôi đã nhận được thông tin đăng ký của bạn và sẽ liên hệ sớm để xác nhận và chia sẻ thêm chi tiết về lịch học, thanh toán và các thông tin quan trọng khác.
          </p>
          
          <div style="background-color: #f0fdfa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #0d9488; margin-bottom: 10px;">Thông tin khóa học:</h3>
            <ul style="margin-bottom: 0; padding-left: 20px;">
              <li>Tên khóa học: ${course}</li>
              <li>Ngày khai giảng: ${startDate}</li>
              <li>Hình thức: Online qua Zoom</li>
              <li>Thời gian: 19:30 - 21:00, Thứ 3 & Thứ 5 hàng tuần</li>
            </ul>
          </div>
          
          <p style="font-size: 16px; margin-bottom: 20px;">
            Để chuẩn bị tốt nhất cho khóa học, bạn có thể tham khảo trước về Node-RED tại <a href="https://nodered.org/" style="color: #0d9488; text-decoration: none;">nodered.org</a> hoặc thử cài đặt môi trường phát triển theo hướng dẫn của chúng tôi (sẽ được gửi trong email tiếp theo).
          </p>
          
          <p style="font-size: 16px; margin-bottom: 20px;">
            Nếu bạn có bất kỳ câu hỏi nào, vui lòng liên hệ với chúng tôi qua email <a href="mailto:courses@alphabits.vn" style="color: #0d9488; text-decoration: none;">courses@alphabits.vn</a> hoặc số điện thoại <strong>028 7300 7586</strong>.
          </p>
          
          <p style="font-size: 16px; margin-bottom: 5px;">Trân trọng,</p>
          <p style="font-size: 16px; font-weight: bold; margin-top: 0;">Alpha Bits Education Team</p>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error) {
    console.error("Error sending confirmation email:", error);
    
    return new Response(
      JSON.stringify({ error: error.message || "Failed to send email" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
});
