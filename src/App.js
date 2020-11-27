import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage.js';
import NextPage from './Pages/NextPage.js';
import DiscussPage from './Pages/Discuss.js'
import MyPage from './Pages/Mainpages/MyPage.js';

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/writingroom" component={NextPage} />
                    <Route path="/discuss" component={DiscussPage} />
                    <Route path="/mypage" component={MyPage}/>
                </Switch>
            </div>
        );
    }
}

export default App;
