import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDxKF3f83kP_WdufxlXItxt2hz2h1ua1LY",
    authDomain: "react-todo-c48be.firebaseapp.com",
    databaseURL: "https://react-todo-c48be.firebaseio.com",
    projectId: "react-todo-c48be",
    storageBucket: "react-todo-c48be.appspot.com",
    messagingSenderId: "318304432694",
    appId: "1:318304432694:web:8c37bdba14bfb17935de97",
    measurementId: "G-BNP7TRJN32"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;