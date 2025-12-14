import { usePosts } from '../hooks/useSanity'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const Projects = () => {
  const { posts, loading, error } = usePosts()

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
        Error loading projects: {error}
      </div>
    );
  }

  return (
    <div className="space-y-12 pb-12">
      <header className="space-y-4 mt-8 border-b border-gray-300 pb-8">
        <h1 className="text-3xl font-serif font-bold text-primary">Projects</h1>
        <p className="text-lg font-serif text-gray-600 max-w-prose">
          A selection of things I've built.
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
              
              <p className="text-gray-600 font-serif leading-relaxed line-clamp-3">
                {post.excerpt || "Read more..."}
              </p>

              <div className="flex items-center space-x-4 pt-1">
                 <span className="text-sm font-sans font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center">
                    Read more <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Projects
