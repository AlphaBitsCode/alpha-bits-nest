
import { Package, Briefcase, Users, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

type FeatureItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
  url: string;
  color: string;
};

function FeaturedSection() {
  const features: FeatureItem[] = [
    {
      icon: <Package size={32} />,
      title: "Products",
      description: "Smart, sustainable solutions for modern agriculture and education with our Mushroom-in-a-Box and Farm In Box products.",
      url: "/products",
      color: "bg-gradient-to-br from-brand-teal to-brand-teal/60",
    },
    {
      icon: <Briefcase size={32} />,
      title: "Services",
      description: "Expert AIoT product development and CTO-as-a-Service offerings to guide your business through digital transformation.",
      url: "/services",
      color: "bg-gradient-to-br from-brand-navy to-brand-blue",
    },
    {
      icon: <Users size={32} />,
      title: "Experience",
      description: "Decades of combined expertise in technology leadership, product development, and sustainable innovation.",
      url: "/#experience",
      color: "bg-gradient-to-br from-brand-blue to-brand-teal",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Our <span className="gradient-text">Core Pillars</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Link 
              to={feature.url}
              key={index}
              className="glassmorphism hover-scale transition duration-300 group"
            >
              <div className="p-8 h-full flex flex-col">
                <div className={cn("p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6 text-white", feature.color)}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground flex-grow mb-6">{feature.description}</p>
                <div className="flex items-center text-brand-teal font-medium group-hover:underline">
                  Learn more
                  <MoveRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export { FeaturedSection };
