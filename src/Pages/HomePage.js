import React, { useRef, useState } from 'react';
import { Link, Route } from 'react-router-dom';
import '../App.css';

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import TableRow from '@material-ui/core/TableRow'
import ChatInfoModal from './Mainpages/Modals/ChatInfoModal.js';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import NextPage from './NextPage.js';


const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();


const useStyles = makeStyles((theme) => ({
    grid: {
        width: '100%',
        fontSize: '20px',
        margin: '0px',
        justifyContent: "center",
    },
    paper: {
        border: "0",
        padding: theme.spacing(2),
        color: "white",
        background: "#263343",
        height: "60px",
    },
    paper1: {
        padding: theme.spacing(2),
        color: "black",
        background: "white",
        border: 0,
    },

}));
const customer = [
    {
        'id': "자세히 보기",
        'image': 'https://image.ytn.co.kr/general/jpg/2017/0725/201707251131549101_t.jpg',
        'name': '원피스 웹소설 드가자',
        'score': '모집입원: 2/5명',
        'birthday': '#원피스 짱짱맨 #루피사기',
    },
    {
        'id': "자세히 보기",
        'image': "https://i.insider.com/5e835889671de07d8317e613?width=1100&format=jpeg&auto=webp",
        'name': '나루토 성장시키기 방입니다',
        'score': '모집입원: 1/5명',
        'birthday': "#나루토멋져#사스케좋아",
    },
    {
        'id': "자세히 보기",
        'image': "https://upload.wikimedia.org/wikipedia/ko/f/f4/%EB%93%9C%EB%9D%BC%EB%A7%88_%EC%9D%B4%ED%83%9C%EC%9B%90_%ED%81%B4%EB%9D%BC%EC%93%B0_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg",
        'name': '이태원 클라쓰 관련 소설 쓰실분?',
        'score': '모집인원 2/7명',
        'birthday': '#클라스가다르지 #배우팬오세요',
    }]
const stly = {
    textAlign: 'center',
}

const searchbarstyle = {
    color: "black",
    background: "#C4C4C4",
    fontSize: 17,
    marginLeft: 0,
    height: 29,
    width: "auto",
    marginRight: 10,
}


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
    <button className="sign-out" onClick={() => auth.signOut()}><Link to="/">Sign Out</Link></button>
  )
}


function HomePage() {
    const classes = useStyles();
  return (
      <div>
          <Grid container spacing={2} className={classes.grid}>
              <Grid item xs={6}>
                  <input style={searchbarstyle} />
                  <button onClick={() => { alert("조금더 시간을 주시면 구현됩니다") }}> 검색</button>
              </Grid>
              <Grid item xs={6}>
                  <ui class="searchbar_char">
                      <text style={stly}>해시태그:</text>
                      <select name="job">
                          <option value="">소설</option>
                          <option value="fantagy">판타지</option>
                          <option value="cartoon" selected="selected">만화</option>
                          <option value="drama">드라마</option>
                      </select>&nbsp;&nbsp;&nbsp;
              <text style={stly}>정렬:&nbsp;&nbsp;&nbsp;</text>
                      <select name="job">
                          <option value="most">최신순</option>
                          <option value="popular">인기순</option>
                          <option value="" selected="selected">평점순</option>
                          <option value="">검색순</option>
                      </select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </ui>
              </Grid>
              <Grid item xs={3}>
                  <Grid item xs={12}>
                      <Grid item xs={12}>
                      </Grid>
                      <Paper className={classes.paper1}>
                          {
                              customer.map(c => {
                                  return (
                                      <Customer
                                          id={c.id}
                                          image={c.image}
                                          name={c.name}
                                          birthday={c.birthday}
                                          score={c.score} />
                                  )
                              })
                          }
                      </Paper>
                  </Grid>
              </Grid>
              <Grid item xs={3}>
                  <Grid item xs={12}>
                      <Grid item xs={12}>
                      </Grid>

                      <Paper className={classes.paper1}>
                          {
                              customer.map(c => {
                                  return (
                                      <Customer
                                          id={c.id}
                                          image={c.image}
                                          name={c.name}
                                          birthday={c.birthday}
                                          score={c.score} />
                                  )
                              })
                          }
                      </Paper>
                  </Grid>
              </Grid>
              <Grid item xs={3}>
                  <Grid item xs={12}>
                      <Grid item xs={12}>
                      </Grid>
                      <Paper className={classes.paper1}>
                          {
                              customer.map(c => {
                                  return (
                                      <Customer
                                          id={c.id}
                                          image={c.image}
                                          name={c.name}
                                          birthday={c.birthday}
                                          score={c.score} />
                                  )
                              })
                          }
                      </Paper>
                  </Grid>
              </Grid>
          </Grid>
          <div className="row">
              <Link to="/writingroom"> Next room</Link>
          </div>
          <Route path="/writingroom" component={NextPage}/>
      </div>
      )
}

        
class Customer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            setModalIsOpen: false
        };
    }
    render() {
        let setModalClose = () => this.setState({ setModalIsOpen: false });
        return (
            <TableRow>
                <h2 /><img src={this.props.image} width="200" height="200" alt="profile" />
                <h2 /><text style={stly}>{this.props.name}</text>
                <h2 /><text style={stly}>{this.props.birthday}</text>
                <h2 /><text style={stly}>{this.props.score}</text>
                <h2 /><button style={stly} onClick={() => this.setState({ setModalIsOpen: true })}>{this.props.id}</button>
                <ChatInfoModal show={this.state.setModalIsOpen} onHide={setModalClose} />

            </TableRow>
        )
    }
}
class CustomerProfile extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.image} alt="profile" />
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}
class CustomerInfo extends React.Component {
    render() {
        return (
            <div>
                <a marginLeft={3} href="">{this.props.name}</a>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.score}</p>
            </div>
        )
    }
}

export default App;
