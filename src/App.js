import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage.js';
import NextPage from './Pages/NextPage.js';
import DiscussPage from './Pages/Discuss.js'
import MyPage from './Pages/Mainpages/MyPage.js';
import RoomList from './Pages/Mainpages/RoomList.js';
import PublishedList from './Pages/Mainpages/PublishedList.js';

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/writingroom" component={NextPage} />
                    <Route path="/discuss" component={DiscussPage} />
                    <Route path="/mypage" component={MyPage} />
                    <Route path="/roomlist" component={RoomList} />
                    <Route path="/publishlist" component={PublishedList}/>
                </Switch>
            </div>
        );
    }
}

export default App;
