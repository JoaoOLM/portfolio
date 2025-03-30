/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          background: "#121212",
          primary: "#1B4332",
          text: "#EDEDED",
          detail: "#D8F3DC",
          accent: "#40916C",
        },
        light: {
          background: "#F8F9FA",
          primary: "#2D6A4F",
          text: "#222222",
          detail: "#74C69D",
          accent: "#1B4332",
        }
      }
    }
  },
  plugins: [],
}