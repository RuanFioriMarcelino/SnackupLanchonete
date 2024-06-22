import React, { useState } from "react";
import { Input } from "@/components/input";
import { ButtonOrange } from "@/components/buttonOrange";
import { BackgroundEntry } from "@/components/backgroundEntry";

import {
  View,
  Text,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import { auth, database } from "../config/firebaseconfig";
import { collection, addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Signup({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nome, setNome] = useState<string>("");

  const NovoUsuario = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const userCollection = collection(database, "Usuario");
      addDoc(userCollection, {
        nome: nome,
        idUser: userCredential.user.uid,
      });
      setNome("");

      console.log("User registered:", userCredential.user);
      Alert.alert("conta criada");
      navigation.navigate("Signin");
    } catch (error) {
      Alert.alert("Error");
    }
  };
  return (
    <KeyboardAvoidingView
      className="flex-1 bg-white items-center"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View className="absolute items-center">
        <BackgroundEntry />
      </View>

      <View className="items-center gap-14 mt-32">
        <Text className="text-5xl font-bold text-orange uppercase ">
          Registre-se
        </Text>

        <View className="gap-6 items-center">
          <Input>
            <Input.Field
              placeholder="Nome de Usuário"
              value={nome}
              onChangeText={setNome}
            />
          </Input>
          <Input>
            <Input.Field
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </Input>
          <Input>
            <Input.Field
              placeholder="Senha"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </Input>
          <View className="w-64 h-16 ">
            <ButtonOrange title="registrar" onPress={NovoUsuario} />
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
    </KeyboardAvoidingView>
  );
}
