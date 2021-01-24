import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBAlMLmECDnzkiOd4gdlp4FBsohjpYRLB0",
    authDomain: "tesla-clone-e286e.firebaseapp.com",
    projectId: "tesla-clone-e286e",
    storageBucket: "tesla-clone-e286e.appspot.com",
    messagingSenderId: "433876873208",
    appId: "1:433876873208:web:97a2bd9f7cafd96fa1b00d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()
export { auth }