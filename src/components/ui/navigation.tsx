
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Home, Package, Briefcase, Users, Info, MapPin, PhoneCall, Factory, Trees, BookOpen, Lightbulb, Code, Calendar, FileText, Server, GraduationCap, Cube } from 'lucide-react';
import { Navbar1 } from './shadcnblocks-com-navbar1';

const Navigation = () => {
  const location = useLocation();

  // Set document title based on location
  useEffect(() => {
    const path = location.pathname;
    
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
    } else if (path.startsWith('/experiences')) {
      document.title = 'Experiences | Alpha Bits';
    } else if (path.startsWith('/blog')) {
      document.title = 'Blog | Alpha Bits';
    }
  }, [location]);

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
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
            title: "Commercial IoT Solutions",
            description: "Smart digital twin solutions for businesses and organizations",
            icon: <Server className="size-5 shrink-0" />,
            url: "#",
            items: [
              {
                title: "Digital Twin for Office & Home",
                description: "Smart monitoring and optimization system for energy management",
                icon: <Home className="size-5 shrink-0" />,
                url: "/products/office-home",
              },
              {
                title: "Digital Twin for Farm",
                description: "Comprehensive digital modeling for agricultural operations",
                icon: <Trees className="size-5 shrink-0" />,
                url: "/products/farm",
              },
              {
                title: "Digital Twin for Factory",
                description: "End-to-end manufacturing process simulation and optimization",
                icon: <Factory className="size-5 shrink-0" />,
                url: "/products/factory",
              },
            ]
          },
          {
            title: "Education Products",
            description: "Interactive learning solutions for educational institutions",
            icon: <GraduationCap className="size-5 shrink-0" />,
            url: "#",
            items: [
              {
                title: "Mushroom-in-a-Box",
                description: "A complete kit for growing gourmet mushrooms at home",
                icon: <Package className="size-5 shrink-0" />,
                url: "/products/mushroom-in-box",
              },
              {
                title: "Farm In Box",
                description: "Educational package for schools to teach sustainable farming",
                icon: <BookOpen className="size-5 shrink-0" />,
                url: "/products/farm-in-box",
              },
              {
                title: "Alpha Cube",
                description: "Coming Summer 2025 - Our most innovative educational product yet",
                icon: <Cube className="size-5 shrink-0" />,
                url: "/products/alpha-cube",
              },
            ]
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
          {
            title: "Software Development",
            description: "Custom ERP, CRM, HRM systems and AI-powered solutions",
            icon: <Code className="size-5 shrink-0" />,
            url: "/services/software-development",
          },
        ],
      },
      {
        title: "Experiences",
        url: "/experiences",
        items: [
          {
            title: "AO Farm",
            description: "Visit our sustainable agriculture research facility",
            icon: <Trees className="size-5 shrink-0" />,
            url: "/experiences/ao-farm",
          },
          {
            title: "Events & Meet-ups",
            description: "Join our community events and technology discussions",
            icon: <Calendar className="size-5 shrink-0" />,
            url: "/experiences/events",
          },
        ],
      },
      { title: "Blog", url: "/blog", icon: <FileText className="size-5 shrink-0" /> },
      { title: "About", url: "/about", icon: <Info className="size-5 shrink-0" /> },
      { title: "Locations", url: "/locations", icon: <MapPin className="size-5 shrink-0" /> },
      { title: "Contact", url: "/contact", icon: <PhoneCall className="size-5 shrink-0" /> },
    ]
  };

  return <Navbar1 {...navData} />;
};

export default Navigation;
