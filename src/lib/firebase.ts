import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAQYTfIvgZhVHurLpeY7VpnPI1B1ypTRx8",
  authDomain: "classic-events-ca119.firebaseapp.com",
  projectId: "classic-events-ca119",
  storageBucket: "classic-events-ca119.firebasestorage.app",
  messagingSenderId: "208656426637",
  appId: "1:208656426637:web:7180682d6680784ccc24c4",
  measurementId: "G-2MPMV7ZSV6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
