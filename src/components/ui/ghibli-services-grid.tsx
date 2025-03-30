
import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

type ItemType = 'service' | 'product';

interface GridItem {
  type: ItemType;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  color: string;
  url: string;
}

interface GhibliServicesGridProps {
  items: GridItem[];
}

export function GhibliServicesGrid({ items }: GhibliServicesGridProps) {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-ghibli-cloud/50 backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-16 text-center font-ghibli text-ghibli-night"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Our Products & Services
        </motion.h2>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {items.map((item, index) => (
            <motion.div 
              key={index}
              className="group"
              variants={itemVariants}
            >
              <Link to={item.url} className="block h-full">
                <div className="relative overflow-hidden rounded-xl shadow-lg h-full transform transition-transform duration-300 group-hover:scale-[1.02] group-hover:shadow-xl">
                  {/* Background image with overlay */}
                  <div className="absolute inset-0">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className={cn(
                      "absolute inset-0 opacity-90 transition-opacity duration-300 group-hover:opacity-95",
                      item.type === 'service' ? 'bg-gradient-to-b from-ghibli-forest/80 to-ghibli-night/90' : 'bg-gradient-to-b from-ghibli-sunset/80 to-ghibli-night/90'
                    )}></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative p-6 flex flex-col h-full">
                    <div className="mb-4">
                      <div className={cn(
                        "w-16 h-16 rounded-full flex items-center justify-center mb-4",
                        item.type === 'service' ? 'bg-ghibli-grass/30' : 'bg-ghibli-sunset/30',
                        "backdrop-blur-sm"
                      )}>
                        {item.icon}
                      </div>
                      <span className={cn(
                        "px-3 py-1 rounded-full text-xs font-medium",
                        item.type === 'service' ? 'bg-ghibli-grass/30 text-white' : 'bg-ghibli-sunset/30 text-white',
                        "backdrop-blur-sm"
                      )}>
                        {item.type === 'service' ? 'SERVICE' : 'PRODUCT'}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2 text-white font-ghibli">{item.title}</h3>
                    <p className="text-white/80 mb-6">{item.description}</p>
                    
                    <div className="mt-auto flex items-center text-white group-hover:underline">
                      <span>Learn more</span>
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <Link to="/services" className="ghibli-button inline-block">
            Explore All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
