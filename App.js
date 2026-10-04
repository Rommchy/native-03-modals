import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Pressable, StyleSheet, View, Text, Modal } from "react-native";
import { ScrollView } from "react-native";
import { Button } from "react-native";

const App = () => {
  const [cards, setCards] = useState([
    { id: 1, title: "Card 1", description: "Description for Card 1" },
    { id: 2, title: "Card 2", description: "Description for Card 2" },
    { id: 3, title: "Card 3", description: "Description for Card 3" },
    { id: 4, title: "Card 4", description: "Description for Card 4" },
  ]);

  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {cards.map((item) => (
          <Pressable
            key={item.id}
            style={({ pressed }) => [
              styles.pressable,
              pressed && styles.pressablePressed,
            ]}
            onPress={() => setSelectedCard(item)}
          >
            <Text style={styles.text}>{item.title}</Text>
          </Pressable>
        ))}
      </ScrollView>

      <Modal
        animationType="none"
        transparent={false}
        visible={selectedCard !== null}
      >
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>
            <View style={styles.view}>
              <Text style={styles.modalTitle}>{selectedCard?.title}</Text>
              <Text style={styles.modalDescription}>
                {selectedCard?.description}
              </Text>
              <Pressable
                onPress={() => setSelectedCard(null)}
                style={({ pressed }) => [
                  styles.button,
                  pressed && styles.buttonPressed,
                ]}
              >
                <Text style={styles.buttonText}>Close</Text>
              </Pressable>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // your styles here...
  container: {
    flex: 1,
  },
  pressable: {
    borderRadius: 8,
    borderColor: "#cccccc",
    borderWidth: 1,
    padding: 8,
    marginBottom: 8,
    marginLeft: 8,
    marginRight: 8,
  },
  text: {
    color: "#222",
    fontSize: 18,
    fontWeight: "600",
  },
  scrollView: {
    paddingLeft: 8,
    paddingRight: 8,
  },
  view: {
    gap: 10,
  },
  pressablePressed: {
    backgroundColor: "#ddd",
  },
  button: {
    backgroundColor: "#2196F3",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },

  buttonPressed: {
    backgroundColor: "#1565C0",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  modalTitle: {
    color: "#111",
    fontSize: 24,
    fontWeight: "700",
  },

  modalDescription: {
    color: "#555",
    fontSize: 16,
    lineHeight: 24,
  },
});

export default App;
