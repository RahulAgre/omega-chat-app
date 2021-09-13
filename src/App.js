import React from "react";
import "./App.css";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyBSg7OdEAw-I3Mn3koQFKveF4VSG1HDyno",
  authDomain: "omega-chat-app.firebaseapp.com",
  projectId: "omega-chat-app",
  storageBucket: "omega-chat-app.appspot.com",
  messagingSenderId: "863678462088",
  appId: "1:863678462088:web:1eca85715c539cc6d5c73d",
  measurementId: "G-2KV1MDDS1E",
});

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header">
        <section>{user ? <ChatRoom /> : <SignIn />}</section>
      </header>
    </div>
  );
}

export default App;
