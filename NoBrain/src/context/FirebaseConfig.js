import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
const firebaseConfig = {
  apiKey: "AIzaSyBac7WRagRRzYGUgDUHwIwKpiFjDbU7U4s",
  authDomain: "nobrain-e653d.firebaseapp.com",
  databaseURL: "https://nobrain-e653d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "nobrain-e653d",
  storageBucket: "nobrain-e653d.appspot.com",
  messagingSenderId: "96351281480",
  appId: "1:96351281480:web:8799c7d59442c5a68a137d",
  measurementId: "G-KTVCBG726G"
};
firebase.initializeApp(firebaseConfig);

export { firebase };