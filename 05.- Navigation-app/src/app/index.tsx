import { Text, View } from "react-native";
import "./global.css";

const App = () => {
  return (
    <View className="flex-1 items-center justify-center bg-background ">
      <Text className="text-4xl text-blue-400 font-work-black">
        Welcome to Natissvewind!
      </Text>
      <Text className="text-4xl text-blue font-work-Light">
        Welcome to Natissvewind!
      </Text>
      <Text className="text-4xl text-blue-600 font-work-Medium">
        Welcome to Natissvewind!
      </Text>
    </View>
  );
};

export default App;
