import { Pressable, PressableProps, Text } from "react-native";
interface Props extends PressableProps {
  children: string;
  color: "primary" | "secondary" | "tertiary";
}
const CustomButtons = ({ children, color }: Props) => {
  const btnColor = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    tertiary: "bg-tertiary",
  }[color];
  return (
    <Pressable className={`p-3 rounded-md ${btnColor}`}>
      <Text className="text-white text-center">{children}</Text>
    </Pressable>
  );
};

export default CustomButtons;
