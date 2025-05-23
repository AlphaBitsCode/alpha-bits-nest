
import { useEffect, useRef } from 'react';
import { Navbar1 } from '@/components/ui/shadcnblocks-com-navbar1';
import Footer from '@/components/ui/footer';
import { MapPin, Phone, Mail, Calendar, Clock, MessageCircle } from 'lucide-react';
import { useScrollAnimation } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { useLocation } from 'react-router-dom';
import { ensureGoogleTranslateLoaded, getSelectedLanguage, changeLanguage } from '@/lib/language-utils';

const ContactPage = () => {
  useScrollAnimation();
  const location = useLocation();
  const contactSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);

    // Check if there's a hash in the URL
    if (location.hash === '#contact') {
      setTimeout(() => {
        contactSectionRef.current?.scrollIntoView({
          behavior: 'smooth'
        });
      }, 100);
    }
    
    // Apply saved language preference if not English
    const savedLanguage = getSelectedLanguage();
    if (savedLanguage !== 'en') {
      ensureGoogleTranslateLoaded(() => {
        changeLanguage(savedLanguage);
      });
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <title>Contact Alpha Bits | AIoT Solutions</title>
      <meta name="description" content="Get in touch with Alpha Bits for expert advice on AIoT solutions, digital transformation, and technology implementation for your business." />
      <meta name="keywords" content="Contact Alpha Bits, AIoT Consultation, Technology Advisory, Vietnam Tech Company, Ho Chi Minh City" />
      <meta property="og:title" content="Contact Alpha Bits | AIoT Solutions" />
      <meta property="og:description" content="Get in touch with Alpha Bits for expert advice on AIoT solutions, digital transformation, and technology implementation." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://alphabits.team/contact" />
      <meta property="og:image" content="/images/office/office_1.jpg" />
      <meta name="twitter:card" content="summary_large_image" />

      <Navbar1 />

      <div className="pt-16">
        <section id="contact" ref={contactSectionRef} className="py-16 bg-gradient-to-b from-white/95 to-gray-50/95 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 scrolled-section">
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

            <div className="grid md:grid-cols-2 gap-12 scrolled-section max-w-6xl mx-auto">
              <div className="bg-white/20 backdrop-blur-lg rounded-xl shadow-xl p-8 border border-white/20 hover:border-white/40 transition-all">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-brand-navy">Schedule a Meeting</h3>
                  <Calendar size={24} className="text-brand-teal" />
                </div>

                <p className="text-gray-600 mb-6">
                  Book a 30-minute consultation with our team to discuss your project or learn more about our services.
                </p>

                <Button asChild className="w-full">
                  <a href="https://cal.com/alphabits/mini" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    <Calendar size={16} />
                    Book a 30-Minute Call
                  </a>
                </Button>

              </div>



              {/* Contact Information */}
              <div className="flex flex-col h-full">
                <div className="bg-white/20 backdrop-blur-lg rounded-xl shadow-xl p-8 border border-white/20 hover:border-white/40 transition-all mb-6">
                  <h3 className="text-xl font-bold text-brand-navy mb-6">Contact Information</h3>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Phone size={24} className="text-brand-teal mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-base font-medium text-brand-navy">Phone</p>
                        <p className="text-base text-gray-600">+84 868 000 317</p>
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

                    <div className="flex items-start">
                      <Clock size={24} className="text-brand-teal mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-base font-medium text-brand-navy">Timezone</p>
                        <p className="text-base text-gray-600">GMT+7 (Vietnam Time Zone)</p>
                      </div>
                    </div>
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
