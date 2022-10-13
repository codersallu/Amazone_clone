import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBcyrUkh8titLMpRS10XrfIaMq2UsUwSHQ",
  authDomain: "e-clone-6523b.firebaseapp.com",
  projectId: "e-clone-6523b",
  storageBucket: "e-clone-6523b.appspot.com",
  messagingSenderId: "1098720662916",
  appId: "1:1098720662916:web:e70c08026086ec44f0f9d1"

})

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db,auth};