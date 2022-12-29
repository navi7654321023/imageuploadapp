// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import "firebase/storage";
// import firebase from "firebase/app";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSsOg9h_b4ScccPmhjN0rnvIBgBNwto2I",
  authDomain: "navjot-1e5d6.firebaseapp.com",
  projectId: "navjot-1e5d6",
  storageBucket: "navjot-1e5d6.appspot.com",
  messagingSenderId: "728006467225",
  appId: "1:728006467225:web:301c14438c326d75636208"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export { storage, firebase as default };