
import { ChevronRight } from 'lucide-react';

interface ProductOverviewProps {
  features: string[];
}

const ProductOverview = ({ features }: ProductOverviewProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center scrolled-section">
      <div>
        <span className="inline-block px-3 py-1 text-xs font-medium bg-brand-teal/10 text-brand-teal rounded-full mb-3">
          PRODUCT
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
          Farm In Box - Educational Kit
        </h1>
        <p className="text-gray-600 mb-6 text-lg">
          A comprehensive educational package designed for schools and learning institutions to teach sustainable farming practices, biology, and environmental science through hands-on experience.
        </p>
        
        <ul className="space-y-3 mb-8">
          {features.map((item, index) => (
            <li key={index} className="flex items-start">
              <ChevronRight size={20} className="text-brand-teal mr-2 flex-shrink-0 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="flex justify-center">
        <div className="relative w-full max-w-md">
          <div className="absolute -inset-2 bg-gradient-to-r from-brand-teal to-brand-blue rounded-lg opacity-30 blur-lg animate-pulse"></div>
          <div className="relative glassmorphism overflow-hidden rounded-lg p-1">
            <div className="bg-white rounded-lg overflow-hidden">
              <img 
                src="/images/farminbox/farminbox_box2.jpg" 
                alt="Farm in Box Educational Kit" 
                className="w-full h-96 object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
