/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purpleDark: "#594796",
        skylight: "#5fc9f6",
      }
    },
  },
  plugins: [],
}

