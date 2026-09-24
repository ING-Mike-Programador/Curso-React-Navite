import { Colors, Fonts } from "@/constants/theme";
import { Text, View } from "react-native";

const CalculatorAPP = () => {
  return (
    <View>
      <Text
        style={{ fontSize: 30, fontFamily: Fonts.mono, color: Colors.surface }}
      >
        CalculatorAPP
      </Text>
    </View>
  );
};

export default CalculatorAPP;
