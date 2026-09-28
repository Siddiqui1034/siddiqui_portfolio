/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        slate: {
          850: "#151e2e",
          950: "#0b1120",
        },
      },
      animation: {
        blob: "blob 7s infinite",
        glow: "glow 3s ease-in-out infinite alternate",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        glow: {
          "0%": {
            boxShadow: "0 0 10px #3b82f6, 0 0 20px #8b5cf6, 0 0 30px #ec4899",
          },
          "100%": {
            boxShadow: "0 0 20px #3b82f6, 0 0 40px #8b5cf6, 0 0 60px #ec4899",
          },
        },
      },
    },
  },
  plugins: [],
};
