import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
      },
    },
  },
  plugins: [nextui()],
};
