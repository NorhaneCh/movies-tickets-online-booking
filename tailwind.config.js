/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      text: "#230B1E",
      background: "#F8E8F5",
      primary: "#4D1943",
      secondary: "#F5E0F1",
      accent: "#C346AC",
      "dark-text": "#F4DCEF",
      "dark-background": "#170714",
      "dark-primary": "#E6B2DC",
      "dark-secondary": "#1F0A1B",
      "dark-accent": "#B93CA2",
      "black-color": "#000",
      "white-color": "#fff",
    },
  },
  plugins: [],
};
