/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
        "4xl": "2560px",
      },
      spacing: {
        112: "28rem", // 448px
        120: "30rem", // 480px
        128: "32rem", // 512px
        144: "36rem", // 576px
      },
    },
  },
  plugins: [],
};
