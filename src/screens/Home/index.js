import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>

      <Image
        source={require("../../../assets/image4.png")}
        style={styles.logo}
      />

      <Text style={styles.title}>Velox Sports</Text>

      <Text style={styles.description}>
        Bem-vindo à Velox Sports! 
Aqui você encontra materiais esportivos com o melhor custo-benefício para você e sua família. Qualidade, estilo e desempenho em um só lugar. Vem com a gente e eleve seu jogo!
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Produtos")}
      >
        <Text style={styles.buttonText}>Ir para Produtos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Contato")}
      >
        <Text style={styles.buttonText}>Ir para Contato</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10
  },
  description: {
    textAlign: "center",
    marginBottom: 20
  },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    marginTop: 10,
    borderRadius: 8
  },
  buttonText: {
    color: "#fff"
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    resizeMode: "contain"
  }
});