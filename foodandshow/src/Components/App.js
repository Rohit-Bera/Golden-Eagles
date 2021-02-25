import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router ,Switch ,Route } from 'react-router-dom';
import Header from "./Header";
import LoginForm from "./Login";
import SignUpForm from "./SignUp";


function App() {

    return(
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={Header} />
                    <Route path="/login" exact component={LoginForm} />
                    <Route path="/signUp" exact component={SignUpForm} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;