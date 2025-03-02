
import Locations from '@/components/ui/locations';
import { Navbar1 } from '@/components/ui/shadcnblocks-com-navbar1';
import Footer from '@/components/ui/footer';
import { MapPin } from 'lucide-react';

const LocationsPage = () => {
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
      <div className="pt-20">
        <Locations />
      </div>
      <Footer />
    </div>
  );
};

export default LocationsPage;
