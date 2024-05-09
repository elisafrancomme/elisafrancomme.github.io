/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: { invited: ["YoureInvited"] },
      colors: {
        pink: "#B76781",
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
        accent: {
          50: "#f2f8f9",
          100: "#ddedf0",
          200: "#bedae3",
          300: "#92bfce",
          400: "#67a2b7",
          500: "#428098",
          600: "#3a6a80",
          700: "#34576a",
          800: "#314a59",
          900: "#2c404d",
          950: "#1a2833",
        },
      },
      typography: ({ theme }) => ({
        brand: {
          css: {
            "--tw-prose-body": theme("colors.black"),
            "--tw-prose-quotes": theme("colors.brand[950]"),
            "--tw-prose-quote-borders": theme("colors.brand[600]"),
            "--tw-prose-bullets": theme("colors.brand[600]"),
            "--tw-prose-headings": theme("colors.pink"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
