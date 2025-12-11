import { Link } from 'react-router-dom'
import { personalInfo, socialLinks } from '../data/portfolio'
import { ArrowRight, Download } from 'lucide-react'
import * as Icons from 'lucide-react'
import { usePosts } from '../hooks/useSanity'

const Home = () => {
  const { posts, loading } = usePosts()
  const recentPosts = posts.slice(0, 3)
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const iconMap: Record<string, any> = Icons

  return (
    <div className="space-y-16 pb-20">
      {/* Combined Header */}
      <header className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mt-8">
        {/* Headshot */}
        <div className="shrink-0 w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden">
          <img
            src="/assets/headshot.jpg"
            alt={`${personalInfo.name} headshot`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="text-center md:text-left space-y-4">
            <p className="text-xl font-medium text-gray-900 font-sans leading-relaxed">
              {personalInfo.title}
            </p>
            <p className="text-lg font-serif text-gray-600 leading-relaxed max-w-prose">
              {personalInfo.bio}
            </p>
            
            <p className="italic text-gray-500">
              Website under construction
            </p>
            
            {/* Actions Row: Resumes + Socials */}
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-6 justify-center md:justify-start">
                {/* Resumes */}
                <div className="flex gap-5">
                    <a
                      href={personalInfo.resumeSWE}
                      download
                      className="flex items-center gap-2 text-sm font-sans font-bold uppercase tracking-wider border-b-2 border-primary pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors whitespace-nowrap"
                    >
                      <Download size={16} />
                      SWE Resume
                    </a>
                    <a
                      href={personalInfo.resumeTPM}
                      download
                      className="flex items-center gap-2 text-sm font-sans font-bold uppercase tracking-wider border-b-2 border-primary pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors whitespace-nowrap"
                    >
                      <Download size={16} />
                      TPM Resume
                    </a>
                </div>

                {/* Divider (hidden on mobile, visible on desktop) */}
                <div className="hidden sm:block w-px h-5 bg-gray-300"></div>

                {/* Social Icons */}
                <div className="flex items-center gap-5">
                    {socialLinks.map((link) => {
                      const Icon = iconMap[link.icon]
                      return (
                        <a
                          key={link.name}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-primary transition-colors"
                          aria-label={link.name}
                        >
                          {Icon && <Icon size={22} />}
                        </a>
                      )
                    })}
                </div>
            </div>
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
