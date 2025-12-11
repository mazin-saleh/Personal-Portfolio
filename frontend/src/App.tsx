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

function App() {
  return (
    <ThemeProvider>
      <ColorProvider>
        <Router>
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
        </Router>
      </ColorProvider>
    </ThemeProvider>
  )
}

export default App
