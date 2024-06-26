import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { colors } from "@/styles/colors";
import "react-native-gesture-handler";
import { collection, doc, onSnapshot } from "firebase/firestore";
import { database } from "@/config/firebaseconfig";

interface Produto {
  id: string;
  nome: string;
  descricao: string;
  valor: string;
  image: string;
}

export default function Home() {
  const [produto, setProduto] = useState<Produto[]>();

  useEffect(() => {
    const productCollection = collection(database, "Produto");
    const listen = onSnapshot(productCollection, (query) => {
      const list: Produto[] = [];
      query.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id } as Produto);
      });
      setProduto(list);
    });
  }, []);

  return (
    <View className="bg-orange flex-1 items-center ">
      <Text className="text-7xl font-bold text-white mt-12">SNACKUP</Text>
      <View className="bg-white flex-row justify-around w-96  gap-8 rounded-large p-2 mb-6  h-12">
        <Icon name="shopping-cart" size={30} color={colors.orange} />
        <TextInput
          placeholder="O QUE VOCÊ PROCURA?"
          placeholderTextColor={colors.orange}
          className="text-center w-52
          "
        />
        <Icon name="qr-code-scanner" size={30} color={colors.orange} />
      </View>
      <View className="flex-1 bg-white w-full rounded-t-medium items-center ">
        <Text className="bg-orange w-full mt-6 font-bold text-white text-center text-3xl p-1">
          CARDÁPIO
        </Text>
        <View className="pl-4 w-full justify-start ">
          <View className="bg-orange w-40 rounded-t-lg mt-8  ">
            <Text className="text-center text-2xl font-medium pt-2">Pizza</Text>
          </View>

          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            className="bg-orange p-4 rounded-bl-lg "
          >
            <FlatList
              horizontal={true}
              data={produto}
              renderItem={({ item }) => {
                return item.nome == "Pizza" ? (
                  <View className="mr-4 bg-white rounded-lg ">
                    <Image
                      source={{ uri: item.image }}
                      className="w-32 h-32 rounded-t-lg"
                    />
                    <View className="p-1 -mt-1 bg-white rounded-b-lg">
                      <Text className="font-bold">{item.nome}</Text>
                      <Text className="text-sm w-28 h-8 leading-3 pt-1">
                        {item.descricao}
                      </Text>
                      <Text className="text-orange ">R$ {item.valor}</Text>
                    </View>
                  </View>
                ) : null;
              }}
            />
          </ScrollView>
        </View>
      </View>
      <View className="flex-1 bg-white w-full  items-center ">
        <View className="pl-4 w-full justify-start ">
          <View className="bg-orange w-40 rounded-t-lg mt-8  ">
            <Text className="text-center text-2xl font-medium pt-2">
              Pastel
            </Text>
          </View>

          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            className="bg-orange p-4 rounded-bl-lg "
          >
            <FlatList
              horizontal={true}
              data={produto}
              renderItem={({ item }) => {
                return item.nome == "Pastel" ? (
                  <View className="mr-4 bg-white rounded-lg ">
                    <Image
                      source={{ uri: item.image }}
                      className="w-32 h-32 rounded-t-lg"
                    />
                    <View className="p-1 -mt-1 bg-white rounded-b-lg">
                      <Text className="font-bold">{item.nome}</Text>
                      <Text className="text-sm w-28 h-8 leading-3 pt-1">
                        {item.descricao}
                      </Text>
                      <Text className="text-orange">R$ {item.valor}</Text>
                    </View>
                  </View>
                ) : null;
              }}
            />
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
