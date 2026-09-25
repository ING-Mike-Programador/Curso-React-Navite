import { Text, View } from "react-native";
import "./global.css";

const App = () => {
  return (
    <View className="flex-1 items-center justify-center bg-blue-700 ">
      <Text className="text-4xl font-work-black">Welcome to Natissvewind!</Text>
      <Text className="text-4xl font-work-Light">Welcome to Natissvewind!</Text>
      <Text className="text-4xl font-work-Medium">
        Welcome to Natissvewind!
      </Text>
    </View>
  );
};

export default App;
