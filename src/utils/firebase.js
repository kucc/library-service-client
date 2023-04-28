// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNTDi-5cLXcfvDuevCSKX80dZpDCYyzfM",
  authDomain: "kucheckcheck.firebaseapp.com",
  databaseURL: "https://kucheckcheck-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kucheckcheck",
  storageBucket: "kucheckcheck.appspot.com",
  messagingSenderId: "563121764188",
  appId: "1:563121764188:web:a08dc69635b2b63f7a3399"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
