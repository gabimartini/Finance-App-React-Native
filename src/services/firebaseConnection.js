import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let config = {
  apiKey: "AIzaSyBmgAcSlKQVSErw_27wiKcZRS2M_4l_JA4",
  authDomain: "meudinheiro-2416b.firebaseapp.com",
  databaseURL: "https://meudinheiro-2416b.firebaseio.com",
  projectId: "meudinheiro-2416b",
  storageBucket: "meudinheiro-2416b.appspot.com",
  messagingSenderId: "940494924038",
  appId: "1:940494924038:web:abb6e02af8872f4eef1687",
  measurementId: "G-JSB1W25T2V"
};

firebase.initializeApp(config);

export default firebase;