import React from "react";
import "../styles/App.css";

export default function Login() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [gender, setGender] = React.useState("male");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const handleSubmit = (e, name, email, gender, phoneNumber, password) => {
    e.preventDefault();
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
          type="text"
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
    </>
  );
}
