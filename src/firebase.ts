// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfxFsPG9c_G11sfV4mxa8csaxUle3Y9D0",
  authDomain: "baths-construction.firebaseapp.com",
  databaseURL:
    "https://baths-construction-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "baths-construction",
  storageBucket: "baths-construction.appspot.com",
  messagingSenderId: "796533013099",
  appId: "1:796533013099:web:aabeea83e72a6950044f2e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const storage = getStorage(app);
