import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Initialize Firebase
var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAG7aYqGunCEEqMePnR7YN_uMsn8yvwtcM",
    authDomain: "reverr-25fb3.firebaseapp.com",
    projectId: "reverr-25fb3",
    storageBucket: "reverr-25fb3.appspot.com",
    messagingSenderId: "710745964607",
    appId: "1:710745964607:web:9c0b08192f30bb97bab88a",
    measurementId: "G-7S7P5C52RG"
});

var db = firebaseApp.firestore();
const auth = getAuth();
export function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}

export { db };