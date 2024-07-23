import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CreateRecipeScreen from "./screens/CreateRecipeScreen.jsx";
import MyRecipesScreen from "./screens/MyRecipesScreen.jsx";
import { Platform } from "react-native";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#007C73",
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: {
          fontSize: 16,
        },
        tabBarStyle: {
          backgroundColor: "white",
          height: Platform.OS === "ios" ? 80 : 70, // Aumenta la altura en iOS
          paddingVertical: Platform.OS === "android" ? 5 : 10,
          paddingBottom: Platform.OS === "ios" ? 20 : 10, // Ajusta el paddingBottom para iOS
        },
      }}
    >
      <Tab.Screen
        name="Nueva Receta"
        component={CreateRecipeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="food" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Recetas"
        component={MyRecipesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
