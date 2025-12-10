import { Download } from 'lucide-react'
import { personalInfo, socialLinks } from '../data/portfolio'
import * as Icons from 'lucide-react'

const TempLanding = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const iconMap: Record<string, any> = Icons

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-6 bg-white text-primary font-serif">
      <div className="max-w-4xl w-full mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Left: headshot (circular) */}
        <div className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden transition-all duration-500">
          <img
            src="/assets/headshot.jpg"
            alt={`${personalInfo.name} headshot`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: content */}
        <div className="text-center md:text-left space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="text-lg text-gray-600 font-sans">
              {personalInfo.title}
            </p>
          </div>

          <p className="text-xl italic text-gray-500">
            Website under construction.
          </p>

          {/* Resume Downloads */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start pt-2">
            <a
              href={personalInfo.resumeSWE}
              download
              className="flex items-center gap-2 text-sm font-sans font-bold uppercase tracking-wider border-b-2 border-primary pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors"
            >
              <Download size={16} />
              SWE Resume
            </a>

            <a
              href={personalInfo.resumeTPM}
              download
              className="flex items-center gap-2 text-sm font-sans font-bold uppercase tracking-wider border-b-2 border-primary pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors"
            >
              <Download size={16} />
              TPM Resume
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-6 justify-center md:justify-start pt-4">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon]
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label={link.name}
                >
                  {Icon && <Icon size={24} />}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TempLanding
