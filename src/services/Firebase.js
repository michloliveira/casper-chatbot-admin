import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBdEpK3PLWlHG0AqeMeL-YiLOooV9bnW0I",
  authDomain: "casper-chatbot-nkfe.firebaseapp.com",
  databaseURL: "https://casper-chatbot-nkfe-default-rtdb.firebaseio.com",
  projectId: "casper-chatbot-nkfe",
  storageBucket: "casper-chatbot-nkfe.appspot.com",
  messagingSenderId: "258221553296",
  appId: "1:258221553296:web:d46245364d842b7e7d0a15"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
