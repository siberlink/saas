// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBXzXyRibMDQZYzk16vKpvwDrX1lsQd9qg",
    authDomain: "siberlink-cf84a.firebaseapp.com",
    projectId: "siberlink-cf84a",
    storageBucket: "siberlink-cf84a.firebasestorage.app",
    messagingSenderId: "536434403797",
    appId: "1:536434403797:web:365090867e3b0f3d3d755c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
