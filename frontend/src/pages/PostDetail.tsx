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
      <div className="py-20 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="py-20 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Post not found</h2>
        <Link to="/scrapbook" className="text-primary hover:underline font-serif">
          Back to Scrapbook
        </Link>
      </div>
    );
  }

  return (
    <article className="pb-20">
      <Link
        to="/scrapbook"
        className="inline-flex items-center text-sm font-sans text-gray-400 hover:text-primary mb-8 transition-colors mt-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Scrapbook
      </Link>

      <header className="mb-12 space-y-4">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center gap-2 text-sm font-sans text-gray-400 border-b border-gray-100 pb-8">
          <time dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>
      </header>

      {post.mainImage && (
        <div className="mb-12 rounded-sm overflow-hidden bg-gray-50">
          <img
            src={urlFor(post.mainImage).width(1200).height(600).fit('crop').url()}
            alt={post.mainImage.alt || post.title}
            className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
      )}

      <div className="prose prose-lg prose-gray prose-headings:font-serif prose-p:font-serif prose-a:text-primary hover:prose-a:text-secondary max-w-none">
        <PortableText value={post.body} components={portableTextComponents} />
      </div>
    </article>
  );
};

export default PostDetail;
