
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Package, BookOpen } from 'lucide-react';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { useScrollAnimation } from '@/lib/animations';

const Products = () => {
  useScrollAnimation();
  
  useEffect(() => {
    document.title = "Products | Alpha Bits";
  }, []);
  
  const products = [
    {
      id: 'mushroom-in-a-box',
      title: 'Mushroom-in-a-Box',
      description: 'A complete kit for growing gourmet mushrooms at home with sustainable packaging and easy-to-follow instructions.',
      icon: <Package size={40} className="text-brand-teal mb-4" />,
      image: 'https://images.unsplash.com/photo-1608283234908-477a0c9b34c3?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: 'farm-in-box',
      title: 'Farm In Box',
      description: 'A comprehensive educational package designed for schools to teach sustainable farming practices and environmental science.',
      icon: <BookOpen size={40} className="text-brand-teal mb-4" />,
      image: 'https://images.unsplash.com/photo-1603204077779-bed963ea7d0e?q=80&w=1000&auto=format&fit=crop',
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <section className="py-24 flex-grow bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 scrolled-section">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-brand-teal/10 text-brand-teal rounded-full mb-3">
              OUR PRODUCTS
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">
              Innovative Solutions
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our cutting-edge products designed to revolutionize agriculture and education, making technology accessible to everyone.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 scrolled-section">
            {products.map((product, index) => (
              <Link 
                key={index} 
                to={`/products/${product.id}`}
                className="group relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-brand-navy/5 rounded-tr-full"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center md:justify-start">
                    {product.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-3">{product.title}</h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  
                  <div className="flex justify-center md:justify-start">
                    <span className="inline-flex items-center text-brand-teal font-medium group-hover:underline">
                      Learn more <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
                
                <div className="absolute -right-20 -bottom-20 w-40 h-40 opacity-10">
                  <div className="w-full h-full relative overflow-hidden rounded-full">
                    <img 
                      src={product.image}
                      alt={product.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Products;

