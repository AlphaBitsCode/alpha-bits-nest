
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const LocationCard = ({ location }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <div className="h-60 overflow-hidden relative">
        <img 
          src={location.image} 
          alt={location.city} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h3 className="text-2xl font-bold">{location.city}</h3>
          <p className="text-white/80">{location.country}</p>
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start mb-4">
          <MapPin className="w-5 h-5 text-brand-teal mt-1 mr-3 flex-shrink-0" />
          <p className="text-gray-600">{location.address}</p>
        </div>
        
        <div className="flex items-start mb-4">
          <Phone className="w-5 h-5 text-brand-teal mt-1 mr-3 flex-shrink-0" />
          <p className="text-gray-600">{location.phone}</p>
        </div>
        
        <div className="flex items-start mb-6">
          <Mail className="w-5 h-5 text-brand-teal mt-1 mr-3 flex-shrink-0" />
          <p className="text-gray-600">{location.email}</p>
        </div>
        
        <div className="mt-auto">
          <Link to="/contact">
            <Button className="w-full bg-brand-navy hover:bg-brand-navy/90">
              Contact This Location
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Locations = () => {
  const [selectedTab, setSelectedTab] = useState('all');
  
  const locationData = [
    {
      id: 1,
      city: 'Da Nang',
      country: 'Vietnam',
      address: '123 Tech Park, Da Nang, Vietnam',
      phone: '+84 123 456 789',
      email: 'danang@alphabits.com',
      image: '/images/office/office_1.jpg',
      region: 'asia'
    },
    {
      id: 2,
      city: 'San Francisco',
      country: 'USA',
      address: '789 Innovation Drive, San Francisco, CA 94107',
      phone: '+1 415 555 1234',
      email: 'sf@alphabits.com',
      image: '/images/office/office_2.jpg',
      region: 'americas'
    },
    {
      id: 3,
      city: 'Berlin',
      country: 'Germany',
      address: '45 Kreuzberg Strasse, Berlin 10997',
      phone: '+49 30 1234 5678',
      email: 'berlin@alphabits.com',
      image: '/images/office/office_3.jpg',
      region: 'europe'
    },
    {
      id: 4,
      city: 'Singapore',
      country: 'Singapore',
      address: '10 Marina Boulevard, Singapore 018983',
      phone: '+65 6123 4567',
      email: 'singapore@alphabits.com',
      image: '/images/office/office_4.jpg',
      region: 'asia'
    }
  ];
  
  const filteredLocations = selectedTab === 'all' 
    ? locationData 
    : locationData.filter(location => location.region === selectedTab);
    
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Our Global Locations</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          With offices around the world, we're well-positioned to support your business wherever you are.
        </p>
      </div>
      
      <div className="flex justify-center mb-12">
        <div className="flex flex-wrap gap-2 justify-center">
          <Button 
            variant={selectedTab === 'all' ? 'default' : 'outline'}
            onClick={() => setSelectedTab('all')}
            className="rounded-full"
          >
            All Locations
          </Button>
          <Button 
            variant={selectedTab === 'asia' ? 'default' : 'outline'}
            onClick={() => setSelectedTab('asia')}
            className="rounded-full"
          >
            Asia
          </Button>
          <Button 
            variant={selectedTab === 'americas' ? 'default' : 'outline'}
            onClick={() => setSelectedTab('americas')}
            className="rounded-full"
          >
            Americas
          </Button>
          <Button 
            variant={selectedTab === 'europe' ? 'default' : 'outline'}
            onClick={() => setSelectedTab('europe')}
            className="rounded-full"
          >
            Europe
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredLocations.map(location => (
          <LocationCard key={location.id} location={location} />
        ))}
      </div>
    </div>
  );
};

export default Locations;
