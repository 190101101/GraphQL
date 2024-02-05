import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCThHzVqHc6ZBeEP3ujNtlHkSRSMYbNzVY",
  authDomain: "contact-app-e6e53.firebaseapp.com",
  databaseURL: "https://contact-app-e6e53-default-rtdb.firebaseio.com",
  projectId: "contact-app-e6e53",
  storageBucket: "contact-app-e6e53.appspot.com",
  messagingSenderId: "237923118536",
  appId: "1:237923118536:web:83392177cdfad3de9924fd",
  measurementId: "G-2D352P3RCN"
};

const db = firebase.initializeApp(firebaseConfig);
export default db.database().ref();