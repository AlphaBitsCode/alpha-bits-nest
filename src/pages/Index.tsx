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
import { Briefcase, Users, Package, BookOpen, Home, Factory, Trees } from 'lucide-react';

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
    
    // Ensure Google Translate element exists
    if (!document.getElementById('google_translate_element')) {
      const translateDiv = document.createElement('div');
      translateDiv.id = 'google_translate_element';
      translateDiv.style.display = 'none';
      document.body.appendChild(translateDiv);
    }
  }, []);
  
  useEffect(() => {
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
      {/* Google Translate Element Container - hidden but accessible */}
      <div id="google_translate_element" className="hidden" aria-hidden="true"></div>
      
      <Navbar1 />
      <Hero />
      
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
