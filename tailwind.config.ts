import type { Config } from "tailwindcss";
const config: Config = {
  darkMode:'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx, html}",
  ],
  theme: {

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "corner-red" : "/assets/img/spot-illustrations/corner-1.png"

      },
      colors :{
        white:{
          100 : "#f0f8ff",
          200 :" #e9eaeb",
          DEFAULT : "#fff"
        },
        black : "#000",
        primary :"#5bc1ac",
        secondary :{
          300 : "#44525d",
          400 : "#597081",
          DEFAULT : "#5a6f80",
          600 : "#717275"
  
        },
        success : "#00d27a",
        danger : "#e63757",
        warning : "#f5803e"
      },
    },
  },
  plugins: [],
};
export default config;
