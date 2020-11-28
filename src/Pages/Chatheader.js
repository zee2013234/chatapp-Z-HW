import React from 'react';
import { Link, Route } from 'react-router-dom';
import '../style/Chatheader.css'
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';


const Chatheader = () => {

  return (
    <div className="HD-header">
      <ul className="HD-navbar">
        <li><Link to="/" className="Hd-link HD-logo">롤링롤링</Link></li>
        <div className="HD-rightones">
        <li><Link to="/writingroom" className="Hd-link">소설작성방</Link></li>
        <li><Link to="/discuss" className="Hd-link">토론방</Link></li>
      </div>
      </ul>
      <hr></hr>

    </div>
  )
};

export default Chatheader;
