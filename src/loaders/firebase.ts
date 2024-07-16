// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';
import { getAnalytics } from "firebase/analytics";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDzYiVgHP4MfMia_cvxEr8qLg9M9UhAn9c",
    authDomain: "jack-norris-website.firebaseapp.com",
    projectId: "jack-norris-website",
    storageBucket: "jack-norris-website.appspot.com",
    messagingSenderId: "799642902499",
    appId: "1:799642902499:web:e290c8d72453eb93688ad6",
    measurementId: "G-QE12YTHGXK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const analytics = getAnalytics(app);