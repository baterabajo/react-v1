// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDab27oE-KTSmqMagZ2PkFLICenqmd9Cfo",
  authDomain: "reactshop-b9e7e.firebaseapp.com",
  projectId: "reactshop-b9e7e",
  storageBucket: "reactshop-b9e7e.firebasestorage.app",
  messagingSenderId: "632742135243",
  appId: "1:632742135243:web:fe59998dddcfa53a9da24e",
  measurementId: "G-8GCX7CQZN9"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

//const analytics = getAnalytics(app);
export const db= getFirestore(app);




