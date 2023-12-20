import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",

      // BASE COLORS
      black: "#111111",
      white: "#FFFFFF",
      "light-silver": "#EEEEEE",
      "dark-grey": "#666666",
      "light-grey": "#F4F5F7",
      crimson: "#DC143C",

      // CHART COLORS
      "dark-blue": "#77CFD1",
      yellow: "#F8CC45",
      orange: "#EEAC5D",
      sunrise: "#EE6C59",
    },
    extend: {},
  },
  plugins: [],
};
export default config;
