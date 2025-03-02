
import { useEffect } from 'react';
import { Building, Users, Lightbulb, Image } from 'lucide-react';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { useScrollAnimation } from '@/lib/animations';

const About = () => {
  useScrollAnimation();
  
  useEffect(() => {
    document.title = "About Us | Alpha Bits";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-brand-navy to-brand-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-pattern"></div>
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-teal/20 rounded-bl-full transform rotate-45"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-brand-navy/30 rounded-tr-full"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto scrolled-section">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-white/10 text-white rounded-full mb-3">
              ABOUT US
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transforming Ideas into Innovative Solutions
            </h1>
            <p className="text-xl text-white/80">
              We are a team of passionate technologists, committed to sustainable innovation and delivering cutting-edge solutions for modern businesses.
            </p>
          </div>
        </div>
      </section>
      
      {/* Vision Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="scrolled-section">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-teal/10">
                <Lightbulb size={32} className="text-brand-teal" />
              </div>
              <h2 className="text-3xl font-bold text-brand-navy mb-6">Our Vision</h2>
              <p className="text-gray-700 mb-6">
                At Alpha Bits, we envision a world where technology enhances human potential while respecting our planet's resources. Our mission is to develop innovative, sustainable solutions that bridge the gap between cutting-edge technology and everyday accessibility.
              </p>
              <p className="text-gray-700 mb-6">
                Founded in 2020, we've quickly established ourselves as pioneers in AIoT product development and sustainable agricultural technology, with a focus on creating products that are both innovative and environmentally responsible.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-2 bg-brand-teal/10 text-brand-navy px-4 py-2 rounded-full text-sm font-medium">
                  <span className="w-3 h-3 bg-brand-teal rounded-full"></span>
                  Innovation
                </div>
                <div className="flex items-center gap-2 bg-brand-blue/10 text-brand-navy px-4 py-2 rounded-full text-sm font-medium">
                  <span className="w-3 h-3 bg-brand-blue rounded-full"></span>
                  Sustainability
                </div>
                <div className="flex items-center gap-2 bg-brand-navy/10 text-brand-navy px-4 py-2 rounded-full text-sm font-medium">
                  <span className="w-3 h-3 bg-brand-navy rounded-full"></span>
                  Excellence
                </div>
              </div>
            </div>
            
            <div className="relative scrolled-section">
              <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=1000&auto=format&fit=crop" 
                  alt="Alpha Bits Office Space" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-brand-teal/20 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 bg-gray-50 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 scrolled-section">
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-blue/10 mx-auto">
              <Users size={32} className="text-brand-blue" />
            </div>
            <h2 className="text-3xl font-bold text-brand-navy mb-6">Our Team</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We bring together diverse talents and expertise to create solutions that make a difference. Our team is passionate about technology, innovation, and sustainability.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 scrolled-section">
            <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1000&auto=format&fit=crop" 
                  alt="Alpha Bits Team Collaboration" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-navy mb-2">Leadership</h3>
                <p className="text-gray-600">
                  Our leadership team brings decades of combined experience in technology, agriculture, and business development to guide our vision and strategy.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1000&auto=format&fit=crop" 
                  alt="Alpha Bits Development Team" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-navy mb-2">Development</h3>
                <p className="text-gray-600">
                  Our engineers and developers are at the forefront of AIoT technology, constantly pushing boundaries to create innovative solutions.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1000&auto=format&fit=crop" 
                  alt="Alpha Bits Operations Team" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-navy mb-2">Operations</h3>
                <p className="text-gray-600">
                  Our operations team ensures smooth execution of all projects, maintaining the highest standards of quality and efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Offices Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scrolled-section">
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-navy/10 mx-auto">
              <Building size={32} className="text-brand-navy" />
            </div>
            <h2 className="text-3xl font-bold text-brand-navy mb-6">Our Offices</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Visit us at our modern facilities in Vietnam, where innovation comes to life.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 scrolled-section">
            <div className="glassmorphism p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/5 to-brand-teal/10 transform transition-transform duration-500 group-hover:scale-110"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-brand-navy mb-4">HQ Office</h3>
                <p className="text-gray-700 mb-6">
                  Lakeview 1, Thu Thiem, District 2<br />
                  Ho Chi Minh City, Vietnam
                </p>
                <div className="rounded-xl overflow-hidden shadow-lg mb-6 h-72">
                  <img 
                    src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=1000&auto=format&fit=crop" 
                    alt="Alpha Bits HQ Office" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-600">
                  Our headquarters features modern workspaces designed to foster creativity and collaboration, with stunning views of the Thu Thiem area.
                </p>
              </div>
            </div>
            
            <div className="glassmorphism p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/5 to-brand-teal/10 transform transition-transform duration-500 group-hover:scale-110"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-brand-navy mb-4">AO Farm</h3>
                <p className="text-gray-700 mb-6">
                  Bien Hoa City<br />
                  Dong Nai, Vietnam
                </p>
                <div className="rounded-xl overflow-hidden shadow-lg mb-6 h-72">
                  <img 
                    src="https://images.unsplash.com/photo-1603204077779-bed963ea7d0e?q=80&w=1000&auto=format&fit=crop" 
                    alt="AO Farm Facility" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-600">
                  Our AO Farm facility serves as both a development center for our agricultural technology and an educational experience for visitors interested in sustainable farming.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className="py-20 bg-gray-50 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 scrolled-section">
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-teal/10 mx-auto">
              <Image size={32} className="text-brand-teal" />
            </div>
            <h2 className="text-3xl font-bold text-brand-navy mb-6">Office Gallery</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Take a visual tour of our modern facilities and get a glimpse of our daily operations.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 scrolled-section">
            <div className="relative rounded-xl overflow-hidden h-40 md:h-64 transition-all duration-300 hover:shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=1000&auto=format&fit=crop" 
                alt="Alpha Bits Office Space" 
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40 md:h-64 transition-all duration-300 hover:shadow-lg md:col-span-2">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1000&auto=format&fit=crop" 
                alt="Alpha Bits Team" 
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40 md:h-64 transition-all duration-300 hover:shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1603204077779-bed963ea7d0e?q=80&w=1000&auto=format&fit=crop" 
                alt="AO Farm" 
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40 md:h-64 transition-all duration-300 hover:shadow-lg md:col-span-2">
              <img 
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1000&auto=format&fit=crop" 
                alt="Alpha Bits Office" 
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-40 md:h-64 transition-all duration-300 hover:shadow-lg md:col-span-2">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1000&auto=format&fit=crop" 
                alt="Development Team" 
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
