import { View, Text, Image } from "react-native";
import { database, auth } from "../config/firebaseconfig";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { Input } from "@/components/input";
import { Button } from "@/components/button";

import * as ImagePicker from "expo-image-picker";

function Create({ navigation }: any) {
  const [nome, setNome] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");
  const [valor, setValor] = useState<string>("");
  const [image, setImage] = useState<string>("");

  const imageUri = image;

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const addProduto = async () => {
    try {
      const user = auth.currentUser; // Obtém o usuário atualmente autenticado
      if (!user) {
        throw new Error("No user is authenticated");
      }
      const tasksCollection = collection(database, "Produto");
      await addDoc(tasksCollection, {
        nome: nome,
        descricao: descricao,
        valor: valor,
        imagem: image,
        idUser: user.uid,
      });
      setNome("");
      setDescricao("");
      setValor("");
      setImage("");
    } catch (error) {
      console.error("Error adding snackup: ", error);
    }
  };
  return (
    <View className="flex-1 bg-orange items-center">
      <Text className="text-5xl mt-20 text-white font-medium">
        Cadastrar Produto
      </Text>
      <View className="gap-3 mt-10">
        <Input.Field
          className="bg-white text-center p-4 text-xl rounded-lg"
          placeholder="Nome do produto"
          onChangeText={setNome}
          value={nome}
        />
        <Input.Field
          className="bg-white text-center p-4 text-xl rounded-lg"
          placeholder="Descricação do produto"
          onChangeText={setDescricao}
          value={descricao}
        />
        <Input.Field
          className="bg-white   text-center p-4 text-xl rounded-lg"
          placeholder="Valor do produto"
          onChangeText={setValor}
          value={valor}
        />
        <View className="h-20">
          <Button title="Foto do Produto" onPress={pickImage} />
        </View>

        <View className="h-20 mt-10">
          {nome == "" || descricao == "" || valor == "" || image == "" ? (
            <Button title="Cadastrar" disabled />
          ) : (
            <Button
              title="Cadastrar"
              onPress={() => {
                addProduto();
              }}
            />
          )}
          <Image source={{ uri: imageUri }} className="w-20 h-20" />
        </View>
      </View>
    </View>
  );
}

export default Create;
