// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCmHwVxNwt2t8YnohaQkN9ZGja0BpBduY",
  authDomain: "ambient-elf-419703.firebaseapp.com",
  projectId: "ambient-elf-419703",
  storageBucket: "ambient-elf-419703.appspot.com",
  messagingSenderId: "710823642887",
  appId: "1:710823642887:web:148cca1a05b24a5949a7a2",
  measurementId: "G-P63EX1H94J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);