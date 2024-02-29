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
      fontFamily:{
        'abel': ['Abel', 'sans-serif'],
        satisfy:["Satisfy", "cursive"]
      }
    },
    colors: {
      green: "#82aa9f",
      white: "#ffffff",
    },
  },
};