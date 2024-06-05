import Entry from "@/screens/entry";
import Home from "@/screens/home";
import Signin from "@/screens/signin";
import Signup from "@/screens/signup";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Entry">
      <Stack.Screen
        name="Entry"
        component={Entry}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
