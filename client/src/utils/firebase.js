
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewforge-8b8fb.firebaseapp.com",
  projectId: "interviewforge-8b8fb",
  storageBucket: "interviewforge-8b8fb.firebasestorage.app",
  messagingSenderId: "90601388276",
  appId: "1:90601388276:web:bd1ee23bdf4477085846a1",
  measurementId: "G-LH7PG831FG"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}