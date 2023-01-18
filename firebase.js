// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCArmKi3JxIqipd1y5ApWCP236hBc2j8WI",
  authDomain: "nick-webseite.firebaseapp.com",
  projectId: "nick-webseite",
  storageBucket: "nick-webseite.appspot.com",
  messagingSenderId: "13822406307",
  appId: "1:13822406307:web:1dfeb93fa3e7a0b9e39916",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
