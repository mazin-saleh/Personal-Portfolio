/** @type {import('tailwindcss').Config} */
export default {
  // Phase 1: The "Great Purge" - Light Mode Only
  darkMode: 'class', // We will not use this, but 'class' prevents system preference overrides
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Phase 1: Black & White System
        primary: '#1a1a1a',
        secondary: '#404040',
        background: '#ffffff',
        accent: '#f3f3f3',
      },
      fontFamily: {
        // Phase 1: Typography System
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
