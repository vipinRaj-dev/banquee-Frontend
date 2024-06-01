/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        lg: "1200px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        serif: ["Inter", "serif"],
      },
      colors: {
        "custom-green": "#5BB5A2",
        "custom-font": "#1A191E",
        "custom-light-green": "#E8F2EE",
      },
    },
  },
  plugins: [],
};
