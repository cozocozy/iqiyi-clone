/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
<<<<<<< HEAD
  darkMode:'class',
=======
>>>>>>> 96fea41977077dceda43ca01ea5be8f6ea3f3d65
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
<<<<<<< HEAD
      fontFamily: {
        poppins:["Poppins","sans-serif"],
        oswald:["Oswald","sans-serif"],
        opensans:["Open Sans","sans-serif"],
        familydancing:["Dancing Script","cursive"],
      }
=======
>>>>>>> 96fea41977077dceda43ca01ea5be8f6ea3f3d65
    },
  },
  plugins: [require("tailwind-gradient-mask-image")],
};
