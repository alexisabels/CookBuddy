import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Appbar, TextInput } from "react-native-paper";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const CrearRecetaScreen = () => {
  const [nombre, setNombre] = useState("");

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
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default CrearRecetaScreen;
