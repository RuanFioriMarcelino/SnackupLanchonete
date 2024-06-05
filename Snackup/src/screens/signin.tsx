import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Input } from "@/components/input";
import { ButtonOrange } from "@/components/buttonOrange";
import { BackgroundEntry } from "@/components/backgroundEntry";

export default function Signin({ navigation }: any) {
  return (
    <View className="flex-1 bg-white items-center ">
      <View className="absolute items-center">
        <BackgroundEntry />
      </View>

      <View className="items-center gap-7 mt-48">
        <Text className="text-5xl font-bold text-orange uppercase ">
          Entrar
        </Text>

        <View className="gap-6 items-center ">
          <Input>
            <Input.Field placeholder="Usuário" />
          </Input>
          <Input>
            <Input.Field placeholder="Senha" />
          </Input>

          <TouchableOpacity activeOpacity={0.7}>
            <Text className="text-orange font-bold text-center underline">
              Esqueci minha senha
            </Text>
          </TouchableOpacity>

          <View className="w-64 h-16 ">
            <ButtonOrange title="entrar" />
          </View>
        </View>

        <View className="items-center gap-10 mt-4  ">
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
            <Text>Não Tem Uma Conta?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
              <Text className="text-orange font-medium"> Criar Agora</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
