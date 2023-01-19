
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDNKUP_JsDv_qcWV87YVs_e11EMU5MG6Y4",
  authDomain: "hunky-advertisement-7899.firebaseapp.com",
  projectId: "hunky-advertisement-7899",
  storageBucket: "hunky-advertisement-7899.appspot.com",
  messagingSenderId: "377781109253",
  appId: "1:377781109253:web:95b20e742ae30ff6bd926c",
  measurementId: "G-35YZVYEZBW"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth()

export {auth,app}