
import { useState } from 'react';
import { Send, MessageSquare, Phone, Mail, MapPin } from 'lucide-react';
import { useScrollAnimation } from '@/lib/animations';

const Contact = () => {
  useScrollAnimation();
  
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [aiMessage, setAiMessage] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isAiResponding, setIsAiResponding] = useState(false);
  
  const handleContactFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };
  
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', contactForm);
    alert('Thank you for your message! We will get back to you soon.');
    setContactForm({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };
  
  const handleAiMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAiMessage(e.target.value);
  };
  
  const handleAiSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiMessage.trim()) return;
    
    // Simulate AI response
    setIsAiResponding(true);
    
    // Example responses based on user message
    setTimeout(() => {
      const userMessageLower = aiMessage.toLowerCase();
      let response = '';
      
      if (userMessageLower.includes('pricing') || userMessageLower.includes('cost') || userMessageLower.includes('price')) {
        response = "Our pricing varies depending on your specific needs. For Mushroom-in-a-Box, prices start at $49.99. For Farm In Box educational kits, please contact our sales team for a customized quote based on your institution's requirements.";
      } else if (userMessageLower.includes('delivery') || userMessageLower.includes('shipping')) {
        response = "We currently ship our products within Vietnam. International shipping is available for select countries. Delivery typically takes 3-5 business days within Vietnam, and 10-15 business days for international orders.";
      } else if (userMessageLower.includes('tour') || userMessageLower.includes('visit')) {
        response = "You can book a tour of our AO Farm facility by filling out the contact form or calling us directly. Tours are available Monday-Friday from 9am-4pm, and must be booked at least 48 hours in advance.";
      } else {
        response = "Thank you for your message. Our team will review your inquiry and get back to you shortly. If you need immediate assistance, please call our customer service line during business hours.";
      }
      
      setAiResponse(response);
      setIsAiResponding(false);
    }, 1500);
    
    // Clear user input
    setAiMessage('');
  };

  return (
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
          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-brand-navy mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={contactForm.name}
                      onChange={handleContactFormChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={contactForm.email}
                      onChange={handleContactFormChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone (Optional)</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={contactForm.phone}
                      onChange={handleContactFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={contactForm.subject}
                      onChange={handleContactFormChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                    >
                      <option value="">Select a Subject</option>
                      <option value="product-inquiry">Product Inquiry</option>
                      <option value="service-inquiry">Service Inquiry</option>
                      <option value="farm-tour">Farm Tour</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={contactForm.message}
                    onChange={handleContactFormChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-brand-navy hover:bg-brand-navy/90 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
          {/* AI Representative Chat */}
          <div className="flex flex-col h-full">
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 flex-grow flex flex-col">
              <h3 className="text-xl font-bold text-brand-navy mb-6 flex items-center">
                <MessageSquare size={20} className="mr-2 text-brand-teal" />
                Ask Our AI Representative
              </h3>
              
              <div className="flex-grow flex flex-col mb-6 bg-gray-50 rounded-lg p-4 h-64 overflow-y-auto">
                <div className="flex items-start mb-4">
                  <div className="w-8 h-8 rounded-full bg-brand-teal flex items-center justify-center text-white mr-3 flex-shrink-0">
                    AI
                  </div>
                  <div className="bg-brand-teal/10 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm text-gray-700">
                      Hello! I'm Alpha Bits' AI assistant. How can I help you today? Feel free to ask about our products, services, or general information.
                    </p>
                  </div>
                </div>
                
                {aiResponse && (
                  <>
                    <div className="flex items-start justify-end mb-4">
                      <div className="bg-gray-200 rounded-lg p-3 max-w-[80%]">
                        <p className="text-sm text-gray-700">
                          {aiMessage}
                        </p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center text-white ml-3 flex-shrink-0">
                        You
                      </div>
                    </div>
                    
                    <div className="flex items-start mb-4">
                      <div className="w-8 h-8 rounded-full bg-brand-teal flex items-center justify-center text-white mr-3 flex-shrink-0">
                        AI
                      </div>
                      <div className="bg-brand-teal/10 rounded-lg p-3 max-w-[80%]">
                        <p className="text-sm text-gray-700">
                          {aiResponse}
                        </p>
                      </div>
                    </div>
                  </>
                )}
                
                {isAiResponding && (
                  <div className="flex items-start mb-4">
                    <div className="w-8 h-8 rounded-full bg-brand-teal flex items-center justify-center text-white mr-3 flex-shrink-0">
                      AI
                    </div>
                    <div className="bg-brand-teal/10 rounded-lg p-3 max-w-[80%]">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-brand-teal rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-brand-teal rounded-full animate-bounce delay-75"></div>
                        <div className="w-2 h-2 bg-brand-teal rounded-full animate-bounce delay-150"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <form onSubmit={handleAiSubmit} className="mt-auto">
                <div className="relative">
                  <textarea
                    placeholder="Type your question here..."
                    value={aiMessage}
                    onChange={handleAiMessageChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent pr-12"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 bottom-2 p-2 text-white bg-brand-teal rounded-full hover:bg-brand-teal/90 transition-colors duration-300"
                    disabled={isAiResponding}
                  >
                    <Send size={16} />
                  </button>
                </div>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 mt-6">
              <h3 className="text-lg font-bold text-brand-navy mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone size={18} className="text-brand-teal mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-medium text-brand-navy">Phone</p>
                    <p className="text-sm text-gray-600">+84 868 000 317</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail size={18} className="text-brand-teal mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-medium text-brand-navy">Email</p>
                    <p className="text-sm text-gray-600">contact@alphabits.team</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin size={18} className="text-brand-teal mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-medium text-brand-navy">Headquarters</p>
                    <p className="text-sm text-gray-600">Lakeview 1, Thu Thiem, District 2, Ho Chi Minh, Vietnam</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
