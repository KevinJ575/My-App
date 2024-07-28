// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
 const FirebaseConfig = {
  apiKey: "AIzaSyC3j5kTkxT6DBvULCi3X0YXItULRXjHZt4",
  authDomain: "fir-security-d2148.firebaseapp.com",
  projectId: "fir-security-d2148",
  storageBucket: "fir-security-d2148.appspot.com",
  messagingSenderId: "148884027628",
  appId: "1:148884027628:web:ee41bca89e9d1227ae8dc9"
};

// Initialize Firebase
const app = initializeApp(FirebaseConfig);
const bd = getFirestore(app);

export default {
  app,bd
}