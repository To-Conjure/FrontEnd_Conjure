/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "blue",
        menuText: "#281236",
        menu: "#ff0ac2",
        cover: "#ff0a65",
        shadow: "red",
        slide: "#f00",
        border: "rgba(66, 6, 129, 1)",
        white: "white",
      },
      flex: {
        '2': '2 2 0%'
      },
      backgroundImage: {
        'warp-img': "url('~/src/components/images/warp.gif')",
        'galaxy-img': "url('~/src/components/images/galaxy.jpg')",
        'stars-img': "url('~/src/components/images/stars.jpg')",
        'magic-img': "url('~/src/components/images/magic.jpg')",
        'load-img': "url('~/src/components/images/loading.gif')",
        gradient: "radial-gradient(circle, rgba(253,33,189,1) 28%, rgba(180,2,255,1) 72%);",
        pink: "radial-gradient(circle, rgba(255,0,254,1) 0%, rgba(85,70,252,1) 100%)",
        seaBG: "radial-gradient(circle, rgba(33,253,251,0.9220063025210083) 16%, rgba(23,101,209,1) 52%, rgba(21,71,230,1) 72%);",
        cyan: "linear-gradient(90deg, rgba(7,106,250,1) 32%, rgba(12,0,249,1) 73%);",
        dark: "radial-gradient(circle, rgba(214,0,255,1) 0%, rgba(168,26,199,1) 100%)"
      },
      animation: {
        cover: "cover 0.5s forwards ease-out",
        shadow:"shadow 0.5s forwards ease-out",
        slide: "slide 5s infinite running ease-out ease-in-out"
      },
      keyframes: {
        cover: {
          "100%": { width: "100%" },
        },
        shadow: {
          "100%": { width: "100%" },
        },
        slide: {
          "0%": {backgroundColor: "red"},
          "50%": {backgroundColor:"#ff9999"},
          "100%": {backgroundColor:"red"},
      }
      }
    },
  },
  plugins: [],
}