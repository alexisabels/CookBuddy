import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card, Appbar } from "react-native-paper";

const RecipeCard = ({ item, eliminarReceta }) => (
  <Card style={styles.card}>
    <Card.Title
      title={item.nombre}
      titleStyle={styles.title}
      right={(props) => (
        <Appbar.Action
          icon="delete"
          iconColor="#FF0000"
          onPress={() => eliminarReceta(item.id)}
        />
      )}
    />
    <Card.Content>
      <Text style={styles.ingredientes}>{item.ingredientes}</Text>
      <Text style={styles.pasos}>{item.pasos}</Text>
    </Card.Content>
  </Card>
);

const styles = StyleSheet.create({
  card: {
    margin: 8,
    borderRadius: 10,
    backgroundColor: "#f8f8f8",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  ingredientes: {
    fontSize: 16,
    color: "#333",
    marginBottom: 4,
  },
  pasos: {
    fontSize: 14,
    color: "#666",
  },
});

export default RecipeCard;
