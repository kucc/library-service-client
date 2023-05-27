/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",

    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        crimson: "#c3201f",
        crimson: {
          100: "#FCE0D1",
          200: "#F9BBA5",
          300: "#EC8A75",
          400: "#DB5D50",
          500: "#c3201f",
          600: "#A71622",
          700: "#8C0F24",
          800: "#710923",
          900: "#5D0523",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
