import { Redirect } from "expo-router";
import "./global.css";

const App = () => {
  return <Redirect href="/home" />;
  // return (
  //   <View className="flex-1 items-center justify-center bg-background ">
  //     {/* <Text className="text-4xl text-blue-400 font-work-black">
  //       Welcome to Natissvewind!
  //     </Text>
  //     <Text className="text-4xl text-blue font-work-Light">
  //       Welcome to Natissvewind!
  //     </Text>
  //     <Text className="text-4xl text-blue-600 font-work-Medium">
  //       Welcome to Natissvewind!
  //     </Text> */}

  //     {/* <Link href="/products">productos</Link> */}
  //   </View>
  // );
};

export default App;
