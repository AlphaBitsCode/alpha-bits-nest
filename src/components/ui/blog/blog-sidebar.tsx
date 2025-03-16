
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Tag, Calendar } from 'lucide-react';
import { BlogPost } from './masonry-layout';

interface BlogSidebarProps {
  posts: BlogPost[];
  activeTag?: string;
  onTagClick?: (tag: string) => void;
}

export function BlogSidebar({ posts, activeTag, onTagClick }: BlogSidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get all unique tags and count occurrences
  const tagCounts = posts.reduce((acc, post) => {
    if (post.tags) {
      post.tags.forEach(tag => {
        acc[tag] = (acc[tag] || 0) + 1;
      });
    }
    return acc;
  }, {} as Record<string, number>);
  
  // Get recent posts
  const recentPosts = [...posts]
    .sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime())
    .slice(0, 5);
  
  // Handle tag click
  const handleTagClick = (tag: string) => {
    if (onTagClick) {
      onTagClick(tag);
    } else {
      navigate(`/blog?tag=${encodeURIComponent(tag)}`);
    }
  };
  
  // Handle post click
  const handlePostClick = (slug: string) => {
    navigate(`/blog/${slug}`);
  };
  
  // Group by year
  const postsByYear = posts.reduce((acc, post) => {
    const year = new Date(post.published_at).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {} as Record<number, BlogPost[]>);
  
  // Sort years in descending order
  const sortedYears = Object.keys(postsByYear)
    .map(Number)
    .sort((a, b) => b - a);
  
  return (
    <div className="space-y-8">
      {/* Tags */}
      <div>
        <h3 className="text-lg font-bold mb-4 text-brand-navy">Topics</h3>
        <div className="flex flex-wrap gap-2">
          {Object.entries(tagCounts).map(([tag, count]) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                activeTag === tag 
                  ? 'bg-brand-teal text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Tag className="h-3 w-3 mr-1" />
              {tag} <span className="ml-1 text-xs">({count})</span>
            </button>
          ))}
        </div>
      </div>
      
      {/* Recent Posts */}
      <div>
        <h3 className="text-lg font-bold mb-4 text-brand-navy">Recent Posts</h3>
        <div className="space-y-4">
          {recentPosts.map(post => (
            <div 
              key={post.id}
              onClick={() => handlePostClick(post.slug)}
              className="group cursor-pointer"
            >
              <h4 className="text-md font-medium group-hover:text-brand-teal transition-colors line-clamp-2">
                {post.title}
              </h4>
              <div className="text-xs text-gray-500 mt-1">
                {new Date(post.published_at).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Archives */}
      <div>
        <h3 className="text-lg font-bold mb-4 text-brand-navy">Archives</h3>
        <div className="space-y-2">
          {sortedYears.map(year => (
            <div key={year} className="group">
              <button 
                className="flex items-center text-gray-700 hover:text-brand-teal transition-colors"
                onClick={() => navigate(`/blog?year=${year}`)}
              >
                <Calendar className="h-4 w-4 mr-2" />
                {year} <span className="ml-1 text-xs">({postsByYear[year].length})</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
