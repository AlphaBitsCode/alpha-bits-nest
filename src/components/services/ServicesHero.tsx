
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function ServicesHero() {
  return (
    <section className="relative pt-16 pb-24 bg-gradient-to-b from-brand-navy to-brand-blue text-white overflow-hidden">
      

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white to-transparent"></div>
        <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white to-transparent"></div>
        
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: `${5 + Math.random() * 10}px`,
              height: `${5 + Math.random() * 10}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              boxShadow: '0 0 20px 2px rgba(255, 255, 255, 0.1)',
              opacity: 0.1 + Math.random() * 0.3,
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-3 py-1 text-xs font-medium bg-white/10 text-white rounded-full mb-3">
            OUR SERVICES
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Transformative <span className="text-brand-teal">Software Solutions</span> for the AI Era
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Led by Kent Nguyen, with over 20 years of strategic technology development experience, we deliver cutting-edge software and data integration solutions to accelerate your business growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white">
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
              <a href="#challenges">Explore Challenges</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
