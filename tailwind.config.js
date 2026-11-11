/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        teal: { DEFAULT: '#45BEB3', light: '#E6F6F4', dark: '#2E9C92' },
        graphite: '#4A4A4A',
        navy: { DEFAULT: '#0A1C2B', 800: '#10283C', 700: '#183650' },
        mist: '#F3F8F8',
      },
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
