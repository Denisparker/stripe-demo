import type {Config} from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    screens: {
      "sm": {"max": "767px"},
      "md": {"min": "768px", "max": "1023px"},
      "lg": {"min": "1024px"}
    },
    fontFamily: {
      inter: "var(--Raleway)"
    },
    colors: {
      background: "#23252A",
      gold: "#DB7C35",
      basic: "#2c51af",
      gray: "#363841",
      error: "#d94f4f",
      black: "#000000",
      white: "#ffffff"
    },
    transitionDuration: {
      "DEFAULT": "230ms"
    },
    safelist: [
      ["overflow-hidden"],
      {
        pattern: /(bg|fill|stroke|text|border|outline)-(transparent|black|white|dark|light|grey|darkGrey|lightGrey|primary|success|warning|error)/
      }
    ],
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite"
      }
    }
  },
  plugins: [
    require("tailwind-scrollbar-hide")
  ]
}
export default config
