/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      textShadow: {
        outline: "0 0 1px #000",
      },
      keyframes: {
        flip: {
          "0%, 100%": { transform: "rotateY(0)" },
          "50%": { transform: "rotateY(180deg)" },
        },
      },
      animation: {
        flip: "flip .5s ease-in-out",
      },
      fontFamily: {
        abel: ["Abel", "sans-serif"],
        satisfy: ["Satisfy", "cursive"],
        caveat: ["Caveat", "cursive"],
        gluten: ["Gluten", "cursive"],
      },
      fontWeight: {
        medium: "600",
        bold: "700",
        fat: "800",
        fattest: "900",
      },
    },
    colors: {
      green: "#82AA9F",
      white: "#FFFFFF",
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
