/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: true, // This will *always* minify, even on dev builds
    content: [
      './src/**/*.html',
      './src/**/*.js',
    ],
  },
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      colors: {
        yellow: "gold",
        primary: "blue",
        menuText: "#281236",
        cover: "#ff0a65",
        shadow: "red",
        border: "rgba(66, 6, 129, 1)",
        menu: "#ff0ac2",
        amber: colors.amber,
        emerald: colors.emerald,
      },
      flex: {
        '2': '2 2 0%'
      },
      backgroundImage:{
        'color-img': "url('../src/components/images/tutorial.png')",
        'tutorial-img': "url('../src/components/images/tutorial.png')",
        'space-img': "url('../src/components/images/space.jpg')",
        'warp-img': "url('../src/components/images/warp.gif')",
        'warping-img': "url('../src/components/images/warping.gif')",
        'galaxy-img': "url('../src/components/images/galaxy.jpg')",
        'fire-img': "url('../src/components/images/fire.jpg')",
        'stars-img': "url('../src/components/images/stars.jpg')",
        'load-img': "url('../src/components/images/loading.gif')",
        gradient: "radial-gradient(circle, rgba(253,33,189,1) 28%, rgba(180,2,255,1) 72%);",
        pink: "radial-gradient(circle, rgba(255,0,254,1) 0%, rgba(85,70,252,1) 100%)",
      },
      animation: {
        cover: "cover 0.5s forwards ease-out",
        shadow:"shadow 0.5s forwards ease-out",
        slide: "slide 5s infinite running ease-out ease-in-out",
        shine: "shine 1s",
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
      },
        shine: {
          "100%": { left: "125%" },
      },
      }
    },
  },
  plugins: [],
}