import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Input } from "@/components/input";
import { ButtonOrange } from "@/components/buttonOrange";
import { BackgroundEntry } from "@/components/backgroundEntry";
import { auth, onAuthStateChanged } from "../config/firebaseconfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { colors } from "@/styles/colors";

export default function Signin({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<boolean>();

  const LoginUser = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (
        userCredential.user.uid === "QvoPuwnStzaNYro95RIe8u6LEZv1" ||
        userCredential.user.uid === "XPdpQXqPUiSTAN8didB0eBDeJ8B3"
      ) {
        navigation.navigate("Admin", { idUser: userCredential.user.uid });
      } else {
        navigation.navigate("Home", {
          idUser: userCredential.user.uid,
        });
      }
      console.log(userCredential.user.uid);
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setError(true);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate("Home", { idUser: user.uid });
      }
    });

    return unsubscribe;
  }, []);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: colors.white, alignItems: "center" }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View className="absolute items-center">
        <BackgroundEntry />
      </View>

      <View className="items-center gap-7 mt-48">
        <Text className="text-5xl font-bold text-orange uppercase">Entrar</Text>

        <View className="gap-6 items-center">
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
          {error && (
            <View>
              <Text>Email ou senha inválidos</Text>
            </View>
          )}
          {email === "" || password === "" ? (
            <View className="w-64 h-16">
              <ButtonOrange title="Entrar" disabled />
            </View>
          ) : (
            <View className="w-64 h-16">
              <ButtonOrange title="Entrar" onPress={LoginUser} />
            </View>
          )}
          <TouchableOpacity activeOpacity={0.7}>
            <Text className="text-orange font-bold text-center underline">
              Esqueci minha senha
            </Text>
          </TouchableOpacity>
        </View>

        <View className="items-center gap-10 mt-4">
          <View className="flex-row gap-3 items-center w-11/12">
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
    </KeyboardAvoidingView>
  );
}
