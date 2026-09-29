import { FontAwesome6 } from "@react-native-vector-icons/fontawesome6";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#1D4ED8" }}>
      <Tabs.Screen
        name="home/index"
        options={{
          title: "Pantalla inicial",
          tabBarIcon: ({ color }) => (
            <FontAwesome6
              size={28}
              name="house"
              iconStyle="solid"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: "Favoritos",
          tabBarIcon: ({ color }) => (
            <FontAwesome6
              size={28}
              name="heart"
              iconStyle="solid"
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
