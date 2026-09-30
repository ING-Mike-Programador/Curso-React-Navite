import { FontAwesome6 } from "@react-native-vector-icons/fontawesome6";
import { Drawer } from "expo-router/drawer";
import CustomDrawer from "../components/shared/CustomDrawer";

const DrawerLayout = () => {
  return (
    <Drawer
      drawerContent={CustomDrawer}
      screenOptions={{
        overlayColor: "rgba(0,0,0,0.8)",
        //drawerActiveTintColor: "blue",
        sceneStyle: {
          backgroundColor: "#F8FAFC",
        },
      }}
    >
      <Drawer.Screen
        name="user" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Usuario",
          title: "Usuario",
          drawerIcon: ({ color, size }) => (
            <FontAwesome6
              name="user"
              iconStyle="solid"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="schedule" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Horario",
          title: "Horario",
          drawerIcon: ({ color, size }) => (
            <FontAwesome6
              name="calendar-days"
              iconStyle="solid"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
