import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CreateRecipeScreen from "./screens/CreateRecipeScreen";
import MyRecipesScreen from "./screens/MyRecipesScreen";

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
          height: 100,
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
