// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6r49NId51grPCgUMdE-dOWhHIBjS-5a8",
  authDomain: "tarea-a5d63.firebaseapp.com",
  projectId: "tarea-a5d63",
  storageBucket: "tarea-a5d63.appspot.com",
  messagingSenderId: "496715269526",
  appId: "1:496715269526:web:8e1fac325eb32269b149b7",
  measurementId: "G-WSV348SRVL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export { auth };