// En CrearRecetaScreen.js
import React from "react";
import { View, Text } from "react-native";
import { Appbar } from "react-native-paper";

const MyRecipesScreen = () => {
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Crear Receta" />
      </Appbar.Header>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hola, esta es la pantalla para ver tus recetas.</Text>
      </View>
    </>
  );
};

export default MyRecipesScreen;
