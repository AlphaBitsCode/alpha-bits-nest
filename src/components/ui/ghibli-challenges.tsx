
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle } from 'lucide-react';

interface PainPoint {
  problem: string;
  solution: string;
}

interface GhibliChallengesProps {
  painPoints: PainPoint[];
}

export function GhibliChallenges({ painPoints }: GhibliChallengesProps) {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Ghibli-style cloud background */}
      <div className="ghibli-clouds"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-ghibli font-bold mb-4 text-ghibli-night">
            Challenges We Help You Overcome
          </h2>
          <p className="text-lg text-ghibli-night/80 max-w-2xl mx-auto">
            In today's fast-moving business world, staying ahead with technology can be overwhelming.
            Let us guide you through the technological forest to find your path.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((item, index) => (
            <motion.div 
              key={index} 
              className="ghibli-glass p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-ghibli-dream flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-ghibli-night" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-ghibli-night font-ghibli">{item.problem}</h3>
                  <div className="mt-4 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-ghibli-grass flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-ghibli-night/90">
                      <span className="text-ghibli-accent font-medium">{item.solution.split(' ').slice(0, 2).join(' ')}</span> {item.solution.split(' ').slice(2).join(' ')}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <Link to="/services/cto-as-a-service" className="ghibli-button inline-block">
            Discover Our CTO Magic
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
