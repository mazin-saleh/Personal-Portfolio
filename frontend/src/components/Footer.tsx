import { personalInfo, socialLinks } from '../data/portfolio'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const github = socialLinks.find(s => s.name === 'GitHub')
  const linkedin = socialLinks.find(s => s.name === 'LinkedIn')

  return (
    <footer className="py-12 border-t border-gray-100 mt-auto">
      <div className="max-w-[680px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm font-sans text-gray-400">
          © {currentYear} {personalInfo.name}
        </p>
        
        <div className="flex items-center space-x-6">
          {github && (
            <a 
              href={github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-sans text-gray-400 hover:text-primary transition-colors"
            >
              GitHub
            </a>
          )}
          {linkedin && (
            <a 
              href={linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-sans text-gray-400 hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </footer>
  )
}

export default Footer
