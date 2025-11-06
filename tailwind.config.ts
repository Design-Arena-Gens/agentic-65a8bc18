import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f2f6ff",
          100: "#dce7ff",
          200: "#b1cbff",
          300: "#85afff",
          400: "#5a93ff",
          500: "#336efe",
          600: "#1d52d9",
          700: "#183fa8",
          800: "#133077",
          900: "#0d2046"
        }
      }
    }
  },
  plugins: []
};

export default config;
