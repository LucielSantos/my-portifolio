import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      margin: {
        global: "0 auto",
      },
      maxWidth: {
        global: "1024px",
      },
      colors: {
        purple: {
          100: "#f2e2fe",
          200: "#e5c5fe",
          300: "#d8a9fd",
          400: "#cb8cfd",
          500: "#be6ffc",
          600: "#9859ca",
          700: "#724397",
          800: "#4c2c65",
          900: "#261632",
        },
      },
      borderWidth: {
        1: "1px",
      },
      dropShadow: {
        xl: "0px 0px 10px theme(colors.purple.500)",
      },
      boxShadow: {
        xl: "0px 0px 50px theme(colors.purple.500)",
      },
      textShadow: (theme: Function) => ({
        DEFAULT: `0px 0px 10px ${theme("colors.purple[500]")}`,
      }),
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};

export default config;
