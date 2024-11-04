import { nextui } from "@nextui-org/react";
import { colord, extend } from "colord";
import mixPlugin from "colord/plugins/mix";
import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

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
  icon: {
    300: "#7774BA",
    500: "#373299",
    DEFAULT: "#373299",
    700: "#252268",
    900: "#141237",
  },
  "icon-content": "#FFFFFF",
  "icon-focus": generateDarkenColorFrom("#373299"),
  primary: {
    300: "#9797B9",
    400: "#7E7EA8",
    500: "#666698",
    DEFAULT: "#666698",
    700: "#454567",
    900: "#252537",
  },
  "primary-content": "#FFFFFF",
  "primary-focus": generateDarkenColorFrom("#666698"),
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
  third: {
    50: "#EEE4DD",
    100: "#E9DCD3",
    200: "#DFCCC0",
    300: "#D6BCAC",
    400: "#CCAD99",
    500: "#C29D85",
    DEFAULT: "#C29D85",
    600: "#A38470",
    700: "#846B5A",
    800: "#655245",
    900: "#463930",
  },
  "third-content": "#FFFFFF",
  "third-focus": generateDarkenColorFrom("#C29D85"),
  mayBe: {
    50: "#F3F4F5",
    100: "#EFF1F2",
    200: "#E8EAEC",
    300: "#E1E4E6",
    400: "#DADDE0",
    500: "#D3D7DA",
    DEFAULT: "#D3D7DA",
    600: "#B1B5B7",
    700: "#8F9294",
    800: "#6E7071",
    900: "#4C4D4E",
  },
  "mayBe-content": "#FFFFFF",
  "mayBe-focus": generateDarkenColorFrom("#D3D7DA"),
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
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
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
        xl: "-8px 8px 20.2px 4px rgba(0, 0, 0, 0.25)",
      },
      dropShadow: {
        xl: "7px 0px 5.5px 0px rgba(0, 0, 0,0.25)",
      },
      borderRadius: {
        "4xl": "50px",
        "5xl": "100px",
      },
      backgroundImage: {
        logo: "url('/images/bg-logo.png')",
        "hero-doctor": "url('/images/hero-doctor.png')",
        "hero-circle": "url('/images/hero-circle.png')",
      },
      backgroundSize: {
        "50%": "50%",
      },
      fontFamily: {
        roboto: "var(--font-roboto)",
        yekan: ["var(--font-yekan)", "sans-serif"],
      },
      fontWeight: {
        thin: "100",
        light: "200",
        regular: "300",
        medium: "400",
        bold: "500",
        extraBold: "600",
        black: "700",
        extraBlack: "800",
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              300: "#9797B9",
              400: "#7E7EA8",
              500: "#666698",
              DEFAULT: "#666698",
              700: "#454567",
              900: "#252537",
            },
            secondary: {
              300: "#7774BA",
              500: "#373299",
              DEFAULT: "#373299",
              700: "#252268",
              900: "#141237",
            },
          },
        },
      },
    }),
    function ({ addVariant }: PluginAPI) {
      addVariant("child", "&>*");
      addVariant("child-hover", "&>*:hover");
      addVariant("not-first", "&>*:not(:first-child)");
    },
  ],
  darkMode: "class",
};
export default config;
