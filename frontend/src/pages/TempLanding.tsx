import { Download, Github, Linkedin, Mail } from 'lucide-react'
import { personalInfo, socialLinks } from '../data/portfolio'

// keep landing single-view and non-scrollable
// headshot is served from /public/assets/headshot-placeholder.svg

const TempLanding = () => {
  const iconMap: { [key: string]: React.ElementType } = {
    Github,
    Linkedin,
    Mail,
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-6" style={{ overflow: 'hidden' }}>
      <div className="max-w-5xl w-full mx-auto -mt-6 md:-mt-12 flex flex-col md:flex-row items-center md:items-center gap-12">

        {/* Left: headshot (circular) */}
        <div className="flex-shrink-0 flex items-center justify-center md:justify-start w-full md:w-1/3 pl-2 md:pl-6 lg:pl-12">
          <div className="w-40 sm:w-48 md:w-72 lg:w-80 xl:w-96 aspect-square rounded-full overflow-hidden shadow-xl border-4 border-white">
            <img
              src="/assets/headshot.jpg"
              alt={`${personalInfo.name} headshot`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right: content (balanced vertically) */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:-mt-2">
            Hi, I'm{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, var(--color-primary), var(--color-secondary))`,
              }}
            >
              {personalInfo.name}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-4">{personalInfo.title}</p>

          <p className="text-gray-600 mb-6 text-base md:text-lg font-medium">Full website coming soon!</p>

          {/* Resume Downloads */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6">
            <a
              href={personalInfo.resumeSWE}
              download
              className="btn btn-primary flex items-center justify-center gap-2"
              aria-label="Download SWE resume"
            >
              <Download size={18} />
              SWE Resume
            </a>

            <a
              href={personalInfo.resumeTPM}
              download
              className="btn btn-outline flex items-center justify-center gap-2"
              aria-label="Download TPM resume"
            >
              <Download size={18} />
              TPM Resume
            </a>
          </div>

          {/* Social icons */}
          <div className="mt-2">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon]
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-colors"
                    aria-label={link.name}
                  >
                    {Icon && <Icon size={20} className="text-gray-700" />}
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TempLanding
