import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage.js';
import NextPage from './Pages/NextPage.js';
class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/writingroom" component={NextPage} />

                </Switch>
            </div>
        );
    }
}

export default App;