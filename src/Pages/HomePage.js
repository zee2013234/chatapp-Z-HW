import React, { useRef, useState } from 'react';
import { Link, Route } from 'react-router-dom';
import '../App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import NextPage from './NextPage.js';
import DiscussPage from './Discuss.js';

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();


function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>소설작성방</h1>
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
    <button className="sign-out" onClick={() => auth.signOut()}><Link to="/">Sign Out</Link></button>
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
              <h2/>
              <Link to="/discuss">Discuss room</Link>
          </div>
          <Route path="/writingroom" component={NextPage}/>
          <Route path="/dicuss" component={DiscussPage}/>
      </div>
      )
}


export default App;
