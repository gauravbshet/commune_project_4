/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#E8E9DC",
        sage: {
          DEFAULT: "#7C8863",
          dark: "#5C6B4D",
          deep: "#7B8A63",
        },
        ink: "#3B3A32",
        bark: "#4A4438",
        stone: "#B7BBA6",
        linen: "#F5F5EE",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        script: ["var(--font-caveat)", "cursive"],
        body: ["var(--font-jost)", "sans-serif"],
      },
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [],
};
