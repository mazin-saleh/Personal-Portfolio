import { Link } from 'react-router-dom';
import { usePosts } from '../hooks/useSanity';
import { urlFor } from '../sanityClient';

const Scrapbook = () => {
  const { posts, loading, error } = usePosts();

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
    <div className="space-y-12 pb-20">
      <header className="space-y-4 mt-8 border-b border-gray-100 pb-8">
        <h1 className="text-3xl font-serif font-bold text-primary">Scrapbook</h1>
        <p className="text-lg font-serif text-gray-600 max-w-prose">
          A collection of thoughts, memories, and ideas.
        </p>
      </header>

      <div className="space-y-16">
        {posts.map((post) => (
          <article key={post._id} className="group">
            <Link to={`/scrapbook/${post.slug.current}`} className="block space-y-3">
              <div className="flex items-baseline justify-between">
                <h2 className="text-2xl font-serif font-bold text-primary group-hover:text-secondary transition-colors">
                  {post.title}
                </h2>
                <span className="text-sm font-sans text-gray-400 shrink-0 ml-4">
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              
              {post.mainImage && (
                <div className="w-full aspect-[2/1] overflow-hidden rounded-sm bg-gray-50 my-4">
                  <img
                    src={urlFor(post.mainImage).width(800).height(400).fit('crop').url()}
                    alt={post.mainImage.alt || post.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              )}

              <p className="text-gray-600 font-serif leading-relaxed line-clamp-3">
                Read more...
              </p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Scrapbook;
