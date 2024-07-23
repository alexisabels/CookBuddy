import React, { useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Alert,
  Platform,
} from "react-native";
import { Appbar, Button, TextInput, Snackbar } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const CrearRecetaScreen = () => {
  const [nombre, setNombre] = useState("");
  const [ingredientes, setIngredientes] = useState([]); //adaptado para que sea un array de ing.
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
      setIngredientes([]);
      setPasos("");
    } catch (error) {
      setSnackbarText("Error al guardar la receta.");
      setVisible(true);
      console.error("Error al guardar la receta", error);
    }
  };

  const handleIngredientChange = (text, ingrediente) => {
    const nuevosIngredientes = [...ingredientes];
    nuevosIngredientes[ingrediente] = text;
    setIngredientes(nuevosIngredientes);
  };
  const onDismissSnackBar = () => setVisible(false);

  const removeIngredient = (index) => {
    const newIngredients = ingredientes.filter((_, i) => i !== index);
    setIngredientes(newIngredients);
  };

  const nuevoCampoIngrediente = () => {
    setIngredientes([...ingredientes, ""]);
  };
  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAwareScrollView
          style={{ flex: 1 }}
          resetScrollToCoords={{ x: 0, y: 0 }}
          contentContainerStyle={{ flexGrow: 1 }}
          scrollEnabled={true}
          extraHeight={10}
          extraScrollHeight={10}
          keyboardShouldPersistTaps="handled"
        >
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
            <Button icon="plus" mode="outlined" onPress={nuevoCampoIngrediente}>
              Añadir ingrediente
            </Button>
            {ingredientes.map((ingrediente, index) => (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 5,
                  marginTop: 5,
                }}
              >
                <TextInput
                  key={index}
                  value={ingrediente}
                  onChangeText={(text) => handleIngredientChange(text, index)}
                  mode="outlined"
                  style={{ flex: 1, marginRight: 8 }}
                />
                <Button icon="delete" onPress={() => removeIngredient(index)}>
                  Borrar
                </Button>
              </View>
            ))}

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
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
      <Snackbar visible={visible} onDismiss={onDismissSnackBar} duration={3000}>
        {snackbarText}
      </Snackbar>
    </>
  );
};

export default CrearRecetaScreen;
