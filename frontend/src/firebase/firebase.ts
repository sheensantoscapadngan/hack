import firebase from "firebase";

try {
  firebase.initializeApp({
    apiKey: "AIzaSyCAM8OqsDhKOxGX-aEZ_yOFl-FPjsG108A",
    authDomain: "hack-88778.firebaseapp.com",
    projectId: "hack-88778",
    storageBucket: "hack-88778.appspot.com",
    messagingSenderId: "451843897740",
    appId: "1:451843897740:web:d80d9d9f5ef362f75b3ea9",
    measurementId: "G-J9ZK6YQSY2",
  });
} catch (error) {
  console.error(error);
}

export default firebase;
