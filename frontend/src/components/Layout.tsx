import type { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'
import ProgressBar from './ProgressBar'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col bg-white text-primary font-serif relative">
      <ProgressBar />
      <NavBar />
      
      {/* The "Reading Container" - Max width 680px, centered */}
      <main key={location.pathname} className="flex-grow pt-24 px-6 w-full max-w-[680px] mx-auto animate-fade-in">
        {children}
      </main>
      
      <Footer />
    </div>
  )
}

export default Layout
