import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        h1: [
          "3rem",
          {
            lineHeight: "3.6rem",
            fontWeight: "500",
            letterSpacing: "-0.02rem",
          },
        ],
        h2: ["36px", "28px"],
        h3: "24px",
        h4: "20px",
        h5: "18px",
        h6: "16px",
        xl: ["24px", "20px"],
        lg: ["20px", "18px"],
        md: "16px",
        sm: "14px",
        xsm: "12px",
        eyebrow: "14px",
      },
      colors: {
        primary: {
          500: "#0F6FFF",
          200: "#B3E0FF",
          100: "#F1F9FD",
        },
        secondary: {
          500: "#FFD355",
          200: "#FBF6EE",
        },
        neutral: {
          900: "#06090E",
          800: "#000F19",
          700: "#001524",
          600: "#011F32",
          500: "#606D85",
          400: "#C3C9D5",
          300: "#E6EAEF",
          200: "#F5F7F9",
          white: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
