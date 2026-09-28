import { useFonts } from "expo-font";
import { NavigationBar } from "expo-navigation-bar";
import { Slot, SplashScreen } from "expo-router";
import { useEffect } from "react";
import { Platform } from "react-native";
import "./global.css";
// Verificar si el dispositivo es android
const isAndroid = Platform.OS === "android";

// Ocultar barra de opciones en el movil android
if (isAndroid) NavigationBar.setHidden(true);
// esperar a que las fuentes esten cargadas
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  // asignar uso de fuentes
  const [fontsLoaded, error] = useFonts({
    "WorkSans-Black": require("../../assets/Fonts/WorkSans-Black.ttf"),
    "WorkSans-Light": require("../../assets/Fonts/WorkSans-Light.ttf"),
    "WorkSans-Medium": require("../../assets/Fonts/WorkSans-Medium.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return <Slot />;
};

export default RootLayout;
