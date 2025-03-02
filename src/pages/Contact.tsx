
import { useEffect } from 'react';
import DockNavigation from '@/components/ui/dock-navigation';
import Footer from '@/components/ui/footer';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useScrollAnimation } from '@/lib/animations';

const ContactPage = () => {
  useScrollAnimation();
  
  return (
    <div className="min-h-screen">
      <DockNavigation />
      
      <div className="pt-24">
        <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 scrolled-section">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-brand-navy/10 text-brand-navy rounded-full mb-3">
                GET IN TOUCH
              </span>
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Have questions about our products or services? Reach out to us and our team will be happy to assist you.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 scrolled-section">
              {/* Telegram QR Code */}
              <div>
                <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
                  <h3 className="text-xl font-bold text-brand-navy mb-6">Connect via Telegram</h3>
                  
                  <div className="flex flex-col items-center justify-center space-y-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      {/* This would be your QR code image. Replace with actual Telegram QR code */}
                      <img 
                        src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://t.me/alpha_bits_bot" 
                        alt="Telegram QR Code for @alpha_bits_bot" 
                        className="w-64 h-64"
                      />
                    </div>
                    
                    <div className="text-center">
                      <p className="text-lg font-medium text-brand-navy mb-2">Scan to Chat</p>
                      <p className="text-gray-600">Or find us at <span className="font-medium text-brand-teal">@alpha_bits_bot</span></p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Information */}
              <div className="flex flex-col h-full">
                <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 mb-6">
                  <h3 className="text-xl font-bold text-brand-navy mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Phone size={24} className="text-brand-teal mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-base font-medium text-brand-navy">Phone</p>
                        <p className="text-base text-gray-600">+84 888 900 317</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail size={24} className="text-brand-teal mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-base font-medium text-brand-navy">Email</p>
                        <p className="text-base text-gray-600">contact@alphabits.team</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MapPin size={24} className="text-brand-teal mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-base font-medium text-brand-navy">Headquarters</p>
                        <p className="text-base text-gray-600">Lakeview 1, Thu Thiem, District 2, Ho Chi Minh, Vietnam</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
                  <h3 className="text-xl font-bold text-brand-navy mb-6">Office Hours</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="font-medium">Monday - Friday</span>
                      <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="font-medium">Saturday</span>
                      <span className="text-gray-600">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Sunday</span>
                      <span className="text-gray-600">Closed</span>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="font-medium text-brand-navy mb-2">Note</h4>
                    <p className="text-gray-600">
                      For urgent inquiries outside of business hours, please email us and we'll respond as soon as possible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
