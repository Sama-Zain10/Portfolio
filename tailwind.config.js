/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#06070d",
          900: "#0a0c16",
          850: "#0e1120",
          800: "#12162a",
          700: "#1a1f3a",
          600: "#2a3155",
        },
        accent: {
          violet: "#8b7bff",
          blue: "#5b8dff",
          cyan: "#5eead4",
        },
        ink: {
          100: "#f2f3fb",
          300: "#c4c8e0",
          500: "#8890b5",
          700: "#565d82",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grad-primary": "linear-gradient(135deg, #8b7bff 0%, #5b8dff 55%, #5eead4 100%)",
        "grad-radial-glow": "radial-gradient(circle at center, rgba(139,123,255,0.25), transparent 70%)",
      },
      boxShadow: {
        glow: "0 0 60px -15px rgba(139,123,255,0.45)",
      },
    },
  },
  plugins: [],
};
