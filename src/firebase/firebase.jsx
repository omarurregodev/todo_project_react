import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyACq5Ybq_SUOwEahCHBDJhoYf5Popt-RjU",
  authDomain: "ecommerce-project-reactjs.firebaseapp.com",
  projectId: "ecommerce-project-reactjs",
  storageBucket: "ecommerce-project-reactjs.appspot.com",
  messagingSenderId: "264127430370",
  appId: "1:264127430370:web:9822d975e67e2c505ce8bb",
  measurementId: "G-0N2TVXBSP6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);