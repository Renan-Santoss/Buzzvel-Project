/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  
  theme: {
    
    extend: {
        fontFamily: {
          sans : ["Poppins" , "Sans-serif"]

        } ,
        container: {
          center : true,
          padding: {
            default:"1rem",
            sm:"10rem"
          }
        } 
    },
  },
  plugins: [require('flowbite/plugin')],
  
}

