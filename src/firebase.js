import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCKybmEgqjieilydc7SL9klO3XN_Ys2Ax8",
  authDomain: "todoapp-8c723.firebaseapp.com",
  databaseURL: "https://todoapp-8c723-default-rtdb.firebaseio.com",
  projectId: "todoapp-8c723",
  storageBucket: "todoapp-8c723.appspot.com",
  messagingSenderId: "840269847606",
  appId: "1:840269847606:web:1912b192385f463c504c97"
};


const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
export const auth = getAuth(app)