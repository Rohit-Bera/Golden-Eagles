import React, { useState, useEffect } from "react";
import "../Style/signUp.css";
import axios from "axios";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  //child
  const [data, setData] = useState({
    Firstname: "",
    Lastname: "",
    Email: "",
    Username: "",
    Password: null,
  });

  const Referesh = (e) => {
    e.preventDefault();
  };

  const sendUser = async () => {
    try {
      const response = await axios.post("http://localhost:6500/addUser", data);

      console.log("response", response);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const changeName = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <div class="wrap">
      <h2>Sign Up Hear</h2>
      <form onSubmit={Referesh}>
        <input
          type="text"
          placeholder="First Name .. "
          required
          name="Firstname"
          value={data.Firstname}
          onChange={changeName}
        />
        <input
          type="text"
          placeholder="Last Name .. "
          required
          name="Lastname"
          value={data.Lastname}
          onChange={changeName}
        />
        <input
          type="text"
          placeholder="Email .. "
          required
          name="Email"
          value={data.Email}
          onChange={changeName}
        />
        <input
          type="text"
          placeholder="Username .. "
          required
          name="Username"
          value={data.Username}
          onChange={changeName}
        />
        <input
          type="password"
          placeholder="Password .. "
          requed
          name="Password"
          value={data.Password}
          onChange={changeName}
        />
        <Link to="/">
          <input type="submit" value="Submit" onClick={sendUser} />
        </Link>
      </form>
    </div>
  );
};

export default SignUpForm;
