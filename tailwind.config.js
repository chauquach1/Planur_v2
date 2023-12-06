import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        brand: "#0369a1",
        bismark: {
          50: "hsl(213, 36%, 95%)",
          100: "hsl(210, 29%, 89%)",
          200: "hsl(206, 26%, 81%)",
          300: "hsl(209, 26%, 68%)",
          400: "hsl(210, 25%, 52%)",
          500: "hsl(211, 41%, 40%)",
          600: "hsl(215, 40%, 35%)",
          700: "hsl(215, 39%, 30%)",
          800: "hsl(215, 33%, 26%)",
          900: "hsl(219, 32%, 23%)",
          950: "hsl(220, 38%, 14%)",
        },
        peach: {
          50: "hsl(5, 86%, 97%)",
          100: "hsl(7, 94%, 93%)",
          200: "hsl(7, 96%, 89%)",
          300: "hsl(8, 94%, 82%)",
          400: "hsl(7, 92%, 71%)",
          500: "hsl(7, 85%, 60%)",
          600: "hsl(7, 73%, 51%)",
          700: "hsl(7, 75%, 42%)",
          800: "hsl(8, 71%, 35%)",
          900: "hsl(7, 63%, 31%)",
          950: "hsl(7, 75%, 15%)",
        }
      },
    },
  },
  plugins: [nextui()],
};
