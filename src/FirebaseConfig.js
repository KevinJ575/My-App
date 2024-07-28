// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
 const FirebaseConfig = {
  apiKey: "AIzaSyDv4zoiiHzT9jKXZVAzUbDORkWxbtD9Wj8",
  authDomain: "bymesecurity-56848.firebaseapp.com",
  projectId: "bymesecurity-56848",
  storageBucket: "bymesecurity-56848.appspot.com",
  messagingSenderId: "116353387077",
  appId: "1:116353387077:web:f7e368106ea6846cd8b12c"
};

// Initialize Firebase
const app = initializeApp(FirebaseConfig);
const bd = getFirestore(app);

export default {
  app,bd
}