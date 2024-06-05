import { View, Image } from "react-native";
import * as Animatable from "react-native-animatable";

export default function BackgroundEntry() {
  return (
    <Animatable.View animation="fadeIn" delay={200}>
      <Animatable.View
        animation="pulse"
        duration={8000}
        direction="reverse"
        iterationCount="infinite"
        className=" flex-1 mt-72 ml-96 -rotate-45"
      >
        <Image
          source={require("@/assets/burguer.png")}
          style={{
            transform: [{ scale: 15 }],
          }}
          resizeMode="cover"
          className="w-10 h-10 rotate-12 "
        />
      </Animatable.View>
      <Animatable.View
        animation="pulse"
        duration={5000}
        direction="reverse"
        iterationCount="infinite"
        className=" flex-1 mt-96 ml-6 -rotate-12"
      >
        <Image
          source={require("@/assets/taco.png")}
          style={{
            transform: [{ scale: 8 }],
          }}
          resizeMode="cover"
          className="w-10 h-10 mt-20"
        />
      </Animatable.View>
    </Animatable.View>
  );
}
