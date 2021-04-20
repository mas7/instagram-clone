import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyDNqAapVyq2QhjNGDxiVrd6x9DnrMwIfVU",
  authDomain: "instagram-3ac37.firebaseapp.com",
  projectId: "instagram-3ac37",
  storageBucket: "instagram-3ac37.appspot.com",
  messagingSenderId: "208455910915",
  appId: "1:208455910915:web:f41365f48379fce9c83036",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// console.log("firebase", firebase);
// seedDatabase(firebase);

export { firebase, FieldValue };
