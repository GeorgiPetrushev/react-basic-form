import React, { useEffect, useState } from "react";
import FromStyle from "./style/FormStyle";

function App() {
  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const [submit, setSubmit] = useState(false);

  const inputChangeFistName = (e) => {
    setFormValue({ ...formValue, firstName: e.target.value });
  };
  const inputChangeLastName = (e) => {
    setFormValue({ ...formValue, lastName: e.target.value });
  };
  const inputChangeEmail = (e) => {
    setFormValue({ ...formValue, email: e.target.value });
  };
  const inputChangePhoneNumber = (e) => {
    setFormValue({ ...formValue, phoneNumber: e.target.value });
  };

  useEffect(() => {
    console.log(submit);
  }, [submit]);

  const runSubmit = (e) => {
    e.preventDefault();
    if (formValue.firstName && formValue.lastName && formValue.email) {
      setSubmit(!submit);
      setTimeout(() => {
        setSubmit((prev) => {
          return !prev;
        });
      }, 1500);
      setFormValue({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
      });
    } else if(!formValue.firstName){
      alert("Please enter you first name.");
      
    }
    else if(!formValue.lastName)
    {
      alert("Please enter your lase name.")
    }
    else if(!formValue.email){
      alert("Please enter your email")
    }
  };

  return (
    <FromStyle onSubmit={runSubmit}>
      <h1>Form</h1>
      {submit ? (
        <div className="form-register">Thank you for registering!</div>
      ) : (
        <div className="empty-form-register"> </div>
      )}

      <div className="forms">
        <input
          onChange={inputChangeFistName}
          value={formValue.firstName}
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name*"
          name="firstName"
        />
        {!formValue.firstName ? (
          <p className="paragraph">Please enter your First Name</p>
        ) : (
          <p className="empty-paragraph"> </p>
        )}

        <input
          onChange={inputChangeLastName}
          value={formValue.lastName}
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name*"
          name="lastName"
        />
        {!formValue.lastName ? (
          <p className="paragraph">Please enter your Last Name</p>
        ) : (
          <p className="empty-paragraph"> </p>
        )}

        <input
          onChange={inputChangeEmail}
          value={formValue.email}
          id="email"
          className="form-field"
          type="text"
          placeholder="Email*"
          name="email"
        />
        {!formValue.email ? (
          <p className="paragraph">Please enter your email</p>
        ) : (
          <p className="empty-paragraph"> </p>
        )}

        <input
          onChange={inputChangePhoneNumber}
          value={formValue.phoneNumber}
          id="phone"
          className="form-field"
          type="tel"
          placeholder="Phone (optional)"
          name="phone"
        />
      </div>

      <button className="form-field submit" type="submit">
        Register
      </button>
    </FromStyle>
  );
}

export default App;
