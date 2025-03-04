
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight, Calendar, Clock, Store, Info, Leaf, Users, Camera, Thermometer, Monitor, Lightbulb, Battery, Smartphone } from 'lucide-react';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { useScrollAnimation } from '@/lib/animations';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { useToast } from "@/components/ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { toast } from 'sonner';

const MushroomInBox = () => {
  useScrollAnimation();
  const { toast } = useToast();
  
  useEffect(() => {
    document.title = "Mushroom-in-a-Box | Alpha Bits";
  }, []);
  
  const [form, setForm] = useState({
    name: '',
    email: '',
    quantity: 1,
    address: '',
    country: '',
    message: ''
  });
  
  const [submitting, setSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.country) {
      toast({
        title: "Country required",
        description: "Please select a country for shipping",
        variant: "destructive"
      });
      return;
    }
    
    setSubmitting(true);
    
    try {
      // Send data to Supabase
      const { error } = await supabase.from('preorders').insert([
        {
          name: form.name,
          email: form.email,
          quantity: form.quantity,
          address: form.address,
          country: form.country,
          message: form.message
        }
      ]);
      
      if (error) throw error;

      // Send confirmation email via edge function
      const { error: emailError } = await supabase.functions.invoke('send-mushroom-preorder-confirmation', {
        body: {
          to: form.email,
          name: form.name,
          quantity: form.quantity,
          address: form.address,
          country: form.country,
          message: form.message
        }
      });

      if (emailError) {
        console.error('Error sending confirmation email:', emailError);
      }
      
      // Show success toast
      toast({
        title: "Pre-order submitted!",
        description: "Thank you for your interest in Mushroom-in-a-Box. We will contact you soon.",
        duration: 5000
      });
      
      // Reset form
      setForm({
        name: '',
        email: '',
        quantity: 1,
        address: '',
        country: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Error submitting pre-order:', error);
      toast({
        title: "Submission error",
        description: "There was a problem submitting your pre-order. Please try again.",
        variant: "destructive"
      });
    } finally {
      setSubmitting(false);
    }
  };

  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", 
    "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", 
    "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", 
    "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", 
    "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", 
    "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", 
    "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", 
    "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", 
    "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", 
    "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", 
    "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", 
    "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", 
    "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", 
    "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", 
    "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", 
    "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", 
    "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", 
    "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", 
    "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", 
    "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", 
    "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
  ];

  const features = [
    {
      title: 'Unique Dome Design',
      description: 'Maximizes light exposure, optimizes space, and allows for modular expansion.',
      icon: <Monitor className="h-6 w-6" />
    },
    {
      title: 'Wide-Angle Camera Monitoring',
      description: 'Enables real-time tracking of mushroom growth.',
      icon: <Camera className="h-6 w-6" />
    },
    {
      title: 'Integrated Sensor System',
      description: 'Measures temperature, humidity, air quality, and CO₂ levels.',
      icon: <Thermometer className="h-6 w-6" />
    },
    {
      title: 'Ventilation System & LED Grow Lights',
      description: 'Ensures optimal conditions for mushroom development.',
      icon: <Lightbulb className="h-6 w-6" />
    },
    {
      title: 'LCD Status Display',
      description: 'Provides instant environmental updates.',
      icon: <Monitor className="h-6 w-6" />
    },
    {
      title: 'Flexible Power Supply',
      description: 'Operates on 12V DC with a backup battery lasting up to 3 days.',
      icon: <Battery className="h-6 w-6" />
    },
    {
      title: 'AI-Powered Mobile App',
      description: 'Smart connectivity with real-time statistics and growing guides.',
      icon: <Smartphone className="h-6 w-6" />
    }
  ];

  const timeline = [
    { phase: 'Testing Phase', time: 'Q2/2025', description: 'Limited release for early adopters.' },
    { phase: 'Official Launch', time: 'Q3/2025', description: 'Full-scale launch with a marketing campaign.' },
    { phase: 'Market Expansion', time: 'Q4/2025', description: 'International market entry' }
  ];

  const benefits = [
    'Perfect for Beginners: No prior experience needed, AI guides you.',
    'Fun & Educational: Great for kids, classrooms, and DIY learners.',
    'Hands-on STEM Learning: Teaches biology, ecology, and sustainability.',
    'Grow Gourmet Mushrooms at Home: Enjoy fresh, organic mushrooms.',
    'Eco-Friendly & Sustainable: Uses minimal energy and materials.',
    'Unique Experience: Grow mushrooms on your desk or at home. Think aquarium but for mushrooms.'
  ];

  const audiences = [
    { title: 'Home Gardeners & Mushroom Enthusiasts', description: 'A fun, hands-on way to grow gourmet mushrooms.' },
    { title: 'Families & Kids', description: 'A unique learning experience about nature and biology.' },
    { title: 'Educators & Schools', description: 'A great STEM learning tool for biology and environmental science.' },
    { title: 'Chefs & Food Lovers', description: 'Enjoy fresh, homegrown mushrooms in your kitchen.' }
  ];

  const appFeatures = [
    { title: 'Intuitive Dashboard', description: 'Displays environmental metrics, controls ventilation, and lighting.' },
    { title: 'Live Camera Feed', description: 'View growth progress from three angles.' },
    { title: 'AI Growing Assistant', description: 'Provides advice based on real-time data.' },
    { title: 'User Community', description: 'Share experiences, photos, and timelapse videos.' },
    { title: 'E-commerce Integration', description: 'Purchase mushroom-growing accessories with ease.' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <section className="py-24 flex-grow bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-8">
            <Link to="/products" className="inline-flex items-center text-brand-navy hover:text-brand-teal transition-colors duration-300">
              <ArrowLeft size={16} className="mr-2" />
              Back to Products
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center scrolled-section mb-20">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-medium bg-brand-teal/10 text-brand-teal rounded-full mb-3">
                FEATURED PRODUCT
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
                Mushroom-in-a-Box
              </h1>
              <p className="text-gray-600 mb-6 text-lg">
                A modern mushroom-growing device that allows mushroom enthusiasts to easily monitor and control the
                growing environment from home or office. With a modern dome-shaped design, integrated
                sensors, and a monitoring system, Mushroom Box provides a convenient and scientific
                mushroom-growing experience.
              </p>
              
              <div className="mt-8">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button className="px-6 py-3 bg-brand-teal hover:bg-brand-teal/90 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
                      Pre-order Now
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-full sm:max-w-md overflow-y-auto">
                    <div className="p-4">
                      <h2 className="text-2xl font-bold text-brand-navy mb-6">Pre-order Now</h2>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 gap-4">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={form.name}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={form.email}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                            />
                          </div>
                          <div>
                            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
                            <input
                              type="number"
                              id="quantity"
                              name="quantity"
                              min="1"
                              value={form.quantity}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                            />
                          </div>
                          <div>
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Shipping Address</label>
                            <input
                              type="text"
                              id="address"
                              name="address"
                              value={form.address}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                            />
                          </div>
                          <div>
                            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                            <Select
                              value={form.country}
                              onValueChange={(value) => setForm(prev => ({ ...prev, country: value }))}
                              required
                            >
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a country" />
                              </SelectTrigger>
                              <SelectContent className="max-h-80">
                                {countries.map(country => (
                                  <SelectItem key={country} value={country}>
                                    {country}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                            <textarea
                              id="message"
                              name="message"
                              rows={3}
                              value={form.message}
                              onChange={handleChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                            />
                          </div>
                          <div className="text-center mt-4">
                            <button
                              type="submit"
                              disabled={submitting}
                              className="w-full px-6 py-3 bg-brand-teal hover:bg-brand-teal/90 text-white font-medium rounded-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                              {submitting ? "Processing..." : "Submit Pre-order"}
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-2 bg-gradient-to-r from-brand-teal to-brand-blue rounded-lg opacity-30 blur-lg animate-pulse"></div>
                <div className="relative glassmorphism overflow-hidden rounded-lg p-1">
                  <div className="bg-white rounded-lg overflow-hidden">
                    <img 
                      src="/images/mushroom-box/mushroombox5.jpg" 
                      alt="Mushroom growing kit" 
                      className="w-full h-auto object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-20 scrolled-section">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-navy mb-4">Why Mushroom Box?</h2>
              <div className="h-1 w-20 bg-brand-teal mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <ul className="space-y-4">
                  {benefits.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 w-5 h-5 bg-brand-teal/20 text-brand-teal rounded-full flex items-center justify-center mr-3 mt-1">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center justify-center">
                <img src="/images/mushroom-box/mushroombox3.png" alt="Mushroom Box Benefits" className="rounded-lg max-h-96 object-contain" />
              </div>
            </div>
          </div>
          
          <div className="mb-20 scrolled-section">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-navy mb-4">Who Is It For?</h2>
              <div className="h-1 w-20 bg-brand-teal mx-auto"></div>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {audiences.map((audience, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <Users className="text-brand-teal w-6 h-6 mr-2" />
                    <h3 className="font-bold text-brand-navy">{audience.title}</h3>
                  </div>
                  <p className="text-gray-600">{audience.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-20 scrolled-section">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-navy mb-4">Key Features</h2>
              <div className="h-1 w-20 bg-brand-teal mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">Our innovative system comes with everything you need for successful mushroom cultivation.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="text-brand-teal mb-4">{feature.icon}</div>
                  <h3 className="font-bold text-lg text-brand-navy mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-20 scrolled-section">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-navy mb-4">Companion Mobile App</h2>
              <div className="h-1 w-20 bg-brand-teal mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">Control and monitor your Mushroom Box from anywhere with our smart mobile application.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-6">
                  {appFeatures.map((feature, index) => (
                    <li key={index} className="flex">
                      <div className="flex-shrink-0 h-12 w-12 bg-brand-teal/10 rounded-full flex items-center justify-center mr-4">
                        <Smartphone className="text-brand-teal h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-brand-navy">{feature.title}</h4>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="bg-gradient-to-r from-brand-teal to-brand-blue p-1 rounded-3xl shadow-xl">
                  <div className="bg-white rounded-3xl overflow-hidden">
                    <img src="/images/mushroom-box/mushroombox1.png" alt="Mushroom Box Mobile App" className="w-full h-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-20 scrolled-section">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-navy mb-4">Timeline & Pricing</h2>
              <div className="h-1 w-20 bg-brand-teal mx-auto mb-6"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="relative pl-8 space-y-8 before:absolute before:inset-0 before:h-full before:border-l-2 before:border-brand-teal/30 before:left-4">
                  {timeline.map((item, index) => (
                    <div key={index} className="relative">
                      <div className="absolute -left-8 bg-brand-teal text-white w-8 h-8 rounded-full flex items-center justify-center">
                        <Clock className="h-4 w-4" />
                      </div>
                      <div className="bg-white p-5 rounded-lg shadow-md">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-bold text-brand-navy">{item.phase}</h4>
                          <span className="text-sm bg-brand-teal/10 text-brand-teal px-2 py-1 rounded">{item.time}</span>
                        </div>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col justify-center">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold text-brand-navy mb-4">Pricing</h3>
                  <div className="flex items-end mb-6">
                    <span className="text-4xl font-bold text-brand-teal">$499</span>
                    <span className="text-gray-500 ml-2">MSRP (To Be Discussed)</span>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-600">Pre-order now to be among the first to experience the Mushroom Box when it launches.</p>
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button className="w-full bg-brand-teal hover:bg-brand-teal/90 text-white font-medium rounded-lg transition-all duration-300">
                          Pre-order Now
                        </Button>
                      </SheetTrigger>
                      <SheetContent side="right" className="w-full sm:max-w-md overflow-y-auto">
                        <div className="p-4">
                          <h2 className="text-2xl font-bold text-brand-navy mb-6">Pre-order Now</h2>
                          <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 gap-4">
                              <div>
                                <label htmlFor="name-drawer" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input
                                  type="text"
                                  id="name-drawer"
                                  name="name"
                                  value={form.name}
                                  onChange={handleChange}
                                  required
                                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                                />
                              </div>
                              <div>
                                <label htmlFor="email-drawer" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input
                                  type="email"
                                  id="email-drawer"
                                  name="email"
                                  value={form.email}
                                  onChange={handleChange}
                                  required
                                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                                />
                              </div>
                              <div>
                                <label htmlFor="quantity-drawer" className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
                                <input
                                  type="number"
                                  id="quantity-drawer"
                                  name="quantity"
                                  min="1"
                                  value={form.quantity}
                                  onChange={handleChange}
                                  required
                                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                                />
                              </div>
                              <div>
                                <label htmlFor="address-drawer" className="block text-sm font-medium text-gray-700 mb-1">Shipping Address</label>
                                <input
                                  type="text"
                                  id="address-drawer"
                                  name="address"
                                  value={form.address}
                                  onChange={handleChange}
                                  required
                                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                                />
                              </div>
                              <div>
                                <label htmlFor="country-drawer" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                                <Select
                                  value={form.country}
                                  onValueChange={(value) => setForm(prev => ({ ...prev, country: value }))}
                                  required
                                >
                                  <SelectTrigger id="country-drawer" className="w-full">
                                    <SelectValue placeholder="Select a country" />
                                  </SelectTrigger>
                                  <SelectContent className="max-h-80">
                                    {countries.map(country => (
                                      <SelectItem key={`drawer-${country}`} value={country}>
                                        {country}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </div>
                              <div>
                                <label htmlFor="message-drawer" className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                                <textarea
                                  id="message-drawer"
                                  name="message"
                                  rows={3}
                                  value={form.message}
                                  onChange={handleChange}
                                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                                />
                              </div>
                              <div className="text-center mt-4">
                                <button
                                  type="submit"
                                  disabled={submitting}
                                  className="w-full px-6 py-3 bg-brand-teal hover:bg-brand-teal/90 text-white font-medium rounded-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                  {submitting ? "Processing..." : "Submit Pre-order"}
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </SheetContent>
                    </Sheet>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-12 scrolled-section">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-navy mb-4">Partnerships</h2>
              <div className="h-1 w-20 bg-brand-teal mx-auto mb-6"></div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-gray-600 mb-6">
                We are looking for partners and distributors to expand Mushroom Box ecosystem. Ideal partners are operators and suppliers of mushroom seeds. Mushroom Box is designed and made in Vietnam.
              </p>
              <p className="text-gray-700 font-medium">If you're interested, please reach out.</p>
              <div className="flex justify-center mt-6">
                <Button className="px-6 py-3 bg-brand-navy hover:bg-brand-navy/90 text-white font-medium rounded-lg transition-all duration-300">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
          
          <div className="fixed bottom-8 right-8 z-20 md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button className="px-6 py-3 bg-brand-teal hover:bg-brand-teal/90 text-white font-medium rounded-lg shadow-lg">
                  Pre-order Now
                </Button>
              </SheetTrigger>
              <SheetContent side="bottom" className="h-[90vh] rounded-t-xl overflow-y-auto">
                <div className="p-4">
                  <h2 className="text-2xl font-bold text-brand-navy mb-6">Pre-order Now</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label htmlFor="name-mobile" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                          type="text"
                          id="name-mobile"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="email-mobile" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                          type="email"
                          id="email-mobile"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="quantity-mobile" className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
                        <input
                          type="number"
                          id="quantity-mobile"
                          name="quantity"
                          min="1"
                          value={form.quantity}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="address-mobile" className="block text-sm font-medium text-gray-700 mb-1">Shipping Address</label>
                        <input
                          type="text"
                          id="address-mobile"
                          name="address"
                          value={form.address}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="country-mobile" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                        <Select
                          value={form.country}
                          onValueChange={(value) => setForm(prev => ({ ...prev, country: value }))}
                          required
                        >
                          <SelectTrigger id="country-mobile" className="w-full">
                            <SelectValue placeholder="Select a country" />
                          </SelectTrigger>
                          <SelectContent className="max-h-80">
                            {countries.map(country => (
                              <SelectItem key={`mobile-${country}`} value={country}>
                                {country}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label htmlFor="message-mobile" className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                        <textarea
                          id="message-mobile"
                          name="message"
                          rows={3}
                          value={form.message}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                        />
                      </div>
                      <div className="text-center mt-4">
                        <button
                          type="submit"
                          disabled={submitting}
                          className="w-full px-6 py-3 bg-brand-teal hover:bg-brand-teal/90 text-white font-medium rounded-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          {submitting ? "Processing..." : "Submit Pre-order"}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MushroomInBox;
