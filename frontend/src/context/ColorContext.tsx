import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { colorPalettes } from '../data/portfolio'

interface ColorContextType {
  primaryColor: string
  secondaryColor: string
  paletteName: string
}

const ColorContext = createContext<ColorContextType | undefined>(undefined)

export const ColorProvider = ({ children }: { children: ReactNode }) => {
  // Initialize state from session storage if available, otherwise default to first palette
  const [palette, setPalette] = useState(() => {
    const stored = sessionStorage.getItem('colorPalette')
    return stored ? JSON.parse(stored) : colorPalettes[0]
  })

  useEffect(() => {
    // On mount, if no palette was in storage, pick a random one
    if (!sessionStorage.getItem('colorPalette')) {
      const randomPalette = colorPalettes[Math.floor(Math.random() * colorPalettes.length)]
      setPalette(randomPalette)
      sessionStorage.setItem('colorPalette', JSON.stringify(randomPalette))
    }
  }, [])

  // Apply CSS variables whenever palette changes
  useEffect(() => {
    document.documentElement.style.setProperty('--color-primary', palette.primary)
    document.documentElement.style.setProperty('--color-secondary', palette.secondary)
  }, [palette])

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
