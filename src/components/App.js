import React, { Component, useState } from "react";
import "../styles/App.css";

/*
1) Name | data-testid = 'name'
2) Email address | data-testid = 'email'
3) Gender | data-testid = 'gender'
3) Phone Number | data-testid = 'phoneNumber'
4) Password | data-testid = 'password', type='password'
5) Submit button | data-testid = 'submit'
*/

const App = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState({
    "Name Error": "",
    "Email Error": "",
    "Gender Error": "",
    "Phone Number Error": "",
    "Password Error": ""
  });

  const handleSubmit = (e, name, email, gender, phoneNumber, password) => {
    e.preventDefault();
  };
  return (
    <div id="main">
      <form
        onSubmit={() =>
          handleSubmit(name, email, gender, phoneNumber, password)
        }
      >
        <label>Name:</label>{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          data-testid="name"
        />
        <br />
        <label>
          Email address:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            data-testid="email"
          />
        </label>{" "}
        <br />
        <label>
          Gender{" "}
          <select>
            <option value="male" selected>
              male
            </option>
            <option value="female">female</option>
            <option value="other">other</option>
          </select>
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            data-testid="phoneNumber"
          />
        </label>{" "}
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            data-testid="password"
          />
        </label>
        <br />
        <input type="submit" value="Submit" data-testid="submit" />
      </form>
    </div>
  );
};

export default App;
