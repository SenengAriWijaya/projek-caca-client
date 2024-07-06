// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
      },
      colors: {
        primary: "#3DB3C9",
        second: "#65C3D4",
        lightBlue: "#65C3D426",
        black: "#464255",
        gray: "#A3A3A3",
        lightGray: "#B9BBBD",
        green: "#159F59",
        yellow: "#F5B417",
        red: "#DD4536",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
