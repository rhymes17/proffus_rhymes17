import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBSeDzniKDa5mwEmruhw_4vVUuB_GZVcto",
  authDomain: "proffus-rhymes.firebaseapp.com",
  projectId: "proffus-rhymes",
  storageBucket: "proffus-rhymes.appspot.com",
  messagingSenderId: "339266255043",
  appId: "1:339266255043:web:667b4ec56dca7a060c8a76",
  measurementId: "G-25P7RCM04Y"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };