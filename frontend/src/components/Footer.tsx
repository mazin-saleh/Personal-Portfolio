import { personalInfo, socialLinks } from '../data/portfolio'
import * as Icons from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const iconMap: Record<string, any> = Icons

  return (
    <footer className="py-8 border-t border-gray-100 mt-auto">
      <div className="max-w-[680px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm font-sans text-gray-400">
          © {currentYear} {personalInfo.name}
        </p>
        
        <div className="flex items-center space-x-6">
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
                {Icon && <Icon size={20} />}
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}

export default Footer
