
import React from 'react';
import { format } from 'date-fns';
import { CalendarIcon, User, Tag, Clock } from 'lucide-react';
import { BlogPost } from './masonry-layout';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { calculateReadingTime } from '@/utils/calculateReadingTime';

interface BlogContentProps {
  post: BlogPost;
}

export function BlogContent({ post }: BlogContentProps) {
  const readingTime = calculateReadingTime(post.content);
  
  return (
    <article className="max-w-4xl mx-auto bg-white shadow-md">
      {/* Paper-like container */}
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        {/* Featured Image */}
        {post.featured_image && (
          <div className="relative h-[400px] w-full overflow-hidden border-b border-gray-200">
            <img 
              src={post.featured_image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70"></div>
          </div>
        )}
        
        {/* Paper content with padding */}
        <div className="p-8 md:p-12 bg-white">
          {/* Post Meta */}
          <div className="mb-8 pb-6 border-b border-gray-200">
            <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 font-serif">{post.title}</h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <CalendarIcon className="h-4 w-4 mr-2" />
                {format(new Date(post.published_at), 'MMMM d, yyyy')}
              </div>
              
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {post.author}
              </div>
              
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {readingTime} min read
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
          
          {/* Post Content with Markdown */}
          <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-brand-navy prose-a:text-brand-teal hover:prose-a:text-brand-navy prose-blockquote:border-l-brand-teal prose-blockquote:bg-gray-50 prose-blockquote:py-1 prose-blockquote:px-4">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </article>
  );
}
