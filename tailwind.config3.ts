import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      spacing: {
        sm: "8px",
        smd: "12px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        "2xl": "40px",
        "3xl": "48px",
        "4xl": "56px",
        "5xl": "64px",
      },
      fontSize: {
        xs: ["text-xs", "text-sm"],
        sm: ["13px", "20px"],
        base: ["15px", "24px"],
        lg: ["18px", "28px"],
        xl: ["20px", "28px"],
        "2xl": ["24px", "32px"],
        "3xl": ["30px", "36px"],
        "4xl": ["36px", "40px"],
        "5xl": ["48px", "50px"],
        "6xl": ["60px", "60px"],
        "7xl": ["72px", "72px"],
        "8xl": ["96px", "96px"],
        "9xl": ["128px", "128px"],
      },
      backgroundImage: {
        frontline:
          "linear-gradient(180deg, transparent 50%, white 100%),linear-gradient(90deg, rgba(77,221,255,1) 0%, rgba(153,153,255,1) 33%, rgba(50,58,80,1) 80%, rgba(0,0,0,1) 100%);",
      },
      colors: {
        border: "rgb(var(--border))",
        input: "rgb(var(--input))",
        ring: "rgb(var(--ring))",
        background: {
          DEFAULT: "rgb(var(--background))",
          sidenav: "rgb(var(--background-sidenav))",
          hover: "rgb(var(--background-hover))",
        },
        foreground: "rgb(var(--foreground))",
        link: {
          DEFAULT: "rgb(var(--link))",
        },
        primary: {
          "100": "rgb(var(--primary-100))",
          "200": "rgb(var(--primary-200))",
          "900": "rgb(var(--primary-900))",
          DEFAULT: "rgb(var(--primary))",
          foreground: "rgb(var(--primary-foreground))",
          legal: "rgb(var(--primary-legal))",
          muted: "rgb(var(--primary-muted))",
        },
        secondary: {
          "100": "rgb(var(--secondary-100))",
          DEFAULT: "rgb(var(--secondary))",
          foreground: "rgb(var(--secondary-foreground))",
          muted: "rgb(var(--secondary-muted))",
          subtle: "rgb(var(--secondary-subtle))",
        },
        destructive: {
          DEFAULT: "rgb(var(--destructive))",
          foreground: "rgb(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "rgb(var(--muted))",
          foreground: "rgb(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "rgb(var(--accent))",
          foreground: "rgb(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "rgb(var(--popover))",
          foreground: "rgb(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "rgb(var(--card))",
          foreground: "rgb(var(--card-foreground))",
        },
        success: {
          DEFAULT: "rgb(var(--success))",
          muted: "rgb(var(--success-muted))",
          foreground: "rgb(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "rgb(var(--warning))",
          muted: "rgb(var(--warning-muted))",
          foreground: "rgb(var(--warning-foreground))",
        },
        error: {
          "100": "rgb(var(--error-100))",
          DEFAULT: "rgb(var(--error))",
          muted: "rgb(var(--error-muted))",
          foreground: "rgb(var(--error-foreground))",
          message: "rgb(var(--error-message))",
        },
        sidenav: {
          header: "rgb(var(--sidenav-header))",
        },
        gray: {
          "50": "rgb(var(--gray-50))",
          "150": "rgb(var(--gray-150))",
          "250": "rgb(var(--gray-250))",
          "350": "rgb(var(--gray-350))",
          "450": "rgb(var(--gray-450))",
          "550": "rgb(var(--gray-550))",
          "950": "rgb(var(--gray-950))",
        },
        sidebar: {
          DEFAULT: "rgb(var(--sidebar-background))",
          foreground: "rgb(var(--sidebar-foreground))",
          primary: "rgb(var(--sidebar-primary))",
          "primary-foreground": "rgb(var(--sidebar-primary-foreground))",
          accent: "rgb(var(--sidebar-accent))",
          "accent-foreground": "rgb(var(--sidebar-accent-foreground))",
          border: "rgb(var(--sidebar-border))",
          ring: "rgb(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "collapsible-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-collapsible-content-height)",
          },
        },
        "collapsible-up": {
          from: {
            height: "var(--radix-collapsible-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 200ms ease-out",
        "accordion-up": "accordion-up 200ms ease-out",
        "collapsible-up": "collapsible-up 200ms ease-out",
        "collapsible-down": "collapsible-down 200ms ease-out",
      },
      gridTemplateColumns: {
        "auto-fit-350": "repeat(auto-fit, minmax(350px, auto))",
      },
      maxWidth: {
        "modal-sm": "400px",
        "modal-md": "600px",
        "modal-lg": "1000px",
      },
      maxHeight: {
        modal: "750px",
        "modal-lg": "1000px",
      },
    },
    fontFamily: {
      sans: ["HelveticaNeue", "Arial", "sans-serif"],
      azeret: ["Azeret-Mono"],
      menlo: ["Menlo", "monospace"],
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
