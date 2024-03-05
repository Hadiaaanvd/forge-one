import firebase from "firebase/compat/app";
import "firebase/compat/functions";

const firebaseConfig = {
  apiKey: "AIzaSyBEbRc8LsAerUUzHZlyjn6WnngO6aen6vA",
  authDomain: "forge-one.firebaseapp.com",
  projectId: "forge-one",
  storageBucket: "forge-one.appspot.com",
  messagingSenderId: "978621844127",
  appId: "1:978621844127:web:8c4b58f4d306373b74f0aa",
};

require("firebase/functions");

firebase.initializeApp(firebaseConfig);

export { firebaseConfig };
export default firebase;
