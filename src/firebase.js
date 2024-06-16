// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAq3BI-jFd7hMIfGZ-UZ6DGAdh0wuikr0o",
  authDomain: "cvmaster-10d73.firebaseapp.com",
  projectId: "cvmaster-10d73",
  storageBucket: "cvmaster-10d73.appspot.com",
  messagingSenderId: "1015080667654",
  appId: "1:1015080667654:web:5f9ba273ec76d1cb319187",
  measurementId: "G-7JT8MFL5Q1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, analytics };
