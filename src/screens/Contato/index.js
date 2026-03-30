import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Contato() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contato</Text>

      <Text style={styles.item}>Telefone: (19) 98201-2345</Text>
      <Text style={styles.item}>WhatsApp: (19) 99571-4456</Text>
      <Text style={styles.item}>Endereço: Rua Cambui, 245</Text>
      <Text style={styles.item}>CNPJ: 12.345.678/90101-00</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15
  },
  item: {
    fontSize: 16,
    marginBottom: 10
  }
});