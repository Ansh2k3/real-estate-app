// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANd3rCNmZ2pYpaaSa0TWxewfHhzcLarH4",
  authDomain: "mern-stack-realestate.firebaseapp.com",
  projectId: "mern-stack-realestate",
  storageBucket: "mern-stack-realestate.appspot.com",
  messagingSenderId: "530250119069",
  appId: "1:530250119069:web:91a5d786b17b5182d42174",
  measurementId: "G-FXG38Q9N60"
};

// Initialize Firebase
/* const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); */
export const app = initializeApp(firebaseConfig);