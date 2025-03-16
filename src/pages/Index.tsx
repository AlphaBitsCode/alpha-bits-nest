
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/ui/navigation';
import { Hero } from '@/components/ui/animated-hero';
import { FeatureSteps } from '@/components/ui/feature-section';
import Footer from '@/components/ui/footer';
import { useParallax } from '@/lib/animations';
import { supabase } from '@/integrations/supabase/client';
import { BlogPost } from '@/components/ui/blog/masonry-layout';
import { BlogCard } from '@/components/ui/blog/blog-card';
import { AlertCircle, CheckCircle, ArrowRight, Home, Factory, Trees, Briefcase, Users, Package, BookOpen } from 'lucide-react';

const Index = () => {
  useParallax();
  const [latestPosts, setLatestPosts] = useState<BlogPost[]>([]);
  
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
    },
    { 
      step: 'Experiences',
      title: 'AO Farm Experience',
      content: 'One-of-a-kind Digital Farm Labs allowing visits to learn and immerse in a new world of Precision Agriculture.',
      image: '/images/office/office_aofarm1.jpg'
    },
  ];

  const painPoints = [
    {
      problem: "Outdated technology restricting growth",
      solution: "Modern AIoT solutions that scale with your business"
    },
    {
      problem: "Lack of expertise to implement digital transformation",
      solution: "Expert CTO-level guidance without the full-time cost"
    },
    {
      problem: "Inefficient agricultural processes wasting resources",
      solution: "Smart farming solutions that optimize yield and reduce waste"
    },
    {
      problem: "Complex product development cycles causing delays",
      solution: "Streamlined development processes that bring products to market faster"
    }
  ];
  
  const highlightedItems = [
    {
      type: 'product',
      title: 'Digital Twin for Office & Home',
      description: 'Smart monitoring and optimization system for residential and office spaces.',
      icon: <Home className="h-8 w-8 text-brand-teal" />,
      image: '/images/aiot/energytwin_ss1.jpg',
      color: 'from-brand-teal/20 to-brand-navy/10',
      url: '/products/office-home'
    },
    {
      type: 'product',
      title: 'Digital Twin for Factory',
      description: 'End-to-end manufacturing process simulation and optimization.',
      icon: <Factory className="h-8 w-8 text-brand-blue" />,
      image: '/images/aiot/digitalfactory_1.jpg',
      color: 'from-brand-blue/20 to-brand-navy/10',
      url: '/products/factory'
    },
    {
      type: 'product',
      title: 'Farm In Box',
      description: 'Educational package for schools to teach sustainable farming practices.',
      icon: <BookOpen className="h-8 w-8 text-brand-green" />,
      image: '/images/farminbox/farminbox_box1.jpg',
      color: 'from-brand-green/20 to-brand-navy/10',
      url: '/products/farm-in-box'
    },
    {
      type: 'service',
      title: 'AIoT Product Development',
      description: 'Smart, connected products that solve real-world problems.',
      icon: <Briefcase className="h-8 w-8 text-brand-teal" />,
      image: '/images/office/office_2.jpg',
      color: 'from-brand-teal/20 to-brand-navy/10',
      url: '/services/aiot-product-development'
    },
    {
      type: 'service',
      title: 'CTO-as-a-Service',
      description: 'Access top-tier technical leadership without the overhead.',
      icon: <Users className="h-8 w-8 text-brand-blue" />,
      image: '/images/office/office_5.jpg',
      color: 'from-brand-blue/20 to-brand-navy/10',
      url: '/services/cto-as-a-service'
    },
    {
      type: 'product',
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
      <Navigation />
      <Hero />
      
      <section className="py-16 bg-brand-navy text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Challenges We Solve</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Businesses face numerous obstacles in today's tech-driven world. 
              See how we address your most pressing challenges.
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
            <Link to="/services" className="inline-block px-6 py-3 bg-brand-teal hover:bg-brand-teal/90 text-white font-medium rounded-lg transition-all duration-300">
              See How We Can Help
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <FeatureSteps 
          features={features}
          title="What We Offer"
          autoPlayInterval={4000}
          imageHeight="h-[400px]"
        />
      </section>
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-brand-teal/10 text-brand-teal rounded-full mb-3">
              SOLUTIONS
            </span>
            <h2 className="text-3xl font-bold mb-4 text-brand-navy">Our Products & Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our innovative solutions designed to transform the way you work, learn, and grow.
              From digital twins to smart farming, we have what you need.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlightedItems.map((item, index) => (
              <Link 
                key={index} 
                to={item.url}
                className="group relative bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="p-6 relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-white rounded-lg shadow-sm">
                      {item.icon}
                    </div>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      item.type === 'product' ? 'bg-brand-green/10 text-brand-green' : 'bg-brand-blue/10 text-brand-blue'
                    }`}>
                      {item.type === 'product' ? 'PRODUCT' : 'SERVICE'}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-brand-navy group-hover:text-brand-navy/90">{item.title}</h3>
                  <p className="text-gray-600 mb-4 group-hover:text-gray-700">{item.description}</p>
                  
                  <div className="mt-4 flex items-center text-brand-teal font-medium">
                    <span>Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
                
                <div className="h-40 mt-2 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent z-10"></div>
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/products" 
              className="inline-flex items-center mx-2 px-6 py-3 rounded-lg bg-brand-navy text-white hover:bg-brand-navy/90 transition-colors"
            >
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link 
              to="/services" 
              className="inline-flex items-center mx-2 px-6 py-3 rounded-lg bg-brand-teal text-white hover:bg-brand-teal/90 transition-colors"
            >
              Explore Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Latest Blog Posts Section */}
      {latestPosts.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-brand-teal/10 text-brand-teal rounded-full mb-3">
                INSIGHTS
              </span>
              <h2 className="text-3xl font-bold mb-4 text-brand-navy">Latest from Our Blog</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Insights, thought leadership, and expertise from our team on CTO leadership, AIoT product development, and technology innovation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {latestPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} featured={index === 0} />
              ))}
            </div>
            
            <div className="text-center">
              <Link 
                to="/blog" 
                className="inline-flex items-center px-6 py-3 rounded-lg border border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white transition-all duration-300"
              >
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      )}
      
      <Footer />
    </div>
  );
};

export default Index;
