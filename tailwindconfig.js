 /** @type {import('tailwindcss').Config} */
 export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
    theme: {
      extend: {
        fontFamily: {
          bebas: ['"Bebas Neue"', 'cursive'], // Add 'bebas' key
        },
      },
    },
    plugins: [],
  }