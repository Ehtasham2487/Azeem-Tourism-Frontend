// Define the colors
const colors = {
  // Desert Tones
  "desert-sand": "#D4C6AA",
  "sandy-brown": "#E8CDA5",
  "warm-tan": "#D9BFA8",
  // Sky and Water
  "azure-blue": "#00A3E0",
  "deep-blue": "#004777",
  "light-seafoam": "#6BC4A6",

  // Accent Colors
  "royal-purple": "#7E59A2",
  "golden-yellow": "#FFD700",
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "desert-sand": colors["desert-sand"],
        "sandy-brown": colors["sandy-brown"],
        "warm-tan": colors["warm-tan"],
        "azure-blue": colors["azure-blue"],
        "deep-blue": colors["deep-blue"],
        "light-seafoam": colors["light-seafoam"],
        "royal-purple": colors["royal-purple"],
        "golden-yellow": colors["golden-yellow"],
      },
    },
  },
  plugins: [],
};
