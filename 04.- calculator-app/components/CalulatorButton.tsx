import { Colors } from "@/constants/theme";
import { Pressable, Text } from "react-native";
import { globalStyles } from "../styles/global-styles";

// Propiedades del boton
interface Props {
  // Propiedades
  label: string;
  colorButton?: string;
  blackText?: boolean;

  // metodos
  onPress?: () => void;
}

const CalulatorButton = ({
  label,
  colorButton = Colors.blue[400],
  blackText = true,
  onPress,
}: Props) => {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...globalStyles.button,
        backgroundColor: colorButton,
        opacity: pressed ? 0.6 : 1,
      })}
      onPress={onPress}
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
