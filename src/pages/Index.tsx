import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar1 } from '@/components/ui/shadcnblocks-com-navbar1';
import { Hero } from '@/components/ui/animated-hero';
import { CTOOfficeHours } from '@/components/ui/cto-office-hours';
import { CTOChallenges } from '@/components/ui/cto-challenges';
import { FeatureSteps } from '@/components/ui/feature-section';
import { ProductsServicesGrid } from '@/components/ui/products-services-grid';
import { LatestBlogPosts } from '@/components/ui/latest-blog-posts';
import Footer from '@/components/ui/footer';
import { useParallax } from '@/lib/animations';
import { supabase } from '@/integrations/supabase/client';
import { BlogPost } from '@/components/ui/blog/masonry-layout';
import { Briefcase, Users, Package, BookOpen, Home, Factory, Trees, Code, Database, Server, Lightbulb, Puzzle, Search, MessageQuestion } from 'lucide-react';
import { NonTechnicalFounderSection } from '@/components/ui/non-technical-founder-section';

const Index = () => {
  useParallax();
  const [latestPosts, setLatestPosts] = useState<BlogPost[]>([]);
  const location = useLocation();
  
  useEffect(() => {
    // Fetch the latest blog posts
    const fetchLatestPosts = async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('published_at', { ascending: false })
        .limit(3);
        
      if (error) {
        console.error('Error fetching latest blog posts:', error);
      } else {
        setLatestPosts(data as BlogPost[]);
      }
    };
    
    fetchLatestPosts();
    
    // Handle hash navigation
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.pageYOffset - 80,
            behavior: 'smooth'
          });
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  
  const features = [
    { 
      step: 'CTO Service',
      title: 'Fractional CTO',
      content: 'Access top-tier technical leadership on a part-time basis, ideal for startups and growing companies.', 
      image: '/images/office/office_5.jpg' 
    },
    { 
      step: 'Products',
      title: 'AIoT Products',
      content: 'Smart, sustainable products for Agriculture and Education that solve real-world challenges.', 
      image: '/images/farminbox/farminbox_box1.jpg' 
    },
    { 
      step: 'Services',
      title: 'AIoT Product Development',
      content: 'AIoT development and strategic technical leadership to guide your digital transformation journey.',
      image: '/images/office/office_2.jpg'
    }
  ];

  const painPoints = [
    {
      problem: "Limited budget for a full-time CTO",
      solution: "Fractional CTO services providing expertise when you need it"
    },
    {
      problem: "Unclear technology strategy and roadmap",
      solution: "Strategic guidance from experienced technical leaders"
    },
    {
      problem: "Technical debt slowing down development",
      solution: "Expert assessment and prioritized remediation plans"
    },
    {
      problem: "Difficulty hiring and managing technical talent",
      solution: "Recruitment assistance and technical team leadership"
    }
  ];
  
  const founderChallenges = [
    {
      icon: <Code className="h-8 w-8 text-red-500" />,
      title: "Technology Stack Confusion",
      description: "Overwhelmed by countless programming languages, frameworks, and platforms without knowing which ones are right for your business."
    },
    {
      icon: <Database className="h-8 w-8 text-red-500" />,
      title: "Infrastructure Decisions",
      description: "Difficulty choosing between cloud providers, server configurations, and deployment options while trying to balance cost and scalability."
    },
    {
      icon: <Server className="h-8 w-8 text-red-500" />,
      title: "Technical Debt Blindness",
      description: "Unable to identify when shortcuts taken by developers will lead to costly rebuilds and scaling problems in the future."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-red-500" />,
      title: "Innovation Paralysis",
      description: "Struggling to evaluate which emerging technologies are worth investing in versus which ones are just hype with little business value."
    },
    {
      icon: <Puzzle className="h-8 w-8 text-red-500" />,
      title: "Integration Complexity",
      description: "Facing difficulties connecting various software systems and ensuring data flows smoothly across your business operations."
    },
    {
      icon: <Search className="h-8 w-8 text-red-500" />,
      title: "Technical Talent Assessment",
      description: "Lacking the expertise to properly evaluate developers' skills and determine if they're the right fit for your project requirements."
    },
  ];
  
  const highlightedItems = [
    {
      type: 'service' as const,
      title: 'CTO-as-a-Service',
      description: 'Access top-tier technical leadership without the overhead.',
      icon: <Users className="h-8 w-8 text-brand-blue" />,
      image: '/images/office/office_5.jpg',
      color: 'from-brand-blue/20 to-brand-navy/10',
      url: '/services/cto-as-a-service'
    },
    {
      type: 'service' as const,
      title: 'AIoT Product Development',
      description: 'Smart, connected products that solve real-world problems.',
      icon: <Briefcase className="h-8 w-8 text-brand-teal" />,
      image: '/images/office/office_2.jpg',
      color: 'from-brand-teal/20 to-brand-navy/10',
      url: '/services/aiot-product-development'
    },
    {
      type: 'product' as const,
      title: 'Digital Twin for Office & Home',
      description: 'Smart monitoring and optimization system for residential and office spaces.',
      icon: <Home className="h-8 w-8 text-brand-teal" />,
      image: '/images/aiot/energytwin_ss1.jpg',
      color: 'from-brand-teal/20 to-brand-navy/10',
      url: '/products/office-home'
    },
    {
      type: 'product' as const,
      title: 'Digital Twin for Factory',
      description: 'End-to-end manufacturing process simulation and optimization.',
      icon: <Factory className="h-8 w-8 text-brand-blue" />,
      image: '/images/aiot/digitalfactory_1.jpg',
      color: 'from-brand-blue/20 to-brand-navy/10',
      url: '/products/factory'
    },
    {
      type: 'product' as const,
      title: 'Farm In Box',
      description: 'Educational package for schools to teach sustainable farming practices.',
      icon: <BookOpen className="h-8 w-8 text-brand-green" />,
      image: '/images/farminbox/farminbox_box1.jpg',
      color: 'from-brand-green/20 to-brand-navy/10',
      url: '/products/farm-in-box'
    },
    {
      type: 'product' as const,
      title: 'Mushroom-in-a-Box',
      description: 'A complete kit for growing gourmet mushrooms at home.',
      icon: <Package className="h-8 w-8 text-brand-green" />,
      image: '/images/mushroom-box/mushroombox3.png',
      color: 'from-brand-green/20 to-brand-navy/10',
      url: '/products/mushroom-in-box'
    },
  ];
  
  return (
    <div className="min-h-screen">
      {/* Google Translate Element - Hidden but functional */}
      <div id="google_translate_element" className="fixed top-0 left-0 opacity-0 pointer-events-none"></div>
      
      <Navbar1 />
      <Hero />
      
      <NonTechnicalFounderSection challenges={founderChallenges} />
      
      <CTOOfficeHours />
      
      <CTOChallenges painPoints={painPoints} />
      
      <section className="py-20 bg-gray-50">
        <FeatureSteps 
          features={features}
          title="How We Help Businesses"
          autoPlayInterval={4000}
          imageHeight="h-[400px]"
        />
      </section>
      
      <ProductsServicesGrid items={highlightedItems} />
      
      <LatestBlogPosts posts={latestPosts} />
      
      <Footer />
    </div>
  );
};

export default Index;
