import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBTHQ6sLRPwGZNA1iIufFlOT3oUlbkctW4",
  authDomain: "elec-trick-3dcf2.firebaseapp.com",
  projectId: "elec-trick-3dcf2",
  storageBucket: "elec-trick-3dcf2.appspot.com",
  messagingSenderId: "1037736012157",
  appId: "1:1037736012157:web:b3d8fb470774ad0a4e8414"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;