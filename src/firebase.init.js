// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAtnswI7xRvRrkuDsoLuNMkS_rKgiUYdfc",
    authDomain: "auto-tools-42f17.firebaseapp.com",
    projectId: "auto-tools-42f17",
    storageBucket: "auto-tools-42f17.appspot.com",
    messagingSenderId: "616740717634",
    appId: "1:616740717634:web:45edf5bee51c27daa459db"
};
console.log(firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;