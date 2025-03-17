import { Book, Home, Menu, Briefcase, Package, Users, InfoIcon, MapPin, PhoneCall, Factory, Trees, Lightbulb, Server, GraduationCap, Box, Clock, FileText, Code, Calendar } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { LanguageSelector } from "./language-selector";
import { useEffect } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { 
  HoverCard,
  HoverCardTrigger,
  HoverCardContent
} from "@/components/ui/hover-card";

interface Badge {
  text: string;
  icon?: JSX.Element;
}

interface MenuItem {
  title: string;
  url?: string;
  description?: string;
  icon?: JSX.Element;
  items?: MenuItem[];
  badge?: Badge;
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  mobileExtraLinks?: {
    name: string;
    url: string;
  }[];
  auth?: {
    login: {
      text: string;
      url: string;
    };
    signup: {
      text: string;
      url: string;
    };
  };
}

const Navbar1 = ({
  logo = {
    url: "/",
    src: "/images/AB_Logo_icon.png",
    alt: "Alpha Bits Logo",
    title: "Alpha Bits",
  },
  menu = [
    { title: "Home", url: "/", icon: <Home className="size-5 shrink-0" /> },
    {
      title: "Products",
      url: "/products",
      items: [
        {
          title: "Commercial IoT Solutions",
          description: "Smart digital twin solutions for businesses and organizations",
          icon: <Server className="size-5 shrink-0" />,
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
              icon: <Book className="size-5 shrink-0" />,
              url: "/products/farm-in-box",
            },
            {
              title: "Alpha Cube",
              description: "Coming Summer 2025 - Our most innovative educational product yet",
              icon: <Box className="size-5 shrink-0" />,
              url: "/products/alpha-cube",
              badge: {
                text: "Coming Soon",
                icon: <Clock className="size-3 mr-1" />
              }
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
    { title: "About", url: "/about", icon: <InfoIcon className="size-5 shrink-0" /> },
    { title: "Locations", url: "/locations", icon: <MapPin className="size-5 shrink-0" /> },
    { title: "Contact", url: "/contact", icon: <PhoneCall className="size-5 shrink-0" /> },
  ],
  mobileExtraLinks = [
    { name: "About", url: "/about" },
    { name: "Experience", url: "/experience" },
    { name: "Locations", url: "/locations" },
    { name: "Contact", url: "/contact" },
  ],
  auth = {
    login: { text: "", url: "" },
    signup: { text: "", url: "" },
  },
}: Navbar1Props) => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);

    // Update document title based on current route
    const currentPage = menu.find(item => item.url === location.pathname);
    if (currentPage) {
      document.title = `${currentPage.title} | Alpha Bits`;
    } else {
      document.title = "Alpha Bits";
    }
  }, [location, menu]);

  return (
    <section className="py-1">
      <div className="container">
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            <Link to={logo.url} className="flex items-center gap-2">
              <img src={logo.src} className="w-8" alt={logo.alt} />
              <span className="text-lg font-semibold">{logo.title}</span>
            </Link>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-2">
            <LanguageSelector />
            {(auth.login.text || auth.signup.text) && (
              <div className="flex gap-2">
                {auth.login.text && (
                  <Button asChild variant="outline" size="sm">
                    <Link to={auth.login.url}>{auth.login.text}</Link>
                  </Button>
                )}
                {auth.signup.text && (
                  <Button asChild size="sm">
                    <Link to={auth.signup.url}>{auth.signup.text}</Link>
                  </Button>
                )}
              </div>
            )}          
          </div>
        </nav>
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <Link to={logo.url} className="flex items-center gap-2">
              <img src={logo.src} className="w-8" alt={logo.alt} />
              <span className="text-lg font-semibold">{logo.title}</span>
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full bg-white/30 backdrop-blur-sm border-white/20">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto bg-white/60 backdrop-blur-xl border border-white/30 shadow-xl">
                <SheetHeader>
                  <SheetTitle>
                    <Link to={logo.url} className="flex items-center gap-2">
                      <img src={logo.src} className="w-8" alt={logo.alt} />
                      <span className="text-lg font-semibold">
                        {logo.title}
                      </span>
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="my-4 flex flex-col gap-1.5">
                  <Link 
                    to="/" 
                    className="bg-white/30 backdrop-blur-sm px-4 py-1.5 rounded-lg hover:bg-white/40 transition-all duration-300 flex items-center gap-2 font-medium"
                  >
                    <Home size={18} strokeWidth={2} className="text-brand-navy" />
                    Home
                  </Link>
                  
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="products" className="border-none">
                      <div className="flex items-center">
                        <Link 
                          to="/products" 
                          className="flex-1 px-4 py-1.5 font-medium flex items-center gap-2"
                        >
                          <Package size={18} strokeWidth={2} className="text-brand-teal" />
                          Products
                        </Link>
                        <AccordionTrigger className="py-0 pr-3" />
                      </div>
                      <AccordionContent className="pt-1 pb-1 shadow-none">
                        <div className="bg-transparent p-1 rounded-lg space-y-1 shadow-none">
                          {menu[1].items?.map((item) => (
                            <Link
                              key={item.title}
                              to={item.url}
                              className="flex select-none gap-2 rounded-md p-1.5 leading-none outline-none transition-colors hover:bg-white/40 hover:text-primary"
                            >
                              {item.icon && (
                                <div className="bg-brand-teal/10 p-1.5 rounded-full">
                                  {item.icon}
                                </div>
                              )}
                              <div>
                                <div className="text-sm font-medium">{item.title}</div>
                                {item.description && (
                                  <p className="text-xs leading-snug text-muted-foreground line-clamp-1">
                                    {item.description}
                                  </p>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="services" className="border-none">
                      <div className="flex items-center">
                        <Link 
                          to="/services" 
                          className="flex-1 px-4 py-1.5 font-medium flex items-center gap-2"
                        >
                          <Briefcase size={18} strokeWidth={2} className="text-brand-blue" />
                          Services
                        </Link>
                        <AccordionTrigger className="py-0 pr-3" />
                      </div>
                      <AccordionContent className="pt-1 pb-1 shadow-none">
                        <div className="bg-transparent p-1 rounded-lg space-y-1 shadow-none">
                          {menu[2].items?.map((item) => (
                            <Link
                              key={item.title}
                              to={item.url}
                              className="flex select-none gap-2 rounded-md p-1.5 leading-none outline-none transition-colors hover:bg-white/40 hover:text-primary"
                            >
                              {item.icon && (
                                <div className="bg-brand-blue/10 p-1.5 rounded-full">
                                  {item.icon}
                                </div>
                              )}
                              <div>
                                <div className="text-sm font-medium">{item.title}</div>
                                {item.description && (
                                  <p className="text-xs leading-snug text-muted-foreground line-clamp-1">
                                    {item.description}
                                  </p>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  
                  <Link 
                    to="/experience" 
                    className="bg-white/30 backdrop-blur-sm px-4 py-1.5 rounded-lg hover:bg-white/40 transition-all duration-300 flex items-center gap-2 font-medium"
                  >
                    <Lightbulb size={18} strokeWidth={2} className="text-brand-green" />
                    Experience
                  </Link>
                  
                  <Link 
                    to="/about" 
                    className="bg-white/30 backdrop-blur-sm px-4 py-1.5 rounded-lg hover:bg-white/40 transition-all duration-300 flex items-center gap-2 font-medium"
                  >
                    <InfoIcon size={18} strokeWidth={2} className="text-brand-navy" />
                    About
                  </Link>
                  
                  <Link 
                    to="/locations" 
                    className="bg-white/30 backdrop-blur-sm px-4 py-1.5 rounded-lg hover:bg-white/40 transition-all duration-300 flex items-center gap-2 font-medium"
                  >
                    <MapPin size={18} strokeWidth={2} className="text-brand-blue" />
                    Locations
                  </Link>
                  
                  <Link 
                    to="/contact" 
                    className="bg-white/30 backdrop-blur-sm px-4 py-1.5 rounded-lg hover:bg-white/40 transition-all duration-300 flex items-center gap-2 font-medium"
                  >
                    <PhoneCall size={18} strokeWidth={2} className="text-brand-teal" />
                    Contact
                  </Link>
                  
                  <div className="flex justify-center mt-4 mb-2">
                    <LanguageSelector />
                  </div>
                  <div className="border-t border-gray-200/30 mt-2 pt-4 text-center">
                    <p className="text-sm text-muted-foreground">
                      <span className="italic font-medium">Alpha Bits</span> - Turning Ideas into Reality
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      {/* Make sure Google Translate element is accessible */}
      <div id="google_translate_element" className="hidden"></div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    // Handle first level of nested items
    return (
      <NavigationMenuItem key={item.title}>
        <Link to={item.url || "#"}>
          <NavigationMenuTrigger className="z-50 data-[state=open]:bg-accent/50 text-muted-foreground hover:text-brand-teal transition-colors duration-200">
            {item.title}
          </NavigationMenuTrigger>
        </Link>
        <NavigationMenuContent className="z-[1000]">
          <ul className="grid gap-3 p-4 w-[500px] md:w-[600px] grid-cols-2">
            {item.items.map((category) => (
              <li key={category.title} className="col-span-1">
                <Link 
                  to={category.url || "#"}
                  className="block font-medium mb-2 text-lg bg-gradient-to-r from-brand-teal to-brand-blue bg-clip-text text-transparent hover:from-brand-blue hover:to-brand-teal transition-all duration-300"
                >
                  <div className="flex items-center gap-2">
                    {category.icon && <span className="p-1.5 rounded-lg bg-gradient-to-r from-brand-teal/20 to-brand-blue/20 hover:from-brand-teal/30 hover:to-brand-blue/30 transition-all duration-300">{category.icon}</span>}
                    {category.title}
                  </div>
                </Link>
                <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                
                <ul className="space-y-2">
                  {category.items?.map((subItem) => (
                    <li key={subItem.title}>
                      <Link
                        className="flex select-none gap-2 rounded-md p-1.5 leading-none outline-none transition-colors hover:bg-brand-teal/10 hover:text-brand-teal"
                        to={subItem.url || "#"}
                      >
                        <div className="flex items-center gap-2">
                          {subItem.icon && <span className="bg-gradient-to-r from-brand-teal/10 to-brand-blue/10 hover:from-brand-teal/20 hover:to-brand-blue/20 p-1.5 rounded-lg transition-all duration-300">{subItem.icon}</span>}
                          <div className="flex-grow">
                            <div className="flex items-center">
                              <span className="text-sm font-medium">{subItem.title}</span>
                              {subItem.badge && (
                                <Badge className="ml-2 bg-brand-teal/20 text-brand-teal hover:bg-brand-teal/30 px-2 py-0 text-[10px] flex items-center">
                                  {subItem.badge.icon}
                                  <span>{subItem.badge.text}</span>
                                </Badge>
                              )}
                            </div>
                            {subItem.description && (
                              <p className="text-xs leading-snug text-muted-foreground mt-0.5">
                                {subItem.description}
                              </p>
                            )}
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <Link
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-brand-teal/10 hover:text-brand-teal"
        to={item.url || "#"}
      >
        {item.icon && <span className="mr-2">{item.icon}</span>}
        {item.title}
      </Link>
    </NavigationMenuItem>
  );
};

export { Navbar1 };
