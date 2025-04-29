
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

interface CourseRegistrationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const countries = [
  "Việt Nam", "Singapore", "Malaysia", "Thailand", "Indonesia", "Philippines",
  "Japan", "South Korea", "Other"
];

const referralSources = [
  "Google Search",
  "LinkedIn",
  "Facebook",
  "Bạn bè/Đồng nghiệp",
  "Website công ty",
  "Sự kiện công nghệ",
  "Khác"
];

export function CourseRegistrationDialog({ open, onOpenChange }: CourseRegistrationDialogProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    interest: "",
    codingBackground: "",
    referralSource: "",
    country: "Việt Nam", // Default country
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('class_registrations')
        .insert({
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          interest: formData.interest,
          coding_background: formData.codingBackground,
          referral_source: formData.referralSource,
          country: formData.country,
          course_id: 'node-red-aiot-2025-05'
        });

      if (error) throw error;

      toast({
        title: "Đăng ký thành công!",
        description: "Chúng tôi sẽ liên hệ với bạn sớm với thông tin chi tiết khoá học.",
      });

      onOpenChange(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        interest: "",
        codingBackground: "",
        referralSource: "",
        country: "Việt Nam",
      });
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Đăng ký thất bại",
        description: "Vui lòng thử lại hoặc liên hệ trực tiếp với chúng tôi.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md mx-auto max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Đăng ký tham gia khoá học Workflow Automation & AI Agent</DialogTitle>
          <DialogDescription>
            Điền thông tin để giữ chỗ cho khoá học bắt đầu từ ngày 13/5/2025. Chúng tôi sẽ liên hệ xác nhận qua email/số điện thoại của bạn.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Họ và tên</Label>
            <Input
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Nhập họ và tên của bạn"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Nhập email liên hệ"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Số điện thoại</Label>
            <Input
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Nhập số điện thoại của bạn"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="country">Quốc gia</Label>
            <Select 
              value={formData.country} 
              onValueChange={(value) => setFormData(prev => ({ ...prev, country: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Chọn quốc gia" />
              </SelectTrigger>
              <SelectContent>
                {countries.map((country) => (
                  <SelectItem key={country} value={country}>
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="interest">Bạn mong muốn gì từ khoá học này?</Label>
            <Textarea
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleInputChange}
              placeholder="VD: Muốn tự động hoá công việc, tìm hiểu AI Agent, thực hành IoT..."
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="codingBackground">Kinh nghiệm lập trình/nghề nghiệp</Label>
            <Textarea
              id="codingBackground"
              name="codingBackground"
              value={formData.codingBackground}
              onChange={handleInputChange}
              placeholder="VD: Đã học qua Python/JavaScript, làm kỹ sư phần mềm, chưa biết code..."
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="referralSource">Bạn biết đến khoá học qua kênh nào?</Label>
            <Select 
              value={formData.referralSource} 
              onValueChange={(value) => setFormData(prev => ({ ...prev, referralSource: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Chọn kênh thông tin" />
              </SelectTrigger>
              <SelectContent>
                {referralSources.map((source) => (
                  <SelectItem key={source} value={source}>
                    {source}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button 
            type="submit" 
            className="w-full bg-brand-teal hover:bg-brand-teal/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Đang gửi..." : "Gửi đăng ký"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
