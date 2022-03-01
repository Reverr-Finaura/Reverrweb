import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

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
export async function register(email, password) {
    try {
        const cred = await createUserWithEmailAndPassword(auth, email, password);
        alert("User created successfully!");
        console.log('user created:', cred.user);
    } catch (err) {
        console.log(err.message);
        alert(err.message);
    }
};

export async function login(email, password) {
    try {
        const cred = await signInWithEmailAndPassword(auth, email, password)
        console.log('user logged in:', cred.user);
        alert("User logged in successfully!");
    } catch (err) {
        alert(err.message);
        console.log(err.message);
    }
}
export { db };