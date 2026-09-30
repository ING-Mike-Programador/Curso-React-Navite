import { Redirect, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { products } from "../../../../../store/products.store";

const productsIDsearch = () => {
  const { id } = useLocalSearchParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    <Redirect href="/" />;
  }

  return (
    <View className="px-5 mt-10">
      <Text className="text-2xl text-primary font-work-black text-center">
        {product?.title}
      </Text>
      <Text className="text-black font-work-Medium">
        {product?.description}
      </Text>
      <Text className="text-xl text-secondaryDark font-work-black">
        {product?.price}
      </Text>
    </View>
  );
};

export default productsIDsearch;
