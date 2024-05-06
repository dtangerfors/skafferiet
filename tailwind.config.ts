import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["greycliff-cf", "sans-serif"],
        serif: ["wayfinder-cf", "serif"],
        script: ["mielle-cf", "cursive"]
      },
      colors: {
        primary: {
          DEFAULT: "#2d381e",
          "50": "#f5f8ed",
          "100": "#e9f0d7",
          "200": "#d4e2b4",
          "300": "#b7ce88",
          "400": "#9bb962",
          "500": "#7d9e44",
          "600": "#617d33",
          "700": "#4b602b",
          "800": "#3d4e26",
          "900": "#2d381e",
          "950": "#1b240f",
        },
        secondary: {
          DEFAULT: "#c6adcd",
          "50": "#fbf9fb",
          "100": "#f4f1f6",
          "200": "#ede5ef",
          "300": "#ded0e2",
          "400": "#c6adcd",
          "500": "#b391bb",
          "600": "#9d77a6",
          "700": "#86628e",
          "800": "#705376",
          "900": "#5b445f",
          "950": "#3d2a41",
        },
        tertiary: {
          "50": "#f7f7f5",
          "100": "#f0f0ec",
          "200": "#d9d8cf",
          "300": "#c1c0b0",
          "400": "#a7a490",
          "500": "#95917a",
          "600": "#88826e",
          "700": "#726c5c",
          "800": "#5e594e",
          "900": "#4d4941",
          "950": "#292621",
      },
        gray: {
          "50": "#f8f8f7",
          "100": "#f0f0ee",
          "200": "#deded9",
          "300": "#c1c0b8",
          "400": "#9e9d92",
          "500": "#838274",
          "600": "#6b6a5e",
          "700": "#57564d",
          "800": "#4a4a42",
          "900": "#40403a",
          "950": "#2b2b26",
      },
      
      },  
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
