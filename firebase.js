// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCs8nm3K4x8UdBmX-Lwk4__HH9ua5deMYc",
  authDomain: "whatsapp-clone-b5674.firebaseapp.com",
  projectId: "whatsapp-clone-b5674",
  storageBucket: "whatsapp-clone-b5674.appspot.com",
  messagingSenderId: "717455228249",
  appId: "1:717455228249:web:2748b83194749a6e522048",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, auth, provider };
