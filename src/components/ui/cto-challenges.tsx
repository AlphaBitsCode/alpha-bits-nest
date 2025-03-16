
import { Link } from 'react-router-dom';
import { AlertCircle, CheckCircle } from 'lucide-react';

interface PainPoint {
  problem: string;
  solution: string;
}

interface CTOChallengesProps {
  painPoints: PainPoint[];
}

export function CTOChallenges({ painPoints }: CTOChallengesProps) {
  return (
    <section className="py-16 bg-brand-navy text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Technical Challenges We Solve</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Businesses face numerous obstacles in today's tech-driven world. 
            See how our fractional CTO service addresses your most pressing challenges.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((item, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-300 hover:transform hover:scale-[1.01]">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.problem}</h3>
                  <div className="mt-4 flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0 mt-1" />
                    <p className="text-white/80">{item.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link to="/services/cto-as-a-service" className="inline-block px-6 py-3 bg-brand-teal hover:bg-brand-teal/90 text-white font-medium rounded-lg transition-all duration-300">
            Learn About Our CTO Services
          </Link>
        </div>
      </div>
    </section>
  );
}
