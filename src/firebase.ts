import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
// import {
//   getAuth,
//   onAuthStateChanged,
// } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

// Web app's Firebase configuration
const firebaseApp = initializeApp({
  apiKey: "AIzaSyBW_igWInETmkiRj1epqB1MAe7lrzFjUo0",
  authDomain: "kw-ecommerce.firebaseapp.com",
  projectId: "kw-ecommerce",
  storageBucket: "kw-ecommerce.appspot.com",
  messagingSenderId: "1025185185368",
  appId: "1:1025185185368:web:1a26cefd411259a2c0142d",
});

const auth = getAuth(firebaseApp);

// Detect auth state

onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.log("logged in!");
  } else {
    console.log("No user");
  }
});
