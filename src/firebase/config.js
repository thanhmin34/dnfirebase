import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhBu8f8gr8WOPnlKIcpt4dsXAlMS2Jd58",
  authDomain: "thanhmin-25fd7.firebaseapp.com",
  projectId: "thanhmin-25fd7",
  storageBucket: "thanhmin-25fd7.appspot.com",
  messagingSenderId: "406209263692",
  appId: "1:406209263692:web:bcee863724434644d09ce9",
  measurementId: "G-GBP1WJXRZE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
