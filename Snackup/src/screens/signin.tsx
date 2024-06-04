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
export default function Signin() {
  return (
    <View className="flex-1 justify-center bg-white item ">
      <ImageBackground
        source={require("@/assets/backgroundLogin.png")}
        resizeMode="stretch"
        className=" items-center justify-center flex-1 w-full h-full gap-12"
      >
        <Text className="text-5xl font-bold text-orange uppercase flex-2 mt-16 ">
          Entrar
        </Text>
        <View className="gap-6 items-center">
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
            <Text>Não Tem Uma Conta?</Text>
            <TouchableOpacity>
              <Text className="text-orange font-medium"> Criar Agora</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
