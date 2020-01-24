import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB-u3xKMZCZLSz3kuS0eUL5M-3LQ6b2NMA",
    authDomain: "crown-db-e579d.firebaseapp.com",
    databaseURL: "https://crown-db-e579d.firebaseio.com",
    projectId: "crown-db-e579d",
    storageBucket: "crown-db-e579d.appspot.com",
    messagingSenderId: "909189678556",
    appId: "1:909189678556:web:ebd6f28c13fafd5c92fb19",
    measurementId: "G-RTGMGPD22C"
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;