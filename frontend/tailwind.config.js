/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        12: "10rem 1fr",
        13: "0 1fr",
      },
    },
    fontFamily: {
      HellixRegular: ["HellixRegular"],
      HellixSemiBold: ["HellixSemiBold"],
      HellixBold: ["HellixBold"],
    },
    colors: {
      brand: "#CD2844",
      white: "#ffffff",
      black: "#33343D",
      hoverBg: "#eb425e",
      grey: "#8C878C",
      lightGrey: "#E3E3E3",
    },
    fill: {
      current: "#86888C",
      hover: "#ffffff",
    },
  },
  plugins: [
    // ...
  ],
};
