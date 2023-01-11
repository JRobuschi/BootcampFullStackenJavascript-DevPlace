import "./login.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function LoginPage() {
  const url = "http://localhost:3060/users/login";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedInApp");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
    }
  }, []);

  const submitLoginUser = async (e) => {
    e.preventDefault();
    try {
      var bodyFormData = {
        email: email,
        password: password,
      };

      const resp = await axios.post(url, bodyFormData);

      setEmail("");
      setPassword("");

      window.localStorage.setItem("loggedInApp", JSON.stringify(resp.data));
      window.location.href = "/store";
    } catch (error) {
      setErrorMessage("Incorrect user or password");
      setTimeout(() => {
        setErrorMessage(null);
      }, 7000);
    }
  };

  return (
    <section id="contactUs">
      <h2>Contact Us</h2>

      <form
        action="/"
        method="POST"
        className="form"
        onSubmit={submitLoginUser}
      >
        <h3 className="form__title">Log In</h3>
        {errorMessage && <h3 className="form__error">{errorMessage}</h3>}
        <p className="form__paragraph">
          You do not have an account?{" "}
          <a href="/register" className="form__link">
            Click here
          </a>
        </p>

        <div class="form__container">
          <div class="form__group">
            <input
              type="text"
              id="email"
              className="form__input"
              placeholder=" "
              required
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label for="user" class="form__label">
              Email:
            </label>
            <span className="form__line"></span>
          </div>
        </div>

        <div class="form__container">
          <div class="form__group">
            <input
              type="password"
              id="password"
              className="form__input"
              placeholder=" "
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label for="password" className="form__label">
              Password:
            </label>
            <span className="form__line"></span>
          </div>
        </div>

        <input type="submit" className="form__submit" value="Enter" />
      </form>
    </section>
  );
}
