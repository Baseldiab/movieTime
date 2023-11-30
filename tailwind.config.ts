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
        mainBg: "#02020f",
        secBg: "#000E2B",
        primary: "#3586ff",
        secondary: "#36B9EA",
        searchBtn: "#8b8ba7",
      },
      screens: {
        md: "800px",
      },
    },
  },
  plugins: [],
});
// export default config;
