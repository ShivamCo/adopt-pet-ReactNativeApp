// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY ,
  authDomain: "react-native-f94cc.firebaseapp.com",
  projectId: "react-native-f94cc",
  storageBucket: "react-native-f94cc.firebasestorage.app",
  messagingSenderId: "63410014634",
  appId: "1:63410014634:web:b0b1ab7af00994e2e243d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app,"adoptpet")