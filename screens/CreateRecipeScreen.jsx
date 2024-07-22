import React, { useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import { Appbar, Button, TextInput, Snackbar } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CrearRecetaScreen = () => {
  const [nombre, setNombre] = useState("");
  const [visible, setVisible] = useState(false);
  const [snackbarText, setSnackbarText] = useState("");

  const guardarReceta = async () => {
    Keyboard.dismiss();
    try {
      const receta = { id: Date.now().toString(), nombre };
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
          <View>
            <TextInput
              label="Nombre de la receta"
              value={nombre}
              onChangeText={setNombre}
              mode="outlined"
            />
            <Button onPress={guardarReceta}>Guardar</Button>
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
