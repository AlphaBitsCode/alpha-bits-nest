
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HighlightedItem {
  type: 'service' | 'product';
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  color: string;
  url: string;
}

interface ProductsServicesGridProps {
  items: HighlightedItem[];
}

export function ProductsServicesGrid({ items }: ProductsServicesGridProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-brand-teal/10 text-brand-teal rounded-full mb-3">
            SOLUTIONS
          </span>
          <h2 className="text-3xl font-bold mb-4 text-brand-navy">Our Products & Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our innovative solutions designed to transform the way you work, learn, and grow.
            From digital twins to smart farming, we have what you need.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <Link 
              key={index} 
              to={item.url}
              className="group relative bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="p-6 relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    {item.icon}
                  </div>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    item.type === 'product' ? 'bg-brand-green/10 text-brand-green' : 'bg-brand-blue/10 text-brand-blue'
                  }`}>
                    {item.type === 'product' ? 'PRODUCT' : 'SERVICE'}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-brand-navy group-hover:text-brand-navy/90">{item.title}</h3>
                <p className="text-gray-600 mb-4 group-hover:text-gray-700">{item.description}</p>
                
                <div className="mt-4 flex items-center text-brand-teal font-medium">
                  <span>Learn more</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
              
              <div className="h-40 mt-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent z-10"></div>
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/products" 
            className="inline-flex items-center mx-2 px-6 py-3 rounded-lg bg-brand-navy text-white hover:bg-brand-navy/90 transition-colors"
          >
            View All Products
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link 
            to="/services" 
            className="inline-flex items-center mx-2 px-6 py-3 rounded-lg bg-brand-teal text-white hover:bg-brand-teal/90 transition-colors"
          >
            Explore Services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
