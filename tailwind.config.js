module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
      extend: {
        colors: {
         blossom: '#EEBECE',
         mainBlue: '#0B24FB',
        },
        layout:{
          'blueTop': {left:-377, top: 0, width: '100%', height: '100%'},
        },
        fontFamily: {
          mulish: ["Mulish", "sans-serif"],
        },
        screens: {
          'laptop': '1920px',
        },
      },
    },
    plugins: [],
  }