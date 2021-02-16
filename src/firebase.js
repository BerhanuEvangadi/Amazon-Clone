// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCA_8l4fawEZK8gz-eWC-wnD2n8zkEr3JE",
    authDomain: "fir-cd71d.firebaseapp.com",
    projectId: "fir-cd71d",
    storageBucket: "fir-cd71d.appspot.com",
    messagingSenderId: "688696953097",
    appId: "1:688696953097:web:a14cedb4517ea4cd45abd8",
    measurementId: "G-CNT2T23010"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };