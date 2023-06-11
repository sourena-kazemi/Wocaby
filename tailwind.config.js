/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "darkOrange": "#E55807",
      "orange": "#E57C23",
      "cornSilk": "#FFF5DA",
      "gunMetal": "#2F2E41",
      "rhythm": "#727189"
    }
  },
  plugins: [],
}