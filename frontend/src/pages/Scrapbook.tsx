import { Link } from 'react-router-dom';
import { usePosts } from '../hooks/useSanity';
import { urlFor } from '../sanityClient';

const Scrapbook = () => {
  const { posts, loading, error } = usePosts();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Digital Scrapbook
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-serif italic">
            A collection of thoughts, memories, and ideas.
          </p>
        </header>

        <div className="space-y-12">
          {posts.map((post) => (
            <article key={post._id} className="group">
              <Link to={`/scrapbook/${post.slug.current}`} className="block">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {post.mainImage && (
                    <div className="w-full md:w-1/3 aspect-video overflow-hidden rounded-lg bg-gray-100">
                      <img
                        src={urlFor(post.mainImage).width(600).height(400).fit('crop').url()}
                        alt={post.mainImage.alt || post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <time dateTime={post.publishedAt}>
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                      {post.tags && post.tags.length > 0 && (
                        <>
                          <span>•</span>
                          <span className="uppercase tracking-wider text-xs font-semibold text-primary">
                            {post.tags[0]}
                          </span>
                        </>
                      )}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-4 font-serif">
                      {post.excerpt}
                    </p>
                    <span className="text-primary font-medium text-sm group-hover:underline">
                      Read more →
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Scrapbook;
