// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0LR5en3JZY7xKeOHClqo7dCuy-04-6uI",
  authDomain: "yumyard-56dd1.firebaseapp.com",
  projectId: "yumyard-56dd1",
  storageBucket: "yumyard-56dd1.appspot.com",
  messagingSenderId: "920143633129",
  appId: "1:920143633129:web:e3e9047b29b0e3be74ae78",
  measurementId: "G-QZYY6XD3GW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;