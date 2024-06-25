import {
  View,
  Text,
  FlatList,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { database, doc, deleteDoc } from "../config/firebaseconfig";
import { onSnapshot, collection } from "firebase/firestore";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

interface Produto {
  id: string;
  descricao: string;
  nome: string;
  valor: string;
}

export default function Read({ navigation }: any) {
  const [produto, setProduto] = useState<Produto[]>([]);

  useEffect(() => {
    const productCollection = collection(database, "Produto");
    const listen = onSnapshot(productCollection, (query) => {
      const list: Produto[] = [];
      query.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id } as Produto);
      });
      setProduto(list);
    });
    return () => listen();
  }, []);

  function deleteProduto(id: string) {
    const taskdocRef = doc(database, "Produto", id);
    deleteDoc(taskdocRef);
  }

  return (
    <View className="bg-orange flex-1 ">
      <View className="bg-white rounded-b-large items-center justify-center p-2 h-44 ">
        <Text className="text-4xl text-center font-bold color-orange">
          Produtos
        </Text>
        <Text className="text-lg font-regular color-orange">
          Alterar e Deletar
        </Text>
      </View>
      <ScrollView horizontal={false} className="pt-2 rounded-t-lg">
        <FlatList
          className="mt-10 p-4"
          data={produto}
          renderItem={({ item }) => {
            return (
              <View className="bg-white rounded-md p-4 flex-row mb-3 justify-between w-full ">
                <Pressable
                  className="flex-1"
                  onPress={() =>
                    navigation.navigate("Update", {
                      id: item.id,
                      nome: item.nome,
                      descricao: item.descricao,
                      valor: item.valor,
                    })
                  }
                >
                  <Text className="font-bold text-lg">{item.nome}</Text>
                  <Text className="">{item.descricao}</Text>
                  <Text className="text-orange">R$ {item.valor}</Text>
                </Pressable>

                <TouchableOpacity
                  onPress={() => {
                    deleteProduto(item.id);
                  }}
                  activeOpacity={0.5}
                >
                  <View className="ml-2 justify-center flex-1 ">
                    <AntDesign name="delete" size={24} color={colors.orange} />
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </ScrollView>
    </View>
  );
}
