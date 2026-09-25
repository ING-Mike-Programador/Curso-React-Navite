import { useFonts } from "expo-font";
import { Slot, SplashScreen } from "expo-router";
import "./global.css";

// esperar a que las fuentes esten cargadas
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  // asignar uso de fuentes
  useFonts({
    "WorkSans-Black": require("../../assets/Fonts/WorkSans-Black.ttf"),
    "WorkSans-Light": require("../../assets/Fonts/WorkSans-Light.ttf"),
    "WorkSans-Medium": require("../../assets/Fonts/WorkSans-Medium.ttf"),
  });
  return <Slot />;
};

export default RootLayout;
