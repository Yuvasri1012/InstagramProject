import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCRItCeVMGcFAw7FywSaaMWtg-sV5d_qBM",
  authDomain: "instapage-5d835.firebaseapp.com",
  projectId: "instapage-5d835",
  storageBucket: "instapage-5d835.firebasestorage.app",
  messagingSenderId: "705573251320",
  appId: "1:705573251320:web:71e00841a3a016b733330d",
  measurementId: "G-WR68YWM6XG",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
