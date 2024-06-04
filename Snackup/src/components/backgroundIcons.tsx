import { View, Image } from "react-native";
import * as Animatable from "react-native-animatable";

export default function BackgroundIcons() {
  return (
    <Animatable.View
      animation="bounceInDown"
      duration={2000}
      className="flex items-center justify-center h-full "
    >
      <Animatable.Image
        animation="pulse"
        duration={8000}
        direction="reverse"
        iterationCount="infinite"
        source={require("@/assets/burguer.png")}
        className="w-4/5 h-3/5 top-0 -left-44 absolute "
      />
      <Animatable.Image
        animation="pulse"
        duration={6000}
        direction="reverse"
        iterationCount="infinite"
        source={require("@/assets/icecream.png")}
        className="w-4/6 h-3/6 -right-52 bottom-12 rotate-12 "
      />

      <Animatable.Image
        animation="pulse"
        duration={7000}
        direction="reverse"
        iterationCount="infinite"
        source={require("@/assets/taco.png")}
        className="w-3/5 h-1/3 -bottom-12 -left-12 absolute"
      />

      <Animatable.Image
        animation="pulse"
        duration={9000}
        direction="reverse"
        iterationCount="infinite"
        source={require("@/assets/instantnoodle.png")}
        className="w-3/5 h-1/3 -bottom-2 -right-28 absolute "
      />
      <Animatable.Image
        animation="pulse"
        duration={4000}
        direction="reverse"
        iterationCount="infinite"
        source={require("@/assets/salad.png")}
        className="w-3/6 h-1/5 top-2/4 absolute rotate-45 "
      />
    </Animatable.View>
  );
}
