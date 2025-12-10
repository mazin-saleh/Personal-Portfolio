import { personalInfo, socialLinks } from '../data/portfolio'
import * as Icons from 'lucide-react'

const Contact = () => {
  const iconMap: Record<string, any> = Icons

  return (
    <div className="space-y-12 pb-20">
      <header className="space-y-4 mt-8 border-b border-gray-100 pb-8">
        <h1 className="text-3xl font-serif font-bold text-primary">Contact</h1>
        <p className="text-lg font-serif text-gray-600 max-w-prose">
          Let's start a conversation.
        </p>
      </header>

      <div className="space-y-8">
        <p className="text-xl font-serif text-gray-600 leading-relaxed">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>

        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-sm font-sans font-bold text-gray-400 uppercase tracking-wider">
              Email
            </h3>
            <a 
              href={`mailto:${personalInfo.email}`}
              className="text-lg font-serif text-primary hover:text-secondary transition-colors border-b border-gray-200 hover:border-secondary pb-0.5"
            >
              {personalInfo.email}
            </a>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-sans font-bold text-gray-400 uppercase tracking-wider">
              Socials
            </h3>
            <div className="flex flex-col space-y-3">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon]
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 group w-fit"
                  >
                    {Icon && <Icon className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />}
                    <span className="text-base font-serif text-gray-600 group-hover:text-primary transition-colors">
                      {social.name}
                    </span>
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

export default Contact
