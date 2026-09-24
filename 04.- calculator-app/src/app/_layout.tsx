import { NavigationBar } from "expo-navigation-bar";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { globalStyles } from "../../styles/global-styles";

// Ocultar barra de opciones en el movil
NavigationBar.setHidden(true);
const RootLayout = () => {
  return (
    <View style={globalStyles.container}>
      <Text>HEADER</Text>

      <Slot />

      <StatusBar style="light" />
    </View>
  );
};

export default RootLayout;
