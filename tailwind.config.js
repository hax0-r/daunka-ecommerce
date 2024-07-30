/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fBlue: "#2AF598",
        sBlue: "#009EFD",
        themeColor: "#263241",
      }
    },
  },
  plugins: [],
}