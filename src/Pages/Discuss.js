import React, { Component, useRef, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import Header from './Header.js'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Discuss from './Discuss.js';
import { Link, Route } from 'react-router-dom';


function ChatRoom1() {
    const auth= firebase.auth();
    const firestore=firebase.firestore();
    const dummy = useRef();
    const messagesRef1 = firestore.collection('ccc');
    const query = messagesRef1.orderBy('createdAt').limit(25);

    const [ccc] = useCollectionData(query, { idField: 'id' });

    const [formValue1, setFormValue1] = useState('');


    const sendMessage = async (e) => {
        e.preventDefault();

        const { uid, photoURL } = auth.currentUser;

        await messagesRef1.add({
            text: formValue1,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        })

        setFormValue1('');
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (<>
        <Header/>
        <main>

            {ccc && ccc.map(msg => <ChatMessage key={msg.id} message={msg} />)}

            <span ref={dummy}></span>

        </main>

        <form onSubmit={sendMessage}>

            <input value={formValue1} onChange={(e) => setFormValue1(e.target.value)} placeholder="say nice" />

            <button type="submit" disabled={!formValue1}>🕊️</button>

        </form>
    </>)
}


function ChatMessage(props) {
    const auth= firebase.auth();
    const firestore=firebase.firestore();
    const { text, uid, photoURL } = props.message;

    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    return (<>
        <div className={`message ${messageClass}`}>
            <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
            <p>{text}</p>
        </div>
    </>)
}

export default ChatRoom1;
