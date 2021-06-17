module.exports = {
   purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
      extend: {
         colors:{
            black:{
               DEFAULT: 'black',
               default:'#1E1E1E',
               light: '#282828',
               lightest: '#404040'
            },
            mainBlue: '#325DA8',
            mainGrey: '#9E9E9E'
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
}
