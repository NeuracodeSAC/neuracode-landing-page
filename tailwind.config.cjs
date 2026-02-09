/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        neurablue: {
          50: '#edf3fe',
          100: '#dce8fc',
          200: '#bfd3f9',
          300: '#93b5f4',
          400: '#5f91ed',
          500: '#2E76E5',
          600: '#2663c5',
          700: '#1f4f9f',
          800: '#1d4383',
          900: '#1d3a6d'
        },
        secondary: {
          50: '#f2f4f7',
          100: '#e5e9ef',
          200: '#cbd3de',
          300: '#aebac8',
          400: '#93a1b2',
          500: '#7C889A',
          600: '#667386',
          700: '#535f71',
          800: '#46505f',
          900: '#3c4552'
        },
        purple: {
          500: '#A020F0',
          600: '#8f1ad8'
        },
        lilac: {
          500: '#C5A3FF'
        },
        ink: '#002000',
        paper: '#ffffff'
      }
    },
  },
  plugins: [],
}
