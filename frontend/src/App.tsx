import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { ColorProvider } from './context/ColorContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import TempLanding from './pages/TempLanding'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  return (
    <ThemeProvider>
      <ColorProvider>
        <Router>
          <Layout>
            <Routes>
              {/* Route everything to the temporary landing while site is in maintenance mode */}
              <Route path="*" element={<TempLanding />} />
            </Routes>
          </Layout>
        </Router>
      </ColorProvider>
    </ThemeProvider>
  )
}

export default App
