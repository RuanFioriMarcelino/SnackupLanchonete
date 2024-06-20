import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  deleteDoc,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCARgnJtbsZ0n4onUUDxmvTyF5rLbDboeA",
  authDomain: "snackup-70c0e.firebaseapp.com",
  projectId: "snackup-70c0e",
  storageBucket: "snackup-70c0e.appspot.com",
  messagingSenderId: "522247615888",
  appId: "1:522247615888:web:33c7999d9627beb5afef15",
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const auth = getAuth(app);

export {
  database,
  collection,
  doc,
  deleteDoc,
  addDoc,
  updateDoc,
  auth,
  onAuthStateChanged,
};

export default app;
