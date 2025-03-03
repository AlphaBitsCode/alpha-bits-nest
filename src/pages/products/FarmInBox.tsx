import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight, Send, Check } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { useScrollAnimation } from '@/lib/animations';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const FarmInBox = () => {
  useScrollAnimation();
  
  useEffect(() => {
    document.title = "Farm In Box | Alpha Bits";
  }, []);
  
  const [form, setForm] = useState({
    institutionName: '',
    contactPerson: '',
    email: '',
    phone: '',
    institutionType: '',
    country: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const { error } = await supabase
        .from('farm_in_box_leads')
        .insert([
          { 
            institution_name: form.institutionName,
            contact_person: form.contactPerson,
            email: form.email,
            phone: form.phone,
            institution_type: form.institutionType,
            country: form.country,
            message: form.message,
            submitted_at: new Date()
          }
        ]);
        
      if (error) throw error;
      
      setFormSubmitted(true);
      toast.success('Thank you for your interest!', {
        description: 'We will send more information shortly.',
        duration: 5000,
      });
      
      setForm({
        institutionName: '',
        contactPerson: '',
        email: '',
        phone: '',
        institutionType: '',
        country: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('There was an error submitting your form', {
        description: 'Please try again or contact us directly.',
        duration: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  const features = [
    'Interactive learning materials',
    'Sustainable farming techniques',
    'STEM curriculum integration',
    'Digital monitoring tools',
    'Teacher support resources'
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <section className="py-12 flex-grow bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-6">
            <Link to="/products" className="inline-flex items-center text-brand-navy hover:text-brand-teal transition-colors duration-300">
              <ArrowLeft size={16} className="mr-2" />
              Back to Products
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center scrolled-section">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-medium bg-brand-teal/10 text-brand-teal rounded-full mb-3">
                PRODUCT
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
                Farm In Box - Educational Kit
              </h1>
              <p className="text-gray-600 mb-6 text-lg">
                A comprehensive educational package designed for schools and learning institutions to teach sustainable farming practices, biology, and environmental science through hands-on experience.
              </p>
              
              <ul className="space-y-3 mb-8">
                {features.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <ChevronRight size={20} className="text-brand-teal mr-2 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-2 bg-gradient-to-r from-brand-teal to-brand-blue rounded-lg opacity-30 blur-lg animate-pulse"></div>
                <div className="relative glassmorphism overflow-hidden rounded-lg p-1">
                  <div className="bg-white rounded-lg overflow-hidden">
                    <img 
                      src="/images/farminbox/farminbox_box2.jpg" 
                      alt="Farm in Box Educational Kit" 
                      className="w-full h-96 object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 scrolled-section">
            <div className="max-w-3xl mx-auto relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-teal/20 via-brand-blue/20 to-brand-navy/20 rounded-xl blur-md"></div>
              
              <div className="relative bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-lg border border-white/40 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-transparent opacity-50 pointer-events-none"></div>
                
                <h2 className="text-2xl font-bold text-brand-navy mb-6 text-center relative z-10">
                  Request Information
                </h2>
                
                {formSubmitted ? (
                  <div className="text-center py-8 px-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                      <Check size={32} className="text-green-600" />
                    </div>
                    <h3 className="text-xl font-medium text-gray-800 mb-2">Thank You!</h3>
                    <p className="text-gray-600 mb-6">
                      We've received your request and will send you more information about our Farm In Box educational kit shortly.
                    </p>
                    <Button 
                      onClick={() => setFormSubmitted(false)}
                      variant="outline"
                      className="transition-all duration-300 hover:scale-105"
                    >
                      Submit Another Request
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="group">
                        <label htmlFor="institutionName" className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-brand-teal transition-colors duration-200">
                          Institution Name*
                        </label>
                        <input
                          type="text"
                          id="institutionName"
                          name="institutionName"
                          value={form.institutionName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 bg-white/70 backdrop-blur-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all duration-300"
                          placeholder="Enter your institution name"
                        />
                      </div>
                      <div className="group">
                        <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-brand-teal transition-colors duration-200">
                          Contact Person*
                        </label>
                        <input
                          type="text"
                          id="contactPerson"
                          name="contactPerson"
                          value={form.contactPerson}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 bg-white/70 backdrop-blur-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all duration-300"
                          placeholder="Full name"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="group">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-brand-teal transition-colors duration-200">
                          Email Address*
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 bg-white/70 backdrop-blur-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all duration-300"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div className="group">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-brand-teal transition-colors duration-200">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 bg-white/70 backdrop-blur-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all duration-300"
                          placeholder="+1 (123) 456-7890"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="group">
                        <label htmlFor="institutionType" className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-brand-teal transition-colors duration-200">
                          Institution Type*
                        </label>
                        <select
                          id="institutionType"
                          name="institutionType"
                          value={form.institutionType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 bg-white/70 backdrop-blur-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all duration-300"
                        >
                          <option value="">Select Institution Type</option>
                          <option value="Primary School">Primary School</option>
                          <option value="Secondary School">Secondary School</option>
                          <option value="College">College</option>
                          <option value="University">University</option>
                          <option value="Research Institute">Research Institute</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div className="group">
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-brand-teal transition-colors duration-200">
                          Country*
                        </label>
                        <input
                          type="text"
                          id="country"
                          name="country"
                          value={form.country}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 bg-white/70 backdrop-blur-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all duration-300"
                          placeholder="Your country"
                        />
                      </div>
                    </div>
                    
                    <div className="group">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 group-focus-within:text-brand-teal transition-colors duration-200">
                        Additional Information
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        value={form.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-white/70 backdrop-blur-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all duration-300"
                        placeholder="Tell us about your specific requirements or questions"
                      />
                    </div>
                    
                    <div className="text-center pt-2">
                      <Button
                        type="submit"
                        disabled={loading}
                        className="px-6 py-3 bg-gradient-to-r from-brand-teal to-brand-blue text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            Request Information
                            <Send size={16} className="ml-2" />
                          </span>
                        )}
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FarmInBox;
