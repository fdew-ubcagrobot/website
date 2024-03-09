/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'RobotoMono': ['Roboto Mono', 'monospace'],
        'Inter': ['Inter', 'sans-serif'],
        'Roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}