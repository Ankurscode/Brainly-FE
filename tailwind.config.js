/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        gray:{
          100:"#FFFEFE",
          200:"#F8FAFC",
          600:"#80808b"
        },
        purple:{
          200:"#E3E2FF",
          600:"#7101E9",
          500:"#6001BC"
        },
        
      }
    },
  },
  plugins: [],
}

