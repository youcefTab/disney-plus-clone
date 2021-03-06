

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage"

const firebaseConfig = initializeApp({
  apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
  authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
  projectId: "disneyplus-clone-a33d5",
  storageBucket: "disneyplus-clone-a33d5.appspot.com",
  messagingSenderId: "37918794208",
  appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
  measurementId: "G-DRVLJKWRWG",
});

const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();

export { auth, provider, storage };
export default db;