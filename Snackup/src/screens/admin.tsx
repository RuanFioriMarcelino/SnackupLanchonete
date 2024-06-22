import { Button } from "@/components/button";
import { auth, database } from "@/config/firebaseconfig";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
("");
import { Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

interface Produto {
  id: string;
  descricao: string;
  nome: string;
  valor: string;
}

function Admin({ navigation }: any) {
  const [produto, setProduto] = useState<Produto[]>([]);
  const user = auth.currentUser;
  useEffect(() => {
    const productCollection = collection(database, "Usuario");
    const listen = onSnapshot(productCollection, (query) => {
      const list: Produto[] = [];
      query.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id } as Produto);
      });
      setProduto(list);
    });
    return () => listen();
  }, []);

  return (
    <View className="bg-orange flex-1 ">
      <View className="bg-white rounded-b-large items-center justify-center p-2 h-44 ">
        <Text className="text-4xl text-center font-bold color-orange">
          Painel do Administrador
        </Text>
        <Text className="text-lg font-regular color-orange">
          Bem vindo
          <FlatList
            data={produto}
            renderItem={({ item }) => {
              return <Text>{item.nome}</Text>;
            }}
          />
        </Text>
      </View>
      <View className="gap-4  justify-center items-center flex-1">
        <View className="h-16 w-56">
          <Button
            title="Produtos"
            onPress={() => navigation.navigate("Read")}
          />
        </View>
        <View className="h-16 w-56 ">
          <Button
            title="Cadastrar"
            onPress={() => navigation.navigate("Create")}
          />
        </View>
      </View>
    </View>
  );
}

export default Admin;
