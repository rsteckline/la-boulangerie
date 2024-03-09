/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      keyframes: {
        flip: {
          '0%, 100%': { transform: 'rotateY(0)' },
          '50%': { transform: 'rotateY(180deg)' },
        },
      },
      animation: {
        flip: 'flip 1s ease-in-out',
      },
      fontFamily:{
        'abel': ['Abel', 'sans-serif'],
        satisfy:["Satisfy", "cursive"]
      }
    },
    colors: {
      green: "#82AA9F",
      white: "#FFFFFF",
    },
  },
};