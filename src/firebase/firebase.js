import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDGAerryVv4p4qSi50wYKDnJ4lWwnucXLc",
  authDomain: "expensify-571f4.firebaseapp.com",
  databaseURL: "https://expensify-571f4.firebaseio.com",
  projectId: "expensify-571f4",
  storageBucket: "",
  messagingSenderId: "734028274526",
  appId: "1:734028274526:web:6906bdfdb09d76d9"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
