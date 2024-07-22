import React, { useState, useEffect, useCallback } from "react";
import { View, Text, Keyboard } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Appbar, Card, IconButton } from "react-native-paper";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import RecipeCard from "../RecipeCard";

const MyRecipesScreen = () => {
  const [recetasArray, setRecetasArray] = useState([]);

  const getRecetas = async () => {
    Keyboard.dismiss();
    try {
      const recetasExistentes = await AsyncStorage.getItem("recetas");
      const recetasArray = recetasExistentes
        ? JSON.parse(recetasExistentes)
        : [];
      setRecetasArray(recetasArray);
    } catch (error) {
      console.error("Error al obtener la receta", error);
    }
  };

  const eliminarReceta = async (id) => {
    try {
      const recetasExistentes = await AsyncStorage.getItem("recetas");
      const recetasArray = recetasExistentes
        ? JSON.parse(recetasExistentes)
        : [];
      const recetasActualizadas = recetasArray.filter(
        (receta) => receta.id !== id
      );
      await AsyncStorage.setItem(
        "recetas",
        JSON.stringify(recetasActualizadas)
      );
      setRecetasArray(recetasActualizadas);
    } catch (error) {
      console.error("Error al borrar la receta", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getRecetas();
    }, [])
  );

  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Mis Recetas" />
      </Appbar.Header>
      <View>
        <FlatList
          data={recetasArray}
          renderItem={RecipeCard}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  );
};

export default MyRecipesScreen;
