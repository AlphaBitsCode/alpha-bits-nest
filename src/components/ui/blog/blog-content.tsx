
import React from 'react';
import { format } from 'date-fns';
import { CalendarIcon, User, Tag } from 'lucide-react';
import { BlogPost } from './masonry-layout';

interface BlogContentProps {
  post: BlogPost;
}

export function BlogContent({ post }: BlogContentProps) {
  return (
    <article className="max-w-4xl mx-auto">
      {/* Featured Image */}
      {post.featured_image && (
        <div className="relative h-[400px] w-full mb-8 rounded-xl overflow-hidden">
          <img 
            src={post.featured_image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70"></div>
        </div>
      )}
      
      {/* Post Meta */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-brand-navy mb-4">{post.title}</h1>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center">
            <CalendarIcon className="h-4 w-4 mr-2" />
            {format(new Date(post.published_at), 'MMMM d, yyyy')}
          </div>
          
          <div className="flex items-center">
            <User className="h-4 w-4 mr-2" />
            {post.author}
          </div>
          
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {post.tags.map((tag, i) => (
                <span 
                  key={i} 
                  className="flex items-center px-3 py-1 text-xs font-medium bg-brand-teal/10 text-brand-teal rounded-full"
                >
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Post Content */}
      <div className="prose prose-brand max-w-none">
        {post.content.split('\n').map((paragraph, index) => (
          paragraph.trim() ? <p key={index}>{paragraph}</p> : <br key={index} />
        ))}
      </div>
    </article>
  );
}
