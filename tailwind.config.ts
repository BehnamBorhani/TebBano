import { colord, extend } from "colord";
import mixPlugin from "colord/plugins/mix";
import type { Config } from "tailwindcss";

extend([mixPlugin]);

const generateDarkenColorFrom = (
  input: string,
  percentage: number = 0.07,
): string => colord(input).darken(percentage).toHex();

const generateForegroundColorFrom = (
  input: string,
  percentage: number = 0.8,
): string =>
  colord(input)
    .mix(colord(input).isDark() ? "white" : "black", percentage)
    .toHex();

export const tailwindColors = {
  current: "currentColor",
  transparent: "transparent",
  blue: {
    50: "#E6F6FF",
    100: "#B0E3FE",
    200: "#8AD6FD",
    300: "#54C3FC",
    400: "#33B8FC",
    DEFAULT: "#00A6FB",
    600: "#0097E4",
    700: "#0076B2",
    800: "#005B8A",
    900: "#004669",
  },
  "blue-content": "#FFFFFF",
  "blue-focus": generateDarkenColorFrom("#3571F4"),
  white: {
    50: "#FFFFFF",
    100: "#FDFDFD",
    200: "#FDFDFD",
    300: "#FCFCFC",
    400: "#FBFBFB",
    DEFAULT: "#FAFAFA",
    600: "#E4E4E4",
    700: "#B2B2B2",
    800: "#8A8A8A",
    900: "#696969",
  },
  black: {
    50: "#E8E9EA",
    100: "#B7BABE",
    200: "#94989E",
    300: "#636972",
    400: "#454C56",
    DEFAULT: "#161F2C",
    600: "#141C28",
    700: "#10161F",
    800: "#0C1118",
    900: "#090D12",
  },
  "neutral-content": generateForegroundColorFrom("#FFFFFF"),
  "neutral-focus": generateDarkenColorFrom("#161F2C", 0.03),
  success: {
    50: "#ECFDF1",
    100: "#C5FAD2",
    200: "#A9F7BD",
    300: "#82F49F",
    400: "#69F18C",
    DEFAULT: "#44EE6F",
    600: "#3ED965",
    700: "#30A94F",
    800: "#25833D",
    900: "#1D642F",
  },
  "success-content": "#FFF",
  "success-focus": generateDarkenColorFrom("#44EE6F"),
  warning: {
    50: "#FFF6EB",
    100: "#FFE2C0",
    200: "#FFD3A2",
    300: "#FEBF77",
    400: "#FEB35D",
    DEFAULT: "#FEA034",
    600: "#E7922F",
    700: "#B47225",
    800: "#8C581D",
    900: "#6B4316",
  },
  "warning-content": "#FFF",
  "warning-focus": generateDarkenColorFrom("#FEA034"),
  danger: {
    50: "#FFEDED",
    100: "#FFC8C8",
    200: "#FFADAD",
    300: "#FF8888",
    400: "#FF7171",
    DEFAULT: "#FF4D4D",
    600: "#E84646",
    700: "#B53737",
    800: "#8C2A2A",
    900: "#6B2020",
  },
  "danger-content": "#FFF",
  "danger-focus": generateDarkenColorFrom("#FF4D4D"),
};

const config: Config = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: tailwindColors,
    extend: {
      container: {
        center: true,
      },
      boxShadow: {
        sm: "0px 2px 4px 0px rgba(0, 0, 0, 0.12)",
        DEFAULT: "0px 4px 8px 0px rgba(0, 0, 0, 0.10)",
        md: "0px 6px 12px 0px rgba(0, 0, 0, 0.10)",
        lg: "0px 8px 16px 0px rgba(0, 0, 0, 0.08)",
      },
      dropShadow: {
        xl: "7px 0px 5.5px 0px rgba(0, 0, 0,0.25)",
      },
      backgroundImage: {
        landing: "url('/images/landing.jpg')",
        "hero-circle": "url('/images/hero-circle.png')",
      },
      fontFamily: {
        roboto: "var(--font-roboto)",
      },
    },
  },
  plugins: [
    /* function ({ addVariant }) {
      addVariant("child", "&>*");
      addVariant("child-hover", "&>*:hover");
    }, */
  ],
};
export default config;
