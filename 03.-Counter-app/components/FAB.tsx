import { Text, Pressable, StyleSheet } from "react-native";

// Interfaz para el boton personalizado
interface props {
  // propiedades
  label: string; // Texto del boton
  position?: "left" | "rigth"; // posicion del boton
  // metodos
  onPress?: () => void;
  onLongPress?: () => void;
}

export default function FAB({ label, onPress, onLongPress, position = "rigth" }: props) {
  return (
    // Boton
    <Pressable
      // Estilo del boton
      style={[
        styles.btnStyle,
        // Condicion para intercambio de boton
        position === "rigth" ? styles.btnPositionSum : styles.btnPositionRest,
      ]}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      {/* Texto del boton */}
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
}

// Hoja de estilo
const styles = StyleSheet.create({
  // Estilo del boton
  btnStyle: {
    width: 75,
    height: 75,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },

  // Texto del boton
  buttonText: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "800",
  },
  // Posicion del boton
  btnPositionSum: {
    position: "absolute",
    bottom: 50,
    right: 20,
    backgroundColor: "#1D4ED8",
  },
  btnPositionRest: {
    position: "absolute",
    bottom: 50,
    left: 20,
    backgroundColor: "#93C5FD",
  },
});
