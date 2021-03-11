import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBf5F_KtMfMXw37DwBIUowmgMx9hTiAw1Q",
    authDomain: "clone-ab4af.firebaseapp.com",
    projectId: "clone-ab4af",
    storageBucket: "clone-ab4af.appspot.com",
    messagingSenderId: "619312545361",
    appId: "1:619312545361:web:c9511ac6143cf105108270",
    measurementId: "G-9HF028YR0K"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db , auth};