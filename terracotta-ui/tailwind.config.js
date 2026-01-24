import containerQueries from "@tailwindcss/container-queries";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#ec5b13",
        "background-light": "#f8f6f6",
        "background-dark": "#221610",
        charcoal: "#1b120d",
        "muted-brown": "#9a664c"
      },
      fontFamily: {
        display: ["Work Sans", "sans-serif"]
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      }
    }
  },
  plugins: [containerQueries]
};