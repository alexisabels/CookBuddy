import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Appbar, BottomNavigation } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./Tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
