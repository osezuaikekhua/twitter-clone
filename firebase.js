// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQZarV3MKTEqugU1q-_4D70NZ9J06nN3A",
  authDomain: "twitter-clone-acc2b.firebaseapp.com",
  projectId: "twitter-clone-acc2b",
  storageBucket: "twitter-clone-acc2b.appspot.com",
  messagingSenderId: "188501874966",
  appId: "1:188501874966:web:f83dde23b02bb04d041837"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)