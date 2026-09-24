import { Colors } from "@/constants/theme";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

const RootLayout = () => {
  return (
    <View style={{ backgroundColor: Colors.background, flex: 1 }}>
      <Text>HEADER</Text>

      <Slot />

      <StatusBar style="light" />
    </View>
  );
};

export default RootLayout;
