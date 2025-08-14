/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      ...colors,
      primary: "#495E57",
      secondary: "#EE9972",
      transparent: "transparent",
      current: "currentColor",
      hightlight: "#333333",
      hightlightBg: "#EDEFEE",
      yellow: "#f4CE14",
    },
    fontFamily: {
      body: ["Markazi Text", "serif"],
      display: ["Markazi Text", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
