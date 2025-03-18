
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-brand-navy">Business Challenges We Help You Overcome</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            In today's fast-moving business world, staying ahead with technology can be overwhelming.
            See how we can help you turn tech challenges into opportunities for growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((item, index) => (
            <div key={index} className="bg-gray-50 border border-gray-100 rounded-xl p-6 transition-all duration-300 hover:transform hover:scale-[1.01] hover:shadow-lg">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-brand-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-brand-navy">{item.problem}</h3>
                  <div className="mt-4 flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0 mt-1" />
                    <p className="text-gray-700"><span className="text-red-800 font-medium">{item.solution.split(' ').slice(0, 2).join(' ')}</span> {item.solution.split(' ').slice(2).join(' ')}</p>
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
