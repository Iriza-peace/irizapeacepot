/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    space:{
      'z':"84rem",
      'm':"48rem"

    },
    color:{
      'bg':"F9FAFF"
    },

    // screens:{
    //  'sm':{'max':'640px'},
    //  'md':'768px',
    //  'lg':'1024px',
    //  'xl':'1280px',
    //  '2xl':'1536px',
     
    // }
      
    },
  },
  plugins: [],
}