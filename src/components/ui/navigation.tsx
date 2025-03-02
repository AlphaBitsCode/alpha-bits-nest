
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Home, Package, Briefcase, Users, Info, MapPin, PhoneCall, Rocket } from 'lucide-react';
import { Navbar1 } from './shadcnblocks-com-navbar1';

const Navigation = () => {
  const location = useLocation();

  // Determine the active tab based on the current location
  useEffect(() => {
    const path = location.pathname;
    
    // Set active tab based on current path
    if (path === '/') {
      document.title = 'Home | Alpha Bits';
    } else if (path.startsWith('/products')) {
      document.title = 'Products | Alpha Bits';
    } else if (path.startsWith('/services')) {
      document.title = 'Services | Alpha Bits';
    } else if (path.startsWith('/about')) {
      document.title = 'About | Alpha Bits';
    } else if (path === '/locations') {
      document.title = 'Locations | Alpha Bits';
    } else if (path === '/contact') {
      document.title = 'Contact | Alpha Bits';
    } else if (path === '/experience') {
      document.title = 'Experience | Alpha Bits';
    }
  }, [location]);

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
            icon: <Package className="size-5 shrink-0" />,
            url: "/products/mushroom-in-a-box",
          },
          {
            title: "Farm In Box",
            description: "Educational package for schools to teach sustainable farming",
            icon: <Home className="size-5 shrink-0" />,
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
            icon: <Briefcase className="size-5 shrink-0" />,
            url: "/services/aiot-product-development",
          },
          {
            title: "CTO-as-a-Service",
            description: "Access top-tier technical leadership without the overhead",
            icon: <Users className="size-5 shrink-0" />,
            url: "/services/cto-as-a-service",
          },
        ],
      },
      { title: "Experience", url: "/experience" },
      { title: "About", url: "/about" },
      { title: "Locations", url: "/locations" },
      { title: "Contact", url: "/contact" },
    ],
    mobileExtraLinks: [
      { name: "Experience", url: "/experience" },
      { name: "About", url: "/about" },
      { name: "Locations", url: "/locations" },
      { name: "Contact", url: "/contact" },
    ]
  };

  return <Navbar1 {...navData} />;
};

export default Navigation;
