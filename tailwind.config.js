/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,ts,jsx,tsx,mdx}"];
export const theme = {
  extend: {
    fontFamily: {
      sans: ["var(--font-alpino)", "sans-serif"],
    },
    keyframes: {
      "slide-left": {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(-100%)" },
      },
      spin: {
        "0%": {
          transform: "rotate(0deg)"
        },
        "100%": {
          transform: "rotate(360deg)"
        }
      },
    },
    animation: {
      "slide-left": "slide-left 3s linear infinite",
      'spin-slow': 'spin 6s linear infinite',
    },
  },
};