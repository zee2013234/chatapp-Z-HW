import React, { useRef, useState } from 'react';
import '../App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import NextPage from './NextPage.js';

firebase.initializeApp({
  apiKey: "AIzaSyBmDYQzSZtgIMNdp5kLsHOIt9Z4EBin_iQ",
  authDomain: "aaaa-c2af6.firebaseapp.com",
  databaseURL: "https://aaaa-c2af6.firebaseio.com",
  projectId: "aaaa-c2af6",
  storageBucket: "aaaa-c2af6.appspot.com",
  messagingSenderId: "917934183172",
  appId: "1:917934183172:web:51ccda146a1fa9dd48f651",
  measurementId: "G-EG1Z904D3D"
})

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();


function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>⚛️🔥💬</h1>
        <SignOut />
          </header>

      <section>
        {user ? <HomePage /> : <SignIn />}
      </section>

    </div>
  );
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      <p>Do not violate the community guidelines or you will be banned for life!</p>
    </>
  )

}

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}


function HomePage() {
  return (
      <div>
          <div className="row">
              this is home page
          </div>
          <div className="row">
              <Link to="/writingroom"> Next room</Link>
          </div>
          <Route path="/writingroom" component={NextPage}/>
      </div>
      )
}


export default App;
