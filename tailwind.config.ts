import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#13201c",
        sand: "#f4efe6",
        clay: "#b8793d",
        palm: "#0f6f5c",
        night: "#0b1714",
        gold: "#c99a45"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(19, 32, 28, 0.12)",
        lift: "0 14px 34px rgba(19, 32, 28, 0.14)"
      }
    }
  },
  plugins: []
};

export default config;
