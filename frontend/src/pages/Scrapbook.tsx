import { useState } from 'react';
import { Link } from 'react-router-dom';
import { usePosts } from '../hooks/useSanity';
import { urlFor } from '../sanityClient';
import { Search, ArrowRight } from 'lucide-react';

const Scrapbook = () => {
  const { posts, loading, error } = usePosts();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="py-20 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-20 text-center text-red-500 font-serif">
        Error loading posts: {error}
      </div>
    );
  }

  return (
    <div className="space-y-12 pb-12">
      <header className="space-y-6 mt-8 border-b border-gray-300 pb-8">
        <h1 className="text-3xl font-serif font-bold text-primary">Scrapbook</h1>
        <p className="text-lg font-serif text-gray-600 max-w-prose">
          A collection of thoughts, memories, and ideas.
        </p>

        {/* Search Bar */}
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-4 pr-10 py-2 border border-gray-200 rounded-sm focus:outline-none focus:border-primary transition-colors font-sans text-sm"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
        </div>
      </header>

      <div className="space-y-16">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <article key={post._id} className="group">
              <Link to={`/scrapbook/${post.slug.current}`} className="block space-y-3">
                <div className="flex items-baseline justify-between">
                  <h2 className="text-2xl font-serif font-bold text-primary group-hover:text-secondary transition-colors">
                    {post.title}
                  </h2>
                </div>
                
                {post.mainImage && (
                  <div className="w-full overflow-hidden rounded-sm bg-gray-50 my-4">
                    <img
                      src={urlFor(post.mainImage).width(800).url()}
                      alt={post.mainImage.alt || post.title}
                      className="w-full h-auto object-contain transition-all duration-500"
                    />
                  </div>
                )}

                <p className="text-gray-600 font-serif leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center space-x-4 pt-1">
                  <span className="text-sm font-sans font-medium text-gray-400">
                    Post
                  </span>
                  <span className="text-sm font-sans text-gray-300">•</span>
                  <span className="text-sm font-sans text-gray-500">
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <span className="grow"></span>
                  <span className="text-sm font-sans font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center">
                    Read more <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </Link>
            </article>
          ))
        ) : (
          <div className="text-center py-12 text-gray-500 font-serif italic">
            {searchQuery ? `No posts found matching "${searchQuery}"` : "Check back soon for updates!"}
          </div>
        )}
      </div>
    </div>
  );
};

export default Scrapbook;
