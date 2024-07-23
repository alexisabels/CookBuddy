import React, { useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Alert,
} from "react-native";
import { Appbar, Button, TextInput, Snackbar } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CrearRecetaScreen = () => {
  const [nombre, setNombre] = useState("");
  const [ingredientes, setIngredientes] = useState("");
  const [pasos, setPasos] = useState("");

  const [visible, setVisible] = useState(false);
  const [snackbarText, setSnackbarText] = useState("");

  const guardarReceta = async () => {
    Keyboard.dismiss();

    if (!nombre || !ingredientes || !pasos) {
      Alert.alert(
        "Error al guardar receta",
        "Todos los campos son obligatorios."
      );
      return;
    }

    try {
      const receta = { id: Date.now().toString(), nombre, ingredientes, pasos };
      const recetasExistentes = await AsyncStorage.getItem("recetas");
      const recetasActualizadas = recetasExistentes
        ? JSON.parse(recetasExistentes)
        : [];
      recetasActualizadas.push(receta);
      await AsyncStorage.setItem(
        "recetas",
        JSON.stringify(recetasActualizadas)
      );
      setSnackbarText("Receta guardada con éxito!");
      setVisible(true);
      setNombre("");
      setIngredientes("");
      setPasos("");
    } catch (error) {
      setSnackbarText("Error al guardar la receta.");
      setVisible(true);
      console.error("Error al guardar la receta", error);
    }
  };

  const onDismissSnackBar = () => setVisible(false);

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <Appbar.Header>
            <Appbar.Content title="Crear Receta" />
          </Appbar.Header>
          <View style={{ margin: 20 }}>
            <TextInput
              style={{ marginBottom: 10 }}
              label="Nombre de la receta"
              value={nombre}
              onChangeText={setNombre}
              mode="outlined"
            />
            <TextInput
              style={{ marginBottom: 10 }}
              multiline
              label="Ingredientes"
              value={ingredientes}
              onChangeText={setIngredientes}
              mode="outlined"
            />
            <TextInput
              style={{ marginBottom: 10 }}
              multiline
              label="Pasos"
              value={pasos}
              onChangeText={setPasos}
              mode="outlined"
            />
            <Button
              mode="contained-tonal"
              buttonColor="#007C73"
              textColor="#ffff"
              onPress={guardarReceta}
            >
              Guardar
            </Button>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
      <Snackbar visible={visible} onDismiss={onDismissSnackBar} duration={3000}>
        {snackbarText}
      </Snackbar>
    </KeyboardAvoidingView>
  );
};

export default CrearRecetaScreen;
