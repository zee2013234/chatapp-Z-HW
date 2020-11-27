import React from 'react';
import { Link, Route } from 'react-router-dom';
import ChatRoom from './NextPage.js';
import '../style/Header.css'

const Header = () => {

  return (
    <div className="HD-header">
      <ul className="HD-navbar">
        <li><Link to="/library" className="Hd-link HD-logo">롤링롤링</Link></li>
        <li><Link to="/library" className="Hd-link">소설 작성방</Link></li>
        <li><Link to="/library" className="Hd-link HD-la">완결 작품들</Link></li>
        <div className="HD-rightones">
        <li><Link to="/library" className="Hd-link">마이페이지</Link></li>
        <li><Link to="/library" className="Hd-link">알림</Link></li>
        <li><Link to="/library" className="Hd-link">설정</Link></li>
        </div>
      </ul>
      <hr></hr>
      <Route path="/library" component={ChatRoom}/>

    </div>
  )
};

export default Header;
