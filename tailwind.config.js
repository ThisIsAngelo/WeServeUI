/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    colors: {
      primary: "#640EF1",
      purple: "#6336aa",
      white: "#ffffff",
      black: "#080C2E",
      gray: {
        100: "#F1F4F5",
        200: "#5D5D7C",
        300: "#8D90A8",
      },
    },
    screens: {
      xs: "450px",

      sm: "610px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        clash: ["Clash Display", "sans"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
