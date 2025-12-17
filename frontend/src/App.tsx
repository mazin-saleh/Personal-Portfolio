import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { ColorProvider } from './context/ColorContext'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Scrapbook from './pages/Scrapbook'
import PostDetail from './pages/PostDetail'
import NotFound from './pages/NotFound'

function App() {
  return (
    <ThemeProvider>
      <ColorProvider>
        <Router>
          <ScrollToTop />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/scrapbook" element={<Scrapbook />} />
              <Route path="/scrapbook/:slug" element={<PostDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </Router>
      </ColorProvider>
    </ThemeProvider>
  )
}

export default App
