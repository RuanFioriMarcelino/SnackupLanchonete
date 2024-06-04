import "react-native-gesture-handler";
import MyStack from "@/routes/index";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <MyStack />
    </>
  );
}
