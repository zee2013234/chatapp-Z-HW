import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import Header from './Header.js'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Discuss from './Discuss.js';
import { Link, Route } from 'react-router-dom';



function AAA() {
    return (<>
        <Header/>
    </>)
}


export default AAA;
