import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: 'AIzaSyCAljjsr9Ip28sEGXzmPUI23cqrWnkSmuw',
  authDomain: 'todoapps-a7ad1.firebaseapp.com',
  projectId: 'todoapps-a7ad1',
  storageBucket: 'todoapps-a7ad1.appspot.com',
  messagingSenderId: '729563431126',
  appId: '1:729563431126:web:f975a850ffbd1f028e8977',
  measurementId: 'G-17XD99V2L1',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
