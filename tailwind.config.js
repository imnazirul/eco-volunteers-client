/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: '"Poppins", sans-serif',
        roboto: '"Roboto", sans-serif',
      },
      colors: {
        primary: {
          1: "#7091e6",
        },
        secondary: {
          1: "#3d52a0",
        },
      },
    },
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};
