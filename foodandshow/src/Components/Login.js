import React, { useState, useEffect } from "react";
import "../Style/loginStyle.css";
import SignUpForm from "./SignUp";
import Header from "./Header";
import {
  Link,
  link,
  useHistory,
  useRouteMatch,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import axios from "axios";
//parent

const LoginForm = () => {
  const [person, setPerson] = useState([]);

  const [field, setField] = useState({
    Username: "",
    Password: null,
  });

  useEffect(() => {
    receiveData();
  }, []);

  // const location = useLocation();
  // // console.log(location);

  const history = useHistory();

  const receiveData = async () => {
    try {
      const receive = await axios.get("http://localhost:6500/getUser");
      setPerson(receive.data);
    } catch (error) {
      console.log("error: ", error);
    }
  };
  // console.log("person is :", person);
  // console.log("field is :", field);

  const formName = (e) => {
    const { name, value } = e.target;
    setField({ ...field, [name]: value });
  };

  const loggedIn = () => {
    console.log("person is: in function ", person);
    receiveData();

    // console.log("field is : ", field);
    var num;
    var result = person.filter((item) => {
      return item.Username == field.Username && item.Password == field.Password;
    });

    console.log("result", result);
    if (result.length == 0) {
      console.log("not in database");
      alert("please enter correct login details");
    } else {
      console.log("it is in database");
      history.push("/");
    }
  };

  const Referesh = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={(e) => Referesh(e)}>
        <div className="login-box">
          <h1>Login</h1>
          <div className="textbox">
            <i className="fa fa-user" aria-hidden="true"></i>
            <input
              type="text"
              placeholder="username"
              name="Username"
              value={field.Username}
              onChange={formName}
              required
            />
          </div>
          <div className="textbox">
            <i class="fa fa-lock" aria-hidden="true"></i>
            <input
              type="Password"
              placeholder="Password"
              name="Password"
              value={field.Password}
              onChange={formName}
              required
            />
          </div>
          <button className="btn" onClick={loggedIn}>
            Sign IN
          </button>
          <Link to="/signUp">
            <button className="btn">Create New Account</button>
          </Link>
          <div></div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
