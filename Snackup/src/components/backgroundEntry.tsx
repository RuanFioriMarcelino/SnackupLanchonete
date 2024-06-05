import { View, Image } from "react-native";
import * as Animatable from "react-native-animatable";

export default function BackgroundEntry() {
  return (
    <Animatable.View animation="fadeIn" delay={200} className="absolute ">
      <Animatable.View
        animation="pulse"
        duration={8000}
        direction="reverse"
        iterationCount="infinite"
        className=" flex-1 mt-44 ml-96 -rotate-45"
      >
        <Image
          source={require("@/assets/burguer.png")}
          resizeMode="cover"
          className="w-screen h-96 rotate-12 "
        />
      </Animatable.View>
      <Animatable.View
        animation="pulse"
        duration={5000}
        direction="reverse"
        iterationCount="infinite"
        className=" flex-1 mt-14 ml-6 -rotate-12"
      >
        <Image
          source={require("@/assets/taco.png")}
          resizeMode="cover"
          className="w-96 h-96 "
        />
      </Animatable.View>
    </Animatable.View>
  );
}
