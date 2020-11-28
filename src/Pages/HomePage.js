import React, { useRef, useState } from 'react';
import { Link, Route } from 'react-router-dom';
import '../App.css';
import Header from './Header.js'
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
      <section>
        {user ? <HomePage /> : <SignIn />}
      </section>
  );
}

export function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <text className="title">롤링롤링</text>
      <h2/>
      <button className="sign-in" onClick={signInWithGoogle}>Google 로그인</button>
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
        <Header/>
        <div>
          <h2/>
            <div className="row">
                this is home page
            </div>
            <div className="row">
                <Link to="/writingroom"> Next room</Link>
            </div>
            <Route path="/writingroom" component={NextPage}/>
            <Route path="/discuss" component={DiscussPage}/>
        </div>
      </div>
      )
}


export default App;
