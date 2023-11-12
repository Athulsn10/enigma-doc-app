// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUQ0OBen7lVSOTk5jKgOy_kH7qlaV0bOg",
  authDomain: "snapnotes-1106c.firebaseapp.com",
  databaseURL: "https://snapnotes-1106c-default-rtdb.firebaseio.com",
  projectId: "snapnotes-1106c",
  storageBucket: "snapnotes-1106c.appspot.com",
  messagingSenderId: "912684953733",
  appId: "1:912684953733:web:4ff164f1723cc1352c39ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)