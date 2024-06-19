import { Admin } from "@/screens/admin";
import Entry from "@/screens/entry";
import Home from "@/screens/home";
import Signin from "@/screens/signin";
import Signup from "@/screens/signup";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function MyStack() {
  const myDrawer = () => {
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>;
  };
  return (
    <>
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
        <Stack.Screen name="Home" component={myDrawer} />
        <Stack.Screen
          name="Admin"
          component={Admin}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </>
  );
}
