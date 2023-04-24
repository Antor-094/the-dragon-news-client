// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDl-P3J8k-CKkCd_imS2KX_i5bmMcuUvTw",
  authDomain: "the-news-dragon-935d4.firebaseapp.com",
  projectId: "the-news-dragon-935d4",
  storageBucket: "the-news-dragon-935d4.appspot.com",
  messagingSenderId: "1050297391078",
  appId: "1:1050297391078:web:4a86cd38d15caf4169a827"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;