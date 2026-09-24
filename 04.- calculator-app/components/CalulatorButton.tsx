import { Colors } from "@/constants/theme";
import * as Haptics from "expo-haptics";
import { Pressable, Text } from "react-native";
import { globalStyles } from "../styles/global-styles";

// Propiedades del boton
interface Props {
  // Propiedades
  label: string;
  colorButton?: string;
  blackText?: boolean;
  doubleSize?: boolean;

  // metodos
  onPress: () => void;
  onLongPress?: () => void;
}

const CalulatorButton = ({
  label,
  colorButton = Colors.blue[400],
  blackText = true,
  doubleSize = false,
  onPress,
  onLongPress,
}: Props) => {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...globalStyles.button,
        backgroundColor: colorButton,
        opacity: pressed ? 0.6 : 1,
        width: doubleSize
          ? globalStyles.button.width * 2 + globalStyles.row.paddingHorizontal
          : globalStyles.button.width,
      })}
      onPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
        onPress();
      }}
      onLongPress={onLongPress}
    >
      <Text
        style={{
          ...globalStyles.buttonFont,
          color: !blackText ? Colors.text.inverse : Colors.text.primary,
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default CalulatorButton;
