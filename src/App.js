import React from "react";
import FromStyle from "./style/FormStyle";

function App() {
  return (

        <FromStyle>
          <h1>Form</h1>
          <input
            id="first-name"
            className="form-field"
            type="text"
            placeholder="First Name"
            name="firstName"
          />
          <input
            id="last-name"
            className="form-field"
            type="text"
            placeholder="Last Name"
            name="lastName"
          />
          <input
            id="email"
            className="form-field"
            type="text"
            placeholder="Email"
            name="email"
          />
          <button className="form-field submit" type="submit">
            Register
          </button>
        </FromStyle>
  );
}

export default App;
