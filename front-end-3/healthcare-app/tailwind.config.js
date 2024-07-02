/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gainsboro: {
          50: "#F9F9F9",
          100: "#F2F2F2",
          200: "#DBDBDB",
          300: "#C4C4C4",
          400: "#969696",
          500: "#Gainsboro",
          600: "#7A7A7A",
          700: "#525252",
          800: "#2B2B2B",
          900: "#151515",
        },
        peru: {
          50: "#F9F9F9",
          100: "#F2F2F2",
          200: "#DCAA79",
          300: "#D79D65",
          400: "#D29152",
          500: "#CD853F",
          600: "#B97839",
          700: "#A46A32",
          800: "#905D2C",
          900: "#7B5026",
        },
      },
    },
  },
  plugins: [],
};
