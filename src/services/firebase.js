import {initializeApp} from "firebase/app";
import {getFirestore, doc, onSnapshot} from "firebase/firestore";
import {getAnalytics} from "firebase/analytics";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBTZP2GSVPGbzwDk1xxUAn_kR6AbZppQ4Y",
    authDomain: "siteweb5.firebaseapp.com",
    projectId: "siteweb5",
    storageBucket: "siteweb5.appspot.com",
    messagingSenderId: "1088382123917",
    appId: "1:1088382123917:web:aa53309ce1eaa7334607c4",
    measurementId: "G-9K53J2RCEG"
});

const firestore = getFirestore();
const analytics = getAnalytics();

export {firestore, analytics, doc, onSnapshot};
