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
  white: "#F9F9F9",
  blue: {
    50: "#E7EEFE",
    100: "#CFDDFC",
    200: "#9EBBFA",
    300: "#6E99F7",
    400: "#3E77F4",
    DEFAULT: "#3571F4",
    600: "#0B44C1",
    700: "#083391",
    800: "#052261",
    900: "#031130",
    950: "#010918",
  },
  "blue-content": "#FFFFFF",
  "blue-focus": generateDarkenColorFrom("#3571F4"),
  yellow: {
    50: "#FEF6E7",
    100: "#FCEECF",
    200: "#FADD9E",
    300: "#F7CC6E",
    400: "#F4BB3E",
    DEFAULT: "#F4B735",
    600: "#C1880B",
    700: "#916608",
    800: "#614405",
    900: "#302203",
    950: "#181101",
  },
  "yellow-content": "#FFF",
  "yellow-focus": generateDarkenColorFrom("#F4B735"),
  neutral: {
    50: "#F2F2F2",
    100: "#E6E6E6",
    200: "#CCCCCC",
    300: "#B3B3B3",
    400: "#999999",
    DEFAULT: "#FFFFFF",
    600: "#666666",
    700: "#4D4D4D",
    800: "#333333",
    900: "#1A1A1A",
    950: "#0D0D0D",
  },
  "neutral-content": generateForegroundColorFrom("#FFFFFF"),
  "neutral-focus": generateDarkenColorFrom("#2a323c", 0.03),
  info: {
    50: "#E5EAFF",
    100: "#CCD5FF",
    200: "#99AAFF",
    300: "#6680FF",
    400: "#3355FF",
    DEFAULT: "#0025DD",
    600: "#0022CC",
    700: "#001A99",
    800: "#001166",
    900: "#000933",
    950: "#00041A",
  },
  "info-content": "#FFF",
  "info-focus": generateDarkenColorFrom("#0025DD"),
  success: {
    50: "#E5FFEA",
    100: "#CCFFD5",
    200: "#99FFAA",
    300: "#66FF80",
    400: "#33FF55",
    DEFAULT: "#00AE1D",
    600: "#00CC22",
    700: "#00991A",
    800: "#006611",
    900: "#003309",
    950: "#001A04",
  },
  "success-content": "#FFF",
  "success-focus": generateDarkenColorFrom("#00AE1D"),
  warning: {
    50: "#FCFAE9",
    100: "#F8F5D3",
    200: "#F2EAA6",
    300: "#EBE07A",
    400: "#E5D64D",
    DEFAULT: "#E0CE2C",
    600: "#B2A31A",
    700: "#857A14",
    800: "#59510D",
    900: "#2C2907",
    950: "#161403",
  },
  "warning-content": "#FFF",
  "warning-focus": generateDarkenColorFrom("#E0CE2C"),
  danger: {
    50: "#FEE6EB",
    100: "#FDCED7",
    200: "#FB9DAE",
    300: "#F96C86",
    400: "#F73B5D",
    DEFAULT: "#E00930",
    600: "#C4082A",
    700: "#930620",
    800: "#620415",
    900: "#31020B",
    950: "#190105",
  },
  "danger-content": "#FFF",
  "danger-focus": generateDarkenColorFrom("#E00930"),
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
    },
  },
  plugins: [],
};
export default config;
