
import { motion } from 'framer-motion';
import { Brain, BarChart, Clock, ShieldAlert } from 'lucide-react';

interface Challenge {
  title: string;
  color: string;
  icon: React.ReactNode;
  challenges: string[];
}

export function ChallengesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const challengeGroups: Challenge[] = [
    {
      title: "Technical Challenges",
      color: "bg-gradient-to-r from-gray-100 to-gray-200",
      icon: <Brain className="w-8 h-8 text-gray-700" />,
      challenges: [
        "Keeping up with rapidly evolving technologies",
        "Integrating complex systems across platforms",
        "Securing data and devices in connected environments"
      ]
    },
    {
      title: "Business Challenges",
      color: "bg-gradient-to-r from-slate-100 to-slate-200",
      icon: <BarChart className="w-8 h-8 text-gray-700" />,
      challenges: [
        "Adapting business models for digital transformation",
        "Balancing innovation costs with ROI expectations",
        "Navigating regulatory requirements across markets"
      ]
    },
    {
      title: "Operational Challenges",
      color: "bg-gradient-to-r from-stone-100 to-stone-200",
      icon: <Clock className="w-8 h-8 text-gray-700" />,
      challenges: [
        "Accelerating time-to-market for new products",
        "Managing technical debt while innovating",
        "Scaling solutions from prototype to production"
      ]
    }
  ];

  return (
    <section id="challenges" className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3 py-1 text-xs font-medium bg-brand-teal/10 text-brand-teal rounded-full mb-3">
            CHALLENGES WE SOLVE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-navy">
            Transforming Challenges into Opportunities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We understand the obstacles you face on your innovation journey. Our services are designed to directly address these pain points.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {challengeGroups.map((group, index) => (
            <motion.div 
              key={index} 
              className={`rounded-xl p-6 shadow-lg ${group.color} backdrop-blur-sm border border-gray-200`}
              variants={itemVariants}
            >
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-md">
                {group.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">{group.title}</h3>
              <ul className="space-y-3">
                {group.challenges.map((challenge, i) => (
                  <li key={i} className="flex items-start">
                    <ShieldAlert size={18} className="text-gray-600 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{challenge}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-600 italic mb-8">
              "The biggest challenge is staying ahead of the technology curve while keeping costs down. Alpha Bits has been instrumental in helping us achieve this balance."
            </p>
            <div className="inline-flex items-center justify-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                <img src="#" alt="Client" className="w-full h-full object-cover" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-800">Sarah Chua</p>
                <p className="text-sm text-gray-600">CEO, SmartRetail, MY</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
