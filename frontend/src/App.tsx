import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { ColorProvider } from './context/ColorContext'
import Layout from './components/Layout'
// NOTE: While `personalInfo.tempLanding` is true we route everything to `TempLanding`.
// The other page imports are intentionally omitted to avoid unused-import TypeScript errors.
import TempLanding from './pages/TempLanding'

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
