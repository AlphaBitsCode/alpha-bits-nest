
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { CalendarIcon, User, Clock, Tag } from 'lucide-react';
import { cn } from '@/lib/utils';
import { calculateReadingTime } from '@/utils/calculateReadingTime';

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  published_at: string;
  author: string;
  featured_image?: string | null;
  tags?: string[] | null;
};

interface MasonryLayoutProps {
  posts: BlogPost[];
  className?: string;
}

export function MasonryLayout({ posts, className }: MasonryLayoutProps) {
  const navigate = useNavigate();
  const [columns, setColumns] = useState(3);

  // Adjust columns based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setColumns(1);
      } else if (window.innerWidth < 1024) {
        setColumns(2);
      } else {
        setColumns(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Distribute posts among columns
  const getColumnPosts = () => {
    const result: BlogPost[][] = Array.from({ length: columns }, () => []);
    
    posts.forEach((post, index) => {
      result[index % columns].push(post);
    });
    
    return result;
  };

  const columnPosts = getColumnPosts();

  const navigateToPost = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <div className={cn("grid gap-6", className, {
      'grid-cols-1': columns === 1,
      'grid-cols-2': columns === 2,
      'grid-cols-3': columns === 3,
    })}>
      {columnPosts.map((column, columnIndex) => (
        <div key={columnIndex} className="flex flex-col gap-6">
          {column.map((post) => {
            const readingTime = calculateReadingTime(post.content);
            
            return (
              <div 
                key={post.id} 
                className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-200"
                onClick={() => navigateToPost(post.slug)}
              >
                {post.featured_image && (
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.featured_image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                  </div>
                )}
                
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                    <div className="flex items-center">
                      <CalendarIcon className="h-3 w-3 mr-1" />
                      {format(new Date(post.published_at), 'MMM d, yyyy')}
                    </div>
                    
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {post.author}
                    </div>
                    
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {readingTime} min read
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-brand-navy group-hover:text-brand-teal transition-colors">{post.title}</h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {post.tags.slice(0, 3).map((tag, i) => (
                        <span 
                          key={i} 
                          className="px-2 py-1 text-xs font-medium bg-brand-teal/10 text-brand-teal rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 3 && (
                        <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-500 rounded-full">
                          +{post.tags.length - 3}
                        </span>
                      )}
                    </div>
                  )}
                  
                  <div className="mt-4 text-brand-teal font-medium text-sm flex items-center group-hover:underline">
                    Read more
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
