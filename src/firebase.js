import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB5m7DeUwhWmQhrVRN05uwmkQ_06EsSgzc",
  authDomain: "holandes-f4206.firebaseapp.com",
  projectId: "holandes-f4206",
  storageBucket: "holandes-f4206.appspot.com",
  messagingSenderId: "510784572464",
  appId: "1:510784572464:web:9d2fa687ed33f8da6df1f5"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore(app)