/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#0d0d0d", light: "#262626", dark: "#000000" },
        secondary: { DEFAULT: "#484848" },
        accent: { DEFAULT: "#d1b045", dark: "#a8852b", light: "#e7c66a" },
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
        display: ["'Fraunces'", "Georgia", "serif"],
      },
      letterSpacing: {
        tightish: "-0.02em",
      },
      boxShadow: {
        soft: "0 4px 24px -8px rgba(15, 23, 42, 0.12)",
        ring: "0 0 0 1px rgba(15, 23, 42, 0.06), 0 8px 32px -12px rgba(15, 23, 42, 0.18)",
      },
    },
  },
  plugins: [],
};
