import { View, Text, TextInput, ScrollView, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { colors } from "@/styles/colors";

export default function Home() {
  return (
    <View className="bg-orange flex-1 items-center ">
      <Text className="text-7xl font-bold text-white mt-9">SNACKUP</Text>
      <View className="bg-white flex-row justify-around w-96  gap-8 rounded-large p-2 mb-6  h-12">
        <Icon name="shopping-cart" size={30} color={colors.orange} />
        <TextInput
          placeholder="O QUE VOCÊ PROCURA?"
          placeholderTextColor={colors.orange}
          className="text-center"
        />
        <Icon name="qr-code-scanner" size={30} color={colors.orange} />
      </View>
      <View className="flex-1 bg-white w-full rounded-t-medium items-center">
        <Text className="bg-orange w-full mt-6 font-bold text-white text-center text-3xl p-1">
          CARDÁPIO
        </Text>
        <View className="pl-4 w-full justify-start ">
          <View className="">
            <Text className="bg-orange w-40 rounded-t-lg mt-8 text-center text-2xl font-medium">
              Hamburger
            </Text>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              className="bg-orange p-4 rounded-bl-lg"
            >
              <View className="flex-row gap-4">
                <Image source={require("@/assets/image.png")} />

                <Image source={require("@/assets/image.png")} />

                <Image source={require("@/assets/image.png")} />
                <Image source={require("@/assets/image.png")} />
                <Image source={require("@/assets/image.png")} />
              </View>
            </ScrollView>
          </View>
          <View className="">
            <Text className="bg-orange w-40 rounded-t-lg mt-8 text-center text-2xl font-medium">
              Hamburger
            </Text>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              className="bg-orange p-4 rounded-bl-lg"
            >
              <View className="flex-row gap-4">
                <Image source={require("@/assets/image.png")} />

                <Image source={require("@/assets/image.png")} />

                <Image source={require("@/assets/image.png")} />
                <Image source={require("@/assets/image.png")} />
                <Image source={require("@/assets/image.png")} />
              </View>
            </ScrollView>
          </View>
          <View className="">
            <Text className="bg-orange w-40 rounded-t-lg mt-8 text-center text-2xl font-medium">
              Hamburger
            </Text>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              className="bg-orange p-4 rounded-bl-lg"
            >
              <View className="flex-row gap-4">
                <Image source={require("@/assets/image.png")} />

                <Image source={require("@/assets/image.png")} />

                <Image source={require("@/assets/image.png")} />
                <Image source={require("@/assets/image.png")} />
                <Image source={require("@/assets/image.png")} />
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
}
