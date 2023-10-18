/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rajdhani': 'Rajdhani, sans-serif',
        'public-sans': 'Public Sans, sans-serif',
      },
      colors: {
        'brand-primary': '#513de8',
        'brand-secondary': '#4028e6',
      },
      minHeight: {
        'home-h': 'calc(100vh - 141px)',
      }
    },
  },
  plugins: [require("daisyui")],
}
