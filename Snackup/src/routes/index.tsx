import Entry from "@/screens/entry";
import Signin from "@/screens/signin";
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
    </Stack.Navigator>
  );
}
