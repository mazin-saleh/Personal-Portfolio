import { Link, useLocation } from 'react-router-dom'
import { navLinks, personalInfo } from '../data/portfolio'

const NavBar = () => {
  const location = useLocation()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-[680px] mx-auto px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo - Simple Text */}
        <Link
          to="/"
          className="text-xl font-serif font-bold text-primary tracking-tight hover:text-secondary transition-colors whitespace-nowrap shrink-0"
        >
          {personalInfo.name}
        </Link>

        {/* Desktop Navigation - Text Links Only */}
        <div className="flex items-center space-x-6 md:space-x-8 overflow-x-auto no-scrollbar mask-linear">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-base font-sans font-medium transition-colors whitespace-nowrap ${
                location.pathname === link.path
                  ? 'text-primary border-b border-primary pb-0.5'
                  : 'text-gray-500 hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
