import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCZ23EmZSAtNDl1zMam2Ushqkr_JDUEkwM',
  authDomain: 'crwn-db-12106.firebaseapp.com',
  databaseURL: 'https://crwn-db-12106.firebaseio.com',
  projectId: 'crwn-db-12106',
  storageBucket: 'crwn-db-12106.appspot.com',
  messagingSenderId: '216979771223',
  appId: '1:216979771223:web:630306c48f94d4dc783812',
  measurementId: 'G-TPB6GZ2HPK',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
