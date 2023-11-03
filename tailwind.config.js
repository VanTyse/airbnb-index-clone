/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        vantyse: {
          primary: "#F6475F",
          grey: {
            1: "#222222",
            2: "#DDD",
            3: "#EBEBEB",
            text: "#5E5E5E",
          },
        },
      },
      boxShadow: {
        "vantyse-grey": "0px 4px 4px 0px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
