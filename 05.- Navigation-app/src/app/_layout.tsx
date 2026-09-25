import { useFonts } from "expo-font";
import { Slot, SplashScreen } from "expo-router";
import { useEffect } from "react";
import "./global.css";

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
