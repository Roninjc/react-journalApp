import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBU-Nm0HWY4L5yB4Y2IUNohCef8tZDcNwA",
    authDomain: "react-journalapp-62bd3.firebaseapp.com",
    projectId: "react-journalapp-62bd3",
    storageBucket: "react-journalapp-62bd3.appspot.com",
    messagingSenderId: "709072180493",
    appId: "1:709072180493:web:93215d6b15033fe9ab4c44"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}
