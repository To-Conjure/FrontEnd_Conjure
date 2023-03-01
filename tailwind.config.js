/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
      './src/**/*.html',
      './src/**/*.js',
    ],
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
        pink: "#ff0a65",
        shadow: "red",
        border: "rgba(66, 6, 129, 1)",
        menu: "#ff0ac2",
        cyan: "cyan",
      },
      flex: {
        '2': '2 2 0%'
      },
      backgroundImage:{
        'tutorial':"url('../src/components/images/tutorial.png')",
        'space':"url('../src/components/images/space.jpg')",
        'warp':"url('../src/components/images/warp.gif')",
        'warping':"url('../src/components/images/warping.gif')",
        'galaxy':"url('../src/components/images/galaxy.jpg')",
        'fire':"url('../src/components/images/fire.jpg')",
        'stars':"url('../src/components/images/stars.jpg')",
        'load':"url('../src/components/images/loading.gif')",
      },
      animation: {
        pink: "pink 0.5s forwards ease-out",
        shadow:"shadow 0.5s forwards ease-out",
        slide: "slide 5s infinite running ease-out ease-in-out",
        shine: "shine 1s",
      },
      keyframes: {
        pink: {
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