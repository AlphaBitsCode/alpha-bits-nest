
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { useScrollAnimation } from '@/lib/animations';
import ProductOverview from '@/components/products/farm-in-box/ProductOverview';
import RequestForm from '@/components/products/farm-in-box/RequestForm';

const FarmInBox = () => {
  useScrollAnimation();
  
  useEffect(() => {
    document.title = "Farm In Box | Alpha Bits";
  }, []);

  const features = [
    'Interactive learning materials',
    'Sustainable farming techniques',
    'STEM curriculum integration',
    'Digital monitoring tools',
    'Teacher support resources'
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <section className="py-12 flex-grow bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-6">
            <Link to="/products" className="inline-flex items-center text-brand-navy hover:text-brand-teal transition-colors duration-300">
              <ArrowLeft size={16} className="mr-2" />
              Back to Products
            </Link>
          </div>
          
          <ProductOverview features={features} />
          
          <div className="mt-16 scrolled-section">
            <RequestForm />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FarmInBox;
