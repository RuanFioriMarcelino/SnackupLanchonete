import { Button } from "@/components/button";
import { Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import logout from "./logout";
import { useGetUser } from "../components/getuser";

function Admin({ navigation }: any) {
  const usuario = useGetUser();

  return (
    <View className="bg-orange flex-1 ">
      <View className="bg-white rounded-b-large items-center h-44 ">
        <Text className="text-4xl text-center font-bold mt-12 color-orange">
          Painel do Administrador
        </Text>
        <Text className="text-lg font-regular color-orange">
          <FlatList
            data={usuario}
            renderItem={({ item }) => {
              return (
                <View>
                  <Text className="font-regular text-xl">
                    Bem Vindo {item.nome}
                  </Text>
                </View>
              );
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
        <View className="h-16 w-56 ">
          <Button title="Home" onPress={() => navigation.navigate("Home")} />
        </View>
        <View className="h-16 w-56 ">
          <Button title="Sair" onPress={() => logout({ navigation })} />
        </View>
      </View>
    </View>
  );
}

export default Admin;
