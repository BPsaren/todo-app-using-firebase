// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDz7j_oljD7TLVZ8dHi-IiX8CFQgoTl3ms",
  authDomain: "fir-todo-app-85009.firebaseapp.com",
  projectId: "fir-todo-app-85009",
  storageBucket: "fir-todo-app-85009.appspot.com",
  messagingSenderId: "811259261088",
  appId: "1:811259261088:web:7075a08afb6795c2c019c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//for authtication 
export const auth=getAuth(app);

// for store the databsse
export const db=getFirestore(app);