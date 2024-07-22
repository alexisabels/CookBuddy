// En CrearRecetaScreen.js
import React, { useState } from "react";
import { View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Appbar, Card } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const MyRecipesScreen = () => {
  const [recetas, setRecetas] = useState([
    {
      id: "1",
      titulo: "Tarta de manzana",
      ingredientes: "Manzanas, azúcar, harina",
      pasos: "Cortar manzanas...",
    },
    {
      id: "2",
      titulo: "Paella",
      ingredientes: "Arroz, pollo, mariscos",
      pasos: "Cocinar el arroz...",
    },
  ]);

  const RecipeCard = ({ item }) => (
    <Card style={{ margin: 8 }}>
      <Card.Title title={item.titulo} />
      <Card.Content>
        <Text>{item.ingredientes}</Text>
        <Text>{item.pasos}</Text>
      </Card.Content>
    </Card>
  );
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Mis Recetas" />
      </Appbar.Header>
      <View>
        <FlatList
          data={recetas}
          renderItem={RecipeCard}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  );
};

export default MyRecipesScreen;
