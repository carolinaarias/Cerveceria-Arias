import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC0chXACYKTbnxlAf7G0iJ_uCXc6pKlXGE",
  authDomain: "holandes-errante.firebaseapp.com",
  projectId: "holandes-errante",
  storageBucket: "holandes-errante.appspot.com",
  messagingSenderId: "122240213164",
  appId: "1:122240213164:web:4235d0c34bf044cf8b7f09"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore(app)