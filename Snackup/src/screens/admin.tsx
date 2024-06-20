import { Button } from "@/components/button";
import { Text, View } from "react-native";

export function Admin() {
  return (
    <View className="bg-orange flex-1 ">
      <View className="bg-white rounded-b-large items-center justify-center p-2 h-44 ">
        <Text className="text-4xl text-center font-bold color-orange">
          Painel do Administrador
        </Text>
        <Text className="text-lg font-regular color-orange">
          Bem vindo Ruan
        </Text>
      </View>
      <View className="gap-4  justify-center items-center flex-1">
        <View className="h-16 w-56">
          <Button title="Produtos" />
        </View>
        <View className="h-16 w-56 ">
          <Button title="Cadastrar" />
        </View>
        <View className="h-16 w-56 ">
          <Button title="Alterar" />
        </View>
        <View className="h-16 w-56 ">
          <Button title="Deletar" />
        </View>
      </View>
    </View>
  );
}
