/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      // Agregar colores
      colors: {
        background: "#020202",
        surface: "#FFFFFF",
        text: {
          primary: "#0F172A",
          secondary: "#64748B",
          inverse: "#FFFFFF",
        },
        blue: {
          DEFAULT: "#3B82F6",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
        },
        // Bordes y detalles
        border: "#CBD5E1",
        divider: "#E2E8F0",
        // Estados
        success: "#22C55E",
        warning: "#F59E0B",
        danger: "#EF4444",
        // Sombras (opcional)
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
