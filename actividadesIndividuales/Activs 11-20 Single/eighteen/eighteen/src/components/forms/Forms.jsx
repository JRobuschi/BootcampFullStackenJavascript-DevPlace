import "./Forms.css";
import React, { useState } from "react";
import axios from "axios";

function BasicExample() {
  const url = "http://localhost:3030/users/login";
  const [datos, setDatos] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const sendData = (event) => {
    event.preventDefault();
    axios
      .post(url, {
        email: datos.email,
        password: datos.password,
      })
      .then((response) => {
        console.log(response.datos);
      });
  };
  return (
    <section id="contactUs">
      <h2>Contact Us</h2>

      <form action="/" method="POST" className="form" onSubmit={sendData}>
        <h3 className="form__title">Inicia Sesión</h3>
        <p className="form__paragraph">
          No tienes una cuentas?{" "}
          <a href="/register" className="form__link">
            Entra aquí
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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

export default BasicExample;
