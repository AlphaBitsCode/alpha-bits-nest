
import { Button } from "@/components/ui/button";
import { Calendar, Check, MessageSquare, Zap, Database, FileText, Users } from "lucide-react";
import { CourseRegistrationDialog } from "@/components/ui/course-registration-dialog";
import { useState } from "react";
import { Navbar1 } from '@/components/ui/shadcnblocks-com-navbar1';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

export default function CoursesIndexVN() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col">
      <Navbar1 />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 bg-white">
          <div className="container max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy mb-6 animate-fade-in">
              🚀 Học Tự động hóa Workflow<br />&
              Xây dựng AI Agent Căn Bản
            </h1>
            <p className="text-xl md:text-2xl text-brand-blue mb-6 animate-slide-up">
              Dành cho người đi làm muốn ứng dụng tự động hóa và AI vào công việc hằng ngày<br />
              <span className="font-semibold">– dễ học, thực hành thực tế!</span>
            </p>
            <div className="flex justify-center gap-8 my-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                  <Zap className="h-8 w-8 text-brand-teal" />
                </div>
                <span>Node-RED</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-2">
                  <MessageSquare className="h-8 w-8 text-brand-teal" />
                </div>
                <span>Chatbot</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                  <FileText className="h-8 w-8 text-brand-teal" />
                </div>
                <span>Automation</span>
              </div>
            </div>
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

        {/* Vì sao bạn nên học khóa này */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="container max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center">Vì sao bạn nên học khóa này</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-4">
                <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                  <FileText className="h-6 w-6 text-brand-teal" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Không cần biết code phức tạp</h3>
                  <p className="text-gray-600">Chỉ cần kéo thả, ghép nối các khối chức năng để tạo workflow tự động.</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-4">
                <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
                  <Zap className="h-6 w-6 text-brand-teal" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Tư duy quy trình</h3>
                  <p className="text-gray-600">Biến công việc lặp đi lặp lại thành quy trình tự động hoạt động liên tục.</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-4">
                <div className="bg-purple-100 rounded-full p-3 flex-shrink-0">
                  <MessageSquare className="h-6 w-6 text-brand-teal" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Xây dựng AI Agent thông minh</h3>
                  <p className="text-gray-600">Tạo chatbot và AI Agent tích hợp trên Telegram, Zalo để làm việc tự động.</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-4">
                <div className="bg-orange-100 rounded-full p-3 flex-shrink-0">
                  <Users className="h-6 w-6 text-brand-teal" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Ứng dụng thực tế ngay</h3>
                  <p className="text-gray-600">Áp dụng kiến thức vào công việc và dự án cá nhân ngay sau mỗi buổi học.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Khóa học hiện tại */}
        <section className="py-12 px-4">
          <div className="container max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-brand-teal text-white p-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Khóa học hiện tại: Node-RED & AIoT Workflow Automation</h2>
                <p className="text-lg opacity-90">Khóa Căn bản Online - 6 buổi</p>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="flex flex-col">
                    <span className="text-gray-500 mb-1">Hình thức</span>
                    <span className="font-medium">Online qua Zoom</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500 mb-1">Lịch học</span>
                    <span className="font-medium">Tối Thứ 3 & Thứ 5, 19h30 - 21h00</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500 mb-1">Khai giảng</span>
                    <span className="font-medium">06/05/2025</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500 mb-1">Số buổi</span>
                    <span className="font-medium">6 buổi chính + 1 buổi Demo</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500 mb-1">Giảng viên</span>
                    <span className="font-medium">Alpha Bits Expert Team</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500 mb-1">Số lượng</span>
                    <span className="font-medium">Tối đa 10 học viên</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-4">Bạn sẽ học được:</h3>
                <ul className="grid md:grid-cols-2 gap-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-brand-teal mt-0.5" />
                    <span>Cài đặt Node-RED và môi trường làm việc</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-brand-teal mt-0.5" />
                    <span>Xây dựng Dashboard giao diện kéo-thả</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-brand-teal mt-0.5" />
                    <span>Kết nối API, đọc dữ liệu từ IoT thiết bị</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-brand-teal mt-0.5" />
                    <span>Xử lý dữ liệu (Moving Average, PID Filter)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-brand-teal mt-0.5" />
                    <span>Lưu trữ vào SQLite, InfluxDB</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-brand-teal mt-0.5" />
                    <span>Tạo AI Agent gửi thông báo qua Telegram, WhatsApp</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-brand-teal mt-0.5" />
                    <span>Thực hành mini-project: Ứng dụng thực tế cuối khóa</span>
                  </li>
                </ul>
                <div className="text-center mt-6">
                  <Button
                    onClick={() => setIsDialogOpen(true)}
                    className="bg-brand-teal hover:bg-brand-teal/90 text-white"
                  >
                    👉 Xem chi tiết chương trình học
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lịch học & lộ trình */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="container max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center">Lộ trình học 7 buổi</h2>
            <div className="overflow-x-auto bg-white rounded-lg shadow">
              <table className="min-w-full text-center">
                <thead>
                  <tr className="bg-brand-teal text-white">
                    <th className="py-3 px-4 border">Buổi</th>
                    <th className="py-3 px-4 border">Ngày học</th>
                    <th className="py-3 px-4 border">Thời gian</th>
                    <th className="py-3 px-4 border">Nội dung</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border py-3">1</td><td className="border">06/05</td><td className="border">19:30 - 21:00</td><td className="border text-left px-4">Cài Node-RED, MQTT, làm quen flow</td></tr>
                  <tr><td className="border py-3">2</td><td className="border">08/05</td><td className="border">19:30 - 21:00</td><td className="border text-left px-4">Xây dựng Dashboard cơ bản</td></tr>
                  <tr><td className="border py-3">3</td><td className="border">13/05</td><td className="border">19:30 - 21:00</td><td className="border text-left px-4">API Endpoint, xử lý dữ liệu từ ngoài</td></tr>
                  <tr><td className="border py-3">4</td><td className="border">15/05</td><td className="border">19:30 - 21:00</td><td className="border text-left px-4">Đọc sensor từ thiết bị / mô phỏng</td></tr>
                  <tr><td className="border py-3">5</td><td className="border">20/05</td><td className="border">19:30 - 21:00</td><td className="border text-left px-4">Xử lý dữ liệu, logic filter</td></tr>
                  <tr><td className="border py-3">6</td><td className="border">22/05</td><td className="border">19:30 - 21:00</td><td className="border text-left px-4">Lưu trữ dữ liệu, tích hợp AI Agent</td></tr>
                  <tr><td className="border py-3">7</td><td className="border">27/05</td><td className="border">19:30 - 21:00</td><td className="border text-left px-4">Demo & Feedback dự án cá nhân</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Các khóa tiếp theo */}
        <section className="py-12 px-4">
          <div className="container max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center">Các khóa tiếp theo - Sắp mở</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 rounded-full p-3 flex-shrink-0">
                      <Zap className="h-6 w-6 text-brand-teal" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">🔥 Khóa 2 - Thực hành IoT phần cứng (Offline)</h3>
                      <ul className="list-disc ml-5 space-y-1 text-gray-600">
                        <li>Làm việc với ESP32, Raspberry Pi</li>
                        <li>Đọc cảm biến thực tế, giao tiếp MQTT</li>
                        <li>Kết nối hệ thống Node-RED điều khiển từ xa</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                      <Database className="h-6 w-6 text-brand-teal" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">🔥 Khóa 3 - Dashboard & Database chuyên sâu (Online)</h3>
                      <ul className="list-disc ml-5 space-y-1 text-gray-600">
                        <li>Thiết kế hệ thống lưu trữ dữ liệu lớn</li>
                        <li>Truy vấn thông minh, Dashboard AI</li>
                        <li>Xây dựng AI Assistant vận hành quy trình tự động</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <p className="text-center mt-6 text-lg font-medium text-brand-navy">
              Đăng ký sớm khóa 1 sẽ được ưu đãi khi học tiếp khóa 2, 3.
            </p>
          </div>
        </section>

        {/* Học viên nói gì */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="container max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center">Học viên nói gì</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-xl font-bold text-brand-teal">MA</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Minh Anh</h3>
                    <p className="text-sm text-gray-500">Chuyên viên Marketing</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "Trước khi học mình chưa từng biết đến Node-RED, sau khóa học mình đã tự động hóa các quy trình nội bộ và thiết lập AI trả lời khách hàng qua Telegram chỉ sau vài ngày!"
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-xl font-bold text-brand-teal">TN</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Trọng Nghĩa</h3>
                    <p className="text-sm text-gray-500">Chuyên viên Kinh doanh</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "Khoá học rất thực tế, bài tập dễ hiểu. Ứng dụng được luôn cho công việc tự động gửi báo cáo sales qua chat nhóm!"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quy trình học tập */}
        <section className="py-12 px-4">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-navy mb-10 text-center">Quy trình học tập đơn giản</h2>
            
            <div className="flex flex-col md:flex-row items-center justify-between relative">
              {/* Connector line */}
              <div className="hidden md:block absolute h-1 bg-gray-200 w-full top-1/2 -translate-y-1/2 z-0"></div>
              
              {/* Step 1 */}
              <div className="relative z-10 flex flex-col items-center mb-8 md:mb-0">
                <div className="w-20 h-20 rounded-full bg-brand-teal text-white flex items-center justify-center text-3xl font-bold mb-4">1</div>
                <h3 className="text-lg font-semibold text-center">Đăng ký & nhận<br />hướng dẫn cài đặt</h3>
              </div>
              
              {/* Step 2 */}
              <div className="relative z-10 flex flex-col items-center mb-8 md:mb-0">
                <div className="w-20 h-20 rounded-full bg-brand-teal text-white flex items-center justify-center text-3xl font-bold mb-4">2</div>
                <h3 className="text-lg font-semibold text-center">Học và thực hành<br />theo flow mẫu</h3>
              </div>
              
              {/* Step 3 */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-brand-teal text-white flex items-center justify-center text-3xl font-bold mb-4">3</div>
                <h3 className="text-lg font-semibold text-center">Xây dựng mini project<br />thực tế cùng giảng viên</h3>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center">Các câu hỏi thường gặp</h2>
            
            <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm">
              <AccordionItem value="item-1">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <h3 className="text-lg font-medium text-left">Tôi cần biết lập trình trước không?</h3>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-700">Không cần. Chỉ cần tư duy logic cơ bản và khả năng sử dụng máy tính. Node-RED là công cụ lập trình trực quan, kéo thả, rất dễ tiếp cận cho người mới.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <h3 className="text-lg font-medium text-left">Sau khóa học có hỗ trợ kỹ thuật không?</h3>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-700">Có, bạn sẽ được vào nhóm hỗ trợ riêng qua Zalo/Facebook và được hỗ trợ kỹ thuật sau khóa học. Ngoài ra còn có buổi tư vấn 1:1 với giảng viên.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <h3 className="text-lg font-medium text-left">Khóa học có cấp chứng nhận không?</h3>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-700">Có chứng nhận nội bộ của Alpha Bits khi hoàn thành dự án mini cuối khóa. Đây là minh chứng quan trọng cho kỹ năng thực tế của bạn.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Call to Action cuối trang */}
        <section className="py-16 px-4">
          <div className="container max-w-4xl mx-auto text-center bg-white rounded-xl shadow-lg p-10">
            <h2 className="text-3xl font-bold text-brand-navy mb-4">Sẵn sàng bắt đầu hành trình tự động hóa và xây dựng AI Agent?</h2>
            <p className="text-xl text-gray-700 mb-8">Chỉ còn 10 suất cho khoá 1!</p>
            <Button 
              size="lg" 
              className="bg-brand-teal hover:bg-brand-teal/90 text-white"
              onClick={() => setIsDialogOpen(true)}
            >
              👉 Đăng ký ngay
            </Button>
          </div>
        </section>
      </main>
      
      {/* Fix the CourseRegistrationDialog component to handle country field */}
      <CourseRegistrationDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </div>
  );
}
