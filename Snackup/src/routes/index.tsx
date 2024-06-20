import React from "react";
import { Alert } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import Admin from "@/screens/admin";
import Entry from "@/screens/entry";
import Home from "@/screens/home";
import Signin from "@/screens/signin";
import Signup from "@/screens/signup";
import { colors } from "@/styles/colors";
import logout from "@/screens/logout";
import Create from "@/screens/create";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Sair"
        onPress={() =>
          Alert.alert(
            "Sair",
            "Você tem certeza que deseja sair?",
            [
              {
                text: "Cancelar",
                style: "cancel",
              },
              {
                text: "Sair",
                onPress: () => logout(props),
                style: "destructive",
              },
            ],
            { cancelable: false }
          )
        }
      />
    </DrawerContentScrollView>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
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
      <Stack.Screen
        name="Create"
        component={Create}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
