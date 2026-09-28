import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButtons from "../components/shared/CustomButtons";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="px-10 mt-5">
        <Text>HomeScreen</Text>

        <CustomButtons color="primary">Productos</CustomButtons>

        {/* <Link href="/products">Productos</Link>
        <Link href="/profile">Perfil</Link>
        <Link href="/settings">Ajustes</Link> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
