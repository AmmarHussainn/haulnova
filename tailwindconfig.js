 /** @type {import('tailwindcss').Config} */
 export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
    theme: {
      extend: {
        fontFamily: {
          bebas: ["'Bebas Neue'", "sans-serif"],
          dmSans: ["'DM Sans'", "sans-serif"],
        },
      },
    },
    plugins: [],
  }