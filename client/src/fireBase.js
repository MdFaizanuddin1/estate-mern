// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-e27bf.firebaseapp.com",
  projectId: "mern-estate-e27bf",
  storageBucket: "mern-estate-e27bf.appspot.com",
  messagingSenderId: "744476584546",
  appId: "1:744476584546:web:4b096dae4a08c6d196bf3b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
