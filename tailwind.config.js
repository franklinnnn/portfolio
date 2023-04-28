/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7b7bed",
        secondary: "#2c2c54",
        light: "#fafaff",
        dark: "#171123",
        "main-text": "#8a95a5",
      },
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
        work: ["Work Sans", "sans-serif"],
        serif: ["Arvo", "serif"],
      },
    },
  },
  plugins: [],
};
