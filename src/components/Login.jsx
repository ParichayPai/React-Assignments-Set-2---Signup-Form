// import React from "react";
// import "../styles/App.css";

// export default function Login() {
//   const [name, setName] = React.useState("");
//   const [email, setEmail] = React.useState("");
//   const [gender, setGender] = React.useState("male");
//   const [phoneNumber, setPhoneNumber] = React.useState("");
//   const [password, setPassword] = React.useState("");
//   const [error, setError] = React.useState("");

//   const handleSubmit = (name, email, gender, phoneNumber, password) => {
//     const alphanumeric = /^[0-9a-zA-Z ]+$/;
//     var digits = /^[0-9]+$/;
//     if (
//       name === "" ||
//       email === "" ||
//       phoneNumber === "" ||
//       gender === "" ||
//       password === ""
//     ) {
//       setError("All fields are mandatory");
//       return;
//     }
//     if (!name.match(alphanumeric)) {
//       setError("Name is not alphanumeric");
//       return;
//     }
//     if (email.indexOf("@") === -1) {
//       setError("Email must contain @");
//       return;
//     }
//     if (!gender === "male" || !gender === "female" || !gender === "other") {
//       setError("Please identify as male, female or others");
//       return;
//     }
//     if (!phoneNumber.match(digits)) {
//       setError("Phone Number must contain only numbers");
//       return;
//     }
//     if (password.length < 6) {
//       setError("Password must contain atleast 6 letters");
//       return;
//     }
//     let username = email.substring(0, email.indexOf("@"));
//     setName(username);
//     setEmail("");
//     setGender("male");
//     setPassword("");
//     setPhoneNumber("");
//     setError("");
//   };

//   return (
//     <>
//       <label>Name:</label>{" "}
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         data-testid="name"
//       />
//       <br />
//       <label>
//         Email address:
//         <input
//           type="text"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           data-testid="email"
//         />
//       </label>{" "}
//       <br />
//       <label>
//         Gender{" "}
//         <input
//           type="text"
//           value={gender}
//           onChange={(e) => setGender(e.target.value)}
//           data-testid="gender"
//         />
//       </label>
//       <br />
//       <label>
//         Phone Number:
//         <input
//           type="text"
//           value={phoneNumber}
//           onChange={(e) => setPhoneNumber(e.target.value)}
//           data-testid="phoneNumber"
//         />
//       </label>{" "}
//       <br />
//       <label>
//         Password:
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           data-testid="password"
//         />
//       </label>
//       <br />
//       <button
//         data-testid="submit"
//         onClick={() => handleSubmit(name, email, gender, phoneNumber, password)}
//       >
//         Submit
//       </button>
//       {error && <div>{error}</div>}
//       {error && name && phoneNumber && email && gender && (
//         <div>Hello {name}</div>
//       )}
//     </>
//   );
// }

import React from "react";
import "../styles/App.css";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      gender: "male",
      phNo: "",
      password: "",
      errorMessage: "",
      userName: ""
    };
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePhoneNoChange = (event) => {
    this.setState({ phNo: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleChangeValue = (event) => {
    this.setState({ gender: event.target.value });
  };

  handleSubmit = () => {
    const alphanumeric = /^[0-9a-zA-Z ]+$/;
    const numbers = /^\d+$/;
    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.phNo === "" ||
      this.state.gender === "" ||
      this.state.password === ""
    ) {
      this.setState({ errorMessage: "All fields are mandatory", userName: "" });
      return;
    }
    if (!this.state.name.match(alphanumeric)) {
      this.setState({ errorMessage: "Name is not alphanumeric", userName: "" });
      return;
    }
    if (this.state.email.indexOf("@") < 1) {
      this.setState({ errorMessage: "Email must contain @", userName: "" });
      return;
    }

    if (!this.state.gender) {
      this.setState({
        errorMessage: "Please identify as male, female or others",
        userName: ""
      });
      return;
    }
    if (!numbers.test(this.state.phNo)) {
      this.setState({
        errorMessage: "Phone Number must contain only numbers",
        userName: ""
      });
      return;
    }
    if (this.state.password.length < 6) {
      this.setState({
        errorMessage: "Password must contain atleast 6 letters",
        userName: ""
      });
      return;
    }
    const user = this.state.email.substring(0, this.state.email.indexOf("@"));
    this.setState({
      userName: user,
      errorMessage: "",
      name: "",
      email: "",
      gender: "male",
      phNo: "",
      password: ""
    });
  };

  render() {
    return (
      <>
        {this.state.errorMessage && <div>{this.state.errorMessage}</div>}
        {this.state.userName && <div>Hello {this.state.userName}</div>}
        <input
          data-testid="name"
          type="text"
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <input
          data-testid="email"
          type="text"
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />
        <input
          data-testid="gender"
          type="text"
          name="gender"
          value={this.state.gender}
          onChange={this.handleChangeValue}
        />
        <input
          data-testid="phoneNumber"
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={this.state.phNo}
          onChange={this.handlePhoneNoChange}
        />
        <input
          data-testid="password"
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
        />
        <button data-testid="submit" onClick={this.handleSubmit}>
          Submit
        </button>
      </>
    );
  }
}
