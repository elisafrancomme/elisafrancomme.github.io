/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: { invited: ["YoureInvited"] },
      colors: {
        accent: {
          50: "#fdf2f7",
          100: "#fbe8f2",
          200: "#fad0e6",
          300: "#f7aad0",
          400: "#f175b0",
          500: "#e84c91",
          600: "#d62c6f",
          700: "#b21b52",
          800: "#9a1a47",
          900: "#801b3f",
          950: "#4e0920",
        },
        brand: {
          50: "#fbf7f5",
          100: "#f6edea",
          200: "#efdfd9",
          300: "#e9d2ca",
          400: "#d2a697",
          500: "#bf8774",
          600: "#a96e59",
          700: "#8d5a48",
          800: "#764c3e",
          900: "#644338",
          950: "#35211a",
        },
      },
      typography: ({ theme }) => ({
        brand: {
          css: {
            "--tw-prose-body": theme("colors.black"),
            "--tw-prose-quotes": theme("colors.accent[950]"),
            "--tw-prose-quote-borders": theme("colors.accent[700]"),
            "--tw-prose-bullets": theme("colors.accent[600]"),
            "--tw-prose-headings": theme("colors.accent[700]"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
