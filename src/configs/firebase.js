import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAgSmRClsVddAs8IU3Pf2EA9laihgzTt3s",
    authDomain: "cbs-blog-3ce6e.firebaseapp.com",
    projectId: "cbs-blog-3ce6e",
    storageBucket: "cbs-blog-3ce6e.appspot.com",
    messagingSenderId: "136907246645",
    appId: "1:136907246645:web:6ceeef939741c45e35757c",
    measurementId: "G-6LC1653CEM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
