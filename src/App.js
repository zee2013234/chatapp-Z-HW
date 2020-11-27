import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage.js';
import NextPage from './Pages/NextPage.js';
import DiscussPage from './Pages/Discuss.js'

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" component={HomePage} />
                    <Route path="/writingroom" component={NextPage} />
                    <Route path="/dicuss" component={DiscussPage}/>
                </Switch>
            </div>
        );
    }
}

export default App;
