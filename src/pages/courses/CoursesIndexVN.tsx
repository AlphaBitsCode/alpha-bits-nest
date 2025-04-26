import { Button } from "@/components/ui/button";
import { Calendar, Check } from "lucide-react";
import { CourseRegistrationDialog } from "@/components/ui/course-registration-dialog";
import { CourseSchedule } from "@/components/ui/course-schedule";
import { useState } from "react";
import { Navbar1 } from '@/components/ui/shadcnblocks-com-navbar1';
import { Link } from "react-router-dom";

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
              Khóa học Node-RED & AIoT Cơ bản
            </h1>
            <p className="text-xl md:text-2xl text-brand-blue mb-4 animate-slide-up">
              Học tự động hóa quy trình & xây dựng AI Agent – chỉ trong 4 tuần!
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

        {/* Tổng quan khóa học */}
        <section className="py-16 px-4 bg-white/50">
          <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-brand-navy mb-6">Bạn sẽ học được gì?</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-brand-teal mt-1" />
                  <span>Thành thạo Node-RED và lập trình luồng trực quan</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-brand-teal mt-1" />
                  <span>Kết nối API, MQTT broker và cơ sở dữ liệu</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-brand-teal mt-1" />
                  <span>Xây dựng dashboard tương tác, tích hợp với AI như Telegram & WhatsApp</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-navy mb-6">Dành cho ai?</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-brand-teal mt-1" />
                  <span>Lập trình viên, kỹ sư, chuyên gia tự động hóa</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-brand-teal mt-1" />
                  <span>Người có kiến thức lập trình cơ bản (JavaScript/Python/v.v.)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Lịch học */}
        <section className="py-16 px-4">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center">Lịch học</h2>
            <CourseSchedule />
          </div>
        </section>

        {/* Hình ảnh phòng Lab IoT */}
        <section className="py-16 px-4 bg-white/50">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center">Bên trong phòng Lab IoT</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img src="images/office/office_2.jpg" alt="Phòng Lab IoT 1" className="w-full h-56 object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img src="images/office/office_7.jpg" alt="Phòng Lab IoT 2" className="w-full h-56 object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img src="images/office/office_6.jpg" alt="Phòng Lab IoT 3" className="w-full h-56 object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Bao gồm */}
        <section className="py-16 px-4 bg-white/50">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center">Bạn nhận được gì?</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {["Slide + mã nguồn mẫu","Tài khoản Node-RED cloud 3 tháng","Hỗ trợ qua Zalo / Facebook group","Lộ trình lên các khóa nâng cao (phần cứng hoặc AI dữ liệu)"].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-brand-teal mt-1" />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container max-w-6xl mx-auto text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-brand-navy mb-4">Chỉ còn 10 chỗ mỗi lớp!</h2>
              <p className="text-xl text-gray-600 mb-8">Đăng ký ngay để giữ chỗ và bắt đầu xây dựng hệ thống IoT tích hợp AI đầu tiên của bạn!</p>
              <Button 
                size="lg"
                className="bg-brand-teal hover:bg-brand-teal/90 text-white"
                onClick={() => setIsDialogOpen(true)}
              >
                Đăng ký ngay
              </Button>
            </div>
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