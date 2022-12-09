import "./login.css";

//Api connect
import React, { useState } from "react";
import axios from "axios";

function BasicExample() {
  //   const url = "http://localhost:3030/users";
  //   const [datos, setDatos] = useState({
  //     username: "",
  //     email: "",
  //     password: "",
  //   });

  //   const handleInputChange = (event) => {
  //     console.log(event.target.value);
  //     setDatos({
  //       ...datos,
  //       [event.target.name]: event.target.value,
  //     });
  //   };

  //   const sendData = (event) => {
  //     event.preventDefault();
  //     axios
  //       .post(url, {
  //         username: datos.username,
  //         email: datos.email,
  //         password: datos.password,
  //       })
  //       .then((response) => {
  //         console.log(response.datos);
  //       });
  //     event.target.reset();
  //   };

  return (
    <section id="contactUs">
      <h2>Contact Us</h2>

      <form action="/" method="POST" className="form" /*onSubmit={sendData}*/>
        <h3 className="form__title">Register</h3>

        <div class="form__container">
          <div class="form__group">
            <input
              type="text"
              id="username"
              name="username"
              className="form__input"
              placeholder=" "
              //onChange={handleInputChange}
              required
            />
            <label for="name" class="form__label">
              User Name:
            </label>
            <span className="form__line"></span>
          </div>
        </div>

        <div class="form__container">
          <div class="form__group">
            <input
              type="text"
              id="email"
              className="form__input"
              placeholder=" "
              required
              name="email"
              //onChange={handleInputChange}
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
              //onChange={handleInputChange}
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
