
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Package, BookOpen, Home, Factory, Trees, Microscope, Server, GraduationCap, Box } from 'lucide-react';
import { Navbar1 } from '@/components/ui/shadcnblocks-com-navbar1';
import Footer from '@/components/ui/footer';
import { useScrollAnimation } from '@/lib/animations';
import { Helmet } from "react-helmet";

const Products = () => {
  useScrollAnimation();
  
  useEffect(() => {
    document.title = "Products | Alpha Bits";
  }, []);
  
  const productCategories = [
    {
      id: 'commercial-iot-solutions',
      title: 'Commercial IoT Solutions',
      description: 'Smart digital twin technologies designed for businesses and organizations to optimize operations and improve efficiency.',
      icon: <Server size={40} className="text-brand-navy mb-4" />,
      products: [
        {
          id: 'office-home',
          title: 'Digital Twin for Office & Home',
          description: 'Smart monitoring and optimization system for residential and office spaces to reduce energy consumption.',
          icon: <Home size={32} className="text-brand-teal mb-2" />,
          image: '/images/aiot/energytwin_ss1.jpg',
        },
        {
          id: 'farm',
          title: 'Digital Twin for Farm',
          description: 'Comprehensive digital modeling for agricultural operations to maximize yield and minimize resource usage.',
          icon: <Trees size={32} className="text-brand-green mb-2" />,
          image: '/images/aiot/digitalfarm_aofarm1.png',
        },
        {
          id: 'factory',
          title: 'Digital Twin for Factory',
          description: 'End-to-end manufacturing process simulation and optimization for industrial facilities.',
          icon: <Factory size={32} className="text-brand-navy mb-2" />,
          image: '/images/aiot/digitalfactory_1.jpg',
        }
      ]
    },
    {
      id: 'education-products',
      title: 'Education Products',
      description: 'Interactive and educational products that combine AI and IoT technologies to make learning fun and engaging for students of all ages.',
      icon: <GraduationCap size={40} className="text-brand-green mb-4" />,
      products: [
        {
          id: 'mushroom-in-a-box',
          title: 'Mushroom-in-a-Box',
          description: 'A complete kit for growing gourmet mushrooms at home with sustainable packaging and easy-to-follow instructions.',
          icon: <Microscope size={32} className="text-brand-teal mb-2" />,
          image: '/images/mushroom-box/mushroombox3.png',
        },
        {
          id: 'farm-in-box',
          title: 'Farm In Box',
          description: 'A comprehensive educational package designed for schools to teach sustainable farming practices and environmental science.',
          icon: <BookOpen size={32} className="text-brand-green mb-2" />,
          image: '/images/farminbox/farminbox_box1.jpg',
        },
        {
          id: 'alpha-cube',
          title: 'Alpha Cube',
          description: 'Coming Summer 2025 - Our most innovative educational product yet. A mysterious combination of technology and nature.',
          icon: <Box size={32} className="text-brand-teal mb-2" />,
          image: '/images/alpha-cube/teaser.png',
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Innovative AIoT Products | Alpha Bits</title>
        <meta name="description" content="Discover Alpha Bits' cutting-edge products designed to revolutionize agriculture, energy management, and education - from Digital Twin technologies to Farm In Box educational kits." />
        <meta name="keywords" content="AIoT Products, Digital Twin, Farm In Box, IoT Solutions, Smart Agriculture, Alpha Bits, Educational Products" />
        <meta property="og:title" content="Innovative AIoT Products | Alpha Bits" />
        <meta property="og:description" content="Discover cutting-edge products designed to revolutionize agriculture, energy management, and education, making technology accessible to everyone." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alphabits.team/products" />
        <meta property="og:image" content="/images/aiot/digitalfactory_1.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      
      <Navbar1 />
      <section className="py-16 flex-grow bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 scrolled-section">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-brand-teal/10 text-brand-teal rounded-full mb-3">
              OUR PRODUCTS
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">
              Innovative Solutions
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our cutting-edge products designed to revolutionize agriculture, energy management, and education, making technology accessible to everyone.
            </p>
          </div>
          
          {productCategories.map((category, catIndex) => (
            <div key={category.id} className="mb-20 scrolled-section">
              <div className="mb-10 flex items-center">
                {category.icon}
                <div className="ml-4">
                  <h2 className="text-3xl font-bold text-brand-navy relative inline-block after:content-[''] after:absolute after:w-full after:h-1 after:bg-brand-teal/50 after:left-0 after:bottom-0 after:rounded-full">
                    {category.title}
                  </h2>
                  <p className="text-gray-600 mt-3 max-w-3xl">
                    {category.description}
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
                {category.products.map((product, index) => (
                  <Link 
                    key={product.id} 
                    to={`/products/${product.id}`}
                    className={`group relative transition-all duration-500 ${
                      catIndex % 2 === 0 
                        ? 'transform hover:-translate-y-2' 
                        : 'transform hover:translate-y-2'
                    }`}
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-lg">
                      <div className={`absolute ${index % 2 === 0 ? '-top-10 -right-10' : '-bottom-10 -left-10'} w-20 h-20 rounded-full bg-gradient-to-br from-brand-teal/30 to-brand-green/30 blur-lg`}></div>
                      <div className={`absolute ${index % 2 === 0 ? '-bottom-10 -left-10' : '-top-10 -right-10'} w-16 h-16 rounded-full bg-gradient-to-br from-brand-navy/30 to-brand-blue/30 blur-lg`}></div>
                      
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                        <img 
                          src={product.image} 
                          alt={product.title}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      
                      <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform transition-transform duration-500 group-hover:translate-y-2">
                        <div className="flex items-start mb-2">
                          <div className="p-2 bg-white/90 backdrop-blur-sm rounded-full">
                            {product.icon}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {product.title}
                        </h3>
                        <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-2 transition-all duration-500">
                          <p className="text-white/90 text-sm">
                            {product.description}
                          </p>
                          <span className="inline-flex items-center text-white font-medium mt-3 group-hover:underline">
                            Learn more <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Products;
