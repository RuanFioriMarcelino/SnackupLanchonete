import React from "react";
import {
  Image,
  ImageBackground,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { Input } from "@/components/input";
import { ButtonOrange } from "@/components/buttonOrange";
import BackgroundEntry from "@/components/backgroundEntry";

export default function Signup({ navigation }: any) {
  return (
    <View className="flex-1 bg-white item ">
      <View className="absolute">
        <BackgroundEntry />
      </View>

      <View className="items-center gap-14 mt-32">
        <Text className="text-5xl font-bold text-orange uppercase ">
          Registre-se
        </Text>

        <View className="gap-6 items-center">
          <Input>
            <Input.Field placeholder="Nome de Usuário" />
          </Input>
          <Input>
            <Input.Field placeholder="E-Mail" keyboardType="email-address" />
          </Input>
          <Input>
            <Input.Field placeholder="Senha" />
          </Input>
          <View className="w-64 h-16 ">
            <ButtonOrange title="registrar" />
          </View>
        </View>

        <View className=" items-center gap-8  ">
          <View className="flex-row gap-3 items-center w-11/12 ">
            <View className="border h-line w-full flex-1 bg-black" />
            <Text>ou continue com</Text>
            <View className="border h-line w-full flex-1 bg-black" />
          </View>
          <View className="flex-row gap-36">
            <TouchableOpacity>
              <Image
                source={require("@/assets/iconGoogle.png")}
                resizeMode="cover"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("@/assets/iconApple.png")}
                resizeMode="cover"
              />
            </TouchableOpacity>
          </View>
          <View className="flex-row">
            <Text>Já Tem Uma Conta?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
              <Text className="text-orange font-medium"> Entrar Agora</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
