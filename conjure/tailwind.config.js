/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      textColor: {
        primary: "blue",
        menu: "black"
      },
      backgroundColor: {
        menu: "#ff0ac2",
      },
      animation: {
        cover: "cover 0.5s forwards ease-out"
      },
      keyframes: {
        cover: {
          "100%": { width: "100%" },
        }
      }
    },
  },
  plugins: [],
}