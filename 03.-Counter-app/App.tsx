import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import FAB from "./components/FAB";


// APP de contador (Practica) 


export default function App() {

  // Valor del contador
  const [count, setCount] = useState(10);

  return (

    <View style={styles.container}>
      {/* Texto del contador */}
      <Text style={styles.textCountStyle}>{count}</Text>

      {/* Boton para aumentar contador */}
      <FAB
        label="+1"
        position="rigth"
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(count + 10)}
      />

      {/* Boton para aumentar contador */}
      <FAB
        label="-1"
        position="left"
        onPress={() => setCount(count - 1)}
        onLongPress={() => setCount(0)}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  // Estilo general del contenedor del contenido
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  // Estilo de texto del contador
  textCountStyle: {
    fontSize: 72,
    fontWeight: "800",
    color: "#1D4ED8",
  },
});
