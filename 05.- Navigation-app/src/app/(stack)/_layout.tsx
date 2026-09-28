import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        animation: "slide_from_right",
        //headerShown: false
        headerShadowVisible: false,
        contentStyle: { backgroundColor: "#F8FAFC" },
      }}
    >
      <Stack.Screen name="home" options={{ title: "Inicio" }} />
      <Stack.Screen name="products" options={{ title: "Productos" }} />
      {/* <Stack.Screen name="[id]" options={{ title: "Busqueda Productos" }} /> */}
      <Stack.Screen name="profile" options={{ title: "Perfil" }} />
      <Stack.Screen name="settings" options={{ title: "Ajustes" }} />
    </Stack>
  );
};

export default StackLayout;
