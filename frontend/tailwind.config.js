/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "handjet": ['Handjet', 'sans-serif']
      },
      keyframes: {
        glowing: {
          "0%": {
            backgroundPosition: "0 0",
          },
          "50%": {
            backgroundPosition: "400% 0"
          },
          "100%": {
            backgroundPosition: "0 0"
          },
        }
      }
    },
  },
  plugins: [],
}

