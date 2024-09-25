import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB2B_0uZlrCBRNi0g-_ptS_PDz3vtP_jHU",
  authDomain: "petsafe-a2cff.firebaseapp.com",
  projectId: "petsafe-a2cff",
  storageBucket: "petsafe-a2cff.appspot.com",
  messagingSenderId: "232783336193",
  appId: "1:232783336193:web:104bc1303aa19087484100",
  measurementId: "G-D9TJXPL9CN",
};
const appFirebase = initializeApp(firebaseConfig);
export const auth = getAuth(appFirebase);
export const db = getFirestore(appFirebase);
export const storage = getStorage(appFirebase);
