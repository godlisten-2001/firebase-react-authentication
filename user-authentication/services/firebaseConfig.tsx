// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9APaTmEFhxB3UrVrBjLMN1pcD0jcJoOQ",
  authDomain: "project-beetle-67b42.firebaseapp.com",
  projectId: "project-beetle-67b42",
  storageBucket: "project-beetle-67b42.appspot.com",
  messagingSenderId: "811240570561",
  appId: "1:811240570561:web:6a514dcc47686da7ff5e40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const FIREBASE_AUTH = getAuth(app);