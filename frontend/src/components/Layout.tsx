import type { ReactNode } from 'react'
import { useEffect } from 'react'
// page-level routing location no longer needed when animations are disabled
// Page-level animations temporarily removed to stabilize navigation and button behavior.
// We'll re-add animations after buttons and routing are confirmed working.
import NavBar from './NavBar'
import Footer from './Footer'
import { personalInfo } from '../data/portfolio'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  // location removed — rendering children directly for stable navigation

  const showFooter = !personalInfo?.tempLanding

  useEffect(() => {
    // When the site is in maintenance landing mode, prevent body scroll.
    if (personalInfo?.tempLanding) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prev || ''
      }
    }
    return
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow pt-16">
        {/* Render children directly for now (no page-level animations) */}
        <div>{children}</div>
      </main>
      
      {showFooter && <Footer />}
    </div>
  )
}

export default Layout
