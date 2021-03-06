﻿import React, { Component, useRef, useState } from 'react';
import { Link, Route } from 'react-router-dom';

import Chatheader from './Chatheader.js'

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import HomePage from './HomePage.js';

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

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const analytics = firebase.analytics();


function ChatRoom() {
    const dummy = useRef();
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);

    const [messages] = useCollectionData(query, { idField: 'id' });

    const [formValue, setFormValue] = useState('');


    const sendMessage = async (e) => {
        e.preventDefault();

        const { uid, photoURL } = auth.currentUser;

        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        })

        setFormValue('');
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (<>
        <Chatheader/>
        <main>

            {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

            <span ref={dummy}></span>

        </main>

        <form onSubmit={sendMessage}>

            <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

            <button type="submit" disabled={!formValue}>입력</button>

        </form>
    </>)
}


function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;

    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    return (<>
        <div className={`message ${messageClass}`}>
            <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
            <p>{text}</p>
        </div>
    </>)
}

export default ChatRoom;
