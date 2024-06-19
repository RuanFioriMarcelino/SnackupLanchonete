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
  apiKey: "AIzaSyAgI44ssvRoJz4bJtmqhEr1F2rDWEZ6LoQ",
  authDomain: "task-912c4.firebaseapp.com",
  projectId: "task-912c4",
  storageBucket: "task-912c4.appspot.com",
  messagingSenderId: "726424803847",
  appId: "1:726424803847:web:49e850d55029dcc646e8a2",
};

// Initialize Firebase
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
