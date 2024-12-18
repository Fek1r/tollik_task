import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1 className="register-title">Register</h1>
      <section className="input-box">
        <input
          type="text"
          name="username"
          placeholder="Username"
        />
        <i className="bx bxs-user"></i>
      </section>
      <section className="input-box">
        <input
          type="email"
          name="email"
          placeholder="Email"
        />
        <i className="bx bxs-envelope"></i>
      </section>
      <section className="input-box">
        <input
          type="password"
          name="password"
          placeholder="Password"
        />
        <i className="bx bxs-lock-alt"></i>
      </section>
      <section className="input-box">
        <input
          type="password"
          name="confirm-password"
          placeholder="Confirm Password"
        />
        <i className="bx bxs-lock-alt"></i>
      </section>
      <button className="register-button" type="submit">
        Register
      </button>
      <h5 className="already-have-an-account">
        Already have an account?{" "}
        <a href="#">
          <b>Login</b>
        </a>
      </h5>
    </div>
  );
}

export default App;
