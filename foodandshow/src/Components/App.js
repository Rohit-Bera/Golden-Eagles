import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import LoginForm from "./Login";
import SignUpForm from "./SignUp";
import Feedback from "./Feedback";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Header} />
          <Route path="/login" exact component={LoginForm} />
          <Route path="/signUp" exact component={SignUpForm} />
          <Route path="/feedBack" exact component={Feedback} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
