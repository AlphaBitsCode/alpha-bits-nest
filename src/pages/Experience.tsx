import { useEffect } from 'react';
import { Navbar1 } from '@/components/ui/shadcnblocks-com-navbar1';
import Footer from '@/components/ui/footer';
import { MapPin } from 'lucide-react';

const ExperiencePage = () => {
  const navData = {
    logo: {
      url: "/",
      src: "/images/AB_Logo_icon.png",
      alt: "Alpha Bits Logo",
      title: "Alpha Bits",
    },
    menu: [
      { title: "Home", url: "/" },
      {
        title: "Products",
        url: "/products",
        items: [
          {
            title: "Mushroom-in-a-Box",
            description: "A complete kit for growing gourmet mushrooms at home",
            icon: <MapPin className="size-5 shrink-0" />,
            url: "/products/mushroom-in-a-box",
          },
          {
            title: "Farm In Box",
            description: "Educational package for schools to teach sustainable farming",
            icon: <MapPin className="size-5 shrink-0" />,
            url: "/products/farm-in-box",
          },
        ],
      },
      {
        title: "Services",
        url: "/services",
        items: [
          {
            title: "AIoT Product Development",
            description: "Smart, connected products that solve real-world problems",
            icon: <MapPin className="size-5 shrink-0" />,
            url: "/services/aiot-product-development",
          },
          {
            title: "CTO-as-a-Service",
            description: "Access top-tier technical leadership without the overhead",
            icon: <MapPin className="size-5 shrink-0" />,
            url: "/services/cto-as-a-service",
          },
        ],
      },
      { title: "About", url: "/about" },
      { title: "Experience", url: "/experience" },
      { title: "Locations", url: "/locations" },
      { title: "Contact", url: "/contact" },
    ]
  };
  
  return (
    <div className="min-h-screen">
      <Navbar1 {...navData} />
      <div className="pt-24">
        {/* AO Farm Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 scrolled-section">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-brand-navy/10 text-brand-navy rounded-full mb-3">
                EXPERIENCE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
                AO Farm - Digital Farm Labs
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Explore our innovative agricultural research facility where technology meets sustainability.
                AO Farm is where we develop and test our agricultural technology products.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="rounded-xl overflow-hidden scrolled-section">
                <img 
                  src="/images/office/office_aofarm1.jpg" 
                  alt="AO Farm Facility" 
                  className="w-full h-full object-cover hover-scale"
                />
              </div>
              <div className="flex flex-col justify-center scrolled-section">
                <h3 className="text-2xl font-bold text-brand-navy mb-4">Sustainable Agriculture Lab</h3>
                <p className="text-gray-600 mb-6">
                  Our AO Farm facility serves as both a research lab and a showcase for our agricultural technology innovations. 
                  Here, we develop sustainable farming solutions that address critical challenges in food production and security.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-brand-teal font-bold">01</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-brand-navy">Controlled Environment Agriculture</h4>
                      <p className="text-gray-600">Advanced hydroponic and aeroponic systems for year-round crop production.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-brand-teal font-bold">02</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-brand-navy">IoT Monitoring Systems</h4>
                      <p className="text-gray-600">Comprehensive sensor networks tracking environmental conditions in real-time.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-brand-teal font-bold">03</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-brand-navy">Mushroom Cultivation Lab</h4>
                      <p className="text-gray-600">Specialized facilities for developing and testing our mushroom cultivation technology.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col justify-center order-2 md:order-1 scrolled-section">
                <h3 className="text-2xl font-bold text-brand-navy mb-4">Visitor Experience</h3>
                <p className="text-gray-600 mb-6">
                  AO Farm isn't just a research lab — it's an educational experience. We offer guided tours and workshops for schools, 
                  businesses, and individuals interested in learning about sustainable agriculture and food technology.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-brand-teal font-bold">01</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-brand-navy">Educational Tours</h4>
                      <p className="text-gray-600">Experience hands-on demonstrations of modern farming techniques and technologies.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-brand-teal font-bold">02</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-brand-navy">Workshops & Training</h4>
                      <p className="text-gray-600">Participate in specialized workshops on mushroom cultivation and urban farming.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-brand-teal font-bold">03</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-brand-navy">Product Testing</h4>
                      <p className="text-gray-600">See our products in action and understand how they can be applied in various settings.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden order-1 md:order-2 scrolled-section">
                <img 
                  src="/images/office/office_aofarm2.jpg" 
                  alt="AO Farm Visitor Experience" 
                  className="w-full h-full object-cover hover-scale"
                />
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-xl text-gray-600 font-medium mb-6 scrolled-section">
                Book a tour of our AO Farm facility to see our innovations in action
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-brand-navy hover:bg-brand-navy/90 text-white font-medium rounded-lg transition-all duration-300 scrolled-section"
              >
                Schedule a Visit
              </a>
            </div>
          </div>
        </section>
        
        {/* Industry Experience Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 scrolled-section">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-brand-navy/10 text-brand-navy rounded-full mb-3">
                EXPERTISE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
                Our Industry Experience
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                With decades of combined experience in technology leadership and product development,
                our team brings unparalleled expertise to every project.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 hover:shadow-md transition-all duration-300 scrolled-section">
                <div className="w-14 h-14 rounded-lg bg-brand-teal/10 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-brand-navy mb-3">Product Development</h3>
                <p className="text-gray-600 mb-4">
                  Our team has successfully delivered over 50 digital and physical products across various industries,
                  from concept to market launch.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-2">✓</span>
                    <span>IoT device engineering</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-2">✓</span>
                    <span>Hardware-software integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-2">✓</span>
                    <span>User-centered design</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 hover:shadow-md transition-all duration-300 scrolled-section">
                <div className="w-14 h-14 rounded-lg bg-brand-teal/10 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-brand-navy mb-3">Technology Leadership</h3>
                <p className="text-gray-600 mb-4">
                  Our leadership team brings executive experience from leading technology companies,
                  with proven track records in digital transformation.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-2">✓</span>
                    <span>CTO and executive roles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-2">✓</span>
                    <span>Strategic technology planning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-2">✓</span>
                    <span>Digital transformation guidance</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 hover:shadow-md transition-all duration-300 scrolled-section">
                <div className="w-14 h-14 rounded-lg bg-brand-teal/10 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-brand-navy mb-3">Industry Knowledge</h3>
                <p className="text-gray-600 mb-4">
                  Deep domain expertise across multiple industries allows us to create tailored solutions
                  that address specific market challenges.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-2">✓</span>
                    <span>Agriculture & AgTech</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-2">✓</span>
                    <span>Education & EdTech</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-2">✓</span>
                    <span>Healthcare & MedTech</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default ExperiencePage;
