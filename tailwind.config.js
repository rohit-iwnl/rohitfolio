/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFFCF2",
        secondary: "#CCC5B9",
        tertiary: "#403D39",
        primary_dark: "#252422",
        accent: "#EB5E28",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
