import { Link } from "expo-router";
import { FlatList, Text, View } from "react-native";
import { products } from "../../../../store/products.store";

const ProductScreen = () => {
  return (
    <View className="flex flex-1 m-5">
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="mt-3 mb-3">
            <Text className="text-2xl font-work-black">{item.title}</Text>
            <Text className="font-work-Light">{item.description}</Text>
            <View className="flex flex-row justify-between mt-2">
              <Text className="text-xl font-work-Medium">{item.price}</Text>
              <Link
                href={`/(stack)/products/${item.id}`}
                className="text-primary"
              >
                Ver detalles
              </Link>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ProductScreen;
