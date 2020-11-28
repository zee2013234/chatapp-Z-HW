import React from 'react';
import { Link, Route } from 'react-router-dom';
import DiscussPage from './Discuss.js';
import '../style/Header.css'
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';


const Header = () => {

  return (
    <div className="HD-header">
      <ul className="HD-navbar">
        <li><Link to="/" className="Hd-link HD-logo">롤링롤링</Link></li>
        <li><Link to="/roomlist" className="Hd-link">소설 작성방</Link></li>
        <li><Link to="/publishlist" className="Hd-link HD-la">완결 작품들</Link></li>
        <div className="HD-rightones">
        <li><Link to="/mypage" className="Hd-link">마이페이지</Link></li>
        <li><Link to="/" className="Hd-link">알림</Link></li>
        <li><Link to="/" className="Hd-link">설정</Link></li>
        <SignOut />
      </div>
      </ul>
      <hr></hr>

    </div>
  )
};
function SignOut() {
  const auth= firebase.auth();
  return auth.currentUser && (
    <text className="sign-out" onClick={() => auth.signOut()}><Link to="/">로그아웃</Link></text>
  )
}

export default Header;
