
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Loader2 } from 'lucide-react';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { MasonryLayout, BlogPost } from '@/components/ui/blog/masonry-layout';
import { BlogSidebar } from '@/components/ui/blog/blog-sidebar';

export default function BlogIndex() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const tagFilter = searchParams.get('tag');
  const yearFilter = searchParams.get('year');
  
  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      
      try {
        let query = supabase
          .from('blog_posts')
          .select('*')
          .order('published_at', { ascending: false });
        
        // Apply tag filter if present
        if (tagFilter) {
          query = query.contains('tags', [tagFilter]);
        }
        
        // Apply year filter if present
        if (yearFilter) {
          const startDate = new Date(`${yearFilter}-01-01T00:00:00Z`);
          const endDate = new Date(`${yearFilter}-12-31T23:59:59Z`);
          
          query = query
            .gte('published_at', startDate.toISOString())
            .lte('published_at', endDate.toISOString());
        }
        
        const { data, error } = await query;
        
        if (error) {
          throw error;
        }
        
        setPosts(data as BlogPost[]);
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setError('Failed to load blog posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    }
    
    fetchPosts();
  }, [tagFilter, yearFilter]);
  
  const handleTagClick = (tag: string) => {
    setSearchParams({ tag });
  };
  
  const clearFilters = () => {
    setSearchParams({});
  };
  
  return (
    <>
      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-brand-navy to-brand-teal/90 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Alpha Bits Blog</h1>
            <p className="text-xl text-white/80 max-w-3xl">
              Insights on CTO leadership, AIoT product development, and technology innovation from our team of experts.
            </p>
          </div>
        </section>
        
        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Active Filters */}
            {(tagFilter || yearFilter) && (
              <div className="mb-8 p-4 bg-gray-50 rounded-lg flex items-center justify-between">
                <div>
                  <span className="font-medium">Active filters:</span>
                  {tagFilter && (
                    <span className="ml-2 inline-flex items-center px-3 py-1 rounded-full text-sm bg-brand-teal text-white">
                      Tag: {tagFilter}
                    </span>
                  )}
                  {yearFilter && (
                    <span className="ml-2 inline-flex items-center px-3 py-1 rounded-full text-sm bg-brand-teal text-white">
                      Year: {yearFilter}
                    </span>
                  )}
                </div>
                <button
                  onClick={clearFilters}
                  className="text-sm text-gray-600 hover:text-brand-teal"
                >
                  Clear filters
                </button>
              </div>
            )}
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                {loading ? (
                  <div className="flex justify-center items-center py-20">
                    <Loader2 className="h-8 w-8 animate-spin text-brand-teal" />
                  </div>
                ) : error ? (
                  <div className="text-center py-20">
                    <p className="text-red-500">{error}</p>
                  </div>
                ) : posts.length === 0 ? (
                  <div className="text-center py-20">
                    <p className="text-lg text-gray-600">No posts found matching your criteria.</p>
                    <button
                      onClick={clearFilters}
                      className="mt-4 px-4 py-2 bg-brand-teal text-white rounded-md hover:bg-brand-teal/90"
                    >
                      Clear filters
                    </button>
                  </div>
                ) : (
                  <MasonryLayout posts={posts} />
                )}
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <BlogSidebar 
                  posts={posts} 
                  activeTag={tagFilter || undefined} 
                  onTagClick={handleTagClick} 
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
