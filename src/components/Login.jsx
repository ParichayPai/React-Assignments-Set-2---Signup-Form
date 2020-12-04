import React from "react";
import "../styles/App.css";

export default function Login() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [gender, setGender] = React.useState("male");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const handleSubmit = (name, email, gender, phoneNumber, password) => {
    const alphanumeric = /^[0-9a-zA-Z ]+$/;
    var digits = /^[0-9]+$/;
    if (
      name === "" ||
      email === "" ||
      phoneNumber === "" ||
      gender === "" ||
      password === ""
    ) {
      setError("All fields are mandatory");
      return;
    }
    if (!name.match(alphanumeric)) {
      setError("Name is not alphanumeric");
      return;
    }
    if (email.indexOf("@") === -1) {
      setError("Email must contain @");
      return;
    }
    if (!gender === "male" || !gender === "female" || !gender === "other") {
      setError("Please identify as male, female or others");
      return;
    }
    if (!phoneNumber.match(digits)) {
      setError("Phone Number must contain only numbers");
      return;
    }
    if (password.length < 6) {
      setError("Password must contain atleast 6 letters");
      return;
    }
    let username = email.substring(0, email.indexOf("@"));
    setName(username);
    setEmail("");
    setGender("male");
    setPassword("");
    setPhoneNumber("");
    setError("");
  };

  return (
    <>
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
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          data-testid="email"
        />
      </label>{" "}
      <br />
      <label>
        Gender{" "}
        <input
          type="text"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          data-testid="gender"
        />
      </label>
      <br />
      <label>
        Phone Number:
        <input
          type="text"
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
      <button
        data-testid="submit"
        onClick={() => handleSubmit(name, email, gender, phoneNumber, password)}
      >
        Submit
      </button>
      {error && <div>{error}</div>}
      {error && name && phoneNumber && email && gender && (
        <div>Hello {name}</div>
      )}
    </>
  );
}
