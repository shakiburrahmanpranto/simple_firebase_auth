// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDS7zM5Uqb_tKzl4cjD587he_oufZfAeg",
  authDomain: "simple-firebase-auth-d9330.firebaseapp.com",
  projectId: "simple-firebase-auth-d9330",
  storageBucket: "simple-firebase-auth-d9330.firebasestorage.app",
  messagingSenderId: "938254796490",
  appId: "1:938254796490:web:dafdbf80d9320debf1d633",
  measurementId: "G-HRMTBCG4T9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
