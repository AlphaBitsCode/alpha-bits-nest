
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { BlogPost } from '@/components/ui/blog/masonry-layout';
import { BlogCard } from '@/components/ui/blog/blog-card';

interface LatestBlogPostsProps {
  posts: BlogPost[];
}

export function LatestBlogPosts({ posts }: LatestBlogPostsProps) {
  if (posts.length === 0) return null;
  
  return (
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
          {posts.map((post, index) => (
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
  );
}
