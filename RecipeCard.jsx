import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card, Appbar, Chip } from "react-native-paper";

const RecipeCard = ({ item, eliminarReceta }) => {
  const ingredientes = Array.isArray(item.ingredientes)
    ? item.ingredientes
    : [];

  return (
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
        <View style={styles.chipContainer}>
          {ingredientes.map((ingrediente, index) => (
            <Chip key={index} style={styles.chip}>
              {ingrediente}
            </Chip>
          ))}
        </View>
        <Text style={styles.pasos}>{item.pasos}</Text>
      </Card.Content>
    </Card>
  );
};

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
  chipContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 4,
  },
  chip: {
    marginRight: 4,
    marginBottom: 4,
  },
  pasos: {
    fontSize: 14,
    color: "#666",
  },
});

export default RecipeCard;
