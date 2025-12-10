import type { ReactNode } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-primary font-serif">
      <NavBar />
      
      {/* The "Reading Container" - Max width 680px, centered */}
      <main className="flex-grow pt-24 px-6 w-full max-w-[680px] mx-auto">
        {children}
      </main>
      
      <Footer />
    </div>
  )
}

export default Layout
