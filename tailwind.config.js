/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('assets/images/hero-bg.jpg')",
        'ipada' : "url('assets/images/ipada/cultural.jpeg')",
        'queendom' :"url('assets/images/people/africa-queen.jpeg')"
       
      },
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        Spectral : ['Spectral SC', 'sans-serif']
      },
      colors: {
        'primary': "#ECEEFF",
        "deep-brown": "#281906",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)"
      },
    },
  },
  plugins: [
    require("daisyui"),
  ],
}

