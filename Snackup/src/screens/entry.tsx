import { View, Text, TouchableOpacity } from "react-native";
import BackgroundIcons from "@/components/backgroundIndex";
import { Button } from "@/components/button";
import * as Animatable from "react-native-animatable";

import React from "react";

export default function Entry({ navigation }: any) {
  return (
    <View className="bg-orange justify-center  ">
      <Animatable.View animation="zoomInUp">
        <BackgroundIcons />
      </Animatable.View>

      <View className="absolute w-full h-full">
        <Animatable.View
          animation="fadeInDown"
          delay={400}
          className="bg-white rounded-b-large items-center justify-center p-2 h-44 "
        >
          <Text className="text-7xl font-bold color-orange">SNACKUP</Text>
          <Text className="text-slg font-regular color-orange">
            SABOREIE O MELHOR
          </Text>
        </Animatable.View>
        <Animatable.View
          animation="fadeIn"
          delay={400}
          className="p-20 top-96 items-center gap-4"
        >
          <View className="h-20 w-full">
            <Button
              title="acesse"
              onPress={() => navigation.navigate("Signin")}
            />
          </View>
          <Text className="text-white font-bold text-xl">OU </Text>
          <View className="h-16 w-10/12">
            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
              activeOpacity={0.7}
            >
              <Text className="uppercase text-lg text-orange font-bold text-center bg-white/75 rounded-lg p-1">
                entrar como visitante
              </Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </View>
    </View>
  );
}
