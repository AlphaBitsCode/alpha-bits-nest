
import { Button } from "@/components/ui/button";
import { Calendar, Check } from "lucide-react";
import { CourseRegistrationDialog } from "@/components/ui/course-registration-dialog";
import { useState } from "react";
import { Navbar1 } from '@/components/ui/shadcnblocks-com-navbar1';

export default function CoursesIndexVN() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col">
      <Navbar1 />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="container max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy mb-6 animate-fade-in">
              Khóa học AIoT Automation<br />
              cùng Node-RED
            </h1>
            <p className="text-xl md:text-2xl text-brand-blue mb-4 animate-slide-up">
              Học trực quan – Xây dựng quy trình tự động hóa – Tạo AI Agent cho riêng bạn!<br />
              Thuộc chuỗi 3 khóa học AI & IoT do các chuyên gia team Alpha Bits giảng dạy, cung cấp công cụ và thiết bị thực hành.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-lg text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-brand-teal" />
                <span>Bắt đầu: 6/5/2025</span>
              </div>
              <span className="hidden md:inline">•</span>
              <span>Thứ 3 & Thứ 5 hàng tuần qua Zoom</span>
            </div>
            <Button 
              size="lg" 
              className="animate-float bg-brand-teal hover:bg-brand-teal/90 text-white"
              onClick={() => setIsDialogOpen(true)}
            >
              👉 Đăng ký ngay
            </Button>
          </div>
        </section>

        {/* Tổng quan chuỗi khóa học */}
        <section className="py-12 px-4 bg-white/50">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-navy mb-6 text-center">Chuỗi khóa học AIoT & Automation</h2>
            <ul className="space-y-4 text-lg">
              <li>
                <b>Khóa 1 – AIoT Automation căn bản, làm quen với Node-RED (Online)</b>
              </li>
              <li>
                <b>Khóa 2A – IoT thực hành kèm bộ kit Alpha Block Pro (Offline)</b>
              </li>
              <li>
                <b>Khóa 2B – Khóa chuyên sâu Data Dashboard & AI Agent (Online)</b>
              </li>
            </ul>
          </div>
        </section>

        {/* Giới thiệu khóa học */}
        <section className="py-12 px-4">
          <div className="container max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">📘 Giới thiệu khóa học AIoT Automation</h2>
              <ul className="space-y-3 text-lg">
                <li>
                  <b>Đối tượng:</b> Lập trình viên, kỹ sư phần mềm đã có kiến thức cơ bản về coding. Node-RED là nền tảng low-code.
                </li>
                <li>
                  <b>Mục tiêu:</b>
                  <ul className="list-disc ml-6">
                    <li>Làm quen với Node-RED và lập trình workflow kéo thả (Visual Flow Programming với low-code)</li>
                    <li>Kết nối API, Database, MQTT server căn bản</li>
                    <li>Xử lý dữ liệu, xây dựng Dashboard UI căn bản</li>
                    <li>Điều khiển thiết bị IoT căn bản qua Node-RED</li>
                    <li>Xây dựng AI Agents tích hợp Telegram / WhatsApp…</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">📘 Sau khóa học</h2>
              <ul className="space-y-3 text-lg">
                <li>Hỗ trợ một buổi tư vấn 1:1, giúp bạn tự xây dựng workflow trong công việc hằng ngày.</li>
                <li>Tự động hóa các thao tác online (VD: Email, Google Sheets, Đăng content, Xuất báo cáo...)</li>
                <li>Tự xây dựng AI Agent trên Slack, Web, WhatsApp, Zalo,...</li>
                <li>Có nền tảng để học tiếp IoT Automation (Khóa 2A) hoặc Data/AI chuyên sâu (Khóa 2B).</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Lịch học & lộ trình */}
        <section className="py-12 px-4 bg-white/50">
          <div className="container max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center">🧭 Lộ trình 7 buổi học</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border text-center text-lg">
                <thead>
                  <tr className="bg-brand-teal text-white">
                    <th className="py-2 px-3 border">Buổi</th>
                    <th className="py-2 px-3 border">Ngày học</th>
                    <th className="py-2 px-3 border">Thứ</th>
                    <th className="py-2 px-3 border">Thời gian</th>
                    <th className="py-2 px-3 border">Nội dung chính</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border">1</td><td className="border">13/05</td><td className="border">Thứ 3</td><td className="border">19:30 - 21:00</td><td align='left' className="border">Khởi động với Node-RED</td></tr>
                  <tr><td className="border">2</td><td className="border">15/05</td><td className="border">Thứ 5</td><td className="border">19:30 - 21:00</td><td align='left' className="border">Xử lý dữ liệu & Lưu trữ dữ liệu</td></tr>
                  <tr><td className="border">3</td><td className="border">20/05</td><td className="border">Thứ 3</td><td className="border">19:30 - 21:00</td><td align='left' className="border">Xây dựng dashboard cơ bản</td></tr>
                  <tr><td className="border">4</td><td className="border">22/05</td><td className="border">Thứ 5</td><td className="border">19:30 - 21:00</td><td align='left' className="border">API Endpoints. Tích hợp hệ thống bên ngoài</td></tr>
                  <tr><td className="border">5</td><td className="border">27/05</td><td className="border">Thứ 3</td><td className="border">19:30 - 21:00</td><td align='left' className="border">Điều khiển thiết bị IoT</td></tr>
                  <tr><td className="border">6</td><td className="border">30/05</td><td className="border">Thứ 5</td><td className="border">19:30 - 21:00</td><td align='left' className="border">Xây dựng AI Agent căn bản với Telegram/WhatsApp</td></tr>
                  <tr><td className="border">7</td><td className="border">03/06</td><td className="border">Thứ 3</td><td className="border">19:30 - 21:00</td><td align='left' className="border">Demo & Q&A: Học viên trình bày dự án mini cá nhân</td></tr>
                  <tr><td className="border">8</td><td className="border">-</td><td className="border">-</td><td className="border">45 phút</td><td align='left' className="border">Tư vấn 1:1 sau khóa học</td></tr>
                </tbody>
              </table>
            </div>
            <div className="text-center mt-8">
              <Button 
                size="lg"
                className="bg-brand-teal hover:bg-brand-teal/90 text-white"
                onClick={() => setIsDialogOpen(true)}
              >
                Đăng ký cho Khóa 1
              </Button>
            </div>
          </div>
        </section>

        {/* Tài liệu & hỗ trợ */}
        <section className="py-12 px-4">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">📕 Tài liệu & Hỗ trợ</h2>
            <ul className="space-y-3 text-lg">
              <li>Tài khoản sử dụng Node-RED trong 3 tháng</li>
              <li>Slide tài liệu tham khảo, hướng dẫn cài Node-RED</li>
              <li>Source-code mẫu, các workflow mẫu</li>
              <li>Nhóm Zalo/Facebook trao đổi, hỗ trợ cộng đồng</li>
            </ul>
          </div>
        </section>

        {/* Chuẩn bị cho khóa tiếp theo */}
        <section className="py-12 px-4 bg-white/50">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">Chuẩn bị cho khóa tiếp theo</h2>
            <ul className="space-y-3 text-lg">
              <li>
                <b>Khóa 2A Offline – IoT thực hành ESP32 + Linux Pi Computer:</b> Thực hành tại văn phòng Alpha Bits, Quận 2, HCM. Bao gồm 1 bộ kit Alpha Block Pro.
              </li>
              <li>
                <b>Khóa 2B Online – Chuyên sâu Data Dashboard & AI Agent:</b> Xây dựng luồng xử lý dữ liệu Big Data, Realtime Data (NodeRED, BigQuery). Xây dựng Operation & Management Dashboard bằng Looker Studio / Metabase. Xây dựng AI Agents và Workflow phức tạp.
              </li>
            </ul>
          </div>
        </section>
      </main>
      <CourseRegistrationDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </div>
  );
}
