/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  daisyui: {
    themes: [
      "light",
      "dark",
      {
        default: {
          primary: "#1B2B1F", // Active Icon Color
          secondary: "#61C2E2", // Label Text Color

          accent: "#6E6E6E", // De-active icon color
          neutral: "#000000", // Text Color

          "base-100": "#F2F2F2", // Section Background Color
          "base-200": "#FAFAFB", // Background Color
          "base-300": "#FFFFFF", // Sidebar Background Color

          info: "#5881ff",
          success: "#36d399",
          warning: "#FFDB67",
          error: "#ff8369",
        },
      },
      {
        defaultDark: {
          primary: "#FF7346", // Active Icon Color
          secondary: "#3CC6E5", // Label Text Color

          accent: "#6E6E6E", // De-active icon color
          neutral: "#ffffff", // Text Color

          "base-100": "#1A1A1A", // Section Background Color
          "base-200": "#111111", // Background Color
          "base-300": "#0D0D0D", // Sidebar Background Color

          info: "#5881ff",
          success: "#36d399",
          warning: "#FFDB67",
          error: "#ff8369",
        },
      },
      {
        perfectBlue: {
          primary: "#605bff", // Active Icon Color
          secondary: "#61C2E2", // Label Text Color

          accent: "#6E6E6E", // De-active icon color
          neutral: "#000000", // Text Color

          "base-100": "#F2F2F2", // Section Background Color
          "base-200": "#FAFAFB", // Background Color
          "base-300": "#FFFFFF", // Sidebar Background Color

          info: "#5881ff",
          success: "#36d399",
          warning: "#FFDB67",
          error: "#ff8369",
        },
      },
      {
        perfectBlueDark: {
          primary: "#605bff", // Active Icon Color
          secondary: "#3CC6E5", // Label Text Color

          accent: "#6E6E6E", // De-active icon color
          neutral: "#ffffff", // Text Color

          "base-100": "#1A1A1A", // Section Background Color
          "base-200": "#111111", // Background Color
          "base-300": "#0D0D0D", // Sidebar Background Color

          info: "#5881ff",
          success: "#36d399",
          warning: "#FFDB67",
          error: "#ff8369",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
