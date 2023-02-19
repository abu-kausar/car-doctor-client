// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderIdy,
  // appId: process.env.REACT_APP_appId

  apiKey: "AIzaSyDo_newDVDinGnwbS4_c8LNjbn_w2UG1ZI",
  authDomain: "car-doctor-b3036.firebaseapp.com",
  projectId: "car-doctor-b3036",
  storageBucket: "car-doctor-b3036.appspot.com",
  messagingSenderId: "225880799702",
  appId: "1:225880799702:web:e5368df5d45941403bcc77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;