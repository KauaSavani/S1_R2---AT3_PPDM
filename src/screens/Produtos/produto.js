import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from "react-native";

export default function Produtos() {
  const [quantidades, setQuantidades] = useState([1, 1, 1, 1, 1]);

  const produtos = [
    {
      nome: "Chuteira Nike",
      preco: 300,
      pix: 270,
      imagem: require("../../../assets/image3.png"),
    },
    {
      nome: "Bola Adidas",
      preco: 150,
      pix: 135,
      imagem: require("../../../assets/image6.png"),
    },
    {
      nome: "Camisa Time",
      preco: 120,
      pix: 100,
      imagem: require("../../../assets/image1.png"),
    },
    {
      nome: "Meião Esportivo",
      preco: 50,
      pix: 45,
      imagem: require("../../../assets/image.png"),
    },
    {
      nome: "Caneleira",
      preco: 80,
      pix: 70,
      imagem: require("../../../assets/image5.png"),
    },
  ];

  const alterarQuantidade = (index, valor) => {
    const novas = [...quantidades];
    novas[index] = Math.max(1, novas[index] + valor);
    setQuantidades(novas);
  };

  return (
    <ScrollView style={styles.container}>
      {produtos.map((p, index) => (
        <View key={index} style={styles.card}>

          <Image source={p.imagem} style={styles.imagem} />

          <Text style={styles.nome}>{p.nome}</Text>
          <Text>Preço: R$ {p.preco}</Text>
          <Text>PIX: R$ {p.pix}</Text>

          <View style={styles.quantidades}>
            <TouchableOpacity onPress={() => alterarQuantidade(index, -1)}>
              <Text style={styles.btn}>-</Text>
            </TouchableOpacity>

            <Text>{quantidades[index]}</Text>

            <TouchableOpacity onPress={() => alterarQuantidade(index, 1)}>
              <Text style={styles.btn}>+</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.botao}
            onPress={() => Alert.alert("Sucesso", "Produto adicionado ao carrinho")}
          >
            <Text style={styles.botaoTexto}>Adicionar</Text>
          </TouchableOpacity>

        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  card: {
    backgroundColor: "#eee",
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  imagem: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  nome: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  quantidades: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    gap: 10,
  },
  btn: {
    fontSize: 20,
    paddingHorizontal: 10,
  },
  botao: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 8,
  },
  botaoTexto: {
    color: "#FFD700",
  },
});