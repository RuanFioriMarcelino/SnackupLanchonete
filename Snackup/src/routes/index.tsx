import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Admin } from "@/screens/admin";
import Entry from "@/screens/entry";
import Home from "@/screens/home";
import Signin from "@/screens/signin";
import Signup from "@/screens/signup";
import { colors } from "@/styles/colors";
import auth from "@react-native-firebase/auth";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function logout() {
  const navigation = useNavigation();
  useEffect(() => {
    const handleLogout = async () => {
      await auth()
        .signOut()
        .then(() => console.log("User signed out!"));
      navigation.dispatch(DrawerActions.closeDrawer());
    };
    handleLogout();
  }, []);
  return null;
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: "",
        headerTintColor: colors.white,
        drawerStyle: {
          backgroundColor: colors.orange,
          borderTopRightRadius: 8,
          borderBottomRightRadius: 8,
        },
        drawerActiveTintColor: "white",
      }}
    >
      <Drawer.Screen name="HomeFunction" component={Home} />
      <Drawer.Screen name="logout" component={logout} />
    </Drawer.Navigator>
  );
}

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
        component={MyDrawer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Admin"
        component={Admin}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
