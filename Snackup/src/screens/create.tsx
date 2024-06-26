import { View, Text, Image, ProgressBarAndroidComponent } from "react-native";
import { database, auth } from "../config/firebaseconfig";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { storage } from "../config/firebaseconfig";

import * as ImagePicker from "expo-image-picker";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function Create({ navigation }: any) {
  const [nome, setNome] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");
  const [valor, setValor] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [progress, setProgress] = useState(0);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      const { uri } = result.assets[0];
      uploadImage(uri);
    }
  };

  const uploadImage = async (uri: any) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    const fileName = uri.split("/").pop();
    const storageRef = ref(storage, `images/${fileName}`);

    const uploadTask = uploadBytesResumable(storageRef, blob);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setImage(url);
        });
      }
    );
  };

  const addProduto = async () => {
    try {
      const user = auth.currentUser;

      if (!user) {
        throw new Error("No user is authenticated");
      }
      const tasksCollection = collection(database, "Produto");
      await addDoc(tasksCollection, {
        nome: nome,
        descricao: descricao,
        valor: valor,
        image: image,
        idUser: user.uid,
      });

      setNome("");
      setDescricao("");
      setValor("");
      setImage("");
    } catch (error) {
      console.error("Error adding product: ", error);
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
        <Text className="text-center text-2xl text-white font-bold">
          {!image ? (
            `${progress}%`
          ) : (
            <Image source={{ uri: image }} className="w-20 h-30" />
          )}
        </Text>
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
        </View>
      </View>
    </View>
  );
}

export default Create;
