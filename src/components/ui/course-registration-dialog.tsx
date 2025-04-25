
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
  "Vietnam", "Singapore", "Malaysia", "Thailand", "Indonesia", "Philippines",
  "Japan", "South Korea", "Other"
];

const referralSources = [
  "Google Search",
  "LinkedIn",
  "Facebook",
  "Friend/Colleague",
  "Company Website",
  "Tech Event",
  "Other"
];

export function CourseRegistrationDialog({ open, onOpenChange }: CourseRegistrationDialogProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    interest: "",
    codingBackground: "",
    referralSource: "",
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
          country: formData.country,
          interest: formData.interest,
          coding_background: formData.codingBackground,
          referral_source: formData.referralSource,
          course_id: 'node-red-aiot-2025-05'
        });

      if (error) throw error;

      toast({
        title: "Registration successful!",
        description: "We'll be in touch with you soon with more details.",
      });

      onOpenChange(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        country: "",
        interest: "",
        codingBackground: "",
        referralSource: "",
      });
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Registration failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md mx-auto">
        <DialogHeader>
          <DialogTitle>Register for Node-RED & AIoT Course</DialogTitle>
          <DialogDescription>
            Fill out this form to secure your spot in our upcoming course starting May 6, 2025.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <Select 
              value={formData.country} 
              onValueChange={(value) => setFormData(prev => ({ ...prev, country: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select your country" />
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
            <Label htmlFor="interest">Why are you interested in this course?</Label>
            <Textarea
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="codingBackground">Brief coding background</Label>
            <Textarea
              id="codingBackground"
              name="codingBackground"
              value={formData.codingBackground}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="referralSource">Where did you hear about us?</Label>
            <Select 
              value={formData.referralSource} 
              onValueChange={(value) => setFormData(prev => ({ ...prev, referralSource: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select source" />
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
            {isSubmitting ? "Submitting..." : "Submit Registration"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
