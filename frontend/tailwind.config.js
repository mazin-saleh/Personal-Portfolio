/** @type {import('tailwindcss').Config} */
export default {
  // Disable dark mode: site will render only in light mode
  darkMode: false,
  content: {
    files: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
  },
}
