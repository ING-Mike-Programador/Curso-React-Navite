import { Link, router } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButtons from "../components/shared/CustomButtons";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="px-10 mt-5">
        <Text>HomeScreen</Text>
        <Link href="/products" asChild>
          <CustomButtons color="primary">Productos</CustomButtons>
        </Link>
        <CustomButtons color="primary" onPress={() => router.push("/products")}>
          Productos
        </CustomButtons>
        <CustomButtons
          color="primary"
          variant="text-only"
          onPress={() => router.push("/products")}
        >
          Productos
        </CustomButtons>

        {/* <Link href="/products">Productos</Link>
        <Link href="/profile">Perfil</Link>
        <Link href="/settings">Ajustes</Link> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
