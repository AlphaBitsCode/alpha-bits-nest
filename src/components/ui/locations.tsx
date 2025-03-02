
import { MapPin, Phone, Clock } from 'lucide-react';
import { useScrollAnimation } from '@/lib/animations';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Locations = () => {
  useScrollAnimation();
  
  const locations = [
    {
      name: 'HQ Office',
      address: 'Lakeview 1, Thu Thiem, District 2, Ho Chi Minh, Vietnam',
      phone: '+84 28 1234 5678',
      image: 'images/office/office_1.jpg',
      mapUrl: 'https://maps.app.goo.gl/Lqkdzj2wKofe11My9'
    },
    {
      name: 'AO Farm',
      address: 'Bien Hoa City, Dong Nai, Vietnam',
      phone: '+84 28 8765 4321',
      image: 'images/office/office_aofarm1.jpg',
      mapUrl: 'https://maps.app.goo.gl/cbXZ6upchgHPwpWW8'
    }
  ];

  return (
    <section id="locations" className="py-20 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scrolled-section">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-brand-blue/10 text-brand-blue rounded-full mb-3">
            OUR LOCATIONS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Where to Find Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Visit our headquarters or farm location to experience our innovations firsthand.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 scrolled-section">
          {locations.map((location, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-xl shadow-lg h-full transition-all duration-300 hover:shadow-xl">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={location.image} 
                    alt={location.name} 
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                <div className="p-6 bg-white border-t border-gray-100">
                  <h3 className="text-xl font-bold text-brand-navy mb-3">{location.name}</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin size={20} className="text-brand-teal mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-gray-600">{location.address}</p>
                        <a 
                          href={location.mapUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm text-brand-blue hover:text-brand-navy inline-block mt-1 transition-colors duration-300"
                        >
                          View on Google Maps →
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone size={20} className="text-brand-teal mr-3 flex-shrink-0 mt-1" />
                      <p className="text-gray-600">{location.phone}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center scrolled-section">
          <p className="text-gray-600 mb-6">
            Planning a visit? Contact us in advance to schedule a meeting or tour.
          </p>
          <Button asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Locations;
