import { useParams, Link } from 'react-router-dom';
import { PortableText } from '@portabletext/react';
import { usePost } from '../hooks/useSanity';
import { portableTextComponents } from '../components/PortableTextComponents';
import { urlFor } from '../sanityClient';
import { ArrowLeft } from 'lucide-react';

const PostDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { post, loading, error } = usePost(slug || '');

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Post not found</h2>
        <Link to="/scrapbook" className="text-primary hover:underline">
          Back to Scrapbook
        </Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-white dark:bg-gray-900 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/scrapbook"
          className="inline-flex items-center text-gray-500 hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Scrapbook
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            {post.tags && post.tags.map(tag => (
               <span key={tag} className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs uppercase tracking-wider font-semibold text-primary ml-2">
                 {tag}
               </span>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {post.mainImage && (
            <div className="w-full max-h-[60vh] overflow-hidden rounded-xl shadow-lg mb-8">
              <img
                src={urlFor(post.mainImage).width(1200).height(800).fit('crop').url()}
                alt={post.mainImage.alt || post.title}
                className="w-full h-full object-cover"
              />
              {post.mainImage.caption && (
                <p className="text-center text-sm text-gray-500 mt-2 italic">{post.mainImage.caption}</p>
              )}
            </div>
          )}
        </header>

        <div className="prose prose-lg prose-indigo dark:prose-invert max-w-none font-serif">
          <PortableText value={post.body} components={portableTextComponents} />
        </div>
      </div>
    </article>
  );
};

export default PostDetail;
