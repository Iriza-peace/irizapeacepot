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
    }
      
    },
  },
  plugins: [],
}