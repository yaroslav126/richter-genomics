/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0A2240',
          800: '#0F2E52',
          700: '#163D6B',
        },
        teal: {
          600: '#0D7377',
          700: '#0A5C5F',
          800: '#074547',
        },
      },
      fontFamily: {
        serif: ['"Source Serif 4"', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
