import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4VpIMKtpeekMks2xnNw_jZ676x3l2fWo",
  authDomain: "uhtred-store.firebaseapp.com",
  projectId: "uhtred-store",
  storageBucket: "uhtred-store.appspot.com",
  messagingSenderId: "1063891261617",
  appId: "1:1063891261617:web:a4bb9b1f5793e81bd82a90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>

)
