// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD06k4HH_wcghZS2nl28DTdlgy0HkeXNlA",
  authDomain: "recommend-to-becky-food.firebaseapp.com",
  projectId: "recommend-to-becky-food",
  storageBucket: "recommend-to-becky-food.appspot.com",
  messagingSenderId: "331911545311",
  appId: "1:331911545311:web:f47084ab301da56b6ec46a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
