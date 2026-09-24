// Constantes de temas predefinidos
import "@/global.css";

import { Platform } from "react-native";

// Colores
export const Colors = {
  background: "#020202",
  surface: "#FFFFFF",
  blue: {
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
  text: {
    primary: "#0F172A",
    secondary: "#64748B",
    inverse: "#FFFFFF",
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
} as const;

// Fuentes
export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: "system-ui",
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: "ui-serif",
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: "ui-rounded",
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "var(--font-display)",
    serif: "var(--font-serif)",
    rounded: "var(--font-rounded)",
    mono: "var(--font-mono)",
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
