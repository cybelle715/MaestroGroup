/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        shadow: '#211a1d',
        electric: '#6320ee',
        slateblue: '#8075ff',
        lavender: '#f8f0fb',
        ash: '#cad5ca',
        primary: '#6320ee',
        secondary: '#8075ff',
        background: '#f8f0fb',
        surface: '#ffffff',
        muted: '#211a1d',
        accent: '#cad5ca',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}