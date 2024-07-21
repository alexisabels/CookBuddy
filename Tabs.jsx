import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreateRecipeScreen from "./screens/CreateRecipeScreen";
import MyRecipesScreen from "./screens/MyRecipesScreen";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Nueva Receta" component={CreateRecipeScreen} />
      <Tab.Screen name="Recetas" component={MyRecipesScreen} />
    </Tab.Navigator>
  );
}
