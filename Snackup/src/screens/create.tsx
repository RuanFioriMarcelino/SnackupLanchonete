import { View, Text, Image } from "react-native";
import { database, auth } from "../config/firebaseconfig";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { Input } from "@/components/input";
import { Button } from "@/components/button";

import * as ImagePicker from "expo-image-picker";

function Create({ navigation }: any) {
  const [nome, setNome] = useState<string>("");
  const [descricacao, setDescricacao] = useState<string>("");
  const [valor, setValor] = useState<string>("");
  const [image, setImage] = useState(null);
  const imageUri =
    "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FSnackup-ba4743c1-784a-47a8-a9f8-3b2ab9da5383/ImagePicker/3db795f8-369d-48b8-ab91-b2ad6e7dcbeb.jpeg";

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const addTask = async () => {
    try {
      const user = auth.currentUser; // Obtém o usuário atualmente autenticado
      if (!user) {
        throw new Error("No user is authenticated");
      }
      const tasksCollection = collection(database, "Produto");
      await addDoc(tasksCollection, {
        nome: nome,
        descricacao: descricacao,
        valor: valor,
        imagem: image,
        idUser: user.uid,
      });
    } catch (error) {
      console.error("Error adding snackup: ", error);
    }
  };
  return (
    <View className="flex-1 bg-orange items-center">
      <Text className="text-5xl mt-10">Cadastrar Produto</Text>
      <View className="gap-3">
        <Input.Field
          className="bg-white text-center p-4 text-xl rounded-lg"
          placeholder="Nome do produto"
          onChangeText={setNome}
          value={nome}
        />
        <Input.Field
          className="bg-white text-center p-4 text-xl rounded-lg"
          placeholder="Descricação do produto"
          onChangeText={setDescricacao}
          value={descricacao}
        />
        <Input.Field
          className="bg-white   text-center p-4 text-xl rounded-lg"
          placeholder="Valor do produto"
          onChangeText={setValor}
          value={valor}
        />
        <View className="h-20">
          <Button title="Pick an image from camera roll" onPress={pickImage} />
          {image && <Image source={{ uri: image }} className="w-40 h-40" />}
        </View>
        <View className="h-20   ">
          <Button
            title="Cadastrar"
            onPress={() => {
              addTask();
            }}
          />
          <Image source={{ uri: imageUri }} className="w-20 h-20" />
        </View>
      </View>
    </View>
  );
}

export default Create;
