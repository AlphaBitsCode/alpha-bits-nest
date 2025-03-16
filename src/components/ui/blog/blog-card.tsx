
import React from 'react';
import { format } from 'date-fns';
import { CalendarIcon, User, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { BlogPost } from './masonry-layout';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/blog/${post.slug}`);
  };
  
  return (
    <div 
      className={`group cursor-pointer rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg ${
        featured ? 'md:col-span-2 md:flex' : ''
      }`}
      onClick={handleClick}
    >
      {/* Image */}
      <div className={`relative overflow-hidden ${featured ? 'md:w-1/2' : 'h-48'}`}>
        {post.featured_image ? (
          <>
            <img 
              src={post.featured_image} 
              alt={post.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-brand-navy to-brand-teal/70"></div>
        )}
      </div>
      
      {/* Content */}
      <div className={`p-6 ${featured ? 'md:w-1/2' : ''}`}>
        <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
          <div className="flex items-center">
            <CalendarIcon className="h-3 w-3 mr-1" />
            {format(new Date(post.published_at), 'MMM d, yyyy')}
          </div>
          
          <div className="flex items-center">
            <User className="h-3 w-3 mr-1" />
            {post.author}
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-brand-navy group-hover:text-brand-teal transition-colors">
          {post.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
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
          </div>
        )}
        
        <div className="mt-4 text-brand-teal font-medium flex items-center group-hover:underline">
          Read more
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
}
