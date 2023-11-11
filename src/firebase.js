
import firebase from "firebase/app";
import "firebase/database"
const firebaseConfig = {
  apiKey: "AIzaSyDUQ0OBen7lVSOTk5jKgOy_kH7qlaV0bOg",
  authDomain: "snapnotes-1106c.firebaseapp.com",
  projectId: "snapnotes-1106c",
  storageBucket: "snapnotes-1106c.appspot.com",
  messagingSenderId: "912684953733",
  appId: "1:912684953733:web:4ff164f1723cc1352c39ec"
};

// Initialize Firebase
const firedb = firebase.initializeApp(firebaseConfig);
export default firedb.database().ref();