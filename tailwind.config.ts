// import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBg: "#00002B",
        secBg: "#000E2B",
        primary: "#A2FF00",
        secondary: "#37FF00",
        searchBtn: "#8b8ba7",
      },
      fontFamily: {},
    },
  },
  plugins: [],
});
// export default config;
