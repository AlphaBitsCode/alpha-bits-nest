
import { Button } from "@/components/ui/button";
import { Calendar, Check, MessageSquare, Zap, Database, FileText, Users } from "lucide-react";
import { CourseRegistrationDialog } from "@/components/ui/course-registration-dialog";
import { useState } from "react";
import { Navbar1 } from '@/components/ui/shadcnblocks-com-navbar1';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet";

export default function CoursesIndexVN() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col">
      <Helmet>
        <title>Học Tự động hóa Workflow & AI Agent | Alpha Bits</title>
        <meta name="description" content="Khóa học Node-RED & AIoT Workflow Automation dành cho người đi làm muốn ứng dụng tự động hóa và AI vào công việc hằng ngày - dễ học, thực hành thực tế." />
        <meta name="keywords" content="Node-RED, AIoT, Workflow Automation, AI Agent, Khóa học, Alpha Bits, Học tự động hóa" />
        <meta property="og:title" content="Học Tự động hóa Workflow & AI Agent | Alpha Bits" />
        <meta property="og:description" content="Khóa học Node-RED & AIoT Workflow Automation dành cho người đi làm muốn ứng dụng tự động hóa và AI vào công việc hằng ngày." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alphabits.team/khoa-hoc-ai-workflow-automation" />
        <meta property="og:image" content="/images/courses/nodered-demo.gif" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="language" content="vi-VN" />
      </Helmet>
      
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
            <p className="text-sm text-gray-500 mb-4">
              Thuộc chuỗi 3 khóa học AI & IoT do các chuyên gia team Alpha Bits giảng dạy
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
                <span>Bắt đầu: 13/5/2025</span>
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

        {/* NodeRED Demo GIF */}
        <section className="py-8 px-4 bg-white">
          <div className="container max-w-5xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-brand-navy mb-6">Trực quan và dễ sử dụng - Kéo thả để tạo workflow</h2>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/images/courses/nodered-demo.gif" 
                alt="Node-RED Demo" 
                className="w-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://nodered.org/images/nr-image-1.gif";
                }}
              />
            </div>
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
                <div className="mt-4 bg-white/10 p-3 rounded-lg">
                  <p className="text-2xl font-extrabold flex items-center justify-center gap-3">
                    <span className="line-through text-gray-200 font-semibold mr-3 text-lg opacity-80">12,000,000</span>
                    <span className="text-yellow-300 font-extrabold text-3xl drop-shadow-lg">9,000,000</span>
                  </p>
                </div>
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
                    <span className="font-medium">13/05/2025</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500 mb-1">Số buổi</span>
                    <span className="font-medium">6 buổi chính + 1 buổi Demo</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500 mb-1">Giảng viên</span>
                    <span className="font-medium">Kent Nguyen & Alpha Bits Team</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500 mb-1">Số lượng</span>
                    <span className="font-medium">Tối đa 10 học viên</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-4">Bạn sẽ học được:</h3>
                <p className="mb-2 text-base text-gray-700 font-semibold">Thời gian học: 19h30 - 21h00, Thứ 3 & Thứ 5 hàng tuần (6 buổi chính + 1 buổi Demo)</p>
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
                    <th className="py-3 px-4 border">Nội dung</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border py-3">1</td><td className="border">13/05</td><td className="border text-left px-4">Cài Node-RED, MQTT, làm quen flow</td></tr>
                  <tr><td className="border py-3">2</td><td className="border">15/05</td><td className="border text-left px-4">Xây dựng Dashboard cơ bản</td></tr>
                  <tr><td className="border py-3">3</td><td className="border">20/05</td><td className="border text-left px-4">API Endpoint, xử lý dữ liệu từ ngoài</td></tr>
                  <tr><td className="border py-3">4</td><td className="border">22/05</td><td className="border text-left px-4">Đọc sensor từ thiết bị / mô phỏng</td></tr>
                  <tr><td className="border py-3">5</td><td className="border">27/05</td><td className="border text-left px-4">Xử lý dữ liệu, logic filter</td></tr>
                  <tr><td className="border py-3">6</td><td className="border">29/05</td><td className="border text-left px-4">Lưu trữ dữ liệu, tích hợp AI Agent</td></tr>
                  <tr><td className="border py-3">7</td><td className="border">03/06</td><td className="border text-left px-4">Demo & Feedback dự án cá nhân</td></tr>
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
                        <li>Kèm bộ IoT thực hành cao cấp Alpha Block</li>
                      </ul>
                      <div className="relative mt-4 flex justify-end">
                        <img
                          src="/images/courses/ablock-preview.jpg"
                          alt="Alpha Block"
                          className="w-24 h-16 object-cover rounded-lg shadow-lg border-2 border-white -mr-6 -mb-6 z-10 opacity-90 hover:scale-125 transition-transform duration-300"
                          style={{boxShadow: '0 8px 24px -8px #0002', transform: 'rotate(-8deg)'}}
                        />
                      </div>
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
                    <span className="text-xl font-bold text-brand-teal">TH</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Trọng Hiếu</h3>
                    <p className="text-sm text-gray-500">Backend Developer</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "Là lập trình viên Java, tôi thấy Node-RED cực kỳ hiệu quả để prototype và triển khai nhanh các RESTful API. Khóa học giúp tôi hiểu cách kết nối Node-RED với các hệ thống khác mà không cần viết nhiều code."
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-xl font-bold text-brand-teal">MT</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Minh Tuấn</h3>
                    <p className="text-sm text-gray-500">Frontend Developer</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "Tôi làm việc nhiều với React và đã sử dụng Node-RED để tạo backend API đơn giản mà không cần phát triển toàn bộ Node.js server. Kiến thức về webhook và endpoint từ khóa học giúp tôi tích hợp hệ thống dễ dàng hơn nhiều!"
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

        {/* FAQ Section */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="container max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center">Câu hỏi thường gặp</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="faq-1">
                <AccordionTrigger>Khóa học này dành cho ai?</AccordionTrigger>
                <AccordionContent>
                  Khóa học phù hợp cho người đi làm, kỹ sư, sinh viên muốn ứng dụng tự động hóa và AI vào công việc thực tế mà không cần biết lập trình phức tạp.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger>Tôi cần chuẩn bị gì trước khi tham gia?</AccordionTrigger>
                <AccordionContent>
                  Bạn chỉ cần máy tính cá nhân, kết nối internet ổn định và tinh thần ham học hỏi. Không yêu cầu kiến thức lập trình chuyên sâu.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3">
                <AccordionTrigger>Học xong tôi có thể ứng dụng vào đâu?</AccordionTrigger>
                <AccordionContent>
                  Bạn có thể áp dụng vào công việc văn phòng, sản xuất, nông nghiệp, xây dựng chatbot, tự động hóa quy trình cá nhân hoặc doanh nghiệp.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-4">
                <AccordionTrigger>Hỗ trợ tài khoản hosting Node-RED trong 3 tháng.</AccordionTrigger>
                <AccordionContent>
                  Học viên được cung cấp tài khoản Node-RED cloud miễn phí sử dụng trong 3 tháng để thực hành và triển khai các bài tập, dự án cá nhân.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-5">
                <AccordionTrigger>Hỗ trợ cài đặt tài khoản Node-RED ở các hosting thông dụng GCP, Digital Ocean, AWS, Azure, onprem,...</AccordionTrigger>
                <AccordionContent>
                  Đội ngũ Alpha Bits sẽ hướng dẫn chi tiết cách cài đặt Node-RED trên các nền tảng cloud phổ biến như GCP, Digital Ocean, AWS, Azure hoặc máy chủ riêng (on-premises) theo nhu cầu học viên.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Ứng dụng thực tế sau khóa học */}
        <section className="py-12 px-4 bg-white">
          <div className="container max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center">Ứng dụng thực tế sau khóa học</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-brand-teal mb-2">Sales Automation</h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-1">
                  <li>Tự động tạo (nháp) hợp đồng, báo giá</li>
                  <li>Đồng bộ CRM, cảnh báo khi có khách hàng tiềm năng</li>
                  <li>Tự động nhắc nhở, theo dõi tiến trình chốt deal</li>
                  <li>Tạo bảng báo cáo chỉ tiêu, trực quan hóa funnel bán hàng</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-brand-teal mb-2">Marketing Automation</h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-1">
                  <li>Khởi động chiến dịch email, tin nhắn tự động</li>
                  <li>Dùng AI tạo bài blog, nội dung sản phẩm, mạng xã hội</li>
                  <li>Chấm điểm, phân loại khách hàng trong CRM</li>
                  <li>Theo dõi hiệu quả quảng cáo, SEO, email</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-brand-teal mb-2">HR / People Ops</h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-1">
                  <li>Tự động onboarding nhân sự mới (tài khoản, tài liệu, đào tạo)</li>
                  <li>Thiết lập hệ thống xin nghỉ phép, đồng bộ bảng lương</li>
                  <li>Kích hoạt khảo sát, đánh giá hiệu suất định kỳ</li>
                  <li>Tự động hóa quy trình tài liệu tuân thủ</li>
                  <li>Trợ lý AI cho xin nghỉ phép, khai báo chi phí</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-brand-teal mb-2">Quản lý - Mọi phòng ban</h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-1">
                  <li>Tự động tổng hợp báo cáo, dashboard cho lãnh đạo</li>
                  <li>Tự động hóa quy trình phê duyệt, ra quyết định</li>
                  <li>Tập trung dữ liệu từ nhiều phòng ban</li>
                  <li>Lập kế hoạch phát triển dựa trên dữ liệu thời gian thực</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-brand-teal mb-2">Chăm sóc khách hàng</h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-1">
                  <li>Trả lời tự động, phân loại ticket bằng AI</li>
                  <li>Tự động chuyển cấp xử lý theo SLA hoặc cảm xúc khách hàng</li>
                  <li>Chatbot FAQ cho email, web, ứng dụng nhắn tin</li>
                  <li>Kết nối dữ liệu hỗ trợ với phản hồi sản phẩm</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action cuối trang */}
        <section className="py-16 px-4">
          <div className="container max-w-4xl mx-auto text-center bg-white rounded-xl shadow-lg p-10">
            <h2 className="text-3xl font-bold text-brand-navy mb-4">Sẵn sàng bắt đầu hành trình tự động hóa và xây dựng AI Agent?</h2>
            <p className="text-xl text-gray-700 mb-8">Chỉ có 10 suất cho khoá 1!</p>
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
      
      {/* Registration dialog with fixes for mobile scrolling */}
      <CourseRegistrationDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </div>
  );
}
