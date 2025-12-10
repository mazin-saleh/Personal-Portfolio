import { Link } from 'react-router-dom'
import { personalInfo, socialLinks } from '../data/portfolio'
import { ArrowRight } from 'lucide-react'
import { usePosts } from '../hooks/useSanity'

const Home = () => {
  const { posts, loading } = usePosts()
  const recentPosts = posts.slice(0, 3)
  
  const github = socialLinks.find(s => s.name === 'GitHub')
  const linkedin = socialLinks.find(s => s.name === 'LinkedIn')

  return (
    <div className="space-y-16 pb-20">
      {/* Minimalist Header */}
      <header className="space-y-6 mt-8">
        <h1 className="text-4xl font-serif font-bold text-primary tracking-tight">
          Hi, I'm {personalInfo.name}.
        </h1>
        <p className="text-xl font-serif text-gray-600 leading-relaxed max-w-prose">
          {personalInfo.bio}
        </p>
        <div className="flex items-center space-x-6 pt-2">
          <Link 
            to="/about" 
            className="text-sm font-sans font-medium text-primary border-b border-primary hover:text-secondary hover:border-secondary transition-colors"
          >
            More about me
          </Link>
          {github && (
            <a 
              href={github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-sans font-medium text-gray-500 hover:text-primary transition-colors"
            >
              GitHub
            </a>
          )}
          {linkedin && (
            <a 
              href={linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-sans font-medium text-gray-500 hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
          )}
        </div>
      </header>

      {/* The "Feed" - Projects & Thoughts */}
      <section className="space-y-12">
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <h2 className="text-sm font-sans font-bold text-gray-400 uppercase tracking-wider">
            Recent Work
          </h2>
          <Link to="/projects" className="text-sm font-sans text-gray-400 hover:text-primary transition-colors">
            View all
          </Link>
        </div>

        <div className="space-y-12">
          {loading ? (
            <div className="py-12 flex justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : (
            recentPosts.map((post) => (
              <article key={post._id} className="group">
                <Link to={`/scrapbook/${post.slug.current}`} className="block space-y-3">
                  <h3 className="text-2xl font-serif font-bold text-primary group-hover:text-secondary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 font-serif leading-relaxed line-clamp-3">
                    {post.excerpt || "Read more..."}
                  </p>
                  <div className="flex items-center space-x-4 pt-1">
                    <span className="text-xs font-sans font-medium text-gray-400">
                      Post
                    </span>
                    <span className="text-xs font-sans text-gray-300">•</span>
                    <span className="text-xs font-sans text-gray-500">
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
          )}
        </div>
      </section>
    </div>
  )
}

export default Home
