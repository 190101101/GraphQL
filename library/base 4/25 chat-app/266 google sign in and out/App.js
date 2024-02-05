import React from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/auth";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBcWyr4ysT6eI7dBm57MBtk0f0i-tzA5BY",
  authDomain: "web-app-cc04c.firebaseapp.com",
  databaseURL: "https://web-app-cc04c-default-rtdb.firebaseio.com",
  projectId: "web-app-cc04c",
  storageBucket: "web-app-cc04c.appspot.com",
  messagingSenderId: "742465671722",
  appId: "1:742465671722:web:16550853a8ab9cf673a953",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="container my-5">
      <div>
        <SignOut />
      </div>
      <div>{user ? <ChatRoom /> : <SignIn />}</div>
    </div>
  );
};

export default App;

const SignIn = () => {
  const signInGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return (
    <button onClick={signInGoogle} className="btn btn-outline-success">
      login
    </button>
  );
};

const SignOut = () => {
  return (
    auth.currentUser && (
      <button
        onClick={() => auth.signOut()}
        className="btn btn-outline-warning"
      >
        sign out
      </button>
    )
  );
};

const ChatRoom = () => {
  return <div>chat room</div>;
};
