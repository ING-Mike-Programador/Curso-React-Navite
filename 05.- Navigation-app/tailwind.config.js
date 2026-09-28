/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      // Agregar colores
      colors: {
        // Fondos
        background: "#F8FAFC",
        surface: "#FFFFFF",

        // Colores principales
        primary: "#2563EB",
        primaryLight: "#60A5FA",
        primaryDark: "#1D4ED8",

        secondary: "#06B6D4",
        secondaryLight: "#67E8F9",
        secondaryDark: "#0891B2",

        tertiary: "#6366F1",
        tertiaryLight: "#A5B4FC",
        tertiaryDark: "#4338CA",

        // Texto
        primaryText: "#0F172A",
        secondaryText: "#64748B",
        inverseText: "#FFFFFF",

        // Bordes
        border: "#CBD5E1",
        borderLight: "#E2E8F0",
        borderDark: "#94A3B8",

        // Estados
        success: "#22C55E",
        successLight: "#86EFAC",
        successDark: "#15803D",

        warning: "#F59E0B",
        warningLight: "#FCD34D",
        warningDark: "#B45309",

        danger: "#EF4444",
        dangerLight: "#FCA5A5",
        dangerDark: "#B91C1C",

        // Extras
        muted: "#94A3B8",
        shadow: "#000000",
      },

      // agregar fuentes nuevas
      fontFamily: {
        "work-black": ["WorkSans-Black", "Sans-serif"],
        "work-Light": ["WorkSans-Light", "Sans-serif"],
        "work-Medium": ["WorkSans-Medium", "Sans-serif"],
      },
    },
  },
  plugins: [],
};
