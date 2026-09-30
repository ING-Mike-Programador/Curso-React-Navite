import { Link, router } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButtons from "../../../components/shared/CustomButtons";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="px-10 mt-5">
        <CustomButtons
          color="primary"
          className="mb-5"
          onPress={() => router.push("/tabs/products")}
        >
          Productos
        </CustomButtons>
        <CustomButtons
          color="secondary"
          className="mb-5"
          onPress={() => router.push("/tabs/profile")}
        >
          Perfil
        </CustomButtons>
        <CustomButtons
          color="tertiary"
          className="mb-5"
          onPress={() => router.push("/tabs/settings")}
        >
          Ajustes
        </CustomButtons>
        <Link href="/tabs/products" asChild>
          <CustomButtons color="primary" className="mb-5" variant="text-only">
            Productos
          </CustomButtons>
        </Link>
        {/* <Link href="/products">Productos</Link>
        <Link href="/profile">Perfil</Link>
        <Link href="/settings">Ajustes</Link> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
