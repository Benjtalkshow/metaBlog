import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyAneJ8qdA8vspaMqeJxUtpHPBBLKDnGS0I",
  authDomain: "metablog-6c55c.firebaseapp.com",
  projectId: "metablog-6c55c",
  storageBucket: "metablog-6c55c.appspot.com",
  messagingSenderId: "280915749850",
  appId: "1:280915749850:web:464e6bae2a227195f12ee3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;