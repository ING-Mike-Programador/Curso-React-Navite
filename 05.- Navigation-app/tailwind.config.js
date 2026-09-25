/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
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
