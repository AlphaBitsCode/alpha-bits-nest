
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { ArrowLeft, Loader2, Printer } from 'lucide-react';
import { Navbar1 } from '@/components/ui/shadcnblocks-com-navbar1';
import Footer from '@/components/ui/footer';
import { BlogContent } from '@/components/ui/blog/blog-content';
import { BlogPost as BlogPostType } from '@/components/ui/blog/masonry-layout';
import { BlogSidebar } from '@/components/ui/blog/blog-sidebar';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    async function fetchPost() {
      setLoading(true);
      
      try {
        // Fetch the post by slug
        const { data: postData, error: postError } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('slug', slug)
          .single();
        
        if (postError) {
          throw postError;
        }
        
        setPost(postData as BlogPostType);
        
        // Fetch related posts with similar tags
        if (postData && postData.tags && postData.tags.length > 0) {
          const { data: relatedData, error: relatedError } = await supabase
            .from('blog_posts')
            .select('*')
            .neq('id', postData.id) // Exclude current post
            .overlaps('tags', postData.tags)
            .order('published_at', { ascending: false })
            .limit(5);
          
          if (relatedError) {
            console.error('Error fetching related posts:', relatedError);
          } else {
            setRelatedPosts(relatedData as BlogPostType[]);
          }
        }
      } catch (err) {
        console.error('Error fetching blog post:', err);
        setError('Failed to load the blog post. It may not exist or has been removed.');
      } finally {
        setLoading(false);
      }
    }
    
    if (slug) {
      fetchPost();
    }
  }, [slug]);
  
  const goBack = () => {
    navigate('/blog');
  };
  
  const handlePrint = () => {
    window.print();
  };
  
  return (
    <>
      <Navbar1 />
      
      <main className="min-h-screen py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={goBack}
              className="flex items-center text-brand-navy hover:text-brand-teal transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to all posts
            </button>
            
            {!loading && !error && post && (
              <button
                onClick={handlePrint}
                className="flex items-center text-brand-navy hover:text-brand-teal transition-colors print:hidden"
              >
                <Printer className="h-4 w-4 mr-2" />
                Print article
              </button>
            )}
          </div>
          
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-brand-teal" />
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <p className="text-red-500">{error}</p>
              <button
                onClick={goBack}
                className="mt-4 px-4 py-2 bg-brand-teal text-white rounded-md hover:bg-brand-teal/90"
              >
                Return to blog
              </button>
            </div>
          ) : post ? (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <BlogContent post={post} />
              </div>
              
              {/* Sidebar - hidden when printing */}
              <div className="lg:col-span-1 print:hidden">
                <BlogSidebar posts={[...relatedPosts, post]} />
              </div>
            </div>
          ) : null}
        </div>
      </main>
      
      <Footer />
      
      {/* Print styles - Fixed the style tag to remove jsx and global props */}
      <style>
        {`
        @media print {
          nav, footer, .print-hidden {
            display: none !important;
          }
          main {
            padding: 0 !important;
            background: white !important;
          }
          article {
            box-shadow: none !important;
            max-width: 100% !important;
          }
          .container {
            max-width: 100% !important;
            padding: 0 !important;
          }
        }
        `}
      </style>
    </>
  );
}
