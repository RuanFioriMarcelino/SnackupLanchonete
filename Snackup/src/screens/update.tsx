import { View, Text } from "react-native";
import { useState } from "react";
import { database, doc, updateDoc } from "@/config/firebaseconfig";
import { Input } from "@/components/input";
import { Button } from "@/components/button";

export default function Update({ navigation, route }: any) {
  const [descricaoEdit, setDescricaoEdit] = useState(route.params.descricao);
  const [nomeEdit, setNomeEdit] = useState(route.params.nome);
  const [valorEdit, setValorEdit] = useState(route.params.valor);
  const nome = route.params.nome;

  function editTask() {
    const taskdocRef = doc(database, "Produto", route.params.id);
    updateDoc(taskdocRef, {
      descricao: descricaoEdit,
      nome: nomeEdit,
      valor: valorEdit,
    });
    setNomeEdit("");
    setValorEdit("");
    setDescricaoEdit("");
    navigation.navigate("Read");
  }

  return (
    <View className="bg-orange flex-1 ">
      <View className="bg-white rounded-b-large items-center justify-center p-2 h-44 ">
        <Text className="text-4xl text-center font-bold color-orange">
          Painel do Administrador
        </Text>
        <Text className="text-lg font-regular color-orange">
          Editar produto: {nome}
        </Text>
      </View>

      <View className="p-4 ">
        <Text className="text-white">Nome</Text>
        <Input.Field
          className="bg-white p-2 rounded-lg -z-10"
          value={nomeEdit}
          onChangeText={setNomeEdit}
          placeholder="Nome"
        />
        <Text className="text-white">Descrição</Text>
        <Input.Field
          className="bg-white p-2 rounded-lg -z-10"
          value={descricaoEdit}
          onChangeText={setDescricaoEdit}
          placeholder="Descrição"
        />
        <Text className="text-white">Valor</Text>
        <Input.Field
          className="bg-white p-2 rounded-lg -z-10"
          value={valorEdit}
          onChangeText={setValorEdit}
          placeholder="Valor"
        />
        <View className="w-full  items-center ">
          <View className="h-12 w-32 mt-4">
            <Button
              title="Editar"
              onPress={() => {
                editTask();
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
