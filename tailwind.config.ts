import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#2563EB", // biru terang
          dark: "#1E40AF",  // biru tua
        },
        accent: {
          light: "#9333EA", // ungu terang
          dark: "#6D28D9",  // ungu tua
        },
        neutral: {
          light: "#F9FAFB", // abu terang
          dark: "#0F172A",  // abu gelap
        },
      },
    },
  },
  plugins: [],
};

export default config;
