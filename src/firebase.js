import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAUKmzhqBNdH9Es_Xew3TbHmMn5wF1jv1k",
    authDomain: "clone-832bf.firebaseapp.com",
    projectId: "clone-832bf",
    storageBucket: "clone-832bf.appspot.com",
    messagingSenderId: "473550239362",
    appId: "1:473550239362:web:7ebd23e6fa72d3dad8e69b",
    measurementId: "G-K4WMRH275L"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };