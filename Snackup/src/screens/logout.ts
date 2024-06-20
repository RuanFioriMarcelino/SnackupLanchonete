import { signOut } from "firebase/auth";
import { auth } from "../config/firebaseconfig";

async function logout({ navigation }: { navigation: any }) {
  try {
    await signOut(auth);
    navigation.popToTop();
  } catch (error) {
    console.error("Error logging out: ", error);
  }
}

export default logout;
