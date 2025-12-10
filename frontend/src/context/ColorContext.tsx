import { createContext, useContext, useEffect } from 'react'
import type { ReactNode } from 'react'
import { colorPalettes } from '../data/portfolio'

interface ColorContextType {
  primaryColor: string
  secondaryColor: string
  paletteName: string
}

const ColorContext = createContext<ColorContextType | undefined>(undefined)

export const ColorProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    // Select random color palette on mount
    const randomPalette = colorPalettes[Math.floor(Math.random() * colorPalettes.length)]
    
    // Set CSS variables
    document.documentElement.style.setProperty('--color-primary', randomPalette.primary)
    document.documentElement.style.setProperty('--color-secondary', randomPalette.secondary)
    
    // Store in sessionStorage so it persists during session
    sessionStorage.setItem('colorPalette', JSON.stringify(randomPalette))
  }, [])

  const palette = JSON.parse(sessionStorage.getItem('colorPalette') || JSON.stringify(colorPalettes[0]))

  return (
    <ColorContext.Provider value={{
      primaryColor: palette.primary,
      secondaryColor: palette.secondary,
      paletteName: palette.name
    }}>
      {children}
    </ColorContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useColor = () => {
  const context = useContext(ColorContext)
  if (!context) {
    throw new Error('useColor must be used within ColorProvider')
  }
  return context
}
