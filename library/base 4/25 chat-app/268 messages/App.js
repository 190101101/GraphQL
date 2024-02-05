import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
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
      <div className="row">
        <div className="offset-md-2 col-md-8">
          <SignOut />
          <div className="my-3">{user ? <ChatRoom /> : <SignIn />}</div>
        </div>
      </div>
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
  const messageRef = firestore.collection("messages");
  const query = messageRef.orderBy("createdAt").limit(25);
  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    console.log(uid, photoURL);

    await messageRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL: photoURL,
    });

    setFormValue("");
  };

  return (
    <>
      <div className="border border-dark p-2">
        {messages &&
          messages.map((message) => (
            <ChatMessage key={Math.random()} message={message} />
          ))}
      </div>

      <form onSubmit={sendMessage} className="d-flex my-1">
        <input
          type="text"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="send message..."
          className="form-control mr-1 bg-dark text-white border border-dark"
        />
        <button
          type="submit"
          disabled={!formValue}
          className="btn btn-outline-success"
        >
          send
        </button>
      </form>
    </>
  );
};

const ChatMessage = (props) => {
  const { text, uid, photoURL } = props.message;

  const messageClass =
    uid === auth.currentUser.uid
      ? "justify-content-start"
      : "justify-content-end";

  return (
    <div className={`d-flex ${messageClass}`}>
      <img src={photoURL} width="50" />
      <p>{text}</p>
    </div>
  );
};
