import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import RoomList from './Mainpages/RoomList.js';
import PublishedList from './Mainpages/PublishedList.js';
import HomePage from './HomePage.js';
import firebase from 'firebase/app';
import 'firebase/auth';
import '../style/Header.css';

const auth = firebase.auth();


const Header = () => {

    const [active, setActive] = useState("");
    const togglea = (event) => {
      const { id } = event.target;
      if (active === id) {
        setActive("");
      } else {
        setActive(id);
        console.log(active);
      }
    }

  return (
    <div className="HD-header">
      <ul className="HD-navbar">
        <li><Link to="/list" className="Hd-link HD-logo">롤링롤링</Link></li>
        <li><Link to="/list" id="Hd-list" className={`Hd-link ${active==="Hd-list"? 'Hd-active':""}`}
        onClick={togglea}>소설 작성방</Link></li>
        <li><Link to="/library" id="Hd-pub" className={`Hd-link HD-la ${active==="Hd-pub"? 'Hd-active':""}`}
        onClick={togglea}>완결 작품들</Link></li>
        <div className="HD-rightones">
        <li>마이페이지</li>
        <li>알림</li>
        <li>설정</li>
        <li onClick = {() => {auth.signOut();}}><Link to="/" className="Hd-link">로그아웃</Link></li>
        </div>
      </ul>
      <hr></hr>
      <Route path="/library" component={PublishedList}/>
          <Route path="/list" component={RoomList} />
          <Route exact path="/" component={HomePage} />
    </div>
  )
};

export default Header;
