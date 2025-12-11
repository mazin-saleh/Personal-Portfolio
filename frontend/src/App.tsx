import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { ColorProvider } from './context/ColorContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Scrapbook from './pages/Scrapbook'
import PostDetail from './pages/PostDetail'
import TempLanding from './pages/TempLanding'
import { personalInfo } from './data/portfolio'

function App() {
  return (
    <ThemeProvider>
      <ColorProvider>
        <Router>
          {personalInfo.tempLanding ? (
            <Routes>
              {/* Secret Route: Allow viewing specific scrapbook posts (like the PDF) even in maintenance mode */}
              <Route 
                path="/scrapbook/:slug" 
                element={
                  <Layout>
                    <PostDetail />
                  </Layout>
                } 
              />
              {/* Catch-all: Show TempLanding for everything else */}
              <Route path="*" element={<TempLanding />} />
            </Routes>
          ) : (
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/scrapbook" element={<Scrapbook />} />
                <Route path="/scrapbook/:slug" element={<PostDetail />} />
              </Routes>
            </Layout>
          )}
        </Router>
      </ColorProvider>
    </ThemeProvider>
  )
}

export default App
