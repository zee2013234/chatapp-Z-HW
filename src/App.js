import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage.js';
import NextPage from './Pages/NextPage.js';
import Head from './Pages/Head.js';
class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" component={HomePage} />
                    <Route path="/writingroom" component={NextPage} />
                    <Route path="/main" component={Head}/>

                </Switch>
            </div>
        );
    }
}

export default App;