import firebase from "firebase/compat/app";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAQfuS1poivDTiTumOnrH9-pS9hLnBue9o",
  authDomain: "login-signup-auth-83b71.firebaseapp.com",
  projectId: "login-signup-auth-83b71",
  storageBucket: "login-signup-auth-83b71.appspot.com",
  messagingSenderId: "772084815899",
  appId: "1:772084815899:web:f54c32fd83d679080740be",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
