
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlqW6C-Nvtp2-upqG-ztFQaDIcWg8uC4c",
  authDomain: "house-marketplace-app-b41ca.firebaseapp.com",
  projectId: "house-marketplace-app-b41ca",
  storageBucket: "house-marketplace-app-b41ca.appspot.com",
  messagingSenderId: "1087964967948",
  appId: "1:1087964967948:web:6dce7317299b81b851ea29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()