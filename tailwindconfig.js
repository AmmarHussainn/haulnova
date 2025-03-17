 /** @type {import('tailwindcss').Config} */
 export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
    theme: {
      extend: {
        fontFamily: {
          heading: ["Playfair Display", "serif"], 
          body: ["Poppins", "sans-serif"],
          raleway: ["Raleway", "sans-serif"],
          dmsans: ["DM Sans", "sans-serif"],
          libre: ["Libre Franklin", "sans-serif"],
        },
      },
    },
    plugins: [],
  }